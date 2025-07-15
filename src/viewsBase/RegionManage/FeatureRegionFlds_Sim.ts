/**
 * 类名:FeatureRegionFlds_Sim(界面:FeatureRegionFlds_Sim,00050294)
 * 表名:FeatureRegionFlds(00050452)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/15 01:36:21
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  RegionId_Static,
  CombineFeatureRegionFldsConditionObj4ExportExcel,
  CombineFeatureRegionFldsConditionObj,
  FeatureRegionFlds_DeleteKeyIdCache,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refvFeatureRegionFlds_List,
} from '@/views/RegionManage/FeatureRegionFlds_SimVueShare';
import {
  FeatureRegionFlds_GetRecCountByCondCache,
  FeatureRegionFlds_GetSubObjLstCache,
  FeatureRegionFlds_ReOrderAsync,
  FeatureRegionFlds_ReFreshCache,
  FeatureRegionFlds_GoBottomAsync,
  FeatureRegionFlds_DownMoveAsync,
  FeatureRegionFlds_UpMoveAsync,
  FeatureRegionFlds_GoTopAsync,
  FeatureRegionFlds_DelRecordAsync,
  FeatureRegionFlds_GetObjByViewFeatureIdAsync,
  FeatureRegionFlds_GetObjLstByViewFeatureIdLstAsync,
  FeatureRegionFlds_GetMaxStrIdAsync,
  FeatureRegionFlds_AddNewRecordAsync,
  FeatureRegionFlds_UpdateRecordAsync,
  FeatureRegionFlds_DelFeatureRegionFldssAsync,
} from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { IsNullOrEmpty, TransToBool, Format } from '@/ts/PubFun/clsString';
import { TabFeature_BindDdl_TabFeatureIdByTabIdInDivCache } from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetSelectValueInDivObj,
  SetCheckedItem4KeyIdInDiv,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsFeatureRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx';
import {
  FeatureRegionFldsEx_FuncMapByFldName,
  FeatureRegionFldsEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsFeatureRegionFldsExWApi';
import {
  ShowEmptyRecNumInfoByDiv,
  ListPara,
  clsOperateList,
  GetCurrPageIndex,
  GetSortBy,
} from '@/ts/PubFun/clsOperateList';
import {
  ObjectAssign,
  BindTab,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { clsPager } from '@/ts/PubFun/clsPager';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
/** FeatureRegionFlds_Sim 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class FeatureRegionFlds_Sim implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: FeatureRegionFlds_Sim;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    FeatureRegionFlds_Sim.objPageCRUD = this;
    this.objPager = new clsPager(this);
  }
  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    return divVarSet.refDivList;
  }
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return divVarSet.refDivLayout;
  }
  /**
   * 获取当前界面的主表名
   **/
  public get thisTabName(): string {
    return clsFeatureRegionFldsEN._CurrTabName;
  }
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public abstract InitVarSet(): void;
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public abstract InitCtlVar(): void;

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      await this.InitVarSet();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();
      if (viewVarSet.sortFeatureRegionFldsBy == '')
        viewVarSet.sortFeatureRegionFldsBy = `${clsFeatureRegionFldsEN.con_ButtonName} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrFeatureRegionFldsObjLst: Array<clsFeatureRegionFldsEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrFeatureRegionFldsObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsFeatureRegionFldsEN = arrFeatureRegionFldsObjLst[i];
      const objRow: Record<string, any> = {};
      for (let j = 0; j < intColNum; j++) {
        const fldName = arrDataColumn[j].fldName;
        const colHeader = arrDataColumn[j].colHeader;
        const value = objEN.GetFldValue(fldName); // Get the value using fldName
        objRow[colHeader] = value; // Use colHeader as the property name
      }
      arrData.push(objRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('功能区域字段({0})导出.xlsx', clsFeatureRegionFldsEN._CurrTabName);
    const strSheetName = '功能区域字段列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_FeatureRegionFldsCache(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_FeatureRegionFldsCache.name;
    if (viewVarSet.sortFeatureRegionFldsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortFeatureRegionFldsBy)为空,请检查!(In BindGv_FeatureRegionFldsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    const objFeatureRegionFldsCond = await CombineFeatureRegionFldsConditionObj4ExportExcel();
    objFeatureRegionFldsCond.SetCondFldValue(
      clsFeatureRegionFldsEN.con_RegionId,
      RegionId_Static.value,
      '=',
    );
    let arrFeatureRegionFldsObjLst: Array<clsFeatureRegionFldsEN> = [];
    try {
      this.recCount = await FeatureRegionFlds_GetRecCountByCondCache(
        objFeatureRegionFldsCond,
        RegionId_Static.value,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objFeatureRegionFldsCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetSubObjLstCache(
        objFeatureRegionFldsCond,
        RegionId_Static.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    if (arrFeatureRegionFldsObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, RegionId_Static.value);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'buttonName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '按钮名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 2,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'text',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '文本',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 3,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'height',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '高度',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 4,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'width',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '宽',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 5,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'seqNum',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '字段序号',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 6,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'cssClass',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '样式表',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 7,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'imageUrl',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '图片资源',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 8,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'inUse',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否在用',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 9,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'updUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改者',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 10,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 11,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '说明',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 12,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrFeatureRegionFldsObjLst = arrFeatureRegionFldsObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrFeatureRegionFldsObjLst, arrDataColumn);
      //console.log("完成BindGv_FeatureRegionFlds!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[TabFeatureId]
   * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_TabFeatureIdInDivInFeature(strTabId: string, strPrjId: string) {
    if (IsNullOrEmpty(strTabId) == true) {
      const strMsg = Format('参数:[strTabId]不能为空!(In .SetDdl_TabFeatureIdInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strTabId.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strTabId]的长度:[{0}]不正确!(.SetDdl_TabFeatureIdInDivInFeature)',
        strTabId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strPrjId) == true) {
      const strMsg = Format('参数:[strPrjId]不能为空!(In .SetDdl_TabFeatureIdInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(.SetDdl_TabFeatureIdInDivInFeature)',
        strPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strPrjId) == true) {
      const strMsg = Format('参数:[strPrjId]不能为空!(In .SetDdl_TabFeatureIdInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(.SetDdl_TabFeatureIdInDivInFeature)',
        strPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await TabFeature_BindDdl_TabFeatureIdByTabIdInDivCache(
      divVarSet.refDivFunction,
      'ddlTabFeatureId',
      strTabId,
      strPrjId,
    ); //
  }

  /** 设置字段值-InUse
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetInUse_Click() {
    const strThisFuncName = this.btnSetInUse_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置是否在用的${this.thisTabName}记录!`);
        return '';
      }
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds);
      await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-InUse
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetNotInUse_Click() {
    const strThisFuncName = this.btnSetNotInUse_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置是否在用的${this.thisTabName}记录!`);
        return '';
      }
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetNotInUse(arrKeyIds);
      await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-GroupName
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetGroupName_Click() {
    const strThisFuncName = this.btnSetGroupName_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置组名的${this.thisTabName}记录!`);
        return '';
      }
      const strGroupName = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'txtGroupName_SetFldValue',
      );
      if (strGroupName == '') {
        const strMsg = '请输入组名(GroupName)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strGroupName=' + strGroupName);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetGroupName(arrKeyIds, strGroupName);
      await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-TabFeatureId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetTabFeatureId_Click() {
    const strThisFuncName = this.btnSetTabFeatureId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置表功能Id的${this.thisTabName}记录!`);
        return '';
      }
      const strTabFeatureId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlTabFeatureId_SetFldValue',
      );
      if (strTabFeatureId == '') {
        const strMsg = '请输入表功能Id(TabFeatureId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strTabFeatureId=' + strTabFeatureId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetTabFeatureId(arrKeyIds, strTabFeatureId);
      await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 重序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   **/
  public async btnReOrder_Click() {
    const strThisFuncName = this.btnReOrder_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        regionId: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_ReOrderAsync(objOrderByData);
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `重序出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
  }

  /**
   * 置底
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
   **/
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置底的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionid: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_GoBottomAsync(objOrderByData);
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `置底出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 移动记录序号时的预检查函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
   **/
  public PreCheck4Order(): boolean {
    const strRegionId = RegionId_Static.value;
    if (strRegionId == '') {
      const strMsg = Format('请输入RegionId!');
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    return true;
  }

  /**
   * 下移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
   **/
  public async btnDownMove_Click() {
    const strThisFuncName = this.btnDownMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionid: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_DownMoveAsync(objOrderByData);
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `下移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 上移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
   **/
  public async btnUpMove_Click() {
    const strThisFuncName = this.btnUpMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionid: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_UpMoveAsync(objOrderByData);
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `上移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /** 置顶
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
   **/
  public async btnGoTop_Click() {
    const strThisFuncName = this.btnGoTop_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strRegionId = RegionId_Static.value;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置顶的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        regionid: strRegionId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await FeatureRegionFlds_GoTopAsync(objOrderByData);
      FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `置顶出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 添加新记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   **/
  public async btnCopyRecord_Click() {
    const strThisFuncName = this.btnCopyRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要克隆的${this.thisTabName}记录!`);
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strViewFeatureId": 表关键字
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   **/
  public async btnDelRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDelRecordInTab_Click.name;
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(0) == false) {
        return;
      }
      await this.DelRecord(strKeyId);
      await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里选择记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   **/
  public async btnSelectRecordInTab_Click(strViewFeatureId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strViewFeatureId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strViewFeatureId);
    } catch (e) {
      const strMsg = `选择记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   **/
  public async DelRecord(strViewFeatureId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await FeatureRegionFlds_DelRecordAsync(strViewFeatureId);
      if (returnInt > 0) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字选择相应的记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
   * @param sender:参数列表
   **/
  public async SelectRecord(strViewFeatureId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objFeatureRegionFldsEN = await FeatureRegionFlds_GetObjByViewFeatureIdAsync(
        strViewFeatureId,
      );
      console.log('完成SelectRecord!', objFeatureRegionFldsEN);
      Redirect('/Index/Main_FeatureRegionFlds');
    } catch (e) {
      const strMsg = `根据关键字获取相应的${this.thisTabName}记录的对象不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecord_Click() {
    const strThisFuncName = this.btnDelRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(arrKeyIds.length) == false) {
        return;
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   **/
  public async btnExportExcel_Click() {
    await this.ExportExcel_FeatureRegionFldsCache();
  }

  /** 显示FeatureRegionFlds对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrFeatureRegionFldsObjLst:需要绑定的对象列表
   **/
  public async BindTab_FeatureRegionFlds(
    divContainer: HTMLDivElement,
    arrFeatureRegionFldsExObjLst: Array<clsFeatureRegionFldsENEx>,
  ) {
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsFeatureRegionFldsEN.con_SeqNum,
        sortBy: clsFeatureRegionFldsEN.con_SeqNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsFeatureRegionFldsEN.con_ButtonName,
        sortBy: clsFeatureRegionFldsEN.con_ButtonName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '按钮名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsFeatureRegionFldsEN.con_FuncName,
        sortBy: clsFeatureRegionFldsEN.con_FuncName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsFeatureRegionFldsEN.con_InUse,
        sortBy: clsFeatureRegionFldsEN.con_InUse,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsFeatureRegionFldsEN.con_CheckTabFeature,
        sortBy: clsFeatureRegionFldsEN.con_CheckTabFeature,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '检查表功能',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsFeatureRegionFldsEN.con_ButtonName4Mvc,
        sortBy: clsFeatureRegionFldsEN.con_ButtonName4Mvc,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '按钮名称4Mvc',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsFeatureRegionFldsEN.con_EventFuncName,
        sortBy: clsFeatureRegionFldsEN.con_EventFuncName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '事件函数名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsFeatureRegionFldsEN.con_FeatureId,
        sortBy: clsFeatureRegionFldsEN.con_FeatureId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '功能Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refvFeatureRegionFlds_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrFeatureRegionFldsExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_FeatureRegionFlds函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrFeatureRegionFldsExObjLst,
        arrDataColumn,
        clsFeatureRegionFldsEN.con_ViewFeatureId,
        this,
      );
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /**
   * 是否显示所有错误
   **/
  public get dispAllErrMsg_q(): boolean {
    return true;
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrFeatureRegionFldsExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrFeatureRegionFldsExObjLst: Array<clsFeatureRegionFldsENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsFeatureRegionFldsEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrFeatureRegionFldsExObjLst) {
        await FeatureRegionFldsEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 函数功能:在数据 列表中跳转到某一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   * @param intPageIndex:页序号
   **/
  public async IndexPage(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    //console.log("跳转到" + intPageIndex + "页");
    this.SetCurrPageIndex(intPageIndex);
    await this.BindGv_FeatureRegionFldsCache(this.listPara.listDiv);
  }

  /** 函数功能:在数据列表中跳转到下一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
   **/
  public async NextPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) + 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 函数功能:在数据列表中跳转到前一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
   **/
  public async PrevPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) - 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
   **/
  public async BindGv_FeatureRegionFldsCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_FeatureRegionFldsCache.name;
    if (viewVarSet.sortFeatureRegionFldsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortFeatureRegionFldsBy)为空,请检查!(In BindGv_FeatureRegionFldsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objFeatureRegionFldsCond = await CombineFeatureRegionFldsConditionObj();
    const strWhereCond = JSON.stringify(objFeatureRegionFldsCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrFeatureRegionFldsExObjLst: Array<clsFeatureRegionFldsENEx> = [];
    try {
      this.recCount = await FeatureRegionFlds_GetRecCountByCondCache(
        objFeatureRegionFldsCond,
        RegionId_Static.value,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objFeatureRegionFldsCond.whereCond,
        );
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objFeatureRegionFldsCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrFeatureRegionFldsExObjLst, true);
        return;
      }
      const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
      if (intCurrPageIndex == 0) {
        if (intPageCount > 1) intCurrPageIndex = intPageCount;
        else intCurrPageIndex = 1;
        this.SetCurrPageIndex(intCurrPageIndex);
      } else if (intCurrPageIndex > intPageCount) {
        intCurrPageIndex = intPageCount;
        this.SetCurrPageIndex(intCurrPageIndex);
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (FeatureRegionFlds_Sim.sortFunStatic != undefined) {
        strSortFun = FeatureRegionFlds_Sim.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objFeatureRegionFldsCond,
        orderBy: viewVarSet.sortFeatureRegionFldsBy,
        sortFun: strSortFun,
      };
      arrFeatureRegionFldsExObjLst = await FeatureRegionFldsEx_GetObjExLstByPagerCache(
        objPagerPara,
        RegionId_Static.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divPager: HTMLDivElement = <HTMLDivElement>document.getElementById('divPager');
    if (this.recCount <= this.pageSize) {
      if (divPager != null) {
        divPager.style.display = 'none';
      }
    } else {
      if (divPager != null) {
        divPager.style.display = 'block';
      }
    }
    if (arrFeatureRegionFldsExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, RegionId_Static.value);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_FeatureRegionFlds(divList, arrFeatureRegionFldsExObjLst);
      //console.log("完成BindGv_FeatureRegionFldsCache!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 排序函数。根据表对象中随机两个字段的值进行比较,正常使用时,需用该类的扩展类的同名函数
   * 作者:pyf
   * 日期:
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortFunExportExcel)
   * @param a:比较的第1个对象
   * @param b:比较的第1个对象
   * @returns 返回两个对象比较的结果
   **/
  public SortFunExportExcel(a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN): number {
    if (a.height == b.height) {
      if (a.height == null) return -1;
      if (b.height == null) return 1;
      return a.height - b.height;
    } else {
      if (b.width == null) return -1;
      if (a.width == null) return 1;
      return a.width - b.width;
    }
  }

  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public abstract SortColumn(sortColumnKey: string, sortDirection: string): void;
  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      viewVarSet.ascOrDesc4SortFun,
      viewVarSet.sortFeatureRegionFldsBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (Object.prototype.hasOwnProperty.call(clsFeatureRegionFldsENEx, sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortFeatureRegionFldsBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    FeatureRegionFlds_Sim.sortFunStatic = sortFun;
    await this.BindGv_FeatureRegionFldsCache(this.listPara.listDiv);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrViewFeatureId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetObjLstByViewFeatureIdLstAsync(
        arrViewFeatureId,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrFeatureRegionFldsObjLst) {
        const strMaxStrId = await FeatureRegionFlds_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.viewFeatureId = strMaxStrId;
        const returnBool = await FeatureRegionFlds_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 设置字段值-InUse
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetInUse(arrViewFeatureId: Array<string>) {
    const strThisFuncName = this.SetInUse.name;
    if (arrViewFeatureId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetObjLstByViewFeatureIdLstAsync(
        arrViewFeatureId,
      );
      let intCount = 0;
      for (const objInFor of arrFeatureRegionFldsObjLst) {
        const objFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
        ObjectAssign(objFeatureRegionFldsEN, objInFor);
        objFeatureRegionFldsEN.SetViewFeatureId(objInFor.viewFeatureId);
        objFeatureRegionFldsEN.SetInUse(TransToBool('True'));
        let returnBool = false;
        try {
          objFeatureRegionFldsEN.sfUpdFldSetStr = objFeatureRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await FeatureRegionFlds_UpdateRecordAsync(objFeatureRegionFldsEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, objInFor.viewFeatureId);
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 设置字段值-InUse
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetNotInUse(arrViewFeatureId: Array<string>) {
    const strThisFuncName = this.SetNotInUse.name;
    if (arrViewFeatureId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetObjLstByViewFeatureIdLstAsync(
        arrViewFeatureId,
      );
      let intCount = 0;
      for (const objInFor of arrFeatureRegionFldsObjLst) {
        const objFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
        ObjectAssign(objFeatureRegionFldsEN, objInFor);
        objFeatureRegionFldsEN.SetViewFeatureId(objInFor.viewFeatureId);
        objFeatureRegionFldsEN.SetInUse(TransToBool('false'));
        let returnBool = false;
        try {
          objFeatureRegionFldsEN.sfUpdFldSetStr = objFeatureRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await FeatureRegionFlds_UpdateRecordAsync(objFeatureRegionFldsEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, objInFor.viewFeatureId);
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 设置字段值-GroupName
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetGroupName(arrViewFeatureId: Array<string>, strGroupName: string) {
    const strThisFuncName = this.SetGroupName.name;
    if (strGroupName == null || strGroupName == '') {
      const strMsg = '请输入组名(GroupName)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrViewFeatureId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetObjLstByViewFeatureIdLstAsync(
        arrViewFeatureId,
      );
      let intCount = 0;
      for (const objInFor of arrFeatureRegionFldsObjLst) {
        const objFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
        ObjectAssign(objFeatureRegionFldsEN, objInFor);
        objFeatureRegionFldsEN.SetViewFeatureId(objInFor.viewFeatureId);
        objFeatureRegionFldsEN.SetGroupName(strGroupName);
        let returnBool = false;
        try {
          objFeatureRegionFldsEN.sfUpdFldSetStr = objFeatureRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await FeatureRegionFlds_UpdateRecordAsync(objFeatureRegionFldsEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, objInFor.viewFeatureId);
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 设置字段值-TabFeatureId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetTabFeatureId(arrViewFeatureId: Array<string>, strTabFeatureId: string) {
    const strThisFuncName = this.SetTabFeatureId.name;
    if (strTabFeatureId == null || strTabFeatureId == '') {
      const strMsg = '请输入表功能Id(TabFeatureId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrViewFeatureId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetObjLstByViewFeatureIdLstAsync(
        arrViewFeatureId,
      );
      let intCount = 0;
      for (const objInFor of arrFeatureRegionFldsObjLst) {
        const objFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
        ObjectAssign(objFeatureRegionFldsEN, objInFor);
        objFeatureRegionFldsEN.SetViewFeatureId(objInFor.viewFeatureId);
        objFeatureRegionFldsEN.SetTabFeatureId(strTabFeatureId);
        let returnBool = false;
        try {
          objFeatureRegionFldsEN.sfUpdFldSetStr = objFeatureRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await FeatureRegionFlds_UpdateRecordAsync(objFeatureRegionFldsEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, objInFor.viewFeatureId);
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrViewFeatureId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await FeatureRegionFlds_DelFeatureRegionFldssAsync(arrViewFeatureId);
      if (returnInt > 0) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 显示{0}对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
   * @param divContainer:显示容器
   * @param objFeatureRegionFlds:需要显示的对象
   **/
  public ShowFeatureRegionFldsObj(
    divContainer: HTMLDivElement,
    objFeatureRegionFlds: clsFeatureRegionFldsEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objFeatureRegionFlds);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objFeatureRegionFlds.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjFeatureRegionFldsEN:表实体类对象
   * @returns 列表的第一个关键字值
   **/
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字!目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /** 函数功能:预留函数,在某一个层(div)里绑定数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
   **/
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }

  /** 函数功能:设置当前页序号
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
   * @param value:页序号
   * @param strDivName4Pager:当前分页所在的层(div)
   **/
  public SetCurrPageIndex(value: number) {
    this.objPager.currPageIndex = value;
  }

  /**
   * 设置界面标题-相当使用ViewState功能
   **/
  public set ViewTitle(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivLayout, 'lblViewTitle', value);
  }
  /**
   * 设置界面标题
   **/
  public get ViewTitle(): string {
    const strValue = GetLabelHtmlInDivObj(divVarSet.refDivLayout, 'lblViewTitle');
    return strValue;
  }
}
