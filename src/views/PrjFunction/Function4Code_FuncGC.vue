<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 1200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label
                id="lblFuncId4Code_q"
                name="lblFuncId4Code_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数Id4Code
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFuncId4Code_q"
                v-model="funcId4Code_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFuncPurposeId_q"
                name="lblFuncPurposeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用途
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncPurposeId_q"
                v-model="funcPurposeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrFunctionPurpose"
                  :key="index"
                  :value="item.funcPurposeId"
                >
                  {{ item.funcPurposeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblApplicationTypeId_q"
                name="lblApplicationTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >应用
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlApplicationTypeId_q"
                v-model="applicationTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrApplicationType"
                  :key="index"
                  :value="item.applicationTypeId"
                >
                  {{ item.applicationTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblFuncTypeId_q"
                name="lblFuncTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncTypeId_q"
                v-model="funcTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrFunctionType"
                  :key="index"
                  :value="item.funcTypeId"
                >
                  {{ item.funcTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblCodeTypeId_q"
                name="lblCodeTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >代码类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCodeTypeId_q"
                v-model="codeTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrCodeType" :key="index" :value="item.codeTypeId">
                  {{ item.codeTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblReturnTypeId_q"
                name="lblReturnTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >返回类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlReturnTypeId_q"
                v-model="returnTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrDataTypeAbbr"
                  :key="index"
                  :value="item.dataTypeId"
                >
                  {{ item.dataTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblFuncName4Code_q"
                name="lblFuncName4Code_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数名4Code
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFuncName4Code_q"
                v-model="funcName4Code_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-left">
              <button
                id="btnQuery"
                name="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnQuery_Click"
                >查询</button
              >
            </td>
            <td class="text-left">
              <button
                id="btnExportExcel"
                name="btnExportExcel"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnExportExcel_Click"
                >导出Excel</button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblFunction4CodeList"
            name="lblFunction4CodeList"
            class="col-form-label text-info"
            style="width: 250px"
            >函数4Code列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnCreate_Click"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnUpdate_Click"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDelete_Click"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClone_Click"
            >复制</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlFuncAccessModeId_SetFldValue"
              v-model="funcAccessModeId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option
                v-for="(item, index) in arrFuncAccessMode"
                :key="index"
                :value="item.funcAccessModeId"
              >
                {{ item.funcAccessModeName }}
              </option></select
            >
            <button
              id="btnSetFuncAccessModeId"
              name="btnSetFuncAccessModeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetFuncAccessModeId_Click"
              >设置函数操作模式Id</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <Function4Code_ListCom
        ref="refFunction4Code_List"
        :items="dataListFunction4Code"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </Function4Code_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFunction4CodeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <Function4Code_EditCom ref="refFunction4Code_Edit"></Function4Code_EditCom>
    <!--详细信息层-->
    <Function4Code_DetailCom ref="refFunction4Code_Detail"></Function4Code_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import router from '@/router';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import {
    GetCheckedKeyIdsInDivObj,
    GetSelectValueInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFunction4Code_Edit,
    refFunction4Code_Detail,
    refFunction4Code_List,
    showErrorMessage,
    dataListFunction4Code,
    emptyRecNumInfo,
    dataColumn,
    ProgLangTypeId_Static,
    funcId4Code_q,
    funcPurposeId_q,
    applicationTypeId_q,
    funcTypeId_q,
    codeTypeId_q,
    returnTypeId_q,
    funcName4Code_q,
    funcAccessModeId_f,
  } from '@/views/PrjFunction/Function4CodeVueShare';
  import { clsFunction4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeEN';
  import Function4Code_EditEx from '@/views/PrjFunction/Function4Code_EditEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import Function4CodeCRUDEx from '@/views/PrjFunction/Function4CodeCRUDEx';
  import Function4Code_EditCom from '@/views/PrjFunction/Function4Code_Edit.vue';
  import Function4Code_DetailCom from '@/views/PrjFunction/Function4Code_Detail.vue';
  import Function4Code_ListCom from '@/views/PrjFunction/Function4Code_List.vue';
  import { clsFunctionPurposeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionPurposeEN';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
  import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { clsFuncAccessModeEN } from '@/ts/L0Entity/PrjFunction/clsFuncAccessModeEN';
  import { FunctionPurpose_GetArrFunctionPurpose } from '@/ts/L3ForWApi/PrjFunction/clsFunctionPurposeWApi';
  import { ApplicationType_GetArrApplicationTypeByIsVisible } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
  import { FunctionType_GetArrFunctionType } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTypeWApi';

  import { DataTypeAbbr_GetArrDataTypeAbbr } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  import { FuncAccessMode_GetArrFuncAccessMode } from '@/ts/L3ForWApi/PrjFunction/clsFuncAccessModeWApi';
  export default defineComponent({
    name: 'Function4CodeCRUD',
    components: {
      // 组件注册
      Function4Code_EditCom,
      Function4Code_DetailCom,
      Function4Code_ListCom,
    },

    setup() {
      ProgLangTypeId_Static.value = '';
      const objPage = ref<Function4CodeCRUDEx>();
      const objPage_Edit = ref<Function4Code_EditEx>();
      // const objPage_Detail = ref<Function4Code_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'Function4CodeCRUD';

      const arrFunctionPurpose = ref<clsFunctionPurposeEN[] | null>([]);
      const arrApplicationType = ref<clsApplicationTypeEN[] | null>([]);
      const arrFunctionType = ref<clsFunctionTypeEN[] | null>([]);
      const arrCodeType = ref<clsCodeTypeEN[] | null>([]);
      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[] | null>([]);

      const arrFuncAccessMode = ref<clsFuncAccessModeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_Function4Code4Func(refDivList.value);
      };

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new Function4Code_EditEx('Function4Code_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_Function4Code(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsFunction4CodeEN.PrimaryTypeId) > -1) {
            await objPage_Edit.value.AddNewRecordWithMaxId();
          } else {
            await objPage_Edit.value.AddNewRecord();
          }
        } catch (e) {
          const strMsg = Format(
            '添加新记录初始化不成功,{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCopyRecord_Click)
       **/
      const btnClone_Click = async () => {
        const strThisFuncName = btnClone_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要克隆的${thisTabName}记录!`);
            return '';
          }
          await objPage.value.CopyRecord(arrKeyIds);
          await objPage.value.BindGv_Function4Code4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `复制记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new Function4Code_EditEx('Function4Code_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFuncId4Code = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strFuncId4Code) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_Function4Code(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strFuncId4Code);
          if (update == false) {
            const strMsg = Format('在修改记录时,显示记录数据不成功!');
            console.error(strMsg);
            alert(strMsg);
            return;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsFunction4CodeEN._CurrTabName;
      };

      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDelete_Click)
       **/
      const btnDelete_Click = async () => {
        const strThisFuncName = btnDelete_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyIds.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord(arrKeyIds);
          await objPage.value.BindGv_Function4Code4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      const exportToExcel = (
        arrData: Array<Record<string, any>>,
        strSheetName: string,
        strFileName: string,
      ) => {
        try {
          // Convert object list to worksheet
          const worksheet = XLSX.utils.json_to_sheet(arrData);
          // Create a new workbook and append the worksheet
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, strSheetName);
          // Export the workbook to an Excel file
          XLSX.writeFile(workbook, strFileName);
          alert('导出成功！');
        } catch (error) {
          console.error('导出失败:', error);
          alert('导出失败，请检查控制台日志！');
        }
      };
      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        const objExportExcelData: ExportExcelData =
          await objPage.value.ExportExcel_Function4Code4Func();
        if (objExportExcelData.sheetName == '') {
          alert('获取导出数据出错,请检查!');
          return;
        }
        exportToExcel(
          objExportExcelData.arrObjLst,
          objExportExcelData.sheetName,
          objExportExcelData.fileName,
        );
      };

      /** 设置字段值-FuncAccessModeId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetFuncAccessModeId_Click = async () => {
        const strThisFuncName = btnSetFuncAccessModeId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置函数操作模式Id的${thisTabName}记录!`);
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
          await objPage.value.SetFuncAccessModeId(arrKeyIds, strFuncAccessModeId);
          await objPage.value.BindGv_Function4Code4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        // const strProgLangTypeId_Static = ProgLangTypeId_Static.value; //静态变量;//静态变量

        arrFunctionPurpose.value = await FunctionPurpose_GetArrFunctionPurpose(); //查询区域
        funcPurposeId_q.value = '0';

        arrApplicationType.value = await ApplicationType_GetArrApplicationTypeByIsVisible(); //查询区域
        applicationTypeId_q.value = 0;

        arrFunctionType.value = await FunctionType_GetArrFunctionType(); //查询区域
        funcTypeId_q.value = '0';

        // arrCodeType.value = await CodeType_GetArrCodeTypeByProgLangTypeId(strProgLangTypeId_Static); //查询区域
        // codeTypeId_q.value = '0';

        arrDataTypeAbbr.value = await DataTypeAbbr_GetArrDataTypeAbbr(); //查询区域
        returnTypeId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrFuncAccessMode.value = await FuncAccessMode_GetArrFuncAccessMode(); //功能区域
        funcAccessModeId_f.value = '0';
      }

      const strTitle = ref('函数4Code维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        Function4CodeCRUDEx.vuebtn_Click = btn_Click;
        Function4CodeCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new Function4CodeCRUDEx();
        await objPage.value.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        Function4CodeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListFunction4Code,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refFunction4Code_Edit,
        refFunction4Code_Detail,
        refFunction4Code_List,
        funcId4Code_q,
        funcPurposeId_q,
        applicationTypeId_q,
        funcTypeId_q,
        codeTypeId_q,
        returnTypeId_q,
        funcName4Code_q,
        funcAccessModeId_f,
        arrFunctionPurpose,
        arrApplicationType,
        arrFunctionType,
        arrCodeType,
        arrDataTypeAbbr,
        arrFuncAccessMode,
        btnQuery_Click,
        btnCreate_Click,
        btnClone_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSetFuncAccessModeId_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editFunction4Code', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new Function4CodeCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
