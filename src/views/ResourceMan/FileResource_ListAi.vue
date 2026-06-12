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
            <!-- 第一列：checkbox 列 -->
            <th style="width: 30px">
              <input v-model="selectAllChecked" type="checkbox" @change="selectAllRows" />
            </th>

            <!-- 配置列：通过 dataColumn 循环 -->
            <th
              v-for="col in dataColumn"
              :key="col.fldName"
              :class="col.tdClass"
              @click="sortColumn(col.sortBy || col.fldName)"
            >
              {{ col.colHeader }}
              <span>
                <i
                  :class="
                    sortColumnKey === (col.sortBy || col.fldName)
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
                @click.stop="toggleColumn(getColumnKey(col))"
              >
                ×
              </button>
            </th>

            <!-- 最后一列：选择按钮 -->
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

          <!-- 数据行 -->
          <tr v-for="(item, index) in items" :key="index" class="text-secondary">
            <!-- 第一列：checkbox -->
            <td>
              <input
                :id="'chk' + item.fileResourceId"
                v-model="item.checked"
                type="checkbox"
                name="chkInTab"
                class="CheckInTab"
              />
            </td>

            <!-- 配置列：通过 dataColumn 循环 -->
            <td
              v-for="col in dataColumn"
              v-show="isColumnVisible(getColumnKey(col))"
              :key="col.fldName"
              :class="col.tdClass"
              v-html="getCellValue(item, col)"
            ></td>

            <!-- 最后一列：选择按钮 -->
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
    name: 'FileResourceListAi',
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
      currentRootDir: {
        type: String,
        required: false,
        default: '',
      },
    },

    emits: ['on-edit-tab-relainfo', 'on-sort-column', 'on-submit-sel'],

    setup(props, { emit }) {
      const selectAllChecked = ref(false); // 初始化复选框列头选中状态为 false);
      const sortColumnKey = ref(''); // 初始化排序列
      const sortDirection = ref('asc'); // 初始化排序方向
      const showSelectColumn = ref(false);
      const COLUMN_STORAGE_KEY = 'FileResourceListAi.hiddenColumns';
      const hiddenColumnKeys = ref<string[]>([]);

      const normalizePath = (path: string): string => {
        return (path ?? '').replace(/\\/g, '/').replace(/\/+$/, '');
      };

      const trimCurrentRootDir = (path: string): string => {
        const strPath = normalizePath(path);
        const strRootDir = normalizePath(props.currentRootDir);
        if (strPath == '' || strRootDir == '') return path ?? '';
        if (strPath === strRootDir) return '';
        const strPrefix = `${strRootDir}/`;
        if (strPath.startsWith(strPrefix) == true) {
          return strPath.substring(strPrefix.length);
        }
        return path ?? '';
      };

      watchEffect(() => {
        showSelectColumn.value = props.dataColumn.some((column) => column.colHeader === '选择');
      });

      const getColumnKey = (col: clsDataColumn): string => {
        return col.fldName || col.sortBy || col.colHeader;
      };

      const getCurrentColumnKeySet = (): Set<string> => {
        const arrKeys = props.dataColumn.map((col) => getColumnKey(col));
        if (showSelectColumn.value == true) {
          arrKeys.push('selectColumn');
        }
        return new Set(arrKeys);
      };

      onMounted(() => {
        const raw = localStorage.getItem(COLUMN_STORAGE_KEY);
        if (!raw) return;
        try {
          const parsed = JSON.parse(raw);
          const setCurrentKeys = getCurrentColumnKeySet();
          if (Array.isArray(parsed)) {
            hiddenColumnKeys.value = parsed.filter((key) => setCurrentKeys.has(key));
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

      watch(
        () => [props.dataColumn, showSelectColumn.value],
        () => {
          const setCurrentKeys = getCurrentColumnKeySet();
          hiddenColumnKeys.value = hiddenColumnKeys.value.filter((key) => setCurrentKeys.has(key));
        },
        { deep: true },
      );

      const isColumnVisible = (columnKey: string): boolean => {
        return hiddenColumnKeys.value.includes(columnKey) == false;
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
        const mapKeyToLabel = new Map<string, string>();
        props.dataColumn.forEach((col) => {
          mapKeyToLabel.set(getColumnKey(col), col.colHeader || getColumnKey(col));
        });
        if (showSelectColumn.value == true) {
          mapKeyToLabel.set('selectColumn', '选择');
        }
        return hiddenColumnKeys.value
          .filter((key) => mapKeyToLabel.has(key))
          .map((key) => ({
            key,
            label: mapKeyToLabel.get(key) || key,
          }));
      });

      /**
       * 从 item 对象中获取字段值
       * 支持简单字段（如 fileResourceId）和扩展字段（如 dataBaseTypeName|Ex）
       **/
      const getCellValue = (item: any, col: clsDataColumn): string => {
        const fieldName = col.fldName;
        if (!fieldName) return '';

        // 处理扩展字段（例如 "dataBaseTypeName|Ex"）
        if (fieldName.includes('|')) {
          const [baseField] = fieldName.split('|');
          return item[baseField] || '';
        }

        // 处理普通字段
        if (fieldName === 'fileDirName') {
          return trimCurrentRootDir(item[fieldName] || '');
        }
        return item[fieldName] || '';
      };

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_btnClickInRow)
       **/
      const btnClickInRow = (item: any) => {
        emit('on-edit-tab-relainfo', {
          fileResourceId: item.fileResourceId,
          content: '这是当前表的关键字',
        });
      };

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_btnSubmitSel)
       **/
      const btnSubmitSel = (item: any) => {
        emit('on-submit-sel', {
          fileResourceId: item.fileResourceId,
          content: '这是当前表的关键字',
        });
      };

      /**
       * 排序列
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
        btnSubmitSel,
        showSelectColumn,
        getCellValue,
        getColumnKey,
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

<style scoped="">
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
