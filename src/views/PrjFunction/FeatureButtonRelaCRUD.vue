<template>
  <div id="divLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblApplicationTypeId_q"
              name="lblApplicationTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >应用程序类型ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlApplicationTypeId_q"
              name="ddlApplicationTypeId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblFeatureId_q"
              name="lblFeatureId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >功能Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFeatureId_q"
              name="ddlFeatureId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblButtonId_q"
              name="lblButtonId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >按钮Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlButtonId_q"
              name="ddlButtonId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblFeatureButtonRelaList"
            name="lblFeatureButtonRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >功能按钮关系列表
          </label>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFeatureButtonRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FeatureButtonRela_EditCom ref="refFeatureButtonRela_Edit"></FeatureButtonRela_EditCom>
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
  import FeatureButtonRelaCRUDEx from '@/views/PrjFunction/FeatureButtonRelaCRUDEx';
  import FeatureButtonRela_EditCom from '@/views/PrjFunction/FeatureButtonRela_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFeatureButtonRela_Edit,
  } from '@/views/PrjFunction/FeatureButtonRelaVueShare';
  export default defineComponent({
    name: 'FeatureButtonRelaCRUD',
    components: {
      // 组件注册
      FeatureButtonRela_EditCom,
    },
    setup() {
      const strTitle = ref('功能按钮关系维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new FeatureButtonRelaCRUDEx();
        objPage.PageLoadCache();
        //this.myonload();
      });
      function btnClick(strCommandName: string, strKeyId: string) {
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
        FeatureButtonRelaCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refFeatureButtonRela_Edit,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
