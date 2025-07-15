<template>
  <Dropdown placement="bottomRight">
    <!-- <SvgIcon name="locale" /> -->
    <span class="ml-1">{{ Addi }}{{ getLocaleText }}</span>
    <template #overlay>
      <Menu v-model:selectedKeys="selectedKeys" @click="handleMenuClick">
        <Menu.Item v-for="item in options" :key="item.value">
          <a href="javascript:;">{{ item.label }}</a>
        </Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>
<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';

  const selectedKeys = ref<string[]>([]);
  const options = [
    { value: 'option1', label: '选项1' },
    { value: 'option2', label: '选项2' },
    { value: 'option3', label: '选项3' },
  ];
  const Addi = ref('测试');
  const getLocaleText = computed(() => {
    const key = selectedKeys.value[0];
    if (!key) {
      return '';
    }
    const strOptionLabel = options.find((item) => item.value === key)?.label;
    console.log('strOptionLabel:', strOptionLabel);
    return strOptionLabel;
  });

  function handleMenuClick({ key }) {
    console.log(key);
    const objSelOption = options.find((x) => x.value === key);
    if (objSelOption != null) {
      Addi.value = objSelOption.label;
    }
  }
</script>
