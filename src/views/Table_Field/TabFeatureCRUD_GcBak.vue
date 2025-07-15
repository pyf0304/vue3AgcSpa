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
                id="lblTabFeatureId_q"
                name="lblTabFeatureId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >表功能Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTabFeatureId_q"
                v-model="tabFeatureId_q"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblTabFeatureName_q"
                name="lblTabFeatureName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >表功能名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTabFeatureName_q"
                v-model="tabFeatureName_q"
                class="form-control form-control-sm"
                style="width: 200px"
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
                style="width: 200px"
              >
                <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                  {{ item.tabName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblFeatureId_q"
                name="lblFeatureId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >功能Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFeatureId_q"
                v-model="featureId_q"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option v-for="(item, index) in arrPrjFeature" :key="index" :value="item.featureId">
                  {{ item.featureName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblIsExtendedClass_q"
                name="lblIsExtendedClass_q"
                class="col-form-label text-right"
                style="width: 90px"
                >扩展类?
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbIsExtendedClass_q"
                v-model="isExtendedClass_q"
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
            id="lblTabFeatureList"
            name="lblTabFeatureList"
            class="col-form-label text-info"
            style="width: 250px"
            >表功能列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <TabFeature_LstCom
        ref="refTabFeature_Lst"
        :items="dataListTabFeature"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </TabFeature_LstCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortTabFeatureBy" type="hidden" />
    </div>
    <!--编辑层-->
    <TabFeature_EditCom ref="refTabFeature_Edit"></TabFeature_EditCom>
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
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refTabFeature_Edit,
    refTabFeature_Lst,
    showErrorMessage,
    dataListTabFeature,
    emptyRecNumInfo,
    dataColumn,
    PrjId_Session,
    TabId_Static,
    FeatureTypeId_Static,
    CmPrjId_Local,
    tabFeatureId_q,
    tabFeatureName_q,
    tabId_q,
    featureId_q,
    isExtendedClass_q,
  } from '@/views/Table_Field/TabFeatureVueShare';
  import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
  import TabFeature_EditEx from '@/views/Table_Field/TabFeature_EditEx';
  import { confirmDel, BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import TabFeatureCRUDEx from '@/views/Table_Field/TabFeatureCRUDEx';
  import TabFeature_EditCom from '@/views/Table_Field/TabFeature_Edit.vue';
  import TabFeature_LstCom from '@/views/Table_Field/TabFeature_Lst.vue';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';

  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { PrjFeature_GetArrPrjFeatureByFeatureTypeId } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
  export default defineComponent({
    name: 'TabFeatureCRUD',
    components: {
      // 组件注册
      TabFeature_EditCom,
      TabFeature_LstCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      TabId_Static.value = '';
      FeatureTypeId_Static.value = '';
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      const objPage = ref<TabFeatureCRUDEx>();
      const objPage_Edit = ref<TabFeature_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'TabFeatureCRUD';

      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrPrjFeature = ref<clsPrjFeatureEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_TabFeature4Func(refDivList.value);
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
        objPage_Edit.value = new TabFeature_EditEx('TabFeature_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_TabFeature(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsTabFeatureEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new TabFeature_EditEx('TabFeature_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strTabFeatureId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strTabFeatureId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_TabFeature(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strTabFeatureId);
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
        return clsTabFeatureEN._CurrTabName;
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
          await objPage.value.BindGv_TabFeature4Func(divVarSet.refDivList);
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
          await objPage.value.ExportExcel_TabFeature4Func();
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
        const strFeatureTypeId_Static = FeatureTypeId_Static.value; //静态变量;//静态变量

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //查询区域
        tabId_q.value = '0';

        arrPrjFeature.value = await PrjFeature_GetArrPrjFeatureByFeatureTypeId(
          strFeatureTypeId_Static,
        ); //查询区域
        featureId_q.value = '0';

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsExtendedClass_q');
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('表功能维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        TabFeatureCRUDEx.vuebtn_Click = btn_Click;
        TabFeatureCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new TabFeatureCRUDEx();
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
        TabFeatureCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListTabFeature,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refTabFeature_Edit,
        refTabFeature_Lst,
        tabFeatureId_q,
        tabFeatureName_q,
        tabId_q,
        featureId_q,
        isExtendedClass_q,
        arrvPrjTab_Sim,
        arrPrjFeature,
        btnQuery_Click,
        btnCreate_Click,
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
        router.push({ name: 'editTabFeature', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new TabFeatureCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
