/**
 * 类名:GCConstantPrjIdRelaCRUDEx(界面:GCConstantPrjIdRelaCRUD,00050344)
 * 表名:GCConstantPrjIdRela(00050641)
 * 版本:2025.06.13.1(服务器:PYF-AI)
 * 日期:2025/06/21 09:29:10
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
import { GCConstantPrjIdRelaCRUD } from '@/viewsBase/GeneCode/GCConstantPrjIdRelaCRUD';
import {
  viewVarSet,
  divVarSet,
  refGCConstantPrjIdRela_Edit,
  refGCConstantPrjIdRela_Detail,
} from '@/views/GeneCode/GCConstantPrjIdRelaVueShare';
import { Format } from '@/ts/PubFun/clsString';
import GCConstantPrjIdRela_EditEx from '@/views/GeneCode/GCConstantPrjIdRela_EditEx';
import {
  GetCheckedKeyLstsInDivObj,
  GetFirstCheckedKeyLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** GCConstantPrjIdRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class GCConstantPrjIdRelaCRUDEx
  extends GCConstantPrjIdRelaCRUD
  implements IShowList
{
  //public static mstrSortGCConstantPrjIdRelaBy = "ConstId";
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
    console.log('InitVarSet in GCConstantPrjIdRelaCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in GCConstantPrjIdRelaCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_GCConstantPrjIdRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'GCConstantPrjIdRela':
        alert('该类没有绑定该函数：[this.BindGv_GCConstantPrjIdRela4Func]!');
        //this.BindGv_GCConstantPrjIdRela4Func(divVarSet.refDivList);
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
    let objPage: GCConstantPrjIdRelaCRUDEx;
    let objPageEdit;
    if (GCConstantPrjIdRelaCRUD.objPageCRUD == null) {
      GCConstantPrjIdRelaCRUD.objPageCRUD = new GCConstantPrjIdRelaCRUDEx();
      objPage = <GCConstantPrjIdRelaCRUDEx>GCConstantPrjIdRelaCRUDEx.objPageCRUD;
    } else {
      objPage = <GCConstantPrjIdRelaCRUDEx>GCConstantPrjIdRelaCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
    let strKeyLst = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new GCConstantPrjIdRela_EditEx('GCConstantPrjIdRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refGCConstantPrjIdRela_Edit.value.btnGCConstantPrjIdRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'Detail': //详细信息
        refGCConstantPrjIdRela_Detail.value.btnGCConstantPrjIdRela_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new GCConstantPrjIdRela_EditEx('GCConstantPrjIdRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
        if (strKeyLst == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyLst},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refGCConstantPrjIdRela_Edit.value.btnGCConstantPrjIdRela_Edit_Click(
          strCommandName,
          strKeyLst,
        );
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyLsts.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(GCConstantPrjIdRelaCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'constName|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `constName ${sortDirection}|(GCDefaConstants)GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId|`;
        break;
      case 'dataTypeName|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `dataTypeName ${sortDirection}|(GCDefaConstants)GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId|(DataTypeAbbr)GCDefaConstants.DataTypeId = DataTypeAbbr.DataTypeId|`;
        break;
      case 'csType|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `csType ${sortDirection}|(GCDefaConstants)GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId|(DataTypeAbbr)GCDefaConstants.DataTypeId = DataTypeAbbr.DataTypeId|`;
        break;
      case 'typeScriptType|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `typeScriptType ${sortDirection}|(GCDefaConstants)GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId|(DataTypeAbbr)GCDefaConstants.DataTypeId = DataTypeAbbr.DataTypeId|`;
        break;
      case '|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'prjName|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `prjName ${sortDirection}|(Projects)GCConstantPrjIdRela.PrjId = Projects.PrjId|`;
        break;
      case 'dateTimeSim|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortGCConstantPrjIdRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_GCConstantPrjIdRela4Func(this.listPara.listDiv);
  }
}
