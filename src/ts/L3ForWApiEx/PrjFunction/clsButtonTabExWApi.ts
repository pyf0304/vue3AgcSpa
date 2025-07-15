import {
  FeatureButtonRelaEx_GetObjExLstByFuncMap,
  FeatureButtonRelaEx_GetObjLstByFeatureIdCacheEx,
} from './clsFeatureButtonRelaExWApi';

import { clsButtonTabEN } from '@/ts/L0Entity/PrjFunction/clsButtonTabEN';
import { clsButtonTabENEx } from '@/ts/L0Entity/PrjFunction/clsButtonTabENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { clsFeatureRegionFldsENEx4GC } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx4GC';
import { ButtonTab_GetObjByButtonIdCache } from '@/ts/L3ForWApi/PrjFunction/clsButtonTabWApi';

import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { vPrjFeatureSim_GetObjByFeatureIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import { vPrjFeatureSimEx_CopyToEx } from '@/ts/L3ForWApiEx/PrjFunction/clsvPrjFeatureSimExWApi';
export const buttonTabEx_Controller = 'ButtonTabExApi';
export const buttonTabEx_ConstructorName = 'buttonTabEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objButtonTabENS">源对象</param>
/// <param name = "objButtonTabENT">目标对象</param>
export function ButtonTabEx_CopyToEx(objButtonTabENS: clsButtonTabEN): clsButtonTabENEx {
  const objButtonTabENT = new clsButtonTabENEx();
  try {
    ObjectAssign(objButtonTabENT, objButtonTabENS);
    return objButtonTabENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objButtonTabENT;
  }
}
export async function ButtonTabEx_GetObjExLstByFeatureRegionFldsLst(
  arrFeatureRegionFldsENEx: Array<clsFeatureRegionFldsENEx4GC>,
  intAppTypeId: number,
): Promise<Array<clsButtonTabENEx>> {
  const arrButtonTabSet: Array<clsButtonTabENEx> = new Array<clsButtonTabENEx>();
  for (const objInFor of arrFeatureRegionFldsENEx) {
    const arrButtonTabSet_In = await ButtonTabEx_GetObjExLstByFeatureRegionFlds(
      objInFor,
      intAppTypeId,
    );
    if (arrButtonTabSet_In == null) continue;
    for (const x of arrButtonTabSet_In) {
      x.groupName = objInFor.groupName;
      x.keyId = objInFor.viewFeatureId;
      //x.buttonName = string.Format("{0}_{1}", x.buttonName, objInFor.viewFeatureId);//生成Web应用出错
      x.buttonName = Format('btn{0}', x.buttonName, objInFor.viewFeatureId);
      if (IsNullOrEmpty(x.commandName) == true) {
        x.commandName = objInFor.commandName;
        x.buttonName = objInFor.buttonName;
        x.text = objInFor.text;
      }
      x.seqNum = objInFor.seqNum;
      arrButtonTabSet.push(x);
    }
  }
  return arrButtonTabSet;
}

export async function ButtonTabEx_GetObjExLstByFeatureRegionFlds(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
  intAppTypeId: number,
): Promise<Array<clsButtonTabENEx> | null> {
  const arrButtonTabSet: Array<clsButtonTabENEx> = new Array<clsButtonTabENEx>();

  const objPrjFeatureEN = await vPrjFeatureSim_GetObjByFeatureIdCache(
    objFeatureRegionFldsEN.featureId,
  );
  if (objPrjFeatureEN == null) return null;
  const objPrjFeatureENEx = vPrjFeatureSimEx_CopyToEx(objPrjFeatureEN);
  const arrButtonSet = await FeatureButtonRelaEx_GetObjLstByFeatureIdCacheEx(
    intAppTypeId,
    objPrjFeatureEN.featureId,
  );
  objPrjFeatureENEx.buttonSet = await FeatureButtonRelaEx_GetObjExLstByFuncMap(arrButtonSet);
  if (objPrjFeatureENEx.buttonSet == null) {
    let strApplicationTypeName = '';

    const objApplicationType = await ApplicationType_GetObjByApplicationTypeIdCache(intAppTypeId);
    if (objApplicationType == null) strApplicationTypeName = '未知';
    else strApplicationTypeName = objApplicationType.applicationTypeName;

    const strMsg = Format(
      '应用:{0}({1}),功能:{2}({3})没有相关的按钮，请管理员！',
      strApplicationTypeName,
      intAppTypeId,
      objPrjFeatureEN.featureName,
      objPrjFeatureEN.featureId,
    );
    throw strMsg;
  }

  for (const objInFor2 of objPrjFeatureENEx.buttonSet) {
    const objButtonTabEN = await ButtonTab_GetObjByButtonIdCache(objInFor2.buttonId);
    if (objButtonTabEN == null) continue;
    const objButtonTabENEx = ButtonTabEx_CopyToEx(objButtonTabEN);

    objButtonTabENEx.orderNum4Feature = objInFor2.orderNum;
    arrButtonTabSet.push(objButtonTabENEx);
  }
  //arrObjENExList.Add(objPrjFeatureENEx);

  return arrButtonTabSet;
}
