import { CodeTypeCRUD } from '@/viewsBase/GeneCode/CodeTypeCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import {
  CodeType_GetObjLstByCodeTypeIdLstAsync,
  CodeType_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GeneCode/clsCodeTypeWApi';
import { vCodeType_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { SQLDSType_BindDdl_SqlDsTypeIdInDivCache } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
import { vCodeType_SimEx_BindDdl_GroupNameCache } from '@/ts/L3ForWApiEx/GeneCode/clsvCodeType_SimExWApi';
import { BindDdl_TrueAndFalseInDivObj, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { divVarSet, refCodeType_Edit, viewVarSet } from '@/views/GeneCode/CodeTypeVueShare';
import CodeType_EditEx from '@/views/GeneCode/CodeType_EditEx';

/** CodeTypeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class CodeTypeCRUDEx extends CodeTypeCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvCodeTypeBy=  "codeTypeId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 30;
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
    alert('该类没有绑定该函数：[this.BindGv_vCodeType]！');
    //this.BindGv_vCodeType();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vCodeType':
      case 'CodeType':
        this.BindGv_CodeType4Func(divVarSet.refDivList);
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
    let objPage: CodeTypeCRUDEx;
    if (CodeTypeCRUD.objPageCRUD == null) {
      CodeTypeCRUD.objPageCRUD = new CodeTypeCRUDEx();
      objPage = <CodeTypeCRUDEx>CodeTypeCRUD.objPageCRUD;
    } else {
      objPage = <CodeTypeCRUDEx>CodeTypeCRUD.objPageCRUD;
    }
    const objPageEdit = new CodeType_EditEx('CodeType_EditEx', objPage);
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
        refCodeType_Edit.value.btnCodeType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refCodeType_Edit.value.btnCodeType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refCodeType_Edit.value.btnCodeType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'SetGroupName': //查询记录
        objPage.btnSetGroupName_Click();
        break;
      case 'SetInUse': //查询记录
        objPage.btnSetInUse_Click();
        break;
      case 'SetSqlDsTypeId': //查询记录
        objPage.btnSetSqlDsTypeId_Click();
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
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
        AccessBtnClickDefault(strCommandName, 'CodeTypeCRUDEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      await vCodeType_SimEx_BindDdl_GroupNameCache(
        divVarSet.refDivFunction,
        'ddlGroupName_SetFldValue',
      ); //

      await SQLDSType_BindDdl_SqlDsTypeIdInDivCache(
        divVarSet.refDivFunction,
        'ddlSqlDsTypeId_SetFldValue',
      ); //
      BindDdl_TrueAndFalseInDivObj(divVarSet.refDivFunction, 'ddlInUse_SetFldValue');

      viewVarSet.sortCodeTypeBy = 'frontOrBack Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_CodeType4Func(divVarSet.refDivList);
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

  /** 设置字段值-InUse
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetInUse(arrCodeTypeId: Array<string>, bolInUse: boolean) {
    const strThisFuncName = this.SetInUse.name;
    if (arrCodeTypeId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrCodeTypeObjLst = await CodeType_GetObjLstByCodeTypeIdLstAsync(arrCodeTypeId);
      let intCount = 0;
      for (const objInFor of arrCodeTypeObjLst) {
        const objCodeTypeEN = new clsCodeTypeEN();
        ObjectAssign(objCodeTypeEN, objInFor);
        objCodeTypeEN.SetInUse(bolInUse);
        objCodeTypeEN.SetCodeTypeId(objCodeTypeEN.codeTypeId);
        let returnBool = false;
        try {
          objCodeTypeEN.sfUpdFldSetStr = objCodeTypeEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await CodeType_UpdateRecordAsync(objCodeTypeEN);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          // const strInfo = Format('设置记录成功!');
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      if (intCount > 0) {
        vCodeType_Sim_ReFreshThisCache();
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 设置字段值-InUse
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetInUse_Click() {
    const strThisFuncName = this.btnSetInUse_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const bolInUse: boolean = this.inUse_SetFldValue;
      //console.log('bolInUse=' + bolInUse);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds, bolInUse);
      await this.BindGv_CodeType4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 是否在用 (Used In CombineCondition())
   **/
  public get inUse_SetFldValue(): boolean {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivFunction, 'ddlInUse_SetFldValue');
    if (strValue == undefined) return false;
    else if (strValue == '01') return true;
    else if (strValue == '02') return false;
    else return false;
  }
  /**
   * 是否在用 (Used In CombineCondition())
   **/
  public set inUse_SetFldValue(value: boolean) {
    SetSelectValueByIdInDivObj(
      divVarSet.refDivFunction,
      'ddlInUse_SetFldValue',
      value !== null ? value.toString() : '',
    );
  }
  /** 设置字段值-GroupName
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetGroupName(arrCodeTypeId: Array<string>, strGroupName: string) {
    const strThisFuncName = this.SetGroupName.name;
    if (strGroupName == null || strGroupName == '') {
      const strMsg = '请输入组名(GroupName)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrCodeTypeId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrCodeTypeObjLst = await CodeType_GetObjLstByCodeTypeIdLstAsync(arrCodeTypeId);
      let intCount = 0;
      for (const objInFor of arrCodeTypeObjLst) {
        const objCodeTypeEN = new clsCodeTypeEN();
        ObjectAssign(objCodeTypeEN, objInFor);
        if (IsNullOrEmpty(objCodeTypeEN.groupName) == true) {
          objCodeTypeEN.SetGroupName(strGroupName);
        } else if (objCodeTypeEN.groupName.indexOf(strGroupName) == -1) {
          objCodeTypeEN.SetGroupName(Format('{0},{1}', objCodeTypeEN.groupName, strGroupName));
        } else {
          continue;
        }
        let returnBool = false;
        try {
          objCodeTypeEN.sfUpdFldSetStr = objCodeTypeEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await CodeType_UpdateRecordAsync(objCodeTypeEN);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          // const strInfo = Format('设置记录成功!');
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      if (intCount > 0) {
        vCodeType_Sim_ReFreshThisCache();
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
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
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
