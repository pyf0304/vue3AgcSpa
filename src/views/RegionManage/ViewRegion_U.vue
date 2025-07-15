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
              id="lblRegionName_q"
              name="lblRegionName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >区域名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionName_q"
              name="txtRegionName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblRegionTypeId_q"
              name="lblRegionTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >区域类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRegionTypeId_q"
              name="ddlRegionTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblRegionTypeSimName_q"
              name="lblRegionTypeSimName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >区域类型简名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionTypeSimName_q"
              name="txtRegionTypeSimName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblClassName_q"
              name="lblClassName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >类名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtClsName_q"
              name="txtClsName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblFileName_q"
              name="lblFileName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >文件名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFileName_q"
              name="txtFileName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPrjId_q"
              name="lblPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >工程ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrjId_q"
              name="ddlPrjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btnClick('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btnClick('ExportExcel', '')"
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
            id="lblViewRegionList"
            name="lblViewRegionList"
            class="col-form-label text-info"
            style="width: 250px"
            >界面区域列表
          </label>
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
            id="btnDetail"
            name="btnDetail"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Detail', '')"
            >详细</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortViewRegionBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ViewRegion_Edit_SimCom ref="refViewRegion_Edit_Sim"></ViewRegion_Edit_SimCom>
    <!--详细信息层-->
    <ViewRegion_Detail_SimCom ref="refViewRegion_Detail_Sim"></ViewRegion_Detail_SimCom>
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
  import ViewRegion_UEx from '@/views/RegionManage/ViewRegion_UEx';
  import ViewRegion_Edit_SimCom from '@/views/RegionManage/ViewRegion_Edit_Sim.vue';
  import ViewRegion_Detail_SimCom from '@/views/RegionManage/ViewRegion_Detail_Sim.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/RegionManage/ViewRegionVueShare';
  import {
    refViewRegion_Detail_Sim,
    refViewRegion_Edit_Sim,
  } from '@/views/RegionManage/ViewRegion_UVueShare';
  export default defineComponent({
    name: 'ViewRegionU',
    components: {
      // 组件注册
      ViewRegion_Edit_SimCom,
      ViewRegion_Detail_SimCom,
    },
    setup() {
      const strTitle = ref('界面区域维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new ViewRegion_UEx();

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
        ViewRegion_UEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btnClick,
        refViewRegion_Edit_Sim,
        refViewRegion_Detail_Sim,
        refDivDataLst,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
