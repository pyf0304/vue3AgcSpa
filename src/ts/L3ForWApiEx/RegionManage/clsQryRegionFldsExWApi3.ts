import { useviewRegionStore } from '@/store/modules/viewRegion';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';
import { clsQryRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx';
import { clsQryRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx4GC';
import { GetControlGroup_Asp_Query } from '@/ts/L2BLL/GeneCSharp/clsASPControlGroupBLEx2';
import { clsFeatureRegionFldsBLEx } from '@/ts/L2BLL/RegionManage/clsFeatureRegionFldsBLEx';
import { CtlType_GetObjByCtlTypeIdCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { QryRegionFlds_GetObjLstCache } from '@/ts/L3ForWApi/RegionManage/clsQryRegionFldsWApi';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

import { QryRegionFldsEx_CopyToEx } from '@/ts/L3ForWApiEx/RegionManage/clsQryRegionFldsExWApi2';
import { vFieldTab_SimEx_CopyToEx } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { vPrjTab_SimEx_GetNameByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { ObjectAssignV2 } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const qryRegionFldsEx_Controller = 'QryRegionFldsExApi';
export const qryRegionFldsEx_ConstructorName = 'qryRegionFldsEx';

export async function QryRegionFldsEx_GetControlGroup(strRegionId: string, strPrjId: string) {
  const strThisFuncName = QryRegionFldsEx_GetControlGroup.name;
  const viewRegionStore = useviewRegionStore();
  //console.log("1进入：GetControlGroup:");
  const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
  if (objProject == null) {
    const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', strPrjId);
    console.error(strMsg);
    alert(strMsg);
    return;
  }
  const objViewRegion = await viewRegionStore.getObj(strRegionId);
  if (objViewRegion == null) {
    const strMsg = Format(
      '在项目:[{0}]中，区域Id:[{1}]没有相应区域，请检查！',
      objProject.prjName,
      strRegionId,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }

  //console.log("1objViewRegion:", objViewRegion);
  //Func<clsQryRegionFldsENEx4GC, ASPControlGroupEx> GetControlGroup_Asp4MultiModel = obj => clsASPControlGroupBLEx.GetControlGroup_Asp(obj, strItemName4MultiModel);
  const arrQryRegionFlds: Array<clsQryRegionFldsENEx4GC> =
    await QryRegionFldsEx_GetObjEx4GCLstByRegionIdCacheEx(strRegionId);
  //for (let objInFor of arrQryRegionFlds) {
  //    await objInFor.getIsForExtendClass();
  //}
  //console.log("1arrQryRegionFlds:", arrQryRegionFlds);
  const strItemName4MultiModel = '';

  let arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrQryRegionFlds
    .filter((x) => x.inUse == true)
    .sort((x, y) => x.seqNum - y.seqNum)
    .map((x) => GetControlGroup_Asp_Query(x, strItemName4MultiModel));
  //console.log("1arrASPControlGroupObjLst:", arrASPControlGroupObjLst);
  //把查询按钮加进来
  //ASPControlGroupEx objASPControlGroup = clsASPControlGroupBLEx.GetbtnQuery();
  //Array<ASPControlGroupEx> arrButtonObjLst = new Array<ASPControlGroupEx>();
  //arrButtonObjLst.push(objASPControlGroup);

  const arrFeatureRegionFldsObjLst = await clsFeatureRegionFldsBLEx.GetObjEx4GCLstByRegionIdEx(
    strRegionId,
  ); //  objViewInfoENEx.arrFeatureRegionFlds;
  if (arrFeatureRegionFldsObjLst == undefined) {
    const strMsg = Format(
      '在项目:[{0}]中，区域Id:[{1}]没有功能字段列表，请检查！',
      clsPrivateSessionStorage.currSelPrjName,
      strRegionId,
    );
    console.error(strMsg);
    alert(strMsg);

    return;
  }
  //console.log("1arrFeatureRegionFldsObjLst:", arrFeatureRegionFldsObjLst);
  if (arrFeatureRegionFldsObjLst == null) {
    const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(
      objViewRegion.tabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    const strMsg = `界面功能区为空，请添加界面功能！表名:${strTabName}. (In ${qryRegionFldsEx_ConstructorName}.${strThisFuncName})`;
    throw new Error(strMsg);
  }
  //Func < clsFeatureRegionFldsENEx4GC, ASPControlGroupEx > GetButtonGroupV2 = obj => clsFeatureRegionFldsBLEx.GetButtonGroup(obj, bolIs4PureHtml);
  const bolIs4PureHtml = true;
  const arrButtonGroupLst: Array<ASPControlGroupEx> = await arrFeatureRegionFldsObjLst
    .filter((x) => x.regionId == strRegionId)
    .map((obj) => clsFeatureRegionFldsBLEx.GetButtonGroup(obj, bolIs4PureHtml));
  //console.log("1arrButtonGroupLst:", arrButtonGroupLst);
  //arrASPControlGroupObjLst = arrASPControlGroupObjLst.Union(arrButtonObjLst);

  arrASPControlGroupObjLst = arrASPControlGroupObjLst.concat(arrButtonGroupLst);
  //console.log("1arrASPControlGroupObjLst:", arrASPControlGroupObjLst);
  return arrASPControlGroupObjLst;
}

/// <summary>
/// 根据区域Id获取相关
/// </summary>
/// <param name="strRegionId"></param>
/// <param name="strPrjId"></param>
/// <returns></returns>
export async function QryRegionFldsEx_GetObjEx4GCLstByRegionIdCacheEx(strRegionId: string) {
  let arrObjENExArray: Array<clsQryRegionFldsENEx4GC> = new Array<clsQryRegionFldsENEx4GC>();
  const arrObjList: Array<clsQryRegionFldsEN> =
    await QryRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);

  arrObjENExArray = arrObjList.map(QryRegionFldsEx_CopyToEx4GC);
  for (const objQryRegionFldsEx of arrObjENExArray) {
    if (IsNullOrEmpty(objQryRegionFldsEx.fldId) == true) continue;
    const conFieldTab0 = await vFieldTab_Sim_GetObjByFldIdCache(
      objQryRegionFldsEx.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );

    if (conFieldTab0 == null) {
      const strMsg = `fldId:[${objQryRegionFldsEx.fldId}] 在表FieldTab中不存在！`;
      throw Error(strMsg);
    }
    const conFieldTab = vFieldTab_SimEx_CopyToEx(conFieldTab0);
    objQryRegionFldsEx.objFieldTabENEx = vFieldTab_SimEx_CopyToEx(conFieldTab);

    const conCtlTypeAbbr = await CtlType_GetObjByCtlTypeIdCache(objQryRegionFldsEx.ctlTypeId);
    if (conCtlTypeAbbr == null) {
      const strMsg = `ctlTypeId:[${objQryRegionFldsEx.ctlTypeId}] 在表ctlTypeAbbr中不存在！`;
      throw Error(strMsg);
    }
    objQryRegionFldsEx.objCtlTypeAbbr = conCtlTypeAbbr;
  }
  //console.log("1转换后：arrObjENExArray", arrObjENExArray);

  return arrObjENExArray;
}

/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "strRegionId">所给的关键字</param>
/// <param name = "strPrjId">工程Id</param>
/// <returns>根据关键字获取的对象</returns>
export async function QryRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId: string) {
  //初始化列表缓存
  const arrObjLstCache: Array<clsQryRegionFldsEN> = await QryRegionFlds_GetObjLstCache(strRegionId);

  const arrQryRegionFldsObjLst_Sel1: Array<clsQryRegionFldsEN> = arrObjLstCache
    .filter((x) => x.regionId == strRegionId && x.inUse == true)
    .sort((x) => x.seqNum);
  return arrQryRegionFldsObjLst_Sel1;
}
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objQryRegionFldsENS">源对象</param>
/// <param name = "objQryRegionFldsENT">目标对象</param>
export function QryRegionFldsEx_CopyToEx4GC(
  objQryRegionFldsENS: clsQryRegionFldsEN,
): clsQryRegionFldsENEx4GC {
  const objQryRegionFldsENT = new clsQryRegionFldsENEx4GC();
  try {
    ObjectAssignV2(objQryRegionFldsENT, objQryRegionFldsENS);
    return objQryRegionFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objQryRegionFldsENT;
  }
}

export async function QryRegionFldsEx_GetObjExLstByRegionIdCache(strRegionId: string) {
  let arrObjENExArray: Array<clsQryRegionFldsENEx> = new Array<clsQryRegionFldsENEx>();
  const arrObjList: Array<clsQryRegionFldsEN> =
    await QryRegionFldsEx_GetObjLstByRegionIdCache4InUseEx(strRegionId);

  arrObjENExArray = arrObjList.map(QryRegionFldsEx_CopyToEx);

  return arrObjENExArray;
}
