<template>
  <Dropdown placement="bottomRight">
    <!-- <SvgIcon name="locale" /> -->
    <span class="ml-1">当前工程: {{ getLocaleText }}{{ Addi }}</span>
    <template #overlay>
      <Menu v-model:selectedKeys="selectedKeys" @click="handleMenuClick">
        <Menu.Item v-for="item in options" :key="item.value">
          <a href="javascript:;">{{ item.label }}</a>
        </Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsUserPrjGrantENEx } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantENEx';
  import { clsUserPrjGrantEN } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantEN';
  import { UserPrjGrant_GetObjLstAsync } from '@/ts/L3ForWApi/AuthorityManage/clsUserPrjGrantWApi';
  import { UserPrjGrantEx_CopyToEx } from '@/ts/L3ForWApiEx/AuthorityManage/clsUserPrjGrantExWApi';
  import { TabMainIndex } from '@/views/FrameAdmin/TabMainIndex';
  import { SelectProject } from '@/views/AuthorityManage/SelectProject';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  interface Option {
    value: any;
    label: string;
  }
  export default defineComponent({
    name: 'Project',
    components: {
      // 组件注册
      Dropdown,
    },
    emits: ['on-project-change'],

    setup(_, { emit }) {
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
      // const CmPrjId = ref(''); //await GetDefaCmPrjId();
      // console.log(strCmPrjId);
      async function handleMenuClick({ key }) {
        console.log(key);
        const objSelOption = options.value.find((x) => x.value === key);
        if (objSelOption != null) {
          Addi.value = objSelOption.label;
          await SelectProject.SelectRecord(key);
          emit('on-project-change', {
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
        Addi.value = options.value[0].label;
        console.log('Addi.value:', Addi.value);
        if (IsNullOrEmpty(clsPrivateSessionStorage.currPrjDataBaseId) == true) {
          await SelectProject.SelectRecord(options.value[0].value);
        }
      }

      onMounted(() => {
        getData();
        // GetDefaCmPrjId();
      });
      return {
        getLocaleText,
        Addi,
        selectedKeys,
        handleMenuClick,
        options,
        Menu,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
