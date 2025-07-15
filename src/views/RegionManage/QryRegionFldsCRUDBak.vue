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
              id="lblLabelCaption_q"
              name="lblLabelCaption_q"
              class="col-form-label text-right"
              style="width: 90px"
              >标签标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLabelCaption_q"
              v-model="labelCaption_q"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCtlTypeId_q"
              name="lblCtlTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >控件类型号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCtlTypeId_q"
              v-model="ctlTypeId_q"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                {{ item.ctlTypeName }}
              </option></select
            >
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
            id="lblQryRegionFldsList"
            name="lblQryRegionFldsList"
            class="col-form-label text-info"
            style="width: 250px"
            >查询区域字段列表
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
            id="btnCopyFldFromRelaTab"
            name="btnCopyFldFromRelaTab"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CopyFldFromRelaTab', '')"
            >复制表字段</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example"> </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example"> </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example"> </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example"> </div>
        </li>
      </ul>
    </div>
    <div class="row">
      <!--列表层-->
      <div id="divList" class="div_List col-9">
        <div id="divDataLst" class="div_List"> </div>
        <div id="divPager" class="pager"> </div>
      </div>
      <!--编辑层-->
      <div id="divEdit" class="col-3"> </div>
    </div>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refQryRegionFlds_Edit,
    showErrorMessage,
    dataListQryRegionFlds,
    emptyRecNumInfo,
    TabId_Static,
    RegionId_Static,
    CmPrjId_Local,
    labelCaption_q,
    ctlTypeId_q,
    regionId_q,
    colSpan_f,
    inUse_f,
    width_f,
    regionId_f,
  } from '@/views/RegionManage/QryRegionFldsVueShare';
  import QryRegionFldsCRUDEx from '@/views/RegionManage/QryRegionFldsCRUDEx';
  import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { CtlType_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  export default defineComponent({
    name: 'QryRegionFldsCRUD',
    components: {
      // 组件注册
      // QryRegionFlds_EditCom,
      // QryRegionFlds4GvCom,
    },

    setup() {
      TabId_Static.value = '';
      RegionId_Static.value = '';
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;

      const arrCtlType = ref<clsCtlTypeEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrCtlType() {
        let arrObjLstSel = await CtlType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrCtlType.value.length = 0;
        const obj0 = new clsCtlTypeEN();
        obj0.ctlTypeId = '0';
        obj0.ctlTypeName = '请选择控件类型缩写...';
        arrCtlType.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
        arrObjLstSel.forEach((x) => arrCtlType.value.push(x));
        ctlTypeId_q.value = '0';
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        await getArrCtlType(); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('查询区域字段维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        QryRegionFldsCRUDEx.vuebtn_Click = btn_Click;
        QryRegionFldsCRUDEx.GetPropValue = GetPropValue;
        const objPage = new QryRegionFldsCRUDEx();
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
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
        QryRegionFldsCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListQryRegionFlds,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refQryRegionFlds_Edit,
        labelCaption_q,
        ctlTypeId_q,
        regionId_q,
        colSpan_f,
        inUse_f,

        width_f,
        regionId_f,
        arrCtlType,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editQryRegionFlds', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new QryRegionFldsCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
