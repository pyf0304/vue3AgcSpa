/**
 * 类名:clsViewIdGCVariableRelaENEx
 * 表名:ViewIdGCVariableRela(00050631)
 * 版本:2026.04.19(服务器:PYF-AI)
 * 日期:2026/05/29 00:17:07
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 界面变量关系(ViewIdGCVariableRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsViewIdGCVariableRelaEN } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaEN';

export class clsViewIdGCVariableRelaENEx extends clsViewIdGCVariableRelaEN {
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
      case clsViewIdGCVariableRelaENEx.con_VarName:
        return this.varName;
      case clsViewIdGCVariableRelaENEx.con_VarTypeName:
        return this.varTypeName;
      case clsViewIdGCVariableRelaENEx.con_RetrievalMethodName:
        return this.retrievalMethodName;
      case clsViewIdGCVariableRelaENEx.con_ViewName:
        return this.viewName;
      case clsViewIdGCVariableRelaENEx.con_FilePath:
        return this.filePath;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"VarName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_VarName = 'varName'; //变量名

  /**
   * 常量:"VarTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_VarTypeName = 'varTypeName'; //变量类型名

  /**
   * 常量:"RetrievalMethodName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_RetrievalMethodName = 'retrievalMethodName'; //获取方式名

  /**
   * 常量:"ViewName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ViewName = 'viewName'; //界面名称

  /**
   * 常量:"FilePath"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FilePath = 'filePath'; //文件路径

  public varName = ''; //变量名
  public varTypeName = ''; //变量类型名
  public retrievalMethodName = ''; //获取方式名
  public viewName = ''; //界面名称
  public filePath = ''; //文件路径

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsViewIdGCVariableRelaENEx();
    const instance = new clsViewIdGCVariableRelaENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
