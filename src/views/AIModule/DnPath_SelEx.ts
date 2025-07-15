import { Ref } from 'vue';
import { DnPathCRUD } from '@/viewsBase/AIModule/DnPathCRUD';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsDnPathEN } from '@/ts/L0Entity/AIModule/clsDnPathEN';
import { clsDnPathENEx } from '@/ts/L0Entity/AIModule/clsDnPathENEx';

import {
  DnPath_GetObjLstByPagerAsync,
  DnPath_GetRecCountByCondAsync,
  DnPath_SortFunDefa,
} from '@/ts/L3ForWApi/AIModule/clsDnPathWApi';

import { vDnPath_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDnPath_SimWApi';
import { DataNodeEx_GetConnectedNode } from '@/ts/L3ForWApiEx/AIModule/clsDataNodeExWApi';
import {
  DnPathEx_CreateGraph4DnPath1,
  DnPathEx_CreateGraph4InOutDataNode,
  DnPathEx_FuncMapByFldName,
  DnPathEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  GetSelectedIndexInDivObj,
  HideDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, GetSortBy, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsPager } from '@/ts/PubFun/clsPager';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';

import { divVarSet, viewVarSet, inDataNodeId_q } from '@/views/AIModule/DnPathVueShare';
/** DnPath_SelEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class DnPath_SelEx {
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  public static EditRef: Ref<any>;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  public static times4TestShowDialog = 0;
  public opType = '';
  public static objPageEdit: DnPath_SelEx;
  public static objPageEdit2: DnPath_SelEx;
  public static objPageEdit3: DnPath_SelEx;

  public static divPager: HTMLDivElement; //列表中的分页区的层对象

  public static divSelect: HTMLDivElement; //界面布局的层对象
  //专门用于数据列表的界面变量，用于分页功能等
  public static get con_SetFldDnPathInTab(): string {
    return 'SetFldDnPathInTab';
  } //说明
  public static get con_ClearFldDnPathInTab(): string {
    return 'ClearFldDnPathInTab';
  } //说明
  public static get con_TestDnPath(): string {
    return 'TestDnPath';
  } //说明

  //public currPageIndex = 0;
  protected iShowList: IShowList;
  public static objPage_Select: DnPath_SelEx;
  public TabIdStatic = '';
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsInitShow = false; //记录是否导入分页区的变量
  public bolIsTableSm = true; //是否窄行的小表，即表中加样式： table-sm
  //public mstrListDiv = "divDataLst";//列表区数据列表层id
  public objPager: clsPager;

  public divName4Query = 'divQuery'; //查询区的层Id
  public divName4Function = 'divFunction'; //功能区的层Id
  public divName4Layout = 'divLayout'; //界面布局的层Id
  public divName4Select = 'divSelect'; //界面布局的层Id

  public divName4List = 'divDataLst';
  //public static mstrSortDnPathBy = "DnPathId";
  public static CmPrjIdCache = '';

  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    return divVarSet.refDivList;
  }

  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 50;
  }

  public recCount = 0;
  // constructor(objShowList: IShowList) {
  //   this.iShowList = objShowList;
  //   DnPath_SelEx.objPage_Select = this;
  //   this.objPager = new clsPager(this);
  // }

  constructor(strClassName: string, objShowList: IShowList) {
    this._className = strClassName;
    this.iShowList = objShowList;
    this.objPager = new clsPager(this);
    if (DnPath_SelEx.SetPageEdit(this, 1) == true) return;
    if (DnPath_SelEx.SetPageEdit(this, 2) == true) return;
    if (DnPath_SelEx.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (DnPath_SelEx.objPageEdit == null) {
          DnPath_SelEx.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = DnPath_SelEx.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            DnPath_SelEx.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (DnPath_SelEx.objPageEdit2 == null) {
          DnPath_SelEx.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = DnPath_SelEx.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            DnPath_SelEx.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (DnPath_SelEx.objPageEdit3 == null) {
          DnPath_SelEx.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = DnPath_SelEx.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            DnPath_SelEx.objPageEdit3 = objDataLst;
            return true;
          } else return false;
        }
        break;
      default:
        return false;
      // break;
    }
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static async btnSel_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);

    const objPage = DnPath_SelEx.GetPageEditObj('DnPath_SelEx'); //.objPage_Select;
    // const arrKeyIds = GetCheckedKeyIdsInDivObj(DnPath_SelEx.divName4List);
    switch (strCommandName) {
      case 'SelectRec': //查询记录
        objPage.btnSelectRec_Click();
        break;

      case 'ClearPath': //查询记录
        objPage.btnClearPath_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DnPath_SelEx.btn_Click');

        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      DnPath_SelEx.CmPrjIdCache = clsPrivateSessionStorage.cmPrjId;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      viewVarSet.sortDnPathBy = 'dnPathId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_DnPath(divVarSet.refDivList);
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
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // const strThisFuncName = this.BindDdl4QueryRegion.name;
    // 在此处放置用户代码以初始化页面
    // const strCmPrjId = DnPath_SelEx.CmPrjIdCache; //定义条件字段
  }
  /**
   * 隐藏对话框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_TS_HideDialog)
   **/
  // public HideDialog_DnPath() {
  //   // const strThisFuncName = this.HideDialog_DnPath.name;
  //   CheckControlExistInDivObj(DnPath_SelEx.divSelect, 'div', 'divSelectDialog_DnPath');
  //   HideDialog('#divSelectDialog_DnPath');
  // }

  public async btnClearPath_Click() {
    try {
      //const strKeyId = GetFirstCheckedKeyIdInDivObj(this.divName4List);
      //if (IsNullOrEmpty(strKeyId) == true) {
      //    const strMsg = `请选择一条记录.`;

      //    alert(strMsg);
      //    return;
      //}
      this.iShowList.BindGvCache(DnPath_SelEx.con_ClearFldDnPathInTab, '');
      // this.HideDialog_DnPath();
    } catch (e: any) {
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `自动生成路径不成功. ${e}.`;

      alert(strMsg);
    }
  }

  public async btnSelectRec_Click() {
    try {
      const strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
      if (IsNullOrEmpty(strKeyId) == true) {
        const strMsg = `请选择一条记录.`;

        alert(strMsg);
        return;
      }
      this.iShowList.BindGvCache(DnPath_SelEx.con_SetFldDnPathInTab, strKeyId);
      this.HideDialog_DnPath_SelEx();
    } catch (e: any) {
      vDnPath_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `自动生成路径不成功. ${e}.`;

      alert(strMsg);
    }
  }

  /** 显示DnPath对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrDnPathObjLst:需要绑定的对象列表
   **/
  public async BindTab_DnPath(
    divContainer: HTMLDivElement,
    arrDnPathExObjLst: Array<clsDnPathENEx>,
  ) {
    const strThisFuncName = this.BindTab_DnPath.name;
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
        fldName: clsDnPathENEx.con_InDataNodeName,
        sortBy: clsDnPathENEx.con_InDataNodeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'IN数据结点',
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
        fldName: clsDnPathENEx.con_OutDataNodeName,
        sortBy: clsDnPathENEx.con_OutDataNodeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Out数据结点',
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
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'DN路径图',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: async (strKey: string, strText: string) => {
          const divPath = await DnPathEx_CreateGraph4DnPath1(strKey);
          strKey = strText;
          return divPath;
        },
      },
      {
        fldName: 'isHasErr',
        sortBy: 'isHasErr',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '有错?',
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
        fldName: 'inUse',
        sortBy: 'inUse',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '在用?',
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
        fldName: 'updUser',
        sortBy: 'updUser',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改者',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrDnPathExObjLst, arrDataColumn);
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
    await BindTab(divDataLst, arrDnPathExObjLst, arrDataColumn, 'dnPathId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 显示DnPath对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrDnPathObjLst:需要绑定的对象列表
   **/
  public async BindTab_DnPathByInDataNode(
    divContainer: HTMLDivElement,
    arrDnPathObjLst: Array<clsDnPathEN>,
  ) {
    // const strThisFuncName = this.BindTab_DnPath.name;
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
        fldName: 'dnPathId',
        sortBy: 'dnPathId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'DN路径Id',
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
        fldName: 'dnPathName',
        sortBy: 'dnPathName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: 'DN路径名',
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
        fldName: 'isExistPath',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '存在?',
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
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: 'DN路径Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: async (strKey: string, strText: string) => {
          if (strKey.indexOf('temp') == -1) {
            const divPath = await DnPathEx_CreateGraph4DnPath1(strKey);
            strKey = strText;
            return divPath;
          } else {
            const objDnPath = arrDnPathObjLst.find((x) => x.dnPathId == strKey);
            if (objDnPath != null) {
              const divPath = await DnPathEx_CreateGraph4InOutDataNode(
                strKey,
                objDnPath.inDataNodeId,
                objDnPath.outDataNodeId,
                clsPrivateSessionStorage.cmPrjId,
              );
              strKey = strText;
              return divPath;
            } else {
              const divPath = document.createElement('div');
              return divPath;
            }
          }
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
        fldName: 'updUser',
        sortBy: 'updUser',
        sortFun: clsPubVar4Web.SortFun,
        colHeader: '修改者',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    await BindTab(divDataLst, arrDnPathObjLst, arrDataColumn, 'dnPathId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
   **/
  public async BindGv_DnPathByInDataNode1() {
    const strThisFuncName = this.BindGv_DnPathByInDataNode1.name;
    const vDataNode_SimStore = usevDataNode_SimStore();
    if (viewVarSet.sortDnPathBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortDnPathBy)为空，请检查！(In BindGv_DnPathByInDataNodeCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (IsNullOrEmpty(this.inDataNodeId_q) == true) {
      const strMsg = Format(
        '在查询并建立路径过程中，In数据结点为空，请检查！(In BindGv_DnPathByInDataNodeCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = this.CombineDnPathCondition();
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrDnPathObjLst: Array<clsDnPathEN> = [];

    try {
      this.recCount = await DnPath_GetRecCountByCondAsync(strWhereCond);

      if (this.recCount > 0) {
        const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
        if (intCurrPageIndex == 0) {
          if (intPageCount > 1) intCurrPageIndex = intPageCount;
          else intCurrPageIndex = 1;
          this.SetCurrPageIndex(intCurrPageIndex);
        } else if (intCurrPageIndex > intPageCount) {
          intCurrPageIndex = intPageCount;
          this.SetCurrPageIndex(intCurrPageIndex);
        }
        const objPagerPara: stuPagerPara = {
          pageIndex: intCurrPageIndex,
          pageSize: this.pageSize,
          whereCond: strWhereCond,
          orderBy: viewVarSet.sortDnPathBy, //如果该字段为空，就使用下面的排序函数
          sortFun: DnPath_SortFunDefa,
        };
        arrDnPathObjLst = await DnPath_GetObjLstByPagerAsync(objPagerPara);
      } else {
        arrDnPathObjLst = new Array<clsDnPathEN>();
      }
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

    try {
      for (const objDnPath of arrDnPathObjLst) {
        objDnPath.isExistPath = true;
      }
      const arrConnectedNode = await DataNodeEx_GetConnectedNode(
        inDataNodeId_q.value,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const objInDataNode = await vDataNode_SimStore.getObj(inDataNodeId_q.value);
      if (objInDataNode != null) {
        let intIndex = 1;
        for (const objOutDataNode of arrConnectedNode) {
          if (
            arrDnPathObjLst.filter((x) => x.outDataNodeId == objOutDataNode.dataNodeId).length > 0
          )
            continue;
          if (objOutDataNode.dataNodeId == inDataNodeId_q.value) continue;
          const objDnPath = new clsDnPathEN();
          objDnPath.dnPathId = Format('temp{0}', intIndex++);
          objDnPath.inDataNodeId = inDataNodeId_q.value;
          objDnPath.outDataNodeId = objOutDataNode.dataNodeId;
          objDnPath.dnPathName = Format(
            '{0}-{1}',
            objInDataNode.dataNodeName,
            objOutDataNode.dataNodeName,
          );
          objDnPath.isExistPath = false;
          arrDnPathObjLst.push(objDnPath);
        }
      }
    } catch (e) {
      const strMsg = Format(
        '获取与In数据结点相关结点列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      await this.BindTab_DnPathByInDataNode(divVarSet.refDivList, arrDnPathObjLst);
      //console.log("完成BindGv_DnPathCache!");
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
  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    // const strThisFuncName = this.SortBy.name;
    // console.log('1objAnchorElement(In SetAllCkechedKeysV2):', objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      viewVarSet.ascOrDesc4SortFun,
      viewVarSet.sortDnPathBy,
      strSortExpress,
    );
    viewVarSet.sortDnPathBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    DnPathCRUD.sortFunStatic = sortFun;
    await this.BindGv_DnPath(divVarSet.refDivList);
  }
  /** 函数功能:预留函数，在某一个层(div)里绑定数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
   **/
  public async BindInDiv(divName4Bind: HTMLDivElement) {
    console.log(divName4Bind);
  }

  /** 函数功能:在数据列表中跳转到前一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
   **/
  public async PrevPage() {
    // const strThisFuncName = this.PrevPage.name;
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) - 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 函数功能:在数据 列表中跳转到某一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   * @param intPageIndex:页序号
   **/
  public async IndexPage(intPageIndex: number) {
    // const strThisFuncName = this.IndexPage.name;
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    //console.log("跳转到" + intPageIndex + "页");
    this.SetCurrPageIndex(intPageIndex);
    await this.BindGv_DnPath(divVarSet.refDivList);
  }

  /** 函数功能:在数据列表中跳转到下一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
   **/
  public async NextPage() {
    // const strThisFuncName = this.NextPage.name;
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) + 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 函数功能:设置当前页序号
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
   * @param value:页序号
   * @param strDivName4Pager:当前分页所在的层(div)
   **/
  public SetCurrPageIndex(value: number) {
    this.objPager.currPageIndex = value;
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   **/
  public async BindGv_DnPath(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_DnPath.name;
    if (viewVarSet.sortDnPathBy == null) {
      const strMsg = Format('在显示列表时，排序字段(sortDnPathBy)为空，请检查！(In BindGv_DnPath)');
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = this.CombineDnPathCondition();
    // console.error('strWhereCond', strWhereCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrDnPathExObjLst: Array<clsDnPathENEx> = [];
    try {
      this.recCount = await DnPath_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0！', strWhereCond);
        const divDataLst: HTMLDivElement = divVarSet.refDivList;
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format('在绑定Gv过程中，根据条件:[{0}]获取的对象列表数为0！', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
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
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortDnPathBy, //如果该字段为空，就使用下面的排序函数
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrDnPathExObjLst = await DnPathEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
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
    if (arrDnPathExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0！';
      const divDataLst: HTMLDivElement = divVarSet.refDivList;
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strMsg = Format('根据条件获取的记录数为0！');
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_DnPath(divList, arrDnPathExObjLst);
      //console.log("完成BindGv_DnPath!");
    } catch (e) {
      //console.trace();
      const strMsg = Format(
        '绑定对象列表不成功,{0}.(in {1}.{2})',
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
  public CombineDnPathCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    if (divVarSet.refDivQuery == null) {
      console.error('divVarSet.refDivQuery为空，请检查！');
      divVarSet.refDivQuery = GetDivObjInDivObj(divVarSet.refDivLayout, 'divQuery');
    }

    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and PrjId ='{0}'", clsPrivateSessionStorage.currSelPrjId);
    // strWhereCond += Format(
    //   " and DnPathId in (Select DnPathId From D1nPathCmPrjIdRela Where CmPrjId ='{0}')",
    //   clsPrivateSessionStorage.cmPrjId,
    // );
    if (this.opType == DnPath_SelEx.con_SetFldDnPathInTab) {
      strWhereCond += Format(
        " and InDataNodeId in (select DataNodeid from DataNode where TabId = '{0}')",
        this.TabIdStatic,
      );
    }
    try {
      if (
        divVarSet.refDivQuery != null &&
        GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 1
      ) {
        strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_IsHasErr);
      } else if (GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_IsHasErr);
      }
      if (
        divVarSet.refDivQuery != null &&
        GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlInUse_q') == 1
      ) {
        strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_InUse);
      } else if (
        divVarSet.refDivQuery != null &&
        GetSelectedIndexInDivObj(divVarSet.refDivQuery, 'ddlInUse_q') == 2
      ) {
        strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_InUse);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合查询条件(CombineDnPathCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  /**
   * In数据结点Id (Used In CombineCondition())
   **/
  public get inDataNodeId_q(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivQuery, 'ddlInDataNodeId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * In数据结点Id (Used In CombineCondition())
   **/
  public set inDataNodeId_q(value: string) {
    SetSelectValueByIdInDivObj(divVarSet.refDivQuery, 'ddlInDataNodeId_q', value);
  }

  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnSelectDnPath_Click(strTabId: string) {
    const strThisFuncName = this.btnSelectDnPath_Click.name;
    this.TabIdStatic = strTabId;

    const bolIsSuccess = await this.ShowDialog_DnPath_SelEx(this.opType);
    if (bolIsSuccess == false) return;
    try {
      //
      // await this.AddDPV_Edit(this.divName4Select);
      this.opType = DnPath_SelEx.con_SetFldDnPathInTab;
      // 为编辑区绑定下拉框
      await this.BindDdl4QueryRegion();

      if (divVarSet.refDivList == null) {
        divVarSet.refDivList = GetDivObjInDivObj(divVarSet.refDivLayout, 'divList');
      }
      await this.BindGv_DnPath(divVarSet.refDivList);
      // this.ShowDialog_DnPath(DnPath_SelEx.con_SetFldDnPathInTab);

      if (this.opType == DnPath_SelEx.con_SetFldDnPathInTab) {
        HideDivObj(divVarSet.refDivQuery);
      }
    } catch (e) {
      const strMsg = Format(
        '选择本表路径时，初始化不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnTestDnPath_Click(strTabId: string, objPrjTabFld: clsPrjTabFldEN) {
    console.log(objPrjTabFld);
    const strThisFuncName = this.btnSelectDnPath_Click.name;
    this.TabIdStatic = strTabId;
    const bolIsSuccess = await this.ShowDialog_DnPath_SelEx(this.opType);
    if (bolIsSuccess == false) return;
    try {
      //
      // await this.AddDPV_Edit(this.divName4Select);
      this.opType = DnPath_SelEx.con_SetFldDnPathInTab;
      // 为编辑区绑定下拉框
      await this.BindDdl4QueryRegion();

      await this.BindGv_DnPath(divVarSet.refDivList);
      // this.ShowDialog_DnPath(DnPath_SelEx.con_SetFldDnPathInTab);

      if (this.opType == DnPath_SelEx.con_SetFldDnPathInTab) {
        HideDivObj(divVarSet.refDivQuery);
      }
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_TS_ShowDialog)
   **/
  // public ShowDialog_DnPath(strOp: string) {
  //   // const strThisFuncName = this.ShowDialog_DnPath.name;
  //   //检查相关控件是否存在
  //   CheckControlExistInDivObj(DnPath_SelEx.divSelect, 'div', 'divSelectDialog_DnPath');
  //   CheckControlExistInDivObj(DnPath_SelEx.divSelect, 'h4', 'lblSelectTitle_DnPath');
  //   if (strOp === DnPath_SelEx.con_SetFldDnPathInTab) {
  //     $('#lblSelectTitle_DnPath').html('选择记录');
  //     //FieldTab_EditEx.GetMaxStrId('#txtFldId');
  //   }
  //   ShowDialog('#divSelectDialog_DnPath');
  // }
  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrDnPathExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrDnPathExObjLst: Array<clsDnPathENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsDnPathEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrDnPathExObjLst) {
        await DnPathEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }
  public static btn_Click(strCommandName: string, strKeyId: string) {
    // const strThisFuncName = this.btnEdit_Click.name;
    const objPage = DnPath_SelEx.GetPageEditObj('DnPath_SelEx');

    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        // objPage.btnUpdateRecord_Click(strKeyId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DnPath_SelExEx.btn_Click');

        break;
    }
  }
  public static GetPageEditObj(strClassName: string): any {
    if (DnPath_SelEx.objPageEdit != null) {
      const strClassNameOld = DnPath_SelEx.objPageEdit.className;
      if (strClassNameOld == strClassName) return DnPath_SelEx.objPageEdit;
    }
    if (DnPath_SelEx.objPageEdit2 != null) {
      const strClassNameOld = DnPath_SelEx.objPageEdit2.className;
      if (strClassNameOld == strClassName) return DnPath_SelEx.objPageEdit2;
    }
    if (DnPath_SelEx.objPageEdit3 != null) {
      const strClassNameOld = DnPath_SelEx.objPageEdit3.className;
      if (strClassNameOld == strClassName) return DnPath_SelEx.objPageEdit3;
    }
    return null;
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_DnPath(divVarSet.refDivList);
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_DnPath_SelEx(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_DnPath_SelEx.name;
    if (DnPath_SelEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (DnPath_SelEx.EditRef == null) {
        const strMsg = Format(
          '当前编辑区的EditRef为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await DnPath_SelEx.EditRef.value.showDialog();
    }
    divVarSet.refDivLayout = DnPath_SelEx.EditRef.value.$refs.refDivLayout;
    if (divVarSet.refDivLayout == null) {
      if (DnPath_SelEx.times4TestShowDialog < 2) {
        DnPath_SelEx.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_DnPath_SelEx(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      DnPath_SelEx.times4TestShowDialog = 0;
    }
    // if (strOp === 'Add' || strOp === 'AddWithMaxId') {
    //   this.btnSubmitDnPath_SelEx = '确认添加';
    //   this.btnCancelDnPath_SelEx = '取消添加';
    // } else if (strOp === 'Update') {
    //   this.btnSubmitDnPath_SelEx = '确认修改';
    //   this.btnCancelDnPath_SelEx = '取消修改';
    // }
    return true;
  }
  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_DnPath_SelEx() {
    if (DnPath_SelEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      DnPath_SelEx.EditRef.value.hideDialog();
    }
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
