<template>
  <div>
    <span v-if="emptyRecNumInfo !== '' && items.length === 0">{ emptyRecNumInfo }</span>
    <template v-else>
      <table>
        <tbody>
          <tr class="text-primary">
            <th style="width: 30px">
              <input v-model="selectAllChecked" type="checkbox" @change="selectAllRows" />
            </th>

            <th> 表ID </th>

            <th> 表名 </th>

            <th> 表中文名 </th>

            <th @click="sortColumn('funcModuleName|Ex')">
              功能模块名称
              <span>
                <i
                  :class="
                    sortColumnKey === 'funcModuleName|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th @click="sortColumn('fldNum')">
              字段数
              <span>
                <i
                  :class="
                    sortColumnKey === 'fldNum'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th @click="sortColumn('sqlDsTypeName|Ex')">
              Sql数据源名
              <span>
                <i
                  :class="
                    sortColumnKey === 'sqlDsTypeName|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th @click="sortColumn('tabStateName|Ex')">
              表状态名称
              <span>
                <i
                  :class="
                    sortColumnKey === 'tabStateName|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th @click="sortColumn('tabMainTypeName|Ex')">
              表主类型名
              <span>
                <i
                  :class="
                    sortColumnKey === 'tabMainTypeName|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th @click="sortColumn('tabTypeName|Ex')">
              表类型名
              <span>
                <i
                  :class="
                    sortColumnKey === 'tabTypeName|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th> 父类 </th>

            <th @click="sortColumn('dateTime_Sim')">
              简化日期时间
              <span>
                <i
                  :class="
                    sortColumnKey === 'dateTime_Sim'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th> 缓存分类字段 </th>

            <th> Cache? </th>

            <th> 表相关 </th>

            <th @click="sortColumn('relaTabId4View')">
              RelaTabName4View
              <span>
                <i
                  :class="
                    sortColumnKey === 'relaTabId4View'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th> 引用序号 </th>
            <th v-if="showSelectColumn"> 选择 </th>
          </tr>

          <tr v-for="(item, index) in items" :key="index" class="text-secondary">
            <td>
              <input
                :id="'chk' + item.tabId"
                v-model="item.checked"
                type="checkbox"
                name="chkInTab"
                class="CheckInTab"
              />
            </td>

            <td v-html="item.tabId"></td>

            <td v-html="item.tabName"></td>

            <td v-html="item.tabCnName"></td>

            <td v-html="item.funcModuleName"></td>

            <td v-html="item.tabId"></td>

            <td v-html="item.sqlDsTypeName"></td>

            <td v-html="item.tabStateName"></td>

            <td v-html="item.tabMainTypeName"></td>

            <td v-html="item.tabTypeName"></td>

            <td v-html="item.parentClass"></td>

            <td v-html="item.dateTimeSim"></td>

            <td v-html="item.cacheClassifyField"></td>

            <td v-html="item.isUseCache"></td>

            <td v-html="item.isReleToSqlTab"></td>

            <td v-html="item.relaTabName4View"></td>

            <td v-html="item.orderNum4Refer"></td>
            <td v-if="showSelectColumn"><button @click="btnSubmitSel(item)"> 选择 </button></td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watchEffect } from 'vue';
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  //import router from '@/router';
  import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
  export default defineComponent({
    name: 'VPrjTabList',
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
      dataColumn: {
        type: Array<clsDataColumn>,
        required: false,
        default: () => [],
      },
    },

    emits: ['on-edit-tab-relainfo', 'on-sort-column', 'on-submit-sel'],

    setup(props, { emit }) {
      const selectAllChecked = ref(false); // 初始化复选框列头选中状态为 false);
      const sortColumnKey = ref(''); // 初始化排序列
      const sortDirection = ref('asc'); // 初始化排序方向
      //const showCourseColumn = ref (false);
      const showSelectColumn = ref(false);
      watchEffect(() => {
        //showCourseColumn.value = props.dataColumn.some((column) => column.colHeader === '课程');
        showSelectColumn.value = props.dataColumn.some((column) => column.colHeader === '选择');
        //console.error('showCourseColumn:', showCourseColumn.value);
      });

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
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_btnSubmitSel)
       **/
      const btnSubmitSel = (item: any) => {
        emit('on-submit-sel', {
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
        //showCourseColumn,
        btnSubmitSel,
        showSelectColumn,
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
