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

            <th> 序号 </th>

            <th @click="sortColumn('funcTypeName|Ex')">
              函数类型
              <span>
                <i
                  :class="
                    sortColumnKey === 'funcTypeName|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th> 函数Id4Code </th>

            <th> 函数名4Code </th>

            <th @click="sortColumn('funcPurposeName|Ex')">
              函数用途名
              <span>
                <i
                  :class="
                    sortColumnKey === 'funcPurposeName|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th> 返回类型 </th>

            <th @click="sortColumn('func4GCCount|Ex')">
              函数4GC数
              <span>
                <i
                  :class="
                    sortColumnKey === 'func4GCCount|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th @click="sortColumn('featureCount|Ex')">
              功能数
              <span>
                <i
                  :class="
                    sortColumnKey === 'featureCount|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th @click="sortColumn('applicationTypeSimName|Ex')">
              应用
              <span>
                <i
                  :class="
                    sortColumnKey === 'applicationTypeSimName|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th @click="sortColumn('paraNum|Ex')">
              参数个数
              <span>
                <i
                  :class="
                    sortColumnKey === 'paraNum|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
            </th>

            <th> 函数签名_Sim </th>

            <th> 类名 </th>

            <th> 定制返回类型名 </th>
            <th v-if="showSelectColumn"> 选择 </th>
          </tr>

          <tr v-for="(item, index) in items" :key="index" class="text-secondary">
            <td>
              <input
                :id="'chk' + item.funcId4Code"
                v-model="item.checked"
                type="checkbox"
                name="chkInTab"
                class="CheckInTab"
              />
            </td>

            <td v-html="item.orderNum"></td>

            <td v-html="item.funcTypeName"></td>

            <td v-html="item.funcId4Code"></td>

            <td v-html="item.funcName4Code"></td>

            <td v-html="item.funcPurposeName"></td>

            <td v-html="item.returnType"></td>

            <td v-html="item.func4GCCount"></td>

            <td v-html="item.featureCount"></td>

            <td v-html="item.applicationTypeSimName"></td>

            <td v-html="item.paraNum"></td>

            <td v-html="item.functionSignatureSim"></td>

            <td v-html="item.clsName"></td>

            <td v-html="item.returnTypeNameCustom"></td>
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
    name: 'Function4CodeList',
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
          funcId4Code: item.funcId4Code,
          content: '这是当前表的关键字',
        });
      };

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_btnSubmitSel)
       **/
      const btnSubmitSel = (item: any) => {
        emit('on-submit-sel', {
          funcId4Code: item.funcId4Code,
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
