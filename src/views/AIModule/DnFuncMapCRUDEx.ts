// import $ from 'jquery';
// import { DnFuncMap_DataTestEx } from './DnFuncMap_DataTestEx';

import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';
import { clsDnFuncMapENEx } from '@/ts/L0Entity/AIModule/clsDnFuncMapENEx';
import {
  DnFuncMap_GetObjByDnFuncMapIdAsync,
  DnFuncMap_GetObjLstByDnFuncMapIdLstAsync,
  DnFuncMap_GetRecCountByCondAsync,
  DnFuncMap_UpdateRecordAsync,
} from '@/ts/L3ForWApi/AIModule/clsDnFuncMapWApi';
import { DnPathFuncMapRela_ReFreshCache } from '@/ts/L3ForWApi/AIModule/clsDnPathFuncMapRelaWApi';
import {
  DnFuncMapEx_CheckDnFuncMapByPrjId,
  DnFuncMapEx_DelDnFuncMapsExAsync,
  DnFuncMapEx_FuncMapByFldName,
  DnFuncMapEx_GetObjExLstByPagerAsync,
  DnFuncMapEx_GetObjLstByPagerNoCacheAsync,
  DnFuncMapEx_GetRecCountByCondNoCacheAsync,
  DnFuncMapEx_GetRingEdgeLst,
} from '@/ts/L3ForWApiEx/AIModule/clsDnFuncMapExWApi';
import {
  CheckControlExistInDivObj,
  GetCheckBoxValueInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetLabelValueInDivObj,
  GetSelectObjInDivObj,
  GetSelectValueInDivObj,
  GetSelectedIndexInDivObj,
  SetCheckBoxValueByIdInDivObj,
  SetLabelHtmlByIdInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_TrueAndFalseInDivObj, BindTab, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { DnFuncMapCRUD } from '@/viewsBase/AIModule/DnFuncMapCRUD';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import {
  vDataNode_SimEx_BindDdl_DataNodeIdByCmPrjIdInDivCache,
  vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache,
  vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4DN,
  vPrjTab_SimEx_GetTabIdLst4NoCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubFun4Visible } from '@/ts/FunClass/clsPubFun4Visible';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { usevDnFuncMap_SimStore } from '@/store/modules/vDnFuncMap_Sim';
import {
  associationMappingId_q,
  divVarSet,
  dnFunctionId_q,
  funcMapModeId_q,
  inDataNodeId_q,
  outDataNodeId_q,
  refDnFuncMap_Detail,
  refDnFuncMap_Edit,
  tabId_q,
  viewVarSet,
} from '@/views/AIModule/DnFuncMapVueShare';
import { vDataNode_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
import { vDnFuncMap_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';

/** DnFuncMapCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class DnFuncMapCRUDEx extends DnFuncMapCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";

  public static arrTabId_NoCache: Array<string> = [];
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 15;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in ViewInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ViewInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vDnFuncMap]！');
    //this.BindGv_vDnFuncMap();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vDnFuncMap':
      case clsDnFuncMapEN._CurrTabName:
        this.BindGv_DnFuncMap4Func(divVarSet.refDivList);
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
    // let objPage_DataTest: DnFuncMap_DataTestEx;

    let objPage: DnFuncMapCRUDEx;
    if (DnFuncMapCRUD.objPageCRUD == null) {
      DnFuncMapCRUD.objPageCRUD = new DnFuncMapCRUDEx();
      objPage = <DnFuncMapCRUDEx>DnFuncMapCRUD.objPageCRUD;
    } else {
      objPage = <DnFuncMapCRUDEx>DnFuncMapCRUD.objPageCRUD;
    }
    // const objPageEdit = new DnFuncMap_EditEx('DnFuncMap_EditEx', objPage);
    //  console.log(objPageEdit);
    let strMsg = '';

    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
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

      case 'CheckDnFuncMapByCmPrjId': //查询记录
        objPage.btnCheckDnFuncMapByCmPrjId_Click();
        break;
      case 'SetOutDataNode': //查询记录
        objPage.btnSetOutDataNode_Click();
        break;
      case 'DataTest': //查询记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        break;

      case 'GetRingLst': //查询记录
        objPage.btnGetRingLst_Click();
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        objPage.btnDelRecord_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DnFuncMapCRUDEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
*/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //clsPubFun.SetCommFun4BL();
      const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

      // DnFuncMap_Edit.CmPrjIdCache = strCmPrjId;

      DnFuncMapCRUDEx.arrTabId_NoCache = await vPrjTab_SimEx_GetTabIdLst4NoCache(strCmPrjId);
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      viewVarSet.sortDnFuncMapBy = Format('{0} Asc', clsDnFuncMapEN.con_DnFuncMapId);
      //2、显示无条件的表内容在GridView中
      await this.BindGv_DnFuncMap4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId; //定义条件字段
    if (strCmPrjId == '9991') {
      const strMsg = Format("DnFuncMapCRUD.CmPrjIdCache='9991'，还没有被赋正确的值,请检查!");
      throw strMsg;
    }

    await this.SetDdl_InTabIdInDiv(strCmPrjId); //查询区域
    // await this.SetDdl_InDataNodeIdInDiv(); //查询区域
    // await this.SetDdl_OutDataNodeIdInDiv(); //查询区域
    await this.SetDdl_OutDataNodeId_SetInDiv(strCmPrjId); //功能区域
    // await this.SetDdl_AssociationMappingIdInDiv(); //查询区域
    // await this.SetDdl_FuncMapModeIdInDiv(); //查询区域
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
    await this.SetDdl_TabIdInDivEx(clsPrivateSessionStorage.currSelPrjId); //查询区域
    // await this.SetDdl_DnFunctionIdInDiv(strPrjId); //查询区域
    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q');
  }
  /**
   * 设置绑定下拉框，针对字段:[mainTabId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
   **/

  public async SetDdl_InTabIdInDiv(strCmPrjId: string) {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
      divVarSet.refDivQuery,
      'ddlInTabId_q',
      strCmPrjId,
    ); //
  }
  public async SetDdl_TabIdInDivEx(strPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4DN(
      divVarSet.refDivQuery,
      'ddlTabId_q',
      strPrjId,
    ); //编辑区域
  }
  /** 根据条件获取相应的对象列表
   *
   */
  public async btnGetRingLst_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_DnFuncMap4RingLst(divVarSet.refDivList);
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   */
  public async BindGv_DnFuncMap4RingLst(divList: HTMLDivElement) {
    if (viewVarSet.sortDnFuncMapBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortDnFuncMapBy)为空，请检查！(In BindGv_DnFuncMapCache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    //const objDnFuncMap_Cond = this.CombineDnFuncMapConditionObj();
    //objDnFuncMap_Cond.SetCondFldValue(clsDnFuncMapEN.con_CmPrjId, DnFuncMapCRUD.CmPrjIdCache, "=");
    //const objDnFuncMapEN_Sim = DnFuncMap_GetSimObjFromObj(objDnFuncMap_Cond);

    //const strWhereCond = JSON.stringify(objDnFuncMapEN_Sim);
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrDnFuncMapObjLst: Array<clsDnFuncMapEN> = [];
    const arrDnFuncMapExObjLst: Array<clsDnFuncMapENEx> = [];
    try {
      //this.recCount = await DnFuncMap_GetRecCountByCondCache(objDnFuncMap_Cond, DnFuncMapCRUD.CmPrjIdCache);
      //const objPagerPara: stuPagerPara = {
      //    pageIndex: intCurrPageIndex,
      //    pageSize: this.pageSize,
      //    whereCond: strWhereCond,
      //    orderBy: viewVarSet.sortDnFuncMapBy,
      //    sortFun: (x, y) => { return 0; }
      //};
      const arrDnFuncMapId = await DnFuncMapEx_GetRingEdgeLst(clsPrivateSessionStorage.cmPrjId);
      if (arrDnFuncMapId == null || arrDnFuncMapId.length == 0) {
        alert('当前所有结点关系中没有环！');
        return;
      }
      if (arrDnFuncMapId.length == 1 && arrDnFuncMapId[0] == '') {
        alert('当前所有结点关系中没有环！');
        return;
      }

      arrDnFuncMapObjLst = await DnFuncMap_GetObjLstByDnFuncMapIdLstAsync(arrDnFuncMapId);
      for (const objInFor of arrDnFuncMapObjLst) {
        const objEx = new clsDnFuncMapENEx();
        ObjectAssign(objEx, objInFor);
        arrDnFuncMapExObjLst.push(objEx);
      }
    } catch (e: any) {
      const strMsg = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrDnFuncMapObjLst.length == 0) {
      const strKey = `${clsDnFuncMapEN._CurrTabName}_${clsPrivateSessionStorage.cmPrjId}`;
      const strMsg = `在BindGvCache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      await this.BindTab_DnFuncMap4Ring(divList, arrDnFuncMapExObjLst);
    } catch (e: any) {
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 显示DnFuncMap对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrDnFuncMapExObjLst:需要绑定的对象列表
   */
  public async BindTab_DnFuncMap4Ring(
    divContainer: HTMLDivElement,
    arrDnFuncMapExObjLst: Array<clsDnFuncMapENEx>,
  ) {
    const strThisFuncName = this.BindTab_DnFuncMap4Ring.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: clsDnFuncMapEN.con_DnFuncMapId,
        sortBy: clsDnFuncMapEN.con_DnFuncMapId,
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: clsDnFuncMapEN.con_DnFuncMapId,
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'inDataNodeName',
        sortBy: 'inDataNodeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'In结点',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'outDataNodeName',
        sortBy: 'outDataNodeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'Out结点',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'associationMappingName',
        sortBy: 'associationMappingName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '关系映射',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'funcMapModeName',
        sortBy: 'funcMapModeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '映射模式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'tabId',
        sortBy: 'tabId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '表ID',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: 'dnFunctionId',
        sortBy: 'dnFunctionId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'DN函数Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        sortBy: 'updDate',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
    ];

    try {
      await this.ExtendFldFuncMap(arrDnFuncMapExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.DnFuncMapList = '环的列表如下:';
    await BindTab(
      divDataLst,
      arrDnFuncMapExObjLst,
      arrDataColumn,
      clsDnFuncMapEN.con_DnFuncMapId,
      this,
    );
    //this.objPager.recCount = this.recCount;
    //this.objPager.pageSize = this.pageSize;
    //this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /**
   * 数据结点名 (Used In CombineCondition())
   */
  public get DnFuncMapList(): string {
    const strValue = GetLabelValueInDivObj(divVarSet.refDivFunction, 'lblDnFuncMapList');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 数据结点名 (Used In CombineCondition())
   */
  public set DnFuncMapList(value: string) {
    const objDiv = divVarSet.refDivFunction;
    CheckControlExistInDivObj(divVarSet.refDivFunction, 'label', 'lblDnFuncMapList');
    const strId = 'lblDnFuncMapList';

    SetLabelHtmlByIdInDivObj(objDiv, strId, value);
  }
  /** 显示DnFuncMap对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrDnFuncMapExObjLst:需要绑定的对象列表
   */
  public async BindTab_DnFuncMap4Func(
    divContainer: HTMLDivElement,
    arrDnFuncMapExObjLst: Array<clsDnFuncMapENEx>,
  ) {
    const strThisFuncName = this.BindTab_DnFuncMap4Func.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'dnFuncMapId',
        sortBy: 'dnFuncMapId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '流水号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'inDataNodeName',
        sortBy: 'inDataNodeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'In结点',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'outDataNodeName',
        sortBy: 'outDataNodeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'Out结点',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'associationMappingName',
        sortBy: 'associationMappingName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '关系映射',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'funcMapModeName',
        sortBy: 'funcMapModeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '映射模式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'tabName',
        sortBy: 'tabName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'dnFunctionName',
        sortBy: 'dnFunctionName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'DN函数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'errMsg',
        sortBy: 'errMsg',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '错误',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'updDate',
        sortBy: 'updDate',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrDnFuncMapExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    this.DnFuncMapList = '结点关系列表如下:';
    await BindTab(
      divDataLst,
      arrDnFuncMapExObjLst,
      arrDataColumn,
      clsDnFuncMapEN.con_DnFuncMapId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public async ExtendFldFuncMap(
    arrDnFuncMapExObjLst: Array<clsDnFuncMapENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsDnFuncMapEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrDnFuncMapExObjLst) {
        try {
          await DnFuncMapEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
        } catch (e) {
          const strMsg = Format(
            '扩展字段值映射出错。字段名:[{0}],{1}.(in {2}.{3})',
            objDataColumn.fldName,
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
      }
    }
  }

  /**
   * 是否显示与当前子工程相关的表
   **/
  public get showMap4NoCache_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkShowMap4NoCache_q');
    const strId = 'chkShowMap4NoCache_q';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /**
   * 是否显示与当前子工程相关的表
   **/
  public set showMap4NoCache_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkShowMap4NoCache_q', value);
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineDnFuncMapConditionObj(): Promise<clsDnFuncMapEN> {
    const vDataNode_SimStore = usevDataNode_SimStore();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objDnFuncMap_Cond = new clsDnFuncMapEN();
    objDnFuncMap_Cond.SetCondFldValue(
      clsDnFuncMapEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
      '=',
    );

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.inTabId_q != '') {
        strWhereCond += Format(
          " and InDataNodeId in (select DataNodeId from DataNode where TabId = '{0}')",
          this.inTabId_q,
        );
        const arrInDataNodeId = await vDataNode_SimStore.getDataNodeIdLstByTabId(this.inTabId_q);

        objDnFuncMap_Cond.SetCondFldValue(
          clsDnFuncMapEN.con_InDataNodeId,
          arrInDataNodeId.join(','),
          'in',
        );
      }

      if (inDataNodeId_q.value != 0) {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_InDataNodeId,
          inDataNodeId_q.value,
        );
        objDnFuncMap_Cond.SetCondFldValue(
          clsDnFuncMapEN.con_InDataNodeId,
          inDataNodeId_q.value,
          '=',
        );
      }
      if (outDataNodeId_q.value != 0) {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_OutDataNodeId,
          outDataNodeId_q.value,
        );
        objDnFuncMap_Cond.SetCondFldValue(
          clsDnFuncMapEN.con_OutDataNodeId,
          outDataNodeId_q.value,
          '=',
        );
      }
      if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_AssociationMappingId,
          associationMappingId_q.value,
        );
        objDnFuncMap_Cond.SetCondFldValue(
          clsDnFuncMapEN.con_AssociationMappingId,
          associationMappingId_q.value,
          '=',
        );
      }
      if (funcMapModeId_q.value != '' && funcMapModeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_FuncMapModeId,
          funcMapModeId_q.value,
        );
        objDnFuncMap_Cond.SetCondFldValue(
          clsDnFuncMapEN.con_FuncMapModeId,
          funcMapModeId_q.value,
          '=',
        );
      }
      if (tabId_q.value != '' && tabId_q.value != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsDnFuncMapEN.con_TabId, tabId_q.value);
        objDnFuncMap_Cond.SetCondFldValue(clsDnFuncMapEN.con_TabId, tabId_q.value, '=');
      }
      if (this.showMap4NoCache_q == true) {
        strWhereCond += Format(
          " And {0} in ('{1}'",
          clsDnFuncMapEN.con_TabId,
          DnFuncMapCRUDEx.arrTabId_NoCache,
        );
        objDnFuncMap_Cond.SetCondFldValue(
          clsDnFuncMapEN.con_TabId,
          DnFuncMapCRUDEx.arrTabId_NoCache.join(','),
          'in',
        );
      }
      if (dnFunctionId_q.value != '' && dnFunctionId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_DnFunctionId,
          dnFunctionId_q.value,
        );
        objDnFuncMap_Cond.SetCondFldValue(
          clsDnFuncMapEN.con_DnFunctionId,
          dnFunctionId_q.value,
          '=',
        );
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 1) {
        strWhereCond += Format(" And {0} <> ''", clsDnFuncMapEN.con_ErrMsg);
        objDnFuncMap_Cond.SetCondFldValue(clsDnFuncMapEN.con_ErrMsg, '0', 'length greater');
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 2) {
        strWhereCond += Format(" And {0} = ''", clsDnFuncMapEN.con_ErrMsg);
        objDnFuncMap_Cond.SetCondFldValue(clsDnFuncMapEN.con_ErrMsg, '0', 'length equal');
      }
    } catch (objException) {
      const strMsg = Format(
        '(errid:WiTsCs0010)在组合查询条件对象(CombineDnFuncMapConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objDnFuncMap_Cond.whereCond = strWhereCond;
    return objDnFuncMap_Cond;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    // const strThisFuncName = this.btnQuery_Click.name;
    if (this.showMap4NoCache_q == true) {
      this.SetCurrPageIndex(1);
      await this.BindGv_DnFuncMap4Func4NoCache(divVarSet.refDivList);
    } else {
      this.SetCurrPageIndex(1);

      await this.BindGv_DnFuncMap4Func(divVarSet.refDivList);
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineDnFuncMapCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    strWhereCond += Format(" and prjId ='{0}'", clsPrivateSessionStorage.currSelPrjId);
    // strWhereCond += Format(
    //   " and DnFuncMapId in (Select DnFuncMapId From DnFuncMapCmPrjIdRela Where CmPrjId ='{0}')",
    //   clsPrivateSessionStorage.cmPrjId,
    // );

    try {
      if (this.inTabId_q != '') {
        //const arrInDataNodeId = await vDataNode_SimEx_GetDataNodeIdByTabIdCache(clsPrivateSessionStorage.cmPrjId, this.inTabId_q);
        strWhereCond += Format(
          " and InDataNodeId in (select DataNodeId from DataNode where TabId = '{0}')",
          this.inTabId_q,
        );
      }
      if (inDataNodeId_q.value != 0) {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_InDataNodeId,
          inDataNodeId_q.value,
        );
      }
      if (outDataNodeId_q.value != 0) {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_OutDataNodeId,
          outDataNodeId_q.value,
        );
      }
      if (funcMapModeId_q.value != '' && funcMapModeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_AssociationMappingId,
          funcMapModeId_q.value,
        );
      }
      if (funcMapModeId_q.value != '' && funcMapModeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_FuncMapModeId,
          funcMapModeId_q.value,
        );
      }
      if (tabId_q.value != '' && tabId_q.value != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsDnFuncMapEN.con_TabId, tabId_q.value);
      }
      //if (this.showMap4NoCache_q == true && DnFuncMapCRUDEx.arrTabId_NoCache.length>0) {

      //    strWhereCond += Format(" And {0} in ({1})", clsDnFuncMapEN.con_TabId, clsArray.GetSqlInStrByArray(DnFuncMapCRUDEx.arrTabId_NoCache, true));
      //}
      if (dnFunctionId_q.value != '' && dnFunctionId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnFuncMapEN.con_DnFunctionId,
          dnFunctionId_q.value,
        );
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 1) {
        strWhereCond += Format(" And {0} <> ''", clsDnFuncMapEN.con_ErrMsg);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 2) {
        strWhereCond += Format(" And {0} = ''", clsDnFuncMapEN.con_ErrMsg);
      }
    } catch (objException) {
      const strMsg = Format(
        '(errid:WiTsCs0009)在组合查询条件(CombineDnFuncMapCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_DnFuncMap4Func4NoCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_DnFuncMap4Func.name;
    if (viewVarSet.sortDnFuncMapBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortDnFuncMapBy)为空，请检查！(In BindGv_DnFuncMapCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineDnFuncMapCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrDnFuncMapObjLst: Array<clsDnFuncMapEN> = [];
    const arrDnFuncMapExObjLst: Array<clsDnFuncMapENEx> = [];
    try {
      this.recCount = await DnFuncMapEx_GetRecCountByCondNoCacheAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: clsDnFuncMapEN.con_DnFuncMapId,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrDnFuncMapObjLst = await DnFuncMapEx_GetObjLstByPagerNoCacheAsync(objPagerPara);
      for (const objInFor of arrDnFuncMapObjLst) {
        const objEx = new clsDnFuncMapENEx();
        ObjectAssign(objEx, objInFor);

        arrDnFuncMapExObjLst.push(objEx);
      }
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrDnFuncMapObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsDnFuncMapEN._CurrTabName,
        clsPrivateSessionStorage.cmPrjId,
      );
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_DnFuncMap4Func(divList, arrDnFuncMapExObjLst);
      //console.log("完成BindGv_DnFuncMap4Func!");
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_DnFuncMap4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_DnFuncMap4Func.name;
    if (viewVarSet.sortDnFuncMapBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortDnFuncMapBy)为空，请检查！(In BindGv_DnFuncMapCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineDnFuncMapCondition();
    // objDnFuncMap_Cond.SetCondFldValue(
    //   clsDnFuncMapEN.con_PrjId,
    //   clsPrivateSessionStorage.currSelPrjId,
    //   '=',
    // );

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrDnFuncMapExObjLst: Array<clsDnFuncMapENEx> = [];
    try {
      this.recCount = await DnFuncMap_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortDnFuncMapBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrDnFuncMapExObjLst = await DnFuncMapEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrDnFuncMapExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsDnFuncMapEN._CurrTabName,
        clsPrivateSessionStorage.cmPrjId,
      );
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_DnFuncMap4Func(divList, arrDnFuncMapExObjLst);
      await this.ShowErrMsg(divList, arrDnFuncMapExObjLst);
      //console.log("完成BindGv_DnFuncMap4Func!");
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public ShowErrMsg(divContainer: HTMLDivElement, arrDnFuncMapEx: Array<clsDnFuncMapENEx>) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>(
      clsPubFun4Visible.GetArray(objLst)
    );
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objDnFuncMap = arrDnFuncMapEx.find((x) => x.dnFuncMapId.toString() == strId);
      if (objDnFuncMap != null) {
        if (objDnFuncMap.errMsg != null && objDnFuncMap.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objDnFuncMap.errMsg;
        } else if (IsNullOrEmpty(objDnFuncMap.trClass) == false) {
          x.className = objDnFuncMap.trClass;
        }
      }
    });
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrDnFuncMapId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    try {
      const returnInt = await DnFuncMapEx_DelDnFuncMapsExAsync(arrDnFuncMapId);
      if (returnInt > 0) {
        vDnFuncMap_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
        vDataNode_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        DnPathFuncMapRela_ReFreshCache();
        const strInfo = Format('删除记录成功,共删除{0}条记录!', returnInt);
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('删除记录不成功!');
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
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
  /**
   * 主表ID (Used In CombineCondition())
   **/
  public get inTabId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlInTabId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 主表ID (Used In CombineCondition())
   **/
  public set inTabId_q(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivQuery, 'ddlInTabId_q', value);
  }

  /**
   * 设置绑定下拉框，针对字段:[OutDataNodeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
   **/

  public async SetDdl_OutDataNodeId_SetInDiv(CmPrjId: string) {
    await vDataNode_SimEx_BindDdl_DataNodeIdByCmPrjIdInDivCache(
      divVarSet.refDivFunction,
      'ddlOutDataNodeId_Set',
      CmPrjId,
    ); //
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnSetOutDataNode_Click() {
    const strThisFuncName = this.btnSetOutDataNode_Click.name;
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (this.outDataNodeId_Set == 0) {
        alert('请选择所要设置的Out结点！');
        const ddlOutDataNodeId_Set = GetSelectObjInDivObj(
          divVarSet.refDivFunction,
          'ddlOutDataNodeId_Set',
        );
        if (ddlOutDataNodeId_Set != null) {
          ddlOutDataNodeId_Set.focus();
        }
        return '';
      }
      for (const strDnFuncMapId of arrKeyIds) {
        const objDnFuncMap = await DnFuncMap_GetObjByDnFuncMapIdAsync(strDnFuncMapId);
        if (objDnFuncMap == null) continue;
        objDnFuncMap.SetDnFuncMapId(objDnFuncMap.dnFuncMapId);
        objDnFuncMap.SetOutDataNodeId(this.outDataNodeId_Set);
        objDnFuncMap.sfUpdFldSetStr = objDnFuncMap.updFldString; //设置哪些字段被修改(脏字段)
        await DnFuncMap_UpdateRecordAsync(objDnFuncMap);
        vDnFuncMap_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      }
      const strMsg = Format(
        '设置Out结点成功. (in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      alert(strMsg);
      await this.BindGv_DnFuncMap4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置Out结点不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /**
   * Out数据结点Id (Used In CombineCondition())
   **/
  public get outDataNodeId_Set(): number {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivLayout, 'ddlOutDataNodeId_Set');
    if (strValue == undefined) return 0;
    else if (strValue == '0') return 0;
    else return Number(strValue);
  }

  public async btnCheckDnFuncMapByCmPrjId_Click() {
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    try {
      const intCount = await DnFuncMapEx_CheckDnFuncMapByPrjId(strPrjId, clsPubLocalStorage.userId);

      vDnFuncMap_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      vDataNode_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      alert(`共检查了${intCount}个结点错误！`);
    } catch (e: any) {
      vDnFuncMap_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      vDataNode_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `检查结点不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'inDataNodeName|Ex':
        viewVarSet.sortDnFuncMapBy = `vDataNode_Sim|InDataNodeName ${sortDirection}|DnFuncMap.InDataNodeId = vDataNode_Sim.DataNodeId`;
        break;
      case 'outDataNodeName|Ex':
        viewVarSet.sortDnFuncMapBy = `vDataNode_Sim|OutDataNodeName ${sortDirection}|DnFuncMap.OutDataNodeId = vDataNode_Sim.DataNodeId`;
        break;
      case 'associationMappingName|Ex':
        viewVarSet.sortDnFuncMapBy = `AssociationMapping|AssociationMappingName ${sortDirection}|DnFuncMap.AssociationMappingId = AssociationMapping.AssociationMappingId`;
        break;
      case 'funcMapModeName|Ex':
        viewVarSet.sortDnFuncMapBy = `FuncMapMode|FuncMapModeName ${sortDirection}|DnFuncMap.FuncMapModeId = FuncMapMode.FuncMapModeId`;
        break;
      case 'dnFunctionName|Ex':
        viewVarSet.sortDnFuncMapBy = `DnFunction|DnFunctionName ${sortDirection}|DnFuncMap.DnFunctionId = DnFunction.DnFunctionId`;
        break;
      default:
        viewVarSet.sortDnFuncMapBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_DnFuncMap4Func(this.thisDivList);
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strDataNodeId:所给的关键字
 * @returns 对象
 */
// export async function vDataNode_SimEx_GetObjByDataNodeIdCach1e(
//   strDataNodeId: number,
//   strCmPrjId: string,
//   bolTryAsyncOnce = true,
// ) {
//   const strThisFuncName = 'GetObjByDataNodeIdCache';

//   if (IsNullOrEmpty(strDataNodeId) == true) {
//     const strMsg = Format('参数:[strDataNodeId]不能为空！(In GetObjByDataNodeIdCache)');
//     console.error(strMsg);
//     throw strMsg;
//   }
//   if (strDataNodeId.length != 8) {
//     const strMsg = Format('缓存分类变量:[strDataNodeId]的长度:[{0}]不正确！', strDataNodeId.length);
//     console.error(strMsg);
//     throw strMsg;
//   }
//   const arrvDataNode_SimObjLstCache = await vDataNode_Sim_GetObjLstCache(strCmPrjId);
//   try {
//     const arrvDataNode_SimSel: Array<clsvDataNode_SimEN> = arrvDataNode_SimObjLstCache.filter(
//       (x) => x.dataNodeId == strDataNodeId,
//     );
//     let objvDataNode_Sim: clsvDataNode_SimEN;
//     if (arrvDataNode_SimSel.length > 0) {
//       objvDataNode_Sim = arrvDataNode_SimSel[0];
//       return objvDataNode_Sim;
//     } else {
//       if (bolTryAsyncOnce == true) {
//         const objvDataNode_SimConst = await vDataNode_Sim_GetObjByDataNodeIdAsync(strDataNodeId);
//         if (objvDataNode_SimConst != null) {
//           vDataNode_Sim_ReFreshThisCache(strCmPrjId);
//           return objvDataNode_SimConst;
//         }
//       }
//       return null;
//     }
//   } catch (e) {
//     const strMsg = Format(
//       '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
//       e,
//       strDataNodeId,
//       vDataNode_SimEx_ConstructorName,
//       strThisFuncName,
//     );
//     console.error(strMsg);
//   }
//   return null;
// }
