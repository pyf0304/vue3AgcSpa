import { clsvFunctionTemplateRelaBLEx } from './clsvFunctionTemplateRelaBLEx';

import { FeatureFuncRela_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsFeatureFuncRelaWApi';
import { vFunction4GeneCode_Sim_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
import { clsFeatureFuncRelaEN } from '@/ts/L0Entity/PrjFunction/clsFeatureFuncRelaEN';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { enumFunctionTemplate } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { enumProgLangType } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { clsPrjTabENEx4GC } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx4GC';
import { clsViewInfoENEx4GC } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx4GC';

import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import { vFunction4GeneCode_SimEx_SortFunByKey } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4GeneCode_SimExWApi';
import { clsvFunction4GeneCode_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { vFunction4Code_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_SimWApi';

export class clsFunction4GeneCodeBLEx {
  /// <summary>
  /// 根据函数名称获取相关对象, 从缓存的对象列表中获取.没有就返回null.
  /// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
  /// </summary>
  /// <param name = "strFuncName4Code">所给的函数名称</param>
  /// <returns>根据函数名称获取的对象</returns>
  public static async GetObjByFuncName4CodeCache(strFuncName4Code: string) {
    if (IsNullOrEmpty(strFuncName4Code) == true) return null;
    //初始化列表缓存
    const arrObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();

    const arrFunction4CodeObjLstCache = await vFunction4Code_Sim_GetObjLstAsync('1=1');
    const arrFunction4CodeObjLst_Sel = arrFunction4CodeObjLstCache.filter(
      (x) => x.funcName4Code == strFuncName4Code,
    );
    const arrFuncId4Code = arrFunction4CodeObjLst_Sel.map((x) => x.funcId4Code);

    const arrFunction4CodeObjLst_Sel1 = arrObjLstCache.filter(
      (x) => arrFuncId4Code.indexOf(x.funcId4Code) > -1,
    );

    if (arrFunction4CodeObjLst_Sel1.length == 0) {
      return null;
    }
    return arrFunction4CodeObjLst_Sel1[0];
  }
  /// <summary>
  /// 判断在一个函数对象列表中，是否存在某一个函数名的对象
  /// </summary>
  /// <param name="arrvFunction4GeneCodeObjLst">函数对象列表</param>
  /// <param name="strFuncName4Code">所给的函数名</param>
  /// <returns></returns>
  public static IsExistFuncNameInObjLst(
    arrvFunction4GeneCodeObjLst: Array<clsFunction4GeneCodeEN>,
    strFuncName: string,
  ): boolean {
    for (const objFunction4CodeEN of arrvFunction4GeneCodeObjLst) {
      if (objFunction4CodeEN.funcName == strFuncName) return true;
    }
    return false;
  }

  public static async GetObjByFuncId4GCCacheEx(strFuncId4GC: string) {
    // const strWhereCond = Format('1 = 1 Order By {0}', clsFunction4GeneCodeEN.con_OrderNum);
    const arrObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();

    // const arrFunction4GeneCodeObjLst: Array<clsFunction4GeneCodeEN> =
    //   new Array<clsFunction4GeneCodeEN>();

    const arrFunction4GeneCodeObjLst_Sel1 = arrObjLstCache.filter(
      (x) => x.funcId4GC == strFuncId4GC,
    );
    const arrFunction4GeneCodeObjLst_Sel: Array<clsvFunction4GeneCode_SimEN> =
      new Array<clsvFunction4GeneCode_SimEN>();
    for (const obj of arrFunction4GeneCodeObjLst_Sel1) {
      arrFunction4GeneCodeObjLst_Sel.push(obj);
    }
    if (arrFunction4GeneCodeObjLst_Sel.length > 0) return arrFunction4GeneCodeObjLst_Sel[0];
    return null;
  }
  /// <summary>
  /// 获取表相关所有的生成代码函数对象列表
  /// </summary>
  /// <param name="objPrjTabENEx">表对象</param>
  /// <param name="intApplicationTypeId">应用类型Id</param>
  /// <returns>生成代码函数对象列表</returns>
  public static async GetObjLstByPrjTabEx2(
    objPrjTabENEx: clsPrjTabENEx4GC,
    intApplicationTypeId: number,
  ) {
    let arrvFunction4GeneCodeObjLst =
      await clsvFunctionTemplateRelaBLEx.getFunction4GeneCodeObjLstByTemplateId(
        objPrjTabENEx.functionTemplateId,
        objPrjTabENEx.LangTypeId,
        objPrjTabENEx.codeTypeId,
        objPrjTabENEx.sqlDsTypeId,
      );

    arrvFunction4GeneCodeObjLst = arrvFunction4GeneCodeObjLst.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );
    let arrvFunction4GeneCodeObjLst_All: Array<clsvFunction4GeneCode_SimEN>;

    //添加与表-功能相关的函数
    const arrFeatureId: Array<string> = objPrjTabENEx.arrTabFeatureSet.map((x) => x.featureId);
    const arrvFunction4GeneCodeObjLst4TabFeatureCache =
      await clsFunction4GeneCodeBLEx.GetObjLst4FeatureIdLst(arrFeatureId, intApplicationTypeId);
    let arrvFunction4GeneCodeObjLst4TabFeature = new Array<clsvFunction4GeneCode_SimEN>();
    if (arrvFunction4GeneCodeObjLst4TabFeatureCache != null) {
      arrvFunction4GeneCodeObjLst4TabFeature = arrvFunction4GeneCodeObjLst4TabFeatureCache.filter(
        (x) => x.funcCodeTypeId == objPrjTabENEx.codeTypeId,
      );
    }

    if (
      arrvFunction4GeneCodeObjLst4TabFeature != null &&
      arrvFunction4GeneCodeObjLst4TabFeature.length > 0
    ) {
      arrvFunction4GeneCodeObjLst_All = arrvFunction4GeneCodeObjLst.concat(
        arrvFunction4GeneCodeObjLst4TabFeature,
      );
    } else {
      arrvFunction4GeneCodeObjLst_All = arrvFunction4GeneCodeObjLst;
    }

    // const intCount4 = arrvFunction4GeneCodeObjLst_All.length;

    arrvFunction4GeneCodeObjLst_All = arrvFunction4GeneCodeObjLst_All.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );
    return arrvFunction4GeneCodeObjLst_All;
  }

  /// <summary>
  ///
  /// </summary>
  /// <param name="strFuncName"></param>
  /// <returns></returns>
  public static async GetObjByFuncNameCacheEx(strFuncName: string) {
    const arrObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
    // const arrFunction4GeneCodeObjLst = new Array<clsvFunction4GeneCode_SimEN>();

    const arrFunction4GeneCodeObjLst_Sel1 = arrObjLstCache.filter((x) => x.funcName == strFuncName);

    if (arrFunction4GeneCodeObjLst_Sel1.length > 0) return arrFunction4GeneCodeObjLst_Sel1[0];

    return null;
  }
  public static async GetObjLstByFeatureIdCache(
    strFeatureId: string,
    intApplicationTypeId: number,
  ) {
    const arrFeatureFuncRelaCache: Array<clsFeatureFuncRelaEN> =
      await FeatureFuncRela_GetObjLstCache(intApplicationTypeId);
    const arrFeatureFuncRela: Array<clsFeatureFuncRelaEN> = arrFeatureFuncRelaCache.filter(
      (x) => x.featureId == strFeatureId,
    );

    const arrFuncId4GC: Array<string> = arrFeatureFuncRela.map((x) => x.funcId4GC);
    const arrvFunction4GeneCodeObjLstCache = await vFunction4GeneCode_Sim_GetObjLstCache();
    //return arrFeatureFuncRelaObjLstCache;
    const arrFunction4GeneCodeObjLst = arrvFunction4GeneCodeObjLstCache.filter(
      (x) => arrFuncId4GC.indexOf(x.funcId4GC) > -1,
    );
    return arrFunction4GeneCodeObjLst;
  }

  public static async GetObjLst4FeatureIdLst2(
    arrFeatureId: Array<string>,
    intApplicationTypeId: number,
  ) {
    if (arrFeatureId.length == 0) return new Array<clsFunction4GeneCodeEN>();
    const arrFeatureFuncRelaCache: Array<clsFeatureFuncRelaEN> =
      await FeatureFuncRela_GetObjLstCache(intApplicationTypeId);
    const arrFeatureFuncRela: Array<clsFeatureFuncRelaEN> = arrFeatureFuncRelaCache.filter(
      (x) => arrFeatureId.indexOf(x.featureId) > -1,
    );
    const arrFuncId: Array<string> = arrFeatureFuncRela.map((x) => x.funcId4GC);
    let arrvFunction4GeneCodeObjLst4TabFeature = await vFunction4GeneCode_Sim_GetObjLstCache();
    arrvFunction4GeneCodeObjLst4TabFeature = arrvFunction4GeneCodeObjLst4TabFeature.filter(
      (x) => arrFuncId.indexOf(x.funcId4GC) > -1,
    );
    return arrvFunction4GeneCodeObjLst4TabFeature;
    //Array<clsFunction4GeneCodeEN> arrvFunction4GeneCodeObjLst4TabFeature = Function4GeneCode_GetObjLstCache(strCondition).filter(x => x.codeTypeId == objPrjTabENEx.codeTypeId);
  }

  public static async GetObjLst4FeatureIdLst(
    arrFeatureId: Array<string>,
    intApplicationTypeId: number,
  ) {
    if (arrFeatureId.length == 0) return new Array<clsvFunction4GeneCode_SimENEx>();
    const arrFeatureFuncRelaCache: Array<clsFeatureFuncRelaEN> =
      await FeatureFuncRela_GetObjLstCache(intApplicationTypeId);
    const arrFeatureFuncRela: Array<clsFeatureFuncRelaEN> = arrFeatureFuncRelaCache.filter(
      (x) => x.applicationTypeId == intApplicationTypeId && arrFeatureId.indexOf(x.featureId) > -1,
    );
    const arrFuncId: Array<string> = arrFeatureFuncRela.map((x) => x.funcId4GC);
    let arrvFunction4GeneCodeObjLst4TabFeature = await vFunction4GeneCode_Sim_GetObjLstCache();

    arrvFunction4GeneCodeObjLst4TabFeature = arrvFunction4GeneCodeObjLst4TabFeature.filter(
      (x) => arrFuncId.indexOf(x.funcId4GC) > -1,
    );
    return arrvFunction4GeneCodeObjLst4TabFeature;
  }
  /// <summary>
  /// 获取界面所有的生成代码函数对象列表
  /// </summary>
  /// <param name="objViewInfoENEx">界面对象</param>
  /// <returns>生成代码函数对象列表</returns>
  public static async GetObjLstByViewInfoEx(objViewInfoENEx: clsViewInfoENEx4GC) {
    const strThisFuncName = this.GetObjLstByViewInfoEx.name;
    let arrvFunction4GeneCodeObjLst =
      await clsvFunctionTemplateRelaBLEx.getFunction4GeneCodeObjLstByTemplateId(
        objViewInfoENEx.functionTemplateId,
        objViewInfoENEx.LangTypeId,
        objViewInfoENEx.codeTypeId,
        objViewInfoENEx.sqlDsTypeId,
      );
    arrvFunction4GeneCodeObjLst = arrvFunction4GeneCodeObjLst.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );
    let arrvFunction4GeneCodeObjLstByFeature = objViewInfoENEx.arrFunction4GeneCodeSetByFeatureLst;
    if (arrvFunction4GeneCodeObjLstByFeature == null) {
      const strMsg = Format(
        '功能区为空，请检查！(In {0}.{1})',
        this.prototype.constructor.name,
        strThisFuncName,
      );
      throw new Error(strMsg);
    }
    //number intCount2 = arrvFunction4GeneCodeObjLstByFeature.length;
    arrvFunction4GeneCodeObjLstByFeature = arrvFunction4GeneCodeObjLstByFeature.filter(
      (x) => x.funcCodeTypeId == objViewInfoENEx.codeTypeId,
    );
    let arrvFunction4GeneCodeObjLst_All = arrvFunction4GeneCodeObjLst.concat(
      arrvFunction4GeneCodeObjLstByFeature,
    );
    //,            new VFunction4GeneCodeComparer());
    //const intCount4: number= arrvFunction4GeneCodeObjLst_All.length;

    arrvFunction4GeneCodeObjLst_All = arrvFunction4GeneCodeObjLst_All.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );

    //number intCount5 = arrvFunction4GeneCodeObjLst_All.length;
    return arrvFunction4GeneCodeObjLst_All;
  }

  /// <summary>
  /// 获取界面功能区所有的生成代码函数对象列表
  /// </summary>
  /// <param name="objViewInfoENEx">界面对象</param>
  /// <returns>生成代码函数对象列表</returns>
  public static async GetObjLst4FeatureRegionByViewInfoEx(objViewInfoENEx: clsViewInfoENEx4GC) {
    let arrvFunction4GeneCodeObjLst =
      await clsvFunctionTemplateRelaBLEx.getFunction4GeneCodeObjLstByTemplateId(
        enumFunctionTemplate.RegionFunctionDetailSet_0005,
        objViewInfoENEx.codeTypeId,
        enumRegionType.FeatureRegion_0008,
        '',
      );

    arrvFunction4GeneCodeObjLst = arrvFunction4GeneCodeObjLst.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );
    let arrvFunction4GeneCodeObjLstByFeature = objViewInfoENEx.arrFunction4GeneCodeSetByFeatureLst;

    arrvFunction4GeneCodeObjLstByFeature = arrvFunction4GeneCodeObjLstByFeature.filter(
      (x) => x.funcCodeTypeId == objViewInfoENEx.codeTypeId,
    );
    let arrvFunction4GeneCodeObjLst_All = arrvFunction4GeneCodeObjLst.concat(
      arrvFunction4GeneCodeObjLstByFeature,
    );
    //,            new VFunction4GeneCodeComparer());

    arrvFunction4GeneCodeObjLst_All = arrvFunction4GeneCodeObjLst_All.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );
    return arrvFunction4GeneCodeObjLst_All;
  }

  /// <summary>
  /// 获取界面的生成代码函数对象列表,专门指JS函数
  /// </summary>
  /// <param name="objViewInfoENEx">界面对象</param>
  /// <returns>生成代码函数对象列表</returns>
  public static async GetObjLstByViewInfoEx_JS(objViewInfoENEx: clsViewInfoENEx4GC) {
    const arrvFunction4GeneCodeObjLst_JS =
      await clsvFunctionTemplateRelaBLEx.getFunction4GeneCodeObjLstByTemplateId(
        objViewInfoENEx.functionTemplateId,
        enumProgLangType.JavaScript_04,
        objViewInfoENEx.codeTypeId,
        objViewInfoENEx.sqlDsTypeId,
      );
    let arrvFunction4GeneCodeObjLstByFeature = objViewInfoENEx.arrFunction4GeneCodeSetByFeatureLst;
    //number intCount2 = arrvFunction4GeneCodeObjLstByFeature.length;
    arrvFunction4GeneCodeObjLstByFeature = arrvFunction4GeneCodeObjLstByFeature.filter(
      (x) =>
        x.funcCodeTypeId == objViewInfoENEx.codeTypeId &&
        x.progLangTypeId == enumProgLangType.JavaScript_04,
    );
    //number intCount3 = arrvFunction4GeneCodeObjLstByFeature.length;

    const arrvFunction4GeneCodeObjLst_JS_All = arrvFunction4GeneCodeObjLst_JS.concat(
      arrvFunction4GeneCodeObjLstByFeature,
    );
    //,            new VFunction4GeneCodeComparer());

    //const intCount4: number= arrvFunction4GeneCodeObjLst_All.length;

    //arrvFunction4GeneCodeObjLst_JS_All = arrvFunction4GeneCodeObjLst_JS_All.sort((x, y) => x.funcName4Code.localeCompare(y.funcName4Code));
    return arrvFunction4GeneCodeObjLst_JS_All;
  }
  /// <summary>
  /// 获取表相关所有的生成代码函数对象列表
  /// </summary>
  /// <param name="objPrjTabENEx">表对象</param>
  /// <returns>生成代码函数对象列表</returns>
  public static async GetObjLstByPrjTabEx3(
    objPrjTabENEx: clsPrjTabENEx4GC,
    intApplicationTypeId: number,
  ) {
    let arrvFunction4GeneCodeObjLst;
    let arrvFunction4GeneCodeObjLst_Sub1 =
      await clsvFunctionTemplateRelaBLEx.getFunction4GeneCodeObjLstByTemplateId(
        objPrjTabENEx.functionTemplateId,
        objPrjTabENEx.LangTypeId,
        objPrjTabENEx.codeTypeId,
        objPrjTabENEx.sqlDsTypeId,
      );
    arrvFunction4GeneCodeObjLst_Sub1 = arrvFunction4GeneCodeObjLst_Sub1.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );

    //添加与表-功能相关的函数
    const arrFeatureId: Array<string> = objPrjTabENEx.arrTabFeatureSet.map((x) => x.featureId);
    const arrvFunction4GeneCodeObjLst4TabFeatureCache =
      await clsFunction4GeneCodeBLEx.GetObjLst4FeatureIdLst(arrFeatureId, intApplicationTypeId);
    let arrvFunction4GeneCodeObjLst4TabFeature = new Array<clsvFunction4GeneCode_SimEN>();
    if (arrvFunction4GeneCodeObjLst4TabFeatureCache != null) {
      arrvFunction4GeneCodeObjLst4TabFeature = arrvFunction4GeneCodeObjLst4TabFeatureCache.filter(
        (x) => x.funcCodeTypeId == objPrjTabENEx.codeTypeId,
      );
    }

    if (
      arrvFunction4GeneCodeObjLst4TabFeature != null &&
      arrvFunction4GeneCodeObjLst4TabFeature.length > 0
    ) {
      arrvFunction4GeneCodeObjLst = arrvFunction4GeneCodeObjLst_Sub1.concat(
        arrvFunction4GeneCodeObjLst4TabFeature,
      );
    } else {
      arrvFunction4GeneCodeObjLst = arrvFunction4GeneCodeObjLst_Sub1;
    }
    //const intCount4: number= arrvFunction4GeneCodeObjLst.length;

    arrvFunction4GeneCodeObjLst = arrvFunction4GeneCodeObjLst.sort(
      vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
    );
    return arrvFunction4GeneCodeObjLst;
  }
}
