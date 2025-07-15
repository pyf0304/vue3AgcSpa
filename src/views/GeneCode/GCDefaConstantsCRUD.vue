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
                id="lblConstId_q"
                name="lblConstId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >常量Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtConstId_q"
                v-model="constId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblConstName_q"
                name="lblConstName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >常量名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtConstName_q"
                v-model="constName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDataTypeId_q"
                name="lblDataTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >数据类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDataTypeId_q"
                v-model="dataTypeId_q"
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
                id="lblClsName_q"
                name="lblClsName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >类名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtClsName_q"
                v-model="clsName_q"
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
            id="lblGCDefaConstantsList"
            name="lblGCDefaConstantsList"
            class="col-form-label text-info"
            style="width: 250px"
            >GC常量列表
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
            id="btnSetConstIdForCurrPrjId"
            name="btnSetConstIdForCurrPrjId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnSetConstIdForCurrPrjId_Click"
            >把常量设为当前项目</button
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <GCDefaConstants_ListCom
        ref="refGCDefaConstants_List"
        :items="dataListGCDefaConstants"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </GCDefaConstants_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortGCDefaConstantsBy" type="hidden" />
    </div>
    <!--编辑层-->
    <GCDefaConstants_EditCom ref="refGCDefaConstants_Edit"></GCDefaConstants_EditCom>
    <!--详细信息层-->
    <GCDefaConstants_DetailCom ref="refGCDefaConstants_Detail"></GCDefaConstants_DetailCom>
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
    refGCDefaConstants_Edit,
    refGCDefaConstants_Detail,
    refGCDefaConstants_List,
    showErrorMessage,
    dataListGCDefaConstants,
    emptyRecNumInfo,
    dataColumn,
    constId_q,
    constName_q,
    dataTypeId_q,
    clsName_q,
  } from '@/views/GeneCode/GCDefaConstantsVueShare';
  import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';
  import GCDefaConstants_EditEx from '@/views/GeneCode/GCDefaConstants_EditEx';
  import GCDefaConstants_DetailEx from '@/views/GeneCode/GCDefaConstants_DetailEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import GCDefaConstantsCRUDEx from '@/views/GeneCode/GCDefaConstantsCRUDEx';
  import GCDefaConstants_EditCom from '@/views/GeneCode/GCDefaConstants_Edit.vue';
  import GCDefaConstants_DetailCom from '@/views/GeneCode/GCDefaConstants_Detail.vue';
  import GCDefaConstants_ListCom from '@/views/GeneCode/GCDefaConstants_List.vue';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { DataTypeAbbr_GetArrDataTypeAbbr } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  export default defineComponent({
    name: 'GCDefaConstantsCRUD',
    components: {
      // 组件注册
      GCDefaConstants_EditCom,
      GCDefaConstants_DetailCom,
      GCDefaConstants_ListCom,
    },

    setup() {
      const objPage = ref<GCDefaConstantsCRUDEx>();
      const objPage_Edit = ref<GCDefaConstants_EditEx>();
      const objPage_Detail = ref<GCDefaConstants_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'GCDefaConstantsCRUD';

      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[] | null>([]);

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new GCDefaConstants_EditEx('GCDefaConstants_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GCDefaConstants(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsGCDefaConstantsEN.PrimaryTypeId) > -1) {
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
          await objPage.value.BindGv_GCDefaConstants4Func(divVarSet.refDivList);
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
        objPage_Edit.value = new GCDefaConstants_EditEx('GCDefaConstants_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strConstId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strConstId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GCDefaConstants(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strConstId);
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
        return clsGCDefaConstantsEN._CurrTabName;
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
          await objPage.value.BindGv_GCDefaConstants4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
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
        objPage_Detail.value = new GCDefaConstants_DetailEx(objPage.value);
        if (objPage_Detail.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strConstId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        opType.value = 'Detail';
        const bolIsSuccess = await objPage_Detail.value.ShowDialog_GCDefaConstants('Detail');
        if (bolIsSuccess == false) return;
        // 为编辑区绑定下拉框
        //const conBindDdl = await this.BindDdl4DetailRegion();
        objPage_Detail.value.DetailRecord4Func(strConstId);
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
        await objPage.value.BindGv_GCDefaConstants4Func(refDivList.value);
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
          await objPage.value.ExportExcel_GCDefaConstants4Func();
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
       * 自定义功能函数
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_SelfDefine_Click)
       **/
      const btnSetConstIdForCurrPrjId_Click = async () => {
        const strThisFuncName = btnSetConstIdForCurrPrjId_Click.name;
        const strMsg = `函数:[btnSetConstIdForCurrPrjId_Click]还末定义.(in ${thisConstructorName}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrDataTypeAbbr.value = await DataTypeAbbr_GetArrDataTypeAbbr(); //查询区域
        dataTypeId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('GC常量维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        GCDefaConstantsCRUDEx.vuebtn_Click = btn_Click;
        GCDefaConstantsCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new GCDefaConstantsCRUDEx();
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
        GCDefaConstantsCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListGCDefaConstants,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refGCDefaConstants_Edit,
        refGCDefaConstants_Detail,
        refGCDefaConstants_List,
        constId_q,
        constName_q,
        dataTypeId_q,
        clsName_q,
        arrDataTypeAbbr,
        btnCreate_Click,
        btnClone_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnDetail_Click,
        btnQuery_Click,
        btnExportExcel_Click,
        btnSetConstIdForCurrPrjId_Click,
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
        router.push({ name: 'editGCDefaConstants', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new GCDefaConstantsCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
