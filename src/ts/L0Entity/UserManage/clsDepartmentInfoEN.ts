/**
 * 类名:clsDepartmentInfoEN
 * 表名:DepartmentInfo(00050029)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:37
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 部门(DepartmentInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDepartmentInfoEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'DepartmentInfo'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DepartmentId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'departmentId',
    'departmentName',
    'departmentAbbrName',
    'departmentTypeId',
    'upDepartmentId',
    'inUse',
    'orderNum',
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
  private mstrDepartmentId = ''; //部门ID
  private mstrDepartmentName = ''; //部门名称
  private mstrDepartmentAbbrName = ''; //部门简称
  private mstrDepartmentTypeId = ''; //部门类型Id
  private mstrUpDepartmentId = ''; //上级部门Id
  private mbolInUse = false; //是否在用
  private mintOrderNum = 0; //序号
  private mstrMemo = ''; //说明

  /**
   * 部门ID(说明:;字段类型:varchar;字段长度:6;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDepartmentId(value: string) {
    if (value != undefined) {
      this.departmentId = value;
      this.hmProperty['departmentId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 部门名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDepartmentName(value: string) {
    if (value != undefined) {
      this.departmentName = value;
      this.hmProperty['departmentName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 部门简称(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDepartmentAbbrName(value: string) {
    if (value != undefined) {
      this.departmentAbbrName = value;
      this.hmProperty['departmentAbbrName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 部门类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDepartmentTypeId(value: string) {
    if (value != undefined) {
      this.departmentTypeId = value;
      this.hmProperty['departmentTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 上级部门Id(说明:;字段类型:varchar;字段长度:6;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpDepartmentId(value: string) {
    if (value != undefined) {
      this.upDepartmentId = value;
      this.hmProperty['upDepartmentId'] = true;
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
      case clsDepartmentInfoEN.con_DepartmentId:
        return this.departmentId;
      case clsDepartmentInfoEN.con_DepartmentName:
        return this.departmentName;
      case clsDepartmentInfoEN.con_DepartmentAbbrName:
        return this.departmentAbbrName;
      case clsDepartmentInfoEN.con_DepartmentTypeId:
        return this.departmentTypeId;
      case clsDepartmentInfoEN.con_UpDepartmentId:
        return this.upDepartmentId;
      case clsDepartmentInfoEN.con_InUse:
        return this.inUse;
      case clsDepartmentInfoEN.con_OrderNum:
        return this.orderNum;
      case clsDepartmentInfoEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DepartmentInfo]中不存在!`;
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
      case clsDepartmentInfoEN.con_DepartmentId:
        this.departmentId = strValue;
        this.hmProperty['departmentId'] = true;
        break;
      case clsDepartmentInfoEN.con_DepartmentName:
        this.departmentName = strValue;
        this.hmProperty['departmentName'] = true;
        break;
      case clsDepartmentInfoEN.con_DepartmentAbbrName:
        this.departmentAbbrName = strValue;
        this.hmProperty['departmentAbbrName'] = true;
        break;
      case clsDepartmentInfoEN.con_DepartmentTypeId:
        this.departmentTypeId = strValue;
        this.hmProperty['departmentTypeId'] = true;
        break;
      case clsDepartmentInfoEN.con_UpDepartmentId:
        this.upDepartmentId = strValue;
        this.hmProperty['upDepartmentId'] = true;
        break;
      case clsDepartmentInfoEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsDepartmentInfoEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsDepartmentInfoEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DepartmentInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public departmentId = ''; //部门ID
  public departmentName = ''; //部门名称
  public departmentAbbrName = ''; //部门简称
  public departmentTypeId = ''; //部门类型Id
  public upDepartmentId = ''; //上级部门Id
  public inUse = false; //是否在用
  public orderNum = 0; //序号
  public memo = ''; //说明

  /**
   * 常量:"DepartmentId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentId(): string {
    return 'departmentId';
  } //部门ID

  /**
   * 常量:"DepartmentName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentName(): string {
    return 'departmentName';
  } //部门名称

  /**
   * 常量:"DepartmentAbbrName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentAbbrName(): string {
    return 'departmentAbbrName';
  } //部门简称

  /**
   * 常量:"DepartmentTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentTypeId(): string {
    return 'departmentTypeId';
  } //部门类型Id

  /**
   * 常量:"UpDepartmentId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpDepartmentId(): string {
    return 'upDepartmentId';
  } //上级部门Id

  /**
   * 常量:"InUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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
