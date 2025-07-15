import { Ref } from 'vue';
import { FuncParaRelaCRUD } from '@/viewsBase/PrjFunction/FuncParaRelaCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsvFuncParaRelaEN } from '@/ts/L0Entity/PrjFunction/clsvFuncParaRelaEN';
import { enumFunctionPurpose } from '@/ts/L0Entity/PrjFunction/clsFunctionPurposeEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import FuncPara4Code_EditEx from '@/views/PrjFunction/FuncPara4Code_EditEx';
import { FuncPara4CodeEx_BindDdl_FuncParaId4CodeInDiv } from '@/ts/L3ForWApiEx/PrjFunction/clsFuncPara4CodeExWApi';
import { clsFuncParaRelaEN } from '@/ts/L0Entity/PrjFunction/clsFuncParaRelaEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import {
  FuncParaRela_AddNewRecordAsync,
  FuncParaRela_CheckPropertyNew,
  FuncParaRela_GetUniCondStr,
  FuncParaRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsFuncParaRelaWApi';

import { vFuncParaRela_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/PrjFunction/clsvFuncParaRela_SimWApi';
import {
  divVarSet,
  FuncId4Code_Static,
  FuncPurposeId_Static,
  qryVarSet,
  refFuncParaRela_Edit,
  viewVarSet,
} from '@/views/PrjFunction/FuncParaRelaVueShare';
import { refFuncPara4Code_Edit } from '@/views/PrjFunction/FuncPara4CodeVueShare';
import FuncParaRela_EditEx from '@/views/PrjFunction/FuncParaRela_EditEx';

/** FuncParaRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class FuncParaRelaCRUDEx extends FuncParaRelaCRUD implements IShowList {
  public static EditParaRef: Ref<any>;
  public static funcId4Code = '';
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvFuncParaRelaBy = "mId";
  /**
   * 每页记录数,在扩展类可以修改
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
    console.log(strType + strPara);
    this.BindGv_vFuncParaRela(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vFuncParaRela':
        alert('该类没有绑定该函数：[this.BindGv_vFuncParaRelaCache]!');
        //this.BindGv_vFuncParaRelaCache();
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: FuncParaRelaCRUDEx;
    if (FuncParaRelaCRUD.objPageCRUD == null) {
      FuncParaRelaCRUD.objPageCRUD = new FuncParaRelaCRUDEx();
      objPage = <FuncParaRelaCRUDEx>FuncParaRelaCRUD.objPageCRUD;
    } else {
      objPage = <FuncParaRelaCRUDEx>FuncParaRelaCRUD.objPageCRUD;
    }
    const objPageEdit = new FuncParaRela_EditEx('FuncParaRela_EditEx', objPage);
    console.log(objPageEdit);
    const objPageEdit2 = new FuncPara4Code_EditEx('FuncPara4Code_EditEx', objPage);
    console.log(objPageEdit2);
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refFuncParaRela_Edit.value.btnFuncParaRela_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Create4FuncId': //添加记录
        objPage.btnCreate4FuncId_Click();
        break;
      case 'AddNewPara':
        FuncPara4Code_EditEx.Create4FuncId = FuncParaRelaCRUDEx.Create4FuncId;
        FuncPara4Code_EditEx.strFuncId4Code = FuncParaRelaCRUDEx.funcId4Code;
        FuncPurposeId_Static.value = enumFunctionPurpose.ForFunctionGene_02;
        refFuncPara4Code_Edit.value.btnFuncPara4Code_Edit_Click(
          strCommandName,
          FuncParaRelaCRUDEx.funcId4Code,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        refFuncParaRela_Edit.value.btnFuncParaRela_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录!');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录!');
          return;
        }
        FuncId4Code_Static.value = FuncParaRelaCRUDEx.funcId4Code;
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录!');
          return;
        }
        FuncId4Code_Static.value = FuncParaRelaCRUDEx.funcId4Code;
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录!');
          return;
        }
        FuncId4Code_Static.value = FuncParaRelaCRUDEx.funcId4Code;
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录!');
          return;
        }
        FuncId4Code_Static.value = FuncParaRelaCRUDEx.funcId4Code;
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        FuncId4Code_Static.value = FuncParaRelaCRUDEx.funcId4Code;
        objPage.btnReOrder_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(FuncParaRelaCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
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
      FuncPurposeId_Static.value = enumFunctionPurpose.ForFunctionGene_02;
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();

      viewVarSet.sortvFuncParaRelaBy = `${clsFuncParaRelaEN.con_OrderNum} Asc`; // 'funcParaId4Code Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vFuncParaRela(divVarSet.refDivList);
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

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevFuncParaRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and PrjId ='{0}'", clsPrivateSessionStorage.currSelPrjId);
    try {
      if (qryVarSet.funcParaId4Code_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsvFuncParaRelaEN.con_FuncParaId4Code,
          qryVarSet.funcParaId4Code_q,
        );
      }
      if (FuncParaRelaCRUDEx.funcId4Code != '') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvFuncParaRelaEN.con_FuncId4Code,
          FuncParaRelaCRUDEx.funcId4Code,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineFuncParaRelaCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {
    // const FuncPurposeIdStatic = FuncPurposeId_Static.value; //静态变量;//静态变量
    // await this.SetDdl_FuncId4CodeInDivInFeature(FuncPurposeIdStatic); //功能区域
    FuncPara4CodeEx_BindDdl_FuncParaId4CodeInDiv(
      divVarSet.refDivFunction,
      'ddlFuncParaId',
      enumFunctionPurpose.ForFunctionGene_02,
      clsPrivateSessionStorage.currSelPrjId,
    );
  }
  /**
   * 添加新记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   **/
  public async btnCreate4FuncId_Click() {
    const strThisFuncName = this.btnCreate4FuncId_Click.name;
    try {
      const strFuncParaId = GetSelectValueInDivObj(divVarSet.refDivFunction, 'ddlFuncParaId');

      if (IsNullOrEmpty(strFuncParaId) == true) {
        alert('请选择需要添加的参数!');
        return '';
      }
      await FuncParaRelaCRUDEx.Create4FuncId(FuncParaRelaCRUDEx.funcId4Code, strFuncParaId);
      await this.BindGv_vFuncParaRela(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public static async Create4FuncId(strFuncId4Code: string, strParaId: string): Promise<boolean> {
    const strThisFuncName = this.Create4FuncId.name;
    const objFuncParaRelaEN = new clsFuncParaRelaEN();
    try {
      objFuncParaRelaEN.SetFuncParaId4Code(strParaId); // 函数参数Id
      objFuncParaRelaEN.SetFuncId4Code(strFuncId4Code); // 函数Id4Code
      objFuncParaRelaEN.SetOrderNum(10); // 序号
      objFuncParaRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改日期
      objFuncParaRelaEN.SetUpdUser(clsPrivateSessionStorage.userId); // 修改者
      objFuncParaRelaEN.SetMemo('添加现有参数'); // 说明
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      FuncParaRela_CheckPropertyNew(objFuncParaRelaEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await FuncParaRelaCRUDEx.CheckUniCond4Add(objFuncParaRelaEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await FuncParaRela_AddNewRecordAsync(objFuncParaRelaEN);
      if (returnBool == true) {
        vFuncParaRela_Sim_ReFreshThisCache();
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
  }

  /** 为添加记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
   **/
  public static async CheckUniCond4Add(objFuncParaRelaEN: clsFuncParaRelaEN): Promise<boolean> {
    const strUniquenessCondition = FuncParaRela_GetUniCondStr(objFuncParaRelaEN);
    const bolIsExistCondition = await FuncParaRela_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
        strUniquenessCondition,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
