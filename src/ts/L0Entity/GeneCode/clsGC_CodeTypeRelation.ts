/**
 * 类名:clsGC_CodeTypeRelation
 * 表名:GC_CodeTypeRelation(00050646)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/05 03:32:14
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
 * GC_代码类型关系(GC_CodeTypeRelation)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsGC_CodeTypeRelation {
  public static readonly _CurrTabName = 'GC_CodeTypeRelation'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName = 'RelationId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 7;
  public static readonly _AttributeName = [
    'relationId',
    'parentCodeTypeId',
    'childCodeTypeId',
    'cTRelationTypeId',
    'description',
    'updDate',
    'updUser',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public relationId = 0; //关系Id
  public parentCodeTypeId = ''; //父代码类型Id
  public childCodeTypeId = ''; //子代码类型Id
  public cTRelationTypeId = ''; //CT关系类型Id
  public description = ''; //描述
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
      case clsGC_CodeTypeRelation.con_RelationId:
        return this.relationId;
      case clsGC_CodeTypeRelation.con_ParentCodeTypeId:
        return this.parentCodeTypeId;
      case clsGC_CodeTypeRelation.con_ChildCodeTypeId:
        return this.childCodeTypeId;
      case clsGC_CodeTypeRelation.con_CTRelationTypeId:
        return this.cTRelationTypeId;
      case clsGC_CodeTypeRelation.con_Description:
        return this.description;
      case clsGC_CodeTypeRelation.con_UpdDate:
        return this.updDate;
      case clsGC_CodeTypeRelation.con_UpdUser:
        return this.updUser;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[GC_CodeTypeRelation]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"RelationId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_RelationId = 'relationId'; //关系Id

  /**
   * 常量:"ParentCodeTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_ParentCodeTypeId = 'parentCodeTypeId'; //父代码类型Id

  /**
   * 常量:"ChildCodeTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_ChildCodeTypeId = 'childCodeTypeId'; //子代码类型Id

  /**
   * 常量:"CTRelationTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_CTRelationTypeId = 'cTRelationTypeId'; //CT关系类型Id

  /**
   * 常量:"Description"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_Description = 'description'; //描述

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
