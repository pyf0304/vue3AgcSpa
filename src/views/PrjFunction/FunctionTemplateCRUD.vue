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
                id="lblFunctionTemplateId_q"
                name="lblFunctionTemplateId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数模板Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFunctionTemplateId_q"
                v-model="functionTemplateId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFunctionTemplateName_q"
                name="lblFunctionTemplateName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数模板名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFunctionTemplateName_q"
                v-model="functionTemplateName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFunctionTemplateENName_q"
                name="lblFunctionTemplateENName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数模板英文名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFunctionTemplateENName_q"
                v-model="functionTemplateENName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
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
                id="lblCreateUserId_q"
                name="lblCreateUserId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >建立用户Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCreateUserId_q"
                v-model="createUserId_q"
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
            id="lblFunctionTemplateList"
            name="lblFunctionTemplateList"
            class="col-form-label text-info"
            style="width: 250px"
            >函数模板列表
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
      <FunctionTemplate_ListCom
        ref="refFunctionTemplate_List"
        :items="dataListFunctionTemplate"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </FunctionTemplate_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFunctionTemplateBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FunctionTemplate_EditCom ref="refFunctionTemplate_Edit"></FunctionTemplate_EditCom>
    <!--详细信息层-->
    <FunctionTemplate_DetailCom ref="refFunctionTemplate_Detail"></FunctionTemplate_DetailCom>
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
    GetFirstCheckedKeyIdInDivObj,
    GetCheckedKeyIdsInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFunctionTemplate_Edit,
    refFunctionTemplate_Detail,
    refFunctionTemplate_List,
    showErrorMessage,
    dataListFunctionTemplate,
    emptyRecNumInfo,
    dataColumn,
    functionTemplateId_q,
    functionTemplateName_q,
    functionTemplateENName_q,
    progLangTypeId_q,
    createUserId_q,
  } from '@/views/PrjFunction/FunctionTemplateVueShare';
  import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
  import FunctionTemplate_EditEx from '@/views/PrjFunction/FunctionTemplate_EditEx';
  //   import FunctionTemplate_DetailEx from '@/views/PrjFunction/FunctionTemplate_DetailEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import FunctionTemplateCRUDEx from '@/views/PrjFunction/FunctionTemplateCRUDEx';
  import FunctionTemplate_EditCom from '@/views/PrjFunction/FunctionTemplate_Edit.vue';
  import FunctionTemplate_DetailCom from '@/views/PrjFunction/FunctionTemplate_Detail.vue';
  import FunctionTemplate_ListCom from '@/views/PrjFunction/FunctionTemplate_List.vue';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  export default defineComponent({
    name: 'FunctionTemplateCRUD',

    components: {
      // 组件注册
      FunctionTemplate_EditCom,
      FunctionTemplate_DetailCom,
      FunctionTemplate_ListCom,
    },

    setup() {
      const objPage = ref<FunctionTemplateCRUDEx>();
      const objPage_Edit = ref<FunctionTemplate_EditEx>();
      //   const objPage_Detail = ref<FunctionTemplate_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'FunctionTemplateCRUD';

      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_FunctionTemplate4Func(refDivList.value);
      };

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new FunctionTemplate_EditEx('FunctionTemplate_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_FunctionTemplate(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsFunctionTemplateEN._PrimaryTypeId) > -1) {
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
       * 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;

        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }

        objPage_Edit.value = new FunctionTemplate_EditEx('FunctionTemplate_EditEx', objPage.value);

        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }

        const strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          const strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        const strFunctionTemplateId = strKeyId;

        if (IsNullOrEmpty(strFunctionTemplateId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        try {
          opType.value = 'Update';

          const bolIsSuccess = await objPage_Edit.value.ShowDialog_FunctionTemplate(opType.value);
          if (bolIsSuccess == false) return;

          const update = await objPage_Edit.value.UpdateRecord(strFunctionTemplateId);

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
        return clsFunctionTemplateEN._CurrTabName;
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
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyIds.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord(arrKeyIds);
          await objPage.value.BindGv_FunctionTemplate4Func(divVarSet.refDivList);
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
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        const objExportExcelData: ExportExcelData =
          await objPage.value.ExportExcel_FunctionTemplateCache();
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
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //查询区域
        progLangTypeId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('函数模板维护');

      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        FunctionTemplateCRUDEx.vuebtn_Click = btn_Click;
        FunctionTemplateCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new FunctionTemplateCRUDEx();
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
        FunctionTemplateCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      return {
        showErrorMessage,
        dataListFunctionTemplate,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refFunctionTemplate_Edit,
        refFunctionTemplate_Detail,
        refFunctionTemplate_List,
        functionTemplateId_q,
        functionTemplateName_q,
        functionTemplateENName_q,
        progLangTypeId_q,
        createUserId_q,
        arrProgLangType,
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
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_method_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editFunctionTemplate', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_method_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new FunctionTemplateCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>

<style scoped></style>
