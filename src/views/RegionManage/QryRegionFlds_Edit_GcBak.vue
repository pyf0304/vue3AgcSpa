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
        <tbody>
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
                @change="ddlOutFldId_SelectedIndexChanged($event)"
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
                v-model.number="colSpan"
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
                v-model.number="width"
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
                v-model.number="seqNum"
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
            <td class="text-left">
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
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { CtlType_GetArrCtlType } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { DDLItemsOption_GetArrDDLItemsOption } from '@/ts/L3ForWApi/PrjInterface/clsDDLItemsOptionWApi';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { GCVariable_GetArrGCVariable } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
  import { QueryOption_GetArrQueryOption } from '@/ts/L3ForWApi/PrjInterface/clsQueryOptionWApi';
  import {
    CmPrjId_Local,
    refDivEdit,
    RegionId_Static,
    TabId_Static,
  } from '@/views/RegionManage/QryRegionFldsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { QryRegionFlds_Edit } from '@/viewsBase/RegionManage/QryRegionFlds_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'QryRegionFldsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const outFldId = ref('');
      const labelCaption = ref('');
      const colSpan = ref(0);
      const width = ref(0);
      const seqNum = ref(0);
      const inUse = ref('0');
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

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);
      const arrDDLItemsOption = ref<clsDDLItemsOptionEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);
      const arrQueryOption = ref<clsQueryOptionEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        outFldId.value = '0';

        arrCtlType.value = await CtlType_GetArrCtlType(); //编辑区域
        ctlTypeId.value = '0';

        arrDDLItemsOption.value = await DDLItemsOption_GetArrDDLItemsOption(); //编辑区域
        ddlItemsOptionId.value = '0';

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        dsTabId.value = '0';

        arrGCVariable.value = await GCVariable_GetArrGCVariable(); //编辑区域
        varId.value = '0';

        arrQueryOption.value = await QueryOption_GetArrQueryOption(); //编辑区域
        queryOptionId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQryRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQryRegionFldsObj() {
        const pobjQryRegionFldsEN = new clsQryRegionFldsEN();
        pobjQryRegionFldsEN.SetOutFldId(Is0EqEmpty(outFldId.value)); // OutFldId
        pobjQryRegionFldsEN.SetLabelCaption(labelCaption.value); // 标签标题
        pobjQryRegionFldsEN.SetColSpan(Number(colSpan.value)); // 跨列数
        pobjQryRegionFldsEN.SetWidth(Number(width.value)); // 宽
        pobjQryRegionFldsEN.SetSeqNum(Number(seqNum.value)); // 序号
        pobjQryRegionFldsEN.SetInUse(true); // 是否在用
        pobjQryRegionFldsEN.SetCtlTypeId(Is0EqEmpty(ctlTypeId.value)); // 控件类型
        pobjQryRegionFldsEN.SetDdlItemsOptionId(Is0EqEmpty(ddlItemsOptionId.value)); // 下拉选项
        pobjQryRegionFldsEN.SetDsTabId(Is0EqEmpty(dsTabId.value)); // 数据源表
        pobjQryRegionFldsEN.SetDsCondStr(dsCondStr.value); // 条件串
        pobjQryRegionFldsEN.SetDsSqlStr(dsSqlStr.value); // 数据源SQL
        pobjQryRegionFldsEN.SetItemsString(itemsString.value); // 列表项串
        pobjQryRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjQryRegionFldsEN.SetVarId(Is0EqEmpty(varId.value)); // 变量Id
        pobjQryRegionFldsEN.SetQueryOptionId(Is0EqEmpty(queryOptionId.value)); // 查询方式
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
        outFldId.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.outFldId); // OutFldId
        labelCaption.value = pobjQryRegionFldsEN.labelCaption; // 标签标题
        colSpan.value = pobjQryRegionFldsEN.colSpan; // 跨列数
        width.value = pobjQryRegionFldsEN.width; // 宽
        seqNum.value = pobjQryRegionFldsEN.seqNum; // 序号
        ctlTypeId.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.ctlTypeId); // 控件类型
        ddlItemsOptionId.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.ddlItemsOptionId); // 下拉选项
        dsTabId.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.dsTabId); // 数据源表
        dsCondStr.value = pobjQryRegionFldsEN.dsCondStr; // 条件串
        dsSqlStr.value = pobjQryRegionFldsEN.dsSqlStr; // 数据源SQL
        itemsString.value = pobjQryRegionFldsEN.itemsString; // 列表项串
        varId.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.varId); // 变量Id
        queryOptionId.value = IsNullOrEmptyEq0(pobjQryRegionFldsEN.queryOptionId); // 查询方式
        changeEvent.value = pobjQryRegionFldsEN.changeEvent; // Change事件
        clickEvent.value = pobjQryRegionFldsEN.clickEvent; // Click事件
        memo.value = pobjQryRegionFldsEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        outFldId.value = '0';
        labelCaption.value = '';
        colSpan.value = 0;
        width.value = 0;
        seqNum.value = 0;
        ctlTypeId.value = '0';
        ddlItemsOptionId.value = '0';
        dsTabId.value = '0';
        dsCondStr.value = '';
        dsSqlStr.value = '';
        itemsString.value = '';
        varId.value = '0';
        queryOptionId.value = '0';
        changeEvent.value = '';
        clickEvent.value = '';
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
              if (['02', '03', '06'].indexOf(clsQryRegionFldsEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsQryRegionFldsEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (QryRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsQryRegionFldsEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In QryRegionFlds_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (QryRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsQryRegionFldsEN._CurrTabName,
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
      const strTitle = ref('查询区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<QryRegionFlds_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: QryRegionFlds_EditEx) => {
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
        GetEditDataQryRegionFldsObj,
        ShowDataFromQryRegionFldsObj,
        Clear,
        btnSubmit_Click,
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

      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlOutFldId_SelectedIndexChanged(e: Event) {
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
