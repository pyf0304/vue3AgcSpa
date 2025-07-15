<template>
  <!-- <h6><span class="text-primary">显示表对象列表、行编辑的组件:(t_comp_ArrayPara3.vue)</span> </h6> -->
  <!-- <input
    id="chkTabHead"
    v-model="selectAllChecked"
    type="checkbox"
    name="chkTabHead"
    class="CheckInTab"
    @change="selectAllRows"
  /> -->
  <div>
    <span v-if="emptyRecNumInfo !== '' && items.length === 0">{{ emptyRecNumInfo }}</span>
    <template v-else>
      <table>
        <tr class="text-primary">
          <th style="width: 30px">
            <input v-model="selectAllChecked" type="checkbox" @change="selectAllRows" />
          </th>
          <th @click="sortColumn('tabName')"
            >表名
            <span v-if="sortColumnKey === 'tabName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('primaryTypeNameEx')"
            >主键
            <span v-if="sortColumnKey === 'primaryTypeNameEx'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('fldNum')"
            >字段数
            <span v-if="sortColumnKey === 'fldNum'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('tabFeatureConstraint')"
            >表功能、约束
            <span v-if="sortColumnKey === 'tabFeatureConstraint'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('funcModuleName')"
            >模块
            <span v-if="sortColumnKey === 'funcModuleName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('tabRecNum')"
            >表记录数
            <span v-if="sortColumnKey === 'tabRecNum'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('tabTypeNameEx')"
            >Sql数据源
            <span v-if="sortColumnKey === 'tabTypeNameEx'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('isReleToSqlTab')"
            >表相关
            <span v-if="sortColumnKey === 'isReleToSqlTab'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('cacheClassifyFieldEx')"
            >缓存
            <span v-if="sortColumnKey === 'cacheClassifyFieldEx'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('cacheClassifyField4TSEx')"
            >缓存-TS
            <span v-if="sortColumnKey === 'cacheClassifyField4TSEx'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th v-if="showErrorMessage" @click="sortColumn('errMsg')"
            >错误信息
            <span v-if="sortColumnKey === 'errMsg'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('cmPrjNames')"
            >子项目组
            <span v-if="sortColumnKey === 'cmPrjNames'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('UpdDate')"
            >修改日期
            <span v-if="sortColumnKey === 'dateTimeSim'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('parentClass')"
            >父类
            <span v-if="sortColumnKey === 'parentClass'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('orderNum4Refer')"
            >引用序号
            <span v-if="sortColumnKey === 'orderNum4Refer'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('tabId')"
            >表ID
            <span v-if="sortColumnKey === 'tabId'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
        </tr>
        <tr
          v-for="(item, index) in items"
          :key="index"
          :class="{ 'bg-danger': item.errMsg.length > 0, 'text-secondary': true }"
          :title="item.errMsg.length > 0 ? item.errMsg : ''"
        >
          <td
            ><input
              :id="'chk' + item.tabId"
              v-model="item.checked"
              type="checkbox"
              name="chkInTab"
              class="CheckInTab"
            />
          </td>
          <td>
            <button
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_ClickInRow(item)"
              v-html="item.tabNameEx"
            ></button>

            <!-- <span>{{ item.viewId }}</span> -->
          </td>

          <td v-html="item.primaryTypeNameEx"></td>
          <td>{{ item.fldNum }}</td>
          <td v-html="item.tabFeatureConstraint"></td>
          <td>{{ item.funcModuleName }}</td>
          <td>{{ item.tabRecNum }}</td>
          <td v-html="item.tabTypeNameEx"></td>
          <td>{{ item.isReleToSqlTab }}</td>
          <td v-html="item.cacheClassifyFieldEx"></td>
          <td v-html="item.cacheClassifyField4TSEx"></td>
          <td v-if="showErrorMessage">{{ item.errMsg }}</td>
          <td v-html="item.cmPrjNames"></td>
          <td>{{ item.dateTimeSim }}</td>
          <td>{{ item.parentClass }}</td>
          <td>{{ item.orderNum4Refer }}</td>
          <td>{{ item.tabId }}</td>
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
  import router from '@/router';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

  // import { clsPrjTabENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx';

  export default defineComponent({
    name: 'PrjTabList',
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
      const selectAllChecked = ref(false); // 初始化复选框列头选中状态为 false
      const sortColumnKey = ref(''); // 初始化排序列
      const sortDirection = ref('asc'); // 初始化排序方向
      // console.log(props);
      // const { items } = toRefs(props);
      const btn_ClickInRow = (item: any) => {
        // console.log(item);
        // alert(item.tabId);
        clsPrivateSessionStorage.tabId_Main = item.tabId;
        emit('on-edit-tab-relainfo', {
          tabId: item.tabId,
          content: '这是当前表的关键字',
        });
      };
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
      // 点击复选框列头触发的方法，用于修改所有记录的选中状态
      const selectAllRows = () => {
        // selectAllChecked.value = !selectAllChecked.value;
        console.error(selectAllChecked.value);
      };
      return {
        // items,
        btn_ClickInRow,
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
    methods: {
      btn_ClickInRow2(item: any) {
        console.log(item);
        // alert(item.viewId + item.viewName);
        clsPrivateSessionStorage.tabId_Main = item.tabId;
        router.push({ name: 'account-editTabRelaInfo' });
      },
      // 点击列头触发排序
      sortColumnBak(columnKey: string) {
        if (this.sortColumnKey === columnKey) {
          // 如果点击的是当前排序列，则切换排序方向
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          // 如果点击的是其他列，则设置新的排序列和排序方向
          this.sortColumnKey = columnKey;
          this.sortDirection = 'asc';
        }
      },
    },
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
