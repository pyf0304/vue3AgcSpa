<template>
  <div id="tabs-container">
    <div id="tabs">
      <div v-for="(group, index) in groups" :key="index" class="tab">
        <div class="dropdown" @click="selectTab(index)">
          <button :class="{ active: selectedTab === index }">
            {{ group[0] }}
            <!-- 显示第一个表名 -->
          </button>
          <div class="dropdown-content">
            <p v-for="table in group" :key="table">{{ table }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedTab !== null">
      <h2>Selected Tab: Group {{ selectedTab + 1 }}</h2>
      <p>Tables: {{ groups[selectedTab].join(', ') }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'DropdownTabs',
    setup() {
      const groups = ref<string[][]>([
        ['Table A', 'Table B', 'Table C'],
        ['Table D', 'Table E'],
        ['Table F', 'Table G', 'Table H', 'Table I'],
      ]);

      const selectedTab = ref<number | null>(null);

      const selectTab = (index: number) => {
        selectedTab.value = index;
      };

      return {
        groups,
        selectedTab,
        selectTab,
      };
    },
  });
</script>

<style scoped>
  #tabs-container {
    overflow-x: auto; /* 水平滚动条 */
    display: flex;
    flex-direction: column;
  }

  #tabs {
    display: flex;
    flex-direction: row;
    margin-bottom: 6px;
  }

  .tab {
    margin-right: 10px;
    position: relative;
  }

  button.active {
    font-weight: bold;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content p {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content p:hover {
    background-color: #f1f1f1;
  }
</style>
