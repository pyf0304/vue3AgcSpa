<template>
  <div id="divLayout" ref="refDivLayoutTop" class="div_layout">
    <div class="row mt-2" style="width: 100%">
      <div id="divLeft" class="col-2">
        <div id="divLeftMenu" ref="refDivLeftMenu">
          <div id="divFeatureButtonLst" ref="refDivFeatureButtonLst"></div>

          <select id="ddlRegionTypeId"></select>

          <button
            id="btnConfirmBatchAddFeature"
            class="btn btn-outline-primary btn-sm"
            ToolTip="确认添加功能"
            @click="btn_Click('ConfirmBatchAddFeature', '')"
          >
            确认
          </button>

          <!-- <div id="divEdit4FeatureRegionFlds_SetValue"></div> -->
        </div>
      </div>

      <div id="divLayout" ref="refDivLayout" class="col-10">
        <!-- 标题层  -->

        <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
          <label id="lblViewTitle" name="lblViewTitle" class="h5"> 功能区域编辑 </label>

          <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
          </label>
        </div>

        <div>
          <div>
            <div style="width: 100%" class="row">
              <ul class="nav ml-3">
                <li class="nav-item">
                  <!-- <div id="divDetail4ViewRegion"> </div> -->

                  <ViewRegion_Detail_SimCom
                    ref="refViewRegion_Detail_Sim"
                  ></ViewRegion_Detail_SimCom>
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
                </li>
              </ul>
            </div>

            <!-- 功能区  -->

            <div id="divQuery" ref="refDivQuery" class="table table-bordered table-hover mt-1">
              <ul class="nav">
                <li class="nav-item">
                  <label
                    id="lblFeatureRegionFldsList"
                    name="lblFeatureRegionFldsList"
                    class="col-form-label text-info"
                    style="width: 100px"
                  >
                    功能操作:
                  </label>
                </li>

                <li class="nav-item ml-3">
                  <button
                    id="btnCopyRecord"
                    name="btnCopyRecord"
                    class="btn btn-outline-success btn-sm text-nowrap"
                    @click="btn_Click('Clone', '')"
                    >复制</button
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
                    id="btnUpdateRecord"
                    name="btnUpdateRecord"
                    class="btn btn-outline-success btn-sm text-nowrap"
                    @click="btn_Click('Update', '')"
                    >修改</button
                  >
                </li>

                <li class="nav-item ml-3">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button
                      id="btnSetInUse"
                      name="btnSetInUse"
                      class="btn btn-outline-success btn-sm text-nowrap"
                      @click="btn_Click('SetInUse', '')"
                      >启用</button
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
                    <select
                      id="ddlTabFeatureId_SetFldValue"
                      name="ddlTabFeatureId_SetFldValue"
                      class="form-control form-control-sm"
                      style="width: 60px"
                    ></select>

                    <button
                      id="btnSetTabFeatureId"
                      name="btnSetTabFeatureId"
                      class="btn btn-outline-success btn-sm text-nowrap"
                      @click="btn_Click('SetTabFeatureId', '')"
                      >设置表功能</button
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
                      class="btn btn-outline-success btn-sm text-nowrap"
                      @click="btn_Click('SetGroupName', '')"
                      >设置组名</button
                    >
                  </div>
                </li>

                <li class="nav-item ml-3">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button
                      id="btnCopyFldFromTemplate"
                      name="btnCopyFldFromTemplate"
                      class="btn btn-outline-success btn-sm text-nowrap"
                      @click="btn_Click('CopyFldFromTemplate', '')"
                      >复制模板</button
                    >

                    <!-- <button

                      id="btnGetTabFeature"

                      name="btnGetTabFeature"

                      class="btn btn-outline-success btn-sm text-nowrap"

                      @click="btn_Click('GetTabFeature', '')"

                      >获取表功能</button

                    >

                    <button

                      id="btnGeneTabFeature"

                      name="btnGeneTabFeature"

                      class="btn btn-outline-success btn-sm text-nowrap"

                      @click="btn_Click('GeneTabFeature', '')"

                      >生成表功能</button

                    > -->
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

                    <button
                      id="btnGetObjData"
                      class="btn btn-outline-success btn-sm text-nowrap"
                      @click="getDataFromViewFeatureFlds_Coms()"
                      >获取数据</button
                    >
                  </div>
                </li>

                <li class="nav-item ml-3">
                  <button
                    id="btnTogglePropertyPanel"
                    class="btn btn-outline-secondary btn-sm text-nowrap"
                    @click="toggleMainFeatureEditor"
                    >{{ showMainFeatureEditor ? '隐藏属性' : '显示属性' }}</button
                  >
                </li>

                <li class="nav-item ml-3">
                  <button
                    id="btnToggleCodeGeneTab"
                    class="btn btn-outline-secondary btn-sm text-nowrap"
                    @click="toggleCodeGenTab"
                    >{{ showCodeGenTab ? '隐藏生成代码' : '显示生成代码' }}</button
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-8">
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
                  <div>
                    <ul class="nav ml-1">
                      <li class="nav-item ml-3">
                        <input
                          id="cblRegionTypeLst_0"
                          type="checkbox"
                          value="0001"
                          @click="btn_Click('chkRegionType', '')"
                        /><label for="cblRegionTypeLst_0">查询区</label>
                      </li>

                      <li class="nav-item ml-3">
                        <input
                          id="cblRegionTypeLst_1"
                          type="checkbox"
                          checked="true"
                          value="0008"
                          @click="btn_Click('chkRegionType', '')"
                        /><label for="cblRegionTypeLst_0">功能区</label>
                      </li>

                      <li class="nav-item ml-3">
                        <input
                          id="cblRegionTypeLst_2"
                          type="checkbox"
                          value="0002"
                          @click="btn_Click('chkRegionType', '')"
                        /><label for="cblRegionTypeLst_0">列表区</label>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span class="h5 text-success">可视化区域</span>

                    <div id="divVisualEffects" ref="refDivVisualEffects" class="mt-1 myBorder">
                    </div>
                  </div>
                </div>

                <div v-if="showActiveTabId === 'tab4'">
                  <keep-alive>
                    <div id="divList" ref="refDivList" class="small overflow-hidden">
                      <div
                        id="divDataLst"
                        ref="refDivDataLst"
                        class="div_List"
                        style="height: 800px; overflow: auto"
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
      </div>
    </div>

    <div v-show="showMainFeatureEditor || showCodeGenTab" class="right-panel" style="width: 420px">
      <div class="tab-content right-panel-content">
        <transition name="panel-stretch">
          <div v-show="showMainFeatureEditor" class="panel-body panel-body-property">
            <div class="d-flex justify-content-between align-items-center my-2">
              <div class="h6 mb-0">属性区</div>

              <button class="btn btn-outline-secondary btn-sm" @click="toggleMainFeatureEditor">
                {{ showMainFeatureEditor ? '隐藏属性' : '查看属性' }}
              </button>
            </div>

            <FeatureRegionFlds_EditCom
              ref="refFeatureRegionFlds_Edit"
              :is-dialog="false"
            ></FeatureRegionFlds_EditCom>

            <div class="mt-3">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="h6 mb-0">子字段</div>

                <button class="btn btn-outline-success btn-sm" @click="openCreateChildField">
                  新增子字段
                </button>
              </div>

              <div class="table-responsive border rounded p-2 bg-white">
                <table class="table table-sm table-hover align-middle mb-0">
                  <thead>
                    <tr>
                      <th style="width: 60px">序号</th>

                      <th style="width: 140px">类型</th>

                      <th style="width: 140px">相关字段</th>

                      <th style="width: 100px">控件</th>

                      <th>标签</th>

                      <th style="width: 90px">在用</th>

                      <th style="width: 140px">操作</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="item in arrViewFeatureFlds"
                      :key="`${item.viewFeatureId}|${item.mId}`"
                    >
                      <td>{{ item.orderNum }}</td>

                      <td>{{ getFieldTypeName(item.fieldTypeId) }}</td>

                      <td class="child-field-break">{{ getRelaFieldName(item.releFldId) }}</td>

                      <td>{{ getCtlTypeName(item.ctlTypeId) }}</td>

                      <td>{{ item.labelCaption }}</td>

                      <td>{{ item.inUse === true ? '是' : '否' }}</td>

                      <td>
                        <div class="btn-group btn-group-sm">
                          <button class="btn btn-outline-success" @click="openEditChildField(item)"
                            >修改</button
                          >

                          <button class="btn btn-outline-danger" @click="deleteChildField(item)"
                            >删除</button
                          >
                        </div>
                      </td>
                    </tr>

                    <tr v-if="arrViewFeatureFlds.length === 0">
                      <td colspan="7" class="text-center text-secondary">当前没有子字段记录。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </transition>

        <a-modal
          v-model:visible="childDialogVisible"
          :title="childDialogTitle"
          width="600px"
          :destroy-on-close="false"
          @cancel="closeChildDialog"
        >
          <div v-if="childDialogMode === 'create'" class="mb-2">
            <label class="form-label mb-1">字段类型</label>

            <select
              v-model="selectedFieldTypeId"
              class="form-control form-control-sm"
              @change="prepareCreateChildEditor"
            >
              <option
                v-for="item in fieldTypeOptions"
                :key="item.fieldTypeId"
                :value="item.fieldTypeId"
              >
                {{ item.fieldTypeName }}({{ item.fieldTypeId }})
              </option>
            </select>
          </div>

          <ViewFeatureFlds_EditInCom
            ref="childEditorRef"
            :is-dialog="true"
          ></ViewFeatureFlds_EditInCom>

          <template #footer>
            <a-button @click="closeChildDialog">取消</a-button>

            <a-button type="primary" @click="saveChildField">保存</a-button>
          </template>
        </a-modal>

        <transition name="panel-stretch">
          <div v-show="showCodeGenTab" class="panel-body panel-body-code">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="h6 mb-0">生成代码</div>
              <button class="btn btn-outline-secondary btn-sm" @click="toggleCodeGenTab">
                隐藏
              </button>
            </div>
            <!-- <keep-alive> -->

            <div>
              <div class="mb-2">
                <div>
                  <span class="text-muted">应用类型:</span>
                  <span id="lblCurrAppType_FeatureRegion">-</span>
                </div>
                <div>
                  <span class="text-muted">前端工程:</span>
                  <span id="lblCurrFrontend_FeatureRegion">-</span>
                </div>
                <div>
                  <span class="text-muted">当前机器:</span>
                  <span id="lblCurrMachine_FeatureRegion">-</span>
                </div>
                <div>
                  <span class="text-muted">区域类型:</span>
                  <span id="lblCurrRegionType_FeatureRegion">功能区域(0008)</span>
                </div>
                <div>
                  <span class="text-muted">生成进度:</span>
                  <span id="lblGeneProgress_FeatureRegion">未开始</span>
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

                <textarea id="txtCodeText" style="width: 100%; height: 720px"></textarea></div
            ></div>

            <!-- </keep-alive> -->
          </div>
        </transition>
      </div>
    </div>

    <!-- 编辑层  -->

    <div id="divEdit"> </div>

    <ViewRegion_Edit_SimCom ref="refViewRegion_Edit_Sim"></ViewRegion_Edit_SimCom>

    <FeatureRegionFlds_Edit_SetValueCom
      ref="refFeatureRegionFlds_Edit_SetValue"
    ></FeatureRegionFlds_Edit_SetValueCom>

    <input id="hidSortFeatureRegionFldsBy" type="hidden" value="" />
  </div>
</template>

<script lang="ts">
  import 'jquery/dist/jquery.min.js';

  import 'bootstrap/dist/js/bootstrap.min.js';

  import 'bootstrap/dist/css/bootstrap.css';

  import { defineComponent, nextTick, onMounted, ref } from 'vue';

  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import FeatureRegionFldsCRUDEx from '@/views/RegionManage/FeatureRegionFldsCRUDEx';

  //   import FeatureRegionFlds_DetailCom from '@/views/RegionManage/FeatureRegionFlds_Detail.vue';

  import ViewRegion_Detail_SimCom from '@/views/RegionManage/ViewRegion_Detail_Sim.vue';

  import ViewRegion_Edit_SimCom from '@/views/RegionManage/ViewRegion_Edit_Sim.vue';

  import FeatureRegionFlds_EditCom from '@/views/RegionManage/FeatureRegionFlds_Edit.vue';

  import FeatureRegionFlds_Edit_SetValueCom from '@/views/RegionManage/FeatureRegionFlds_Edit_SetValue.vue';

  import ViewFeatureFlds_EditInCom from '@/views/RegionManage/ViewFeatureFlds_EditIn.vue';

  import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';

  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

  import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';

  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';

  import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';

  import {
    FieldType_GetArrFieldType,
    FieldType_GetObjLstAsync,
    FieldType_ReFreshThisCache,
  } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';

  import { vFieldTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

  import { PrjTabFld_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';

  import { CtlType_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';

  import {
    ViewFeatureFlds_AddNewRecordAsync,
    ViewFeatureFlds_DelRecordAsync,
    ViewFeatureFlds_GetObjByKeyAsync,
    ViewFeatureFlds_GetObjLstAsync,
    ViewFeatureFlds_ReFreshCache,
    ViewFeatureFlds_UpdateRecordAsync,
  } from '@/ts/L3ForWApi/RegionManage/clsViewFeatureFldsWApi';

  import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';

  import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    RegionId_Static,
    TabId_Static,
    TabId4Region_Static,
    refFeatureRegionFlds_Edit,
    refFeatureRegionFlds_Detail,
    FeatureTypeId_Static,
  } from '@/views/RegionManage/FeatureRegionFldsVueShare';

  import {
    refDivFeatureButtonLst,
    refDivLeftMenu,
    refDivVisualEffects,
    refDivLayoutTop,
  } from '@/views/RegionManage/FeatureRegionFldsSetValueVueShare';

  import { refFeatureRegionFlds_Edit_SetValue } from '@/views/RegionManage/FeatureRegionFlds_SimVueShare';

  import {
    refViewRegion_Detail_Sim,
    refViewRegion_Edit_Sim,
  } from '@/views/RegionManage/ViewRegion_UVueShare';

  import { enumPrjFeatureType } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';

  export default defineComponent({
    name: 'FeatureRegionFldsCRUD',

    components: {
      // 组件注册

      FeatureRegionFlds_EditCom,

      FeatureRegionFlds_Edit_SetValueCom,

      ViewFeatureFlds_EditInCom,

      //   FeatureRegionFlds_DetailCom,

      ViewRegion_Edit_SimCom,

      ViewRegion_Detail_SimCom,
    },

    setup() {
      // CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;

      FeatureTypeId_Static.value = enumPrjFeatureType.FrontInterface_01; //定义条件字段

      const arrViewFeatureFlds = ref<Array<clsViewFeatureFldsENEx>>([]);

      const fieldTypeOptions = ref<Array<clsFieldTypeEN>>([]);

      const releFieldOptions = ref<Array<clsvFieldTab_SimEN>>([]);

      const ctlTypeOptions = ref<Array<clsCtlTypeEN>>([]);

      const childDialogVisible = ref(false);

      const showMainFeatureEditor = ref(true);

      const showCodeGenTab = ref(false);

      const childDialogMode = ref<'create' | 'update'>('create');

      const childDialogTitle = ref('新增子字段');

      const selectedFieldTypeId = ref('');

      const childEditorRef = ref();

      const editingChildItem = ref<clsViewFeatureFldsENEx | null>(null);

      const getCurrentViewFeatureId = (): string => {
        const strByEditor = (FeatureRegionFldsCRUDEx.objPageEdit?.keyId || '').trim();
        if (!IsNullOrEmpty(strByEditor)) return strByEditor;

        const arrChecked = FeatureRegionFldsCRUDEx.GetSelectedKeyIdLst(divVarSet.refDivList);
        if (arrChecked.length > 0 && !IsNullOrEmpty(arrChecked[0])) return arrChecked[0];

        const strSelected = (FeatureRegionFldsCRUDEx.SelectedKeyIds || '').trim();
        if (!IsNullOrEmpty(strSelected)) {
          const firstId = strSelected
            .split(',')
            .map((x) => x.trim())
            .find((x) => x !== '');
          if (firstId != null) return firstId;
        }
        return '';
      };

      const getCurrentTabId4Region = (): string => {
        const tabId4Region = (TabId4Region_Static.value || '').trim();
        if (!IsNullOrEmpty(tabId4Region)) return tabId4Region;
        return (TabId_Static.value || '').trim();
      };

      const getFieldTypeName = (fieldTypeId: string): string => {
        const item = fieldTypeOptions.value.find((x) => x.fieldTypeId === fieldTypeId);

        const rawName = item?.fieldTypeName || fieldTypeId;

        return rawName.replace(/字段/g, '').trim();
      };

      const removeTrailingId = (value: string): string => {
        const normalized = (value || '').trim();

        if (IsNullOrEmpty(normalized)) return '';

        const match = normalized.match(/^(.*?)\s*([（(][^()（）]*[)）])\s*$/);

        if (match == null || IsNullOrEmpty(match[1])) return normalized;

        return match[1].trim();
      };

      const getRelaFieldName = (releFldId: string): string => {
        const item = releFieldOptions.value.find((x) => x.fldId === releFldId);

        if (item == null) return removeTrailingId(releFldId);

        return item.fldName;
      };

      const getCtlTypeName = (ctlTypeId: string): string => {
        const item = ctlTypeOptions.value.find((x) => x.ctlTypeId === ctlTypeId);

        if (item != null) return item.ctlTypeName;

        return removeTrailingId(ctlTypeId);
      };

      const loadFieldTypeOptions = async () => {
        const arr = (await FieldType_GetArrFieldType()) as Array<clsFieldTypeEN> | null;
        let arrOptions = (arr || []).slice();

        // Fallback: force refresh cache and fetch from API when cache-based options are empty.
        if (arrOptions.length <= 1) {
          FieldType_ReFreshThisCache();
          const arrFromApi = (await FieldType_GetObjLstAsync('1=1')) || [];
          arrOptions = arrFromApi
            .slice()
            .sort((a, b) => a.orderNum - b.orderNum) as Array<clsFieldTypeEN>;

          const obj0 = new clsFieldTypeEN();
          obj0.fieldTypeId = '0';
          obj0.fieldTypeName = '选字段类型...';
          arrOptions = [obj0, ...arrOptions];
        }

        fieldTypeOptions.value = arrOptions;

        const firstRealItem = fieldTypeOptions.value.find((x) => x.fieldTypeId !== '0');

        if (IsNullOrEmpty(selectedFieldTypeId.value)) {
          selectedFieldTypeId.value =
            firstRealItem?.fieldTypeId || fieldTypeOptions.value[0]?.fieldTypeId || '';
        }
      };

      const loadCtlTypeOptions = async () => {
        let arr = await CtlType_GetObjLstCache();

        arr = (arr || []).slice().sort((a, b) => a.orderNum - b.orderNum);

        ctlTypeOptions.value = arr as Array<clsCtlTypeEN>;
      };

      const loadRelaFieldOptions = async () => {
        const prjId = clsPrivateSessionStorage.currSelPrjId;

        if (IsNullOrEmpty(prjId)) {
          releFieldOptions.value = [];

          return;
        }

        const tabId4Region = getCurrentTabId4Region();

        let arrFld = ((await vFieldTab_Sim_GetObjLstCache(prjId)) ||
          []) as Array<clsvFieldTab_SimEN>;

        if (!IsNullOrEmpty(tabId4Region)) {
          const arrPrjTabFld = await PrjTabFld_GetObjLstCache(tabId4Region);

          const setFldIds = new Set((arrPrjTabFld || []).map((x) => x.fldId));

          arrFld = arrFld.filter((x) => setFldIds.has(x.fldId));
        }

        releFieldOptions.value = arrFld.sort((a, b) => a.fldName.localeCompare(b.fldName));
      };

      const loadChildFieldDisplayOptions = async () => {
        await Promise.all([loadRelaFieldOptions(), loadCtlTypeOptions()]);
      };

      const reloadChildFieldList = async () => {
        const viewFeatureId = getCurrentViewFeatureId();

        await loadChildFieldDisplayOptions();

        if (IsNullOrEmpty(viewFeatureId)) {
          arrViewFeatureFlds.value = [];

          return;
        }

        const whereCond = Format(
          "{0}='{1}'",

          clsViewFeatureFldsEN.con_ViewFeatureId,

          viewFeatureId,
        );

        const rows = await ViewFeatureFlds_GetObjLstAsync(whereCond);

        arrViewFeatureFlds.value = (rows || []).slice().sort((a, b) => {
          if (a.orderNum !== b.orderNum) return a.orderNum - b.orderNum;

          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        }) as Array<clsViewFeatureFldsENEx>;
      };

      const prepareCreateChildEditor = async () => {
        const viewFeatureId = getCurrentViewFeatureId();

        if (IsNullOrEmpty(viewFeatureId)) return;

        await nextTick();

        const tabId4Region = getCurrentTabId4Region();

        if (!IsNullOrEmpty(tabId4Region)) {
          await (childEditorRef.value as any)?.BindDdl4EditRegion?.(tabId4Region);
        }

        const obj = new clsViewFeatureFldsEN();

        obj.SetViewFeatureId(viewFeatureId);

        obj.SetFieldTypeId(selectedFieldTypeId.value);

        obj.SetInUse(true);

        obj.SetPrjId(clsPrivateSessionStorage.currSelPrjId);

        obj.SetOrderNum(arrViewFeatureFlds.value.length + 1);

        await nextTick();

        await (childEditorRef.value as any)?.GetDataFromViewFeatureFldsClass?.(obj);
      };

      const openCreateChildField = async () => {
        const viewFeatureId = getCurrentViewFeatureId();

        if (IsNullOrEmpty(viewFeatureId)) {
          alert('请先保存主功能，再新增子字段。');

          return;
        }

        await loadFieldTypeOptions();
        if (fieldTypeOptions.value.length <= 1) {
          alert('字段类型数据为空，请检查字段类型基础数据。');
          return;
        }

        const firstRealItem = fieldTypeOptions.value.find((x) => x.fieldTypeId !== '0');

        selectedFieldTypeId.value =
          firstRealItem?.fieldTypeId || fieldTypeOptions.value[0]?.fieldTypeId || '';

        showMainFeatureEditor.value = false;

        childDialogMode.value = 'create';

        childDialogTitle.value = '新增子字段';

        editingChildItem.value = null;

        childDialogVisible.value = true;

        await prepareCreateChildEditor();
      };

      const openEditChildField = async (item: any) => {
        showMainFeatureEditor.value = false;

        childDialogMode.value = 'update';

        childDialogTitle.value = '修改子字段';

        editingChildItem.value = item;

        selectedFieldTypeId.value = item.fieldTypeId;

        childDialogVisible.value = true;

        await nextTick();

        const tabId4Region = getCurrentTabId4Region();

        if (!IsNullOrEmpty(tabId4Region)) {
          await (childEditorRef.value as any)?.BindDdl4EditRegion?.(tabId4Region);
        }

        const mId = Number(item?.mId || 0);
        if (mId <= 0) {
          alert('当前子字段缺少主键，无法回填编辑数据。');
          return;
        }
        const fullObj = await ViewFeatureFlds_GetObjByKeyAsync({ mId });
        if (fullObj == null) {
          alert('未获取到最新子字段数据，请刷新后重试。');
          return;
        }
        await (childEditorRef.value as any)?.GetDataFromViewFeatureFldsClass?.(fullObj);
      };

      const closeChildDialog = () => {
        childDialogVisible.value = false;

        showMainFeatureEditor.value = true;
      };

      const saveChildField = async () => {
        const editor = childEditorRef.value as any;

        if (!editor || typeof editor.getObjData !== 'function') {
          alert('子字段编辑器尚未准备好，请稍后重试。');

          return;
        }

        const obj = editor.getObjData() as clsViewFeatureFldsEN;

        const viewFeatureId = getCurrentViewFeatureId();

        if (IsNullOrEmpty(viewFeatureId)) {
          alert('请先保存主功能，再保存子字段。');

          return;
        }

        obj.SetViewFeatureId(viewFeatureId);

        obj.SetPrjId(clsPrivateSessionStorage.currSelPrjId);

        const currCtlTypeId = (obj as any).ctlTypeId as string;

        if (IsNullOrEmpty(currCtlTypeId) || currCtlTypeId === '0') {
          obj.SetCtlTypeId(enumCtlType.None_00);
        }

        if (childDialogMode.value === 'create') {
          if (IsNullOrEmpty(selectedFieldTypeId.value) || selectedFieldTypeId.value === '0') {
            alert('请选择字段类型。');

            return;
          }

          obj.SetFieldTypeId(selectedFieldTypeId.value);
        } else if (editingChildItem.value != null) {
          obj.SetmId(editingChildItem.value.mId);

          obj.SetFieldTypeId(editingChildItem.value.fieldTypeId);
        }

        try {
          const ok =
            childDialogMode.value === 'create'
              ? await ViewFeatureFlds_AddNewRecordAsync(obj)
              : await ViewFeatureFlds_UpdateRecordAsync(obj);

          if (!ok) {
            alert('保存子字段失败。');

            return;
          }

          ViewFeatureFlds_ReFreshCache(viewFeatureId);

          await reloadChildFieldList();

          childDialogVisible.value = false;

          showMainFeatureEditor.value = true;
        } catch (e: any) {
          console.error(e);

          alert(`保存子字段失败: ${e}`);
        }
      };

      const deleteChildField = async (item: any) => {
        const viewFeatureId = getCurrentViewFeatureId();

        if (IsNullOrEmpty(viewFeatureId)) {
          alert('请先保存主功能，再删除子字段。');

          return;
        }

        const mId = Number(item?.mId || 0);
        if (mId <= 0) {
          alert('当前子字段缺少主键，无法删除。');

          return;
        }

        if (!confirm(`确定删除子字段【${item.labelCaption || item.fieldTypeId}】吗？`)) return;

        try {
          const count = await ViewFeatureFlds_DelRecordAsync({ mId });

          if (count <= 0) {
            alert('删除子字段失败。');

            return;
          }

          ViewFeatureFlds_ReFreshCache(viewFeatureId);

          await reloadChildFieldList();
        } catch (e: any) {
          console.error(e);

          alert(`删除子字段失败: ${e}`);
        }
      };

      const toggleMainFeatureEditor = () => {
        showMainFeatureEditor.value = !showMainFeatureEditor.value;
      };

      const toggleCodeGenTab = () => {
        showCodeGenTab.value = !showCodeGenTab.value;
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
        FeatureRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.VisualEffects_01;

        const objPage = new FeatureRegionFldsCRUDEx();

        objPage.VisualEffects(refDivVisualEffects.value, RegionId_Static.value);
      };

      const BindOnlyGv = () => {
        FeatureRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.DataList_02;

        const objPage = new FeatureRegionFldsCRUDEx();

        objPage.BindOnlyGv();
      };

      const strTitle = ref('功能区域字段维护');

      const refDivDataLst = ref();

      onMounted(() => {
        FeatureRegionFldsCRUDEx.GetPropValueV2 = GetPropValue;

        FeatureRegionFldsCRUDEx.OnCurrentFeatureChanged = () => {
          showMainFeatureEditor.value = true;

          reloadChildFieldList();
        };

        FeatureRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.VisualEffects_01;

        const objPage = new FeatureRegionFldsCRUDEx();

        objPage.PageLoadCache();

        loadFieldTypeOptions();

        setTimeout(() => {
          try {
            objPage.btnCodeGene_Click();
          } catch (e) {
            console.error('FeatureRegionFldsCRUD.btnCodeGene_Click', e);
          }
        }, 200);

        setTimeout(() => {
          reloadChildFieldList();
        }, 200);

        //this.myonload();
      });

      function GetPropValue(strPropName: string): any {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;

          case 'editDiv':
            return refFeatureRegionFlds_Edit.value.refDivEdit;

          case 'viewRegionDetailDiv':
            return refViewRegion_Detail_Sim.value.refDivDetail;

          default:
            return '';
        }
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strCommandName, strKeyId);

        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
            break;
          case 'AddNewRecordWithMaxId':
            break;
          case 'CreateWithMaxId':
            break;
          case 'Update':
            showMainFeatureEditor.value = true;

            break;
          case 'UpdateRecord':
            showMainFeatureEditor.value = true;

            break;
          case 'UpdateRecordInTab':
            showMainFeatureEditor.value = true;

            break;

          case 'Update_ViewRegion':
            FeatureRegionFldsCRUDEx.EditRegionRef = refViewRegion_Edit_Sim;

            break;

          default:
            break;
        }

        FeatureRegionFldsCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      // Example method to get data from component refs

      const getDataFromViewFeatureFlds_Coms = (): Array<clsViewFeatureFldsEN> => {
        const arrObjLst = new Array<clsViewFeatureFldsEN>();

        return arrObjLst;
      };

      return {
        strTitle,

        btn_Click,

        refFeatureRegionFlds_Edit_SetValue,

        refViewRegion_Detail_Sim,

        refViewRegion_Edit_Sim,

        refDivVisualEffects,

        refDivLayoutTop,

        refDivLeftMenu,

        refDivFeatureButtonLst,

        refDivDataLst,

        toggleMainFeatureEditor,

        toggleCodeGenTab,

        showTabs,

        showActiveTabId,

        showChangeTab,

        arrViewFeatureFlds,

        getDataFromViewFeatureFlds_Coms,

        fieldTypeOptions,

        childDialogVisible,

        showMainFeatureEditor,

        showCodeGenTab,

        childDialogMode,

        childDialogTitle,

        selectedFieldTypeId,

        childEditorRef,

        openCreateChildField,

        openEditChildField,

        closeChildDialog,

        saveChildField,

        deleteChildField,

        getFieldTypeName,

        getRelaFieldName,

        getCtlTypeName,

        prepareCreateChildEditor,

        reloadChildFieldList,

        ...divVarSet,

        refDivLayout,

        refDivQuery,

        refDivFunction,

        refDivList,

        refFeatureRegionFlds_Detail,

        refFeatureRegionFlds_Edit,
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

  .child-field-break {
    white-space: pre-line;
  }

  .right-panel {
    position: fixed;
    top: 4px;
    right: 8px;
    z-index: 2000;
    height: calc(100vh - 24px);
    min-height: 860px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #d8d8d8;
    border-radius: 6px;
    padding: 6px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .right-panel-content {
    overflow: auto;
    flex: 1;
    padding-right: 2px;
  }

  .panel-body {
    overflow: visible;
  }

  .panel-body-property,
  .panel-body-code {
    max-height: none;
  }

  .panel-stretch-enter-active,
  .panel-stretch-leave-active {
    transition: all 0.25s ease;
    transform-origin: top;
  }

  .panel-stretch-enter-from,
  .panel-stretch-leave-to {
    opacity: 0;
    transform: scaleY(0.95);
    max-height: 0;
  }
</style>
