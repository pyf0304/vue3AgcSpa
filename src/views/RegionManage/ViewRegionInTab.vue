<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!-- 标题层 -->

    <div name="" style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5"> 界面区域设置 </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!-- 功能区 -->

    <div
      id="divFunction"
      ref="refDivFunction"
      name="divFunction"
      class="table table-bordered table-hover"
    >
      <ul name="" class="nav">
        <li name="" class="nav-item">
          <label
            id="lblViewRegionList"
            name="lblViewRegionList"
            class="col-form-label-sm text-info"
            style="width: 250px"
          >
            界面区域列表0
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddRelaViewRegion"
            name="btnAddRelaViewRegion"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddRelaViewRegion', '')"
            >添加相关界面区域</button
          >
        </li>
        <li name="" class="nav-item ml-3">
          <button
            id="btnAddNewRecord"
            name="btnAddNewRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddNewRecord', '')"
            >添加</button
          >
        </li>
        <li name="" class="nav-item ml-3">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li name="" class="nav-item ml-3">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li name="" class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              id="btnSetInUse"
              name="btnSetInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetInUse', '')"
              >启用</button
            >
            <button
              id="btnSetNotInUse"
              name="btnSetNotInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetNotInUse', '')"
              >不用</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlTabId_SetFldValue"
              name="ddlTabId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 100px"
            ></select>
            <button
              id="btnSetTabId"
              name="btnSetTabId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetTabId', '')"
              >设置表</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            type="submit"
            name="btnQuery"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            type="submit"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
      </ul>
    </div>
    <!-- 列表层 -->
    <div id="divList" ref="refDivList" class="div_List">
      <div
        id="divDataLst"
        ref="refDivDataLst"
        class="div_List"
        style="height: 600px; overflow: auto"
      >
      </div>
      <div id="divPager" class="pager" value="1"> </div>
    </div>
    <div id="divEdit_Region" value="1"></div>
    <!-- 编辑层 -->
    <ViewRegion_EditCom ref="refViewRegion_Edit_Sim"></ViewRegion_EditCom>
    <ViewRegion_MultiCreateCom ref="ViewRegion_MultiCreateRef"></ViewRegion_MultiCreateCom>
    <ViewRegion_AddRelaCom ref="refViewRegionRela_Edit"></ViewRegion_AddRelaCom>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidUserId" type="hidden" value="@Model.seUserId" />
    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortViewRegionBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { ViewRegionInTab } from '@/views/RegionManage/ViewRegionInTab';

  import ViewRegion_EditCom from '@/views/RegionManage/ViewRegion_Edit.vue';
  import ViewRegion_MultiCreateCom from '@/views/RegionManage/ViewRegion_MultiCreate.vue';
  import ViewRegion_AddRelaCom from '@/views/RegionManage/ViewRegion_AddRela.vue';

  import { ViewRegion_MultiCreateEx } from '@/views/RegionManage/ViewRegion_MultiCreateEx';

  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    PrjId_Session,
    CmPrjId_Local,
    ViewId_Main_Session,
    refViewRegionRela_Edit,
  } from '@/views/RegionManage/ViewRegionRelaVueShare';
  import { refViewRegion_Edit_Sim } from '@/views/RegionManage/ViewRegion_UVueShare';
  import {
    refViewRegion_Edit,
    PrjId_Session as PrjId_Session_ViewRegion,
  } from '@/views/RegionManage/ViewRegionVueShare';

  export default defineComponent({
    name: 'ViewRegionInTab',
    components: {
      // 组件注册
      ViewRegion_EditCom,
      ViewRegion_MultiCreateCom,
      ViewRegion_AddRelaCom,
    },
    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      PrjId_Session_ViewRegion.value = clsPrivateSessionStorage.currSelPrjId;
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      ViewId_Main_Session.value = clsPrivateSessionStorage.viewId_Main;

      const strTitle = ref('界面区域维护');

      const ViewRegion_MultiCreateRef = ref();
      // const ViewRegion_AddRelaRef = ref();

      const refDivDataLst = ref();
      onMounted(() => {
        refViewRegion_Edit.value = refViewRegion_Edit_Sim.value;
        const objPage = new ViewRegionInTab();

        objPage.PageLoad();
        //this.myonload();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        // console.log(strKeyId);
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'AddNewRecord':
            break;
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'AddRelaViewRegion': //自定义功能
            ViewRegionInTab.Edit_MultiCreateRef = ViewRegion_MultiCreateRef;
            ViewRegion_MultiCreateEx.Edit_MultiCreateRef = ViewRegion_MultiCreateRef;
            break;
          default:
            break;
        }
        ViewRegionInTab.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refViewRegion_Edit_Sim,
        ViewRegion_MultiCreateRef,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refViewRegionRela_Edit,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>

<!-- <script>

    var strUrl_Session_SetString = "@Model.Url_Session_SetString";
    var strUrl_Session_GetString = "@Model.Url_Session_GetString";
        /**
      按钮单击,用于调用Js函数中btn_Click
     (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
     **/
        function btn_Click(strCommandName, strKeyId) {
            require(["../js/RegionManage/ViewRegionInTab.js"], function (viewregion) {
                viewregion.ViewRegionInTab.btn_Click(strCommandName, strKeyId, refDivLayout.value);
            });
        }

     /*
      页面导入-在导入页面后运行的函数
     (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_Page_Load)
     */
    window.onload = function() {
       require(["../js/RegionManage/ViewRegionInTab.js"], function(viewregion) {

           var objPage = new viewregion.ViewRegionInTab();
           objPage.Page_Load();
    });
    }
</script> -->
