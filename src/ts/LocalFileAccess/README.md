# LocalFileAccess Testing Guide

## Target Function

- getMachineNameFromLocalAgent
- invokeMachineNameApi

File:

- LocalFileAccess.ts

## Preconditions

1. Local agent service is running on `127.0.0.1:9527`.
2. API token is configured in request header:
   - `X-AGENT-TOKEN: autogc-agent-local-dev`

## Method 1: Direct API test (PowerShell)

Run in project root:

```powershell
$headers = @{ "X-AGENT-TOKEN" = "autogc-agent-local-dev" }
$response = Invoke-RestMethod -Uri "http://127.0.0.1:9527/api/agent/machine-name" -Method Get -Headers $headers
$response
```

Expected:

- Response returns machine name text, or an object containing one of: `machineName` / `name` / `data`.

## Method 2: Direct function call test in app code

You can add a temporary call in a startup location (for example `src/main.ts`), then remove it after testing.

```ts
import { invokeMachineNameApi } from './ts/LocalFileAccess/LocalFileAccess';

invokeMachineNameApi()
  .then((name) => {
    console.log('local machine name:', name);
  })
  .catch((err) => {
    console.error('machine-name api failed:', err);
  });
```

Then run:

```bash
pnpm dev
```

Check browser console output.

## Method 3: Run with your exact function snippet

You can place the exact function below in `src/ts/LocalFileAccess/LocalFileAccess.ts` and call it from `src/main.ts`.

```ts
export async function invokeMachineNameApi(): Promise<string> {
  const machineName = await getMachineNameFromLocalAgent();
  return machineName;
}
```

Call it:

```ts
import { invokeMachineNameApi } from './ts/LocalFileAccess/LocalFileAccess';

const machineName = await invokeMachineNameApi();
console.log('local machine name:', machineName);
```

If your environment does not support top-level await, use:

```ts
invokeMachineNameApi().then((machineName) => {
  console.log('local machine name:', machineName);
});
```

## Notes

- If you see `401/403`, check `X-AGENT-TOKEN` value.
- If you see network error, confirm local service port `9527` is reachable.
- If response shape changes, update parsing logic in `getMachineNameFromLocalAgent`.
