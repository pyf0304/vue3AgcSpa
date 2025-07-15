import PrjTabFld_EditEx from '../Table_Field/PrjTabFld_EditEx';
import DataNodeCRUDEx from './DataNodeCRUDEx';

import { DnFuncMap_EditV2Ex } from './DnFuncMap_EditV2Ex';
import { DnFuncMapCRUD } from '@/viewsBase/AIModule/DnFuncMapCRUD';
import { enumAssociationMapping } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { enumDataNodeType } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';
import { enumFuncMapMode } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';

import { clsvDataNode_SimENEx } from '@/ts/L0Entity/AIModule/clsvDataNode_SimENEx';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';

import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvFieldTab_SimENEx } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimENEx';

import { DnFunction_GetObjByDnFunctionIdCache } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
import { FuncMapMode_GetObjByFuncMapModeIdCache } from '@/ts/L3ForWApi/AIModule/clsFuncMapModeWApi';

import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';

import { DataNodeEx_CopyNodeToNewVersion } from '@/ts/L3ForWApiEx/AIModule/clsDataNodeExWApi';

import {
  DnPathEx_CreateGraph4InOutDataNode,
  DnPathEx_GetDnPath4NoExist,
  useBBFunctions,
} from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
import {
  GetDivId_DataNode,
  GetDivId_FieldVersion,
  vDataNode_SimEx_CopyToEx,
  vDataNode_SimEx_FuncMapByFldName,
  vDataNode_SimEx_GetKeyIdByDataNode,
  vDataNode_SimEx_GetKeyIdByTabIdAndFldId,
  vDataNode_SimEx_GetObjByDataNodeIdCacheEx,
  vDataNode_SimEx_GetObjByTabIdAndFldId,
  vDataNode_SimEx_GetObjLstByTabIdCacheEx,
  vDataNode_SimEx_SortFunByVersion,
} from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
import {
  vDnPath_SimEx_GetInOutFldNameLstByInTabId,
  vDnPath_SimEx_GetPathIdAndFldIdByOutFldName,
} from '@/ts/L3ForWApiEx/AIModule/clsvDnPath_SimExWApi';
import {
  PrjTabFldEx_GetPrimaryKeyNumByTabIdCache,
  PrjTabFldEx_GetPrimaryKeyObjLstByTabIdCache,
  PrjTabFldEx_IsExistByFldId,
  PrjTabFldEx_IsExistByFldIdCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import {
  setField_ExtendShow,
  vFieldTab_SimEx_CopyToEx,
  vFieldTab_SimEx_GetDiv4FieldWithCurrTab,
  vFieldTab_SimEx_GetDiv4FieldWithTabName,
  vFieldTab_SimEx_GetHomologousFldIdByFldIdCacheEx,
  vFieldTab_SimEx_GetObjLstByTabIdNoDataNodeCache,
  vFieldTab_SimEx_GetSpan4DataNode,
  vFieldTab_SimEx_GetSpan4Field,
  vFieldTab_SimEx_IsExtendShow,
  vFieldTab_SimEx_SortFunByHasNodeAndName,
} from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import {
  vPrjTab_SimEx_GetObjByTabIdCache,
  vPrjTab_SimEx_IsCache_TS,
} from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetKeyFldStrByKeyLst } from '@/ts/PubFun/clsArray';
import {
  GetA_Empty,
  getAObjByIdInDivObj,
  GetArray,
  GetButton_Empty,
  GetDiv_Empty,
  GetDivObjInDivObj,
  GetDivObjInDivObjN,
  GetLi_Empty,
  getLiObjByIdInDivObj,
  GetSpan_Empty,
  GetUl_Empty,
  HideDivObj,
  ShowDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { confirm_del } from '@/ts/PubFun/clsCommFunc4Web';
import { Position_SetDiv_Right } from '@/ts/PubFun/clsPosition';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import {
  vDnFuncMap_SimEx_CopyToEx,
  vDnFuncMap_SimEx_GetObjLstByInDataNodeIdCacheEx,
  vDnFuncMap_SimEx_GetObjLstByOutDataNodeIdCacheEx,
  vDnFuncMap_SimEx_SortFunByInDataNodeName,
} from '@/ts/L3ForWApiEx/AIModule/clsvDnFuncMap_SimExWApi';
import { clsvDnFuncMap_SimENEx } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_SimENEx';
import { usevDnFuncMap_SimStore } from '@/store/modules/vDnFuncMap_Sim';
import { clsvDnFuncMap_Sim } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_Sim';

import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';

import { DnFuncMapEx_DelRecordEx } from '@/ts/L3ForWApiEx/AIModule/clsDnFuncMapExWApi';
import {
  vDataNode_Sim_GetNameByDataNodeIdCache,
  vDataNode_Sim_GetObjByDataNodeIdAsync,
  vDataNode_Sim_ReFreshThisCache,
} from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
import { DnFuncMap_GetObjByDnFuncMapIdAsync } from '@/ts/L3ForWApi/AIModule/clsDnFuncMapWApi';
import { DataNode_GetObjByDataNodeIdAsync } from '@/ts/L3ForWApi/AIModule/clsDataNodeWApi';
import {
  vFieldTab_Sim_GetObjByFldIdAsync,
  vFieldTab_Sim_GetObjByFldIdCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { divVarSet, refSpnTabName } from '@/views/Table_Field/PrjTab_AllPropVueShare';
import {
  PrjTabEx_GetRelaTabIdByViewTabId,
  PrjTabEx_GetRelaViewTabIdByTabId,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
import { PrjTab_AllPropEx } from '@/views/Table_Field/PrjTab_AllPropEx';
import { clsViewInfoCmPrjIdRelaEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaEN';
import { enumSQLDSType } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { PrjTab_GetObjByTabIdAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import { ViewInfo_GetObjLstAsync } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { FuncModule_Agc_GetObjByFuncModuleAgcIdCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import {
  PrjId_Session,
  refDnFuncMap_Detail,
  refDnFuncMap_Edit,
  viewVarSet,
} from '@/views/AIModule/DnFuncMapVueShare';
import { vDnFuncMap_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';
import { PrjTabFld_ReFreshCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import { vDnPath_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDnPath_SimWApi';
import { CacheMode_GetNameByCacheModeIdCache } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
import { vPrjTabFld_SimEx_getObjLstByFldIdAndFldType } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTabFld_SimExWApi';
let arrDataNodeId4BL: Array<number> = [];
/** DnFuncMapCRUD_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class DnFuncMapCRUD_EditEx extends DnFuncMapCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => any;

  public static divFieldLst: HTMLDivElement; //列表区的层对象
  public static divNodeGraph: HTMLDivElement; //列表区的层对象
  public static divFldGraph: HTMLDivElement; //列表区的层对象

  public static TabIdStatic = '00000000'; //查询区静态界面变量
  // public static divName4FieldLst = 'divFldGraph';
  public static divName4DataNodeLst = 'divNodeGraph';

  public static objCMProjects: clsCMProjectEN;
  public TabId = '';

  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvDnFuncMapBy=  "mId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in GCContainerTypeCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in GCContainerTypeCRUDEx');
  }
  async BindGv(strType: string, strPara: string) {
    // console.log(strType, strPara);

    let strMsg = '';
    let objDnFuncMap;
    let objDataNode;
    switch (strType) {
      case 'DnFuncMap':
        objDnFuncMap = await DnFuncMap_GetObjByDnFuncMapIdAsync(strPara);
        if (objDnFuncMap == null) return;

        await BindLi_DataNode(
          objDnFuncMap.inDataNodeId,
          DnFuncMapCRUD_EditEx.TabIdStatic,
          DnFuncMapCRUD_EditEx.divNodeGraph, //.divName4DataNodeLst,
        );
        objDataNode = await DataNode_GetObjByDataNodeIdAsync(objDnFuncMap.inDataNodeId);
        if (objDataNode != null) {
          await RemoveLi_FieldTab(objDataNode.fldId, DnFuncMapCRUD_EditEx.divFldGraph);
        }
        await BindLi_DataNode(
          objDnFuncMap.outDataNodeId,
          DnFuncMapCRUD_EditEx.TabIdStatic,
          DnFuncMapCRUD_EditEx.divNodeGraph, //.divName4DataNodeLst,
        );
        objDataNode = await DataNode_GetObjByDataNodeIdAsync(objDnFuncMap.outDataNodeId);
        if (objDataNode == null) return;
        await RemoveLi_FieldTab(objDataNode.fldId, DnFuncMapCRUD_EditEx.divFldGraph);
        break;

      default:
        strMsg = Format(
          '类型(strType):{0}在BindGvCache函数的switch中没有被处理！(DnFuncMapCRUD_EditEx)',
          strType,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    let strMsg = '';
    let objDnFuncMap;
    let objDataNode;
    switch (strType) {
      case 'DnFuncMap':
        await this.BindLi_DataNodeLst(
          DnFuncMapCRUD_EditEx.TabIdStatic,
          DnFuncMapCRUD_EditEx.divNodeGraph, //.divName4DataNodeLst,
        );
        await this.BindLi_FieldTabLst(
          DnFuncMapCRUD_EditEx.TabIdStatic,
          DnFuncMapCRUD_EditEx.divFldGraph,
        );
        break;
      case 'DnFuncMap_AddNewRecordFromKey':
        objDnFuncMap = await DnFuncMap_GetObjByDnFuncMapIdAsync(strPara);
        if (objDnFuncMap == null) return;

        await BindLi_DataNode(
          objDnFuncMap.outDataNodeId,
          DnFuncMapCRUD_EditEx.TabIdStatic,
          DnFuncMapCRUD_EditEx.divNodeGraph, //.divName4DataNodeLst,
        );
        objDataNode = await DataNode_GetObjByDataNodeIdAsync(objDnFuncMap.outDataNodeId);
        if (objDataNode == null) return;
        await RemoveLi_FieldTab(objDataNode.fldId, DnFuncMapCRUD_EditEx.divFldGraph);
        break;
      case 'DnFuncMap_AddNewRecord_SameNameKey':
        objDnFuncMap = await DnFuncMap_GetObjByDnFuncMapIdAsync(strPara);
        if (objDnFuncMap == null) return;

        await BindLi_DataNode(
          objDnFuncMap.inDataNodeId,
          DnFuncMapCRUD_EditEx.TabIdStatic,
          DnFuncMapCRUD_EditEx.divNodeGraph, //.divName4DataNodeLst,
        );
        objDataNode = await DataNode_GetObjByDataNodeIdAsync(objDnFuncMap.inDataNodeId);
        if (objDataNode == null) return;
        await RemoveLi_FieldTab(objDataNode.fldId, DnFuncMapCRUD_EditEx.divFldGraph);
        break;
      case clsPrjTabFldEN._CurrTabName:
        await Bind_PathOutFldName(DnFuncMapCRUD_EditEx.TabIdStatic);
        break;

      default:
        strMsg = Format(
          '类型(strType):{0}在BindGvCache函数的switch中没有被处理！(DnFuncMapCRUD_EditEx)',
          strType,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: DnFuncMapCRUD_EditEx;
    if (DnFuncMapCRUD.objPageCRUD == null) {
      DnFuncMapCRUD.objPageCRUD = new DnFuncMapCRUD_EditEx();
      objPage = <DnFuncMapCRUD_EditEx>DnFuncMapCRUD.objPageCRUD;
    } else {
      objPage = <DnFuncMapCRUD_EditEx>DnFuncMapCRUD.objPageCRUD;
    }
    // const objPageEdit = new DnFuncMap_EditEx('DnFuncMap_EditEx', objPage);
    //  console.log(objPageEdit);

    switch (strCommandName) {
      case 'Bind_PathOutFldName':
        Bind_PathOutFldName(DnFuncMapCRUD_EditEx.TabIdStatic);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refDnFuncMap_Edit.value.btnDnFuncMap_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refDnFuncMap_Edit.value.btnDnFuncMap_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refDnFuncMap_Detail.value.btnDnFuncMap_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refDnFuncMap_Edit.value.btnDnFuncMap_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Refresh': //查询记录
        objPage.btnRefresh_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DnFuncMapCRUD_EditEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  public async btnRefresh_Click() {
    const vDataNode_SimStore = usevDataNode_SimStore();
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
    vDnFuncMap_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
    vDataNode_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
    vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

    await this.BindLi_DataNodeLst(
      DnFuncMapCRUD_EditEx.TabIdStatic,
      DnFuncMapCRUD_EditEx.divNodeGraph, //.divName4DataNodeLst,
    );
    await this.BindLi_FieldTabLst(
      DnFuncMapCRUD_EditEx.TabIdStatic,
      DnFuncMapCRUD_EditEx.divFldGraph,
    );
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
*/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // clsPrivateSessionStorage.tabId1 = '00050006';
    // 在此处放置用户代码以初始化页面
    try {
      Position_SetDiv_Right('divDataNode');
      if (setField_ExtendShow != null) {
        //setField_ExtendShow.add("QuestionID");
      }
      //clsPubFun.SetCommFun4BL();
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      // DnFuncMapCRUD_EditEx.CmPrjIdCache = strCmPrjId;
      const objCMProjects = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);

      if (objCMProjects == null) {
        const strMsg = Format('在CM项目Id:[{0}]中，没有相应CM项目，请检查！', strCmPrjId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      DnFuncMapCRUD_EditEx.objCMProjects = objCMProjects;
      const strTabId = this.tabId;
      if (IsNullOrEmpty(strTabId) == true) {
        alert('当前tabId为空，请联系管理员！');
        return;
      }

      const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objPrjTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strTabId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      this.ViewTitle = Format('表:[{0}]数据结点函数映射关系图', objPrjTab.tabName);
      DnFuncMapCRUD_EditEx.TabIdStatic = strTabId;
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;

      //2、显示无条件的表内容在GridView中

      await this.BindLi_DataNodeLst(strTabId, DnFuncMapCRUD_EditEx.divNodeGraph);
      await this.BindLi_FieldTabLst(strTabId, DnFuncMapCRUD_EditEx.divFldGraph);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.trace(strMsg);
      alert(strMsg);
    }
  }
  public async GetNodeInfo4FieldTabLst(
    arrFieldTabExLst: Array<clsvFieldTab_SimENEx>,
    strTabId: string,
  ) {
    let arrDataNodeLst;
    try {
      arrDataNodeLst = await vDataNode_SimEx_GetObjLstByTabIdCacheEx(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (arrDataNodeLst == null) return;
    } catch (e: any) {
      alert(e);
      console.error(e);
      return;
    }
    for (let i = 0; i < arrFieldTabExLst.length; i++) {
      try {
        const objvFieldTab_Sim = arrFieldTabExLst[i];

        const arrDataNode_Sel = arrDataNodeLst
          .filter((x) => x.fldId == objvFieldTab_Sim.fldId)
          .sort(vDataNode_SimEx_SortFunByVersion);
        objvFieldTab_Sim.nodeNum = arrDataNode_Sel.length;
        let i_Len = 0;
        while (i_Len < arrDataNode_Sel.length) {
          const objDataNode_Sel = arrDataNode_Sel[i_Len];

          if (i_Len == 0) {
            // bolIsHasNode = true;
            objvFieldTab_Sim.isHasNode = true;
            objvFieldTab_Sim.dataNodeId = objDataNode_Sel.dataNodeId;
          } else if (i_Len == 1) {
            // bolIsHasNode = true;
            objvFieldTab_Sim.isHasNode = true;
            objvFieldTab_Sim.dataNodeIdV2 = objDataNode_Sel.dataNodeId;
          } else if (i_Len == 2) {
            // bolIsHasNode = true;
            objvFieldTab_Sim.isHasNode = true;
            objvFieldTab_Sim.dataNodeIdV3 = objDataNode_Sel.dataNodeId;
          }
          i_Len++;
        }
      } catch (e: any) {
        console.error(e);
      }
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public async BindLi_FieldTabLst(strTabId: string, objDiv: HTMLDivElement) {
    let arrFieldTabLst: Array<clsvFieldTab_SimEN>;
    try {
      arrFieldTabLst = await vFieldTab_SimEx_GetObjLstByTabIdNoDataNodeCache(
        clsPrivateSessionStorage.cmPrjId,
        strTabId,
      );
    } catch (e: any) {
      alert(e);
      return;
    }

    let arrFieldTabExLst: Array<clsvFieldTab_SimENEx> =
      arrFieldTabLst.map(vFieldTab_SimEx_CopyToEx);

    const divUl: HTMLDivElement = objDiv; // <HTMLDivElement>document.getElementById(strDivName);
    divUl.innerHTML = '';

    //为每个字段获取相关的结点信息
    await this.GetNodeInfo4FieldTabLst(arrFieldTabExLst, strTabId);

    arrFieldTabExLst = arrFieldTabExLst.sort(vFieldTab_SimEx_SortFunByHasNodeAndName);

    for (let i = 0; i < arrFieldTabExLst.length; i++) {
      try {
        arrDataNodeId4BL = [];
        const objvFieldTab_Sim = arrFieldTabExLst[i];
        if (objvFieldTab_Sim.fldName == 'UserId') {
          //console.error(objvFieldTab_Sim);
        }
        if (objvFieldTab_Sim.isHasNode == true) {
          let i_NodeNum = 0;

          while (i_NodeNum < objvFieldTab_Sim.nodeNum) {
            let strDataNodeId_ii = 0;
            let intVersionNo = 1;
            if (i_NodeNum == 0) {
              strDataNodeId_ii = objvFieldTab_Sim.dataNodeId;
              intVersionNo = 1;
            } else if (i_NodeNum == 1) {
              strDataNodeId_ii = objvFieldTab_Sim.dataNodeIdV2;
              intVersionNo = 2;
            } else if (i_NodeNum == 2) {
              strDataNodeId_ii = objvFieldTab_Sim.dataNodeIdV3;
              intVersionNo = 3;
            }
            if (strDataNodeId_ii == 0) {
              const strMsg = Format(
                '字段:{0}没有相关端点。(in DnFuncMapCRUD_EditEx.BindLi_FieldTabLst)',
                objvFieldTab_Sim.fldName,
              );
              console.error(strMsg);
              continue;
            }
            //建立图For一个字段的一个版本，即一个结点
            const divField = await CreateGraph4FieldVersion_HasNode(
              objvFieldTab_Sim,
              strDataNodeId_ii,
              strTabId,
              intVersionNo,
            );
            const objP = await GetP_Path_NoExist(strDataNodeId_ii);

            const divPath_NoExist = await GetDiv_DnPath4NoExist(strDataNodeId_ii, strTabId);
            if (divPath_NoExist != null) {
              divField.appendChild(objP);
              divField.appendChild(divPath_NoExist);
            }
            divUl.appendChild(divField);
            const objHr: HTMLHRElement = document.createElement('hr');
            divUl.appendChild(objHr);
            i_NodeNum++;
          }
        } //if 如果字段有相应的结点
        else {
          const divField = await CreateGraph4FieldVersion_NoNode(objvFieldTab_Sim, strTabId);
          try {
            const objDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldId(
              strTabId,
              objvFieldTab_Sim.fldId,
              1,
            );
            if (objDataNode != null) {
              const divPath_NoExist = await GetDiv_DnPath4NoExist(objDataNode.dataNodeId, strTabId);
              if (divPath_NoExist != null) {
                divField.appendChild(divPath_NoExist);
              }
            }
          } catch (e) {
            console.error(e);
          }
          divUl.appendChild(divField);
          const objHr: HTMLHRElement = document.createElement('hr');
          divUl.appendChild(objHr);
        }
      } catch (e: any) {
        console.error(e);
        if (e.indexOf('获取数据为null') == -1) alert(e);
      } //try
    } //for(let i = 0; i < arrFieldTabExLst.length; i++)
  }

  /**
   * 绑定表中所有的结点
   * @param strTabId
   * @param objDiv
   * @returns
   */
  public async BindLi_DataNodeLst(strTabId: string, objDiv: HTMLDivElement) {
    let arrvDataNodeLst;
    try {
      await Bind_PathOutFldName(strTabId);
      arrvDataNodeLst = await vDataNode_SimEx_GetObjLstByTabIdCacheEx(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
    } catch (e: any) {
      alert(e);
      return;
    }

    const arrDataNodeExLst = arrvDataNodeLst.map(vDataNode_SimEx_CopyToEx);
    for (const objInFor of arrDataNodeExLst) {
      vDataNode_SimEx_FuncMapByFldName(clsvDataNode_SimENEx.con_FldName, objInFor);
    }

    const divUl: HTMLDivElement = objDiv; // <HTMLDivElement>document.getElementById(strDivName);
    divUl.innerHTML = '';

    for (let i = 0; i < arrDataNodeExLst.length; i++) {
      try {
        arrDataNodeId4BL = [];
        const objvDataNode_Sim = arrDataNodeExLst[i];
        //建立图For一个字段的一个版本，即一个结点
        const divDataNode = await CreateGraph4DataNode(objvDataNode_Sim);
        const objP = await GetP_Path_NoExist(objvDataNode_Sim.dataNodeId);

        const divPath_NoExist = await GetDiv_DnPath4NoExist(objvDataNode_Sim.dataNodeId, strTabId);
        if (divPath_NoExist != null) {
          divDataNode.appendChild(objP);
          divDataNode.appendChild(divPath_NoExist);
        }
        divUl.appendChild(divDataNode);
        const objHr: HTMLHRElement = document.createElement('hr');
        divUl.appendChild(objHr);
      } catch (e: any) {
        console.error(e);
        try {
          if (e.indexOf('获取数据为null') == -1) alert(e);
        } catch {}
      } //try
    } //for(let i = 0; i < arrFieldTabExLst.length; i++)
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'inDataNodeName|Ex':
        viewVarSet.sortDnFuncMapBy = `vDataNode_Sim|inDataNodeName ${sortDirection}|DnFuncMap.InDataNodeId = vDataNode_Sim.DataNodeId`;
        break;
      case 'outDataNodeName|Ex':
        viewVarSet.sortDnFuncMapBy = `vDataNode_Sim|outDataNodeName ${sortDirection}|DnFuncMap.OutDataNodeId = vDataNode_Sim.DataNodeId`;
        break;
      case 'associationMappingName|Ex':
        viewVarSet.sortDnFuncMapBy = `AssociationMapping|associationMappingName ${sortDirection}|DnFuncMap.AssociationMappingId = AssociationMapping.AssociationMappingId`;
        break;
      case 'funcMapModeName|Ex':
        viewVarSet.sortDnFuncMapBy = `FuncMapMode|funcMapModeName ${sortDirection}|DnFuncMap.FuncMapModeId = FuncMapMode.FuncMapModeId`;
        break;
      case 'dnFunctionName|Ex':
        viewVarSet.sortDnFuncMapBy = `DnFunction|dnFunctionName ${sortDirection}|DnFuncMap.DnFunctionId = DnFunction.DnFunctionId`;
        break;
      default:
        viewVarSet.sortDnFuncMapBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_DnFuncMap4Func(this.listPara.listDiv);
  }

  public static ShowOrHideDiv(strDivName: string) {
    const objDiv = GetDivObjInDivObj(DnFuncMapCRUD_EditEx.divNodeGraph, strDivName);
    console.error(objDiv);
    if (objDiv.style.visibility == '' || objDiv.style.visibility == 'hidden') {
      ShowDivObj(objDiv);
    } else {
      HideDivObj(objDiv);
    }
  }

  public async RefreshNodeGraph(strDataNodeId: number): Promise<boolean> {
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    const objvDataNode = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
      strDataNodeId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvDataNode == null) {
      const strMsg = `DataNodeId:[${strDataNodeId}]在缓存中不存在.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    const strTabId: string = objvDataNode.tabId;
    const intVersionNo: number = objvDataNode.versionNo;
    const objvFieldTab_Sim0 = await vFieldTab_Sim_GetObjByFldIdCache(
      objvDataNode.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvFieldTab_Sim0 == null) {
      const strMsg = `字段Id:[${objvDataNode.fldId}]在缓存中不存在.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    const objvFieldTab_Sim1 = vFieldTab_SimEx_CopyToEx(objvFieldTab_Sim0);

    const objvFieldTab_Sim = vFieldTab_SimEx_CopyToEx(objvFieldTab_Sim1);
    objvFieldTab_Sim.isHasNode = true;

    const strDivDataNodeId = GetDivId_DataNode(strDataNodeId);
    const divDataNode: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivDataNodeId);
    divDataNode.innerHTML = '';
    //divField.className = "CurrTabNode";
    const ulField: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    ulField.id = Format('ul{0}', objvDataNode.fldId);
    ulField.className = 'nav';

    const li_Field: HTMLLIElement = document.createElement('li');
    li_Field.className = 'nav-item';
    li_Field.id = Format('liFld_{0}', objvDataNode.fldId);

    const ulCreateFunc: HTMLUListElement = await GetUl_CreateFunc(
      objvDataNode.fldId,
      objvDataNode.tabId,
      objvDataNode.versionNo,
    );

    let bolIsHasAdjNode = false; // 是否有关联结点，即是否有下一个关系结点
    const spnField = await GetSpan_Field(
      objvFieldTab_Sim,
      objvDataNode.dataNodeTypeId,
      objvDataNode.versionNo,
    );

    arrDataNodeId4BL.push(strDataNodeId);

    const bolIsHasPrevEdge = await CreatePrev_Field(strDataNodeId, ulField);
    //以当前结点为输入结点的关系
    const arrDataNodeMapFunc_In = await vDnFuncMap_SimStore.getObjLstByIn(strDataNodeId);

    if (arrDataNodeMapFunc_In.length > 0) {
      bolIsHasAdjNode = true;
    }

    li_Field.appendChild(spnField);

    //如果有下一个关联结点
    if (bolIsHasAdjNode == true) {
      ulField.appendChild(li_Field);

      const li_Sub: HTMLLIElement = document.createElement('li');
      li_Sub.className = 'nav-item';
      li_Sub.id = Format('liSub_{0}', objvFieldTab_Sim.fldId);
      li_Sub.appendChild(ulCreateFunc);

      let intIndex = 1;
      for (const objDataNodeMapFunc_In of arrDataNodeMapFunc_In) {
        const objDataNode_In = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
          objDataNodeMapFunc_In.inDataNodeId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        //console.error(1objDataNode_In);
        const objDataNode_Out = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
          objDataNodeMapFunc_In.outDataNodeId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        //console.error(1objDataNode_Out);
        if (objDataNode_In == null || IsNullOrEmpty(objDataNode_In.dataNodeName) == true) {
          continue;
        }
        if (objDataNode_Out == null || IsNullOrEmpty(objDataNode_Out.dataNodeName) == true) {
          continue;
        }
        const ulNext1: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
        ulNext1.id = Format('ul{0}', objDataNodeMapFunc_In.dnFuncMapId);
        ulNext1.className = 'nav mb-1';
        //console.error(intIndex);
        //console.error(spnField);

        const li_Arraw = await getArrawLi(objDataNodeMapFunc_In, intIndex);
        if (li_Arraw == null) continue;
        ulNext1.appendChild(li_Arraw);
        const bolIsExtendShow = vFieldTab_SimEx_IsExtendShow(objvFieldTab_Sim.fldName);
        await ShowNextNode(objDataNodeMapFunc_In, ulNext1, bolIsExtendShow);

        li_Sub.appendChild(ulNext1);
        ulField.appendChild(li_Sub);
        intIndex++;
        if (arrDataNodeId4BL.indexOf(objDataNodeMapFunc_In.outDataNodeId) == -1) {
          arrDataNodeId4BL.push(objDataNodeMapFunc_In.outDataNodeId);
        } else {
          break;
        }
      }
    } //如果是结点
    else {
      //如果没有下一个关联结点，即没有下一条边-----------------------------------------
      if (bolIsHasPrevEdge == false) {
        //如果该字段结点有前驱
        const btnDelNode: HTMLButtonElement = document.createElement('button');
        btnDelNode.id = Format('btnDelNode{0}', objvFieldTab_Sim.fldId);
        btnDelNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
        btnDelNode.title = '删除当前结点';
        (function (strDataNodeId1) {
          btnDelNode.onclick = function () {
            DnFuncMapCRUD_EditEx.btnDelNode_Click(strDataNodeId1);
          };
        })(strDataNodeId);
        btnDelNode.innerText = '删除结点';
        li_Field.appendChild(btnDelNode);
      }
      const btnCreateFuncMap: HTMLButtonElement = GetButton_CreateFuncMap(
        objvFieldTab_Sim.fldId,
        strTabId,
        intVersionNo,
      );
      const btnCreateFuncMapFromKey = await GetButton_CreateFuncMapFromKey(
        objvFieldTab_Sim.fldId,
        strTabId,
        1,
      );

      const divCreateFuncMap_SameNameKey = await GetButton_CreateFuncMap_SameNameKey(
        objvFieldTab_Sim.fldId,
        strTabId,
        intVersionNo,
      );
      const btnCopyNode: HTMLButtonElement = GetButton_CopyNode(
        objvFieldTab_Sim.fldId,
        strTabId,
        intVersionNo,
      );
      //const btnExtendShow: HTMLButtonElement = await GetButton_ExtendShow(objvFieldTab_SimEx.fldId);

      li_Field.appendChild(btnCreateFuncMap);
      if (btnCreateFuncMapFromKey != null) {
        li_Field.appendChild(btnCreateFuncMapFromKey);
      }
      if (divCreateFuncMap_SameNameKey != null) {
        li_Field.appendChild(divCreateFuncMap_SameNameKey);
      }
      li_Field.appendChild(btnCopyNode);
      //li_Field.appendChild(btnExtendShow);
      ulField.appendChild(li_Field);

      //如果没有下一个关联结点，即没有下一条边=========================================
    }
    //    i_NodeNum++;
    //}//while，循环，同一个字段有多个结点
    divDataNode.appendChild(ulField);
    return true;
  }

  public static btnCreateFuncMap(strFldId: string, strTabId: string, intVersionNo: number) {
    const objPage: DnFuncMapCRUD_EditEx = new DnFuncMapCRUD_EditEx();
    const objPageEdit: DnFuncMap_EditV2Ex = new DnFuncMap_EditV2Ex('DnFuncMap_EditV2Ex', objPage);

    objPageEdit.btnAddNewRecordV2_Click(strFldId, strTabId, intVersionNo);
    //alert(strFldId);
  }
  public static btnCreateFldByDnPath(strDnPathId: string, strTabId: string) {
    const objPage: DnFuncMapCRUD_EditEx = new DnFuncMapCRUD_EditEx();
    const objPageEdit: PrjTabFld_EditEx = new PrjTabFld_EditEx('PrjTabFld_EditEx', objPage);
    objPageEdit.btnCreateFldByDnPath_Click(strDnPathId, strTabId);
    //alert(strFldId);
  }
  public static btnCreateFuncMapFromKey(
    strKeyIdLst: string,
    strFldId: string,
    strTabId: string,
    intVersionNo: number,
  ) {
    const objPage: DnFuncMapCRUD_EditEx = new DnFuncMapCRUD_EditEx();
    const objPageEdit: DnFuncMap_EditV2Ex = new DnFuncMap_EditV2Ex('DnFuncMap_EditV2Ex', objPage);
    objPageEdit.btnAddNewRecordFromKey_Click(strKeyIdLst, strFldId, strTabId, intVersionNo);
    //alert(strFldId);
  }
  public static async btnCreateFuncMap_SameNameKey(
    strFldId: string,
    strTabId: string,
    strOutFldId: string,
    strOutTabId: string,
    intVersionNo: number,
  ) {
    const objPage: DnFuncMapCRUD_EditEx = new DnFuncMapCRUD_EditEx();
    const objPageEdit: DnFuncMap_EditV2Ex = new DnFuncMap_EditV2Ex('DnFuncMap_EditV2Ex', objPage);
    await objPageEdit.btnAddNewRecord_SamNameKey_Click(
      strFldId,
      strTabId,
      strOutFldId,
      strOutTabId,
      intVersionNo,
    );

    // const objDnFuncMapCRUD_EditEx = new DnFuncMapCRUD_EditEx(divLayout);
    // await objDnFuncMapCRUD_EditEx.BindLi_DataNodeLst(
    //   DnFuncMapCRUD_EditEx.TabIdStatic,
    //   DnFuncMapCRUD_EditEx.divNodeGraph,
    // );
    // await objDnFuncMapCRUD_EditEx.BindLi_FieldTabLst(
    //   DnFuncMapCRUD_EditEx.TabIdStatic,
    //   DnFuncMapCRUD_EditEx.divFldGraph, //.divName4FieldLst,
    // );

    //alert(strFldId);
  }

  public static btnToggleDropdown_Click(event: any) {
    console.log('event:', event);
    // alert('btnToggleDropdown_Click');
    const divParent = event.parentNode as HTMLDivElement;
    const arrDiv = divParent.getElementsByTagName('div');

    if (arrDiv.length > 0) {
      const objSubDiv = arrDiv[0];
      if (objSubDiv.style.display == 'none') {
        objSubDiv.style.display = 'block';
      } else {
        objSubDiv.style.display = 'none';
      }
    }
  }
  /**
   *  复制记录
   */
  public static async btnCopyNode_Click(strFldId: string, strTabId: string, intVersionNo: number) {
    try {
      await DataNodeEx_CopyNodeToNewVersion(strTabId, strFldId, intVersionNo);
      const objDnFuncMapCRUD_EditEx = new DnFuncMapCRUD_EditEx();

      await objDnFuncMapCRUD_EditEx.BindLi_DataNodeLst(
        DnFuncMapCRUD_EditEx.TabIdStatic,
        DnFuncMapCRUD_EditEx.divNodeGraph,
      );
      await objDnFuncMapCRUD_EditEx.BindLi_FieldTabLst(
        DnFuncMapCRUD_EditEx.TabIdStatic,
        DnFuncMapCRUD_EditEx.divFldGraph, //.divName4FieldLst,
      );

      console.log('完成复制！');
    } catch (e: any) {
      const strMsg = `复制记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public static async btnExtendShow_Click(strDataNodeId: number) {
    try {
      const objvDataNode = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        strDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objvDataNode == null) {
        const strMsg = `DataNodeId:[${strDataNodeId}]在缓存中不存在.`;
        console.error('Error: ', strMsg);
        alert(strMsg);
        throw strMsg;
      }
      const strFldId: string = objvDataNode.fldId;
      const objvFieldTab_SimEx = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objvFieldTab_SimEx == null) {
        const strMsg = `字段Id:[${strFldId}]在缓存中不存在.`;
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      if (setField_ExtendShow.has(objvFieldTab_SimEx.fldName)) {
        setField_ExtendShow.delete(objvFieldTab_SimEx.fldName);
      } else {
        setField_ExtendShow.add(objvFieldTab_SimEx.fldName);
      }
      const objDnFuncMapCRUD_EditEx = new DnFuncMapCRUD_EditEx();
      await objDnFuncMapCRUD_EditEx.RefreshNodeGraph(strDataNodeId);

      console.log('完成-设置扩展显示！');
    } catch (e: any) {
      const strMsg = `设置扩展显示不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public static async btnDelMap_Click(strDnFuncMapId: string) {
    //alert(strKeyId);
    try {
      if (IsNullOrEmpty(strDnFuncMapId) == true) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }

      const objDnFuncMap = await DnFuncMap_GetObjByDnFuncMapIdAsync(strDnFuncMapId);

      if (objDnFuncMap == null) {
        alert(`关系映射:${strDnFuncMapId}在表中的对象为空！`);
        vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        PrjTabFld_ReFreshCache(DnFuncMapCRUD_EditEx.TabIdStatic);
        DnFuncMapCRUD_EditEx.btn_Click('Refresh', '');
        return;
      }
      await this.DelRecordEx(strDnFuncMapId);

      //显示in结点
      await BindLi_DataNode(
        objDnFuncMap.inDataNodeId,
        DnFuncMapCRUD_EditEx.TabIdStatic,
        DnFuncMapCRUD_EditEx.divNodeGraph,
      );
      //显示out结点
      await BindLi_DataNode(
        objDnFuncMap.outDataNodeId,
        DnFuncMapCRUD_EditEx.TabIdStatic,
        DnFuncMapCRUD_EditEx.divNodeGraph,
      );
    } catch (e: any) {
      const strMsg = `删除映射不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /**
   * 根据关键字删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   **/
  public static async DelRecordEx(strDnFuncMapId: string) {
    const strThisFuncName = this.DelRecordEx.name;
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    try {
      const returnBool = await DnFuncMapEx_DelRecordEx(
        strDnFuncMapId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (returnBool == true) {
        //DnFuncMap_ReFreshCache();
        const strInfo = Format('删除记录成功!');
        vDnFuncMap_SimStore.delObj(strDnFuncMapId);
        vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        PrjTabFld_ReFreshCache(DnFuncMapCRUD_EditEx.TabIdStatic);
        DnFuncMapCRUD_EditEx.btn_Click('Refresh', '');
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('删除记录不成功!');
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
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

  /**
   * 删除结点，使之变成字段
   */
  public static async btnDelNode_Click(strKeyId: number) {
    const vDataNode_SimStore = usevDataNode_SimStore();
    try {
      if (strKeyId == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(0) == false) {
        return;
      }
      const objvDataNode = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        strKeyId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objvDataNode == null) {
        const strMsg = `DataNodeId:[${strKeyId}]在缓存中不存在.`;
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return false;
      }
      //const strTabId: string = objvDataNode.tabId;
      //const intVersionNo: number = objvDataNode.versionNo;
      const strDivFieldId = GetDivId_FieldVersion(objvDataNode.fldId, objvDataNode.versionNo);
      const divField: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivFieldId);
      if (divField != null) divField.innerHTML = '';

      const objDataNodeCRUD = new DataNodeCRUDEx();
      await objDataNodeCRUD.DelRecord(strKeyId);
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);

      await RemoveLi_DataNode(objvDataNode.dataNodeId, DnFuncMapCRUD_EditEx.divNodeGraph);
      await BindLi_FieldTab(
        objvDataNode.fldId,
        DnFuncMapCRUD_EditEx.TabIdStatic,
        DnFuncMapCRUD_EditEx.divFldGraph,
      );
    } catch (e: any) {
      const strMsg = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public get tabId(): string {
    const strTabId = DnFuncMapCRUD_EditEx.GetPropValue('tabId');
    if (IsNullOrEmpty(strTabId) == false) return strTabId;
    return clsPrivateSessionStorage.tabId_Main;
  }
}

/**
 * 绑定表中所有的结点
 * @param strTabId
 * @param objDiv
 * @returns
 */
async function BindLi_DataNode(strDataNodeId: number, strTabId: string, objDiv: HTMLDivElement) {
  const objvDataNode_Sim = await vDataNode_Sim_GetObjByDataNodeIdAsync(strDataNodeId);
  if (objvDataNode_Sim == null) return;
  if (objvDataNode_Sim.tabId != strTabId) return;
  const bolIsExist = await PrjTabFldEx_IsExistByFldId(strTabId, objvDataNode_Sim.fldId);
  if (bolIsExist == false) return;

  const objDataNodeEx = vDataNode_SimEx_CopyToEx(objvDataNode_Sim);

  vDataNode_SimEx_FuncMapByFldName(clsvDataNode_SimENEx.con_FldName, objDataNodeEx);

  const divUl: HTMLDivElement = objDiv; // <HTMLDivElement>document.getElementById(strDivName);
  // divUl.innerHTML = '';

  try {
    // arrDataNodeId4BL = [];
    const objvDataNode_Sim = objDataNodeEx;
    //建立图For一个字段的一个版本，即一个结点
    const divDataNode = await CreateGraph4DataNode(objvDataNode_Sim);
    const objP = await GetP_Path_NoExist(objvDataNode_Sim.dataNodeId);

    const divPath_NoExist = await GetDiv_DnPath4NoExist(objvDataNode_Sim.dataNodeId, strTabId);
    if (divPath_NoExist != null) {
      divDataNode.appendChild(objP);
      divDataNode.appendChild(divPath_NoExist);
    }
    const divDataNode_Old = GetDivObjInDivObjN(objDiv, divDataNode.id);
    if (divDataNode_Old != null) {
      const hrOld = divDataNode_Old.nextSibling;
      if (hrOld != null && hrOld.nodeName == 'HR') {
        divUl.removeChild(hrOld);
      }
      divUl.removeChild(divDataNode_Old);
    }
    divUl.appendChild(divDataNode);
    const objHr: HTMLHRElement = document.createElement('hr');
    divUl.appendChild(objHr);
  } catch (e: any) {
    console.error(e);
    if (e.indexOf('获取数据为null') == -1) alert(e);
  } //try
}
async function RemoveLi_DataNode(strDataNodeId: number, objDiv: HTMLDivElement) {
  const strDivName_DataNode = `divDataNode_${strDataNodeId}`;
  const objSubDiv = GetDivObjInDivObjN(objDiv, strDivName_DataNode);
  if (objSubDiv == null) return;
  const hrOld = objSubDiv.nextSibling;
  if (hrOld != null && hrOld.nodeName == 'HR') {
    objDiv.removeChild(hrOld);
  }
  objDiv.removeChild(objSubDiv);
}

/** 根据条件获取相应的对象列表
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
 */
async function BindLi_FieldTab(strFldId: string, strTabId: string, objDiv: HTMLDivElement) {
  const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdAsync(strFldId);
  if (objvFieldTab_Sim == null) return;

  const bolIsExist = await PrjTabFldEx_IsExistByFldIdCache(strTabId, strFldId);
  if (bolIsExist == false) return;

  const objvFieldTabEx = vFieldTab_SimEx_CopyToEx(objvFieldTab_Sim);

  const divUl: HTMLDivElement = objDiv; // <HTMLDivElement>document.getElementById(strDivName);
  // divUl.innerHTML = '';

  //为每个字段获取相关的结点信息
  // await this.GetNodeInfo4FieldTabLst(arrFieldTabExLst, strTabId);

  try {
    arrDataNodeId4BL = [];
    const objvFieldTab_Sim = objvFieldTabEx;
    if (objvFieldTab_Sim.fldName == 'UserId') {
      //console.error(objvFieldTab_Sim);
    }
    if (objvFieldTab_Sim.isHasNode == true) {
      let i_NodeNum = 0;

      while (i_NodeNum < objvFieldTab_Sim.nodeNum) {
        let strDataNodeId_ii = 0;
        let intVersionNo = 1;
        if (i_NodeNum == 0) {
          strDataNodeId_ii = objvFieldTab_Sim.dataNodeId;
          intVersionNo = 1;
        } else if (i_NodeNum == 1) {
          strDataNodeId_ii = objvFieldTab_Sim.dataNodeIdV2;
          intVersionNo = 2;
        } else if (i_NodeNum == 2) {
          strDataNodeId_ii = objvFieldTab_Sim.dataNodeIdV3;
          intVersionNo = 3;
        }
        if (strDataNodeId_ii == 0) {
          const strMsg = Format(
            '字段:{0}没有相关端点。(in DnFuncMapCRUD_EditEx.BindLi_FieldTabLst)',
            objvFieldTab_Sim.fldName,
          );
          console.error(strMsg);
          continue;
        }
        //建立图For一个字段的一个版本，即一个结点
        const divField = await CreateGraph4FieldVersion_HasNode(
          objvFieldTab_Sim,
          strDataNodeId_ii,
          strTabId,
          intVersionNo,
        );
        const objP = await GetP_Path_NoExist(strDataNodeId_ii);

        const divPath_NoExist = await GetDiv_DnPath4NoExist(strDataNodeId_ii, strTabId);
        if (divPath_NoExist != null) {
          divField.appendChild(objP);
          divField.appendChild(divPath_NoExist);
        }
        divUl.appendChild(divField);
        const objHr: HTMLHRElement = document.createElement('hr');
        divUl.appendChild(objHr);
        i_NodeNum++;
      }
    } //if 如果字段有相应的结点
    else {
      const divField = await CreateGraph4FieldVersion_NoNode(objvFieldTab_Sim, strTabId);
      try {
        const objDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldId(
          strTabId,
          objvFieldTab_Sim.fldId,
          1,
        );
        if (objDataNode != null) {
          const divPath_NoExist = await GetDiv_DnPath4NoExist(objDataNode.dataNodeId, strTabId);
          if (divPath_NoExist != null) {
            divField.appendChild(divPath_NoExist);
          }
        }
      } catch (e) {
        console.error(e);
      }
      divUl.appendChild(divField);
      const objHr: HTMLHRElement = document.createElement('hr');
      divUl.appendChild(objHr);
    }
  } catch (e: any) {
    console.error(e);
    if (e.indexOf('获取数据为null') == -1) alert(e);
  } //try
}

async function RemoveLi_FieldTab(strFldId: string, objDiv: HTMLDivElement) {
  const strDivName_FldName = `divFieldNode_${strFldId}`;
  const objSubDiv = GetDivObjInDivObjN(objDiv, strDivName_FldName);
  if (objSubDiv == null) return;
  const hrOld = objSubDiv.nextSibling;
  if (hrOld != null && hrOld.nodeName == 'HR') {
    objDiv.removeChild(hrOld);
  }
  objDiv.removeChild(objSubDiv);
}

async function GetDiv_DataNode(objvDataNode_Sim: clsvDataNode_SimENEx) {
  const divLevel1: HTMLDivElement = document.createElement('div');

  divLevel1.id = GetDivId_DataNode(objvDataNode_Sim.dataNodeId);
  return divLevel1;
}

async function getArrawLi(
  objDnFuncMap: clsvDnFuncMap_Sim,
  intIndex: number,
): Promise<HTMLLIElement | null> {
  const objFuncMapMode = await FuncMapMode_GetObjByFuncMapModeIdCache(objDnFuncMap.funcMapModeId);
  if (objFuncMapMode == null) {
    const strMsg = Format(
      '函数映射模式Id:[{0}]，没有相应的模式，请检查！',
      objDnFuncMap.funcMapModeId,
    );
    console.error(strMsg);
    alert(strMsg);
    return null;
  }

  const li_Arraw: HTMLLIElement = document.createElement('li');
  li_Arraw.className = 'nav-item ml-2 mr-2';
  li_Arraw.id = Format('li_Arraw_{0}', objDnFuncMap.dnFuncMapId);
  const objDiv: HTMLDivElement = document.createElement('div');
  objDiv.className = 'NodeRelation';
  const objSpan_FuncMap: HTMLSpanElement = document.createElement('span');
  objSpan_FuncMap.setAttribute('class', 'text-primary');
  if (objFuncMapMode.funcMapModeId == enumFuncMapMode.Table_01) {
    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      objDnFuncMap.tabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objPrjTab == null) {
      const strMsg = Format(
        '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        objDnFuncMap.tabId,
      );
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    objSpan_FuncMap.innerHTML = Format(
      '{2}.{0}-{1}',
      objFuncMapMode.funcMapModeName,
      objPrjTab.tabName,
      intIndex,
    );
  } else {
    const objDnFunction = await DnFunction_GetObjByDnFunctionIdCache(
      objDnFuncMap.dnFunctionId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDnFunction == null) {
      const strMsg = Format(
        '在项目:[{0}]中，结点函数Id:[{1}]没有相应结点函数，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        objDnFuncMap.dnFunctionId,
      );
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    objSpan_FuncMap.innerHTML = Format(
      '{2}.{0}-{1}',
      objFuncMapMode.funcMapModeName,
      objDnFunction.dnFunctionName,
      intIndex,
    );
  }

  const objBr: HTMLBRElement = document.createElement('br');

  const objSpan_Arraw: HTMLSpanElement = document.createElement('span');
  if (objDnFuncMap.associationMappingId == enumAssociationMapping.OneToMany_02) {
    objSpan_Arraw.setAttribute('class', 'text-warning');
    objSpan_Arraw.innerHTML = '==>';
  }
  if (objDnFuncMap.associationMappingId == enumAssociationMapping.OneToOne_01) {
    objSpan_Arraw.setAttribute('class', 'text-primary');
    objSpan_Arraw.innerHTML = '-->';
  }

  const btnDelMap: HTMLButtonElement = document.createElement('button');

  btnDelMap.id = Format('btnDelMap{0}', objDnFuncMap.dnFuncMapId);
  btnDelMap.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnDelMap.title = '删除当前映射';

  (function (strKeyId) {
    btnDelMap.onclick = function () {
      DnFuncMapCRUD_EditEx.btnDelMap_Click(strKeyId);
    };
  })(objDnFuncMap.dnFuncMapId);
  btnDelMap.innerText = '删除';

  objDiv.appendChild(objSpan_FuncMap);
  objDiv.appendChild(objBr);
  objDiv.appendChild(objSpan_Arraw);
  objDiv.appendChild(btnDelMap);

  li_Arraw.appendChild(objDiv);
  return li_Arraw;
}

async function CreateGraph4DataNode(
  objvDataNode_Sim: clsvDataNode_SimENEx,
): Promise<HTMLDivElement> {
  // const strThisFuncName = this.CreateGraph4DataNode.name;

  const divDataNode: HTMLDivElement = await GetDiv_DataNode(objvDataNode_Sim);
  //divField.className = "CurrTabNode";
  const ulDataNode: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulDataNode.id = Format('ul{0}', objvDataNode_Sim.dataNodeId);
  ulDataNode.className = 'nav';

  const li_DataNode: HTMLLIElement = document.createElement('li');
  li_DataNode.className = 'nav-item';
  li_DataNode.id = Format('liDn_{0}{1}', objvDataNode_Sim.dataNodeId, objvDataNode_Sim.fldName);

  const ulCreateFunc: HTMLUListElement = await GetUl_CreateFunc4DataNode(objvDataNode_Sim);

  let bolIsHasAdjNode = false; // 是否有关联结点，即是否有下一个关系结点
  const spnDataNode = await GetSpan_DataNode(objvDataNode_Sim);

  arrDataNodeId4BL.push(objvDataNode_Sim.dataNodeId);

  const bolIsHasPrevEdge = await CreatePrev_DataNode(objvDataNode_Sim.dataNodeId, ulDataNode);
  //以当前结点为输入结点的关系
  const arrDataNodeMapFunc_In = await vDnFuncMap_SimEx_GetObjLstByInDataNodeIdCacheEx(
    objvDataNode_Sim.dataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (arrDataNodeMapFunc_In == null) {
    bolIsHasAdjNode = false;
  } else if (arrDataNodeMapFunc_In.length > 0) {
    bolIsHasAdjNode = true;
  }

  li_DataNode.appendChild(spnDataNode);

  //如果有下一个关联结点
  if (bolIsHasAdjNode == true) {
    ulDataNode.appendChild(li_DataNode);

    const li_Sub: HTMLLIElement = document.createElement('li');
    li_Sub.className = 'nav-item';
    li_Sub.id = Format('liSub_{0}', objvDataNode_Sim.dataNodeId);
    li_Sub.appendChild(ulCreateFunc);

    let intIndex = 1;
    if (arrDataNodeMapFunc_In != null) {
      for (const objDataNodeMapFunc_In of arrDataNodeMapFunc_In) {
        const objDataNode_In = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
          objDataNodeMapFunc_In.inDataNodeId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        //console.error(1objDataNode_In);
        const objDataNode_Out = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
          objDataNodeMapFunc_In.outDataNodeId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        //console.error(1objDataNode_Out);
        if (objDataNode_In == null || IsNullOrEmpty(objDataNode_In.dataNodeName) == true) {
          continue;
        }
        if (objDataNode_Out == null || IsNullOrEmpty(objDataNode_Out.dataNodeName) == true) {
          continue;
        }
        const ulNext1: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
        ulNext1.id = Format('ul{0}', objDataNodeMapFunc_In.dnFuncMapId);
        ulNext1.className = 'nav mb-1';
        //console.error(intIndex);
        //console.error(spnField);

        const li_Arraw = await getArrawLi(objDataNodeMapFunc_In, intIndex);
        if (li_Arraw == null) continue;
        ulNext1.appendChild(li_Arraw);
        const bolIsExtendShow = vFieldTab_SimEx_IsExtendShow(objvDataNode_Sim.fldName);
        await ShowNextNode(objDataNodeMapFunc_In, ulNext1, bolIsExtendShow);

        li_Sub.appendChild(ulNext1);
        ulDataNode.appendChild(li_Sub);
        intIndex++;
        if (arrDataNodeId4BL.indexOf(objDataNodeMapFunc_In.outDataNodeId) == -1) {
          arrDataNodeId4BL.push(objDataNodeMapFunc_In.outDataNodeId);
        } else {
          break;
        }
      }
    }
  } //如果是结点
  else {
    //如果没有下一个关联结点，即没有下一条边-----------------------------------------
    if (bolIsHasPrevEdge == false) {
      //如果该字段结点有前驱
      const btnDelNode: HTMLButtonElement = document.createElement('button');
      btnDelNode.id = Format('btnDelNode{0}', objvDataNode_Sim.dataNodeId);
      btnDelNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
      btnDelNode.title = '删除当前结点';

      (function (strDataNodeId1) {
        btnDelNode.onclick = function () {
          DnFuncMapCRUD_EditEx.btnDelNode_Click(strDataNodeId1);
        };
      })(objvDataNode_Sim.dataNodeId);
      btnDelNode.innerText = '删除结点';
      li_DataNode.appendChild(btnDelNode);
    }
    const btnCreateFuncMap: HTMLButtonElement = GetButton_CreateFuncMap_DataNode(objvDataNode_Sim);
    const btnCreateFuncMapFromKey = await GetButton_CreateFuncMapFromKey(
      objvDataNode_Sim.fldId,
      objvDataNode_Sim.tabId,
      1,
    );

    const divCreateFuncMap_SameNameKey = await GetButton_CreateFuncMap_SameNameKey(
      objvDataNode_Sim.fldId,
      objvDataNode_Sim.tabId,
      objvDataNode_Sim.versionNo,
    );

    const btnCopyNode: HTMLButtonElement = GetButton_CopyNode_DN(objvDataNode_Sim);
    //const btnExtendShow: HTMLButtonElement = await GetButton_ExtendShow(objvFieldTab_Sim.fldId);

    li_DataNode.appendChild(btnCreateFuncMap);
    if (btnCreateFuncMapFromKey != null) {
      li_DataNode.appendChild(btnCreateFuncMapFromKey);
    }
    if (divCreateFuncMap_SameNameKey != null) {
      li_DataNode.appendChild(divCreateFuncMap_SameNameKey);
    }
    li_DataNode.appendChild(btnCopyNode);
    //li_Field.appendChild(btnExtendShow);
    ulDataNode.appendChild(li_DataNode);

    //如果没有下一个关联结点，即没有下一条边=========================================
  }
  //    i_NodeNum++;
  //}//while，循环，同一个字段有多个结点
  divDataNode.appendChild(ulDataNode);
  return divDataNode;
}

async function ShowNextNode(
  objDataNodeMapFunc_p: clsvDnFuncMap_Sim,
  objUlContainer: HTMLUListElement,
  bolIsExtendShow: boolean,
) {
  const objDataNodeId_Out2 = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
    objDataNodeMapFunc_p.outDataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objDataNodeId_Out2 == null) return;
  let objDiv4Field;
  try {
    objDiv4Field = await vFieldTab_SimEx_GetDiv4FieldWithTabName(
      objDataNodeId_Out2.fldId,
      objDataNodeId_Out2.tabId,
      objDataNodeId_Out2.dataNodeTypeId,
      objDataNodeId_Out2.versionNo,
      objDataNodeMapFunc_p.prjId,
      0,
      btnJumpAIToTabId_Click,
    );
    if (objDiv4Field == null) return;
    objDiv4Field.className = 'RelaTabNode';
  } catch (e: any) {
    console.error(e);
    return;
  }
  const li_Sub: HTMLLIElement = document.createElement('li');
  li_Sub.className = 'nav-item';
  li_Sub.id = Format('liSub_{0}_{1}', objDataNodeId_Out2.tabId, objDataNodeId_Out2.fldId);
  li_Sub.appendChild(objDiv4Field);
  objUlContainer.appendChild(li_Sub);
  if (objDataNodeId_Out2.tabId == DnFuncMapCRUD_EditEx.TabIdStatic) {
    return;
  }
  const arrDnFuncMap_Next = await vDnFuncMap_SimEx_GetObjLstByInDataNodeIdCacheEx(
    objDataNodeId_Out2.dataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (arrDnFuncMap_Next == null) return;
  if (arrDnFuncMap_Next.length == 0) {
    const li_Sub: HTMLLIElement = document.createElement('li');
    li_Sub.className = 'nav-item';
    li_Sub.id = Format('liSub_{0}_{1}', objDataNodeId_Out2.tabId, objDataNodeId_Out2.fldId);
    li_Sub.appendChild(objDiv4Field);
    objUlContainer.appendChild(li_Sub);
  }
  if (bolIsExtendShow == false) return;
  let intIndex = 1;
  const li_Sub_Parent: HTMLLIElement = document.createElement('li');
  li_Sub_Parent.className = 'nav-item';
  li_Sub_Parent.id = Format('liSub_Pa_{0}_{1}', objDataNodeId_Out2.tabId, objDataNodeId_Out2.fldId);

  for (const objDnFuncMap_2 of arrDnFuncMap_Next) {
    const objDataNode_In = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
      objDnFuncMap_2.inDataNodeId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    const objDataNode_Out = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
      objDnFuncMap_2.outDataNodeId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDataNode_In == null || IsNullOrEmpty(objDataNode_In.dataNodeName) == true) {
      continue;
    }
    if (objDataNode_Out == null || IsNullOrEmpty(objDataNode_Out.dataNodeName) == true) {
      continue;
    }

    const ulNext1: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    ulNext1.id = Format('ul{0}_{1}', objDataNodeId_Out2.tabId, objDataNodeId_Out2.fldId);
    ulNext1.className = 'nav mb-1';

    const li_Arraw = await getArrawLi(objDnFuncMap_2, intIndex);
    if (li_Arraw == null) continue;
    ulNext1.appendChild(li_Arraw);
    const bolIsExtendShow_Sub = true; // vFieldTab_SimEx_IsExtendShow(objvFieldTab_Sim.fldName);

    ShowNextNode(objDnFuncMap_2, ulNext1, bolIsExtendShow_Sub);
    li_Sub_Parent.appendChild(ulNext1);
    objUlContainer.appendChild(li_Sub_Parent);
    intIndex++;
    if (arrDataNodeId4BL.indexOf(objDnFuncMap_2.outDataNodeId) == -1) {
      arrDataNodeId4BL.push(objDnFuncMap_2.outDataNodeId);
    } else {
      break;
    }
  }
}

async function GetP_Path_NoExist(strInDataNodeId: number): Promise<HTMLParagraphElement> {
  const objP = <HTMLParagraphElement>document.createElement('p');
  const objA = <HTMLAnchorElement>document.createElement('a');
  const objDataNode = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
    strInDataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objDataNode == null) return objP;
  const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    objDataNode.fldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objFieldTab == null) return objP;
  const divDnPath4NoExist = Format('divDnPath4NoExist_{0}', strInDataNodeId);
  objA.innerText = Format('显示/隐藏路径建立区域-{0}', objFieldTab.fldName);
  objA.className = 'btn btn-primary';
  objA.setAttribute('data-toggle', 'collapse');
  objA.setAttribute('role', 'button');
  objA.setAttribute('aria-expanded', 'false');
  objA.setAttribute('aria-controls', divDnPath4NoExist);
  (function (divDnPath4NoExist) {
    objA.onclick = function () {
      DnFuncMapCRUD_EditEx.ShowOrHideDiv(divDnPath4NoExist);
    };
  })(divDnPath4NoExist);
  // objA.href = Format('#d1ivDnPath4NoExist_{0}', strInDataNodeId);
  objP.appendChild(objA);
  return objP;
}

async function GetDiv_DnPath4NoExist(
  strInDataNodeId: number,
  strInTabId: string,
): Promise<HTMLDivElement | null> {
  const strThisFuncName = GetDiv_DnPath4NoExist.name;
  const strPrjId = clsPrivateSessionStorage.currSelPrjId;
  const arrDnPath_NoExist = await DnPathEx_GetDnPath4NoExist(strInDataNodeId, strInTabId, strPrjId);
  const divDnPath4NoExist: HTMLDivElement = <HTMLDivElement>document.createElement('div');
  divDnPath4NoExist.className = 'collapse';
  divDnPath4NoExist.id = Format('divDnPath4NoExist_{0}', strInDataNodeId);
  if (arrDnPath_NoExist == null || arrDnPath_NoExist.length == 0) return null;

  const divDnPath4NoExist0 = <HTMLDivElement>document.createElement('div');
  divDnPath4NoExist0.className = 'card card-body';

  let intCount = 0;
  useBBFunctions(DnFuncMapCRUD_EditEx.vuebtn_Click);
  for (const objInFor of arrDnPath_NoExist) {
    let divPath;
    try {
      divPath = await DnPathEx_CreateGraph4InOutDataNode(
        objInFor.dnPathId,
        objInFor.inDataNodeId,
        objInFor.outDataNodeId,
        clsPrivateSessionStorage.cmPrjId,
      );
    } catch (e) {
      const strMsg = Format(
        '路径:[{0}({1})]在建立图过程中出错。[error:{2}] ({3})',
        objInFor.dnPathId,
        objInFor.dnPathName,
        e,

        strThisFuncName,
      );
      console.error(strMsg);
      divPath = GetDiv_Empty('');
      const spnErrMsg = GetSpan_Empty('text-danger font-weight-bold');
      let strErrMsg = Format('{0}', e);
      const int_in = strErrMsg.indexOf('(in');
      if (int_in > -1) {
        strErrMsg = strErrMsg.substring(0, int_in);
      }
      const strMsg2 = Format(
        '路径:[{0}]在建立图过程中出错。error:{1}',
        objInFor.dnPathName,
        strErrMsg,
      );
      spnErrMsg.innerHTML = strMsg2;
      divPath.appendChild(spnErrMsg);
    }
    if (divPath == null) continue;
    divDnPath4NoExist0.appendChild(divPath);
    intCount++;
  }
  if (intCount == 0) return null;
  divDnPath4NoExist.appendChild(divDnPath4NoExist0);
  return divDnPath4NoExist;
}

async function GetUl_CreateFunc4DataNode(
  objvDataNode_SimEx: clsvDataNode_SimENEx,
): Promise<HTMLUListElement> {
  const btnCreateFunc: HTMLButtonElement = document.createElement('button');

  btnCreateFunc.id = Format('btnCreateFuncMap{0}', objvDataNode_SimEx.dataNodeId);
  btnCreateFunc.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFunc.title = '建立导出映射';

  (function (strFldId, strTabId1, intVersionNo1) {
    btnCreateFunc.onclick = function () {
      DnFuncMapCRUD_EditEx.btnCreateFuncMap(strFldId, strTabId1, intVersionNo1);
    };
  })(objvDataNode_SimEx.fldId, objvDataNode_SimEx.tabId, objvDataNode_SimEx.versionNo);
  btnCreateFunc.innerText = '建立映射0';
  const divCreateFuncMap_SameNameKey = await GetButton_CreateFuncMap_SameNameKey_DN(
    objvDataNode_SimEx,
  );

  const li_CreateFunc: HTMLLIElement = document.createElement('li');
  li_CreateFunc.className = 'nav-item';
  li_CreateFunc.id = Format('liCreateFunc_{0}', objvDataNode_SimEx.dataNodeId);
  li_CreateFunc.appendChild(btnCreateFunc);

  if (divCreateFuncMap_SameNameKey != null) {
    li_CreateFunc.appendChild(divCreateFuncMap_SameNameKey);
  }
  const btnCopyNode: HTMLButtonElement = GetButton_CopyNode_DN(objvDataNode_SimEx);
  li_CreateFunc.appendChild(btnCopyNode);
  const strDataNodeId = await vDataNode_SimEx_GetKeyIdByDataNode(objvDataNode_SimEx);
  const btnExtendShow: HTMLButtonElement = await GetButton_ExtendShow(strDataNodeId);
  li_CreateFunc.appendChild(btnExtendShow);
  const ulCreateFunc: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulCreateFunc.id = Format('ulCreateFunc{0}', objvDataNode_SimEx.dataNodeId);
  ulCreateFunc.className = 'nav';
  ulCreateFunc.appendChild(li_CreateFunc);
  return ulCreateFunc;
}

async function GetButton_CreateFuncMap_SameNameKey_DN(
  objvDataNode_SimEx: clsvDataNode_SimENEx,
): Promise<HTMLDivElement | null> {
  const strThisFuncName = GetButton_CreateFuncMap_SameNameKey_DN.name;

  //const btnCreateFuncMap_SameNameKey: HTMLButtonElement = document.createElement("button");
  if (IsNullOrEmpty(objvDataNode_SimEx.fldId) == true) return null;

  let arrPrjTabFld = await vPrjTabFld_SimEx_getObjLstByFldIdAndFldType(
    objvDataNode_SimEx.fldId,
    enumFieldType.KeyField_02,
  );
  arrPrjTabFld = arrPrjTabFld.filter((x) => x.tabId != DnFuncMapCRUD_EditEx.TabIdStatic);
  if (arrPrjTabFld.length == 0) {
    const strHomologousFldId = await vFieldTab_SimEx_GetHomologousFldIdByFldIdCacheEx(
      objvDataNode_SimEx.fldId,
    );
    if (IsNullOrEmpty(strHomologousFldId) == true) return null;

    arrPrjTabFld = await vPrjTabFld_SimEx_getObjLstByFldIdAndFldType(
      strHomologousFldId,
      enumFieldType.KeyField_02,
    );

    if (arrPrjTabFld.length == 0) {
      const strMsg = Format('该字段没有同名主键！ (in {0})', strThisFuncName);
      console.error(strMsg);
      return null;
    }
  }

  const divButGroup = GetDiv_Empty('btn-group ml-1');
  divButGroup.setAttribute('role', 'group');
  const btnCreateFuncMap_SameNameKey = GetButton_Empty('btn btn-info btn-sm dropdown-toggle');
  btnCreateFuncMap_SameNameKey.type = 'button';
  btnCreateFuncMap_SameNameKey.setAttribute('data-toggle', 'dropdown');
  btnCreateFuncMap_SameNameKey.setAttribute('aria-expanded', 'false');
  btnCreateFuncMap_SameNameKey.id = Format(
    'btnCreateFuncMap_SameNameKey{0}',
    objvDataNode_SimEx.dataNodeId,
  );
  //btnCreateFuncMap_SameNameKey.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFuncMap_SameNameKey.title = '建立导出映射,与主键表的同名主键';
  btnCreateFuncMap_SameNameKey.innerText = '建立同名主键映射';

  (function () {
    btnCreateFuncMap_SameNameKey.onclick = function (this) {
      DnFuncMapCRUD_EditEx.btnToggleDropdown_Click(this);
    };
  })();
  const divDropdown_menu = GetDiv_Empty('myDropdown-menu');
  divDropdown_menu.style.display = 'none';
  // const bolIsHasMenuItem = false;
  for (const objInFor of arrPrjTabFld) {
    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      objInFor.tabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objPrjTab == null) continue;
    // const intKeyNum = await PrjTabFldEx_GetPrimaryKeyNumByTabIdCache(objInFor.tabId);
    // if (intKeyNum == 0) continue;
    // if (intKeyNum > 1) continue;

    const aItem = GetA_Empty('dropdown-item');
    aItem.href = 'javascript:void(0)';

    const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      objInFor.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFieldTab == null) continue;
    if (vPrjTab_SimEx_IsCache_TS(objPrjTab.cacheModeId) == false) {
      aItem.innerText = Format('{0}({1})', objPrjTab.tabName, objFieldTab.fldName);
      const spnErrMsg = GetSpan_Empty('text-danger font-weight-bold');
      spnErrMsg.innerHTML = '--该表为非缓存，不合适做函数映射表.';
      aItem.appendChild(spnErrMsg);
    } else {
      const strCacheName = await CacheMode_GetNameByCacheModeIdCache(objPrjTab.cacheModeId);
      aItem.innerText = Format(
        '{0}({1})({2})',
        objPrjTab.tabName,
        objFieldTab.fldName,
        strCacheName,
      );
    }

    (function (strFldId, strTabId1, strOutFldId, strOutTabId, intVersionNo1) {
      aItem.onclick = function () {
        DnFuncMapCRUD_EditEx.btnCreateFuncMap_SameNameKey(
          strFldId,
          strTabId1,
          strOutFldId,
          strOutTabId,
          intVersionNo1,
        );
      };
    })(
      objvDataNode_SimEx.fldId,
      objvDataNode_SimEx.tabId,
      objInFor.fldId,
      objInFor.tabId,
      objvDataNode_SimEx.versionNo,
    );
    divDropdown_menu.appendChild(aItem);
  }

  divButGroup.appendChild(btnCreateFuncMap_SameNameKey);
  divButGroup.appendChild(divDropdown_menu);

  return divButGroup;
}

async function GetSpan_DataNode(
  objvDataNode_SimEx: clsvDataNode_SimENEx,
): Promise<HTMLSpanElement> {
  let spnDataNode: HTMLSpanElement = document.createElement('span');
  try {
    spnDataNode = await vFieldTab_SimEx_GetSpan4DataNode(objvDataNode_SimEx);
  } catch (e: any) {
    return spnDataNode;
  }

  spnDataNode.className = 'text-danger font-weight-bold text-g';

  spnDataNode.className = 'CurrTabNode';

  return spnDataNode;
}

async function CreatePrev_DataNode(
  strDataNodeId: number,
  ulField: HTMLUListElement,
): Promise<boolean> {
  const li_Prev_Parent: HTMLLIElement = document.createElement('li');
  li_Prev_Parent.className = 'list-unstyled';
  const spnPrevTitle = document.createElement('span');
  spnPrevTitle.className = 'bd-content-title';
  spnPrevTitle.innerHTML = '前驱结点列表:';
  const h5 = document.createElement('h5');
  h5.appendChild(spnPrevTitle);
  li_Prev_Parent.appendChild(h5);

  //以当前结点为输出结点的关系

  const arrDataNodeMapFunc_Out = await vDnFuncMap_SimEx_GetObjLstByOutDataNodeIdCacheEx(
    strDataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (arrDataNodeMapFunc_Out == null) return false;
  let intIndex = 1;

  if (arrDataNodeMapFunc_Out.length > 0) {
    let arrDataNodeMapFuncEx_Out: Array<clsvDnFuncMap_SimENEx> =
      arrDataNodeMapFunc_Out.map(vDnFuncMap_SimEx_CopyToEx);
    for (const objDataNodeMapFuncEx_p of arrDataNodeMapFuncEx_Out) {
      objDataNodeMapFuncEx_p.inDataNodeName = await vDataNode_Sim_GetNameByDataNodeIdCache(
        objDataNodeMapFuncEx_p.inDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
    }
    arrDataNodeMapFuncEx_Out = arrDataNodeMapFuncEx_Out.sort(
      vDnFuncMap_SimEx_SortFunByInDataNodeName,
    );
    for (const objDataNodeMapFunc_p of arrDataNodeMapFuncEx_Out) {
      const ul_Prev: HTMLUListElement = document.createElement('ul');
      ul_Prev.className = 'nav mb-1';

      const li_Arraw_Prev = await getArrawLi(objDataNodeMapFunc_p, 1);
      if (li_Arraw_Prev == null) {
        continue;
      }
      li_Arraw_Prev.className = 'nav-item ml-2';
      const objInDataNode_Out = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        objDataNodeMapFunc_p.inDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objInDataNode_Out == null) return true;
      let objDiv4Field1;
      try {
        if (objDataNodeMapFunc_p.tabId == DnFuncMapCRUD_EditEx.TabIdStatic) {
          objDiv4Field1 = await vFieldTab_SimEx_GetDiv4FieldWithCurrTab();
          //objSpan4Field1.className = "CurrTabNode";
        } else {
          objDiv4Field1 = await vFieldTab_SimEx_GetDiv4FieldWithTabName(
            objInDataNode_Out.fldId,
            objInDataNode_Out.tabId,
            objInDataNode_Out.dataNodeTypeId,
            objInDataNode_Out.versionNo,
            objDataNodeMapFunc_p.prjId,
            intIndex,
            btnJumpAIToTabId_Click,
          );
          if (objDiv4Field1 != null) objDiv4Field1.className = 'RelaTabNode';
        }
        if (objDiv4Field1 == null) {
          continue;
        }
      } catch (e: any) {
        console.error(e);
        return true;
      }
      const li_Sub: HTMLLIElement = document.createElement('li');
      li_Sub.className = 'nav-item';
      li_Sub.id = Format('liSub_{0}_{1}', objInDataNode_Out.tabId, objInDataNode_Out.fldId);
      li_Sub.appendChild(objDiv4Field1);

      ul_Prev.appendChild(li_Sub);
      ul_Prev.appendChild(li_Arraw_Prev);
      li_Prev_Parent.appendChild(ul_Prev);
      intIndex++;
    }

    if (arrDataNodeMapFunc_Out.length > 0) {
      ulField.appendChild(li_Prev_Parent);
    }
    return true;
  } else return false;
}

function GetButton_CreateFuncMap_DataNode(
  objvDataNode_SimEx: clsvDataNode_SimENEx,
): HTMLButtonElement {
  const btnCreateFuncMap: HTMLButtonElement = document.createElement('button');

  btnCreateFuncMap.id = Format('btnCreateFuncMap{0}', objvDataNode_SimEx.dataNodeId);
  btnCreateFuncMap.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFuncMap.title = '建立导出映射';

  (function (strFldId, strTabId1, intVersionNo1) {
    btnCreateFuncMap.onclick = function () {
      DnFuncMapCRUD_EditEx.btnCreateFuncMap(strFldId, strTabId1, intVersionNo1);
    };
  })(objvDataNode_SimEx.fldId, objvDataNode_SimEx.tabId, objvDataNode_SimEx.versionNo);
  btnCreateFuncMap.innerText = '建立映射';
  return btnCreateFuncMap;
}

async function GetButton_CreateFuncMapFromKey(
  strFldId: string,
  strTabId: string,
  intVersionNo: number,
): Promise<HTMLButtonElement | null> {
  const btnCreateFuncMap: HTMLButtonElement = document.createElement('button');

  btnCreateFuncMap.id = Format('btnCreateFuncMapFromKey{0}', strFldId);
  btnCreateFuncMap.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFuncMap.title = '建立从关键字到当前字段的导入映射';
  const arrPrjTabFld_Key = await PrjTabFldEx_GetPrimaryKeyObjLstByTabIdCache(strTabId);
  if (arrPrjTabFld_Key.length == 0) return null;
  const arrKeyFldLst = arrPrjTabFld_Key.map((x) => x.fldId);
  const strKeyFldLst = GetKeyFldStrByKeyLst(arrKeyFldLst);

  (function (strKeyIdLst, strFldId, strTabId1, intVersionNo1) {
    btnCreateFuncMap.onclick = function () {
      DnFuncMapCRUD_EditEx.btnCreateFuncMapFromKey(strKeyIdLst, strFldId, strTabId1, intVersionNo1);
    };
  })(strKeyFldLst, strFldId, strTabId, intVersionNo);
  btnCreateFuncMap.innerText = 'Key->映射';
  return btnCreateFuncMap;
}

async function GetButton_CreateFuncMap_SameNameKey(
  strFldId: string,
  strTabId: string,
  intVersionNo: number,
): Promise<HTMLDivElement | null> {
  const strThisFuncName = GetButton_CreateFuncMap_SameNameKey.name;

  let arrPrjTabFld = await vPrjTabFld_SimEx_getObjLstByFldIdAndFldType(
    strFldId,
    enumFieldType.KeyField_02,
  );
  arrPrjTabFld = arrPrjTabFld.filter((x) => x.tabId != DnFuncMapCRUD_EditEx.TabIdStatic);
  if (arrPrjTabFld.length == 0) {
    const strHomologousFldId = await vFieldTab_SimEx_GetHomologousFldIdByFldIdCacheEx(strFldId);
    if (IsNullOrEmpty(strHomologousFldId) == true) return null;

    arrPrjTabFld = await vPrjTabFld_SimEx_getObjLstByFldIdAndFldType(
      strHomologousFldId,
      enumFieldType.KeyField_02,
    );
    if (arrPrjTabFld.length == 0) {
      const strMsg = Format('该字段没有同名主键！ (in {0})', strThisFuncName);
      console.error(strMsg);
      return null;
    }
  }
  if (arrPrjTabFld.length > 30) {
    const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      strFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFieldTab != null) {
      const strMsg = `该字段:[${objFieldTab.fldName}]的同名主键超过30个[${arrPrjTabFld.length}]请检查！ (in ${strThisFuncName})`;
      console.error(strMsg);
      return null;
    }
  }
  const divButGroup = GetDiv_Empty('btn-group ml-1');
  divButGroup.setAttribute('role', 'group');
  const btnCreateFuncMap_SameNameKey = GetButton_Empty('btn btn-info btn-sm dropdown-toggle');
  btnCreateFuncMap_SameNameKey.type = 'button';
  btnCreateFuncMap_SameNameKey.setAttribute('data-toggle', 'dropdown');
  btnCreateFuncMap_SameNameKey.setAttribute('aria-expanded', 'false');
  btnCreateFuncMap_SameNameKey.id = Format('btnCreateFuncMap_SameNameKey{0}', strFldId);
  //btnCreateFuncMap_SameNameKey.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFuncMap_SameNameKey.title = '建立导出映射,与主键表的同名主键';
  btnCreateFuncMap_SameNameKey.innerText = '建立同名主键映射';
  (function () {
    btnCreateFuncMap_SameNameKey.onclick = function (this) {
      DnFuncMapCRUD_EditEx.btnToggleDropdown_Click(this);
    };
  })();
  const divDropdown_menu = GetDiv_Empty('myDropdown-menu');
  divDropdown_menu.style.display = 'none';
  for (const objInFor of arrPrjTabFld) {
    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      objInFor.tabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objPrjTab == null) continue;
    const intPrimaryKeyNum = await PrjTabFldEx_GetPrimaryKeyNumByTabIdCache(objInFor.tabId);
    if (intPrimaryKeyNum == 0) continue;
    if (intPrimaryKeyNum > 1) continue;
    const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      objInFor.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFieldTab == null) continue;
    const aItem = GetA_Empty('dropdown-item');
    aItem.href = 'javascript:void(0)';

    if (vPrjTab_SimEx_IsCache_TS(objPrjTab.cacheModeId) == false) {
      aItem.innerText = Format('{0}({1})', objPrjTab.tabName, objFieldTab.fldName);
      const spnErrMsg = GetSpan_Empty('text-danger font-weight-bold');
      spnErrMsg.innerHTML = '--该表为非缓存，不合适做函数映射表.';
      aItem.appendChild(spnErrMsg);
    } else {
      const strCacheName = await CacheMode_GetNameByCacheModeIdCache(objPrjTab.cacheModeId);
      aItem.innerText = Format(
        '{0}({1})(缓存:{2})',
        objPrjTab.tabName,
        objFieldTab.fldName,
        strCacheName,
      );
    }
    (function (strFldId, strTabId1, strOutFldId, strOutTabId, intVersionNo1) {
      aItem.onclick = function () {
        DnFuncMapCRUD_EditEx.btnCreateFuncMap_SameNameKey(
          strFldId,
          strTabId1,
          strOutFldId,
          strOutTabId,
          intVersionNo1,
        );
      };
    })(strFldId, strTabId, objInFor.fldId, objInFor.tabId, intVersionNo);
    divDropdown_menu.appendChild(aItem);
  }

  divButGroup.appendChild(btnCreateFuncMap_SameNameKey);
  divButGroup.appendChild(divDropdown_menu);

  return divButGroup;
}

function GetButton_CopyNode_DN(objvDataNode_SimEx: clsvDataNode_SimENEx): HTMLButtonElement {
  const btnCopyNode: HTMLButtonElement = document.createElement('button');

  btnCopyNode.id = Format('btnCopyNode{0}', objvDataNode_SimEx.dataNodeId);
  btnCopyNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCopyNode.title = '建立导出映射';

  (function (strFldId, strTabId1, intVersionNo1) {
    btnCopyNode.onclick = function () {
      DnFuncMapCRUD_EditEx.btnCopyNode_Click(strFldId, strTabId1, intVersionNo1);
    };
  })(objvDataNode_SimEx.fldId, objvDataNode_SimEx.tabId, objvDataNode_SimEx.versionNo);
  btnCopyNode.innerText = '复制结点';
  return btnCopyNode;
}

async function GetButton_ExtendShow(strDataNodeId: number): Promise<HTMLButtonElement> {
  const btnExtendShow: HTMLButtonElement = document.createElement('button');

  btnExtendShow.id = Format('btnExtendShow{0}', strDataNodeId);
  btnExtendShow.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnExtendShow.title = '建立导出映射';

  (function (strDataNodeId) {
    btnExtendShow.onclick = function () {
      DnFuncMapCRUD_EditEx.btnExtendShow_Click(strDataNodeId);
    };
  })(strDataNodeId);

  const objvDataNode = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
    strDataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvDataNode == null) {
    const strMsg = `DataNodeId:[${strDataNodeId}]在缓存中不存在.`;
    console.error('Error: ', strMsg);
    //console.trace();
    alert(strMsg);
    throw strMsg;
  }
  const objvFieldTab_SimEx = await vFieldTab_Sim_GetObjByFldIdCache(
    objvDataNode.fldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  let strinnerText = '扩展显示';
  btnExtendShow.title = '扩展显示该结点的所有相关结点';
  if (objvFieldTab_SimEx != null) {
    const bolIsExtendShow = vFieldTab_SimEx_IsExtendShow(objvFieldTab_SimEx.fldName);
    if (bolIsExtendShow == true) {
      strinnerText = '压缩显示';
      btnExtendShow.title = '压缩显示(不显示)该结点的所有相关结点';
    }
  }
  btnExtendShow.innerText = strinnerText;

  return btnExtendShow;
}

async function btnJumpAIToTabId_Click(strTabId: string) {
  try {
    clsPrivateSessionStorage.tabId_Main = strTabId;
    DnFuncMapCRUD_EditEx.TabIdStatic = strTabId;
    // this.BindGvCache('');
    SetTabName();
    await ShowFunc4RelaTab(strTabId);
    await ShowInterface4CurrTab(strTabId);
    DnFuncMapCRUD_EditEx.btn_Click('Refresh', '');

    // router.push({ name: 'account-editTabRelaInfo', params: {} });

    // clsPubVar4Web.SetTabId(strTabId);
    // Redirect(
    //   Format('/AIModule/DnFuncMapCRUD_Edit?AA=AA&amp&TabId={0}&Op=Edit-DnFuncMap', strTabId),
    // );
    //Redirect(Format("./DnFuncMapCRUD_Edit?AA=AA&amp&TabId={0}", strTabId));
  } catch (e: any) {
    const strMsg = `跳转到新界面的人工智能不成功,${e}.`;
    console.error('Error: ', strMsg);
    //console.trace();
    alert(strMsg);
  }
}

async function CreateGraph4FieldVersion_HasNode(
  objvFieldTab_Sim: clsvFieldTab_SimENEx,
  strDataNodeId: number,
  strTabId: string,
  intVersionNo: number,
): Promise<HTMLDivElement> {
  const strThisFuncName = CreateGraph4FieldVersion_HasNode.name;
  const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
  const objDataNode0 = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
    strDataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objDataNode0 == null) {
    const strMsg = Format(
      '根据关键字获取相应的记录的对象为空.(in {0})',

      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }

  const divField: HTMLDivElement = await GetDiv_FieldVersion(objvFieldTab_Sim, intVersionNo);
  //divField.className = "CurrTabNode";
  const ulField: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulField.id = Format('ul{0}', objvFieldTab_Sim.fldId);
  ulField.className = 'nav';

  const li_Field: HTMLLIElement = document.createElement('li');
  li_Field.className = 'nav-item';
  li_Field.id = Format('liFld_{0}', objvFieldTab_Sim.fldId);

  const ulCreateFunc: HTMLUListElement = await GetUl_CreateFunc(
    objvFieldTab_Sim.fldId,
    strTabId,
    intVersionNo,
  );

  let bolIsHasAdjNode = false; // 是否有关联结点，即是否有下一个关系结点
  const spnField = await GetSpan_Field(objvFieldTab_Sim, objDataNode0.dataNodeTypeId, intVersionNo);

  arrDataNodeId4BL.push(objvFieldTab_Sim.dataNodeId);

  const bolIsHasPrevEdge = await CreatePrev_Field(strDataNodeId, ulField);
  //以当前结点为输入结点的关系
  const arrDataNodeMapFunc_In = await vDnFuncMap_SimStore.getObjLstByIn(strDataNodeId);

  if (arrDataNodeMapFunc_In.length > 0) {
    bolIsHasAdjNode = true;
  }

  li_Field.appendChild(spnField);

  //如果有下一个关联结点
  if (bolIsHasAdjNode == true) {
    ulField.appendChild(li_Field);

    const li_Sub: HTMLLIElement = document.createElement('li');
    li_Sub.className = 'nav-item';
    li_Sub.id = Format('liSub_{0}', objvFieldTab_Sim.fldId);
    li_Sub.appendChild(ulCreateFunc);

    let intIndex = 1;
    for (const objDataNodeMapFunc_In of arrDataNodeMapFunc_In) {
      const objDataNode_In = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        objDataNodeMapFunc_In.inDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      //console.error(1objDataNode_In);
      const objDataNode_Out = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        objDataNodeMapFunc_In.outDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      //console.error(1objDataNode_Out);
      if (objDataNode_In == null || IsNullOrEmpty(objDataNode_In.dataNodeName) == true) {
        continue;
      }
      if (objDataNode_Out == null || IsNullOrEmpty(objDataNode_Out.dataNodeName) == true) {
        continue;
      }
      const ulNext1: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
      ulNext1.id = Format('ul{0}', objDataNodeMapFunc_In.dnFuncMapId);
      ulNext1.className = 'nav mb-1';
      //console.error(intIndex);
      //console.error(spnField);

      const li_Arraw = await getArrawLi(objDataNodeMapFunc_In, intIndex);
      if (li_Arraw == null) continue;
      ulNext1.appendChild(li_Arraw);
      const bolIsExtendShow = vFieldTab_SimEx_IsExtendShow(objvFieldTab_Sim.fldName);
      await ShowNextNode(objDataNodeMapFunc_In, ulNext1, bolIsExtendShow);

      li_Sub.appendChild(ulNext1);
      ulField.appendChild(li_Sub);
      intIndex++;
      if (arrDataNodeId4BL.indexOf(objDataNodeMapFunc_In.outDataNodeId) == -1) {
        arrDataNodeId4BL.push(objDataNodeMapFunc_In.outDataNodeId);
      } else {
        break;
      }
    }
  } //如果是结点
  else {
    //如果没有下一个关联结点，即没有下一条边-----------------------------------------
    if (bolIsHasPrevEdge == false) {
      //如果该字段结点有前驱
      const btnDelNode: HTMLButtonElement = document.createElement('button');
      btnDelNode.id = Format('btnDelNode{0}', objvFieldTab_Sim.fldId);
      btnDelNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
      btnDelNode.title = '删除当前结点';

      (function (strDataNodeId1) {
        btnDelNode.onclick = function () {
          DnFuncMapCRUD_EditEx.btnDelNode_Click(strDataNodeId1);
        };
      })(strDataNodeId);
      btnDelNode.innerText = '删除结点';
      li_Field.appendChild(btnDelNode);
    }
    const btnCreateFuncMap: HTMLButtonElement = GetButton_CreateFuncMap(
      objvFieldTab_Sim.fldId,
      strTabId,
      intVersionNo,
    );
    const btnCreateFuncMapFromKey = await GetButton_CreateFuncMapFromKey(
      objvFieldTab_Sim.fldId,
      strTabId,
      1,
    );

    const divCreateFuncMap_SameNameKey = await GetButton_CreateFuncMap_SameNameKey(
      objvFieldTab_Sim.fldId,
      strTabId,
      intVersionNo,
    );

    const btnCopyNode: HTMLButtonElement = GetButton_CopyNode(
      objvFieldTab_Sim.fldId,
      strTabId,
      intVersionNo,
    );
    //const btnExtendShow: HTMLButtonElement = await GetButton_ExtendShow(objvFieldTab_Sim.fldId);

    li_Field.appendChild(btnCreateFuncMap);
    if (btnCreateFuncMapFromKey != null) {
      li_Field.appendChild(btnCreateFuncMapFromKey);
    }
    if (divCreateFuncMap_SameNameKey != null) {
      li_Field.appendChild(divCreateFuncMap_SameNameKey);
    }
    li_Field.appendChild(btnCopyNode);
    //li_Field.appendChild(btnExtendShow);
    ulField.appendChild(li_Field);

    //如果没有下一个关联结点，即没有下一条边=========================================
  }
  //    i_NodeNum++;
  //}//while，循环，同一个字段有多个结点
  divField.appendChild(ulField);
  return divField;
}

async function GetDiv_FieldVersion(objvFieldTab_Sim: clsvFieldTab_SimENEx, intVersionNo: number) {
  const divLevel1: HTMLDivElement = document.createElement('div');

  divLevel1.id = GetDivId_FieldVersion(objvFieldTab_Sim.fldId, intVersionNo);
  return divLevel1;
}

async function CreateGraph4FieldVersion_NoNode(
  objvFieldTab_Sim: clsvFieldTab_SimENEx,
  strTabId: string,
) {
  const divField: HTMLDivElement = await GetDiv_FieldVersion(objvFieldTab_Sim, 1);
  const ulField: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulField.id = Format('ul{0}', objvFieldTab_Sim.fldId);
  ulField.className = 'nav';

  const li_Field: HTMLLIElement = document.createElement('li');
  li_Field.className = 'nav-item';
  li_Field.id = Format('liFld_{0}', objvFieldTab_Sim.fldId);
  const spnField = await GetSpan_Field(objvFieldTab_Sim, enumDataNodeType.Unknown_05, 1);

  li_Field.appendChild(spnField);
  if (objvFieldTab_Sim.fldName != 'mId') {
    const btnCreateFuncMap: HTMLButtonElement = GetButton_CreateFuncMap(
      objvFieldTab_Sim.fldId,
      strTabId,
      1,
    );
    const btnCreateFuncMapFromKey = await GetButton_CreateFuncMapFromKey(
      objvFieldTab_Sim.fldId,
      strTabId,
      1,
    );
    const divCreateFuncMap_SameNameKey = await GetButton_CreateFuncMap_SameNameKey(
      objvFieldTab_Sim.fldId,
      strTabId,
      1,
    );
    li_Field.appendChild(btnCreateFuncMap);
    if (btnCreateFuncMapFromKey != null) {
      li_Field.appendChild(btnCreateFuncMapFromKey);
    }
    if (divCreateFuncMap_SameNameKey != null) {
      li_Field.appendChild(divCreateFuncMap_SameNameKey);
    }
  }

  ulField.appendChild(li_Field);
  divField.appendChild(ulField);
  return divField;
}

async function GetUl_CreateFunc(
  strFldId: string,
  strTabId: string,
  intVersionNo: number,
): Promise<HTMLUListElement> {
  const btnCreateFunc: HTMLButtonElement = document.createElement('button');

  btnCreateFunc.id = Format('btnCreateFuncMap{0}', strFldId);
  btnCreateFunc.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFunc.title = '建立导出映射';

  (function (strFldId, strTabId1, intVersionNo1) {
    btnCreateFunc.onclick = function () {
      DnFuncMapCRUD_EditEx.btnCreateFuncMap(strFldId, strTabId1, intVersionNo1);
    };
  })(strFldId, strTabId, intVersionNo);
  btnCreateFunc.innerText = '建立映射0';
  const divCreateFuncMap_SameNameKey = await GetButton_CreateFuncMap_SameNameKey(
    strFldId,
    strTabId,
    intVersionNo,
  );

  const li_CreateFunc: HTMLLIElement = document.createElement('li');
  li_CreateFunc.className = 'nav-item';
  li_CreateFunc.id = Format('liCreateFunc_{0}', strFldId);
  li_CreateFunc.appendChild(btnCreateFunc);

  if (divCreateFuncMap_SameNameKey != null) {
    li_CreateFunc.appendChild(divCreateFuncMap_SameNameKey);
  }
  const btnCopyNode: HTMLButtonElement = GetButton_CopyNode(strFldId, strTabId, intVersionNo);
  li_CreateFunc.appendChild(btnCopyNode);
  const strDataNodeId = await vDataNode_SimEx_GetKeyIdByTabIdAndFldId(
    strTabId,
    strFldId,
    intVersionNo,
  );
  const btnExtendShow: HTMLButtonElement = await GetButton_ExtendShow(strDataNodeId);
  li_CreateFunc.appendChild(btnExtendShow);
  const ulCreateFunc: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
  ulCreateFunc.id = Format('ulCreateFunc{0}', strFldId);
  ulCreateFunc.className = 'nav';
  ulCreateFunc.appendChild(li_CreateFunc);
  return ulCreateFunc;
}

/**
 * 为当前字段版本建立一个Span
 * @param objvFieldTab_Sim
 * @param intVersionNo
 */
async function GetSpan_Field(
  objvFieldTab_Sim: clsvFieldTab_SimENEx,
  strDataNodeTypeId: string,
  intVersionNo: number,
): Promise<HTMLSpanElement> {
  let spnField: HTMLSpanElement = document.createElement('span');
  try {
    spnField = await vFieldTab_SimEx_GetSpan4Field(
      objvFieldTab_Sim.fldId,
      strDataNodeTypeId,
      intVersionNo,
    );
  } catch (e: any) {
    return spnField;
  }

  spnField.className = 'text-danger font-weight-bold text-g';
  if (objvFieldTab_Sim.isHasNode == false) {
    //spnField.className = "text-secondary font-weight-bold text-g";
    spnField.className = 'CurrTabField';
  } else {
    spnField.className = 'CurrTabNode';
  }

  return spnField;
}

async function CreatePrev_Field(
  strDataNodeId: number,
  ulField: HTMLUListElement,
): Promise<boolean> {
  const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
  const vDataNode_SimStore = usevDataNode_SimStore();
  const li_Prev_Parent: HTMLLIElement = document.createElement('li');
  li_Prev_Parent.className = 'list-unstyled';
  const spnPrevTitle = document.createElement('span');
  spnPrevTitle.className = 'bd-content-title';
  spnPrevTitle.innerHTML = '前驱结点列表:';
  const h5 = document.createElement('h5');
  h5.appendChild(spnPrevTitle);
  li_Prev_Parent.appendChild(h5);

  //以当前结点为输出结点的关系

  const arrDataNodeMapFunc_Out = await vDnFuncMap_SimStore.getObjLstByOut(strDataNodeId);
  let intIndex = 1;

  if (arrDataNodeMapFunc_Out.length > 0) {
    let arrDataNodeMapFuncEx_Out: Array<clsvDnFuncMap_SimENEx> =
      arrDataNodeMapFunc_Out.map(vDnFuncMap_SimEx_CopyToEx);
    for (const objDataNodeMapFuncEx_p of arrDataNodeMapFuncEx_Out) {
      objDataNodeMapFuncEx_p.inDataNodeName = await vDataNode_SimStore.getName(
        objDataNodeMapFuncEx_p.inDataNodeId,
      );
    }
    arrDataNodeMapFuncEx_Out = arrDataNodeMapFuncEx_Out.sort(
      vDnFuncMap_SimEx_SortFunByInDataNodeName,
    );
    for (const objDataNodeMapFunc_p of arrDataNodeMapFuncEx_Out) {
      const ul_Prev: HTMLUListElement = document.createElement('ul');
      ul_Prev.className = 'nav mb-1';

      const li_Arraw_Prev = await getArrawLi(objDataNodeMapFunc_p, 1);
      if (li_Arraw_Prev == null) {
        continue;
      }
      li_Arraw_Prev.className = 'nav-item ml-2';
      const objInDataNode_Out = await vDataNode_SimEx_GetObjByDataNodeIdCacheEx(
        objDataNodeMapFunc_p.inDataNodeId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objInDataNode_Out == null) return true;
      let objDiv4Field1;
      try {
        if (objDataNodeMapFunc_p.tabId == DnFuncMapCRUD_EditEx.TabIdStatic) {
          objDiv4Field1 = await vFieldTab_SimEx_GetDiv4FieldWithCurrTab();
          //objSpan4Field1.className = "CurrTabNode";
        } else {
          objDiv4Field1 = await vFieldTab_SimEx_GetDiv4FieldWithTabName(
            objInDataNode_Out.fldId,
            objInDataNode_Out.tabId,
            objInDataNode_Out.dataNodeTypeId,
            objInDataNode_Out.versionNo,
            objDataNodeMapFunc_p.prjId,
            intIndex,
            btnJumpAIToTabId_Click,
          );
          if (objDiv4Field1 != null) objDiv4Field1.className = 'RelaTabNode';
        }
        if (objDiv4Field1 == null) {
          continue;
        }
      } catch (e: any) {
        console.error(e);
        return true;
      }
      const li_Sub: HTMLLIElement = document.createElement('li');
      li_Sub.className = 'nav-item';
      li_Sub.id = Format('liSub_{0}_{1}', objInDataNode_Out.tabId, objInDataNode_Out.fldId);
      li_Sub.appendChild(objDiv4Field1);

      ul_Prev.appendChild(li_Sub);
      ul_Prev.appendChild(li_Arraw_Prev);
      li_Prev_Parent.appendChild(ul_Prev);
      intIndex++;
    }

    if (arrDataNodeMapFunc_Out.length > 0) {
      ulField.appendChild(li_Prev_Parent);
    }
    return true;
  } else return false;
}

function GetButton_CreateFuncMap(
  strFldId: string,
  strTabId: string,
  intVersionNo: number,
): HTMLButtonElement {
  const btnCreateFuncMap: HTMLButtonElement = document.createElement('button');

  btnCreateFuncMap.id = Format('btnCreateFuncMap{0}', strFldId);
  btnCreateFuncMap.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFuncMap.title = '建立导出映射';

  (function (strFldId, strTabId1, intVersionNo1) {
    btnCreateFuncMap.onclick = function () {
      DnFuncMapCRUD_EditEx.btnCreateFuncMap(strFldId, strTabId1, intVersionNo1);
    };
  })(strFldId, strTabId, intVersionNo);
  btnCreateFuncMap.innerText = '建立映射';
  return btnCreateFuncMap;
}

function GetButton_CopyNode(
  strFldId: string,
  strTabId: string,
  intVersionNo: number,
): HTMLButtonElement {
  const btnCopyNode: HTMLButtonElement = document.createElement('button');

  btnCopyNode.id = Format('btnCopyNode{0}', strFldId);
  btnCopyNode.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCopyNode.title = '建立导出映射';

  (function (strFldId, strTabId1, intVersionNo1) {
    btnCopyNode.onclick = function () {
      DnFuncMapCRUD_EditEx.btnCopyNode_Click(strFldId, strTabId1, intVersionNo1);
    };
  })(strFldId, strTabId, intVersionNo);
  btnCopyNode.innerText = '复制结点';
  return btnCopyNode;
}

/**
 * 绑定每一个路径的导出字段
 * @param strTabId:当前表Id
 * @returns
 */
async function Bind_PathOutFldName(strTabId: string) {
  const strPrjId = clsPrivateSessionStorage.currSelPrjId;

  try {
    let arrOutFldName = await vDnPath_SimEx_GetInOutFldNameLstByInTabId(strTabId, strPrjId);
    if (arrOutFldName != null) {
      arrOutFldName = arrOutFldName.sort();
    }
    if (arrOutFldName != null && arrOutFldName?.length > 0) {
      const objUl = GetUl_Empty('nav');
      const objLi0 = GetLi_Empty('nav-item');
      objLi0.innerHTML =
        "<span class='text-danger font-weight-bold' title='显示与本表相关的简化路径列表'> 路径列表: </span>";
      objUl.appendChild(objLi0);
      for (const spnOutFldNameStr of arrOutFldName) {
        const objLi = GetLi_Empty('nav-item ml-3');
        const spnOutFldName = GetSpan_Empty('text-primary font-weight-bold');

        spnOutFldName.innerHTML = spnOutFldNameStr;
        objLi.appendChild(spnOutFldName);
        const strOutFldName = GetOutFldName(spnOutFldNameStr);
        const objOutFldName = await vDnPath_SimEx_GetPathIdAndFldIdByOutFldName(
          strOutFldName,
          strTabId,
          strPrjId,
        );
        if (objOutFldName != null) {
          const bolIsExist = await PrjTabFldEx_IsExistByFldIdCache(
            strTabId,
            objOutFldName.outFldId,
          );
          if (bolIsExist == false) {
            const btnCreateFldByDnPath = await GetButton_CreateFldByDnPath(
              objOutFldName.dnPathId,
              strTabId,
            );
            if (btnCreateFldByDnPath != null) {
              objLi.appendChild(btnCreateFldByDnPath);
            }
          }
        }
        objUl.appendChild(objLi);
      }
      const divPathOutFldName = <HTMLDivElement>document.getElementById('divPathOutFldName');
      divPathOutFldName.innerHTML = '';
      divPathOutFldName.appendChild(objUl);
    }
  } catch (e: any) {
    alert(e);
    return;
  }
}

function GetOutFldName(spnOutFldNameStr: string) {
  const intPos1 = spnOutFldNameStr.indexOf("'text-primary'");
  const intPos2 = spnOutFldNameStr.indexOf('</span>', intPos1);
  const strOutFldName = spnOutFldNameStr.substring(intPos1 + 15, intPos2);
  return strOutFldName;
}

async function GetButton_CreateFldByDnPath(
  strDnPathId: string,
  strTabId: string,
): Promise<HTMLButtonElement | null> {
  const btnCreateFldByDnPath1: HTMLButtonElement = document.createElement('button');

  btnCreateFldByDnPath1.id = Format('btnCreateFldByDnPath{0}', strDnPathId);
  btnCreateFldByDnPath1.className = 'btn btn-outline-info btn-sm text-nowrap ml-1';
  btnCreateFldByDnPath1.title = '建立从当前路径导入相关字段';

  (function (strDnPathId1, strTabId1) {
    btnCreateFldByDnPath1.onclick = function () {
      DnFuncMapCRUD_EditEx.btnCreateFldByDnPath(strDnPathId1, strTabId1);
    };
  })(strDnPathId, strTabId);
  btnCreateFldByDnPath1.innerText = '建字段';
  return btnCreateFldByDnPath1;
}

async function SetTabName() {
  const strThisFuncName = SetTabName.name;
  const strTabId = clsPrivateSessionStorage.tabId_Main;
  const objvPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    strTabId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvPrjTab == null) {
    const strMsg = Format(
      '根据关键字获取相应的记录的对象为空.(in DnFuncMapCRUD_EditEx.{0})',
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
  refSpnTabName.value.innerHTML = `${objvPrjTab.tabName}(${objvPrjTab.tabId})`;
  console.log(objvPrjTab.tabName);
  //SetSpanHtmlByIdInDiv("divLayout", "spnTabId", strTabId);
  await ShowFunc4RelaTab(strTabId);
  await ShowInterface4CurrTab(strTabId);
}
async function ShowFunc4RelaTab(strTabId: string) {
  const strThisFuncName = ShowFunc4RelaTab.name;
  //const strTabId = this.tabId;
  const objvPrjTab_Sim = await vPrjTab_SimEx_GetObjByTabIdCache(
    strTabId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvPrjTab_Sim == null) return;
  //SetLabelHtmlByIdInDivObj(divFunction, "lblPrjTabFldList", Format("项目表:{0}({1})-表字段维护", objvPrjTab_Sim.tabName, objvPrjTab_Sim.tabId));
  // const vsTabName = objvPrjTab_Sim.tabName;
  const vsSqlDsTypeId = objvPrjTab_Sim.sqlDsTypeId;
  if (vsSqlDsTypeId == enumSQLDSType.SqlTab_01) {
    const strRelaViewTabId = await PrjTabEx_GetRelaViewTabIdByTabId(
      strTabId,
      clsPrivateSessionStorage.currSelPrjId,
    );

    if (IsNullOrEmpty(strRelaViewTabId) == false) {
      const objPrjTabRelaView = await vPrjTab_SimEx_GetObjByTabIdCache(
        strRelaViewTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objPrjTabRelaView == null) return;

      const objA = getAObjByIdInDivObj(divVarSet.refDivLayout, 'aEditRelaTab');
      //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("视图:{0}({1})", objPrjTabRelaView.tabName, objPrjTabRelaView.tabId));
      objA.innerHTML = Format(
        "<span class=' font-weight-bold text-g'>视图</span>:{0}({1})",
        objPrjTabRelaView.tabName,
        objPrjTabRelaView.tabId,
      );

      const objData = { tabId: strRelaViewTabId, Op: 'TabFldEdit' };

      (function (objData: any) {
        objA.onclick = function () {
          PrjTab_AllPropEx.vuebtn_Click('PageLoad', objData);
        };
      })(objData);

      objA.className = 'link-secondary text-secondary font-weight-bold';
      objA.title = '编辑相关视图的字段信息。';
    }

    //HideDivInDiv(divFunction, "divViewFunc");
  } else {
    const strRelaTabId = await PrjTabEx_GetRelaTabIdByViewTabId(strTabId);
    if (IsNullOrEmpty(strRelaTabId) == false) {
      const objPrjTabRelaTab = await vPrjTab_SimEx_GetObjByTabIdCache(
        strRelaTabId,
        clsPrivateSessionStorage.cmPrjId,
      );
      if (objPrjTabRelaTab == null) return;
      //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("表:{0}({1})", objPrjTabRelaTab.tabName, objPrjTabRelaTab.tabId));
      const objA = getAObjByIdInDivObj(divVarSet.refDivLayout, 'aEditRelaTab');
      //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("视图:{0}({1})", objPrjTabRelaView.tabName, objPrjTabRelaView.tabId));
      objA.innerHTML = Format('表:{0}({1})', objPrjTabRelaTab.tabName, objPrjTabRelaTab.tabId);

      const objData = { tabId: strRelaTabId, Op: 'TabFldEdit' };

      (function (objData: any) {
        objA.onclick = function () {
          PrjTab_AllPropEx.vuebtn_Click('PageLoad', objData);
        };
      })(objData);

      objA.className = 'link-secondary text-secondary font-weight-bold';
      objA.title = '编辑相关表的字段信息。';
    } else {
      const objPrjTabEN = await PrjTab_GetObjByTabIdAsync(strTabId);
      if (objPrjTabEN == null) return;

      if (IsNullOrEmpty(objPrjTabEN.relaTabId4View) == false) {
        const objPrjTabRelaTab = await vPrjTab_SimEx_GetObjByTabIdCache(
          objPrjTabEN.relaTabId4View,
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objPrjTabRelaTab == null) return;
        //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("表:{0}({1})", objPrjTabRelaTab.tabName, objPrjTabRelaTab.tabId));
        const objA = getAObjByIdInDivObj(divVarSet.refDivLayout, 'aEditRelaTab');
        //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("视图:{0}({1})", objPrjTabRelaView.tabName, objPrjTabRelaView.tabId));
        objA.innerHTML = Format(
          '相关主表:{0}({1})',
          objPrjTabRelaTab.tabName,
          objPrjTabRelaTab.tabId,
        );
        // const strLinkFile0 = Format(
        //   '../T1able_Field/PrjTabFldCRUD?tabId={0}&Op=TabFldEdit',
        //   objPrjTabEN.relaTabId4View,
        // );
        // let strHref = `${strLinkFile0}`;
        // strHref = strHref.replace('//', '/');

        (function (strTabId1) {
          objA.onclick = function () {
            EditPrjTab(strTabId1);
          };
        })(objPrjTabEN.relaTabId4View);

        // objA.href = strHref;
        objA.className = 'link-secondary text-secondary font-weight-bold';
        objA.title = '编辑相关主表的字段信息。';
      }
    }
    //btnAnalysis.Visible = false;
  }

  try {
    //EditPrjTab(vsTabId);
    //DispGeneCode();
    //DispGeneStoreProcedure();
    //设置是否显示3个相关LinkButton
    DispReleButton();
  } catch (e) {
    const strMsg = Format(
      '(errid: WiTsCs0101)在显示相关表的功能时出错!请联系管理员!{0}.(in DnFuncMapCRUD_EditEx.{1})',
      e,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

async function ShowInterface4CurrTab(strTabId: string) {
  //为数据源于表的下拉框设置内容
  const strWhere = Format(
    " {0} in (select {0} from {1} where {2}='{3}')",
    clsViewInfoCmPrjIdRelaEN.con_ViewId,
    clsViewInfoCmPrjIdRelaEN._CurrTabName,
    clsViewInfoCmPrjIdRelaEN.con_CmPrjId,
    clsPrivateSessionStorage.cmPrjId,
  );
  const arrViewInfo = await ViewInfo_GetObjLstAsync(strWhere);
  const arrViewInfo_Sel = arrViewInfo.filter((x) => x.mainTabId == strTabId);
  if (arrViewInfo_Sel.length == 0) return;

  const aAddNewView = getAObjByIdInDivObj(divVarSet.refDivLayout, 'aAddNewView');
  aAddNewView.innerText = Format('添加新界面');
  aAddNewView.title = Format('添加新界面。');
  aAddNewView.className = 'link-primary text-primary font-weight-bold';

  let strLinkFile0 = Format('../PrjInterface/ViewInfoCRUD?viewId={0}&Op=TabFldEdit', '');
  let strHref = `${strLinkFile0}`;
  strHref = strHref.replace('//', '/');
  aAddNewView.href = strHref;

  const liAddNewView = getLiObjByIdInDivObj(divVarSet.refDivLayout, 'liAddNewView');
  const objNextSibling = liAddNewView.nextSibling;
  for (const objViewInfo of arrViewInfo_Sel) {
    const li0 = <HTMLLIElement>document.createElement('li');
    li0.className = 'nav-item ml-3';
    const a0 = <HTMLAnchorElement>document.createElement('a');
    a0.innerText = Format('编辑:{0}', objViewInfo.viewName);
    a0.title = Format('编辑界面信息：{0}({1})。', objViewInfo.viewName, objViewInfo.viewId);
    a0.className = 'link-primary text-primary font-weight-bold';
    const objApplicationType = await ApplicationType_GetObjByApplicationTypeIdCache(
      objViewInfo.applicationTypeId,
    );
    if (objApplicationType == null) {
      const strMsg = Format(
        '应用Id:[{0}]，没有相应的类型，请检查！',
        objViewInfo.applicationTypeId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objCurrProjects = await Projects_GetObjByPrjIdCache(
      clsPrivateSessionStorage.currSelPrjId,
    );

    if (objCurrProjects == null) {
      const strMsg = Format(
        '项目Id:[{0}]，没有相应的项目，请检查！',
        clsPrivateSessionStorage.currSelPrjId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objFuncModule_Agc = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
      objViewInfo.funcModuleAgcId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFuncModule_Agc == null) {
      const strMsg = Format('模块Id:[{0}]，没有相应的模块，请检查！', objViewInfo.funcModuleAgcId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    // const objViewInfo4Session: stuViewInfo4Session = {
    //   //viewId: objViewInfo.viewId,
    //   //viewName: objViewInfo.viewName,
    //   funcModuleNameSim: objFuncModule_Agc.funcModuleNameSim,
    //   funcModuleEnName: objFuncModule_Agc.funcModuleEnName,
    //   applicationTypeId: objViewInfo.applicationTypeId,
    //   applicationTypeName: objApplicationType.applicationTypeSimName,
    //   currSelPrjId: clsPrivateSessionStorage.currSelPrjId,
    //   currSelPrjName: objCurrProjects.prjName,
    //   keyId4Test: objViewInfo.keyId4Test,
    //   mainTabId: objViewInfo.mainTabId,
    //   outTabId: objViewInfo.outRelaTabId,
    //   cmPrjId: clsPrivateSessionStorage.cmPrjId,
    // };
    clsPrivateSessionStorage.viewId_Main = objViewInfo.viewId;
    clsPrivateSessionStorage.viewName = objViewInfo.viewName;
    clsPrivateSessionStorage.funcModuleNameSim = objFuncModule_Agc.funcModuleNameSim;
    clsPrivateSessionStorage.funcModuleEnName = objFuncModule_Agc.funcModuleEnName;

    //clsPubSessionStorage.ViewInfo4Session = objViewInfo4Session;
    // const strJson = JSON.stringify(objViewInfo4Session);

    // this.SetSessionAsync('objViewInfo4Session', strJson);

    clsPrivateSessionStorage.viewId_Main = objViewInfo.viewId;
    //Redirect("/Index/Main_ViewInfo.js");
    //Redirect("/PrjInterface/ViewInfo_U");
    // '../PrjInterface/ViewInfo_U?viewId={0}&Op=TabFldEdit',
    strLinkFile0 = Format('#/account/editViewRegion?viewId={0}&Op=TabFldEdit', objViewInfo.viewId);
    strHref = `${strLinkFile0}`;
    strHref = strHref.replace('//', '/');
    a0.href = strHref;

    li0.appendChild(a0);
    const objParent = liAddNewView.parentElement;
    if (objParent != null) {
      if (IsExistHyperLink(objParent, a0.title) == false) {
        objParent.insertBefore(li0, objNextSibling);
      }
    }
  }
}

async function DispReleButton() {}
function IsExistHyperLink(objParent: HTMLElement, strFindingTitle: string) {
  const arrA = objParent.getElementsByTagName('a');
  const arrA1 = GetArray(arrA);
  for (const objA of arrA1) {
    if (objA.title == strFindingTitle) return true;
  }
  return false;
}

function EditPrjTab(strTabId: string) {
  DnFuncMapCRUD_EditEx.vuebtn_Click('EditPrjTab', strTabId);
}
