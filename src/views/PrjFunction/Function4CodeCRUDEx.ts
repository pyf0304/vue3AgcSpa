/**
 * 类名:Function4CodeCRUDEx(界面:Function4CodeCRUD)
 * 表名:Function4Code(00050386)
 * 版本:2023.07.18.1(服务器:PYF-THINKPAD)
 * 日期:2023/07/28 09:38:10
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
import { Function4CodeCRUD } from '@/viewsBase/PrjFunction/Function4CodeCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  divVarSet,
  refFunction4Code_Detail,
  refFunction4Code_Edit,
} from '@/views/PrjFunction/Function4CodeVueShare';
import Function4Code_EditEx from '@/views/PrjFunction/Function4Code_EditEx';

/** Function4CodeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class Function4CodeCRUDEx extends Function4CodeCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortFunction4CodeBy = "FuncId4Code";
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
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_Function4Code4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'Function4Code':
        alert('该类没有绑定该函数：[this.BindGv_Function4Code4Func]!');
        //this.BindGv_Function4Code4Func();
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
    let objPage: Function4CodeCRUDEx;
    if (Function4CodeCRUD.objPageCRUD == null) {
      Function4CodeCRUD.objPageCRUD = new Function4CodeCRUDEx();
      objPage = <Function4CodeCRUDEx>Function4CodeCRUD.objPageCRUD;
    } else {
      objPage = <Function4CodeCRUDEx>Function4CodeCRUD.objPageCRUD;
    }
    const objPageEdit = new Function4Code_EditEx('Function4Code_EditEx', objPage);
    console.log(objPageEdit);
    let strMsg = '';
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divDataLst);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divDataLst);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refFunction4Code_Edit.value.btnFunction4Code_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refFunction4Code_Detail.value.btnFunction4Code_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        refFunction4Code_Edit.value.btnFunction4Code_Edit_Click(strCommandName, strKeyId);
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
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录!');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(Function4CodeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
