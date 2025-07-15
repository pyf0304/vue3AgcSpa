import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { clsDataTypeAbbrENEx } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrENEx';
import { enumProgLangType } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { DataTypeAbbr_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { Format } from '@/ts/PubFun/clsString';
export const dataTypeAbbrEx_Controller = 'DataTypeAbbrExApi';
export const dataTypeAbbrEx_ConstructorName = 'dataTypeAbbrEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objDataTypeAbbrENS">源对象</param>
/// <param name = "objDataTypeAbbrENT">目标对象</param>
export function DataTypeAbbrEx_CopyToEx(
  objDataTypeAbbrENS: clsDataTypeAbbrEN,
): clsDataTypeAbbrENEx {
  const objDataTypeAbbrENT: clsDataTypeAbbrENEx = new clsDataTypeAbbrENEx();
  objDataTypeAbbrENT.dataTypeId = objDataTypeAbbrENS.dataTypeId; //数据类型Id
  objDataTypeAbbrENT.dataTypeName = objDataTypeAbbrENS.dataTypeName; //数据类型名称
  objDataTypeAbbrENT.dataTypeENName = objDataTypeAbbrENS.dataTypeENName; //dataTypeENName
  objDataTypeAbbrENT.dataCnName = objDataTypeAbbrENS.dataCnName; //数据类型中文名称
  objDataTypeAbbrENT.dataTypeAbbr = objDataTypeAbbrENS.dataTypeAbbr; //数据类型缩写
  objDataTypeAbbrENT.netSysType = objDataTypeAbbrENS.netSysType; //NET系统类型
  objDataTypeAbbrENT.vbNetType = objDataTypeAbbrENS.vbNetType; //VBNET类型
  objDataTypeAbbrENT.csType = objDataTypeAbbrENS.csType; //CS类型
  objDataTypeAbbrENT.javaType = objDataTypeAbbrENS.javaType; //JAVA类型
  objDataTypeAbbrENT.typeScriptType = objDataTypeAbbrENS.typeScriptType; //TypeScript类型
  objDataTypeAbbrENT.javaObjType = objDataTypeAbbrENS.javaObjType; //JAVA对象类型
  objDataTypeAbbrENT.swiftType = objDataTypeAbbrENS.swiftType; //swiftType
  objDataTypeAbbrENT.isNeedQuote = objDataTypeAbbrENS.isNeedQuote; //是否需要引号
  objDataTypeAbbrENT.oraDbType = objDataTypeAbbrENS.oraDbType; //Ora数据类型
  objDataTypeAbbrENT.isReturnType = objDataTypeAbbrENS.isReturnType; //是否可作返回类型
  objDataTypeAbbrENT.sqlParaType = objDataTypeAbbrENS.sqlParaType; //SQL参数类型
  objDataTypeAbbrENT.mySqlType = objDataTypeAbbrENS.mySqlType; //mySqlType
  objDataTypeAbbrENT.defaFldLength = objDataTypeAbbrENS.defaFldLength; //默认长度
  objDataTypeAbbrENT.defaFldPrecision = objDataTypeAbbrENS.defaFldPrecision; //默认小数位数
  objDataTypeAbbrENT.memo = objDataTypeAbbrENS.memo; //说明
  objDataTypeAbbrENT.sfUpdFldSetStr = objDataTypeAbbrENS.updFldString; //专门用于记录某字段属性是否修改
  objDataTypeAbbrENT.sfFldComparisonOp = objDataTypeAbbrENS.sfFldComparisonOp; //专门用于记录条件对象某字段的比较运算符
  return objDataTypeAbbrENT;
}

export async function DataTypeAbbrEx_GetDataTypeIdByName(strDataTypeName: string): Promise<string> {
  const arrDataTypeAbbr = await DataTypeAbbr_GetObjLstCache();

  const arrDataTypeAbbr_Sel = arrDataTypeAbbr.filter((x) => x.dataTypeName == strDataTypeName);
  if (arrDataTypeAbbr_Sel.length == 0) return '';
  return arrDataTypeAbbr_Sel[0].dataTypeId;
}

/*
   * 根据语言获取数据类型串
    
    *param name="objDataTypeAbbrEN">数据类型对象
        语言类型Id</param>
       数据类型串
**/
export function DataTypeAbbrEx_GetTypeString(
  objDataTypeAbbrEN: clsDataTypeAbbrEN,
  strProgLangTypeId: string,
): string {
  let strMsg;
  switch (strProgLangTypeId) {
    case enumProgLangType.CSharp_01:
      return objDataTypeAbbrEN.csType;
    case enumProgLangType.JAVA_02:
      return objDataTypeAbbrEN.javaType;
    case enumProgLangType.TypeScript_09:
      return objDataTypeAbbrEN.typeScriptType;
    case enumProgLangType.JavaScript_04:
      return objDataTypeAbbrEN.typeScriptType;
    case enumProgLangType.Html_10:
      return objDataTypeAbbrEN.typeScriptType;

    case enumProgLangType.Swift4_08:
    case enumProgLangType.Swift_03:
    case enumProgLangType.Swift3_07:
      return objDataTypeAbbrEN.swiftType;
    case enumProgLangType.SilverLight_05:
      return objDataTypeAbbrEN.csType;
    default:
      strMsg = Format(
        '数据类型:{0}在函数中没有被处理！(In {1})',
        strProgLangTypeId,
        dataTypeAbbrEx_ConstructorName,
      );
      console.error(strMsg);
      // alert(strMsg);
      return '';
  }
}
