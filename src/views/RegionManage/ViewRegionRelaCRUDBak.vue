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
              id="lblViewId_q"
              name="lblViewId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              界面
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlViewId_q"
              name="ddlViewId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblRegionId_q"
              name="lblRegionId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              界面区域
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRegionId_q"
              name="ddlRegionId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>

          <!-- <td class="text-right">
            <label
              id="lblPageDispModeId_q"
              name="lblPageDispModeId_q"
              class="col-form-label text-right"
              style="width: 120px"
              >页面显示模式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPageDispModeId_q"
              name="ddlPageDispModeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td> -->
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
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
            id="lblViewRegionRelaList"
            name="lblViewRegionRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >界面区域关系列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortViewRegionRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ViewRegionRela_EditCom ref="refViewRegionRela_Edit"></ViewRegionRela_EditCom>
    <!--详细信息层-->
    <!-- <ViewRegionRela_DetailCom ref="refViewRegionRela_Detail"></ViewRegionRela_DetailCom> -->
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
  import ViewRegionRelaCRUDEx from '@/views/RegionManage/ViewRegionRelaCRUDEx';
  import ViewRegionRela_EditCom from '@/views/RegionManage/ViewRegionRela_Edit.vue';
  // import ViewRegionRela_DetailCom from '@/views/RegionManage/ViewRegionRela_Detail.vue';
  // import { ViewRegionRela_Detail } from '@/viewsBase/RegionManage/ViewRegionRela_Detail';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refViewRegionRela_Edit,
  } from '@/views/RegionManage/ViewRegionRelaVueShare';
  export default defineComponent({
    name: 'ViewRegionRelaCRUD',
    components: {
      // 组件注册
      ViewRegionRela_EditCom,
      // ViewRegionRela_DetailCom,
    },
    setup() {
      const strTitle = ref('界面区域关系维护');

      const refViewRegionRela_Detail = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new ViewRegionRelaCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
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
        ViewRegionRelaCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refViewRegionRela_Edit,
        refViewRegionRela_Detail,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
      /**
       * 页面导入-在导入页面后运行的函数
       **/
    },
  });
</script>
<style scoped></style>
