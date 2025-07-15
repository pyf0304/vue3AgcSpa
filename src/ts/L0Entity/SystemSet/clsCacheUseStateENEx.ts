/**
 * 类名:clsCacheUseStateENEx
 * 表名:CacheUseState(00050566)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:11
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 缓存使用状态(CacheUseState)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCacheUseStateEN } from '@/ts/L0Entity/SystemSet/clsCacheUseStateEN';

export class clsCacheUseStateENEx extends clsCacheUseStateEN {
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
      case clsCacheUseStateENEx.con_CacheModeName:
        return this.cacheModeName;
      case clsCacheUseStateENEx.con_CacheModeENName:
        return this.cacheModeENName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CacheModeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CacheModeName(): string {
    return 'cacheModeName';
  } //缓存方式名

  /**
   * 常量:"CacheModeENName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CacheModeENName(): string {
    return 'cacheModeENName';
  } //缓存方式英文名

  public cacheModeName = ''; //缓存方式名
  public cacheModeENName = ''; //缓存方式英文名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsCacheUseStateENEx();
    const instance = new clsCacheUseStateENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
