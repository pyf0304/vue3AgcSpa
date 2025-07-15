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
                id="lblPrjRelationId_q"
                name="lblPrjRelationId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >关系Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPrjRelationId_q"
                v-model="prjRelationId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblRelationName_q"
                name="lblRelationName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >关系名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRelationName_q"
                v-model="relationName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblTabId_q"
                name="lblTabId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >表ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlTabId_q"
                v-model="tabId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                  {{ item.tabName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblPrjTabRelaTypeId_q"
                name="lblPrjTabRelaTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >表关系类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlPrjTabRelaTypeId_q"
                v-model="prjTabRelaTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrPrjTabRelationType"
                  :key="index"
                  :value="item.prjTabRelaTypeId"
                >
                  {{ item.tabRelationTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblRelationTabId_q"
                name="lblRelationTabId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >相关表Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlRelationTabId_q"
                v-model="relationTabId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                  {{ item.tabName }}
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
            id="lblPrjTabRelationList"
            name="lblPrjTabRelationList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程表关系列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <PrjTabRelation_ListCom
        ref="refPrjTabRelation_List"
        :items="dataListPrjTabRelation"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </PrjTabRelation_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortPrjTabRelationBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PrjTabRelation_EditCom ref="refPrjTabRelation_Edit"></PrjTabRelation_EditCom>
    <!--详细信息层-->
    <PrjTabRelation_DetailCom ref="refPrjTabRelation_Detail"></PrjTabRelation_DetailCom>
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
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
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
    refPrjTabRelation_Edit,
    refPrjTabRelation_Detail,
    refPrjTabRelation_List,
    showErrorMessage,
    dataListPrjTabRelation,
    emptyRecNumInfo,
    dataColumn,
    PrjId_Session,
    TabId_Static,
    CmPrjId_Local,
    prjRelationId_q,
    relationName_q,
    tabId_q,
    prjTabRelaTypeId_q,
    relationTabId_q,
  } from '@/views/Table_Field/PrjTabRelationVueShare';
  import { clsPrjTabRelationEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationEN';
  import PrjTabRelation_EditEx from '@/views/Table_Field/PrjTabRelation_EditEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import PrjTabRelationCRUDEx from '@/views/Table_Field/PrjTabRelationCRUDEx';
  import PrjTabRelation_EditCom from '@/views/Table_Field/PrjTabRelation_Edit.vue';
  import PrjTabRelation_DetailCom from '@/views/Table_Field/PrjTabRelation_Detail.vue';
  import PrjTabRelation_ListCom from '@/views/Table_Field/PrjTabRelation_List.vue';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsPrjTabRelationTypeEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeEN';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { PrjTabRelationType_GetArrPrjTabRelationType } from '@/ts/L3ForWApi/Table_Field/clsPrjTabRelationTypeWApi';
  export default defineComponent({
    name: 'PrjTabRelationCRUD',
    components: {
      // 组件注册
      PrjTabRelation_EditCom,
      PrjTabRelation_DetailCom,
      PrjTabRelation_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      TabId_Static.value = '';
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      const objPage = ref<PrjTabRelationCRUDEx>();
      const objPage_Edit = ref<PrjTabRelation_EditEx>();
      // const objPage_Detail = ref<PrjTabRelation_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'PrjTabRelationCRUD';

      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrPrjTabRelationType = ref<clsPrjTabRelationTypeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_PrjTabRelation4Func(refDivList.value);
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
        objPage_Edit.value = new PrjTabRelation_EditEx('PrjTabRelation_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_PrjTabRelation(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsPrjTabRelationEN.PrimaryTypeId) > -1) {
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
          await objPage.value.BindGv_PrjTabRelation4Func(divVarSet.refDivList);
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
        objPage_Edit.value = new PrjTabRelation_EditEx('PrjTabRelation_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strPrjRelationId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strPrjRelationId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_PrjTabRelation(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strPrjRelationId);
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
        return clsPrjTabRelationEN._CurrTabName;
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
          await objPage.value.BindGv_PrjTabRelation4Func(divVarSet.refDivList);
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
          await objPage.value.ExportExcel_PrjTabRelation4Func();
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

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //查询区域
        tabId_q.value = '0';

        arrPrjTabRelationType.value = await PrjTabRelationType_GetArrPrjTabRelationType(); //查询区域
        prjTabRelaTypeId_q.value = '0';

        relationTabId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('工程表关系维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        PrjTabRelationCRUDEx.vuebtn_Click = btn_Click;
        PrjTabRelationCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new PrjTabRelationCRUDEx();
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
        PrjTabRelationCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListPrjTabRelation,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refPrjTabRelation_Edit,
        refPrjTabRelation_Detail,
        refPrjTabRelation_List,
        prjRelationId_q,
        relationName_q,
        tabId_q,
        prjTabRelaTypeId_q,
        relationTabId_q,
        arrvPrjTab_Sim,
        arrPrjTabRelationType,
        btnQuery_Click,
        btnCreate_Click,
        btnClone_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
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
        router.push({ name: 'editPrjTabRelation', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new PrjTabRelationCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
