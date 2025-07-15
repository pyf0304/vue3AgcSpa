/*-- -- -- -- -- -- -- -- -- -- --
类名:clsPrjTabENEx
表名:PrjTab(00050009)
生成代码版本:2020.03.11.1
生成日期:2020/03/12 21:12:02
生成者:
工程名称:AGC
工程ID:0005
相关数据库:tzar.tpddns.cn,19433AGC_CS12
prjDataBaseId:0213
模块中文名:字段、表维护
模块英文名:Table_Field
框架-层名:实体扩展层(EntityLayerEx)
编程语言:TypeScript
== == == == == == == == == == == == 
*/
/// <summary>
/// 工程表(PrjTab)
/// (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
/// </summary>

import { clsFuncModule_AgcEN } from '../PrjManage/clsFuncModule_AgcEN';
import { clsProjectsEN } from '../PrjManage/clsProjectsEN';
import { clsTabFunctionPropEN } from '../PrjFunction/clsTabFunctionPropEN';
import { clsFieldTabENEx } from './clsFieldTabENEx';
import { clsPrjTabFldENEx } from './clsPrjTabFldENEx';
import { clsPrjConstraintENEx } from './clsPrjConstraintENEx';
import { clsConstraintFieldsENEx } from './clsConstraintFieldsENEx';
import { clsTabFeatureENEx } from './clsTabFeatureENEx';
import { clsPrjTabFldENEx4GC } from './clsPrjTabFldENEx4GC';
import { FirstUcaseS, FstLcaseS } from '@/ts/PubFun/clsString';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
export class clsPrjTabENEx4GC extends clsPrjTabEN {
  //以下是属性变量

  /// <summary>
  /// 构造函数
  /// (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
  /// </summary>
  constructor() {
    super();
  }
  public arrFieldTabExObjLst: Array<clsFieldTabENEx> = new Array<clsFieldTabENEx>(); //界面相关详细表字段集合

  public arrFldSet: Array<clsPrjTabFldENEx4GC> = new Array<clsPrjTabFldENEx4GC>();
  public arrFldSetAll: Array<clsPrjTabFldENEx4GC> = new Array<clsPrjTabFldENEx4GC>();
  public arrKeyFldSet: Array<clsPrjTabFldENEx4GC> = new Array<clsPrjTabFldENEx4GC>();
  public arrPrjConstraintSet: Array<clsPrjConstraintENEx> = new Array<clsPrjConstraintENEx>();
  public arrConstraintFieldsSet: Array<clsConstraintFieldsENEx> =
    new Array<clsConstraintFieldsENEx>();
  public arrTabFeatureSet: Array<clsTabFeatureENEx> = new Array<clsTabFeatureENEx>();
  public arrTabFunctionProp: Array<clsTabFunctionPropEN> = new Array<clsTabFunctionPropEN>();

  public arrPrjTabFldENExObjLst: Array<clsPrjTabFldENEx> = new Array<clsPrjTabFldENEx>();
  /// <summary>
  /// 关键字段的表字段对象
  /// </summary>
  public objKeyField0: clsPrjTabFldENEx = new clsPrjTabFldENEx();
  public objNameField: clsPrjTabFldENEx = new clsPrjTabFldENEx();
  public objOrderNumField: clsPrjTabFldENEx = new clsPrjTabFldENEx();
  public objDelSignField: clsPrjTabFldENEx = new clsPrjTabFldENEx();
  public objSortField: clsPrjTabFldENEx = new clsPrjTabFldENEx();
  public objCacheClassifyFld: clsPrjTabFldENEx = new clsPrjTabFldENEx();
  /// <summary>
  /// 名称字段的表字段对象
  /// </summary>
  public objPrjTabFld4NameFld: clsPrjTabFldENEx = new clsPrjTabFldENEx(); //名称字段的表字段对象

  public objProjectsEN: clsProjectsEN = new clsProjectsEN();

  public ObjFuncModule: clsFuncModule_AgcEN = new clsFuncModule_AgcEN();
  public PrjInnerFileName = '';
  public FullFileName = '';

  public funcId4GC = '';
  public SuffixPath = '';
  //public bool IsCheckDate :string ="";
  //public DateTime NewestPublishDate :string ="";
  //    private mstrProgLevelTypeId;

  //private mstrModuleName;

  public sqlDsTypeName = '';
  public tabStateName = '';
  public funcModuleName = '';
  public tabTypeName = '';
  public fldNum = 0;
  public tabMainTypeName = '';
  public relaTabName4View = '';
  public dateTime_Sim = '';

  public ModuleName = '';

  public applicationTypeId = 0;
  public ClsName = '';
  public ClsNameEx = '';
  public CurrUserName = '';
  /// <summary>
  /// 工程数据库Id
  /// </summary>
  public prjDataBaseId = '';

  /// <summary>
  /// 表字段数
  /// </summary>
  public TabFldNum = 0;

  public TabSpace = '';

  public LangTypeId = '';
  /// <summary>
  /// 关键字段数
  /// </summary>
  public KeyFldNum = 0;

  //        public clsPrjTabENEx(string strTabId): base(strTabId)
  //{

  //}

  //        public clsPrjTabENEx(clsPrjTabEN objPrjTabEN)
  //{
  //    this.tabId = objPrjTabEN.tabId; //表ID
  //    this.tabName = objPrjTabEN.tabName; //表名
  //    this.tabName = objPrjTabEN.tabName; //表中文名
  //    this.prjId = objPrjTabEN.prjId; //工程ID
  //    //this.objId = objPrjTabEN.objId; //所属对象
  //    this.IsNeedTransCode = objPrjTabEN.IsNeedTransCode; //是否需要转换代码
  //    this.sqlDsTypeId = objPrjTabEN.sqlDsTypeId; //数据源类型
  //    this.tabStateId = objPrjTabEN.tabStateId; //表状态ID
  //    this.TabName_B = objPrjTabEN.TabName_B; //表名_后备
  //    this.IsParaTab = objPrjTabEN.IsParaTab; //是否参数表
  //    this.IsNationStandard = objPrjTabEN.IsNationStandard; //是否国标
  //    this.isArchive = objPrjTabEN.isArchive; //是否存档
  //    this.isChecked = objPrjTabEN.isChecked; //是否核实
  //    //this.errMsg = objPrjTabEN.errMsg; //错误信息
  //    this.funcModuleAgcId = objPrjTabEN.funcModuleAgcId; //功能模块Id
  //    this.DataBaseName = objPrjTabEN.DataBaseName; //数据库名
  //    this.Owner = objPrjTabEN.Owner; //拥有者
  //    this.RelaTabId4View = objPrjTabEN.RelaTabId4View; //相关视图ID
  //    this.updUserId = objPrjTabEN.updUserId; //修改用户Id
  //    this.updDate = objPrjTabEN.updDate; //修改日期
  //    //this.geneCodeDate = objPrjTabEN.geneCodeDate; //生成代码日期
  //    this.memo = objPrjTabEN.memo; //说明
  //}

  public CurrDate = '';

  public userId = '';

  /// <summary>
  /// 字段名列表串
  /// </summary>
  public get FieldNameLstStr(): string {
    return this.GetFieldNameLstStrByFieldObjLst(this.arrFldSet);
  }
  /// <summary>
  /// 通过字段对象列表获取字段名列表串
  /// </summary>
  /// <param name="arrFieldSet">字段对象列表</param>
  /// <returns>字段名列表串</returns>
  public GetFieldNameLstStrByFieldObjLst(arrFieldSet: Array<clsPrjTabFldENEx4GC>) {
    const arrFieldNameLst: Array<string> = this.GetFieldNameLstByFieldObjLst(arrFieldSet);
    const strFieldNameLst: string = arrFieldNameLst.join(',');
    return strFieldNameLst;
  }

  /// <summary>
  /// 通过字段对象列表获取字段名列表
  /// </summary>
  /// <param name="arrFieldSet">字段对象列表</param>
  /// <returns>字段名列表</returns>
  public GetFieldNameLstByFieldObjLst(arrFieldSet: Array<clsPrjTabFldENEx4GC>): Array<string> {
    console.log(arrFieldSet);
    const arrFieldNameLst: Array<string> = new Array<string>();
    for (const objField of this.arrFldSet) {
      arrFieldNameLst.push(objField.ObjFieldTabENEx.fldName);
    }
    return arrFieldNameLst;
  }

  /// <summary>
  /// 关键字字段名的列表串
  /// </summary>
  public get KeyFldNameLstStr(): string {
    const arrKeyFldNameLst: Array<string> = new Array<string>();
    for (const objField of this.arrKeyFldSet) {
      arrKeyFldNameLst.push(objField.ObjFieldTabENEx.fldName);
    }
    const strKeyFldNameLst: string = arrKeyFldNameLst.join(',');
    return strKeyFldNameLst;
  }
  /// <summary>
  /// 关键字函数变量的列表串
  /// </summary>
  public get KeyPrivFuncFldNameLstStr(): string {
    const arrKeyPrivFuncFldNameLst: Array<string> = new Array<string>();
    for (const objField of this.arrKeyFldSet) {
      arrKeyPrivFuncFldNameLst.push(objField.ObjFieldTabENEx.privFuncName);
    }
    const strKeyPrivFuncFldNameLst: string = arrKeyPrivFuncFldNameLst.join(',');
    return strKeyPrivFuncFldNameLst;
  }
  /// <summary>
  /// 关键字变量定义的列表串
  /// </summary>
  public get KeyconstDefineLstStr(): string {
    const arrKeyconstDefLst: Array<string> = new Array<string>();
    for (const objField of this.arrKeyFldSet) {
      arrKeyconstDefLst.push(objField.ObjFieldTabENEx.keyVarDefineStr);
    }
    const strKeyconstDefLst: string = arrKeyconstDefLst.join(',');
    return strKeyconstDefLst;
  }

  public get Keys(): string {
    let strT: string;
    let i = 0;
    strT = '';
    for (const objField of this.arrKeyFldSet) {
      if (i == 0) {
        //是否是第一次
        strT += objField.ObjFieldTabENEx.fldName;
      } else {
        strT += `,${objField.ObjFieldTabENEx.fldName}`;
      }
      i++;
    }
    return strT;
  }
  //protected int intViewFldNum;
  //protected int intTabKeyFldNum;		//相关表的关键字段数
  public TabKeyFldNum = 0;

  public ViewFldNum = 0;

  public FolderName_Root = '';

  /// <summary>
  /// 备份的文件目录
  /// </summary>
  public BackupFolderName = '';
  public IsHaveImageField = false;

  public ImageFieldName = '';

  public SimpleFileName = '';
  public FolderName = '';
  public fileName = '';

  public get TabName_Java(): string {
    return FstLcaseS(this.tabName);
  }
  /// <summary>
  /// 编程层类型
  /// 日期：20160530
  /// 作者：潘以锋
  /// </summary>
  public codeTypeId = '';

  /// <summary>
  /// 模板Id
  /// </summary>
  public functionTemplateId = '';

  /// <summary>
  /// 表名，首字母大写
  /// </summary>
  public get TabName_FstUcase(): string {
    return FirstUcaseS(this.tabName);
  }
  /// <summary>
  /// 表名，首字母小写
  /// </summary>
  public get TabName_FstLcase(): string {
    return FstLcaseS(this.tabName);
  }
}
