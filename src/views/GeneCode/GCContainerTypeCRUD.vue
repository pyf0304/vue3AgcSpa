<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <ul id="ulDetail" name="ulDetail" class="nav">
        <li class="nav-item ml-1">
          <label
            id="lblContainerTypeId_q"
            name="lblContainerTypeId_q"
            class="col-form-label text-right"
            style="width: 90px"
            >容器类型Id
          </label>
        </li>
        <li class="nav-item ml-2">
          <input
            id="txtContainerTypeId_q"
            name="txtContainerTypeId_q"
            class="form-control form-control-sm"
            style="width: 120px"
          />
        </li>
        <li class="nav-item ml-1">
          <label
            id="lblContainerTypeName_q"
            name="lblContainerTypeName_q"
            class="col-form-label text-right"
            style="width: 90px"
            >容器类型名
          </label>
        </li>
        <li class="nav-item ml-2">
          <input
            id="txtContainerTypeName_q"
            name="txtContainerTypeName_q"
            class="form-control form-control-sm"
            style="width: 120px"
          />
        </li>
        <li class="nav-item ml-1">
          <label
            id="lblContainerTypeENName_q"
            name="lblContainerTypeENName_q"
            class="col-form-label text-right"
            style="width: 90px"
            >容器类型英文名
          </label>
        </li>
        <li class="nav-item ml-2">
          <input
            id="txtContainerTypeENName_q"
            name="txtContainerTypeENName_q"
            class="form-control form-control-sm"
            style="width: 120px"
          />
        </li>
        <li class="nav-item ml-2">
          <button
            id="btnQuery"
            name="btnQuery"
            type="submit"
            class="btn btn-outline-warning text-nowrap"
            @click="btnClick('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-2">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            type="submit"
            class="btn btn-outline-warning text-nowrap"
            @click="btnClick('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
      </ul>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblGCContainerTypeList"
            name="lblGCContainerTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >GC容器类型列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Delete', '')"
            >删除</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortGCContainerTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <GCContainerType_EditCom ref="refGCContainerType_Edit"></GCContainerType_EditCom>
    <!--详细信息层-->
    <GCContainerType_DetailCom ref="refGCContainerType_Detail"></GCContainerType_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import GCContainerTypeCRUDEx from '@/views/GeneCode/GCContainerTypeCRUDEx';
  import GCContainerType_EditCom from '@/views/GeneCode/GCContainerType_Edit.vue';
  import GCContainerType_DetailCom from '@/views/GeneCode/GCContainerType_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refGCContainerType_Edit,
    refGCContainerType_Detail,
  } from '@/views/GeneCode/GCContainerTypeVueShare';
  export default defineComponent({
    name: 'GCContainerTypeCRUD',
    components: {
      // 组件注册
      GCContainerType_EditCom,
      GCContainerType_DetailCom,
    },
    setup() {
      const strTitle = ref('GC容器类型维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new GCContainerTypeCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function btnClick(strCommandName: string, strKeyId: string) {
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
        GCContainerTypeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btnClick,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refGCContainerType_Edit,
        refGCContainerType_Detail,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
    methods: {},
  });
</script>
<style scoped></style>
