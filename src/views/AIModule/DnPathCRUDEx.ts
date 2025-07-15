// import $ from 'jquery';
import DnPath_DetailEx from './DnPath_DetailEx';
import DnPath_EditEx from './DnPath_EditEx';
import { DnPathCRUD } from '@/viewsBase/AIModule/DnPathCRUD';
import { clsPubFun4Visible } from '@/ts/FunClass/clsPubFun4Visible';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsDnPathEN } from '@/ts/L0Entity/AIModule/clsDnPathEN';
import { clsDnPathENEx } from '@/ts/L0Entity/AIModule/clsDnPathENEx';
import {
  DnPath_GetObjLstByPagerAsync,
  DnPath_GetRecCountByCondAsync,
  DnPath_SortFunDefa,
} from '@/ts/L3ForWApi/AIModule/clsDnPathWApi';

import { vDnPath_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDnPath_SimWApi';
import { DataNodeEx_GetConnectedNode } from '@/ts/L3ForWApiEx/AIModule/clsDataNodeExWApi';
import {
  DnPathEx_AutoCreatePath,
  DnPathEx_CalcDnPathEdgeNum,
  DnPathEx_CheckDnPath,
  DnPathEx_CheckDnPathDuplicate,
  DnPathEx_CreateGraph4DnPath1,
  DnPathEx_CreateGraph4InOutDataNode,
  DnPathEx_DelDnPath,
  DnPathEx_DelDnPathDuplicate,
  DnPathEx_GetObjExLst4NoNeedAsync,
  DnPathEx_GetObjExLstByPagerAsync,
  DnPathEx_SortFunForDuplicate,
} from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';

import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  CheckControlExistInDivObj,
  GetCheckBoxValueInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  GetSelectedIndexInDivObj,
  SetCheckBoxValueByIdInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindDdl_TrueAndFalseInDivObj,
  BindTab,
  confirm_del,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import {
  divVarSet,
  refDnPath_Detail,
  refDnPath_Edit,
  viewVarSet,
  qryVarSet,
  inDataNodeId_q,
  dnPathName_q,
  outDataNodeId_q,
  associationMappingId_q,
} from '@/views/AIModule/DnPathVueShare';

/** DnPathCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class DnPathCRUDEx extends DnPathCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortDnPathBy = "DnPathId";
  public static thisPage: DnPathCRUDEx;
  public static IsCheckDuplicate = false;
  public static CmPrjIdCache = '';
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 20;
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
    alert(`该类没有绑定该函数：[this.BindGv_DnPath]！${strType}${strPara}`);
    //this.BindGv_DnPath();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'DnPath':
        this.BindGv_DnPath4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: DnPathCRUDEx;
    if (DnPathCRUD.objPageCRUD == null) {
      DnPathCRUD.objPageCRUD = new DnPathCRUDEx();
      objPage = <DnPathCRUDEx>DnPathCRUD.objPageCRUD;
    } else {
      objPage = <DnPathCRUDEx>DnPathCRUD.objPageCRUD;
    }
    const objPageEdit = new DnPath_EditEx('DnPath_EditEx', objPage);
    console.log(objPageEdit);
    const objPage_Deatil: DnPath_DetailEx = new DnPath_DetailEx(DnPathCRUDEx.thisPage);
    console.log(objPage_Deatil);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refDnPath_Edit.value.btnDnPath_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refDnPath_Edit.value.btnDnPath_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refDnPath_Detail.value.btnDnPath_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refDnPath_Edit.value.btnDnPath_Edit_Click(strCommandName, strKeyId);
        break;

      case 'DelDnPath': //查询记录
        objPage.btnDelDnPath_Click();
        break;
      case 'DelDnPathDuplicate': //查询记录
        objPage.btnDelDnPathDuplicate_Click();
        break;
      case 'CalcDnPathEdgeNum': //查询记录
        objPage.btnCalcDnPathEdgeNum_Click();
        break;
      case 'CheckDnPathDuplicate': //查询记录
        objPage.btnCheckDnPathDuplicate_Click();
        break;
      case 'CheckDnPath': //查询记录
        objPage.btnCheckDnPath_Click();
        break;
      case 'QueryByInDataNode': //查询记录
        objPage.btnQueryByInDataNode_Click();
        break;

      case 'AutoCreatePath': //查询记录
        objPage.btnAutoCreatePath_Click();
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DnPathCRUDEx.btn_Click');

        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      DnPathCRUDEx.thisPage = this;
      DnPathCRUDEx.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      viewVarSet.sortDnPathBy = 'dnPathId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_DnPath4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // const strThisFuncName = this.BindDdl4QueryRegion.name;
    // 在此处放置用户代码以初始化页面
    const strCmPrjId = DnPathCRUDEx.CmPrjIdCache; //定义条件字段

    await this.SetDdl_InTabIdInDiv(strCmPrjId); //查询区域
    // await this.SetDdl_InDataNodeIdInDiv(); //查询区域
    // await this.SetDdl_OutDataNodeIdInDiv(); //查询区域
    // await this.SetDdl_AssociationMappingIdInDiv(); //查询区域
    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q');
    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlInUse_q');
  }
  public async btnAutoCreatePath_Click() {
    try {
      const intCount = await DnPathEx_AutoCreatePath(
        clsPrivateSessionStorage.cmPrjId,
        clsPubLocalStorage.userId,
      );
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      alert(`共生成${intCount}个路径！`);
    } catch (e: any) {
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `自动生成路径不成功. ${e}.`;

      alert(strMsg);
    }
  }

  /** 显示DnPath对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrDnPathObjLst:需要绑定的对象列表
   **/
  public async BindTab_DnPath4Func(
    divContainer: HTMLDivElement,
    arrDnPathExObjLst: Array<clsDnPathENEx>,
  ) {
    const strThisFuncName = this.BindTab_DnPath.name;
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
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsDnPathENEx.con_InDataNodeName,
        sortBy: clsDnPathENEx.con_InDataNodeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'IN数据结点',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsDnPathENEx.con_OutDataNodeName,
        sortBy: clsDnPathENEx.con_OutDataNodeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Out数据结点',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsDnPathENEx.con_OutFldName,
        sortBy: clsDnPathENEx.con_OutFldName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Out字段名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsDnPathENEx.con_RefNum,
        sortBy: clsDnPathENEx.con_RefNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '引用数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsDnPathENEx.con_EdgeNum,
        sortBy: clsDnPathENEx.con_EdgeNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '边数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'DN路径图',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: async (strKey: string, strText: string) => {
          const divPath = await DnPathEx_CreateGraph4DnPath1(strKey);
          strKey = strText;
          return divPath;
        },
      },
      {
        fldName: 'isHasErr',
        sortBy: 'isHasErr',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '是否有错',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },

      {
        fldName: 'inUse',
        sortBy: 'inUse',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '是否在用',
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
        fldName: 'updDate',
        sortBy: 'updDate',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'updUser',
        sortBy: 'updUser',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '修改者',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrDnPathExObjLst, arrDataColumn);
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
    await BindTab(divDataLst, arrDnPathExObjLst, arrDataColumn, 'dnPathId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 显示DnPath对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrDnPathObjLst:需要绑定的对象列表
   **/
  public async BindTab_DnPathByInDataNode(
    divContainer: HTMLDivElement,
    arrDnPathObjLst: Array<clsDnPathEN>,
  ) {
    // const strThisFuncName = this.BindTab_DnPath.name;
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
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'dnPathId',
        sortBy: 'dnPathId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'DN路径Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'dnPathName',
        sortBy: 'dnPathName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'DN路径名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'isExistPath',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '存在?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'DN路径Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: async (strKey: string, strText: string) => {
          if (strKey.indexOf('temp') == -1) {
            const divPath = await DnPathEx_CreateGraph4DnPath1(strKey);
            strKey = strText;
            return divPath;
          } else {
            const objDnPath = arrDnPathObjLst.find((x) => x.dnPathId == strKey);
            if (objDnPath != null) {
              const divPath = await DnPathEx_CreateGraph4InOutDataNode(
                strKey,
                objDnPath.inDataNodeId,
                objDnPath.outDataNodeId,
                clsPrivateSessionStorage.cmPrjId,
              );
              strKey = strText;
              return divPath;
            } else {
              const divPath = document.createElement('div');
              return divPath;
            }
          }
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
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'updUser',
        sortBy: 'updUser',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '修改者',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    await BindTab(divDataLst, arrDnPathObjLst, arrDataColumn, 'dnPathId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQueryByInDataNode_Click() {
    // const strThisFuncName = this.btnQuery_Click.name;
    this.SetCurrPageIndex(1);
    await this.BindGv_DnPathByInDataNode(divVarSet.refDivList);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
   **/
  public async BindGv_DnPathByInDataNode(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_DnPathByInDataNode.name;
    const vDataNode_SimStore = usevDataNode_SimStore();
    if (viewVarSet.sortDnPathBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortDnPathBy)为空，请检查！(In BindGv_DnPathByInDataNodeCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (inDataNodeId_q.value == 0) {
      const strMsg = Format(
        '在查询并建立路径过程中，In数据结点为空，请检查！(In BindGv_DnPathByInDataNodeCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await this.CombineDnPathCondition();
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrDnPathObjLst: Array<clsDnPathEN> = [];

    try {
      this.recCount = await DnPath_GetRecCountByCondAsync(strWhereCond);
      //if (this.recCount == 0) {
      //    const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement("span");
      //    lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0！", objDnPath_Cond.whereCond);
      //    const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById("divDataLst");
      //    if (divDataLst != null) {
      //        divDataLst.innerText = "";
      //        divDataLst.appendChild(lblMsg);
      //    }
      //    const strMsg = Format("在绑定GvCache过程中，根据条件:[{0}]获取的对象列表数为0！", objDnPath_Cond.whereCond);
      //    console.error("Error: ", strMsg);
      //    //console.trace();
      //    alert(strMsg);
      //    return;
      //}
      if (this.recCount > 0) {
        const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
        if (intCurrPageIndex == 0) {
          if (intPageCount > 1) intCurrPageIndex = intPageCount;
          else intCurrPageIndex = 1;
          this.SetCurrPageIndex(intCurrPageIndex);
        } else if (intCurrPageIndex > intPageCount) {
          intCurrPageIndex = intPageCount;
          this.SetCurrPageIndex(intCurrPageIndex);
        }
        const objPagerPara: stuPagerPara = {
          pageIndex: intCurrPageIndex,
          pageSize: this.pageSize,
          whereCond: strWhereCond,
          orderBy: viewVarSet.sortDnPathBy, //如果该字段为空，就使用下面的排序函数
          sortFun: DnPath_SortFunDefa,
        };
        arrDnPathObjLst = await DnPath_GetObjLstByPagerAsync(objPagerPara);
      } else {
        arrDnPathObjLst = new Array<clsDnPathEN>();
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
    const divPager: HTMLDivElement = <HTMLDivElement>document.getElementById('divPager');
    if (this.recCount <= this.pageSize) {
      if (divPager != null) {
        divPager.style.display = 'none';
      }
    } else {
      if (divPager != null) {
        divPager.style.display = 'block';
      }
    }

    try {
      for (const objDnPath of arrDnPathObjLst) {
        objDnPath.isExistPath = true;
      }
      const arrConnectedNode = await DataNodeEx_GetConnectedNode(
        qryVarSet.inDataNodeId_q,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const objInDataNode = await vDataNode_SimStore.getObj(inDataNodeId_q.value);
      if (objInDataNode != null) {
        let intIndex = 1;
        for (const objOutDataNode of arrConnectedNode) {
          if (
            arrDnPathObjLst.filter((x) => x.outDataNodeId == objOutDataNode.dataNodeId).length > 0
          )
            continue;
          if (objOutDataNode.dataNodeId == inDataNodeId_q.value) continue;
          const objDnPath = new clsDnPathEN();
          objDnPath.dnPathId = Format('temp{0}', intIndex++);
          objDnPath.inDataNodeId = inDataNodeId_q.value;
          objDnPath.outDataNodeId = objOutDataNode.dataNodeId;
          objDnPath.dnPathName = Format(
            '{0}-{1}',
            objInDataNode.dataNodeName,
            objOutDataNode.dataNodeName,
          );
          objDnPath.isExistPath = false;
          arrDnPathObjLst.push(objDnPath);
        }
      }
    } catch (e) {
      const strMsg = Format(
        '获取与In数据结点相关结点列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      await this.BindTab_DnPathByInDataNode(divList, arrDnPathObjLst);
      //console.log("完成BindGv_DnPathCache!");
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
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineDnPathCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and PrjId ='{0}'", clsPrivateSessionStorage.currSelPrjId);
    // strWhereCond += Format(
    //   " and DnPathId in (Select DnPathId From D1nPathCmPrjIdRela Where CmPrjId ='{0}')",
    //   clsPrivateSessionStorage.cmPrjId,
    // );
    try {
      // if (this.showCurrCmPrjId_q == true) {
      //   strWhereCond += Format(
      //     " And {4}.{0} in (select {1}.{0} from {1} where {1}.{2}='{3}')",
      //     clsD1nPathCmPrjIdRelaEN.con_DnPathId,
      //     clsD1nPathCmPrjIdRelaEN._CurrTabName,
      //     clsD1nPathCmPrjIdRelaEN.con_CmPrjId,
      //     clsPrivateSessionStorage.cmPrjId,
      //     clsDnPathEN._CurrTabName,
      //   );
      // }
      if (dnPathName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsDnPathEN.con_DnPathName,
          dnPathName_q.value,
        );
      }
      if (this.inTabId_q != '') {
        //const arrInDataNodeId = await vDataNode_SimEx_GetDataNodeIdByTabIdCache(clsPrivateSessionStorage.cmPrjId, this.inTabId_q);
        strWhereCond += Format(
          " and InDataNodeId in (select DataNodeid from DataNode where TabId = '{0}')",
          this.inTabId_q,
        );
      }
      if (inDataNodeId_q.value != 0) {
        strWhereCond += Format(
          ' And {0} = {1}',
          clsDnPathEN.con_InDataNodeId,
          inDataNodeId_q.value,
        );
      }
      if (outDataNodeId_q.value != 0) {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnPathEN.con_OutDataNodeId,
          outDataNodeId_q.value,
        );
      }
      if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDnPathEN.con_AssociationMappingId,
          associationMappingId_q.value,
        );
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_IsHasErr);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_IsHasErr);
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlInUse_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_InUse);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlInUse_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_InUse);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(CombineDnPathCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_DnPath4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_DnPath4Func.name;
    if (viewVarSet.sortDnPathBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(sortDnPathBy)为空，请检查！(In BindGv_DnPathCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineDnPathCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrDnPathExObjLst: Array<clsDnPathENEx> = [];
    let objPagerPara: stuPagerPara;
    try {
      const bolIsShowDuplicate = GetCheckBoxValueInDivObj(
        divVarSet.refDivQuery,
        'chkIsShowDuplicate',
      );
      if (bolIsShowDuplicate == true) DnPathCRUDEx.IsCheckDuplicate = true;
      else {
        DnPathCRUDEx.IsCheckDuplicate = false;
      }
      const bolIsShowNoNeedPath = GetCheckBoxValueInDivObj(
        divVarSet.refDivQuery,
        'chkIsShowNoNeedPath',
      );
      if (bolIsShowNoNeedPath == true) {
        objPagerPara = {
          pageIndex: intCurrPageIndex,
          pageSize: 100,
          whereCond: strWhereCond,
          orderBy: viewVarSet.sortDnPathBy,
          sortFun: (x, y) => {
            x = y;
            return 0;
          },
        };
        arrDnPathExObjLst = await DnPathEx_GetObjExLst4NoNeedAsync(
          objPagerPara,
          clsPrivateSessionStorage.currSelPrjId,
        );
        this.recCount = arrDnPathExObjLst.length;
      } else {
        this.recCount = await DnPath_GetRecCountByCondAsync(strWhereCond);
        objPagerPara = {
          pageIndex: intCurrPageIndex,
          pageSize: this.pageSize,
          whereCond: strWhereCond,
          orderBy: viewVarSet.sortDnPathBy,
          sortFun: (x, y) => {
            x = y;
            return 0;
          },
        };
        arrDnPathExObjLst = await DnPathEx_GetObjExLstByPagerAsync(objPagerPara);
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
    if (arrDnPathExObjLst.length == 0) {
      const strKey = Format('{0}', clsDnPathEN._CurrTabName);
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      //const bolIsShowNoNeedPath = GetCheckBoxValueInDivObj(DnPathCRUDEx.divQuery, "chkIsShowNoNeedPath");
      //if (bolIsShowNoNeedPath == true) {
      //    const arrDnPathExObjLstB = await DnPathEx_GetNoNeedDnPath(arrDnPathExObjLst, clsPrivateSessionStorage.currSelPrjId);
      //    this.recCount = arrDnPathExObjLstB.length;
      //    //this.pageSize = 20;
      //    await this.BindTab_DnPath4Func(divList, arrDnPathExObjLstB);
      //}
      //else {
      if (DnPathCRUDEx.IsCheckDuplicate == true) {
        arrDnPathExObjLst = arrDnPathExObjLst.sort(DnPathEx_SortFunForDuplicate);
      }
      await this.BindTab_DnPath4Func(divList, arrDnPathExObjLst);
      await this.ShowErrMsg(divList, arrDnPathExObjLst);
      //}
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
  public async btnCheckDnPath_Click() {
    const vDataNode_SimStore = usevDataNode_SimStore();
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要检查的记录！');
      return '';
    }
    try {
      DnPathCRUDEx.IsCheckDuplicate = false;
      let intCount = 0;
      for (const strDnPathId of arrKeyIds) {
        await DnPathEx_CheckDnPath(strDnPathId, clsPubLocalStorage.userId);
        intCount++;
      }
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      alert(`共检查了${intCount}个路径！`);
      await this.BindGv_DnPath4Func(divVarSet.refDivList);
    } catch (e: any) {
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `检查路径不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async btnCheckDnPathDuplicate_Click() {
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;

    try {
      DnPathCRUDEx.IsCheckDuplicate = true;
      SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkIsShowDuplicate', true);
      const intCount = await DnPathEx_CheckDnPathDuplicate(strPrjId, clsPubLocalStorage.userId);

      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      alert(`共发现重复：${intCount}个路径！`);
      await this.BindGv_DnPath4Func(divVarSet.refDivList);
      DnPathCRUDEx.IsCheckDuplicate = false;
    } catch (e: any) {
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `检查路径重复不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async btnCalcDnPathEdgeNum_Click() {
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    try {
      DnPathCRUDEx.IsCheckDuplicate = false;
      const intCount = await DnPathEx_CalcDnPathEdgeNum(strCmPrjId, clsPubLocalStorage.userId);
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      alert(`共计算边数：${intCount}个路径！`);
      await this.BindGv_DnPath4Func(divVarSet.refDivList);
    } catch (e: any) {
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `计算边数不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async btnDelDnPathDuplicate_Click() {
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    try {
      DnPathCRUDEx.IsCheckDuplicate = false;
      const intCount = await DnPathEx_DelDnPathDuplicate(strCmPrjId, clsPubLocalStorage.userId);
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      alert(`共删除重复路径：${intCount}个路径！`);
      await this.BindGv_DnPath4Func(divVarSet.refDivList);
    } catch (e: any) {
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `删除重复路径不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async btnDelDnPath_Click() {
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;

    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(arrKeyIds.length) == false) {
        return;
      }
      let intCount = 0;
      for (const strDnPathId of arrKeyIds) {
        const intResult = await DnPathEx_DelDnPath(
          strDnPathId,
          strPrjId,
          clsPubLocalStorage.userId,
        );
        intCount += intResult;
      }
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      alert(`共删除路径：${intCount}个路径！`);
      await this.BindGv_DnPath4Func(divVarSet.refDivList);
    } catch (e: any) {
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `删除路径不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public ShowErrMsg(divContainer: HTMLDivElement, arrDnPathEx: Array<clsDnPathENEx>) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>(
      clsPubFun4Visible.GetArray(objLst)
    );
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objDnPath = arrDnPathEx.find((x) => x.dnPathId.toString() == strId);
      if (objDnPath != null) {
        if (objDnPath.errMsg != null && objDnPath.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objDnPath.errMsg;
        } else if (IsNullOrEmpty(objDnPath.trClass) == false) {
          x.className = objDnPath.trClass;
        }
      }
    });
  }
  /**
   * 是否显示与当前子工程相关的表
   **/
  public get showCurrCmPrjId_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkShowCurrCmPrjId_q');
    const strId = 'chkShowCurrCmPrjId_q';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /**
   * 是否显示与当前子工程相关的表
   **/
  public set showCurrCmPrjId_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkShowCurrCmPrjId_q', value);
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'inDataNodeName|Ex':
        viewVarSet.sortDnPathBy = `vDataNode_Sim|InDataNodeName ${sortDirection}|DnPath.InDataNodeId = vDataNode_Sim.DataNodeId`;
        break;
      case 'outDataNodeName|Ex':
        viewVarSet.sortDnPathBy = `vDataNode_Sim|OutDataNodeName ${sortDirection}|DnPath.OutDataNodeId = vDataNode_Sim.DataNodeId`;
        break;
      default:
        viewVarSet.sortDnPathBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_DnPath4Func(this.thisDivList);
  }
}
