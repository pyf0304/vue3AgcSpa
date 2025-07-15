<template>
  <div id="divLayout" ref="refDivLayout">
    <div class="tab-header">
      <div
        v-for="(tab, index) in filteredTabs_header"
        :key="index"
        :class="{ active: activeTabIndex === index }"
        @click="changeTab(index)"
      >
        {{ tab.label }} </div
      ><div>
        <ul class="nav nav-tabs" role="navigation">
          <li class="nav-item ml-1"
            ><span class="text-info font-weight-bold title-text">表名:</span
            ><span
              id="spnTabName"
              ref="refSpnTabName"
              class="text-secondary font-weight-bold title-text"
            ></span
          ></li>
          <li class="nav-item ml-1">
            <a id="aEditRelaTab"></a>
          </li>
          <li id="liAddNewView" class="nav-item ml-1">
            <a id="aAddNewView"></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="tab-content">
      <component
        :is="tab.component"
        v-for="(tab, index) in filteredTabs"
        :key="index"
        v-bind="tab.props"
        :ref="tab.ref"
        :tab-id="tabId"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import PrjTab_UVue from '@/views/Table_Field/PrjTab_U.vue';
  import PrjTabFldCRUDVue from '@/views/Table_Field/PrjTabFldCRUD.vue';
  import PrjTabFldCRUD_Consistency from '@/views/Table_Field/PrjTabFldCRUD_Consistency.vue';

  import PrjConstraintCRUDInTab from '@/views/Table_Field/PrjConstraintCRUDInTab.vue';
  import TabFeatureCRUD_Edit from '@/views/Table_Field/TabFeatureCRUD_Edit.vue';
  // import TabFunctionPropCRUD from '@/views/Table_Field/TabFunctionPropCRUD.vue';
  import DnFuncMapCRUD_Edit from '@/views/AIModule/DnFuncMapCRUD_Edit.vue';
  import ShowDnPathByTable from '@/views/AIModule/ShowDnPathByTable.vue';
  import GeneTabCode from '@/views/Table_Field/GeneTabCode.vue';
  import { PrjTab_AllPropEx } from '@/views/Table_Field/PrjTab_AllPropEx';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import DnFuncMapCRUD_EditEx from '@/views/AIModule/DnFuncMapCRUD_EditEx';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refSpnTabName,
    tabId_Session,
    refPrjTabU,
    refPrjTabFldCRUD,
    refPrjConstraintCRUDInTab,
    refTabFeatureCRUD_Edit,
    refPrjTabFldCRUD_Consistency,
    refDnFuncMapCRUD_Edit,
    refShowDnPathByTable,
    refGeneTabCode,
  } from '@/views/Table_Field/PrjTab_AllPropVueShare';
  // import ViewInfoCRUD from '@/views/Table_Field/ViewInfoCRUD.vue';

  export default defineComponent({
    // components: {
    //   PrjTab_UVue: shallowRef(PrjTab_UVue),
    //   PrjTabFldCRUDVue: shallowRef(PrjTabFldCRUDVue),
    //   PrjTabFldCRUD_Consistency: shallowRef(PrjTabFldCRUD_Consistency),
    //   PrjConstraintCRUDInTab: shallowRef(PrjConstraintCRUDInTab),
    //   TabFeatureCRUD_Edit: shallowRef(TabFeatureCRUD_Edit),
    //   DnFuncMapCRUD_Edit: shallowRef(DnFuncMapCRUD_Edit),
    //   GeneTabCode: shallowRef(GeneTabCode),
    //   ShowDnPathByTable: shallowRef(ShowDnPathByTable),
    // },
    components: {
      PrjTab_UVue,
      PrjTabFldCRUDVue,
      PrjTabFldCRUD_Consistency,
      PrjConstraintCRUDInTab,
      TabFeatureCRUD_Edit,
      DnFuncMapCRUD_Edit,
      GeneTabCode,
      ShowDnPathByTable,
    },

    setup() {
      tabId_Session.value = clsPrivateSessionStorage.tabId_Main;
      const route = useRoute(); // 获取当前路由信息

      const router = useRouter();
      const tabId = ref(''); // 声明一个 ref 用于存储参数
      const Op = ref(''); // 声明一个 ref 用于存储参数
      const tabRefs = ref<{ [key: string]: any }>({});
      // const refPrjTabU = ref();
      // const refPrjTabFldCRUD = ref();
      // const refPrjTabFldCRUD_Consistency = ref();
      // const refPrjConstraintCRUDInTab = ref();
      // const refTabFeatureCRUD_Edit = ref();
      // const refDnFuncMapCRUD_Edit = ref();
      // const refGeneTabCode = ref();
      // const refShowDnPathByTable = ref();

      const activeTabIndex = ref(0);
      const tabs = [
        { label: '表属性', component: PrjTab_UVue, ref: 'refPrjTabU', activeTabIndex: 0 },
        {
          label: '表字段',
          component: PrjTabFldCRUDVue,
          ref: 'refPrjTabFldCRUD',
          props: { opType: 'TabFldEdit' },
          activeTabIndex: 1,
        },
        {
          label: '相关约束',
          component: PrjConstraintCRUDInTab,
          ref: 'refPrjConstraintCRUDInTab',
          activeTabIndex: 2,
        },
        {
          label: '相关功能',
          component: TabFeatureCRUD_Edit,
          ref: 'refTabFeatureCRUD_Edit',
          activeTabIndex: 3,
        },
        {
          label: '一致性',
          component: PrjTabFldCRUD_Consistency,
          ref: 'refPrjTabFldCRUD_Consistency',
          props: { opType: 'CheckConsistency' },
          activeTabIndex: 4,
        },
        // // { label: '函数属性', component: TabFunctionPropCRUD },
        {
          label: '结点关系',
          component: DnFuncMapCRUD_Edit,
          ref: 'refDnFuncMapCRUD_Edit',
          activeTabIndex: 5,
        },
        {
          label: '结点图',
          component: ShowDnPathByTable,
          ref: 'refShowDnPathByTable',
          props: { tabId: tabId_Session.value },
          activeTabIndex: 6,
        },
        { label: '生成代码', component: GeneTabCode, ref: 'refGeneTabCode', activeTabIndex: 7 },
        // // { label: '界面列表', component: ViewInfoCRUD },
        // { label: '刷新', component: RefreshViewInfo },
      ];
      function getTabRefName(tab: any, index: number) {
        // 生成唯一ref名
        return `tabRef_${index}`;
      }

      onMounted(() => {
        const rTabId = route.params.tabId;
        console.log('rTabId:', rTabId);
        const intActiveTab = clsPrivateSessionStorage.activeTabIndex;
        if (intActiveTab > 0) {
          activeTabIndex.value = intActiveTab;
        } else {
          clsPrivateSessionStorage.activeTabIndex = 1;
          activeTabIndex.value = 1;
        }
        PageLoad();
      });
      function PageLoad() {
        GetQueryPara();
        PrjTab_AllPropEx.vuebtn_Click = btn_Click;
        PrjTab_AllPropEx.GetPropValue = GetPropValue;
        DnFuncMapCRUD_EditEx.GetPropValue = GetPropValue;
        const objPage = new PrjTab_AllPropEx();
        objPage.PageLoadCache();
      }
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'tabId':
            return tabId.value;
          case 'Op':
            return Op.value;
          default:
            return '';
        }
        // return '';
      }
      function GetQueryPara() {
        // const Request = new Object();
        // Request = GetRequest();

        // if (typeof route.params.tabId === 'string') {
        //   tabId.value = route.params.tabId;
        // }
        tabId.value = clsPrivateSessionStorage.tabId_Main;
        // SetInputValueInDivObj(StudentInfoList.divLayout, 'hidCurrEduClsId', idCurrEduCls.value);

        if (typeof route.query.Op === 'string') {
          Op.value = route.query.Op;
        }
      }
      function EditPrjTab(strTabId: string) {
        clsPrivateSessionStorage.tabId_Main = strTabId;
        if (route == null) {
          router.push({ name: 'account-editTabRelaInfo' });

          return;
        }
        console.log('route:', route);
        const params = route.params.tabId ? { tabId: route.params.tabId } : { tabId: strTabId };
        router.push({ name: 'account-editTabRelaInfo', params });

        // alert(strTabId);
      }
      function btn_Click(strCommandName: string, strKeyId: any) {
        const objData = strKeyId;
        switch (strCommandName) {
          case 'EditPrjTab':
            EditPrjTab(strKeyId);
            break;
          case 'PageLoad':
            tabId.value = objData.tabId;
            clsPrivateSessionStorage.tabId_Main = objData.tabId;
            Op.value = objData.Op;
            PageLoad();
            return;
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
        PrjTab_AllPropEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        refSpnTabName,
        tabs,
        activeTabIndex,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        tabId,
        getTabRefName,
        tabRefs,
        refPrjTabU,
        refPrjTabFldCRUD,
        refPrjTabFldCRUD_Consistency,
        refPrjConstraintCRUDInTab,
        refTabFeatureCRUD_Edit,
        refDnFuncMapCRUD_Edit,
        refGeneTabCode,
        refShowDnPathByTable,
      };
    },

    computed: {
      filteredTabs(): { label: string; component: any; ref: any; props?: any }[] {
        // Filter the tabs array based on your condition
        // For example, if you want to exclude 'Tab 3':
        return this.tabs.filter(
          (tab) => tab.label !== 'Tab 3' && tab.activeTabIndex === this.activeTabIndex,
        );
      },
      filteredTabs_header(): { label: string; component: any; ref: any; props?: any }[] {
        // Filter the tabs array based on your condition
        // For example, if you want to exclude 'Tab 3':
        return this.tabs.filter((tab) => tab.label !== 'Tab 3');
      },
    },

    methods: {
      changeTab(index: number) {
        this.activeTabIndex = index;
        clsPrivateSessionStorage.activeTabIndex = this.activeTabIndex;
        if (index == 0) {
          this.$nextTick(() => {
            try {
              const comp = this.$refs.refPrjTabU as any;
              if (comp) {
                this.refPrjTabU = comp[0];
              }
              if (comp && typeof comp[0].ShowDetail === 'function') {
                comp[0].ShowDetail();
              } else {
                console.error('没有找到ShowDetail方法');
              }
            } catch (e) {
              console.error('调用[ShowDetail]时出错:', e);
            }
          });
          // console.log('activeTabIndex:', this.activeTabIndex);
          // console.log('filteredTabs:', this.filteredTabs);
        }
      },
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

  .title-text {
    font-size: 1.2rem; /* 设置字体大小为 1.5rem（根据需要调整大小） */
  }
</style>
