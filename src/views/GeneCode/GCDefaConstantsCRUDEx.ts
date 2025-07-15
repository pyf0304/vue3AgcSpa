/**
 * 类名:GCDefaConstantsCRUDEx(界面:GCDefaConstantsCRUD,00050343)
 * 表名:GCDefaConstants(00050640)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/18 00:22:28
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { GCDefaConstantsCRUD } from '@/viewsBase/GeneCode/GCDefaConstantsCRUD';
import {
  viewVarSet,
  divVarSet,
  refGCDefaConstants_Edit,
  refGCDefaConstants_Detail,
} from '@/views/GeneCode/GCDefaConstantsVueShare';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import GCDefaConstants_EditEx from '@/views/GeneCode/GCDefaConstants_EditEx';
/** GCDefaConstantsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class GCDefaConstantsCRUDEx extends GCDefaConstantsCRUD implements IShowList {
  //public static mstrSortGCDefaConstantsBy = "ConstId";
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
    console.log('InitVarSet in GCDefaConstantsCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in GCDefaConstantsCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_GCDefaConstants]!${strType}${strPara}`);
    //this.BindGv_GCDefaConstants4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'GCDefaConstants':
        this.BindGv_GCDefaConstants4Func(divVarSet.refDivList);
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
    let objPage: GCDefaConstantsCRUDEx;
    let objPageEdit;
    if (GCDefaConstantsCRUD.objPageCRUD == null) {
      GCDefaConstantsCRUD.objPageCRUD = new GCDefaConstantsCRUDEx();
      objPage = <GCDefaConstantsCRUDEx>GCDefaConstantsCRUDEx.objPageCRUD;
    } else {
      objPage = <GCDefaConstantsCRUDEx>GCDefaConstantsCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case '': //自定义功能:把常量设为当前项目
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new GCDefaConstants_EditEx('GCDefaConstants_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refGCDefaConstants_Edit.value.btnGCDefaConstants_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refGCDefaConstants_Detail.value.btnGCDefaConstants_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new GCDefaConstants_EditEx('GCDefaConstants_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refGCDefaConstants_Edit.value.btnGCDefaConstants_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要复制的[${objPage.thisTabName}]记录!`);
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
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(GCDefaConstantsCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'dataTypeName|Ex':
        viewVarSet.sortGCDefaConstantsBy = `DataTypeAbbr|dataTypeName ${sortDirection}|GCDefaConstants.DataTypeId = DataTypeAbbr.DataTypeId`;
        break;
      default:
        viewVarSet.sortGCDefaConstantsBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_GCDefaConstants4Func(this.listPara.listDiv);
  }
}
