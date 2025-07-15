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
                id="lblPrjId_q"
                name="lblPrjId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >工程Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPrjId_q"
                v-model="prjId_q"
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
                id="lblConstId_q"
                name="lblConstId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >常量Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlConstId_q"
                v-model="constId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrGCDefaConstants"
                  :key="index"
                  :value="item.constId"
                >
                  {{ item.constName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
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
            id="lblGCConstantPrjIdRelaList"
            name="lblGCConstantPrjIdRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >GC常量工程关系列表
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
      <GCConstantPrjIdRela_ListCom
        ref="refGCConstantPrjIdRela_List"
        :items="dataListGCConstantPrjIdRela"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </GCConstantPrjIdRela_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortGCConstantPrjIdRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <GCConstantPrjIdRela_EditCom ref="refGCConstantPrjIdRela_Edit"></GCConstantPrjIdRela_EditCom>
    <!--详细信息层-->
    <GCConstantPrjIdRela_DetailCom
      ref="refGCConstantPrjIdRela_Detail"
    ></GCConstantPrjIdRela_DetailCom>
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
  import {
    GetCheckedKeyLstsInDivObj,
    GetFirstCheckedKeyLstInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refGCConstantPrjIdRela_Edit,
    refGCConstantPrjIdRela_Detail,
    refGCConstantPrjIdRela_List,
    showErrorMessage,
    dataListGCConstantPrjIdRela,
    emptyRecNumInfo,
    dataColumn,
    PrjId_Session,
    prjId_q,
    dataTypeId_q,
    constName_q,
    constId_q,
  } from '@/views/GeneCode/GCConstantPrjIdRelaVueShare';
  import { clsGCConstantPrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';
  import GCConstantPrjIdRela_EditEx from '@/views/GeneCode/GCConstantPrjIdRela_EditEx';
  import GCConstantPrjIdRela_DetailEx from '@/views/GeneCode/GCConstantPrjIdRela_DetailEx';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import GCConstantPrjIdRelaCRUDEx from '@/views/GeneCode/GCConstantPrjIdRelaCRUDEx';
  import GCConstantPrjIdRela_EditCom from '@/views/GeneCode/GCConstantPrjIdRela_Edit.vue';
  import GCConstantPrjIdRela_DetailCom from '@/views/GeneCode/GCConstantPrjIdRela_Detail.vue';
  import GCConstantPrjIdRela_ListCom from '@/views/GeneCode/GCConstantPrjIdRela_List.vue';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';
  import { DataTypeAbbr_GetArrDataTypeAbbr } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  import { GCDefaConstants_GetArrGCDefaConstantsCache } from '@/ts/L3ForWApi/GeneCode/clsGCDefaConstantsWApi';
  import { GCConstantPrjIdRela_SplitKeyLst } from '@/ts/L3ForWApi/GeneCode/clsGCConstantPrjIdRelaWApi';
  export default defineComponent({
    name: 'GCConstantPrjIdRelaCRUD',

    components: {
      // 组件注册
      GCConstantPrjIdRela_EditCom,
      GCConstantPrjIdRela_DetailCom,
      GCConstantPrjIdRela_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      const objPage = ref<GCConstantPrjIdRelaCRUDEx>();
      const objPage_Edit = ref<GCConstantPrjIdRela_EditEx>();
      const objPage_Detail = ref<GCConstantPrjIdRela_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'GCConstantPrjIdRelaCRUD';

      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[] | null>([]);
      const arrGCDefaConstants = ref<clsGCDefaConstantsEN[] | null>([]);

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new GCConstantPrjIdRela_EditEx(
          'GCConstantPrjIdRela_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GCConstantPrjIdRela(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsGCConstantPrjIdRelaEN.PrimaryTypeId) > -1) {
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
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new GCConstantPrjIdRela_EditEx(
          'GCConstantPrjIdRela_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }

        const strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
        if (strKeyLst == 'undefined') {
          const strMsg = `在修改记录时，获取记录关键字为:${strKeyLst},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        const { constId: strConstId, prjId: strPrjId } = GCConstantPrjIdRela_SplitKeyLst(strKeyLst);
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GCConstantPrjIdRela(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strConstId, strPrjId);
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
        return clsGCConstantPrjIdRelaEN._CurrTabName;
      };

      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnDelete_Click)
       **/
      const btnDelete_Click = async () => {
        const strThisFuncName = btnDelete_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
          if (arrKeyLsts.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyLsts.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord_KeyLst(arrKeyLsts);
          await objPage.value.BindGv_GCConstantPrjIdRela4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_GCConstantPrjIdRela4Func(refDivList.value);
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
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        const objExportExcelData: ExportExcelData =
          await objPage.value.ExportExcel_GCConstantPrjIdRela4Func();
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

      /* 修改记录
 (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnDetail_Click)
*/
      const btnDetail_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Detail.value = new GCConstantPrjIdRela_DetailEx(objPage.value);
        if (objPage_Detail.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }

        const strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
        if (strKeyLst == 'undefined') {
          const strMsg = `在详细信息记录时，获取记录关键字为:${strKeyLst},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        const { constId: strConstId, prjId: strPrjId } = GCConstantPrjIdRela_SplitKeyLst(strKeyLst);
        opType.value = 'Detail';
        const bolIsSuccess = await objPage_Detail.value.ShowDialog_GCConstantPrjIdRela('Detail');
        if (bolIsSuccess == false) return;
        if (IsNullOrEmpty(strConstId) == true) {
          const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
        }
        if (IsNullOrEmpty(strPrjId) == true) {
          const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
        }
        // 为编辑区绑定下拉框
        //const conBindDdl = await this.BindDdl4DetailRegion();
        objPage_Detail.value.DetailRecord4Func(strConstId, strPrjId);
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrDataTypeAbbr.value = await DataTypeAbbr_GetArrDataTypeAbbr(); //查询区域
        dataTypeId_q.value = '0';

        arrGCDefaConstants.value = await GCDefaConstants_GetArrGCDefaConstantsCache(); //查询区域
        constId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('GC常量工程关系维护');

      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        GCConstantPrjIdRelaCRUDEx.vuebtn_Click = btn_Click;
        GCConstantPrjIdRelaCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new GCConstantPrjIdRelaCRUDEx();
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
        GCConstantPrjIdRelaCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      return {
        showErrorMessage,
        dataListGCConstantPrjIdRela,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refGCConstantPrjIdRela_Edit,
        refGCConstantPrjIdRela_Detail,
        refGCConstantPrjIdRela_List,
        prjId_q,
        dataTypeId_q,
        constName_q,
        constId_q,
        arrDataTypeAbbr,
        arrGCDefaConstants,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnQuery_Click,
        btnExportExcel_Click,
        btnDetail_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_method_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editGCConstantPrjIdRela', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_method_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new GCConstantPrjIdRelaCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>

<style scoped></style>
