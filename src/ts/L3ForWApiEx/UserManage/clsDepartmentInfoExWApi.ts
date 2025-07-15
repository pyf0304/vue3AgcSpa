import { clsDepartmentInfoEN } from '@/ts/L0Entity/UserManage/clsDepartmentInfoEN';
import { clsDepartmentInfoENEx } from '@/ts/L0Entity/UserManage/clsDepartmentInfoENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
export const departmentInfoEx_Controller = 'DepartmentInfoExApi';
export const departmentInfoEx_ConstructorName = 'departmentInfoEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objDepartmentInfoENS:源对象
 * @returns 目标对象=>clsDepartmentInfoEN:objDepartmentInfoENT
 **/
export function DepartmentInfoEx_CopyToEx(
  objDepartmentInfoENS: clsDepartmentInfoEN,
): clsDepartmentInfoENEx {
  const strThisFuncName = DepartmentInfoEx_CopyToEx.name;
  const objDepartmentInfoENT = new clsDepartmentInfoENEx();
  try {
    ObjectAssign(objDepartmentInfoENT, objDepartmentInfoENS);
    return objDepartmentInfoENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000066)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      departmentInfoEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDepartmentInfoENT;
  }
}
