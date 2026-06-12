/**
 * 类名:clsPrjDataBase
 * 表名:PrjDataBase(00050176)
 * 版本:2026.05.30(服务器:WIN-SRV103-116)
 * 日期:2026/06/10 23:50:19
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
/**
 * 数据库对象(PrjDataBase)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsPrjDataBase {
  public static readonly _CurrTabName = 'PrjDataBase'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName = 'PrjDataBaseId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 15;
  public static readonly _AttributeName = [
    'prjDataBaseId',
    'prjDataBaseName',
    'dataBaseName',
    'databaseOwner',
    'dataBasePwd',
    'dataBaseTypeId',
    'dataBaseUserId',
    'ipAddress',
    'sid',
    'tableSpace',
    'useStateId',
    'inUse',
    'userId',
    'updDate',
    'memo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public prjDataBaseId = ''; //项目数据库Id
  public prjDataBaseName = ''; //项目数据库名
  public dataBaseName = ''; //数据库名
  public databaseOwner = ''; //数据库拥有者
  public dataBasePwd = ''; //数据库的用户口令
  public dataBaseTypeId = ''; //数据库类型ID
  public dataBaseUserId = ''; //数据库的用户ID
  public ipAddress = ''; //服务器
  public sid = ''; //SID
  public tableSpace = ''; //表空间
  public useStateId = ''; //使用状态Id
  public inUse = false; //是否在用
  public userId = ''; //用户Id
  public updDate = ''; //修改日期
  public memo = ''; //说明

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsPrjDataBase.con_PrjDataBaseId:
        return this.prjDataBaseId;
      case clsPrjDataBase.con_PrjDataBaseName:
        return this.prjDataBaseName;
      case clsPrjDataBase.con_DataBaseName:
        return this.dataBaseName;
      case clsPrjDataBase.con_DatabaseOwner:
        return this.databaseOwner;
      case clsPrjDataBase.con_DataBasePwd:
        return this.dataBasePwd;
      case clsPrjDataBase.con_DataBaseTypeId:
        return this.dataBaseTypeId;
      case clsPrjDataBase.con_DataBaseUserId:
        return this.dataBaseUserId;
      case clsPrjDataBase.con_IpAddress:
        return this.ipAddress;
      case clsPrjDataBase.con_Sid:
        return this.sid;
      case clsPrjDataBase.con_TableSpace:
        return this.tableSpace;
      case clsPrjDataBase.con_UseStateId:
        return this.useStateId;
      case clsPrjDataBase.con_InUse:
        return this.inUse;
      case clsPrjDataBase.con_UserId:
        return this.userId;
      case clsPrjDataBase.con_UpdDate:
        return this.updDate;
      case clsPrjDataBase.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrjDataBase]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"PrjDataBaseId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_PrjDataBaseId = 'prjDataBaseId'; //项目数据库Id

  /**
   * 常量:"PrjDataBaseName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_PrjDataBaseName = 'prjDataBaseName'; //项目数据库名

  /**
   * 常量:"DataBaseName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_DataBaseName = 'dataBaseName'; //数据库名

  /**
   * 常量:"DatabaseOwner"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_DatabaseOwner = 'databaseOwner'; //数据库拥有者

  /**
   * 常量:"DataBasePwd"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_DataBasePwd = 'dataBasePwd'; //数据库的用户口令

  /**
   * 常量:"DataBaseTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_DataBaseTypeId = 'dataBaseTypeId'; //数据库类型ID

  /**
   * 常量:"DataBaseUserId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_DataBaseUserId = 'dataBaseUserId'; //数据库的用户ID

  /**
   * 常量:"IpAddress"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_IpAddress = 'ipAddress'; //服务器

  /**
   * 常量:"Sid"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_Sid = 'sid'; //SID

  /**
   * 常量:"TableSpace"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_TableSpace = 'tableSpace'; //表空间

  /**
   * 常量:"UseStateId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_UseStateId = 'useStateId'; //使用状态Id

  /**
   * 常量:"InUse"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_InUse = 'inUse'; //是否在用

  /**
   * 常量:"UserId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_UserId = 'userId'; //用户Id

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_UpdDate = 'updDate'; //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_Memo = 'memo'; //说明
}
