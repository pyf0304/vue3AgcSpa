<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFldId4Add">
          <td class="text-right">
            <label id="lblFldIdA" class="col-form-label text-right" style="width: 90px">
              字段名
            </label>
          </td>
          <td class="text-left">
            <Autocomplete
              ref="autocompleteRef"
              :suggestions="FieldTabLst"
              @on-finish-input="FinishInput"
            />
          </td>
        </tr>
        <tr id="trFldId">
          <td class="text-right">
            <label id="lblFldId" class="col-form-label text-right" style="width: 90px">
              字段名
            </label>
          </td>
          <td class="text-left">
            <label id="lblFldName" class="col-form-label text-right" style="width: 290px">
              {{ fldName }}
            </label>
          </td>
        </tr>
        <tr id="trCaption" style="visibility: hidden; display: none">
          <td class="text-right">
            <label
              id="lblCaption"
              name="lblCaption"
              class="col-form-label text-right"
              style="width: 90px"
            >
              标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCaption"
              name="txtCaption"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trDataTypeId" style="visibility: hidden; display: none">
          <td class="text-right">
            <label
              id="lblDataTypeId"
              name="lblDataTypeId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              数据类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDataTypeId"
              name="ddlDataTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trFldLength" style="visibility: hidden; display: none">
          <td class="text-right">
            <label
              id="lblFldLength"
              name="lblFldLength"
              class="col-form-label text-right"
              style="width: 90px"
            >
              字段长度
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldLength"
              name="txtFldLength"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trFldPrecision" style="visibility: hidden; display: none">
          <td class="text-right">
            <label
              id="lblFldPrecision"
              name="lblFldPrecision"
              class="col-form-label text-right"
              style="width: 90px"
            >
              精确度
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldPrecision"
              name="txtFldPrecision"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trFieldTypeId">
          <td class="text-right">
            <label id="lblFieldTypeId" class="col-form-label text-right" style="width: 90px">
              字段类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFieldTypeId"
              v-model="fieldTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
              @change="ddlFieldTypeId_OnChange"
            >
              <option v-for="(item, index) in arrFieldType" :key="index" :value="item.fieldTypeId">
                {{ item.fieldTypeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trPrimaryTypeId">
          <td class="text-right">
            <label id="lblPrimaryTypeId" class="col-form-label text-right" style="width: 90px">
              主键类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrimaryTypeId"
              v-model="primaryTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrPrimaryType"
                :key="index"
                :value="item.primaryTypeId"
              >
                {{ item.primaryTypeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trIsTabNullable">
          <td class="text-right"> </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsTabNullable"
                v-model="isTabNullable"
                type="checkbox"
                Text="是否表中可空"
              /><label for="chkIsTabNullable">是否表中可空</label></span
            >
          </td>
        </tr>
        <tr id="trIsTabForeignKey">
          <td class="text-right"> </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsTabForeignKey"
                v-model="isTabForeignKey"
                type="checkbox"
                Text="是否表外键"
              /><label for="chkIsTabForeignKey">是否表外键</label></span
            >
          </td>
        </tr>
        <tr id="trIsGeneProp">
          <td class="text-right"> </td>
          <td class="text-left" ColSpan="1">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsGeneProp"
                v-model="isGeneProp"
                type="checkbox"
                Text="是否生成属性"
              /><label for="chkIsGeneProp">是否生成属性</label></span
            >
          </td>
        </tr>
        <tr id="trForeignKeyTabId">
          <td class="text-right">
            <label id="lblForeignKeyTabId" class="col-form-label text-right" style="width: 90px">
              外键表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlForeignKeyTabId"
              v-model="foreignKeyTabId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trFldOpTypeId">
          <td class="text-right">
            <label id="lblFldOpTypeId" class="col-form-label text-right" style="width: 90px">
              操作类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFldOpTypeId"
              v-model="fldOpTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrFldOperationType"
                :key="index"
                :value="item.fldOpTypeId"
              >
                {{ item.fldOpTypeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trSequenceNumber">
          <td class="text-right">
            <label id="lblSequenceNumber" class="col-form-label text-right" style="width: 90px">
              顺序号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSequenceNumber"
              v-model.number="sequenceNumber"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trIsParentObj">
          <td class="text-right"> </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsParentObj"
                v-model="isParentObj"
                type="checkbox"
                Text="是否父对象"
              /><label for="chkIsParentObj">是否父对象</label></span
            >
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" class="col-form-label text-right" style="width: 90px"> 说明 </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemoInTab"
              v-model="memoInTab"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelPrjTabFld" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitPrjTabFld"
        type="primary"
        @click="btnPrjTabFld_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
      <button @click="getSelectedValue">Get Selected Value</button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import { clsCboObject } from '@/ts/PubFun/clsCboObject';
  import Autocomplete from '@/ts/components/autoCompletePro.vue';
  import {
    vFieldTab_Sim_GetObjByFldIdCache,
    vFieldTab_Sim_GetObjLstCache,
  } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    HideTrInDivObj,
    SetCheckBoxValueByIdInDivObj,
    SetSelectValueByIdInDivObj,
    ShowTrInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';

  import { DataTypeAbbr_BindDdl_DataTypeIdInDivCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  import { PrjTabFld_Edit_ACEx } from '@/views/Table_Field/PrjTabFld_Edit_ACEx';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import PrjTabFld_EditEx from '@/views/Table_Field/PrjTabFld_EditEx';
  import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsFieldTypeEN, enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
  import { clsPrimaryTypeEN, enumPrimaryType } from '@/ts/L0Entity/Table_Field/clsPrimaryTypeEN';
  import { clscss_FldDispUnitStyleEN } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import {
    clsFldOperationTypeEN,
    enumFldOperationType,
  } from '@/ts/L0Entity/Table_Field/clsFldOperationTypeEN';
  import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { FieldType_GetArrFieldType } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
  import { PrimaryType_GetArrPrimaryType } from '@/ts/L3ForWApi/Table_Field/clsPrimaryTypeWApi';

  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { FldOperationType_GetArrFldOperationType } from '@/ts/L3ForWApi/Table_Field/clsFldOperationTypeWApi';
  import { CtlType_GetArrCtlTypeByIsVisible } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import {
    refDivEdit,
    PrjId_Session,
    TabId_Static,
    CmPrjId_Local,
  } from '@/views/Table_Field/PrjTabFldVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0 } from '@/ts/PubFun/clsString';
  import { PrjTabFld_Edit } from '@/viewsBase/Table_Field/PrjTabFld_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'PrjTabFldEdit',
    components: {
      // 组件注册
      Autocomplete,
    },
    setup() {
      const userStore = useUserStore();
      const tabId = ref('');
      const fldId = ref('');
      const fieldTypeId = ref('');
      const primaryTypeId = ref('');
      const isTabNullable = ref(true);
      const isTabForeignKey = ref(true);
      const isGeneProp = ref(true);
      const foreignKeyTabId = ref('');
      const fldOpTypeId = ref('');
      const sequenceNumber = ref(0);
      const isParentObj = ref(true);
      const memoInTab = ref('');
      const memo = ref('');
      const prjId = ref('');
      const ctlTypeIdDu = ref('');
      const fldDispUnitStyleId = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const fldName = ref('');
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrFieldType = ref<clsFieldTypeEN[] | null>([]);
      const arrPrimaryType = ref<clsPrimaryTypeEN[] | null>([]);
      const arrcss_FldDispUnitStyle = ref<clscss_FldDispUnitStyleEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrFldOperationType = ref<clsFldOperationTypeEN[] | null>([]);
      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const bolIsVisible_Giving = false; //给定值
        // const strCtlTypeId_Static = CtlTypeId_Static.value; //静态变量;//静态变量
        if (strTabId_Static == '') {
          const strMsg = Format('PrjTabFldEdit.TabId_Static.value为空,请检查！');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        fldId.value = '0';

        arrFieldType.value = await FieldType_GetArrFieldType(); //编辑区域
        fieldTypeId.value = '0';

        arrPrimaryType.value = await PrimaryType_GetArrPrimaryType(); //编辑区域
        primaryTypeId.value = '0';

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        foreignKeyTabId.value = '0';

        arrFldOperationType.value = await FldOperationType_GetArrFldOperationType(); //编辑区域
        fldOpTypeId.value = '0';

        arrCtlType.value = await CtlType_GetArrCtlTypeByIsVisible(bolIsVisible_Giving); //编辑区域
        ctlTypeIdDu.value = '0';
        // strCtlTypeId_Static = '0';
        // arrcss_FldDispUnitStyle.value =
        //   await css_FldDispUnitStyle_GetArrcss_FldDispUnitStyleByCtlTypeId(strCtlTypeId_Static); //编辑区域
        // fldDispUnitStyleId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjPrjTabFldEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataPrjTabFldObj() {
        const pobjPrjTabFldEN = new clsPrjTabFldEN();
        pobjPrjTabFldEN.SetTabId(TabId_Static.value); // 表ID
        pobjPrjTabFldEN.SetFldId(fldId.value); // 字段Id
        pobjPrjTabFldEN.SetFieldTypeId(fieldTypeId.value); // 字段类型

        if (pobjPrjTabFldEN.fieldTypeId == enumFieldType.KeyField_02) {
          pobjPrjTabFldEN.SetPrimaryTypeId(primaryTypeId.value); // 主键类型
        } else {
          pobjPrjTabFldEN.SetPrimaryTypeId(enumPrimaryType.NonPrimaryKey_00);
        }

        pobjPrjTabFldEN.SetIsTabNullable(isTabNullable.value); // 是否表中可空
        pobjPrjTabFldEN.SetIsTabForeignKey(isTabForeignKey.value); // 是否表外键
        pobjPrjTabFldEN.SetIsGeneProp(isGeneProp.value); // 是否生成属性
        pobjPrjTabFldEN.SetForeignKeyTabId(foreignKeyTabId.value); // 外键表ID
        pobjPrjTabFldEN.SetFldOpTypeId(fldOpTypeId.value); // 操作类型
        pobjPrjTabFldEN.SetSequenceNumber(Number(sequenceNumber.value)); // 顺序号
        pobjPrjTabFldEN.SetIsParentObj(isParentObj.value); // 是否父对象
        pobjPrjTabFldEN.SetMemoInTab(memoInTab.value); // 表说明
        pobjPrjTabFldEN.SetMemo(memo.value); // 说明
        pobjPrjTabFldEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjPrjTabFldEN.SetCtlTypeIdDu(ctlTypeIdDu.value); // 控件类型Id_du
        pobjPrjTabFldEN.SetFldDispUnitStyleId(fldDispUnitStyleId.value); // 字段显示单元样式Id
        pobjPrjTabFldEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjPrjTabFldEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjPrjTabFldEN;

        // const strThisFuncName = this.PutDataToPrjTabFldClass.name;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjPrjTabFldEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjTabFldObj(pobjPrjTabFldEN: clsPrjTabFldEN) {
        fldId.value = pobjPrjTabFldEN.fldId; // 字段Id
        fieldTypeId.value = pobjPrjTabFldEN.fieldTypeId; // 字段类型
        primaryTypeId.value = pobjPrjTabFldEN.primaryTypeId; // 主键类型
        isTabNullable.value = pobjPrjTabFldEN.isTabNullable; // 是否表中可空
        isTabForeignKey.value = pobjPrjTabFldEN.isTabForeignKey; // 是否表外键
        isGeneProp.value = pobjPrjTabFldEN.isGeneProp; // 是否生成属性
        foreignKeyTabId.value = pobjPrjTabFldEN.foreignKeyTabId; // 外键表ID
        fldOpTypeId.value = pobjPrjTabFldEN.fldOpTypeId; // 操作类型
        sequenceNumber.value = pobjPrjTabFldEN.sequenceNumber; // 顺序号
        isParentObj.value = pobjPrjTabFldEN.isParentObj; // 是否父对象
        memoInTab.value = pobjPrjTabFldEN.memoInTab; // 表说明
        memo.value = pobjPrjTabFldEN.memo; // 说明
        ctlTypeIdDu.value = pobjPrjTabFldEN.ctlTypeIdDu; // 控件类型Id_du
        fldDispUnitStyleId.value = pobjPrjTabFldEN.fldDispUnitStyleId; // 字段显示单元样式Id
        //  this.fldId = pobjPrjTabFldEN.fldId; // 字段Id
        // SetLabelHtmlByIdInDivObj(divVarSet.refDivEdit, 'lblFldName', this.fldId);
        const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
          pobjPrjTabFldEN.fldId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objvFieldTab_Sim != null) {
          fldName.value = Format('{0}({1})', objvFieldTab_Sim.fldName, objvFieldTab_Sim.fldId);
        }
        ddlFieldTypeId_OnChange();
        if (fieldTypeId.value == enumFieldType.KeyField_02) {
          primaryTypeId.value = pobjPrjTabFldEN.primaryTypeId; // 主键类型
        }

        try {
          foreignKeyTabId.value = IsNullOrEmptyEq0(pobjPrjTabFldEN.foreignKeyTabId); // 外键表ID
        } catch (e) {}
      }
      async function ddlFieldTypeId_OnChange() {
        const strFieldTypeId = fieldTypeId.value;
        if (IsNullOrEmpty(strFieldTypeId) == true) return;
        if (strFieldTypeId == enumFieldType.KeyField_02) {
          ShowTrInDivObj(refDivEdit.value, 'trPrimaryTypeId');
        } else {
          HideTrInDivObj(refDivEdit.value, 'trPrimaryTypeId');
        }
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        fldId.value = '0';
        fieldTypeId.value = '0';
        primaryTypeId.value = '0';
        isTabNullable.value = false;
        isTabForeignKey.value = false;
        isGeneProp.value = false;
        foreignKeyTabId.value = '0';
        fldOpTypeId.value = '0';
        sequenceNumber.value = 0;
        isParentObj.value = false;
        memoInTab.value = '';
        memo.value = '';
        ctlTypeIdDu.value = '0';
        fldDispUnitStyleId.value = '0';
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
              if (['02', '03', '06'].indexOf(clsPrjTabFldEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsPrjTabFldEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsPrjTabFldEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In PrjTabFld_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsPrjTabFldEN._CurrTabName,
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
      const strTitle = ref('工程表字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<PrjTabFld_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: PrjTabFld_EditEx) => {
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

      const FieldTabLst = ref<Array<clsCboObject>>([]);
      const autocompleteSuggestions: Array<clsCboObject> = [
        {
          value: '01',
          text: 'Apple',
        },
        { value: '02', text: 'Banana' },
        { value: '03', text: 'Orange' },
        { value: '04', text: 'Pineapple' },
        { value: '05', text: 'Mango' },
      ];
      // Define a ref for the Autocomplete component
      const autocompleteRef = ref<any>();

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPrjTabFld':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitPrjTabFld':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPrjTabFld':
            return strCancelButtonText.value;
          case 'btnSubmitPrjTabFld':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const getSelectedValue = () => {
        const selectedValue = autocompleteRef.value.getSelectedValue();
        console.log('Selected Value:', selectedValue);
        // Do something with the selected value
      };
      onMounted(async () => {
        const arrvFieldTab_Sim: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstCache(
          clsPrivateSessionStorage.currSelPrjId,
        );

        FieldTabLst.value = arrvFieldTab_Sim.map((x) => {
          return { value: x.fldId, text: x.fldName };
        });
        //this.myonload();
      });
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
        GetEditDataPrjTabFldObj,
        ShowDataFromPrjTabFldObj,
        Clear,
        btnSubmit_Click,
        tabId,
        fldId,
        fieldTypeId,
        primaryTypeId,
        isTabNullable,
        isTabForeignKey,
        isGeneProp,
        foreignKeyTabId,
        fldOpTypeId,
        sequenceNumber,
        isParentObj,
        memoInTab,
        memo,
        prjId,
        ctlTypeIdDu,
        fldDispUnitStyleId,
        updDate,
        updUser,
        arrvFieldTab_Sim,
        arrFieldType,
        arrPrimaryType,
        arrcss_FldDispUnitStyle,
        arrvPrjTab_Sim,
        arrFldOperationType,
        arrCtlType,

        SetButtonText,
        GetButtonText,
        autocompleteSuggestions,
        autocompleteRef,
        getSelectedValue,
        FieldTabLst,
        fldName,
        ddlFieldTypeId_OnChange,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
      //this.myonload();
    },
    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //PrjTabFld_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPrjTabFld_Edit_Click(strCommandName: string, strKeyId: string) {
        PrjTabFld_Edit_ACEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      // Submit_PrjTabFld(strOp: string) {
      //   alert(`提交${strOp}`);
      //   const objPage = new PrjTabFld_EditEx('', new PrjTabFldCRUDEx());
      //   objPage.btnSubmit_Click();
      // },
      async FinishInput(data: any) {
        console.log('data:', data);
        // const divEdit = refPrjTabFld_Edit.value.$refs.refDivEdit;
        const divEdit = refDivEdit.value;
        console.error('divEdit:', divEdit);
        if (data.fldId == '') {
          PrjTabFld_Edit_ACEx.IsNewFieldTab = true;
          PrjTabFld_Edit_ACEx.FldName = data.fldName;
          //说明是新字段
          // HideTrInDivObj(divEdit, '');
          ShowTrInDivObj(divEdit, 'trCaption');
          ShowTrInDivObj(divEdit, 'trDataTypeId');
          ShowTrInDivObj(divEdit, 'trFldLength');
          ShowTrInDivObj(divEdit, 'trFldPrecision');
          SetSelectValueByIdInDivObj(divEdit, 'ddlFieldTypeId', enumFieldType.NormalField_01);
          SetCheckBoxValueByIdInDivObj(divEdit, 'chkIsGeneProp', true);
          SetSelectValueByIdInDivObj(
            divEdit,
            'ddlFldOpTypeId',
            enumFldOperationType.ReadWrite_0001,
          );
          await DataTypeAbbr_BindDdl_DataTypeIdInDivCache(divEdit, 'ddlDataTypeId'); //
        } else {
          PrjTabFld_Edit_ACEx.FldId = data.fldId;
          PrjTabFld_Edit_ACEx.IsNewFieldTab = false;
          HideTrInDivObj(divEdit, 'trCaption');
          HideTrInDivObj(divEdit, 'trDataTypeId');
          HideTrInDivObj(divEdit, 'trFldLength');
          HideTrInDivObj(divEdit, 'trFldPrecision');
          SetSelectValueByIdInDivObj(divEdit, 'ddlFieldTypeId', enumFieldType.NormalField_01);
          SetCheckBoxValueByIdInDivObj(divEdit, 'chkIsGeneProp', true);
          SetSelectValueByIdInDivObj(
            divEdit,
            'ddlFldOpTypeId',
            enumFldOperationType.ReadWrite_0001,
          );
        }
      },
    },
  });
</script>
<style scoped></style>
