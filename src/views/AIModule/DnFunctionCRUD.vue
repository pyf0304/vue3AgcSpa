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
        <tr>
          <td class="text-right">
            <label
              id="lblDnFunctionId_q"
              name="lblDnFunctionId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >DN函数Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDnFunctionId_q"
              v-model="dnFunctionId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDnFunctionName_q"
              name="lblDnFunctionName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >DN函数
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDnFunctionName_q"
              v-model="dnFunctionName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblAssociationMappingId_q"
              name="lblAssociationMappingId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >关联关系映射Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlAssociationMappingId_q"
              v-model="associationMappingId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrAssociationMapping"
                :key="index"
                :value="item.associationMappingId"
              >
                {{ item.associationMappingName }}
              </option></select
            >
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
        </tr>
        <tr>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
            >
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblDnFunctionList"
            name="lblDnFunctionList"
            class="col-form-label text-info"
            style="width: 250px"
            >数据结点函数列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <DnFunction_ListCom
        ref="refDnFunction_List"
        :items="dataListDnFunction"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </DnFunction_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortDnFunctionBy" type="hidden" />
    </div>
    <!--编辑层-->
    <DnFunction_EditCom ref="refDnFunction_Edit"></DnFunction_EditCom>
    <!--详细信息层-->
    <DnFunction_DetailCom ref="refDnFunction_Detail"></DnFunction_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refDnFunction_Edit,
    refDnFunction_Detail,
    refDnFunction_List,
    showErrorMessage,
    dataListDnFunction,
    emptyRecNumInfo,
    PrjId_Session,
    dnFunctionId_q,
    dnFunctionName_q,
    associationMappingId_q,
    prjId_q,
  } from '@/views/AIModule/DnFunctionVueShare';
  import DnFunctionCRUDEx from '@/views/AIModule/DnFunctionCRUDEx';
  import DnFunction_EditCom from '@/views/AIModule/DnFunction_Edit.vue';
  import DnFunction_DetailCom from '@/views/AIModule/DnFunction_Detail.vue';
  import DnFunction_ListCom from '@/views/AIModule/DnFunction_List.vue';
  import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
  import { AssociationMapping_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
  export default defineComponent({
    name: 'DnFunctionCRUD',
    components: {
      // 组件注册
      DnFunction_EditCom,
      DnFunction_DetailCom,
      DnFunction_ListCom,
    },

    setup() {
      PrjId_Session.value = '';

      const arrAssociationMapping = ref<clsAssociationMappingEN[]>([]);
      /**
     * 获取绑定下拉框的数据
     * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
     * @param objDDL:需要绑定当前表的下拉框
    
    */
      async function getArrAssociationMapping() {
        let arrObjLstSel = await AssociationMapping_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrAssociationMapping.value.length = 0;
        const obj0 = new clsAssociationMappingEN();
        obj0.associationMappingId = '0';
        obj0.associationMappingName = '请选择关联关系映射...';
        arrAssociationMapping.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) =>
          x.associationMappingName.localeCompare(y.associationMappingName),
        );
        arrObjLstSel.forEach((x) => arrAssociationMapping.value.push(x));
        associationMappingId_q.value = '0';
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        await getArrAssociationMapping(); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('数据结点函数维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        DnFunctionCRUDEx.vuebtn_Click = btn_Click;
        DnFunctionCRUDEx.GetPropValue = GetPropValue;
        const objPage = new DnFunctionCRUDEx();
        objPage.PageLoadCache();
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
        DnFunctionCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListDnFunction,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refDnFunction_Edit,
        refDnFunction_Detail,
        refDnFunction_List,
        dnFunctionId_q,
        dnFunctionName_q,
        associationMappingId_q,
        prjId_q,
        arrAssociationMapping,
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
        router.push({ name: 'editDnFunction', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new DnFunctionCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
