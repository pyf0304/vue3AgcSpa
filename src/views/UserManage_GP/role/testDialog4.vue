<template>
  <div>
    <button @click="showDialog">打开对话框</button>

    <transition name="fade">
      <div v-if="isDialogVisible" class="dialog-overlay">
        <div class="dialog">
          <h2>对话框</h2>

          <label>文本框：</label>
          <input v-model="inputValue" type="text" />

          <label>下拉框：</label>
          <el-select v-model="selectedValue">
            <el-option label="选项1" value="option1" />
            <el-option label="选项2" value="option2" />
            <el-option label="选项3" value="option3" />
          </el-select>

          <label>复选框：</label>
          <el-checkbox v-model="isChecked">选中</el-checkbox>

          <div class="buttons">
            <button @click="hideDialog">关闭</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const isDialogVisible = ref(false);
  const inputValue = ref('');
  const selectedValue = ref('');
  const isChecked = ref(false);

  const showDialog = () => {
    isDialogVisible.value = true;
  };

  const hideDialog = () => {
    isDialogVisible.value = false;
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }

  .buttons {
    text-align: right;
    margin-top: 10px;
  }
</style>
