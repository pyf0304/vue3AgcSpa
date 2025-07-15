import { clsvPrjTabNumEN } from '@/ts/L0Entity/Table_Field/clsvPrjTabNumEN';
import {
  vPrjTabNum_GetObjByFldIdAsync,
  vPrjTabNum_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjTabNumWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vPrjTabNumEx_Controller = 'vPrjTabNumExApi';
export const vPrjTabNumEx_ConstructorName = 'vPrjTabNumEx';
export let arrvPrjTabNumLst_PrjId: Array<clsvPrjTabNumEN> = [];
export let currPrjId = '';
export async function vPrjTabNumEx_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strTabIdClassfy]不能为空!(In clsvPrjTabNumWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTabIdClassfy]的长度:[{0}]不正确!(clsvPrjTabNumWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvPrjTabNumEN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvPrjTabNumEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvPrjTabNumEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFldId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvPrjTabNum = await vPrjTabNumEx_GetObjByFldIdCache(strFldId, strPrjIdClassfy);
  if (objvPrjTabNum == null) return '';
  if (objvPrjTabNum.GetFldValue(strOutFldName) == null) return '';
  return objvPrjTabNum.GetFldValue(strOutFldName).toString();
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function vPrjTabNumEx_GetObjByFldIdCache(
  strFldId: string,
  strTabId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFldIdCache';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format('参数:[strFldId]不能为空!(In clsvPrjTabNumWApi.GetObjByFldIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvPrjTabNumWApi.GetObjByFldIdCache)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTabNumObjLstCache = await vPrjTabNumEx_GetObjLstCache(strTabId);
  try {
    const arrvPrjTabNumSel = arrvPrjTabNumObjLstCache.filter((x) => x.fldId == strFldId);
    let objvPrjTabNum: clsvPrjTabNumEN;
    if (arrvPrjTabNumSel.length > 0) {
      objvPrjTabNum = arrvPrjTabNumSel[0];
      return objvPrjTabNum;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvPrjTabNumConst = await vPrjTabNum_GetObjByFldIdAsync(strFldId);
        if (objvPrjTabNumConst != null) {
          currPrjId = '';
          return objvPrjTabNumConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldId,
      vPrjTabNumEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabNumEx_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvPrjTabNumEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In clsvPrjTabNumWApi.vPrjTabNum_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确！(clsvPrjTabNumWApi.vPrjTabNum_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const arrvPrjTabNumObjLstCache = await vPrjTabNumEx_GetObjLstsessionStorage(strPrjId);

  return arrvPrjTabNumObjLstCache;
}

/**
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabNumEx_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = `1=1 and ${clsvPrjTabNumEN.con_PrjId} = '${strPrjId}'`;

  const strKey = Format('{0}_{1}', clsvPrjTabNumEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjTabNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (currPrjId == strPrjId) {
    //缓存存在,直接返回

    return arrvPrjTabNumLst_PrjId;
  }
  try {
    arrvPrjTabNumLst_PrjId = await vPrjTabNum_GetObjLstAsync(strWhereCond);
    return arrvPrjTabNumLst_PrjId;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabNumEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}
