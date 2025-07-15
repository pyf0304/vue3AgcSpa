/**
 * 类名:clscss_TemplateStyleEN
 * 表名:css_TemplateStyle(00050470)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:23
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
 * css_TemplateStyle(css_TemplateStyle)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clscss_TemplateStyleEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'css_TemplateStyle'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'mId',
    'styleId',
    'templateId',
    'cssModuleAreaId',
    'templateStyleName',
    'updDate',
    'updUser',
    'memo',
    'templateStyleNameEn',
    'isDelete',
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
  private mlngmId = 0; //mId
  private mstrStyleId = ''; //样式ID
  private mstrTemplateId = ''; //模板ID
  private mstrcssModuleAreaId = ''; //区域主键
  private mstrTemplateStyleName = ''; //模板样式名称
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明
  private mstrTemplateStyleNameEn = ''; //模板样式英文
  private mbolIsDelete = false; //IsDelete

  /**
   * mId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetmId(value: number) {
    if (value != undefined) {
      this.mId = value;
      this.hmProperty['mId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 样式ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleId(value: string) {
    if (value != undefined) {
      this.styleId = value;
      this.hmProperty['styleId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

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
   * 区域主键(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetcssModuleAreaId(value: string) {
    if (value != undefined) {
      this.cssModuleAreaId = value;
      this.hmProperty['cssModuleAreaId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 模板样式名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTemplateStyleName(value: string) {
    if (value != undefined) {
      this.templateStyleName = value;
      this.hmProperty['templateStyleName'] = true;
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
   * 模板样式英文(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTemplateStyleNameEn(value: string) {
    if (value != undefined) {
      this.templateStyleNameEn = value;
      this.hmProperty['templateStyleNameEn'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsDelete(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsDelete(value: boolean) {
    if (value != undefined) {
      this.isDelete = value;
      this.hmProperty['isDelete'] = true;
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
      case clscss_TemplateStyleEN.con_mId:
        return this.mId;
      case clscss_TemplateStyleEN.con_StyleId:
        return this.styleId;
      case clscss_TemplateStyleEN.con_TemplateId:
        return this.templateId;
      case clscss_TemplateStyleEN.con_cssModuleAreaId:
        return this.cssModuleAreaId;
      case clscss_TemplateStyleEN.con_TemplateStyleName:
        return this.templateStyleName;
      case clscss_TemplateStyleEN.con_UpdDate:
        return this.updDate;
      case clscss_TemplateStyleEN.con_UpdUser:
        return this.updUser;
      case clscss_TemplateStyleEN.con_Memo:
        return this.memo;
      case clscss_TemplateStyleEN.con_TemplateStyleNameEn:
        return this.templateStyleNameEn;
      case clscss_TemplateStyleEN.con_IsDelete:
        return this.isDelete;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[css_TemplateStyle]中不存在!`;
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
      case clscss_TemplateStyleEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clscss_TemplateStyleEN.con_StyleId:
        this.styleId = strValue;
        this.hmProperty['styleId'] = true;
        break;
      case clscss_TemplateStyleEN.con_TemplateId:
        this.templateId = strValue;
        this.hmProperty['templateId'] = true;
        break;
      case clscss_TemplateStyleEN.con_cssModuleAreaId:
        this.cssModuleAreaId = strValue;
        this.hmProperty['cssModuleAreaId'] = true;
        break;
      case clscss_TemplateStyleEN.con_TemplateStyleName:
        this.templateStyleName = strValue;
        this.hmProperty['templateStyleName'] = true;
        break;
      case clscss_TemplateStyleEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clscss_TemplateStyleEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clscss_TemplateStyleEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clscss_TemplateStyleEN.con_TemplateStyleNameEn:
        this.templateStyleNameEn = strValue;
        this.hmProperty['templateStyleNameEn'] = true;
        break;
      case clscss_TemplateStyleEN.con_IsDelete:
        this.isDelete = Boolean(strValue);
        this.hmProperty['isDelete'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[css_TemplateStyle]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public styleId = ''; //样式ID
  public templateId = ''; //模板ID
  public cssModuleAreaId = ''; //区域主键
  public templateStyleName = ''; //模板样式名称
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public templateStyleNameEn = ''; //模板样式英文
  public isDelete = false; //IsDelete

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"StyleId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_StyleId(): string {
    return 'styleId';
  } //样式ID

  /**
   * 常量:"TemplateId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TemplateId(): string {
    return 'templateId';
  } //模板ID

  /**
   * 常量:"cssModuleAreaId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_cssModuleAreaId(): string {
    return 'cssModuleAreaId';
  } //区域主键

  /**
   * 常量:"TemplateStyleName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TemplateStyleName(): string {
    return 'templateStyleName';
  } //模板样式名称

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"TemplateStyleNameEn"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TemplateStyleNameEn(): string {
    return 'templateStyleNameEn';
  } //模板样式英文

  /**
   * 常量:"IsDelete"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsDelete(): string {
    return 'isDelete';
  } //IsDelete

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
