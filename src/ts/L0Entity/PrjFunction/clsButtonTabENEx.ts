/**
 * 类名:clsButtonTabENEx
 * 表名:ButtonTab(00050427)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:29
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 按钮(ButtonTab)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsButtonTabEN } from '@/ts/L0Entity/PrjFunction/clsButtonTabEN';

export class clsButtonTabENEx extends clsButtonTabEN {
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
   **/
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strValue;
    switch (strFldName) {
      case 'CtrlId':
        return '';
      case clsButtonTabENEx.con_SeqNum:
        return this.seqNum;
      case clsButtonTabENEx.con_KeyId:
        return this.keyId;
      case clsButtonTabENEx.con_GroupName:
        return this.groupName;
      case clsButtonTabENEx.con_OrderNum4Feature:
        return this.orderNum4Feature;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"SeqNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SeqNum(): string {
    return 'seqNum';
  } //字段序号

  /**
   * 常量:"KeyId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_KeyId(): string {
    return 'keyId';
  } //关键字Id

  /**
   * 常量:"GroupName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_GroupName(): string {
    return 'groupName';
  } //组名

  /**
   * 常量:"OrderNum4Feature"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum4Feature(): string {
    return 'orderNum4Feature';
  } //功能的次序

  public seqNum = 0; //字段序号
  public keyId = ''; //关键字Id
  public groupName = ''; //组名
  public orderNum4Feature = 0; //功能的次序
}
