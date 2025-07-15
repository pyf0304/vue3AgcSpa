/**
* 类名:ViewRegionRelaCRUDEx(界面:ViewRegionRelaCRUD)
* 表名:ViewRegionRela(00050573)
* 生成代码版本:2022.03.19.1
* 生成日期:2022/03/21 00:02:21
* 生成者:
工程名称:AGC(0005)
CM工程:AgcSpa前端(变量首字母小写)
* 相关数据库:103.116.76.183,9433AGC_CS12
* PrjDataBaseId:0005
* 模块中文名:区域管理(RegionManage)
* 框架-层名:WA_界面后台Ex_TS(WA_ViewScriptCSEx_TS)
* 编程语言:TypeScript
**/
import { ViewRegionRelaCRUD } from '@/viewsBase/RegionManage/ViewRegionRelaCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { clsViewRegionRelaENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ViewRegionRelaEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { ViewRegionEx_BindDdl_RegionIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import {
  viewVarSet,
  qryVarSet,
  divVarSet,
  refViewRegionRela_Edit,
  refViewRegionRela_Detail,
} from '@/views/RegionManage/ViewRegionRelaVueShare';
import ViewRegionRela_EditEx from '@/views/RegionManage/ViewRegionRela_EditEx';
//import $ from "jquery";
/** ViewRegionRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class ViewRegionRelaCRUDEx extends ViewRegionRelaCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortViewRegionRelaBy = "mId";
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
    console.log('InitVarSet in ViewInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ViewInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_ViewRegionRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'ViewRegionRela':
        alert('该类没有绑定该函数：[this.BindGv_ViewRegionRela4Func]！');
        //this.BindGv_ViewRegionRela4Func();
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
    let objPage: ViewRegionRelaCRUDEx;
    if (ViewRegionRelaCRUD.objPageCRUD == null) {
      ViewRegionRelaCRUD.objPageCRUD = new ViewRegionRelaCRUDEx();
      objPage = <ViewRegionRelaCRUDEx>ViewRegionRelaCRUD.objPageCRUD;
    } else {
      objPage = <ViewRegionRelaCRUDEx>ViewRegionRelaCRUD.objPageCRUD;
    }
    const objPageEdit = new ViewRegionRela_EditEx('ViewRegionRela_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refViewRegionRela_Edit.value.btnViewRegionRela_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refViewRegionRela_Edit.value.btnViewRegionRela_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refViewRegionRela_Detail.value.btnViewRegionRela_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refViewRegionRela_Edit.value.btnViewRegionRela_Edit_Click(strCommandName, strKeyId);
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
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
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ViewRegionRelaCRUDEx.btn_Click');

        break;
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineViewRegionRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and PrjId ='{0}'", clsPrivateSessionStorage.currSelPrjId);
    strWhereCond += Format(
      " and RegionId in (Select RegionId from ViewRegionCmPrjIdRela where CmPrjId='{0}')",
      clsPrivateSessionStorage.cmPrjId,
    );

    try {
      if (qryVarSet.viewId_q != '' && qryVarSet.viewId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsViewRegionRelaEN.con_ViewId,
          qryVarSet.viewId_q,
        );
      }
      if (qryVarSet.regionId_q != '' && qryVarSet.regionId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsViewRegionRelaEN.con_RegionId,
          qryVarSet.regionId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineViewRegionRelaCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrViewRegionRelaExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrViewRegionRelaExObjLst: Array<clsViewRegionRelaENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsViewRegionRelaEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrViewRegionRelaExObjLst) {
        objInFor.prjId = clsPrivateSessionStorage.currSelPrjId;
        await ViewRegionRelaEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // const strThisFuncName = this.BindDdl4QueryRegion.name;
    // 在此处放置用户代码以初始化页面
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

    // await this.SetDdl_ViewIdInDiv(strPrjId); //查询区域

    await this.SetDdl_RegionIdInDivEx(strPrjId, strCmPrjId); //查询区域
  }
  public async SetDdl_RegionIdInDivEx(PrjId: string, CmPrjId: string) {
    await ViewRegionEx_BindDdl_RegionIdByCmPrjIdInDivCache(
      divVarSet.refDivQuery,
      'ddlRegionId_q',
      CmPrjId,
    ); //
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    viewVarSet.sortViewRegionRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
    await this.BindGv_ViewRegionRela4Func(divVarSet.refDivList);
  }
}
