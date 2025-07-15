// import $ from 'jquery';
import { DetailRegionFlds_Edit } from '@/viewsBase/RegionManage/DetailRegionFlds_Edit';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';

import {
  DetailRegionFlds_AddNewRecordWithReturnKeyAsync,
  DetailRegionFlds_CheckProperty4Update,
  DetailRegionFlds_CheckPropertyNew,
  DetailRegionFlds_GetObjBymIdAsync,
  DetailRegionFlds_ReFreshCache,
  DetailRegionFlds_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsDetailRegionFldsWApi';
import { PrjTabFld_ReFreshCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';

import {
  DetailRegionFldsEx_CheckRegionFldsUp,
  DetailRegionFldsEx_ImportExtendFld,
} from '@/ts/L3ForWApiEx/RegionManage/clsDetailRegionFldsExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import {
  DetailRegionFlds_DeleteKeyIdCache,
  refDetailRegionFlds_Edit,
  RegionId_Static,
  TabId_Static,
} from '@/views/RegionManage/DetailRegionFldsVueShare';

/* DetailRegionFlds_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class DetailRegionFlds_EditEx extends DetailRegionFlds_Edit {
  //public static CmPrjIdCache = "9991";
  // public static strTabId4Region = '';
  public static objCMProjects: clsCMProjectEN;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: DetailRegionFlds_EditEx = <DetailRegionFlds_EditEx>(
      DetailRegionFlds_Edit.objPageEdit
    );

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DetailRegionFlds_EditEx.btn_Click');

        break;
    }
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngmId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitDetailRegionFlds = '确认修改';
    //this.btnCancel_DetailRegionFlds = "取消修改";
    this.keyId = lngmId;
    try {
      const objDetailRegionFldsEN = await DetailRegionFlds_GetObjBymIdAsync(lngmId);
      if (objDetailRegionFldsEN == null) return false;

      await refDetailRegionFlds_Edit.value.ShowDataFromDetailRegionFldsObj(objDetailRegionFldsEN);

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
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    let objDetailRegionFldsEN;
    try {
      objDetailRegionFldsEN = await refDetailRegionFlds_Edit.value.GetEditDataDetailRegionFldsObj();
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
      DetailRegionFlds_CheckPropertyNew(objDetailRegionFldsEN);
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
        objDetailRegionFldsEN,
      );
      if (bolIsExistCond_RegionId_FldId_OutDataNodeId == false) {
        return false;
      }
      let bolResult = false;
      const returnKey = await DetailRegionFlds_AddNewRecordWithReturnKeyAsync(
        objDetailRegionFldsEN,
      );
      if (IsNullOrEmpty(returnKey) == false) {
        DetailRegionFlds_ReFreshCache(RegionId_Static.value);
        bolResult = await DetailRegionFldsEx_ImportExtendFld(
          Number(returnKey),
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );
        if (bolResult == true) {
          //FieldTab_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
          vFieldTab_Sim2Store.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
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

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const prjTabFldStore = usePrjTabFldStore();
    const viewInfoStore = useviewInfoStore();
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    const viewRegionStore = useviewRegionStore();
    const objDetailRegionFldsEN =
      await refDetailRegionFlds_Edit.value.GetEditDataDetailRegionFldsObj();
    objDetailRegionFldsEN.SetmId(Number(this.keyId));
    objDetailRegionFldsEN.sfUpdFldSetStr = objDetailRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objDetailRegionFldsEN.mId == 0 || objDetailRegionFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }

    try {
      DetailRegionFlds_CheckProperty4Update(objDetailRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objDetailRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let bolResult = false;
      const returnBool = await DetailRegionFlds_UpdateRecordAsync(objDetailRegionFldsEN);
      if (returnBool == true) {
        await DetailRegionFldsEx_CheckRegionFldsUp(
          objDetailRegionFldsEN.regionId,
          clsPrivateSessionStorage.cmPrjId,
          objDetailRegionFldsEN.updUser,
        );
        viewInfoStore.delObjByRegionId(objDetailRegionFldsEN.regionId);
        viewRegionStore.delObj(objDetailRegionFldsEN.regionId);
        DetailRegionFlds_ReFreshCache(RegionId_Static.value);
        DetailRegionFlds_DeleteKeyIdCache(objDetailRegionFldsEN.regionId, this.keyId);
        if (IsNullOrEmpty(objDetailRegionFldsEN.outFldId) == false) {
          bolResult = await DetailRegionFldsEx_ImportExtendFld(
            objDetailRegionFldsEN.mId,
            clsPrivateSessionStorage.currSelPrjId,
            clsPubLocalStorage.userId,
          );
          if (bolResult == true) {
            //FieldTab_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);

            vFieldTab_Sim2Store.delObj(objDetailRegionFldsEN.outFldId);
            PrjTabFld_ReFreshCache(TabId_Static.value);
            prjTabFldStore.delObjLstByTabId(TabId_Static.value);
          }
        }
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
  // /// <summary>
  // /// 设置绑定下拉框，针对字段:[fldId]
  // /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
  // /// </summary>
  // public async SetDdl_OutFldIdInDivEx(strTabId: string) {
  //   //定义条件字段
  //   //const strPrjId = "";//定义条件字段
  //   await vFieldTab_SimEx_BindDdl_FldId4ExtendInDivExCache(
  //     divVarSet.refDivEdit,
  //     'ddlOutFldId',
  //     strTabId,
  //   ); //编辑区域
  // }
}
