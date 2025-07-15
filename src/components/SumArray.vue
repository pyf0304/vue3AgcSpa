<template>
  <div>
    <h1>数组求和</h1>
    <p>数组: {{ array }}</p>
    <p>和: {{ sum }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'SumArray',
    setup() {
      const array = ref([1, 2, 3, 4, 5]);
      const sum = ref(array.value.reduce((acc, val) => acc + val, 0));

      return {
        array,
        sum,
      };
    },
  });
</script>

<style scoped>
  h1 {
    font-size: 24px;
  }
</style>
