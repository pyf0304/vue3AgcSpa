/**
 * 类名:clsvFieldTab_SimEN
 * 表名:vFieldTab_Sim(00050590)
 * 版本:2025.07.05.1(服务器:WIN-SRV103-116)
 * 日期:2025/07/05 15:21:31
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
 * v字段表_Sim(vFieldTab_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFieldTab_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static _CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static readonly _CacheModeId: string = '04'; //sessionStorage
  public static readonly _PrimaryTypeId: string = '01'; //关键字
  public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static readonly _WhereFormat = "(substring(FldId,1,4) ='{0}')"; //条件格式串
  public static readonly _CurrTabName = 'vFieldTab_Sim'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName = 'FldId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 4;
  public static readonly _AttributeName = ['fldId', 'fldName', 'caption', 'dataTypeId'];
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
      case clsvFieldTab_SimEN.con_FldId:
        return this.fldId;
      case clsvFieldTab_SimEN.con_FldName:
        return this.fldName;
      case clsvFieldTab_SimEN.con_Caption:
        return this.caption;
      case clsvFieldTab_SimEN.con_DataTypeId:
        return this.dataTypeId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFieldTab_Sim]中不存在!`;
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
      case clsvFieldTab_SimEN.con_FldId:
        this.fldId = strValue;
        break;
      case clsvFieldTab_SimEN.con_FldName:
        this.fldName = strValue;
        break;
      case clsvFieldTab_SimEN.con_Caption:
        this.caption = strValue;
        break;
      case clsvFieldTab_SimEN.con_DataTypeId:
        this.dataTypeId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFieldTab_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public fldId = ''; //字段Id
  public fldName = ''; //字段名
  public caption = ''; //标题
  public dataTypeId = ''; //数据类型Id

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FldId = 'fldId'; //字段Id

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FldName = 'fldName'; //字段名

  /**
   * 常量:"Caption"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_Caption = 'caption'; //标题

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_DataTypeId = 'dataTypeId'; //数据类型Id

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
    //return propName in new clsvFieldTab_SimEN();
    const instance = new clsvFieldTab_SimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
