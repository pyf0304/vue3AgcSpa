import { clsSqlViewRelaTabEN } from '@/ts/L0Entity/SqlViewMan/clsSqlViewRelaTabEN';
import { clsSqlViewRelaTabENEx } from '@/ts/L0Entity/SqlViewMan/clsSqlViewRelaTabENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

export const sqlViewRelaTabEx_Controller = 'SqlViewRelaTabExApi';
export const sqlViewRelaTabEx_ConstructorName = 'sqlViewRelaTabEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objSqlViewRelaTabENS:源对象
 * @returns 目标对象=>clsSqlViewRelaTabEN:objSqlViewRelaTabENT
 **/
export function SqlViewRelaTabEx_CopyToEx(
  objSqlViewRelaTabENS: clsSqlViewRelaTabEN,
): clsSqlViewRelaTabENEx {
  const strThisFuncName = SqlViewRelaTabEx_CopyToEx.name;
  const objSqlViewRelaTabENT = new clsSqlViewRelaTabENEx();
  try {
    ObjectAssign(objSqlViewRelaTabENT, objSqlViewRelaTabENS);
    return objSqlViewRelaTabENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      sqlViewRelaTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objSqlViewRelaTabENT;
  }
}
