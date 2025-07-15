import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import {
  vFunction4GeneCode_Sim_GetObjLstCache,
  vFunction4GeneCode_Sim_ReFreshThisCache,
  vFunction4GeneCode_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import { clsvFunction4GeneCode_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimENEx';
import { BindDdl_ObjLstInDiv_V, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vFunction4GeneCode_SimEx_Controller = 'vFunction4GeneCode_SimExApi';
export const vFunction4GeneCode_SimEx_ConstructorName = 'vFunction4GeneCode_SimEx';
/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvFunction4GeneCode_SimENS:源对象
 * @returns 目标对象=>clsvFunction4GeneCode_SimEN:objvFunction4GeneCode_SimENT
 **/
export function vFunction4GeneCode_SimEx_CopyToEx(
  objvFunction4GeneCode_SimENS: clsvFunction4GeneCode_SimEN,
): clsvFunction4GeneCode_SimENEx {
  const strThisFuncName = vFunction4GeneCode_SimEx_CopyToEx.name;
  const objvFunction4GeneCode_SimENT = new clsvFunction4GeneCode_SimENEx();
  try {
    ObjectAssign(objvFunction4GeneCode_SimENT, objvFunction4GeneCode_SimENS);
    return objvFunction4GeneCode_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFunction4GeneCode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvFunction4GeneCode_SimENT;
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
export function vFunction4GeneCode_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vFunction4GeneCode_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vFunction4GeneCode_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strCodeTypeId:代码类型Id
 */
export async function vFunction4GeneCode_SimEx_BindDdl_FuncId4GCByFuncCodeTypeIdInDivCache(
  strDivName: string,
  strDdlName: string,
  strCodeTypeId: string,
) {
  // const strThisFuncName = 'Function4GeneCodeEx_BindDdl_FuncId4GCByCodeTypeIdInDivCache';

  if (IsNullOrEmpty(strCodeTypeId) == true) {
    const strMsg = Format('参数:[strCodeTypeId]不能为空！(In BindDdl_FuncId4GCByCodeTypeIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeTypeId.length != 4) {
    const strMsg = Format('缓存分类变量:[strCodeTypeId]的长度:[{0}]不正确！', strCodeTypeId.length);
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在！(In BindDdl_FuncId4GCByCodeTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncId4GCByCodeTypeIdInDivCache");
  let arrObjLst_Sel = await vFunction4GeneCode_Sim_GetObjLstCache();
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel
    .filter((x) => x.funcCodeTypeId == strCodeTypeId)
    .sort(vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'));
  BindDdl_ObjLstInDiv_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvFunction4GeneCode_SimEN.con_FuncId4GC,
    clsvFunction4GeneCode_SimEN.con_FuncName,
    '函数4GeneCode',
  );
}

/**
 * 根据FuncId4GC获取对象，并且把UsedTimes加1
 * (AGC.BusinessLogicEx.clsFunction4GeneCodeBLEx:GeneCodeV2)
 * @param strFuncId4GC: 函数Id4Code
 * @param strPrjId: 工程Id
 * @returns 获取的相应对象列表
 */
export async function vFunction4GeneCode_SimEx_GetObjByFuncId4GCEx(
  strFuncId4GC: string,
): Promise<clsvFunction4GeneCode_SimEN> {
  const strThisFuncName = vFunction4GeneCode_SimEx_GetObjByFuncId4GCEx.name;
  const strAction = 'GetObjByFuncId4GCEx';
  const strUrl = GetWebApiUrl(vFunction4GeneCode_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4GC,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      //console.log(returnObj);
      return returnObj;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunction4GeneCode_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strFuncId4GC:所给的关键字
 * @returns 对象
 */
export async function vFunction4GeneCode_SimEx_GetObjByFuncId4GCCacheEx(
  strFuncId4GC: string,

  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncId4GCCacheEx';

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFunction4GeneCode_SimWApi.GetObjByFuncId4GCCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFunction4GeneCode_SimWApi.GetObjByFuncId4GCCache)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFunction4GeneCode_SimObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();

  try {
    const arrvFunction4GeneCode_SimSel = arrvFunction4GeneCode_SimObjLstCache.filter(
      (x) => x.funcId4Code == strFuncId4GC,
    );
    let objvFunction4GeneCode_Sim: clsvFunction4GeneCode_SimEN;
    if (arrvFunction4GeneCode_SimSel.length > 0) {
      objvFunction4GeneCode_Sim = arrvFunction4GeneCode_SimSel[0];
      return objvFunction4GeneCode_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFunction4GeneCode_SimConst = await vFunction4GeneCode_SimEx_GetObjByFuncId4GCEx(
          strFuncId4GC,
        );
        if (objvFunction4GeneCode_SimConst != null) {
          vFunction4GeneCode_Sim_ReFreshThisCache();
          return objvFunction4GeneCode_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4GC,
      vFunction4GeneCode_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-10-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vFunction4GeneCode_SimEx_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvFunction4GeneCode_SimEN.con_FuncId4GC) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFunction4GeneCode_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFunction4GeneCode_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncId4GC = strInValue;
  if (IsNullOrEmpty(strFuncId4GC) == true) {
    return '';
  }
  const objvFunction4GeneCode_Sim = await vFunction4GeneCode_SimEx_GetObjByFuncId4GCCacheEx(
    strFuncId4GC,
  );
  if (objvFunction4GeneCode_Sim == null) return '';
  if (objvFunction4GeneCode_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvFunction4GeneCode_Sim.GetFldValue(strOutFldName).toString();
}
