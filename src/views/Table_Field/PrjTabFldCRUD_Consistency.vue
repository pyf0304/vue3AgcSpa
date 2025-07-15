<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <div id="divReplaceFldName" class="btn-group" role="group" aria-label="Basic example">
            <input
              id="txtNewFldName"
              name="txtNewFldName"
              class="form-control form-control-sm"
              style="width: 120px"
            />
            <button
              id="btnReplaceFldName"
              name="btnReplaceFldName"
              class="btn btn-outline-info btn-sm text-nowrap"
              title="把所选字段替换成新字段名"
              @click="btn_Click('ReplaceFldName', '')"
              >替换</button
            >
          </div>
        </li>
        <li class="nav-item ml-1">
          <div id="divSetNewCaption" class="btn-group" role="group" aria-label="Basic example">
            <input
              id="txtNewCaption"
              name="txtNewCaption"
              class="form-control form-control-sm"
              style="width: 120px"
            />
            <button
              id="btnSetNewCaption"
              name="btnSetNewCaption"
              class="btn btn-outline-info btn-sm text-nowrap"
              title="把所选字段的标题替换成新标题名"
              @click="btn_Click('SetNewCaption', '')"
              >标题</button
            >
          </div>
        </li>

        <li class="nav-item ml-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlFieldTypeId_SetFldValue"
              name="ddlFieldTypeId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 110px"
            ></select>
            <button
              id="btnSetFieldTypeId"
              name="btnSetFieldTypeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              title="设置所选字段的字段类型"
              @click="btn_Click('SetFieldTypeId', '')"
              >字段类型</button
            >
          </div>
        </li>

        <li class="nav-item ml-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlTabId_SetFldValue"
              name="ddlTabId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 105px"
            ></select>
            <button
              id="btnCopyToPrjTab"
              name="btnCopyToPrjTab"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('CopyToPrjTab', '')"
              >复制到表</button
            >
          </div>
        </li>

        <li class="nav-item ml-1">
          <button
            id="btnAddNewRecord"
            name="btnAddNewRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnCopyRecord"
            name="btnCopyRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制</button
          >
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>

        <li class="nav-item ml-1">
          <MyDropButton
            :buttons="sortButtons"
            :is-visible="sortVisible"
            :title="sortTitle"
            @on-button-click="handleButtonClick"
          ></MyDropButton>
        </li>

        <li class="nav-item ml-1">
          <button
            id="btnSetFieldConv"
            name="btnSetFieldConv"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('SetFieldConv', '')"
            >转换字段</button
          >
        </li>
        <li class="nav-item ml-1">
          <MyDropButton
            :buttons="ExpandButtons"
            :is-visible="ExpandVisible"
            :title="ExpandTitle"
            @on-button-click="handleButtonClick"
          ></MyDropButton>
        </li>

        <li class="nav-item ml-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlInFldId_SetFldValue"
              name="ddlInFldId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 105px"
            ></select>
            <!-- <button
              id="btnSetInFldId"
              name="btnSetInFldId"
              class="btn btn-outline-info btn-sm text-nowrap"
              title="为所选字段设置In字段"
              @click="btn_Click('SetInFldId', '')"
              >In字段</button
            > -->
            <MyDropButton
              :buttons="SetInFldButtons"
              :is-visible="SetPathVisible"
              :title="SetInFldTitle"
              @on-button-click="handleButtonClick"
            ></MyDropButton>
          </div>
        </li>
        <li class="nav-item ml-1">
          <MyDropButton
            :buttons="SetPathButtons"
            :is-visible="SetPathVisible"
            :title="SetPathTitle"
            @on-button-click="handleButtonClick"
          ></MyDropButton>
        </li>

        <li class="nav-item ml-1">
          <MyDropButton
            :buttons="TabViewButtons"
            :is-visible="TabViewVisible"
            :title="TabViewTitle"
            @on-button-click="handleButtonClick"
          ></MyDropButton>
        </li>
        <li class="nav-item ml-1">
          <MyDropButton
            :buttons="ShowModeButtons"
            :is-visible="ShowModeVisible"
            :title="ShowModeTitle"
            @on-button-click="handleButtonClick"
          ></MyDropButton>
        </li>

        <!-- <li>
          <div id="divViewFunc" class="btn-group">
            <button class="btn btn-secondary btn-sm" type="button"> 表视图操作 </button>
            <button
              type="button"
              class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">表视图操作</span>
            </button>
            <div class="myDropdown-menu">
              <a
                id="btnSetFldOrderNum4View"
                class="dropdown-item"
                href="javascript:btn_Click('SetFldOrderNum4View');"
                >为视图设置序号</a
              >
              <div class="dropdown-divider"></div>
              <a
                id="btnCreateView4Sql"
                class="dropdown-item"
                href="javascript:btn_Click('CreateView4Sql');"
                >建立视图4Sql</a
              >
              <a
                id="btnImportSqlViewFromSqlServer"
                class="dropdown-item"
                href="javascript:btn_Click('ImportSqlViewFromSqlServer');"
                >导入SQL视图</a
              >
              <a id="btnAnalysis" class="dropdown-item" href="javascript:btn_Click('Analysis');"
                >分析字段</a
              >
            </div>
          </div>
        </li> -->

        <li class="nav-item ml-1">
          <button
            id="btnGenNewTabInSQL"
            name="btnGenNewTabInSQL"
            title="当前工程表在Sql数据库相应的表，单击可以新表！"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('GenNewTabInSQL', '')"
            >生成新表</button
          >
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnReturnToPrjTabLst"
            name="btnReturnToPrjTabLst"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('ReturnToPrjTabLst', '')"
            >返回</button
          >
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnReturnToMainTab"
            name="btnReturnToMainTab"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('ReturnToMainTab', '')"
            >返回主表</button
          >
        </li>
        <li class="nav-item ml-3">
          <label id="lblMsg_List" name="lblMsg_List" class="text-warning"> </label>
        </li>
        <li
          ><img
            src="/src/assets/images/refresh.jfif"
            style="height: 40px; width: 40px"
            alt="刷新列表"
            title="刷新列表"
            @click="btn_Click('RefreshList', '')"
        /></li>
      </ul>
    </div>
    <!-- 列表层 -->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List">
        <PrjTabFld_LstCom
          ref="PrjTabFld_LstEventRef"
          :items="dataList"
          :show-error-message="true"
          :op-type="'CheckConsistency'"
          @on-edit-prjtabfld="EditPrjTabFld"
          @on-edit-fieldtab="EditFieldTab"
          @on-edit-addnewfieldtab="AddNewFieldTab"
          @on-edit-delfieldingc="DelFieldInGc"
          @on-edit-altertab4dropcolumn="AlterTab4DropColumn"
          @on-edit-altertab4addfield="AlterTab4AddField"
          @on-edit-altertab4updatefield="AlterTab4UpdateField"
          @on-edit-synchfieldfromcolumnobj="SynchFieldFromColumnObj"
          @on-sort-column="SortColumn"
        ></PrjTabFld_LstCom>
      </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortPrjTabFldBy" type="hidden" />
    </div>
    <!--  编辑层 -->
    <!-- <div id="divEdit" value="1"></div> -->
    <PrjTabFld_EditCom ref="refPrjTabFld_Edit"></PrjTabFld_EditCom>
    <FieldTab_EditCom ref="refFieldTab_Edit"></FieldTab_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <!-- 选择区 -->
    <div id="divSelect" value="1"></div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import PrjTabFldCRUDEx from '@/views/Table_Field/PrjTabFldCRUDEx';
  import FieldTab_EditCom from '@/views/Table_Field/FieldTab_Edit.vue';
  import PrjTabFld_EditCom from '@/views/Table_Field/PrjTabFld_Edit.vue';
  import PrjTabFld_LstCom from '@/views/Table_Field/PrjTabFld_List.vue';
  import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
  import MyDropButton from '@/ts/components/myDropButtonV3.vue';
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refPrjTabFld_Edit,
    CmPrjId_Local,
    TabId_Static,
    PrjId_Session,
  } from '@/views/Table_Field/PrjTabFldVueShare';

  import {
    PrjId_Session as PrjId_SessionInFieldTab,
    refFieldTab_Edit,
  } from '@/views/Table_Field/FieldTabVueShare';

  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  export default defineComponent({
    name: 'PrjTabFldCRUDConsistency',
    components: {
      // 组件注册
      PrjTabFld_EditCom,
      FieldTab_EditCom,
      PrjTabFld_LstCom,
      MyDropButton, // Use the correct component name here
    },
    props: {
      opType: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      PrjId_SessionInFieldTab.value = clsPrivateSessionStorage.currSelPrjId;
      TabId_Static.value = clsPrivateSessionStorage.tabId_Main;
      const sortButtons: Array<clsBtnItem> = [
        { type: 'btntext', keyId: 'btnMoveRecTo', text: '设置次序', title: '根据输入序号设置次序' },
        { type: 'hr', keyId: '', text: '', title: '' },
        { type: 'btn', keyId: 'btnGoTop', text: '移顶', title: '把当前记录移到顶端' },
        { type: 'btn', keyId: 'btnUpMove', text: '上移', title: '把当前记录向上移一步' },
        { type: 'btn', keyId: 'btnDownMove', text: '下移', title: '把当前记录向下移一步' },
        { type: 'btn', keyId: 'btnGoBottum', text: '移底', title: '把当前记录移到底端' },
        { type: 'hr', keyId: '', text: '', title: '' },
        { type: 'btn', keyId: 'btnReOrder', text: '重序', title: '把整个记录重新排序' },
      ];

      const sortVisible = ref(false);
      const sortTitle = ref('排序');

      const ExpandButtons: Array<clsBtnItem> = [
        {
          type: 'btn',
          keyId: 'btnSetIsForExtendClass',
          text: '设置扩展',
          title: '给所选字段改变扩展类属性',
        },
        {
          type: 'btn',
          keyId: 'btnCancelIsForExtendClass',
          text: '取消扩展',
          title: '给所选字段改变扩展类属性',
        },

        {
          type: 'btn',
          keyId: 'btnSetDispUnit',
          text: '设置显示单元',
          title: '给所选字段设置显示单元',
        },
      ];

      const ExpandVisible = ref(false);
      const ExpandTitle = ref('设置扩展');

      const SetInFldButtons: Array<clsBtnItem> = [
        {
          type: 'btn',
          keyId: 'btnSetInFldIn',
          text: 'In字段',
          title: '给所选记录设置In字段',
        },

        {
          type: 'btn',
          keyId: 'btnCancelInFld',
          text: '取消In字段',
          title: '给所选记录取消In字段',
        },
      ];
      const SetPathButtons: Array<clsBtnItem> = [
        {
          type: 'btn',
          keyId: 'btnSetDnPath',
          text: '手工设置',
          title: '给所选记录手工设置路径',
        },

        {
          type: 'btn',
          keyId: 'btnAutoSetDnPath',
          text: '自动设置',
          title: '给所选记录自动设置路径',
        },
        {
          type: 'btn',
          keyId: 'btnSubmitClearDnPath',
          text: '取消路径',
          title: '给所选记录取消路径设置',
        },
        {
          type: 'btn',
          keyId: 'btnTestDnPath',
          text: '测试路径',
          title: '测试路径',
        },
      ];

      const SetPathVisible = ref(false);
      const SetPathTitle = ref('设置路径');
      const SetInFldTitle = ref('In字段');

      const ShowModeButtons: Array<clsBtnItem> = [
        {
          type: 'btn',
          keyId: 'btnEditTabFld',
          text: '表字段维护',
          title: '把当前显示模式设置为表字段维护',
        },

        {
          type: 'btn',
          keyId: 'btnCheckConsistency',
          text: '检查一致性',
          title: '把当前显示模式设置为检查一致性',
        },
      ];

      const ShowModeVisible = ref(false);
      const ShowModeTitle = ref('显示模式');

      const TabViewButtons: Array<clsBtnItem> = [
        {
          type: 'btn',
          keyId: 'btnSetFldOrderNum4View',
          text: '为视图设置序号',
          title: '为视图设置序号',
        },

        {
          type: 'btn',
          keyId: 'btnCreateView4Sql',
          text: '建立视图4Sql',
          title: '建立视图4Sql',
        },
        {
          type: 'btn',
          keyId: 'btnImportSqlViewFromSqlServer',
          text: '导入SQL视图',
          title: '导入SQL视图',
        },
        {
          type: 'btn',
          keyId: 'btnAnalysis',
          text: '分析字段',
          title: '分析字段',
        },
      ];

      const TabViewVisible = ref(false);
      const TabViewTitle = ref('表视图操作');

      const options = ref([
        { value: 'label1', label: '排序操作' },
        { value: 'button1', label: '按钮1' },
        { value: 'button2', label: '按钮2' },
        { value: 'button3', label: '按钮3' },
      ]);

      //      const selectedOption = ref(options.value[0].value); // 用于存储选中的按钮选项值
      const selectedOption = ref(options.value[0].value); // 用于存储选中的按钮选项值
      // const selectedOption = ref(null); // 初始值设置为 null

      const handleOptionChange = () => {
        // 根据选中的按钮选项值执行相应的操作
        if (selectedOption.value === 'button1') {
          handleButton1Click();
        } else if (selectedOption.value === 'button2') {
          handleButton2Click();
        } else if (selectedOption.value === 'button3') {
          handleButton3Click();
        }
      };

      const handleButton1Click = () => {
        // 处理按钮1的点击操作
        // ...
      };

      const handleButton2Click = () => {
        // 处理按钮2的点击操作
        // ...
      };

      const handleButton3Click = () => {
        // 处理按钮3的点击操作
        // ...
      };
      const refSelectedOption = ref(null);
      const strTitle = ref('工程表字段维护');
      const dataList = ref<Array<clsPrjTabFldENEx>>([]);

      const refDivDataLst = ref();
      onMounted(() => {
        // selectedOption.value = options.value[0].value; // 将默认选中项设置为 options 数组的第一项的 value
        // console.log('selectedOption:', selectedOption.value);
        // console.log('selectedOption:', selectedOption);

        // console.log('options:', options.value);
        // refSelectedOption.value.selectedIndex = 1;

        PrjTabFldCRUDEx.ShowLst = ShowLst;
        const objPage = new PrjTabFldCRUDEx();

        objPage.Op = props.opType;
        // console.log('objPage.Op', objPage.Op);
        if (objPage.Op == 'CheckConsistency') {
          strTitle.value = '检查一致性';
        }
        objPage.PageLoadCache();
        //this.myonload();
      });
      const ShowLst = async (arrObjLst: Array<clsPrjTabFldENEx>): Promise<void> => {
        // console.log(arrObjLst);
        // alert('ShowLst in ViewInfoCRUD');
        dataList.value = arrObjLst;
      };
      const EditPrjTabFld = (data: any) => {
        console.log('data:', data);

        PrjTabFldCRUDEx.btn_Click('Update', data.mId);
      };
      const EditFieldTab = (data: any) => {
        console.log('data:', data);
        PrjTabFldCRUDEx.EditFieldTabRef = refFieldTab_Edit;

        PrjTabFldCRUDEx.btn_Click('EditTabFld', data.fldId);
      };
      const AddNewFieldTab = async (data: any) => {
        console.log('data:(in AddNewFieldTab)', data);
        PrjTabFldCRUDEx.EditFieldTabRef = refFieldTab_Edit;

        const strFldName = data.fldName;
        const strCaption = data.caption;
        const strDataTypeId = data.dataTypeId;
        const intFldLength = data.fldLength;
        const intFldPrecision = data.fldPrecision;
        const bolIsNull = data.isNull;
        const strTabId = data.tabId;
        await PrjTabFldCRUDEx.btnAddNewFieldTab_Click(
          strFldName,
          strCaption,
          strDataTypeId,
          intFldLength,
          intFldPrecision,
          bolIsNull,
          strTabId,
          refDivList.value,
        );
      };

      const DelFieldInGc = async (data: any) => {
        console.log('data:(in DelFieldInGc)', data);

        const strTabId = data.tabId;
        const strFldId = data.fldId;
        await PrjTabFldCRUDEx.btnDelFieldInGc_Click(strTabId, strFldId, refDivLayout.value);
      };

      const AlterTab4UpdateField = async (data: any) => {
        console.log('data:(in AlterTab4UpdateField)', data);
        const strMId = data.mId;
        await PrjTabFldCRUDEx.btnAlterTab4UpdateField_Click(strMId, refDivList.value);
      };
      const AlterTab4DropColumn = async (data: any) => {
        console.log('data:(in AlterTab4DropColumn)', data);

        const strTabId = data.tabId;
        const strFldName = data.fldName;
        await PrjTabFldCRUDEx.btnAlterTab4DropColumn_Click(strTabId, strFldName, refDivList.value);
      };

      const SynchFieldFromColumnObj = async (data: any) => {
        console.log('data:(in SynchFieldFromColumnObj)', data);
        PrjTabFldCRUDEx.EditFieldTabRef = refFieldTab_Edit;

        const strTabId = data.tabId;

        const strColumn_Name = data.column_Name;
        const strTypeName = data.typeName;
        const intFldLength = data.fldLength;
        const intFldPrecision = data.fldPrecision;
        const bolIs_Nullable = data.is_Nullable;
        await PrjTabFldCRUDEx.btnSynchFieldFromColumnObj_Click(
          strTabId,
          strColumn_Name,
          strTypeName,
          intFldLength,
          intFldPrecision,
          bolIs_Nullable,
          refDivList.value,
        );
      };

      const AlterTab4AddField = async (data: any) => {
        console.log('data:(in AlterTab4AddField)', data);
        const strMId = data.mId;
        await PrjTabFldCRUDEx.btnAlterTab4AddField_Click(strMId, refDivList.value);
      };
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        PrjTabFldCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        dataList,
        EditPrjTabFld,
        EditFieldTab,
        AddNewFieldTab,
        DelFieldInGc,
        AlterTab4DropColumn,
        AlterTab4UpdateField,
        AlterTab4AddField,
        SynchFieldFromColumnObj,
        options,
        selectedOption,
        handleOptionChange,
        refSelectedOption,
        sortButtons,
        sortTitle,
        sortVisible,
        ExpandTitle,
        ExpandButtons,
        ExpandVisible,
        SetPathButtons,
        SetInFldButtons,
        SetPathVisible,
        SetPathTitle,
        ShowModeButtons,
        ShowModeVisible,
        ShowModeTitle,
        TabViewTitle,
        TabViewVisible,
        TabViewButtons,
        SetInFldTitle,
        refPrjTabFld_Edit,
        refFieldTab_Edit,
      };
    },
    watch: {
      // 数据监听
    },

    methods: {
      // 方法定义
      /**
       * 页面导入-在导入页面后运行的函数
       **/

      // async EditFieldTab(data: any) {
      //   console.log('data:', data);

      //   PrjTabFldCRUDEx.btn_Click('EditTabFld', data.fldId);
      // },
      // async EditPrjTabFld(data: any) {
      //   console.log('data:', data);
      //   PrjTabFldCRUDEx.btn_Click('Update', data.mId);

      // },
      async SortColumn(data: any) {
        console.log('data:', data);

        const objPage = new PrjTabFldCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },
      handleButtonClick(data: any) {
        const strKeyId = data.keyId;
        // const objButton = buttons.find((x) => x.value == strKeyId);
        // if (objButton == null) return;
        // 根据点击的按钮选项执行相应的操作
        switch (strKeyId) {
          case 'btnMoveRecTo':
            PrjTabFldCRUDEx.btn_Click('MoveRecTo', data.inputText);
            break;

          case 'btnGoTop':
            PrjTabFldCRUDEx.btn_Click('GoTop', data.inputText);
            break;

          case 'btnUpMove':
            PrjTabFldCRUDEx.btn_Click('UpMove', data.inputText);
            break;

          case 'btnDownMove':
            PrjTabFldCRUDEx.btn_Click('DownMove', data.inputText);
            break;
          case 'btnGoBottum':
            PrjTabFldCRUDEx.btn_Click('GoBottum', data.inputText);
            break;
          case 'btnReOrder':
            PrjTabFldCRUDEx.btn_Click('ReOrder', data.inputText);
            break;
          case 'btnSetIsForExtendClass':
            PrjTabFldCRUDEx.btn_Click('SetIsForExtendClass', data.inputText);
            break;
          case 'btnCancelIsForExtendClass':
            PrjTabFldCRUDEx.btn_Click('CancelIsForExtendClass', data.inputText);
            break;
          case 'btnSetDispUnit':
            PrjTabFldCRUDEx.btn_Click('SetDispUnit', data.inputText);
            break;
          case 'btnSetDnPath':
            PrjTabFldCRUDEx.btn_Click('SetDnPath', data.inputText);
            break;
          case 'btnAutoSetDnPath':
            PrjTabFldCRUDEx.btn_Click('AutoSetDnPath', data.inputText);
            break;
          case 'btnSubmitClearDnPath':
            PrjTabFldCRUDEx.btn_Click('SubmitClearDnPath', data.inputText);
            break;
          case 'btnTestDnPath':
            PrjTabFldCRUDEx.btn_Click('TestDnPath', data.inputText);
            break;
          case 'btnSetFldOrderNum4View':
            PrjTabFldCRUDEx.btn_Click('SetFldOrderNum4View', data.inputText);
            break;
          case 'btnCreateView4Sql':
            PrjTabFldCRUDEx.btn_Click('CreateView4Sql', data.inputText);
            break;
          case 'btnImportSqlViewFromSqlServer':
            PrjTabFldCRUDEx.btn_Click('ImportSqlViewFromSqlServer', data.inputText);
            break;
          case 'btnAnalysis':
            PrjTabFldCRUDEx.btn_Click('Analysis', data.inputText);
            break;
          case 'btnCancelInFld':
            PrjTabFldCRUDEx.btn_Click('CancelInFld', data.inputText);
            break;
          case 'btnSetInFldIn':
            PrjTabFldCRUDEx.btn_Click('SetInFldId', data.inputText);
            break;
        }
        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      },
    },
  });
</script>
<style scoped>
  .myDropdown-menu {
    position: relative;
  }

  .myDropdown-menu ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
  }

  .myDropdown-menu li {
    list-style: none;
    margin-bottom: 5px;
  }

  .myDropdown-menu li:hover {
    background-color: #f2f2f2;
  }

  .myDropdown-menu.show ul {
    display: block;
  }
</style>
