/**
 * 类名:clsvPrjFeatureSimExWApi
 * 表名:vPrjFeatureSim(00050637)
 * 版本:2024.12.07.1(服务器:PYF-AI)
 * 日期:2024/12/19 21:47:36
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vPrjFeatureSim(vPrjFeatureSim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年12月19日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, BindDdl_ObjLstInDivObj_V } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vPrjFeatureSim_GetObjLstCache,
  vPrjFeatureSim_GetObjLstByPagerAsync,
  vPrjFeatureSim_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvPrjFeatureSimEN } from '@/ts/L0Entity/PrjFunction/clsvPrjFeatureSimEN';
import { clsvPrjFeatureSimENEx } from '@/ts/L0Entity/PrjFunction/clsvPrjFeatureSimENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vPrjFeatureSimExController = 'vPrjFeatureSimExApi';
export const vPrjFeatureSimEx_ConstructorName = 'vPrjFeatureSimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vPrjFeatureSimEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvPrjFeatureSimENS:源对象
 * @returns 目标对象=>clsvPrjFeatureSimEN:objvPrjFeatureSimENT
 **/
export function vPrjFeatureSimEx_CopyToEx(
  objvPrjFeatureSimENS: clsvPrjFeatureSimEN,
): clsvPrjFeatureSimENEx {
  const strThisFuncName = vPrjFeatureSimEx_CopyToEx.name;
  const objvPrjFeatureSimENT = new clsvPrjFeatureSimENEx();
  try {
    ObjectAssign(objvPrjFeatureSimENT, objvPrjFeatureSimENS);
    return objvPrjFeatureSimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPrjFeatureSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPrjFeatureSimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPrjFeatureSimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjFeatureSimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvPrjFeatureSimObjLst = await vPrjFeatureSim_GetObjLstByPagerAsync(objPagerPara);
  const arrvPrjFeatureSimExObjLst = arrvPrjFeatureSimObjLst.map(vPrjFeatureSimEx_CopyToEx);
  if (arrvPrjFeatureSimExObjLst.length == 0) return arrvPrjFeatureSimExObjLst;
  let arrvPrjFeatureSimSel: Array<clsvPrjFeatureSimENEx> = arrvPrjFeatureSimExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.sort(
        vPrjFeatureSimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.sort(objPagerPara.sortFun);
    }
    return arrvPrjFeatureSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjFeatureSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjFeatureSimENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-19
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjFeatureSimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vPrjFeatureSim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vPrjFeatureSim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-12-19
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vPrjFeatureSimEx_FuncMapByFldName(
  strFldName: string,
  objvPrjFeatureSimEx: clsvPrjFeatureSimENEx,
) {
  const strThisFuncName = vPrjFeatureSimEx_FuncMapByFldName.name;
  console.log(objvPrjFeatureSimEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvPrjFeatureSimEN.AttributeName;
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

export async function vPrjFeatureSimEx_BindDdl_FeatureIdByFeatureTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strFeatureTypeId: string,
) {
  if (IsNullOrEmpty(strFeatureTypeId) == true) {
    const strMsg = Format(
      '参数:[strFeatureTypeId]不能为空！(In clsvPrjFeatureSimWApi.BindDdl_FeatureIdByRegionTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureTypeId]的长度:[{0}]不正确！(clsvPrjFeatureSimWApi.BindDdl_FeatureIdByRegionTypeIdInDiv)',
      strFeatureTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_FeatureIdByRegionTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FeatureIdByRegionTypeIdInDivCache");
  let arrObjLstSel = await vPrjFeatureSim_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.featureTypeId == strFeatureTypeId);
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvPrjFeatureSimEN.con_FeatureId,
    clsvPrjFeatureSimEN.con_FeatureName,
    'vPrjFeatureSim',
  );
}
