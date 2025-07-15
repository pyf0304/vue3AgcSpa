<template>
  <div>
    <h1>这是 Main 组件</h1>
    <SumArray />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SumArray from './SumArray.vue';

  export default defineComponent({
    name: 'SumArrayTest',
    components: {
      SumArray,
    },
  });
</script>

<style scoped>
  h1 {
    font-size: 24px;
  }
</style>
