import { clsPrjFuncTemplateRelaBLEx } from './clsPrjFuncTemplateRelaBLEx';
import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { vFunction4GeneCode_Sim_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';

import { vFunctionTemplateRela_Sim_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsvFunctionTemplateRela_SimWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import { clsvFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRelaEN';
import { clsvFunctionTemplateRela_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimEN';
import { clsvFunctionTemplateRela_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimENEx';

import { vFunction4GeneCode_SimEx_SortFunByKey } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4GeneCode_SimExWApi';
import { vFunctionTemplateRela_SimEx_GetObjExLstByFuncMap } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunctionTemplateRela_SimExWApi';
import { vPrjTab_SimEx_GetObjByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  vFunctionTemplateRela_GetObjLstAsync,
  vFunctionTemplateRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsvFunctionTemplateRelaWApi';

export class clsvFunctionTemplateRelaBLEx {
  /// <summary>
  /// 从缓存中获取满足条件所有【系统缺省值名称】对象列表.
  /// </summary>
  /// <param name = "strFunctionTemplateId">工程</param>
  /// <param name = "ltLangType">语言类型</param>
  /// <param name = "strCodeTypeId">层类型Id</param>
  /// <param name = "strSqlDsTypeId">数据源类型</param>
  /// <returns>从缓存中获取所有正在使用的用户缺省值列表</returns>
  public static async GetAllvFunctionTemplateRelaObjLstCacheEx(
    strFunctionTemplateId: string,
    strProgLangTypeId: string,
    strCodeTypeId: string,
    strSqlDsTypeId: string,
    strFuncTypeID: string,
  ) {
    //const strProgLangTypeId=  await ProgLangTypeEx_GetProgLangTypeIdByLangTypeCache(ltLangType);
    const arrSqlDsTypeIdLst: Array<string> = new Array<string>();
    arrSqlDsTypeIdLst.push('00');
    arrSqlDsTypeIdLst.push(strSqlDsTypeId);

    // const strWhereCond = Format('1 = 1 Order By {0}', clsvFunctionTemplateRelaEN.con_OrderNum);

    const arrObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(strFunctionTemplateId);

    const arrvFunctionTemplateRela_SimExObjLst: Array<clsvFunctionTemplateRela_SimENEx> =
      await vFunctionTemplateRela_SimEx_GetObjExLstByFuncMap(arrObjLstCache);

    const arrFunctionTemplateRelaObjLst_Sel1 = arrvFunctionTemplateRela_SimExObjLst.filter(
      (x) =>
        x.functionTemplateId == strFunctionTemplateId &&
        x.progLangTypeId == strProgLangTypeId &&
        x.codeTypeId == strCodeTypeId &&
        x.funcTypeId == strFuncTypeID &&
        arrSqlDsTypeIdLst.indexOf(x.sqlDsTypeId) > -1,
    );

    return arrFunctionTemplateRelaObjLst_Sel1;
  }

  public static async GetObjObjLstCacheEx(
    strFunctionTemplateId: string,
    strCodeTypeId: string,
    strRegionTypeId: string,
  ) {
    const arrObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(strFunctionTemplateId);
    let arrFunctionTemplateRelaObjLst_Sel1 = arrObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId && x.regionTypeId == strRegionTypeId,
    );
    if (IsNullOrEmpty(strCodeTypeId) == false) {
      arrFunctionTemplateRelaObjLst_Sel1 = arrFunctionTemplateRelaObjLst_Sel1.filter(
        (x) => x.codeTypeId == strCodeTypeId,
      );
    }

    return arrFunctionTemplateRelaObjLst_Sel1;
  }
  /// <summary>
  /// 从缓存中获取满足条件所有【系统缺省值名称】对象列表.
  /// </summary>
  /// <param name = "strFunctionTemplateId">工程</param>
  /// <param name = "ltLangType">语言类型</param>
  /// <param name = "strCodeTypeId">层类型Id</param>
  /// <param name = "strSqlDsTypeId">数据源类型</param>
  /// <returns>从缓存中获取所有正在使用的用户缺省值列表</returns>
  public static async GetAllvFunctionTemplateRelaObjLstCacheEx2(
    strFunctionTemplateId: string,
    strProgLangTypeId: string,
    strCodeTypeId: string,
    strSqlDsTypeId: string,
  ) {
    //const strProgLangTypeId=  clsProgLangTypeBLEx.GetProgLangTypeIdByLangTypeCache(ltLangType);
    const arrSqlDsTypeIdLst: Array<string> = new Array<string>();
    arrSqlDsTypeIdLst.push('00');
    arrSqlDsTypeIdLst.push(strSqlDsTypeId);

    const arrObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(strFunctionTemplateId);
    const arrvFunctionTemplateRela_SimExObjLst: Array<clsvFunctionTemplateRela_SimENEx> =
      await vFunctionTemplateRela_SimEx_GetObjExLstByFuncMap(arrObjLstCache);

    const arrFunctionTemplateRelaObjLst_Sel1 = arrvFunctionTemplateRela_SimExObjLst.filter(
      (x) =>
        x.functionTemplateId == strFunctionTemplateId &&
        x.progLangTypeId == strProgLangTypeId &&
        x.codeTypeId == strCodeTypeId &&
        arrSqlDsTypeIdLst.indexOf(x.sqlDsTypeId) > -1,
    );

    return arrFunctionTemplateRelaObjLst_Sel1;
  }

  public static async GetObjByFuncNameCacheEx(strFuncName: string, strFunctionTemplateId: string) {
    const arrObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(strFunctionTemplateId);
    const arrvFunctionTemplateRela_SimExObjLst: Array<clsvFunctionTemplateRela_SimENEx> =
      await vFunctionTemplateRela_SimEx_GetObjExLstByFuncMap(arrObjLstCache);

    const arrFunctionTemplateRelaObjLst_Sel1 = arrvFunctionTemplateRela_SimExObjLst.filter(
      (x) => x.funcName == strFuncName,
    );

    if (arrFunctionTemplateRelaObjLst_Sel1.length > 0) return arrFunctionTemplateRelaObjLst_Sel1[0];

    return null;
  }

  public static async getFunction4GeneCodeObjLstByTemplateId(
    strFunctionTemplateId: string,
    strProgLangTypeId: string,
    strCodeTypeId: string,
    strSqlDsTypeId: string,
  ) {
    //const strProgLangTypeId=  await ProgLangTypeEx_GetProgLangTypeIdByLangTypeCache(ltLangType);

    const arrvFunctionTemplateRelaObjLst =
      await clsvFunctionTemplateRelaBLEx.GetAllvFunctionTemplateRelaObjLstCacheEx(
        strFunctionTemplateId,
        strProgLangTypeId,
        strCodeTypeId,
        strSqlDsTypeId,
        '',
      );

    const arrvFunction4GeneCodeObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
    let arrvFunction4GeneCodeObjLst = arrvFunctionTemplateRelaObjLst.map((x) =>
      this.GetFunction4GeneCodeObj(x, arrvFunction4GeneCodeObjLstCache),
    );
    arrvFunction4GeneCodeObjLst = arrvFunction4GeneCodeObjLst.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );
    return arrvFunction4GeneCodeObjLst;
  }

  public static async getFunction4GeneCodeObjLstByTemplateId2(
    strFunctionTemplateId: string,
    strCodeTypeId: string,
    strRegionTypeId: string,
  ) {
    const arrvFunctionTemplateRelaObjLst = await clsvFunctionTemplateRelaBLEx.GetObjObjLstCacheEx(
      strFunctionTemplateId,
      strCodeTypeId,
      strRegionTypeId,
    );
    const arrvFunction4GeneCodeObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();

    let arrvFunction4GeneCodeObjLst = arrvFunctionTemplateRelaObjLst.map((x) =>
      this.GetFunction4GeneCodeObj(x, arrvFunction4GeneCodeObjLstCache),
    );
    arrvFunction4GeneCodeObjLst = arrvFunction4GeneCodeObjLst.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );
    return arrvFunction4GeneCodeObjLst;
  }
  /// <summary>
  ///
  /// </summary>
  /// <param name="objvFunctionTemplateRelaENS"></param>
  /// <returns></returns>
  public static GetFunction4GeneCodeObj(
    objvFunctionTemplateRelaENS: clsvFunctionTemplateRela_SimEN,
    arrvFunction4GeneCodeObjLstCache: Array<clsvFunction4GeneCode_SimEN>,
  ): clsvFunction4GeneCode_SimEN {
    const objvFunction4GeneCodeENT = arrvFunction4GeneCodeObjLstCache.find(
      (x) => x.funcId4GC == objvFunctionTemplateRelaENS.funcId4GC,
    );
    if (objvFunction4GeneCodeENT != undefined) return objvFunction4GeneCodeENT;
    return new clsvFunction4GeneCode_SimEN();
  }
  /// <summary>
  /// 根据模板Id获取用户自定义模板函数对象列表
  /// USF：用户自定义函数
  /// </summary>
  /// <param name="strFunctionTemplateId">模板Id</param>
  /// <returns></returns>
  public static async getUSFFunction4GeneCodeObjLstByTemplateId(strFunctionTemplateId: string) {
    const arrObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(strFunctionTemplateId);
    const arrvFunctionTemplateRela_SimExObjLst: Array<clsvFunctionTemplateRela_SimENEx> =
      await vFunctionTemplateRela_SimEx_GetObjExLstByFuncMap(arrObjLstCache);

    const arrFunctionTemplateRelaObjLst_Sel1 = arrvFunctionTemplateRela_SimExObjLst.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId && x.funcTypeId == '10',
    );
    const arrvFunction4GeneCodeObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();

    const arrvFunction4GeneCodeObjLst = arrFunctionTemplateRelaObjLst_Sel1.map((x) =>
      this.GetFunction4GeneCodeObj(x, arrvFunction4GeneCodeObjLstCache),
    );
    return arrvFunction4GeneCodeObjLst;
  }

  public static async GetObjLstByTemplateIdAndCodeTypeId(
    strFunctionTemplateId: string,
    strCodeTypeId: string,
  ) {
    const strCondition = Format(
      "{0}='{1}' And {2}='{3}' order by {4}",
      clsvFunctionTemplateRelaEN.con_FunctionTemplateId,
      strFunctionTemplateId,
      clsvFunctionTemplateRelaEN.con_CodeTypeId,
      strCodeTypeId,
      clsvFunctionTemplateRelaEN.con_OrderNum,
    );
    const arrvFunctionTemplateRelaObjLst: Array<clsvFunctionTemplateRelaEN> =
      await vFunctionTemplateRela_GetObjLstAsync(strCondition);
    return arrvFunctionTemplateRelaObjLst;
  }

  /// <summary>
  /// 获取表生成某代码类型的相关函数数
  /// </summary>
  /// <param name="strTabId">表Id</param>
  /// <param name="strPrjId">strPrjId</param>
  /// <param name="strCodeTypeId">代码类型Id</param>
  /// <returns>函数数</returns>
  public static async GetFunctionCountByTabId(
    strTabId: string,
    strPrjId: string,
    strCodeTypeId: string,
  ) {
    const objProject = await Projects_GetObjByPrjIdCache(strPrjId);
    if (objProject == null) {
      const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', strPrjId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      strTabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objPrjTab == null) {
      const strMsg = Format(
        '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
        objProject.prjName,
        strTabId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strFunctionTemplateId = await clsPrjFuncTemplateRelaBLEx.getFunctionTemplateIdByPrjId(
      strPrjId,
    );
    const objCodeTypeEN = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
    if (objCodeTypeEN == null) {
      const strMsg = Format('代码类型Id:[{0}]，没有相应的类型，请检查！', strCodeTypeId);
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strCondition = Format(
      "{6}='{7}' and {0}='{1}' and {2}='{3}' and {4} in ('00','{5}')",
      clsvFunctionTemplateRelaEN.con_ProgLangTypeId,
      objCodeTypeEN.progLangTypeId,
      clsvFunctionTemplateRelaEN.con_CodeTypeId,
      objCodeTypeEN.codeTypeId,
      clsvFunctionTemplateRelaEN.con_SqlDsTypeId,
      objPrjTab.sqlDsTypeId,
      clsvFunctionTemplateRelaEN.con_FunctionTemplateId,
      strFunctionTemplateId,
    );
    const intCount = await vFunctionTemplateRela_GetRecCountByCondAsync(strCondition);

    return intCount;
  }
}
