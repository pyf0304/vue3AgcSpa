/**
 * 类名:clsvCacheUseStateEN
 * 表名:vCacheUseState(01120690)
 * 版本:2023.03.10.1(服务器:WIN-SRV103-116)
 * 日期:2023/03/13 00:13:02
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * vCacheUseState(vCacheUseState)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvCacheUseStateEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vCacheUseState'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'mId',
    'userId',
    'cacheModeId',
    'cacheModeName',
    'cacheModeENName',
    'cacheKey',
    'cacheSize',
    'memo',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    // const strThisFuncName = 'GetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsvCacheUseStateEN.conmId:
        return this.mId;
      case clsvCacheUseStateEN.conUserId:
        return this.userId;
      case clsvCacheUseStateEN.conCacheModeId:
        return this.cacheModeId;
      case clsvCacheUseStateEN.conCacheModeName:
        return this.cacheModeName;
      case clsvCacheUseStateEN.conCacheModeENName:
        return this.cacheModeENName;
      case clsvCacheUseStateEN.conCacheKey:
        return this.cacheKey;
      case clsvCacheUseStateEN.conCacheSize:
        return this.cacheSize;
      case clsvCacheUseStateEN.conMemo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vCacheUseState]中不存在！`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsvCacheUseStateEN.conmId:
        this.mId = Number(strValue);
        break;
      case clsvCacheUseStateEN.conUserId:
        this.userId = strValue;
        break;
      case clsvCacheUseStateEN.conCacheModeId:
        this.cacheModeId = strValue;
        break;
      case clsvCacheUseStateEN.conCacheModeName:
        this.cacheModeName = strValue;
        break;
      case clsvCacheUseStateEN.conCacheModeENName:
        this.cacheModeENName = strValue;
        break;
      case clsvCacheUseStateEN.conCacheKey:
        this.cacheKey = strValue;
        break;
      case clsvCacheUseStateEN.conCacheSize:
        this.cacheSize = Number(strValue);
        break;
      case clsvCacheUseStateEN.conMemo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vCacheUseState]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public userId = ''; //用户ID
  public cacheModeId = ''; //缓存方式Id
  public cacheModeName = ''; //缓存方式名
  public cacheModeENName = ''; //缓存方式英文名
  public cacheKey = ''; //缓存关键字
  public cacheSize = 0; //缓存大小
  public memo = ''; //备注

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conmId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUserId(): string {
    return 'userId';
  } //用户ID

  /**
   * 常量:"CacheModeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCacheModeId(): string {
    return 'cacheModeId';
  } //缓存方式Id

  /**
   * 常量:"CacheModeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCacheModeName(): string {
    return 'cacheModeName';
  } //缓存方式名

  /**
   * 常量:"CacheModeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCacheModeENName(): string {
    return 'cacheModeENName';
  } //缓存方式英文名

  /**
   * 常量:"CacheKey"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCacheKey(): string {
    return 'cacheKey';
  } //缓存关键字

  /**
   * 常量:"CacheSize"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCacheSize(): string {
    return 'cacheSize';
  } //缓存大小

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conMemo(): string {
    return 'memo';
  } //备注

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    // const strThisFuncName = this.SetCondFldValue.name;
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
}
