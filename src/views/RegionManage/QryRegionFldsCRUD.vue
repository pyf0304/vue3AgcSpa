<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!-- 标题层  -->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5"> 查询区域编辑 </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <div style="width: 100%">
      <div class="float-left ml-1" style="width: 95%">
        <div style="width: 100%" class="row">
          <ul class="nav ml-3">
            <li class="nav-item">
              <!-- <div id="divDetail4ViewRegion"> </div> -->
              <ViewRegion_Detail_SimCom ref="refViewRegion_Detail_Sim"></ViewRegion_Detail_SimCom>
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnUpdateRecord_ViewRegion"
                class="btn btn-outline-success btn-sm text-nowrap"
                @click="btn_Click('Update_ViewRegion', '')"
                >修改</button
              >
              <button
                id="btnVisualEffects"
                class="btn btn-outline-success btn-sm text-nowrap"
                @click="btn_Click('VisualEffects', '')"
                >可视化</button
              >
              <button
                id="btnTogglePropertyPanel"
                class="btn btn-outline-secondary btn-sm text-nowrap"
                @click="toggleMainEditor"
                >{{ showMainEditor ? '隐藏属性' : '显示属性' }}</button
              >
              <button
                id="btnToggleCodeGenPanel"
                class="btn btn-outline-secondary btn-sm text-nowrap"
                @click="toggleCodeGen"
                >{{ showCodeGen ? '隐藏生成代码' : '显示生成代码' }}</button
              >
              <button
                id="btnUpdateRecord_ViewRegion"
                class="btn btn-outline-success btn-sm text-nowrap"
                @click="btn_Click('seeDiv', '')"
                >查看Div</button
              >
            </li>
          </ul>
        </div>
        <!-- 功能区  -->
        <div id="divFunction" ref="refDivFunction1" class="table table-bordered table-hover mt-1">
          <ul class="nav">
            <li class="nav-item">
              <label
                id="lblQryRegionFldsList"
                name="lblQryRegionFldsList"
                class="col-form-label text-info"
                style="width: 100px"
              >
                功能操作:
              </label>
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnAddNewRecord"
                name="btnAddNewRecord"
                class="btn btn-outline-success btn-sm text-nowrap"
                @click="btn_Click('Create', '')"
                >添加</button
              >
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnUpdateRecord"
                name="btnUpdateRecord"
                class="btn btn-outline-success btn-sm text-nowrap"
                @click="btn_Click('Update', '')"
                >修改</button
              >
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnDelRecord"
                name="btnDelRecord"
                class="btn btn-outline-success btn-sm text-nowrap"
                @click="btn_Click('Delete', '')"
                >删除</button
              >
            </li>

            <li class="nav-item ml-3">
              <button
                id="btnCopyFldFromRelaTab"
                name="btnCopyFldFromRelaTab"
                class="btn btn-outline-success btn-sm text-nowrap"
                @click="btn_Click('CopyFldFromRelaTab', '')"
                >复制表字段</button
              >
            </li>
            <li class="nav-item ml-3">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button
                  id="btnSetInUse"
                  name="btnSetInUse"
                  class="btn btn-outline-success btn-sm text-nowrap"
                  @click="btn_Click('SetInUse', '')"
                  >使用</button
                >
                <button
                  id="btnSetNotInUse"
                  name="btnSetNotInUse"
                  class="btn btn-outline-success btn-sm text-nowrap"
                  @click="btn_Click('SetNotInUse', '')"
                  >不用</button
                >
              </div>
            </li>
            <li class="nav-item ml-3">
              <div class="btn-group" role="group" aria-label="Basic example">
                <input
                  id="txtColSpan_SetFldValue"
                  name="txtColSpan_SetFldValue"
                  class="form-control form-control-sm"
                  style="width: 100px"
                />
                <button
                  id="btnSetColSpan"
                  name="btnSetColSpan"
                  class="btn btn-outline-success btn-sm text-nowrap"
                  @click="btn_Click('SetColSpan', '')"
                  >设置跨列数</button
                >
              </div>
            </li>
            <li class="nav-item ml-3">
              <div class="btn-group" role="group" aria-label="Basic example">
                <input
                  id="txtWidth_SetFldValue"
                  name="txtWidth_SetFldValue"
                  class="form-control form-control-sm"
                  style="width: 100px"
                />
                <button
                  id="btnSetWidth"
                  name="btnSetWidth"
                  class="btn btn-outline-success btn-sm text-nowrap"
                  @click="btn_Click('SetWidth', '')"
                  >设置宽</button
                >
              </div>
            </li>
            <li class="nav-item ml-3">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button
                  id="btnGoTop"
                  name="btnGoTop"
                  class="btn btn-outline-success btn-sm text-nowrap"
                  @click="btn_Click('GoTop', '')"
                  >移顶</button
                >
                <button
                  id="btnUpMove"
                  name="btnUpMove"
                  class="btn btn-outline-success btn-sm text-nowrap"
                  @click="btn_Click('UpMove', '')"
                  >上移</button
                >
                <button
                  id="btnDownMove"
                  name="btnDownMove"
                  class="btn btn-outline-success btn-sm text-nowrap"
                  @click="btn_Click('DownMove', '')"
                  >下移</button
                >
                <button
                  id="btnGoBottum"
                  name="btnGoBottum"
                  class="btn btn-outline-success btn-sm text-nowrap"
                  @click="btn_Click('GoBottum', '')"
                  >移底</button
                >
                <button
                  id="btnReOrder"
                  name="btnReOrder"
                  class="btn btn-outline-success btn-sm text-nowrap"
                  @click="btn_Click('ReOrder', '')"
                  >重序</button
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="float-left ml-2" style="width: 96%">
        <div class="tab-header">
          <div
            v-for="tab in showTabs"
            :key="tab.id"
            :class="{ active: tab.id === showActiveTabId }"
            @click="showChangeTab(tab.id)"
          >
            {{ tab.label }}
          </div>
        </div>

        <div class="tab-content">
          <div v-if="showActiveTabId === 'tab3'">
            <keep-alive>
              <div id="divVisualEffects" ref="refDivVisualEffects" class="myBorder"></div>
            </keep-alive>
          </div>
          <div v-if="showActiveTabId === 'tab4'">
            <keep-alive>
              <div id="divList" ref="refDivList" class="small overflow-hidden">
                <div
                  id="divDataLst"
                  ref="refDivDataLst"
                  class="div_List"
                  style="height: 600px; overflow: auto"
                >
                </div>
                <div id="divPager" class="pager"> </div>
              </div>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>

    <div
      v-show="showMainEditor || showCodeGen"
      id="divEdit_CodeGene"
      class="qry-right-panel"
      style="width: 420px"
    >
      <div class="qry-right-panel-content">
        <div v-show="showMainEditor" class="d-flex justify-content-between align-items-center my-2">
          <div class="h6 mb-0">属性区</div>
          <button class="btn btn-outline-secondary btn-sm" @click="toggleMainEditor">隐藏</button>
        </div>

        <div class="tab-content">
          <div v-show="showMainEditor">
            <QryRegionFlds_EditCom
              ref="refQryRegionFlds_Edit"
              :is-dialog="false"
            ></QryRegionFlds_EditCom>
          </div>

          <div v-show="showCodeGen" class="mt-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="h6 mb-0">生成代码</div>
              <button class="btn btn-outline-secondary btn-sm" @click="toggleCodeGen">隐藏</button>
            </div>

            <div>
              <div class="mb-2">
                <div>
                  <span class="text-muted">应用类型:</span>
                  <span id="lblCurrAppType_QryRegion">-</span>
                </div>
                <div>
                  <span class="text-muted">前端工程:</span>
                  <span id="lblCurrFrontend_QryRegion">-</span>
                </div>
                <div>
                  <span class="text-muted">当前机器:</span>
                  <span id="lblCurrMachine_QryRegion">-</span>
                </div>
                <div>
                  <span class="text-muted">区域类型:</span>
                  <span id="lblCurrRegionType_QryRegion">查询区(0001)</span>
                </div>
                <div>
                  <span class="text-muted">生成进度:</span>
                  <span id="lblGeneProgress_QryRegion">未开始</span>
                </div>
              </div>
              <div id="divCodeTypeLst"></div>
              <div>
                <span id="lblResult" class="text-warning"></span><br />
                <input
                  id="lblClassName"
                  type="text"
                  class="Content"
                  style="width: 100%; height: 24px"
                  Text="结果"
                />
                <br />
                <span id="lblResult" class="text-warning"></span>
                <span class="text-warning">文件名</span><br />
                <input
                  id="lblFileName"
                  type="text"
                  class="text-info"
                  style="width: 100%"
                  value="结果"
                />
                <span class="text-warning">生成的代码</span><br />
                <textarea id="txtCodeText" style="width: 100%; height: 720px"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 编辑层  -->
    <div id="divEdit"> </div>
    <ViewRegion_Edit_SimCom ref="refViewRegion_Edit_Sim"></ViewRegion_Edit_SimCom>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidUserId" type="hidden" value="@Model.seUserId" />
    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortQryRegionFldsBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';

  import QryRegionFldsCRUDEx from '@/views/RegionManage/QryRegionFldsCRUDEx';
  import ViewRegion_Detail_SimCom from '@/views/RegionManage/ViewRegion_Detail_Sim.vue';
  import QryRegionFlds_EditCom from '@/views/RegionManage/QryRegionFlds_Edit.vue';

  import ViewRegion_Edit_SimCom from '@/views/RegionManage/ViewRegion_Edit_Sim.vue';
  import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';
  // import { useDivVarSetStore } from '@/store/divVarSet';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    RegionId_Static,
    TabId_Static,
    CmPrjId_Local,
    refQryRegionFlds_Edit,
  } from '@/views/RegionManage/QryRegionFldsVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    refViewRegion_Detail_Sim,
    refViewRegion_Edit_Sim,
  } from '@/views/RegionManage/ViewRegion_UVueShare';

  export default defineComponent({
    name: 'QryRegionFldsCRUDCom',
    components: {
      // 组件注册
      //   QryRegionFlds_EditCom,
      QryRegionFlds_EditCom,
      ViewRegion_Detail_SimCom,
      ViewRegion_Edit_SimCom,
    },
    setup() {
      TabId_Static.value = clsPrivateSessionStorage.tabId_Main;
      console.log('TabId_Static:', TabId_Static.value);
      RegionId_Static.value = '';
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;

      const showMainEditor = ref(true);
      const showCodeGen = ref(true);

      const toggleMainEditor = () => {
        showMainEditor.value = !showMainEditor.value;
      };

      const toggleCodeGen = () => {
        showCodeGen.value = !showCodeGen.value;
      };
      const showTabs = [
        { id: 'tab3', label: '可视化区域' },
        { id: 'tab4', label: '数据列表' },
      ];
      const showActiveTabId = ref('tab3');
      const showChangeTab = (tabId: string) => {
        showActiveTabId.value = tabId;

        switch (tabId) {
          case 'tab3':
            setTimeout(VisualEffectsOnly, 100);
            break;
          case 'tab4':
            setTimeout(BindOnlyGv, 100);
            break;
        }
      };
      const VisualEffectsOnly = () => {
        QryRegionFldsCRUDEx.divVisualEffects = refDivVisualEffects.value;
        QryRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.VisualEffects_01;
        const objPage = new QryRegionFldsCRUDEx();
        objPage.VisualEffects(QryRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      };
      const BindOnlyGv = () => {
        QryRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.DataList_02;

        const objPage = new QryRegionFldsCRUDEx();

        objPage.BindOnlyGv();
      };
      const strTitle = ref('查询区域字段维护');

      const refDivVisualEffects = ref();

      const refDivDataLst = ref();
      onMounted(async () => {
        QryRegionFldsCRUDEx.GetPropValueV2 = GetPropValue;
        QryRegionFldsCRUDEx.divVisualEffects = refDivVisualEffects.value;

        // ViewRegion_Detail_Sim.divDetail = refViewRegion_Detail_Sim.value.$refs.refDivDetail;
        QryRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.VisualEffects_01;
        const objPage = new QryRegionFldsCRUDEx();
        await objPage.PageLoadCache();
        setTimeout(() => {
          try {
            objPage.btnCodeGene_Click();
          } catch (e) {
            console.error('QryRegionFldsCRUD.btnCodeGene_Click', e);
          }
        }, 200);
        console.log('refDivLayout0:', refDivLayout.value);
        console.log('divVarSet.refDivLayout1:', divVarSet.refDivLayout);

        console.log('refDivQuery:', divVarSet.refDivQuery);
        console.log('refDivFunction:', divVarSet.refDivFunction);
        console.log('refDivList:', divVarSet.refDivList);
      });
      function GetPropValue(strPropName: string): any {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'editDiv':
            return refQryRegionFlds_Edit.value.refDivEdit;
          case 'viewRegionDetailDiv':
            return refViewRegion_Detail_Sim.value.refDivDetail;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'seeDiv':
            console.log('refDivLayout0:', refDivLayout.value);
            console.log('divVarSet.refDivLayout1:', divVarSet.refDivLayout);
            // console.log('refDivFunction1:', refDivFunction1.value);

            return;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            showMainEditor.value = true;
            break;
          case 'Update_ViewRegion':
            QryRegionFldsCRUDEx.EditRegionRef = refViewRegion_Edit_Sim;

            break;
          default:
            break;
        }
        QryRegionFldsCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        refViewRegion_Detail_Sim,
        refViewRegion_Edit_Sim,
        refDivVisualEffects,
        refDivDataLst,

        showMainEditor,
        showCodeGen,
        toggleMainEditor,
        toggleCodeGen,
        showTabs,
        showActiveTabId,
        showChangeTab,
        GetPropValue,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refQryRegionFlds_Edit,
        // ...store,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style>
  .tab-header {
    display: flex;
  }

  .tab-header div {
    padding: 10px;
    cursor: pointer;
  }

  .tab-header div.active {
    background-color: #ccc;
  }

  .tab-content {
    margin-top: 10px;
  }
  /* Styling the select box */
  select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    width: 200px;
  }

  /* Styling the dropdown arrow */
  select::-ms-expand {
    display: none; /* Hide the default arrow in Internet Explorer */
  }

  select::after {
    content: '\25BE'; /* Unicode code for down arrow */
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .selected-td {
    background-color: #e6c3c3; /* Set your desired background color */
  }

  .qry-right-panel {
    position: fixed;
    top: 4px;
    right: 8px;
    z-index: 2000;
    height: calc(100vh - 24px);
    min-height: 860px;
    background: #fff;
    border: 1px solid #d8d8d8;
    border-radius: 6px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    padding: 6px;
  }

  .qry-right-panel-content {
    height: 100%;
    overflow: auto;
    padding-right: 2px;
  }
</style>
