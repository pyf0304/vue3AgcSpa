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
              id="lblDnPathName_q"
              name="lblDnPathName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >DN路径名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDnPathName_q"
              v-model="dnPathName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblInDataNodeId_q"
              name="lblInDataNodeId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              In表名
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInTabId_q"
              name="ddlInTabId_q"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblInDataNodeId_q"
              name="lblInDataNodeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >In数据结点Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInDataNodeId_q"
              v-model="inDataNodeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrvDataNode_Sim"
                :key="index"
                :value="item.dataNodeId"
              >
                {{ item.dataNodeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblOutDataNodeId_q"
              name="lblOutDataNodeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >Out结点
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutDataNodeId_q"
              v-model="outDataNodeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrvDataNode_Sim"
                :key="index"
                :value="item.dataNodeId"
              >
                {{ item.dataNodeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblAssociationMappingId_q"
              name="lblAssociationMappingId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >关联映射模式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlAssociationMappingId_q"
              v-model="associationMappingId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrAssociationMapping"
                :key="index"
                :value="item.associationMappingId"
              >
                {{ item.associationMappingName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblIsHasErr_q"
              name="lblIsHasErr_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              是否有错
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIsHasErr_q"
              name="ddlIsHasErr_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblIsHasErr_q"
              name="lblIsHasErr_q"
              class="col-form-label text-right"
              style="width: 90px"
              >是否有错
            </label>
          </td>
          <td class="text-left"> </td>
          <td class="text-right">
            <label
              id="lblInUse_q"
              name="lblInUse_q"
              class="col-form-label text-right"
              style="width: 90px"
              >是否在用
            </label>
          </td>
          <td class="text-left"> </td>
          <td class="text-right">
            <label
              id="lblInUse_q"
              name="lblInUse_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              是否在用
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInUse_q"
              name="ddlInUse_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left" colSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsShowNoNeedPath"
                type="checkbox"
                name="chkIsShowNoNeedPath"
                Text="是否显示无需建立的路径"
              /><label for="chkIsShowNoNeedPath">显示无需建立的路径</label>
            </span>
          </td>
          <td class="text-left" colSpan="2">
            <ul class="list-unstyled" style="line-height: 15px; text-align: left">
              <li class="list-item">
                <span class="form-control form-control-sm" style="width: 160px">
                  <input
                    id="chkIsShowDuplicate"
                    type="checkbox"
                    name="chkIsShowDuplicate"
                    Text="显示重复的路径"
                  /><label for="chkIsShowDuplicate">显示重复的路径</label>
                </span>
              </li>
              <li class="list-item">
                <span
                  title="仅仅显示与当前子工程相关路径"
                  style="display: inline-block; width: 160px"
                >
                  <input
                    id="chkShowCurrCmPrjId_q"
                    type="checkbox"
                    checked="true"
                    name="chkShowCurrCmPrjId_q"
                  />
                  <label for="chkShowCurrCmPrjId_q">显示子工程相关路径</label>
                </span>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblDnPathList"
            name="lblDnPathList"
            class="col-form-label text-info"
            style="width: 250px"
            >数据结点路径列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
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
            @click="btn_Click('DelDnPath', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
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
    <!-- <div id="divList" ref="refDivList" class="div_List">
      <DnPath_ListCom
        ref="refDnPath_List"
        :items="dataListDnPath"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </DnPath_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortDnPathBy" type="hidden" />
    </div> -->
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortDnPathBy" type="hidden" />
    </div>
    <!--编辑层-->
    <DnPath_EditCom ref="refDnPath_Edit"></DnPath_EditCom>
    <!--详细信息层-->
    <DnPath_DetailCom ref="refDnPath_Detail"></DnPath_DetailCom>
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
    refDnPath_Edit,
    refDnPath_Detail,
    refDnPath_List,
    showErrorMessage,
    dataListDnPath,
    emptyRecNumInfo,
    PrjId_Session,
    CmPrjId_Local,
    dnPathName_q,
    inDataNodeId_q,
    outDataNodeId_q,
    associationMappingId_q,
    prjId_q,
    isHasErr_q,
    inUse_q,
  } from '@/views/AIModule/DnPathVueShare';
  import DnPathCRUDEx from '@/views/AIModule/DnPathCRUDEx';
  import DnPath_EditCom from '@/views/AIModule/DnPath_Edit.vue';
  import DnPath_DetailCom from '@/views/AIModule/DnPath_Detail.vue';
  // import DnPath_ListCom from '@/views/AIModule/DnPath_List.vue';
  import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
  import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
  import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import { vDataNode_Sim_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
  import { AssociationMapping_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
  export default defineComponent({
    name: 'DnPathCRUD',
    components: {
      // 组件注册
      DnPath_EditCom,
      DnPath_DetailCom,
      // DnPath_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;

      const arrvDataNode_Sim = ref<clsvDataNode_SimEN[]>([]);
      const arrAssociationMapping = ref<clsAssociationMappingEN[]>([]);
      /**
     * 获取绑定下拉框的数据
     * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
     * @param objDDL:需要绑定当前表的下拉框
    
     * @param strCmPrjId:
     * @param strPrjId:
    */
      async function getArrvDataNode_Sim(strCmPrjId: string, strPrjId: string) {
        let arrObjLstSel = await vDataNode_Sim_GetObjLstCache(strPrjId);
        if (arrObjLstSel == null) return;
        arrvDataNode_Sim.value.length = 0;
        const obj0 = new clsvDataNode_SimEN();
        obj0.dataNodeId = 0;
        obj0.dataNodeName = '请选择vDataNode_Sim...';
        arrvDataNode_Sim.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.dataNodeName.localeCompare(y.dataNodeName));
        arrObjLstSel.forEach((x) => arrvDataNode_Sim.value.push(x));
        inDataNodeId_q.value = 0;
      }
      /**
     * 获取绑定下拉框的数据
     * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
     * @param objDDL:需要绑定当前表的下拉框
    
    */
      async function getArrAssociationMapping() {
        let arrObjLstSel = await AssociationMapping_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrAssociationMapping.value.length = 0;
        const obj0 = new clsAssociationMappingEN();
        obj0.associationMappingId = '0';
        obj0.associationMappingName = '请选择关联关系映射...';
        arrAssociationMapping.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) =>
          x.associationMappingName.localeCompare(y.associationMappingName),
        );
        arrObjLstSel.forEach((x) => arrAssociationMapping.value.push(x));
        associationMappingId_q.value = '0';
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        await getArrvDataNode_Sim(strCmPrjId, strPrjId); //查询区域

        await getArrAssociationMapping(); //查询区域

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsHasErr_q');

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlInUse_q');
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('数据结点路径维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        DnPathCRUDEx.vuebtn_Click = btn_Click;
        DnPathCRUDEx.GetPropValue = GetPropValue;
        const objPage = new DnPathCRUDEx();
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
        DnPathCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListDnPath,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refDnPath_Edit,
        refDnPath_Detail,
        refDnPath_List,
        dnPathName_q,
        inDataNodeId_q,
        outDataNodeId_q,
        associationMappingId_q,
        prjId_q,
        isHasErr_q,
        inUse_q,
        arrvDataNode_Sim,
        arrAssociationMapping,
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
        router.push({ name: 'editDnPath', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new DnPathCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
