import { clsCtlTypeEN } from '../PrjInterface/clsCtlTypeEN';
import { clsvFieldTab_SimENEx } from '../Table_Field/clsvFieldTab_SimENEx';

import { FieldTab_GetObjByFldIdAsync } from '@/ts/L3ForWApi/Table_Field/clsFieldTabWApi';
import { PrjTabFldEx_GetObjByFldIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { vPrjTab_SimEx_GetNameByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsEditRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsEN';
import { Format, FstLcaseS } from '@/ts/PubFun/clsString';
import { useviewRegionStore } from '@/store/modules/viewRegion';
export class clsEditRegionFldsENEx4GC extends clsEditRegionFldsEN {
  //以下是属性变量
  //public objFieldTabENEx: clsFieldTabENEx;
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
  public async GetFieldTypeId(): Promise<string> {
    const strThisFuncName = this.GetFieldTypeId.name;
    const objFieldTab = await FieldTab_GetObjByFldIdAsync(this.fldId);
    if (objFieldTab == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return '';
    }
    return objFieldTab.fieldTypeId;
  }
  public async GetIsLogUpdDateOrUpdUser(): Promise<boolean> {
    const strFieldTypeId = await this.GetFieldTypeId();
    if (strFieldTypeId == '13') return true;
    if (strFieldTypeId == '14') return true;
    return false;
  }
  public async IsPrimaryKeyIdentity(): Promise<boolean> {
    const viewRegionStore = useviewRegionStore();
    const objViewRegion = await viewRegionStore.getObj(this.regionId);
    if (objViewRegion == null) {
      const strMsg = Format(
        '在项目:[{0}]中，区域Id:[{1}]没有相应区域，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        this.regionId,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(objViewRegion.tabId, this.fldId);

    if (objPrjTabFld.primaryTypeId == '02') return true;
    return false;
  }
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

  public get fldName(): string {
    return this.objFieldTabENEx.fldName;
  }
  public get CtrlId4Win(): string {
    this.mstrCtrlId = this.objCtlTypeAbbr.ctlTypeAbbr + this.objFieldTabENEx.fldName;

    return this.mstrCtrlId.replace('ddl', 'cbo');
  }
  public set CtrlId4Win(value: string) {
    this.mstrCtrlId = value;
  }

  public SelectListItemName = '';

  private mstrCtrlId = '';

  public get ctrlId(): string {
    this.mstrCtrlId = this.objCtlTypeAbbr.ctlTypeAbbr + this.objFieldTabENEx.fldName;
    return this.mstrCtrlId;
  }

  public set ctrlId(value: string) {
    this.mstrCtrlId = value;
  }
  public get ctlTypeENName(): string {
    return this.objCtlTypeAbbr.ctlTypeENName;
  }
  public get ctlTypeName(): string {
    return this.objCtlTypeAbbr.ctlTypeName;
  }

  /// <summary>
  /// 转换代码表
  /// </summary>
  public CodeTab = '';
  ///// <summary>
  ///// 转换代码表
  ///// </summary>

  public dsTabName = '';

  public async tabName(): Promise<string> {
    const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(
      this.regionId,
      clsPrivateSessionStorage.cmPrjId,
    );

    return strTabName;
  }
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
