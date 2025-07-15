/**
 * 类名:clsvFunction4Code_Func4GcCountExWApi
 * 表名:vFunction4Code_Func4GcCount(00050626)
 * 版本:2023.07.18.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/27 22:53:01
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vFunction4Code_Func4GcCount(vFunction4Code_Func4GcCount)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年07月27日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vFunction4Code_Func4GcCount_GetObjLstAsync,
  vFunction4Code_Func4GcCount_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_Func4GcCountWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvFunction4Code_Func4GcCountEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_Func4GcCountEN';
import { clsvFunction4Code_Func4GcCountENEx } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_Func4GcCountENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const vFunction4Code_Func4GcCountExController = 'vFunction4Code_Func4GcCountExApi';
export const vFunction4Code_Func4GcCountEx_ConstructorName = 'vFunction4Code_Func4GcCountEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vFunction4Code_Func4GcCountEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objvFunction4Code_Func4GcCountENS:源对象
 * @returns 目标对象=>clsvFunction4Code_Func4GcCountEN:objvFunction4Code_Func4GcCountENT
 **/
export function vFunction4Code_Func4GcCountEx_CopyToEx(
  objvFunction4Code_Func4GcCountENS: clsvFunction4Code_Func4GcCountEN,
): clsvFunction4Code_Func4GcCountENEx {
  const strThisFuncName = vFunction4Code_Func4GcCountEx_CopyToEx.name;
  const objvFunction4Code_Func4GcCountENT = new clsvFunction4Code_Func4GcCountENEx();
  try {
    ObjectAssign(objvFunction4Code_Func4GcCountENT, objvFunction4Code_Func4GcCountENS);
    return objvFunction4Code_Func4GcCountENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFunction4Code_Func4GcCountEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvFunction4Code_Func4GcCountENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vFunction4Code_Func4GcCountEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFunction4Code_Func4GcCountENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvFunction4Code_Func4GcCountObjLst = await vFunction4Code_Func4GcCount_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrvFunction4Code_Func4GcCountExObjLst = arrvFunction4Code_Func4GcCountObjLst.map(
    vFunction4Code_Func4GcCountEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvFunction4Code_Func4GcCountEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvFunction4Code_Func4GcCountExObjLst) {
      await vFunction4Code_Func4GcCountEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvFunction4Code_Func4GcCountExObjLst.length == 0)
    return arrvFunction4Code_Func4GcCountExObjLst;
  let arrvFunction4Code_Func4GcCountSel: Array<clsvFunction4Code_Func4GcCountENEx> =
    arrvFunction4Code_Func4GcCountExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFunction4Code_Func4GcCountSel = arrvFunction4Code_Func4GcCountSel.sort(
        vFunction4Code_Func4GcCountEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFunction4Code_Func4GcCountSel = arrvFunction4Code_Func4GcCountSel.sort(
        objPagerPara.sortFun,
      );
    }

    return arrvFunction4Code_Func4GcCountSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFunction4Code_Func4GcCountEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunction4Code_Func4GcCountENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4Code_Func4GcCountEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vFunction4Code_Func4GcCount_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vFunction4Code_Func4GcCount_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vFunction4Code_Func4GcCountEx_FuncMapByFldName(
  strFldName: string,
  objvFunction4Code_Func4GcCountEx: clsvFunction4Code_Func4GcCountENEx,
) {
  const strThisFuncName = vFunction4Code_Func4GcCountEx_FuncMapByFldName.name;
  console.log(objvFunction4Code_Func4GcCountEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvFunction4Code_Func4GcCountEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
