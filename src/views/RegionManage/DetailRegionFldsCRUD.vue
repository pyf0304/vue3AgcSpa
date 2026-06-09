<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!-- 标题层 -->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5"> 详细区域字段维护 </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <div style="width: 100%">
      <div>
        <div style="width: 98%" class="row">
          <ul class="nav">
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
              ></li
            >
            <li class="nav-item ml-3">
              <button
                id="btnVisualEffects"
                class="btn btn-outline-success btn-sm text-nowrap"
                @click="btn_Click('VisualEffects', '')"
                >可视化</button
              ></li
            >
            <li class="nav-item ml-3">
              <button
                id="btnTogglePropertyPanel"
                class="btn btn-outline-secondary btn-sm text-nowrap"
                @click="toggleMainEditor"
                >{{ showMainEditor ? '隐藏属性' : '显示属性' }}</button
              >
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnToggleCodeGenPanel"
                class="btn btn-outline-secondary btn-sm text-nowrap"
                @click="toggleCodeGen"
                >{{ showCodeGen ? '隐藏生成代码' : '显示生成代码' }}</button
              >
            </li>
          </ul>
        </div>
        <!-- 功能区 -->

        <div
          id="divQuery"
          ref="refDivQuery"
          class="table table-bordered table-hover mt-1"
          style="width: 98%"
        >
          <ul class="nav">
            <li class="nav-item">
              <label
                id="lblDetailRegionFldsList"
                name="lblDetailRegionFldsList"
                class="col-form-label text-info"
                style="width: 70px"
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
                  >在用</button
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
                  style="width: 60px"
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
                  style="width: 60px"
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
              <button
                id="btnCopyFromOtherView"
                name="btnCopyFromOtherView"
                class="btn btn-outline-success btn-sm text-nowrap"
                @click="btn_Click('CopyFromOtherView', '')"
                >从界面复制</button
              >
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
      <div style="width: 100%">
        <div style="width: 100%" class="float-left">
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
    </div>

    <div
      v-show="showMainEditor || showCodeGen"
      id="divEdit_CodeGene"
      class="detail-right-panel"
      style="width: 420px"
    >
      <div class="detail-right-panel-content">
        <div v-show="showMainEditor" class="d-flex justify-content-between align-items-center my-2">
          <div class="h6 mb-0">属性区</div>
          <button class="btn btn-outline-secondary btn-sm" @click="toggleMainEditor">隐藏</button>
        </div>

        <div class="tab-content">
          <div v-show="showMainEditor">
            <DetailRegionFlds_EditCom
              ref="refDetailRegionFlds_Edit"
              :is-dialog="false"
            ></DetailRegionFlds_EditCom>
          </div>

          <div v-show="showCodeGen" class="mt-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="h6 mb-0">生成代码</div>
              <button class="btn btn-outline-secondary btn-sm" @click="toggleCodeGen">隐藏</button>
            </div>

            <div>
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

    <!-- 详细信息层 -->
    <div id="divDetail" value="1"></div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortDetailRegionFldsBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import DetailRegionFldsCRUDEx from '@/views/RegionManage/DetailRegionFldsCRUDEx';

  import DetailRegionFlds_EditCom from '@/views/RegionManage/DetailRegionFlds_Edit.vue';
  // import DetailRegionFlds_DetailCom from '@/views/RegionManage/DetailRegionFlds_Detail.vue';

  import ViewRegion_Detail_SimCom from '@/views/RegionManage/ViewRegion_Detail_Sim.vue';
  import ViewRegion_Edit_SimCom from '@/views/RegionManage/ViewRegion_Edit_Sim.vue';

  import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refDetailRegionFlds_Edit,
    refDetailRegionFlds_Detail,
    RegionId_Static,
  } from '@/views/RegionManage/DetailRegionFldsVueShare';
  import {
    refViewRegion_Detail_Sim,
    refViewRegion_Edit_Sim,
  } from '@/views/RegionManage/ViewRegion_UVueShare';

  // import { refViewRegion_Detail } from '@/views/RegionManage/ViewRegionVueShare';
  export default defineComponent({
    name: 'DetailRegionFldsCRUD',
    components: {
      // 组件注册
      DetailRegionFlds_EditCom,
      // DetailRegionFlds_DetailCom,
      ViewRegion_Detail_SimCom,
      ViewRegion_Edit_SimCom,
    },
    setup() {
      // inUse_q.value = 'true';
      // CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
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
        // DetailRegionFldsCRUD.divList = refDivList.value;

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
        DetailRegionFldsCRUDEx.divVisualEffects = refDivVisualEffects.value;
        DetailRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.VisualEffects_01;
        const objPage = new DetailRegionFldsCRUDEx();
        objPage.VisualEffects(DetailRegionFldsCRUDEx.divVisualEffects, RegionId_Static.value);
      };
      const BindOnlyGv = () => {
        DetailRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.DataList_02;

        const objPage = new DetailRegionFldsCRUDEx();

        objPage.BindOnlyGv();
      };
      const strTitle = ref('详细区域字段维护');

      const refDivVisualEffects = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        DetailRegionFldsCRUDEx.GetPropValueV2 = GetPropValue;
        DetailRegionFldsCRUDEx.divVisualEffects = refDivVisualEffects.value;

        DetailRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.VisualEffects_01;
        const objPage = new DetailRegionFldsCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function GetPropValue(strPropName: string): any {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          // case 'editDiv':
          //   return DetailRegionFlds_EditRef.value.refDivEdit;
          case 'viewRegionDetailDiv':
            return refViewRegion_Detail_Sim.value.refDivDetail;
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
            showMainEditor.value = true;
            break;
          case 'Update_ViewRegion':
            break;
          default:
            break;
        }
        DetailRegionFldsCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        refDivVisualEffects,

        refDivDataLst,
        showMainEditor,
        showCodeGen,
        toggleMainEditor,
        toggleCodeGen,
        showTabs,
        showActiveTabId,
        showChangeTab,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDetailRegionFlds_Edit,
        refDetailRegionFlds_Detail,
        refViewRegion_Edit_Sim,
        refViewRegion_Detail_Sim,
      };
    },
    watch: {
      // 数据监听
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

  .selected-td {
    background-color: #e6c3c3; /* Set your desired background color */
  }

  .detail-right-panel {
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

  .detail-right-panel-content {
    height: 100%;
    overflow: auto;
    padding-right: 2px;
  }
</style>
