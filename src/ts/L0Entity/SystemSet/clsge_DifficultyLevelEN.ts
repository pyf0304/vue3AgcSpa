﻿/**
 * 类名:clsge_DifficultyLevelEN
 * 表名:ge_DifficultyLevel(01120905)
 * 版本:2023.03.10.1(服务器:WIN-SRV103-116)
 * 日期:2023/03/14 18:42:02
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
 * 难度等级表(ge_DifficultyLevel)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsge_DifficultyLevelEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ge_DifficultyLevel'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DifficultyLevelId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 6;
  public static AttributeName = [
    'difficultyLevelId',
    'difficultyLevelName',
    'difficultyLevelENName',
    'updDate',
    'updUser',
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
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrDifficultyLevelId = ''; //难度等级Id
  private mstrDifficultyLevelName = ''; //难度等级名称
  private mstrDifficultyLevelENName = ''; //难度等级英文名
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改人
  private mstrMemo = ''; //备注

  /**
   * 难度等级Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDifficultyLevelId(value: string) {
    if (value != undefined) {
      this.difficultyLevelId = value;
      this.hmProperty['difficultyLevelId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 难度等级名称(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDifficultyLevelName(value: string) {
    if (value != undefined) {
      this.difficultyLevelName = value;
      this.hmProperty['difficultyLevelName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 难度等级英文名(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDifficultyLevelENName(value: string) {
    if (value != undefined) {
      this.difficultyLevelENName = value;
      this.hmProperty['difficultyLevelENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
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
      case clsge_DifficultyLevelEN.conDifficultyLevelId:
        return this.difficultyLevelId;
      case clsge_DifficultyLevelEN.conDifficultyLevelName:
        return this.difficultyLevelName;
      case clsge_DifficultyLevelEN.conDifficultyLevelENName:
        return this.difficultyLevelENName;
      case clsge_DifficultyLevelEN.conUpdDate:
        return this.updDate;
      case clsge_DifficultyLevelEN.conUpdUser:
        return this.updUser;
      case clsge_DifficultyLevelEN.conMemo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ge_DifficultyLevel]中不存在！`;
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
      case clsge_DifficultyLevelEN.conDifficultyLevelId:
        this.difficultyLevelId = strValue;
        this.hmProperty['difficultyLevelId'] = true;
        break;
      case clsge_DifficultyLevelEN.conDifficultyLevelName:
        this.difficultyLevelName = strValue;
        this.hmProperty['difficultyLevelName'] = true;
        break;
      case clsge_DifficultyLevelEN.conDifficultyLevelENName:
        this.difficultyLevelENName = strValue;
        this.hmProperty['difficultyLevelENName'] = true;
        break;
      case clsge_DifficultyLevelEN.conUpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsge_DifficultyLevelEN.conUpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsge_DifficultyLevelEN.conMemo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ge_DifficultyLevel]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public difficultyLevelId = ''; //难度等级Id
  public difficultyLevelName = ''; //难度等级名称
  public difficultyLevelENName = ''; //难度等级英文名
  public updDate = ''; //修改日期
  public updUser = ''; //修改人
  public memo = ''; //备注

  /**
   * 常量:"DifficultyLevelId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDifficultyLevelId(): string {
    return 'difficultyLevelId';
  } //难度等级Id

  /**
   * 常量:"DifficultyLevelName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDifficultyLevelName(): string {
    return 'difficultyLevelName';
  } //难度等级名称

  /**
   * 常量:"DifficultyLevelENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDifficultyLevelENName(): string {
    return 'difficultyLevelENName';
  } //难度等级英文名

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdUser(): string {
    return 'updUser';
  } //修改人

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
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumge_DifficultyLevel {
  /**
   * 简单
   **/
  static readonly Easy_01 = '01';
  /**
   * 中等
   **/
  static readonly Middle_02 = '02';
  /**
   * 困难
   **/
  static readonly Difficulty_03 = '03';
}
