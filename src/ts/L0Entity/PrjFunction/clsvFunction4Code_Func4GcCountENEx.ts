/**
 * 类名:clsvFunction4Code_Func4GcCountENEx
 * 表名:vFunction4Code_Func4GcCount(00050626)
 * 版本:2023.07.18.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/27 22:53:01
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * vFunction4Code_Func4GcCount(vFunction4Code_Func4GcCount)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvFunction4Code_Func4GcCountEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_Func4GcCountEN';

export class clsvFunction4Code_Func4GcCountENEx extends clsvFunction4Code_Func4GcCountEN {
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
