// import $ from 'jquery';
import { ExcelExportRegionFlds_Edit } from '@/viewsBase/RegionManage/ExcelExportRegionFlds_Edit';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';

import {
  ExcelExportRegionFlds_AddNewRecordAsync,
  ExcelExportRegionFlds_AddNewRecordWithReturnKeyAsync,
  ExcelExportRegionFlds_CheckProperty4Update,
  ExcelExportRegionFlds_CheckPropertyNew,
  ExcelExportRegionFlds_GetObjBymIdAsync,
  ExcelExportRegionFlds_ReFreshCache,
  ExcelExportRegionFlds_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsExcelExportRegionFldsWApi';
import { PrjTabFld_ReFreshCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';

import {
  ExcelExportRegionFldsEx_CheckRegionFldsUp,
  ExcelExportRegionFldsEx_ImportExtendFld,
} from '@/ts/L3ForWApiEx/RegionManage/clsExcelExportRegionFldsExWApi';
import { vFieldTab_SimEx_BindDdl_FldId4ExtendInDivExCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  divVarSet,
  ExcelExportRegionFlds_DeleteKeyIdCache,
  refExcelExportRegionFlds_Edit,
  RegionId_Static,
  TabId_Static,
} from '@/views/RegionManage/ExcelExportRegionFldsVueShare';
/* ExcelExportRegionFlds_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class ExcelExportRegionFlds_EditEx extends ExcelExportRegionFlds_Edit {
  // public strDnPathId = '';
  public static objCMProjects: clsCMProjectEN;
  //public static CmPrjIdCache=  "9991";
  // public static strTabId4Region = '';
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: ExcelExportRegionFlds_EditEx = <ExcelExportRegionFlds_EditEx>(
      ExcelExportRegionFlds_Edit.objPageEdit
    );

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ExcelExportRegionFlds_EditEx.btn_Click');

        break;
    }
  }

  /* 修改记录
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async UpdateRecordSave() {
    const prjTabFldStore = usePrjTabFldStore();
    const viewInfoStore = useviewInfoStore();
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    const viewRegionStore = useviewRegionStore();
    //this.divName = "divUpdateRecordSave";
    const objExcelExportRegionFldsEN =
      await refExcelExportRegionFlds_Edit.value.GetEditDataExcelExportRegionFldsObj();
    objExcelExportRegionFldsEN.SetmId(Number(this.keyId));
    objExcelExportRegionFldsEN.sfUpdFldSetStr = objExcelExportRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objExcelExportRegionFldsEN.mId == 0 || objExcelExportRegionFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      ExcelExportRegionFlds_CheckProperty4Update(objExcelExportRegionFldsEN);
    } catch (e: any) {
      const strMsg = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const returnBool = await ExcelExportRegionFlds_UpdateRecordAsync(objExcelExportRegionFldsEN);
      let bolResult = false;
      if (returnBool == true) {
        await ExcelExportRegionFldsEx_CheckRegionFldsUp(
          objExcelExportRegionFldsEN.regionId,
          clsPrivateSessionStorage.cmPrjId,
          objExcelExportRegionFldsEN.updUser,
        );
        viewInfoStore.delObjByRegionId(objExcelExportRegionFldsEN.regionId);
        viewRegionStore.delObj(objExcelExportRegionFldsEN.regionId);
        ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
        ExcelExportRegionFlds_DeleteKeyIdCache(objExcelExportRegionFldsEN.regionId, this.keyId);
        if (IsNullOrEmpty(objExcelExportRegionFldsEN.outFldId) == false) {
          bolResult = await ExcelExportRegionFldsEx_ImportExtendFld(
            objExcelExportRegionFldsEN.mId,
            clsPrivateSessionStorage.currSelPrjId,
            clsPubLocalStorage.userId,
          );
          if (bolResult == true) {
            //FieldTab_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
            vFieldTab_Sim2Store.delObj(objExcelExportRegionFldsEN.outFldId);
            PrjTabFld_ReFreshCache(TabId_Static.value);
            prjTabFldStore.delObjLstByTabId(TabId_Static.value);
          }
        }
      }
      return returnBool;
    } catch (e: any) {
      const strMsg = `修改记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSaveB1() {
    //this.divName = "divAddNewRecordSave";
    const strThisFuncName = this.AddNewRecordSaveB1.name;
    let objExcelExportRegionFldsEN;
    try {
      objExcelExportRegionFldsEN =
        await refExcelExportRegionFlds_Edit.value.GetEditDataExcelExportRegionFldsObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }

    try {
      ExcelExportRegionFlds_CheckPropertyNew(objExcelExportRegionFldsEN);
    } catch (e: any) {
      const strMsg = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const returnBool = await ExcelExportRegionFlds_AddNewRecordAsync(objExcelExportRegionFldsEN);

      if (returnBool == true) {
        ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      const strMsg = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }
  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngmId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitExcelExportRegionFlds = '确认修改';
    //this.btnCancel_ExcelExportRegionFlds = "取消修改";
    this.keyId = lngmId;
    try {
      const objExcelExportRegionFldsEN = await ExcelExportRegionFlds_GetObjBymIdAsync(lngmId);
      if (objExcelExportRegionFldsEN == null) return false;

      // await this.GetDataFromExcelExportRegionFldsClass(objExcelExportRegionFldsEN);
      await refExcelExportRegionFlds_Edit.value.ShowDataFromExcelExportRegionFldsObj(
        objExcelExportRegionFldsEN,
      );
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

  /** 添加新记录，保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const prjTabFldStore = usePrjTabFldStore();
    let objExcelExportRegionFldsEN;
    try {
      objExcelExportRegionFldsEN =
        await refExcelExportRegionFlds_Edit.value.GetEditDataExcelExportRegionFldsObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }

    try {
      ExcelExportRegionFlds_CheckPropertyNew(objExcelExportRegionFldsEN);
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
      const bolIsExistCond_RegionId_FldId_OutDataNodeId = await this.CheckUniCond4Add(
        objExcelExportRegionFldsEN,
      );
      if (bolIsExistCond_RegionId_FldId_OutDataNodeId == false) {
        return false;
      }
      let bolResult = false;
      const returnKey = await ExcelExportRegionFlds_AddNewRecordWithReturnKeyAsync(
        objExcelExportRegionFldsEN,
      );
      if (IsNullOrEmpty(returnKey) == false) {
        ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
        bolResult = await ExcelExportRegionFldsEx_ImportExtendFld(
          Number(returnKey),
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );
        if (bolResult == true) {
          //FieldTab_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);

          PrjTabFld_ReFreshCache(TabId_Static.value);
          prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        }
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return bolResult; //一定要有一个返回值，否则会出错！
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
  public async SetDdl_OutFldIdInDivEx(strTabId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vFieldTab_SimEx_BindDdl_FldId4ExtendInDivExCache(
      divVarSet.refDivEdit,
      'ddlOutFldId',
      strTabId,
    ); //编辑区域
  }
}
