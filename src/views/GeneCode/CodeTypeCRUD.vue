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
                id="lblCodeTypeId_q"
                name="lblCodeTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >代码类型Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCodeTypeId_q"
                v-model="codeTypeId_q"
                class="form-control form-control-sm"
                style="width: 100px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCodeTypeName_q"
                name="lblCodeTypeName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >代码类型名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCodeTypeName_q"
                v-model="codeTypeName_q"
                class="form-control form-control-sm"
                style="width: 100px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCodeTypeENName_q"
                name="lblCodeTypeENName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >类型英文
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCodeTypeENName_q"
                v-model="codeTypeENName_q"
                class="form-control form-control-sm"
                style="width: 100px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFrontOrBack_q"
                name="lblFrontOrBack_q"
                class="col-form-label text-right"
                style="width: 90px"
                >前台Or后台
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFrontOrBack_q"
                v-model="frontOrBack_q"
                class="form-control form-control-sm"
                style="width: 100px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblGroupName_q"
                name="lblGroupName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >组名
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlGroupName_q"
                v-model="groupName_q"
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
                >编程语言类型Id
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
                id="lblRegionTypeId_q"
                name="lblRegionTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >区域类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlRegionTypeId_q"
                v-model="regionTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrRegionType"
                  :key="index"
                  :value="item.regionTypeId"
                >
                  {{ item.regionTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblSqlDsTypeId_q"
                name="lblSqlDsTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >数据源类型
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
                id="lblDependsOn_q"
                name="lblDependsOn_q"
                class="col-form-label text-right"
                style="width: 90px"
                >依赖于
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDependsOn_q"
                v-model="dependsOn_q"
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
                id="lblInUse_q"
                name="lblInUse_q"
                class="col-form-label text-right"
                style="width: 90px"
                >在用?
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlInUse_q"
                v-model="inUse_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
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
            id="lblCodeTypeList"
            name="lblCodeTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >代码类型列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
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
              id="ddlGroupName_SetFldValue"
              v-model="groupName_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrFieldType" :key="index" :value="item.fieldTypeId">
                {{ item.fieldTypeName }}
              </option></select
            >
            <button
              id="btnSetGroupName"
              name="btnSetGroupName"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetGroupName_Click"
              >设置组名</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlInUse_SetFldValue"
              v-model="inUse_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option
                v-for="(item, index) in arrRegionType"
                :key="index"
                :value="item.regionTypeId"
              >
                {{ item.regionTypeName }}
              </option></select
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
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlSqlDsTypeId_SetFldValue"
              v-model="sqlDsTypeId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrSQLDSType" :key="index" :value="item.sqlDsTypeId">
                {{ item.sqlDsTypeName }}
              </option></select
            >
            <button
              id="btnSetSqlDsTypeId"
              name="btnSetSqlDsTypeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetSqlDsTypeId_Click"
              >设置数据源类型Id</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <CodeType_ListCom
        ref="refCodeType_List"
        :items="dataListCodeType"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </CodeType_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortCodeTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CodeType_EditCom ref="refCodeType_Edit"></CodeType_EditCom>
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
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    GetCheckedKeyIdsInDivObj,
    GetSelectValueInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refCodeType_Edit,
    refCodeType_List,
    showErrorMessage,
    dataListCodeType,
    emptyRecNumInfo,
    dataColumn,
    codeTypeId_q,
    codeTypeName_q,
    codeTypeENName_q,
    frontOrBack_q,
    groupName_q,
    progLangTypeId_q,
    regionTypeId_q,
    sqlDsTypeId_q,
    dependsOn_q,
    inUse_q,
    sqlDsTypeId_f,
    inUse_f,
    groupName_f,
  } from '@/views/GeneCode/CodeTypeVueShare';
  import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
  import CodeType_EditEx from '@/views/GeneCode/CodeType_EditEx';
  import { confirmDel, BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import CodeTypeCRUDEx from '@/views/GeneCode/CodeTypeCRUDEx';
  import CodeType_EditCom from '@/views/GeneCode/CodeType_Edit.vue';
  import CodeType_ListCom from '@/views/GeneCode/CodeType_List.vue';
  import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';

  import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
  import { RegionType_GetArrRegionType } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { SQLDSType_GetArrSQLDSType } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
  import { FieldType_GetArrFieldType } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
  export default defineComponent({
    name: 'CodeTypeCRUD',
    components: {
      // 组件注册
      CodeType_EditCom,
      CodeType_ListCom,
    },

    setup() {
      const objPage = ref<CodeTypeCRUDEx>();
      const objPage_Edit = ref<CodeType_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'CodeTypeCRUD';

      const arrRegionType = ref<clsRegionTypeEN[] | null>([]);
      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);
      const arrSQLDSType = ref<clsSQLDSTypeEN[] | null>([]);

      const arrFieldType = ref<clsFieldTypeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_CodeType4Func(refDivList.value);
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
        objPage_Edit.value = new CodeType_EditEx('CodeType_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_CodeType(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsCodeTypeEN.PrimaryTypeId) > -1) {
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

      /** 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new CodeType_EditEx('CodeType_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strCodeTypeId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strCodeTypeId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_CodeType(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strCodeTypeId);
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
        return clsCodeTypeEN._CurrTabName;
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
          await objPage.value.BindGv_CodeType4Func(divVarSet.refDivList);
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
        const objExportExcelData: ExportExcelData = await objPage.value.ExportExcel_CodeType();
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
          await objPage.value.BindGv_CodeType4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `复制记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 设置字段值-SqlDsTypeId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetSqlDsTypeId_Click = async () => {
        const strThisFuncName = btnSetSqlDsTypeId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置数据源类型Id的${thisTabName}记录!`);
            return '';
          }
          const strSqlDsTypeId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlSqlDsTypeId_SetFldValue',
          );
          if (strSqlDsTypeId == '') {
            const strMsg = '请输入数据源类型Id(SqlDsTypeId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strSqlDsTypeId=' + strSqlDsTypeId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetSqlDsTypeId(arrKeyIds, strSqlDsTypeId);
          await objPage.value.BindGv_CodeType4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
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
          const bolInUse: boolean = $('#ddlInUse_SetFldValue').prop('checked');
          //console.log('bolInUse=' + bolInUse);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetInUse(arrKeyIds, bolInUse);
          await objPage.value.BindGv_CodeType4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 设置字段值-GroupName
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetGroupName_Click = async () => {
        const strThisFuncName = btnSetGroupName_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置组名的${thisTabName}记录!`);
            return '';
          }
          const strGroupName = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlGroupName_SetFldValue',
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
          await objPage.value.SetGroupName(arrKeyIds, strGroupName);
          await objPage.value.BindGv_CodeType4Func(divVarSet.refDivList);
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
        arrRegionType.value = await RegionType_GetArrRegionType(); //查询区域
        groupName_q.value = '0';

        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //查询区域
        progLangTypeId_q.value = '0';

        regionTypeId_q.value = '0';

        arrSQLDSType.value = await SQLDSType_GetArrSQLDSType(); //查询区域
        sqlDsTypeId_q.value = '0';

        dependsOn_q.value = '0';

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlInUse_q');
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrSQLDSType.value = await SQLDSType_GetArrSQLDSType(); //功能区域
        sqlDsTypeId_f.value = '0';

        // BindDdl_TrueAndFalseInDivObj(divVarSet.refDivFunction, '0');
        inUse_f.value = '0';

        arrFieldType.value = await FieldType_GetArrFieldType(); //功能区域
        groupName_f.value = '0';
      }

      const strTitle = ref('代码类型维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        CodeTypeCRUDEx.vuebtn_Click = btn_Click;
        CodeTypeCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new CodeTypeCRUDEx();
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
        CodeTypeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListCodeType,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refCodeType_Edit,
        refCodeType_List,
        codeTypeId_q,
        codeTypeName_q,
        codeTypeENName_q,
        frontOrBack_q,
        groupName_q,
        progLangTypeId_q,
        regionTypeId_q,
        sqlDsTypeId_q,
        dependsOn_q,
        inUse_q,
        sqlDsTypeId_f,
        inUse_f,
        groupName_f,
        arrRegionType,
        arrProgLangType,
        arrSQLDSType,
        arrFieldType,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnClone_Click,
        btnSetSqlDsTypeId_Click,
        btnSetInUse_Click,
        btnSetGroupName_Click,
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
        router.push({ name: 'editCodeType', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new CodeTypeCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
