/**
 * 类名:clsUserCodePathEN
 * 表名:UserCodePath(00050204)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 22:28:07
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 用户生成路径(UserCodePath)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsUserCodePathEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'UserCodePath'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 19;
  public static AttributeName = [
    'mId',
    'cMProjectAppRelaId',
    'codeTypeId',
    'tabMainTypeId',
    'isGeneCode',
    'projectFileName',
    'projectPath',
    'prjFileStateId',
    'codePath',
    'gcPathId',
    'codePathBackup',
    'suffixPath',
    'isTemplate',
    'isExistCodePath',
    'isExistCodePathBackup',
    'prjId',
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
  private mlngmId = 0; //mId
  private mlngCMProjectAppRelaId = 0; //Cm工程应用关系Id
  private mstrCodeTypeId = ''; //代码类型Id
  private mstrTabMainTypeId = ''; //表主类型Id
  private mbolIsGeneCode = false; //是否生成代码
  private mstrProjectFileName = ''; //工程文件名
  private mstrProjectPath = ''; //工程路径
  private mstrPrjFileStateId = ''; //工程文件状态Id
  private mstrCodePath = ''; //代码路径
  private mstrGcPathId = ''; //GC路径Id
  private mstrCodePathBackup = ''; //备份代码路径
  private mstrSuffixPath = ''; //后缀路径
  private mbolIsTemplate = false; //是否模板
  private mbolIsExistCodePath = false; //是否存在代码路径
  private mbolIsExistCodePathBackup = false; //是否存在备份路径
  private mstrPrjId = ''; //工程Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明

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
   * Cm工程应用关系Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCMProjectAppRelaId(value: number) {
    if (value != undefined) {
      this.cMProjectAppRelaId = value;
      this.hmProperty['cMProjectAppRelaId'] = true;
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
   * 表主类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabMainTypeId(value: string) {
    if (value != undefined) {
      this.tabMainTypeId = value;
      this.hmProperty['tabMainTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否生成代码(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsGeneCode(value: boolean) {
    if (value != undefined) {
      this.isGeneCode = value;
      this.hmProperty['isGeneCode'] = true;
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
   * 工程路径(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProjectPath(value: string) {
    if (value != undefined) {
      this.projectPath = value;
      this.hmProperty['projectPath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程文件状态Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjFileStateId(value: string) {
    if (value != undefined) {
      this.prjFileStateId = value;
      this.hmProperty['prjFileStateId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 代码路径(说明:;字段类型:varchar;字段长度:200;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodePath(value: string) {
    if (value != undefined) {
      this.codePath = value;
      this.hmProperty['codePath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * GC路径Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGcPathId(value: string) {
    if (value != undefined) {
      this.gcPathId = value;
      this.hmProperty['gcPathId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备份代码路径(说明:;字段类型:varchar;字段长度:200;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodePathBackup(value: string) {
    if (value != undefined) {
      this.codePathBackup = value;
      this.hmProperty['codePathBackup'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 后缀路径(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSuffixPath(value: string) {
    if (value != undefined) {
      this.suffixPath = value;
      this.hmProperty['suffixPath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否模板(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTemplate(value: boolean) {
    if (value != undefined) {
      this.isTemplate = value;
      this.hmProperty['isTemplate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否存在代码路径(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsExistCodePath(value: boolean) {
    if (value != undefined) {
      this.isExistCodePath = value;
      this.hmProperty['isExistCodePath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否存在备份路径(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsExistCodePathBackup(value: boolean) {
    if (value != undefined) {
      this.isExistCodePathBackup = value;
      this.hmProperty['isExistCodePathBackup'] = true;
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
      case clsUserCodePathEN.con_mId:
        return this.mId;
      case clsUserCodePathEN.con_CMProjectAppRelaId:
        return this.cMProjectAppRelaId;
      case clsUserCodePathEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsUserCodePathEN.con_TabMainTypeId:
        return this.tabMainTypeId;
      case clsUserCodePathEN.con_IsGeneCode:
        return this.isGeneCode;
      case clsUserCodePathEN.con_ProjectFileName:
        return this.projectFileName;
      case clsUserCodePathEN.con_ProjectPath:
        return this.projectPath;
      case clsUserCodePathEN.con_PrjFileStateId:
        return this.prjFileStateId;
      case clsUserCodePathEN.con_CodePath:
        return this.codePath;
      case clsUserCodePathEN.con_GcPathId:
        return this.gcPathId;
      case clsUserCodePathEN.con_CodePathBackup:
        return this.codePathBackup;
      case clsUserCodePathEN.con_SuffixPath:
        return this.suffixPath;
      case clsUserCodePathEN.con_IsTemplate:
        return this.isTemplate;
      case clsUserCodePathEN.con_IsExistCodePath:
        return this.isExistCodePath;
      case clsUserCodePathEN.con_IsExistCodePathBackup:
        return this.isExistCodePathBackup;
      case clsUserCodePathEN.con_PrjId:
        return this.prjId;
      case clsUserCodePathEN.con_UpdDate:
        return this.updDate;
      case clsUserCodePathEN.con_UpdUserId:
        return this.updUserId;
      case clsUserCodePathEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[UserCodePath]中不存在!`;
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
      case clsUserCodePathEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsUserCodePathEN.con_CMProjectAppRelaId:
        this.cMProjectAppRelaId = Number(strValue);
        this.hmProperty['cMProjectAppRelaId'] = true;
        break;
      case clsUserCodePathEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        this.hmProperty['codeTypeId'] = true;
        break;
      case clsUserCodePathEN.con_TabMainTypeId:
        this.tabMainTypeId = strValue;
        this.hmProperty['tabMainTypeId'] = true;
        break;
      case clsUserCodePathEN.con_IsGeneCode:
        this.isGeneCode = Boolean(strValue);
        this.hmProperty['isGeneCode'] = true;
        break;
      case clsUserCodePathEN.con_ProjectFileName:
        this.projectFileName = strValue;
        this.hmProperty['projectFileName'] = true;
        break;
      case clsUserCodePathEN.con_ProjectPath:
        this.projectPath = strValue;
        this.hmProperty['projectPath'] = true;
        break;
      case clsUserCodePathEN.con_PrjFileStateId:
        this.prjFileStateId = strValue;
        this.hmProperty['prjFileStateId'] = true;
        break;
      case clsUserCodePathEN.con_CodePath:
        this.codePath = strValue;
        this.hmProperty['codePath'] = true;
        break;
      case clsUserCodePathEN.con_GcPathId:
        this.gcPathId = strValue;
        this.hmProperty['gcPathId'] = true;
        break;
      case clsUserCodePathEN.con_CodePathBackup:
        this.codePathBackup = strValue;
        this.hmProperty['codePathBackup'] = true;
        break;
      case clsUserCodePathEN.con_SuffixPath:
        this.suffixPath = strValue;
        this.hmProperty['suffixPath'] = true;
        break;
      case clsUserCodePathEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        this.hmProperty['isTemplate'] = true;
        break;
      case clsUserCodePathEN.con_IsExistCodePath:
        this.isExistCodePath = Boolean(strValue);
        this.hmProperty['isExistCodePath'] = true;
        break;
      case clsUserCodePathEN.con_IsExistCodePathBackup:
        this.isExistCodePathBackup = Boolean(strValue);
        this.hmProperty['isExistCodePathBackup'] = true;
        break;
      case clsUserCodePathEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsUserCodePathEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsUserCodePathEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsUserCodePathEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[UserCodePath]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public cMProjectAppRelaId = 0; //Cm工程应用关系Id
  public codeTypeId = ''; //代码类型Id
  public tabMainTypeId = ''; //表主类型Id
  public isGeneCode = false; //是否生成代码
  public projectFileName = ''; //工程文件名
  public projectPath = ''; //工程路径
  public prjFileStateId = ''; //工程文件状态Id
  public codePath = ''; //代码路径
  public gcPathId = ''; //GC路径Id
  public codePathBackup = ''; //备份代码路径
  public suffixPath = ''; //后缀路径
  public isTemplate = false; //是否模板
  public isExistCodePath = false; //是否存在代码路径
  public isExistCodePathBackup = false; //是否存在备份路径
  public prjId = ''; //工程Id
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"CMProjectAppRelaId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CMProjectAppRelaId(): string {
    return 'cMProjectAppRelaId';
  } //Cm工程应用关系Id

  /**
   * 常量:"CodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeId(): string {
    return 'codeTypeId';
  } //代码类型Id

  /**
   * 常量:"TabMainTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabMainTypeId(): string {
    return 'tabMainTypeId';
  } //表主类型Id

  /**
   * 常量:"IsGeneCode"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsGeneCode(): string {
    return 'isGeneCode';
  } //是否生成代码

  /**
   * 常量:"ProjectFileName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProjectFileName(): string {
    return 'projectFileName';
  } //工程文件名

  /**
   * 常量:"ProjectPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProjectPath(): string {
    return 'projectPath';
  } //工程路径

  /**
   * 常量:"PrjFileStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjFileStateId(): string {
    return 'prjFileStateId';
  } //工程文件状态Id

  /**
   * 常量:"CodePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodePath(): string {
    return 'codePath';
  } //代码路径

  /**
   * 常量:"GcPathId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GcPathId(): string {
    return 'gcPathId';
  } //GC路径Id

  /**
   * 常量:"CodePathBackup"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodePathBackup(): string {
    return 'codePathBackup';
  } //备份代码路径

  /**
   * 常量:"SuffixPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SuffixPath(): string {
    return 'suffixPath';
  } //后缀路径

  /**
   * 常量:"IsTemplate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

  /**
   * 常量:"IsExistCodePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExistCodePath(): string {
    return 'isExistCodePath';
  } //是否存在代码路径

  /**
   * 常量:"IsExistCodePathBackup"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExistCodePathBackup(): string {
    return 'isExistCodePathBackup';
  } //是否存在备份路径

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
    //return propName in new clsUserCodePathEN();
    const instance = new clsUserCodePathEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
