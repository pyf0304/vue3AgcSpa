import { clsCtlTypeEN } from '../PrjInterface/clsCtlTypeEN';
import { clsvFieldTab_SimENEx } from '../Table_Field/clsvFieldTab_SimENEx';
import { clsExcelExportRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsEN';
import { FstLcaseS } from '@/ts/PubFun/clsString';
export class clsExcelExportRegionFldsENEx4GC extends clsExcelExportRegionFldsEN {
  //以下是属性变量

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
  /// </summary>
  constructor() {
    super();
    this.mobjFieldTabENEx = new clsvFieldTab_SimENEx();
  }
  private mobjFieldTabENEx: clsvFieldTab_SimENEx;

  public mobjCtlTypeAbbr: clsCtlTypeEN = new clsCtlTypeEN();
  public get fldName_Java(): string {
    return FstLcaseS(this.objFieldTabENEx.fldName.toLowerCase());
  }

  private mstrCtlName = '';
  public get ctlName(): string {
    this.mstrCtlName = this.ObjCtlTypeAbbr.ctlTypeAbbr + this.objFieldTabENEx.fldName;
    return this.mstrCtlName;
  }

  public set ctlName(value: string) {
    this.mstrCtlName = value;
  }

  public get ctlName4Win(): string {
    this.mstrCtlName = this.mobjCtlTypeAbbr.ctlTypeAbbr + this.objFieldTabENEx.fldName;
    return this.mstrCtlName.replace('ddl', 'cbo');
  }

  public set ctlName4Win(value: string) {
    this.mstrCtlName = value;
  }
  public get objFieldTabENEx(): clsvFieldTab_SimENEx {
    if (this.mobjFieldTabENEx == null) {
      const strMsg = '表字段扩展(FieldTabEx)对象没有被初始化！';
      throw new Error(strMsg);
    }
    return this.mobjFieldTabENEx;
  }

  public set objFieldTabENEx(value: clsvFieldTab_SimENEx) {
    this.mobjFieldTabENEx = value;
  }

  public get ObjCtlTypeAbbr(): clsCtlTypeEN {
    if (this.mobjCtlTypeAbbr == null) {
      const strMsg = '表字段扩展(FieldTabEx)对象没有被初始化！';
      throw new Error(strMsg);
    }
    return this.mobjCtlTypeAbbr;
  }

  public set ObjCtlTypeAbbr(value: clsCtlTypeEN) {
    this.mobjCtlTypeAbbr = value;
  }
}
