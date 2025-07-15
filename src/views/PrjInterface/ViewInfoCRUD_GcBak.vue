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
        style="width: 1000px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <label
                id="lblViewId_q"
                name="lblViewId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >界面ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtViewId_q"
                v-model="viewId_q"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblViewName_q"
                name="lblViewName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >界面名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtViewName_q"
                v-model="viewName_q"
                class="form-control form-control-sm"
                style="width: 200px"
              />
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
                style="width: 200px"
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
                id="lblFuncModuleAgcId_q"
                name="lblFuncModuleAgcId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >模块
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncModuleAgcId_q"
                v-model="funcModuleAgcId_q"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option
                  v-for="(item, index) in arrFuncModule_Agc"
                  :key="index"
                  :value="item.funcModuleAgcId"
                >
                  {{ item.funcModuleName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblMainTabId_q"
                name="lblMainTabId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >主表
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMainTabId_q"
                v-model="mainTabId_q"
                class="form-control form-control-sm"
                style="width: 150px"
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
            id="lblViewInfoList"
            name="lblViewInfoList"
            class="col-form-label text-info"
            style="width: 250px"
            >界面列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <select
            id="ddlCmPrjId_SetFldValue"
            v-model="cmPrjId_f"
            class="form-control form-control-sm"
            style="width: 60px"
          >
            <option v-for="(item, index) in arrCMProject" :key="index" :value="item.cmPrjId">
              {{ item.cmPrjName }}
            </option></select
          >
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
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClone_Click"
            >复制</button
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
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlApplicationTypeId_SetFldValue"
              v-model="applicationTypeId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option
                v-for="(item, index) in arrApplicationType"
                :key="index"
                :value="item.applicationTypeId"
              >
                {{ item.applicationTypeName }}
              </option></select
            >
            <button
              id="btnSetApplicationTypeId"
              name="btnSetApplicationTypeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetApplicationTypeId_Click"
              >设置应用</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <vViewInfo_ListCom
        ref="refvViewInfo_List"
        :items="dataListViewInfo"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </vViewInfo_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortViewInfoBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ViewInfo_EditCom ref="refViewInfo_Edit"></ViewInfo_EditCom>
    <!--详细信息层-->
    <ViewInfo_DetailCom ref="refViewInfo_Detail"></ViewInfo_DetailCom>
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
  import { useUserStore } from '@/store/modulesShare/user';
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
    refViewInfo_Edit,
    refViewInfo_Detail,
    refvViewInfo_List,
    showErrorMessage,
    dataListViewInfo,
    emptyRecNumInfo,
    dataColumn,
    PrjId_Session,
    UserId_Local,
    ApplicationTypeId_Static,
    CmPrjId_Local,
    viewId_q,
    viewName_q,
    applicationTypeId_q,
    funcModuleAgcId_q,
    mainTabId_q,
    applicationTypeId_f,
    cmPrjId_f,
  } from '@/views/PrjInterface/ViewInfoVueShare';
  import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
  import ViewInfo_EditEx from '@/views/PrjInterface/ViewInfo_EditEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import ViewInfoCRUDEx from '@/views/PrjInterface/ViewInfoCRUDEx';
  import ViewInfo_EditCom from '@/views/PrjInterface/ViewInfo_Edit.vue';
  import ViewInfo_DetailCom from '@/views/PrjInterface/ViewInfo_Detail.vue';
  import vViewInfo_ListCom from '@/views/PrjInterface/vViewInfo_List.vue';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
  import { ApplicationType_GetArrApplicationTypeByIsVisible } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
  import { FuncModule_Agc_GetArrFuncModule_AgcByPrjId } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { CMProject_GetArrCMProjectByPrjId } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
  export default defineComponent({
    name: 'ViewInfoCRUD',
    components: {
      // 组件注册
      ViewInfo_EditCom,
      ViewInfo_DetailCom,
      vViewInfo_ListCom,
    },

    setup() {
      const userStore = useUserStore();

      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      UserId_Local.value = userStore.getUserId;
      ApplicationTypeId_Static.value = 0;
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      const objPage = ref<ViewInfoCRUDEx>();
      const objPage_Edit = ref<ViewInfo_EditEx>();
      // const objPage_Detail = ref<ViewInfo_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'ViewInfoCRUD';

      const arrApplicationType = ref<clsApplicationTypeEN[] | null>([]);
      const arrFuncModule_Agc = ref<clsFuncModule_AgcEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);

      const arrCMProject = ref<clsCMProjectEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_ViewInfo4Func(refDivList.value);
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
        objPage_Edit.value = new ViewInfo_EditEx('ViewInfo_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_ViewInfo(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsViewInfoEN.PrimaryTypeId) > -1) {
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
        const objExportExcelData: ExportExcelData = await objPage.value.ExportExcel_ViewInfo4Func();
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
          await objPage.value.BindGv_ViewInfo4Func(divVarSet.refDivList);
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
        objPage_Edit.value = new ViewInfo_EditEx('ViewInfo_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strViewId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strViewId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_ViewInfo(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strViewId);
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
        return clsViewInfoEN._CurrTabName;
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
          await objPage.value.BindGv_ViewInfo4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 设置字段值-ApplicationTypeId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetApplicationTypeId_Click = async () => {
        const strThisFuncName = btnSetApplicationTypeId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置应用程序类型ID的${thisTabName}记录!`);
            return '';
          }
          const strApplicationTypeId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlApplicationTypeId_SetFldValue',
          );
          if (strApplicationTypeId == '') {
            const strMsg = '请输入应用程序类型ID(ApplicationTypeId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strApplicationTypeId=' + strApplicationTypeId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          const intApplicationTypeId = Number(strApplicationTypeId);
          await objPage.value.SetApplicationTypeId(arrKeyIds, intApplicationTypeId);
          await objPage.value.BindGv_ViewInfo4Func(divVarSet.refDivList);
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
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        arrApplicationType.value = await ApplicationType_GetArrApplicationTypeByIsVisible(); //查询区域
        applicationTypeId_q.value = 0;

        arrFuncModule_Agc.value = await FuncModule_Agc_GetArrFuncModule_AgcByPrjId(strPrjId); //查询区域
        funcModuleAgcId_q.value = '0';

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //查询区域
        mainTabId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        arrApplicationType.value = await ApplicationType_GetArrApplicationTypeByIsVisible(); //功能区域
        applicationTypeId_f.value = 0;

        arrCMProject.value = await CMProject_GetArrCMProjectByPrjId(strPrjId); //功能区域
        cmPrjId_f.value = '0';
      }

      const strTitle = ref('界面维护5');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        ViewInfoCRUDEx.vuebtn_Click = btn_Click;
        ViewInfoCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new ViewInfoCRUDEx();
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
        ViewInfoCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListViewInfo,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refViewInfo_Edit,
        refViewInfo_Detail,
        refvViewInfo_List,
        viewId_q,
        viewName_q,
        applicationTypeId_q,
        funcModuleAgcId_q,
        mainTabId_q,
        applicationTypeId_f,
        cmPrjId_f,
        arrApplicationType,
        arrFuncModule_Agc,
        arrvPrjTab_Sim,
        arrCMProject,
        btnQuery_Click,
        btnCreate_Click,
        btnExportExcel_Click,
        btnClone_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnSetApplicationTypeId_Click,
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
        router.push({ name: 'editViewInfo', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new ViewInfoCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
