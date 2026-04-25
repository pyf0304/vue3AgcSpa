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
                id="lblDatabaseOwner_q"
                name="lblDatabaseOwner_q"
                class="col-form-label text-right"
                style="width: 90px"
                >数据库拥有者
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDatabaseOwner_q"
                v-model="databaseOwner_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDataBaseTypeId_q"
                name="lblDataBaseTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >数据库类型ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDataBaseTypeId_q"
                v-model="dataBaseTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrDataBaseType"
                  :key="index"
                  :value="item.dataBaseTypeId"
                >
                  {{ item.dataBaseTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblDataBaseUserId_q"
                name="lblDataBaseUserId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >数据库的用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDataBaseUserId_q"
                v-model="dataBaseUserId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblIpAddress_q"
                name="lblIpAddress_q"
                class="col-form-label text-right"
                style="width: 90px"
                >服务器
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIpAddress_q"
                v-model="ipAddress_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblUseStateId_q"
                name="lblUseStateId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >使用状态Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUseStateId_q"
                v-model="useStateId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrUseState" :key="index" :value="item.useStateId">
                  {{ item.useStateName }}
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
            id="lblPrjDataBaseList"
            name="lblPrjDataBaseList"
            class="col-form-label text-info"
            style="width: 250px"
            >数据库对象列表
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
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlUseStateId_SetFldValue"
              v-model="useStateId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrUseState" :key="index" :value="item.useStateId">
                {{ item.useStateName }}
              </option></select
            >
            <button
              id="btnSetUseStateId"
              name="btnSetUseStateId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetUseStateId_Click"
              >设置使用状态</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <PrjDataBase_ListCom
        ref="refPrjDataBase_List"
        :items="dataListPrjDataBase"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </PrjDataBase_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortPrjDataBaseBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PrjDataBase_EditCom ref="refPrjDataBase_Edit"></PrjDataBase_EditCom>
    <!--详细信息层-->
    <PrjDataBase_DetailCom ref="refPrjDataBase_Detail"></PrjDataBase_DetailCom>
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
    GetSelectValueInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refPrjDataBase_Edit,
    refPrjDataBase_Detail,
    refPrjDataBase_List,
    showErrorMessage,
    dataListPrjDataBase,
    emptyRecNumInfo,
    dataColumn,
    databaseOwner_q,
    dataBaseTypeId_q,
    dataBaseUserId_q,
    ipAddress_q,
    useStateId_q,
    useStateId_f,
  } from '@/views/PrjManage/PrjDataBaseVueShare';
  import { clsPrjDataBaseEN } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';
  import PrjDataBase_EditEx from '@/views/PrjManage/PrjDataBase_EditEx';
  // import PrjDataBase_DetailEx from '@/views/PrjManage/PrjDataBase_DetailEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import PrjDataBaseCRUDEx from '@/views/PrjManage/PrjDataBaseCRUDEx';
  import PrjDataBase_EditCom from '@/views/PrjManage/PrjDataBase_Edit.vue';
  import PrjDataBase_DetailCom from '@/views/PrjManage/PrjDataBase_Detail.vue';
  import PrjDataBase_ListCom from '@/views/PrjManage/PrjDataBase_List.vue';
  import { clsDataBaseTypeEN } from '@/ts/L0Entity/SysPara/clsDataBaseTypeEN';
  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { DataBaseType_GetArrDataBaseType } from '@/ts/L3ForWApi/SysPara/clsDataBaseTypeWApi';
  import { UseState_GetArrUseState } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
  export default defineComponent({
    name: 'PrjDataBaseCRUD',

    components: {
      // 组件注册
      PrjDataBase_EditCom,
      PrjDataBase_DetailCom,
      PrjDataBase_ListCom,
    },

    setup() {
      const objPage = ref<PrjDataBaseCRUDEx>();
      const objPage_Edit = ref<PrjDataBase_EditEx>();
      // const objPage_Detail = ref<PrjDataBase_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'PrjDataBaseCRUD';

      const arrDataBaseType = ref<clsDataBaseTypeEN[] | null>([]);
      const arrUseState = ref<clsUseStateEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_PrjDataBase4Func(refDivList.value);
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
        objPage_Edit.value = new PrjDataBase_EditEx('PrjDataBase_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_PrjDataBase(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsPrjDataBaseEN._PrimaryTypeId) > -1) {
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

        objPage_Edit.value = new PrjDataBase_EditEx('PrjDataBase_EditEx', objPage.value);

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
        const strPrjDataBaseId = strKeyId;

        if (IsNullOrEmpty(strPrjDataBaseId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        try {
          opType.value = 'Update';

          const bolIsSuccess = await objPage_Edit.value.ShowDialog_PrjDataBase(opType.value);
          if (bolIsSuccess == false) return;

          const update = await objPage_Edit.value.UpdateRecord(strPrjDataBaseId);

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
        return clsPrjDataBaseEN._CurrTabName;
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
          await objPage.value.BindGv_PrjDataBase4Func(divVarSet.refDivList);
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
          await objPage.value.ExportExcel_PrjDataBaseCache();
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

      /** 设置字段值-UseStateId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnSetFldValue_Click)
       **/

      const btnSetUseStateId_Click = async () => {
        const strThisFuncName = btnSetUseStateId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置使用状态Id的${thisTabName}记录!`);
            return '';
          }
          const strUseStateId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlUseStateId_SetFldValue',
          );
          if (strUseStateId == '') {
            const strMsg = '请输入使用状态Id(UseStateId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strUseStateId=' + strUseStateId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetUseStateId(arrKeyIds, strUseStateId);
          await objPage.value.BindGv_PrjDataBase4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrDataBaseType.value = await DataBaseType_GetArrDataBaseType(); //查询区域
        dataBaseTypeId_q.value = '0';

        arrUseState.value = await UseState_GetArrUseState(); //查询区域
        useStateId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrUseState.value = await UseState_GetArrUseState(); //功能区域
        useStateId_f.value = '0';
      }

      const strTitle = ref('数据库对象维护');

      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        PrjDataBaseCRUDEx.vuebtn_Click = btn_Click;
        PrjDataBaseCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new PrjDataBaseCRUDEx();
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
        PrjDataBaseCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      return {
        showErrorMessage,
        dataListPrjDataBase,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refPrjDataBase_Edit,
        refPrjDataBase_Detail,
        refPrjDataBase_List,
        databaseOwner_q,
        dataBaseTypeId_q,
        dataBaseUserId_q,
        ipAddress_q,
        useStateId_q,
        useStateId_f,
        arrDataBaseType,
        arrUseState,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSetUseStateId_Click,
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
        router.push({ name: 'editPrjDataBase', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_method_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new PrjDataBaseCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>

<style scoped></style>
