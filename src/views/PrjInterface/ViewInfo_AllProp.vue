<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <ul class="tabs">
      <li
        v-for="(tab, index) in tabs"
        :id="tab.liId"
        :key="index"
        :class="{ active: activeViewIndex === index }"
        @click="changeTab(index)"
      >
        {{ tab.label }}
      </li>

      <li class="nav-item"><span id="spnViewName"></span></li>

      <li class="nav-item"><span id="spnFuncModuleName_Sim" class="text-nowrap"></span></li>

      <li class="nav-item"><span id="spnApplicationTypeName" class="text-nowrap"></span></li>
    </ul>

    <component :is="currentTabComponent" ref="tabComponentRef" />
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import ViewInfo_U from '@/views/PrjInterface/ViewInfo_U.vue';
  import ViewRegionInTab from '@/views/RegionManage/ViewRegionInTab.vue';
  import ViewRelaTabCRUD from '@/views/PrjInterface/ViewRelaTabCRUD.vue';
  import QryRegionFldsCRUD from '@/views/RegionManage/QryRegionFldsCRUD.vue';
  import FeatureRegionFldsCRUD from '@/views/RegionManage/FeatureRegionFldsCRUD.vue';
  import DGRegionFldsCRUD from '@/views/RegionManage/DGRegionFldsCRUD.vue';
  import EditRegionFldsCRUD from '@/views/RegionManage/EditRegionFldsCRUD.vue';
  import DetailRegionFldsCRUD from '@/views/RegionManage/DetailRegionFldsCRUD.vue';
  import ExcelExportRegionFldsCRUD from '@/views/RegionManage/ExcelExportRegionFldsCRUD.vue';
  import ViewIdGCVariableRelaCRUD from '@/views/GeneCode/ViewIdGCVariableRelaCRUD.vue';

  import GeneViewCode from '@/views/PrjInterface/GeneViewCode.vue';
  // import ViewInfoCRUD from '@/views/PrjInterface/ViewInfoCRUD.vue';
  import RefreshViewInfo from '@/views/PrjInterface/RefreshViewInfo.vue';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { ViewInfo_AllPropEx } from '@/views/PrjInterface/ViewInfo_AllPropEx';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    viewId_Main,
    tabComponentRef,
  } from '@/views/PrjInterface/ViewInfo_AllPropVueShare';
  export default defineComponent({
    components: {
      ViewInfo_U,
      ViewRegionInTab,
      ViewRelaTabCRUD,
      QryRegionFldsCRUD,
      FeatureRegionFldsCRUD,
      DGRegionFldsCRUD,
      EditRegionFldsCRUD,
      DetailRegionFldsCRUD,
      ExcelExportRegionFldsCRUD,
      ViewIdGCVariableRelaCRUD,
      GeneViewCode,
      // ViewInfoCRUD,
      RefreshViewInfo,
    },
    setup() {
      const route = useRoute(); // 获取当前路由信息
      const viewId = ref(''); // 声明一个 ref 用于存储参数
      const Op = ref(''); // 声明一个 ref 用于存储参数

      const tabs = [
        { label: '界面属性', component: ViewInfo_U, liId: 'liViewProperty' },
        { label: '界面区域', component: ViewRegionInTab, liId: 'liViewRegions' },
        { label: '相关表', component: ViewRelaTabCRUD, liId: 'liViewRelaTab' },
        { label: '查询区', component: QryRegionFldsCRUD, liId: 'liQueryRegion' },
        { label: '功能区', component: FeatureRegionFldsCRUD, liId: 'liFeatureRegion' },
        { label: '列表区', component: DGRegionFldsCRUD, liId: 'liListRegion' },
        { label: '编辑区', component: EditRegionFldsCRUD, liId: 'liEditRegion' },
        { label: '详细区', component: DetailRegionFldsCRUD, liId: 'liDetailRegion' },
        { label: '导出区', component: ExcelExportRegionFldsCRUD, liId: 'liExcelExportRegion' },
        { label: '界面变量', component: ViewIdGCVariableRelaCRUD, liId: 'liEViewIdGCVariableRela' },

        { label: '生成代码', component: GeneViewCode, liId: 'liGeneCode' },
        // { label: '界面列表', component: ViewInfoCRUD },
        { label: '刷新', component: RefreshViewInfo, liId: 'liRefresh' },
      ];
      // const strViewId = clsPrivateSessionStorage.viewId_Main;
      // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      const arrViewRegionType = [
        // { label: '界面属性', component: ViewInfo_U },
        // { label: '界面区域', component: ViewRegionInTab },
        // { label: '相关表', component: ViewRelaTabCRUD },
        { label: '查询区', regionTypeId: enumRegionType.QueryRegion_0001 },
        { label: '功能区', regionTypeId: enumRegionType.FeatureRegion_0008 },
        { label: '列表区', regionTypeId: enumRegionType.ListRegion_0002 },
        { label: '编辑区', regionTypeId: enumRegionType.EditRegion_0003 },
        { label: '详细区', regionTypeId: enumRegionType.DetailRegion_0006 },
        { label: '导出区', regionTypeId: enumRegionType.ExcelExportRegion_0007 },
      ];
      const arrRegionTypeId = clsPrivateSessionStorage.regionTypeIdLst;
      if (arrRegionTypeId.length > 0) {
        for (const objInFor of arrViewRegionType) {
          const arrIsHas = arrRegionTypeId.filter((x) => x == objInFor.regionTypeId);
          if (arrIsHas.length == 0) {
            const tabIndex = tabs.findIndex((tab) => tab.label === objInFor.label);
            if (tabIndex !== -1) {
              tabs.splice(tabIndex, 1);
            }
          }
        }
      }
      const activeViewIndex = ref(0);

      const currentTabComponent = computed(() => {
        return tabs[activeViewIndex.value].component;
      });

      function GetQueryPara() {
        // const Request = new Object();
        // Request = GetRequest();

        if (typeof route.query.viewId === 'string') {
          viewId.value = route.query.viewId;
          clsPrivateSessionStorage.viewId_Main = viewId.value;
          viewId_Main.value = viewId.value;
        } else if (clsPrivateSessionStorage.viewId_Main != '') {
          viewId_Main.value = clsPrivateSessionStorage.viewId_Main;
        }

        // SetInputValueInDivObj(StudentInfoList.divLayout, 'hidCurrEduClsId', idCurrEduCls.value);

        if (typeof route.query.Op === 'string') {
          Op.value = route.query.Op;
        }
      }
      onMounted(() => {
        const intActiveView = clsPrivateSessionStorage.activeViewIndex;
        if (intActiveView > 0) {
          activeViewIndex.value = intActiveView;
        }
        ViewInfo_AllPropEx.divLayout = refDivLayout.value;
        PageLoad();
      });
      function PageLoad() {
        GetQueryPara();
        const objPage = new ViewInfo_AllPropEx();
        objPage.PageLoadCache();
      }
      return {
        tabs,
        activeViewIndex,
        currentTabComponent,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        tabComponentRef,
      };
    },
    methods: {
      changeTab(index: number) {
        this.activeViewIndex = index;
        clsPrivateSessionStorage.activeViewIndex = this.activeViewIndex;
        if (this.refDivList != undefined) {
          if (this.activeViewIndex == 0) {
            this.refDivList.style.display = 'none';
          } else {
            this.refDivList.style.display = 'block';
          }
        }
      },
    },
  });
</script>

<style>
  .tabs-container {
    display: flex;
    flex-direction: row;
  }

  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tabs li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #eee;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #ccc;
  }

  .tab-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }
</style>
