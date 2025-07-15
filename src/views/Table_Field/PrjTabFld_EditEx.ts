//import * as $ from "jquery";
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { enumPrimaryType } from '@/ts/L0Entity/Table_Field/clsPrimaryTypeEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { PrjTabFld_Edit } from '@/viewsBase/Table_Field/PrjTabFld_Edit';

import {
  PrjTabFld_AddNewRecordAsync,
  PrjTabFld_CheckProperty4Update,
  PrjTabFld_CheckPropertyNew,
  PrjTabFld_ReFreshCache,
  PrjTabFld_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
import {
  PrjTabFldEx_CheckTabFldsUp,
  PrjTabFldEx_GetRecNumByTabIdCache,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { vDnPath_Sim_GetObjByDnPathIdCache } from '@/ts/L3ForWApi/AIModule/clsvDnPath_SimWApi';
import {
  vDnPath_SimEx_CopyToEx,
  vDnPath_SimEx_FuncMap_InFldId,
  vDnPath_SimEx_FuncMap_OutFldId,
} from '@/ts/L3ForWApiEx/AIModule/clsvDnPath_SimExWApi';
import { enumFldOperationType } from '@/ts/L0Entity/Table_Field/clsFldOperationTypeEN';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import { divVarSet, refPrjTabFld_Edit, TabId_Static } from '@/views/Table_Field/PrjTabFldVueShare';
import {
  vFieldTab_Sim_GetObjByFldIdCache,
  vFieldTab_Sim_ReFreshThisCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { PrjTabEx_SetUpdDate } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
/* PrjTabFld_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjTabFld_EditEx extends PrjTabFld_Edit {
  public static FldId = '';
  public static DnPathId_Static = ''; //定义下拉框条件变量2
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: PrjTabFld_EditEx = <PrjTabFld_EditEx>(
      PrjTabFld_Edit.GetPageEditObj('PrjTabFld_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabFld_EditEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjPrjTabFldEN.js">表实体类对象</param>
   **/
  public async GetBakDataFromPrjTabFldClass(pobjPrjTabFldEN: clsPrjTabFldEN) {
    // const strThisFuncName = this.GetDataFromPrjTabFldClass.name;
    //this.tabId = pobjPrjTabFldEN.tabId;// 表ID
    this.fldId = pobjPrjTabFldEN.fldId; // 字段Id
    const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
      pobjPrjTabFldEN.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvFieldTab_Sim != null) {
      SetLabelHtmlByIdInDivObj(
        divVarSet.refDivEdit,
        'lblFldName',
        Format('{0}({1})', objvFieldTab_Sim.fldName, objvFieldTab_Sim.fldId),
      );
    }
    refPrjTabFld_Edit.value.fieldTypeId = pobjPrjTabFldEN.fieldTypeId; // 字段类型
    // this.ddlFieldTypeId_OnChange();
    if (refPrjTabFld_Edit.value.fieldTypeId == enumFieldType.KeyField_02) {
      refPrjTabFld_Edit.value.primaryTypeId = pobjPrjTabFldEN.primaryTypeId; // 主键类型
    }
    refPrjTabFld_Edit.value.isTabNullable = pobjPrjTabFldEN.isTabNullable; // 是否表中可空
    refPrjTabFld_Edit.value.isTabForeignKey = pobjPrjTabFldEN.isTabForeignKey; // 是否表外键
    refPrjTabFld_Edit.value.isGeneProp = pobjPrjTabFldEN.isGeneProp; // 是否生成属性
    try {
      refPrjTabFld_Edit.value.foreignKeyTabId = pobjPrjTabFldEN.foreignKeyTabId; // 外键表ID
    } catch (e) {}

    refPrjTabFld_Edit.value.fldOpTypeId = pobjPrjTabFldEN.fldOpTypeId; // 操作类型
    refPrjTabFld_Edit.value.sequenceNumber = pobjPrjTabFldEN.sequenceNumber; // 顺序号
    refPrjTabFld_Edit.value.isParentObj = pobjPrjTabFldEN.isParentObj; // 是否父对象
    //this.memoInTab = pobjPrjTabFldEN.memoInTab;// 表说明
    refPrjTabFld_Edit.value.memo = pobjPrjTabFldEN.memo; // 说明
  }

  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjPrjTabFldEN.js">数据传输的目的类对象</param>
   **/
  public async PutDataToPrjTabFldClassV2(pobjPrjTabFldEN: clsPrjTabFldEN) {
    const strThisFuncName = this.PutDataToPrjTabFldClassV2.name;
    const objDnPath = await vDnPath_Sim_GetObjByDnPathIdCache(
      PrjTabFld_EditEx.DnPathId_Static,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDnPath == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      throw strMsg;
      //return;
    }
    const objDnPathEx = vDnPath_SimEx_CopyToEx(objDnPath);
    await vDnPath_SimEx_FuncMap_OutFldId(objDnPathEx);
    await vDnPath_SimEx_FuncMap_InFldId(objDnPathEx);

    pobjPrjTabFldEN.SetTabId(TabId_Static.value); // 表ID
    pobjPrjTabFldEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 表ID

    pobjPrjTabFldEN.SetFldId(objDnPathEx.outFldId); // 字段Id
    pobjPrjTabFldEN.SetInFldId(objDnPathEx.inFldId); // 字段Id
    pobjPrjTabFldEN.SetDnPathId(objDnPath.dnPathId); // 字段Id

    pobjPrjTabFldEN.SetFieldTypeId(enumFieldType.NormalField_01); // 字段类型
    pobjPrjTabFldEN.SetPrimaryTypeId(enumPrimaryType.NonPrimaryKey_00);

    pobjPrjTabFldEN.SetIsTabNullable(true); // 是否表中可空
    pobjPrjTabFldEN.SetIsTabForeignKey(false); // 是否表外键
    pobjPrjTabFldEN.SetIsGeneProp(true); // 是否生成属性
    pobjPrjTabFldEN.SetForeignKeyTabId('[null]'); // 外键表ID
    pobjPrjTabFldEN.SetFldOpTypeId(enumFldOperationType.ReadWrite_0001); // 操作类型
    const intRecNum = await PrjTabFldEx_GetRecNumByTabIdCache(TabId_Static.value);

    pobjPrjTabFldEN.SetSequenceNumber(intRecNum + 1); // 顺序号
    pobjPrjTabFldEN.SetIsParentObj(false); // 是否父对象
    pobjPrjTabFldEN.SetIsForExtendClass(true); // 是否父对象

    pobjPrjTabFldEN.SetMemoInTab(''); //this.memoInTab);// 表说明
    pobjPrjTabFldEN.SetMemo('通过路径来添加'); // 说明
    pobjPrjTabFldEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjPrjTabFldEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
  }
  /**
   * 字段Id (Used In Clear())
   **/
  public set fldId(value: string) {
    PrjTabFld_EditEx.FldId = value;
  }
  /**
   * 字段Id (Used In PutDataToClass())
   **/
  public get fldId(): string {
    const strValue = PrjTabFld_EditEx.FldId;
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const prjTabFldStore = usePrjTabFldStore();

    const objPrjTabFldEN = await refPrjTabFld_Edit.value.GetEditDataPrjTabFldObj();
    objPrjTabFldEN.SetmId(Number(this.keyId));
    objPrjTabFldEN.sfUpdFldSetStr = objPrjTabFldEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPrjTabFldEN.mId == 0 || objPrjTabFldEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }

    try {
      PrjTabFld_CheckProperty4Update(objPrjTabFldEN);
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
      //检查唯一性条件
      const bolIsExistCond_TabId_FldId = await this.CheckUniCond4Update(objPrjTabFldEN);
      if (bolIsExistCond_TabId_FldId == false) {
        return false;
      }
      const returnBool = await PrjTabFld_UpdateRecordAsync(objPrjTabFldEN);
      if (returnBool == true) {
        await PrjTabFldEx_CheckTabFldsUp(
          objPrjTabFldEN.tabId,
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );

        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
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

  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnCreateFldByDnPath_Click(strDnPathId: string, strTabId: string) {
    //alert(strTabId + ":" + strFldId);
    const prjTabFldStore = usePrjTabFldStore();
    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('参数：[strTabId]为空，不正确！');
        return;
      }
      if (IsNullOrEmpty(strDnPathId) == true) {
        alert('参数：[strDnPathId]为空，不正确！');
        return;
      }
      PrjTabFld_EditEx.DnPathId_Static = strDnPathId;
      TabId_Static.value = strTabId;
      const returnBool = await this.AddNewRecordSaveV2();
      if (returnBool == true) {
        PrjTabFld_ReFreshCache(strTabId);
        prjTabFldStore.delObjLstByTabId(strTabId);
        vFieldTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        await PrjTabEx_SetUpdDate(strTabId, clsPrivateSessionStorage.userId);
        if (this.iShowList)
          this.iShowList.BindGvCache(clsPrjTabFldEN._CurrTabName, returnBool.toString());
      }
    } catch (e: any) {
      const strMsg = `添加新记录初始化不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 添加新记录，保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSaveV2(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSaveV2.name;
    const prjTabFldStore = usePrjTabFldStore();
    const objPrjTabFldEN = new clsPrjTabFldEN();
    try {
      await this.PutDataToPrjTabFldClassV2(objPrjTabFldEN);
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
      PrjTabFld_CheckPropertyNew(objPrjTabFldEN);
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
      //检查唯一性条件
      const bolIsExistCond_TabId_FldId = await this.CheckUniCond4Add(objPrjTabFldEN);
      if (bolIsExistCond_TabId_FldId == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await PrjTabFld_AddNewRecordAsync(objPrjTabFldEN);
      if (returnBool == true) {
        PrjTabFld_ReFreshCache(objPrjTabFldEN.tabId);
        prjTabFldStore.delObjLstByTabId(objPrjTabFldEN.tabId);
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
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
