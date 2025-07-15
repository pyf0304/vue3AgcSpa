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
              id="lblKeyIdGetModeId_q"
              name="lblKeyIdGetModeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >关键字获取方式Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeyIdGetModeId_q"
              name="txtKeyIdGetModeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblKeyIdGetModeName_q"
              name="lblKeyIdGetModeName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >关键字获取方式名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeyIdGetModeName_q"
              name="txtKeyIdGetModeName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblKeyIdGetModeENName_q"
              name="lblKeyIdGetModeENName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >关键字获取方式英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeyIdGetModeENName_q"
              name="txtKeyIdGetModeENName_q"
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
            id="lblGCKeyIdGetModeList"
            name="lblGCKeyIdGetModeList"
            class="col-form-label text-info"
            style="width: 250px"
            >GC关键字获取方式列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
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
        <li class="nav-item ml-3">
          <button
            id="btnDetail"
            name="btnDetail"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Detail', '')"
            >详细</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortGCKeyIdGetModeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <GCKeyIdGetMode_EditCom ref="refGCKeyIdGetMode_Edit"></GCKeyIdGetMode_EditCom>
    <!--详细信息层-->
    <GCKeyIdGetMode_DetailCom ref="refGCKeyIdGetMode_Detail"></GCKeyIdGetMode_DetailCom>
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
  import GCKeyIdGetModeCRUDEx from '@/views/GeneCode/GCKeyIdGetModeCRUDEx';
  import GCKeyIdGetMode_EditCom from '@/views/GeneCode/GCKeyIdGetMode_Edit.vue';
  import GCKeyIdGetMode_DetailCom from '@/views/GeneCode/GCKeyIdGetMode_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refGCKeyIdGetMode_Detail,
    refGCKeyIdGetMode_Edit,
  } from '@/views/GeneCode/GCKeyIdGetModeVueShare';
  export default defineComponent({
    name: 'GCKeyIdGetModeCRUD',
    components: {
      // 组件注册
      GCKeyIdGetMode_EditCom,
      GCKeyIdGetMode_DetailCom,
    },
    setup() {
      const strTitle = ref('GC关键字获取方式维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new GCKeyIdGetModeCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
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
        GCKeyIdGetModeCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refGCKeyIdGetMode_Edit,
        refGCKeyIdGetMode_Detail,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
  });
</script>
<style scoped></style>
