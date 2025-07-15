import { clsCtlTypeEN } from '../PrjInterface/clsCtlTypeEN';
import { clsvFieldTab_SimENEx } from '../Table_Field/clsvFieldTab_SimENEx';
import { clsDGRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsEN';
import { Format, FstLcaseS } from '@/ts/PubFun/clsString';
export class clsDGRegionFldsENEx4GC extends clsDGRegionFldsEN {
  //以下是属性变量
  public objFieldTabENEx: clsvFieldTab_SimENEx;
  public objCtlTypeAbbr: clsCtlTypeEN;

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
  /// </summary>
  constructor() {
    super();
    this.objFieldTabENEx = new clsvFieldTab_SimENEx();
    this.objCtlTypeAbbr = new clsCtlTypeEN();
  }

  public get ctrlName(): string {
    return Format('btn{0}', this.mId);
  }
  public get ButtonValue(): string {
    if (this.inUse == true) {
      return Format('D:{0}', this.headerText);
    } else {
      return Format('A:{0}', this.headerText);
    }
  }
  public get fldNameJava(): string {
    return FstLcaseS(this.objFieldTabENEx.fldName.toLowerCase());
  }
  public get fldName(): string {
    return this.objFieldTabENEx.fldName;
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
  public dsTabName = '';

  //public get tabName(): string {
  //    return this.objPrjTabFldENEx.tabName;

  //}
  //        public clsPrjTabFldENEx ObjPrjTabFldENEx
  //{
  //    get
  //    {
  //        //if (objPrjTabFldENEx == null)
  //        //{
  //        //    string strMsg = "表字段扩展(PrjTabFldEx)对象没有被初始化！";
  //        //    throw new Exception(strMsg);
  //        //}
  //        return objPrjTabFldENEx;

  //    }
  //    set => objPrjTabFldENEx = value;
  //}
  //    }
}
