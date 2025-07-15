/**
 * 类名:clsvPrjConstraint_SimExWApi
 * 表名:vPrjConstraint_Sim(00050638)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/06 07:36:49
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vPrjConstraint_Sim(vPrjConstraint_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年02月06日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vPrjConstraint_Sim_GetObjLstCache,
  vPrjConstraint_Sim_GetObjLstByPagerAsync,
  vPrjConstraint_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjConstraint_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvPrjConstraint_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjConstraint_SimEN';
import { clsvPrjConstraint_SimENEx } from '@/ts/L0Entity/Table_Field/clsvPrjConstraint_SimENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ConstraintType_func } from '@/ts/L3ForWApi/Table_Field/clsConstraintTypeWApi';
import { clsConstraintTypeEN } from '@/ts/L0Entity/Table_Field/clsConstraintTypeEN';

export const vPrjConstraint_SimExController = 'vPrjConstraint_SimExApi';
export const vPrjConstraint_SimEx_ConstructorName = 'vPrjConstraint_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vPrjConstraint_SimEx_GetWebApiUrl(
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
 * @param objvPrjConstraint_SimENS:源对象
 * @returns 目标对象=>clsvPrjConstraint_SimEN:objvPrjConstraint_SimENT
 **/
export function vPrjConstraint_SimEx_CopyToEx(
  objvPrjConstraint_SimENS: clsvPrjConstraint_SimEN,
): clsvPrjConstraint_SimENEx {
  const strThisFuncName = vPrjConstraint_SimEx_CopyToEx.name;
  const objvPrjConstraint_SimENT = new clsvPrjConstraint_SimENEx();
  try {
    ObjectAssign(objvPrjConstraint_SimENT, objvPrjConstraint_SimENS);
    return objvPrjConstraint_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPrjConstraint_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPrjConstraint_SimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPrjConstraint_SimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjConstraint_SimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvPrjConstraint_SimObjLst = await vPrjConstraint_Sim_GetObjLstByPagerAsync(objPagerPara);
  const arrvPrjConstraint_SimExObjLst = arrvPrjConstraint_SimObjLst.map(
    vPrjConstraint_SimEx_CopyToEx,
  );
  if (arrvPrjConstraint_SimExObjLst.length == 0) return arrvPrjConstraint_SimExObjLst;
  let arrvPrjConstraint_SimSel: Array<clsvPrjConstraint_SimENEx> = arrvPrjConstraint_SimExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.sort(
        vPrjConstraint_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.sort(objPagerPara.sortFun);
    }
    return arrvPrjConstraint_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjConstraint_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjConstraint_SimENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjConstraint_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vPrjConstraint_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vPrjConstraint_Sim_SortFunByKey(strKey, AscOrDesc);
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
export function vPrjConstraint_SimEx_FuncMapByFldName(
  strFldName: string,
  objvPrjConstraint_SimEx: clsvPrjConstraint_SimENEx,
) {
  const strThisFuncName = vPrjConstraint_SimEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvPrjConstraint_SimEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsvPrjConstraint_SimENEx.con_ConstraintTypeName:
      return vPrjConstraint_SimEx_FuncMapConstraintTypeName(objvPrjConstraint_SimEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvPrjConstraint_SimS:源对象
 **/
export async function vPrjConstraint_SimEx_FuncMapConstraintTypeName(
  objvPrjConstraint_Sim: clsvPrjConstraint_SimENEx,
) {
  const strThisFuncName = vPrjConstraint_SimEx_FuncMapConstraintTypeName.name;
  try {
    if (IsNullOrEmpty(objvPrjConstraint_Sim.constraintTypeName) == true) {
      const ConstraintTypeConstraintTypeId = objvPrjConstraint_Sim.constraintTypeId;
      const ConstraintTypeConstraintTypeName = await ConstraintType_func(
        clsConstraintTypeEN.con_ConstraintTypeId,
        clsConstraintTypeEN.con_ConstraintTypeName,
        ConstraintTypeConstraintTypeId,
      );
      objvPrjConstraint_Sim.constraintTypeName = ConstraintTypeConstraintTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000778)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPrjConstraint_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function vPrjConstraint_SimEx_GetObjLstByTabIdCache(
  strPrjId: string,
  strTabId: string,
) {
  const arrPrjConstraint = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  const arrPrjConstraint_TabId = arrPrjConstraint.filter((x) => x.tabId == strTabId);
  return arrPrjConstraint_TabId;
}
