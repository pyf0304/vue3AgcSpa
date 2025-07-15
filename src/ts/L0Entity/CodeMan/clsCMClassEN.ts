/**
 * 类名:clsCMClassEN
 * 表名:CMClass(00050501)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:29
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * CM类(CMClass)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCMClassEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CMClass'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CmClassId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 18;
  public static AttributeName = [
    'cmClassId',
    'applicationTypeId',
    'progLangTypeId',
    'tabName',
    'nameSpace',
    'projectPath',
    'filePath',
    'fileName',
    'fileText',
    'funcModuleAgcId',
    'codeTypeId',
    'userId',
    'prjId',
    'isOpen',
    'updDate',
    'updUser',
    'memo',
    'clsName',
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
  private mstrCmClassId = ''; //类Id
  private mintApplicationTypeId = 0; //应用程序类型ID
  private mstrProgLangTypeId = ''; //编程语言类型Id
  private mstrTabName = ''; //表名
  private mstrNameSpace = ''; //域名
  private mstrProjectPath = ''; //工程路径
  private mstrFilePath = ''; //文件路径
  private mstrFileName = ''; //文件名
  private mstrFileText = ''; //文件内容
  private mstrFuncModuleAgcId = ''; //功能模块Id
  private mstrCodeTypeId = ''; //代码类型Id
  private mstrUserId = ''; //用户Id
  private mstrPrjId = ''; //工程ID
  private mbolIsOpen = false; //是否开放
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明
  private mstrClsName = ''; //类名

  /**
   * 类Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmClassId(value: string) {
    if (value != undefined) {
      this.cmClassId = value;
      this.hmProperty['cmClassId'] = true;
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
   * 编程语言类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProgLangTypeId(value: string) {
    if (value != undefined) {
      this.progLangTypeId = value;
      this.hmProperty['progLangTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabName(value: string) {
    if (value != undefined) {
      this.tabName = value;
      this.hmProperty['tabName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 域名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetNameSpace(value: string) {
    if (value != undefined) {
      this.nameSpace = value;
      this.hmProperty['nameSpace'] = true;
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
   * 文件路径(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFilePath(value: string) {
    if (value != undefined) {
      this.filePath = value;
      this.hmProperty['filePath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件名(说明:;字段类型:varchar;字段长度:150;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFileName(value: string) {
    if (value != undefined) {
      this.fileName = value;
      this.hmProperty['fileName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFileText(value: string) {
    if (value != undefined) {
      this.fileText = value;
      this.hmProperty['fileText'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能模块Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncModuleAgcId(value: string) {
    if (value != undefined) {
      this.funcModuleAgcId = value;
      this.hmProperty['funcModuleAgcId'] = true;
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
   * 用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId(value: string) {
    if (value != undefined) {
      this.userId = value;
      this.hmProperty['userId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程ID(说明:;字段类型:char;字段长度:4;是否可空:False)
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
   * 是否开放(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsOpen(value: boolean) {
    if (value != undefined) {
      this.isOpen = value;
      this.hmProperty['isOpen'] = true;
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
   * 类名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClsName(value: string) {
    if (value != undefined) {
      this.clsName = value;
      this.hmProperty['clsName'] = true;
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
      case clsCMClassEN.con_CmClassId:
        return this.cmClassId;
      case clsCMClassEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsCMClassEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsCMClassEN.con_TabName:
        return this.tabName;
      case clsCMClassEN.con_NameSpace:
        return this.nameSpace;
      case clsCMClassEN.con_ProjectPath:
        return this.projectPath;
      case clsCMClassEN.con_FilePath:
        return this.filePath;
      case clsCMClassEN.con_FileName:
        return this.fileName;
      case clsCMClassEN.con_FileText:
        return this.fileText;
      case clsCMClassEN.con_FuncModuleAgcId:
        return this.funcModuleAgcId;
      case clsCMClassEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsCMClassEN.con_UserId:
        return this.userId;
      case clsCMClassEN.con_PrjId:
        return this.prjId;
      case clsCMClassEN.con_IsOpen:
        return this.isOpen;
      case clsCMClassEN.con_UpdDate:
        return this.updDate;
      case clsCMClassEN.con_UpdUser:
        return this.updUser;
      case clsCMClassEN.con_Memo:
        return this.memo;
      case clsCMClassEN.con_ClsName:
        return this.clsName;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMClass]中不存在!`;
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
      case clsCMClassEN.con_CmClassId:
        this.cmClassId = strValue;
        this.hmProperty['cmClassId'] = true;
        break;
      case clsCMClassEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        this.hmProperty['applicationTypeId'] = true;
        break;
      case clsCMClassEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        this.hmProperty['progLangTypeId'] = true;
        break;
      case clsCMClassEN.con_TabName:
        this.tabName = strValue;
        this.hmProperty['tabName'] = true;
        break;
      case clsCMClassEN.con_NameSpace:
        this.nameSpace = strValue;
        this.hmProperty['nameSpace'] = true;
        break;
      case clsCMClassEN.con_ProjectPath:
        this.projectPath = strValue;
        this.hmProperty['projectPath'] = true;
        break;
      case clsCMClassEN.con_FilePath:
        this.filePath = strValue;
        this.hmProperty['filePath'] = true;
        break;
      case clsCMClassEN.con_FileName:
        this.fileName = strValue;
        this.hmProperty['fileName'] = true;
        break;
      case clsCMClassEN.con_FileText:
        this.fileText = strValue;
        this.hmProperty['fileText'] = true;
        break;
      case clsCMClassEN.con_FuncModuleAgcId:
        this.funcModuleAgcId = strValue;
        this.hmProperty['funcModuleAgcId'] = true;
        break;
      case clsCMClassEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        this.hmProperty['codeTypeId'] = true;
        break;
      case clsCMClassEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsCMClassEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsCMClassEN.con_IsOpen:
        this.isOpen = Boolean(strValue);
        this.hmProperty['isOpen'] = true;
        break;
      case clsCMClassEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCMClassEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsCMClassEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsCMClassEN.con_ClsName:
        this.clsName = strValue;
        this.hmProperty['clsName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMClass]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public cmClassId = ''; //类Id
  public applicationTypeId = 0; //应用程序类型ID
  public progLangTypeId = ''; //编程语言类型Id
  public tabName = ''; //表名
  public nameSpace = ''; //域名
  public projectPath = ''; //工程路径
  public filePath = ''; //文件路径
  public fileName = ''; //文件名
  public fileText = ''; //文件内容
  public funcModuleAgcId = ''; //功能模块Id
  public codeTypeId = ''; //代码类型Id
  public userId = ''; //用户Id
  public prjId = ''; //工程ID
  public isOpen = false; //是否开放
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public clsName = ''; //类名

  /**
   * 常量:"CmClassId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmClassId(): string {
    return 'cmClassId';
  } //类Id

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"NameSpace"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_NameSpace(): string {
    return 'nameSpace';
  } //域名

  /**
   * 常量:"ProjectPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProjectPath(): string {
    return 'projectPath';
  } //工程路径

  /**
   * 常量:"FilePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FilePath(): string {
    return 'filePath';
  } //文件路径

  /**
   * 常量:"FileName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FileName(): string {
    return 'fileName';
  } //文件名

  /**
   * 常量:"FileText"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FileText(): string {
    return 'fileText';
  } //文件内容

  /**
   * 常量:"FuncModuleAgcId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncModuleAgcId(): string {
    return 'funcModuleAgcId';
  } //功能模块Id

  /**
   * 常量:"CodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeId(): string {
    return 'codeTypeId';
  } //代码类型Id

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"IsOpen"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsOpen(): string {
    return 'isOpen';
  } //是否开放

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"ClsName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClsName(): string {
    return 'clsName';
  } //类名

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
