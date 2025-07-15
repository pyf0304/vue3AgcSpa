<template>
  <div class="info-dropdown">
    <a-dropdown trigger="click" @visible-change="handleDropdownVisibleChange">
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="option in options" :key="option.value" :value="option.value">
            {{ option.label }}
          </a-menu-item>
        </a-menu>
      </template>
      <a class="ant-dropdown-link" @click="handleDropdownClick">
        {{ selectedOption.label }}
      </a>
    </a-dropdown>
    <div class="info">
      <span class="info-label">信息：</span>
      <span class="info-value">{{ selectedOption.label }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';

  export default defineComponent({
    components: {
      'a-dropdown': Dropdown,
      'a-menu': Menu,
      'a-menu-item': Menu.Item,
    },
    setup() {
      const options = [
        { value: 'option1', label: '选项1' },
        { value: 'option2', label: '选项2' },
        { value: 'option3', label: '选项3' },
      ];

      const selectedOption = ref(options[1]); // 设置默认选中的选项为第二项

      const handleDropdownVisibleChange = (visible: boolean) => {
        console.log(visible);
        // 处理下拉菜单的显示/隐藏变化事件
      };

      const handleDropdownClick = () => {
        // 处理下拉菜单的点击事件
        // selectedOption.value = value;
        console.log('selectedOption:(in handleOptionChange)', selectedOption);
      };
      // const handleOptionChange = (value: string) => {
      //   // 更新选项值
      //   selectedOption.value = value;
      //   console.log('selectedOption:(in handleOptionChange)', selectedOption);
      // };
      return {
        options,
        selectedOption,
        handleDropdownVisibleChange,
        handleDropdownClick,
      };
    },
  });
</script>

<style scoped>
  .info-dropdown {
    display: flex;
    align-items: center;
  }

  .info {
    margin-top: 10px;
  }

  .info-label {
    font-weight: bold;
  }
</style>
