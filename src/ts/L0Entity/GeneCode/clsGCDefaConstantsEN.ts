/**
 * 类名:clsGCDefaConstantsEN
 * 表名:GCDefaConstants(00050640)
 * 版本:2025.07.05.1(服务器:WIN-SRV103-116)
 * 日期:2025/07/05 15:25:23
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
 * GC常量(GCDefaConstants)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsGCDefaConstantsEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static _CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static readonly _CacheModeId: string = '04'; //sessionStorage
  public static readonly _PrimaryTypeId: string = '03'; //自增
  public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static readonly _WhereFormat = ''; //条件格式串
  public static readonly _CurrTabName: string = 'GCDefaConstants'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName = 'ConstId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 10;
  public static readonly _AttributeName = [
    'constId',
    'constName',
    'constExpression',
    'filePath',
    'initValue',
    'dataTypeId',
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
  private mstrConstId = ''; //常量Id
  private mstrConstName = ''; //常量名
  private mstrConstExpression = ''; //常量表达式
  private mstrFilePath = ''; //文件路径
  private mstrInitValue = ''; //初始值
  private mstrDataTypeId = ''; //数据类型Id
  private mstrClsName = ''; //类名
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 常量Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetConstId(value: string) {
    if (value != undefined) {
      this.constId = value;
      this.hmProperty['constId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 常量名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetConstName(value: string) {
    if (value != undefined) {
      this.constName = value;
      this.hmProperty['constName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 常量表达式(说明:;字段类型:varchar;字段长度:150;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetConstExpression(value: string) {
    if (value != undefined) {
      this.constExpression = value;
      this.hmProperty['constExpression'] = true;
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
      case clsGCDefaConstantsEN.con_ConstId:
        return this.constId;
      case clsGCDefaConstantsEN.con_ConstName:
        return this.constName;
      case clsGCDefaConstantsEN.con_ConstExpression:
        return this.constExpression;
      case clsGCDefaConstantsEN.con_FilePath:
        return this.filePath;
      case clsGCDefaConstantsEN.con_InitValue:
        return this.initValue;
      case clsGCDefaConstantsEN.con_DataTypeId:
        return this.dataTypeId;
      case clsGCDefaConstantsEN.con_ClsName:
        return this.clsName;
      case clsGCDefaConstantsEN.con_UpdDate:
        return this.updDate;
      case clsGCDefaConstantsEN.con_UpdUser:
        return this.updUser;
      case clsGCDefaConstantsEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[GCDefaConstants]中不存在!`;
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
      case clsGCDefaConstantsEN.con_ConstId:
        this.constId = strValue;
        this.hmProperty['constId'] = true;
        break;
      case clsGCDefaConstantsEN.con_ConstName:
        this.constName = strValue;
        this.hmProperty['constName'] = true;
        break;
      case clsGCDefaConstantsEN.con_ConstExpression:
        this.constExpression = strValue;
        this.hmProperty['constExpression'] = true;
        break;
      case clsGCDefaConstantsEN.con_FilePath:
        this.filePath = strValue;
        this.hmProperty['filePath'] = true;
        break;
      case clsGCDefaConstantsEN.con_InitValue:
        this.initValue = strValue;
        this.hmProperty['initValue'] = true;
        break;
      case clsGCDefaConstantsEN.con_DataTypeId:
        this.dataTypeId = strValue;
        this.hmProperty['dataTypeId'] = true;
        break;
      case clsGCDefaConstantsEN.con_ClsName:
        this.clsName = strValue;
        this.hmProperty['clsName'] = true;
        break;
      case clsGCDefaConstantsEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsGCDefaConstantsEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsGCDefaConstantsEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[GCDefaConstants]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public constId = ''; //常量Id
  public constName = ''; //常量名
  public constExpression = ''; //常量表达式
  public filePath = ''; //文件路径
  public initValue = ''; //初始值
  public dataTypeId = ''; //数据类型Id
  public clsName = ''; //类名
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"ConstId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ConstId = 'constId'; //常量Id

  /**
   * 常量:"ConstName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ConstName = 'constName'; //常量名

  /**
   * 常量:"ConstExpression"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ConstExpression = 'constExpression'; //常量表达式

  /**
   * 常量:"FilePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FilePath = 'filePath'; //文件路径

  /**
   * 常量:"InitValue"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_InitValue = 'initValue'; //初始值

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_DataTypeId = 'dataTypeId'; //数据类型Id

  /**
   * 常量:"ClsName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ClsName = 'clsName'; //类名

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
    //return propName in new clsGCDefaConstantsEN();
    const instance = new clsGCDefaConstantsEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
