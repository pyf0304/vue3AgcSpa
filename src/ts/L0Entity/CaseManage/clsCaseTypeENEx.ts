/**
 * 类名:clsCaseTypeENEx
 * 表名:CaseType(00050055)
 * 版本:2025.04.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/02 18:20:06
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:用例管理(CaseManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 案例类型(CaseType)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCaseTypeEN } from '@/ts/L0Entity/CaseManage/clsCaseTypeEN';

export class clsCaseTypeENEx extends clsCaseTypeEN {
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
   **/
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strValue;
    switch (strFldName) {
      case 'CtrlId':
        return '';
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsCaseTypeENEx();
    const instance = new clsCaseTypeENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
