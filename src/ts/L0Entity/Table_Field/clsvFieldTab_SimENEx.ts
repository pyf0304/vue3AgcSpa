/**
 * 类名:clsvFieldTab_SimENEx
 * 表名:vFieldTab_Sim(00050590)
 * 版本:2025.07.05.1(服务器:WIN-SRV103-116)
 * 日期:2025/07/05 15:21:35
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * v字段表_Sim(vFieldTab_Sim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';

export class clsvFieldTab_SimENEx extends clsvFieldTab_SimEN {
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
      case clsvFieldTab_SimENEx.con_PrjId:
        return this.prjId;
      case clsvFieldTab_SimENEx.con_FldNameEx:
        return this.fldNameEx;
      case clsvFieldTab_SimENEx.con_IsHasNode:
        return this.isHasNode;
      case clsvFieldTab_SimENEx.con_PrivFuncName:
        return this.privFuncName;
      case clsvFieldTab_SimENEx.con_KeyVarDefineStr:
        return this.keyVarDefineStr;
      case clsvFieldTab_SimENEx.con_FldNameFstLcase:
        return this.fldNameFstLcase;
      case clsvFieldTab_SimENEx.con_FldNameFstUcase:
        return this.fldNameFstUcase;
      case clsvFieldTab_SimENEx.con_NodeNum:
        return this.nodeNum;
      case clsvFieldTab_SimENEx.con_ConvFldName:
        return this.convFldName;
      case clsvFieldTab_SimENEx.con_DataTypeName:
        return this.dataTypeName;
      case clsvFieldTab_SimENEx.con_FieldTypeName:
        return this.fieldTypeName;
      case clsvFieldTab_SimENEx.con_DataNodeId:
        return this.dataNodeId;
      case clsvFieldTab_SimENEx.con_DataNodeIdV2:
        return this.dataNodeIdV2;
      case clsvFieldTab_SimENEx.con_DataNodeIdV3:
        return this.dataNodeIdV3;
      case clsvFieldTab_SimENEx.con_ObjDataTypeAbbr:
        return this.objDataTypeAbbr;
      case clsvFieldTab_SimENEx.con_IsExtendShow:
        return this.isExtendShow;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_PrjId = 'prjId'; //工程Id

  /**
   * 常量:"FldNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FldNameEx = 'fldNameEx'; //字段名Ex

  /**
   * 常量:"IsHasNode"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_IsHasNode = 'isHasNode'; //是否有结点

  /**
   * 常量:"PrivFuncName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_PrivFuncName = 'privFuncName'; //私有函数名

  /**
   * 常量:"KeyVarDefineStr"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_KeyVarDefineStr = 'keyVarDefineStr'; //关键变量定义串

  /**
   * 常量:"FldNameFstLcase"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FldNameFstLcase = 'fldNameFstLcase'; //首字母小写的字段名

  /**
   * 常量:"FldNameFstUcase"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FldNameFstUcase = 'fldNameFstUcase'; //首字母大写的字段名

  /**
   * 常量:"NodeNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_NodeNum = 'nodeNum'; //结点数

  /**
   * 常量:"ConvFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ConvFldName = 'convFldName'; //转换字段名

  /**
   * 常量:"DataTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DataTypeName = 'dataTypeName'; //数据类型名称

  /**
   * 常量:"FieldTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FieldTypeName = 'fieldTypeName'; //字段类型名

  /**
   * 常量:"DataNodeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DataNodeId = 'dataNodeId'; //数据结点Id

  /**
   * 常量:"DataNodeIdV2"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DataNodeIdV2 = 'dataNodeIdV2'; //数据结点IdV2

  /**
   * 常量:"DataNodeIdV3"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DataNodeIdV3 = 'dataNodeIdV3'; //数据结点IdV3

  /**
   * 常量:"ObjDataTypeAbbr"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ObjDataTypeAbbr = 'objDataTypeAbbr'; //数据类型对象

  /**
   * 常量:"IsExtendShow"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_IsExtendShow = 'isExtendShow'; //是否有结点

  public prjId = ''; //工程Id
  public fldNameEx = ''; //字段名Ex
  public isHasNode = false; //是否有结点
  public privFuncName = ''; //私有函数名
  public keyVarDefineStr = ''; //关键变量定义串
  public fldNameFstLcase = ''; //首字母小写的字段名
  public fldNameFstUcase = ''; //首字母大写的字段名
  public nodeNum = 0; //结点数
  public convFldName = ''; //转换字段名
  public dataTypeName = ''; //数据类型名称
  public fieldTypeName = ''; //字段类型名
  public dataNodeId = 0; //数据结点Id
  public dataNodeIdV2 = 0; //数据结点IdV2
  public dataNodeIdV3 = 0; //数据结点IdV3
  public objDataTypeAbbr = new clsDataTypeAbbrEN(); //数据类型对象
  public isExtendShow = false; //是否有结点

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsvFieldTab_SimENEx();
    const instance = new clsvFieldTab_SimENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
