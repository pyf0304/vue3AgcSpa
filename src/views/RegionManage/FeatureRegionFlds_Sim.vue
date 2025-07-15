<template>
  <div id="divLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblFeatureRegionFldsList"
            name="lblFeatureRegionFldsList"
            class="col-form-label text-info"
            style="width: 250px"
            >功能区域字段列表
          </label>
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
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              id="btnGoTop"
              name="btnGoTop"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('GoTop', '')"
              >移顶</button
            >
            <button
              id="btnUpMove"
              name="btnUpMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('UpMove', '')"
              >上移</button
            >
            <button
              id="btnDownMove"
              name="btnDownMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('DownMove', '')"
              >下移</button
            >
            <button
              id="btnGoBottum"
              name="btnGoBottum"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('GoBottum', '')"
              >移底</button
            >
            <button
              id="btnReOrder"
              name="btnReOrder"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('ReOrder', '')"
              >重序</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <input
              id="txtGroupName_SetFldValue"
              name="txtGroupName_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            />
            <button
              id="btnSetGroupName"
              name="btnSetGroupName"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('SetGroupName', '')"
              >设置组名</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              id="btnSetInUse"
              name="btnSetInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('SetInUse', '')"
              >启用</button
            >
            <button
              id="btnSetNotInUse"
              name="btnSetNotInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('SetInUse', '')"
              >不用</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlTabFeatureId_SetFldValue"
              name="ddlTabFeatureId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            ></select>
            <button
              id="btnSetTabFeatureId"
              name="btnSetTabFeatureId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('SetTabFeatureId', '')"
              >设置表功能Id</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFeatureRegionFldsBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FeatureRegionFlds_Edit_SetValueCom
      ref="FeatureRegionFlds_Edit_SetValueRef"
    ></FeatureRegionFlds_Edit_SetValueCom>
    <!--详细信息层-->
    <FeatureRegionFlds_DetailCom ref="refFeatureRegionFlds_Detail"></FeatureRegionFlds_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { FeatureRegionFlds_SimEx } from '@/views/RegionManage/FeatureRegionFlds_SimEx';
  import FeatureRegionFlds_Edit_SetValueCom from '@/views/RegionManage/FeatureRegionFlds_Edit_SetValue.vue';
  import FeatureRegionFlds_DetailCom from '@/views/RegionManage/FeatureRegionFlds_Detail.vue';
  import { refFeatureRegionFlds_Detail } from '@/views/RegionManage/FeatureRegionFldsVueShare';
  export default defineComponent({
    name: 'FeatureRegionFldsSim',
    components: {
      // 组件注册
      FeatureRegionFlds_Edit_SetValueCom,
      FeatureRegionFlds_DetailCom,
    },
    setup() {
      const strTitle = ref('功能区域字段维护');
      const FeatureRegionFlds_Edit_SetValueRef = ref();

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
        FeatureRegionFlds_SimEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btnClick,
        FeatureRegionFlds_Edit_SetValueRef,
        refFeatureRegionFlds_Detail,
      };
    },
    watch: {
      // 数据监听
    },

    methods: {},
  });
</script>
<style scoped></style>
