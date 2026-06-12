/**
 * 类名:clsPrjFileTypeENEx
 * 表名:PrjFileType(00050649)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/13 04:48:22
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 工程文件类型(PrjFileType)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsPrjFileTypeEN } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';

export class clsPrjFileTypeENEx extends clsPrjFileTypeEN {
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
    //return propName in new clsPrjFileTypeENEx();
    const instance = new clsPrjFileTypeENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
