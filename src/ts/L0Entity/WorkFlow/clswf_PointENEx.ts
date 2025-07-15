/**
 * 类名:clswf_PointENEx
 * 表名:wf_Point(00050485)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/29 20:20:19
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工作流管理(WorkFlow)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 工作流结点(wf_Point)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clswf_PointEN } from '@/ts/L0Entity/WorkFlow/clswf_PointEN';

export class clswf_PointENEx extends clswf_PointEN {
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
