import { Ref } from 'vue';
import { Function4CodeCRUD } from '@/viewsBase/PrjFunction/Function4CodeCRUD';

import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { TreeNode } from '@/ts/components/TreeNode';
import { FuncModule_Agc_GetObjLstCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { vPrjTab_SimEx_SortFunByTabName } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { vPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsFunction4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeEN';
import {
  Function4Code_AddNewRecordAsync,
  Function4Code_GetMaxStrIdAsync,
  Function4Code_GetObjByFuncId4CodeAsync,
  Function4Code_GetObjLstAsync,
  Function4Code_GetObjLstByFuncId4CodeLstAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsFunction4CodeWApi';
import {
  FuncAccessMode_BindDdl_FuncAccessModeIdInDivCache,
  FuncAccessMode_GetNameByFuncAccessModeIdCache,
} from '@/ts/L3ForWApi/PrjFunction/clsFuncAccessModeWApi';
import {
  Function4CodeEx_CalcFunctionSignature,
  Function4CodeEx_GetFunctionSignature,
} from '@/ts/L3ForWApiEx/PrjFunction/clsFunction4CodeExWApi';
import { CMProjectEx_GetPrjIdByCmPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
import { GetSelectValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  divVarSet,
  qryVarSet,
  refFunction4Code_Detail,
  refFunction4Code_Edit,
  viewVarSet,
} from '@/views/PrjFunction/Function4CodeVueShare';
import { vCmProjectPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/CodeMan/clsvCmProjectPrjTab_SimWApi';
import Function4Code_FuncGC_EditEx from '@/views/PrjFunction/Function4Code_FuncGC_EditEx';

class TreeNodeImpl implements TreeNode {
  id: string;
  label: string;
  type: string;
  expanded: boolean;
  children?: TreeNode[];
  parentNode: TreeNode | null;

  constructor(
    id: string,
    label: string,
    type: string,
    expanded: boolean,
    parentNode: TreeNode | null,
  ) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.expanded = expanded;
    this.parentNode = parentNode;
  }
}
/** Function4CodeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class Function4Code_FuncGCEx extends Function4CodeCRUD implements IShowList {
  public static treeRef: Ref<any>;
  public static bindTreeData: () => Promise<void>;
  public static selectNodeById: (type: string, nodeId: string) => void;
  public keyId = '';
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortFunction4CodeBy = "FuncId4Code";
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
    this.BindGv_Function4Code4Func(divVarSet.refDivList);
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'Function4Code':
        await Function4Code_FuncGCEx.bindTreeData();
        await Function4Code_FuncGCEx.selectNodeById('FunctionName', strPara);

        //        alert('该类没有绑定该函数：[this.BindGv_Function4Code4Func]!');
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
    let objPage: Function4Code_FuncGCEx;
    if (Function4CodeCRUD.objPageCRUD == null) {
      Function4CodeCRUD.objPageCRUD = new Function4Code_FuncGCEx();
      objPage = <Function4Code_FuncGCEx>Function4CodeCRUD.objPageCRUD;
    } else {
      objPage = <Function4Code_FuncGCEx>Function4CodeCRUD.objPageCRUD;
    }
    const objPageEdit = new Function4Code_FuncGC_EditEx('Function4Code_FuncGC_EditEx', objPage);
    console.log(objPageEdit);
    let strMsg = '';
    // const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    console.error('Function4Code_FuncGCEx.treeRef.value:', Function4Code_FuncGCEx.treeRef.value);
    if (Function4Code_FuncGCEx.treeRef.value == null) return;

    const childProperty = Function4Code_FuncGCEx.treeRef.value.selectedNode0;
    if (childProperty != null && childProperty.type == 'FunctionName') {
      // alert('请在左边树中选择一个需要生成的函数名！');
      // return;
      strKeyId = childProperty.id;
      console.log('strKeyId', strKeyId);
    }

    // strKeyId = GetFirstCheckedKeyIdInDivObj(Function4CodeCRUD.divList);
    const arrKeyIds = [strKeyId];
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refFunction4Code_Edit.value.btnFunction4Code_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refFunction4Code_Detail.value.btnFunction4Code_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (IsNullOrEmpty(strKeyId) == true) {
          alert('请在左边树中选择一个需要生成的函数名！');
          return;
        }
        refFunction4Code_Edit.value.btnFunction4Code_Edit_Click(strCommandName, strKeyId);
        break;

      case 'FuncAccessMode': //导出Excel
        objPage.btnSetFuncAccessModeId_ClickEx(arrKeyIds);
        //alert("导出Excel功能还没有开通!");
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录!');
          return;
        }
        objPage.btnDelRecord_ClickEx(arrKeyIds);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录!');
          return;
        }
        objPage.btnCopyRecord_ClickEx(arrKeyIds);
        break;
      case 'CalcFuncSignature': //复制记录
        objPage.btnCalcFuncSignature_Click(strKeyId);
        break;

      default:
        strMsg = `命令:${strCommandName}在函数(Function4CodeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecord_ClickEx(arrKeyIds: string[]) {
    const strThisFuncName = this.btnDelRecord_Click.name;
    try {
      if (arrKeyIds.length == 0) {
        alert('请选择需要删除的记录!');
        return '';
      }
      if (confirmDel(arrKeyIds.length) == false) {
        return;
      }
      const objFunction4Code = await Function4Code_GetObjByFuncId4CodeAsync(arrKeyIds[0]);
      if (objFunction4Code == null) return;
      const objTreeNode_Sel = new TreeNodeImpl(
        objFunction4Code.clsName,
        '',
        'ClassName',
        true,
        null,
      );
      await this.DelMultiRecord(arrKeyIds);
      await Function4Code_FuncGCEx.bindTreeData();
      await Function4Code_FuncGCEx.selectNodeById(objTreeNode_Sel.type, objTreeNode_Sel.id);
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
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // Function4Code_Edit.FuncPurposeIdCache = enumFunctionPurpose.ForFunctionGene_02;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();

      viewVarSet.sortFunction4CodeBy = 'funcId4Code Asc';

      //2、显示无条件的表内容在GridView中
      // await this.BindGv_Function4Code4Func();
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
    // const ProgLangTypeIdStatic = Function4CodeCRUD.ProgLangTypeIdStatic; //静态变量;//静态变量
    // await this.SetDdl_FuncPurposeIdInDiv(); //查询区域
    // await this.SetDdl_ApplicationTypeIdInDiv(); //查询区域
    // await this.SetDdl_FuncTypeIdInDiv(); //查询区域
    // await this.SetDdl_CodeTypeIdInDiv(ProgLangTypeIdStatic); //查询区域
    // await this.SetDdl_ReturnTypeIDInDiv(); //查询区域
  }

  public static async Bindtv_FuncModule_Agc_PrjTab_ClassName_FuncName(
    strCmPrjId: string,
  ): Promise<TreeNode[]> {
    const arrTreeNode = new Array<TreeNodeImpl>();
    const strPrjId_p = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    const arrFuncModule_AgcObjList0 = await FuncModule_Agc_GetObjLstCache(strPrjId_p);
    const arrFuncModule_AgcObjList = arrFuncModule_AgcObjList0
      .filter((x) => x.useStateId == '0001')
      .sort((x) => x.orderNum);
    const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
    let arrCMProjectPrjTabObjLst_Sel = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
    arrCMProjectPrjTabObjLst_Sel = arrCMProjectPrjTabObjLst_Sel.filter(
      (x) => x.cmPrjId == strCmPrjId,
    );
    const arrTabId_Sel = arrCMProjectPrjTabObjLst_Sel.map((x) => x.tabId);

    const arrPrjTabObjList0 = await vPrjTab_Sim_GetObjLstCache(strPrjId);
    let arrPrjTabObjList_Sel = arrPrjTabObjList0
      .filter((x) => x.tabStateId == '01' && arrTabId_Sel.indexOf(x.tabId) > -1)
      .sort(vPrjTab_SimEx_SortFunByTabName);

    const strCondition_ClassName = Format(
      " {0}='{1}' order by {2}",
      clsFunction4CodeEN.con_PrjId,
      strPrjId_p,
      clsFunction4CodeEN.con_FuncName4Code,
    );

    const arrFunction4Code = await Function4Code_GetObjLstAsync(strCondition_ClassName);
    const arrTabName = arrFunction4Code.map((x) => x.tabName);

    arrPrjTabObjList_Sel = arrPrjTabObjList_Sel.filter((x) => arrTabName.indexOf(x.tabName) > -1);
    const arrFuncModuleId = arrPrjTabObjList_Sel.map((x) => x.funcModuleAgcId);
    const arrFuncModule_Agc = arrFuncModule_AgcObjList.filter(
      (x) => arrFuncModuleId.indexOf(x.funcModuleAgcId) > -1,
    );

    // const arrFunction4Code_Class0 = arrFunction4Code.map((x) => {
    //   return { tabName: x.tabName, clsName: x.clsName };
    // });

    // const uniqueSet = new Set(arrFunction4Code_Class0.map((item) => JSON.stringify(item)));
    // const arrFunction4Code_Class1 = Array.from(uniqueSet).map((item) => JSON.parse(item));
    // const arrFunction4Code_Class = arrFunction4Code_Class1.filter((x) => x.tabName != '');
    // console.log(arrFunction4Code_Class);

    let tnPrjTab;
    let tnFuncModule_Agc;
    // let tnClassName;
    let tnFunctionName;

    for (const objFuncModule_Agc of arrFuncModule_Agc) {
      //XzFuncModule_Agc
      tnFuncModule_Agc = new TreeNodeImpl(
        objFuncModule_Agc.funcModuleAgcId,
        objFuncModule_Agc.funcModuleNameSim,
        'FuncModule_Agc',
        false,
        null,
      ); // getTreeNodeByTabObj(objFuncModule_Agc);
      // if (tnRoot.children == null) tnRoot.children = [];
      arrTreeNode.push(tnFuncModule_Agc);

      for (const objPrjTab of arrPrjTabObjList_Sel) {
        //PrjTab
        if (objPrjTab.funcModuleAgcId != objFuncModule_Agc.funcModuleAgcId) continue;
        tnPrjTab = new TreeNodeImpl(
          objPrjTab.tabId,
          objPrjTab.tabName,
          'PrjTab',
          false,
          tnFuncModule_Agc,
        ); //getTreeNodeByTabObj(objPrjTab);
        if (tnFuncModule_Agc.children == null) tnFuncModule_Agc.children = [];
        tnFuncModule_Agc.children.push(tnPrjTab);
        // const arrFunction4Code_Class_Sel = arrFunction4Code_Class.filter(
        //   (x) => x.tabName == objPrjTab.tabName,
        // );
        // if (arrFunction4Code_Class_Sel.length == 0) continue;
        // for (const objClassName of arrFunction4Code_Class_Sel) {
        //PrjTab
        //if (objPrjTab.FuncModuleAgcId != objFuncModule_Agc.FuncModuleAgcId) continue;
        // tnClassName = new TreeNodeImpl('', '', 'ClassName', false, tnPrjTab);
        // tnClassName.id = objClassName.clsName;
        // tnClassName.label = objClassName.clsName;
        if (tnPrjTab.children == null) tnPrjTab.children = [];
        // tnPrjTab.children.push(tnClassName);

        const arrFunction4Code_Sel = arrFunction4Code.filter((x) => x.tabName == objPrjTab.tabName);
        if (arrFunction4Code_Sel.length == 0) continue;
        for (const objFunction4Code of arrFunction4Code_Sel) {
          //PrjTab
          //if (objPrjTab.FuncModuleAgcId != objFuncModule_Agc.FuncModuleAgcId) continue;
          tnFunctionName = new TreeNodeImpl('', '', 'FunctionName', false, tnPrjTab);
          let strFuncAccessModeName = '';
          if (IsNullOrEmpty(objFunction4Code.funcAccessModeId) == false) {
            strFuncAccessModeName = await FuncAccessMode_GetNameByFuncAccessModeIdCache(
              objFunction4Code.funcAccessModeId,
            );
          }
          const strFunctionSignature = await Function4CodeEx_GetFunctionSignature(objFunction4Code);
          let strHtml = Format('({0}){1}', strFuncAccessModeName, strFunctionSignature);
          if (strFunctionSignature.length > 60) {
            const intPos = strFunctionSignature.indexOf('(');

            const strFirstLine = strFunctionSignature.substring(0, intPos);
            const strSecondLine = strFunctionSignature.substring(intPos);
            strHtml = Format(
              '({2}){0}<br/>{1}',
              strFirstLine,
              strSecondLine,
              strFuncAccessModeName,
            );
          }
          tnFunctionName.id = objFunction4Code.funcId4Code;
          tnFunctionName.label = strHtml;
          // if (tnClassName.children == null) tnClassName.children = [];
          tnPrjTab.children.push(tnFunctionName);
        }
        // }
      }
      if (tnFuncModule_Agc.children.length == 0) {
        // tnRoot.children.remove(tnFuncModule_Agc);
        // tnRoot.children = tnRoot.children.filter((node) => node !== tnFuncModule_Agc);
      }
    }

    if (arrTreeNode.length > 0) {
      arrTreeNode[0].expanded = true;
    }

    // console.error('arrTreeNode:', arrTreeNode);
    return arrTreeNode;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineFunction4CodeCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (qryVarSet.funcId4Code_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunction4CodeEN.con_FuncId4Code,
          qryVarSet.funcId4Code_q,
        );
      }

      if (qryVarSet.funcName4Code_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunction4CodeEN.con_FuncName4Code,
          qryVarSet.funcName4Code_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineFunction4CodeCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrFuncId4Code: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrFunction4CodeObjLst = await Function4Code_GetObjLstByFuncId4CodeLstAsync(
        arrFuncId4Code,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrFunction4CodeObjLst) {
        const strMaxStrId = await Function4Code_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.funcId4Code = strMaxStrId;
        objInFor.funcName4Code = `C_${objInFor.funcName4Code}`;
        const returnBool = await Function4Code_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          this.keyId = strMaxStrId;

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
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /**
   * 添加新记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   **/
  public async btnCopyRecord_ClickEx(arrKeyIds: string[]) {
    const strThisFuncName = this.btnCopyRecord_ClickEx.name;
    try {
      // const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录!');
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await Function4Code_FuncGCEx.bindTreeData();
      await Function4Code_FuncGCEx.selectNodeById('FunctionName', this.keyId);
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
  public async btnCalcFuncSignature_Click(strKeyId: string) {
    const strThisFuncName = this.btnCalcFuncSignature_Click.name;
    try {
      // const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (strKeyId == '') {
        alert('请选择需要计算签名的记录!');
        return '';
      }
      await Function4CodeEx_CalcFunctionSignature(strKeyId);
      await Function4Code_FuncGCEx.bindTreeData();
      await Function4Code_FuncGCEx.selectNodeById('FunctionName', this.keyId);
    } catch (e) {
      const strMsg = Format(
        '计算签名不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
    return true;
  }
  public async BindDdl4FeatureRegion() {
    await FuncAccessMode_BindDdl_FuncAccessModeIdInDivCache(
      divVarSet.refDivFunction,
      'ddlFuncAccessModeId_SetFldValue',
    );
  }
  /** 设置字段值-FuncAccessModeId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetFuncAccessModeId_ClickEx(arrKeyIds: string[]) {
    const strThisFuncName = this.btnSetFuncAccessModeId_Click.name;
    try {
      // const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置操作模式的记录!');
        return '';
      }
      const strFuncAccessModeId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlFuncAccessModeId_SetFldValue',
      );
      if (strFuncAccessModeId == '') {
        const strMsg = '请输入函数操作模式Id(FuncAccessModeId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strFuncAccessModeId=' + strFuncAccessModeId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetFuncAccessModeId(arrKeyIds, strFuncAccessModeId);
      await Function4Code_FuncGCEx.bindTreeData();
      await Function4Code_FuncGCEx.selectNodeById('FunctionName', arrKeyIds[0]);
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
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'funcTypeName|Ex':
        viewVarSet.sortFunction4CodeBy = `FunctionType|funcTypeName ${sortDirection}|Function4Code.FuncTypeId = FunctionType.FuncTypeId`;
        break;
      case 'funcPurposeName|Ex':
        viewVarSet.sortFunction4CodeBy = `FunctionPurpose|funcPurposeName ${sortDirection}|Function4Code.FuncPurposeId = FunctionPurpose.FuncPurposeId`;
        break;
      case 'func4GCCount|Ex':
        viewVarSet.sortFunction4CodeBy = `vFunction4Code_Func4GcCount|func4GCCount ${sortDirection}|Function4Code.FuncId4Code = vFunction4Code_Func4GcCount.FuncId4Code`;
        break;
      case 'featureCount|Ex':
        viewVarSet.sortFunction4CodeBy = `vFeatureFuncRela_FeatureCountByCode|featureCount ${sortDirection}|Function4Code.FuncId4Code = vFeatureFuncRela_FeatureCountByCode.FuncId4Code`;
        break;
      case 'applicationTypeSimName|Ex':
        viewVarSet.sortFunction4CodeBy = `ApplicationType|applicationTypeSimName ${sortDirection}|Function4Code.ApplicationTypeId = ApplicationType.ApplicationTypeId`;
        break;
      case 'paraNum|Ex':
        viewVarSet.sortFunction4CodeBy = `vFuncParaRela_ParaNum|paraNum ${sortDirection}|Function4Code.FuncId4Code = vFuncParaRela_ParaNum.FuncId4Code`;
        break;
      default:
        viewVarSet.sortFunction4CodeBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_Function4Code4Func(this.listPara.listDiv);
  }
}
