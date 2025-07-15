import $ from 'jquery';
import { ViewInfo_Edit } from '@/viewsBase/PrjInterface/ViewInfo_Edit';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import {
  ViewInfo_CheckProperty4Update,
  ViewInfo_GetMaxStrIdByPrefixAsync,
  ViewInfo_ReFreshCache,
  ViewInfo_UpdateRecordAsync,
} from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import {
  vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache,
  vPrjTab_SimEx_BindDdl_TabIdInDivCache,
  vPrjTab_SimEx_GetObjByTabIdCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import {
  divVarSet,
  PrjId_Session,
  refViewInfo_Edit,
  ViewInfo_DeleteKeyIdCache,
} from '@/views/PrjInterface/ViewInfoVueShare';
/** ViewInfo_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewInfo_EditEx extends ViewInfo_Edit {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage = ViewInfo_Edit.GetPageEditObj('ViewInfo_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
        }
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'ViewInfo_EditEx.btn_Click');

        break;
    }
  }

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
 */
  public async btnOKUpd_Click() {
    const strCommandText = this.btnSubmitViewInfo;
    let strMsg = '';

    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
              const returnBool2 = <string>jsonData;
              if (IsNullOrEmpty(returnBool2) == false) {
                // HideDialog();

                if (this.iShowList) {
                  this.iShowList.BindGvCache(clsViewInfoEN._CurrTabName, '');
                } else {
                  console.error('iShowList is null or undefined.');
                }
              }
            });
          } else {
            await this.AddNewRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                // HideDialog();
                if (this.iShowList) this.iShowList.BindGvCache(clsViewInfoEN._CurrTabName, '');
              }
            });
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            let strInfo = returnBool ? '修改成功！' : '修改不成功！';
            strInfo += '(In ViewInfo_U.btnOKUpd_Click)';
            $('#lblResult51').val(strInfo);
            //显示信息框
            console.log(strInfo);
            alert(strInfo);
            if (returnBool == true) {
              // HideDialog();
              if (this.iShowList)
                this.iShowList.BindGvCache(`${clsViewInfoEN._CurrTabName}_Detail`, '');
            }
          });
          break;
        default:
          strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnOKUpd_Click())`;
          alert(strMsg);
          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[outRelaTabId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_OutRelaTabIdInDivEx(strCmPrjId: string, strSqlDsTypeId: string) {
    //const objPrjTabCond: clsPrjTabEN = new clsPrjTabEN();//编辑区域
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vPrjTab_SimEx_BindDdl_TabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlOutRelaTabId',
      strCmPrjId,
      strSqlDsTypeId,
    ); //编辑区域
  }
  /// <summary>
  /// 设置绑定下拉框，针对字段:[inRelaTabId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  /// </summary>
  public async SetDdl_InRelaTabIdInDivEx(strCmPrjId: string, strSqlDsTypeId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vPrjTab_SimEx_BindDdl_TabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlInRelaTabId',
      strCmPrjId,
      strSqlDsTypeId,
    ); //编辑区域
  }
  /**
   * 设置绑定下拉框，针对字段:[mainTabId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdlInDiv_TS4TabFeature)
   **/

  public async SetDdl_MainTabIdInDiv() {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
      divVarSet.refDivEdit,
      'ddlMainTabId',
      clsPrivateSessionStorage.cmPrjId,
    ); //
  }

  /** 为插入记录做准备工作
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
 */
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitViewInfo = '确认添加';
    this.btnCancelViewInfo = '取消添加';
    refViewInfo_Edit.value.Clear();
    // const arrObjLst_Sel = await ViewTypeCodeTabEx_GetObjLstByApplicationTypeIdCache(
    //   ViewInfo_EditEx.applicationTypeIdCache,
    // );

    //wucViewInfoB1.viewId = ViewInfo_GetMaxStrId_S();
  }
  /** 为插入记录做准备工作
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
 */
  public async AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    this.btnSubmitViewInfo = '确认添加';
    this.btnCancelViewInfo = '取消添加';
    refViewInfo_Edit.value.Clear();

    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    refViewInfo_Edit.value.viewId = await ViewInfo_GetMaxStrIdByPrefixAsync(strPrjId);
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strViewId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    const viewInfoStore = useviewInfoStore();
    this.keyId = strViewId;
    try {
      const objViewInfoEN_Const = await viewInfoStore.getObjEN(strViewId);
      if (objViewInfoEN_Const == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }

      const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
        objViewInfoEN_Const.mainTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objPrjTab == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }

      await refViewInfo_Edit.value.ShowDataFromViewInfoObj(objViewInfoEN_Const);
      console.log('完成UpdateRecord!');
      return true;
    } catch (e) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
  /** 修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const objViewInfoEN = await refViewInfo_Edit.value.GetEditDataViewInfoObj();
    objViewInfoEN.SetViewId(this.keyId);
    objViewInfoEN.sfUpdFldSetStr = objViewInfoEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewInfoEN.viewId == '' || objViewInfoEN.viewId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      ViewInfo_CheckProperty4Update(objViewInfoEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Update(objViewInfoEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await ViewInfo_UpdateRecordAsync(objViewInfoEN);
      if (returnBool == true) {
        ViewInfo_ReFreshCache(PrjId_Session.value);
        ViewInfo_DeleteKeyIdCache(PrjId_Session.value, this.keyId);
        const viewInfoStore = useviewInfoStore();
        viewInfoStore.delObj(this.keyId); //删除缓存
      }
      return returnBool;
    } catch (e) {
      const strMsg = Format(
        '修改记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
}
