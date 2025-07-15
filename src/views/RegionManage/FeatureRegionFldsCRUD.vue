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

            <div
              id="divEdit_CodeGene1"
              class="container1 col-4"
              style="overflow: auto; height: 630px; width: 420px"
            >
              <div class="tab-header">
                <div
                  v-for="tab in editTabs"
                  :key="tab.id"
                  :class="{ active: tab.id === editActiveTabId }"
                  @click="editChangeTab(tab.id)"
                >
                  {{ tab.label }}
                </div>
              </div>
              <div class="tab-content">
                <div v-if="editActiveTabId === 'tab1'">
                  <!-- <keep-alive> -->
                  <FeatureRegionFlds_EditCom
                    ref="refFeatureRegionFlds_Edit"
                    :is-dialog="false"
                  ></FeatureRegionFlds_EditCom>
                  <br />
                  <div v-show="isShowViewFeatureFlds1 === true">
                    <ViewFeatureFlds_EditInCom
                      ref="refViewFeatureFlds1_Edit"
                      @del-view-feature-fld="HideViewFeatureFldCom(1)"
                    ></ViewFeatureFlds_EditInCom>
                    <br />
                  </div>
                  <div v-show="isShowViewFeatureFlds2 === true">
                    <ViewFeatureFlds_EditInCom
                      ref="refViewFeatureFlds2_Edit"
                      @del-view-feature-fld="HideViewFeatureFldCom(2)"
                    ></ViewFeatureFlds_EditInCom>
                    <br />
                  </div>
                  <!-- </keep-alive> -->
                </div>

                <div v-if="editActiveTabId === 'tab2'">
                  <!-- <keep-alive> -->
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
                      <textarea id="txtCodeText" style="width: 100%; height: 720px"></textarea></div
                  ></div>
                  <!-- </keep-alive> -->
                </div>
              </div>
            </div>
          </div>
        </div>
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
  import { defineComponent, onMounted, ref } from 'vue';

  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import FeatureRegionFldsCRUDEx from '@/views/RegionManage/FeatureRegionFldsCRUDEx';
  //   import FeatureRegionFlds_DetailCom from '@/views/RegionManage/FeatureRegionFlds_Detail.vue';

  import ViewRegion_Detail_SimCom from '@/views/RegionManage/ViewRegion_Detail_Sim.vue';

  import ViewRegion_Edit_SimCom from '@/views/RegionManage/ViewRegion_Edit_Sim.vue';

  import FeatureRegionFlds_EditCom from '@/views/RegionManage/FeatureRegionFlds_Edit.vue';
  import FeatureRegionFlds_Edit_SetValueCom from '@/views/RegionManage/FeatureRegionFlds_Edit_SetValue.vue';

  import ViewFeatureFlds_EditInCom from '@/views/RegionManage/ViewFeatureFlds_EditIn.vue';

  import { enumActiveTabName } from '@/ts/PubFun/enumActiveTabName';
  import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
  import ViewFeatureFlds_EditEx from '@/views/RegionManage/ViewFeatureFlds_EditEx';
  import { BindData } from '@/views/RegionManage/BindData';
  import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';
  import FeatureRegionFlds_EditEx from '@/views/RegionManage/FeatureRegionFlds_EditEx';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    RegionId_Static,
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
    refViewFeatureFlds2_Edit,
    refViewFeatureFlds1_Edit,
    isShowViewFeatureFlds2,
    isShowViewFeatureFlds1,
  } from '@/views/RegionManage/ViewFeatureFldsLstVueShare';
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

      const arrBindData = ref<BindData>({
        ctlTypeLst: [], // Initialize ctlTypeLst with an empty array or the actual data
        vPrjTab_SimLst: [],
        vFieldTab_SimLst: [],
        // Add other properties if needed
      });

      const editTabs = [
        { id: 'tab1', label: '属性' },
        { id: 'tab2', label: '代码生成' },
      ];
      const editActiveTabId = ref('tab1');
      const editChangeTab = (tabId: string) => {
        editActiveTabId.value = tabId;

        switch (tabId) {
          case 'tab1':
            setTimeout(InitEdit, 100);
            break;
          case 'tab2':
            break;
        }
      };
      const InitEdit = async () => {
        // divVarSet.refDivEdit = FeatureRegionFlds_Edit.EditObj.$refs.refDivEdit;

        const objPage = new FeatureRegionFldsCRUDEx();
        await objPage.InitEdit();
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

      // const refFeatureRegionFlds_Edit_SetValue = ref();
      // const refViewFeatureFlds_Edit = ref([]);

      // const refViewFeatureFlds3_Edit = ref();

      // const refDivLayoutTop = ref();

      const refDivDataLst = ref();
      const HideViewFeatureFldCom = (index: number) => {
        if (index == 1) {
          isShowViewFeatureFlds1.value = false;
        } else if (index == 2) {
          isShowViewFeatureFlds2.value = false;
        }
      };
      onMounted(() => {
        FeatureRegionFldsCRUDEx.GetPropValueV2 = GetPropValue;

        // divVarSet.refDivEdit = FeatureRegionFlds_Edit.EditObj.$refs.refDivEdit;

        // divVarSet.refDivEdit = refViewFeatureFlds_EditLst.value.$refs.refDivEdit;

        // ViewRegion_Detail_Sim.divDetail = refViewRegion_Detail_Sim.value.$refs.refDivDetail;
        FeatureRegionFldsCRUDEx.ActiveTabName = enumActiveTabName.VisualEffects_01;
        ViewFeatureFlds_EditEx.ShowLst = ShowLst;
        ViewFeatureFlds_EditEx.getDataFromViewFeatureFlds_Coms = getDataFromViewFeatureFlds_Coms;
        FeatureRegionFlds_EditEx.HideViewFeatureFlds = HideViewFeatureFlds;
        // Populate the componentRefs array with component refs
        // this.componentRefs = this.arrViewFeatureFlds.map(
        //   (_, index) => this.$refs[`refViewFeatureFlds_EditLst${index}`],
        // );
        const objPage = new FeatureRegionFldsCRUDEx();

        objPage.PageLoadCache();
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
      const HideViewFeatureFlds = (): void => {
        isShowViewFeatureFlds1.value = true;
        isShowViewFeatureFlds2.value = false;
      };

      const ShowLst = async (
        arrObjLst: Array<clsViewFeatureFldsENEx>,
        arrBindData1: BindData,
      ): Promise<void> => {
        // console.log(arrObjLst);
        // alert('ShowLst in ViewInfoCRUD');
        arrViewFeatureFlds.value = arrObjLst;
        arrBindData.value = arrBindData1;
        isShowViewFeatureFlds2.value = false;
        isShowViewFeatureFlds1.value = false;

        if (arrObjLst.length > 1) {
          isShowViewFeatureFlds2.value = true;
          isShowViewFeatureFlds1.value = true;
          await refViewFeatureFlds2_Edit.value.GetDataFromViewFeatureFldsClass(arrObjLst[1]);
          await refViewFeatureFlds1_Edit.value.GetDataFromViewFeatureFldsClass(arrObjLst[0]);
        } else if (arrObjLst.length == 1) {
          isShowViewFeatureFlds2.value = false;
          isShowViewFeatureFlds1.value = true;
          await refViewFeatureFlds1_Edit.value.GetDataFromViewFeatureFldsClass(arrObjLst[0]);
        }
        console.error('isShowViewFeatureFlds1', isShowViewFeatureFlds1.value);
        console.error('isShowViewFeatureFlds2', isShowViewFeatureFlds2.value);
        // console.error(arrBindData.value.ctlTypeLst);
      };
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strCommandName, strKeyId);
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
        // refViewFeatureFlds_EditLst.value.forEach((componentRef) => {
        //   // Access data or methods from each component
        //   if (componentRef != null) {
        //     const objData = (componentRef as any).getObjData();
        //     // const objData = (componentRef as any).objData;
        //     console.log(objData);
        //     arrObjLst.push(objData);
        //   }
        //   // ... do something with objData
        // });
        return arrObjLst;
      };
      return {
        strTitle,
        btn_Click,
        refViewFeatureFlds2_Edit,
        refViewFeatureFlds1_Edit,
        refFeatureRegionFlds_Edit_SetValue,

        refViewRegion_Detail_Sim,
        refViewRegion_Edit_Sim,
        refDivVisualEffects,
        refDivLayoutTop,

        refDivLeftMenu,
        refDivFeatureButtonLst,
        refDivDataLst,
        editTabs,
        editActiveTabId,
        editChangeTab,
        showTabs,
        showActiveTabId,
        showChangeTab,
        arrViewFeatureFlds,
        ShowLst,
        arrBindData,
        getDataFromViewFeatureFlds_Coms,
        HideViewFeatureFlds,
        isShowViewFeatureFlds1,
        isShowViewFeatureFlds2,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refFeatureRegionFlds_Detail,
        refFeatureRegionFlds_Edit,
        HideViewFeatureFldCom,
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
</style>
