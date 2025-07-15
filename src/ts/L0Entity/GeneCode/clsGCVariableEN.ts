/**
 * 类名:clsGCVariableEN
 * 表名:GCVariable(00050559)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/18 00:20:51
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * GC变量(GCVariable)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsGCVariableEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'GCVariable'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'VarId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'varId',
    'varName',
    'varExpression',
    'filePath',
    'initValue',
    'varTypeId',
    'dataTypeId',
    'variableType',
    'variableTypeFullName',
    'clsName',
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
  private mstrVarId = ''; //变量Id
  private mstrVarName = ''; //变量名
  private mstrVarExpression = ''; //变量表达式
  private mstrFilePath = ''; //文件路径
  private mstrInitValue = ''; //初始值
  private mstrVarTypeId = ''; //变量类型Id
  private mstrDataTypeId = ''; //数据类型Id
  private mstrVariableType = ''; //变量类型
  private mstrVariableTypeFullName = ''; //变量类型全名
  private mstrClsName = ''; //类名
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 变量Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarId(value: string) {
    if (value != undefined) {
      this.varId = value;
      this.hmProperty['varId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 变量名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarName(value: string) {
    if (value != undefined) {
      this.varName = value;
      this.hmProperty['varName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 变量表达式(说明:;字段类型:varchar;字段长度:150;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarExpression(value: string) {
    if (value != undefined) {
      this.varExpression = value;
      this.hmProperty['varExpression'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件路径(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFilePath(value: string) {
    if (value != undefined) {
      this.filePath = value;
      this.hmProperty['filePath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 初始值(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInitValue(value: string) {
    if (value != undefined) {
      this.initValue = value;
      this.hmProperty['initValue'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 变量类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarTypeId(value: string) {
    if (value != undefined) {
      this.varTypeId = value;
      this.hmProperty['varTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataTypeId(value: string) {
    if (value != undefined) {
      this.dataTypeId = value;
      this.hmProperty['dataTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 变量类型(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVariableType(value: string) {
    if (value != undefined) {
      this.variableType = value;
      this.hmProperty['variableType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 变量类型全名(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVariableTypeFullName(value: string) {
    if (value != undefined) {
      this.variableTypeFullName = value;
      this.hmProperty['variableTypeFullName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 类名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClsName(value: string) {
    if (value != undefined) {
      this.clsName = value;
      this.hmProperty['clsName'] = true;
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
      case clsGCVariableEN.con_VarId:
        return this.varId;
      case clsGCVariableEN.con_VarName:
        return this.varName;
      case clsGCVariableEN.con_VarExpression:
        return this.varExpression;
      case clsGCVariableEN.con_FilePath:
        return this.filePath;
      case clsGCVariableEN.con_InitValue:
        return this.initValue;
      case clsGCVariableEN.con_VarTypeId:
        return this.varTypeId;
      case clsGCVariableEN.con_DataTypeId:
        return this.dataTypeId;
      case clsGCVariableEN.con_VariableType:
        return this.variableType;
      case clsGCVariableEN.con_VariableTypeFullName:
        return this.variableTypeFullName;
      case clsGCVariableEN.con_ClsName:
        return this.clsName;
      case clsGCVariableEN.con_UpdDate:
        return this.updDate;
      case clsGCVariableEN.con_UpdUser:
        return this.updUser;
      case clsGCVariableEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[GCVariable]中不存在!`;
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
      case clsGCVariableEN.con_VarId:
        this.varId = strValue;
        this.hmProperty['varId'] = true;
        break;
      case clsGCVariableEN.con_VarName:
        this.varName = strValue;
        this.hmProperty['varName'] = true;
        break;
      case clsGCVariableEN.con_VarExpression:
        this.varExpression = strValue;
        this.hmProperty['varExpression'] = true;
        break;
      case clsGCVariableEN.con_FilePath:
        this.filePath = strValue;
        this.hmProperty['filePath'] = true;
        break;
      case clsGCVariableEN.con_InitValue:
        this.initValue = strValue;
        this.hmProperty['initValue'] = true;
        break;
      case clsGCVariableEN.con_VarTypeId:
        this.varTypeId = strValue;
        this.hmProperty['varTypeId'] = true;
        break;
      case clsGCVariableEN.con_DataTypeId:
        this.dataTypeId = strValue;
        this.hmProperty['dataTypeId'] = true;
        break;
      case clsGCVariableEN.con_VariableType:
        this.variableType = strValue;
        this.hmProperty['variableType'] = true;
        break;
      case clsGCVariableEN.con_VariableTypeFullName:
        this.variableTypeFullName = strValue;
        this.hmProperty['variableTypeFullName'] = true;
        break;
      case clsGCVariableEN.con_ClsName:
        this.clsName = strValue;
        this.hmProperty['clsName'] = true;
        break;
      case clsGCVariableEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsGCVariableEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsGCVariableEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[GCVariable]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public filePath = ''; //文件路径
  public initValue = ''; //初始值
  public varTypeId = ''; //变量类型Id
  public dataTypeId = ''; //数据类型Id
  public variableType = ''; //变量类型
  public variableTypeFullName = ''; //变量类型全名
  public clsName = ''; //类名
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
   * 常量:"FilePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FilePath(): string {
    return 'filePath';
  } //文件路径

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
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"VariableType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VariableType(): string {
    return 'variableType';
  } //变量类型

  /**
   * 常量:"VariableTypeFullName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VariableTypeFullName(): string {
    return 'variableTypeFullName';
  } //变量类型全名

  /**
   * 常量:"ClsName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClsName(): string {
    return 'clsName';
  } //类名

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
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsGCVariableEN();
    const instance = new clsGCVariableEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
