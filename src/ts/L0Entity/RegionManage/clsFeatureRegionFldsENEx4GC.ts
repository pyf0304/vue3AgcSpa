/*-- -- -- -- -- -- -- -- -- -- --
类名:clsFeatureRegionFldsENEx4GC
表名:FeatureRegionFlds(00050452)
生成代码版本:2020.03.11.1
生成日期:2020/03/12 21:19:48
生成者:
工程名称:AGC
工程ID:0005
相关数据库:tzar.tpddns.cn,19433AGCCS12
prjDataBaseId:0213
模块中文名:区域管理
模块英文名:RegionManage
框架-层名:实体扩展层(EntityLayerEx)
编程语言:TypeScript
== == == == == == == == == == == == 
*/
/// <summary>
/// 功能区域字段(FeatureRegionFlds)
/// (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
/// </summary>
import { clsFieldTabENEx } from '../Table_Field/clsFieldTabENEx';
import { clsCtlTypeEN } from '../PrjInterface/clsCtlTypeEN';
import { FstLcaseS } from '@/ts/PubFun/clsString';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
export class clsFeatureRegionFldsENEx4GC extends clsFeatureRegionFldsEN {
  //以下是属性变量

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
  /// </summary>
  constructor() {
    super();
  }
  private objFieldTabENEx: clsFieldTabENEx = new clsFieldTabENEx();
  public objCtlTypeAbbr: clsCtlTypeEN = new clsCtlTypeEN();

  public get fldNameJava(): string {
    return FstLcaseS(this.objFieldTabENEx.fldName.toLowerCase());
  }
  public get Action4Ajax(): string {
    return `${this.objCtlTypeAbbr.ctlTypeAbbr + this.buttonName}Ajax`;
  }
  private mstrCtlName = '';
  public get ctlName(): string {
    this.mstrCtlName = this.objCtlTypeAbbr.ctlTypeAbbr + this.objFieldTabENEx.fldName;
    return this.mstrCtlName;
  }
  public set ctlName(value: string) {
    this.mstrCtlName = value;
  }

  public get ctlName4Win(): string {
    this.mstrCtlName = this.objCtlTypeAbbr.ctlTypeAbbr + this.objFieldTabENEx.fldName;

    return this.mstrCtlName.replace('ddl', 'cbo');
  }

  public set ctlName4Win(value: string) {
    this.mstrCtlName = value;
  }
  /// <summary>
  /// 是否针对可视化
  /// </summary>
  public is4Visible = false;

  public get ObjFieldTabENEx(): clsFieldTabENEx {
    if (this.objFieldTabENEx == null) {
      const strMsg = '字段对象没有被初始化！';
      throw new Error(strMsg);
    }
    return this.objFieldTabENEx;
  }

  public set ObjFieldTabENEx(value: clsFieldTabENEx) {
    this.objFieldTabENEx = value;
  }
}
