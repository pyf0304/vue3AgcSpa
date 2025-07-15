/**
* 类名:clsGCKeyIdGetModeExWApi
* 表名:GCKeyIdGetMode(00050562)
* 生成代码版本:2022.03.24.1
* 生成日期:2022/03/30 02:27:58
* 生成者:pyf
* 生成服务器IP:103.116.76.183
工程名称:AGC(0005)
CM工程:AgcSpa前端(变量首字母小写)
* 相关数据库:103.116.76.183,9433AGC_CS12
* PrjDataBaseId:0005
模块中文名:生成代码(GeneCode)
* 框架-层名:WA_访问扩展层(WA_AccessEx)
* 编程语言:TypeScript
* 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
  *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
**/

/**
 * GC关键字获取方式(GCKeyIdGetMode)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年03月30日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  GCKeyIdGetMode_GetObjLstByPagerAsync,
  GCKeyIdGetMode_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsGCKeyIdGetModeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsGCKeyIdGetModeEN } from '@/ts/L0Entity/GeneCode/clsGCKeyIdGetModeEN';
import { clsGCKeyIdGetModeENEx } from '@/ts/L0Entity/GeneCode/clsGCKeyIdGetModeENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const gCKeyIdGetModeEx_Controller = 'GCKeyIdGetModeExApi';
export const gCKeyIdGetModeEx_ConstructorName = 'gCKeyIdGetModeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function GCKeyIdGetModeEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objGCKeyIdGetModeENS:源对象
 * @returns 目标对象=>clsGCKeyIdGetModeEN:objGCKeyIdGetModeENT
 **/
export function GCKeyIdGetModeEx_CopyToEx(
  objGCKeyIdGetModeENS: clsGCKeyIdGetModeEN,
): clsGCKeyIdGetModeENEx {
  const strThisFuncName = GCKeyIdGetModeEx_CopyToEx.name;
  const objGCKeyIdGetModeENT = new clsGCKeyIdGetModeENEx();
  try {
    ObjectAssign(objGCKeyIdGetModeENT, objGCKeyIdGetModeENS);
    return objGCKeyIdGetModeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCKeyIdGetModeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCKeyIdGetModeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GCKeyIdGetModeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCKeyIdGetModeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrGCKeyIdGetModeExObjLst = await GCKeyIdGetMode_GetObjLstByPagerAsync(objPagerPara);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGCKeyIdGetModeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrGCKeyIdGetModeExObjLst) {
      await GCKeyIdGetModeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrGCKeyIdGetModeExObjLst.length == 0) return arrGCKeyIdGetModeExObjLst;
  let arrGCKeyIdGetMode_Sel: Array<clsGCKeyIdGetModeENEx> = arrGCKeyIdGetModeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCKeyIdGetMode_Sel = arrGCKeyIdGetMode_Sel.sort(
        GCKeyIdGetModeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrGCKeyIdGetMode_Sel = arrGCKeyIdGetMode_Sel.sort(objPagerPara.sortFun);
    }

    return arrGCKeyIdGetMode_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCKeyIdGetModeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCKeyIdGetModeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-03-30
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCKeyIdGetModeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return GCKeyIdGetMode_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return GCKeyIdGetMode_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-03-30
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GCKeyIdGetModeEx_FuncMapByFldName(
  strFldName: string,
  objGCKeyIdGetModeEx: clsGCKeyIdGetModeENEx,
) {
  const strThisFuncName = GCKeyIdGetModeEx_FuncMapByFldName.name;
  console.log(objGCKeyIdGetModeEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsGCKeyIdGetModeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
