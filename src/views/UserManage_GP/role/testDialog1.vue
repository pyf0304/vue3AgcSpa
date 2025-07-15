<template>
  <div>
    <a-button type="primary" @click="showDialog">打开对话框</a-button>
    <a-modal v-model:visible="dialogVisible" title="示例对话框">
      <div>
        <h3>Ant 对话框。</h3>
        <p>这是一个示例对话框内容。</p>
        <p>你可以在这里添加更多的内容。</p>
      </div>
      <template #footer>
        <a-button @click="dialogVisible = false">{{ strCancelButtonText }}</a-button>
        <a-button type="primary" @click="handleSave">保存</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Button, Modal } from 'ant-design-vue';

  export default defineComponent({
    name: 'TestDialog1',
    components: {
      'a-button': Button,
      'a-modal': Modal,
    },
    setup() {
      const dialogVisible = ref(false);

      const showDialog = () => {
        dialogVisible.value = true;
      };

      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };

      return {
        dialogVisible,
        showDialog,
        handleSave,
      };
    },
  });
</script>
