/**
 * 类名:clsvFunction4GeneCode_SimENEx
 * 表名:vFunction4GeneCode_Sim(00050605)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/15 11:49:07
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * v函数4GC_Sim(vFunction4GeneCode_Sim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';

export class clsvFunction4GeneCode_SimENEx extends clsvFunction4GeneCode_SimEN {
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
