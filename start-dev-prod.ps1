# Start Vite dev server (--mode production), then open browser after port is ready.
# Usage: npm run dev:prod:auto

Set-Location $PSScriptRoot

$port = 8099
$url  = "http://localhost:$port/"

# 1. Kill any process already listening on the port
$listeners = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
if ($listeners) {
    $ownerIds = $listeners | Select-Object -ExpandProperty OwningProcess -Unique
    $ownerIds | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }
    Write-Host "Cleared processes on port $port"
    Start-Sleep -Milliseconds 400
}

# 2. Background job: poll until port is ready, then open browser
$openBrowserJob = Start-Job -ScriptBlock {
    param($targetPort, $targetUrl)
    $deadline = (Get-Date).AddSeconds(40)
    while ((Get-Date) -lt $deadline) {
        $conn = Get-NetTCPConnection -LocalPort $targetPort -State Listen -ErrorAction SilentlyContinue
        if ($conn) {
            Start-Sleep -Milliseconds 600
            Start-Process $targetUrl
            break
        }
        Start-Sleep -Milliseconds 400
    }
} -ArgumentList $port, $url

Write-Host "Starting Vite dev server --mode production on port $port ..."
Write-Host "Browser will open automatically once ready: $url"
Write-Host ""

# 3. Run Vite in foreground (Ctrl+C to stop)
npm run dev:production

# 4. Cleanup background job on exit
Remove-Job -Job $openBrowserJob -Force -ErrorAction SilentlyContinue
