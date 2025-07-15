/**
 * 类名:clsvViewRegionReferNumExWApi
 * 表名:vViewRegionReferNum(00050636)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 10:00:41
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vViewRegionReferNum(vViewRegionReferNum)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { vViewRegionReferNum_SortFunByKey } from '@/ts/L3ForWApi/RegionManage/clsvViewRegionReferNumWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvViewRegionReferNumEN } from '@/ts/L0Entity/RegionManage/clsvViewRegionReferNumEN';
import { clsvViewRegionReferNumENEx } from '@/ts/L0Entity/RegionManage/clsvViewRegionReferNumENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vViewRegionReferNumExController = 'vViewRegionReferNumExApi';
export const vViewRegionReferNumEx_ConstructorName = 'vViewRegionReferNumEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vViewRegionReferNumEx_GetWebApiUrl(
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
 * @param objvViewRegionReferNumENS:源对象
 * @returns 目标对象=>clsvViewRegionReferNumEN:objvViewRegionReferNumENT
 **/
export function vViewRegionReferNumEx_CopyToEx(
  objvViewRegionReferNumENS: clsvViewRegionReferNumEN,
): clsvViewRegionReferNumENEx {
  const strThisFuncName = vViewRegionReferNumEx_CopyToEx.name;
  const objvViewRegionReferNumENT = new clsvViewRegionReferNumENEx();
  try {
    ObjectAssign(objvViewRegionReferNumENT, objvViewRegionReferNumENS);
    return objvViewRegionReferNumENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vViewRegionReferNumEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvViewRegionReferNumENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vViewRegionReferNumEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vViewRegionReferNum_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vViewRegionReferNum_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vViewRegionReferNumEx_FuncMapByFldName(
  strFldName: string,
  objvViewRegionReferNumEx: clsvViewRegionReferNumENEx,
) {
  const strThisFuncName = vViewRegionReferNumEx_FuncMapByFldName.name;
  console.log(objvViewRegionReferNumEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvViewRegionReferNumEN.AttributeName;
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
