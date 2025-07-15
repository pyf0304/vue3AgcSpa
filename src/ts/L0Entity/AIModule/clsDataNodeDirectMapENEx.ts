/**
 * 类名:clsDataNodeDirectMapENEx
 * 表名:DataNodeDirectMap(00050570)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/17 00:07:01
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 数据结点直接映射(DataNodeDirectMap)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsDataNodeDirectMapEN } from '@/ts/L0Entity/AIModule/clsDataNodeDirectMapEN';

export class clsDataNodeDirectMapENEx extends clsDataNodeDirectMapEN {
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
