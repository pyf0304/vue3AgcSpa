/**
 * 类名:clsCTRelationTypeEN
 * 表名:CTRelationType(00050645)
 * 版本:2026.05.30(服务器:WIN-SRV103-116)
 * 日期:2026/06/05 05:14:00
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * CT关系类型(CTRelationType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

/**
 * CT关系类型主键类型定义
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_KeyType)
 **/
export type CTRelationTypeKey = {
  ctRelationTypeId: string;
};
export class clsCTRelationTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static _CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static readonly _CacheModeId: string = '03'; //localStorage
  public static readonly _PrimaryTypeId: string = '01'; //关键字
  public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static readonly _WhereFormat = ''; //条件格式串
  public static readonly _CurrTabName: string = 'CTRelationType'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName: string = 'CtRelationTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 14;
  public static readonly _AttributeName = [
    'ctRelationTypeId',
    'relationTypeName',
    'relationTypeEN',
    'description',
    'orderNum',
    'inUse',
    'lineColor',
    'lineStyle',
    'lineWidth',
    'arrowType',
    'displayColor',
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
  private mstrCtRelationTypeId = ''; //Ct关系类型Id
  private mstrRelationTypeName = ''; //关系类型名
  private mstrRelationTypeEN = ''; //关系类型英文名
  private mstrDescription = ''; //描述
  private mintOrderNum = 0; //序号
  private mbolInUse = false; //是否在用
  private mstrLineColor = ''; //LineColor
  private mstrLineStyle = ''; //LineStyle
  private mintLineWidth = 0; //LineWidth
  private mstrArrowType = ''; //箭头类型
  private mstrDisplayColor = ''; //DisplayColor
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * Ct关系类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtRelationTypeId(value: string) {
    if (value != undefined) {
      this.ctRelationTypeId = value;
      this.hmProperty['ctRelationTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关系类型名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRelationTypeName(value: string) {
    if (value != undefined) {
      this.relationTypeName = value;
      this.hmProperty['relationTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关系类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRelationTypeEN(value: string) {
    if (value != undefined) {
      this.relationTypeEN = value;
      this.hmProperty['relationTypeEN'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 描述(说明:;字段类型:varchar;字段长度:300;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDescription(value: string) {
    if (value != undefined) {
      this.description = value;
      this.hmProperty['description'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInUse(value: boolean) {
    if (value != undefined) {
      this.inUse = value;
      this.hmProperty['inUse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * LineColor(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLineColor(value: string) {
    if (value != undefined) {
      this.lineColor = value;
      this.hmProperty['lineColor'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * LineStyle(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLineStyle(value: string) {
    if (value != undefined) {
      this.lineStyle = value;
      this.hmProperty['lineStyle'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * LineWidth(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLineWidth(value: number) {
    if (value != undefined) {
      this.lineWidth = value;
      this.hmProperty['lineWidth'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 箭头类型(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetArrowType(value: string) {
    if (value != undefined) {
      this.arrowType = value;
      this.hmProperty['arrowType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DisplayColor(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDisplayColor(value: string) {
    if (value != undefined) {
      this.displayColor = value;
      this.hmProperty['displayColor'] = true;
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
   * 修改者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
   * 说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
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
    let strMsg = '';
    switch (strFldName) {
      case clsCTRelationTypeEN.con_CtRelationTypeId:
        return this.ctRelationTypeId;
      case clsCTRelationTypeEN.con_RelationTypeName:
        return this.relationTypeName;
      case clsCTRelationTypeEN.con_RelationTypeEN:
        return this.relationTypeEN;
      case clsCTRelationTypeEN.con_Description:
        return this.description;
      case clsCTRelationTypeEN.con_OrderNum:
        return this.orderNum;
      case clsCTRelationTypeEN.con_InUse:
        return this.inUse;
      case clsCTRelationTypeEN.con_LineColor:
        return this.lineColor;
      case clsCTRelationTypeEN.con_LineStyle:
        return this.lineStyle;
      case clsCTRelationTypeEN.con_LineWidth:
        return this.lineWidth;
      case clsCTRelationTypeEN.con_ArrowType:
        return this.arrowType;
      case clsCTRelationTypeEN.con_DisplayColor:
        return this.displayColor;
      case clsCTRelationTypeEN.con_UpdDate:
        return this.updDate;
      case clsCTRelationTypeEN.con_UpdUser:
        return this.updUser;
      case clsCTRelationTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CTRelationType]中不存在!`;
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
      case clsCTRelationTypeEN.con_CtRelationTypeId:
        this.ctRelationTypeId = strValue;
        this.hmProperty['ctRelationTypeId'] = true;
        break;
      case clsCTRelationTypeEN.con_RelationTypeName:
        this.relationTypeName = strValue;
        this.hmProperty['relationTypeName'] = true;
        break;
      case clsCTRelationTypeEN.con_RelationTypeEN:
        this.relationTypeEN = strValue;
        this.hmProperty['relationTypeEN'] = true;
        break;
      case clsCTRelationTypeEN.con_Description:
        this.description = strValue;
        this.hmProperty['description'] = true;
        break;
      case clsCTRelationTypeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsCTRelationTypeEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsCTRelationTypeEN.con_LineColor:
        this.lineColor = strValue;
        this.hmProperty['lineColor'] = true;
        break;
      case clsCTRelationTypeEN.con_LineStyle:
        this.lineStyle = strValue;
        this.hmProperty['lineStyle'] = true;
        break;
      case clsCTRelationTypeEN.con_LineWidth:
        this.lineWidth = Number(strValue);
        this.hmProperty['lineWidth'] = true;
        break;
      case clsCTRelationTypeEN.con_ArrowType:
        this.arrowType = strValue;
        this.hmProperty['arrowType'] = true;
        break;
      case clsCTRelationTypeEN.con_DisplayColor:
        this.displayColor = strValue;
        this.hmProperty['displayColor'] = true;
        break;
      case clsCTRelationTypeEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCTRelationTypeEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsCTRelationTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[CTRelationType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public ctRelationTypeId = ''; //Ct关系类型Id
  public relationTypeName = ''; //关系类型名
  public relationTypeEN = ''; //关系类型英文名
  public description = ''; //描述
  public orderNum = 0; //序号
  public inUse = false; //是否在用
  public lineColor = ''; //LineColor
  public lineStyle = ''; //LineStyle
  public lineWidth = 0; //LineWidth
  public arrowType = ''; //箭头类型
  public displayColor = ''; //DisplayColor
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"CtRelationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_CtRelationTypeId = 'ctRelationTypeId'; //Ct关系类型Id

  /**
   * 常量:"RelationTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_RelationTypeName = 'relationTypeName'; //关系类型名

  /**
   * 常量:"RelationTypeEN"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_RelationTypeEN = 'relationTypeEN'; //关系类型英文名

  /**
   * 常量:"Description"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_Description = 'description'; //描述

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_OrderNum = 'orderNum'; //序号

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_InUse = 'inUse'; //是否在用

  /**
   * 常量:"LineColor"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_LineColor = 'lineColor'; //LineColor

  /**
   * 常量:"LineStyle"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_LineStyle = 'lineStyle'; //LineStyle

  /**
   * 常量:"LineWidth"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_LineWidth = 'lineWidth'; //LineWidth

  /**
   * 常量:"ArrowType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ArrowType = 'arrowType'; //箭头类型

  /**
   * 常量:"DisplayColor"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_DisplayColor = 'displayColor'; //DisplayColor

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_UpdDate = 'updDate'; //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_UpdUser = 'updUser'; //修改者

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_Memo = 'memo'; //说明

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsCTRelationTypeEN();
    const instance = new clsCTRelationTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumCTRelationType {
  /**
   * 必须依赖
   **/
  static readonly Require_01 = '01';
  /**
   * 可选依赖
   **/
  static readonly Optional_02 = '02';
  /**
   * 生成顺序
   **/
  static readonly GenerateAfter_03 = '03';
  /**
   * 引用关系
   **/
  static readonly Reference_04 = '04';
}
