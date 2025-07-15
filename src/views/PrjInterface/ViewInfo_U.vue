<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblViewInfoList"
            name="lblViewInfoList"
            class="col-form-label-sm text-info"
            style="width: 250px"
          >
            界面列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortViewInfoBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ViewInfo_EditCom ref="refViewInfo_Edit2"></ViewInfo_EditCom>
    <!--详细信息层-->
    <ViewInfo_DetailCom ref="refViewInfo_Detail" :is-dialog="false"></ViewInfo_DetailCom>
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
  import ViewInfo_UEx from '@/views/PrjInterface/ViewInfo_UEx';
  import ViewInfo_EditCom from '@/views/PrjInterface/ViewInfo_Edit.vue';
  import ViewInfo_DetailCom from '@/views/PrjInterface/ViewInfo_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refViewInfo_Edit2,
    refViewInfo_Detail,
  } from '@/views/PrjInterface/ViewInfo_UVueShare';
  import {
    refViewInfo_Edit,
    CmPrjId_Local,
    PrjId_Session,
    UserId_Local,
    ApplicationTypeId_Static,
  } from '@/views/PrjInterface/ViewInfoVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'ViewInfoU',
    components: {
      // 组件注册
      ViewInfo_EditCom,
      ViewInfo_DetailCom,
    },
    setup() {
      const userStore = useUserStore();
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      UserId_Local.value = userStore.getUserId;
      ApplicationTypeId_Static.value = Number(clsPrivateSessionStorage.applicationTypeId);
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      const strTitle = ref('界面维护2');

      const refDivDataLst = ref();
      onMounted(() => {
        ViewInfo_UEx.GetPropValueV2 = GetPropValue;
        refViewInfo_Edit.value = refViewInfo_Edit2.value;
        const objPage = new ViewInfo_UEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function GetPropValue(strPropName: string): any {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'detailDiv':
            if (refViewInfo_Detail.value == null) return null;
            return refViewInfo_Detail.value.refDivDetail;
          case 'editlDiv':
            return refViewInfo_Edit2.value.refDivEdit;
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
        ViewInfo_UEx.btn_Click(strCommandName, strKeyId);
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
        refViewInfo_Edit2,
        refViewInfo_Detail,
        refViewInfo_Edit,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // const objPage = new ViewInfo_UEx();
      // objPage.PageLoadCache();
      //this.myonload();
    },
  });
</script>
<style scoped></style>
