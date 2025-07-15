<template>
  <!-- <h6><span class="text-primary">显示表对象列表、行编辑的组件:(t_comp_ArrayPara3.vue)</span> </h6> -->
  <div>
    <table>
      <tr class="text-primary">
        <td>用户ID</td>
        <td>用户名</td>
        <td>工程ID</td>
        <td>工程名称</td>
        <td>角色ID</td>
        <td>角色名称</td>
        <td>访问数</td>
        <td>最后访问时间</td>
        <td>选择</td>
      </tr>
      <tr v-for="(item, index) in items" :key="index" class="text-secondary">
        <td>{{ item.userId }}</td>

        <td>{{ item.userName }}</td>
        <td>{{ item.prjId }}</td>
        <td>{{ item.prjName }}</td>
        <td>{{ item.roleId }}</td>
        <td>{{ item.roleName }}</td>
        <td>{{ item.visitedNum }}</td>
        <td>{{ item.lastVisitedDate }}</td>
        <td>
          <button class="btn btn-outline-info btn-sm text-nowrap" @click="btn_ClickInRow(item)"
            >选择</button
          >
          <!-- <span>{{ item.viewId }}</span> -->
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import router from '@/router';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  // import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';

  export default defineComponent({
    name: 'SelectPrjId',
    props: {
      items: {
        type: Array<any>,
        required: true,
      },
    },
    emits: ['on-select-prjid'],
    setup(_, { emit }) {
      // console.log(props);
      // const { items } = toRefs(props);
      const btn_ClickInRow = (item: any) => {
        console.log(item);
        alert(item.userId);
        // clsPrivateSessionStorage.viewId_Main = item.viewId;
        emit('on-select-prjid', {
          mId: item.mId,
          userId: item.userId,
          prjId: item.prjId,
          roleId: item.roleId,
          content: 'just a test',
        });
      };
      return {
        // items,
        btn_ClickInRow,
      };
    },
    methods: {
      btn_ClickInRow2(item: any) {
        console.log(item);
        // alert(item.viewId + item.viewName);
        clsPrivateSessionStorage.viewId_Main = item.viewId;
        router.push({ name: 'account-editViewRegion' });
      },
    },
  });
</script>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
