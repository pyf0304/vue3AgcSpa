<template>
  <div>
    <div>
      <label for="availableFields">可选字段：</label>
      <select id="availableFields" v-model="selectedField">
        <option v-for="field in availableFields" :key="field" :value="field">
          {{ field }}
        </option>
      </select>
      <button @click="addSelectedField">添加</button>
    </div>

    <div v-if="selectedFields.length > 0">
      <p>已选择的字段：</p>
      <ul>
        <li v-for="field in selectedFields" :key="field">
          {{ field }}
          <button @click="removeSelectedField(field)">移除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    props: {
      availableFields: {
        type: Array as PropType<string[]>,
        required: true,
      },
    },
    data() {
      return {
        selectedField: '',
        selectedFields: [] as string[],
      };
    },
    methods: {
      addSelectedField() {
        if (this.selectedField && !this.selectedFields.includes(this.selectedField)) {
          this.selectedFields.push(this.selectedField);
        }
      },
      removeSelectedField(field: string) {
        const index = this.selectedFields.indexOf(field);
        if (index !== -1) {
          this.selectedFields.splice(index, 1);
        }
      },
    },
  });
</script>

<style scoped>
  /* 样式直接放在 Vue 文件中 */
  /* ...其他样式 */
</style>
