// import $ from 'jquery';
import { clsUserCodePathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePathEN';
import { ProgLangType_BindDdl_ProgLangTypeIdByIsVisibleInDivCache } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import {
  UserCodePathEx_FuncMapByFldName,
  UserCodePathEx_SetGCPath,
} from '@/ts/L3ForWApiEx/SystemSet/clsUserCodePathExWApi';
import {
  CheckControlExistInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  GetSelectedIndexInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_TrueAndFalse } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { UserCodePathCRUD } from '@/viewsBase/SystemSet/UserCodePathCRUD';
import { clsUserCodePathENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePathENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { CMProjectEx_BindDdl_CmPrjIdInDivCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import {
  divVarSet,
  PrjId_Session,
  qryVarSet,
  refUserCodePath_Edit,
  viewVarSet,
} from '@/views/SystemSet/UserCodePathVueShare';
import UserCodePath_EditEx from '@/views/SystemSet/UserCodePath_EditEx';

/** UserCodePathCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class UserCodePathCRUDEx extends UserCodePathCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortUserCodePathBy = "mId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 15;
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
    this.BindGv_UserCodePath4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'UserCodePath':
        alert('该类没有绑定该函数：[this.BindGv_UserCodePathCache]！');
        //this.BindGv_UserCodePathCache();
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
    let objPage: UserCodePathCRUDEx;
    if (UserCodePathCRUD.objPageCRUD == null) {
      UserCodePathCRUD.objPageCRUD = new UserCodePathCRUDEx();
      objPage = <UserCodePathCRUDEx>UserCodePathCRUD.objPageCRUD;
    } else {
      objPage = <UserCodePathCRUDEx>UserCodePathCRUD.objPageCRUD;
    }
    const objPageEdit = new UserCodePath_EditEx('UserCodePath_EditEx', objPage);
    console.log(objPageEdit);
    const strMsg = '';
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
        refUserCodePath_Edit.value.btnUserCodePath_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refUserCodePath_Edit.value.btnUserCodePath_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refUserCodePath_Edit.value.btnUserCodePath_Edit_Click(strCommandName, strKeyId);
        break;
      case 'SetGCPath': //查询记录
        objPage.btnSetGCPath_Click();
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
        //objPage.btnExportExcel_Click();
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
        AccessBtnClickDefault(strCommandName, 'UserCodePathCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   **/
  public async PageLoadCache() {
    // 在此处放置用户代码以初始化页面
    try {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;

      //UserCodePath_Edit.ProgLangTypeId_Static =
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      viewVarSet.sortUserCodePathBy = 'IsGeneCode Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_UserCodePath4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = Format('页面启动不成功,{0}.', e);
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    const strPrjId = PrjId_Session.value; //定义条件字段
    if (strPrjId == '9991') {
      const strMsg = Format("PrjId_Session.value='9991'，还没有被赋正确的值,请检查!");
      throw strMsg;
    }
    await this.SetDdl_CmPrjId(strPrjId); //查询区域
    // await this.SetDdl_ApplicationTypeIdInDiv(); //查询区域
    //let strProgLangTypeId = "";  //定义条件字段
    //const ddlCodeTypeId_q = await this.SetDdl_CodeTypeId(strProgLangTypeId);//查询区域
    await this.SetDdl_ProgLangTypeId(); //查询区域
    await this.SetDdl_UserCodePrjMainPathId(clsPrivateSessionStorage.cmPrjId); //查询区域
    BindDdl_TrueAndFalse('ddlIsTemplate_q');
  }

  public async btnSetGCPath_Click() {
    try {
      const strOpUserId = clsPubLocalStorage.userId;
      const intCount = await UserCodePathEx_SetGCPath(strOpUserId);

      await this.BindGv_UserCodePath4Func(divVarSet.refDivList);
      const strMsg = Format('共设置了:{0}记录.', intCount);

      alert(strMsg);
    } catch (e: any) {
      const strMsg = Format('设置GC路径不成功,{0}.', e);
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineUserCodePathConditionObj(): Promise<clsUserCodePathEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objUserCodePath_Cond = new clsUserCodePathEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      // if (this.cmPrjId_q != '' && this.cmPrjId_q != '0') {
      //   const arrUserCodePrjMainPathId =
      //     await UserCodePrjMainPathEx_GetUserCodePrjMainPathIdLstByCmPrjIdCache(
      //       this.cmPrjId_q,
      //       PrjId_Session.value,
      //     );
      //   const strUserCodePrjMainPathIdLst = arrUserCodePrjMainPathId.join(',');
      //   strWhereCond += Format(
      //     ' And {0} = ({1})',
      //     clsUserCodePathEN.con_UserCodePrjMainPathId,
      //     strUserCodePrjMainPathIdLst,
      //   );
      //   objUserCodePath_Cond.SetCondFldValue(
      //     clsUserCodePathEN.con_UserCodePrjMainPathId,
      //     strUserCodePrjMainPathIdLst,
      //     'in',
      //   );
      // }

      if (qryVarSet.codeTypeId_q != '' && qryVarSet.codeTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsUserCodePathEN.con_CodeTypeId,
          qryVarSet.codeTypeId_q,
        );
        objUserCodePath_Cond.SetCondFldValue(
          clsUserCodePathEN.con_CodeTypeId,
          qryVarSet.codeTypeId_q,
          '=',
        );
      }
      //if (this.ProgLangTypeId_q != "" && this.ProgLangTypeId_q != "0") {
      //    strWhereCond += Format(" And {0} = '{1}'", clsUserCodePathEN.con_ProgLangTypeId, this.ProgLangTypeId_q);
      //    objUserCodePath_Cond.SetCondFldValue(clsUserCodePathEN.con_ProgLangTypeId, this.ProgLangTypeId_q, "=");
      //}
      //if (this.userCodePrjMainPathId_q != "" && this.userCodePrjMainPathId_q != "0") {
      //    strWhereCond += Format(" And {0} = '{1}'", clsUserCodePathEN.con_UserCodePrjMainPathId, this.userCodePrjMainPathId_q);
      //    objUserCodePath_Cond.SetCondFldValue(clsUserCodePathEN.con_UserCodePrjMainPathId, this.userCodePrjMainPathId_q, "=");
      //}
      if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsTemplate_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsUserCodePathEN.con_IsTemplate);
        objUserCodePath_Cond.SetCondFldValue(clsUserCodePathEN.con_IsTemplate, true, '=');
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsTemplate_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsUserCodePathEN.con_IsTemplate);
        objUserCodePath_Cond.SetCondFldValue(clsUserCodePathEN.con_IsTemplate, false, '=');
      }
    } catch (objException: any) {
      const strMsg = Format(
        '(errid:WiTsCs0010)在组合查询条件对象(CombineUserCodePathConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objUserCodePath_Cond.whereCond = strWhereCond;
    return objUserCodePath_Cond;
  }

  public async SetDdl_UserCodePrjMainPathId(strCmPrjId: string) {
    //定义条件字段
    console.log('strCmPrjId', strCmPrjId);
    //const strPrjId = "";//定义条件字段
    // await UserCodePrjMainPathEx_BindDdl_UserCodePrjMainPathIdCache(
    //   'ddlUserCodePrjMainPathId_q',
    //   strCmPrjId,
    // ); //查询区域
  }

  /**
   * CM工程Id (Used In CombineCondition())
   **/
  public get cmPrjId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlCmPrjId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * CM工程Id (Used In CombineCondition())
   **/
  public set cmPrjId_q(value: string) {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'select', 'ddlCmPrjId_q');
    const strId = 'ddlCmPrjId_q';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 设置绑定下拉框，针对字段:[cmPrjId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
   */
  public async SetDdl_CmPrjId(strPrjId: string) {
    await CMProjectEx_BindDdl_CmPrjIdInDivCache(divVarSet.refDivQuery, 'ddlCmPrjId_q', strPrjId); //查询区域
  }
  /**
   * 设置绑定下拉框，针对字段:[progLangTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion)
   */
  public async SetDdl_ProgLangTypeId() {
    await ProgLangType_BindDdl_ProgLangTypeIdByIsVisibleInDivCache(
      divVarSet.refDivQuery,
      'ddlProgLangTypeId_q',
    ); //查询区域
  }
  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrUserCodePathExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrUserCodePathExObjLst: Array<clsUserCodePathENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsUserCodePathEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrUserCodePathExObjLst) {
        // objInFor.userId = clsPubLocalStorage.userId;
        await UserCodePathEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
