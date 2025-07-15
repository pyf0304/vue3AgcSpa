/**
 * 类名:ConstraintFieldsCRUDEx(界面:ConstraintFieldsCRUD)
 * 表名:ConstraintFields(00050334)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/24 17:26:23
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { ConstraintFieldsCRUD } from '@/viewsBase/Table_Field/ConstraintFieldsCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  divVarSet,
  PrjId_Session,
  refConstraintFields_Detail,
  refConstraintFields_Edit,
} from '@/views/Table_Field/ConstraintFieldsVueShare';
import ConstraintFields_EditEx from '@/views/Table_Field/ConstraintFields_EditEx';

/** ConstraintFieldsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class ConstraintFieldsCRUDEx extends ConstraintFieldsCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortConstraintFieldsBy = "mId";
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
    console.log('InitVarSet in ConstraintFieldsCRUDEx');
    PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ConstraintFieldsCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_ConstraintFields]!${strType}${strPara}`);
    //this.BindGv_ConstraintFields4Func(ConstraintFieldsCRUD.divList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ConstraintFields':
        this.BindGv_ConstraintFields4Func(divVarSet.refDivList);
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
    let objPage: ConstraintFieldsCRUDEx;
    let objPageEdit;
    if (ConstraintFieldsCRUD.objPageCRUD == null) {
      ConstraintFieldsCRUD.objPageCRUD = new ConstraintFieldsCRUDEx();
      objPage = <ConstraintFieldsCRUDEx>ConstraintFieldsCRUD.objPageCRUD;
    } else {
      objPage = <ConstraintFieldsCRUDEx>ConstraintFieldsCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetInUse': //自定义功能:设置是否在用
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new ConstraintFields_EditEx('ConstraintFields_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refConstraintFields_Edit.value.btnConstraintFields_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refConstraintFields_Detail.value.btnConstraintFields_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new ConstraintFields_EditEx('ConstraintFields_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refConstraintFields_Edit.value.btnConstraintFields_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(ConstraintFieldsCRUDEx.btnClick)中没有被处理!`;
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
