import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { ApplicationType_BindDdl_ApplicationTypeIdByIsVisibleInDivCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import {
  CMProjectEx_BindDdl_CmPrjIdInDivCache,
  CMProjectEx_GetObjLstByPrjIdCache,
} from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubFun } from '@/ts/PubConfig/clsPubFun';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  ApplicationTypeId_Static,
  divVarSet,
  refViewInfo_Edit,
  UserId_Local,
  viewVarSet,
} from '@/views/PrjInterface/ViewInfoVueShare';
import ViewInfo_EditEx from '@/views/PrjInterface/ViewInfo_EditEx';
import { ViewInfoCRUD } from '@/viewsBase/PrjInterface/ViewInfoCRUD';

/** ViewInfoCRUDEx0 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewInfoCRUDEx0 extends ViewInfoCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvViewInfoBy=  "viewId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 20;
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
    console.log(strType, strPara);
    //alert('该类没有绑定该函数：[this.BindGv_vViewInfo]！');
    //this.BindGv_vViewInfo();

    switch (strType) {
      case 'vViewInfo':
      case 'ViewInfo':
        this.BindGv_ViewInfo4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vViewInfo':
      case 'ViewInfo':
        this.BindGv_ViewInfo4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    let objPage: ViewInfoCRUDEx0;
    if (ViewInfoCRUD.objPageCRUD == null) {
      ViewInfoCRUD.objPageCRUD = new ViewInfoCRUDEx0();
      objPage = <ViewInfoCRUDEx0>ViewInfoCRUD.objPageCRUD;
    } else {
      objPage = <ViewInfoCRUDEx0>ViewInfoCRUD.objPageCRUD;
    }

    const objPageEdit = new ViewInfo_EditEx('ViewInfo_EditEx', objPage);
    console.log(objPageEdit);

    let arrKeyIds;
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      // case 'CheckRegionFlds': //查询记录
      //   objPage.btnCheckRegionFlds_Click();
      //   break;
      // case 'SetCmPrjId': //查询记录
      //   objPage.btnSetCmPrjId_Click();
      //   break;
      case 'SetApplicationTypeId': //查询记录
        objPage.btnSetApplicationTypeId_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        // objPageEdit.btnAddNewRecordWithMaxId_Click();
        refViewInfo_Edit.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refViewInfo_Edit.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
        // objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refViewInfo_Edit.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
        //objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        // if (strKeyId == '') {
        //   alert('请选择需要修改的记录！');
        //   return;
        // }
        // objPageEdit.btnUpdateRecord_Click(strKeyId);
        refViewInfo_Edit.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;

      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ViewInfoCRUDEx0.btn_Click');

        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      UserId_Local.value = clsPubLocalStorage.userId;

      let strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      if (IsNullOrEmpty(strCmPrjId) == true) {
        const arrCMProject = await CMProjectEx_GetObjLstByPrjIdCache(
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (arrCMProject.length == 0) {
          const strMsg = Format(
            '工程:{0}没有相关的CM工程！',
            clsPrivateSessionStorage.currSelPrjName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        strCmPrjId = arrCMProject[0].cmPrjId;

        ApplicationTypeId_Static.value = arrCMProject[0].applicationTypeId;
      } else {
        const objCMProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
        if (objCMProject == null) {
          const strMsg = Format('CM项目Id:[{0}]，没有相应的CM项目，请检查！', strCmPrjId);
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        ApplicationTypeId_Static.value = objCMProject.applicationTypeId;
      }

      clsPubFun.SetCommFun4BL();
      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();

      await ApplicationType_BindDdl_ApplicationTypeIdByIsVisibleInDivCache(
        divVarSet.refDivFunction,
        'ddlApplicationTypeId_SetFldValue',
      ); //
      const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
      await CMProjectEx_BindDdl_CmPrjIdInDivCache(
        divVarSet.refDivFunction,
        'ddlCmPrjId_SetFldValue',
        strPrjId,
      ); //

      viewVarSet.sortViewInfoBy = Format('{0} Desc', clsViewInfoEN.con_UpdDate);
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    viewVarSet.sortViewInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
    // ViewInfoCRUD.ascOrDesc4SortFun = sortDirection;
    // ViewInfoCRUD.sortFunStatic = sortFun;
    await this.BindGv_ViewInfo4Func(divVarSet.refDivList);
  }
}
