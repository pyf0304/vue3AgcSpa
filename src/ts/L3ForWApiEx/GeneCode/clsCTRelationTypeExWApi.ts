/**
 * 类名:clsCTRelationTypeExWApi
 * 表名:CTRelationType(00050645)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/04 11:07:53
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CT关系类型(CTRelationType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2026年06月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { clsCTRelationTypeENEx } from '@/ts/L0Entity/GeneCode/clsCTRelationTypeENEx';
import { CTRelationType_SortFunByKey } from '@/ts/L3ForWApi/GeneCode/clsCTRelationTypeWApi';
import { clsCTRelationTypeEN } from '@/ts/L0Entity/GeneCode/clsCTRelationTypeEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

export const cTRelationTypeEx_Controller = 'CTRelationTypeExApi';
export const cTRelationTypeEx_ConstructorName = 'cTRelationTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function CTRelationTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objCTRelationTypeENS:源对象
 * @returns 目标对象=>clsCTRelationTypeEN:objCTRelationTypeENT
 **/
export function CTRelationTypeEx_CopyToEx(
  objCTRelationTypeENS: clsCTRelationTypeEN,
): clsCTRelationTypeENEx {
  const strThisFuncName = CTRelationTypeEx_CopyToEx.name;
  const objCTRelationTypeENT = new clsCTRelationTypeENEx();
  try {
    ObjectAssign(objCTRelationTypeENT, objCTRelationTypeENS);
    return objCTRelationTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cTRelationTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCTRelationTypeENT;
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTRelationTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return CTRelationType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return CTRelationType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-06-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CTRelationTypeEx_FuncMapByFldName(
  strFldName: string,
  objCTRelationTypeEx: clsCTRelationTypeENEx,
) {
  const strThisFuncName = CTRelationTypeEx_FuncMapByFldName.name;
  console.log(objCTRelationTypeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCTRelationTypeEN._AttributeName;
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
