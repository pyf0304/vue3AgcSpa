//import * as $ from "jquery";

/*import $ from "jquery";*/
import { Ref } from 'vue';
import { clsGCPara } from '@/ts/L0Entity/clsGCPara';
import { clsAppCodeTypeRelaEN } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaEN';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { enumTabMainType } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
import { enumFunctionTemplate } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { clsvFunction4GeneCode_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimENEx';
import {
  AutoGeneCode_GeneCode4FuncAsync,
  AutoGeneCode_GeneCodeAsync,
} from '@/ts/L3ForWApiEx/GeneCode/AutoGeneCodeWApi';
import { createContextMenu, destroyContextMenu } from '@/components/basic/context-menu';
import { AppCodeTypeRela_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsAppCodeTypeRelaWApi';
import { ApplicationType_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import {
  vCodeType_Sim_GetObjByCodeTypeIdCache,
  vCodeType_Sim_GetObjLstCache,
} from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { FuncGCType_GetObjByFuncGCTypeIdCache } from '@/ts/L3ForWApi/PrjFunction/clsFuncGCTypeWApi';
import { ProgLangType_GetObjByProgLangTypeIdCache } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { CMProjectEx_GetPrjIdByCmPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import { AppCodeTypeRelaEx_SortFunByOrderNum } from '@/ts/L3ForWApiEx/GeneCode/clsAppCodeTypeRelaExWApi';
import { ApplicationTypeEx_SortFunByOrderNum } from '@/ts/L3ForWApiEx/GeneCode/clsApplicationTypeExWApi';
import { vCodeType_SimEx_Function4GeneCodeEx_ } from '@/ts/L3ForWApiEx/GeneCode/clsvCodeType_SimExWApi';
import { Function4CodeEx_AccessFuncName } from '@/ts/L3ForWApiEx/PrjFunction/clsFunction4CodeExWApi';
import {
  UserCodePathEx_GetUserGCCodePathWithBackup,
  UserCodePathEx_SetUserGCCodePathWithBackup,
} from '@/ts/L3ForWApiEx/SystemSet/clsUserCodePathExWApi';
import { UserCodePrjMainPath_MachineNameEx_GetUserGCRootPathWithBackup } from '@/ts/L3ForWApiEx/SystemSet/clsUserCodePrjMainPath_MachineNameExWApi';
import { UserCodePath_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsUserCodePathWApi';
import {
  vFunction4GeneCode_SimEx_CopyToEx,
  vFunction4GeneCode_SimEx_SortFunByKey,
} from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4GeneCode_SimExWApi';
// import { UserCodePrjMainPathEx_GetObjLstByCmPrjIdCache } from '@/ts/L3ForWApiEx/SystemSet/clsUserCodePrjMainPathExWApi';
import { vPrjTab_SimEx_GetObjByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  CheckControlExistInDivObj,
  GetArray,
  SetInputValueInDivObj,
  SetSpanHtmlByIdInDivObj,
  SetTextAreaValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { buildCodeTypeTooltip, showCodeTypePathEditDialog } from '@/ts/PubFun/CodeTypePathUi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { TreeNode } from '@/ts/components/TreeNode';
import {
  clearLocalFileAccessLogs,
  getLocalAccessLogFilePath,
  getLocalFileAccessRecentLogs,
  getLocalFileAccessLogsByRecentMinutes,
  getMachineNameFromLocalAgent,
  syncLocalFileAccessLogsToFile,
  traceUiClickAndSyncLocalAccessLog,
  tryWriteCodeToLocalFile,
} from '@/ts/LocalFileAccess/LocalFileAccess';
import { codeTypeId } from '@/views/Table_Field/GeneTabCodeVueShare';
import { useCMProjectAppRelaStore } from '@/store/modules/CMProjectAppRela';
import { vFunction4Code_SimEx_GetObjByFuncId4CodeCacheEx } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4Code_SimExWApi';
import { Function4GeneCodeEx_GetObjLstByFunctionTemplateIdCache } from '@/ts/L3ForWApiEx/PrjFunction/clsFunction4GeneCodeExWApi';
import { GC_CodeTypeRelation_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsGC_CodeTypeRelationWApi';

class TreeNodeImpl implements TreeNode {
  id: string;
  label: string;
  title?: string;
  type: string;
  expanded: boolean;
  children?: TreeNode[];
  parentNode: TreeNode | null;

  constructor(
    id: string,
    label: string,
    type: string,
    expanded: boolean,
    parentNode: TreeNode | null,
  ) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.expanded = expanded;
    this.parentNode = parentNode;
  }
}
// declare function SetEvent4Tree(): void;

/** GeneTabCodeEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class GeneTabCodeEx implements IShowList {
  private static readonly LOCAL_CODE_ROOT_KEYS = [
    'agcLocalCodeRootPath',
    'AGC_LOCAL_CODE_ROOT_PATH',
    'currSelPrjPath',
    'projectPath',
  ];

  public static treeRef: Ref<any>;
  public static bindTreeData: () => Promise<void>;
  public static selectNodeById: (type: string, nodeId: string) => void;
  private static codeTypePathMenuTimer: number | null = null;

  public static intApplicationTypeIdCache = 0;

  public static;
  public static divTree: HTMLDivElement;
  public static divCode: HTMLDivElement;
  public Op = '';
  public TabId = '';
  //public static mstrSortvTabInfoBy=  "tabId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  private static traceClickAndSync(strAction: string, data?: Record<string, unknown>): void {
    (async () => {
      const objTraceResult = await traceUiClickAndSyncLocalAccessLog(strAction, data);
      const strTraceResult = `[GeneTabCodeEx] click trace -> ${strAction}, syncResult: ${objTraceResult.msg}`;
      console.error(strTraceResult);
      SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult2', strTraceResult);
    })().catch((e: any) => {
      const strErrMsg = e?.message ?? String(e);
      console.error(`[GeneTabCodeEx] click trace sync failed: ${strErrMsg}`);
    });
  }

  private static async SetCurrentMachineNameView(): Promise<void> {
    const strSpanId = 'spnCurrMachine2';
    try {
      const strMachineName = String(await getMachineNameFromLocalAgent()).trim();
      if (IsNullOrEmpty(strMachineName) == false) {
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, strSpanId, strMachineName);
        return;
      }
      SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, strSpanId, '获取失败: 机器名为空');
    } catch (e) {
      const strErrMsg = (e as any)?.message ?? String(e);
      SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, strSpanId, `获取失败: ${strErrMsg}`);
      console.warn('SetCurrentMachineNameView warning:', e);
    }
  }

  private static IsAbsolutePath(strPath: string): boolean {
    if (IsNullOrEmpty(strPath) == true) return false;
    return /^[A-Za-z]:[\\/]/.test(strPath) || /^\\\\/.test(strPath);
  }

  private static NormalizePath(strPath: string): string {
    if (IsNullOrEmpty(strPath) == true) return '';
    return strPath.replace(/[\\/]+/g, '\\');
  }

  private static GetLocalCodeRootPathFromStorage(): string {
    for (const strKey of GeneTabCodeEx.LOCAL_CODE_ROOT_KEYS) {
      const strValue = String(localStorage.getItem(strKey) ?? '').trim();
      if (IsNullOrEmpty(strValue) == false && GeneTabCodeEx.IsAbsolutePath(strValue) == true) {
        return GeneTabCodeEx.NormalizePath(strValue);
      }
    }
    return '';
  }

  private static async GetCurrentUserAppRootPathWithBackup(
    strMachineName: string,
    intApplicationTypeId: number,
  ): Promise<{ codePath: string; codePathBackup: string }> {
    const strUserId = clsPubLocalStorage.userId;
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

    try {
      if (
        IsNullOrEmpty(strUserId) == false &&
        IsNullOrEmpty(strPrjId) == false &&
        IsNullOrEmpty(strCmPrjId) == false &&
        IsNullOrEmpty(strMachineName) == false &&
        intApplicationTypeId > 0
      ) {
        const objCodePath = await UserCodePrjMainPath_MachineNameEx_GetUserGCRootPathWithBackup(
          strUserId,
          strMachineName,
          strPrjId,
          strCmPrjId,
          intApplicationTypeId,
        );

        if (IsNullOrEmpty(objCodePath.codePath) == false) {
          return {
            codePath: GeneTabCodeEx.NormalizePath(objCodePath.codePath),
            codePathBackup: IsNullOrEmpty(objCodePath.codePathBackup)
              ? ''
              : GeneTabCodeEx.NormalizePath(objCodePath.codePathBackup),
          };
        }
        if (IsNullOrEmpty(objCodePath.codePathBackup) == false) {
          return {
            codePath: '',
            codePathBackup: GeneTabCodeEx.NormalizePath(objCodePath.codePathBackup),
          };
        }
      }
    } catch (e) {
      console.warn('GeneTabCodeEx.GetCurrentUserAppRootPathWithBackup by backup api warning:', e);
    }

    try {
      const arrUserCodePath = await UserCodePath_GetObjLstCache(
        clsPrivateSessionStorage.currSelPrjId,
      );
      const arrGeneCodePath = arrUserCodePath.filter((x) => x.isGeneCode == true);
      for (const objUserCodePath of arrGeneCodePath) {
        if (
          IsNullOrEmpty(objUserCodePath.projectPath) == false &&
          GeneTabCodeEx.IsAbsolutePath(objUserCodePath.projectPath) == true
        ) {
          return {
            codePath: GeneTabCodeEx.NormalizePath(objUserCodePath.projectPath),
            codePathBackup: '',
          };
        }
        if (
          IsNullOrEmpty(objUserCodePath.codePath) == false &&
          GeneTabCodeEx.IsAbsolutePath(objUserCodePath.codePath) == true
        ) {
          return {
            codePath: GeneTabCodeEx.NormalizePath(objUserCodePath.codePath),
            codePathBackup: '',
          };
        }
      }
    } catch (e) {
      console.warn('GeneTabCodeEx.GetCurrentUserAppRootPathWithBackup warning:', e);
    }

    return {
      codePath: GeneTabCodeEx.GetLocalCodeRootPathFromStorage(),
      codePathBackup: '',
    };
  }

  private static async GetCodePathTipByCodeType(
    strMachineName: string,
    intApplicationTypeId: number,
    strCodeTypeId: string,
  ): Promise<string> {
    const strUserId = clsPubLocalStorage.userId;
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    if (
      IsNullOrEmpty(strUserId) == true ||
      IsNullOrEmpty(strPrjId) == true ||
      IsNullOrEmpty(strCmPrjId) == true ||
      IsNullOrEmpty(strMachineName) == true
    ) {
      return '用户代码路径: (上下文缺失)';
    }

    try {
      const objCodePath = await UserCodePathEx_GetUserGCCodePathWithBackup(
        strUserId,
        strMachineName,
        strPrjId,
        strCmPrjId,
        intApplicationTypeId,
        strCodeTypeId,
      );
      if (IsNullOrEmpty(objCodePath.codePath) == false) {
        return `用户代码路径: ${GeneTabCodeEx.NormalizePath(objCodePath.codePath)}`;
      }
      if (IsNullOrEmpty(objCodePath.codePathBackup) == false) {
        return `用户代码路径: ${GeneTabCodeEx.NormalizePath(objCodePath.codePathBackup)} (备份)`;
      }
      return '用户代码路径: (未配置)';
    } catch (e: any) {
      const strErrMsg = e?.message ?? String(e);
      return `用户代码路径: (获取失败: ${strErrMsg})`;
    }
  }

  private static async BuildCodeTypeNodeTooltip(
    strMachineName: string,
    intApplicationTypeId: number,
    strCodeTypeId: string,
    strDependsOn: string,
    bolCanOverwrite: boolean | undefined,
    strTabId: string,
  ): Promise<string> {
    const strCodePathTip = await GeneTabCodeEx.GetCodePathTipByCodeType(
      strMachineName,
      intApplicationTypeId,
      strCodeTypeId,
    );
    return buildCodeTypeTooltip({
      codePathTip: strCodePathTip,
      dependsOn: strDependsOn,
      overwriteEnabled: bolCanOverwrite,
      targetRequired: strDependsOn == 'Table',
      targetLabel: '当前表Id',
      targetValue: strTabId,
    });
  }

  private static clearCodeTypePathMenuTimer(): void {
    if (GeneTabCodeEx.codeTypePathMenuTimer != null) {
      window.clearTimeout(GeneTabCodeEx.codeTypePathMenuTimer);
      GeneTabCodeEx.codeTypePathMenuTimer = null;
    }
  }

  public static HideCodeTypePathHoverMenu(): void {
    GeneTabCodeEx.clearCodeTypePathMenuTimer();
    destroyContextMenu();
  }

  public static async ShowCodeTypePathHoverMenu(
    evt: MouseEvent,
    objElement: HTMLElement,
    objNode: TreeNodeImpl,
    strCodeTypeId: string,
    intApplicationTypeId: number,
  ): Promise<void> {
    GeneTabCodeEx.clearCodeTypePathMenuTimer();
    destroyContextMenu();

    const strMachineName = String(await getMachineNameFromLocalAgent()).trim();
    const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
    const strCodeTypeTip =
      objCodeType == null
        ? await GeneTabCodeEx.GetCodePathTipByCodeType(
            strMachineName,
            intApplicationTypeId,
            strCodeTypeId,
          )
        : await GeneTabCodeEx.BuildCodeTypeNodeTooltip(
            strMachineName,
            intApplicationTypeId,
            strCodeTypeId,
            objCodeType.dependsOn,
            objCodeType.isDefaultOverride,
            clsPrivateSessionStorage.tabId_Main || '空',
          );
    objNode.title = strCodeTypeTip;
    objElement.title = strCodeTypeTip;

    GeneTabCodeEx.codeTypePathMenuTimer = window.setTimeout(async () => {
      await createContextMenu({
        event: evt,
        items: [
          {
            label: '设置路径',
            handler: async () => {
              await GeneTabCodeEx.SetCodeTypePathByMenu(
                objElement,
                objNode,
                strCodeTypeId,
                intApplicationTypeId,
              );
            },
          },
        ],
      });
    }, 600);
  }

  private static async SetCodeTypePathByMenu(
    objElement: HTMLElement,
    objNode: TreeNodeImpl,
    strCodeTypeId: string,
    intApplicationTypeId: number,
  ): Promise<void> {
    try {
      const strUserId = clsPubLocalStorage.userId;
      const strPrjId = clsPrivateSessionStorage.currSelPrjId;
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      if (
        IsNullOrEmpty(strUserId) == true ||
        IsNullOrEmpty(strPrjId) == true ||
        IsNullOrEmpty(strCmPrjId) == true
      ) {
        alert('用户或项目上下文为空，无法设置代码类型路径！');
        return;
      }

      const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
      if (objCodeType == null) {
        alert(`代码类型Id:[${strCodeTypeId}]不存在，无法设置路径！`);
        return;
      }

      const strMachineName = String(await getMachineNameFromLocalAgent()).trim();
      if (IsNullOrEmpty(strMachineName) == true) {
        alert('当前机器名为空，无法设置路径！');
        return;
      }

      let objCodePath: { codePath: string; codePathBackup: string } = {
        codePath: '',
        codePathBackup: '',
      };
      try {
        objCodePath = await UserCodePathEx_GetUserGCCodePathWithBackup(
          strUserId,
          strMachineName,
          strPrjId,
          strCmPrjId,
          intApplicationTypeId,
          strCodeTypeId,
        );
      } catch (e) {
        console.warn('SetCodeTypePathByMenu get current code path warning:', e);
      }
      if (
        IsNullOrEmpty(objCodePath.codePath) == true &&
        IsNullOrEmpty(objCodePath.codePathBackup) == true
      ) {
        objCodePath = await GeneTabCodeEx.GetCurrentUserAppRootPathWithBackup(
          strMachineName,
          intApplicationTypeId,
        );
      }

      const objRootPathInfo = await GeneTabCodeEx.GetCurrentUserAppRootPathWithBackup(
        strMachineName,
        intApplicationTypeId,
      );

      let strOverwriteSummary = '覆盖策略: (未知)';
      if (objCodeType.isDefaultOverride === true) {
        strOverwriteSummary = '覆盖策略: 可覆盖';
      } else if (objCodeType.isDefaultOverride === false) {
        strOverwriteSummary = '覆盖策略: 不可覆盖';
      }

      const objDialogResult = await showCodeTypePathEditDialog({
        title: '设置代码类型路径',
        codeTypeName: objCodeType.codeTypeName,
        codeTypeId: strCodeTypeId,
        codePath: objCodePath.codePath ?? '',
        codePathBackup: objCodePath.codePathBackup ?? '',
        restoreCodePath: objRootPathInfo.codePath ?? '',
        restoreCodePathBackup: objRootPathInfo.codePathBackup ?? '',
        summaryLines: [
          `当前机器: ${strMachineName}`,
          `依赖类型: ${objCodeType.dependsOn || '(未知)'}`,
          objCodeType.dependsOn == 'Table'
            ? `TabId要求: 必填(当前表Id: ${clsPrivateSessionStorage.tabId_Main || '空'})`
            : 'TabId要求: 非必填',
          strOverwriteSummary,
        ],
      });
      if (objDialogResult == null) return;

      const objResult = await UserCodePathEx_SetUserGCCodePathWithBackup({
        strUserId,
        strMachineName,
        strPrjId,
        strCmPrjId,
        intApplicationTypeId,
        strCodeTypeId,
        strCodePath: objDialogResult.codePath,
        strCodePathBackup: objDialogResult.codePathBackup,
      });

      if (objResult.success == false) {
        alert(objResult.message || '设置代码类型路径失败！');
        return;
      }

      const strCodePathTip = await GeneTabCodeEx.BuildCodeTypeNodeTooltip(
        strMachineName,
        intApplicationTypeId,
        strCodeTypeId,
        objCodeType.dependsOn,
        objCodeType.isDefaultOverride,
        clsPrivateSessionStorage.tabId_Main || '空',
      );
      objNode.title = strCodePathTip;
      objElement.title = strCodePathTip;
      alert(
        objResult.message || `已设置代码类型路径: ${objCodeType.codeTypeName}(${strCodeTypeId})`,
      );
    } catch (e: any) {
      const strMsg = Format('设置路径不成功,{0}.(codeTypeId:{1})', e?.message ?? e, strCodeTypeId);
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public static ShowRecentWriteLogsPopup(intMinutes = 5): void {
    GeneTabCodeEx.traceClickAndSync('ShowRecentWriteLogsPopup', { intMinutes });
    const strTrace = `[GeneTabCodeEx] ShowRecentWriteLogsPopup called, intMinutes=${intMinutes}, at=${new Date().toISOString()}`;
    console.error(strTrace);
    SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult2', strTrace);
    const intMinutesSafe = Number.isFinite(intMinutes) ? Math.max(1, Math.floor(intMinutes)) : 5;
    const arrLog = getLocalFileAccessLogsByRecentMinutes(intMinutesSafe, 'tryWriteCodeToLocalFile');

    if (arrLog.length === 0) {
      const strMsg = `最近${intMinutesSafe}分钟没有写文件日志。`;
      SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult2', strMsg);
      alert(strMsg);
      return;
    }

    const intShowCount = 40;
    const arrLogShow =
      arrLog.length > intShowCount ? arrLog.slice(arrLog.length - intShowCount) : arrLog;
    const strHeader =
      arrLog.length > intShowCount
        ? `最近${intMinutesSafe}分钟写文件日志共${arrLog.length}条，仅显示最后${intShowCount}条:`
        : `最近${intMinutesSafe}分钟写文件日志共${arrLog.length}条:`;

    const arrLine = arrLogShow.map((x, idx) => {
      const strData = JSON.stringify(x.data);
      return `${idx + 1}. [${x.time}] [${x.level}] [${x.phase}] ${strData}`;
    });
    const strMsg = `${strHeader}\n${arrLine.join('\n')}`;

    SetSpanHtmlByIdInDivObj(
      GeneTabCodeEx.divCode,
      'spnResult2',
      `已弹出最近${intMinutesSafe}分钟写文件日志，共${arrLog.length}条`,
    );
    alert(strMsg);
  }

  public static ShowRecentWriteLogsByCountPopup(intCount = 20): void {
    GeneTabCodeEx.traceClickAndSync('ShowRecentWriteLogsByCountPopup', { intCount });
    const strTrace = `[GeneTabCodeEx] ShowRecentWriteLogsByCountPopup called, intCount=${intCount}, at=${new Date().toISOString()}`;
    console.error(strTrace);
    SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult2', strTrace);
    const intCountSafe = Number.isFinite(intCount) ? Math.max(1, Math.floor(intCount)) : 20;
    let arrLog = getLocalFileAccessRecentLogs(intCountSafe, 'tryWriteCodeToLocalFile');
    let strHeader = `最近${intCountSafe}条写文件日志:`;
    if (arrLog.length === 0) {
      arrLog = getLocalFileAccessRecentLogs(intCountSafe);
      strHeader = `最近${intCountSafe}条日志(写文件筛选为空，显示全量日志):`;
    }
    if (arrLog.length === 0) {
      const strMsg = `当前没有写文件日志。`;
      SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult2', strMsg);
      alert(strMsg);
      return;
    }

    strHeader = `${strHeader}(实际${arrLog.length}条)`;
    const arrLine = arrLog.map((x, idx) => {
      const strData = JSON.stringify(x.data);
      return `${idx + 1}. [${x.time}] [${x.level}] [${x.phase}] ${strData}`;
    });
    const strMsg = `${strHeader}\n${arrLine.join('\n')}`;

    SetSpanHtmlByIdInDivObj(
      GeneTabCodeEx.divCode,
      'spnResult2',
      `已弹出最近${arrLog.length}条写文件日志`,
    );
    alert(strMsg);
  }

  public static async ShowRecentWriteLogsByCountPopupAndSyncFile(intCount = 20): Promise<void> {
    GeneTabCodeEx.traceClickAndSync('ShowRecentWriteLogsByCountPopupAndSyncFile', { intCount });
    const strTrace = `[GeneTabCodeEx] ShowRecentWriteLogsByCountPopupAndSyncFile called, intCount=${intCount}, at=${new Date().toISOString()}`;
    console.error(strTrace);
    SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult2', strTrace);
    const intCountSafe = Number.isFinite(intCount) ? Math.max(1, Math.floor(intCount)) : 20;
    let arrLog = getLocalFileAccessRecentLogs(intCountSafe, 'tryWriteCodeToLocalFile');
    let strHeader = `最近${intCountSafe}条写文件日志:`;
    if (arrLog.length === 0) {
      arrLog = getLocalFileAccessRecentLogs(intCountSafe);
      strHeader = `最近${intCountSafe}条日志(写文件筛选为空，显示全量日志):`;
    }
    const objSyncResult = await syncLocalFileAccessLogsToFile(500);
    const strLogFilePath = getLocalAccessLogFilePath();

    const strMsg =
      arrLog.length === 0
        ? `${strHeader}(实际0条)\n(当前没有写文件日志)\n\n日志文件:${strLogFilePath}\n落盘结果:${objSyncResult.msg}`
        : `${strHeader}(实际${arrLog.length}条)\n${arrLog
            .map((x, idx) => {
              const strData = JSON.stringify(x.data);
              return `${idx + 1}. [${x.time}] [${x.level}] [${x.phase}] ${strData}`;
            })
            .join('\n')}\n\n日志文件:${strLogFilePath}\n落盘结果:${objSyncResult.msg}`;

    SetSpanHtmlByIdInDivObj(
      GeneTabCodeEx.divCode,
      'spnResult2',
      `已处理最近日志并尝试落盘，条数:${arrLog.length}`,
    );
    alert(strMsg);
  }

  public static ClearWriteLogs(): void {
    GeneTabCodeEx.traceClickAndSync('ClearWriteLogs');
    const strTrace = `[GeneTabCodeEx] ClearWriteLogs called, at=${new Date().toISOString()}`;
    console.error(strTrace);
    SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult2', strTrace);
    const intRemoved = clearLocalFileAccessLogs('tryWriteCodeToLocalFile');
    const strMsg = `已清空写文件日志 ${intRemoved} 条。`;
    SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult2', strMsg);
    alert(strMsg);
  }

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vTabInfo]！');
    //this.BindGv_vTabInfo();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vTabInfo':
        //this.BindGv_TabInfo4Func();
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const objPage: GeneTabCodeEx = new GeneTabCodeEx();
    const strMsg = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        //objPage.btnQuery_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'GeneTabCodeEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // clsPrivateSessionStorage.tabId1 = '00050006';
    // 在此处放置用户代码以初始化页面
    try {
      await GeneTabCodeEx.SetCurrentMachineNameView();
      // const strOp = this.GetOp;
      //console.error("strOp", strOp);
      //if (strOp == "GeneCode" ) {
      //    await Main_PrjTab.ShowCurrItem("GeneTabCode", "");
      //}
      //await this.VisualEffects();
      // const strTabMainTypeId = enumTabMainType.DataTab_0001;
      // const strFunctionTemplateId = '0001';
      let strTabId = this.GetTabId;
      if (IsNullOrEmpty(strTabId) == true) {
        strTabId = clsPrivateSessionStorage.tabId_Main;
      }
      const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objPrjTab == null) return;
      // await this.BindTr_TabGeneCode(
      //   GeneTabCodeEx.divTree,
      //   'Table',
      //   strTabMainTypeId,
      //   strFunctionTemplateId,
      //   strTabId,
      //   objPrjTab.sqlDsTypeId,
      // );
      // setEvent4Tree();
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public static async GeneCode4Tab(
    strTabId: string,
    strCodeTypeId: string,
    intApplicationTypeId: number,
  ) {
    const objGCPara: clsGCPara = new clsGCPara();

    objGCPara.prjId = clsPrivateSessionStorage.currSelPrjId; // this.getQueryString("prjId");//"0116";
    objGCPara.cmPrjId = clsPrivateSessionStorage.cmPrjId; // this.getQueryString("prjId");//"0116";

    objGCPara.prjDataBaseId = clsPrivateSessionStorage.currPrjDataBaseId; // this.getQueryString("prjDataBaseId");//"0111";
    objGCPara.gcUserId = clsPubLocalStorage.userId; // this.getQueryString("GCUserId");//"pyf";

    //        const vsTabId = ""; //this.getQueryString("tabId");
    const vsTabId = strTabId; // this.getQueryString("tabId");//WebApp,,,wfmExamType_QUDI
    const vsTypeParas = '';
    const vsDataBaseType = clsPubSessionStorage.currDataBaseTypeId; // this.getQueryString("DataBaseType");//"MsSql";
    objGCPara.tabId = vsTabId;

    objGCPara.tabId = vsTabId;

    objGCPara.dataBaseType = vsDataBaseType;
    objGCPara.typeParas = vsTypeParas;
    objGCPara.codeTypeId = strCodeTypeId; //this.getQueryString("codeTypeId");//"0001";
    objGCPara.applicationTypeId = intApplicationTypeId;
    if (objGCPara.codeTypeId == '') {
      alert('生成代码的代码类型不能为空！');
      return;
    }

    if (objGCPara.tabId == '' && objGCPara.tabId == '') {
      alert('生成代码的表Id 或者界面Id不能全为空！');
      return;
    }

    if (objGCPara.prjId == '') {
      alert('生成代码的工程Id不能为空！');
      return;
    }
    if (objGCPara.cmPrjId == '') {
      alert('生成代码的CM工程Id不能为空！');
      return;
    }
    if (objGCPara.dataBaseType == '') {
      alert('生成代码的数据库类型不能为空！');
      return;
    }
    if (objGCPara.prjDataBaseId == '') {
      alert('生成代码的数据库Id不能为空！');
      return;
    }
    if (objGCPara.gcUserId == '') {
      alert('生成代码的用户Id不能为空！');
      return;
    }
    try {
      const strCurrDate = clsDateTime.getTodayDateTimeStr(1);
      const objGCResult = await AutoGeneCode_GeneCodeAsync(objGCPara);
      if (objGCResult == null) {
        const strInfo = `生成代码不成功!时间:${strCurrDate}`;
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult', strInfo);
        SetTextAreaValueByIdInDivObj(GeneTabCodeEx.divCode, 'txtCodeText', strInfo);
        return;
        //显示信息框
        //alert(strInfo);
      }
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'textarea', 'txtCodeText');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'input', 'txtClsName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'input', 'txtFileName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnPrjName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnSQLDSTypeName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnCodeTypeName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnLangType');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnGCUserId');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnTabName');
      await GeneTabCodeEx.SetCurrentMachineNameView();
      if (objGCResult.errorId == 0) {
        const objWriteResult = await tryWriteCodeToLocalFile(
          intApplicationTypeId,
          strCodeTypeId,
          objGCResult.re_FileNameWithModuleName,
          objGCResult.codeText,
        );
        SetTextAreaValueByIdInDivObj(GeneTabCodeEx.divCode, 'txtCodeText', objGCResult.codeText);
        SetInputValueInDivObj(GeneTabCodeEx.divCode, 'txtClsName', objGCResult.re_ClsName);
        SetInputValueInDivObj(
          GeneTabCodeEx.divCode,
          'txtFileName',
          objGCResult.re_FileNameWithModuleName,
        );
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnClassName', '类名');
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnFileName', '文件名');

        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnPrjName', objGCResult.prjName);
        SetSpanHtmlByIdInDivObj(
          GeneTabCodeEx.divCode,
          'spnSQLDSTypeName',
          objGCResult.dataBaseType,
        );
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnCodeTypeName', objGCResult.codeTypeName);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnLangType', objGCResult.langType);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnGCUserId', objGCResult.gcUserId);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnTabName', objGCResult.tabName);

        const strInfo = objWriteResult.isSuccess
          ? `生成代码成功并已写入文件!${objWriteResult.msg}. 时间:${strCurrDate}`
          : `生成代码成功, 但写入文件失败:${objWriteResult.msg}. 时间:${strCurrDate}`;
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult', strInfo);
        //显示信息框
        //alert(strInfo);
      } else {
        SetTextAreaValueByIdInDivObj(GeneTabCodeEx.divCode, 'txtCodeText', objGCResult.errorMsg);
        SetInputValueInDivObj(GeneTabCodeEx.divCode, 'txtClsName', objGCResult.re_ClsName);
        SetInputValueInDivObj(
          GeneTabCodeEx.divCode,
          'txtFileName',
          objGCResult.re_FileNameWithModuleName,
        );
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnPrjName', objGCResult.prjName);
        SetSpanHtmlByIdInDivObj(
          GeneTabCodeEx.divCode,
          'spnSQLDSTypeName',
          objGCResult.dataBaseType,
        );
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnCodeTypeName', objGCResult.codeTypeName);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnLangType', objGCResult.langType);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnGCUserId', objGCResult.gcUserId);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnTabName', objGCResult.tabName);
        const strInfo = `生成代码不成功!时间:${strCurrDate}`;
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult', strInfo);
      }
    } catch (e: any) {
      const strMsg = `生成代码不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  public static async GeneCode4FuncId4GC(
    strTabId: string,
    strFuncId4GC: string,
    strCodeTypeId: string,
    intApplicationTypeId: number,
  ) {
    const objGCPara: clsGCPara = new clsGCPara();

    objGCPara.prjId = clsPrivateSessionStorage.currSelPrjId; // this.getQueryString("prjId");//"0116";
    objGCPara.cmPrjId = clsPrivateSessionStorage.cmPrjId; // this.getQueryString("prjId");//"0116";

    objGCPara.prjDataBaseId = clsPrivateSessionStorage.currPrjDataBaseId; // this.getQueryString("prjDataBaseId");//"0111";
    objGCPara.gcUserId = clsPubLocalStorage.userId; // this.getQueryString("GCUserId");//"pyf";

    //let vsTabId = ""; //this.getQueryString("tabId");
    const vsTabId = strTabId; // this.getQueryString("tabId");//WebApp,,,wfmExamType_QUDI
    const vsTypeParas = '';
    const vsDataBaseType = clsPubSessionStorage.currDataBaseTypeId; // this.getQueryString("DataBaseType");//"MsSql";
    if (vsDataBaseType.length == 2) {
      //vsDataBaseType = await DataBaseType_
    }
    objGCPara.tabId = vsTabId;

    objGCPara.tabId = vsTabId;

    objGCPara.dataBaseType = vsDataBaseType;
    objGCPara.typeParas = vsTypeParas;
    objGCPara.funcId4GC = strFuncId4GC;
    objGCPara.codeTypeId = strCodeTypeId; //this.getQueryString("codeTypeId");//"0001";
    objGCPara.applicationTypeId = intApplicationTypeId;
    if (objGCPara.codeTypeId == '') {
      alert('生成代码的代码类型不能为空！');
      return;
    }

    if (objGCPara.tabId == '' && objGCPara.tabId == '') {
      alert('生成代码的表Id 或者界面Id不能全为空！');
      return;
    }

    if (objGCPara.prjId == '') {
      alert('生成代码的工程Id不能为空！');
      return;
    }
    if (objGCPara.cmPrjId == '') {
      alert('生成代码的CM工程Id不能为空！');
      return;
    }
    if (objGCPara.dataBaseType == '') {
      alert('生成代码的数据库类型不能为空！');
      return;
    }
    if (objGCPara.prjDataBaseId == '') {
      alert('生成代码的数据库Id不能为空！');
      return;
    }
    if (objGCPara.gcUserId == '') {
      alert('生成代码的用户Id不能为空！');
      return;
    }
    try {
      const strCurrDate = clsDateTime.getTodayDateTimeStr(1);
      const objGCResult = await AutoGeneCode_GeneCode4FuncAsync(objGCPara);
      if (objGCResult == null) {
        const strInfo = `生成代码不成功!时间:${strCurrDate}`;
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult', strInfo);
        SetTextAreaValueByIdInDivObj(GeneTabCodeEx.divCode, 'txtCodeText', strInfo);
        return;
        //显示信息框
        //alert(strInfo);
      }
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'textarea', 'txtCodeText');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'input', 'txtClsName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'input', 'txtFileName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnPrjName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnSQLDSTypeName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnCodeTypeName');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnLangType');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnGCUserId');
      CheckControlExistInDivObj(GeneTabCodeEx.divCode, 'span', 'spnTabName');
      await GeneTabCodeEx.SetCurrentMachineNameView();
      if (objGCResult.errorId == 0) {
        const objWriteResult = await tryWriteCodeToLocalFile(
          intApplicationTypeId,
          strCodeTypeId,
          objGCResult.re_FileNameWithModuleName,
          objGCResult.codeText,
        );
        SetTextAreaValueByIdInDivObj(GeneTabCodeEx.divCode, 'txtCodeText', objGCResult.codeText);
        SetInputValueInDivObj(GeneTabCodeEx.divCode, 'txtClsName', objGCResult.re_FuncName);
        SetInputValueInDivObj(GeneTabCodeEx.divCode, 'txtFileName', objGCResult.re_FuncCHName);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnClassName', '函数名');
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnFileName', '函数说明');

        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnPrjName', objGCResult.prjName);
        SetSpanHtmlByIdInDivObj(
          GeneTabCodeEx.divCode,
          'spnSQLDSTypeName',
          objGCResult.dataBaseType,
        );
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnCodeTypeName', objGCResult.codeTypeName);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnLangType', objGCResult.langType);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnGCUserId', objGCResult.gcUserId);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnTabName', objGCResult.tabName);
        const strInfo = objWriteResult.isSuccess
          ? `生成代码成功并已写入文件!${objWriteResult.msg}. 时间:${strCurrDate}`
          : `生成代码成功, 但写入文件失败:${objWriteResult.msg}. 时间:${strCurrDate}`;
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult', strInfo);
      } else {
        SetTextAreaValueByIdInDivObj(GeneTabCodeEx.divCode, 'txtCodeText', objGCResult.errorMsg);
        SetInputValueInDivObj(GeneTabCodeEx.divCode, 'txtClsName', objGCResult.re_FuncName);
        SetInputValueInDivObj(
          GeneTabCodeEx.divCode,
          'txtFileName',
          objGCResult.re_FileNameWithModuleName,
        );
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnPrjName', objGCResult.prjName);
        SetSpanHtmlByIdInDivObj(
          GeneTabCodeEx.divCode,
          'spnSQLDSTypeName',
          objGCResult.dataBaseType,
        );
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnCodeTypeName', objGCResult.codeTypeName);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnLangType', objGCResult.langType);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnGCUserId', objGCResult.gcUserId);
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnTabName', objGCResult.tabName);
        const strInfo = `生成代码不成功!时间:${strCurrDate}`;
        SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnResult', strInfo);
      }
    } catch (e: any) {
      const strMsg = `生成代码不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  public get qsTabId() {
    const strName = 'tabId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }

  public static async BindTr_CodeType(
    ul_App: TreeNodeImpl,
    strCodeTypeId: string,
    intApplicationTypeId: number,
    strCmPrjId: string,
    strTabId: string,
    strSqlDsTypeId: string,
  ) {
    const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
    if (objCodeType == null) {
      const strMsg = Format('代码类型Id:[{0}]，没有相应的类型，请检查！', strCodeTypeId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    const strClassName = await vCodeType_SimEx_Function4GeneCodeEx_(
      objCodeType.codeTypeId,
      objCodeType.progLangTypeId,
      strTabId,
      strPrjId,
    );
    const objProgLangType = await ProgLangType_GetObjByProgLangTypeIdCache({
      progLangTypeId: objCodeType.progLangTypeId,
    });
    const strGCFileName = Format(
      '{1}({2})',
      objCodeType.codeTypeName,
      strClassName,
      objProgLangType?.progLangTypeSimName,
    );
    let strGCFileName_Sim = strGCFileName;
    if (strGCFileName_Sim.length > 35) {
      strGCFileName_Sim = `${strGCFileName_Sim.substr(0, 36)}...`;
    }
    const tnCodeType = new TreeNodeImpl(
      objCodeType.codeTypeId,
      objCodeType.codeTypeName,
      'CodeType',
      false,
      ul_App,
    );
    const strMachineName = String(await getMachineNameFromLocalAgent()).trim();
    tnCodeType.title = await GeneTabCodeEx.BuildCodeTypeNodeTooltip(
      strMachineName,
      intApplicationTypeId,
      strCodeTypeId,
      objCodeType.dependsOn,
      objCodeType.isDefaultOverride,
      strTabId || '空',
    );

    const a_FileName: HTMLAnchorElement = document.createElement('a');
    // a_FileName.href = 'javascript:void(0)';
    a_FileName.id = Format('aFileName_{0}_{1}', intApplicationTypeId, strCodeTypeId);
    a_FileName.setAttribute('applicationTypeId', intApplicationTypeId.toString());
    a_FileName.setAttribute('codeTypeId', strCodeTypeId);
    a_FileName.title = Format('生成{0}代码,文件名:{1}', objCodeType.codeTypeSimName, strGCFileName);
    a_FileName.innerText = strGCFileName_Sim;
    (function (strTabId1, strCodeTypeId1, intApplicationTypeId1) {
      a_FileName.onclick = async function () {
        await GeneTabCodeEx.CodeType_Click(strTabId1, strCodeTypeId1, intApplicationTypeId1);
      };
    })(strTabId, strCodeTypeId, intApplicationTypeId);

    //aLevel2.style.cssFloat = "left";
    if (codeTypeId.value == '') {
      //存放Id
      codeTypeId.value = strCodeTypeId;

      //                        strhtml += '<a style="float:left;" href="#" title="' + objCodeType.codeTypeName + '" class="selected">' + strCodeTypeName + '</a>';
      a_FileName.classList.add('a_subselected');
    }

    //else {
    //    strhtml += '<a style="float:left;" href="#" title="' + objCodeType.codeTypeName + '">' + strCodeTypeName + '</a>';
    //}

    tnCodeType.label += a_FileName.innerHTML;
    //ulLevel1.appendChild(liLevel2);

    const strFunctionTemplateId = enumFunctionTemplate.AllFunctionSet_0001;
    const arrFunction4GeneCode = await Function4GeneCodeEx_GetObjLstByFunctionTemplateIdCache(
      strCodeTypeId,
      strFunctionTemplateId,
      strSqlDsTypeId,
    );

    let arrFunction4GeneCodeEx = arrFunction4GeneCode.map(vFunction4GeneCode_SimEx_CopyToEx);
    arrFunction4GeneCodeEx = arrFunction4GeneCodeEx.filter((x) => x.featureId != '0231');

    for (const objInFor of arrFunction4GeneCodeEx) {
      let strFuncName = '';
      // let strFuncCNName = '';
      if (IsNullOrEmpty(objInFor.funcId4Code) == true) {
        const objFuncGCTypeEN = await FuncGCType_GetObjByFuncGCTypeIdCache(objInFor.funcGCTypeId);
        if (objFuncGCTypeEN == null) return;
        strFuncName = Format('{0}(?)-{1}', objFuncGCTypeEN.funcGCTypeName, objInFor.funcName);
      } else {
        const objvFunction4Code_Sim = await vFunction4Code_SimEx_GetObjByFuncId4CodeCacheEx(
          objInFor.funcId4Code,
        );

        if (objvFunction4Code_Sim == null) {
          const objFuncGCTypeEN = await FuncGCType_GetObjByFuncGCTypeIdCache(objInFor.funcGCTypeId);
          if (objFuncGCTypeEN == null) return;
          strFuncName = Format('{0}(?)-{1}', objFuncGCTypeEN.funcGCTypeName, objInFor.funcName);
        } else {
          strFuncName = objvFunction4Code_Sim.funcName4Code;
          // strFuncCNName = objvFunction4Code_Sim.funcCHName4Code;
          strFuncName = await Function4CodeEx_AccessFuncName(strFuncName, strTabId, strCmPrjId);
        }
      }
      objInFor.funcName = strFuncName;
      //objInFor.funcCHName4GC = strFuncCNName;
    }
    arrFunction4GeneCodeEx = arrFunction4GeneCodeEx.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimENEx.con_FuncName, 'Asc'),
    );

    //循环数据
    for (let j = 0; j < arrFunction4GeneCodeEx.length; j++) {
      const objFunction4GeneCode = arrFunction4GeneCodeEx[j];
      await GeneTabCodeEx.BindTr_Function4GeneCode(
        tnCodeType,
        objFunction4GeneCode,
        strCodeTypeId,
        intApplicationTypeId,
        strPrjId,
        strTabId,
      );
    }
    //a_FileName.appendChild(ul_CodeType);
    //ul_App.appendChild(a_FileName);

    if (ul_App.children == null) ul_App.children = [];
    ul_App.children.push(tnCodeType);
  }

  public async BindTr_Function4GeneCodeBak(
    ul_CodeType: HTMLUListElement,
    objFunction4GeneCode: clsvFunction4GeneCode_SimENEx,
    strCodeTypeId: string,
    intApplicationTypeId: number,
    strPrjId: string,
    strTabId: string,
  ) {
    const strFuncName = objFunction4GeneCode.funcName;
    let strFuncName_Sim = strFuncName;
    if (strFuncName_Sim.length > 35) {
      strFuncName_Sim = `${strFuncName_Sim.substr(0, 36)}...`;
    }

    //strhtml += '<li id="' + strCodeTypeId + '" onclick=btnSelectPaper("' + strCodeTypeId + ')>';
    const li_Function4GC: HTMLLIElement = document.createElement('li');
    li_Function4GC.id = Format(
      'liFunction4GC_{0}_{1}_{2}',
      intApplicationTypeId,
      strCodeTypeId,
      objFunction4GeneCode.funcId4GC,
    );
    li_Function4GC.setAttribute('funcId4GC', objFunction4GeneCode.funcId4GC);
    li_Function4GC.setAttribute('codeTypeId', strCodeTypeId);
    li_Function4GC.setAttribute('applicationTypeId', intApplicationTypeId.toString());
    li_Function4GC.classList.add('parent_li');
    li_Function4GC.classList.add('li_subnoselected');
    (function (strTabId1, strFuncId4GC, strCodeTypeId1, intApplicationTypeId1) {
      li_Function4GC.onclick = function () {
        GeneTabCodeEx.Function4GeneCode_Click(
          strTabId1,
          strFuncId4GC,
          strCodeTypeId1,
          intApplicationTypeId1,
        );
      };
    })(strTabId, objFunction4GeneCode.funcId4GC, strCodeTypeId, intApplicationTypeId);
    //                    SetOnClick(liLevel2, strCodeTypeId);
    //liLevel2.setAttribute("onclick", Format("btnSelectPaper('{0}')", strCodeTypeId ));
    //默认存放第一条数据显示；
    //判断存放的id控件是否为空；
    //const spnLevel2: HTMLSpanElement = document.createElement("span");
    ////aLevel1.href = "#";
    //spnLevel2.id = Format("{0}", objFunction4GeneCode.funcId4GC);
    //spnLevel2.classList.add('main');
    //spnLevel2.title = objFunction4GeneCode.funcName4GC;
    //spnLevel2.setAttribute("funcId4GC", objFunction4GeneCode.funcId4GC.toString());
    const iLevel2 = <HTMLElement>document.createElement('i');
    iLevel2.classList.add('icon-plus-sign');
    //let txtLevel2 = <HTMLElement>document.createElement("text");
    //txtLevel2.textContent = objFunction4GeneCode.funcName4GC;
    //spnLevel2.appendChild(iLevel2);
    //spnLevel2.appendChild(txtLevel2);

    const a_FuncName: HTMLAnchorElement = document.createElement('a');
    // a_FuncName.href = 'javascript:void(0)';
    a_FuncName.title = Format('生成函数代码:{0}({1})', strFuncName, objFunction4GeneCode.funcName);
    a_FuncName.innerText = strFuncName_Sim;
    //aLevel2.style.cssFloat = "left";
    if (codeTypeId.value == '') {
      //存放Id
      codeTypeId.value = strCodeTypeId;
      //                        strhtml += '<a style="float:left;" href="#" title="' + objCodeType.codeTypeName + '" class="selected">' + strCodeTypeName + '</a>';
      a_FuncName.classList.add('a_subselected');
    }

    //else {
    //    strhtml += '<a style="float:left;" href="#" title="' + objCodeType.codeTypeName + '">' + strCodeTypeName + '</a>';
    //}
    //liLevel_Function4GC.appendChild(iLevel2);
    li_Function4GC.appendChild(a_FuncName);
    ul_CodeType.appendChild(li_Function4GC);
  }

  public static async BindTr_Function4GeneCode(
    ul_CodeType: TreeNodeImpl,
    objFunction4GeneCode: clsvFunction4GeneCode_SimENEx,
    strCodeTypeId: string,
    intApplicationTypeId: number,
    strPrjId: string,
    strTabId: string,
  ) {
    const strFuncName = objFunction4GeneCode.funcName;

    let strFuncName_Sim = strFuncName;
    if (strFuncName_Sim.length > 35) {
      strFuncName_Sim = `${strFuncName_Sim.substr(0, 36)}...`;
    }
    const tnFunction4GC = new TreeNodeImpl(
      objFunction4GeneCode.funcId4GC,
      objFunction4GeneCode.funcName,
      'Function4GeneCode',
      false,
      ul_CodeType,
    );
    //strhtml += '<li id="' + strCodeTypeId + '" onclick=btnSelectPaper("' + strCodeTypeId + ')>';
    const li_Function4GC: HTMLLIElement = document.createElement('li');
    li_Function4GC.id = Format(
      'liFunction4GC_{0}_{1}_{2}',
      intApplicationTypeId,
      strCodeTypeId,
      objFunction4GeneCode.funcId4GC,
    );
    li_Function4GC.setAttribute('funcId4GC', objFunction4GeneCode.funcId4GC);
    li_Function4GC.setAttribute('codeTypeId', strCodeTypeId);
    li_Function4GC.setAttribute('applicationTypeId', intApplicationTypeId.toString());
    li_Function4GC.classList.add('parent_li');
    li_Function4GC.classList.add('li_subnoselected');
    (function (strTabId1, strFuncId4GC, strCodeTypeId1, intApplicationTypeId1) {
      li_Function4GC.onclick = function () {
        GeneTabCodeEx.Function4GeneCode_Click(
          strTabId1,
          strFuncId4GC,
          strCodeTypeId1,
          intApplicationTypeId1,
        );
      };
    })(strTabId, objFunction4GeneCode.funcId4GC, strCodeTypeId, intApplicationTypeId);
    const iLevel2 = <HTMLElement>document.createElement('i');
    iLevel2.classList.add('icon-plus-sign');

    const a_FuncName: HTMLAnchorElement = document.createElement('a');

    a_FuncName.title = Format('生成函数代码:{0}({1})', strFuncName, objFunction4GeneCode.funcName);
    a_FuncName.innerText = strFuncName_Sim;

    if (codeTypeId.value == '') {
      codeTypeId.value = strCodeTypeId;

      a_FuncName.classList.add('a_subselected');
    }

    tnFunction4GC.label += a_FuncName;
    if (ul_CodeType.children == null) ul_CodeType.children = [];
    ul_CodeType.children.push(tnFunction4GC);
  }
  // public async BindTr_TabGeneCodeBak(
  //   divUl: HTMLDivElement,
  //   strDependsOn: string,
  //   strTabMainTypeId: string,
  //   strFunctionTemplateId: string,
  //   strTabId: string,
  //   strSqlDsTypeId: string,
  // ) {
  //   const strThisFuncName = this.BindTr_TabGeneCode.name;
  //   console.log('BindTr_GC');
  //   const arrUserCodePrjMainPath = await UserCodePrjMainPathEx_GetObjLstByCmPrjIdCache(
  //     clsPrivateSessionStorage.cmPrjId,
  //     clsPubLocalStorage.userId,
  //   );
  //   if (arrUserCodePrjMainPath == null) {
  //     const objCmProject = await CMProject_GetObjByKeyCache(clsPrivateSessionStorage.cmPrjId);
  //     if (objCmProject == null) return;
  //     const strMsg = Format(
  //       'Cm工程:{0}({1})没有相关的应用类型，请检查！(in {2}.{3})',
  //       objCmProject.cmPrjName,
  //       objCmProject.cmPrjId,
  //       this.constructor.name,
  //       strThisFuncName,
  //     );
  //     console.error(strMsg);
  //     alert(strMsg);
  //     return;
  //   }
  //   // const strCurrMajorName = clsPubLocalStorage.majorName;
  //   const arrApplicationTypeId = arrUserCodePrjMainPath
  //     .filter((x) => x.inUse == true)
  //     .map((x) => x.applicationTypeId);
  //   let arrApplicationTypeObjLst: Array<clsApplicationTypeEN> =
  //     await ApplicationType_GetObjLstCache();
  //   arrApplicationTypeObjLst = arrApplicationTypeObjLst
  //     .filter((x) => arrApplicationTypeId.indexOf(x.applicationTypeId) > -1 && x.isVisible == true)
  //     .sort(ApplicationTypeEx_SortFunByOrderNum);
  //   const arrCodeType = await vCodeType_Sim_GetObjLstCache();
  //   const arrCodeType_DependsOn = arrCodeType.filter(
  //     (x) => x.inUse == true && x.dependsOn == 'Table',
  //   );
  //   const arrCodeTypeId_DependsOn = arrCodeType_DependsOn.map((x) => x.codeTypeId);
  //   let arrAppCodeTypeRelaObjLst: Array<clsAppCodeTypeRelaEN> =
  //     await AppCodeTypeRela_GetObjLstCache(); //strCondition_CodeType);
  //   arrAppCodeTypeRelaObjLst = arrAppCodeTypeRelaObjLst
  //     .filter(
  //       (x) =>
  //         arrCodeTypeId_DependsOn.indexOf(x.codeTypeId) > -1 && x.tabMainTypeId == strTabMainTypeId,
  //     )
  //     .sort((x) => x.orderNum);
  //   //strCondition_Function4GeneCode);
  //   // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
  //   //const strCmPrjId = ApplicationTypeCRUD_EditEx.CmPrjIdCache;
  //   //const intApplicationTypeId = 0;

  //   divUl.innerHTML = '';
  //   const ulTreeBind: HTMLUListElement = document.createElement('ul');
  //   ulTreeBind.id = 'TreeBind';
  //   ulTreeBind.classList.add('st_tree');
  //   // const strhtml = '';

  //   for (let i = 0; i < arrApplicationTypeObjLst.length; i++) {
  //     const objApplicationType = arrApplicationTypeObjLst[i];
  //     const arrAppCodeTypeRelaObjLst_Sel = arrAppCodeTypeRelaObjLst
  //       .filter((x) => x.applicationTypeId == objApplicationType.applicationTypeId)
  //       .sort(AppCodeTypeRelaEx_SortFunByOrderNum);

  //     if (arrAppCodeTypeRelaObjLst_Sel.length == 0) continue;
  //     //strhtml += '<li class="li">';
  //     //strhtml += '<a href="#" id="' + arrFuncModule_AgcObjLst[i].applicationTypeId + '" class="main" title="' + arrFuncModule_AgcObjLst[i].funcModuleName + '" onclick=main_Click("' + arrFuncModule_AgcObjLst[i].applicationTypeId + '")>' + arrFuncModule_AgcObjLst[i].funcModuleName + '</a>';

  //     const li_App: HTMLLIElement = document.createElement('li');
  //     li_App.classList.add('parent_li');
  //     li_App.classList.add('li_noselected');
  //     li_App.classList.add('li_App');

  //     li_App.id = Format('liApp_{0}', objApplicationType.applicationTypeId);
  //     li_App.setAttribute('state', 'open');
  //     li_App.setAttribute('applicationTypeId', objApplicationType.applicationTypeId.toString());

  //     const spnLevelApp: HTMLSpanElement = document.createElement('span');
  //     //aLevel1.href = "#";
  //     spnLevelApp.id = Format('{0}', objApplicationType.applicationTypeId);
  //     spnLevelApp.classList.add('main');
  //     spnLevelApp.title = objApplicationType.applicationTypeName;
  //     spnLevelApp.setAttribute(
  //       'applicationTypeId',
  //       objApplicationType.applicationTypeId.toString(),
  //     );
  //     const iLevel1 = <HTMLElement>document.createElement('i');
  //     iLevel1.classList.add('icon-plus-sign');
  //     //aLevel1.setAttribute("onclick", Format("main_Click('{0}')", objApplicationType.applicationTypeId));
  //     //for (const i = 0; i < pAry.length; i++) {
  //     //    (function (arg) {
  //     //        pAry[i].onclick = function () {
  //     //            alert(arg);
  //     //        };
  //     //    })(i);//调用时参数
  //     //}

  //     //(function (strApplicationTypeId) {
  //     //    aLevel1.onclick = (function () {
  //     //        GeneTabCodeEx.ApplicationType_Click(strApplicationTypeId);
  //     //    });
  //     //})(objApplicationType.applicationTypeId);
  //     const txtLevelApp = <HTMLElement>document.createElement('text');
  //     txtLevelApp.textContent = objApplicationType.applicationTypeName;
  //     spnLevelApp.appendChild(iLevel1);
  //     spnLevelApp.appendChild(txtLevelApp);
  //     //spnLevel1.innerHTML = objApplicationType.applicationTypeName;
  //     li_App.appendChild(spnLevelApp);

  //     //strhtml += '<ul class="submenu" id="ul' + arrFuncModule_AgcObjLst[i].applicationTypeId + '">';
  //     const ul_App: HTMLUListElement = document.createElement('ul');
  //     ul_App.classList.add('submenu');
  //     ul_App.id = Format('ul{0}', arrApplicationTypeObjLst[i].applicationTypeId);
  //     //循环数据
  //     for (let j = 0; j < arrAppCodeTypeRelaObjLst_Sel.length; j++) {
  //       await this.BindTr_CodeType(
  //         ul_App,
  //         arrAppCodeTypeRelaObjLst_Sel[j].codeTypeId,
  //         objApplicationType.applicationTypeId,
  //         clsPrivateSessionStorage.cmPrjId,
  //         strTabId,
  //         strSqlDsTypeId,
  //       );
  //     }
  //     li_App.appendChild(ul_App);
  //     ulTreeBind.appendChild(li_App);
  //   }

  //   divUl.appendChild(ulTreeBind);
  // }
  public static async BindTr_TabGeneCode(
    strTabMainTypeId: string,
    strTabId: string,
    strSqlDsTypeId: string,
  ): Promise<Array<TreeNodeImpl>> {
    const CMProjectAppRelaStore = useCMProjectAppRelaStore();
    // const strThisFuncName = this.BindTr_TabGeneCode.name;
    const arrTreeNode = new Array<TreeNodeImpl>();

    console.log('BindTr_GC');
    // const arrUserCodePrjMainPath = await UserCodePrjMainPathEx_GetObjLstByCmPrjIdCache(
    //   clsPrivateSessionStorage.cmPrjId,
    //   clsPubLocalStorage.userId,
    // );
    // if (arrUserCodePrjMainPath == null) {
    //   const objCmProject = await CMProject_GetObjByKeyCache(clsPrivateSessionStorage.cmPrjId);
    //   if (objCmProject == null) return arrTreeNode;
    //   const strMsg = Format(
    //     'Cm工程:{0}({1})没有相关的应用类型，请检查！(in {2}.{3})',
    //     objCmProject.cmPrjName,
    //     objCmProject.cmPrjId,
    //     this.constructor.name,
    //     strThisFuncName,
    //   );
    //   console.error(strMsg);
    //   alert(strMsg);
    //   return arrTreeNode;
    // }

    const arrApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeIdLstByCmPrjId(
      clsPrivateSessionStorage.cmPrjId,
    );

    let arrApplicationTypeObjLst: Array<clsApplicationTypeEN> =
      await ApplicationType_GetObjLstCache();
    arrApplicationTypeObjLst = arrApplicationTypeObjLst
      .filter((x) => arrApplicationTypeId.indexOf(x.applicationTypeId) > -1 && x.isVisible == true)
      .sort(ApplicationTypeEx_SortFunByOrderNum);
    const arrCodeType = await vCodeType_Sim_GetObjLstCache();
    const arrCodeType_DependsOn = arrCodeType.filter(
      (x) => x.inUse == true && x.dependsOn == 'Table',
    );
    const arrCodeTypeId_DependsOn = arrCodeType_DependsOn.map((x) => x.codeTypeId);
    let arrAppCodeTypeRelaObjLst: Array<clsAppCodeTypeRelaEN> =
      await AppCodeTypeRela_GetObjLstCache(); //strCondition_CodeType);
    arrAppCodeTypeRelaObjLst = arrAppCodeTypeRelaObjLst
      .filter(
        (x) =>
          arrCodeTypeId_DependsOn.indexOf(x.codeTypeId) > -1 && x.tabMainTypeId == strTabMainTypeId,
      )
      .sort((x) => x.orderNum);

    let tnApp;
    for (let i = 0; i < arrApplicationTypeObjLst.length; i++) {
      const objApplicationType = arrApplicationTypeObjLst[i];
      const arrAppCodeTypeRelaObjLst_Sel = arrAppCodeTypeRelaObjLst
        .filter((x) => x.applicationTypeId == objApplicationType.applicationTypeId)
        .sort(AppCodeTypeRelaEx_SortFunByOrderNum);

      if (arrAppCodeTypeRelaObjLst_Sel.length == 0) continue;
      tnApp = new TreeNodeImpl(
        objApplicationType.applicationTypeId.toString(),
        objApplicationType.applicationTypeName,
        'ApplicationType',
        false,
        null,
      );

      const spnLevelApp: HTMLSpanElement = document.createElement('span');
      //aLevel1.href = "#";
      spnLevelApp.id = Format('{0}', objApplicationType.applicationTypeId);
      spnLevelApp.classList.add('main');
      spnLevelApp.title = objApplicationType.applicationTypeName;
      spnLevelApp.setAttribute(
        'applicationTypeId',
        objApplicationType.applicationTypeId.toString(),
      );
      const iLevel1 = <HTMLElement>document.createElement('i');
      iLevel1.classList.add('icon-plus-sign');

      //strhtml += '<ul class="submenu" id="ul' + arrFuncModule_AgcObjLst[i].applicationTypeId + '">';
      // const ul_App: HTMLUListElement = document.createElement('ul');
      // ul_App.classList.add('submenu');
      // ul_App.id = Format('ul{0}', arrApplicationTypeObjLst[i].applicationTypeId);
      //循环数据
      for (let j = 0; j < arrAppCodeTypeRelaObjLst_Sel.length; j++) {
        await this.BindTr_CodeType(
          tnApp,
          arrAppCodeTypeRelaObjLst_Sel[j].codeTypeId,
          objApplicationType.applicationTypeId,
          clsPrivateSessionStorage.cmPrjId,
          strTabId,
          strSqlDsTypeId,
        );
      }

      arrTreeNode.push(tnApp);
    }

    return arrTreeNode;
    // divUl.appendChild(ulTreeBind);
  }
  public static ApplicationType_Click(strKey: number) {
    GeneTabCodeEx.intApplicationTypeIdCache = strKey;
    const liLevel1: HTMLLIElement = <HTMLLIElement>document.getElementById(`liL1_${strKey}`);
    if (liLevel1 == null) return;
    liLevel1.classList.remove('li_noselected');
    liLevel1.classList.add('selected');
    const strState = liLevel1.getAttribute('state');

    const parUL: HTMLUListElement = <HTMLUListElement>liLevel1.parentElement;
    const arrAllLi = parUL.children;
    if (strState == 'close') {
      $(`#${strKey}`).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
      $(`#ul${strKey}`).show();
      liLevel1.setAttribute('state', 'open');
      //flag = false;
    } else {
      $(`#${strKey}`).css('background', 'url(../images/st_folder.gif) no-repeat left');
      $(`#ul${strKey}`).hide();
      liLevel1.setAttribute('state', 'close');
    }
    for (let i = 0; i < arrAllLi.length; i++) {
      const objLi = arrAllLi[i];
      const objLi_a: HTMLAnchorElement = <HTMLAnchorElement>objLi.firstChild;
      const strOtherKey = objLi_a.id;
      if (strOtherKey != strKey.toString()) {
        $(`#${strOtherKey}`).css('background', 'url(../images/st_folder.gif) no-repeat left');
        $(`#ul${strOtherKey}`).hide();
        const liLevel2: HTMLLIElement = <HTMLLIElement>(
          document.getElementById(`liL1_${strOtherKey}`)
        );
        if (liLevel2 == null) return;
        liLevel2.setAttribute('state', 'close');
        liLevel2.classList.remove('li_noselected');
        liLevel2.classList.add('li_selected');
      }
    }
  }

  private static IsGeneByDependencyEnabled(): boolean {
    const objInput = GeneTabCodeEx.divCode?.querySelector(
      '#chkGeneByDependency',
    ) as HTMLInputElement | null;
    return objInput?.checked === true;
  }

  private static SetGeneProgressText(strText: string): void {
    SetSpanHtmlByIdInDivObj(GeneTabCodeEx.divCode, 'spnGeneProgress', strText);
  }

  private static async GetGeneOrderByDependency(
    strCodeTypeId: string,
    intApplicationTypeId: number,
  ): Promise<Array<string>> {
    const arrAppCodeTypeRelaObjLst = await AppCodeTypeRela_GetObjLstCache();
    const arrCodeTypeIdInApp = arrAppCodeTypeRelaObjLst
      .filter(
        (x) =>
          x.applicationTypeId == intApplicationTypeId &&
          x.tabMainTypeId == enumTabMainType.DataTab_0001,
      )
      .map((x) => x.codeTypeId);

    const codeTypeSet = new Set<string>(arrCodeTypeIdInApp);
    codeTypeSet.add(strCodeTypeId);

    const arrCodeTypeId = [...codeTypeSet];
    if (arrCodeTypeId.length === 0) return [strCodeTypeId];

    const strInSql = arrCodeTypeId.map((x) => `'${x}'`).join(',');
    const arrRelation = await GC_CodeTypeRelation_GetObjLstAsync(
      `ParentCodeTypeId in (${strInSql})`,
    );

    // 规则: Parent 依赖 Child, 生成 Parent 之前先生成 Child。
    const dependencyByNode = new Map<string, Array<string>>();
    arrCodeTypeId.forEach((id) => dependencyByNode.set(id, []));
    arrRelation.forEach((edge) => {
      if (!codeTypeSet.has(edge.parentCodeTypeId) || !codeTypeSet.has(edge.childCodeTypeId)) return;
      const arrDep = dependencyByNode.get(edge.parentCodeTypeId) ?? [];
      if (arrDep.includes(edge.childCodeTypeId)) return;
      arrDep.push(edge.childCodeTypeId);
      dependencyByNode.set(edge.parentCodeTypeId, arrDep);
    });

    const requiredSet = new Set<string>();
    const dfsDep = (id: string) => {
      if (requiredSet.has(id)) return;
      requiredSet.add(id);
      const arrDep = dependencyByNode.get(id) ?? [];
      arrDep.forEach((depId) => dfsDep(depId));
    };
    dfsDep(strCodeTypeId);

    const indegree = new Map<string, number>();
    const outgoing = new Map<string, Array<string>>();
    requiredSet.forEach((id) => {
      indegree.set(id, 0);
      outgoing.set(id, []);
    });

    requiredSet.forEach((nodeId) => {
      const arrDep = dependencyByNode.get(nodeId) ?? [];
      arrDep.forEach((depId) => {
        if (!requiredSet.has(depId)) return;
        outgoing.get(depId)?.push(nodeId);
        indegree.set(nodeId, (indegree.get(nodeId) ?? 0) + 1);
      });
    });

    const compareId = (a: string, b: string) => a.localeCompare(b, 'zh-CN');
    const queue = [...requiredSet].filter((id) => (indegree.get(id) ?? 0) === 0).sort(compareId);
    const orderedId: Array<string> = [];
    while (queue.length > 0) {
      const currId = queue.shift() as string;
      orderedId.push(currId);
      const arrNext = outgoing.get(currId) ?? [];
      arrNext.forEach((nextId) => {
        const intNextInDegree = (indegree.get(nextId) ?? 0) - 1;
        indegree.set(nextId, intNextInDegree);
        if (intNextInDegree === 0) {
          queue.push(nextId);
          queue.sort(compareId);
        }
      });
    }

    if (orderedId.length < requiredSet.size) {
      const arrRemain = [...requiredSet].filter((id) => orderedId.includes(id) == false);
      arrRemain.sort(compareId);
      orderedId.push(...arrRemain);
    }
    return orderedId;
  }

  public static async CodeType_Click(
    strTabId: string,
    strCodeTypeId: string,
    intApplicationTypeId: number,
  ) {
    if (this.IsGeneByDependencyEnabled()) {
      const arrCodeTypeGeneOrder = await this.GetGeneOrderByDependency(
        strCodeTypeId,
        intApplicationTypeId,
      );
      SetSpanHtmlByIdInDivObj(
        GeneTabCodeEx.divCode,
        'spnResult2',
        `按依赖顺序生成: ${arrCodeTypeGeneOrder.join(' -> ')}`,
      );
      const intTotal = arrCodeTypeGeneOrder.length;
      for (let i = 0; i < arrCodeTypeGeneOrder.length; i++) {
        const strCodeTypeIdInFor = arrCodeTypeGeneOrder[i];
        this.SetGeneProgressText(
          `本次已生成到第${i + 1}步/共${intTotal}步（${strCodeTypeIdInFor}）`,
        );
        await GeneTabCodeEx.GeneCode4Tab(strTabId, strCodeTypeIdInFor, intApplicationTypeId);
      }
      this.SetGeneProgressText(`本次已生成到第${intTotal}步/共${intTotal}步，已完成`);
    } else {
      this.SetGeneProgressText(`本次已生成到第1步/共1步（${strCodeTypeId}）`);
      await GeneTabCodeEx.GeneCode4Tab(strTabId, strCodeTypeId, intApplicationTypeId);
      this.SetGeneProgressText('本次已生成到第1步/共1步，已完成');
    }

    let strApp_Curr = '';
    const strLiId = Format('aFileName_{0}_{1}', intApplicationTypeId, strCodeTypeId);
    const a_FileName = <HTMLAnchorElement>document.getElementById(strLiId);
    if (a_FileName != null) {
      const strTemp = a_FileName.getAttribute('applicationTypeId');
      if (strTemp != null) {
        strApp_Curr = strTemp;
      }
      const arrSubSelectedEle0 = document.getElementsByClassName('li_subselected');
      const arrSubSelectedEle = GetArray(arrSubSelectedEle0);
      arrSubSelectedEle.forEach((x) => {
        const y = <HTMLLIElement>x;
        this.SetNoSelectedClass4Li(y);
      });
      const liFuncId4GC = <HTMLLIElement>a_FileName.parentElement;
      this.SetSelectedClass4Li(liFuncId4GC);

      a_FileName.classList.remove('a_subnoselected');
      a_FileName.classList.add('a_subselected');
    }
    this.OpenApp(Number(strApp_Curr));
    this.OpenCodeType(Number(strApp_Curr), strCodeTypeId);

    const liLevel2: HTMLLIElement = <HTMLLIElement>document.getElementById(`liL2_${strCodeTypeId}`);
    if (liLevel2 == null) return;
    liLevel2.classList.remove('li_subnoselected');
    liLevel2.classList.add('li_subselected');
    const objLi_a: HTMLAnchorElement = <HTMLAnchorElement>liLevel2.firstChild;
    objLi_a.classList.remove('a_subnoselected');
    objLi_a.classList.add('a_subselected');
    if (liLevel2.parentElement == null) {
      const strMsg = Format('根据区域Id:{0}的结点获取界面结点出错！(父结点为null)', strCodeTypeId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (liLevel2.parentElement.parentElement == null) {
      const strMsg = Format(
        '根据区域Id:{0}的结点获取界面结点出错！(父结点的父结点为null)',
        strCodeTypeId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    console.log(strCodeTypeId);
  }

  public static SetSelectedClass4Li(objLi: HTMLLIElement) {
    objLi.classList.remove('li_subnoselected');
    objLi.classList.add('li_subselected');
    const arrLi_a = objLi.getElementsByTagName('a'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
    if (arrLi_a.length > 0) {
      const objLi_a = arrLi_a[0];
      objLi_a.classList.remove('a_subnoselected');
      objLi_a.classList.remove('a_parentselected');
      objLi_a.classList.add('a_subselected');
    }
    const arrLi_span = objLi.getElementsByTagName('span'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
    if (arrLi_span.length > 0) {
      const objLi_span = arrLi_span[0];
      objLi_span.classList.remove('span_subnoselected');
      objLi_span.classList.remove('span_parentselected');
      objLi_span.classList.add('span_subselected');
    }
  }

  public static SetParentSelectedClass4Li(objLi: HTMLLIElement) {
    objLi.classList.remove('li_subnoselected');
    objLi.classList.add('li_subselected');
    const arrLi_a = objLi.getElementsByTagName('a'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
    if (arrLi_a.length > 0) {
      const objLi_a = arrLi_a[0];
      objLi_a.classList.remove('a_subnoselected');
      objLi_a.classList.remove('a_subselected');
      objLi_a.classList.add('a_parentselected');
    }
    const arrLi_span = objLi.getElementsByTagName('span'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
    if (arrLi_span.length > 0) {
      const objLi_span = arrLi_span[0];
      objLi_span.classList.remove('span_subnoselected');
      objLi_span.classList.remove('span_subselected');
      objLi_span.classList.add('span_parentselected');
    }
  }

  public static SetNoSelectedClass4Li(objLi: HTMLLIElement) {
    objLi.classList.remove('li_subselected');
    objLi.classList.add('li_subnoselected');
    const arrLi_a = objLi.getElementsByTagName('a'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
    if (arrLi_a.length > 0) {
      const objLi_a = arrLi_a[0];
      objLi_a.classList.remove('a_subselected');
      objLi_a.classList.remove('a_parentselected');
      objLi_a.classList.add('a_subnoselected');
    }
    const arrLi_span = objLi.getElementsByTagName('span'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
    if (arrLi_span.length > 0) {
      const objLi_span = arrLi_span[0];
      objLi_span.classList.remove('span_subselected');
      objLi_span.classList.remove('span_parentselected');
      objLi_span.classList.add('span_subnoselected');
    }
  }
  public static Function4GeneCode_Click(
    strTabId: string,
    strFuncId4GC: string,
    strCodeTypeId: string,
    intApplicationTypeId: number,
  ) {
    //alert("sub_Click");

    GeneTabCodeEx.GeneCode4FuncId4GC(strTabId, strFuncId4GC, strCodeTypeId, intApplicationTypeId);
    //let strApp_Curr = "";

    const event = window.event;
    //console.log("1event:", event);
    if (event != null) {
      //const A1: HTMLAnchorElement = <HTMLAnchorElement>event;
      //A1.classList.add("subselected");
    }
    const strLi_CodeTypeId = Format('liCodeType_{0}_{1}', intApplicationTypeId, strCodeTypeId);
    const li_CodeType: HTMLLIElement = <HTMLLIElement>document.getElementById(strLi_CodeTypeId);
    if (li_CodeType == null) return;
    li_CodeType.classList.remove('li_subnoselected');
    li_CodeType.classList.add('li_subselected');

    //const objLi_a: HTMLAnchorElement = <HTMLAnchorElement>liLevel_CodeType.firstChild;

    const arrLi_a = li_CodeType.getElementsByTagName('a'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
    if (arrLi_a.length > 0) {
      const objLi_a = arrLi_a[0];
      objLi_a.classList.remove('a_subnoselected');
      objLi_a.classList.add('a_subselected');
    }
    const arrLi_span = li_CodeType.getElementsByTagName('span'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
    if (arrLi_span.length > 0) {
      const objLi_span = arrLi_span[0];
      objLi_span.classList.remove('span_subnoselected');
      objLi_span.classList.add('span_subselected');
    }
    this.OpenApp(intApplicationTypeId);
    this.OpenCodeType(intApplicationTypeId, strCodeTypeId);
    this.SetParentSelectedClass4Li(li_CodeType);

    const strLiId = Format(
      'liFunction4GC_{0}_{1}_{2}',
      intApplicationTypeId,
      strCodeTypeId,
      strFuncId4GC,
    );
    const liFuncId4GC = <HTMLLIElement>document.getElementById(strLiId);
    if (liFuncId4GC != null) {
      //const strTemp = liFuncId4GC.getAttribute("applicationTypeId");
      //if (strTemp != null) {
      //    strApp_Curr = strTemp;
      //}
      const arrSubSelectedEle0 = document.getElementsByClassName('li_subselected');
      const arrSubSelectedEle = GetArray(arrSubSelectedEle0);
      arrSubSelectedEle.forEach((x) => {
        //x.classList.remove("li_subselected");
        //x.classList.add("li_subnoselected");
        const y = <HTMLLIElement>x;
        this.SetNoSelectedClass4Li(y);
      });
      this.SetSelectedClass4Li(liFuncId4GC);
      //    liFuncId4GC.classList.remove("li_subnoselected");
      //    liFuncId4GC.classList.add("li_subselected");
    }

    if (li_CodeType.parentElement == null) {
      const strMsg = Format('根据区域Id:{0}的结点获取界面结点出错！(父结点为null)', strCodeTypeId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (li_CodeType.parentElement.parentElement == null) {
      const strMsg = Format(
        '根据区域Id:{0}的结点获取界面结点出错！(父结点的父结点为null)',
        strCodeTypeId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //const liLevel1: HTMLLIElement = <HTMLLIElement>liLevel2.parentElement?.parentElement;
    //const strViewId = liLevel1.id.substring(5);//.getAttribute("viewId");
    //console.log("1strApplicationTypeId", intApplicationTypeId);
    //const strState = liLevel2.getAttribute("state");

    console.log(strCodeTypeId);
  }
  public static OpenApp(intApplicationTypeId: number) {
    const arrAppElement0 = document.getElementsByClassName('li_App');
    const arrAppElement = GetArray(arrAppElement0);
    for (let i = 0; i < arrAppElement.length; i++) {
      const eleApp = arrAppElement[i];
      const strApp_Curr = eleApp.getAttribute('applicationTypeId');
      const intApp_Curr = Number(strApp_Curr);
      const arrUl_ul = eleApp.getElementsByTagName('ul'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
      if (arrUl_ul.length > 0) {
        const objUl = arrUl_ul[0];
        if (intApp_Curr == intApplicationTypeId) {
          objUl.style.display = '';
        } else {
          objUl.style.display = 'none';
        }
      }
    }
  }

  public static OpenCodeType(intApplicationTypeId: number, strCodeTypeId: string) {
    const strli_AppId = Format('liApp_{0}', intApplicationTypeId);
    const objLi_App = document.getElementById(strli_AppId);
    if (objLi_App == null) return;
    const arrCodeTypeElement0 = objLi_App.getElementsByClassName('li_CodeType');
    const arrCodeTypeElement = GetArray(arrCodeTypeElement0);
    for (let i = 0; i < arrCodeTypeElement.length; i++) {
      const eleLi_CodeType = <HTMLLIElement>arrCodeTypeElement[i];
      const strCodeTypeId_Curr = eleLi_CodeType.getAttribute('codeTypeId');

      const arrUl_ul = eleLi_CodeType.getElementsByTagName('ul'); //= <HTMLAnchorElement>liLevel_CodeType.firstChild;
      if (arrUl_ul.length > 0) {
        const objUl = arrUl_ul[0];
        if (strCodeTypeId_Curr == strCodeTypeId) {
          objUl.style.display = '';
          //this.SetParentSelectedClass4Li(eleLi_CodeType);
        } else {
          objUl.style.display = 'none';
        }
      }
    }
  }
  public get qsOp() {
    const strName = 'Op';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  public get GetOp(): string {
    if (IsNullOrEmpty(this.Op) == false) return this.Op;
    return this.qsOp;
  }
  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }
}

export async function GeneTabCodeEx_ShowCodeTypePathHoverMenu(
  evt: MouseEvent,
  objElement: HTMLElement,
  objNode: TreeNodeImpl,
  strCodeTypeId: string,
  intApplicationTypeId: number,
): Promise<void> {
  await GeneTabCodeEx.ShowCodeTypePathHoverMenu(
    evt,
    objElement,
    objNode,
    strCodeTypeId,
    intApplicationTypeId,
  );
}

export function GeneTabCodeEx_HideCodeTypePathHoverMenu(): void {
  GeneTabCodeEx.HideCodeTypePathHoverMenu();
}

export function setEvent4TreeBak20230717() {
  const treeElements = document.querySelectorAll('.tree li:has(ul)');
  console.log(treeElements);
  treeElements.forEach((element) => {
    element.classList.add('parent_li');
    const spanElement = element.querySelector(' :scope>span');
    if (spanElement) {
      spanElement.setAttribute('title', 'Collapse this branch');
      spanElement.addEventListener('click', (e) => {
        const ulElement = spanElement.nextElementSibling as HTMLElement;
        if (ulElement.style.display === 'none') {
          ulElement.style.display = 'block';
          spanElement.classList.remove('icon-plus-sign');
          spanElement.classList.add('icon-minus-sign');
        } else {
          ulElement.style.display = 'none';
          spanElement.classList.remove('icon-minus-sign');
          spanElement.classList.add('icon-plus-sign');
        }
        e.stopPropagation();
      });
    }
  });
}

export function setEvent4Tree() {
  const treeElements0 = document.querySelectorAll('.tree li:has(ul)');
  // console.log(treeElements0);
  const treeElements = GetArray(treeElements0);
  for (const element of treeElements) {
    element.classList.add('parent_li');
    const spanElement = element.querySelector(' :scope>span');
    if (spanElement) {
      spanElement.setAttribute('title', 'Collapse this branch');
      spanElement.addEventListener('click', (e) => {
        const ulElement = spanElement.nextElementSibling as HTMLElement;
        if (ulElement.style.display === 'none') {
          ulElement.style.display = 'block';
          // spanElement.classList.remove('icon-plus-sign');
          // spanElement.classList.add('icon-minus-sign');
        } else {
          ulElement.style.display = 'none';
          // spanElement.classList.remove('icon-minus-sign');
          // spanElement.classList.add('icon-plus-sign');
        }
        e.stopPropagation();
      });
    }
  }
}
