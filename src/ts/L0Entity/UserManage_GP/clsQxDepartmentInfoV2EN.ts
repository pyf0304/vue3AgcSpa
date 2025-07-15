/**
 * 类名:clsQxDepartmentInfoV2EN
 * 表名:QxDepartmentInfoV2(00140111)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 15:27:39
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 部门V2(QxDepartmentInfoV2)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQxDepartmentInfoV2EN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QxDepartmentInfoV2'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DepartmentIdInt'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'departmentIdInt',
    'departmentName',
    'departmentAbbrName',
    'departmentTypeId',
    'parentDepId',
    'orderNum',
    'inUse',
    'memo',
    'createTime',
    'updateTime',
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
  private mintDepartmentIdInt = 0; //部门Id
  private mstrDepartmentName = ''; //部门名
  private mstrDepartmentAbbrName = ''; //名称缩写
  private mstrDepartmentTypeId = ''; //部门类型ID
  private mintparentDepId = 0; //所属部门号
  private mintOrderNum = 0; //排序号
  private mbolInUse = false; //是否在用
  private mstrMemo = ''; //备注
  private mstrCreateTime = ''; //建立时间
  private mstrupdateTime = ''; //修改时间

  /**
   * 部门Id(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDepartmentIdInt(value: number) {
    if (value != undefined) {
      this.departmentIdInt = value;
      this.hmProperty['departmentIdInt'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 部门名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
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
   * 名称缩写(说明:;字段类型:varchar;字段长度:8;是否可空:True)
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
   * 部门类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
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
   * 所属部门号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetparentDepId(value: number) {
    if (value != undefined) {
      this.parentDepId = value;
      this.hmProperty['parentDepId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 排序号(说明:;字段类型:int;字段长度:4;是否可空:True)
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
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
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
   * 建立时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreateTime(value: string) {
    if (value != undefined) {
      this.createTime = value;
      this.hmProperty['createTime'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetupdateTime(value: string) {
    if (value != undefined) {
      this.updateTime = value;
      this.hmProperty['updateTime'] = true;
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
      case clsQxDepartmentInfoV2EN.con_DepartmentIdInt:
        return this.departmentIdInt;
      case clsQxDepartmentInfoV2EN.con_DepartmentName:
        return this.departmentName;
      case clsQxDepartmentInfoV2EN.con_DepartmentAbbrName:
        return this.departmentAbbrName;
      case clsQxDepartmentInfoV2EN.con_DepartmentTypeId:
        return this.departmentTypeId;
      case clsQxDepartmentInfoV2EN.con_parentDepId:
        return this.parentDepId;
      case clsQxDepartmentInfoV2EN.con_OrderNum:
        return this.orderNum;
      case clsQxDepartmentInfoV2EN.con_InUse:
        return this.inUse;
      case clsQxDepartmentInfoV2EN.con_Memo:
        return this.memo;
      case clsQxDepartmentInfoV2EN.con_CreateTime:
        return this.createTime;
      case clsQxDepartmentInfoV2EN.con_updateTime:
        return this.updateTime;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxDepartmentInfoV2]中不存在！`;
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
      case clsQxDepartmentInfoV2EN.con_DepartmentIdInt:
        this.departmentIdInt = Number(strValue);
        this.hmProperty['departmentIdInt'] = true;
        break;
      case clsQxDepartmentInfoV2EN.con_DepartmentName:
        this.departmentName = strValue;
        this.hmProperty['departmentName'] = true;
        break;
      case clsQxDepartmentInfoV2EN.con_DepartmentAbbrName:
        this.departmentAbbrName = strValue;
        this.hmProperty['departmentAbbrName'] = true;
        break;
      case clsQxDepartmentInfoV2EN.con_DepartmentTypeId:
        this.departmentTypeId = strValue;
        this.hmProperty['departmentTypeId'] = true;
        break;
      case clsQxDepartmentInfoV2EN.con_parentDepId:
        this.parentDepId = Number(strValue);
        this.hmProperty['parentDepId'] = true;
        break;
      case clsQxDepartmentInfoV2EN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsQxDepartmentInfoV2EN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsQxDepartmentInfoV2EN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsQxDepartmentInfoV2EN.con_CreateTime:
        this.createTime = strValue;
        this.hmProperty['createTime'] = true;
        break;
      case clsQxDepartmentInfoV2EN.con_updateTime:
        this.updateTime = strValue;
        this.hmProperty['updateTime'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxDepartmentInfoV2]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public departmentIdInt = 0; //部门Id
  public departmentName = ''; //部门名
  public departmentAbbrName = ''; //名称缩写
  public departmentTypeId = ''; //部门类型ID
  public parentDepId = 0; //所属部门号
  public orderNum = 0; //排序号
  public inUse = false; //是否在用
  public memo = ''; //备注
  public createTime = ''; //建立时间
  public updateTime = ''; //修改时间

  /**
   * 常量:"DepartmentIdInt"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentIdInt(): string {
    return 'departmentIdInt';
  } //部门Id

  /**
   * 常量:"DepartmentName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentName(): string {
    return 'departmentName';
  } //部门名

  /**
   * 常量:"DepartmentAbbrName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentAbbrName(): string {
    return 'departmentAbbrName';
  } //名称缩写

  /**
   * 常量:"DepartmentTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentTypeId(): string {
    return 'departmentTypeId';
  } //部门类型ID

  /**
   * 常量:"parentDepId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_parentDepId(): string {
    return 'parentDepId';
  } //所属部门号

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //排序号

  /**
   * 常量:"InUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 常量:"CreateTime"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CreateTime(): string {
    return 'createTime';
  } //建立时间

  /**
   * 常量:"updateTime"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_updateTime(): string {
    return 'updateTime';
  } //修改时间

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
