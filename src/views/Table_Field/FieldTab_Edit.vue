<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 800px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFldStateId">
          <td class="text-right">
            <label
              id="lblFldName"
              name="lblFldName"
              class="col-form-label text-right"
              style="width: 90px"
            >
              字段名
            </label>
          </td>
          <td class="text-left" ColSpan="1">
            <input
              id="txtFldName"
              v-model="fldName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFldStateId"
              name="lblFldStateId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              字段状态
            </label>
          </td>
          <td class="text-left" ColSpan="1">
            <select
              id="ddlFldStateId"
              v-model="fldStateId"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option v-for="(item, index) in arrFldState" :key="index" :value="item.fldStateId">
                {{ item.fldStateName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trIsIdentity">
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
          <td class="text-left" ColSpan="1">
            <input
              id="txtCaption"
              v-model="caption"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 80px">
              <input
                id="chkIsPrimaryKey"
                v-model="isPrimaryKey"
                type="checkbox"
                Text="是否主键"
              /><label for="chkIsPrimaryKey">是否主键</label></span
            >
          </td>
        </tr>
        <tr id="trHomologousFldId">
          <td class="text-right" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsIdentity"
                v-model="isIdentity"
                type="checkbox"
                Text="是否Identity"
              /><label for="chkIsIdentity">是否Identity</label></span
            >
          </td>

          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input id="chkIsNull" v-model="isNull" type="checkbox" Text="是否可空" /><label
                for="chkIsNull"
                >是否可空</label
              ></span
            >
          </td>
        </tr>
        <tr id="trHomologousFldId">
          <td class="text-right">
            <label
              id="lblFieldTypeId"
              name="lblFieldTypeId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              字段类型
            </label>
          </td>
          <td class="text-left" ColSpan="1">
            <select
              id="ddlFieldTypeId"
              v-model="fieldTypeId"
              class="form-control form-control-sm"
              style="width: 100px"
            >
              <option v-for="(item, index) in arrFieldType" :key="index" :value="item.fieldTypeId">
                {{ item.fieldTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblHomologousFldId"
              name="lblHomologousFldId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              同源字段
            </label>
          </td>
          <td class="text-left" ColSpan="1">
            <select
              id="ddlHomologousFldId"
              v-model="homologousFldId"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trFldPrecision">
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
          <td class="text-left" ColSpan="1">
            <select
              id="ddlDataTypeId"
              v-model="dataTypeId"
              class="form-control form-control-sm"
              style="width: 50px"
            >
              <option
                v-for="(item, index) in arrDataTypeAbbr"
                :key="index"
                :value="item.dataTypeId"
              >
                {{ item.dataTypeName }}
              </option></select
            >
          </td>
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
              v-model.number="fldLength"
              class="form-control form-control-sm"
              style="width: 50px"
            />
          </td>
        </tr>
        <tr>
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
              v-model.number="fldPrecision"
              class="form-control form-control-sm"
              style="width: 50px"
            />
          </td>

          <td class="text-right">
            <label
              id="lblDefaultValue"
              name="lblDefaultValue"
              class="col-form-label text-right"
              style="width: 90px"
            >
              缺省值
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDefaultValue"
              v-model="defaultValue"
              class="form-control form-control-sm"
              style="width: 50px"
            />
          </td>
        </tr>
        <tr id="trMinValue">
          <td class="text-right">
            <label
              id="lblMaxValue"
              name="lblMaxValue"
              class="col-form-label text-right"
              style="width: 90px"
            >
              最大值
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMaxValue"
              v-model="maxValue"
              class="form-control form-control-sm"
              style="width: 50px"
            />
          </td>

          <td class="text-right">
            <label
              id="lblMinValue"
              name="lblMinValue"
              class="col-form-label text-right"
              style="width: 90px"
            >
              最小值
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMinValue"
              v-model="minValue"
              class="form-control form-control-sm"
              style="width: 50px"
            />
          </td>
        </tr>

        <tr>
          <td class="text-right">
            <label
              id="lblFldId"
              name="lblFldId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              字段Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldId"
              name="txtFldId"
              class="form-control form-control-sm"
              style="width: 50px"
            />
          </td>

          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsNeedTransCode"
                type="checkbox"
                name="chkIsNeedTransCode"
                Text="是否需要代码转换"
              /><label for="chkIsNeedTransCode">是否需要代码转换</label>
            </span>
          </td>
        </tr>
        <tr id="trFldInfo">
          <td class="text-right">
            <label
              id="lblFldInfo"
              name="lblFldInfo"
              class="col-form-label text-right"
              style="width: 90px"
            >
              字段信息
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtFldInfo"
              v-model="fldInfo"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trRelaTabInfo">
          <td class="text-right">
            <label
              id="lblRelaTabInfo"
              name="lblRelaTabInfo"
              class="col-form-label text-right"
              style="width: 90px"
            >
              相关表信息
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <div id="divRelaTabInfo" style="width: 400px" />
          </td>
        </tr>
      </table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelFieldTab" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFieldTab"
        type="primary"
        @click="btnFieldTab_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import FieldTabCRUDEx from '@/views/Table_Field/FieldTabCRUDEx';
  import FieldTab_EditEx from '@/views/Table_Field/FieldTab_EditEx';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { refDivEdit, PrjId_Session, UserId_Local } from '@/views/Table_Field/FieldTabVueShare';
  import { clsFldStateEN } from '@/ts/L0Entity/Table_Field/clsFldStateEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
  import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';
  import { FldState_GetArrFldState } from '@/ts/L3ForWApi/Table_Field/clsFldStateWApi';
  import { FieldType_GetArrFieldType } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByPrjId } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { DataTypeAbbr_GetArrDataTypeAbbr } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { FieldTab_Edit } from '@/viewsBase/Table_Field/FieldTab_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'FieldTabEdit',
    components: {
      // 组件注册
    },
    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      const route = useRoute();
      const router = useRouter();
      // const userStore = useUserStore();
      const fldName = ref('');
      const fldStateId = ref('');
      const caption = ref('');
      const isPrimaryKey = ref(true);
      const isIdentity = ref(true);
      const fieldTypeId = ref('');
      const homologousFldId = ref('');
      const dataTypeId = ref('');
      const fldLength = ref(0);
      const fldPrecision = ref(0);
      const isNull = ref(true);
      const defaultValue = ref('');
      const maxValue = ref('');
      const minValue = ref('');
      const prjId = ref('');
      const updUser = ref('');
      const fldInfo = ref('');
      const fldId = ref('');
      const updDate = ref('');

      const arrFldState = ref<clsFldStateEN[] | null>([]);
      const arrFieldType = ref<clsFieldTypeEN[] | null>([]);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        arrFldState.value = await FldState_GetArrFldState(); //编辑区域
        fldStateId.value = '0';

        arrFieldType.value = await FieldType_GetArrFieldType(); //编辑区域
        fieldTypeId.value = '0';

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByPrjId(strPrjId); //编辑区域
        homologousFldId.value = '0';

        arrDataTypeAbbr.value = await DataTypeAbbr_GetArrDataTypeAbbr(); //编辑区域
        dataTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjFieldTabEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFieldTabObj() {
        const pobjFieldTabEN = new clsFieldTabEN();
        pobjFieldTabEN.SetFldName(fldName.value); // 字段名
        pobjFieldTabEN.SetFldStateId(fldStateId.value); // 字段状态
        pobjFieldTabEN.SetCaption(caption.value); // 标题
        pobjFieldTabEN.SetIsPrimaryKey(isPrimaryKey.value); // 是否主键
        pobjFieldTabEN.SetIsIdentity(isIdentity.value); // 是否Identity
        pobjFieldTabEN.SetFieldTypeId(fieldTypeId.value); // 字段类型
        pobjFieldTabEN.SetHomologousFldId(homologousFldId.value); // 同源字段
        pobjFieldTabEN.SetDataTypeId(dataTypeId.value); // 数据类型
        pobjFieldTabEN.SetFldLength(Number(fldLength.value)); // 字段长度
        pobjFieldTabEN.SetFldPrecision(Number(fldPrecision.value)); // 精确度
        pobjFieldTabEN.SetIsNull(isNull.value); // 是否可空
        pobjFieldTabEN.SetDefaultValue(defaultValue.value); // 缺省值
        pobjFieldTabEN.SetMaxValue(maxValue.value); // 最大值
        pobjFieldTabEN.SetMinValue(minValue.value); // 最小值
        pobjFieldTabEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjFieldTabEN.SetUpdUser(UserId_Local.value); // 修改者
        pobjFieldTabEN.SetFldInfo(fldInfo.value); // 字段信息
        pobjFieldTabEN.SetFldId(fldId.value); // 字段Id
        pobjFieldTabEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjFieldTabEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFieldTabEN">表实体类对象</param>
       **/
      async function ShowDataFromFieldTabObj(pobjFieldTabEN: clsFieldTabEN) {
        fldName.value = pobjFieldTabEN.fldName; // 字段名
        fldStateId.value = pobjFieldTabEN.fldStateId; // 字段状态
        caption.value = pobjFieldTabEN.caption; // 标题
        isPrimaryKey.value = pobjFieldTabEN.isPrimaryKey; // 是否主键
        isIdentity.value = pobjFieldTabEN.isIdentity; // 是否Identity
        fieldTypeId.value = pobjFieldTabEN.fieldTypeId; // 字段类型
        homologousFldId.value = pobjFieldTabEN.homologousFldId; // 同源字段
        dataTypeId.value = pobjFieldTabEN.dataTypeId; // 数据类型
        fldLength.value = pobjFieldTabEN.fldLength; // 字段长度
        fldPrecision.value = pobjFieldTabEN.fldPrecision; // 精确度
        isNull.value = pobjFieldTabEN.isNull; // 是否可空
        defaultValue.value = pobjFieldTabEN.defaultValue; // 缺省值
        maxValue.value = pobjFieldTabEN.maxValue; // 最大值
        minValue.value = pobjFieldTabEN.minValue; // 最小值
        fldInfo.value = pobjFieldTabEN.fldInfo; // 字段信息
        fldId.value = pobjFieldTabEN.fldId; // 字段Id
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        fldName.value = '';
        fldStateId.value = '0';
        caption.value = '';
        isPrimaryKey.value = false;
        isIdentity.value = false;
        fieldTypeId.value = '0';
        homologousFldId.value = '0';
        dataTypeId.value = '0';
        fldLength.value = 0;
        fldPrecision.value = 0;
        isNull.value = false;
        defaultValue.value = '';
        maxValue.value = '';
        minValue.value = '';
        fldInfo.value = '';
        fldId.value = '';
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
          let returnKeyId = '';
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
              if (['02', '03', '06'].indexOf(clsFieldTabEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsFieldTabEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsFieldTabEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In FieldTab_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsFieldTabEN._CurrTabName, keyId.value);
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
      const strTitle = ref('工程字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<FieldTab_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('900px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: FieldTab_EditEx) => {
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

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFieldTab':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitFieldTab':
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
          case 'btnCancelFieldTab':
            return strCancelButtonText.value;
          case 'btnSubmitFieldTab':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      onMounted(() => {
        //this.myonload();
      });

      function EditPrjTab(strTabId: string) {
        hideDialog();

        clsPrivateSessionStorage.tabId_Main = strTabId;
        if (route == null) {
          router.push({ name: 'account-editTabRelaInfo' });

          return;
        }
        console.log('route:', route);
        const params = route.params.tabId ? { tabId: route.params.tabId } : { tabId: strTabId };
        console.log('params(in account-editTabRelaInfo):', params);
        if (route.name === 'account-editTabRelaInfo') {
          // 刷新页面
          router.go(0);
        } else {
          router.push({ name: 'account-editTabRelaInfo', params });
        }
        // alert(strTabId);
      }
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
        GetEditDataFieldTabObj,
        ShowDataFromFieldTabObj,
        Clear,
        btnSubmit_Click,
        fldName,
        fldStateId,
        caption,
        isPrimaryKey,
        isIdentity,
        fieldTypeId,
        homologousFldId,
        dataTypeId,
        fldLength,
        fldPrecision,
        isNull,
        defaultValue,
        maxValue,
        minValue,
        prjId,
        updUser,
        fldInfo,
        fldId,
        updDate,
        arrFldState,
        arrFieldType,
        arrvFieldTab_Sim,
        arrDataTypeAbbr,

        SetButtonText,
        GetButtonText,
        EditPrjTab,
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
        //FieldTab_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnFieldTab_Edit_Click(strCommandName: string, strKeyId: string) {
        FieldTab_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_FieldTab(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new FieldTab_EditEx('', new FieldTabCRUDEx());
        objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped></style>
