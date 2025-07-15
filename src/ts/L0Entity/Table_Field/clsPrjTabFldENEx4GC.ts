/*-- -- -- -- -- -- -- -- -- -- --
类名:clsPrjTabFldENEx
表名:PrjTabFld(00050019)
生成代码版本:2020.03.11.1
生成日期:2020/03/12 21:12:12
生成者:
工程名称:AGC
工程ID:0005
相关数据库:tzar.tpddns.cn,19433AGCCS12
prjDataBaseId:0213
模块中文名:字段、表维护
模块英文名:Table_Field
框架-层名:实体扩展层(EntityLayerEx)
编程语言:TypeScript
== == == == == == == == == == == == 
*/
/// <summary>
/// 工程表字段(PrjTabFld)
/// (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
/// </summary>
import { clsvFieldTab_SimENEx } from '../Table_Field/clsvFieldTab_SimENEx';
import { clsFieldTypeEN } from './clsFieldTypeEN';
import { clsPrimaryTypeEN } from './clsPrimaryTypeEN';
import { clsPrjTabEN } from './clsPrjTabEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { Format, FstLcaseS } from '@/ts/PubFun/clsString';
export class clsPrjTabFldENEx4GC extends clsPrjTabFldEN {
  /// <summary>
  /// 构造函数
  /// (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
  /// </summary>
  constructor() {
    super();
  }

  private objFieldTabENEx: clsvFieldTab_SimENEx = new clsvFieldTab_SimENEx();
  public get ObjFieldTabENEx(): clsvFieldTab_SimENEx {
    if (this.objFieldTabENEx == null) {
      const strMsg = '字段对象没有被初始化！';
      throw new Error(strMsg);
    }
    return this.objFieldTabENEx;
  }
  public set ObjFieldTabENEx(value: clsvFieldTab_SimENEx) {
    this.objFieldTabENEx = value;
  }
  public objPrjTab: clsPrjTabEN = new clsPrjTabEN();
  public objFieldTypeEN: clsFieldTypeEN = new clsFieldTypeEN();
  public objPrimaryTypeEN: clsPrimaryTypeEN = new clsPrimaryTypeEN();
  /// <summary>
  /// 关键字变量的定义串，例如: string strUserId
  /// </summary>
  public get keyconstDefineStr(): string {
    return `${this.ObjFieldTabENEx.objDataTypeAbbr.csType} ${this.objFieldTabENEx.privFuncName}`;
  }
  //        public clsPrjTabFldENEx(): base()
  //{
  //    this.objFieldTabENEx = new clsFieldTabENEx();
  //}

  /// <summary>
  /// 私有函数变量名，前面不加“m”
  /// </summary>
  public get privFuncName(): string {
    return this.objFieldTabENEx.objDataTypeAbbr.dataTypeAbbr + this.objFieldTabENEx.fldName;
  }

  /// <summary>
  /// 私有函数列表变量名，字段名前面加“arr”
  /// </summary>
  public get PrivFuncListName(): string {
    return Format('arr{0}', this.objFieldTabENEx.fldName);
  }
  /// <summary>
  /// 关键字的Cs类型
  /// </summary>
  public get csType(): string {
    return this.objFieldTabENEx.objDataTypeAbbr.csType;
  }

  public get colCaption(): string {
    return this.objFieldTabENEx.caption;
  }

  public get typeScriptType(): string {
    return this.objFieldTabENEx.objDataTypeAbbr.typeScriptType;
  }
  /// <summary>
  /// 字段名
  /// </summary>
  public get fldName(): string {
    return this.objFieldTabENEx.fldName;
  }

  /// <summary>
  /// 字段名，首字母大写
  /// </summary>
  public get fldNameFstUcase(): string {
    return this.objFieldTabENEx.fldNameFstUcase;
  }
  /// <summary>
  /// 字段名，首字母小写
  /// </summary>
  public get fldNameFstLcase(): string {
    return this.objFieldTabENEx.fldNameFstLcase;
  }

  public get javaType(): string {
    return this.objFieldTabENEx.objDataTypeAbbr.javaType;
  }

  public get fldNameJava(): string {
    return FstLcaseS(this.objFieldTabENEx.fldName.toLowerCase());
  }
  public tabName = '';
}
