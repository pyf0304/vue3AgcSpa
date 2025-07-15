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
    <table>
      <tr class="text-primary">
        <th style="width: 30px">
          <input v-model="selectAllChecked" type="checkbox" @change="selectAllRows" />
        </th>
        <th @click="sortColumn('sequenceNumber')"
          >序号
          <span v-if="sortColumnKey === 'sequenceNumber'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th @click="sortColumn('fldId')"
          >字段Id
          <span v-if="sortColumnKey === 'fldId'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th @click="sortColumn('fldNameEx')"
          >字段名
          <span v-if="sortColumnKey === 'fldNameEx'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>

        <th @click="sortColumn('caption')"
          >标题
          <span v-if="sortColumnKey === 'caption'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>

        <th @click="sortColumn('fieldTypeName')"
          >字段类型
          <span v-if="sortColumnKey === 'fieldTypeName'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th v-if="showErrorMessage" @click="sortColumn('errMsg')"
          >错误信息
          <span v-if="sortColumnKey === 'errMsg'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th @click="sortColumn('dataTypeName')"
          >数据类型
          <span v-if="sortColumnKey === 'dataTypeName'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th style="width: 50px" @click="sortColumn('fldLength')"
          >长度
          <span v-if="sortColumnKey === 'fldLength'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th style="width: 50px" @click="sortColumn('fldPrecision')"
          >精度
          <span v-if="sortColumnKey === 'fldPrecision'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th style="width: 50px" @click="sortColumn('isTabNullable')"
          >可空
          <span v-if="sortColumnKey === 'isTabNullable'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th style="width: 50px" @click="sortColumn('isTabUnique')"
          >唯一
          <span v-if="sortColumnKey === 'isTabUnique'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th style="width: 50px" @click="sortColumn('isTabForeignKey')"
          >外键
          <span v-if="sortColumnKey === 'isTabForeignKey'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th style="width: 60px" @click="sortColumn('isParentObj')"
          >父对象
          <span v-if="sortColumnKey === 'isParentObj'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>

        <th @click="sortColumn('convFldName')"
          >转换
          <span v-if="sortColumnKey === 'convFldName'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>

        <th @click="sortColumn('foreignKeyTabId')"
          >外键表
          <span v-if="sortColumnKey === 'foreignKeyTabId'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th @click="sortColumn('sourceTabName')"
          >源表
          <span v-if="sortColumnKey === 'sourceTabName'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <th @click="sortColumn('memo')"
          >备注
          <span v-if="sortColumnKey === 'memo'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th>
        <!-- <th @click="sortColumn('fldName')"
          >字段名4Copy
          <span v-if="sortColumnKey === 'fldName'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th> -->
        <!-- <th @click="sortColumn('UpdDate')"
          >修改日期
          <span v-if="sortColumnKey === 'dateTimeSim'">
            <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i> </span
        ></th> -->
      </tr>
      <tr
        v-for="(item, index) in items"
        :id="'tr' + item.mId"
        :key="index"
        :class="{
          'bg-danger': item.errMsg.length > 0,
          'text-secondary': true,
        }"
        :title="item.errMsg.length > 0 ? item.errMsg : ''"
      >
        <td
          ><input
            :id="'chk' + item.mId"
            v-model="item.checked"
            type="checkbox"
            name="chkInTab"
            class="CheckInTab"
          />
        </td>
        <td
          :class="{
            'bg-danger': item.errMsg.length > 0,
            'text-secondary': true,
          }"
          :title="item.errMsg.length > 0 ? item.errMsg : ''"
          v-html="item.sequenceNumber"
        ></td>
        <td
          :class="{
            'bg-danger': item.errMsg.length > 0,
            'text-secondary': true,
          }"
          :title="item.errMsg.length > 0 ? item.errMsg : ''"
        >
          <button
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_ClickFldId(item)"
            v-html="item.fldId"
          ></button>

          <!-- <span>{{ item.viewId }}</span> -->
        </td>
        <td title="单击空白处可复制字段名" @click="copyText(item.fldName)">
          <button
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_ClickInRow(item)"
            v-html="item.fldNameEx"
          ></button>

          <!-- <span>{{ item.viewId }}</span> -->
        </td>

        <td title="单击可复制字段标题" @click="copyCaption(item.caption)">{{ item.caption }}</td>
        <td v-html="item.fieldTypeName"></td>
        <td v-if="showErrorMessage">
          <span
            v-if="
              item.tabCheckErrorTypeId === '05' ||
              item.tabCheckErrorTypeId === '06' ||
              item.tabCheckErrorTypeId === '07'
            "
          >
            {{ item.errMsg }}
            <button
              class="btn btn-outline-info btn-sm text-nowrap"
              title="把代码系统中的字段属性同步到Sql表中"
              @click="btn_ClickAlterTab4UpdateField(item)"
              >同步属性到Sql</button
            >
            <button
              class="btn btn-outline-info btn-sm text-nowrap bl-2"
              title="把Sql表中的字段属性同步到代码系统的表中"
              @click="btn_ClickSynchFieldFromColumnObj(item)"
              >同步属性到代码系统</button
            ></span
          >
          <span v-else-if="item.tabCheckErrorTypeId === '08'">
            {{ item.errMsg }}
            <button
              class="btn btn-outline-info btn-sm text-nowrap"
              title="在代码系统中添加字段。"
              @click="btn_ClickAddNewFieldTab(item)"
              >添加</button
            >
            <button
              class="btn btn-outline-info btn-sm text-nowrap bl-2"
              title="在Sql表中删除字段"
              @click="btn_ClickAlterTab4DropColumn(item)"
              >删除</button
            ></span
          >
          <span v-else-if="item.tabCheckErrorTypeId === '13'"
            >Error Type 13: {{ item.errMsg }}
            <button
              class="btn btn-outline-info btn-sm text-nowrap"
              title="在Sql表中添加字段"
              @click="btn_ClickAlterTab4AddField(item)"
              >添加到Sql</button
            >
            <button
              class="btn btn-outline-info btn-sm text-nowrap bl-2"
              title="在Sql表中删除字段"
              @click="btn_ClickDelFieldInGc(item)"
              >删除</button
            ></span
          >
          <span v-else>{{ item.tabCheckErrorTypeId }}{{ item.errMsg }}</span>
        </td>
        <td :colspan="opType === 'TabFldEdit' && item.isForExtendClass ? 10 : 1">
          <template v-if="opType === 'TabFldEdit' && item.isForExtendClass"
            ><div v-html="item.dnPathDivStr"></div
          ></template>
          <template v-else>
            <span> {{ item.dataTypeName }}</span
            ><br />
            <span
              v-if="opType === 'CheckConsistency'"
              :class="item.dataTypeName != item.typeNameSql ? 'text-muted bg-danger' : ''"
              >Sql: {{ item.typeNameSql }}</span
            >
          </template>
        </td>

        <td v-if="item.isForExtendClass === false">
          <span> {{ item.fldLength }}</span
          ><br />
          <span
            v-if="opType === 'CheckConsistency'"
            :class="item.fldLength != item.lengthSql ? 'text-muted bg-danger' : ''"
            >Sql: {{ item.lengthSql }}</span
          >
        </td>
        <td v-if="item.isForExtendClass === false">
          <span v-html="item.fldPrecision"></span><br />
          <span v-if="opType === 'CheckConsistency'">Sql: {{ item.precisionSql }}</span>
        </td>
        <td v-if="item.isForExtendClass === false">
          <span v-if="item.isTabNullable">
            <!-- 显示勾 -->
            <font-awesome-icon icon="check" style="color: green" />
          </span>
          <span v-else>
            <!-- 显示红叉 -->
            <font-awesome-icon icon="times" style="color: red" />
          </span>
          <br />
          <span v-if="opType === 'CheckConsistency'">Sql: {{ item.isNullableSql }}</span>
        </td>

        <td v-if="item.isForExtendClass === false">
          <span v-if="item.isTabUnique">
            <!-- 显示勾 -->
            <font-awesome-icon icon="check" style="color: green" />
          </span>
          <span v-else>
            <!-- 显示红叉 -->
            <font-awesome-icon icon="times" style="color: red" /> </span
        ></td>
        <td v-if="item.isForExtendClass === false">
          <span v-if="item.isTabForeignKey">
            <!-- 显示勾 -->
            <font-awesome-icon icon="check" style="color: green" />
          </span>
          <span v-else>
            <!-- 显示红叉 -->
            <font-awesome-icon icon="times" style="color: red" /> </span
        ></td>
        <td v-if="item.isForExtendClass === false">
          <span v-if="item.isParentObj">
            <!-- 显示勾 -->
            <font-awesome-icon icon="check" style="color: green" />
          </span>
          <span v-else>
            <!-- 显示红叉 -->
            <font-awesome-icon icon="times" style="color: red" /> </span
        ></td>

        <td v-if="item.isForExtendClass === false"
          ><span v-html="item.isNeedAddConvFldName === false ? item.convFldName : ''"></span>
          <a v-if="item.isNeedAddConvFldName" @click="btn_Click_addConvFldName(item)"
            >主键-转换成名称字段</a
          >
        </td>
        <td v-if="item.isForExtendClass === false">
          <a
            v-if="item.foreignKeyTabId != null && item.foreignKeyTabId.length > 1"
            class="text-nowrap"
            title="单击可编辑外键表"
            @click="btn_Click_foreignKeyTab(item)"
            >{{ item.foreignKeyTabName }}</a
          >
        </td>
        <td v-if="item.isForExtendClass === false">{{ item.sourceTabName }}</td>
        <td>{{ item.memo }}</td>

        <!-- <td>
          <button
            class="btn btn-outline-primary btn-sm text-nowrap"
            title="单击可复制字段名"
            @click="copyText(item.fldName)"
            v-html="item.fldName"
          ></button>
        </td> -->
        <!-- <td>{{ item.dateTimeSim }}</td> -->
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { message } from 'ant-design-vue';
  import router from '@/router';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { DataTypeAbbrEx_GetDataTypeIdByName } from '@/ts/L3ForWApiEx/SysPara/clsDataTypeAbbrExWApi';

  // import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';

  export default defineComponent({
    name: 'PrjTabFldList',
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
      opType: {
        type: String,
        required: true,
        default: 'TabFldEdit', //'TabFldEdit','CheckConsistency'
      },
    },
    emits: [
      'on-edit-prjtabfld',
      'on-edit-fieldtab',
      'on-edit-foreignkeytab',
      'on-edit-addconvfldname',
      'on-edit-addnewfieldtab',
      'on-edit-synchfieldfromcolumnobj',
      'on-edit-delfieldingc',
      'on-edit-altertab4dropcolumn',
      'on-edit-altertab4addfield',
      'on-edit-altertab4updatefield',
      'on-sort-column',
    ],
    setup(props, { emit }) {
      const selectAllChecked = ref(false); // 初始化复选框列头选中状态为 false
      const sortColumnKey = ref(''); // 初始化排序列
      const sortDirection = ref('asc'); // 初始化排序方向
      // console.log(props);
      // const { items } = toRefs(props);
      const btn_ClickInRow = (item: any) => {
        emit('on-edit-prjtabfld', {
          mId: item.mId,
          content: '这是当前表的关键字',
        });
      };
      // const isNeedAddConvFldName = async (item: any): Promise<boolean> => {
      //   if (item.fieldTypeId === '02') {
      //     const IsHasNameField = await PrjTabFldEx_IsHasNameObjByTabIdCache(item.tabId);
      //     if (IsHasNameField) {
      //       return false;
      //     } else {
      //       return true; // '主键-转换成名称字段';
      //     }
      //   } else {
      //     return false;
      //   }
      // };
      const btn_Click_foreignKeyTab = (item: any) => {
        emit('on-edit-foreignkeytab', {
          tabId: item.foreignKeyTabId,
          content: '这是当前表字段的外键表Id',
        });
      };
      const btn_Click_addConvFldName = (item: any) => {
        emit('on-edit-addconvfldname', {
          tabId: item.tabId,
          content: '这是当前表的字段Id',
        });
      };
      const btn_ClickFldId = (item: any) => {
        const strFldId = item.fldId;
        emit('on-edit-fieldtab', {
          fldId: strFldId,
          content: '这是当前表的字段Id',
        });
      };
      function copyText(strText: string) {
        // 创建一个临时的textarea元素
        const textarea = document.createElement('textarea');
        // 设置textarea的值为要复制的文本
        textarea.value = strText;
        // 将textarea添加到DOM中
        document.body.appendChild(textarea);
        // 选中textarea中的文本
        textarea.select();
        // 执行复制命令
        document.execCommand('copy');
        // 从DOM中移除textarea
        document.body.removeChild(textarea);
        const txtNewFldName = document.getElementById('txtNewFldName') as HTMLInputElement;
        txtNewFldName.value = strText;
        // 可以给用户一些反馈，例如提示复制成功
        message.success('文本已复制成功！');
      }
      function copyCaption(strText: string) {
        // 创建一个临时的textarea元素
        const textarea = document.createElement('textarea');
        // 设置textarea的值为要复制的文本
        textarea.value = strText;
        // 将textarea添加到DOM中
        document.body.appendChild(textarea);
        // 选中textarea中的文本
        textarea.select();
        // 执行复制命令
        document.execCommand('copy');
        // 从DOM中移除textarea
        document.body.removeChild(textarea);
        const txtNewCaption = document.getElementById('txtNewCaption') as HTMLInputElement;
        txtNewCaption.value = strText;
        // 可以给用户一些反馈，例如提示复制成功
        message.success('文本已复制成功！');
      }
      const btn_ClickAddNewFieldTab = async (item: any) => {
        const strDataTypeId = await DataTypeAbbrEx_GetDataTypeIdByName(item.typeNameSql);

        const strFldId = item.fldId;
        emit('on-edit-addnewfieldtab', {
          fldId: strFldId,
          fldName: item.fldName,
          caption: item.fldName,
          dataTypeId: strDataTypeId,
          fldLength: item.lengthSql,
          fldPrecision: item.precisionSql,
          isNull: item.isNullableSql,
          tabId: item.tabId,
          column_Name: item.fldName,
          typeName: item.typeNameSql,
          is_Nullable: item.isNullableSql,
          content: '这是当前表的字段Id',
        });
      };
      const btn_ClickSynchFieldFromColumnObj = async (item: any) => {
        emit('on-edit-synchfieldfromcolumnobj', {
          tabId: item.tabId,
          column_Name: item.fldName,
          typeName: item.typeNameSql,
          fldLength: item.lengthSql,
          fldPrecision: item.precisionSql,
          is_Nullable: item.isNullableSql,
          content: '这是当前表的字段Id',
        });
      };

      const btn_ClickAlterTab4DropColumn = (item: any) => {
        const strFldName = item.fldName;
        emit('on-edit-altertab4dropcolumn', {
          tabId: item.tabId,
          fldName: strFldName,
          content: '这是需要删除的表中字段',
        });
      };
      const btn_ClickDelFieldInGc = (item: any) => {
        const strFldId = item.fldId;
        emit('on-edit-delfieldingc', {
          fldId: strFldId,
          tabId: item.tabId,
          content: '这是需要删除的表中字段',
        });
      };

      // const btn_ClickAlterTab4DropColumn = (item: any) => {
      //   const strMId = item.mId;
      //   //   const strTabId = data.tabId;
      //   // const strFldName = data.fldName;
      //   emit('on-edit-altertab4dropcolumn', {
      //     mId: strMId,
      //     tabId: item.tabId,
      //     fldName: item.fldName,
      //     content: '这是需要删除的表中字段',
      //   });
      // };
      const btn_ClickAlterTab4AddField = (item: any) => {
        const strMId = item.mId;
        //   const strTabId = data.tabId;
        // const strFldName = data.fldName;
        emit('on-edit-altertab4addfield', {
          mId: strMId,
          tabId: item.tabId,
          fldName: item.fldName,
          content: '这是需要删除的表中字段',
        });
      };
      const btn_ClickAlterTab4UpdateField = (item: any) => {
        const strMId = item.mId;
        emit('on-edit-altertab4updatefield', {
          mId: strMId,
          tabId: item.tabId,
          fldName: item.fldName,
          content: '这是需要修改的表中字段',
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
      onMounted(async () => {
        props.items.forEach((item) => {
          if (item.errMsg == null) item.errMsg = '';
        });
        // for (const item of props.items) {
        //   item.isNeedAddConvFldNameResult = await isNeedAddConvFldName(item);
        //   console.log(item.isNeedAddConvFldNameResult);
        // }
      });
      return {
        // items,
        btn_ClickInRow,
        sortColumn,
        sortColumnKey,
        sortDirection,
        selectAllChecked,
        selectAllRows,
        btn_ClickFldId,
        btn_ClickAddNewFieldTab,
        btn_ClickDelFieldInGc,
        btn_ClickAlterTab4DropColumn,
        btn_ClickAlterTab4AddField,
        btn_ClickAlterTab4UpdateField,
        btn_ClickSynchFieldFromColumnObj,
        copyText,
        copyCaption,
        btn_Click_foreignKeyTab,
        btn_Click_addConvFldName,
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
      // async GetDnPath(item: any) {
      //   if (item.fieldTypeId == enumFieldType.DisplayUnit_20) {
      //     if (IsNullOrEmpty(item.fldDispUnitStyleId)) {
      //       const div1 = document.createElement('div');
      //       div1.innerHTML = '还未设置显示格式!';
      //       return div1;
      //     } else {
      //       const divFldDispUnitStyle = await css_FldDispUnitStyleEx_CreateDiv4FldDispUnit(
      //         item.fldDispUnitStyleId,
      //         '标题',
      //         '内容',
      //       );
      //       return divFldDispUnitStyle.innerHTML;
      //     }
      //   } else if (IsNullOrEmpty(item.dnPathId) == true) {
      //     const div2 = document.createElement('div');

      //     const objEx = new clsPrjTabFldENEx();
      //     ObjectAssign(objEx, item);

      //     await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_TabName, objEx);
      //     div2.innerHTML = objEx.tabName;
      //     return div2.innerHTML;
      //   } else {
      //     const divPath = await DnPathEx_CreateGraph4DnPathCache(item.dnPathId);
      //     // strKey = strText;
      //     return divPath.innerHTML;
      //   }
      // },
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
