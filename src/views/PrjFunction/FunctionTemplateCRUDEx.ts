/**
 * 类名:FunctionTemplateCRUDEx(界面:FunctionTemplateCRUD,00050347)
 * 表名:FunctionTemplate(00050312)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/28 23:46:07
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { FunctionTemplateCRUD } from '@/viewsBase/PrjFunction/FunctionTemplateCRUD';
import {
  viewVarSet,
  divVarSet,
  refFunctionTemplate_Edit,
  refFunctionTemplate_Detail,
} from '@/views/PrjFunction/FunctionTemplateVueShare';
import { Format } from '@/ts/PubFun/clsString';
import FunctionTemplate_EditEx from '@/views/PrjFunction/FunctionTemplate_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** FunctionTemplateCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class FunctionTemplateCRUDEx extends FunctionTemplateCRUD implements IShowList {
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return this._pageSize ?? 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in FunctionTemplateCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in FunctionTemplateCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_FunctionTemplate]!${strType}${strPara}`);
    //this.BindGv_FunctionTemplate4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'FunctionTemplate':
        this.BindGv_FunctionTemplate4Func(divVarSet.refDivList);
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
    let objPage: FunctionTemplateCRUDEx;
    let objPageEdit;
    if (FunctionTemplateCRUD.objPageCRUD == null) {
      FunctionTemplateCRUD.objPageCRUD = new FunctionTemplateCRUDEx();
      objPage = <FunctionTemplateCRUDEx>FunctionTemplateCRUDEx.objPageCRUD;
    } else {
      objPage = <FunctionTemplateCRUDEx>FunctionTemplateCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new FunctionTemplate_EditEx('FunctionTemplate_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refFunctionTemplate_Edit.value.btnFunctionTemplate_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refFunctionTemplate_Detail.value.btnFunctionTemplate_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new FunctionTemplate_EditEx('FunctionTemplate_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);

        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        // const strFunctionTemplateId = strKeyId;
        refFunctionTemplate_Edit.value.btnFunctionTemplate_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(FunctionTemplateCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'progLangTypeName|Ex':
        viewVarSet.sortFunctionTemplateBy = `progLangTypeName ${sortDirection}|(ProgLangType)FunctionTemplate.ProgLangTypeId = ProgLangType.ProgLangTypeId|`;
        break;
      default:
        viewVarSet.sortFunctionTemplateBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_FunctionTemplate4Func(this.listPara.listDiv);
  }
}
