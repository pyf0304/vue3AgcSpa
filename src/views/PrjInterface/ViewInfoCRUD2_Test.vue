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
        id="tabQuery"
        style="width: 1000px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td>
            <label
              id="lblViewName_q"
              name="lblViewName_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              界面名称
            </label>
          </td>
          <td>
            <input
              id="txtViewName_q"
              name="txtViewName_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td>
            <label
              id="lblApplicationTypeId_q"
              name="lblApplicationTypeId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              应用
            </label>
          </td>
          <td>
            <select
              id="ddlApplicationTypeId_q"
              name="ddlApplicationTypeId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td>
            <label
              id="lblFuncModuleAgcId_q"
              name="lblFuncModuleAgcId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              模块
            </label>
          </td>
          <td>
            <select
              id="ddlFuncModuleAgcId_q"
              name="ddlFuncModuleAgcId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td>
            <label
              id="lblViewId_q"
              name="lblViewId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              界面ID
            </label>
          </td>
          <td>
            <input
              id="txtViewId_q"
              name="txtViewId_q"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label
              id="lblMainTabId_q"
              name="lblMainTabId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              主表
            </label>
          </td>
          <td>
            <select
              id="ddlMainTabId_q"
              name="ddlMainTabId_q"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>

          <td>
            <button
              id="btnQuery"
              type="submit"
              name="btnQuery"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td>
            <button
              id="btnExportExcel"
              type="submit"
              name="btnExportExcel"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
            >
          </td>
          <td>
            <span style="display: inline-block; width: 133px"
              ><input
                id="chkDispProbableErrView_q"
                type="checkbox"
                name="chkDispProbableErrView_q"
              /><label for="chkDispProbableErrView_q">显示逻辑错误表</label></span
            >
          </td>
          <td>
            <span title="仅仅显示与当前子工程相关的表" style="display: inline-block; width: 150px">
              <input
                id="chkShowCurrCmPrjId_q"
                type="checkbox"
                checked="true"
                name="chkShowCurrCmPrjId_q"
              />
              <label for="chkShowCurrCmPrjId_q">显示子工程相关表</label>
            </span>
          </td>
        </tr>
      </table>
    </div>
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
            id="btnAddNewRecord"
            name="btnAddNewRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCopyRecord"
            name="btnCopyRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制记录</button
          >
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
        <li class="nav-item ml-3">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlApplicationTypeId_SetFldValue"
              name="ddlApplicationTypeId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 100px"
            ></select>
            <button
              id="btnSetApplicationTypeId"
              name="btnSetApplicationTypeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetApplicationTypeId', '')"
              >设置应用</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlCmPrjId_SetFldValue"
              name="ddlCmPrjId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 100px"
            ></select>
            <button
              id="btnSetCmPrjId"
              name="btnSetCmPrjId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetCmPrjId', '')"
              >设置CM工程</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCheckRegionFlds"
            name="btnCheckRegionFlds"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CheckRegionFlds', '')"
            >检查界面控件</button
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
    <ViewInfo_EditCom ref="refViewInfo_Edit"></ViewInfo_EditCom>
    <!--详细信息层-->
    <ViewInfo_DetailCom ref="refViewInfo_Detail"></ViewInfo_DetailCom>
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
  import ViewInfoCRUDEx0 from '@/views/PrjInterface/ViewInfoCRUDEx0';
  import ViewInfo_EditCom from '@/views/PrjInterface/ViewInfo_Edit.vue';
  import ViewInfo_DetailCom from '@/views/PrjInterface/ViewInfo_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refViewInfo_Edit,
    refViewInfo_Detail,
  } from '@/views/PrjInterface/ViewInfoVueShare';
  export default defineComponent({
    name: 'ViewInfoCRUD',
    components: {
      // 组件注册
      ViewInfo_EditCom,
      ViewInfo_DetailCom,
    },
    setup() {
      const strTitle = ref('界面维护7');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new ViewInfoCRUDEx0();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            // ViewInfo_EditObj.showDialog();

            break;
          default:
            break;
        }
        ViewInfoCRUDEx0.btn_Click(strCommandName, strKeyId);
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
        refViewInfo_Edit,
        refViewInfo_Detail,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // const objPage = new ViewInfoCRUDEx0();
      // objPage.PageLoadCache();
      //this.myonload();
    },
    methods: {
      // 方法定义
      /**
       * 页面导入-在导入页面后运行的函数
       **/
      myonload() {
        // const objPage = new ViewInfoCRUDEx0();
        // objPage.PageLoadCache();
      },
    },
  });
</script>
<style scoped></style>
