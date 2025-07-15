﻿/**
 * 类名:clsClsRmTypeEN
 * 表名:ClsRmType(01120576)
 * 版本:2023.03.10.1(服务器:WIN-SRV103-116)
 * 日期:2023/03/14 18:26:50
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
 * 教室类型(ClsRmType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsClsRmTypeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ClsRmType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'id_ClassRoomType'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'id_ClassRoomType',
    'classRoomTypeID',
    'classRoomTypeDesc',
    'classRoomTypeDescA',
    'modifyUserID',
    'modifyDate',
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
  private mstrid_ClassRoomType = ''; //教室类型流水号
  private mstrClassRoomTypeID = ''; //教室类型代号
  private mstrClassRoomTypeDesc = ''; //教室类型描述
  private mstrClassRoomTypeDescA = ''; //教室类型简称
  private mstrModifyUserID = ''; //修改人
  private mstrModifyDate = ''; //修改日期
  private mstrMemo = ''; //备注

  /**
   * 教室类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Setid_ClassRoomType(value: string) {
    if (value != undefined) {
      this.id_ClassRoomType = value;
      this.hmProperty['id_ClassRoomType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教室类型代号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClassRoomTypeID(value: string) {
    if (value != undefined) {
      this.classRoomTypeID = value;
      this.hmProperty['classRoomTypeID'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教室类型描述(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClassRoomTypeDesc(value: string) {
    if (value != undefined) {
      this.classRoomTypeDesc = value;
      this.hmProperty['classRoomTypeDesc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教室类型简称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClassRoomTypeDescA(value: string) {
    if (value != undefined) {
      this.classRoomTypeDescA = value;
      this.hmProperty['classRoomTypeDescA'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetModifyUserID(value: string) {
    if (value != undefined) {
      this.modifyUserID = value;
      this.hmProperty['modifyUserID'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetModifyDate(value: string) {
    if (value != undefined) {
      this.modifyDate = value;
      this.hmProperty['modifyDate'] = true;
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
      case clsClsRmTypeEN.conid_ClassRoomType:
        return this.id_ClassRoomType;
      case clsClsRmTypeEN.conClassRoomTypeID:
        return this.classRoomTypeID;
      case clsClsRmTypeEN.conClassRoomTypeDesc:
        return this.classRoomTypeDesc;
      case clsClsRmTypeEN.conClassRoomTypeDescA:
        return this.classRoomTypeDescA;
      case clsClsRmTypeEN.conModifyUserID:
        return this.modifyUserID;
      case clsClsRmTypeEN.conModifyDate:
        return this.modifyDate;
      case clsClsRmTypeEN.conMemo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ClsRmType]中不存在！`;
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
      case clsClsRmTypeEN.conid_ClassRoomType:
        this.id_ClassRoomType = strValue;
        this.hmProperty['id_ClassRoomType'] = true;
        break;
      case clsClsRmTypeEN.conClassRoomTypeID:
        this.classRoomTypeID = strValue;
        this.hmProperty['classRoomTypeID'] = true;
        break;
      case clsClsRmTypeEN.conClassRoomTypeDesc:
        this.classRoomTypeDesc = strValue;
        this.hmProperty['classRoomTypeDesc'] = true;
        break;
      case clsClsRmTypeEN.conClassRoomTypeDescA:
        this.classRoomTypeDescA = strValue;
        this.hmProperty['classRoomTypeDescA'] = true;
        break;
      case clsClsRmTypeEN.conModifyUserID:
        this.modifyUserID = strValue;
        this.hmProperty['modifyUserID'] = true;
        break;
      case clsClsRmTypeEN.conModifyDate:
        this.modifyDate = strValue;
        this.hmProperty['modifyDate'] = true;
        break;
      case clsClsRmTypeEN.conMemo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[ClsRmType]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public id_ClassRoomType = ''; //教室类型流水号
  public classRoomTypeID = ''; //教室类型代号
  public classRoomTypeDesc = ''; //教室类型描述
  public classRoomTypeDescA = ''; //教室类型简称
  public modifyUserID = ''; //修改人
  public modifyDate = ''; //修改日期
  public memo = ''; //备注

  /**
   * 常量:"id_ClassRoomType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conid_ClassRoomType(): string {
    return 'id_ClassRoomType';
  } //教室类型流水号

  /**
   * 常量:"ClassRoomTypeID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conClassRoomTypeID(): string {
    return 'classRoomTypeID';
  } //教室类型代号

  /**
   * 常量:"ClassRoomTypeDesc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conClassRoomTypeDesc(): string {
    return 'classRoomTypeDesc';
  } //教室类型描述

  /**
   * 常量:"ClassRoomTypeDescA"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conClassRoomTypeDescA(): string {
    return 'classRoomTypeDescA';
  } //教室类型简称

  /**
   * 常量:"ModifyUserID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conModifyUserID(): string {
    return 'modifyUserID';
  } //修改人

  /**
   * 常量:"ModifyDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conModifyDate(): string {
    return 'modifyDate';
  } //修改日期

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
