/**
 * 类名:clsCMClassENEx
 * 表名:CMClass(00050501)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:31
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * CM类(CMClass)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCMClassEN } from '@/ts/L0Entity/CodeMan/clsCMClassEN';

export class clsCMClassENEx extends clsCMClassEN {
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
}
