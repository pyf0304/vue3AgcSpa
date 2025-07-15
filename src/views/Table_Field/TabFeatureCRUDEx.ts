import TabFeature_EditEx from './TabFeature_EditEx';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { vPrjFeatureSim_GetObjByFeatureIdCache } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectSelectedIndexInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { confirm_del } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { TabFeatureCRUD } from '@/viewsBase/Table_Field/TabFeatureCRUD';

import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { vTabFeature_SimEx_GetObjByTabFeatureIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvTabFeature_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import {
  TabFeatureEx_CheckTabFeatureFld,
  TabFeatureEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureExWApi';
import {
  TabFeature_GetRecCountByCondAsync,
  TabFeature_ReFreshCache,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsTabFeatureENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureENEx';
import { clsPubFun4Visible } from '@/ts/FunClass/clsPubFun4Visible';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumPrjFeatureType } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';
import {
  divVarSet,
  FeatureTypeId_Static,
  PrjId_Session,
  qryVarSet,
  TabId_Static,
  viewVarSet,
} from '@/views/Table_Field/TabFeatureVueShare';

/** TabFeatureCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class TabFeatureCRUDEx extends TabFeatureCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortTabFeatureBy=  "tabFeatureId";
  public TabId = '';
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TabFeatureCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TabFeatureCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_TabFeature]！');
    //this.BindGv_TabFeature();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'TabFeature':
        this.BindGv_TabFeature4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: TabFeatureCRUDEx = new TabFeatureCRUDEx();
    const objPageEdit: TabFeature_EditEx = new TabFeature_EditEx('TabFeature_EditEx', objPage);
    let strMsg = '';
    let arrKeyIds;
    let objPrjFeature;
    let objTabFeature;
    switch (strCommandName) {
      case 'CheckTabFeatureFld':
        objPage.btnCheckTabFeatureFld_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
          strKeyId,
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objTabFeature == null) {
          strMsg = Format(
            '在项目:[{0}]中，表功能Id:[{1}]没有相应功能，请检查！',
            clsPrivateSessionStorage.currSelPrjName,
            strKeyId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(objTabFeature.featureId);
        if (objPrjFeature == null) {
          const strMsg = Format(
            '功能Id(featureId):[{0}]没有相应功能，请检查！',
            objTabFeature.featureId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        TabFeature_EditEx.FeatureTypeId_Static = objPrjFeature.featureTypeId;
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        if (confirm_del(arrKeyIds.length) == false) {
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'TabFeatureCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //TabFeatureCRUD.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      const strTabId = await clsPubVar4Web.GetTabId(this.GetTabId);

      TabId_Static.value = strTabId;
      TabId_Static.value = strTabId;
      FeatureTypeId_Static.value = enumPrjFeatureType.TabFeature_03;
      // // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      // // 为功能区绑定下拉框
      // await this.BindDdl4FeatureRegion();

      viewVarSet.sortTabFeatureBy = Format('{0} Asc', clsTabFeatureEN.con_OrderNum);
      //2、显示无条件的表内容在GridView中
      await this.BindGv_TabFeature4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public get qsTabId() {
    const strName = 'tabId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_TabFeature4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_TabFeature4Func.name;
    if (viewVarSet.sortTabFeatureBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(sortTabFeatureBy)为空，请检查！(In BindGv_TabFeatureCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineTabFeatureCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrTabFeatureExObjLst: Array<clsTabFeatureENEx> = [];
    try {
      this.recCount = await TabFeature_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortTabFeatureBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrTabFeatureExObjLst = await TabFeatureEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrTabFeatureExObjLst.length == 0) {
      const strKey = Format('{0}', clsTabFeatureEN._CurrTabName);
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_TabFeature4Func(divList, arrTabFeatureExObjLst);
      await this.ShowErrMsg(divList, arrTabFeatureExObjLst);
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public ShowErrMsg(divContainer: HTMLDivElement, arrTabFeatureEx: Array<clsTabFeatureENEx>) {
    const objLst = divContainer.getElementsByTagName('tr');

    let arrElement: Array<HTMLTableRowElement> = <Array<HTMLTableRowElement>>(
      clsPubFun4Visible.GetArray(objLst)
    );
    //let spn1;
    arrElement = arrElement.filter((x) => x.id != null);
    arrElement = arrElement.filter((x) => x.id.length > 3);
    arrElement.forEach((x) => {
      const strId = x.id.substring(2);
      const objTabFeature = arrTabFeatureEx.find((x) => x.tabFeatureId.toString() == strId);
      if (objTabFeature != null) {
        if (objTabFeature.errMsg != null && objTabFeature.errMsg.length > 0) {
          x.className = 'text-muted bg-danger';
          x.title = objTabFeature.errMsg;
        } else if (IsNullOrEmpty(objTabFeature.trClass) == false) {
          x.className = objTabFeature.trClass;
        }
      }
    });
  }

  public async btnCheckTabFeatureFld_Click() {
    const strThisFuncName = this.btnCheckTabFeatureFld_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要检查约束字段的记录!');
        return '';
      }
      for (const strTabFeatureId of arrKeyIds) {
        const returnBool = await TabFeatureEx_CheckTabFeatureFld(
          strTabFeatureId,
          clsPrivateSessionStorage.currSelPrjId,
          clsPrivateSessionStorage.userId,
        );

        if (returnBool == false) {
          alert('检查约束字段出错！');
          return;
        }
      }
      TabFeature_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
      alert('检查约束字段完成！');
      await this.BindGv_TabFeature4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '检查约束字段不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineTabFeatureCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    strWhereCond += ` and ${clsTabFeatureEN.con_PrjId} = '${clsPrivateSessionStorage.currSelPrjId}'`;
    try {
      if (qryVarSet.tabFeatureId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsTabFeatureEN.con_TabFeatureId,
          qryVarSet.tabFeatureId_q,
        );
      }
      if (qryVarSet.tabFeatureName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsTabFeatureEN.con_TabFeatureName,
          qryVarSet.tabFeatureName_q,
        );
      }
      if (qryVarSet.tabId_q != '' && qryVarSet.tabId_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsTabFeatureEN.con_TabId, qryVarSet.tabId_q);
      }
      if (qryVarSet.featureId_q != '' && qryVarSet.featureId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTabFeatureEN.con_FeatureId,
          qryVarSet.featureId_q,
        );
      }
      if (GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlbIsExtendedClass_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsExtendedClass);
      } else if (
        GetSelectSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlbIsExtendedClass_q') == 2
      ) {
        strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsExtendedClass);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineTabFeatureCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
