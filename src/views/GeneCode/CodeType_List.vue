<template>
  <div>
    <span v-if="emptyRecNumInfo !== '' && items.length === 0">{ emptyRecNumInfo }</span>
    <template v-else>
      <div v-if="hiddenColumnsDisplay.length > 0" class="hidden-columns-bar">
        <span>已隐藏列：</span>
        <button
          v-for="column in hiddenColumnsDisplay"
          :key="column.key"
          type="button"
          class="hidden-column-chip"
          @click="showColumn(column.key)"
        >
          {{ column.label }}（显示）
        </button>
        <button type="button" class="restore-all-btn" @click="resetHiddenColumns">恢复全部</button>
      </div>
      <table>
        <tbody>
          <tr class="text-primary">
            <th style="width: 30px">
              <input v-model="selectAllChecked" type="checkbox" @change="selectAllRows" />
            </th>

            <th v-if="isColumnVisible('orderNum')" @click="sortColumn('orderNum')">
              序号
              <span>
                <i
                  :class="
                    sortColumnKey === 'orderNum'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('orderNum')"
              >
                ×
              </button>
            </th>
            <th v-if="isColumnVisible('codeTypeId')" @click="sortColumn('codeTypeId')">
              代码类型Id
              <span>
                <i
                  :class="
                    sortColumnKey === 'codeTypeId'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('codeTypeId')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('codeTypeName')" @click="sortColumn('codeTypeName')">
              代码类型名
              <span>
                <i
                  :class="
                    sortColumnKey === 'codeTypeName'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('codeTypeName')"
              >
                ×
              </button>
            </th>
            <th v-if="isColumnVisible('codeTypeSimName')" @click="sortColumn('codeTypeSimName')">
              代码类型简称
              <span>
                <i
                  :class="
                    sortColumnKey === 'codeTypeSimName'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('codeTypeSimName')"
              >
                ×
              </button>
            </th>
            <th v-if="isColumnVisible('groupName')" @click="sortColumn('groupName')">
              组名
              <span>
                <i
                  :class="
                    sortColumnKey === 'groupName'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('groupName')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('regionTypeName')" @click="sortColumn('regionTypeName|Ex')">
              区域类型
              <span>
                <i
                  :class="
                    sortColumnKey === 'regionTypeName|Ex'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('regionTypeName')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('codeTypeENName')" @click="sortColumn('codeTypeENName')">
              英文名
              <span>
                <i
                  :class="
                    sortColumnKey === 'codeTypeENName'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('codeTypeENName')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('dependsOn')" @click="sortColumn('dependsOn')">
              依赖于
              <span>
                <i
                  :class="
                    sortColumnKey === 'dependsOn'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('dependsOn')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('frontOrBack')" @click="sortColumn('frontOrBack')">
              前台Or后台
              <span>
                <i
                  :class="
                    sortColumnKey === 'frontOrBack'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('frontOrBack')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('sqlDsTypeName')" @click="sortColumn('sqlDsTypeName|Ex')">
              Sql类型
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
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('sqlDsTypeName')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('classNameFormat')" @click="sortColumn('classNameFormat')">
              类名格式
              <span>
                <i
                  :class="
                    sortColumnKey === 'classNameFormat'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('classNameFormat')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('fileNameFormat')" @click="sortColumn('fileNameFormat')">
              文件名格式
              <span>
                <i
                  :class="
                    sortColumnKey === 'fileNameFormat'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('fileNameFormat')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('classNamePattern')">
              类名模式
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('classNamePattern')"
              >
                ×
              </button>
            </th>

            <th
              v-if="isColumnVisible('isDefaultOverride')"
              @click="sortColumn('isDefaultOverride')"
            >
              是否默认覆盖
              <span>
                <i
                  :class="
                    sortColumnKey === 'isDefaultOverride'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('isDefaultOverride')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('prefix')" @click="sortColumn('prefix')">
              前缀
              <span>
                <i
                  :class="
                    sortColumnKey === 'prefix'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('prefix')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('isExtend')" @click="sortColumn('isExtend')">
              是否扩展类
              <span>
                <i
                  :class="
                    sortColumnKey === 'isExtend'
                      ? sortDirection === 'Asc'
                        ? 'arrow-up'
                        : 'arrow-down'
                      : 'arrow-neutral'
                  "
                ></i>
              </span>
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('isExtend')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('isDirByTabName')">
              是否用表名作为路径
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('isDirByTabName')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('inUse')">
              是否在用
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('inUse')"
              >
                ×
              </button>
            </th>

            <th v-if="isColumnVisible('isAutoParseFile')">
              是否自动分析文件
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('isAutoParseFile')"
              >
                ×
              </button>
            </th>
            <th v-if="showSelectColumn && isColumnVisible('selectColumn')">
              选择
              <button
                type="button"
                class="column-toggle-btn"
                title="隐藏该列"
                @click.stop="toggleColumn('selectColumn')"
              >
                ×
              </button>
            </th>
          </tr>

          <tr v-for="(item, index) in items" :key="index" class="text-secondary">
            <td>
              <input
                :id="'chk' + item.codeTypeId"
                v-model="item.checked"
                type="checkbox"
                name="chkInTab"
                class="CheckInTab"
              />
            </td>

            <td v-if="isColumnVisible('orderNum')" v-html="item.orderNum"></td>

            <td v-if="isColumnVisible('codeTypeId')" v-html="item.codeTypeId"></td>

            <td v-if="isColumnVisible('codeTypeName')" v-html="item.codeTypeName"></td>

            <td v-if="isColumnVisible('codeTypeSimName')" v-html="item.codeTypeSimName"></td>

            <td v-if="isColumnVisible('groupName')" v-html="item.groupName"></td>

            <td v-if="isColumnVisible('regionTypeName')" v-html="item.regionTypeName"></td>

            <td v-if="isColumnVisible('codeTypeENName')" v-html="item.codeTypeENName"></td>

            <td v-if="isColumnVisible('dependsOn')" v-html="item.dependsOn"></td>

            <td v-if="isColumnVisible('frontOrBack')" v-html="item.frontOrBack"></td>

            <td v-if="isColumnVisible('sqlDsTypeName')" v-html="item.sqlDsTypeName"></td>

            <td v-if="isColumnVisible('classNameFormat')" v-html="item.classNameFormat"></td>

            <td v-if="isColumnVisible('fileNameFormat')" v-html="item.fileNameFormat"></td>

            <td v-if="isColumnVisible('classNamePattern')" v-html="item.classNamePattern"></td>

            <td v-if="isColumnVisible('isDefaultOverride')" v-html="item.isDefaultOverride"></td>

            <td v-if="isColumnVisible('prefix')" v-html="item.prefix"></td>

            <td v-if="isColumnVisible('isExtend')" v-html="item.isExtend"></td>

            <td v-if="isColumnVisible('isDirByTabName')" v-html="item.isDirByTabName"></td>

            <td v-if="isColumnVisible('inUse')" v-html="item.inUse"></td>

            <td v-if="isColumnVisible('isAutoParseFile')" v-html="item.isAutoParseFile"></td>
            <td v-if="showSelectColumn && isColumnVisible('selectColumn')">
              <button @click="btnSubmitSel(item)"> 选择 </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watch, watchEffect } from 'vue';
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  //import router from '@/router';
  import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
  export default defineComponent({
    name: 'CodeTypeList',
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
      const COLUMN_STORAGE_KEY = 'CodeTypeList.hiddenColumns';
      const columnLabelMap: Record<string, string> = {
        orderNum: '序号',
        codeTypeId: '代码类型Id',
        codeTypeName: '代码类型名',
        codeTypeSimName: '代码类型简称',
        groupName: '组名',
        regionTypeName: '区域类型',
        codeTypeENName: '英文名',
        dependsOn: '依赖于',
        frontOrBack: '前台Or后台',
        sqlDsTypeName: 'Sql类型',
        classNameFormat: '类名格式',
        fileNameFormat: '文件名格式',
        classNamePattern: '类名模式',
        isDefaultOverride: '是否默认覆盖',
        prefix: '前缀',
        isExtend: '是否扩展类',
        isDirByTabName: '是否用表名作为路径',
        inUse: '是否在用',
        isAutoParseFile: '是否自动分析文件',
        selectColumn: '选择',
      };
      const allHideableColumnKeys = Object.keys(columnLabelMap);
      const hiddenColumnKeys = ref<string[]>([]);
      //const showCourseColumn = ref (false);
      const showSelectColumn = ref(false);
      const tdFieldNames = [
        'orderNum',
        'codeTypeId',
        'codeTypeName',
        'groupName',
        'regionTypeName',
        'codeTypeENName',
        'dependsOn',
        'frontOrBack',
        'sqlDsTypeName',
        'classNameFormat',
        'fileNameFormat',
        'classNamePattern',
        'isDefaultOverride',
        'prefix',
        'isExtend',
        'isDirByTabName',
        'inUse',
        'isAutoParseFile',
      ];
      watchEffect(() => {
        //showCourseColumn.value = props.dataColumn.some((column) => column.colHeader === '课程');
        showSelectColumn.value = props.dataColumn.some((column) => column.colHeader === '选择');
        //console.error('showCourseColumn:', showCourseColumn.value);
      });

      onMounted(() => {
        const raw = localStorage.getItem(COLUMN_STORAGE_KEY);
        if (!raw) {
          return;
        }
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            hiddenColumnKeys.value = parsed.filter((key) => allHideableColumnKeys.includes(key));
          }
        } catch {
          hiddenColumnKeys.value = [];
        }
      });

      watch(
        hiddenColumnKeys,
        (keys) => {
          localStorage.setItem(COLUMN_STORAGE_KEY, JSON.stringify(keys));
        },
        { deep: true },
      );

      const isColumnVisible = (columnKey: string) => {
        return !hiddenColumnKeys.value.includes(columnKey);
      };

      const toggleColumn = (columnKey: string) => {
        if (hiddenColumnKeys.value.includes(columnKey)) {
          hiddenColumnKeys.value = hiddenColumnKeys.value.filter((key) => key !== columnKey);
          return;
        }
        hiddenColumnKeys.value = [...hiddenColumnKeys.value, columnKey];
      };

      const showColumn = (columnKey: string) => {
        hiddenColumnKeys.value = hiddenColumnKeys.value.filter((key) => key !== columnKey);
      };

      const resetHiddenColumns = () => {
        hiddenColumnKeys.value = [];
      };

      const hiddenColumnsDisplay = computed(() => {
        return hiddenColumnKeys.value
          .map((key) => ({
            key,
            label: columnLabelMap[key] ?? key,
          }))
          .filter((column) => column.key !== 'selectColumn' || showSelectColumn.value);
      });

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_btnClickInRow)
       **/
      const btnClickInRow = (item: any) => {
        emit('on-edit-tab-relainfo', {
          codeTypeId: item.codeTypeId,
          content: '这是当前表的关键字',
        });
      };

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_btnSubmitSel)
       **/
      const btnSubmitSel = (item: any) => {
        emit('on-submit-sel', {
          codeTypeId: item.codeTypeId,
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
        tdFieldNames,
        isColumnVisible,
        toggleColumn,
        showColumn,
        resetHiddenColumns,
        hiddenColumnsDisplay,
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

  th {
    position: relative;
  }

  .column-toggle-btn {
    position: absolute;
    top: 1px;
    right: 1px;
    width: 12px;
    height: 12px;
    padding: 0;
    margin: 0;
    border: 1px solid rgba(255, 255, 255, 0.65);
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.15);
    color: #fff;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    cursor: pointer;
  }

  .hidden-columns-bar {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }

  .hidden-column-chip,
  .restore-all-btn {
    border: 1px solid #c5c5c5;
    background: #f7f7f7;
    border-radius: 3px;
    padding: 2px 8px;
    cursor: pointer;
    font-size: 12px;
  }
</style>
