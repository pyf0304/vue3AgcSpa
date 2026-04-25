/**
 * 类名:PrjDataBaseCRUDEx(界面:PrjDataBaseCRUD,00050346)
 * 表名:PrjDataBase(00050176)
 * 版本:2026.04.19(服务器:PYF-AI)
 * 日期:2026/04/19 19:42:40
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:工程管理(PrjManage)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { PrjDataBaseCRUD } from '@/viewsBase/PrjManage/PrjDataBaseCRUD';
import {
  viewVarSet,
  divVarSet,
  refPrjDataBase_Edit,
  refPrjDataBase_Detail,
} from '@/views/PrjManage/PrjDataBaseVueShare';
import { Format } from '@/ts/PubFun/clsString';
import PrjDataBase_EditEx from '@/views/PrjManage/PrjDataBase_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** PrjDataBaseCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class PrjDataBaseCRUDEx extends PrjDataBaseCRUD implements IShowList {
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
    console.log('InitVarSet in PrjDataBaseCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in PrjDataBaseCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_PrjDataBase]!${strType}${strPara}`);
    //this.BindGv_PrjDataBase4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'PrjDataBase':
        this.BindGv_PrjDataBase4Func(divVarSet.refDivList);
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
    let objPage: PrjDataBaseCRUDEx;
    let objPageEdit;
    if (PrjDataBaseCRUD.objPageCRUD == null) {
      PrjDataBaseCRUD.objPageCRUD = new PrjDataBaseCRUDEx();
      objPage = <PrjDataBaseCRUDEx>PrjDataBaseCRUDEx.objPageCRUD;
    } else {
      objPage = <PrjDataBaseCRUDEx>PrjDataBaseCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetUseStateId': //自定义功能:设置使用状态
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new PrjDataBase_EditEx('PrjDataBase_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refPrjDataBase_Edit.value.btnPrjDataBase_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refPrjDataBase_Detail.value.btnPrjDataBase_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new PrjDataBase_EditEx('PrjDataBase_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);

        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        // const strPrjDataBaseId = strKeyId;
        refPrjDataBase_Edit.value.btnPrjDataBase_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(PrjDataBaseCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'dataBaseTypeName|Ex':
        viewVarSet.sortPrjDataBaseBy = `dataBaseTypeName ${sortDirection}|(DataBaseType)PrjDataBase.DataBaseTypeId = DataBaseType.DataBaseTypeId|`;
        break;
      case 'useStateName|Ex':
        viewVarSet.sortPrjDataBaseBy = `useStateName ${sortDirection}|(UseState)PrjDataBase.UseStateId = UseState.UseStateId|`;
        break;
      default:
        viewVarSet.sortPrjDataBaseBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_PrjDataBase4Func(this.listPara.listDiv);
  }
}
