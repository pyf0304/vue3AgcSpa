<template>
  <div>
    <div>
      <label for="availableFields">可选字段：</label>
      <select id="availableFields" v-model="selectedFieldId">
        <option v-for="field in availableFields" :key="field.value" :value="field.value">
          {{ field.text }}
        </option>
      </select>
      <button @click="addSelectedField">添加</button>
    </div>

    <div v-if="selectedFields.length > 0">
      <p>已选择的字段：</p>
      <ul>
        <li v-for="field in selectedFields" :key="field.value">
          {{ field.text }}({{ field.value }})
          <button @click="removeSelectedField(field.value)">移除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { clsCboObject } from '@/ts/PubFun/clsCboObject';

  export default defineComponent({
    props: {
      availableFields: {
        type: Array<clsCboObject>,
        required: true,
      },
      initSelectedFields: {
        type: Array<clsCboObject>,
        required: true,
      },
    },
    data() {
      return {
        selectedFieldId: '',
        selectedFields: [] as clsCboObject[],
      };
    },
    mounted() {
      // 页面绑定完成时的函数
      for (const objInFor of this.initSelectedFields) {
        this.selectedFields.push(objInFor);
      }

      // setTimeout(async () => {
      //   this.pageInitialized();
      // }, 500);
    },
    methods: {
      pageInitialized() {
        console.log(this.availableFields[0]);
        this.selectedFieldId = this.availableFields[0].value;
      },
      addSelectedField() {
        if (this.selectedFieldId == null) return;
        if (this.selectedFieldId == '') return;
        const selectedFldIds = this.selectedFields.map((x) => x.value);
        if (!selectedFldIds.includes(this.selectedFieldId)) {
          const objCboObject = this.availableFields.find((x) => x.value === this.selectedFieldId);
          if (objCboObject != null) this.selectedFields.push(objCboObject);
        }
      },
      removeSelectedField(fieldId: string) {
        if (fieldId == null) return;
        if (fieldId == '') return;

        const index = this.selectedFields.map((x) => x.value).indexOf(fieldId);
        if (index !== -1) {
          this.selectedFields.splice(index, 1);
        }
      },
      getSelectedFldObjLst() {
        return this.selectedFields;
      },
      setSelectedFldObjLst(arrSelectedFields: clsCboObject[]) {
        this.selectedFields = [];
        for (const objInFor of arrSelectedFields) {
          if (this.selectedFields.map((x) => x.value).indexOf(objInFor.value) == -1) {
            this.selectedFields.push(objInFor);
          }
        }
      },

      setSelectedFldId(strFldId: string) {
        this.selectedFieldId = strFldId;
      },
    },
  });
</script>

<style scoped>
  /* 样式直接放在 Vue 文件中 */
  /* ...其他样式 */
</style>
