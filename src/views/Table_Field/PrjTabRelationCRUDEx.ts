import { DnPath_SelEx } from '../AIModule/DnPath_SelEx';
import PrjTabRelation_EditEx from './PrjTabRelation_EditEx';
import { PrjTabRelationCRUD } from '@/viewsBase/Table_Field/PrjTabRelationCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPrjTabRelationENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationENEx';
import { clsPrjTabRelationEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationEN';
import { PrjTabRelationEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabRelationExWApi';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import {
  PrjTabRelation_AddNewRecordAsync,
  PrjTabRelation_GetMaxStrIdAsync,
  PrjTabRelation_GetObjByPrjRelationIdAsync,
  PrjTabRelation_GetObjByPrjRelationIdCache,
  PrjTabRelation_GetObjLstByPrjRelationIdLstAsync,
  PrjTabRelation_ReFreshCache,
  PrjTabRelation_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabRelationWApi';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { DnPathEx_CreateGraph4DnPathCache } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  PrjId_Session,
  qryVarSet,
  viewVarSet,
} from '@/views/Table_Field/PrjTabRelationVueShare';

//import $ from "jquery";
/** PrjTabRelationCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class PrjTabRelationCRUDEx extends PrjTabRelationCRUD implements IShowList {
  public static PrjRelationId4SetDnPath_Static = '';
  public static strTabId4Region = ''; //编辑区的界面Id
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortPrjTabRelationBy = "PrjRelationId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
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
    alert(`该类没有绑定该函数：[this.BindGv_PrjTabRelation]！${strType}${strPara}`);
    //this.BindGv_PrjTabRelation();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'PrjTabRelation':
        this.BindGv_PrjTabRelation4Func(divVarSet.refDivList);
        break;
      case DnPath_SelEx.con_SetFldDnPathInTab:
        alert(strPara);
        this.btnSubmitSetDnPath_Click(PrjTabRelationCRUDEx.PrjRelationId4SetDnPath_Static, strPara);
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
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btn_Click.name;

    const objPage: PrjTabRelationCRUDEx = new PrjTabRelationCRUDEx();
    const objPageEdit: PrjTabRelation_EditEx = new PrjTabRelation_EditEx(
      'PrjTabRelation_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    const objPage_Select: DnPath_SelEx = new DnPath_SelEx('DnPath_SelEx', objPage);

    const strMsg = '';
    let strKeyId_p = '';
    // let objPrjTabRelation_p;
    let objPrjTabRelation;
    switch (strCommandName) {
      case 'SetDnPath': //自定义功能:替换字段
        strKeyId_p = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId_p) == true) {
          const strMsg = `请选择一条需要设置结点路径的记录.`;

          alert(strMsg);
          return;
        }
        objPrjTabRelation = await PrjTabRelation_GetObjByPrjRelationIdAsync(strKeyId_p);

        if (objPrjTabRelation == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        PrjTabRelationCRUDEx.PrjRelationId4SetDnPath_Static = strKeyId_p;
        objPage_Select.btnSelectDnPath_Click(objPrjTabRelation.tabId);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
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
        AccessBtnClickDefault(strCommandName, 'PrjTabRelationCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrPrjTabRelationExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrPrjTabRelationExObjLst: Array<clsPrjTabRelationENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsPrjTabRelationEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrPrjTabRelationExObjLst) {
        objInFor.prjId = clsPrivateSessionStorage.currSelPrjId;
        await PrjTabRelationEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }
  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrPrjRelationId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrPrjTabRelationObjLst = await PrjTabRelation_GetObjLstByPrjRelationIdLstAsync(
        arrPrjRelationId,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrPrjTabRelationObjLst) {
        const strMaxStrId = await PrjTabRelation_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.prjRelationId = strMaxStrId;
        objInFor.prjTabRelaTypeId = '00';
        const returnBool = await PrjTabRelation_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          //PrjTabRelation_ReFreshCache();
          // const strInfo = Format('克隆记录成功!');
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
    } catch (e) {
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinePrjTabRelationCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      //if (this.prjRelationId_q != "") {
      //    strWhereCond += Format(" And {0} like '%{1}%'", clsPrjTabRelationEN.con_PrjRelationId, this.prjRelationId_q);
      //}
      if (qryVarSet.relationName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjTabRelationEN.con_RelationName,
          qryVarSet.relationName_q,
        );
      }
      if (qryVarSet.tabId_q != '' && qryVarSet.tabId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjTabRelationEN.con_TabId,
          qryVarSet.tabId_q,
        );
      }
      if (qryVarSet.prjTabRelaTypeId_q != '' && qryVarSet.prjTabRelaTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjTabRelationEN.con_PrjTabRelaTypeId,
          qryVarSet.prjTabRelaTypeId_q,
        );
      }
      if (qryVarSet.relationTabId_q != '' && qryVarSet.relationTabId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjTabRelationEN.con_RelationTabId,
          qryVarSet.relationTabId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(CombinePrjTabRelationCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // const strThisFuncName = this.BindDdl4QueryRegion.name;
    // 在此处放置用户代码以初始化页面
    // const strPrjId = clsPrivateSessionStorage.currSelPrjId;

    await this.SetDdl_TabIdInDivEx(clsPrivateSessionStorage.currSelPrjId); //查询区域

    // await this.SetDdl_PrjTabRelaTypeIdInDiv(); //查询区域

    await this.SetDdl_RelationTabIdInDivEx(clsPrivateSessionStorage.cmPrjId); //查询区域
  }

  /**
   * 设置绑定下拉框，针对字段:[TabId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdl_TabIdInDivEx(CmPrjId: string) {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
      divVarSet.refDivQuery,
      'ddlTabId_q',
      CmPrjId,
    ); //
  }

  public async SetDdl_RelationTabIdInDivEx(CmPrjId: string) {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
      divVarSet.refDivQuery,
      'ddlRelationTabId_q',
      CmPrjId,
    ); //
  }

  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnSubmitSetDnPath_Click(strPrjRelationId: string, strDnPathId: string) {
    const strThisFuncName = this.btnSubmitSetDnPath_Click.name;
    try {
      const objPrjTabRelation = await PrjTabRelation_GetObjByPrjRelationIdAsync(strPrjRelationId);
      if (objPrjTabRelation == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      //if (objPrjTabRelation.isForExtendClass == false) {
      //    return;
      //}
      // const strTabId = objPrjTabRelation.tabId;
      let bolResult = false;
      objPrjTabRelation.SetDnPathId(strDnPathId);
      objPrjTabRelation.SetPrjRelationId(strPrjRelationId);
      objPrjTabRelation.sfUpdFldSetStr = objPrjTabRelation.updFldString; //设置哪些字段被修改(脏字段)

      bolResult = await PrjTabRelation_UpdateRecordAsync(objPrjTabRelation);
      if (bolResult) {
        PrjTabRelation_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        this.BindGv_PrjTabRelation4Func(divVarSet.refDivList);
        alert('设置路径成功!');
      } else {
        alert('设置路径不成功!');
      }
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindTab_PrjTabRelation4Func(
    divContainer: HTMLDivElement,
    arrPrjTabRelationExObjLst: Array<clsPrjTabRelationENEx>,
  ) {
    const strThisFuncName = this.BindTab_PrjTabRelation4Func.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
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
        fldName: clsPrjTabRelationEN.con_PrjRelationId,
        sortBy: clsPrjTabRelationEN.con_PrjRelationId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '关系Id',
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
        fldName: clsPrjTabRelationEN.con_RelationName,
        sortBy: clsPrjTabRelationEN.con_RelationName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '关系名',
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
        fldName: clsPrjTabRelationENEx.con_TabName,
        sortBy: clsPrjTabRelationENEx.con_TabName,
        sortFun: SortFun,
        getDataSource: '',
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
        fldName: clsPrjTabRelationENEx.con_TabRelationTypeName,
        sortBy: clsPrjTabRelationENEx.con_TabRelationTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '关系类型',
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
        fldName: clsPrjTabRelationENEx.con_RelaTabName,
        sortBy: clsPrjTabRelationENEx.con_RelaTabName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '相关表名',
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
        fldName: clsPrjTabRelationEN.con_IsUpdMainTabDate,
        sortBy: clsPrjTabRelationEN.con_IsUpdMainTabDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改主表日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'LabelOrDiv',
        orderNum: 8,
        funcName: async (strKey: string, strText: string) => {
          const objPrjTabRelation = await PrjTabRelation_GetObjByPrjRelationIdCache(
            strKey,
            clsPrivateSessionStorage.currSelPrjId,
            false,
          );
          if (objPrjTabRelation == null) {
            const div1 = document.createElement('div');
            return div1;
          } else {
            if (IsNullOrEmpty(objPrjTabRelation.dnPathId) == true) {
              const div2 = document.createElement('div');

              //const objEx = new clsPrjTabRelationENEx();
              //ObjectAssign(objEx, objPrjTabRelation);

              //await PrjTabRelationEx_FuncMapByFldName(clsPrjTabRelationENEx.con_TabName, objEx);
              div2.innerHTML = strText;
              return div2;
            } else {
              const divPath = await DnPathEx_CreateGraph4DnPathCache(objPrjTabRelation.dnPathId);
              strKey = strText;
              return divPath;
            }
          }
        },
      },

      {
        fldName: clsPrjTabRelationEN.con_IsDelRelateRec,
        sortBy: clsPrjTabRelationEN.con_IsDelRelateRec,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '删除相关记录',
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
        fldName: clsPrjTabRelationEN.con_Memo,
        sortBy: clsPrjTabRelationEN.con_Memo,
        sortFun: SortFun,
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
      {
        fldName: clsPrjTabRelationEN.con_IsCheckCurrData,
        sortBy: clsPrjTabRelationEN.con_IsCheckCurrData,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '检查当前数据',
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
        fldName: clsPrjTabRelationEN.con_IsUpdRelateFld,
        sortBy: clsPrjTabRelationEN.con_IsUpdRelateFld,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改关系字段',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabRelationEN.con_IsCopyForceRela,
        sortBy: clsPrjTabRelationEN.con_IsCopyForceRela,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'IsCopyForceRela',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrPrjTabRelationExObjLst, arrDataColumn);
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
      arrPrjTabRelationExObjLst,
      arrDataColumn,
      clsPrjTabRelationEN.con_PrjRelationId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinePrjTabRelationConditionObj(): Promise<clsPrjTabRelationEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objPrjTabRelation_Cond = new clsPrjTabRelationEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.prjRelationId_q != "") {
      //    strWhereCond += Format(" And {0} like '%{1}%'", clsPrjTabRelationEN.con_PrjRelationId, this.prjRelationId_q);
      //    objPrjTabRelation_Cond.SetCondFldValue(clsPrjTabRelationEN.con_PrjRelationId, this.prjRelationId_q, "like");
      //}
      if (qryVarSet.relationName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjTabRelationEN.con_RelationName,
          qryVarSet.relationName_q,
        );
        objPrjTabRelation_Cond.SetCondFldValue(
          clsPrjTabRelationEN.con_RelationName,
          qryVarSet.relationName_q,
          'like',
        );
      }
      if (qryVarSet.tabId_q != '' && qryVarSet.tabId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjTabRelationEN.con_TabId,
          qryVarSet.tabId_q,
        );
        objPrjTabRelation_Cond.SetCondFldValue(
          clsPrjTabRelationEN.con_TabId,
          qryVarSet.tabId_q,
          '=',
        );
      }
      if (qryVarSet.prjTabRelaTypeId_q != '' && qryVarSet.prjTabRelaTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjTabRelationEN.con_PrjTabRelaTypeId,
          qryVarSet.prjTabRelaTypeId_q,
        );
        objPrjTabRelation_Cond.SetCondFldValue(
          clsPrjTabRelationEN.con_PrjTabRelaTypeId,
          qryVarSet.prjTabRelaTypeId_q,
          '=',
        );
      }
      if (qryVarSet.relationTabId_q != '' && qryVarSet.relationTabId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjTabRelationEN.con_RelationTabId,
          qryVarSet.relationTabId_q,
        );
        objPrjTabRelation_Cond.SetCondFldValue(
          clsPrjTabRelationEN.con_RelationTabId,
          qryVarSet.relationTabId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0010)在组合查询条件对象(CombinePrjTabRelationConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objPrjTabRelation_Cond.whereCond = strWhereCond;
    return objPrjTabRelation_Cond;
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      viewVarSet.sortPrjTabRelationBy = 'prjRelationId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_PrjTabRelation4Func(divVarSet.refDivList);
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
  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public SortColumn(sortColumnKey: string, sortDirection: string): void {
    console.log(sortColumnKey, sortDirection);
  }
}
