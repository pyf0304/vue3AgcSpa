import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import { clsvFunction4Code_Sim } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_Sim';
import { clsvFunction4Code_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_SimEN';
import { clsvFunction4Code_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_SimENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vFunction4Code_Sim_GetObjLstCache,
  vFunction4Code_Sim_ReFreshThisCache,
} from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_SimWApi';

export const vFunction4Code_SimEx_Controller = 'vFunction4Code_SimExApi';
export const vFunction4Code_SimEx_ConstructorName = 'vFunction4Code_SimEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvFunction4Code_SimENS:源对象
 * @returns 目标对象=>clsvFunction4Code_SimEN:objvFunction4Code_SimENT
 **/
export function vFunction4Code_SimEx_CopyToEx(
  objvFunction4Code_SimENS: clsvFunction4Code_SimEN,
): clsvFunction4Code_SimENEx {
  const strThisFuncName = vFunction4Code_SimEx_CopyToEx.name;
  const objvFunction4Code_SimENT = new clsvFunction4Code_SimENEx();
  try {
    ObjectAssign(objvFunction4Code_SimENT, objvFunction4Code_SimENS);
    return objvFunction4Code_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFunction4Code_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvFunction4Code_SimENT;
  }
}

export function vFunction4Code_SimEx_CopyTo(
  objvFunction4Code_SimENS: clsvFunction4Code_SimEN,
): clsvFunction4Code_Sim {
  const strThisFuncName = vFunction4Code_SimEx_CopyTo.name;
  const objvFunction4Code_SimENT = new clsvFunction4Code_Sim();
  try {
    ObjectAssign(objvFunction4Code_SimENT, objvFunction4Code_SimENS);
    return objvFunction4Code_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFunction4Code_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvFunction4Code_SimENT;
  }
}

/**
 * 根据FuncId4Code获取对象，并且把UsedTimes加1
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strFuncId4Code: 函数Id4Code
 * @param strPrjId: 工程Id
 * @returns 获取的相应对象列表
 */
export async function vFunction4Code_SimEx_GetObjByFuncId4CodeEx(
  strFuncId4Code: string,
): Promise<clsvFunction4Code_SimEN> {
  const strThisFuncName = vFunction4Code_SimEx_GetObjByFuncId4CodeEx.name;
  const strAction = 'GetObjByFuncId4CodeEx';
  const strUrl = GetWebApiUrl(vFunction4Code_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
        vFunction4Code_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunction4Code_SimEx_ConstructorName,
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
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFunction4Code_SimEx_GetObjByFuncId4CodeCacheEx(
  strFuncId4Code: string,

  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncId4CodeCacheEx';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFunction4Code_SimWApi.GetObjByFuncId4CodeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFunction4Code_SimWApi.GetObjByFuncId4CodeCache)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstCache();
  try {
    const arrvFunction4Code_SimSel = arrvFunction4Code_SimObjLstCache.filter(
      (x) => x.funcId4Code == strFuncId4Code,
    );
    let objvFunction4Code_Sim: clsvFunction4Code_SimEN;
    if (arrvFunction4Code_SimSel.length > 0) {
      objvFunction4Code_Sim = arrvFunction4Code_SimSel[0];
      return objvFunction4Code_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFunction4Code_SimConst = await vFunction4Code_SimEx_GetObjByFuncId4CodeEx(
          strFuncId4Code,
        );
        if (objvFunction4Code_SimConst != null) {
          vFunction4Code_Sim_ReFreshThisCache();
          return objvFunction4Code_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4Code,
      vFunction4Code_SimEx_ConstructorName,
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
export async function vFunction4Code_SimEx_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvFunction4Code_SimEN.con_FuncId4Code) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFunction4Code_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFunction4Code_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncId4Code = strInValue;
  if (IsNullOrEmpty(strFuncId4Code) == true) {
    return '';
  }
  const objvFunction4Code_Sim = await vFunction4Code_SimEx_GetObjByFuncId4CodeCacheEx(
    strFuncId4Code,
  );
  if (objvFunction4Code_Sim == null) return '';
  if (objvFunction4Code_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvFunction4Code_Sim.GetFldValue(strOutFldName).toString();
}
