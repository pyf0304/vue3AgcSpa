<template>
  <Dropdown placement="bottomRight">
    <!-- <SvgIcon name="locale" /> -->
    <span class="ml-1">数据库: {{ getLocaleText }}{{ Addi }}</span>
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
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsPubVar } from '@/ts/PubConfig/clsPubVar';
  import { PrjDataBaseEx_GetObjExLstByPrjId } from '@/ts/L3ForWApiEx/PrjManage/clsPrjDataBaseExWApi';
  import {
    UserDefaPrjDataBaseEx_GetObjByPrjIdAndUserId,
    UserDefaPrjDataBaseEx_SetPrjDataBaseIdByPrjIdAndUserId,
  } from '@/ts/L3ForWApiEx/SystemSet/clsUserDefaPrjDataBaseExWApi';
  import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
  import {
    PrjDataBase_GetNameByPrjDataBaseIdCache,
    PrjDataBase_GetObjByPrjDataBaseIdCache,
  } from '@/ts/L3ForWApi/PrjManage/clsPrjDataBaseWApi';
  import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';

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

  // console.log(strPrjDataBaseId);
  async function handleMenuClick({ key }) {
    console.log(key);
    const objSelOption = options.value.find((x) => x.value === key);
    if (objSelOption != null) {
      Addi.value = objSelOption.label;
      await SavePrjDataBaseId(key);
      clsPrivateSessionStorage.currPrjDataBaseId = key;
    }
  }
  // 定义 getData 函数

  const getData = async () => {
    console.log('开始绑定数据：CMProject');
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const arrObjLst_Sel = await PrjDataBaseEx_GetObjExLstByPrjId(strPrjId);

    options.value = arrObjLst_Sel.map((x) => ({
      value: x.prjDataBaseId,
      label: x.prjDataBaseName,
    }));
    // console.log('结束绑定数据：CMProject', strPrjId);
    setTimeout(() => {
      GetDefaPrjDataBaseId();
    }, 100);
  };

  // 暴露 getData 函数给父组件
  // const exposedGetData = ref(getData);
  // 暴露 getData 方法
  const exposedGetData = getData;
  async function SavePrjDataBaseId(strPrjDataBaseId: string) {
    if (IsNullOrEmpty(clsPrivateSessionStorage.currSelPrjId)) {
      clsPrivateSessionStorage.currSelPrjId = clsPubVar.currPrjId;
    }
    const strCurrSelPrjId = clsPrivateSessionStorage.currSelPrjId;

    if (IsNullOrEmpty(strPrjDataBaseId) == false) {
      await UserDefaPrjDataBaseEx_SetPrjDataBaseIdByPrjIdAndUserId(
        strCurrSelPrjId,
        clsPubLocalStorage.userId,
        strPrjDataBaseId,
      );
    } else {
      const strMsg = Format(
        '在工程:[{0}({1})]新建PrjDataBaseId不成功，请检查!',
        clsPrivateSessionStorage.currSelPrjName,
        clsPrivateSessionStorage.currSelPrjId,
      );
      console.error(strMsg);
      alert(strMsg);
      return '';
    }
  }

  async function GetDefaPrjDataBaseId() {
    const objProject = await Projects_GetObjByPrjIdCache(clsPrivateSessionStorage.currSelPrjId);
    if (objProject == null) return;
    const objUserDefaPrjDataBaseEN = await UserDefaPrjDataBaseEx_GetObjByPrjIdAndUserId(
      clsPrivateSessionStorage.currSelPrjId,
      clsPrivateSessionStorage.userId,
    );

    if (objUserDefaPrjDataBaseEN != null) {
      const strPrjDataBaseName = await PrjDataBase_GetNameByPrjDataBaseIdCache(
        objUserDefaPrjDataBaseEN.prjDataBaseId,
      );
      clsPrivateSessionStorage.currPrjDataBaseId = objUserDefaPrjDataBaseEN.prjDataBaseId;
      clsPrivateSessionStorage.prjDataBaseName = strPrjDataBaseName;
    } else {
      clsPrivateSessionStorage.currPrjDataBaseId = options.value[0].value;
      clsPrivateSessionStorage.prjDataBaseName = options.value[0].label;
    }
    const objPrjDataBase = await PrjDataBase_GetObjByPrjDataBaseIdCache(
      clsPrivateSessionStorage.currPrjDataBaseId,
    );
    if (objPrjDataBase == null) return;
    Addi.value = Format('{0}{1}', objPrjDataBase.prjDataBaseId, objPrjDataBase.prjDataBaseName);

    clsPubSessionStorage.currDataBaseTypeId = objPrjDataBase.dataBaseTypeId;
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
