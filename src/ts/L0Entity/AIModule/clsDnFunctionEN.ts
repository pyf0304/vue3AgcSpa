/**
 * 类名:clsDnFunctionEN
 * 表名:DnFunction(00050552)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:53:02
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 数据结点函数(DnFunction)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDnFunctionEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'DnFunction'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DnFunctionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'dnFunctionId',
    'dnFunctionName',
    'associationMappingId',
    'importClass',
    'importPath',
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
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrDnFunctionId = ''; //DN函数Id
  private mstrDnFunctionName = ''; //DN函数
  private mstrAssociationMappingId = ''; //关联关系映射Id
  private mstrImportClass = ''; //导入类
  private mstrImportPath = ''; //导入路径
  private mstrPrjId = ''; //工程Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * DN函数Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnFunctionId(value: string) {
    if (value != undefined) {
      this.dnFunctionId = value;
      this.hmProperty['dnFunctionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DN函数(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnFunctionName(value: string) {
    if (value != undefined) {
      this.dnFunctionName = value;
      this.hmProperty['dnFunctionName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关联关系映射Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAssociationMappingId(value: string) {
    if (value != undefined) {
      this.associationMappingId = value;
      this.hmProperty['associationMappingId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 导入类(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetImportClass(value: string) {
    if (value != undefined) {
      this.importClass = value;
      this.hmProperty['importClass'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 导入路径(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetImportPath(value: string) {
    if (value != undefined) {
      this.importPath = value;
      this.hmProperty['importPath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjId(value: string) {
    if (value != undefined) {
      this.prjId = value;
      this.hmProperty['prjId'] = true;
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
      case clsDnFunctionEN.con_DnFunctionId:
        return this.dnFunctionId;
      case clsDnFunctionEN.con_DnFunctionName:
        return this.dnFunctionName;
      case clsDnFunctionEN.con_AssociationMappingId:
        return this.associationMappingId;
      case clsDnFunctionEN.con_ImportClass:
        return this.importClass;
      case clsDnFunctionEN.con_ImportPath:
        return this.importPath;
      case clsDnFunctionEN.con_PrjId:
        return this.prjId;
      case clsDnFunctionEN.con_UpdDate:
        return this.updDate;
      case clsDnFunctionEN.con_UpdUser:
        return this.updUser;
      case clsDnFunctionEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DnFunction]中不存在!`;
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
      case clsDnFunctionEN.con_DnFunctionId:
        this.dnFunctionId = strValue;
        this.hmProperty['dnFunctionId'] = true;
        break;
      case clsDnFunctionEN.con_DnFunctionName:
        this.dnFunctionName = strValue;
        this.hmProperty['dnFunctionName'] = true;
        break;
      case clsDnFunctionEN.con_AssociationMappingId:
        this.associationMappingId = strValue;
        this.hmProperty['associationMappingId'] = true;
        break;
      case clsDnFunctionEN.con_ImportClass:
        this.importClass = strValue;
        this.hmProperty['importClass'] = true;
        break;
      case clsDnFunctionEN.con_ImportPath:
        this.importPath = strValue;
        this.hmProperty['importPath'] = true;
        break;
      case clsDnFunctionEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsDnFunctionEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsDnFunctionEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsDnFunctionEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DnFunction]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dnFunctionId = ''; //DN函数Id
  public dnFunctionName = ''; //DN函数
  public associationMappingId = ''; //关联关系映射Id
  public importClass = ''; //导入类
  public importPath = ''; //导入路径
  public prjId = ''; //工程Id
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"DnFunctionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnFunctionId(): string {
    return 'dnFunctionId';
  } //DN函数Id

  /**
   * 常量:"DnFunctionName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnFunctionName(): string {
    return 'dnFunctionName';
  } //DN函数

  /**
   * 常量:"AssociationMappingId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AssociationMappingId(): string {
    return 'associationMappingId';
  } //关联关系映射Id

  /**
   * 常量:"ImportClass"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ImportClass(): string {
    return 'importClass';
  } //导入类

  /**
   * 常量:"ImportPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ImportPath(): string {
    return 'importPath';
  } //导入路径

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

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
    //return propName in new clsDnFunctionEN();
    const instance = new clsDnFunctionEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
