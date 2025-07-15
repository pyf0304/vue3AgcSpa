import $ from 'jquery';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_TrueAndFalseInDivObj, BindTab, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { CtlTypeCRUD } from '@/viewsBase/PrjInterface/CtlTypeCRUD';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import {
  CtlType_GetObjLstByCtlTypeIdLstAsync,
  CtlType_ReFreshCache,
  CtlType_UpdateRecordAsync,
} from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { divVarSet, refCtlType_Edit, viewVarSet } from '@/views/PrjInterface/CtlTypeVueShare';
import CtlType_EditEx from '@/views/PrjInterface/CtlType_EditEx';

/** CtlTypeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class CtlTypeCRUDEx extends CtlTypeCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortCtlTypeBy=  "ctlTypeId";
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
    console.log('InitVarSet in ViewInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ViewInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_CtlType]！');
    //this.BindGv_CtlType();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'ctlTypeAbbr':
      case clsCtlTypeEN._CurrTabName:
        this.BindGv_CtlTypeCache(divVarSet.refDivList);
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
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: CtlTypeCRUDEx;
    if (CtlTypeCRUD.objPageCRUD == null) {
      CtlTypeCRUD.objPageCRUD = new CtlTypeCRUDEx();
      objPage = <CtlTypeCRUDEx>CtlTypeCRUD.objPageCRUD;
    } else {
      objPage = <CtlTypeCRUDEx>CtlTypeCRUD.objPageCRUD;
    }
    const objPageEdit = new CtlType_EditEx('CtlType_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refCtlType_Edit.value.btnCtlType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refCtlType_Edit.value.btnCtlType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refCtlType_Edit.value.btnCtlType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'SetIsVisible': //自定义功能:设置是否显示
        objPage.btnSetIsVisible_Click();
        break;
      case 'SetInUse': //自定义功能:不用
        objPage.btnSetInUse_Click();
        break;
      case 'SetNotInUse': //自定义功能:不用
        objPage.btnSetNotInUse_Click();
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        objPage.btnReOrder_Click();
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'CtlTypeCRUDEx.btn_Click');

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
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      viewVarSet.sortCtlTypeBy = Format('{0} Asc', clsCtlTypeEN.con_OrderNum);
      //2、显示无条件的表内容在GridView中
      await this.BindGv_CtlTypeCache(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 显示ctlTypeAbbr对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrCtlTypeAbbrObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_CtlType(
    divContainer: HTMLDivElement,
    arrCtlTypeAbbrObjLst: Array<clsCtlTypeEN>,
  ) {
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: clsCtlTypeEN.con_OrderNum,
        sortBy: clsCtlTypeEN.con_OrderNum,
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'ctlTypeId',
        sortBy: 'ctlTypeId',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '控件类型号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'ctlTypeName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '控件类型名',
        text: '',
        sortBy: 'ctlTypeName',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'ctlTypeENName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '控件类型英文名',
        text: '',
        sortBy: 'ctlTypeENName',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'ctlCnName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '控件类型中文名',
        text: '',
        sortBy: 'ctlCnName',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'ctlTypeAbbr',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '控件类型缩写',
        text: '',
        sortBy: 'ctlTypeAbbr',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: 'htmlCtrlTypeName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: 'htmlCtrlTypeName',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: () => {},
      },
      {
        fldName: 'isForApple',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: 'isForApple',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: 'inUse',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '是否在用',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: () => {},
      },
      {
        fldName: clsCtlTypeEN.con_IsVisible,
        sortBy: clsCtlTypeEN.con_IsVisible,
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '可见',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改日期',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: () => {},
      },
      {
        fldName: 'updUser',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改者',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: () => {},
      },
      {
        fldName: 'memo',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '说明',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: () => {},
      },
    ];
    await BindTab(divDataLst, arrCtlTypeAbbrObjLst, arrDataColumn, 'ctlTypeId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 设置字段值-IsVisible
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetIsVisible_Click() {
    const strThisFuncName = this.btnSetIsVisible_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      const bolIsVisible: boolean = $('#chkIsVisible_SetFldValue').prop('checked');
      //console.log('bolIsVisible=' + bolIsVisible);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetIsVisible(arrKeyIds, bolIsVisible);
      await this.BindGv_CtlTypeCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-IsVisible
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetIsVisible(arrCtlTypeId: Array<string>, bolIsVisible: boolean) {
    const strThisFuncName = this.SetIsVisible.name;
    if (arrCtlTypeId.length == 0) {
      const strMsg = '没有选择记录，不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrCtlTypeObjLst = await CtlType_GetObjLstByCtlTypeIdLstAsync(arrCtlTypeId);
      let intCount = 0;
      for (const objInFor of arrCtlTypeObjLst) {
        const objCtlTypeEN = new clsCtlTypeEN();
        ObjectAssign(objCtlTypeEN, objInFor);
        bolIsVisible = objCtlTypeEN.isVisible ? false : true;
        objCtlTypeEN.SetIsVisible(bolIsVisible);
        let returnBool = false;
        try {
          objCtlTypeEN.sfUpdFldSetStr = objCtlTypeEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await CtlType_UpdateRecordAsync(objCtlTypeEN);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          // const strInfo = Format('设置记录成功!');
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
      if (intCount > 0) {
        CtlType_ReFreshCache();
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async BindDdl4QueryRegion() {
    // const strThisFuncName = this.BindDdl4QueryRegion.name;
    // 在此处放置用户代码以初始化页面

    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlInUse_q');
    BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsVisible_q');
  }
  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public SortColumn(sortColumnKey: string, sortDirection: string): void {
    console.log(sortColumnKey, sortDirection);
  }
}
