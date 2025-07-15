<template>
  <div>
    <span v-if="emptyRecNumInfo !== '' && items.length === 0">{ emptyRecNumInfo }</span>
    <template v-else>
      <table>
        <tr class="text-primary">
          <th style="width: 30px">
            <input v-model="selectAllChecked" type="checkbox" @change="selectAllRows" />
          </th>

          <th @click="sortColumn('')">
            界面Id
            <span v-if="sortColumnKey === ''">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>

          <th @click="sortColumn('viewName')">
            界面名称
            <span v-if="sortColumnKey === 'viewName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>

          <th @click="sortColumn('')">
            区域Id
            <span v-if="sortColumnKey === ''">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>

          <th @click="sortColumn('regionName')">
            区域名称
            <span v-if="sortColumnKey === 'regionName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>

          <th @click="sortColumn('regionTypeSimName')">
            区域类型简名
            <span v-if="sortColumnKey === 'regionTypeSimName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>

          <th @click="sortColumn('containerTypeName')">
            容器类型名
            <span v-if="sortColumnKey === 'containerTypeName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>

          <th @click="sortColumn('fileName')">
            文件名
            <span v-if="sortColumnKey === 'fileName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>

          <th @click="sortColumn('pageDispModeName')">
            显示模式
            <span v-if="sortColumnKey === 'pageDispModeName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>

          <th @click="sortColumn('')">
            字段数
            <span v-if="sortColumnKey === ''">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>

          <th @click="sortColumn('regionTypeOrderNum')">
            类型序号
            <span v-if="sortColumnKey === 'regionTypeOrderNum'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
            </span>
          </th>
        </tr>

        <tr v-for="(item, index) in items" :key="index" class="text-secondary">
          <td>
            <input
              :id="'chk' + item.mId"
              v-model="item.checked"
              type="checkbox"
              name="chkInTab"
              class="CheckInTab"
            />
          </td>

          <td v-html="item.viewId"></td>

          <td v-html="item.viewName"></td>

          <td v-html="item.regionId"></td>

          <td v-html="item.regionName"></td>

          <td v-html="item.regionTypeSimName"></td>

          <td v-html="item.containerTypeName"></td>

          <td v-html="item.fileName"></td>

          <td v-html="item.pageDispModeName"></td>

          <td v-html="item.regionId"></td>

          <td v-html="item.regionTypeOrderNum"></td>
        </tr>
      </table>
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  //import router from '@/router';
  export default defineComponent({
    name: 'ViewRegionRelaList',
    components: {
      // 组件注册
    },

    props: {
      items: {
        type: Array<any>,
        required: true,
      },
      showErrorMessage: {
        type: Boolean,
        required: true,
        default: false,
      },
      emptyRecNumInfo: {
        type: String,
        required: true,
        default: '',
      },
    },

    emits: ['on-edit-tab-relainfo', 'on-sort-column'],

    setup(_, { emit }) {
      const selectAllChecked = ref(false); // 初始化复选框列头选中状态为 false);
      const sortColumnKey = ref(''); // 初始化排序列
      const sortDirection = ref('asc'); // 初始化排序方向

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_btnClickInRow)
       **/
      const btnClickInRow = (item: any) => {
        emit('on-edit-tab-relainfo', {
          tabId: item.tabId,
          content: '这是当前表的关键字',
        });
      };

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_sortColumn)
       **/
      const sortColumn = (columnKey: string) => {
        if (sortColumnKey.value === columnKey) {
          // 如果点击的是当前排序列，则切换排序方向
          sortDirection.value = sortDirection.value === 'Asc' ? 'Desc' : 'Asc';
        } else {
          // 如果点击的是其他列，则设置新的排序列和排序方向
          sortColumnKey.value = columnKey;
          sortDirection.value = 'Asc';
        }
        emit('on-sort-column', {
          sortColumnKey: sortColumnKey.value,
          sortDirection: sortDirection.value,
          content: '这是当前列表的列头排序',
        });
      };

      const selectAllRows = () => {
        console.error(selectAllChecked.value);
      };
      return {
        btnClickInRow,
        sortColumn,
        sortColumnKey,
        sortDirection,
        selectAllChecked,
        selectAllRows,
      };
    },

    watch: {
      // 监听 selectAllChecked 变化，当复选框列头状态改变时，修改所有记录的选中状态
      selectAllChecked(newValue) {
        this.items.forEach((item) => (item.checked = newValue));
      },
    },

    methods: {},
  });
</script>

<style scoped>
  .read-the-docs {
    color: #888;
  }
  /* 样式可根据实际情况自行调整 */
  .arrow-up {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #000; /* 箭头向上，可根据需要设置颜色 */
    margin-left: 5px;
  }

  .arrow-down {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000; /* 箭头向下，可根据需要设置颜色 */
    margin-left: 5px;
  }

  th:not(:last-child) {
    margin-right: 10px;
    border-right: 1px solid #ccc;
    background-color: rgba(0, 0, 255, 0.6);
    color: white;
    font-weight: bold;
  }

  th:last-child {
    margin-right: 0; /* Reset margin for the last column */
    border-right: none; /* Remove the border for the last column */
    background-color: rgba(0, 0, 255, 0.6);
    color: white;
    font-weight: bold;
  }

  .Bakth:not(:last-child) {
    margin-right: 10px; /* Adjust the value to control the spacing */
    border-right: 1px solid #ccc; /* Adjust the color and width as needed */
    background-color: #333; /* Adjust the color as needed */
    color: #fff; /* Adjust the text color as needed */
  }

  td {
    border-right: 1px solid #ccc; /* Adjust the color and width as needed */
  }

  tr:nth-child(odd) {
    background-color: #f2f2f2; /* Adjust the color as needed for odd rows */
  }

  tr:nth-child(even) {
    background-color: #ffffff; /* Adjust the color as needed for even rows */
  }
</style>
