<template>
  <div>
    <a-button type="primary" @click="showDialog">打开对话框</a-button>
    <a-modal
      v-model:visible="dialogVisible"
      title="对话框示例"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form :form="formRef">
        <a-form-item label="文本框">
          <a-input v-model:value="form.text" />
        </a-form-item>
        <a-form-item label="下拉框">
          <a-select v-model:value="form.select">
            <a-select-option value="option1">选项1</a-select-option>
            <a-select-option value="option2">选项2</a-select-option>
            <a-select-option value="option3">选项3</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="复选框">
          <a-checkbox v-model:checked="form.checkbox">复选框</a-checkbox>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Button, Modal, Form, Input, Select, Checkbox } from 'ant-design-vue';

  export default defineComponent({
    components: {
      'a-button': Button,
      'a-modal': Modal,
      'a-form': Form,
      'a-form-item': Form.Item,
      'a-input': Input,
      'a-select': Select,
      'a-select-option': Select.Option,
      'a-checkbox': Checkbox,
    },
    setup() {
      const dialogVisible = ref(false);
      const formRef = ref(null);
      const form = ref({
        text: '',
        select: '',
        checkbox: false,
      });

      const showDialog = () => {
        dialogVisible.value = true;
      };

      const handleOk = () => {
        (formRef.value as any)
          .validate()
          .then(() => {
            // 在这里处理对话框确认逻辑
            console.log('确认');
            dialogVisible.value = false;
          })
          .catch((error) => {
            console.log('表单校验失败', error);
          });
      };

      const handleCancel = () => {
        // 在这里处理对话框取消逻辑
        console.log('取消');
        dialogVisible.value = false;
      };

      return {
        dialogVisible,
        formRef,
        form,
        showDialog,
        handleOk,
        handleCancel,
      };
    },
  });
</script>
