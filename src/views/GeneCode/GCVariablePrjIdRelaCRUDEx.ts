/**
* 类名:GCVariablePrjIdRelaCRUDEx(界面:GCVariablePrjIdRelaCRUD)
* 表名:GCVariablePrjIdRela(00050617)
* 版本:2023.02.18.1(服务器:WIN-SRV103-116)
* 日期:2023/02/19 23:43:21
* 生成者:
工程名称:AGC(0005)
CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
* 相关数据库:103.116.76.183,9433AGC_CS12
* PrjDataBaseId:0005
* 模块中文名:生成代码(GeneCode)
* 框架-层名:WA_界面后台Ex_TS(TS)(WA_ViewScriptCSEx_TS)
* 编程语言:TypeScript
**/
import { GCVariablePrjIdRelaCRUD } from '@/viewsBase/GeneCode/GCVariablePrjIdRelaCRUD';
import {
  GetCheckedKeyLstsInDiv,
  GetFirstCheckedKeyLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  GCVariablePrjIdRela_DelRecKeyLstsAsync,
  GCVariablePrjIdRela_ReFreshCache,
  GCVariablePrjIdRela_SplitKeyLst,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariablePrjIdRelaWApi';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { GCVariable_ReFreshCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { ProjectsEx_BindDdl_PrjIdInDivExCache } from '@/ts/L3ForWApiEx/PrjManage/clsProjectsExWApiBak';
import { GCVariableEx_BindDdl_VarIdInDivCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refGCVariablePrjIdRela_Edit,
  viewVarSet,
} from '@/views/GeneCode/GCVariablePrjIdRelaVueShare';
import GCVariablePrjIdRela_EditEx from '@/views/GeneCode/GCVariablePrjIdRela_EditEx';
//import $ from "jquery";
/** GCVariablePrjIdRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class GCVariablePrjIdRelaCRUDEx
  extends GCVariablePrjIdRelaCRUD
  implements IShowList
{
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortGCVariablePrjIdRelaBy = "PrjId";
  /**
   * 每页记录数，在扩展类可以修改
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
    alert(`该类没有绑定该函数：[this.BindGv_GCVariablePrjIdRela]！${strType}${strPara}`);
    //this.BindGv_GCVariablePrjIdRela();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'GCVariablePrjIdRela':
        this.BindGv_GCVariablePrjIdRela4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: GCVariablePrjIdRelaCRUDEx;
    if (GCVariablePrjIdRelaCRUD.objPageCRUD == null) {
      GCVariablePrjIdRelaCRUD.objPageCRUD = new GCVariablePrjIdRelaCRUDEx();
      objPage = <GCVariablePrjIdRelaCRUDEx>GCVariablePrjIdRelaCRUD.objPageCRUD;
    } else {
      objPage = <GCVariablePrjIdRelaCRUDEx>GCVariablePrjIdRelaCRUD.objPageCRUD;
    }
    const objPageEdit = new GCVariablePrjIdRela_EditEx('GCVariablePrjIdRela_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyLsts = GetCheckedKeyLstsInDiv(objPage.divName4DataList);
    let objKeyLst;
    let strKeyLst = '';
    strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refGCVariablePrjIdRela_Edit.value.btnGCVariablePrjIdRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refGCVariablePrjIdRela_Edit.value.btnGCVariablePrjIdRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refGCVariablePrjIdRela_Edit.value.btnGCVariablePrjIdRela_Edit_Click(
          strCommandName,
          strKeyLst,
        );
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyLsts.length == 0) {
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
        if (arrKeyLsts.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objKeyLst = GCVariablePrjIdRela_SplitKeyLst(strKeyId);
        objPage.btnDelRecordInTab_Click(objKeyLst.varId, objKeyLst.prjId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyLsts.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'GCVariablePrjIdRelaCRUDExEx.btn_Click');

        break;
    }
  }

  public async SetDdl_VarIdInDiv() {
    await GCVariableEx_BindDdl_VarIdInDivCache(
      divVarSet.refDivQuery,
      'ddlVarId_q',
      clsPrivateSessionStorage.currSelPrjId,
    ); //
  }
  public async SetDdl_PrjIdInDiv() {
    await ProjectsEx_BindDdl_PrjIdInDivExCache(divVarSet.refDivQuery, 'ddlPrjId_q'); //
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord_KeyLst(arrKeyLsts: Array<string>) {
    const strThisFuncName = this.DelMultiRecord_KeyLst.name;
    try {
      const returnInt = await GCVariablePrjIdRela_DelRecKeyLstsAsync(arrKeyLsts);
      if (returnInt > 0) {
        GCVariablePrjIdRela_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
        GCVariable_ReFreshCache();
        const strInfo = Format('删除记录成功,共删除{0}条记录!', returnInt);
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('删除记录不成功!');
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // GCVariablePrjIdRelaCRUD.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      // // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      // // 为功能区绑定下拉框
      // await this.BindDdl4FeatureRegion();

      viewVarSet.sortGCVariablePrjIdRelaBy = 'varId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_GCVariablePrjIdRela4Func(divVarSet.refDivList);
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
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'varName|Ex':
        viewVarSet.sortGCVariablePrjIdRelaBy = `GCVariable|varName ${sortDirection}|GCVariablePrjIdRela.VarId = GCVariable.VarId`;
        break;
      case 'varTypeName|Ex':
        viewVarSet.sortGCVariablePrjIdRelaBy = `GCVariable|varTypeName ${sortDirection}|GCVariablePrjIdRela.VarId = GCVariable.VarId,GCVariable.VarTypeId = GCVariableType.VarTypeId`;
        break;
      case 'fldName|Ex':
      case 'fldName':
        viewVarSet.sortGCVariablePrjIdRelaBy = `vFieldTab_Sim|fldName ${sortDirection}|GCVariablePrjIdRela.FldId = vFieldTab_Sim.FldId`;
        break;
      case 'dataTypeName|Ex':
        viewVarSet.sortGCVariablePrjIdRelaBy = `GCVariable|dataTypeName ${sortDirection}|GCVariablePrjIdRela.VarId = GCVariable.VarId,GCVariable.DataTypeId = DataTypeAbbr.DataTypeId`;
        break;
      case 'typeScriptType|Ex':
        viewVarSet.sortGCVariablePrjIdRelaBy = `GCVariable|typeScriptType ${sortDirection}|GCVariablePrjIdRela.VarId = GCVariable.VarId,GCVariable.DataTypeId = DataTypeAbbr.DataTypeId`;
        break;
      case 'prjName|Ex':
        viewVarSet.sortGCVariablePrjIdRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortGCVariablePrjIdRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_GCVariablePrjIdRela4Func(this.thisDivList);
  }
}
