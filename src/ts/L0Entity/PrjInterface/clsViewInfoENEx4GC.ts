/*-- -- -- -- -- -- -- -- -- -- --
类名:clsViewInfoENEx
表名:ViewInfo(00050006)
生成代码版本:2020.03.11.1
生成日期:2020/03/12 21:11:57
生成者:
工程名称:AGC
工程ID:0005
相关数据库:tzar.tpddns.cn,19433AGCCS12
prjDataBaseId:0213
模块中文名:界面管理
模块英文名:PrjInterface
框架-层名:实体扩展层(EntityLayerEx)
编程语言:TypeScript
== == == == == == == == == == == == 
*/
/// <summary>
/// 界面(ViewInfo)
/// (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
/// </summary>

import { clsPrjTabEN } from '../Table_Field/clsPrjTabEN';
import { clsQryRegionFldsENEx4GC } from '../RegionManage/clsQryRegionFldsENEx4GC';
import { clsPrjTabFldENEx } from '../Table_Field/clsPrjTabFldENEx';
import { ASPDropDownListEx } from '../GeneCSharpEx/clsASPDropDownListENEx';
import { clsDGRegionFldsENEx } from '../RegionManage/clsDGRegionFldsENEx';
import { clsEditRegionFldsENEx4GC } from '../RegionManage/clsEditRegionFldsENEx4GC';
import { clsDetailRegionFldsENEx4GC } from '../RegionManage/clsDetailRegionFldsENEx4GC';
import { clsExcelExportRegionFldsENEx4GC } from '../RegionManage/clsExcelExportRegionFldsENEx4GC';
import { clsFeatureRegionFldsENEx4GC } from '../RegionManage/clsFeatureRegionFldsENEx4GC';

import { clsPrjFeatureENEx } from '../PrjFunction/clsPrjFeatureENEx';
import { clsViewReferFilesENEx } from '../GeneCode/clsViewReferFilesENEx';
import { clsViewRegionENEx } from '../RegionManage/clsViewRegionENEx';
import { clsViewRegionEN } from '../RegionManage/clsViewRegionEN';
import { clsButtonTabENEx } from '../PrjFunction/clsButtonTabENEx';
import { enumMainSubViewType } from '../PrjManage/enumMainSubViewType';
import { enumProgLangType } from '../SysPara/clsProgLangTypeEN';
import { clsProjectsEN } from '../PrjManage/clsProjectsEN';
import { clsFuncModuleAgcEN } from '../PrjManage/clsFuncModuleAgcEN';
import { clsCodeTypeEN } from '../GeneCode/clsCodeTypeEN';
import { clsPrjTabFldENEx4GC } from '../Table_Field/clsPrjTabFldENEx4GC';
import { clsViewFeatureFldsENEx } from '../RegionManage/clsViewFeatureFldsENEx';
import { clsvFunction4GeneCode_SimENEx } from '../PrjFunction/clsvFunction4GeneCode_SimENEx';
import { clsViewGroupENEx } from './clsViewGroupENEx';
import { clsViewGroupEN } from './clsViewGroupEN';
import { clsViewStyleEN } from './clsViewStyleEN';
import { clsViewTypeCodeTabEN } from './clsViewTypeCodeTabEN';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
export class clsViewInfoENEx4GC extends clsViewInfoEN {
  //以下是属性变量
  //public objMainPrjTab: clsPrjTabEN;
  //public objInRelaTab: clsPrjTabEN;
  //public arrQryRegionFldSet: Array<clsQryRegionFldsENEx4GC>;
  /// <summary>
  /// 构造函数
  /// (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
  /// </summary>
  constructor() {
    super();
    //this.objMainPrjTab = new clsPrjTabEN();
    //this.objInRelaTab = new clsPrjTabEN();
    //this.arrQryRegionFldSet = new Array<clsQryRegionFldsENEx4GC>();
  }

  public objViewGroupExJava: clsViewGroupENEx = new clsViewGroupENEx();
  //public Array<clsFieldTabENEx> arrFieldTabExObjLst1Bak = null;			//界面相关详细表字段集合
  public objCacheClassifyFld4View: clsPrjTabFldENEx4GC = new clsPrjTabFldENEx4GC();
  public arrKeyPrjTabFldSet: Array<clsPrjTabFldENEx4GC> = new Array<clsPrjTabFldENEx4GC>();
  public arrASPDropDownListObj: Array<ASPDropDownListEx> = new Array<ASPDropDownListEx>();
  public arrRelaMainTabFldSet: Array<clsPrjTabFldENEx4GC> = new Array<clsPrjTabFldENEx4GC>();
  public arrRelaDetailTabFldSet: Array<clsPrjTabFldENEx4GC> = new Array<clsPrjTabFldENEx4GC>();
  //public Array<clsArrayViewRegionFldsENEx> arrArrayViewRegionFldSet = null;
  public arrQryRegionFldSet: Array<clsQryRegionFldsENEx4GC> = new Array<clsQryRegionFldsENEx4GC>();
  public arrDGRegionFldSet: Array<clsDGRegionFldsENEx> = new Array<clsDGRegionFldsENEx>();
  public arrEditRegionFldSet4InUse: Array<clsEditRegionFldsENEx4GC> =
    new Array<clsEditRegionFldsENEx4GC>();
  public arrDetailRegionFldSet4InUse: Array<clsDetailRegionFldsENEx4GC> =
    new Array<clsDetailRegionFldsENEx4GC>();

  public arrEditRegionFldSet: Array<clsEditRegionFldsENEx4GC> =
    new Array<clsEditRegionFldsENEx4GC>();

  public arrExcelExportRegionFldSet: Array<clsExcelExportRegionFldsENEx4GC> =
    new Array<clsExcelExportRegionFldsENEx4GC>();
  //public Array<clsEditRegionFldsENEx4GC> arrDetailRegionFldSet = null;
  public arrDetailRegionFldSet: Array<clsDetailRegionFldsENEx4GC> =
    new Array<clsDetailRegionFldsENEx4GC>();

  public arrFeatureRegionFlds: Array<clsFeatureRegionFldsENEx4GC> =
    new Array<clsFeatureRegionFldsENEx4GC>();
  public arrvViewFeatureFlds = new Array<clsViewFeatureFldsENEx>();
  public arrFunction4GeneCodeSetByFeatureLst: Array<clsvFunction4GeneCode_SimENEx> =
    new Array<clsvFunction4GeneCode_SimENEx>();

  public arrPrjFeature: Array<clsPrjFeatureENEx> = new Array<clsPrjFeatureENEx>();
  public arrButtonTab: Array<clsButtonTabENEx> = new Array<clsButtonTabENEx>();
  public arrViewReferFiles: Array<clsViewReferFilesENEx> = new Array<clsViewReferFilesENEx>();
  public arrViewRegion: Array<clsViewRegionENEx> = new Array<clsViewRegionENEx>();

  public arrFeatureId: Array<string> = new Array<string>();

  public objViewGroupEx: clsViewGroupEN = new clsViewGroupEN();
  public objViewStyleEN: clsViewStyleEN = new clsViewStyleEN();

  public objMainPrjTab: clsPrjTabEN = new clsPrjTabEN();
  public objInRelaTab: clsPrjTabEN = new clsPrjTabEN();
  public objOutRelaTab: clsPrjTabEN = new clsPrjTabEN();

  public objMainTabKeyField: clsPrjTabFldENEx = new clsPrjTabFldENEx();
  public objMainOrderNumField: clsPrjTabFldENEx = new clsPrjTabFldENEx();
  public objSortFieldOut: clsPrjTabFldENEx = new clsPrjTabFldENEx();

  public objMainDelSignField: clsPrjTabFldENEx = new clsPrjTabFldENEx();
  public objMainNameField: clsPrjTabFldENEx = new clsPrjTabFldENEx();

  public objDetailTabKeyField: clsPrjTabFldENEx = new clsPrjTabFldENEx();

  public objViewTypeCodeTab: clsViewTypeCodeTabEN = new clsViewTypeCodeTabEN();

  //public objDGRegionENEx: clsDGRegionENEx = new clsDGRegionENEx();
  //public objQueryRegionENEx: clsQueryRegionENEx = new clsQueryRegionENEx();
  //public objEditRegionENEx: clsEditRegionENEx = new clsEditRegionENEx();
  //public objDetailRegionENEx: clsDetailRegionENEx = new clsDetailRegionENEx();

  ////public clsArrayViewRegionENEx objArrayViewRegionENEx = null;
  //public objFeatureRegionENEx: clsFeatureRegionENEx = new clsFeatureRegionENEx();
  //public objExcelExportRegionENEx: clsExcelExportRegionENEx = new clsExcelExportRegionENEx();
  //regionTypeId regionTypeName  RegionTypeENName regionTypeSimName   regionTypeOrderNum memo    DefaWidth
  //0000	未知区域 Unknown 未知	0	NULL NULL
  //0001	查询区域 QueryRegion 查询	1	NULL	900
  //0002	列表区域 ListRegion  列表	3	NULL	1100
  //0003	编辑区域 EditRegion  编辑	4	NULL	600
  //0005	树形区域 TreeViewRegion  树形	5	NULL	300
  //0006	详细信息区域 DetailRegion    详细	7	NULL	600
  //0007	Excel导出区域 ExcelExportRegion   导出	6	NULL	1100
  //0008	功能区域 FeatureRegion   功能	2	NULL	800

  public get objViewRegionEdit(): clsViewRegionEN {
    const obj = this.arrViewRegion.find((x) => x.regionTypeId == '0003');
    if (obj != undefined) return obj;
    else return new clsViewRegionEN();
  }
  public get objViewRegionQuery(): clsViewRegionEN {
    const obj = this.arrViewRegion.find((x) => x.regionTypeId == '0001');
    if (obj != undefined) return obj;
    else return new clsViewRegionEN();
  }

  public get objViewRegionArray(): clsViewRegionEN {
    const obj = this.arrViewRegion.find((x) => x.regionTypeId == '0002');
    if (obj != undefined) return obj;
    else return new clsViewRegionEN();
  }
  public get objViewRegionDetail(): clsViewRegionEN {
    const obj = this.arrViewRegion.find((x) => x.regionTypeId == '0006');
    if (obj != undefined) return obj;
    else return new clsViewRegionEN();
  }

  public get objViewRegionFeature(): clsViewRegionEN {
    const obj = this.arrViewRegion.find((x) => x.regionTypeId == '0008');
    if (obj != undefined) return obj;
    else return new clsViewRegionEN();
  }

  public objProjectsEN: clsProjectsEN = new clsProjectsEN();
  public ObjFuncModule: clsFuncModuleAgcEN = new clsFuncModuleAgcEN();
  public objCodeType: clsCodeTypeEN = new clsCodeTypeEN();

  /// <summary>
  /// 输入表的关键字
  /// </summary>
  public KeyNameIn = '';
  /// <summary>
  /// 输出表的关键字
  /// </summary>
  public KeyNameOut = '';
  /// <summary>
  /// 代码类型Id
  /// </summary>
  public codeTypeId = '';

  public ErrNo = 0;
  /// <summary>
  /// 备份的文件目录
  /// </summary>
  public BackupFolderName = '';

  public IsDesign = false;

  public LangType: enumProgLangType = enumProgLangType.CSharp_01;
  public LangTypeId: string = enumProgLangType.CSharp_01;

  public IsUseCtl = false;

  public MainSubViewType: enumMainSubViewType = enumMainSubViewType.MainDataTab0001;

  public FirstSortField = '';

  public ApplicationTypeId2 = '';
  public WinUserCtlCsFName = '';

  public WebUserCtlFName = '';

  public WebUserCtlClassName = '';

  public WebFormName = '';

  public MvcControllerName = '';
  public MvcModelExName = '';

  public MvcModel4QueryName = '';
  public MvcModel4FeatureName = '';
  private mstrWebFormFName = '';

  // public get WebFormFName(): string {
  //   if (this.isUseCache4List == true) return this.mstrWebFormFName;
  //   else return '';
  // }
  public set WebFormFName(value: string) {
    this.mstrWebFormFName = value;
  }
  /// <summary>
  /// 目录名
  /// </summary>
  public FolderName = '';
  /// <summary>
  /// 用于输出的表名
  /// </summary>
  public get TabNameOut(): string {
    return this.objOutRelaTab.tabName;
  }
  /// <summary>
  /// 用户于输入的表名
  /// </summary>
  public get TabNameIn(): string {
    return this.objInRelaTab.tabName;
  }
  /// <summary>
  /// 界面的主表名称
  /// </summary>
  public get tabCnName(): string {
    return this.objMainPrjTab.tabCnName;
  }

  /// <summary>
  /// 界面的主表中文名
  /// </summary>
  public get tabName(): string {
    return this.objMainPrjTab.tabName;
  }

  public WebUserCtlCsFName = '';

  public NameSpace = '';
  public ClsName = '';

  public FolderNameRoot = '';
  public CurrDate = '';

  public CurrUserName = '';
  /// <summary>
  /// 关键字字段名的列表串,附带双引号
  /// </summary>
  public get KeyFldNameLstStrWithQuote(): string {
    const arrKeyFldNameLst: Array<string> = new Array<string>();
    for (const objField of this.arrKeyPrjTabFldSet) {
      arrKeyFldNameLst.push(`"${objField.ObjFieldTabENEx.fldName}"`);
    }
    const strKeyFldNameLst: string = arrKeyFldNameLst.join(',');
    return strKeyFldNameLst;
  }

  /// <summary>
  /// 关键字函数变量的列表串
  /// </summary>
  public get KeyPrivFuncFldNameLstStr(): string {
    const arrKeyPrivFuncFldNameLst: Array<string> = new Array<string>();
    for (const objField of this.arrKeyPrjTabFldSet) {
      arrKeyPrivFuncFldNameLst.push(objField.ObjFieldTabENEx.privFuncName);
    }
    const strKeyPrivFuncFldNameLst: string = arrKeyPrivFuncFldNameLst.join(',');
    return strKeyPrivFuncFldNameLst;
  }

  /// <summary>
  /// 关键字字段名的列表串
  /// </summary>
  public get KeyFldNameLstStr(): string {
    const arrKeyFldNameLst: Array<string> = new Array<string>();
    for (const objField of this.arrKeyPrjTabFldSet) {
      arrKeyFldNameLst.push(objField.ObjFieldTabENEx.fldName);
    }
    const strKeyFldNameLst: string = arrKeyFldNameLst.join(',');
    return strKeyFldNameLst;
  }

  public TabKeyFldNum = 0;

  /// <summary>
  /// 关键字变量定义的列表串
  /// </summary>
  public get KeyconstDefineLstStr(): string {
    const arrKeyconstDefLst: Array<string> = new Array<string>();
    for (const objField of this.arrKeyPrjTabFldSet) {
      arrKeyconstDefLst.push(objField.ObjFieldTabENEx.keyVarDefineStr);
    }
    const strKeyconstDefLst: string = arrKeyconstDefLst.join(',');
    return strKeyconstDefLst;
  }
  /// <summary>
  /// 关键字变量定义的列表串
  /// </summary>
  public get MainTabPrimaryFieldPrivFuncconst(): string {
    const arrKeyconstDefLst: Array<string> = new Array<string>();
    for (const objField of this.arrKeyPrjTabFldSet) {
      arrKeyconstDefLst.push(objField.ObjFieldTabENEx.privFuncName);
    }
    const strKeyconstDefLst: string = arrKeyconstDefLst.join(',');
    return strKeyconstDefLst;
  }

  protected intViewFldNum = 0;
  protected intTabKeyFldNum = 0; //相关表的关键字段数

  /// <summary>
  /// 数据源类型(说明:;字段类型:char;字段长度:2;是否可空:False)
  /// </summary>
  public get sqlDsTypeId(): string {
    return this.objMainPrjTab.sqlDsTypeId;
  }

  /// <summary>
  /// 模板Id
  /// </summary>
  public functionTemplateId = '';

  /// <summary>
  /// 工程数据库Id
  /// </summary>
  public prjDataBaseId = '';
  public ViewFldNum = 0;
}
