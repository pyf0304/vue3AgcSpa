/**
 * 类名:clsViewInfoCmPrjIdRelaENEx
 * 表名:ViewInfoCmPrjIdRela(00050621)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/25 17:34:51
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 界面CmPrjId关系(ViewInfoCmPrjIdRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsViewInfoCmPrjIdRelaEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaEN';

export class clsViewInfoCmPrjIdRelaENEx extends clsViewInfoCmPrjIdRelaEN {
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
