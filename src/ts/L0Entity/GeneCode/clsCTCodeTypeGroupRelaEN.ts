/**
 * 类名:clsCTCodeTypeGroupRelaEN
 * 表名:CTCodeTypeGroupRela(00050647)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 13:31:32
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
 * CTCodeTypeGroupRela(CTCodeTypeGroupRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

/**
 * CTCodeTypeGroupRela主键类型定义
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_KeyType)
 **/
export type CTCodeTypeGroupRelaKey = {
  ctGroupId: string;
  codeTypeId: string;
};
export class clsCTCodeTypeGroupRelaEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static _CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static readonly _CacheModeId: string = ''; //
  public static readonly _PrimaryTypeId: string = '07'; //复合主键
  public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static readonly _WhereFormat = ''; //条件格式串
  public static readonly _CurrTabName: string = 'CTCodeTypeGroupRela'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName: string = 'CtGroupId,CodeTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 6;
  public static readonly _AttributeName = [
    'ctGroupId',
    'codeTypeId',
    'isMainGroup',
    'orderNum',
    'updDate',
    'updUser',
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
  private mstrCtGroupId = ''; //Ct组Id
  private mstrCodeTypeId = ''; //代码类型Id
  private mbolIsMainGroup = false; //IsMainGroup
  private mintOrderNum = 0; //序号
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者

  /**
   * Ct组Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtGroupId(value: string) {
    if (value != undefined) {
      this.ctGroupId = value;
      this.hmProperty['ctGroupId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 代码类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodeTypeId(value: string) {
    if (value != undefined) {
      this.codeTypeId = value;
      this.hmProperty['codeTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsMainGroup(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsMainGroup(value: boolean) {
    if (value != undefined) {
      this.isMainGroup = value;
      this.hmProperty['isMainGroup'] = true;
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsCTCodeTypeGroupRelaEN.con_CtGroupId:
        return this.ctGroupId;
      case clsCTCodeTypeGroupRelaEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsCTCodeTypeGroupRelaEN.con_IsMainGroup:
        return this.isMainGroup;
      case clsCTCodeTypeGroupRelaEN.con_OrderNum:
        return this.orderNum;
      case clsCTCodeTypeGroupRelaEN.con_UpdDate:
        return this.updDate;
      case clsCTCodeTypeGroupRelaEN.con_UpdUser:
        return this.updUser;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CTCodeTypeGroupRela]中不存在!`;
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
      case clsCTCodeTypeGroupRelaEN.con_CtGroupId:
        this.ctGroupId = strValue;
        this.hmProperty['ctGroupId'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        this.hmProperty['codeTypeId'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_IsMainGroup:
        this.isMainGroup = Boolean(strValue);
        this.hmProperty['isMainGroup'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CTCodeTypeGroupRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public ctGroupId = ''; //Ct组Id
  public codeTypeId = ''; //代码类型Id
  public isMainGroup = false; //IsMainGroup
  public orderNum = 0; //序号
  public updDate = ''; //修改日期
  public updUser = ''; //修改者

  /**
   * 常量:"CtGroupId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_CtGroupId = 'ctGroupId'; //Ct组Id

  /**
   * 常量:"CodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_CodeTypeId = 'codeTypeId'; //代码类型Id

  /**
   * 常量:"IsMainGroup"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_IsMainGroup = 'isMainGroup'; //IsMainGroup

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_OrderNum = 'orderNum'; //序号

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
    //return propName in new clsCTCodeTypeGroupRelaEN();
    const instance = new clsCTCodeTypeGroupRelaEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
