/**
 * 类名:clsvFunction4Code_SimEN
 * 表名:vFunction4Code_Sim(00050602)
 * 版本:2026.04.19(服务器:PYF-AI)
 * 日期:2026/05/27 15:52:21
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * v函数4Code_Sim(vFunction4Code_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

/**
 * v函数4Code_Sim主键类型定义
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_KeyType)
 **/
export type vFunction4Code_SimKey = {
  funcId4Code: string;
};
export class clsvFunction4Code_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static _CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static readonly _CacheModeId: string = '04'; //sessionStorage
  public static readonly _PrimaryTypeId: string = '03'; //自增
  public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static readonly _WhereFormat = 'UsedTimes>0'; //条件格式串
  public static readonly _CurrTabName: string = 'vFunction4Code_Sim'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName: string = 'FuncId4Code'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 8;
  public static readonly _AttributeName = [
    'funcId4Code',
    'funcName4Code',
    'funcCHName4Code',
    'funcGCTypeId',
    'applicationTypeId',
    'funcPurposeId',
    'funcTypeId',
    'usedTimes',
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
      case clsvFunction4Code_SimEN.con_FuncId4Code:
        return this.funcId4Code;
      case clsvFunction4Code_SimEN.con_FuncName4Code:
        return this.funcName4Code;
      case clsvFunction4Code_SimEN.con_FuncCHName4Code:
        return this.funcCHName4Code;
      case clsvFunction4Code_SimEN.con_FuncGCTypeId:
        return this.funcGCTypeId;
      case clsvFunction4Code_SimEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsvFunction4Code_SimEN.con_FuncPurposeId:
        return this.funcPurposeId;
      case clsvFunction4Code_SimEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsvFunction4Code_SimEN.con_UsedTimes:
        return this.usedTimes;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunction4Code_Sim]中不存在!`;
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
      case clsvFunction4Code_SimEN.con_FuncId4Code:
        this.funcId4Code = strValue;
        break;
      case clsvFunction4Code_SimEN.con_FuncName4Code:
        this.funcName4Code = strValue;
        break;
      case clsvFunction4Code_SimEN.con_FuncCHName4Code:
        this.funcCHName4Code = strValue;
        break;
      case clsvFunction4Code_SimEN.con_FuncGCTypeId:
        this.funcGCTypeId = strValue;
        break;
      case clsvFunction4Code_SimEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        break;
      case clsvFunction4Code_SimEN.con_FuncPurposeId:
        this.funcPurposeId = strValue;
        break;
      case clsvFunction4Code_SimEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        break;
      case clsvFunction4Code_SimEN.con_UsedTimes:
        this.usedTimes = Number(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunction4Code_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public funcId4Code = ''; //函数Id4Code
  public funcName4Code = ''; //函数名4Code
  public funcCHName4Code = ''; //函数中文名4Code
  public funcGCTypeId = ''; //函数生成代码类型Id
  public applicationTypeId = 0; //应用程序类型ID
  public funcPurposeId = ''; //函数用途Id
  public funcTypeId = ''; //函数类型Id
  public usedTimes = 0; //使用次数

  /**
   * 常量:"FuncId4Code"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FuncId4Code = 'funcId4Code'; //函数Id4Code

  /**
   * 常量:"FuncName4Code"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FuncName4Code = 'funcName4Code'; //函数名4Code

  /**
   * 常量:"FuncCHName4Code"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FuncCHName4Code = 'funcCHName4Code'; //函数中文名4Code

  /**
   * 常量:"FuncGCTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FuncGCTypeId = 'funcGCTypeId'; //函数生成代码类型Id

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ApplicationTypeId = 'applicationTypeId'; //应用程序类型ID

  /**
   * 常量:"FuncPurposeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FuncPurposeId = 'funcPurposeId'; //函数用途Id

  /**
   * 常量:"FuncTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FuncTypeId = 'funcTypeId'; //函数类型Id

  /**
   * 常量:"UsedTimes"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_UsedTimes = 'usedTimes'; //使用次数

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
    //return propName in new clsvFunction4Code_SimEN();
    const instance = new clsvFunction4Code_SimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
