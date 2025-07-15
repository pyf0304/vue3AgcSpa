import GCVariable_EditEx from './GCVariable_EditEx';
import {
  GCVariable_DelRecordAsync,
  GCVariable_ReFreshCache,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, confirm_del, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { GCVariableCRUD } from '@/viewsBase/GeneCode/GCVariableCRUD';

import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
import { clsGCVariableENEx } from '@/ts/L0Entity/GeneCode/clsGCVariableENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refGCVariable_Detail,
  refGCVariable_Edit,
  viewVarSet,
} from '@/views/GeneCode/GCVariableVueShare';

/** GCVariableCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class GCVariableCRUDEx extends GCVariableCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvGCVariableBy=  "varId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 20;
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
    alert('该类没有绑定该函数：[this.BindGv_vGCVariable]！');
    //this.BindGv_vGCVariable();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'GCVariable':
        this.BindGv_GCVariable4Func(divVarSet.refDivList);
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
    let objPage: GCVariableCRUDEx;
    if (GCVariableCRUD.objPageCRUD == null) {
      GCVariableCRUD.objPageCRUD = new GCVariableCRUDEx();
      objPage = <GCVariableCRUDEx>GCVariableCRUD.objPageCRUD;
    } else {
      objPage = <GCVariableCRUDEx>GCVariableCRUD.objPageCRUD;
    }
    const objPageEdit = new GCVariable_EditEx('GCVariable_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refGCVariable_Edit.value.btnGCVariable_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refGCVariable_Edit.value.btnGCVariable_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refGCVariable_Detail.value.btnGCVariable_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refGCVariable_Edit.value.btnGCVariable_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
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
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'GCVariableCRUDEx.btn_Click');

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
      // await BindDdl4QueryRegion();

      viewVarSet.sortGCVariableBy = 'varId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_GCVariable4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
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
        alert('请选择需要删除的记录！');
        return '';
      }
      if (confirm_del(arrKeyIds.length) == false) {
        return;
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_GCVariable4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrVarId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      for (const strVarId of arrVarId) {
        const returnInt = await GCVariable_DelRecordAsync(strVarId);

        if (returnInt > 0) {
          GCVariable_ReFreshCache();
          const strInfo = Format('删除记录成功,共删除{0}条记录!', returnInt);
          //显示信息框
          alert(strInfo);
        } else {
          const strInfo = Format('删除记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 显示GCVariable对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrGCVariableExObjLst:需要绑定的对象列表
   **/
  public async BindTab_GCVariable4Func(
    divContainer: HTMLDivElement,
    arrGCVariableExObjLst: Array<clsGCVariableENEx>,
  ) {
    const strThisFuncName = this.BindTab_GCVariable4Func.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
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
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsGCVariableEN.con_VarId,
        sortBy: clsGCVariableEN.con_VarId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '变量Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsGCVariableENEx.con_VarNameEx,
        sortBy: clsGCVariableENEx.con_VarNameEx,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '变量名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsGCVariableENEx.con_VarExpressionEx,
        sortBy: clsGCVariableENEx.con_VarExpressionEx,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '变量表达式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },

      {
        fldName: clsGCVariableEN.con_InitValue,
        sortBy: clsGCVariableEN.con_InitValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '初始值',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      // {
      //   fldName: clsGCVariableENEx.con_VarTypeName,
      //   sortBy: 'varTypeName',
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '变量类型名',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 6,
      //   funcName: (strKey: string, strText: string) => {
      //     strKey = strText;
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsGCVariableENEx.con_DataTypeName,
        sortBy: 'dataTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '数据类型名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsGCVariableEN.con_UpdDate,
        sortBy: clsGCVariableEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsGCVariableEN.con_UpdUser,
        sortBy: clsGCVariableEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改者',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsGCVariableEN.con_Memo,
        sortBy: clsGCVariableEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrGCVariableExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrGCVariableExObjLst,
      arrDataColumn,
      clsGCVariableEN.con_VarId,
      this,
    );
    // await BindTabByList(arrGCVariableExObjLst, this.dispAllErrMsg_q);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    viewVarSet.sortGCVariableBy = Format('{0} {1}', sortColumnKey, sortDirection);
    await this.BindGv_GCVariable4Func(divVarSet.refDivList);
  }
}
