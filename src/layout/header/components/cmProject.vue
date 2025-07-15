<template>
  <Dropdown placement="bottomRight">
    <!-- <SvgIcon name="locale" /> -->
    <span class="ml-1">子工程: {{ getLocaleText }}{{ Addi }}</span>
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
  import { computed, onMounted, ref } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
  import {
    CMProject_GetNameByCmPrjIdCache,
    CMProject_GetObjLstCache,
  } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
  import {
    CMProjectEx_AddDefaCmProject,
    CMProjectEx_SortFunByCmPrjName,
  } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    UserDefaValue_LocalEx_getUserDefaValue,
    UserDefaValue_LocalEx_setUserDefaValue,
  } from '@/ts/L3ForWApiEx/UserManage/clsUserDefaValue_LocalExWApi';
  import { clsPubVar } from '@/ts/PubConfig/clsPubVar';
  interface Option {
    value: any;
    label: string;
  }
  const selectedKeys = ref<string[]>([]);
  // const options = await getData();
  // const options = [
  //   { value: 'option1', label: '选项1' },
  //   { value: 'option2', label: '选项2' },
  //   { value: 'option3', label: '选项3' },
  // ];
  const options = ref<Option[]>([]);
  // console.log('options:', options);
  const Addi = ref('测试');
  const getLocaleText = computed(() => {
    const key = selectedKeys.value[0];
    if (!key) {
      return '';
    }
    const strOptionLabel = options.value.find((item) => item.value === key)?.label;
    console.log('strOptionLabel:', strOptionLabel);
    return strOptionLabel;
  });
  const CmPrjId = ref(''); //await GetDefaCmPrjId();
  // console.log(strCmPrjId);
  async function handleMenuClick({ key }) {
    console.log(key);
    const objSelOption = options.value.find((x) => x.value === key);
    if (objSelOption != null) {
      Addi.value = objSelOption.label;
      await SaveCmPrjId(key);
      clsPrivateSessionStorage.cmPrjId = key;
    }
  }
  // 定义 getData 函数

  const getData = async () => {
    console.log('开始绑定数据：CMProject');
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    let arrObjLst_Sel: Array<clsCMProjectEN> = await CMProject_GetObjLstCache();
    arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.prjId == strPrjId);
    arrObjLst_Sel = arrObjLst_Sel.sort(CMProjectEx_SortFunByCmPrjName);
    options.value = arrObjLst_Sel.map((x) => ({
      value: x.cmPrjId,
      label: `${x.cmPrjName}(${x.cmPrjId})`,
    }));
    // console.log('结束绑定数据：CMProject', strPrjId);
    setTimeout(() => {
      GetDefaCmPrjId();
    }, 100);
  };

  // 暴露 getData 函数给父组件
  // const exposedGetData = ref(getData);
  // 暴露 getData 方法
  const exposedGetData = getData;
  async function SaveCmPrjId(strCmPrjId: string) {
    if (IsNullOrEmpty(clsPrivateSessionStorage.currPrjId)) {
      clsPrivateSessionStorage.currPrjId = clsPubVar.currPrjId;
    }
    const strCurrPrjId = clsPrivateSessionStorage.currPrjId;

    if (IsNullOrEmpty(strCmPrjId) == false) {
      await UserDefaValue_LocalEx_setUserDefaValue(
        strCurrPrjId,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
        '默认CM工程',
        strCmPrjId,
      );
    } else {
      const strMsg = Format(
        '在工程:[{0}({1})]新建Cm默认工程不成功，请检查!',
        clsPrivateSessionStorage.currSelPrjName,
        clsPrivateSessionStorage.currSelPrjId,
      );
      console.error(strMsg);
      alert(strMsg);
      return '';
    }
  }

  async function GetDefaCmPrjId() {
    const strCurrPrjId = clsPrivateSessionStorage.currPrjId;
    let strCmPrjId = await UserDefaValue_LocalEx_getUserDefaValue(
      strCurrPrjId,
      clsPrivateSessionStorage.currSelPrjId,
      clsPubLocalStorage.userId,
      '默认CM工程',
    );
    if (IsNullOrEmpty(strCmPrjId) || strCmPrjId == '0') {
      strCmPrjId = await CMProjectEx_AddDefaCmProject(
        clsPrivateSessionStorage.currSelPrjId,
        clsPrivateSessionStorage.currSelPrjName,
        clsPubLocalStorage.userId,
      );
      await SaveCmPrjId(strCmPrjId);
    }

    clsPrivateSessionStorage.cmPrjId = strCmPrjId;
    const strCmPrjName = await CMProject_GetNameByCmPrjIdCache(strCmPrjId);
    clsPrivateSessionStorage.cmPrjName = strCmPrjName;
    console.log('cmPrjId:', strCmPrjId);
    CmPrjId.value = strCmPrjId;
    //    return strCmPrjId;
    Addi.value = strCmPrjName;
  }

  onMounted(() => {
    getData();

    // GetDefaCmPrjId();
  });
  // 暴露 exposedGetData 到外部，以便父组件可以访问
  // const exposeMethods = () => ({
  //   getData: exposedGetData,
  // });

  defineExpose({
    getData: exposedGetData,
  });
</script>
