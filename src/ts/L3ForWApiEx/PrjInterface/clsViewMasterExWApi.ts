import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsViewMasterEN } from '@/ts/L0Entity/PrjInterface/clsViewMasterEN';
import { clsViewMasterENEx } from '@/ts/L0Entity/PrjInterface/clsViewMasterENEx';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { ViewMaster_SortFunByKey } from '@/ts/L3ForWApi/PrjInterface/clsViewMasterWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const viewMasterEx_Controller = 'ViewMasterExApi';
export const viewMasterEx_ConstructorName = 'viewMasterEx';
/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objViewMasterENS:源对象
 * @returns 目标对象=>clsViewMasterEN:objViewMasterENT
 **/
export function ViewMasterEx_CopyToEx(objViewMasterENS: clsViewMasterEN): clsViewMasterENEx {
  const strThisFuncName = ViewMasterEx_CopyToEx.name;
  const objViewMasterENT = new clsViewMasterENEx();
  try {
    ObjectAssign(objViewMasterENT, objViewMasterENS);
    return objViewMasterENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewMasterENT;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewMasterS:源对象
 **/
export async function ViewMasterEx_FuncMap(objViewMaster: clsViewMasterENEx) {
  const strThisFuncName = ViewMasterEx_FuncMap.name;
  try {
    {
      const ApplicationType_ApplicationTypeId = objViewMaster.applicationTypeId;
      const ApplicationType_ApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationType_ApplicationTypeId.toString(),
      );
      objViewMaster.applicationTypeSimName = ApplicationType_ApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000072)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewMasterEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewMasterENEx.con_ApplicationTypeSimName:
        return (a: clsViewMasterENEx, b: clsViewMasterENEx) => {
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      default:
        return ViewMaster_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewMasterENEx.con_ApplicationTypeSimName:
        return (a: clsViewMasterENEx, b: clsViewMasterENEx) => {
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      default:
        return ViewMaster_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ViewMasterEx_FuncMapByFldName(
  strFldName: string,
  objViewMasterEx: clsViewMasterENEx,
) {
  const strThisFuncName = ViewMasterEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsViewMasterEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewMasterENEx.con_ApplicationTypeSimName:
      return ViewMasterEx_FuncMap_ApplicationTypeSimName(objViewMasterEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objViewMasterS:源对象
 **/
export async function ViewMasterEx_FuncMap_ApplicationTypeSimName(
  objViewMaster: clsViewMasterENEx,
) {
  const strThisFuncName = ViewMasterEx_FuncMap_ApplicationTypeSimName.name;
  try {
    if (IsNullOrEmpty(objViewMaster.applicationTypeSimName) == true) {
      const ApplicationType_ApplicationTypeId = objViewMaster.applicationTypeId;
      const ApplicationType_ApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationType_ApplicationTypeId.toString(),
      );
      objViewMaster.applicationTypeSimName = ApplicationType_ApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000074)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewMasterEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
