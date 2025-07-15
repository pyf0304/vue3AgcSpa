/**
 * 类名:CmProjectPrjTab_EditEx(界面:CmProjectPrjTabCRUD)
 * 表名:CMProjectPrjTab(00050530)
 * 生成代码版本:2022.01.04.1
 * 生成日期:2022/01/04 11:08:43
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * prjDataBaseId:0005
 * 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_编辑区后台Ex_TS(WA_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/

// import $ from 'jquery';
import { clsCmProjectPrjTabEN } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  CmProjectPrjTab_AddNewRecordAsync,
  CmProjectPrjTab_CheckProperty4Update,
  CmProjectPrjTab_CheckPropertyNew,
  CmProjectPrjTab_UpdateRecordAsync,
} from '@/ts/L3ForWApi/CodeMan/clsCmProjectPrjTabWApi';
import { CmProjectPrjTab_Edit } from '@/viewsBase/CodeMan/CmProjectPrjTab_Edit';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { vCmProjectPrjTab_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/CodeMan/clsvCmProjectPrjTab_SimWApi';

/* CmProjectPrjTab_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class CmProjectPrjTab_EditEx extends CmProjectPrjTab_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    // const strThisFuncName = this.btnEdit_Click.name;
    const objPage = CmProjectPrjTab_Edit.GetPageEditObj('CmProjectPrjTab_Edit');
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
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPage.btnUpdateRecordInTab_Click(strKeyId);
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'CmProjectPrjTab_EditEx.btn_Click');

        break;
    }
  }

  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjCMProjectPrjTabEN.js">数据传输的目的类对象</param>
   **/
  public async PutBakDataToCMProjectPrjTabClassV2(
    pobjCMProjectPrjTabEN: clsCmProjectPrjTabEN,
    strTabId: string,
  ) {
    // const strThisFuncName = this.PutDataToCMProjectPrjTabClass.name;

    pobjCMProjectPrjTabEN.SetTabId(strTabId); // 表
    pobjCMProjectPrjTabEN.SetOrderNum(1); // 序号
    pobjCMProjectPrjTabEN.SetCmPrjId(clsPrivateSessionStorage.cmPrjId); // 工程ID
    pobjCMProjectPrjTabEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjCMProjectPrjTabEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
    pobjCMProjectPrjTabEN.SetMemo(''); // 说明
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSaveV2(strCmPrjId: string, strTabId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const objCMProjectPrjTabEN = new clsCmProjectPrjTabEN();
    objCMProjectPrjTabEN.SetmId(Number(this.keyId));
    await this.PutBakDataToCMProjectPrjTabClassV2(objCMProjectPrjTabEN, strTabId);
    objCMProjectPrjTabEN.sfUpdFldSetStr = objCMProjectPrjTabEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objCMProjectPrjTabEN.mId == 0 || objCMProjectPrjTabEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      CmProjectPrjTab_CheckProperty4Update(objCMProjectPrjTabEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const returnBool = await CmProjectPrjTab_UpdateRecordAsync(objCMProjectPrjTabEN);

      if (returnBool == true) {
        vCmProjectPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
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

  /** 添加新记录，保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSaveV2(strCmPrjId: string, strTabId: string): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objCMProjectPrjTabEN = new clsCmProjectPrjTabEN();
    try {
      await this.PutBakDataToCMProjectPrjTabClassV2(objCMProjectPrjTabEN, strTabId);
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      CmProjectPrjTab_CheckPropertyNew(objCMProjectPrjTabEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const returnBool = await CmProjectPrjTab_AddNewRecordAsync(objCMProjectPrjTabEN);
      if (returnBool == true) {
        vCmProjectPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }
}
