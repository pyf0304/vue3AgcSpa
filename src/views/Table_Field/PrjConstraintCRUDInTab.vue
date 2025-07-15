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
              id="lblConstraintName_q"
              name="lblConstraintName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >约束表名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtConstraintName_q"
              name="txtConstraintName_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblConstraintTypeId_q"
              name="lblConstraintTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >约束类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlConstraintTypeId_q"
              name="ddlConstraintTypeId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblInUse_q"
              name="lblInUse_q"
              class="col-form-label text-right"
              style="width: 90px"
              >是否在用
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInUse_q"
              name="ddlInUse_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
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
            id="lblPrjConstraintList"
            name="lblPrjConstraintList"
            class="col-form-label text-info"
            style="width: 250px"
            >约束列表
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
            id="btnSetNormalConstraintName"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('SetNormalConstraintName', '')"
            >设置标准约束名</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCheckConstraintFld"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CheckConstraintFld', '')"
            >检查约束字段</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortPrjConstraintBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PrjConstraint_EditCom ref="refPrjConstraint_Edit"></PrjConstraint_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  // import { useRoute } from 'vue-router';
  import PrjConstraintCRUDEx from '@/views/Table_Field/PrjConstraintCRUDEx';

  import PrjConstraint_EditCom from '@/views/Table_Field/PrjConstraint_Edit.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refPrjConstraint_Edit,
    CmPrjId_Local,
    PrjId_Session,
    TabId_Static,
  } from '@/views/Table_Field/PrjConstraintVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  const tabIdStatic = ref('');
  const viewVarSet = reactive({
    tabIdStatic,
  });
  export { viewVarSet };
  export default defineComponent({
    name: 'PrjConstraintCRUDInTab',
    components: {
      // 组件注册
      PrjConstraint_EditCom,
    },
    props: {
      tabId: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      // const route = useRoute(); // 获取当前路由信息
      // if (typeof route.params.tabId === 'string') {
      //   tabIdStatic.value = route.params.tabId;
      // }
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      tabIdStatic.value = clsPrivateSessionStorage.tabId_Main;
      TabId_Static.value = clsPrivateSessionStorage.tabId_Main;

      const strTitle = ref('约束维护InTab');

      onMounted(() => {
        PrjConstraintCRUDEx.vuebtn_Click = btn_Click;
        PrjConstraintCRUDEx.GetPropValue = GetPropValue;
        const objPage = new PrjConstraintCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'tabId':
            if (props.tabId == null) return '';
            return props.tabId;
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
        PrjConstraintCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refPrjConstraint_Edit,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
