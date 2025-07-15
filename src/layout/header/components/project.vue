<template>
  <Dropdown placement="bottomRight">
    <!-- <SvgIcon name="locale" /> -->
    <span class="ml-1">当前工程: {{ getLocaleText }}{{ CurrPrjName }}</span>
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
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsUserPrjGrantENEx } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantENEx';
  import { clsUserPrjGrantEN } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantEN';
  import { UserPrjGrant_GetObjLstAsync } from '@/ts/L3ForWApi/AuthorityManage/clsUserPrjGrantWApi';
  import { UserPrjGrantEx_CopyToEx } from '@/ts/L3ForWApiEx/AuthorityManage/clsUserPrjGrantExWApi';
  import { TabMainIndex } from '@/views/FrameAdmin/TabMainIndex';
  import { SelectProject } from '@/views/AuthorityManage/SelectProject';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

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
  const CurrPrjName = ref('测试');
  const getLocaleText = computed(() => {
    const key = selectedKeys.value[0];
    if (!key) {
      return '';
    }
    const strOptionLabel = options.value.find((item) => item.value === key)?.label;
    console.log('strOptionLabel:', strOptionLabel);
    return strOptionLabel;
  });
  const emits = defineEmits(['on-project-change']);
  // const CmPrjId = ref(''); //await GetDefaCmPrjId();
  // console.log(strCmPrjId);
  async function handleMenuClick({ key }) {
    console.log(key);
    const objSelOption = options.value.find((x) => x.value === key);
    if (objSelOption != null) {
      // Addi.value = objSelOption.label;

      await SelectProject.SelectRecord(key);
      await SetUserState();
      emits('on-project-change', {
        prjId: key,
        content: `这是当前选择的工程Id: ${key}`,
      });
    }
  }
  async function getData() {
    const strWhereCond = `userId='${clsPubLocalStorage.userId}' order by ${clsUserPrjGrantEN.con_LastVisitedDate} desc, visitednum desc`;
    let arrUserPrjGrantExObjLst: Array<clsUserPrjGrantENEx> = [];
    try {
      const arrUserPrjGrantObjLst = await UserPrjGrant_GetObjLstAsync(strWhereCond);
      arrUserPrjGrantExObjLst = arrUserPrjGrantObjLst.map(UserPrjGrantEx_CopyToEx);

      await TabMainIndex.ExtendFldFuncMap(arrUserPrjGrantExObjLst);
    } catch (e: any) {
      const strMsg = `获取用户工程授权信息出错！${e}`;
      throw strMsg;
    }
    options.value = arrUserPrjGrantExObjLst.map((item: any) => ({
      value: item.mId.toString(),
      label: `${item.prjId}${item.prjName}|${item.roleName}|${item.lastVisitedDateSim}|${item.visitedNum}`,
    }));
    // Addi.value = options.value[0].label;
    await SetUserState();
    console.log('Addi.value:', CurrPrjName.value);
    if (IsNullOrEmpty(clsPrivateSessionStorage.currPrjDataBaseId) == true) {
      await SelectProject.SelectRecord(options.value[0].value);
    }
  }
  async function SetUserState() {
    try {
      // lblUserName.Text = clsCommonSession. objQxUser.UserName;
      // lblRoleName.Text = clsUserRolesBL.GetRoleNameByRoleIdCache(clsCommonSession.RoleId);
      // const objPrjDataBase = await PrjDataBase_GetObjByPrjDataBaseIdCache(
      //   clsPrivateSessionStorage.currPrjDataBaseId,
      // );
      // if (objPrjDataBase == null) return;
      const objProject = await Projects_GetObjByPrjIdCache(clsPrivateSessionStorage.currSelPrjId);
      if (objProject == null) return;
      CurrPrjName.value = Format('{0}{1}', objProject.prjId, objProject.prjName);
    } catch (objException) {
      console.error(objException);
    }
  }
  onMounted(() => {
    getData();
    // GetDefaCmPrjId();
  });
</script>
