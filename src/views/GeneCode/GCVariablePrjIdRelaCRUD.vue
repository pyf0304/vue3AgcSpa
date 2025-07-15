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
              id="lblVarId_q"
              name="lblVarId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              变量
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlVarId_q"
              name="ddlVarId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblPrjId_q"
              name="lblPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              工程
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
            id="lblGCVariablePrjIdRelaList"
            name="lblGCVariablePrjIdRelaList"
            class="col-form-label text-info"
            style="width: 250px"
          >
            工程变量关系列表
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
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnSetFldIdForVarId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnSetFldIdForVarId"
            >为变量设置字段</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortGCVariablePrjIdRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <GCVariablePrjIdRela_EditCom ref="refGCVariablePrjIdRela_Edit"></GCVariablePrjIdRela_EditCom>
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
  import GCVariablePrjIdRelaCRUDEx from '@/views/GeneCode/GCVariablePrjIdRelaCRUDEx';
  import GCVariablePrjIdRela_EditCom from '@/views/GeneCode/GCVariablePrjIdRela_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    PrjId_Session,
    refGCVariablePrjIdRela_Edit,
  } from '@/views/GeneCode/GCVariablePrjIdRelaVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { GCVariablePrjIdRelaEx_UpdFldIdByPrjId } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariablePrjIdRelaExWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import { GCVariablePrjIdRela_ReFreshCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariablePrjIdRelaWApi';
  import { Format } from '@/ts/PubFun/clsString';
  export default defineComponent({
    name: 'GCVariablePrjIdRelaCRUD',
    components: {
      // 组件注册
      GCVariablePrjIdRela_EditCom,
    },
    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      const userStore = useUserStore();
      const objPage = ref<GCVariablePrjIdRelaCRUDEx>();
      const thisConstructorName = 'GCVariableCRUD';
      const strTitle = ref('GCVariablePrjIdRela维护');

      const refDivDataLst = ref();
      onMounted(() => {
        objPage.value = new GCVariablePrjIdRelaCRUDEx();

        objPage.value.PageLoadCache();
        //this.myonload();
      });
      async function btnSetFldIdForVarId() {
        const strThisFuncName = btnSetFldIdForVarId.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const intRecNum = await GCVariablePrjIdRelaEx_UpdFldIdByPrjId(
            PrjId_Session.value,
            userStore.getUserId,
          );

          const strMsg = `共为${intRecNum}个变量设置了字段Id`;
          alert(strMsg);
          GCVariablePrjIdRela_ReFreshCache(PrjId_Session.value);
          await objPage.value.BindGv_GCVariablePrjIdRela4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = Format(
            '为变量设置字段Id不成功. {0}.(in {1}.{2})',
            e,
            thisConstructorName,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
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
        GCVariablePrjIdRelaCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refGCVariablePrjIdRela_Edit,
        btnSetFldIdForVarId,
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
