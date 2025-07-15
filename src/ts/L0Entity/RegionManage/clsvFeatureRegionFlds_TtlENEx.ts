/**
 * 类名:clsvFeatureRegionFlds_TtlENEx
 * 表名:vFeatureRegionFlds_Ttl(00050474)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:33
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * v功能区域字段_Ttl(vFeatureRegionFlds_Ttl)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvFeatureRegionFlds_TtlEN } from '@/ts/L0Entity/RegionManage/clsvFeatureRegionFlds_TtlEN';

export class clsvFeatureRegionFlds_TtlENEx extends clsvFeatureRegionFlds_TtlEN {
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
      case clsvFeatureRegionFlds_TtlENEx.con_CmPrjId:
        return this.cmPrjId;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //CM工程Id

  public cmPrjId = ''; //CM工程Id
}
