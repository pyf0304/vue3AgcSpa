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
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label
                id="lblFuncId4GC_q"
                name="lblFuncId4GC_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFuncId4GC_q"
                v-model="funcId4GC_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFuncName_q"
                name="lblFuncName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFuncName_q"
                v-model="funcName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblSqlDsTypeId_q"
                name="lblSqlDsTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >数据源
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSqlDsTypeId_q"
                v-model="sqlDsTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrSQLDSType"
                  :key="index"
                  :value="item.sqlDsTypeId"
                >
                  {{ item.sqlDsTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblFuncCodeTypeId_q"
                name="lblFuncCodeTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >代码类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncCodeTypeId_q"
                v-model="funcCodeTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrCodeType" :key="index" :value="item.codeTypeId">
                  {{ item.codeTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblInUse_q"
                name="lblInUse_q"
                class="col-form-label text-right"
                style="width: 90px"
                >是否在用
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbInUse_q"
                v-model="inUse_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblProgLangTypeId_q"
                name="lblProgLangTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >语言
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlProgLangTypeId_q"
                v-model="progLangTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrProgLangType"
                  :key="index"
                  :value="item.progLangTypeId"
                >
                  {{ item.progLangTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblFuncTypeId_q"
                name="lblFuncTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数类型
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
                id="lblIsTemplate_q"
                name="lblIsTemplate_q"
                class="col-form-label text-right"
                style="width: 90px"
                >功能样板?
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbIsTemplate_q"
                v-model="isTemplate_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIsFuncTemplate_q"
                name="lblIsFuncTemplate_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数模板?
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbIsFuncTemplate_q"
                v-model="isFuncTemplate_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblFuncId4Code_q"
                name="lblFuncId4Code_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数(Code)
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncId4Code_q"
                v-model="funcId4Code_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrFunction4Code"
                  :key="index"
                  :value="item.funcId4Code"
                >
                  {{ item.funcName4Code }}
                </option></select
              >
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
            id="lblFunction4GeneCodeList"
            name="lblFunction4GeneCodeList"
            class="col-form-label text-info"
            style="width: 250px"
            >函数4GeneCode列表
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
          <button
            id="btnDetail"
            name="btnDetail"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDetail_Click"
            >详细</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlbInUse_SetFldValue"
              v-model="inUse_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option value="0">选择是/否</option>
              <option value="true">是</option>
              <option value="false">否</option></select
            >
            <button
              id="btnSetInUse"
              name="btnSetInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetInUse_Click"
              >设置是否在用</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <Function4GeneCode_ListCom
        ref="refFunction4GeneCode_List"
        :items="dataListFunction4GeneCode"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </Function4GeneCode_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFunction4GeneCodeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <Function4GeneCode_EditCom ref="refFunction4GeneCode_Edit"></Function4GeneCode_EditCom>
    <!--详细信息层-->
    <Function4GeneCode_DetailCom ref="refFunction4GeneCode_Detail"></Function4GeneCode_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import router from '@/router';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { useUserStore } from '@/store/modulesShare/user';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFunction4GeneCode_Edit,
    refFunction4GeneCode_Detail,
    refFunction4GeneCode_List,
    showErrorMessage,
    dataListFunction4GeneCode,
    emptyRecNumInfo,
    dataColumn,
    PrjId_Session,
    UserId_Local,
    FeatureTypeId_Static,
    ProgLangTypeId_Static,
    FuncPurposeId_Static,
    funcId4GC_q,
    funcName_q,
    sqlDsTypeId_q,
    funcCodeTypeId_q,
    inUse_q,
    progLangTypeId_q,
    funcTypeId_q,
    isTemplate_q,
    isFuncTemplate_q,
    funcId4Code_q,
    inUse_f,
  } from '@/views/PrjFunction/Function4GeneCodeVueShare';
  import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
  import Function4GeneCode_EditEx from '@/views/PrjFunction/Function4GeneCode_EditEx';
  import Function4GeneCode_DetailEx from '@/views/PrjFunction/Function4GeneCode_DetailEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import Function4GeneCodeCRUDEx from '@/views/PrjFunction/Function4GeneCodeCRUDEx';
  import Function4GeneCode_EditCom from '@/views/PrjFunction/Function4GeneCode_Edit.vue';
  import Function4GeneCode_DetailCom from '@/views/PrjFunction/Function4GeneCode_Detail.vue';
  import Function4GeneCode_ListCom from '@/views/PrjFunction/Function4GeneCode_List.vue';
  import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
  import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
  import { clsFunction4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeEN';
  import { SQLDSType_GetArrSQLDSType } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
  import { CodeType_GetArrCodeTypeByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsCodeTypeWApi';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { FunctionType_GetArrFunctionType } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTypeWApi';
  import { Function4Code_GetArrFunction4CodeByFuncPurposeId } from '@/ts/L3ForWApi/PrjFunction/clsFunction4CodeWApi';
  export default defineComponent({
    name: 'Function4GeneCodeCRUD',
    components: {
      // 组件注册
      Function4GeneCode_EditCom,
      Function4GeneCode_DetailCom,
      Function4GeneCode_ListCom,
    },

    setup() {
      const userStore = useUserStore();

      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      UserId_Local.value = userStore.getUserId;
      FeatureTypeId_Static.value = '';
      ProgLangTypeId_Static.value = '';
      FuncPurposeId_Static.value = '';
      const objPage = ref<Function4GeneCodeCRUDEx>();
      const objPage_Edit = ref<Function4GeneCode_EditEx>();
      const objPage_Detail = ref<Function4GeneCode_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'Function4GeneCodeCRUD';

      const arrSQLDSType = ref<clsSQLDSTypeEN[] | null>([]);
      const arrCodeType = ref<clsCodeTypeEN[] | null>([]);
      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);
      const arrFunctionType = ref<clsFunctionTypeEN[] | null>([]);
      const arrFunction4Code = ref<clsFunction4CodeEN[] | null>([]);

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new Function4GeneCode_EditEx(
          'Function4GeneCode_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_Function4GeneCode(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsFunction4GeneCodeEN.PrimaryTypeId) > -1) {
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
          await objPage.value.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
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
        objPage_Edit.value = new Function4GeneCode_EditEx(
          'Function4GeneCode_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFuncId4GC = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strFuncId4GC) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_Function4GeneCode(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strFuncId4GC);
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

      /* 修改记录
 (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDetail_Click)
*/
      const btnDetail_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Detail.value = new Function4GeneCode_DetailEx(objPage.value);
        if (objPage_Detail.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFuncId4GC = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        opType.value = 'Detail';
        const bolIsSuccess = await objPage_Detail.value.ShowDialog_Function4GeneCode('Detail');
        if (bolIsSuccess == false) return;
        // 为编辑区绑定下拉框
        //const conBindDdl = await this.BindDdl4DetailRegion();
        objPage_Detail.value.DetailRecord(strFuncId4GC);
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsFunction4GeneCodeEN._CurrTabName;
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
          await objPage.value.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_Function4GeneCode4Func(refDivList.value);
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
          await objPage.value.ExportExcel_Function4GeneCode();
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

      /** 设置字段值-InUse
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetInUse_Click = async () => {
        const strThisFuncName = btnSetInUse_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置是否在用的${thisTabName}记录!`);
            return '';
          }
          const bolInUse = inUse_f.value == 'true' ? true : false;
          //console.log('bolInUse=' + bolInUse);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetInUse(arrKeyIds, bolInUse);
          await objPage.value.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
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
        const strProgLangTypeId_Static = ProgLangTypeId_Static.value; //静态变量;//静态变量
        const strFuncPurposeId_Static = FuncPurposeId_Static.value; //静态变量;//静态变量

        arrSQLDSType.value = await SQLDSType_GetArrSQLDSType(); //查询区域
        sqlDsTypeId_q.value = '0';

        arrCodeType.value = await CodeType_GetArrCodeTypeByProgLangTypeId(strProgLangTypeId_Static); //查询区域
        funcCodeTypeId_q.value = '0';

        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //查询区域
        progLangTypeId_q.value = '0';

        arrFunctionType.value = await FunctionType_GetArrFunctionType(); //查询区域
        funcTypeId_q.value = '0';

        arrFunction4Code.value = await Function4Code_GetArrFunction4CodeByFuncPurposeId(
          strFuncPurposeId_Static,
        ); //查询区域
        funcId4Code_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        inUse_f.value = '0';
      }

      const strTitle = ref('函数4GeneCode维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        Function4GeneCodeCRUDEx.vuebtn_Click = btn_Click;
        Function4GeneCodeCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new Function4GeneCodeCRUDEx();
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
        Function4GeneCodeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListFunction4GeneCode,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refFunction4GeneCode_Edit,
        refFunction4GeneCode_Detail,
        refFunction4GeneCode_List,
        funcId4GC_q,
        funcName_q,
        sqlDsTypeId_q,
        funcCodeTypeId_q,
        inUse_q,
        progLangTypeId_q,
        funcTypeId_q,
        isTemplate_q,
        isFuncTemplate_q,
        funcId4Code_q,
        inUse_f,
        arrSQLDSType,
        arrCodeType,
        arrProgLangType,
        arrFunctionType,
        arrFunction4Code,
        btnCreate_Click,
        btnClone_Click,
        btnUpdate_Click,
        btnDetail_Click,
        btnDelete_Click,
        btnQuery_Click,
        btnExportExcel_Click,
        btnSetInUse_Click,
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
        router.push({ name: 'editFunction4GeneCode', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new Function4GeneCodeCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
