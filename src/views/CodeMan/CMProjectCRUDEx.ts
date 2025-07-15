import CMProject_EditEx from './CMProject_EditEx';
import { CMProjectCRUD } from '@/viewsBase/CodeMan/CMProjectCRUD';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { clsCMProjectENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectENEx';
import { CMProjectEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refCMProject_Detail,
  refCMProject_Edit,
  viewVarSet,
} from '@/views/CodeMan/CMProjectVueShare';
import { refCMProjectAppRela_Edit } from '@/views/CodeMan/CMProjectAppRelaVueShare';
import { CMProjectAppRela_EditLstEx } from '@/views/CodeMan/CMProjectAppRela_EditLstEx';

/*import { CMProjectAppRela_EditLstEx } from "./CMProjectAppRela_EditLstEx.js";*/

/** CMProjectCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class CMProjectCRUDEx extends CMProjectCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortCMProjectBy = "cmPrjId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
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
    alert(`该类没有绑定该函数：[this.BindGv_CMProject]！${strType}${strPara}`);
    //this.BindGv_CMProject();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'CMProject':
        // case clsCMProjectAppRelaEN._CurrTabName:
        this.BindGv_CMProject4Func(divVarSet.refDivList);
        break;
      case 'CMProjectAppRela':
        this.BindGv_CMProject4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: CMProjectCRUDEx;
    if (CMProjectCRUD.objPageCRUD == null) {
      CMProjectCRUD.objPageCRUD = new CMProjectCRUDEx();
      objPage = <CMProjectCRUDEx>CMProjectCRUD.objPageCRUD;
    } else {
      objPage = <CMProjectCRUDEx>CMProjectCRUD.objPageCRUD;
    }
    const objPageEdit = new CMProject_EditEx('CMProject_EditEx', objPage);
    console.log(objPageEdit);
    let objCMProjectAppRela_EditLstEx;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetApplicationTypeId': //自定义功能:设置应用程序类型ID
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refCMProject_Edit.value.btnCMProject_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refCMProject_Edit.value.btnCMProject_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refCMProject_Detail.value.btnCMProject_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refCMProject_Edit.value.btnCMProject_Edit_Click(strCommandName, strKeyId);
        break;
      case 'EditAppLst': //添加记录使用最大关键字
        // CmPrjId_Local.value = strKeyId;
        objCMProjectAppRela_EditLstEx = new CMProjectAppRela_EditLstEx(
          'CMProjectAppRela_EditLstEx',
          objPage,
        ); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objCMProjectAppRela_EditLstEx);
        refCMProjectAppRela_Edit.value.btnCMProjectAppRela_Edit_Click(strCommandName, strKeyId);
        break;
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
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
      default:
        AccessBtnClickDefault(strCommandName, 'CMProjectCRUDEx.btn_Click');

        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      viewVarSet.sortCMProjectBy = 'cmPrjId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_CMProject4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 显示CMProject对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrCMProjectExObjLst:需要绑定的对象列表
   **/
  public async BindTab_CMProject4Func(
    divContainer: HTMLDivElement,
    arrCMProjectExObjLst: Array<clsCMProjectENEx>,
  ) {
    const strThisFuncName = this.BindTab_CMProject4Func.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
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
        fldName: 'cmPrjId',
        sortBy: 'cmPrjId',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: 'CM工程Id',
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
        fldName: 'cmPrjName',
        sortBy: 'cmPrjName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: 'CM工程名',
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
        fldName: 'prjName',
        sortBy: 'prjName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '工程名称',
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
        fldName: 'applicationTypeNameLst',
        sortBy: 'applicationTypeNameLst',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '应用类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsCMProjectENEx.con_FunctionTemplateName,
        sortBy: clsCMProjectENEx.con_FunctionTemplateName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数模板名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsCMProjectENEx.con_VueDesignSysName,
        sortBy: clsCMProjectENEx.con_VueDesignSysName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '控件设计系统',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'isFstLcase',
        sortBy: 'isFstLcase',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '首字母小写?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'projectFileName',
        sortBy: 'projectFileName',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '工程文件名',
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
        fldName: 'isRefresh4RelaView',
        sortBy: 'isRefresh4RelaView',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '是否刷新相关视图',
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
        fldName: 'updDate',
        sortBy: 'updDate',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: 'memo',
        sortBy: 'memo',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrCMProjectExObjLst, arrDataColumn);
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
    await BindTab(divDataLst, arrCMProjectExObjLst, arrDataColumn, 'cmPrjId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrCMProjectExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrCMProjectExObjLst: Array<clsCMProjectENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsCMProjectEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrCMProjectExObjLst) {
        await CMProjectEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    viewVarSet.sortCMProjectBy = Format('{0} {1}', sortColumnKey, sortDirection);
    await this.BindGv_CMProject4Func(divVarSet.refDivList);
  }
}
