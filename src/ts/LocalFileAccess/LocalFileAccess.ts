import axios from 'axios';
import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { UserCodePath_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsUserCodePathWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { useUserCodeRootPathStore } from '@/store/modules/userCodeRootPath';

const LOCAL_AGENT_BASE_URL = import.meta.env.DEV ? '/agent-local' : 'http://127.0.0.1:9527';
const MACHINE_NAME_API_URL = `${LOCAL_AGENT_BASE_URL}/api/agent/machine-name`;
const LOCAL_FILE_WRITE_URL = `${LOCAL_AGENT_BASE_URL}/api/agent/files/write`;
const LOCAL_FILE_EXISTS_IN_ROOT_URL = `${LOCAL_AGENT_BASE_URL}/api/agent/files/exists-in-root`;
const AGENT_LOCAL_TOKEN_ENV = ((import.meta as any)?.env?.VITE_AGENT_LOCAL_TOKEN as string) ?? '';
const AGENT_LOCAL_TOKEN =
  IsNullOrEmpty(AGENT_LOCAL_TOKEN_ENV) == true ? 'change-me' : AGENT_LOCAL_TOKEN_ENV.trim();
const MACHINE_NAME_API_HEADERS = { 'X-AGENT-TOKEN': AGENT_LOCAL_TOKEN };
const MACHINE_NAME_CACHE_KEY = 'agcMachineName';
const LOCAL_ACCESS_LOG_KEY = 'agcLocalFileAccessLogs';
const LOCAL_ACCESS_LOG_MAX_COUNT = 200;
const LOCAL_ACCESS_LOG_FILE_PATH = 'log/agc-local-access.log';
let glbLastRootResolveErrorMsg = '';
const LOCAL_CODE_ROOT_KEYS = [
  'agcLocalCodeRootPath',
  'AGC_LOCAL_CODE_ROOT_PATH',
  'currSelPrjPath',
  'projectPath',
];

type MachineNameResponse =
  | string
  | {
      machineName?: string;
      name?: string;
      data?: unknown;
      success?: boolean;
      message?: string;
      errorCode?: string | null;
    };

type LocalAccessLogLevel = 'info' | 'warn' | 'error';

export type LocalAccessLogEntry = {
  time: string;
  level: LocalAccessLogLevel;
  func: string;
  phase: 'call' | 'result';
  data: Record<string, unknown>;
};

// 读取并兼容解析本地日志数组。
function readLocalAccessLogArray(): Array<LocalAccessLogEntry> {
  const raw = localStorage.getItem(LOCAL_ACCESS_LOG_KEY);
  if (IsNullOrEmpty(raw) == true) return [];

  try {
    const parsed = JSON.parse(raw as string);
    if (Array.isArray(parsed) == true) {
      return parsed as Array<LocalAccessLogEntry>;
    }

    const arrFromLogs = (parsed as any)?.logs;
    if (Array.isArray(arrFromLogs) == true) {
      return arrFromLogs as Array<LocalAccessLogEntry>;
    }
    return [];
  } catch (e) {
    // 旧数据或脏数据导致 JSON 解析失败时，清理后允许后续日志重新写入。
    console.warn('readLocalAccessLogArray parse warning:', e);
    localStorage.removeItem(LOCAL_ACCESS_LOG_KEY);
    return [];
  }
}

// 按函数名筛选日志；找不到精确匹配时回退包含匹配。
export function getLocalFileAccessLogs(strFuncName?: string): Array<LocalAccessLogEntry> {
  try {
    const arrLog = readLocalAccessLogArray();
    const strFuncNameRaw = strFuncName ?? '';
    if (IsNullOrEmpty(strFuncNameRaw) == true) return arrLog;

    const strFuncName2 = strFuncNameRaw.trim().toLowerCase();
    const arrExact = arrLog.filter(
      (x) =>
        String(x.func ?? '')
          .trim()
          .toLowerCase() === strFuncName2,
    );
    if (arrExact.length > 0) return arrExact;

    // 兼容历史版本函数名微调导致的筛选不到问题。
    return arrLog.filter((x) =>
      String(x.func ?? '')
        .trim()
        .toLowerCase()
        .includes(strFuncName2),
    );
  } catch (e) {
    console.warn('getLocalFileAccessLogs warning:', e);
    return [];
  }
}

// 返回固定日志文件路径。
export function getLocalAccessLogFilePath(): string {
  return LOCAL_ACCESS_LOG_FILE_PATH;
}

// 将最近日志格式化为可落盘的纯文本。
export function getLocalFileAccessRecentLogText(intCount = 200, strFuncName?: string): string {
  const intCountSafe = Number.isFinite(intCount) ? Math.max(1, Math.floor(intCount)) : 200;
  const arrLog = getLocalFileAccessRecentLogs(intCountSafe, strFuncName);
  const strNow = new Date().toISOString();
  if (arrLog.length === 0) {
    return `# AGC Local Access Logs\n# GeneratedAt: ${strNow}\n# Count: 0\n`;
  }

  const arrLine = arrLog.map((x, idx) => {
    const strData = JSON.stringify(x.data ?? {});
    return `${idx + 1}. [${x.time}] [${x.level}] [${x.func}] [${x.phase}] ${strData}`;
  });

  return [
    '# AGC Local Access Logs',
    `# GeneratedAt: ${strNow}`,
    `# Count: ${arrLog.length}`,
    ...arrLine,
    '',
  ].join('\n');
}

// 将最近日志覆盖写入固定日志文件。
export async function syncLocalFileAccessLogsToFile(
  intCount = 500,
  strFuncName?: string,
): Promise<{ isSuccess: boolean; msg: string }> {
  const strLogText = getLocalFileAccessRecentLogText(intCount, strFuncName);
  try {
    const response = await axios.post(
      LOCAL_FILE_WRITE_URL,
      {
        path: LOCAL_ACCESS_LOG_FILE_PATH,
        content: strLogText,
        overwrite: true,
        encodingName: 'utf-8',
      },
      {
        headers: {
          'X-AGENT-TOKEN': AGENT_LOCAL_TOKEN,
          'Content-Type': 'application/json',
        },
      },
    );
    const strSavedPath = (response?.data as any)?.data?.path ?? LOCAL_ACCESS_LOG_FILE_PATH;
    return { isSuccess: true, msg: `日志已写入:${strSavedPath}` };
  } catch (e: any) {
    const strErrMsg = e?.response?.data?.errorMsg ?? e?.message ?? '写入日志文件失败';
    return { isSuccess: false, msg: `写入日志文件失败:${strErrMsg}` };
  }
}

// 记录一次 UI 点击轨迹并立即同步日志文件。
export async function traceUiClickAndSyncLocalAccessLog(
  strAction: string,
  data?: Record<string, unknown>,
): Promise<{ isSuccess: boolean; msg: string }> {
  const strAction2 = IsNullOrEmpty(strAction) == true ? 'unknown-action' : strAction.trim();
  logLocalAccess('info', 'uiClickTrace', 'call', {
    action: strAction2,
    ...(data ?? {}),
  });
  return await syncLocalFileAccessLogsToFile(500);
}

// 获取最近 N 条日志。
export function getLocalFileAccessRecentLogs(
  intCount = 20,
  strFuncName?: string,
): Array<LocalAccessLogEntry> {
  const arrLog = getLocalFileAccessLogs(strFuncName);
  const intCountSafe = Number.isFinite(intCount) ? Math.max(0, Math.floor(intCount)) : 20;
  if (intCountSafe === 0) return [];
  if (arrLog.length <= intCountSafe) return arrLog;
  return arrLog.slice(arrLog.length - intCountSafe);
}

// 获取最近 N 分钟日志。
export function getLocalFileAccessLogsByRecentMinutes(
  intMinutes = 5,
  strFuncName?: string,
): Array<LocalAccessLogEntry> {
  const arrLog = getLocalFileAccessLogs(strFuncName);
  const intMinutesSafe = Number.isFinite(intMinutes) ? Math.max(0, Math.floor(intMinutes)) : 5;
  if (intMinutesSafe === 0) return [];

  const dtStart = Date.now() - intMinutesSafe * 60 * 1000;
  return arrLog.filter((x) => {
    const dtLog = Date.parse(x.time);
    if (Number.isNaN(dtLog)) return false;
    return dtLog >= dtStart;
  });
}

// 清空全部日志或指定函数日志。
export function clearLocalFileAccessLogs(strFuncName?: string): number {
  try {
    const arrLog = getLocalFileAccessLogs();
    if (arrLog.length === 0) return 0;

    const strFuncNameRaw = strFuncName ?? '';
    if (IsNullOrEmpty(strFuncNameRaw) == true) {
      localStorage.removeItem(LOCAL_ACCESS_LOG_KEY);
      return arrLog.length;
    }

    const strFuncName2 = strFuncNameRaw.trim().toLowerCase();
    const arrKeep = arrLog.filter((x) => x.func.toLowerCase() !== strFuncName2);
    const intRemoved = arrLog.length - arrKeep.length;
    if (arrKeep.length === 0) {
      localStorage.removeItem(LOCAL_ACCESS_LOG_KEY);
      return intRemoved;
    }

    localStorage.setItem(LOCAL_ACCESS_LOG_KEY, JSON.stringify(arrKeep));
    return intRemoved;
  } catch (e) {
    console.warn('clearLocalFileAccessLogs warning:', e);
    return 0;
  }
}

// 压缩过长字段，避免日志膨胀。
function toLoggableValue(value: unknown): unknown {
  if (value == null) return value;
  if (typeof value === 'string') {
    if (value.length < 100) return value;
    return `[string length=${value.length}]`;
  }
  if (typeof value === 'number' || typeof value === 'boolean') return value;

  try {
    const strJson = JSON.stringify(value);
    if (strJson.length < 100) return value;
    return `[json length=${strJson.length}]`;
  } catch {
    return `[${typeof value}]`;
  }
}

// 将对象每个字段转换为可安全记录的值。
function toLoggableMap(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  Object.keys(obj).forEach((key) => {
    result[key] = toLoggableValue(obj[key]);
  });
  return result;
}

// 追加日志到 localStorage，并同步输出到控制台。
function pushLocalAccessLog(entry: LocalAccessLogEntry): void {
  try {
    const arrLog = readLocalAccessLogArray();
    arrLog.push(entry);
    if (arrLog.length > LOCAL_ACCESS_LOG_MAX_COUNT) {
      arrLog.splice(0, arrLog.length - LOCAL_ACCESS_LOG_MAX_COUNT);
    }
    localStorage.setItem(LOCAL_ACCESS_LOG_KEY, JSON.stringify(arrLog));
  } catch (e) {
    console.warn('pushLocalAccessLog warning:', e);
  }

  const strMsg = `[LocalFileAccess][${entry.func}][${entry.phase}]`;
  if (entry.level === 'error') {
    console.error(strMsg, entry.data);
    return;
  }
  if (entry.level === 'warn') {
    console.warn(strMsg, entry.data);
    return;
  }
  console.log(strMsg, entry.data);
}

// 统一日志入口。
function logLocalAccess(
  level: LocalAccessLogLevel,
  func: string,
  phase: 'call' | 'result',
  data: Record<string, unknown>,
): void {
  pushLocalAccessLog({
    time: formatLocalDateTime(new Date()),
    level,
    func,
    phase,
    data: toLoggableMap(data),
  });
}

// 将日期格式化为本地时间字符串：YYYY-MM-DD HH:mm:ss。
function formatLocalDateTime(dt: Date): string {
  const year = dt.getFullYear();
  const month = String(dt.getMonth() + 1).padStart(2, '0');
  const day = String(dt.getDate()).padStart(2, '0');
  const hour = String(dt.getHours()).padStart(2, '0');
  const minute = String(dt.getMinutes()).padStart(2, '0');
  const second = String(dt.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// 从多种返回结构中提取机器名。
function pickMachineNameFromUnknown(value: unknown): string {
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value).trim();
  if (value == null || typeof value !== 'object') return '';

  const obj = value as Record<string, unknown>;
  const directName = obj.machineName ?? obj.name;
  if (typeof directName === 'string') return directName.trim();

  if ('data' in obj) {
    const nestedName = pickMachineNameFromUnknown(obj.data);
    if (IsNullOrEmpty(nestedName) == false) return nestedName;
  }
  return '';
}

// 调用本地 agent 获取机器名。
export async function getMachineNameFromLocalAgent(bolForceRefresh = false): Promise<string> {
  const strCachedMachineName = (localStorage.getItem(MACHINE_NAME_CACHE_KEY) ?? '').trim();
  if (bolForceRefresh == false && IsNullOrEmpty(strCachedMachineName) == false) {
    logLocalAccess('info', 'getMachineNameFromLocalAgent', 'result', {
      machineName: strCachedMachineName,
      fromCache: true,
    });
    return strCachedMachineName;
  }

  logLocalAccess('info', 'getMachineNameFromLocalAgent', 'call', {
    url: MACHINE_NAME_API_URL,
  });
  const response = await axios.get<MachineNameResponse>(MACHINE_NAME_API_URL, {
    headers: MACHINE_NAME_API_HEADERS,
  });
  const strMachineName = pickMachineNameFromUnknown(response.data);
  if (IsNullOrEmpty(strMachineName) == false) {
    localStorage.setItem(MACHINE_NAME_CACHE_KEY, strMachineName);
  }
  logLocalAccess('info', 'getMachineNameFromLocalAgent', 'result', {
    machineName: strMachineName,
    fromCache: false,
  });
  return strMachineName;
}

// 清理机器名缓存。
export function clearMachineNameCache(): void {
  localStorage.removeItem(MACHINE_NAME_CACHE_KEY);
}

// 强制刷新机器名（跳过缓存，重新请求本地 agent）。
export async function refreshMachineNameFromLocalAgent(): Promise<string> {
  clearMachineNameCache();
  return await getMachineNameFromLocalAgent(true);
}

// 兼容旧调用方式的机器名接口。
export async function invokeMachineNameApi(): Promise<string> {
  const machineName = await getMachineNameFromLocalAgent();
  return machineName;
}

export type LocalFileWriteResult = { isSuccess: boolean; msg: string };

type PrepareWriteContextOk = {
  bolOverwrite: boolean;
  strMachineName: string;
  strTargetPath: string;
};

type FlowStepResult<TData> = { ok: true; data: TData } | { ok: false; error: LocalFileWriteResult };

type PrepareWriteContextResult = FlowStepResult<PrepareWriteContextOk>;

type ResolvedWriteAttemptData = {
  result: LocalFileWriteResult;
  needFallbackToWorkspace: boolean;
};

type ResolvedWriteAttemptResult = FlowStepResult<ResolvedWriteAttemptData>;

// 写文件主流程：校验、解析、存在性检查、写入与回退。
export async function tryWriteCodeToLocalFile(
  intApplicationTypeId: number,
  strCodeTypeId: string,
  strFilePath: string,
  strCodeText: string,
  bolIsViewShare = false,
): Promise<LocalFileWriteResult> {
  // 1) 记录入口参数，便于在页面日志中回溯一次完整调用。
  logLocalAccess('info', 'tryWriteCodeToLocalFile', 'call', {
    intApplicationTypeId,
    strCodeTypeId,
    strFilePath,
    strCodeText,
  });

  // 2) 基础入参校验。
  const validateResult = validateTryWriteInput(strFilePath, strCodeText);
  if (validateResult.ok == false) return validateResult.error;

  // 3) 准备写入上下文（覆盖策略、机器名、绝对目标路径）。
  const prepareResult = await prepareTryWriteContext(
    intApplicationTypeId,
    strCodeTypeId,
    strFilePath,
    bolIsViewShare,
  );
  if (prepareResult.ok == false) return prepareResult.error;

  const { bolOverwrite, strTargetPath } = prepareResult.data;

  // 4) 不可覆盖场景先检查目标是否已存在，避免误写。
  const strFileNameOnly = getBaseName(normalizePath(strFilePath));
  const existsCheckResult = await checkExistsBeforeWriteWhenNoOverwrite(
    bolOverwrite,
    strTargetPath,
    strFileNameOnly,
  );
  if (existsCheckResult.ok == false) return existsCheckResult.error;

  // 5) 先按绝对路径写；若服务拒绝工作区外路径，再回退到工作区相对路径。
  const objHeaders = getWriteHeaders();
  const resolvedWriteResult = await tryWriteByResolvedPath(
    strTargetPath,
    strCodeText,
    bolOverwrite,
    objHeaders,
  );
  if (resolvedWriteResult.ok == false) return resolvedWriteResult.error;
  if (resolvedWriteResult.data.needFallbackToWorkspace == false) {
    return resolvedWriteResult.data.result;
  }

  return tryWriteByWorkspacePath(strTargetPath, strFilePath, strCodeText, bolOverwrite, objHeaders);
}

// 统一构造写文件失败结果并记录日志。
function buildTryWriteFailResult(
  msg: string,
  level: 'warn' | 'error' = 'warn',
  detail?: Record<string, unknown>,
): LocalFileWriteResult {
  const result: LocalFileWriteResult = { isSuccess: false, msg };
  const data = detail == null ? result : { ...result, ...detail };
  logLocalAccess(level, 'tryWriteCodeToLocalFile', 'result', data);
  return result;
}

// 校验写入必要参数。
function validateTryWriteInput(strFilePath: string, strCodeText: string): FlowStepResult<null> {
  if (IsNullOrEmpty(strFilePath) == true) {
    const result = buildTryWriteFailResult('返回文件路径为空，无法写入本地文件');
    return { ok: false, error: result };
  }
  if (IsNullOrEmpty(strCodeText) == true) {
    const result = buildTryWriteFailResult('代码内容为空，无法写入本地文件');
    return { ok: false, error: result };
  }
  return { ok: true, data: null };
}

// 准备写入上下文（覆盖策略、机器名、绝对目标路径）。
async function prepareTryWriteContext(
  intApplicationTypeId: number,
  strCodeTypeId: string,
  strFilePath: string,
  bolIsViewShare: boolean,
): Promise<PrepareWriteContextResult> {
  const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
  const bolOverwrite = objCodeType?.isDefaultOverride ?? false;
  const strMachineName = (await getMachineNameFromLocalAgent()).trim();
  if (IsNullOrEmpty(strMachineName) == true) {
    const result = buildTryWriteFailResult('当前机器名为空，禁止写入本地文件');
    return { ok: false, error: result };
  }

  const strTargetPath = await resolveWritePath(
    intApplicationTypeId,
    strCodeTypeId,
    strFilePath,
    strMachineName,
    bolIsViewShare,
  );
  if (isAbsolutePath(strTargetPath) == false) {
    const strRootErr = IsNullOrEmpty(glbLastRootResolveErrorMsg)
      ? ''
      : `, rootErr:${glbLastRootResolveErrorMsg}`;
    const result = buildTryWriteFailResult(
      Format(
        '未获取到绝对根目录，禁止写入本地文件。machineName:{0}, codeTypeId:{1}, applicationTypeId:{2}, 原始路径:{3}, 解析路径:{4}{5}',
        strMachineName,
        strCodeTypeId,
        intApplicationTypeId,
        strFilePath,
        strTargetPath,
        strRootErr,
      ),
    );
    return { ok: false, error: result };
  }

  return {
    ok: true,
    data: {
      bolOverwrite,
      strMachineName,
      strTargetPath,
    },
  };
}

// 不可覆盖场景下执行 exists-in-root 前置检查。
async function checkExistsBeforeWriteWhenNoOverwrite(
  bolOverwrite: boolean,
  strTargetPath: string,
  strFilePath: string,
): Promise<FlowStepResult<null>> {
  if (bolOverwrite == true) return { ok: true, data: null };

  const objExistsParam = buildExistsInRootParams(strTargetPath, strFilePath);
  if (objExistsParam == null) {
    const result = buildTryWriteFailResult(
      Format(
        '不可覆盖模式下，无法构造存在性检查参数。原始路径:{0}, 解析路径:{1}',
        strFilePath,
        strTargetPath,
      ),
    );
    return { ok: false, error: result };
  }

  logLocalAccess('info', 'tryWriteCodeToLocalFile', 'call', {
    existsCheckUrl: LOCAL_FILE_EXISTS_IN_ROOT_URL,
    fileName: objExistsParam.fileName,
    rootPath: objExistsParam.rootPath,
  });

  try {
    const responseExists = await axios.post(
      LOCAL_FILE_EXISTS_IN_ROOT_URL,
      {
        fileName: objExistsParam.fileName,
        rootPath: objExistsParam.rootPath,
      },
      {
        headers: getWriteHeaders(),
      },
    );

    const bolExists = (responseExists?.data as any)?.data?.exists === true;
    const strFullPath = (responseExists?.data as any)?.data?.fullPath ?? '';
    if (bolExists == true) {
      const result = buildTryWriteFailResult(
        Format('文件已存在，且该CodeType不可覆盖，未写入。路径:{0}', strFullPath),
      );
      return { ok: false, error: result };
    }
    return { ok: true, data: null };
  } catch (e: any) {
    const strErrMsg = e?.response?.data?.errorMsg ?? e?.message ?? '文件存在性检查失败';
    const result = buildTryWriteFailResult(
      Format('文件存在性检查失败，未执行写入。err:{0}', strErrMsg),
      'error',
      { error: e },
    );
    return { ok: false, error: result };
  }
}

// 生成写文件请求头。
function getWriteHeaders(): Record<string, string> {
  return {
    'X-AGENT-TOKEN': AGENT_LOCAL_TOKEN,
    'Content-Type': 'application/json',
  };
}

// 先按绝对路径尝试写入；必要时标记回退到工作区路径。
async function tryWriteByResolvedPath(
  strTargetPath: string,
  strCodeText: string,
  bolOverwrite: boolean,
  objHeaders: Record<string, string>,
): Promise<ResolvedWriteAttemptResult> {
  // 优先写绝对路径，只有命中 WorkspacePathDenied 时才走相对路径回退。
  const objBodyByResolvedPath = {
    path: strTargetPath,
    content: strCodeText,
    overwrite: bolOverwrite,
    encodingName: 'utf-8',
  };

  try {
    const response = await axios.post(LOCAL_FILE_WRITE_URL, objBodyByResolvedPath, {
      headers: objHeaders,
    });
    const strSavedPath = (response?.data as any)?.data?.path ?? strTargetPath;
    const result = { isSuccess: true, msg: `已写入:${strSavedPath}` };
    logLocalAccess('info', 'tryWriteCodeToLocalFile', 'result', result);
    return {
      ok: true,
      data: {
        needFallbackToWorkspace: false,
        result,
      },
    };
  } catch (e: any) {
    if (isWorkspacePathDenied(e) == true) {
      return {
        ok: true,
        data: {
          needFallbackToWorkspace: true,
          result: {
            isSuccess: false,
            msg: '目标路径不在当前工作区内，尝试回退到工作区相对路径写入',
          },
        },
      };
    }

    const strErrMsg = e?.response?.data?.errorMsg ?? e?.message ?? '调用本地文件服务失败';
    const result = buildTryWriteFailResult(
      Format(
        '调用本地文件服务失败，path:{0}, overwrite:{1}, err:{2}',
        strTargetPath,
        bolOverwrite,
        strErrMsg,
      ),
      'error',
      { error: e },
    );
    return { ok: false, error: result };
  }
}

// 回退为工作区相对路径后执行写入。
async function tryWriteByWorkspacePath(
  strTargetPath: string,
  strFilePath: string,
  strCodeText: string,
  bolOverwrite: boolean,
  objHeaders: Record<string, string>,
): Promise<LocalFileWriteResult> {
  const strWritePath = toWorkspaceWritePath(strTargetPath, strFilePath);
  if (IsNullOrEmpty(strWritePath) == true) {
    let strFilePathWithRoot = normalizePath(strFilePath);
    if (isAbsolutePath(strFilePath) == true) {
      strFilePathWithRoot = normalizePath(strFilePath);
    } else if (isAbsolutePath(strTargetPath) == true) {
      strFilePathWithRoot = strTargetPath;
    }
    const result = buildTryWriteFailResult(
      Format(
        '目标路径不在当前工作区内，无法写入。原始路径:{0}, 原始路径(带根目录):{1}, 解析路径:{2}',
        strFilePath,
        strFilePathWithRoot,
        strTargetPath,
      ),
    );
    return result;
  }

  const objBodyByWorkspacePath = {
    path: strWritePath,
    content: strCodeText,
    overwrite: bolOverwrite,
    encodingName: 'utf-8',
  };

  try {
    const response = await axios.post(LOCAL_FILE_WRITE_URL, objBodyByWorkspacePath, {
      headers: objHeaders,
    });
    const strSavedPath = (response?.data as any)?.data?.path ?? strWritePath;
    const result = { isSuccess: true, msg: `已写入:${strSavedPath}` };
    logLocalAccess('info', 'tryWriteCodeToLocalFile', 'result', result);
    return result;
  } catch (e: any) {
    const strErrMsg = e?.response?.data?.errorMsg ?? e?.message ?? '调用本地文件服务失败';
    const result = buildTryWriteFailResult(
      Format(
        '调用本地文件服务失败，path:{0}, overwrite:{1}, err:{2}',
        strWritePath,
        bolOverwrite,
        strErrMsg,
      ),
      'error',
      { error: e },
    );
    return result;
  }
}

// 判断错误是否为工作区路径限制。
function isWorkspacePathDenied(err: any): boolean {
  const strErrorCode = err?.response?.data?.errorCode ?? '';
  const strMessage = err?.response?.data?.message ?? '';
  return (
    strErrorCode === 'WorkspacePathDenied' ||
    String(strMessage).includes('outside the workspace root')
  );
}

// 将绝对路径转换为工作区相对路径。
function toWorkspaceWritePath(strResolvedPath: string, _strOriginalPath: string): string {
  // const strOriginalPath2 = normalizePath(strOriginalPath).replace(/^\/+/, '');
  // if (isAbsolutePath(strOriginalPath2) == false) return strOriginalPath2;

  const strResolvedPath2 = normalizePath(strResolvedPath);
  if (isAbsolutePath(strResolvedPath2) == false) return strResolvedPath2.replace(/^\/+/, '');

  for (const strKey of LOCAL_CODE_ROOT_KEYS) {
    const strRootPath = normalizePath(localStorage.getItem(strKey) ?? '').replace(/\/$/, '');
    if (IsNullOrEmpty(strRootPath) == true || isAbsolutePath(strRootPath) == false) continue;
    const strPrefix = `${strRootPath}/`;
    if (strResolvedPath2.startsWith(strPrefix)) {
      return strResolvedPath2.substring(strPrefix.length).replace(/^\/+/, '');
    }
  }

  const strEnvRoot = normalizePath(
    ((import.meta as any)?.env?.VITE_AGC_LOCAL_CODE_ROOT_PATH as string) ?? '',
  ).replace(/\/$/, '');
  if (IsNullOrEmpty(strEnvRoot) == false && strResolvedPath2.startsWith(`${strEnvRoot}/`)) {
    return strResolvedPath2.substring(strEnvRoot.length + 1).replace(/^\/+/, '');
  }

  return '';
}

// 判断是否绝对路径（Windows 盘符或 UNC）。
function isAbsolutePath(strPath: string): boolean {
  if (IsNullOrEmpty(strPath) == true) return false;
  const strPathTrim = strPath.trim();
  return /^[a-zA-Z]:[\\/]/.test(strPathTrim) || strPathTrim.startsWith('\\\\');
}

// 统一路径分隔符并去重斜杠。
function normalizePath(strPath: string): string {
  if (IsNullOrEmpty(strPath) == true) return '';
  return strPath.replace(/\\/g, '/').replace(/\/+/g, '/');
}

// 安全拼接根路径与子路径。
function joinPath(strRootPath: string, strSubPath: string): string {
  const strRootPath2 = normalizePath(strRootPath).replace(/\/$/, '');
  const strSubPath2 = normalizePath(strSubPath).replace(/^\/+/, '');
  return `${strRootPath2}/${strSubPath2}`;
}

// 获取目录名。
function getDirName(strPath: string): string {
  const strPath2 = normalizePath(strPath).replace(/\/$/, '');
  const intPos = strPath2.lastIndexOf('/');
  if (intPos <= 0) return strPath2;
  return strPath2.substring(0, intPos);
}

// 获取文件名。
function getBaseName(strPath: string): string {
  const strPath2 = normalizePath(strPath).replace(/\/$/, '');
  const intPos = strPath2.lastIndexOf('/');
  if (intPos < 0) return strPath2;
  return strPath2.substring(intPos + 1);
}

// 构造 exists-in-root 所需的 fileName/rootPath 参数。
function buildExistsInRootParams(
  strTargetPath: string,
  strOriginalPath: string,
): { fileName: string; rootPath: string } | null {
  const strTargetPath2 = normalizePath(strTargetPath);
  if (isAbsolutePath(strTargetPath2) == false) return null;

  const strOriginalPath2 = normalizePath(strOriginalPath).replace(/^\/+/, '');
  // 如果原始路径是相对路径，优先按“rootPath + fileName(相对路径)”反推，保证与 API 约定一致。
  if (isAbsolutePath(strOriginalPath2) == false && IsNullOrEmpty(strOriginalPath2) == false) {
    const strSuffix = `/${strOriginalPath2}`;
    if (strTargetPath2.endsWith(strSuffix) == true) {
      const strRootPath = strTargetPath2.substring(0, strTargetPath2.length - strSuffix.length);
      if (isAbsolutePath(strRootPath) == true) {
        return { fileName: strOriginalPath2, rootPath: strRootPath };
      }
    }
  }

  const strRootPath = getDirName(strTargetPath2);
  const strFileName = getBaseName(strTargetPath2);
  if (isAbsolutePath(strRootPath) == false || IsNullOrEmpty(strFileName) == true) return null;
  return { fileName: strFileName, rootPath: strRootPath };
}

// 从 WebAPI 与缓存中解析本地代码根目录。
async function getLocalCodeRootPath(
  intApplicationTypeId: number,
  strCodeTypeId: string,
  strMachineName: string,
  bolIsViewShare: boolean,
): Promise<string> {
  glbLastRootResolveErrorMsg = '';
  try {
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    const strUserId = clsPubLocalStorage.userId;
    if (
      IsNullOrEmpty(strUserId) == false &&
      IsNullOrEmpty(strPrjId) == false &&
      IsNullOrEmpty(strCmPrjId) == false
    ) {
      const objCodePath = await useUserCodeRootPathStore().getOrFetchCodePath(
        strUserId,
        strMachineName,
        strPrjId,
        strCmPrjId,
        intApplicationTypeId,
        strCodeTypeId,
      );
      if (
        IsNullOrEmpty(objCodePath.codePath) == false &&
        isAbsolutePath(objCodePath.codePath) == true
      ) {
        return adjustViewRootPath(normalizePath(objCodePath.codePath), bolIsViewShare);
      }
      if (
        IsNullOrEmpty(objCodePath.codePathBackup) == false &&
        isAbsolutePath(objCodePath.codePathBackup) == true
      ) {
        return adjustViewRootPath(normalizePath(objCodePath.codePathBackup), bolIsViewShare);
      }

      logLocalAccess('warn', 'getLocalCodeRootPath', 'result', {
        intApplicationTypeId,
        strCodeTypeId,
        strMachineName,
        codePath: objCodePath.codePath,
        codePathBackup: objCodePath.codePathBackup,
        hint: 'WebAPI返回路径非绝对路径',
      });
      glbLastRootResolveErrorMsg = Format(
        'WebAPI返回路径非绝对路径，codePath:{0}, codePathBackup:{1}',
        objCodePath.codePath ?? '',
        objCodePath.codePathBackup ?? '',
      );
    }
  } catch (e) {
    console.warn('getLocalCodeRootPath with backup api warning:', e);
    const strErrMsg = (e as any)?.message ?? String(e);
    glbLastRootResolveErrorMsg = `GetUserGCCodePathWithBackup异常:${strErrMsg}`;
  }

  try {
    const arrUserCodePath = await UserCodePath_GetObjLstCache(
      clsPrivateSessionStorage.currSelPrjId,
    );
    const arrUserCodePathSel = arrUserCodePath.filter(
      (x) => x.codeTypeId == strCodeTypeId && x.isGeneCode == true,
    );
    for (const objUserCodePath of arrUserCodePathSel) {
      if (
        IsNullOrEmpty(objUserCodePath.projectPath) == false &&
        isAbsolutePath(objUserCodePath.projectPath) == true
      ) {
        if (IsNullOrEmpty(objUserCodePath.codePath) == false) {
          if (isAbsolutePath(objUserCodePath.codePath) == true) {
            return adjustViewRootPath(normalizePath(objUserCodePath.codePath), bolIsViewShare);
          }
          return adjustViewRootPath(
            joinPath(objUserCodePath.projectPath, objUserCodePath.codePath),
            bolIsViewShare,
          );
        }
        return adjustViewRootPath(normalizePath(objUserCodePath.projectPath), bolIsViewShare);
      }
      if (
        IsNullOrEmpty(objUserCodePath.codePath) == false &&
        isAbsolutePath(objUserCodePath.codePath) == true
      ) {
        return adjustViewRootPath(normalizePath(objUserCodePath.codePath), bolIsViewShare);
      }
    }
  } catch (e) {
    console.warn('getLocalCodeRootPath warning:', e);
    if (IsNullOrEmpty(glbLastRootResolveErrorMsg) == true) {
      const strErrMsg = (e as any)?.message ?? String(e);
      glbLastRootResolveErrorMsg = `UserCodePath_GetObjLstCache异常:${strErrMsg}`;
    }
  }
  return '';
}

function adjustViewRootPath(strRootPath: string, bolIsViewShare: boolean): string {
  if (bolIsViewShare == false) return strRootPath;
  return strRootPath.replace(/(^|\/)views(\/|$)/, '$1viewsShare$2');
}

// 将原始文件路径解析为最终写入路径。
async function resolveWritePath(
  intApplicationTypeId: number,
  strCodeTypeId: string,
  strFilePath: string,
  strMachineName: string,
  bolIsViewShare: boolean,
): Promise<string> {
  const strFilePath2 = normalizePath(strFilePath);
  if (isAbsolutePath(strFilePath2) == true) return strFilePath2;

  const strRootPath = await getLocalCodeRootPath(
    intApplicationTypeId,
    strCodeTypeId,
    strMachineName,
    bolIsViewShare,
  );
  if (IsNullOrEmpty(strRootPath) == true) return strFilePath2;
  return joinPath(strRootPath, strFilePath2);
}
