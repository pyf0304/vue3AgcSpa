/**
 * 类名:clsCMProjectEN
 * 表名:CMProject(00050512)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:55
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * CM项目(CMProject)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCMProjectEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CMProject'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CmPrjId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 14;
  public static AttributeName = [
    'cmPrjId',
    'cmPrjName',
    'prjId',
    'applicationTypeId',
    'functionTemplateId',
    'vueDesignSysId',
    'isFstLcase',
    'isCamelCase',
    'projectFileName',
    'useStateId',
    'isRefresh4RelaView',
    'updDate',
    'updUserId',
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
  private mstrCmPrjId = ''; //Cm工程Id
  private mstrCmPrjName = ''; //CM工程名
  private mstrPrjId = ''; //工程Id
  private mintApplicationTypeId = 0; //应用程序类型ID
  private mstrFunctionTemplateId = ''; //函数模板Id
  private mstrVueDesignSysId = ''; //Vue控件设计体系Id
  private mbolIsFstLcase = false; //是否首字母小写
  private mbolIsCamelCase = false; //是否使用CamelCase
  private mstrProjectFileName = ''; //工程文件名
  private mstrUseStateId = ''; //使用状态Id
  private mbolIsRefresh4RelaView = false; //是否刷新相关视图
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明

  /**
   * Cm工程Id(说明:;字段类型:char;字段长度:6;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmPrjId(value: string) {
    if (value != undefined) {
      this.cmPrjId = value;
      this.hmProperty['cmPrjId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * CM工程名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmPrjName(value: string) {
    if (value != undefined) {
      this.cmPrjName = value;
      this.hmProperty['cmPrjName'] = true;
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
   * 应用程序类型ID(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetApplicationTypeId(value: number) {
    if (value != undefined) {
      this.applicationTypeId = value;
      this.hmProperty['applicationTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数模板Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFunctionTemplateId(value: string) {
    if (value != undefined) {
      this.functionTemplateId = value;
      this.hmProperty['functionTemplateId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Vue控件设计体系Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVueDesignSysId(value: string) {
    if (value != undefined) {
      this.vueDesignSysId = value;
      this.hmProperty['vueDesignSysId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否首字母小写(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsFstLcase(value: boolean) {
    if (value != undefined) {
      this.isFstLcase = value;
      this.hmProperty['isFstLcase'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否使用CamelCase(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsCamelCase(value: boolean) {
    if (value != undefined) {
      this.isCamelCase = value;
      this.hmProperty['isCamelCase'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程文件名(说明:;字段类型:varchar;字段长度:200;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProjectFileName(value: string) {
    if (value != undefined) {
      this.projectFileName = value;
      this.hmProperty['projectFileName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 使用状态Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUseStateId(value: string) {
    if (value != undefined) {
      this.useStateId = value;
      this.hmProperty['useStateId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否刷新相关视图(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsRefresh4RelaView(value: boolean) {
    if (value != undefined) {
      this.isRefresh4RelaView = value;
      this.hmProperty['isRefresh4RelaView'] = true;
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
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUserId(value: string) {
    if (value != undefined) {
      this.updUserId = value;
      this.hmProperty['updUserId'] = true;
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
      case clsCMProjectEN.con_CmPrjId:
        return this.cmPrjId;
      case clsCMProjectEN.con_CmPrjName:
        return this.cmPrjName;
      case clsCMProjectEN.con_PrjId:
        return this.prjId;
      case clsCMProjectEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsCMProjectEN.con_FunctionTemplateId:
        return this.functionTemplateId;
      case clsCMProjectEN.con_VueDesignSysId:
        return this.vueDesignSysId;
      case clsCMProjectEN.con_IsFstLcase:
        return this.isFstLcase;
      case clsCMProjectEN.con_IsCamelCase:
        return this.isCamelCase;
      case clsCMProjectEN.con_ProjectFileName:
        return this.projectFileName;
      case clsCMProjectEN.con_UseStateId:
        return this.useStateId;
      case clsCMProjectEN.con_IsRefresh4RelaView:
        return this.isRefresh4RelaView;
      case clsCMProjectEN.con_UpdDate:
        return this.updDate;
      case clsCMProjectEN.con_UpdUserId:
        return this.updUserId;
      case clsCMProjectEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMProject]中不存在!`;
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
      case clsCMProjectEN.con_CmPrjId:
        this.cmPrjId = strValue;
        this.hmProperty['cmPrjId'] = true;
        break;
      case clsCMProjectEN.con_CmPrjName:
        this.cmPrjName = strValue;
        this.hmProperty['cmPrjName'] = true;
        break;
      case clsCMProjectEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsCMProjectEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        this.hmProperty['applicationTypeId'] = true;
        break;
      case clsCMProjectEN.con_FunctionTemplateId:
        this.functionTemplateId = strValue;
        this.hmProperty['functionTemplateId'] = true;
        break;
      case clsCMProjectEN.con_VueDesignSysId:
        this.vueDesignSysId = strValue;
        this.hmProperty['vueDesignSysId'] = true;
        break;
      case clsCMProjectEN.con_IsFstLcase:
        this.isFstLcase = Boolean(strValue);
        this.hmProperty['isFstLcase'] = true;
        break;
      case clsCMProjectEN.con_IsCamelCase:
        this.isCamelCase = Boolean(strValue);
        this.hmProperty['isCamelCase'] = true;
        break;
      case clsCMProjectEN.con_ProjectFileName:
        this.projectFileName = strValue;
        this.hmProperty['projectFileName'] = true;
        break;
      case clsCMProjectEN.con_UseStateId:
        this.useStateId = strValue;
        this.hmProperty['useStateId'] = true;
        break;
      case clsCMProjectEN.con_IsRefresh4RelaView:
        this.isRefresh4RelaView = Boolean(strValue);
        this.hmProperty['isRefresh4RelaView'] = true;
        break;
      case clsCMProjectEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCMProjectEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsCMProjectEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[CMProject]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public cmPrjId = ''; //Cm工程Id
  public cmPrjName = ''; //CM工程名
  public prjId = ''; //工程Id
  public applicationTypeId = 0; //应用程序类型ID
  public functionTemplateId = ''; //函数模板Id
  public vueDesignSysId = ''; //Vue控件设计体系Id
  public isFstLcase = false; //是否首字母小写
  public isCamelCase = false; //是否使用CamelCase
  public projectFileName = ''; //工程文件名
  public useStateId = ''; //使用状态Id
  public isRefresh4RelaView = false; //是否刷新相关视图
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  /**
   * 常量:"CmPrjName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"FunctionTemplateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FunctionTemplateId(): string {
    return 'functionTemplateId';
  } //函数模板Id

  /**
   * 常量:"VueDesignSysId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VueDesignSysId(): string {
    return 'vueDesignSysId';
  } //Vue控件设计体系Id

  /**
   * 常量:"IsFstLcase"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsFstLcase(): string {
    return 'isFstLcase';
  } //是否首字母小写

  /**
   * 常量:"IsCamelCase"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsCamelCase(): string {
    return 'isCamelCase';
  } //是否使用CamelCase

  /**
   * 常量:"ProjectFileName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProjectFileName(): string {
    return 'projectFileName';
  } //工程文件名

  /**
   * 常量:"UseStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UseStateId(): string {
    return 'useStateId';
  } //使用状态Id

  /**
   * 常量:"IsRefresh4RelaView"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsRefresh4RelaView(): string {
    return 'isRefresh4RelaView';
  } //是否刷新相关视图

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

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
    //return propName in new clsCMProjectEN();
    const instance = new clsCMProjectEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
