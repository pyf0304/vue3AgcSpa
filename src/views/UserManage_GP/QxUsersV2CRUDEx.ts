/**
 * 类名:QxUsersV2CRUDEx(界面:QxUsersV2CRUD,00140038)
 * 表名:QxUsersV2(00140110)
 * 版本:2024.09.08.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/11 15:28:43
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { QxUsersV2CRUD } from '@/viewsBase/UserManage_GP/QxUsersV2CRUD';
import {
  viewVarSet,
  divVarSet,
  refQxUsersV2_Edit,
  refQxUsersV2_Detail,
} from '@/views/UserManage_GP/QxUsersV2VueShare';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import QxUsersV2_EditEx from '@/views/UserManage_GP/QxUsersV2_EditEx';
/** QxUsersV2CRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class QxUsersV2CRUDEx extends QxUsersV2CRUD implements IShowList {
  //public static mstrSortQxUsersV2By = "id";
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
    console.log('InitVarSet in QxUsersV2CRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxUsersV2CRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_QxUsersV2(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxUsersV2':
        alert('该类没有绑定该函数：[this.BindGv_QxUsersV2]!');
        //this.BindGv_QxUsersV2(divVarSet.refDivList);
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
    let objPage: QxUsersV2CRUDEx;
    let objPageEdit;
    if (QxUsersV2CRUD.objPageCRUD == null) {
      QxUsersV2CRUD.objPageCRUD = new QxUsersV2CRUDEx();
      objPage = <QxUsersV2CRUDEx>QxUsersV2CRUDEx.objPageCRUD;
    } else {
      objPage = <QxUsersV2CRUDEx>QxUsersV2CRUDEx.objPageCRUD;
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
        objPageEdit = new QxUsersV2_EditEx('QxUsersV2_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refQxUsersV2_Edit.value.btnQxUsersV2_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refQxUsersV2_Detail.value.btnQxUsersV2_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QxUsersV2_EditEx('QxUsersV2_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refQxUsersV2_Edit.value.btnQxUsersV2_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(QxUsersV2CRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    viewVarSet.sortQxUsersV2By = Format('{0} {1}', sortColumnKey, sortDirection);
    await this.BindGv_QxUsersV2(this.thisDivList);
  }
}
