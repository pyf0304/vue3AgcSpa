import { clsCtlTypeEN } from '../PrjInterface/clsCtlTypeEN';
import { clsPrjTabFldEN } from '../Table_Field/clsPrjTabFldEN';
import { clsvFieldTab_SimENEx } from '../Table_Field/clsvFieldTab_SimENEx';
import { clsQryRegionFldsENEx } from './clsQryRegionFldsENEx';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { vPrjTab_SimEx_GetNameByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { Format, FstLcaseS, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { useviewRegionStore } from '@/store/modules/viewRegion';
export class clsQryRegionFldsENEx4GC extends clsQryRegionFldsENEx {
  //以下是属性变量
  //    public objFieldTabENEx: clsFieldTabENEx;
  public objFieldTabENEx: clsvFieldTab_SimENEx;
  public objCtlTypeAbbr: clsCtlTypeEN;
  public objPrjTabFld: clsPrjTabFldEN;
  /// <summary>
  /// 构造函数
  /// (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
  /// </summary>
  constructor() {
    super();
    this.objFieldTabENEx = new clsvFieldTab_SimENEx();
    this.objCtlTypeAbbr = new clsCtlTypeEN();
    this.objPrjTabFld = new clsPrjTabFldEN();
  }

  public async tabName4GC(): Promise<string> {
    const viewRegionStore = useviewRegionStore();
    const strTabId = await viewRegionStore.getTabId(this.regionId);
    const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(
      strTabId,
      clsPrivateSessionStorage.currSelPrjId,
    );

    return strTabName;
  }

  private mstrCtlName4Win = '';

  public get ctrlName(): string {
    return Format('btn{0}', this.mId);
  }
  public get ButtonValue(): string {
    if (this.inUse == true) {
      return Format('D:{0}', this.labelCaption);
    } else {
      return Format('A:{0}', this.labelCaption);
    }
  }
  public get fldNameJava(): string {
    return FstLcaseS(this.objFieldTabENEx.fldName.toLowerCase());
  }
  public SelectListItemName = '';
  public get ctlTypeENName(): string {
    return this.objCtlTypeAbbr.ctlTypeENName;
  }
  public get CtrlId4Win(): string {
    this.mstrCtrlId = this.objCtlTypeAbbr.ctlTypeAbbr + this.objFieldTabENEx.fldName;
    return this.mstrCtrlId.replace('ddl', 'cbo');
  }

  public set CtrlId4Win(value: string) {
    this.mstrCtrlId = value;
  }
  private mstrCtrlId = '';
  private mbolIsForExtendClass = false;

  public get ctrlId(): string {
    this.mstrCtrlId = `${this.objCtlTypeAbbr.ctlTypeAbbr + this.objFieldTabENEx.fldName}q`;
    return this.mstrCtrlId;
  }
  public set ctrlId(value: string) {
    this.mstrCtrlId = value;
  }

  public get isForExtendClass(): boolean {
    if (IsNullOrEmpty(this.outFldId) == false) {
      this.mbolIsForExtendClass = true;
    } else {
      this.mbolIsForExtendClass = false;
    }
    return this.mbolIsForExtendClass;
  }

  public get fldName4GC(): string {
    return this.objFieldTabENEx.fldName;
  }
  public get PropertyName(): string {
    return `${this.objFieldTabENEx.fldName}q`;
  }
  //public get tabName(): string {
  //    return this.objFieldTabENEx.tabName;
  //}

  public dsTabName = '';

  public get ObjFieldTabENEx(): clsvFieldTab_SimENEx {
    if (this.objFieldTabENEx == null) {
      const strMsg = '表字段扩展(FieldTabEx)对象没有被初始化！';
      throw strMsg;
    }
    return this.objFieldTabENEx;
  }

  public set ObjFieldTabENEx(value: clsvFieldTab_SimENEx) {
    this.objFieldTabENEx = value;
  }
}
