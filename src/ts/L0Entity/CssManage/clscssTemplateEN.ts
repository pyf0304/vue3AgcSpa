/**
 * 类名:clscssTemplateEN
 * 表名:css_Template(00050469)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:16:12
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:样式表管理(CssManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * css_Template(cssTemplate)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clscssTemplateEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'cssTemplate'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TemplateId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 11;
  public static AttributeName = [
    'templateId',
    'templateName',
    'templateDesc',
    'orderNum',
    'templatePic',
    'isPublic',
    'isDeleted',
    'deletedDate',
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
  private mstrTemplateId = ''; //模板ID
  private mstrTemplateName = ''; //模板名称
  private mstrTemplateDesc = ''; //模板描述
  private mintOrderNum = 0; //序号
  private mstrTemplatePic = ''; //模板图片
  private mbolIsPublic = false; //是否公开
  private mbol_IsDeleted = false; //是否删除
  private mstr_DeletedDate = ''; //删除日期
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 模板ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTemplateId(value: string) {
    if (value != undefined) {
      this.templateId = value;
      this.hmProperty['templateId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 模板名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTemplateName(value: string) {
    if (value != undefined) {
      this.templateName = value;
      this.hmProperty['templateName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 模板描述(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTemplateDesc(value: string) {
    if (value != undefined) {
      this.templateDesc = value;
      this.hmProperty['templateDesc'] = true;
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
   * 模板图片(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTemplatePic(value: string) {
    if (value != undefined) {
      this.templatePic = value;
      this.hmProperty['templatePic'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否公开(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsPublic(value: boolean) {
    if (value != undefined) {
      this.isPublic = value;
      this.hmProperty['isPublic'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否删除(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Set_IsDeleted(value: boolean) {
    if (value != undefined) {
      this.isDeleted = value;
      this.hmProperty['isDeleted'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 删除日期(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Set_DeletedDate(value: string) {
    if (value != undefined) {
      this.deletedDate = value;
      this.hmProperty['deletedDate'] = true;
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
      case clscssTemplateEN.conTemplateId:
        return this.templateId;
      case clscssTemplateEN.conTemplateName:
        return this.templateName;
      case clscssTemplateEN.conTemplateDesc:
        return this.templateDesc;
      case clscssTemplateEN.con_OrderNum:
        return this.orderNum;
      case clscssTemplateEN.conTemplatePic:
        return this.templatePic;
      case clscssTemplateEN.conIsPublic:
        return this.isPublic;
      case clscssTemplateEN.conIsDeleted:
        return this.isDeleted;
      case clscssTemplateEN.conDeletedDate:
        return this.deletedDate;
      case clscssTemplateEN.conUpdDate:
        return this.updDate;
      case clscssTemplateEN.conUpdUser:
        return this.updUser;
      case clscssTemplateEN.conMemo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[cssTemplate]中不存在！`;
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
      case clscssTemplateEN.conTemplateId:
        this.templateId = strValue;
        this.hmProperty['templateId'] = true;
        break;
      case clscssTemplateEN.conTemplateName:
        this.templateName = strValue;
        this.hmProperty['templateName'] = true;
        break;
      case clscssTemplateEN.conTemplateDesc:
        this.templateDesc = strValue;
        this.hmProperty['templateDesc'] = true;
        break;
      case clscssTemplateEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clscssTemplateEN.conTemplatePic:
        this.templatePic = strValue;
        this.hmProperty['templatePic'] = true;
        break;
      case clscssTemplateEN.conIsPublic:
        this.isPublic = Boolean(strValue);
        this.hmProperty['isPublic'] = true;
        break;
      case clscssTemplateEN.conIsDeleted:
        this.isDeleted = Boolean(strValue);
        this.hmProperty['isDeleted'] = true;
        break;
      case clscssTemplateEN.conDeletedDate:
        this.deletedDate = strValue;
        this.hmProperty['deletedDate'] = true;
        break;
      case clscssTemplateEN.conUpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clscssTemplateEN.conUpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clscssTemplateEN.conMemo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[cssTemplate]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public templateId = ''; //模板ID
  public templateName = ''; //模板名称
  public templateDesc = ''; //模板描述
  public orderNum = 0; //序号
  public templatePic = ''; //模板图片
  public isPublic = false; //是否公开
  public isDeleted = false; //是否删除
  public deletedDate = ''; //删除日期
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"TemplateId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conTemplateId(): string {
    return 'templateId';
  } //模板ID

  /**
   * 常量:"TemplateName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conTemplateName(): string {
    return 'templateName';
  } //模板名称

  /**
   * 常量:"TemplateDesc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conTemplateDesc(): string {
    return 'templateDesc';
  } //模板描述

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"TemplatePic"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conTemplatePic(): string {
    return 'templatePic';
  } //模板图片

  /**
   * 常量:"IsPublic"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conIsPublic(): string {
    return 'isPublic';
  } //是否公开

  /**
   * 常量:"IsDeleted"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conIsDeleted(): string {
    return 'isDeleted';
  } //是否删除

  /**
   * 常量:"DeletedDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDeletedDate(): string {
    return 'deletedDate';
  } //删除日期

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conMemo(): string {
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
