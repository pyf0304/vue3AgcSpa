<template>
  <div>
    <ul class="tabs">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.label }}
      </li>
    </ul>

    <component :is="currentTabComponent" />
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import PrjTab_UVue from '@/views/Table_Field/PrjTab_U.vue';
  import PrjTabFldCRUDVue from '@/views/Table_Field/PrjTabFldCRUD.vue';
  import PrjConstraintCRUD from '@/views/Table_Field/PrjConstraintCRUD.vue';
  import TabFeatureCRUD_Edit from '@/views/Table_Field/TabFeatureCRUD_Edit.vue';
  // import TabFunctionPropCRUD from '@/views/Table_Field/TabFunctionPropCRUD.vue';
  import DnFuncMapCRUD_Edit from '@/views/AIModule/DnFuncMapCRUD_Edit.vue';
  import GeneTabCode from '@/views/Table_Field/GeneTabCode.vue';

  // import ViewInfoCRUD from '@/views/Table_Field/ViewInfoCRUD.vue';

  export default defineComponent({
    components: {
      PrjTab_UVue,
      PrjTabFldCRUDVue,
      PrjConstraintCRUD,
      TabFeatureCRUD_Edit,
      // TabFunctionPropCRUD,
      DnFuncMapCRUD_Edit,
      GeneTabCode,
      // ViewInfoCRUD,
      // RefreshViewInfo,
    },
    setup() {
      const tabs = [
        { label: '表属性', component: PrjTab_UVue },
        { label: '表字段', component: PrjTabFldCRUDVue, props: { opType: 'TabFldEdit' } },
        { label: '相关约束', component: PrjConstraintCRUD },
        { label: '相关功能', component: TabFeatureCRUD_Edit },
        { label: '一致性', component: PrjTabFldCRUDVue, props: { opType: 'CheckConsistency' } },
        // // { label: '函数属性', component: TabFunctionPropCRUD },
        { label: '结点关系', component: DnFuncMapCRUD_Edit },
        { label: '生成代码', component: GeneTabCode },
        // // { label: '界面列表', component: ViewInfoCRUD },
        // { label: '刷新', component: RefreshViewInfo },
      ];
      // const strViewId = clsPrivateSessionStorage.viewId_Main;
      // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

      const activeTab = ref(0);

      const currentTabComponent = computed(() => {
        return tabs[activeTab.value].component;
      });

      return {
        tabs,
        activeTab,
        currentTabComponent,
      };
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
