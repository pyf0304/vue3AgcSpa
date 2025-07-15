import PrjConstraint_EditEx from './PrjConstraint_EditEx';
import { clsPrjConstraintEN } from '@/ts/L0Entity/Table_Field/clsPrjConstraintEN';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectSelectedIndexInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindDdl_TrueAndFalseInDivObj,
  BindTab,
  SortFun,
  confirm_del,
} from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { PrjConstraintCRUD } from '@/viewsBase/Table_Field/PrjConstraintCRUD';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  PrjConstraintEx_CheckConstraintFld,
  PrjConstraintEx_GetNormalConstraintName,
  PrjConstraintEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjConstraintExWApi';
import {
  PrjConstraint_GetRecCountByCondAsync,
  PrjConstraint_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjConstraintWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPrjConstraintENEx } from '@/ts/L0Entity/Table_Field/clsPrjConstraintENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import {
  divVarSet,
  refPrjConstraint_Edit,
  viewVarSet,
  qryVarSet,
  BindTabByList,
} from '@/views/Table_Field/PrjConstraintVueShare';
import { vPrjConstraint_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjConstraint_SimWApi';
import { CombinePrjConstraintConditionEx } from '@/views/Table_Field/PrjConstraintExVueShare';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { PrjId_Session } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';

/** PrjConstraintCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjConstraintCRUDEx extends PrjConstraintCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public static GetPropValue: (strPropName: string) => string;
  // public static TabIdStatic = '';
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortPrjConstraintBy=  "prjConstraintId";
  public Op = '';
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
    console.log('InitVarSet in PrjConstraintCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in PrjConstraintCRUDEx');
    viewVarSet.sortPrjConstraintBy = `${clsPrjConstraintEN.con_UpdDate} Desc`;
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_PrjConstraint4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'PrjConstraint':
        // alert('该类没有绑定该函数：[this.BindGv_PrjConstraint4Func]！');
        this.BindGv_PrjConstraint4Func(divVarSet.refDivList);
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
    let objPage: PrjConstraintCRUDEx;
    if (PrjConstraintCRUD.objPageCRUD == null) {
      PrjConstraintCRUD.objPageCRUD = new PrjConstraintCRUDEx();
      objPage = <PrjConstraintCRUDEx>PrjConstraintCRUD.objPageCRUD;
    } else {
      objPage = <PrjConstraintCRUDEx>PrjConstraintCRUD.objPageCRUD;
    }
    let objPageEdit;
    const strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'CheckConstraintFld':
        objPage.btnCheckConstraintFld_Click();
        break;
      case 'SetNormalConstraintName':
        objPage.btnSetNormalConstraintName_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit = new PrjConstraint_EditEx('PrjConstraint_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类

        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPageEdit = new PrjConstraint_EditEx('PrjConstraint_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refPrjConstraint_Edit.value.tabId = objPage.tabId;
        refPrjConstraint_Edit.value.btnPrjConstraint_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new PrjConstraint_EditEx('PrjConstraint_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refPrjConstraint_Edit.value.tabId = objPage.tabId;
        refPrjConstraint_Edit.value.btnPrjConstraint_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit = new PrjConstraint_EditEx('PrjConstraint_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refPrjConstraint_Edit.value.btnPrjConstraint_Edit_Click(strCommandName, strKeyId);
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
        if (confirm_del(arrKeyIds.length) == false) {
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
        AccessBtnClickDefault(strCommandName, 'PrjConstraintCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // await this.SetDdl_ConstraintTypeIdInDiv(); //查询区域
    await BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlInUse_q');
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // const strOp = this.GetOp;
      //console.error("strOp", strOp);
      //await Main_PrjTab.ShowCurrItem("TabEditV2", "");

      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      // viewVarSet.sortPrjConstraintBy = Format(
      //   '{0} Asc',
      //   clsPrjConstraintEN.con_ConstraintName,
      // );
      viewVarSet.sortPrjConstraintBy = `${clsPrjConstraintEN.con_UpdDate} Desc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_PrjConstraint4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
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
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinePrjConstraintConditionObj(): Promise<clsPrjConstraintEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objPrjConstraintCond = new clsPrjConstraintEN();
    if (this.tabId != '') {
      objPrjConstraintCond.SetCondFldValue(clsPrjConstraintEN.con_TabId, this.tabId, '=');
    }
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.constraintName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjConstraintEN.con_ConstraintName,
          qryVarSet.constraintName_q,
        );
        objPrjConstraintCond.SetCondFldValue(
          clsPrjConstraintEN.con_ConstraintName,
          qryVarSet.constraintName_q,
          'like',
        );
      }
      if (qryVarSet.constraintTypeId_q != '' && qryVarSet.constraintTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjConstraintEN.con_ConstraintTypeId,
          qryVarSet.constraintTypeId_q,
        );
        objPrjConstraintCond.SetCondFldValue(
          clsPrjConstraintEN.con_ConstraintTypeId,
          qryVarSet.constraintTypeId_q,
          '=',
        );
      }
      if (GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlInUse_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsPrjConstraintEN.con_InUse);
        objPrjConstraintCond.SetCondFldValue(clsPrjConstraintEN.con_InUse, true, '=');
      } else if (GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlInUse_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsPrjConstraintEN.con_InUse);
        objPrjConstraintCond.SetCondFldValue(clsPrjConstraintEN.con_InUse, false, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombinePrjConstraintConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objPrjConstraintCond.whereCond = strWhereCond;
    return objPrjConstraintCond;
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnSetNormalConstraintName_Click() {
    const strThisFuncName = this.btnSetNormalConstraintName_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置标准约束名的记录!');
        return '';
      }
      for (const strPrjConstraintId of arrKeyIds) {
        const strNormalConstraintName = await PrjConstraintEx_GetNormalConstraintName(
          strPrjConstraintId,
        );
        const objPrjConstraint = new clsPrjConstraintEN();
        objPrjConstraint.SetPrjConstraintId(strPrjConstraintId);
        objPrjConstraint.SetConstraintName(strNormalConstraintName);
        objPrjConstraint.SetPrjId(clsPrivateSessionStorage.currSelPrjId);
        objPrjConstraint.SetUpdDate(clsDateTime.getTodayDateTimeStr(0));
        objPrjConstraint.SetUpdUser(clsPrivateSessionStorage.userId);
        const returnBool = await PrjConstraint_UpdateRecordAsync(objPrjConstraint);
        if (returnBool == false) {
          alert('设置标准约束名出错！');
          return;
        }
      }
      vPrjConstraint_Sim_ReFreshThisCache(PrjId_Session.value);
      alert('设置标准约束名完成！');
      await this.BindGv_PrjConstraint4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置标准约束名不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnCheckConstraintFld_Click() {
    const strThisFuncName = this.btnCheckConstraintFld_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要检查约束字段的记录!');
        return '';
      }
      for (const strPrjConstraintId of arrKeyIds) {
        const returnBool = await PrjConstraintEx_CheckConstraintFld(
          strPrjConstraintId,
          clsPrivateSessionStorage.currSelPrjId,
          clsPrivateSessionStorage.userId,
        );

        if (returnBool == false) {
          alert('检查约束字段出错！');
          return;
        }
      }
      vPrjConstraint_Sim_ReFreshThisCache(PrjId_Session.value);
      alert('检查约束字段完成！');
      await this.BindGv_PrjConstraint4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '检查约束字段不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 显示PrjConstraint对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrPrjConstraintExObjLst:需要绑定的对象列表
   **/
  public async BindTab_PrjConstraint4Func(
    divContainer: HTMLDivElement,
    arrPrjConstraintExObjLst: Array<clsPrjConstraintENEx>,
  ) {
    const strThisFuncName = this.BindTab_PrjConstraint4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
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
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintEN.con_PrjConstraintId,
        sortBy: clsPrjConstraintEN.con_PrjConstraintId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '约束表Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintEN.con_ConstraintName,
        sortBy: clsPrjConstraintEN.con_ConstraintName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '约束表名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintENEx.con_FldNames,
        sortBy: clsPrjConstraintENEx.con_FldNames,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '约束字段',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintENEx.con_TabName,
        sortBy: 'tabName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintENEx.con_ConstraintTypeName,
        sortBy: 'constraintTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '约束类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintEN.con_CreateUserId,
        sortBy: clsPrjConstraintEN.con_CreateUserId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '建立用户Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintEN.con_InUse,
        sortBy: clsPrjConstraintEN.con_InUse,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintEN.con_CheckDate,
        sortBy: clsPrjConstraintEN.con_CheckDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '检查日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintEN.con_ErrMsg,
        sortBy: clsPrjConstraintEN.con_ErrMsg,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '错误信息',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintEN.con_UpdDate,
        sortBy: clsPrjConstraintEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintEN.con_UpdUser,
        sortBy: clsPrjConstraintEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改者',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjConstraintEN.con_Memo,
        sortBy: clsPrjConstraintEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrPrjConstraintExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrPrjConstraintExObjLst,
      arrDataColumn,
      clsPrjConstraintEN.con_PrjConstraintId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /*
   * 表Id
   */
  public get tabId(): string {
    return PrjConstraintCRUDEx.GetPropValue('tabId');
  }
  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public SortColumn(sortColumnKey: string, sortDirection: string): void {
    console.log(sortColumnKey, sortDirection);
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_PrjConstraint4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_PrjConstraint4Func.name;
    if (divList == null) {
      const strMsg = Format(
        '用于显示列表的div为空,请检查!(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.listPara.listDiv = divList;
    if (viewVarSet.sortPrjConstraintBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortPrjConstraintBy)为空,请检查!(In BindGv_PrjConstraintCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await CombinePrjConstraintConditionEx();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPrjConstraintExObjLst: Array<clsPrjConstraintENEx> = [];
    try {
      this.recCount = await PrjConstraint_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrPrjConstraintExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortPrjConstraintBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrPrjConstraintExObjLst = await PrjConstraintEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrPrjConstraintExObjLst.length == 0) {
      const strKey = Format('{0}', clsPrjConstraintEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_PrjConstraint4Func(divList, arrPrjConstraintExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
