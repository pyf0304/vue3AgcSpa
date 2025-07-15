<template>
  <!-- 编辑层 -->

  <div class="modal-content" style="width: 385px">
    <div class="modal-header">
      <h4 id="lblDialogTitle_QryRegionFlds" class="modal-title">模态框（Modal）标题</h4>
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    </div>
    <div class="modal-body">
      <table
        id="tabEdit"
        style="width: 350px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFldId">
          <td class="text-right">
            <label
              id="lblFldId"
              name="lblFldId"
              class="col-form-label text-right"
              style="width: 90px"
              >字段Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFldId"
              v-model="fldId"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trOutFldId">
          <td class="text-right">
            <label
              id="lblOutFldId"
              name="lblOutFldId"
              class="col-form-label text-right"
              style="width: 90px"
              >OutFldId
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutFldId"
              v-model="outFldId"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trLabelCaption">
          <td class="text-right">
            <label
              id="lblLabelCaption"
              name="lblLabelCaption"
              class="col-form-label text-right"
              style="width: 90px"
              >标签标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLabelCaption"
              v-model="labelCaption"
              class="form-control form-control-sm"
              style="width: 250px"
            />
          </td>
        </tr>
        <tr id="trColSpan">
          <td class="text-right">
            <label
              id="lblColSpan"
              name="lblColSpan"
              class="col-form-label text-right"
              style="width: 90px"
              >跨列数
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtColSpan"
              v-model="colSpan"
              class="form-control form-control-sm"
              style="width: 250px"
            />
          </td>
        </tr>
        <tr id="trWidth">
          <td class="text-right">
            <label
              id="lblWidth"
              name="lblWidth"
              class="col-form-label text-right"
              style="width: 90px"
              >宽
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtWidth"
              v-model="width"
              class="form-control form-control-sm"
              style="width: 250px"
            />
          </td>
        </tr>
        <tr id="trSeqNum">
          <td class="text-right">
            <label
              id="lblSeqNum"
              name="lblSeqNum"
              class="col-form-label text-right"
              style="width: 90px"
              >序号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSeqNum"
              v-model="seqNum"
              class="form-control form-control-sm"
              style="width: 250px"
            />
          </td>
        </tr>
        <tr id="trCtlTypeId">
          <td class="text-right">
            <label
              id="lblCtlTypeId"
              name="lblCtlTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >控件类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCtlTypeId"
              v-model="ctlTypeId"
              class="form-control form-control-sm"
              style="width: 250px"
            >
              <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                {{ item.ctlTypeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trDdlItemsOptionId">
          <td class="text-right">
            <label
              id="lblDdlItemsOptionId"
              name="lblDdlItemsOptionId"
              class="col-form-label text-right"
              style="width: 90px"
              >下拉选项
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDdlItemsOptionId"
              v-model="ddlItemsOptionId"
              class="form-control form-control-sm"
              style="width: 250px"
            >
              <option
                v-for="(item, index) in arrDDLItemsOption"
                :key="index"
                :value="item.ddlItemsOptionId"
              >
                {{ item.ddlItemsOptionName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trDsTabId">
          <td class="text-right">
            <label
              id="lblDsTabId"
              name="lblDsTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >数据源表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDsTabId"
              v-model="dsTabId"
              class="form-control form-control-sm"
              style="width: 250px"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trDsCondStr">
          <td class="text-right">
            <label
              id="lblDsCondStr"
              name="lblDsCondStr"
              class="col-form-label text-right"
              style="width: 90px"
              >条件串
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDsCondStr"
              v-model="dsCondStr"
              class="form-control form-control-sm"
              style="width: 250px"
            />
          </td>
        </tr>
        <tr id="trDsSqlStr">
          <td class="text-right">
            <label
              id="lblDsSqlStr"
              name="lblDsSqlStr"
              class="col-form-label text-right"
              style="width: 90px"
              >数据源SQL
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDsSqlStr"
              v-model="dsSqlStr"
              class="form-control form-control-sm"
              style="width: 250px"
            />
          </td>
        </tr>
        <tr id="trItemsString">
          <td class="text-right">
            <label
              id="lblItemsString"
              name="lblItemsString"
              class="col-form-label text-right"
              style="width: 90px"
              >列表项串
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtItemsString"
              v-model="itemsString"
              class="form-control form-control-sm"
              style="width: 250px"
            />
          </td>
        </tr>
        <tr id="trVarId">
          <td class="text-right">
            <label
              id="lblVarId"
              name="lblVarId"
              class="col-form-label text-right"
              style="width: 90px"
              >变量Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlVarId"
              v-model="varId"
              class="form-control form-control-sm"
              style="width: 250px"
            >
              <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                {{ item.varName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trQueryOptionId">
          <td class="text-right">
            <label
              id="lblQueryOptionId"
              name="lblQueryOptionId"
              class="col-form-label text-right"
              style="width: 90px"
              >查询方式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlQueryOptionId"
              v-model="queryOptionId"
              class="form-control form-control-sm"
              style="width: 250px"
            >
              <option
                v-for="(item, index) in arrQueryOption"
                :key="index"
                :value="item.queryOptionId"
              >
                {{ item.queryOptionName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trChangeEvent">
          <td class="text-right">
            <label
              id="lblChangeEvent"
              name="lblChangeEvent"
              class="col-form-label text-right"
              style="width: 90px"
              >Change事件
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtChangeEvent"
              v-model="changeEvent"
              class="form-control form-control-sm"
              style="width: 250px"
              @click="txtChangeEvent_OnClick()"
            />
          </td>
        </tr>
        <tr id="trClickEvent">
          <td class="text-right">
            <label
              id="lblClickEvent"
              name="lblClickEvent"
              class="col-form-label text-right"
              style="width: 90px"
              >Click事件
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtClickEvent"
              v-model="clickEvent"
              class="form-control form-control-sm"
              style="width: 250px"
              @click="txtClickEvent_OnClick()"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >说明
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              v-model="memo"
              class="form-control form-control-sm"
              style="width: 250px"
            />
          </td>
        </tr>
      </table>
    </div>
    <div class="modal-footer">
      <button id="btnCancelQryRegionFlds" type="button" class="btn btn-default" data-dismiss="modal"
        >关闭</button
      >
      <button
        id="btnSubmitQryRegionFlds"
        type="button"
        class="btn btn-primary"
        onclick="btnQryRegionFlds_Edit_Click('Submit')"
        >添加</button
      >
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import QryRegionFlds_EditEx from '@/views/RegionManage/QryRegionFlds_EditEx';
  import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { clsDDLItemsOptionEN } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { clsQueryOptionEN } from '@/ts/L0Entity/PrjInterface/clsQueryOptionEN';
  import { vFieldTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
  import { CtlType_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { DDLItemsOption_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsDDLItemsOptionWApi';
  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { GCVariable_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
  import { QueryOption_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsQueryOptionWApi';
  import {
    CmPrjId_Local,
    refDivEdit,
    RegionId_Static,
    TabId_Static,
  } from '@/views/RegionManage/QryRegionFldsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { GetCtrlIdQueryV2 } from '@/ts/L2BLL/GeneCSharp/clsASPControlGroupBLEx2';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { QryRegionFlds_GetObjBymIdAsync } from '@/ts/L3ForWApi/RegionManage/clsQryRegionFldsWApi';

  export default defineComponent({
    name: 'QryRegionFldsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const keyId = ref(0);
      const userStore = useUserStore();
      const fldId = ref('');
      const outFldId = ref('');
      const labelCaption = ref('');
      const colSpan = ref(0);
      const width = ref(0);
      const seqNum = ref(0);
      const inUse = ref(true);
      const ctlTypeId = ref('');
      const ddlItemsOptionId = ref('');
      const dsTabId = ref('');
      const dsCondStr = ref('');
      const dsSqlStr = ref('');
      const itemsString = ref('');
      const regionId = ref('');
      const varId = ref('');
      const queryOptionId = ref('');
      const changeEvent = ref('');
      const clickEvent = ref('');
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[]>([]);
      const arrCtlType = ref<clsCtlTypeEN[]>([]);
      const arrDDLItemsOption = ref<clsDDLItemsOptionEN[]>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[]>([]);
      const arrGCVariable = ref<clsGCVariableEN[]>([]);
      const arrQueryOption = ref<clsQueryOptionEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strPrjId:
  */
      async function getArrvFieldTab_Sim(strPrjId: string) {
        let arrObjLstSel = await vFieldTab_Sim_GetObjLstCache(strPrjId);
        if (arrObjLstSel == null) return;
        arrvFieldTab_Sim.value.length = 0;
        const obj0 = new clsvFieldTab_SimEN();
        obj0.fldId = '0';
        obj0.fldName = '请选择v字段表_Sim...';
        arrvFieldTab_Sim.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.fldName.localeCompare(y.fldName));
        arrObjLstSel.forEach((x) => arrvFieldTab_Sim.value.push(x));
        fldId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrCtlType() {
        let arrObjLstSel = await CtlType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrCtlType.value.length = 0;
        const obj0 = new clsCtlTypeEN();
        obj0.ctlTypeId = '0';
        obj0.ctlTypeName = '请选择控件类型缩写...';
        arrCtlType.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
        arrObjLstSel.forEach((x) => arrCtlType.value.push(x));
        ctlTypeId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrDDLItemsOption() {
        const arrObjLstSel = await DDLItemsOption_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrDDLItemsOption.value.length = 0;
        const obj0 = new clsDDLItemsOptionEN();
        obj0.ddlItemsOptionId = '0';
        obj0.ddlItemsOptionName = '请选择下拉框列表选项...';
        arrDDLItemsOption.value.push(obj0);
        arrObjLstSel.forEach((x) => arrDDLItemsOption.value.push(x));
        ddlItemsOptionId.value = '0';
      }

      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strPrjId:
  */
      async function getArrGCVariable() {
        const arrObjLstSel = await GCVariable_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrGCVariable.value.length = 0;
        const obj0 = new clsGCVariableEN();
        obj0.varId = '0';
        obj0.varName = '请选择gC变量...';
        arrGCVariable.value.push(obj0);
        arrObjLstSel.forEach((x) => arrGCVariable.value.push(x));
        varId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrQueryOption() {
        const arrObjLstSel = await QueryOption_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrQueryOption.value.length = 0;
        const obj0 = new clsQueryOptionEN();
        obj0.queryOptionId = '0';
        obj0.queryOptionName = '请选择查询选项...';
        arrQueryOption.value.push(obj0);
        arrObjLstSel.forEach((x) => arrQueryOption.value.push(x));
        queryOptionId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量

        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        await getArrvFieldTab_Sim(strTabId_Static); //编辑区域

        await getArrvFieldTab_Sim(strTabId_Static); //编辑区域

        await getArrCtlType(); //编辑区域

        await getArrDDLItemsOption(); //编辑区域

        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache(strCmPrjId);

        await getArrGCVariable(); //编辑区域

        await getArrQueryOption(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQryRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQryRegionFldsObj() {
        const pobjQryRegionFldsEN = new clsQryRegionFldsEN();
        pobjQryRegionFldsEN.SetFldId(fldId.value); // 字段Id
        pobjQryRegionFldsEN.SetOutFldId(outFldId.value); // OutFldId
        pobjQryRegionFldsEN.SetLabelCaption(labelCaption.value); // 标签标题
        pobjQryRegionFldsEN.SetColSpan(colSpan.value); // 跨列数
        pobjQryRegionFldsEN.SetWidth(width.value); // 宽
        pobjQryRegionFldsEN.SetSeqNum(seqNum.value); // 序号
        pobjQryRegionFldsEN.SetInUse(true); // 是否在用
        pobjQryRegionFldsEN.SetCtlTypeId(ctlTypeId.value); // 控件类型
        pobjQryRegionFldsEN.SetDdlItemsOptionId(ddlItemsOptionId.value); // 下拉选项
        pobjQryRegionFldsEN.SetDsTabId(dsTabId.value); // 数据源表
        pobjQryRegionFldsEN.SetDsCondStr(dsCondStr.value); // 条件串
        pobjQryRegionFldsEN.SetDsSqlStr(dsSqlStr.value); // 数据源SQL
        pobjQryRegionFldsEN.SetItemsString(itemsString.value); // 列表项串
        pobjQryRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjQryRegionFldsEN.SetVarId(varId.value); // 变量Id
        pobjQryRegionFldsEN.SetQueryOptionId(queryOptionId.value); // 查询方式
        pobjQryRegionFldsEN.SetChangeEvent(changeEvent.value); // Change事件
        pobjQryRegionFldsEN.SetClickEvent(clickEvent.value); // Click事件
        pobjQryRegionFldsEN.SetMemo(memo.value); // 说明
        pobjQryRegionFldsEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjQryRegionFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjQryRegionFldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQryRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromQryRegionFldsObj(pobjQryRegionFldsEN: clsQryRegionFldsEN) {
        fldId.value = pobjQryRegionFldsEN.fldId; // 字段Id
        outFldId.value = pobjQryRegionFldsEN.outFldId; // OutFldId
        labelCaption.value = pobjQryRegionFldsEN.labelCaption; // 标签标题
        colSpan.value = pobjQryRegionFldsEN.colSpan; // 跨列数
        width.value = pobjQryRegionFldsEN.width; // 宽
        seqNum.value = pobjQryRegionFldsEN.seqNum; // 序号
        ctlTypeId.value = pobjQryRegionFldsEN.ctlTypeId; // 控件类型
        ddlItemsOptionId.value = pobjQryRegionFldsEN.ddlItemsOptionId; // 下拉选项
        dsTabId.value = pobjQryRegionFldsEN.dsTabId; // 数据源表
        dsCondStr.value = pobjQryRegionFldsEN.dsCondStr; // 条件串
        dsSqlStr.value = pobjQryRegionFldsEN.dsSqlStr; // 数据源SQL
        itemsString.value = pobjQryRegionFldsEN.itemsString; // 列表项串
        varId.value = pobjQryRegionFldsEN.varId; // 变量Id
        queryOptionId.value = pobjQryRegionFldsEN.queryOptionId; // 查询方式
        changeEvent.value = pobjQryRegionFldsEN.changeEvent; // Change事件
        clickEvent.value = pobjQryRegionFldsEN.clickEvent; // Click事件
        memo.value = pobjQryRegionFldsEN.memo; // 说明
      }
      const strTitle = ref('查询区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataQryRegionFldsObj,
        ShowDataFromQryRegionFldsObj,
        fldId,
        outFldId,
        labelCaption,
        colSpan,
        width,
        seqNum,
        inUse,
        ctlTypeId,
        ddlItemsOptionId,
        dsTabId,
        dsCondStr,
        dsSqlStr,
        itemsString,
        regionId,
        varId,
        queryOptionId,
        changeEvent,
        clickEvent,
        memo,
        updUser,
        updDate,
        arrvFieldTab_Sim,
        arrCtlType,
        arrDDLItemsOption,
        arrvPrjTab_Sim,
        arrGCVariable,
        arrQueryOption,
        keyId,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQryRegionFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        QryRegionFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
      async txtChangeEvent_OnClick() {
        const strThisFuncName = this.txtChangeEvent_OnClick.name;
        try {
          if (IsNullOrEmpty(this.changeEvent) == false) return;

          const lngmId = this.keyId;

          const objQryRegionFlds_Const = await QryRegionFlds_GetObjBymIdAsync(lngmId);
          if (objQryRegionFlds_Const == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }

          const strCtrlId = await GetCtrlIdQueryV2(objQryRegionFlds_Const);
          const strDefaEvent = Format('{0}_SelectedIndexChanged', strCtrlId);
          this.changeEvent = strDefaEvent;
          if (IsNullOrEmpty(this.changeEvent) == true) {
            this.changeEvent = strDefaEvent;
          }
        } catch (e: any) {
          alert(e);
        }
      },
      async txtClickEvent_OnClick() {
        const strThisFuncName = this.txtClickEvent_OnClick.name;
        try {
          if (IsNullOrEmpty(this.clickEvent) == false) return;

          const lngmId = this.keyId;

          const objQryRegionFlds_Const = await QryRegionFlds_GetObjBymIdAsync(lngmId);
          if (objQryRegionFlds_Const == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }

          const strCtrlId = await GetCtrlIdQueryV2(objQryRegionFlds_Const);
          const strDefaEvent = Format('{0}_Clicked', strCtrlId);
          this.clickEvent = strDefaEvent;
          if (IsNullOrEmpty(this.clickEvent) == true) {
            this.clickEvent = strDefaEvent;
          }
        } catch (e: any) {
          alert(e);
        }
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
