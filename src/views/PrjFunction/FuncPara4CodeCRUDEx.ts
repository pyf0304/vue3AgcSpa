/**
 * 类名:FuncPara4CodeCRUDEx(界面:FuncPara4CodeCRUD)
 * 表名:FuncPara4Code(00050384)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/31 17:30:37
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { FuncPara4CodeCRUD } from '@/viewsBase/PrjFunction/FuncPara4CodeCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format } from '@/ts/PubFun/clsString';
import { enumFunctionPurpose } from '@/ts/L0Entity/PrjFunction/clsFunctionPurposeEN';
import {
  FuncPara4Code_AddNewRecordAsync,
  FuncPara4Code_GetMaxStrIdAsync,
  FuncPara4Code_GetObjLstByFuncParaId4CodeLstAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsFuncPara4CodeWApi';
import {
  divVarSet,
  FuncPurposeId_Static,
  refFuncPara4Code_Edit,
  viewVarSet,
} from '@/views/PrjFunction/FuncPara4CodeVueShare';
import FuncPara4Code_EditEx from '@/views/PrjFunction/FuncPara4Code_EditEx';

/** FuncPara4CodeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class FuncPara4CodeCRUDEx extends FuncPara4CodeCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortFuncPara4CodeBy = "FuncParaId4Code";
  /**
   * 每页记录数,在扩展类可以修改
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
    console.log(strType + strPara);
    this.BindGv_FuncPara4Code4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'FuncPara4Code':
        alert('该类没有绑定该函数：[this.BindGv_FuncPara4Code4Func]!');
        //this.BindGv_FuncPara4Code4Func();
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: FuncPara4CodeCRUDEx;
    if (FuncPara4CodeCRUD.objPageCRUD == null) {
      FuncPara4CodeCRUD.objPageCRUD = new FuncPara4CodeCRUDEx();
      objPage = <FuncPara4CodeCRUDEx>FuncPara4CodeCRUD.objPageCRUD;
    } else {
      objPage = <FuncPara4CodeCRUDEx>FuncPara4CodeCRUD.objPageCRUD;
    }
    const objPageEdit = new FuncPara4Code_EditEx('FuncPara4Code_EditEx', objPage);
    console.log(objPageEdit);
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refFuncPara4Code_Edit.value.btnFuncPara4Code_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        refFuncPara4Code_Edit.value.btnFuncPara4Code_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录!');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(FuncPara4CodeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      FuncPurposeId_Static.value = enumFunctionPurpose.ForFunctionGene_02;

      viewVarSet.sortFuncPara4CodeBy = 'funcParaId4Code Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_FuncPara4Code4Func(divVarSet.refDivList);
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
  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrFuncParaId4Code: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrFuncPara4CodeObjLst = await FuncPara4Code_GetObjLstByFuncParaId4CodeLstAsync(
        arrFuncParaId4Code,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrFuncPara4CodeObjLst) {
        const strMaxStrId = await FuncPara4Code_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.funcParaId4Code = strMaxStrId;
        objInFor.paraName = `C_${objInFor.paraName}`;
        const returnBool = await FuncPara4Code_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          //FuncPara4Code_ReFreshCache(FuncPurposeId_Static.value);
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
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
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
