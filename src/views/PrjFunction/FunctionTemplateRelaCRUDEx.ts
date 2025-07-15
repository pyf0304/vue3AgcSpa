import { FunctionTemplateRelaCRUD } from '@/viewsBase/PrjFunction/FunctionTemplateRelaCRUD';
import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';
import { clsFunctionTemplateRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaENEx';
import {
  FunctionTemplateRela_AddNewRecordAsync,
  FunctionTemplateRela_GetObjLstBymIdLstAsync,
  FunctionTemplateRela_GetUniCondStr,
  FunctionTemplateRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateRelaWApi';
import { FunctionTemplate_BindDdl_FunctionTemplateIdInDivCache } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
import { ProgLangType_BindDdl_ProgLangTypeIdByIsVisibleInDivCache } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { vCodeType_SimEx_BindDdl_CodeTypeIdByProgLangTypeIdInDivCache } from '@/ts/L3ForWApiEx/GeneCode/clsvCodeType_SimExWApi';

import {
  CheckControlExistInDivObj,
  GetCheckBoxValueInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectedIndexInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindDdl_TrueAndFalseInDivObj,
  BindTab,
  ObjectAssign,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  qryVarSet,
  refFunctionTemplateRela_Detail,
  refFunctionTemplateRela_Edit,
  viewVarSet,
} from '@/views/PrjFunction/FunctionTemplateRelaVueShare';
import FunctionTemplateRela_EditEx from '@/views/PrjFunction/FunctionTemplateRela_EditEx';

//import $ from "jquery";
/** FunctionTemplateRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class FunctionTemplateRelaCRUDEx
  extends FunctionTemplateRelaCRUD
  implements IShowList
{
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortFunctionTemplateRelaBy = "mId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 50;
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
    this.BindGv_FunctionTemplateRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'FunctionTemplateRela':
        alert('该类没有绑定该函数：[this.BindGv_FunctionTemplateRela4Func]！');
        //this.BindGv_FunctionTemplateRela4Func();
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
    let objPage: FunctionTemplateRelaCRUDEx;
    if (FunctionTemplateRelaCRUD.objPageCRUD == null) {
      FunctionTemplateRelaCRUD.objPageCRUD = new FunctionTemplateRelaCRUDEx();
      objPage = <FunctionTemplateRelaCRUDEx>FunctionTemplateRelaCRUD.objPageCRUD;
    } else {
      objPage = <FunctionTemplateRelaCRUDEx>FunctionTemplateRelaCRUD.objPageCRUD;
    }
    const objPageEdit = new FunctionTemplateRela_EditEx('FunctionTemplateRela_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refFunctionTemplateRela_Edit.value.btnFunctionTemplateRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refFunctionTemplateRela_Edit.value.btnFunctionTemplateRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'Detail': //详细信息
        refFunctionTemplateRela_Detail.value.btnFunctionTemplateRela_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refFunctionTemplateRela_Edit.value.btnFunctionTemplateRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'CopyToNewFunctionTemplate': //自定义功能:设置函数模板Id
        objPage.btnCopyToNewFunctionTemplate_Click();
        break;
      case 'SetFunctionTemplateId': //自定义功能:设置函数模板Id
        objPage.btnSetFunctionTemplateId_Click();
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
        AccessBtnClickDefault(strCommandName, 'FunctionTemplateRelaCRUDEx.btn_Click');

        break;
    }
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // const strThisFuncName = this.BindDdl4QueryRegion.name;
    // 在此处放置用户代码以初始化页面
    // const strProgLangTypeId = FunctionTemplateRelaCRUD.ProgLangTypeId_Static;
    // const strCodeTypeId = FunctionTemplateRelaCRUD.CodeTypeId_Static;

    // await this.SetDdl_FunctionTemplateIdInDiv(); //查询区域

    // await this.SetDdl_RegionTypeIdInDiv(); //查询区域
    await this.SetDdl_ProgLangTypeIdInDiv(); //查询区域

    //await this.SetDdl_CodeTypeIdInDiv(strProgLangTypeId);//查询区域

    //await this.SetDdl_FuncId4GCInDiv(strCodeTypeId);//查询区域

    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsGeneCode_q');
  }

  public async SetDdl_ProgLangTypeIdInDiv() {
    await ProgLangType_BindDdl_ProgLangTypeIdByIsVisibleInDivCache(
      divVarSet.refDivQuery,
      'ddlProgLangTypeId_q',
    ); //
  }
  /**
   * 编程语言类型Id (Used In CombineCondition())
   **/
  public get progLangTypeId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlProgLangTypeId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 编程语言类型Id (Used In CombineCondition())
   **/
  public set progLangTypeId_q(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivQuery, 'ddlProgLangTypeId_q', value);
  }

  /* 函数功能:系统生成的Change事件函数
(AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
*/
  public async ddlProgLangTypeId_q_SelectedIndexChanged(ddlProgLangTypeId_q: HTMLSelectElement) {
    console.log(ddlProgLangTypeId_q);
    // const strThisFuncName = this.ddlProgLangTypeId_q_SelectedIndexChanged.name;
    if (IsNullOrEmpty(this.progLangTypeId_q) == true) return;
    await this.SetDdl_CodeTypeIdInDiv(this.progLangTypeId_q); //查询区域

    //alert('请在扩展层:FunctionTemplateRela_Edit_2Ex中重写该函数！');
  }
  /** 设置字段值-functionTemplateId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnCopyToNewFunctionTemplate_Click() {
    const strThisFuncName = this.btnCopyToNewFunctionTemplate_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const strFunctionTemplateId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlFunctionTemplateId_CopyToNew',
      );
      if (strFunctionTemplateId == '') {
        const strMsg = '请输入函数模板Id(functionTemplateId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strFunctionTemplateId=' + strFunctionTemplateId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.CopyToNewFunctionTemplate(arrKeyIds, strFunctionTemplateId);
      await this.BindGv_FunctionTemplateRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-functionTemplateId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async CopyToNewFunctionTemplate(arrmId: Array<string>, strFunctionTemplateId: string) {
    const strThisFuncName = this.SetFunctionTemplateId.name;
    if (strFunctionTemplateId == null || strFunctionTemplateId == '') {
      const strMsg = '请输入函数模板Id(functionTemplateId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrmId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrFunctionTemplateRelaObjLst = await FunctionTemplateRela_GetObjLstBymIdLstAsync(
        arrmId,
      );
      let intCount = 0;
      for (const objInFor of arrFunctionTemplateRelaObjLst) {
        const objFunctionTemplateRelaEN = new clsFunctionTemplateRelaEN();
        ObjectAssign(objFunctionTemplateRelaEN, objInFor);
        objFunctionTemplateRelaEN.SetFunctionTemplateId(strFunctionTemplateId);
        const strCondition = FunctionTemplateRela_GetUniCondStr(objFunctionTemplateRelaEN);
        let returnBool = false;
        try {
          //objFunctionTemplateRelaEN.sfUpdFldSetStr = objFunctionTemplateRelaEN.updFldString;//设置哪些字段被修改(脏字段)
          returnBool = await FunctionTemplateRela_IsExistRecordAsync(strCondition);
        } catch (e) {
          const strMsg = Format(
            '检查是否存在不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) continue;
        returnBool = false;
        try {
          //objFunctionTemplateRelaEN.sfUpdFldSetStr = objFunctionTemplateRelaEN.updFldString;//设置哪些字段被修改(脏字段)
          returnBool = await FunctionTemplateRela_AddNewRecordAsync(objFunctionTemplateRelaEN);
        } catch (e) {
          const strMsg = Format(
            '复制到新函数模块记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          // const strInfo = Format('复制到新函数模块记录成功!');
          intCount++;
        } else {
          const strInfo = Format('复制到新函数模块记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共复制到新函数模块了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      if (intCount > 0) {
        //FunctionTemplateRela_ReFreshCache(FunctionTemplateRelaCRUD.FunctionTemplateIdCache);
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      await FunctionTemplate_BindDdl_FunctionTemplateIdInDivCache(
        divVarSet.refDivFunction,
        'ddlFunctionTemplateId_CopyToNew',
      ); //
      viewVarSet.sortFunctionTemplateRelaBy = 'mId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_FunctionTemplateRela4Func(divVarSet.refDivList);
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

  /**
   * 设置绑定下拉框，针对字段:[codeTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
   **/

  public async SetDdl_CodeTypeIdInDiv(ProgLangTypeId: string) {
    await vCodeType_SimEx_BindDdl_CodeTypeIdByProgLangTypeIdInDivCache(
      divVarSet.refDivQuery,
      'ddlCodeTypeId_q',
      ProgLangTypeId,
    ); //
  }

  /** 显示FunctionTemplateRela对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrFunctionTemplateRelaExObjLst:需要绑定的对象列表
   **/
  public async BindTab_FunctionTemplateRela4Func(
    divContainer: HTMLDivElement,
    arrFunctionTemplateRelaExObjLst: Array<clsFunctionTemplateRelaENEx>,
  ) {
    const strThisFuncName = this.BindTab_FunctionTemplateRela4Func.name;
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
        fldName: clsFunctionTemplateRelaENEx.con_FunctionTemplateName,
        sortBy: clsFunctionTemplateRelaENEx.con_FunctionTemplateName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数模板名',
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
        fldName: clsFunctionTemplateRelaENEx.con_ProgLangTypeSimName,
        sortBy: clsFunctionTemplateRelaENEx.con_ProgLangTypeSimName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '语言',
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
        fldName: clsFunctionTemplateRelaENEx.con_CodeTypeId,
        sortBy: clsFunctionTemplateRelaENEx.con_CodeTypeId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '类型Id',
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
        fldName: clsFunctionTemplateRelaENEx.con_CodeTypeName,
        sortBy: clsFunctionTemplateRelaENEx.con_CodeTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '代码类型',
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
        fldName: clsFunctionTemplateRelaEN.con_FuncId4GC,
        sortBy: clsFunctionTemplateRelaEN.con_FuncId4GC,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数ID',
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
        fldName: clsFunctionTemplateRelaENEx.con_FuncName,
        sortBy: clsFunctionTemplateRelaENEx.con_FuncName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数名',
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
        fldName: clsFunctionTemplateRelaENEx.con_FuncCodeTypeName,
        sortBy: clsFunctionTemplateRelaENEx.con_FuncCodeTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数代码类型',
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
        fldName: clsFunctionTemplateRelaENEx.con_FuncName4Code,
        sortBy: clsFunctionTemplateRelaENEx.con_FuncName4Code,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数名4Code',
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
        fldName: clsFunctionTemplateRelaEN.con_IsGeneCode,
        sortBy: clsFunctionTemplateRelaEN.con_IsGeneCode,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '生成代码?',
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
        fldName: clsFunctionTemplateRelaENEx.con_RegionTypeName,
        sortBy: clsFunctionTemplateRelaENEx.con_RegionTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域类型',
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
        fldName: clsFunctionTemplateRelaEN.con_OrderNum,
        sortBy: clsFunctionTemplateRelaEN.con_OrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '序号',
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
        fldName: clsFunctionTemplateRelaEN.con_UpdUser,
        sortBy: clsFunctionTemplateRelaEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改者',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFunctionTemplateRelaEN.con_Memo,
        sortBy: clsFunctionTemplateRelaEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrFunctionTemplateRelaExObjLst, arrDataColumn);
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
      arrFunctionTemplateRelaExObjLst,
      arrDataColumn,
      clsFunctionTemplateRelaEN.con_mId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /**
   * 是否显示打印区域
   **/
  public get dispPrintRegion_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkDispPrintRegion_q');
    const strId = 'chkDispPrintRegion_q';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineFunctionTemplateRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.dispPrintRegion_q == false) {
        strWhereCond += Format(
          " And {0} not in (Select {0} From {1} where {2} = '{3}')",
          clsFunctionTemplateRelaEN.con_FuncId4GC,
          clsFunction4GeneCodeEN._CurrTabName,
          clsFunction4GeneCodeEN.con_FeatureId,
          '0231',
        );
      }
      if (qryVarSet.functionTemplateId_q != '' && qryVarSet.functionTemplateId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunctionTemplateRelaEN.con_FunctionTemplateId,
          qryVarSet.functionTemplateId_q,
        );
      }
      if (qryVarSet.regionTypeId_q != '' && qryVarSet.regionTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunctionTemplateRelaEN.con_RegionTypeId,
          qryVarSet.regionTypeId_q,
        );
      }
      if (qryVarSet.codeTypeId_q != '' && qryVarSet.codeTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunctionTemplateRelaEN.con_CodeTypeId,
          qryVarSet.codeTypeId_q,
        );
      }
      if (qryVarSet.funcId4GC_q != '' && qryVarSet.funcId4GC_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunctionTemplateRelaEN.con_FuncId4GC,
          qryVarSet.funcId4GC_q,
        );
      }
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsGeneCode_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsFunctionTemplateRelaEN.con_IsGeneCode);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsGeneCode_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsFunctionTemplateRelaEN.con_IsGeneCode);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(CombineFunctionTemplateRelaCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
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
