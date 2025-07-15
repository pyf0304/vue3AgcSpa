<template>
  <!-- <h6><span class="text-primary">显示表对象列表、行编辑的组件:(t_comp_ArrayPara3.vue)</span> </h6> -->
  <div>
    <span v-if="emptyRecNumInfo !== '' && items.length === 0">{{ emptyRecNumInfo }}</span>
    <template v-else>
      <table ref="refTable">
        <tr class="text-primary">
          <th style="width: 30px">
            <input v-model="selectAllChecked" type="checkbox" @change="selectAllRows" />
          </th>

          <th @click="sortColumn('applicationTypeSimName')"
            >应用类型<span v-if="sortColumnKey === 'applicationTypeSimName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('viewName')"
            >界面名<span v-if="sortColumnKey === 'viewName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th style="width: 150px" @click="sortColumn('viewCnNameEx')"
            >中文名<span v-if="sortColumnKey === 'viewCnNameEx'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <!-- <th style="width: 150px" @click="sortColumn('viewTypeName')"
            >界面类型<span v-if="sortColumnKey === 'viewTypeName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th> -->
          <th style="width: 120px" @click="sortColumn('funcModuleName')"
            >模块<span v-if="sortColumnKey === 'funcModuleName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('mainTabName')"
            >主表<span v-if="sortColumnKey === 'mainTabName'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('cmPrjNames')"
            >子项目组
            <span v-if="sortColumnKey === 'cmPrjNames'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <!-- <th @click="sortColumn('tabName')"
          >列表缓存<span v-if="sortColumnKey === 'tabName'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th> -->
          <th @click="sortColumn('updDate')"
            >修改日期<span v-if="sortColumnKey === 'updDate'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('viewTypeCode')"
            >类型码<span v-if="sortColumnKey === 'viewTypeCode'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('geneCodeDate')"
            >生成日期<span v-if="sortColumnKey === 'geneCodeDate'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('regionNum')"
            >区域数<span v-if="sortColumnKey === 'regionNum'">
              <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
          ></th>
          <th @click="sortColumn('viewId')"
            >界面ID<span v-if="sortColumnKey === 'viewId'">
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
              :id="'chk' + item.viewId"
              v-model="item.checked"
              type="checkbox"
              class="CheckInTab"
          /></td>
          <td>{{ item.applicationTypeSimName }}</td>

          <td>
            <button class="btn btn-outline-info btn-sm text-nowrap" @click="btn_ClickInRow(item)">{{
              item.viewName
            }}</button>
            <!-- <span>{{ item.viewId }}</span> -->
          </td>

          <td v-html="item.viewCnNameEx"></td>
          <!-- <td>{{ item.viewTypeName }}</td> -->
          <td>{{ item.funcModuleName }}</td>
          <td>{{ item.mainTabName }}</td>
          <td v-html="item.cmPrjNames"></td>
          <td>{{ item.updDate }}</td>
          <td>{{ item.viewTypeCode }}</td>
          <td>{{ item.geneCodeDate }}</td>
          <td>{{ item.regionNum }}</td>
          <td>{{ item.viewId }}</td>
        </tr>
      </table>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import router from '@/router';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  // import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';

  export default defineComponent({
    name: 'ListComponent',
    props: {
      items: {
        type: Array<any>,
        required: true,
      },
      emptyRecNumInfo: {
        type: String,
        required: true,
        default: '',
      },
    },
    emits: ['on-edit-view-region', 'on-sort-column'],

    setup(props, { emit }) {
      const refTable = ref();
      const selectAllChecked = ref(false); // 初始化复选框列头选中状态为 false
      const sortColumnKey = ref(''); // 初始化排序列
      const sortDirection = ref('asc'); // 初始化排序方向
      // console.log(props);
      // const { items } = toRefs(props);
      const btn_ClickInRow = (item: any) => {
        // console.log(item);
        // alert(item.viewId);
        clsPrivateSessionStorage.viewId_Main = item.viewId;
        emit('on-edit-view-region', {
          viewId: item.viewId,
          content: '这是界面关键字:ViewId',
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
        // alert(selectAllChecked.value);
        props.items.forEach((item) => {
          item.checked = selectAllChecked;
        });
      };
      function delTableRows() {
        const objTable = refTable.value as HTMLTableElement;
        const arrTr = objTable.rows;
        const iRow = arrTr.length;
        for (let i = iRow - 1; i > 0; i--) {
          const objTr = arrTr[i];
          objTable.removeChild(objTr);
        }
      }
      onMounted(() => {
        props.items.forEach((item) => {
          item.checked = false;
        });
      });

      return {
        // items,
        btn_ClickInRow,
        sortColumn,
        sortColumnKey,
        sortDirection,
        selectAllChecked,
        selectAllRows,
        refTable,
        delTableRows,
      };
    },
    methods: {
      btn_ClickInRow2(item: any) {
        // console.log(item);
        // alert(item.viewId + item.viewName);
        clsPrivateSessionStorage.viewId_Main = item.viewId;
        router.push({ name: 'account-editViewRegion', params: { viewId: item.viewId } });
      },
      toggleAllCheckboxes() {
        this.items.forEach((item) => {
          item.checked = this.selectAllChecked;
        });
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
    margin-right: 20px;
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
