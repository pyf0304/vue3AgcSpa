<template>
  <Layout.Header :style="headerStyle" class="layout-header">
    <Space :size="20">
      <slot>
        <Space :size="20">
          <span class="menu-fold" @click="() => emit('update:collapsed', !collapsed)">
            <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" />
          </span>
          <Breadcrumb>
            <template v-for="(routeItem, rotueIndex) in menus" :key="routeItem?.name">
              <Breadcrumb.Item>
                <TitleI18n :title="routeItem?.meta?.title" />
                <template v-if="routeItem?.children?.length" #overlay>
                  <Menu :selected-keys="getSelectKeys(rotueIndex)">
                    <template v-for="childItem in routeItem?.children" :key="childItem.name">
                      <Menu.Item
                        v-if="!childItem.meta?.hideInMenu && !childItem.meta?.hideInBreadcrumb"
                        :key="childItem.name"
                        @click="clickMenuItem(childItem)"
                      >
                        <TitleI18n :title="childItem.meta?.title" />
                      </Menu.Item>
                    </template>
                  </Menu>
                </template>
              </Breadcrumb.Item>
            </template>
          </Breadcrumb>
        </Space>
      </slot>
    </Space>
    <Space :size="20">
      <!-- <testDropDown show-text:="true" /> -->

      <Project @on-project-change="ProjectChange" />
      <PrjDataBase ref="refPrjDataBase" />
      <CmProject ref="refCmProject" />
      <Search />
      <Tooltip :title="$t('layout.header.tooltipLock')" placement="bottom">
        <LockOutlined @click="lockscreenStore.setLock(true)" />
      </Tooltip>
      <FullScreen />
      <LocalePicker />
      <Dropdown placement="bottomRight">
        <Avatar :src="userInfo.headImg" :alt="userInfo.name">{{ userInfo.name }}</Avatar>
        <template #overlay>
          <Menu>
            <Menu.Item @click="$router.push({ name: 'account-about' })">
              {{ $t('routes.account.about') }}
            </Menu.Item>
            <Menu.Item @click="$router.push({ name: 'account-selectPrj' })">
              {{ $t('routes.account.selectPrj') }}
            </Menu.Item>
            <Menu.Item @click="$router.push({ name: 'account-settings' })">
              {{ $t('routes.account.settings') }}
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
              <div @click.prevent="doLogout">
                <poweroff-outlined /> {{ $t('layout.header.dropdownItemLoginOut') }}
              </div>
            </Menu.Item>
          </Menu>
        </template>
      </Dropdown>
      <ProjectSetting />
    </Space>
  </Layout.Header>
</template>

<script lang="tsx" setup>
  import { computed, nextTick, type CSSProperties, ref } from 'vue';
  import { useRouter, useRoute, RouteRecordRaw } from 'vue-router';
  import {
    QuestionCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PoweroffOutlined,
    LockOutlined,
  } from '@ant-design/icons-vue';
  import {
    Layout,
    message,
    Modal,
    Dropdown,
    Menu,
    Space,
    Breadcrumb,
    Avatar,
    Tooltip,
    type MenuTheme,
  } from 'ant-design-vue';
  import { Search, FullScreen, ProjectSetting } from './components/';
  import CmProject from './components/cmProject.vue';
  import Project from './components/project.vue';
  import PrjDataBase from './components/prjDataBase.vue';
  // import testDropDown from './components/testDropDown2.vue';

  import { LocalePicker } from '@/components/basic/locale-picker';
  import { useUserStore } from '@/store/modulesShare/user';
  import { useKeepAliveStore } from '@/store/modules/keepAlive';
  import { useLockscreenStore } from '@/store/modules/lockscreen';
  import { LOGIN_NAME } from '@/router/constant';
  import { TitleI18n } from '@/components/basic/title-i18n';
  import { useThemeStore } from '@/store/modules/projectConfig';

  defineProps({
    collapsed: {
      type: Boolean,
    },
    theme: {
      type: String as PropType<MenuTheme>,
    },
  });

  const refCmProject = ref<typeof CmProject | null>(null);
  const refPrjDataBase = ref<typeof PrjDataBase | null>(null);

  const emit = defineEmits(['update:collapsed']);
  const userStore = useUserStore();
  const themeStore = useThemeStore();
  const lockscreenStore = useLockscreenStore();
  const keepAliveStore = useKeepAliveStore();

  const router = useRouter();
  const route = useRoute();
  const userInfo = computed(() => userStore.userInfo);
  const headerStyle = computed<CSSProperties>(() => {
    const { navTheme, layout } = themeStore;
    const isDark = navTheme === 'dark' && layout === 'topmenu';
    return {
      backgroundColor: navTheme === 'realDark' || isDark ? '' : 'rgba(255, 255, 255, 0.85)',
      color: isDark ? 'rgba(255, 255, 255, 0.85)' : '',
    };
  });

  const menus = computed(() => {
    if (route.meta?.namePath) {
      let children = userStore.menus;
      const paths = route.meta?.namePath?.map((item) => {
        const a = children.find((n) => n.name === item);
        children = a?.children || [];
        return a;
      });
      return [
        {
          name: '__index',
          meta: {
            title: '首页',
          },
          children: userStore.menus,
        },
        ...paths,
      ];
    }
    return route.matched;
  });

  const getSelectKeys = (rotueIndex: number) => {
    return [menus.value[rotueIndex + 1]?.name] as string[];
  };

  const findLastChild = (route?: RouteRecordRaw) => {
    if (typeof route?.redirect === 'object') {
      const redirectValues = Object.values(route.redirect);
      if (route?.children?.length) {
        const target = route.children.find((n) =>
          redirectValues.some((m) => [n.name, n.path, n.meta?.fullPath].some((v) => v === m)),
        );
        return findLastChild(target);
      }
      return redirectValues.find((n) => typeof n === 'string');
    } else if (typeof route?.redirect === 'string') {
      if (route?.children?.length) {
        const target = route.children.find((n) =>
          [n.name, n.path, n.meta?.fullPath].some((m) => m === route?.redirect),
        );
        return findLastChild(target);
      }
      return route?.redirect;
    }
    return route;
  };
  const getRouteByName = (name: string) => router.getRoutes().find((n) => n.name === name);

  // 点击菜单
  const clickMenuItem = (menuItem: RouteRecordRaw) => {
    const lastChild = findLastChild(menuItem);
    console.log('lastChild', menuItem, lastChild);

    const targetRoute = getRouteByName(lastChild?.name);
    const { isExt, openMode } = targetRoute?.meta || {};
    if (isExt && openMode !== 2) {
      window.open(lastChild?.name);
    } else {
      router.push({ name: lastChild?.name });
    }
  };
  const ProjectChange = (data: any) => {
    console.log('data:', data);

    // const strPrjId = data.prjId;
    console.log(refCmProject.value);
    if (refCmProject.value != null) {
      refCmProject.value.getData();
    }
    if (refPrjDataBase.value != null) {
      refPrjDataBase.value.getData();
    }
    // alert(`ProjectChange:${strPrjId}`);
  };
  // 退出登录
  const doLogout = () => {
    Modal.confirm({
      title: '您确定要退出登录吗？',
      icon: <QuestionCircleOutlined />,
      centered: true,
      onOk: async () => {
        // 如果不是rootadmin，则退出登录
        if (userStore.userInfo.phone !== '13553550634') {
          // logout({})
          await userStore.logout();
        }
        keepAliveStore.clear();
        // 移除标签页
        localStorage.clear();
        message.success('成功退出登录');
        await nextTick();
        router.replace({
          name: LOGIN_NAME,
          query: {
            redirect: route.fullPath,
          },
        });
      },
    });
  };
</script>

<style lang="less" scoped>
  .layout-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    height: @header-height;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;

    * {
      cursor: pointer;
    }
  }
</style>
@/store/modulesShare/user
