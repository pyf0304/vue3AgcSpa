// import $ from 'jquery';
import DataNode_EditEx from './DataNode_EditEx';
import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';
import { clsDataNodeENEx } from '@/ts/L0Entity/AIModule/clsDataNodeENEx';
import {
  DataNode_GetFirstObjAsync,
  DataNode_GetRecCountByCondAsync,
  DataNode_SortFunDefa,
} from '@/ts/L3ForWApi/AIModule/clsDataNodeWApi';

import { DnPathFuncMapRela_ReFreshCache } from '@/ts/L3ForWApi/AIModule/clsDnPathFuncMapRelaWApi';

import {
  DataNodeEx_BindDdl_ConnectedNodeV2,
  DataNodeEx_CheckDataNodeByCmPrjId,
  DataNodeEx_DelDataNodesExAsync,
  DataNodeEx_FuncMapByFldName,
  DataNodeEx_GetObjExLstByPagerAsync,
  DataNodeEx_ImportNode4KeyAndNameAsync,
  DataNodeEx_ImportSameSourceBy4KeyNodeAsync,
} from '@/ts/L3ForWApiEx/AIModule/clsDataNodeExWApi';

import { DataNodeCRUD } from '@/viewsBase/AIModule/DataNodeCRUD';
import { vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectedIndexInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_TrueAndFalseInDivObj, BindTab } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, GetSortBy, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCacheB } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { usevDnFuncMap_SimStore } from '@/store/modules/vDnFuncMap_Sim';
import {
  dataNodeId_q,
  dataNodeName_q,
  dataNodeTypeId_q,
  divVarSet,
  fldId_q,
  refDataNode_Edit,
  tabId_q,
  viewVarSet,
} from '@/views/AIModule/DataNodeVueShare';
import { vDnFuncMap_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';
import { vDataNode_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';

/** DataNodeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class DataNodeCRUDEx extends DataNodeCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortDataNodeBy=  "dataNodeId";
  //public static mfunSortFunBase: (x: any, y: any) => number;
  public static mfunSortFun: (ascOrDesc: string) => (x: any, y: any) => number;
  public static mstrSortDataNodeBy = '';
  /*
   * 每页记录数，在扩展类可以修改
   */
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
    console.log(strType, strPara);
    //alert('该类没有绑定该函数：[this.BindGv_DataNode]！');
    switch (strType) {
      case 'DataNode':
        this.BindGv_DataNode4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
    //this.BindGv_DataNode();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    const strMsg = '';
    switch (strType) {
      case 'DataNode':
        this.BindGv_DataNode4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
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
    let objPage: DataNodeCRUDEx;
    if (DataNodeCRUD.objPageCRUD == null) {
      DataNodeCRUD.objPageCRUD = new DataNodeCRUDEx();
      objPage = <DataNodeCRUDEx>DataNodeCRUD.objPageCRUD;
    } else {
      objPage = <DataNodeCRUDEx>DataNodeCRUD.objPageCRUD;
    }
    let objPageEdit = new DataNode_EditEx('DataNode_EditEx', objPage);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    console.log(strKeyId);
    let strMsg = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        break;
      case 'Detail': //详细信息
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit = new DataNode_EditEx('DataNode_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类

        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refDataNode_Edit.value.btnDataNode_Edit_Click(strCommandName, strKeyId);
        break;
        break;
      case 'CheckDataNodeByCmPrjId': //查询记录
        objPage.btnCheckDataNodeByCmPrjId_Click();
        break;
      case 'GetConnectedNode': //查询记录
        objPage.btnGetConnectedNode_Click();
        break;
      case 'ReFreshCache': //查询记录
        objPage.btnReFreshCache_Click();
        break;
      case 'ImportNode4KeyAndName': //查询记录
        objPage.btnImportNode4KeyAndName_Click();
        break;
      case 'ImportSameSourceBy4KeyNode': //查询记录
        objPage.btnImportSameSourceBy4KeyNode_Click();
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
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

      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DataNodeCRUDEx.btn_Click');

        break;
    }
  }

  public async btnImportNode4KeyAndName_Click() {
    try {
      await this.ImportNode4KeyAndName();
      await this.BindGv_DataNode4Func(divVarSet.refDivList);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `导入结点不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async btnGetConnectedNode_Click() {
    try {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
      if (IsNullOrEmpty(strKeyId) == true) {
        const strMsg = '请选择需要计算连接结点的结点！';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      DataNodeEx_BindDdl_ConnectedNodeV2(
        divVarSet.refDivFunction,
        'ddlConnectedNode',
        Number(strKeyId),
        clsPrivateSessionStorage.cmPrjId,
        true,
      );
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `获取连接结点不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async btnReFreshCache_Click() {
    const vDataNode_SimStore = usevDataNode_SimStore();
    try {
      const obj1 = await DataNode_GetFirstObjAsync('1=1');
      console.error('obj1:', obj1);
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `刷新缓存不成功. ${e}.`;
      alert(strMsg);
    }
  }
  public async btnImportSameSourceBy4KeyNode_Click() {
    try {
      await this.ImportSameSourceBy4KeyNode();
      await this.BindGv_DataNode4Func(divVarSet.refDivList);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `导入结点不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /** 根据关键字列表删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
*/
  public async ImportNode4KeyAndName() {
    const vDataNode_SimStore = usevDataNode_SimStore();
    try {
      const returnInt = await DataNodeEx_ImportNode4KeyAndNameAsync(
        clsPrivateSessionStorage.currSelPrjId,
      );

      if (returnInt > 0) {
        vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
        const strInfo = `导入关键结点与名称结点成功,共导入${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `导入结点不成功!`;
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `导入结点不成功. ${e}.`;
      alert(strMsg);
    }
  }
  public async ImportSameSourceBy4KeyNode() {
    const vDataNode_SimStore = usevDataNode_SimStore();
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    try {
      const returnInt = await DataNodeEx_ImportSameSourceBy4KeyNodeAsync(
        clsPrivateSessionStorage.currSelPrjId,
      );

      if (returnInt > 0) {
        vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
        vDnFuncMap_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
        vDataNode_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        const strInfo = `导入关键字同源结点成功,共导入${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `导入关键字同源结点不成功!`;
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `导入关键字同源结点不成功. ${e}.`;
      alert(strMsg);
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
      //clsPubSessionStorage.UserLoginInfo.cmPrjId = strCmPrjId;
      console.log('strCmPrjId(In PageLoadCache):', strCmPrjId);
      //DataNodeCRUD.PrjId_Static = clsPrivateSessionStorage.currSelPrjId;
      //DataNodeCRUD.CmPrjIdCache = strCmPrjId;

      //DataNode_Edit.CmPrjIdCache = strCmPrjId;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      viewVarSet.sortDataNodeBy = 'updDate Desc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_DataNode4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
    const strTabId = '';

    await this.SetDdl_TabIdInDivEx(strPrjId, clsPrivateSessionStorage.cmPrjId); //查询区域
    await this.SetDdl_FldIdInDiv(strTabId); //查询区域
    // await this.SetDdl_DataNodeTypeIdInDiv(); //查询区域
    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q');
  }
  /**
   * 设置绑定下拉框，针对字段:[fldId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
   **/

  public async SetDdl_FldIdInDiv(tabId: string) {
    if (IsNullOrEmpty(tabId) == false) {
      await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
        divVarSet.refDivQuery,
        'ddlFldId_q',
        tabId,
      ); //
    }
  }
  public async SetDdl_TabIdInDivEx(strPrjId: string, strCmPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCacheB(
      divVarSet.refDivQuery,
      'ddlTabId_q',
      strPrjId,
      strCmPrjId,
    ); //编辑区域
  }

  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass14_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlTabId_SelectedIndexChanged() {
    if (IsNullOrEmpty(tabId_q.value) == false) {
      await this.SetDdl_FldIdInDiv(tabId_q.value); //查询区域
    }
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrDataNodeId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    const vDataNode_SimStore = usevDataNode_SimStore();
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    try {
      const returnInt = await DataNodeEx_DelDataNodesExAsync(arrDataNodeId);
      if (returnInt > 0) {
        vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);

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

  /** 显示DataNode对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrDataNodeExObjLst:需要绑定的对象列表
   **/
  public async BindTab_DataNode4Func(
    divContainer: HTMLDivElement,
    arrDataNodeExObjLst: Array<clsDataNodeENEx>,
  ) {
    const strThisFuncName = this.BindTab_DataNode4Func.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        text: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'dataNodeId',
        sortBy: 'dataNodeId',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '数据结点Id',
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
        fldName: 'dataNodeName',
        sortBy: 'dataNodeName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '数据结点名',
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
        fldName: 'tabName',
        sortBy: 'tabName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'fldName',
        sortBy: 'fldName',
        sortFun: DataNode_SortFunDefa,
        getDataSource: '',
        colHeader: '字段名',
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
        fldName: 'dataNodeTypeName',
        sortBy: 'dataNodeTypeName',
        sortFun: DataNode_SortFunDefa,
        getDataSource: '',
        colHeader: '结点类型',
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
        fldName: 'inDegree',
        sortBy: 'inDegree',
        sortFun: DataNode_SortFunDefa, // DataNodeEx_SortFunByInOutDegreeV2,
        getDataSource: '',
        colHeader: '入度',
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
        fldName: 'outDegree',
        sortBy: 'outDegree',
        sortFun: DataNode_SortFunDefa, // DataNodeEx_SortFunByInOutDegreeV2,
        getDataSource: '',
        colHeader: '出度',
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
        fldName: 'errMsg',
        sortBy: 'errMsg',
        sortFun: clsPubVar4Web.SortFun,
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
        fldName: 'updUser',
        sortBy: 'updUser',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '修改者',
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
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'memo',
        sortBy: 'memo',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrDataNodeExObjLst, arrDataColumn);
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
    await BindTab(
      divDataLst,
      arrDataNodeExObjLst,
      arrDataColumn,
      clsDataNodeEN.con_DataNodeId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public async ExtendFldFuncMap(
    arrDataNodeExObjLst: Array<clsDataNodeENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsDataNodeEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrDataNodeExObjLst) {
        try {
          await DataNodeEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    // const strThisFuncName = this.SortBy.name;
    // console.log('1objAnchorElement(In SetAllCkechedKeysV2):', objAnchorElement);
    let strSortExpress = '';
    if (typeof objAnchorElement != 'function') {
      //event = window.event || event;
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      viewVarSet.ascOrDesc4SortFun,
      viewVarSet.sortDataNodeBy,
      strSortExpress,
    );
    viewVarSet.sortDataNodeBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    DataNodeCRUD.sortFunStatic = sortFun;
    await this.BindGv_DataNode4Func(divVarSet.refDivList);
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_DataNode4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_DataNode4Func.name;
    if (viewVarSet.sortDataNodeBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortDataNodeBy)为空，请检查！(In BindGv_DataNodeCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineDataNodeCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrDataNodeExObjLst: Array<clsDataNodeENEx> = [];
    try {
      this.recCount = await DataNode_GetRecCountByCondAsync(strWhereCond);
      let strSortFun = (x: any, y: any) => {
        x = y;
        return 0;
      };
      if (DataNodeCRUDEx.mfunSortFun != undefined) {
        strSortFun = DataNodeCRUDEx.mfunSortFun(DataNodeCRUDEx.mstrSortDataNodeBy);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortDataNodeBy,
        sortFun: strSortFun,
      };
      arrDataNodeExObjLst = await DataNodeEx_GetObjExLstByPagerAsync(objPagerPara);
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
    if (arrDataNodeExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsDataNodeEN._CurrTabName,
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
      await this.BindTab_DataNode4Func(divList, arrDataNodeExObjLst);
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

  public async btnCheckDataNodeByCmPrjId_Click() {
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    const vDataNode_SimStore = usevDataNode_SimStore();
    try {
      const intCount = await DataNodeEx_CheckDataNodeByCmPrjId(
        strCmPrjId,
        clsPubLocalStorage.userId,
      );

      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      alert(`共检查了${intCount}个结点错误！`);
    } catch (e: any) {
      vDataNode_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `检查结点不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineDataNodeCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and PrjId ='{0}'", clsPrivateSessionStorage.currSelPrjId);
    // strWhereCond += Format(
    //   " and DataNodeId in (Select DataNodeId From D1ataNodeCmPrjIdRela Where CmPrjId ='{0}')",
    //   clsPrivateSessionStorage.cmPrjId,
    // );
    try {
      if (dataNodeId_q.value != 0) {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsDataNodeEN.con_DataNodeId,
          dataNodeId_q.value,
        );
      }
      if (dataNodeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsDataNodeEN.con_DataNodeName,
          dataNodeName_q.value,
        );
      }
      if (tabId_q.value != '' && tabId_q.value != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsDataNodeEN.con_TabId, tabId_q.value);
      }
      if (fldId_q.value != '' && fldId_q.value != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsDataNodeEN.con_FldId, fldId_q.value);
      }
      if (dataNodeTypeId_q.value != '' && dataNodeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDataNodeEN.con_DataNodeTypeId,
          dataNodeTypeId_q.value,
        );
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 1) {
        strWhereCond += Format(" And {0} <> ''", clsDataNodeEN.con_ErrMsg);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 2) {
        strWhereCond += Format(" And {0} = ''", clsDataNodeEN.con_ErrMsg);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(CombineDataNodeCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'fldName|Ex':
        viewVarSet.sortDataNodeBy = `vFieldTab_Sim|FldName ${sortDirection}|DataNode.FldId = vFieldTab_Sim.FldId`;
        break;
      case 'dataNodeTypeName|Ex':
        viewVarSet.sortDataNodeBy = `DataNodeType|DataNodeTypeName ${sortDirection}|DataNode.DataNodeTypeId = DataNodeType.DataNodeTypeId`;
        break;
      default:
        viewVarSet.sortDataNodeBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_DataNode4Func(this.thisDivList);
  }
}
