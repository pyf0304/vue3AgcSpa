import $ from 'jquery';
import DetailRegionFldsCRUDEx from '../RegionManage/DetailRegionFldsCRUDEx';
import DGRegionFldsCRUDEx from '../RegionManage/DGRegionFldsCRUDEx';
import EditRegionFldsCRUDEx from '../RegionManage/EditRegionFldsCRUDEx';
import ExcelExportRegionFldsCRUDEx from '../RegionManage/ExcelExportRegionFldsCRUDEx';
import FeatureRegionFldsCRUDEx from '../RegionManage/FeatureRegionFldsCRUDEx';
import QryRegionFldsCRUDEx from '../RegionManage/QryRegionFldsCRUDEx';
import ViewInfo_EditEx from './ViewInfo_EditEx';
import { clsGCPara } from '@/ts/L0Entity/clsGCPara';
import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';
import { enumCodeType } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { AutoGeneCode_GeneCodeAsync } from '@/ts/L3ForWApiEx/GeneCode/AutoGeneCodeWApi';
import { GC_CodeTypeRelation_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsGC_CodeTypeRelationWApi';
import {
  ApplicationType_GetNameByKeyCache,
  ApplicationType_GetObjByKeyCache,
} from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { createContextMenu, destroyContextMenu } from '@/components/basic/context-menu';

import {
  AppCodeTypeRelaEx_CopyToEx,
  AppCodeTypeRelaEx_FuncMapByFldName,
  AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache,
  AppCodeTypeRelaEx_SortFunByGroupNameAndOrderNum,
} from '@/ts/L3ForWApiEx/GeneCode/clsAppCodeTypeRelaExWApi';
import { ViewRegionEx_GetObjLstByViewIdCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { GetDistinctArray } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetWidthByWordStr } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { buildCodeTypeTooltip, showCodeTypePathEditDialog } from '@/ts/PubFun/CodeTypePathUi';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';

// import { ExcelExportRegionFldsCRUD } from '@/viewsBase/RegionManage/ExcelExportRegionFldsCRUD';

import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';

import { UserCodePath_GetObjLstCache } from '@/ts/L3ForWApi/SystemSet/clsUserCodePathWApi';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  clearLocalFileAccessLogs,
  getLocalAccessLogFilePath,
  getLocalFileAccessLogsByRecentMinutes,
  getLocalFileAccessRecentLogs,
  getMachineNameFromLocalAgent,
  syncLocalFileAccessLogsToFile,
  tryWriteCodeToLocalFile,
} from '@/ts/LocalFileAccess/LocalFileAccess';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { useUserCodeRootPathStore } from '@/store/modules/userCodeRootPath';
import { viewInfo4GC } from '@/views/PrjInterface/GeneViewCodeVueShare';
import { tabComponentRef, viewId_Main } from '@/views/PrjInterface/ViewInfo_AllPropVueShare';

/** GeneViewCodeEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class GeneViewCodeEx implements IShowList {
  private static readonly LOCAL_FILE_WRITE_URL = 'http://127.0.0.1:9527/api/agent/files/write';
  private static readonly LOCAL_FILE_WRITE_TOKEN = 'autogc-agent-local-dev';
  private static readonly LOCAL_CODE_ROOT_KEYS = [
    'agcLocalCodeRootPath',
    'AGC_LOCAL_CODE_ROOT_PATH',
    'currSelPrjPath',
    'projectPath',
  ];

  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFeature: HTMLDivElement; //功能区的层对象
  public static; //界面布局的层对象
  public static divList: HTMLDivElement; //列表区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divEdit: HTMLDivElement; //列表中的分页区的层对象
  public static divDetail: HTMLDivElement; //列表中的分页区的层对象
  public static divExcelExport: HTMLDivElement; //列表中的分页区的层对象
  public static divCodeTypeLst: HTMLDivElement; //列表中的分页区的层对象
  private static codeTypePathMenuTimer: number | null = null;

  public static GetLocalCodeRootPathFromStorage(): string {
    for (const strKey of GeneViewCodeEx.LOCAL_CODE_ROOT_KEYS) {
      const strValue = localStorage.getItem(strKey) ?? '';
      if (IsNullOrEmpty(strValue) == false && GeneViewCodeEx.IsAbsolutePath(strValue) == true) {
        return GeneViewCodeEx.NormalizePath(strValue);
      }
    }
    return '';
  }

  public static SetLocalCodeRootPathToStorage(strRootPath: string): {
    isSuccess: boolean;
    msg: string;
  } {
    const strRootPath2 = GeneViewCodeEx.NormalizePath(strRootPath.trim());
    if (IsNullOrEmpty(strRootPath2) == true) {
      return { isSuccess: false, msg: '本地根目录不能为空' };
    }
    if (GeneViewCodeEx.IsAbsolutePath(strRootPath2) == false) {
      return { isSuccess: false, msg: '本地根目录必须是绝对路径，例如 e:/Vue3Prj/vue3AgcSpa' };
    }
    localStorage.setItem('agcLocalCodeRootPath', strRootPath2);
    return { isSuccess: true, msg: '本地根目录已保存' };
  }

  public static ClearLocalCodeRootPathInStorage() {
    localStorage.removeItem('agcLocalCodeRootPath');
  }

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vViewInfo]！');
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vViewInfo':
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
    const objPage: GeneViewCodeEx = new GeneViewCodeEx();
    const objPageEdit: ViewInfo_EditEx = new ViewInfo_EditEx('ViewInfo_EditEx', objPage);

    switch (strCommandName) {
      case 'Query': //查询记录
        //objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'GeneViewCodeEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
  /**
   * 函数功能:页面导入,当页面开始运行时所发生的事件
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // viewId_Main.value = '00050322';
    // 在此处放置用户代码以初始化页面
    try {
      switch (this.qsOp) {
        case 'ViewEdit':
          break;
        case 'ViewRegionEdit':
          break;

        case '':
          //Main_ViewInfo.DispUserInfo();
          // await Main_ViewInfo.DispViewInfo();
          // await Main_ViewInfo.ShowCurrItem('GeneViewCode', '');
          break;
      }
      await GeneViewCodeEx.SetCurrentMachineNameView();
      GeneViewCodeEx.ShowRecentWriteLogsByCountOnPage(20);
      await this.VisualEffects();
      await this.ShowCodeTypeButton(viewId_Main.value);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  private static async SetCurrentMachineNameView(): Promise<void> {
    const strLabelId = '#lblCurrMachine2';
    const strRootLabelId = '#lblCurrRootPath2';
    const strRootBackupLabelId = '#lblCurrRootPathBackup2';
    try {
      const strMachineName = String(await getMachineNameFromLocalAgent()).trim();
      if (IsNullOrEmpty(strMachineName) == false) {
        $(strLabelId).text(strMachineName);
      } else {
        $(strLabelId).text('获取失败: 机器名为空');
      }

      const objRootPathInfo = await GeneViewCodeEx.GetCurrentUserAppRootPathWithBackup(
        strMachineName,
      );
      if (IsNullOrEmpty(objRootPathInfo.codePath) == false) {
        $(strRootLabelId).text(objRootPathInfo.codePath);
      } else {
        $(strRootLabelId).text('未配置');
      }

      if (IsNullOrEmpty(objRootPathInfo.codePathBackup) == false) {
        $(strRootBackupLabelId).text(objRootPathInfo.codePathBackup);
      } else {
        $(strRootBackupLabelId).text('');
      }
    } catch (e: any) {
      const strErrMsg = e?.message ?? String(e);
      $(strLabelId).text(`获取失败: ${strErrMsg}`);
      $(strRootLabelId).text('获取失败');
      $(strRootBackupLabelId).text('获取失败');
      console.warn('SetCurrentMachineNameView warning:', e);
    }
  }

  private static async GetCurrentUserAppRootPathWithBackup(
    strMachineName: string,
  ): Promise<{ codePath: string; codePathBackup: string }> {
    try {
      const strUserId = clsPubLocalStorage.userId;
      const strPrjId = clsPrivateSessionStorage.currSelPrjId;
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

      let intApplicationTypeId = 0;

      const viewInfoStore = useviewInfoStore();
      const objViewInfo = await viewInfoStore.getObj(viewId_Main.value);
      if (objViewInfo != null) {
        intApplicationTypeId = Number(objViewInfo.applicationTypeId) || 0;
      }

      if (
        IsNullOrEmpty(strUserId) == false &&
        IsNullOrEmpty(strPrjId) == false &&
        IsNullOrEmpty(strCmPrjId) == false &&
        intApplicationTypeId > 0
      ) {
        // 先查 store 缓存，命中直接返回；未命中则由 store 调接口并写入缓存
        const objCodePath = await useUserCodeRootPathStore().getOrFetch(
          strUserId,
          strMachineName,
          strPrjId,
          strCmPrjId,
          intApplicationTypeId,
        );

        if (IsNullOrEmpty(objCodePath.codePath) == false) {
          return {
            codePath: GeneViewCodeEx.NormalizePath(objCodePath.codePath),
            codePathBackup: IsNullOrEmpty(objCodePath.codePathBackup)
              ? ''
              : GeneViewCodeEx.NormalizePath(objCodePath.codePathBackup),
          };
        }
        if (IsNullOrEmpty(objCodePath.codePathBackup) == false) {
          return {
            codePath: '',
            codePathBackup: GeneViewCodeEx.NormalizePath(objCodePath.codePathBackup),
          };
        }
      }
    } catch (e) {
      console.warn('GetCurrentUserAppRootPath by backup api warning:', e);
    }

    try {
      const arrUserCodePath = await UserCodePath_GetObjLstCache(
        clsPrivateSessionStorage.currSelPrjId,
      );
      const arrGeneCodePath = arrUserCodePath.filter((x) => x.isGeneCode == true);
      for (const objUserCodePath of arrGeneCodePath) {
        if (
          IsNullOrEmpty(objUserCodePath.projectPath) == false &&
          GeneViewCodeEx.IsAbsolutePath(objUserCodePath.projectPath) == true
        ) {
          return {
            codePath: GeneViewCodeEx.NormalizePath(objUserCodePath.projectPath),
            codePathBackup: '',
          };
        }
        if (
          IsNullOrEmpty(objUserCodePath.codePath) == false &&
          GeneViewCodeEx.IsAbsolutePath(objUserCodePath.codePath) == true
        ) {
          return {
            codePath: GeneViewCodeEx.NormalizePath(objUserCodePath.codePath),
            codePathBackup: '',
          };
        }
      }
    } catch (e) {
      console.warn('GetCurrentUserAppRootPath warning:', e);
    }

    return {
      codePath: GeneViewCodeEx.GetLocalCodeRootPathFromStorage(),
      codePathBackup: '',
    };
  }

  public static async SetUserCodeRootPathFromPage(
    strCodePath: string,
    strCodePathBackup: string,
  ): Promise<{ isSuccess: boolean; msg: string }> {
    try {
      const strUserId = clsPubLocalStorage.userId;
      const strPrjId = clsPrivateSessionStorage.currSelPrjId;
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

      if (
        IsNullOrEmpty(strUserId) == true ||
        IsNullOrEmpty(strPrjId) == true ||
        IsNullOrEmpty(strCmPrjId) == true
      ) {
        return { isSuccess: false, msg: '用户或项目上下文为空，无法设置代码根目录。' };
      }

      const strMachineName = String(await getMachineNameFromLocalAgent()).trim();
      if (IsNullOrEmpty(strMachineName) == true) {
        return { isSuccess: false, msg: '机器名为空，无法设置代码根目录。' };
      }

      const viewInfoStore = useviewInfoStore();
      const objViewInfo = await viewInfoStore.getObj(viewId_Main.value);
      if (objViewInfo == null) {
        return { isSuccess: false, msg: '当前界面信息不存在，无法设置代码根目录。' };
      }

      const intApplicationTypeId = Number(objViewInfo.applicationTypeId) || 0;
      if (intApplicationTypeId <= 0) {
        return { isSuccess: false, msg: '应用类型为空，无法设置代码根目录。' };
      }

      const strCodePath2 = strCodePath.trim();
      if (IsNullOrEmpty(strCodePath2) == true) {
        return { isSuccess: false, msg: 'codePath不能为空。' };
      }

      const strCodePathBackup2 = strCodePathBackup.trim();

      // 通过 store 设置路径，成功后自动更新缓存，下次 Get 直接命中缓存
      const objResult = await useUserCodeRootPathStore().setAndCache({
        strUserId,
        strMachineName,
        strPrjId,
        strCmPrjId,
        intApplicationTypeId,
        strCodePath: strCodePath2,
        strCodePathBackup: strCodePathBackup2,
      });

      await GeneViewCodeEx.SetCurrentMachineNameView();
      return {
        isSuccess: objResult.success,
        msg: objResult.message || (objResult.success ? '设置成功' : '设置失败'),
      };
    } catch (e: any) {
      const strErrMsg = e?.message ?? String(e);
      return { isSuccess: false, msg: `设置用户代码根目录失败:${strErrMsg}` };
    }
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
      const objCodePath = await useUserCodeRootPathStore().getOrFetchCodePath(
        strUserId,
        strMachineName,
        strPrjId,
        strCmPrjId,
        intApplicationTypeId,
        strCodeTypeId,
      );
      if (IsNullOrEmpty(objCodePath.codePath) == false) {
        return `用户代码路径: ${GeneViewCodeEx.NormalizePath(objCodePath.codePath)}`;
      }
      if (IsNullOrEmpty(objCodePath.codePathBackup) == false) {
        return `用户代码路径: ${GeneViewCodeEx.NormalizePath(objCodePath.codePathBackup)} (备份)`;
      }
      return '用户代码路径: (未配置)';
    } catch (e: any) {
      const strErrMsg = e?.message ?? String(e);
      return `用户代码路径: (获取失败: ${strErrMsg})`;
    }
  }

  private static async BuildCodeTypeButtonTooltip(
    strMachineName: string,
    intApplicationTypeId: number,
    strCodeTypeId: string,
    strDependsOn: string,
    bolCanOverwrite: boolean | undefined,
    strMainTabId: string,
    arrExtraLines: Array<string> = [],
  ): Promise<string> {
    const strCodePathTip = await GeneViewCodeEx.GetCodePathTipByCodeType(
      strMachineName,
      intApplicationTypeId,
      strCodeTypeId,
    );
    return buildCodeTypeTooltip({
      codePathTip: strCodePathTip,
      dependsOn: strDependsOn,
      overwriteEnabled: bolCanOverwrite,
      targetRequired: strDependsOn == 'Table',
      targetLabel: '当前界面主表Id',
      targetValue: strMainTabId,
      extraLines: arrExtraLines,
    });
  }

  private static UpdateCodeTypeButtonTooltips(
    strCodeTypeId: string,
    strTooltip: string,
    objCurrentButton?: HTMLButtonElement | HTMLInputElement,
  ): void {
    const arrButtonId = [`btn${strCodeTypeId}`, `btn${strCodeTypeId}1`];
    for (const strButtonId of arrButtonId) {
      const objButton = document.getElementById(strButtonId) as
        | HTMLButtonElement
        | HTMLInputElement
        | null;
      if (objButton != null) {
        objButton.title = strTooltip;
      }
    }
    if (objCurrentButton != null) {
      objCurrentButton.title = strTooltip;
    }
  }

  private static clearCodeTypePathMenuTimer(): void {
    if (GeneViewCodeEx.codeTypePathMenuTimer != null) {
      window.clearTimeout(GeneViewCodeEx.codeTypePathMenuTimer);
      GeneViewCodeEx.codeTypePathMenuTimer = null;
    }
  }

  private static async SetCodeTypePathByMenu(
    objButton: HTMLButtonElement | HTMLInputElement,
    strCodeTypeId: string,
    strCodeTypeName: string,
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

      const strMachineName = String(await getMachineNameFromLocalAgent()).trim();
      if (IsNullOrEmpty(strMachineName) == true) {
        alert('当前机器名为空，无法设置路径！');
        return;
      }

      const viewInfoStore = useviewInfoStore();
      const objViewInfo = await viewInfoStore.getObj(viewId_Main.value);
      if (objViewInfo == null) {
        alert('当前界面信息不存在，无法设置路径！');
        return;
      }

      const intApplicationTypeId = Number(objViewInfo.applicationTypeId) || 0;
      if (intApplicationTypeId <= 0) {
        alert('应用类型为空，无法设置路径！');
        return;
      }

      const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
      if (objCodeType == null) {
        alert(`代码类型Id:[${strCodeTypeId}]不存在，无法设置路径！`);
        return;
      }

      let objCodePath: { codePath: string; codePathBackup: string } = {
        codePath: '',
        codePathBackup: '',
      };
      try {
        objCodePath = await useUserCodeRootPathStore().getOrFetchCodePath(
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
        const objRootPathInfo = await GeneViewCodeEx.GetCurrentUserAppRootPathWithBackup(
          strMachineName,
        );
        objCodePath = {
          codePath: objRootPathInfo.codePath,
          codePathBackup: objRootPathInfo.codePathBackup,
        };
      }

      const objRootPathInfo = await GeneViewCodeEx.GetCurrentUserAppRootPathWithBackup(
        strMachineName,
      );

      let strOverwriteSummary = '覆盖策略: (未知)';
      if (objCodeType.isDefaultOverride === true) {
        strOverwriteSummary = '覆盖策略: 可覆盖';
      } else if (objCodeType.isDefaultOverride === false) {
        strOverwriteSummary = '覆盖策略: 不可覆盖';
      }

      const objDialogResult = await showCodeTypePathEditDialog({
        title: `设置代码类型路径`,
        codeTypeName: strCodeTypeName,
        codeTypeId: strCodeTypeId,
        codePath: objCodePath.codePath ?? '',
        codePathBackup: objCodePath.codePathBackup ?? '',
        restoreCodePath: objRootPathInfo.codePath ?? '',
        restoreCodePathBackup: objRootPathInfo.codePathBackup ?? '',
        summaryLines: [
          `当前机器: ${strMachineName}`,
          `依赖类型: ${objCodeType.dependsOn || '(未知)'}`,
          objCodeType.dependsOn == 'Table'
            ? `TabId要求: 必填(当前界面主表Id: ${objViewInfo.mainTabId || '空'})`
            : 'TabId要求: 非必填',
          strOverwriteSummary,
        ],
      });
      if (objDialogResult == null) return;

      // 通过 store 设置代码类型路径，成功后自动更新缓存
      const objResult = await useUserCodeRootPathStore().setAndCacheCodePath({
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

      const strButtonTooltip = await GeneViewCodeEx.BuildCodeTypeButtonTooltip(
        strMachineName,
        intApplicationTypeId,
        strCodeTypeId,
        objCodeType.dependsOn,
        objCodeType.isDefaultOverride,
        String(objViewInfo.mainTabId || '空'),
      );
      GeneViewCodeEx.UpdateCodeTypeButtonTooltips(strCodeTypeId, strButtonTooltip, objButton);
      alert(objResult.message || `已设置代码类型路径: ${strCodeTypeName}(${strCodeTypeId})`);
    } catch (e: any) {
      const strMsg = Format('设置路径不成功,{0}.(codeTypeId:{1})', e?.message ?? e, strCodeTypeId);
      console.error(strMsg);
      alert(strMsg);
    }
  }

  private static bindCodeTypePathHoverMenu(
    objButton: HTMLButtonElement | HTMLInputElement,
    strCodeTypeId: string,
    strCodeTypeName: string,
  ): void {
    const showMenu = async (evt: MouseEvent) => {
      GeneViewCodeEx.clearCodeTypePathMenuTimer();
      destroyContextMenu();
      GeneViewCodeEx.codeTypePathMenuTimer = window.setTimeout(async () => {
        await createContextMenu({
          event: evt,
          items: [
            {
              label: '设置路径',
              handler: async () => {
                await GeneViewCodeEx.SetCodeTypePathByMenu(
                  objButton,
                  strCodeTypeId,
                  strCodeTypeName,
                );
              },
            },
          ],
        });
      }, 600);
    };

    objButton.addEventListener('mouseenter', showMenu);
    objButton.addEventListener('mouseleave', () => {
      GeneViewCodeEx.clearCodeTypePathMenuTimer();
    });
  }

  private static renderWriteLogsOnPage(arrLog: Array<any>, strTitle: string): void {
    const strTextAreaId = '#txtLocalAccessLogs';
    if ($(strTextAreaId).length === 0) {
      const strFallbackMsg = `${strTitle}\r\n(日志显示框不存在)`;
      console.warn(strFallbackMsg);
      alert(strFallbackMsg);
      return;
    }

    if (arrLog.length === 0) {
      $(strTextAreaId).val(`${strTitle}\r\n(无日志)`);
      return;
    }

    const arrLine = arrLog.map((x: any, idx: number) => {
      const strData = JSON.stringify(x.data ?? {});
      return `${idx + 1}. [${x.time}] [${x.level}] [${x.phase}] ${strData}`;
    });
    $(strTextAreaId).val(`${strTitle}\r\n${arrLine.join('\r\n')}`);
  }

  public static ShowRecentWriteLogsByCountOnPage(intCount = 20): void {
    const intCountSafe = Number.isFinite(intCount) ? Math.max(1, Math.floor(intCount)) : 20;
    let arrLog = getLocalFileAccessRecentLogs(intCountSafe, 'tryWriteCodeToLocalFile');
    let strTitle = `最近${intCountSafe}条写文件日志`;
    if (arrLog.length === 0) {
      arrLog = getLocalFileAccessRecentLogs(intCountSafe);
      strTitle = `最近${intCountSafe}条日志(写文件筛选为空，显示全量日志)`;
    }
    GeneViewCodeEx.renderWriteLogsOnPage(arrLog, strTitle);
  }

  public static async ShowRecentWriteLogsByCountOnPageAndSyncFile(intCount = 20): Promise<void> {
    const intCountSafe = Number.isFinite(intCount) ? Math.max(1, Math.floor(intCount)) : 20;
    let arrLog = getLocalFileAccessRecentLogs(intCountSafe, 'tryWriteCodeToLocalFile');
    let strTitle = `最近${intCountSafe}条写文件日志`;
    if (arrLog.length === 0) {
      arrLog = getLocalFileAccessRecentLogs(intCountSafe);
      strTitle = `最近${intCountSafe}条日志(写文件筛选为空，显示全量日志)`;
    }

    const objSyncResult = await syncLocalFileAccessLogsToFile(500);
    const strLogFilePath = getLocalAccessLogFilePath();
    const strTitle2 = `${strTitle}\r\n日志文件: ${strLogFilePath}\r\n落盘结果: ${objSyncResult.msg}`;
    GeneViewCodeEx.renderWriteLogsOnPage(arrLog, strTitle2);
  }

  public static ShowRecentWriteLogsByMinutesOnPage(intMinutes = 5): void {
    const intMinutesSafe = Number.isFinite(intMinutes) ? Math.max(1, Math.floor(intMinutes)) : 5;
    const arrLog = getLocalFileAccessLogsByRecentMinutes(intMinutesSafe, 'tryWriteCodeToLocalFile');
    GeneViewCodeEx.renderWriteLogsOnPage(arrLog, `最近${intMinutesSafe}分钟写文件日志`);
  }

  public static ClearWriteLogsOnPage(): void {
    const intRemoved = clearLocalFileAccessLogs('tryWriteCodeToLocalFile');
    const strTextAreaId = '#txtLocalAccessLogs';
    if ($(strTextAreaId).length > 0) {
      $(strTextAreaId).val(`已清空写文件日志 ${intRemoved} 条`);
    }
  }
  public async VisualEffects() {
    const strViewId = await clsPubVar4Web.GetViewId(this.qsViewId);

    const arrViewRegion = await ViewRegionEx_GetObjLstByViewIdCache(
      strViewId,
      clsPrivateSessionStorage.cmPrjId,
    );
    for (const objViewRegion of arrViewRegion) {
      try {
        let spaTitle4Query: HTMLSpanElement;
        let objQry;
        let spaTitle4Edit: HTMLSpanElement;
        let objEditRegion;
        let spaTitle4List: HTMLSpanElement;
        let objListRegion;
        let spaTitle4Feature: HTMLSpanElement;
        let objFeatureRegion;
        let spaTitle4Detail: HTMLSpanElement;
        let objDetailRegion;
        let spaTitle4ExcelExport: HTMLSpanElement;
        let objExcelExportRegion;
        switch (objViewRegion.regionTypeId) {
          case enumRegionType.QueryRegion_0001:
            spaTitle4Query = <HTMLSpanElement>document.getElementById('spaTitle4Query');
            spaTitle4Query.innerHTML = '查询区';
            // QryRegionFldsCRUD.RegionIdStatic = objViewRegion.regionId;
            objQry = new QryRegionFldsCRUDEx();
            await objQry.VisualEffects(GeneViewCodeEx.divQuery, objViewRegion.regionId);
            break;
          case enumRegionType.EditRegion_0003:
            spaTitle4Edit = <HTMLSpanElement>document.getElementById('spaTitle4Edit');
            spaTitle4Edit.innerHTML = '编辑区';

            objEditRegion = new EditRegionFldsCRUDEx();
            await objEditRegion.VisualEffects(GeneViewCodeEx.divEdit, objViewRegion.regionId);
            break;
          case enumRegionType.ListRegion_0002:
            spaTitle4List = <HTMLSpanElement>document.getElementById('spaTitle4List');
            spaTitle4List.innerHTML = '列表区';

            objListRegion = new DGRegionFldsCRUDEx();
            await objListRegion.VisualEffects(GeneViewCodeEx.divList, objViewRegion.regionId);
            break;
          case enumRegionType.FeatureRegion_0008:
            spaTitle4Feature = <HTMLSpanElement>document.getElementById('spaTitle4Feature');
            spaTitle4Feature.innerHTML = '功能区';

            objFeatureRegion = new FeatureRegionFldsCRUDEx();
            await objFeatureRegion.VisualEffects(GeneViewCodeEx.divFeature, objViewRegion.regionId);

            break;
          case enumRegionType.DetailRegion_0006:
            spaTitle4Detail = <HTMLSpanElement>document.getElementById('spaTitle4Detail');
            spaTitle4Detail.innerHTML = '详细信息区';
            objDetailRegion = new DetailRegionFldsCRUDEx();
            await objDetailRegion.VisualEffects(GeneViewCodeEx.divDetail, objViewRegion.regionId);

            break;
          case enumRegionType.ExcelExportRegion_0007:
            spaTitle4ExcelExport = <HTMLSpanElement>document.getElementById('spaTitle4ExcelExport');
            spaTitle4ExcelExport.innerHTML = 'Excel导出区';

            objExcelExportRegion = new ExcelExportRegionFldsCRUDEx();
            await objExcelExportRegion.VisualEffects(
              GeneViewCodeEx.divExcelExport,
              objViewRegion.regionId,
            );

            break;
        }
      } catch (e: any) {
        console.error(e);
        alert(e);
      }
    }
  }
  public async ShowCodeTypeButton(strViewId: string) {
    const strThisFuncName = this.ShowCodeTypeButton.name;
    const viewInfoStore = useviewInfoStore();
    const objViewInfo = await viewInfoStore.getObj(strViewId);
    if (objViewInfo == null) {
      const strMsg = Format(
        '在项目:[{0}]中，界面Id:[{1}]没有相应界面，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        strViewId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const applicationTypeName = await ApplicationType_GetNameByKeyCache({
      applicationTypeId: objViewInfo.applicationTypeId,
    });
    viewInfo4GC.value = `界面名称:${objViewInfo.viewName}(${objViewInfo.viewId}),类型:${applicationTypeName}`;
    // const intViewTypeCode = objViewInfo.viewTypeCode;
    const arrViewRegion = await ViewRegionEx_GetObjLstByViewIdCache(
      strViewId,
      clsPrivateSessionStorage.cmPrjId,
    );
    const objApplicationType = await ApplicationType_GetObjByKeyCache({
      applicationTypeId: objViewInfo.applicationTypeId,
    });
    if (objApplicationType == null) {
      const strMsg = Format(
        '应用Id:[{0}]，没有相应的类型，请检查！',
        objViewInfo.applicationTypeId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const arrAppCodeTypeRelaObjLst = await AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache(
      objViewInfo.applicationTypeId,
    );
    let arrAppCodeTypeRelaExObjLst: Array<clsAppCodeTypeRelaENEx> = arrAppCodeTypeRelaObjLst.map(
      AppCodeTypeRelaEx_CopyToEx,
    );
    const mapCodeTypeOverwrite = new Map<string, boolean>();
    for (const x of arrAppCodeTypeRelaExObjLst) {
      const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(x.codeTypeId);
      if (objCodeType == null) {
        const strMsg = Format('代码类型Id:[{0}]，没有相应的类型，请检查！', x.codeTypeId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      mapCodeTypeOverwrite.set(x.codeTypeId, objCodeType.isDefaultOverride == true);
      const strGroupName1 = objCodeType.groupName;
      const arrGroupName1 = strGroupName1.split(',');
      x.groupName = arrGroupName1[0];
      // 统一按 CodeType 的序号排序，而不是 AppCodeTypeRela 的序号。
      x.orderNum = objCodeType.orderNum;
    }
    arrAppCodeTypeRelaExObjLst = arrAppCodeTypeRelaExObjLst.sort(
      AppCodeTypeRelaEx_SortFunByGroupNameAndOrderNum,
    );
    for (const objInFor of arrAppCodeTypeRelaExObjLst) {
      await AppCodeTypeRelaEx_FuncMapByFldName(
        clsAppCodeTypeRelaENEx.con_ApplicationTypeName,
        objInFor,
      );
      await AppCodeTypeRelaEx_FuncMapByFldName(clsAppCodeTypeRelaENEx.con_DependsOn, objInFor);
      await AppCodeTypeRelaEx_FuncMapByFldName(clsAppCodeTypeRelaENEx.con_GroupName, objInFor);
      await AppCodeTypeRelaEx_FuncMapByFldName(
        clsAppCodeTypeRelaENEx.con_ProgLangTypeSimName,
        objInFor,
      );
      await AppCodeTypeRelaEx_FuncMapByFldName(clsAppCodeTypeRelaENEx.con_CodeTypeName, objInFor);
      await AppCodeTypeRelaEx_FuncMapByFldName(
        clsAppCodeTypeRelaENEx.con_CodeTypeSimName,
        objInFor,
      );

      await AppCodeTypeRelaEx_FuncMapByFldName(
        clsAppCodeTypeRelaENEx.con_ProgLangTypeName,
        objInFor,
      );
    }
    let intCount = 0;
    const arrObjLst_V2: Array<clsAppCodeTypeRelaENEx> = arrAppCodeTypeRelaExObjLst.filter(
      (x) => x.dependsOn == 'View',
    );

    const arrGroupName0 = arrObjLst_V2.map((x) => x.groupName);

    const arrGroupName: Array<string> = GetDistinctArray(arrGroupName0);
    let strMachineName4CodePath = '';
    try {
      strMachineName4CodePath = String(await getMachineNameFromLocalAgent()).trim();
    } catch (e) {
      console.warn('ShowCodeTypeButton get machine warning:', e);
    }

    let bolIsFirst = true;
    for (const strGroupName of arrGroupName) {
      if (IsNullOrEmpty(strGroupName) == false) {
        if (bolIsFirst == false) {
          const objLabel_Br = <HTMLSpanElement>document.createElement('span');
          objLabel_Br.innerHTML = Format('<br/>', strGroupName);
          GeneViewCodeEx.divCodeTypeLst.appendChild(objLabel_Br);
        } else {
          bolIsFirst = false;
        }

        const objLabel = <HTMLSpanElement>document.createElement('span');
        objLabel.innerHTML = Format('{0}: ', strGroupName);

        objLabel.id = Format('lbl{0}', strGroupName);

        objLabel.className = 'text-secondary font-weight-bold';
        objLabel.setAttribute('style', 'margin-right:10px;margin-top:35px;left:0px;width:150px;');
        GeneViewCodeEx.divCodeTypeLst.appendChild(objLabel);
      }
      for (const objInFor of arrObjLst_V2) {
        if (objInFor.groupName != strGroupName) continue;
        let bolIsExistRegion = true;
        let arr;
        switch (objInFor.codeTypeId) {
          case enumCodeType.WA_ViewScript_Edit_TS_0243:
          case enumCodeType.WA_ViewScript_EditCS_TS_0248:
          case enumCodeType.WA_ViewScript_EditCSEx_TS_0249:
            arr = arrViewRegion.filter((x) => x.regionTypeId == enumRegionType.EditRegion_0003);
            if (arr.length == 0) bolIsExistRegion = false;
            break;
          case enumCodeType.WA_ViewScript_Detail_TS_0244:
          case enumCodeType.WA_ViewScript_DetailCS_TS_0251:
          case enumCodeType.WA_ViewScript_DetailCSEx_TS_0252:
            arr = arrViewRegion.filter((x) => x.regionTypeId == enumRegionType.DetailRegion_0006);
            if (arr.length == 0) bolIsExistRegion = false;
            break;
        }
        const objButton = <HTMLButtonElement>document.createElement('button');
        objButton.value = Format('{0}({1})', objInFor.codeTypeName, objInFor.progLangTypeName);

        objButton.id = Format('btn{0}', objInFor.codeTypeId);

        if (bolIsExistRegion == false) {
          objButton.setAttribute('disabled', 'disabled');
          objButton.className = 'btn btn-outline-primary btn-sm disabled';
        } else {
          objButton.onclick = async function (this: HTMLButtonElement, evt: Event) {
            await GeneViewCodeEx.btnCodeType_Click(this, evt);
          };
          objButton.className = 'btn btn-outline-primary btn-sm';
        }
        GeneViewCodeEx.bindCodeTypePathHoverMenu(
          objButton,
          objInFor.codeTypeId,
          objInFor.codeTypeName,
        );
        objButton.setAttribute('style', 'margin-right:10px;margin-top:5px;left:0px;');

        const objHtmlInputButton = <HTMLInputElement>document.createElement('input');
        objHtmlInputButton.type = 'button';
        objHtmlInputButton.id = Format('btn{0}1', objInFor.codeTypeId);

        const bolCanOverwrite = mapCodeTypeOverwrite.get(objInFor.codeTypeId);
        const strButtonTooltip = await GeneViewCodeEx.BuildCodeTypeButtonTooltip(
          strMachineName4CodePath,
          objViewInfo.applicationTypeId,
          objInFor.codeTypeId,
          objInFor.dependsOn,
          bolCanOverwrite,
          String(objViewInfo.mainTabId || '空'),
          bolIsExistRegion == false ? ['该界面无相关区域'] : [],
        );
        GeneViewCodeEx.UpdateCodeTypeButtonTooltips(
          objInFor.codeTypeId,
          strButtonTooltip,
          objButton,
        );

        objHtmlInputButton.name = Format('btn{0}1', objInFor.codeTypeId);
        if (bolIsExistRegion == false) {
          objHtmlInputButton.setAttribute(
            'class',
            'btn btn-outline-secondary btn-sm ml-2 disabled',
          );
          objHtmlInputButton.setAttribute('disabled', 'disabled');
        } else {
          objHtmlInputButton.setAttribute('class', 'btn btn-outline-primary btn-sm ml-2');
        }
        objButton.title = strButtonTooltip;
        objHtmlInputButton.title = strButtonTooltip;

        objHtmlInputButton.setAttribute('codeTypeId', objInFor.codeTypeId);
        objHtmlInputButton.setAttribute('viewId', strViewId);
        objHtmlInputButton.setAttribute(
          'applicationTypeId',
          objViewInfo.applicationTypeId.toString(),
        );
        objHtmlInputButton.onclick = async function (this: HTMLInputElement, evt: Event) {
          await GeneViewCodeEx.btnCodeType_Click(this, evt);
        };
        objHtmlInputButton.value = Format(
          '{0}({1})',
          objInFor.codeTypeSimName,
          objInFor.progLangTypeSimName,
        );
        GeneViewCodeEx.bindCodeTypePathHoverMenu(
          objHtmlInputButton,
          objInFor.codeTypeId,
          objInFor.codeTypeName,
        );

        const strStrLen = GetWidthByWordStr(objHtmlInputButton.value);

        objButton.setAttribute(
          'style',
          Format('margin-right:10px;margin-top:5px;left:0px;width:{0}px', strStrLen),
        );

        GeneViewCodeEx.divCodeTypeLst.appendChild(objHtmlInputButton);
        intCount++;
      }
      if (intCount == 0) {
        const strMsg = Format(
          '应用:{0}({1})没有用于[View]相应的代码类型.(In {2}.{3})',
          objApplicationType.applicationTypeName,
          objApplicationType.applicationTypeId,
          this.constructor.name,
          strThisFuncName,
        );
        alert(strMsg);
        return;
      }
    }
  }

  public static async btnCodeType_Click(thisControl: any, event: any) {
    console.log('tabComponentRef.value:', tabComponentRef.value);
    // tabComponentRef.value?.testTabRef();
    console.log(event);
    const thisA = <HTMLInputElement>thisControl;

    const strCodeTypeId0 = thisA.getAttribute('codeTypeId');

    const strViewId0 = thisA.getAttribute('viewId');

    const strApplicationTypeId0 = thisA.getAttribute('applicationTypeId');

    if (strViewId0 == null) {
      alert('生成代码的表Id 或者界面Id不能全为空！');
      return;
    }
    if (strApplicationTypeId0 == null) {
      alert('生成代码时应用类型为空！');
      return;
    }
    if (strCodeTypeId0 == null) {
      alert('生成代码时代码类型为空！');
      return;
    }
    const strViewId = strViewId0;
    const strApplicationTypeId = strApplicationTypeId0;
    const strCodeTypeId = strCodeTypeId0;

    const intApplicationTypeId = Number(strApplicationTypeId);
    if (this.IsGeneByDependencyEnabled()) {
      const arrCodeTypeGeneOrder = await this.GetGeneOrderByDependency4View(
        strCodeTypeId.toString(),
        intApplicationTypeId,
      );
      $('#lblResult').html(`按依赖顺序生成: ${arrCodeTypeGeneOrder.join(' -> ')}`);
      const intTotal = arrCodeTypeGeneOrder.length;
      const bolStopOnFail = this.IsStopOnStepFailureEnabled();
      for (let i = 0; i < arrCodeTypeGeneOrder.length; i++) {
        const strCodeTypeIdInFor = arrCodeTypeGeneOrder[i];
        this.SetGeneProgressText(
          `本次已生成到第${i + 1}步/共${intTotal}步（${strCodeTypeIdInFor}）`,
        );
        const bolIsSuccess = await GeneViewCodeEx.GeneCode4View(
          strViewId.toString(),
          strCodeTypeIdInFor,
          intApplicationTypeId,
        );
        if (bolIsSuccess === false) {
          if (bolStopOnFail) {
            this.SetGeneProgressText(`第${i + 1}步失败，已按设置停止（共${intTotal}步）`);
            $('#lblResult').html(`第${i + 1}步生成失败，已停止后续步骤`);
            return;
          }
          this.SetGeneProgressText(`第${i + 1}步失败，按设置继续后续步骤（共${intTotal}步）`);
        }
      }
      this.SetGeneProgressText(`本次已生成到第${intTotal}步/共${intTotal}步，已完成`);
      return;
    }

    this.SetGeneProgressText(`本次已生成到第1步/共1步（${strCodeTypeId}）`);
    await GeneViewCodeEx.GeneCode4View(
      strViewId.toString(),
      strCodeTypeId.toString(),
      intApplicationTypeId,
    );
    this.SetGeneProgressText('本次已生成到第1步/共1步，已完成');
  }

  private static IsGeneByDependencyEnabled(): boolean {
    const objInput = document.getElementById('chkGeneByDependency_View') as HTMLInputElement | null;
    return objInput?.checked === true;
  }

  private static IsStopOnStepFailureEnabled(): boolean {
    const objInput = document.getElementById('chkStopOnFail_View') as HTMLInputElement | null;
    if (objInput == null) return true;
    return objInput.checked === true;
  }

  private static SetGeneProgressText(strText: string): void {
    $('#lblGeneProgress').text(strText);
  }

  private static async GetGeneOrderByDependency4View(
    strCodeTypeId: string,
    intApplicationTypeId: number,
  ): Promise<Array<string>> {
    const arrAppCodeTypeRelaObjLst0 = await AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache(
      intApplicationTypeId,
    );
    const arrAppCodeTypeRelaObjLst: Array<clsAppCodeTypeRelaENEx> = arrAppCodeTypeRelaObjLst0.map(
      AppCodeTypeRelaEx_CopyToEx,
    );

    let arrCodeTypeIdInApp = arrAppCodeTypeRelaObjLst
      .filter((x) => x.dependsOn === 'View')
      .map((x) => x.codeTypeId);
    if (arrCodeTypeIdInApp.length === 0) {
      arrCodeTypeIdInApp = arrAppCodeTypeRelaObjLst.map((x) => x.codeTypeId);
    }

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
      const arrRemain = [...requiredSet].filter((id) => orderedId.includes(id) === false);
      arrRemain.sort(compareId);
      orderedId.push(...arrRemain);
    }
    return orderedId;
  }

  public static async GeneCode4View(
    strViewId: string,
    strCodeTypeId: string,
    intApplicationTypeId: number,
  ): Promise<boolean> {
    const objViewInfoStore = useviewInfoStore();
    const objViewInfo = await objViewInfoStore.getObj(strViewId);
    if (objViewInfo == null) {
      alert(`界面Id:[${strViewId}]不存在，无法生成代码！`);
      return false;
    }

    const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
    if (objCodeType == null) {
      alert(`代码类型Id:[${strCodeTypeId}]不存在，无法生成代码！`);
      return false;
    }

    const objGCPara: clsGCPara = new clsGCPara();

    objGCPara.prjId = clsPrivateSessionStorage.currSelPrjId; // this.getQueryString("prjId");//"0116";
    objGCPara.cmPrjId = clsPrivateSessionStorage.cmPrjId; // this.getQueryString("prjId");//"0116";
    objGCPara.prjDataBaseId = clsPrivateSessionStorage.currPrjDataBaseId; // this.getQueryString("prjDataBaseId");//"0111";
    objGCPara.gcUserId = clsPubLocalStorage.userId; // this.getQueryString("GCUserId");//"pyf";

    const vsTabId = '';
    const vsViewId = strViewId; // this.getQueryString("viewId");//WebApp,,,wfmExamType_QUDI
    const vsTypeParas = '';
    const vsDataBaseType = clsPubSessionStorage.currDataBaseTypeId; // this.getQueryString("DataBaseType");//"MsSql";
    objGCPara.tabId = vsTabId;

    objGCPara.viewId = vsViewId;

    objGCPara.dataBaseType = vsDataBaseType;
    objGCPara.typeParas = vsTypeParas;
    objGCPara.codeTypeId = strCodeTypeId; //this.getQueryString("codeTypeId");//"0001";
    objGCPara.applicationTypeId = intApplicationTypeId;
    if (objGCPara.codeTypeId == '') {
      alert('生成代码的代码类型不能为空！');
      return false;
    }

    if (objCodeType.dependsOn == 'Table') {
      objGCPara.tabId = String(objViewInfo.mainTabId ?? '').trim();
      if (objGCPara.tabId == '') {
        alert(
          `代码类型:[${objCodeType.codeTypeId}](${objCodeType.codeTypeName})依赖Table，当前界面:[${objViewInfo.viewId}]未设置主表Id(mainTabId)，无法生成！`,
        );
        return false;
      }
    }

    if (objGCPara.tabId == '' && objGCPara.viewId == '') {
      alert('生成代码的表Id 或者界面Id不能全为空！');
      return false;
    }

    if (objGCPara.prjId == '') {
      alert('生成代码的工程Id不能为空！');
      return false;
    }
    if (objGCPara.cmPrjId == '') {
      alert('生成代码的CM工程Id不能为空！');
      return false;
    }
    if (objGCPara.dataBaseType == '') {
      alert('生成代码的数据库类型不能为空！');
      return false;
    }
    if (objGCPara.prjDataBaseId == '') {
      alert('生成代码的数据库Id不能为空！');
      return false;
    }
    if (objGCPara.gcUserId == '') {
      alert('生成代码的用户Id不能为空！');
      return false;
    }
    try {
      const strCurrDate = clsDateTime.getTodayDateTimeStr(1);
      const objGCResult = await AutoGeneCode_GeneCodeAsync(objGCPara);
      if (objGCResult == null) {
        const strInfo = `生成代码不成功!时间:${strCurrDate}`;
        $('#lblResult').html(strInfo);
        $('#txtCodeText').val(strInfo);
        return false;
        //显示信息框
        //alert(strInfo);
      }
      if (objGCResult.errorId == 0) {
        const objWriteResult = await GeneViewCodeEx.TryWriteCodeToLocalFile(
          intApplicationTypeId,
          strCodeTypeId,
          objGCResult.re_FileNameWithModuleName,
          objGCResult.codeText,
          objViewInfo.isShare,
        );
        tabComponentRef.value.codeText = objGCResult.codeText;
        tabComponentRef.value.className = objGCResult.re_ClsName;
        tabComponentRef.value.fileName = objGCResult.re_FileNameWithModuleName;
        // tabComponentRef.value.codeText = objGCResult.codeText;
        // tabComponentRef.value.codeText = objGCResult.codeText;

        // $('#txtCodeText').val(objGCResult.codeText);
        // $('#lblClassName').val(objGCResult.re_ClsName);
        // $('#lblFileName').val(objGCResult.re_FileNameWithModuleName);
        $('#lblPrjName').text(objGCResult.prjName);
        $('#lblSQLDSTypeName').text(objGCResult.dataBaseType);
        $('#lblCodeTypeName').text(objGCResult.codeTypeName);
        $('#lblLangType').text(objGCResult.langType);
        $('#lblGCUserId').text(objGCResult.gcUserId);
        $('#lblTabName').text(objGCResult.tabName);
        const strInfo = objWriteResult.isSuccess
          ? `生成代码成功并已写入文件!${objWriteResult.msg}. 时间:${strCurrDate}`
          : `生成代码成功, 但写入文件失败:${objWriteResult.msg}. 时间:${strCurrDate}`;
        $('#lblResult').html(strInfo);
        $('#lblSavedFilePath').text(objWriteResult.isSuccess ? objWriteResult.msg : '');
        GeneViewCodeEx.ShowRecentWriteLogsByCountOnPage(20);
        //显示信息框
        //alert(strInfo);
        return true;
      } else {
        tabComponentRef.value.codeText = objGCResult.errorMsg;
        tabComponentRef.value.className = objGCResult.re_ClsName;
        tabComponentRef.value.fileName = objGCResult.re_FileNameWithModuleName;

        // $('#txtCodeText').val(objGCResult.errorMsg);
        // $('#lblClassName').val(objGCResult.re_ClsName);
        // $('#lblFileName').val(objGCResult.re_FileNameWithModuleName);
        $('#lblPrjName').text(objGCResult.prjName);
        $('#lblSQLDSTypeName').text(objGCResult.dataBaseType);
        $('#lblCodeTypeName').text(objGCResult.codeTypeName);
        $('#lblLangType').text(objGCResult.langType);
        $('#lblGCUserId').text(objGCResult.gcUserId);
        $('#lblTabName').text(objGCResult.tabName);
        const strInfo = `生成代码不成功!时间:${strCurrDate}`;
        $('#lblResult').html(strInfo);
        $('#lblSavedFilePath').text('');
        return false;
      }
    } catch (e: any) {
      const strMsg = `生成代码不成功,${e}.`;
      alert(strMsg);
      $('#lblSavedFilePath').text('');
      return false;
    }
  }

  private static async TryWriteCodeToLocalFile(
    intApplicationTypeId: number,
    strCodeTypeId: string,
    strFilePath: string,
    strCodeText: string,
    bolIsViewShare = false,
  ): Promise<{ isSuccess: boolean; msg: string }> {
    return await tryWriteCodeToLocalFile(
      intApplicationTypeId,
      strCodeTypeId,
      strFilePath,
      strCodeText,
      bolIsViewShare,
    );
  }

  private static IsAbsolutePath(strPath: string): boolean {
    if (IsNullOrEmpty(strPath) == true) return false;
    const strPathTrim = strPath.trim();
    return /^[a-zA-Z]:[\\/]/.test(strPathTrim) || strPathTrim.startsWith('\\\\');
  }

  private static NormalizePath(strPath: string): string {
    if (IsNullOrEmpty(strPath) == true) return '';
    return strPath.replace(/\\/g, '/').replace(/\/+/g, '/');
  }

  private static JoinPath(strRootPath: string, strSubPath: string): string {
    const strRootPath2 = GeneViewCodeEx.NormalizePath(strRootPath).replace(/\/$/, '');
    const strSubPath2 = GeneViewCodeEx.NormalizePath(strSubPath).replace(/^\/+/, '');
    return `${strRootPath2}/${strSubPath2}`;
  }

  private static async GetLocalCodeRootPath(strCodeTypeId: string): Promise<string> {
    const strEnvRoot = (import.meta as any)?.env?.VITE_AGC_LOCAL_CODE_ROOT_PATH as string;
    if (IsNullOrEmpty(strEnvRoot) == false) {
      return GeneViewCodeEx.NormalizePath(strEnvRoot);
    }

    const strRootFromStorage = GeneViewCodeEx.GetLocalCodeRootPathFromStorage();
    if (IsNullOrEmpty(strRootFromStorage) == false) {
      return strRootFromStorage;
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
          GeneViewCodeEx.IsAbsolutePath(objUserCodePath.projectPath) == true
        ) {
          if (IsNullOrEmpty(objUserCodePath.codePath) == false) {
            if (GeneViewCodeEx.IsAbsolutePath(objUserCodePath.codePath) == true) {
              return GeneViewCodeEx.NormalizePath(objUserCodePath.codePath);
            }
            return GeneViewCodeEx.JoinPath(objUserCodePath.projectPath, objUserCodePath.codePath);
          }
          return GeneViewCodeEx.NormalizePath(objUserCodePath.projectPath);
        }
        if (
          IsNullOrEmpty(objUserCodePath.codePath) == false &&
          GeneViewCodeEx.IsAbsolutePath(objUserCodePath.codePath) == true
        ) {
          return GeneViewCodeEx.NormalizePath(objUserCodePath.codePath);
        }
      }
    } catch (e) {
      console.warn('GetLocalCodeRootPath warning:', e);
    }
    return '';
  }

  private static async ResolveWritePath(
    strCodeTypeId: string,
    strFilePath: string,
  ): Promise<string> {
    const strFilePath2 = GeneViewCodeEx.NormalizePath(strFilePath);
    if (GeneViewCodeEx.IsAbsolutePath(strFilePath2) == true) return strFilePath2;

    const strRootPath = await GeneViewCodeEx.GetLocalCodeRootPath(strCodeTypeId);
    if (IsNullOrEmpty(strRootPath) == true) return strFilePath2;
    return GeneViewCodeEx.JoinPath(strRootPath, strFilePath2);
  }

  public get qsViewId() {
    const strName = 'viewId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
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
}
