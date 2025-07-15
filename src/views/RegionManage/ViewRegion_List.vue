<template>
  <div>
    <span v-if="emptyRecNumInfo !== '' && items.length === 0">{ emptyRecNumInfo }</span>
    <template v-else>
      <table>
        <tr class="text-primary">
          <th style="width: 30px">
            <input v-model="selectAllChecked" type="checkbox" @change="selectAllRows" />
          </th>

          <th> 区域Id </th>

          <th> 区域名称 </th>

          <th @click="sortColumn('referNum|Ex')">
            引用数
            <span>
              <i
                :class="
                  sortColumnKey === 'referNum|Ex'
                    ? sortDirection === 'Asc'
                      ? 'arrow-up'
                      : 'arrow-down'
                    : 'arrow-neutral'
                "
              ></i>
            </span>
          </th>

          <th @click="sortColumn('regionTypeSimName|Ex')">
            区域类型
            <span>
              <i
                :class="
                  sortColumnKey === 'regionTypeSimName|Ex'
                    ? sortDirection === 'Asc'
                      ? 'arrow-up'
                      : 'arrow-down'
                    : 'arrow-neutral'
                "
              ></i>
            </span>
          </th>

          <th> 列数 </th>

          <th @click="sortColumn('containerTypeName|Ex')">
            容器类型名
            <span>
              <i
                :class="
                  sortColumnKey === 'containerTypeName|Ex'
                    ? sortDirection === 'Asc'
                      ? 'arrow-up'
                      : 'arrow-down'
                    : 'arrow-neutral'
                "
              ></i>
            </span>
          </th>

          <th @click="sortColumn('pageDispModeName|Ex')">
            显示模式
            <span>
              <i
                :class="
                  sortColumnKey === 'pageDispModeName|Ex'
                    ? sortDirection === 'Asc'
                      ? 'arrow-up'
                      : 'arrow-down'
                    : 'arrow-neutral'
                "
              ></i>
            </span>
          </th>

          <th> 类名 </th>

          <th @click="sortColumn('inOutTypeName|Ex')">
            INOUT类型名称
            <span>
              <i
                :class="
                  sortColumnKey === 'inOutTypeName|Ex'
                    ? sortDirection === 'Asc'
                      ? 'arrow-up'
                      : 'arrow-down'
                    : 'arrow-neutral'
                "
              ></i>
            </span>
          </th>

          <th @click="sortColumn('tabName|Ex')">
            表名
            <span>
              <i
                :class="
                  sortColumnKey === 'tabName|Ex'
                    ? sortDirection === 'Asc'
                      ? 'arrow-up'
                      : 'arrow-down'
                    : 'arrow-neutral'
                "
              ></i>
            </span>
          </th>

          <th @click="sortColumn('keyId4Test')">
            测试关键字
            <span>
              <i
                :class="
                  sortColumnKey === 'keyId4Test'
                    ? sortDirection === 'Asc'
                      ? 'arrow-up'
                      : 'arrow-down'
                    : 'arrow-neutral'
                "
              ></i>
            </span>
          </th>

          <th> 修改日期 </th>
        </tr>

        <tr v-for="(item, index) in items" :key="index" class="text-secondary">
          <td>
            <input
              :id="'chk' + item.regionId"
              v-model="item.checked"
              type="checkbox"
              name="chkInTab"
              class="CheckInTab"
            />
          </td>

          <td v-html="item.regionId"></td>

          <td v-html="item.regionName"></td>

          <td v-html="item.referNum"></td>

          <td v-html="item.regionTypeSimName"></td>

          <td v-html="item.colNum"></td>

          <td v-html="item.containerTypeName"></td>

          <td v-html="item.pageDispModeName"></td>

          <td v-html="item.clsName"></td>

          <td v-html="item.inOutTypeName"></td>

          <td v-html="item.tabName"></td>

          <td v-html="item.keyId4Test"></td>

          <td v-html="item.updDate"></td>
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
    name: 'ViewRegionList',
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

  .arrow-neutral {
    border: solid gray;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
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
    padding: 2px; /* 添加内边距 */
  }

  th:last-child {
    margin-right: 0; /* Reset margin for the last column */
    border-right: none; /* Remove the border for the last column */
    background-color: rgba(0, 0, 255, 0.6);
    color: white;
    font-weight: bold;
    padding: 2px; /* 添加内边距 */
  }

  .Bakth:not(:last-child) {
    margin-right: 10px; /* Adjust the value to control the spacing */
    border-right: 1px solid #ccc; /* Adjust the color and width as needed */
    background-color: #333; /* Adjust the color as needed */
    color: #fff; /* Adjust the text color as needed */
  }

  td {
    border-right: 1px solid #ccc; /* Adjust the color and width as needed */
    padding: 2px; /* 添加内边距 */
  }

  tr:nth-child(odd) {
    background-color: #f2f2f2; /* Adjust the color as needed for odd rows */
  }

  tr:nth-child(even) {
    background-color: #ffffff; /* Adjust the color as needed for even rows */
  }
  /* 添加表格单元格之间的空隙 */
  table {
    border-collapse: separate; /* 使用 separate 模式，允许单元格之间的空隙 */
    border-spacing: 2px; /* 定义单元格之间的间距 */
  }
</style>
