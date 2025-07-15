/*-- -- -- -- -- -- -- -- -- -- --
类名:clsDetailRegionFldsENEx4GC
表名:DetailRegionFlds(00050544)
生成代码版本:2020.06.05.2
生成日期:2020/06/09 14:14:47
生成者:
工程名称:AGC
工程ID:0005
相关数据库:tzar.tpddns.cn,19433AGC_CS12
prjDataBaseId:0213
模块中文名:区域管理
模块英文名:RegionManage
框架-层名:实体扩展层_TS(EntityLayerEx)
编程语言:TypeScript
== == == == == == == == == == == == 
*/
/// <summary>
/// 详细区域字段(DetailRegionFlds)
/// (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
/// </summary>

import { clsCtlTypeEN } from '../PrjInterface/clsCtlTypeEN';
import { clsvFieldTab_SimENEx } from '../Table_Field/clsvFieldTab_SimENEx';
import { clsDetailRegionFldsENEx } from './clsDetailRegionFldsENEx';
import { useviewRegionStore } from '@/store/modules/viewRegion';

import { PrjTabFldEx_GetObjByFldIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Format, FstLcaseS } from '@/ts/PubFun/clsString';
export class clsDetailRegionFldsENEx4GC extends clsDetailRegionFldsENEx {
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
  public get fieldTypeId(): string {
    return ''; // this.objFieldTabENEx.fieldTypeId;
  }
  public get IsLogUpdDateOrUpdUser(): boolean {
    if (this.fieldTypeId == '13') return true;
    if (this.fieldTypeId == '14') return true;
    return false;
  }
  public async IsPrimaryKey_Identity(): Promise<boolean> {
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

  public get fldName_Java(): string {
    return FstLcaseS(this.objFieldTabENEx.fldName.toLowerCase());
  }

  public get fldName4GC(): string {
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
  public get ctlTypeName4GC(): string {
    return this.objCtlTypeAbbr.ctlTypeName;
  }

  /// <summary>
  /// 转换代码表
  /// </summary>
  public CodeTab = '';
  ///// <summary>
  ///// 转换代码表
  ///// </summary>

  public ds_TabName = '';

  //public get tabName(): string {

  //    return this.objFieldTabENEx.tabName;
  //}

  //    public  objFieldTabENEx
  //    {
  //    get
  //    {
  //        if (objFieldTabENEx == null) {
  //            string strMsg = "表字段扩展(FieldTabEx)对象没有被初始化！";
  //            throw new Exception(strMsg);
  //        }
  //        return objFieldTabENEx;

  //    }
  //    set => objFieldTabENEx = value;
  //}
  //        }

  //public async tabName(): Promise<string> {
  //    const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(this.regionId, this.cmPrjId);

  //    return strTabName;
  //}

  //public tabName: string = "";
}
