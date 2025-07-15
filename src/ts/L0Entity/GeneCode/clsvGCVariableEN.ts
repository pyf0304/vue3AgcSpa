/**
 * 类名:clsvGCVariableEN
 * 表名:vGCVariable(00050561)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/05 02:25:45
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * vGCVariable(vGCVariable)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvGCVariableEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vGCVariable'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'VarId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'varId',
    'varName',
    'varExpression',
    'initValue',
    'varTypeId',
    'varTypeName',
    'prjId',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvGCVariableEN.con_VarId:
        return this.varId;
      case clsvGCVariableEN.con_VarName:
        return this.varName;
      case clsvGCVariableEN.con_VarExpression:
        return this.varExpression;
      case clsvGCVariableEN.con_InitValue:
        return this.initValue;
      case clsvGCVariableEN.con_VarTypeId:
        return this.varTypeId;
      case clsvGCVariableEN.con_VarTypeName:
        return this.varTypeName;
      case clsvGCVariableEN.con_PrjId:
        return this.prjId;
      case clsvGCVariableEN.con_UpdDate:
        return this.updDate;
      case clsvGCVariableEN.con_UpdUser:
        return this.updUser;
      case clsvGCVariableEN.con_Memo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vGCVariable]中不存在!`;
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
      case clsvGCVariableEN.con_VarId:
        this.varId = strValue;
        break;
      case clsvGCVariableEN.con_VarName:
        this.varName = strValue;
        break;
      case clsvGCVariableEN.con_VarExpression:
        this.varExpression = strValue;
        break;
      case clsvGCVariableEN.con_InitValue:
        this.initValue = strValue;
        break;
      case clsvGCVariableEN.con_VarTypeId:
        this.varTypeId = strValue;
        break;
      case clsvGCVariableEN.con_VarTypeName:
        this.varTypeName = strValue;
        break;
      case clsvGCVariableEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvGCVariableEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvGCVariableEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvGCVariableEN.con_Memo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vGCVariable]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public varId = ''; //变量Id
  public varName = ''; //变量名
  public varExpression = ''; //变量表达式
  public initValue = ''; //初始值
  public varTypeId = ''; //变量类型Id
  public varTypeName = ''; //变量类型名
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"VarId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarId(): string {
    return 'varId';
  } //变量Id

  /**
   * 常量:"VarName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarName(): string {
    return 'varName';
  } //变量名

  /**
   * 常量:"VarExpression"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarExpression(): string {
    return 'varExpression';
  } //变量表达式

  /**
   * 常量:"InitValue"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InitValue(): string {
    return 'initValue';
  } //初始值

  /**
   * 常量:"VarTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarTypeId(): string {
    return 'varTypeId';
  } //变量类型Id

  /**
   * 常量:"VarTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarTypeName(): string {
    return 'varTypeName';
  } //变量类型名

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

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
}
