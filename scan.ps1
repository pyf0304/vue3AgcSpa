$files = Get-ChildItem -Path "src/ts/L3ForWApiEx/**/*.ts" -Recurse
$results = @()
$totalCount = 0

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    # Broaden regex to find function name and then extract body separately
    $pattern = "(?s)(/\*\*?.*?\*/\s*)?export\s+async\s+function\s+(\w+Ex_GetObjExLstByPagerAsync)\s*\("
    $matches = [System.Text.RegularExpressions.Regex]::Matches($content, $pattern)
    
    foreach ($m in $matches) {
        $totalCount++
        $comment = $m.Groups[1].Value
        $funcName = $m.Groups[2].Value
        
        # Simple string search in content after the match for Mode classification
        # We search a window of 1000 characters after the function signature
        $startPos = $m.Index + $m.Length
        $searchWindow = $content.Substring($startPos, [Math]::Min(1000, $content.Length - $startPos))
        
        $mode = "Unknown"
        if ($searchWindow -match "GetObjLstByPagerAsync\s*\(\s*objPagerPara\s*\)") { $mode = "Mode A" }
        elseif ($searchWindow -match "GetObjLstAsync\s*\(\s*objPagerPara\.whereCond\s*\)") { $mode = "Mode B" }
        
        $hasMarker = ($comment.Contains("分页与排序模式说明") -or $comment.Contains("Paging/Sorting Mode"))
        
        if ($results.Count -lt 20) {
            $results += [PSCustomObject]@{
                Path = $file.FullName.Substring("E:\Vue3Prj\vue3AgcSpa\".Length)
                Mode = $mode
                HasMarker = $hasMarker
            }
        }
    }
}
Write-Output "TOTAL:$totalCount"
$results | ForEach-Object { "$($_.Path) | $($_.Mode) | $($_.HasMarker)" }
