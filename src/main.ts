import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faHome,
  faCoffee,
  faUser,
  faSearch,
  faPlus,
  faPlay,
  faTrashAlt,
  faSortUp,
  faPenToSquare,
  faChevronRight,
  faAnglesRight,
  faAnglesLeft,
  faMaximize,
  faMinimize,
  faPencil,
  faTrash,
  faFloppyDisk,
  faCalculator,
  faFileExcel,
  faRotateRight,
  faRotateLeft,
  faSquarePlus,
  faUserPlus,
  faFileLines,
  faGear,
  faHeart,
  faRectangleList,
  faCircleQuestion,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as farHeart,
  faCircleQuestion as farCircleQuestion,
} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from '@/store';
import { setupI18n } from '@/locales';
import {
  setupAntd,
  setupAssets,
  setupDirectives,
  setupGlobalMethods,
  setupCustomComponents,
} from '@/plugins';
import 'bootstrap/dist/css/bootstrap.css'; // Import the Bootstrap CSS file

library.add(
  faCheck,
  faHome,
  faCoffee,
  faUser,
  faSearch,
  faPlus,
  faPlay,
  faTrashAlt,
  faSortUp,
  faPenToSquare,
  faChevronRight,
  faAnglesRight,
  faAnglesLeft,
  faMaximize,
  faMinimize,
  faPencil,
  faTrash,
  faFloppyDisk,
  faCalculator,
  faFileExcel,
  faRotateRight,
  faRotateLeft,
  faSquarePlus,
  faUserPlus,
  faFileLines,
  faGear,
  faHeart,
  farHeart,
  faRectangleList,
  faCircleQuestion,
  farCircleQuestion,
  faTimes,
);

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);
// app.component('fontAwesomeIcon', FontAwesomeIcon);

// app.component('font-awesome-icon', FontAwesomeIcon);

function setupPlugins() {
  // 注册全局常用的ant-design-vue组件
  setupAntd(app);
  // 引入静态资源
  setupAssets();
  // 注册全局自定义组件,如：<svg-icon />
  setupCustomComponents(app);
  // 注册全局自定义指令，如：v-permission权限指令
  setupDirectives(app);
  // 注册全局方法，如：app.config.globalProperties.$message = message
  setupGlobalMethods(app);
}

async function setupApp() {
  // 挂载vuex状态管理
  setupStore(app);
  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app);
  // 挂载路由
  await setupRouter(app);

  app.mount('#app');
}

setupPlugins();

setupApp();
