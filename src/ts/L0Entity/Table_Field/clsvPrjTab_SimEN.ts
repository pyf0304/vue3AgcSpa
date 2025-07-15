/**
 * 类名:clsvPrjTab_SimEN
 * 表名:vPrjTab_Sim(00050597)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:47:07
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * v工程表_Sim(vPrjTab_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvPrjTab_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static readonly CacheModeId: string = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vPrjTab_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TabId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 12;
  public static AttributeName = [
    'tabId',
    'tabName',
    'sqlDsTypeId',
    'funcModuleAgcId',
    'tabTypeId',
    'cacheModeId',
    'tabStateId',
    'prjId',
    'dataBaseName',
    'updDate',
    'fldNum',
    'isShare',
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
      case clsvPrjTab_SimEN.con_TabId:
        return this.tabId;
      case clsvPrjTab_SimEN.con_TabName:
        return this.tabName;
      case clsvPrjTab_SimEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsvPrjTab_SimEN.con_FuncModuleAgcId:
        return this.funcModuleAgcId;
      case clsvPrjTab_SimEN.con_TabTypeId:
        return this.tabTypeId;
      case clsvPrjTab_SimEN.con_CacheModeId:
        return this.cacheModeId;
      case clsvPrjTab_SimEN.con_TabStateId:
        return this.tabStateId;
      case clsvPrjTab_SimEN.con_PrjId:
        return this.prjId;
      case clsvPrjTab_SimEN.con_DataBaseName:
        return this.dataBaseName;
      case clsvPrjTab_SimEN.con_UpdDate:
        return this.updDate;
      case clsvPrjTab_SimEN.con_FldNum:
        return this.fldNum;
      case clsvPrjTab_SimEN.con_IsShare:
        return this.isShare;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjTab_Sim]中不存在!`;
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
      case clsvPrjTab_SimEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvPrjTab_SimEN.con_TabName:
        this.tabName = strValue;
        break;
      case clsvPrjTab_SimEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        break;
      case clsvPrjTab_SimEN.con_FuncModuleAgcId:
        this.funcModuleAgcId = strValue;
        break;
      case clsvPrjTab_SimEN.con_TabTypeId:
        this.tabTypeId = strValue;
        break;
      case clsvPrjTab_SimEN.con_CacheModeId:
        this.cacheModeId = strValue;
        break;
      case clsvPrjTab_SimEN.con_TabStateId:
        this.tabStateId = strValue;
        break;
      case clsvPrjTab_SimEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvPrjTab_SimEN.con_DataBaseName:
        this.dataBaseName = strValue;
        break;
      case clsvPrjTab_SimEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvPrjTab_SimEN.con_FldNum:
        this.fldNum = Number(strValue);
        break;
      case clsvPrjTab_SimEN.con_IsShare:
        this.isShare = Boolean(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjTab_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public tabId = ''; //表ID
  public tabName = ''; //表名
  public sqlDsTypeId = ''; //数据源类型Id
  public funcModuleAgcId = ''; //功能模块Id
  public tabTypeId = ''; //表类型Id
  public cacheModeId = ''; //缓存方式Id
  public tabStateId = ''; //表状态ID
  public prjId = ''; //工程Id
  public dataBaseName = ''; //数据库名
  public updDate = ''; //修改日期
  public fldNum = 0; //字段数
  public isShare = false; //是否共享

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"SqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

  /**
   * 常量:"FuncModuleAgcId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncModuleAgcId(): string {
    return 'funcModuleAgcId';
  } //功能模块Id

  /**
   * 常量:"TabTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabTypeId(): string {
    return 'tabTypeId';
  } //表类型Id

  /**
   * 常量:"CacheModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CacheModeId(): string {
    return 'cacheModeId';
  } //缓存方式Id

  /**
   * 常量:"TabStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_TabStateId = 'tabStateId'; //表状态ID

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"DataBaseName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataBaseName(): string {
    return 'dataBaseName';
  } //数据库名

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"FldNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldNum(): string {
    return 'fldNum';
  } //字段数

  /**
   * 常量:"IsShare"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsShare(): string {
    return 'isShare';
  } //是否共享

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
    //return propName in new clsvPrjTab_SimEN();
    const instance = new clsvPrjTab_SimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
