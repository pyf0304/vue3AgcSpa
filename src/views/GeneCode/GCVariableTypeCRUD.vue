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
              id="lblVarTypeId_q"
              name="lblVarTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >变量类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVarTypeId_q"
              name="txtVarTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblVarTypeName_q"
              name="lblVarTypeName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >变量类型名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVarTypeName_q"
              name="txtVarTypeName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblVarTypeENName_q"
              name="lblVarTypeENName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >变量类型英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVarTypeENName_q"
              name="txtVarTypeENName_q"
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
            id="lblGCVariableTypeList"
            name="lblGCVariableTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >GC变量类型列表
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
      <input id="hidSortGCVariableTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <GCVariableType_EditCom ref="refGCVariableType_Edit"></GCVariableType_EditCom>
    <!--详细信息层-->
    <GCVariableType_DetailCom ref="refGCVariableType_Detail"></GCVariableType_DetailCom>
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
  import GCVariableTypeCRUDEx from '@/views/GeneCode/GCVariableTypeCRUDEx';

  import GCVariableType_EditCom from '@/views/GeneCode/GCVariableType_Edit.vue';
  import GCVariableType_DetailCom from '@/views/GeneCode/GCVariableType_Detail.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refGCVariableType_Edit,
    refGCVariableType_Detail,
  } from '@/views/GeneCode/GCVariableTypeVueShare';
  export default defineComponent({
    name: 'GCVariableTypeCRUD',
    components: {
      // 组件注册
      GCVariableType_EditCom,
      GCVariableType_DetailCom,
    },
    setup() {
      const strTitle = ref('GC变量类型维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new GCVariableTypeCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
          // case 'Create':
          // testPlus();
          // return;
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
        GCVariableTypeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      // async function testPlus() {
      //   const returnInt = await AssociationMapping_Plus(1, 3);
      //   alert(returnInt.toString());
      // }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refGCVariableType_Edit,
        refGCVariableType_Detail,
      };
    },
    watch: {
      // 数据监听
    },

    methods: {},
  });
</script>
<style scoped></style>
