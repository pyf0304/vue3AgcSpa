<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <!-- <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div> -->
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblPrjTabList"
            name="lblPrjTabList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程表列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
          <button
            id="btnShowDetail"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnShowDetail"
            >显示详细信息</button
          >
        </li>
      </ul>
    </div>
    <!--编辑层-->
    <PrjTab_EditCom ref="refPrjTab_Edit2"></PrjTab_EditCom>
    <!--详细信息层-->
    <PrjTab_DetailCom ref="refPrjTab_Detail" :is-dialog="false"></PrjTab_DetailCom>
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
  import { refPrjTabU } from './PrjTab_AllPropVueShare';
  import { PrjTab_UEx } from '@/views/Table_Field/PrjTab_UEx';
  import PrjTab_EditCom from '@/views/Table_Field/PrjTab_Edit.vue';
  import PrjTab_DetailCom from '@/views/Table_Field/PrjTab_Detail.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refPrjTab_Edit2,
    refPrjTab_Detail,
  } from '@/views/Table_Field/PrjTab_UVueShare';

  import {
    refPrjTab_Edit,
    refPrjTab_Detail as refPrjTab_Detail_CRUD,
    PrjId_Session,
    CmPrjId_Local,
    TabId_Static,
    FeatureTypeId_Static,
    Bool_True_Default,
  } from '@/views/Table_Field/PrjTabVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { enumPrjFeatureType } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';

  export default defineComponent({
    name: 'PrjTabU',
    components: {
      // 组件注册
      PrjTab_EditCom,
      PrjTab_DetailCom,
    },
    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      TabId_Static.value = '';
      FeatureTypeId_Static.value = enumPrjFeatureType.TabFeature_03;
      Bool_True_Default.value = true;
      const strTitle = ref('工程表编辑1');

      const refDivDataLst = ref();
      onMounted(async () => {
        // console.log('refPrjTabU.value', refPrjTabU.value);
        refPrjTab_Detail_CRUD.value = refPrjTab_Detail.value;
        refPrjTab_Edit.value = refPrjTab_Edit2.value;
        // const objPage = new PrjTab_UEx();
        // await objPage.PageLoadCache();
        //this.myonload();
      });
      const ShowDetail = async () => {
        const objPage = new PrjTab_UEx();
        await objPage.PageLoadCache();
      };
      const btnShowDetail = async () => {
        refPrjTabU.value.ShowDetail();
      };
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
        PrjTab_UEx.btn_Click(strCommandName, strKeyId);
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
        refPrjTab_Edit2,
        refPrjTab_Detail,
        ShowDetail,
        btnShowDetail,
        refPrjTab_Edit,
      };
    },
    watch: {
      // 数据监听
    },
    methods: {
      async ShowDetail1() {
        const objPage = new PrjTab_UEx();
        await objPage.PageLoadCache();
      },
    },
  });
</script>
<style scoped></style>
