import { ViewIdGCVariableRelaCRUD } from '@/viewsBase/GeneCode/ViewIdGCVariableRelaCRUD';

import {
  GetCheckedKeyLstsInDivObj,
  GetFirstCheckedKeyLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';

import {
  divVarSet,
  viewVarSet,
  ViewId_Main_Session,
  refViewIdGCVariableRela_Edit,
} from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
import { Format } from '@/ts/PubFun/clsString';
import { ViewIdGCVariableRelaEx_GetViewVar } from '@/ts/L3ForWApiEx/GeneCode/clsViewIdGCVariableRelaExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import ViewIdGCVariableRela_EditEx from '@/views/GeneCode/ViewIdGCVariableRela_EditEx';

/** ViewIdGCVariableRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class ViewIdGCVariableRelaCRUDEx
  extends ViewIdGCVariableRelaCRUD
  implements IShowList
{
  //public static mstrSortViewIdGCVariableRelaBy = "VarId";
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
    console.log('InitVarSet in ViewIdGCVariableRelaCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ViewIdGCVariableRelaCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ViewIdGCVariableRela':
        alert('该类没有绑定该函数：[this.BindGv_ViewIdGCVariableRela4Func]!');
        //this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
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
    let objPage: ViewIdGCVariableRelaCRUDEx;
    let objPageEdit;
    if (ViewIdGCVariableRelaCRUD.objPageCRUD == null) {
      ViewIdGCVariableRelaCRUD.objPageCRUD = new ViewIdGCVariableRelaCRUDEx();
      objPage = <ViewIdGCVariableRelaCRUDEx>ViewIdGCVariableRelaCRUD.objPageCRUD;
    } else {
      objPage = <ViewIdGCVariableRelaCRUDEx>ViewIdGCVariableRelaCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
    // let objKeyLst;
    let strKeyLst = '';
    switch (strCommandName) {
      case 'GetViewVar': //查询记录
        objPage.btnGetViewVar_Click();
        break;
      case 'SetRetrievalMethodId': //自定义功能:设置获取方式Id
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new ViewIdGCVariableRela_EditEx('ViewIdGCVariableRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refViewIdGCVariableRela_Edit.value.btnViewIdGCVariableRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new ViewIdGCVariableRela_EditEx('ViewIdGCVariableRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
        refViewIdGCVariableRela_Edit.value.btnViewIdGCVariableRela_Edit_Click(
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
        strMsg = `命令:${strCommandName}在函数(ViewIdGCVariableRelaCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'viewName|Ex':
        viewVarSet.sortViewIdGCVariableRelaBy = `ViewInfo|viewName ${sortDirection}|ViewIdGCVariableRela.ViewId = ViewInfo.ViewId`;
        break;
      case 'varName|Ex':
        viewVarSet.sortViewIdGCVariableRelaBy = `GCVariable|varName ${sortDirection}|ViewIdGCVariableRela.VarId = GCVariable.VarId`;
        break;
      case 'varTypeName|Ex':
        viewVarSet.sortViewIdGCVariableRelaBy = `GCVariable|varTypeName ${sortDirection}|ViewIdGCVariableRela.VarId = GCVariable.VarId,GCVariable.VarTypeId = GCVariableType.VarTypeId`;
        break;
      case 'retrievalMethodName|Ex':
        viewVarSet.sortViewIdGCVariableRelaBy = `RetrievalMethod|retrievalMethodName ${sortDirection}|ViewIdGCVariableRela.RetrievalMethodId = RetrievalMethod.RetrievalMethodId`;
        break;
      default:
        viewVarSet.sortViewIdGCVariableRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ViewIdGCVariableRela4Func(this.thisDivList);
  }

  /** 设置字段值-RetrievalMethodId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnGetViewVar_Click() {
    const strThisFuncName = this.btnGetViewVar_Click.name;
    try {
      const bolIsSuccess = await ViewIdGCVariableRelaEx_GetViewVar(
        ViewId_Main_Session.value,
        clsPrivateSessionStorage.currSelPrjId,
        clsPrivateSessionStorage.userId,
      );
      if (bolIsSuccess == false) {
        const strMsg = '导入界面变量出错!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      const strMsg = '导入界面变量成功!';

      alert(strMsg);

      await this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
