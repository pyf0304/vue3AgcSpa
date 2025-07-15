import { clsSqlViewRelaTabEN } from '../..//L0Entity/SqlViewMan/clsSqlViewRelaTabEN';
import { clsDataTypeAbbrEN } from '../..//L0Entity/SysPara/clsDataTypeAbbrEN';
import { clsvFieldTab_SimEN } from '../..//L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvPrjTab_SimEN } from '../..//L0Entity/Table_Field/clsvPrjTab_SimEN';
import { SqlViewRelaTab_func } from '../..//L3ForWApi/SqlViewMan/clsSqlViewRelaTabWApi';
import { DataTypeAbbr_func } from '../..//L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsSqlViewFldEN } from '@/ts/L0Entity/SqlViewMan/clsSqlViewFldEN';
import { clsSqlViewFldENEx } from '@/ts/L0Entity/SqlViewMan/clsSqlViewFldENEx';
import { SqlViewFld_GetObjLstCache } from '@/ts/L3ForWApi/SqlViewMan/clsSqlViewFldWApi';
import { Format } from '@/ts/PubFun/clsString';
import { vFieldTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { vPrjTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export const sqlViewFldEx_Controller = 'SqlViewFldExApi';
export const sqlViewFldEx_ConstructorName = 'sqlViewFldEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objSqlViewFldENS">源对象</param>
/// <param name = "objSqlViewFldENT">目标对象</param>
export function SqlViewFldEx_CopyToEx(objSqlViewFldENS: clsSqlViewFldEN): clsSqlViewFldENEx {
  const objSqlViewFldENT: clsSqlViewFldENEx = new clsSqlViewFldENEx();
  objSqlViewFldENT.mId = objSqlViewFldENS.mId; //mId
  objSqlViewFldENT.sqlViewId = objSqlViewFldENS.sqlViewId; //Sql视图Id
  objSqlViewFldENT.relaTabId = objSqlViewFldENS.relaTabId; //相关表Id
  objSqlViewFldENT.fldId = objSqlViewFldENS.fldId; //字段Id
  objSqlViewFldENT.fldExpression = objSqlViewFldENS.fldExpression; //字段表达式
  objSqlViewFldENT.fieldAliases = objSqlViewFldENS.fieldAliases; //字段别名
  objSqlViewFldENT.filters = objSqlViewFldENS.filters; //筛选器
  objSqlViewFldENT.orderNum = objSqlViewFldENS.orderNum; //序号
  objSqlViewFldENT.prjId = objSqlViewFldENS.prjId; //工程ID
  objSqlViewFldENT.updDate = objSqlViewFldENS.updDate; //修改日期
  objSqlViewFldENT.updUserId = objSqlViewFldENS.updUserId; //修改用户Id
  objSqlViewFldENT.memo = objSqlViewFldENS.memo; //说明
  objSqlViewFldENT.sfUpdFldSetStr = objSqlViewFldENS.updFldString; //专门用于记录某字段属性是否修改
  objSqlViewFldENT.sfFldComparisonOp = objSqlViewFldENS.sfFldComparisonOp; //专门用于记录条件对象某字段的比较运算符
  return objSqlViewFldENT;
}
/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * @param strSqlViewId:Sql视图Id
 * @param strPrjId:工程Id
 * @returns 对象列表
 */
export async function SqlViewFldEx_GetObjLstBySqlViewIdCache(
  strSqlViewId: string,
  strPrjId: string,
): Promise<Array<clsSqlViewFldEN>> {
  // const strThisFuncName = 'GetObjLstBySqlViewIdCache';
  const arrSqlViewFldObjLstCache: Array<clsSqlViewFldEN> = await SqlViewFld_GetObjLstCache(
    strPrjId,
  );
  const arrSqlViewFld_Sel: Array<clsSqlViewFldEN> = arrSqlViewFldObjLstCache.filter(
    (x) => x.sqlViewId == strSqlViewId,
  );
  return arrSqlViewFld_Sel;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap4Path)
 * @param obj00050249S:源对象
 **/
export async function SqlViewFldEx_FuncMap4Path(objDnPathPara: any) {
  const strThisFuncName = SqlViewFldEx_FuncMap4Path.name;
  try {
    if (objDnPathPara.inDataNodeName == '' && objDnPathPara.outDataNodeName == '') {
      return '';
    } else if (
      objDnPathPara.inDataNodeName == 'SqlViewFld_FldId' &&
      objDnPathPara.outDataNodeName == 'vFieldTab_Sim_FldName'
    ) {
      //Step.1  SqlViewFld_FldId-->vFieldTab_Sim_FldId(函数(equal))
      const vFieldTab_Sim_FldId = objDnPathPara.inValue; //SqlViewFld_FldId-->vFieldTab_Sim_FldId(函数(equal))
      //Step.2  vFieldTab_Sim_FldId-->vFieldTab_Sim_FldName(表(vFieldTab_Sim))
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      //vFieldTab_Sim_FldId-->vFieldTab_Sim_FldName(表(vFieldTab_Sim))
      return vFieldTab_Sim_FldName;
    } else if (
      objDnPathPara.inDataNodeName == 'SqlViewFld_FldId' &&
      objDnPathPara.outDataNodeName == 'vFieldTab_Sim_Caption'
    ) {
      //Step.1  SqlViewFld_FldId-->vFieldTab_Sim_FldId(函数(equal))
      const vFieldTab_Sim_FldId = objDnPathPara.inValue; //SqlViewFld_FldId-->vFieldTab_Sim_FldId(函数(equal))
      //Step.2  vFieldTab_Sim_FldId-->vFieldTab_Sim_Caption(表(vFieldTab_Sim))
      const vFieldTab_Sim_Caption = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_Caption,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      //vFieldTab_Sim_FldId-->vFieldTab_Sim_Caption(表(vFieldTab_Sim))
      return vFieldTab_Sim_Caption;
    } else if (
      objDnPathPara.inDataNodeName == 'SqlViewFld_FldId' &&
      objDnPathPara.outDataNodeName == 'vFieldTab_Sim_DataTypeId'
    ) {
      //Step.1  SqlViewFld_FldId-->vFieldTab_Sim_FldId(函数(equal))
      const vFieldTab_Sim_FldId = objDnPathPara.inValue; //SqlViewFld_FldId-->vFieldTab_Sim_FldId(函数(equal))
      //Step.2  vFieldTab_Sim_FldId-->vFieldTab_Sim_DataTypeId(表(vFieldTab_Sim))
      const vFieldTab_Sim_DataTypeId = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_DataTypeId,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      //vFieldTab_Sim_FldId-->vFieldTab_Sim_DataTypeId(表(vFieldTab_Sim))
      return vFieldTab_Sim_DataTypeId;
    } else if (
      objDnPathPara.inDataNodeName == 'SqlViewFld_FldId' &&
      objDnPathPara.outDataNodeName == 'DataTypeAbbr_DataTypeName'
    ) {
      //Step.1  SqlViewFld_FldId-->vFieldTab_Sim_FldId(函数(equal))
      const vFieldTab_Sim_FldId = objDnPathPara.inValue; //SqlViewFld_FldId-->vFieldTab_Sim_FldId(函数(equal))
      //Step.2  vFieldTab_Sim_FldId-->vFieldTab_Sim_DataTypeId(表(vFieldTab_Sim))
      const vFieldTab_Sim_DataTypeId = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_DataTypeId,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      //vFieldTab_Sim_FldId-->vFieldTab_Sim_DataTypeId(表(vFieldTab_Sim))
      //Step.3  vFieldTab_Sim_DataTypeId-->DataTypeAbbr_DataTypeName(表(DataTypeAbbr))
      const DataTypeAbbr_DataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        vFieldTab_Sim_DataTypeId,
      ); //vFieldTab_Sim_DataTypeId-->DataTypeAbbr_DataTypeName(表(DataTypeAbbr))
      return DataTypeAbbr_DataTypeName;
    } else if (
      objDnPathPara.inDataNodeName == 'SqlViewFld_RelaTabId' &&
      objDnPathPara.outDataNodeName == 'SqlViewRelaTab_TabId'
    ) {
      //Step.1  SqlViewFld_RelaTabId-->SqlViewRelaTab_RelaTabId(函数(equal))
      const SqlViewRelaTab_RelaTabId = objDnPathPara.inValue; //SqlViewFld_RelaTabId-->SqlViewRelaTab_RelaTabId(函数(equal))
      //Step.2  SqlViewRelaTab_RelaTabId-->SqlViewRelaTab_TabId(表(SqlViewRelaTab))
      const SqlViewRelaTab_TabId = await SqlViewRelaTab_func(
        clsSqlViewRelaTabEN.con_RelaTabId,
        clsSqlViewRelaTabEN.con_TabId,
        SqlViewRelaTab_RelaTabId,
        objDnPathPara.prjId,
      ); //SqlViewRelaTab_RelaTabId-->SqlViewRelaTab_TabId(表(SqlViewRelaTab))
      return SqlViewRelaTab_TabId;
    } else if (
      objDnPathPara.inDataNodeName == 'SqlViewFld_RelaTabId' &&
      objDnPathPara.outDataNodeName == 'vPrjTab_Sim_TabName'
    ) {
      //Step.1  SqlViewFld_RelaTabId-->SqlViewRelaTab_RelaTabId(函数(equal))
      const SqlViewRelaTab_RelaTabId = objDnPathPara.inValue; //SqlViewFld_RelaTabId-->SqlViewRelaTab_RelaTabId(函数(equal))
      //Step.2  SqlViewRelaTab_RelaTabId-->SqlViewRelaTab_TabId(表(SqlViewRelaTab))
      const SqlViewRelaTab_TabId = await SqlViewRelaTab_func(
        clsSqlViewRelaTabEN.con_RelaTabId,
        clsSqlViewRelaTabEN.con_TabId,
        SqlViewRelaTab_RelaTabId,
        objDnPathPara.prjId,
      ); //SqlViewRelaTab_RelaTabId-->SqlViewRelaTab_TabId(表(SqlViewRelaTab))
      //Step.3  SqlViewRelaTab_TabId-->vPrjTab_Sim_TabName(表(vPrjTab_Sim))
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        SqlViewRelaTab_TabId,
      ); //SqlViewRelaTab_TabId-->vPrjTab_Sim_TabName(表(vPrjTab_Sim))
      return vPrjTab_Sim_TabName;
    } else {
      const strMsg = Format(
        '路径不存在! inDataNodeName:[{0}], outDataNodeName:[{1}].',
        objDnPathPara.inDataNodeName,
        objDnPathPara.outDataNodeName,
      );
      console.error(strMsg);
      throw strMsg;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000073)把一个扩展类的部分属性进行函数转换出错,{0}.(in {1}.{2})',
      e,
      sqlViewFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
