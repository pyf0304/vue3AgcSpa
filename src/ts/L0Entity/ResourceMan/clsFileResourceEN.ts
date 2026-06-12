/**
 * 类名:clsFileResourceEN
 * 表名:FileResource(00050539)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/13 02:14:37
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 文件资源(FileResource)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

/**
 * 文件资源主键类型定义
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_KeyType)
 **/
export type FileResourceKey = {
  fileResourceId: number;
};
export class clsFileResourceEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static _CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static readonly _CacheModeId: string = '05'; //未知
  public static readonly _PrimaryTypeId: string = '02'; //identity
  public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static readonly _WhereFormat = ''; //条件格式串
  public static readonly _CurrTabName: string = 'FileResource'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName: string = 'FileResourceId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 24;
  public static readonly _AttributeName = [
    'fileResourceId',
    'fileDirName',
    'fileName',
    'extension',
    'codeTypeId',
    'tabId',
    'isBelongsCurrCMPrj',
    'prjFileTypeId',
    'isGeneCode',
    'isCanDel',
    'fileLength',
    'fileType',
    'creationTime',
    'lastWriteTime',
    'checkDateTime',
    'inUse',
    'isExistFile',
    'prjId',
    'cmPrjId',
    'ipAddress',
    'idFtpResource',
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
  private mlngFileResourceId = 0; //文件资源Id
  private mstrFileDirName = ''; //文件目录名
  private mstrFileName = ''; //文件名
  private mstrExtension = ''; //扩展名
  private mstrCodeTypeId = ''; //代码类型Id
  private mstrTabId = ''; //表ID
  private mbolIsBelongsCurrCMPrj = false; //是否属于当前项目
  private mstrPrjFileTypeId = ''; //项目文件类型Id
  private mbolIsGeneCode = false; //是否生成代码
  private mbolIsCanDel = false; //是否可删除
  private mlngFileLength = 0; //文件长度
  private mstrFileType = ''; //文件类型
  private mstrCreationTime = ''; //建立时间
  private mstrLastWriteTime = ''; //修改日期
  private mstrCheckDateTime = ''; //CheckDateTime
  private mbolInUse = false; //是否在用
  private mbolIsExistFile = false; //是否存在文件
  private mstrPrjId = ''; //工程Id
  private mstrCmPrjId = ''; //Cm工程Id
  private mstrIpAddress = ''; //服务器
  private mstrIdFtpResource = ''; //FTP资源流水号
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 文件资源Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFileResourceId(value: number) {
    if (value != undefined) {
      this.fileResourceId = value;
      this.hmProperty['fileResourceId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件目录名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFileDirName(value: string) {
    if (value != undefined) {
      this.fileDirName = value;
      this.hmProperty['fileDirName'] = true;
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
   * 扩展名(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetExtension(value: string) {
    if (value != undefined) {
      this.extension = value;
      this.hmProperty['extension'] = true;
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
   * 表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabId(value: string) {
    if (value != undefined) {
      this.tabId = value;
      this.hmProperty['tabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否属于当前项目(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsBelongsCurrCMPrj(value: boolean) {
    if (value != undefined) {
      this.isBelongsCurrCMPrj = value;
      this.hmProperty['isBelongsCurrCMPrj'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 项目文件类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjFileTypeId(value: string) {
    if (value != undefined) {
      this.prjFileTypeId = value;
      this.hmProperty['prjFileTypeId'] = true;
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
   * 是否可删除(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsCanDel(value: boolean) {
    if (value != undefined) {
      this.isCanDel = value;
      this.hmProperty['isCanDel'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件长度(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFileLength(value: number) {
    if (value != undefined) {
      this.fileLength = value;
      this.hmProperty['fileLength'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件类型(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFileType(value: string) {
    if (value != undefined) {
      this.fileType = value;
      this.hmProperty['fileType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 建立时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreationTime(value: string) {
    if (value != undefined) {
      this.creationTime = value;
      this.hmProperty['creationTime'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLastWriteTime(value: string) {
    if (value != undefined) {
      this.lastWriteTime = value;
      this.hmProperty['lastWriteTime'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * CheckDateTime(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCheckDateTime(value: string) {
    if (value != undefined) {
      this.checkDateTime = value;
      this.hmProperty['checkDateTime'] = true;
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
   * 是否存在文件(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsExistFile(value: boolean) {
    if (value != undefined) {
      this.isExistFile = value;
      this.hmProperty['isExistFile'] = true;
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
   * 服务器(说明:;字段类型:varchar;字段长度:25;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIpAddress(value: string) {
    if (value != undefined) {
      this.ipAddress = value;
      this.hmProperty['ipAddress'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * FTP资源流水号(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdFtpResource(value: string) {
    if (value != undefined) {
      this.idFtpResource = value;
      this.hmProperty['idFtpResource'] = true;
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
      case clsFileResourceEN.con_FileResourceId:
        return this.fileResourceId;
      case clsFileResourceEN.con_FileDirName:
        return this.fileDirName;
      case clsFileResourceEN.con_FileName:
        return this.fileName;
      case clsFileResourceEN.con_Extension:
        return this.extension;
      case clsFileResourceEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsFileResourceEN.con_TabId:
        return this.tabId;
      case clsFileResourceEN.con_IsBelongsCurrCMPrj:
        return this.isBelongsCurrCMPrj;
      case clsFileResourceEN.con_PrjFileTypeId:
        return this.prjFileTypeId;
      case clsFileResourceEN.con_IsGeneCode:
        return this.isGeneCode;
      case clsFileResourceEN.con_IsCanDel:
        return this.isCanDel;
      case clsFileResourceEN.con_FileLength:
        return this.fileLength;
      case clsFileResourceEN.con_FileType:
        return this.fileType;
      case clsFileResourceEN.con_CreationTime:
        return this.creationTime;
      case clsFileResourceEN.con_LastWriteTime:
        return this.lastWriteTime;
      case clsFileResourceEN.con_CheckDateTime:
        return this.checkDateTime;
      case clsFileResourceEN.con_InUse:
        return this.inUse;
      case clsFileResourceEN.con_IsExistFile:
        return this.isExistFile;
      case clsFileResourceEN.con_PrjId:
        return this.prjId;
      case clsFileResourceEN.con_CmPrjId:
        return this.cmPrjId;
      case clsFileResourceEN.con_IpAddress:
        return this.ipAddress;
      case clsFileResourceEN.con_IdFtpResource:
        return this.idFtpResource;
      case clsFileResourceEN.con_UpdDate:
        return this.updDate;
      case clsFileResourceEN.con_UpdUser:
        return this.updUser;
      case clsFileResourceEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[FileResource]中不存在!`;
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
      case clsFileResourceEN.con_FileResourceId:
        this.fileResourceId = Number(strValue);
        this.hmProperty['fileResourceId'] = true;
        break;
      case clsFileResourceEN.con_FileDirName:
        this.fileDirName = strValue;
        this.hmProperty['fileDirName'] = true;
        break;
      case clsFileResourceEN.con_FileName:
        this.fileName = strValue;
        this.hmProperty['fileName'] = true;
        break;
      case clsFileResourceEN.con_Extension:
        this.extension = strValue;
        this.hmProperty['extension'] = true;
        break;
      case clsFileResourceEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        this.hmProperty['codeTypeId'] = true;
        break;
      case clsFileResourceEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsFileResourceEN.con_IsBelongsCurrCMPrj:
        this.isBelongsCurrCMPrj = Boolean(strValue);
        this.hmProperty['isBelongsCurrCMPrj'] = true;
        break;
      case clsFileResourceEN.con_PrjFileTypeId:
        this.prjFileTypeId = strValue;
        this.hmProperty['prjFileTypeId'] = true;
        break;
      case clsFileResourceEN.con_IsGeneCode:
        this.isGeneCode = Boolean(strValue);
        this.hmProperty['isGeneCode'] = true;
        break;
      case clsFileResourceEN.con_IsCanDel:
        this.isCanDel = Boolean(strValue);
        this.hmProperty['isCanDel'] = true;
        break;
      case clsFileResourceEN.con_FileLength:
        this.fileLength = Number(strValue);
        this.hmProperty['fileLength'] = true;
        break;
      case clsFileResourceEN.con_FileType:
        this.fileType = strValue;
        this.hmProperty['fileType'] = true;
        break;
      case clsFileResourceEN.con_CreationTime:
        this.creationTime = strValue;
        this.hmProperty['creationTime'] = true;
        break;
      case clsFileResourceEN.con_LastWriteTime:
        this.lastWriteTime = strValue;
        this.hmProperty['lastWriteTime'] = true;
        break;
      case clsFileResourceEN.con_CheckDateTime:
        this.checkDateTime = strValue;
        this.hmProperty['checkDateTime'] = true;
        break;
      case clsFileResourceEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsFileResourceEN.con_IsExistFile:
        this.isExistFile = Boolean(strValue);
        this.hmProperty['isExistFile'] = true;
        break;
      case clsFileResourceEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsFileResourceEN.con_CmPrjId:
        this.cmPrjId = strValue;
        this.hmProperty['cmPrjId'] = true;
        break;
      case clsFileResourceEN.con_IpAddress:
        this.ipAddress = strValue;
        this.hmProperty['ipAddress'] = true;
        break;
      case clsFileResourceEN.con_IdFtpResource:
        this.idFtpResource = strValue;
        this.hmProperty['idFtpResource'] = true;
        break;
      case clsFileResourceEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsFileResourceEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsFileResourceEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[FileResource]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public fileResourceId = 0; //文件资源Id
  public fileDirName = ''; //文件目录名
  public fileName = ''; //文件名
  public extension = ''; //扩展名
  public codeTypeId = ''; //代码类型Id
  public tabId = ''; //表ID
  public isBelongsCurrCMPrj = false; //是否属于当前项目
  public prjFileTypeId = ''; //项目文件类型Id
  public isGeneCode = false; //是否生成代码
  public isCanDel = false; //是否可删除
  public fileLength = 0; //文件长度
  public fileType = ''; //文件类型
  public creationTime = ''; //建立时间
  public lastWriteTime = ''; //修改日期
  public checkDateTime = ''; //CheckDateTime
  public inUse = false; //是否在用
  public isExistFile = false; //是否存在文件
  public prjId = ''; //工程Id
  public cmPrjId = ''; //Cm工程Id
  public ipAddress = ''; //服务器
  public idFtpResource = ''; //FTP资源流水号
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"FileResourceId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FileResourceId = 'fileResourceId'; //文件资源Id

  /**
   * 常量:"FileDirName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FileDirName = 'fileDirName'; //文件目录名

  /**
   * 常量:"FileName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FileName = 'fileName'; //文件名

  /**
   * 常量:"Extension"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_Extension = 'extension'; //扩展名

  /**
   * 常量:"CodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_CodeTypeId = 'codeTypeId'; //代码类型Id

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_TabId = 'tabId'; //表ID

  /**
   * 常量:"IsBelongsCurrCMPrj"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_IsBelongsCurrCMPrj = 'isBelongsCurrCMPrj'; //是否属于当前项目

  /**
   * 常量:"PrjFileTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_PrjFileTypeId = 'prjFileTypeId'; //项目文件类型Id

  /**
   * 常量:"IsGeneCode"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_IsGeneCode = 'isGeneCode'; //是否生成代码

  /**
   * 常量:"IsCanDel"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_IsCanDel = 'isCanDel'; //是否可删除

  /**
   * 常量:"FileLength"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FileLength = 'fileLength'; //文件长度

  /**
   * 常量:"FileType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_FileType = 'fileType'; //文件类型

  /**
   * 常量:"CreationTime"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_CreationTime = 'creationTime'; //建立时间

  /**
   * 常量:"LastWriteTime"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_LastWriteTime = 'lastWriteTime'; //修改日期

  /**
   * 常量:"CheckDateTime"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_CheckDateTime = 'checkDateTime'; //CheckDateTime

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_InUse = 'inUse'; //是否在用

  /**
   * 常量:"IsExistFile"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_IsExistFile = 'isExistFile'; //是否存在文件

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_PrjId = 'prjId'; //工程Id

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_CmPrjId = 'cmPrjId'; //Cm工程Id

  /**
   * 常量:"IpAddress"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_IpAddress = 'ipAddress'; //服务器

  /**
   * 常量:"IdFtpResource"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_IdFtpResource = 'idFtpResource'; //FTP资源流水号

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
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_Memo = 'memo'; //说明

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
    //return propName in new clsFileResourceEN();
    const instance = new clsFileResourceEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
