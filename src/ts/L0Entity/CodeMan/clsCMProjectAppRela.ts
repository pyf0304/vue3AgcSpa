/**
 * 类名:clsCMProjectAppRela
 * 表名:CMProjectAppRela(00050600)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/05 08:47:27
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
 * CM项目应用关系(CMProjectAppRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsCMProjectAppRela {
  public static _CurrTabName = 'CMProjectAppRela'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CMProjectAppRelaId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'cMProjectAppRelaId',
    'cmPrjId',
    'applicationTypeId',
    'orderNum',
    'prjId',
    'updDate',
    'updUser',
    'memo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public cMProjectAppRelaId = 0; //Cm工程应用关系Id
  public cmPrjId = ''; //CM工程Id
  public applicationTypeId = 0; //应用程序类型ID
  public orderNum = 0; //序号
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
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
      case clsCMProjectAppRela.con_CMProjectAppRelaId:
        return this.cMProjectAppRelaId;
      case clsCMProjectAppRela.con_CmPrjId:
        return this.cmPrjId;
      case clsCMProjectAppRela.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsCMProjectAppRela.con_OrderNum:
        return this.orderNum;
      case clsCMProjectAppRela.con_PrjId:
        return this.prjId;
      case clsCMProjectAppRela.con_UpdDate:
        return this.updDate;
      case clsCMProjectAppRela.con_UpdUser:
        return this.updUser;
      case clsCMProjectAppRela.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMProjectAppRela]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"CMProjectAppRelaId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CMProjectAppRelaId(): string {
    return 'cMProjectAppRelaId';
  } //Cm工程应用关系Id

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //CM工程Id

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"PrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明
}
