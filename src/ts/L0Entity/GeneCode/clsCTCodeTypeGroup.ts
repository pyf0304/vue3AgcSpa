/**
 * 类名:clsCTCodeTypeGroup
 * 表名:CTCodeTypeGroup(00050648)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 03:38:06
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
/**
 * CTCodeTypeGroup(CTCodeTypeGroup)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsCTCodeTypeGroup {
  public static readonly _CurrTabName = 'CTCodeTypeGroup'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName = 'CtGroupId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 9;
  public static readonly _AttributeName = [
    'ctGroupId',
    'applicationTypeId',
    'groupName',
    'groupENName',
    'description',
    'orderNum',
    'inUse',
    'updDate',
    'updUser',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public ctGroupId = ''; //Ct组Id
  public applicationTypeId = 0; //应用程序类型ID
  public groupName = ''; //组名
  public groupENName = ''; //组英文名
  public description = ''; //描述
  public orderNum = 0; //序号
  public inUse = false; //是否在用
  public updDate = ''; //修改日期
  public updUser = ''; //修改者

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsCTCodeTypeGroup.con_CtGroupId:
        return this.ctGroupId;
      case clsCTCodeTypeGroup.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsCTCodeTypeGroup.con_GroupName:
        return this.groupName;
      case clsCTCodeTypeGroup.con_GroupENName:
        return this.groupENName;
      case clsCTCodeTypeGroup.con_Description:
        return this.description;
      case clsCTCodeTypeGroup.con_OrderNum:
        return this.orderNum;
      case clsCTCodeTypeGroup.con_InUse:
        return this.inUse;
      case clsCTCodeTypeGroup.con_UpdDate:
        return this.updDate;
      case clsCTCodeTypeGroup.con_UpdUser:
        return this.updUser;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CTCodeTypeGroup]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"CtGroupId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_CtGroupId = 'ctGroupId'; //Ct组Id

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_ApplicationTypeId = 'applicationTypeId'; //应用程序类型ID

  /**
   * 常量:"GroupName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_GroupName = 'groupName'; //组名

  /**
   * 常量:"GroupENName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_GroupENName = 'groupENName'; //组英文名

  /**
   * 常量:"Description"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_Description = 'description'; //描述

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_OrderNum = 'orderNum'; //序号

  /**
   * 常量:"InUse"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_InUse = 'inUse'; //是否在用

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_UpdDate = 'updDate'; //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_UpdUser = 'updUser'; //修改者
}
