/**
 * 类名:clsCTCodeTypeGroupRelaEN
 * 表名:CTCodeTypeGroupRela(00050647)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/07 14:01:07
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
  public static readonly _AttributeCount = 17;
  public static readonly _AttributeName = [
    'ctGroupId',
    'codeTypeId',
    'isMainGroup',
    'orderNum',
    'layerNo',
    'posX',
    'posY',
    'posXSmall',
    'posYSmall',
    'posXLarge',
    'posYLarge',
    'layoutVersion',
    'isPinned',
    'layoutUpdatedBy',
    'layoutUpdatedAt',
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
  private mintLayerNo = 0; //LayerNo
  private mintPosX = 0; //PosX
  private mintPosY = 0; //PosY
  private mintPosXSmall = 0; //PosXSmall
  private mintPosYSmall = 0; //PosYSmall
  private mintPosXLarge = 0; //PosXLarge
  private mintPosYLarge = 0; //PosYLarge
  private mintLayoutVersion = 0; //LayoutVersion
  private mbolIsPinned = false; //IsPinned
  private mstrLayoutUpdatedBy = ''; //LayoutUpdatedBy
  private mstrLayoutUpdatedAt = ''; //LayoutUpdatedAt
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
   * LayerNo(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLayerNo(value: number) {
    if (value != undefined) {
      this.layerNo = value;
      this.hmProperty['layerNo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * PosX(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosX(value: number) {
    if (value != undefined) {
      this.posX = value;
      this.hmProperty['posX'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * PosY(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosY(value: number) {
    if (value != undefined) {
      this.posY = value;
      this.hmProperty['posY'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * PosXSmall(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosXSmall(value: number) {
    if (value != undefined) {
      this.posXSmall = value;
      this.hmProperty['posXSmall'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * PosYSmall(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosYSmall(value: number) {
    if (value != undefined) {
      this.posYSmall = value;
      this.hmProperty['posYSmall'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * PosXLarge(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosXLarge(value: number) {
    if (value != undefined) {
      this.posXLarge = value;
      this.hmProperty['posXLarge'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * PosYLarge(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosYLarge(value: number) {
    if (value != undefined) {
      this.posYLarge = value;
      this.hmProperty['posYLarge'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * LayoutVersion(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLayoutVersion(value: number) {
    if (value != undefined) {
      this.layoutVersion = value;
      this.hmProperty['layoutVersion'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsPinned(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsPinned(value: boolean) {
    if (value != undefined) {
      this.isPinned = value;
      this.hmProperty['isPinned'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * LayoutUpdatedBy(说明:;字段类型:nvarchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLayoutUpdatedBy(value: string) {
    if (value != undefined) {
      this.layoutUpdatedBy = value;
      this.hmProperty['layoutUpdatedBy'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * LayoutUpdatedAt(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLayoutUpdatedAt(value: string) {
    if (value != undefined) {
      this.layoutUpdatedAt = value;
      this.hmProperty['layoutUpdatedAt'] = true;
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
      case clsCTCodeTypeGroupRelaEN.con_LayerNo:
        return this.layerNo;
      case clsCTCodeTypeGroupRelaEN.con_PosX:
        return this.posX;
      case clsCTCodeTypeGroupRelaEN.con_PosY:
        return this.posY;
      case clsCTCodeTypeGroupRelaEN.con_PosXSmall:
        return this.posXSmall;
      case clsCTCodeTypeGroupRelaEN.con_PosYSmall:
        return this.posYSmall;
      case clsCTCodeTypeGroupRelaEN.con_PosXLarge:
        return this.posXLarge;
      case clsCTCodeTypeGroupRelaEN.con_PosYLarge:
        return this.posYLarge;
      case clsCTCodeTypeGroupRelaEN.con_LayoutVersion:
        return this.layoutVersion;
      case clsCTCodeTypeGroupRelaEN.con_IsPinned:
        return this.isPinned;
      case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedBy:
        return this.layoutUpdatedBy;
      case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedAt:
        return this.layoutUpdatedAt;
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
      case clsCTCodeTypeGroupRelaEN.con_LayerNo:
        this.layerNo = Number(strValue);
        this.hmProperty['layerNo'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_PosX:
        this.posX = Number(strValue);
        this.hmProperty['posX'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_PosY:
        this.posY = Number(strValue);
        this.hmProperty['posY'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_PosXSmall:
        this.posXSmall = Number(strValue);
        this.hmProperty['posXSmall'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_PosYSmall:
        this.posYSmall = Number(strValue);
        this.hmProperty['posYSmall'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_PosXLarge:
        this.posXLarge = Number(strValue);
        this.hmProperty['posXLarge'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_PosYLarge:
        this.posYLarge = Number(strValue);
        this.hmProperty['posYLarge'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_LayoutVersion:
        this.layoutVersion = Number(strValue);
        this.hmProperty['layoutVersion'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_IsPinned:
        this.isPinned = Boolean(strValue);
        this.hmProperty['isPinned'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedBy:
        this.layoutUpdatedBy = strValue;
        this.hmProperty['layoutUpdatedBy'] = true;
        break;
      case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedAt:
        this.layoutUpdatedAt = strValue;
        this.hmProperty['layoutUpdatedAt'] = true;
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
  public layerNo = 0; //LayerNo
  public posX = 0; //PosX
  public posY = 0; //PosY
  public posXSmall = 0; //PosXSmall
  public posYSmall = 0; //PosYSmall
  public posXLarge = 0; //PosXLarge
  public posYLarge = 0; //PosYLarge
  public layoutVersion = 0; //LayoutVersion
  public isPinned = false; //IsPinned
  public layoutUpdatedBy = ''; //LayoutUpdatedBy
  public layoutUpdatedAt = ''; //LayoutUpdatedAt
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
   * 常量:"LayerNo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_LayerNo = 'layerNo'; //LayerNo

  /**
   * 常量:"PosX"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_PosX = 'posX'; //PosX

  /**
   * 常量:"PosY"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_PosY = 'posY'; //PosY

  /**
   * 常量:"PosXSmall"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_PosXSmall = 'posXSmall'; //PosXSmall

  /**
   * 常量:"PosYSmall"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_PosYSmall = 'posYSmall'; //PosYSmall

  /**
   * 常量:"PosXLarge"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_PosXLarge = 'posXLarge'; //PosXLarge

  /**
   * 常量:"PosYLarge"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_PosYLarge = 'posYLarge'; //PosYLarge

  /**
   * 常量:"LayoutVersion"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_LayoutVersion = 'layoutVersion'; //LayoutVersion

  /**
   * 常量:"IsPinned"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_IsPinned = 'isPinned'; //IsPinned

  /**
   * 常量:"LayoutUpdatedBy"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_LayoutUpdatedBy = 'layoutUpdatedBy'; //LayoutUpdatedBy

  /**
   * 常量:"LayoutUpdatedAt"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_LayoutUpdatedAt = 'layoutUpdatedAt'; //LayoutUpdatedAt

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
