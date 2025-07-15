import { clsCtlTypeBLEx } from '../GeneCSharp/clsCtlTypeBLEx';
import { clsvViewFeatureFldsBLEx } from './clsvViewFeatureFldsBLEx';
import {
  ViewFeatureFlds_GetObjBymIdAsync,
  ViewFeatureFlds_GetObjBymIdCache,
  ViewFeatureFlds_GetObjLstAsync,
  ViewFeatureFlds_GetObjLstCache,
  ViewFeatureFlds_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsViewFeatureFldsWApi';
import {
  FeatureRegionFlds_GetObjByViewFeatureIdCache,
  FeatureRegionFlds_GetObjLstCache,
} from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { FieldTab_GetObjByFldIdAsync } from '@/ts/L3ForWApi/Table_Field/clsFieldTabWApi';
import { FieldTab4CodeConv_GetObjByFldIdAsync } from '@/ts/L3ForWApi/Table_Field/clsFieldTab4CodeConvWApi';
import { PrjTab_GetFirstIDAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import { CtlType_GetObjByCtlTypeIdCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';

import { DataTypeAbbr_GetObjByDataTypeIdCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';

import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { enumDDLItemsOption } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
import { clsViewInfoENEx4GC } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx4GC';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { enumDataTypeAbbr } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { DataTypeAbbrEx_CopyToEx } from '@/ts/L3ForWApiEx/SysPara/clsDataTypeAbbrExWApi';
import { ViewFeatureFldsEx_CopyToEx } from '@/ts/L3ForWApiEx/RegionManage/clsViewFeatureFldsExWApi';

import { vFieldTab_SimEx_CopyToEx } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { vPrjTab_SimEx_GetNameByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { usevFieldTab_Sim2Store, vFieldTab_SimEx_CopyToEN } from '@/store/modules/vFieldTab_Sim2';
import {
  vFieldTab_Sim_GetNameByFldIdCache,
  vFieldTab_Sim_GetObjByFldIdCache,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { vPrjFeatureSim_GetObjByFeatureIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';

export class clsViewFeatureFldsBLEx {
  /// <summary>
  /// 根据条件获取扩展对象列表
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExLst)
  /// </summary>
  /// <param name = "strCondition">给定条件</param>
  /// <returns>返回扩展对象列表</returns>
  public static async GetObjExLst(strCondition: string) {
    const arrObjExLst = await ViewFeatureFlds_GetObjLstAsync(strCondition);

    return arrObjExLst;
  }

  public static async GetObjExLstByRegionIdCache(strRegionId: string) {
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    const arrFeatureRegionFldsObjLst: Array<clsFeatureRegionFldsEN> =
      await FeatureRegionFlds_GetObjLstCache(strRegionId);
    const arrFeatureRegionFldsObjLst_Sel: Array<clsFeatureRegionFldsEN> =
      arrFeatureRegionFldsObjLst.filter((x) => x.regionId == strRegionId);
    const arrViewFeatureId: Array<string> = arrFeatureRegionFldsObjLst_Sel.map(
      (x) => x.viewFeatureId,
    );
    const arrObjLst0 = await ViewFeatureFlds_GetObjLstCache(strRegionId);
    const arrObjLst = arrObjLst0.map(ViewFeatureFldsEx_CopyToEx);

    const arrObjLst_Sel = arrObjLst.filter((x) => arrViewFeatureId.indexOf(x.viewFeatureId) > -1);
    for (const objInFor of arrObjLst_Sel) {
      const objvFieldTab_Sim = await vFieldTab_Sim2Store.getObj(objInFor.releFldId);
      const objvFieldTab_SimEx = vFieldTab_SimEx_CopyToEN(objvFieldTab_Sim);
      if (objvFieldTab_SimEx != null) {
        objInFor.objvFieldTab_SimENEx = vFieldTab_SimEx_CopyToEx(objvFieldTab_SimEx);
      }

      const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(
        objInFor.objvFieldTab_SimENEx.dataTypeId,
      );
      if (objDataTypeAbbr == null) {
        const strMsg = Format(
          '数据类型Id:[{0}]，没有相应的类型，请检查！',
          objInFor.objvFieldTab_SimENEx.dataTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objDataTypeAbbrEx = DataTypeAbbrEx_CopyToEx(objDataTypeAbbr);
      objInFor.objvFieldTab_SimENEx.objDataTypeAbbr = objDataTypeAbbrEx;
    }
    return arrObjLst_Sel;
  }

  public static async GetObjExLstByViewFeatureId(strViewFeatureId: string) {
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    const strCondition = Format(
      "{0} in (Select {0} From {1} Where {2}='{3}')",
      clsViewFeatureFldsEN.con_ViewFeatureId,
      clsFeatureRegionFldsEN._CurrTabName,
      clsFeatureRegionFldsEN.con_ViewFeatureId,
      strViewFeatureId,
    );

    const arrObjLst = await ViewFeatureFlds_GetObjLstAsync(strCondition);
    const arrObjExLst = arrObjLst.map(ViewFeatureFldsEx_CopyToEx);

    // const strPrjId_p = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);

    for (const objViewFeatureFldsENEx of arrObjExLst) {
      const objvFieldTab_Sim = await vFieldTab_Sim2Store.getObj(objViewFeatureFldsENEx.releFldId);
      const objvFieldTab_SimEx = vFieldTab_SimEx_CopyToEN(objvFieldTab_Sim);
      if (objvFieldTab_SimEx != null) {
        objViewFeatureFldsENEx.objvFieldTab_SimENEx = vFieldTab_SimEx_CopyToEx(objvFieldTab_SimEx);
      }

      //objViewFeatureFldsENEx.objFieldTabENEx = await clsFieldTabBLEx.GetObjExByFldIdCache(objViewFeatureFldsENEx.releFldId, strPrjId);
      const objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(
        objViewFeatureFldsENEx.objvFieldTab_SimENEx.dataTypeId,
      );
      if (objDataTypeAbbr == null) {
        const strMsg = Format(
          '数据类型Id:[{0}]，没有相应的类型，请检查！',
          objViewFeatureFldsENEx.objvFieldTab_SimENEx.dataTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      const objDataTypeAbbrEx = DataTypeAbbrEx_CopyToEx(objDataTypeAbbr);

      objViewFeatureFldsENEx.objvFieldTab_SimENEx.objDataTypeAbbr = objDataTypeAbbrEx;
    }
    return arrObjExLst;
  }

  public static async GetObjLstByViewFeatureIdCache(strViewFeatureId: string, strCmPrjId: string) {
    console.log(strCmPrjId);
    const arrObjLstCache: Array<clsViewFeatureFldsEN> = await ViewFeatureFlds_GetObjLstCache(
      strViewFeatureId,
    );

    const arrObjLst_Sel: Array<clsViewFeatureFldsEN> = arrObjLstCache.filter(
      (x) => x.viewFeatureId == strViewFeatureId,
    );
    return arrObjLst_Sel;
  }
  public static async GetRecNumByViewFeatureIdCache(strViewFeatureId: string) {
    const arrObjLstCache: Array<clsViewFeatureFldsEN> = await ViewFeatureFlds_GetObjLstCache(
      strViewFeatureId,
    );

    const arrObjLst_Sel: Array<clsViewFeatureFldsEN> = arrObjLstCache.filter(
      (x) => x.viewFeatureId == strViewFeatureId,
    );
    return arrObjLst_Sel.length;
  }

  public static async GetObjLstByViewFeatureId(strViewFeatureId: string) {
    const strCondition = Format(
      "{0} in (Select {0} From {1} Where {2}='{3}')",
      clsViewFeatureFldsEN.con_ViewFeatureId,
      clsFeatureRegionFldsEN._CurrTabName,
      clsFeatureRegionFldsEN.con_ViewFeatureId,
      strViewFeatureId,
    );

    const arrObjLst: Array<clsViewFeatureFldsEN> = await ViewFeatureFlds_GetObjLstAsync(
      strCondition,
    );

    return arrObjLst;
  }
  /// <summary>
  /// 获取当前关键字的记录对象,用扩展对象的形式表示.
  /// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_GetObjExByKey)
  /// </summary>
  /// <param name = "lngmId">表关键字</param>
  /// <returns>表扩展对象</returns>
  public static async GetObjExBymId(lngmId: number, strViewFeatureId: string) {
    const objViewFeatureFlds = await ViewFeatureFlds_GetObjBymIdCache(lngmId, strViewFeatureId);
    if (objViewFeatureFlds == null) {
      const strMsg = Format(
        '在项目:[{0}]中，mId:[{1}]没有相应的界面功能字段，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        lngmId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objViewFeatureFldsENEx: clsViewFeatureFldsENEx =
      ViewFeatureFldsEx_CopyToEx(objViewFeatureFlds);
    return objViewFeatureFldsENEx;
  }

  /// <summary>
  /// 功能:设置字段可用，同时设置多条记录。
  /// </summary>
  /// <param name = "arrmIdLst">给定的关键字值列表</param>
  /// <param name = "strUpdUser">给定的关键字值列表</param>
  /// <returns>返回设置可用的记录数</returns>
  public static async SetInUse(arrmIdLst: Array<number>, strUpdUser: string) {
    const strThisFuncName = this.SetInUse.name;
    try {
      let intRecNum = 0;
      for (const strMid of arrmIdLst) {
        const objViewFeatureFlds = await ViewFeatureFlds_GetObjBymIdAsync(strMid);
        if (objViewFeatureFlds == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objViewFeatureFlds.inUse = true;
        objViewFeatureFlds.updUser = strUpdUser;
        objViewFeatureFlds.updDate = clsDateTime.getTodayDateTimeStr(1);
        await ViewFeatureFlds_UpdateRecordAsync(objViewFeatureFlds);
        intRecNum++;
      }
      return intRecNum;
    } catch (objException: any) {
      const strMsg = Format(
        '设置字段可用出错,{2}.({0}.{1})',
        this.prototype.constructor.name,
        strThisFuncName,
        objException,
      );
      throw new Error(strMsg);
    }
  }
  /// <summary>
  /// 功能:设置字段不可用，同时设置多条记录。
  /// </summary>
  /// <param name = "arrmIdLst">给定的关键字值列表</param>
  /// <param name = "strUpdUser">给定的关键字值列表</param>
  /// <returns>返回设置不可用的记录数</returns>
  public static async SetNotInUse(arrmIdLst: Array<number>, strUpdUser: string) {
    const strThisFuncName = this.SetNotInUse.name;
    try {
      let intRecNum = 0;
      for (const strMid of arrmIdLst) {
        const objViewFeatureFlds = await ViewFeatureFlds_GetObjBymIdAsync(strMid);
        if (objViewFeatureFlds == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objViewFeatureFlds.inUse = false;
        objViewFeatureFlds.updUser = strUpdUser;
        objViewFeatureFlds.updDate = clsDateTime.getTodayDateTimeStr(1);
        await ViewFeatureFlds_UpdateRecordAsync(objViewFeatureFlds);
        intRecNum++;
      }
      return intRecNum;
    } catch (objException: any) {
      const strMsg = Format(
        '设置字段不可用出错,{2}.({0}.{1})',
        this.prototype.constructor.name,
        strThisFuncName,
        objException,
      );
      throw new Error(strMsg);
    }
  }

  public static async GetObjByvPrjTabFld2(
    objPrjTabFldEN: clsPrjTabFldEN,
    strViewFeatureId: string,
  ) {
    const strThisFuncName = this.GetObjByvPrjTabFld2.name;
    const strUserId = '';

    const objViewFeatureFlds: clsViewFeatureFldsEN = new clsViewFeatureFldsEN();
    const objFieldTab = await FieldTab_GetObjByFldIdAsync(objPrjTabFldEN.fldId);
    if (objFieldTab == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objFieldTab4CodeConv = await FieldTab4CodeConv_GetObjByFldIdAsync(objPrjTabFldEN.fldId);
    if (objFieldTab4CodeConv == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    objViewFeatureFlds.releFldId = objPrjTabFldEN.fldId;
    objViewFeatureFlds.viewFeatureId = strViewFeatureId;
    objViewFeatureFlds.labelCaption = objFieldTab.caption;
    switch (objFieldTab.dataTypeId) {
      case enumDataTypeAbbr.bit_03:
        objViewFeatureFlds.ctlTypeId = '02';
        break;
      default:
        objViewFeatureFlds.ctlTypeId = '16';
        break;
    }
    const CodeTab = await vPrjTab_SimEx_GetNameByTabIdCache(
      objFieldTab4CodeConv.codeTabId,
      clsPrivateSessionStorage.cmPrjId,
    );
    const CodeTab_Code = await vFieldTab_Sim_GetNameByFldIdCache(
      objFieldTab4CodeConv.codeTabCodeId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    const CodeTab_Name = await vFieldTab_Sim_GetNameByFldIdCache(
      objFieldTab4CodeConv.codeTabNameId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    //判断该字段是否为相关表中的关键字
    if (
      objPrjTabFldEN.fieldTypeId != enumFieldType.KeyField_02 &&
      CodeTab != '' &&
      CodeTab_Code != '' &&
      CodeTab_Name != ''
    ) {
      objViewFeatureFlds.ctlTypeId = '06';
      objViewFeatureFlds.ddlItemsOptionId = '02';
      const strDsTabId = await PrjTab_GetFirstIDAsync(
        `prjId = '${objPrjTabFldEN.prjId}' and tabName = '${CodeTab}'`,
      );
      if (strDsTabId != '') {
        objViewFeatureFlds.dsTabId = strDsTabId;
      }
    } else {
      objViewFeatureFlds.ddlItemsOptionId = '00';
      objViewFeatureFlds.dsTabId = '';
    }
    objViewFeatureFlds.updDate = clsDateTime.getTodayStr(0);
    objViewFeatureFlds.updUser = strUserId;
    objViewFeatureFlds.inUse = true;
    //5、检查传进去的对象属性是否合法
    return objViewFeatureFlds;
  }
  public static async GetObjByvPrjTabFld(objPrjTabFldEN: clsPrjTabFldEN) {
    const strThisFuncName = this.GetObjByvPrjTabFld.name;
    const objViewFeatureFlds: clsViewFeatureFldsEN = new clsViewFeatureFldsEN();

    //2、获取相关主表ID的字段的对象列表;

    if (
      objPrjTabFldEN.primaryTypeId == '02' &&
      objPrjTabFldEN.fieldTypeId == enumFieldType.KeyField_02
    ) {
      return new clsViewFeatureFldsEN();
    }
    const objFieldTab = await FieldTab_GetObjByFldIdAsync(objPrjTabFldEN.fldId);
    if (objFieldTab == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objFieldTab4CodeConv = await FieldTab4CodeConv_GetObjByFldIdAsync(objPrjTabFldEN.fldId);
    if (objFieldTab4CodeConv == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    objViewFeatureFlds.releFldId = objPrjTabFldEN.fldId;
    //objViewFeatureFlds.regionId = strRegionId;
    objViewFeatureFlds.labelCaption = objFieldTab.caption;
    switch (objFieldTab.dataTypeId) {
      case enumDataTypeAbbr.bit_03:
        objViewFeatureFlds.ctlTypeId = '02';
        break;
      default:
        objViewFeatureFlds.ctlTypeId = '16';
        break;
    }
    const CodeTab = await vPrjTab_SimEx_GetNameByTabIdCache(
      objFieldTab4CodeConv.codeTabId,
      clsPrivateSessionStorage.cmPrjId,
    );
    const CodeTab_Code = await vFieldTab_Sim_GetNameByFldIdCache(
      objFieldTab4CodeConv.codeTabCodeId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    const CodeTab_Name = await vFieldTab_Sim_GetNameByFldIdCache(
      objFieldTab4CodeConv.codeTabNameId,
      clsPrivateSessionStorage.currSelPrjId,
    );

    //判断该字段是否为相关表中的关键字
    if (
      objPrjTabFldEN.fieldTypeId != enumFieldType.KeyField_02 &&
      CodeTab != '' &&
      CodeTab_Code != '' &&
      CodeTab_Name != ''
    ) {
      objViewFeatureFlds.ctlTypeId = enumCtlType.DropDownList_06;
      objViewFeatureFlds.ddlItemsOptionId = enumDDLItemsOption.DataSourceTable_02;
      const strDsTabId = await PrjTab_GetFirstIDAsync(
        `prjId = '${objPrjTabFldEN.prjId}' and tabName = '${CodeTab}'`,
      );
      if (strDsTabId != '') {
        objViewFeatureFlds.dsTabId = strDsTabId;
      }
    } else {
      objViewFeatureFlds.ddlItemsOptionId = '00';
      objViewFeatureFlds.dsTabId = '';
    }

    objViewFeatureFlds.updDate = clsDateTime.getTodayStr(0);
    //objViewFeatureFlds.updUser = strUserId;

    //5、检查传进去的对象属性是否合法
    if (objFieldTab.fldName.startsWith('_')) {
      objViewFeatureFlds.inUse = false;
    } else {
      objViewFeatureFlds.inUse = true;
    }

    return objViewFeatureFlds;
  }

  public static async initViewFeatureFlds(objViewInfoENEx: clsViewInfoENEx4GC) {
    const arrvViewFeatureFlds = await clsvViewFeatureFldsBLEx.GetObjExLstByViewIdCache(
      objViewInfoENEx.viewId,
    );
    if (arrvViewFeatureFlds == null) {
      const strMsg = Format(
        '在项目:[{0}]中，界面Id:[{1}]没有相应的功能字段，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        objViewInfoENEx.viewId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    objViewInfoENEx.arrvViewFeatureFlds;
    for (const objViewFeatureFldsEx of objViewInfoENEx.arrvViewFeatureFlds) {
      const obj = await CtlType_GetObjByCtlTypeIdCache(objViewFeatureFldsEx.ctlTypeId);
      if (obj != null) {
        objViewFeatureFldsEx.objCtlType = obj;
      }
    }
  }

  public static async GetObjExLstByRegionId(strRegionId: string) {
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    const strCondition = Format(
      '{0} in (Select {0} From {1} where {2}={3})',
      clsViewFeatureFldsEN.con_ViewFeatureId,
      clsFeatureRegionFldsEN._CurrTabName,
      clsFeatureRegionFldsEN.con_RegionId,
      strRegionId,
    );

    const arrObjLst0 = await ViewFeatureFlds_GetObjLstAsync(strCondition);
    const arrObjLst = arrObjLst0.map(ViewFeatureFldsEx_CopyToEx);

    // const strPrjId_p = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);

    for (const objViewFeatureFldsENEx of arrObjLst) {
      const objvFieldTab_Sim = await vFieldTab_Sim2Store.getObj(objViewFeatureFldsENEx.releFldId);
      const objvFieldTab_SimEx = vFieldTab_SimEx_CopyToEN(objvFieldTab_Sim);
      if (objvFieldTab_SimEx != null) {
        objViewFeatureFldsENEx.objvFieldTab_SimENEx = vFieldTab_SimEx_CopyToEx(objvFieldTab_SimEx);
      }

      const objCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objViewFeatureFldsENEx.ctlTypeId);
      if (objCtlTypeAbbr == null) {
        const strMsg = Format(
          '控件类型Id:[{0}]，没有相应的控件类型，请检查！',
          objViewFeatureFldsENEx.ctlTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objViewFeatureFldsENEx.objCtlType = objCtlTypeAbbr;
    }
    return arrObjLst;
  }
  public static async GetObjLstByRegionIdCache(strRegionId: string, strCmPrjId: string) {
    const arrFeatureRegionFlds = await FeatureRegionFlds_GetObjLstCache(strRegionId);
    console.log(strCmPrjId);
    const arrViewFeatureId: Array<string> = arrFeatureRegionFlds
      .filter((x) => x.regionId == strRegionId)
      .map((x) => x.viewFeatureId);
    const arrViewFeatureFlds = await ViewFeatureFlds_GetObjLstCache(strRegionId);
    const arrObjLst_Sel = arrViewFeatureFlds.filter(
      (x) => arrViewFeatureId.indexOf(x.viewFeatureId) > -1,
    );
    return arrObjLst_Sel;
  }

  public static async GetCtrlId(objViewFeatureFlds: clsViewFeatureFldsEN) {
    if (IsNullOrEmpty(objViewFeatureFlds.releFldId)) return '';
    if (IsNullOrEmpty(objViewFeatureFlds.ctlTypeId)) return '';
    const objFeatureRegionFlds = await FeatureRegionFlds_GetObjByViewFeatureIdCache(
      objViewFeatureFlds.viewFeatureId,
      objViewFeatureFlds.viewFeatureId,
    );
    if (objFeatureRegionFlds == null) {
      const strMsg = Format(
        '在项目:[{0}]中，界面功能Id:[{1}]没有相应功能，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        objViewFeatureFlds.viewFeatureId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(
      objFeatureRegionFlds.featureId,
    );
    if (objPrjFeature == null) {
      const strMsg = Format(
        '功能Id(featureId):[{0}]没有相应功能，请检查！',
        objFeatureRegionFlds.featureId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strFldId = objViewFeatureFlds.releFldId;
    const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
      strFldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFieldTab == null) {
      const strMsg = Format(
        '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        strFldId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    let strCtrlId;
    switch (objPrjFeature.featureName) {
      case '设置字段值':
        strCtrlId = await clsCtlTypeBLEx.GetCtrlId(
          objViewFeatureFlds.ctlTypeId,
          objFieldTab.fldName,
        );
        return Format('{0}', strCtrlId);

      case '复制记录':
        return '';
      case '调整记录次序':
      case '移顶':
      case '上移':
      case '下移':
      case '移底':
      case '重序':
        return Format(
          '{0}_OrderNum',
          clsCtlTypeBLEx.GetCtrlId(objViewFeatureFlds.ctlTypeId, objFieldTab.fldName),
        );

      default:
        return '';
    }
  }
}
