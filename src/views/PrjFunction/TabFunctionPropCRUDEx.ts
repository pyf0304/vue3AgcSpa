///// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
///// <reference path="../../scripts/typings/q/q.d.ts" />
///// <reference path="../../scripts/typings/handlebars/handlebars.d.ts" />
//import * as $ from "jquery";

import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { confirm_del, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { TabFunctionPropCRUD } from '@/viewsBase/PrjFunction/TabFunctionPropCRUD';
import { MethodModifier_BindDdl_MethodModifierIdInDivCache } from '@/ts/L3ForWApi/PrjFunction/clsMethodModifierWApi';
import { enumProgLangType } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { enumCodeType } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsTabFunctionPropEN } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropEN';
import { ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsTabFunctionPropENEx } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropENEx';
import { TabFunctionPropEx_GetObjLstByFunctionTempIdAndTabId } from '@/ts/L3ForWApiEx/PrjFunction/clsTabFunctionPropExWApi';
import { enumFunctionTemplate } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import {
  TabFunctionProp_AddNewRecordAsync,
  TabFunctionProp_GetUniCondStr,
  TabFunctionProp_IsExistRecordAsync,
  TabFunctionProp_ReFreshCache,
  TabFunctionProp_UpdateRecordAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsTabFunctionPropWApi';
import { FunctionTemplateRela_GetObjLstBymIdLstAsync } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateRelaWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  CodeTypeId_Static,
  CombineTabFunctionPropConditionObj,
  divVarSet,
  ProgLangTypeId_Static,
  qryVarSet,
  refTabFunctionProp_Edit,
  TabId_Static,
  viewVarSet,
} from '@/views/PrjFunction/TabFunctionPropVueShare';
import TabFunctionProp_EditEx from '@/views/PrjFunction/TabFunctionProp_EditEx';

/** TabFunctionPropCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class TabFunctionPropCRUDEx extends TabFunctionPropCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortTabFunctionPropBy=  "mId";
  public Op = '';
  public TabId = '';
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
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_TabFunctionProp]！');
    //this.BindGv_TabFunctionProp();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'TabFunctionProp':
        this.BindGv_TabFunctionProp4Func(divVarSet.refDivList);
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
    let objPage: TabFunctionPropCRUDEx;
    if (TabFunctionPropCRUD.objPageCRUD == null) {
      TabFunctionPropCRUD.objPageCRUD = new TabFunctionPropCRUDEx();
      objPage = <TabFunctionPropCRUDEx>TabFunctionPropCRUD.objPageCRUD;
    } else {
      objPage = <TabFunctionPropCRUDEx>TabFunctionPropCRUD.objPageCRUD;
    }
    const objPageEdit = new TabFunctionProp_EditEx('TabFunctionProp_EditEx', objPage);
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
        refTabFunctionProp_Edit.value.btnTabFunctionProp_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refTabFunctionProp_Edit.value.btnTabFunctionProp_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refTabFunctionProp_Edit.value.btnTabFunctionProp_Edit_Click(strCommandName, strKeyId);
        break;
      case 'SetMethodModifierId': //自定义功能:设置函数修饰语
        objPage.btnSetMethodModifierId_Click();
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
        AccessBtnClickDefault(strCommandName, 'TabFunctionPropCRUDEx.btn_Click');

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
      ProgLangTypeId_Static.value = enumProgLangType.TypeScript_09;
      CodeTypeId_Static.value = enumCodeType.BusinessLogic_0003;
      TabId_Static.value = clsPrivateSessionStorage.tabId_Main;

      qryVarSet.functionTemplateId_q = enumFunctionTemplate.AllFunctionSet_0001;
      qryVarSet.progLangTypeId_q = enumProgLangType.TypeScript_09;
      //ddlProgLangTypeId_q_SelectedIndexChanged();

      await MethodModifier_BindDdl_MethodModifierIdInDivCache(
        divVarSet.refDivFunction,
        'ddlMethodModifierId_SetFldValue',
      ); //

      viewVarSet.sortTabFunctionPropBy = 'mId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_TabFunctionProp4Func(divVarSet.refDivList);
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

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_TabFunctionProp4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_TabFunctionProp4Func.name;
    if (viewVarSet.sortTabFunctionPropBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(sortTabFunctionPropBy)为空，请检查！(In BindGv_TabFunctionPropCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strFunctionTemplateId = qryVarSet.functionTemplateId_q;
    if (IsNullOrEmpty(strFunctionTemplateId) == true) {
      const strMsg = Format(
        '在显示列表时，函数模板不能为空，请检查！(In BindGv_TabFunctionPropCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strCodeTypeId = qryVarSet.codeTypeId_q;
    if (IsNullOrEmpty(strCodeTypeId) == true) {
      const strMsg = Format(
        '在显示列表时，代码类型不能为空，请检查！(In BindGv_TabFunctionPropCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objTabFunctionProp_Cond = await CombineTabFunctionPropConditionObj();
    objTabFunctionProp_Cond.SetCondFldValue(
      clsTabFunctionPropEN.con_TabId,
      TabId_Static.value,
      '=',
    );
    // const strWhereCond = JSON.stringify(objTabFunctionProp_Cond);
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrTabFunctionPropExObjLst: Array<clsTabFunctionPropENEx> = [];
    try {
      //this.recCount = await TabFunctionProp_GetRecCountByCondCache(objTabFunctionProp_Cond, TabFunctionPropCRUD.PrjIdCache);
      // let strSortFun = (x: any, y: any) => {
      //   return 0;
      // };
      // if (TabFunctionPropCRUD.sortFunStatic != undefined) {
      //   strSortFun = TabFunctionPropCRUD.sortFunStatic(TabFunctionPropCRUD.ascOrDesc4SortFun);
      // }
      // const objPagerPara: stuPagerPara = {
      //   pageIndex: intCurrPageIndex,
      //   pageSize: this.pageSize,
      //   whereCond: strWhereCond,
      //   orderBy: viewVarSet.sortTabFunctionPropBy,
      //   sortFun: strSortFun,
      // };
      arrTabFunctionPropExObjLst = await TabFunctionPropEx_GetObjLstByFunctionTempIdAndTabId(
        clsPrivateSessionStorage.tabId_Main,
        strFunctionTemplateId,
        strCodeTypeId,
      );
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
    if (arrTabFunctionPropExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsTabFunctionPropEN._CurrTabName, TabId_Static.value);
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_TabFunctionProp4Func(divList, arrTabFunctionPropExObjLst);
      //console.log("完成BindGv_TabFunctionProp4Func!");
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
  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   **/
  public async ddlProgLangTypeId_q_SelectedIndexChanged() {
    //alert('请在扩展层:TabFunctionPropCRUDExEx中重写该函数！');
    if (IsNullOrEmpty(qryVarSet.progLangTypeId_q) == true) {
      const strMsg = `请选择一个语言类型！`;
      alert(strMsg);
      return;
    }
    // const strProgLangTypeId = qryVarSet.progLangTypeId_q;
    // this.SetDdl_CodeTypeIdInDiv(strProgLangTypeId);
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
  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }
  public get GetOp(): string {
    if (IsNullOrEmpty(this.Op) == false) return this.Op;
    return this.qsOp;
  }

  /** 设置字段值-MethodModifierId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetMethodModifierId(arrmId: Array<string>, strMethodModifierId: string) {
    const strThisFuncName = this.SetMethodModifierId.name;
    if (strMethodModifierId == null || strMethodModifierId == '') {
      const strMsg = '请输入函数修饰语Id(MethodModifierId)!';
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
        const objTabFunctionPropEN = new clsTabFunctionPropEN();
        ObjectAssign(objTabFunctionPropEN, objInFor);
        objTabFunctionPropEN.SetFunctionTemplateId(objInFor.functionTemplateId); //函数模板Id
        objTabFunctionPropEN.SetCodeTypeId(objInFor.codeTypeId); //代码类型Id
        objTabFunctionPropEN.SetFuncId4GC(objInFor.funcId4GC); //函数ID
        //objTabFunctionPropEN.SetIsForAllTemplate( objInFor.isForAllTemplate); //是否针对所有模板

        objTabFunctionPropEN.SetmId(objInFor.mId);
        objTabFunctionPropEN.SetMethodModifierId(strMethodModifierId);

        objTabFunctionPropEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId);
        objTabFunctionPropEN.SetTabId(clsPrivateSessionStorage.tabId_Main);
        objTabFunctionPropEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1));
        objTabFunctionPropEN.SetUpdUser(clsPubLocalStorage.userId);
        const strCondition = TabFunctionProp_GetUniCondStr(objTabFunctionPropEN);
        let returnBool = false;
        try {
          const returnExist = await TabFunctionProp_IsExistRecordAsync(strCondition);
          if (returnExist == false) {
            returnBool = await TabFunctionProp_AddNewRecordAsync(objTabFunctionPropEN);
          } else {
            objTabFunctionPropEN.sfUpdFldSetStr = objTabFunctionPropEN.updFldString; //设置哪些字段被修改(脏字段)
            returnBool = await TabFunctionProp_UpdateRecordAsync(objTabFunctionPropEN);
          }
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          // const strInfo = Format('设置记录成功!');
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      if (intCount > 0) {
        TabFunctionProp_ReFreshCache(TabId_Static.value);
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
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
