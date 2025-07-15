<template>
  <!-- 编辑层 -->

  <div class="modal-content" style="width: 385px">
    <div class="modal-header">
      <h4 id="lblDialogTitle_EditRegionFlds" class="modal-title">模态框（Modal）标题</h4>
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    </div>
    <div class="modal-body">
      <table
        id="tabEdit"
        style="width: 350px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
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
            <td class="text-left" ColSpan="3">
              <select
                id="ddlFldId"
                v-model="fldId"
                class="form-control form-control-sm"
                style="width: 150px"
                @change="ddlFldId_SelectedIndexChanged($event)"
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
            <td class="text-left" ColSpan="3">
              <input
                id="txtLabelCaption"
                v-model="labelCaption"
                class="form-control form-control-sm"
                style="width: 250px"
              />
            </td>
          </tr>
          <tr id="trWidth">
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
                v-model.number="colSpan"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
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
                v-model.number="width"
                class="form-control form-control-sm"
                style="width: 100px"
              />
            </td>
          </tr>
          <tr id="trSeqNum">
            <td class="text-right">
              <label
                id="lblInOutTypeId"
                name="lblInOutTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >In/Out
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlInOutTypeId"
                v-model="inOutTypeId"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrInOutType"
                  :key="index"
                  :value="item.inOutTypeId"
                >
                  {{ item.inOutTypeName }}
                </option></select
              >
            </td>
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
                v-model.number="seqNum"
                class="form-control form-control-sm"
                style="width: 100px"
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
            <td class="text-left" ColSpan="3">
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
                >下拉列表
              </label>
            </td>
            <td class="text-left" ColSpan="3">
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
            <td class="text-left" ColSpan="3">
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
            <td class="text-left" ColSpan="3">
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
                >SQL串
              </label>
            </td>
            <td class="text-left" ColSpan="3">
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
            <td class="text-left" ColSpan="3">
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
            <td class="text-left" ColSpan="3">
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
            <td class="text-left" ColSpan="3">
              <input
                id="txtClickEvent"
                v-model="clickEvent"
                class="form-control form-control-sm"
                style="width: 250px"
              />
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
            <td class="text-left" ColSpan="3">
              <input
                id="txtChangeEvent"
                v-model="changeEvent"
                class="form-control form-control-sm"
                style="width: 250px"
              />
            </td>
          </tr>
          <tr id="trColIndex">
            <td class="text-right">
              <label
                id="lblColIndex"
                name="lblColIndex"
                class="col-form-label text-right"
                style="width: 90px"
                >列序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtColIndex"
                v-model.number="colIndex"
                class="form-control form-control-sm"
                style="width: 100px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >说明
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 250px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-footer">
      <button
        id="btnCancelEditRegionFlds"
        type="button"
        class="btn btn-default"
        data-dismiss="modal"
        >关闭</button
      >
      <button
        id="btnSubmitEditRegionFlds"
        type="button"
        class="btn btn-primary"
        onclick="btnEditRegionFlds_Edit_Click('Submit')"
        >添加</button
      >
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import EditRegionFlds_EditEx from '@/views/RegionManage/EditRegionFlds_EditEx';
  import { clsEditRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
  import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { clsDDLItemsOptionEN } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { InOutType_GetArrInOutType } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
  import { CtlType_GetArrCtlType } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { DDLItemsOption_GetArrDDLItemsOption } from '@/ts/L3ForWApi/PrjInterface/clsDDLItemsOptionWApi';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { GCVariableEx_GetArrGCVariable } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
  import {
    CmPrjId_Local,
    refDivEdit,
    RegionId_Static,
    TabId_Static,
  } from '@/views/RegionManage/EditRegionFldsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format } from '@/ts/PubFun/clsString';
  import { EditRegionFlds_Edit } from '@/viewsBase/RegionManage/EditRegionFlds_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'EditRegionFldsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const fldId = ref('');
      const inUse = ref('0');
      const labelCaption = ref('');
      const colSpan = ref(0);
      const width = ref(0);
      const inOutTypeId = ref('');
      const seqNum = ref(0);
      const ctlTypeId = ref('');
      const ddlItemsOptionId = ref('');
      const dsTabId = ref('');
      const dsCondStr = ref('');
      const dsSqlStr = ref('');
      const itemsString = ref('');
      const varId = ref('');
      const clickEvent = ref('');
      const regionId = ref('');
      const changeEvent = ref('');
      const colIndex = ref(0);
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrInOutType = ref<clsInOutTypeEN[] | null>([]);
      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);
      const arrDDLItemsOption = ref<clsDDLItemsOptionEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        fldId.value = '0';

        arrInOutType.value = await InOutType_GetArrInOutType(); //编辑区域
        inOutTypeId.value = '0';

        arrCtlType.value = await CtlType_GetArrCtlType(); //编辑区域
        ctlTypeId.value = '0';

        arrDDLItemsOption.value = await DDLItemsOption_GetArrDDLItemsOption(); //编辑区域
        ddlItemsOptionId.value = '0';

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        dsTabId.value = '0';

        arrGCVariable.value = await GCVariableEx_GetArrGCVariable(); //编辑区域
        varId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjEditRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataEditRegionFldsObj() {
        const pobjEditRegionFldsEN = new clsEditRegionFldsEN();
        pobjEditRegionFldsEN.SetFldId(fldId.value); // 字段Id
        pobjEditRegionFldsEN.SetInUse(true); // 在用
        pobjEditRegionFldsEN.SetLabelCaption(labelCaption.value); // 标签标题
        pobjEditRegionFldsEN.SetColSpan(Number(colSpan.value)); // 跨列数
        pobjEditRegionFldsEN.SetWidth(Number(width.value)); // 宽
        pobjEditRegionFldsEN.SetInOutTypeId(inOutTypeId.value); // In/Out
        pobjEditRegionFldsEN.SetSeqNum(Number(seqNum.value)); // 序号
        pobjEditRegionFldsEN.SetCtlTypeId(ctlTypeId.value); // 控件类型
        pobjEditRegionFldsEN.SetDdlItemsOptionId(ddlItemsOptionId.value); // 下拉列表
        pobjEditRegionFldsEN.SetDsTabId(dsTabId.value); // 数据源表
        pobjEditRegionFldsEN.SetDsCondStr(dsCondStr.value); // 条件串
        pobjEditRegionFldsEN.SetDsSqlStr(dsSqlStr.value); // SQL串
        pobjEditRegionFldsEN.SetItemsString(itemsString.value); // 列表项串
        pobjEditRegionFldsEN.SetVarId(varId.value); // 变量Id
        pobjEditRegionFldsEN.SetClickEvent(clickEvent.value); // Click事件
        pobjEditRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjEditRegionFldsEN.SetChangeEvent(changeEvent.value); // Change事件
        pobjEditRegionFldsEN.SetColIndex(Number(colIndex.value)); // 列序号
        pobjEditRegionFldsEN.SetMemo(memo.value); // 说明
        pobjEditRegionFldsEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjEditRegionFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjEditRegionFldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjEditRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromEditRegionFldsObj(pobjEditRegionFldsEN: clsEditRegionFldsEN) {
        fldId.value = pobjEditRegionFldsEN.fldId; // 字段Id
        labelCaption.value = pobjEditRegionFldsEN.labelCaption; // 标签标题
        colSpan.value = pobjEditRegionFldsEN.colSpan; // 跨列数
        width.value = pobjEditRegionFldsEN.width; // 宽
        inOutTypeId.value = pobjEditRegionFldsEN.inOutTypeId; // In/Out
        seqNum.value = pobjEditRegionFldsEN.seqNum; // 序号
        ctlTypeId.value = pobjEditRegionFldsEN.ctlTypeId; // 控件类型
        ddlItemsOptionId.value = pobjEditRegionFldsEN.ddlItemsOptionId; // 下拉列表
        dsTabId.value = pobjEditRegionFldsEN.dsTabId; // 数据源表
        dsCondStr.value = pobjEditRegionFldsEN.dsCondStr; // 条件串
        dsSqlStr.value = pobjEditRegionFldsEN.dsSqlStr; // SQL串
        itemsString.value = pobjEditRegionFldsEN.itemsString; // 列表项串
        varId.value = pobjEditRegionFldsEN.varId; // 变量Id
        clickEvent.value = pobjEditRegionFldsEN.clickEvent; // Click事件
        changeEvent.value = pobjEditRegionFldsEN.changeEvent; // Change事件
        colIndex.value = pobjEditRegionFldsEN.colIndex; // 列序号
        memo.value = pobjEditRegionFldsEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        fldId.value = '0';
        labelCaption.value = '';
        colSpan.value = 0;
        width.value = 0;
        inOutTypeId.value = '0';
        seqNum.value = 0;
        ctlTypeId.value = '0';
        ddlItemsOptionId.value = '0';
        dsTabId.value = '0';
        dsCondStr.value = '';
        dsSqlStr.value = '';
        itemsString.value = '';
        varId.value = '0';
        clickEvent.value = '';
        changeEvent.value = '';
        colIndex.value = 0;
        memo.value = '';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_btnSubmit_Click)
       **/
      const btnSubmit_Click = async () => {
        const strThisFuncName = btnSubmit_Click.name;
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let returnBool = false;
          let strInfo = '';
          let strMsg = '';
          switch (strCommandText) {
            case '添加':
              strSubmitButtonText.value = '确认添加';
              strCancelButtonText.value = '取消添加';
              await objPage_Edit.value.AddNewRecord();
              break;
            case '确认添加':
              //这是一个单表的插入的代码,由于逻辑层太简单,
              //就把逻辑层合并到控制层,
              if (['02', '03', '06'].indexOf(clsEditRegionFldsEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsEditRegionFldsEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (EditRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsEditRegionFldsEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In EditRegionFlds_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (EditRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsEditRegionFldsEN._CurrTabName,
                    keyId.value.toString(),
                  );
              }
              break;
            default:
              strMsg = Format(
                'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
                strCommandText,
              );
              console.error(strMsg);
              alert(strMsg);
              break;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };
      const strTitle = ref('编辑区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<EditRegionFlds_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: EditRegionFlds_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
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
        GetEditDataEditRegionFldsObj,
        ShowDataFromEditRegionFldsObj,
        Clear,
        btnSubmit_Click,
        fldId,
        inUse,
        labelCaption,
        colSpan,
        width,
        inOutTypeId,
        seqNum,
        ctlTypeId,
        ddlItemsOptionId,
        dsTabId,
        dsCondStr,
        dsSqlStr,
        itemsString,
        varId,
        clickEvent,
        regionId,
        changeEvent,
        colIndex,
        memo,
        updUser,
        updDate,
        arrvFieldTab_Sim,
        arrInOutType,
        arrCtlType,
        arrDDLItemsOption,
        arrvPrjTab_Sim,
        arrGCVariable,
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
      btnEditRegionFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        EditRegionFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlFldId_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在事件函数中重写该函数!');
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
