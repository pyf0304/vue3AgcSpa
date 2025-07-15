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
          <td class="text-left">
            <label
              id="lblDataNodeId_q"
              name="lblDataNodeId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              结点Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDataNodeId_q"
              v-model="dataNodeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-left">
            <label
              id="lblDataNodeName_q"
              name="lblDataNodeName_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              结点名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDataNodeName_q"
              v-model="dataNodeName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-left">
            <label
              id="lblTabId_q"
              name="lblTabId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabId_q"
              v-model="tabId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
          <td class="text-left">
            <label
              id="lblFldId_q"
              name="lblFldId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              字段
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFldId_q"
              v-model="fldId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>
        <tr>
          <td class="text-left">
            <label
              id="lblTabName_q"
              name="lblTabName_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              表名
            </label>
          </td>
          <td class="text-left">
            <input id="txtTabName_q" class="form-control form-control-sm" style="width: 120px" />
          </td>
          <td class="text-left">
            <label
              id="lblFldName_q"
              name="lblFldName_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              字段名
            </label>
          </td>
          <td class="text-left">
            <input id="txtFldName_q" class="form-control form-control-sm" style="width: 120px" />
          </td>
          <td class="text-left">
            <label
              id="lblDataNodeTypeId_q"
              name="lblDataNodeTypeId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              结点类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDataNodeTypeId_q"
              v-model="dataNodeTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrDataNodeType"
                :key="index"
                :value="item.dataNodeTypeId"
              >
                {{ item.dataNodeTypeName }}
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
          <td class="text-left">
            <button
              id="btnQuery"
              type="submit"
              name="btnQuery"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>

          <td class="text-left">
            <button
              id="btnExportExcel"
              type="submit"
              name="btnExportExcel"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
            >
          </td>

          <td class="text-left">
            <button
              id="btnReFreshCache"
              name="btnReFreshCache"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('ReFreshCache', '')"
              >刷新</button
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
            id="lblDataNodeList"
            name="lblDataNodeList"
            class="col-form-label-sm text-info"
            style="width: 250px"
          >
            数据结点列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddNewRecordWithMaxId"
            name="btnAddNewRecordWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddNewRecordWithMaxId', '')"
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
          <button
            id="btnImportNode4KeyAndName"
            name="btnImportNode4KeyAndName"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('ImportNode4KeyAndName', '')"
            >导入关键结点与名称结点</button
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnImportSameSourceBy4KeyNode"
            name="btnImportSameSourceBy4KeyNode"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('ImportSameSourceBy4KeyNode', '')"
            >导入关键结点的同源结点</button
          >
        </li>

        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlConnectedNode"
              name="ddlConnectedNode"
              class="form-control form-control-sm"
              style="width: 100px"
            ></select>
            <button
              id="btnGetConnectedNode"
              name="btnGetConnectedNode"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GetConnectedNode', '')"
              >获取连接的结点</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCheckDataNodeByCmPrjId"
            name="btnCheckDataNodeByCmPrjId"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('CheckDataNodeByCmPrjId', '')"
            >检查结点逻辑</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortDataNodeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <DataNode_EditCom ref="refDataNode_Edit"></DataNode_EditCom>
    <!--详细信息层-->
    <DataNode_DetailCom ref="refDataNode_Detail"></DataNode_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
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
    refDataNode_Edit,
    refDataNode_Detail,
    refDataNode_List,
    showErrorMessage,
    dataListDataNode,
    emptyRecNumInfo,
    PrjId_Session,
    TabId_Static,
    CmPrjId_Local,
    dataNodeId_q,
    dataNodeName_q,
    tabId_q,
    fldId_q,
    prjId_q,
    dataNodeTypeId_q,
  } from '@/views/AIModule/DataNodeVueShare';
  import DataNodeCRUDEx from '@/views/AIModule/DataNodeCRUDEx';
  import DataNode_EditCom from '@/views/AIModule/DataNode_Edit.vue';
  import DataNode_DetailCom from '@/views/AIModule/DataNode_Detail.vue';
  // import DataNode_ListCom from '@/views/AIModule/DataNode_List.vue';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsDataNodeTypeEN } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';
  import { DataNodeType_GetObjLstCache } from '@/ts/L3ForWApi/AIModule/clsDataNodeTypeWApi';
  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  export default defineComponent({
    name: 'DataNodeCRUD',
    components: {
      // 组件注册
      DataNode_EditCom,
      DataNode_DetailCom,
      // DataNode_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      TabId_Static.value = '';
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;

      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[]>([]);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[]>([]);
      const arrDataNodeType = ref<clsDataNodeTypeEN[]>([]);

      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
      // async function getArrvFieldTab_Sim(strPrjId: string) {
      //   let arrObjLstSel = await vFieldTab_Sim_GetObjLstCache(strPrjId);
      //   if (arrObjLstSel == null) return;
      //   arrvFieldTab_Sim.value.length = 0;
      //   const obj0 = new clsvFieldTab_SimEN();
      //   obj0.fldId = '0';
      //   obj0.fldName = '请选择v字段表_Sim...';
      //   arrvFieldTab_Sim.value.push(obj0);
      //   arrObjLstSel = arrObjLstSel.sort((x, y) => x.fldName.localeCompare(y.fldName));
      //   arrObjLstSel.forEach((x) => arrvFieldTab_Sim.value.push(x));
      //   fldId_q.value = '0';
      // }
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_GetDdlData)
 * @param objDDL:需要绑定当前表的下拉框

*/
      async function getArrDataNodeType() {
        const arrObjLstSel = await DataNodeType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrDataNodeType.value.length = 0;
        const obj0 = new clsDataNodeTypeEN();
        obj0.dataNodeTypeId = '0';
        obj0.dataNodeTypeName = '请选择数据结点类型...';
        arrDataNodeType.value.push(obj0);
        arrObjLstSel.forEach((x) => arrDataNodeType.value.push(x));
        dataNodeTypeId_q.value = '0';
      }

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        // const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        // const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache(strCmPrjId);

        // await getArrvFieldTab_Sim(strTabId_Static, strPrjId); //查询区域

        await getArrDataNodeType(); //查询区域
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('数据结点维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        DataNodeCRUDEx.vuebtn_Click = btn_Click;
        DataNodeCRUDEx.GetPropValue = GetPropValue;
        const objPage = new DataNodeCRUDEx();
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
        DataNodeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListDataNode,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refDataNode_Edit,
        refDataNode_Detail,
        refDataNode_List,
        dataNodeId_q,
        dataNodeName_q,
        tabId_q,
        fldId_q,
        prjId_q,
        dataNodeTypeId_q,
        arrvPrjTab_Sim,
        arrvFieldTab_Sim,
        arrDataNodeType,
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
        router.push({ name: 'editDataNode', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new DataNodeCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
<!-- <script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import DataNodeCRUDEx  from '@/views/AIModule/DataNodeCRUDEx';
  import DataNode_EditCom from '@/views/AIModule/DataNode_Edit.vue';
  import DataNode_DetailCom from '@/views/AIModule/DataNode_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refDataNode_Detail,
    refDataNode_Edit,
  } from '@/views/AIModule/DataNodeVueShare';
  export default defineComponent({
    name: 'DataNodeCRUD',
    components: {
      // 组件注册
      DataNode_EditCom,
      DataNode_DetailCom,
    },
    setup() {
      const strTitle = ref('数据结点维护');

      const refDivDataLst = ref();

      onMounted(() => {
        const objPage = new DataNodeCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
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
        DataNodeCRUDEx.btn_Click(strCommandName, strKeyId);
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
        refDataNode_Edit,
        refDataNode_Detail,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
  });
</script>
<style scoped></style>
@/viewsBase/AIModule/DataNode_Detail -->
