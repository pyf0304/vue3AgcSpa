/**
 * 类名:clsCMProject
 * 表名:CMProject(00050512)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/05 09:40:31
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
/**
 * CM项目(CMProject)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsCMProject {
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
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public cmPrjId = ''; //CM工程Id
  public cmPrjName = ''; //CM工程名
  public prjId = ''; //工程ID
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsCMProject.con_CmPrjId:
        return this.cmPrjId;
      case clsCMProject.con_CmPrjName:
        return this.cmPrjName;
      case clsCMProject.con_PrjId:
        return this.prjId;
      case clsCMProject.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsCMProject.con_FunctionTemplateId:
        return this.functionTemplateId;
      case clsCMProject.con_VueDesignSysId:
        return this.vueDesignSysId;
      case clsCMProject.con_IsFstLcase:
        return this.isFstLcase;
      case clsCMProject.con_IsCamelCase:
        return this.isCamelCase;
      case clsCMProject.con_ProjectFileName:
        return this.projectFileName;
      case clsCMProject.con_UseStateId:
        return this.useStateId;
      case clsCMProject.con_IsRefresh4RelaView:
        return this.isRefresh4RelaView;
      case clsCMProject.con_UpdDate:
        return this.updDate;
      case clsCMProject.con_UpdUserId:
        return this.updUserId;
      case clsCMProject.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMProject]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //CM工程Id

  /**
   * 常量:"CmPrjName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"PrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"FunctionTemplateId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FunctionTemplateId(): string {
    return 'functionTemplateId';
  } //函数模板Id

  /**
   * 常量:"VueDesignSysId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_VueDesignSysId(): string {
    return 'vueDesignSysId';
  } //Vue控件设计体系Id

  /**
   * 常量:"IsFstLcase"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsFstLcase(): string {
    return 'isFstLcase';
  } //是否首字母小写

  /**
   * 常量:"IsCamelCase"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsCamelCase(): string {
    return 'isCamelCase';
  } //是否使用CamelCase

  /**
   * 常量:"ProjectFileName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ProjectFileName(): string {
    return 'projectFileName';
  } //工程文件名

  /**
   * 常量:"UseStateId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UseStateId(): string {
    return 'useStateId';
  } //使用状态Id

  /**
   * 常量:"IsRefresh4RelaView"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsRefresh4RelaView(): string {
    return 'isRefresh4RelaView';
  } //是否刷新相关视图

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明
}
