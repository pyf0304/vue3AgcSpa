<template>
  <ConfigProvider :locale="getAntdLocale">
    <router-view #="{ Component }">
      <component :is="Component" />
    </router-view>
    <LockScreen />
    <!-- <SumArrayTest /> -->
    <!-- 添加 SumArrayTest 组件 -->
  </ConfigProvider>
</template>

<script setup lang="ts">
  import { watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  import { ConfigProvider } from 'ant-design-vue';
  import { transformI18n } from './hooks/useI18n';

  import { LockScreen } from '@/components/basic/lockscreen';
  import { useLocale } from '@/locales/useLocale';

  const route = useRoute();
  const { getAntdLocale } = useLocale();

  watchEffect(() => {
    if (route.meta?.title) {
      // 翻译网页标题
      document.title = transformI18n(route.meta.title);
    }
  });
</script>

<style lang="less"></style>
