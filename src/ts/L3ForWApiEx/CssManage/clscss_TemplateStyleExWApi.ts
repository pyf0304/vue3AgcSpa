/**
 * 类名:clscss_TemplateStyleExWApi
 * 表名:css_TemplateStyle(00050470)
 * 版本:2023.02.04.1(服务器:WIN-SRV103-116)
 * 日期:2023/02/04 15:28:57
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:样式表管理(CssManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * css_TemplateStyle(css_TemplateStyle)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年02月04日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clscss_TemplateStyleENEx } from '@/ts/L0Entity/CssManage/clscss_TemplateStyleENEx';
import {
  css_TemplateStyle_GetObjLstByPagerAsync,
  css_TemplateStyle_SortFunByKey,
} from '@/ts/L3ForWApi/CssManage/clscss_TemplateStyleWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clscss_TemplateStyleEN } from '@/ts/L0Entity/CssManage/clscss_TemplateStyleEN';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const css_TemplateStyleEx_Controller = 'css_TemplateStyleExApi';
export const css_TemplateStyleEx_ConstructorName = 'css_TemplateStyleEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function css_TemplateStyleEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objcss_TemplateStyleENS:源对象
 * @returns 目标对象=>clscss_TemplateStyleEN:objcss_TemplateStyleENT
 **/
export function css_TemplateStyleEx_CopyToEx(
  objcss_TemplateStyleENS: clscss_TemplateStyleEN,
): clscss_TemplateStyleENEx {
  const strThisFuncName = css_TemplateStyleEx_CopyToEx.name;
  const objcss_TemplateStyleENT = new clscss_TemplateStyleENEx();
  try {
    ObjectAssign(objcss_TemplateStyleENT, objcss_TemplateStyleENS);
    return objcss_TemplateStyleENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_TemplateStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcss_TemplateStyleENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function css_TemplateStyleEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscss_TemplateStyleENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcss_TemplateStyleObjLst = await css_TemplateStyle_GetObjLstByPagerAsync(objPagerPara);
  const arrcss_TemplateStyleExObjLst = arrcss_TemplateStyleObjLst.map(css_TemplateStyleEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscss_TemplateStyleEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcss_TemplateStyleExObjLst) {
      await css_TemplateStyleEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcss_TemplateStyleExObjLst.length == 0) return arrcss_TemplateStyleExObjLst;
  let arrcss_TemplateStyle_Sel: Array<clscss_TemplateStyleENEx> = arrcss_TemplateStyleExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcss_TemplateStyle_Sel = arrcss_TemplateStyle_Sel.sort(
        css_TemplateStyleEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcss_TemplateStyle_Sel = arrcss_TemplateStyle_Sel.sort(objPagerPara.sortFun);
    }

    return arrcss_TemplateStyle_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      css_TemplateStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscss_TemplateStyleENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-02-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function css_TemplateStyleEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return css_TemplateStyle_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return css_TemplateStyle_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-02-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function css_TemplateStyleEx_FuncMapByFldName(
  strFldName: string,
  objcss_TemplateStyleEx: clscss_TemplateStyleENEx,
) {
  const strThisFuncName = css_TemplateStyleEx_FuncMapByFldName.name;
  console.log(objcss_TemplateStyleEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscss_TemplateStyleEN.AttributeName;
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
