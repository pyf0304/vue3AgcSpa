<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <a-button type="primary" @click="dialogVisible = false"
          ><font-awesome-icon icon="times"
        /></a-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trIsTemplate">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsTemplate"
                  v-model="isTemplate"
                  type="checkbox"
                  Text="是否模板"
                /><label for="chkIsTemplate">是否模板</label></span
              >
            </td>
          </tr>
          <tr id="trFuncName">
            <td class="text-right">
              <label
                id="lblFuncName"
                name="lblFuncName"
                class="col-form-label text-right"
                style="width: 90px"
                >函数名
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtFuncName"
                v-model="funcName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trFuncId4Code">
            <td class="text-right">
              <label
                id="lblFuncId4Code"
                name="lblFuncId4Code"
                class="col-form-label text-right"
                style="width: 90px"
                >函数Id4Code
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <select
                id="ddlFuncId4Code"
                v-model="funcId4Code"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrFunction4Code"
                  :key="index"
                  :value="item.funcId4Code"
                >
                  {{ item.funcName4Code }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFeatureId">
            <td class="text-right">
              <label
                id="lblFeatureId"
                name="lblFeatureId"
                class="col-form-label text-right"
                style="width: 90px"
                >功能Id
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <select
                id="ddlFeatureId"
                v-model="featureId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrPrjFeature" :key="index" :value="item.featureId">
                  {{ item.featureName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFuncCodeTypeId">
            <td class="text-right">
              <label
                id="lblProgLangTypeId"
                name="lblProgLangTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >语言
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlProgLangTypeId"
                v-model="progLangTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrProgLangType"
                  :key="index"
                  :value="item.progLangTypeId"
                >
                  {{ item.progLangTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblFuncCodeTypeId"
                name="lblFuncCodeTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >代码类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncCodeTypeId"
                v-model="funcCodeTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrCodeType" :key="index" :value="item.codeTypeId">
                  {{ item.codeTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trOrderNum">
            <td class="text-right">
              <label
                id="lblSqlDsTypeId"
                name="lblSqlDsTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >数据源
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSqlDsTypeId"
                v-model="sqlDsTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrSQLDSType"
                  :key="index"
                  :value="item.sqlDsTypeId"
                >
                  {{ item.sqlDsTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblOrderNum"
                name="lblOrderNum"
                class="col-form-label text-right"
                style="width: 90px"
                >序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOrderNum"
                v-model.number="orderNum"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trFuncTypeId">
            <td class="text-right">
              <label
                id="lblReturnTypeId"
                name="lblReturnTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >返回类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlReturnTypeId"
                v-model="returnTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
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
                id="lblFuncTypeId"
                name="lblFuncTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >函数类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncTypeId"
                v-model="funcTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrFunctionType"
                  :key="index"
                  :value="item.funcTypeId"
                >
                  {{ item.funcTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFuncCode">
            <td class="text-right">
              <label
                id="lblFuncCode"
                name="lblFuncCode"
                class="col-form-label text-right"
                style="width: 90px"
                >函数代码
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <textarea
                id="txtFuncCode"
                name="txtFuncCode"
                class="form-control form-control-sm"
                rows="5"
                cols="50"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trCodeText">
            <td class="text-right">
              <label
                id="lblCodeText"
                name="lblCodeText"
                class="col-form-label text-right"
                style="width: 90px"
                >代码文本
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <textarea
                id="txtCodeText"
                name="txtCodeText"
                class="form-control form-control-sm"
                rows="5"
                cols="50"
                style="width: 400px"
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
              <textarea
                id="txtMemo"
                name="txtMemo"
                class="form-control form-control-sm"
                rows="5"
                cols="50"
                style="width: 400px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFunction4GeneCode" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFunction4GeneCode"
        type="primary"
        @click="btnFunction4GeneCode_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { FeatureTypeId_Static, ProgLangTypeId_Static } from './Function4GeneCodeVueShare';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import Function4GeneCode_EditEx from '@/views/PrjFunction/Function4GeneCode_EditEx';
  import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
  import { clsFunction4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeEN';
  import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
  import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
  import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
  import { Function4Code_GetArrFunction4CodeByFuncPurposeId } from '@/ts/L3ForWApi/PrjFunction/clsFunction4CodeWApi';
  import { PrjFeature_GetArrPrjFeatureByFeatureTypeId } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { CodeType_GetArrCodeTypeByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsCodeTypeWApi';
  import { SQLDSType_GetArrSQLDSType } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
  import { DataTypeAbbr_GetArrDataTypeAbbr } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  import { FunctionType_GetArrFunctionType } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTypeWApi';

  import {
    refDivEdit,
    PrjId_Session,
    UserId_Local,
    FuncPurposeId_Static,
  } from '@/views/PrjFunction/Function4GeneCodeVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { Function4GeneCode_Edit } from '@/viewsBase/PrjFunction/Function4GeneCode_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'Function4GeneCodeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const funcId4GC = ref('');
      const isTemplate = ref(true);
      const funcName = ref('');
      const funcId4Code = ref('');
      const featureId = ref('');
      const progLangTypeId = ref('');
      const funcCodeTypeId = ref('');
      const sqlDsTypeId = ref('');
      const orderNum = ref(0);
      const prjId = ref('');
      const returnTypeId = ref('');
      const funcTypeId = ref('');
      const funcCode = ref('');
      const userId = ref('');
      const codeText = ref('');
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrFunction4Code = ref<clsFunction4CodeEN[] | null>([]);
      const arrPrjFeature = ref<clsPrjFeatureEN[] | null>([]);
      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);
      const arrCodeType = ref<clsCodeTypeEN[] | null>([]);
      const arrSQLDSType = ref<clsSQLDSTypeEN[] | null>([]);
      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[] | null>([]);
      const arrFunctionType = ref<clsFunctionTypeEN[] | null>([]);
      const arrUsers = ref<clsUsersEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strFuncPurposeId_Static = FuncPurposeId_Static.value; //静态变量;//静态变量
        const strFeatureTypeId_Static = FeatureTypeId_Static.value; //静态变量;//静态变量
        const strProgLangTypeId_Static = ProgLangTypeId_Static.value; //静态变量;//静态变量

        arrFunction4Code.value = await Function4Code_GetArrFunction4CodeByFuncPurposeId(
          strFuncPurposeId_Static,
        ); //编辑区域
        funcId4Code.value = '0';

        arrPrjFeature.value = await PrjFeature_GetArrPrjFeatureByFeatureTypeId(
          strFeatureTypeId_Static,
        ); //编辑区域
        featureId.value = '0';

        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //编辑区域
        progLangTypeId.value = '0';

        arrCodeType.value = await CodeType_GetArrCodeTypeByProgLangTypeId(strProgLangTypeId_Static); //编辑区域
        funcCodeTypeId.value = '0';

        arrSQLDSType.value = await SQLDSType_GetArrSQLDSType(); //编辑区域
        sqlDsTypeId.value = '0';

        arrDataTypeAbbr.value = await DataTypeAbbr_GetArrDataTypeAbbr(); //编辑区域
        returnTypeId.value = '0';

        arrFunctionType.value = await FunctionType_GetArrFunctionType(); //编辑区域
        funcTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjFunction4GeneCodeEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFunction4GeneCodeObj() {
        const pobjFunction4GeneCodeEN = new clsFunction4GeneCodeEN();
        pobjFunction4GeneCodeEN.SetFuncId4GC(funcId4GC.value); // 函数ID
        pobjFunction4GeneCodeEN.SetIsTemplate(isTemplate.value); // 是否模板
        pobjFunction4GeneCodeEN.SetFuncName(funcName.value); // 函数名
        pobjFunction4GeneCodeEN.SetFuncId4Code(Is0EqEmpty(funcId4Code.value)); // 函数Id4Code
        pobjFunction4GeneCodeEN.SetFeatureId(Is0EqEmpty(featureId.value)); // 功能Id
        pobjFunction4GeneCodeEN.SetProgLangTypeId(Is0EqEmpty(progLangTypeId.value)); // 语言
        pobjFunction4GeneCodeEN.SetFuncCodeTypeId(Is0EqEmpty(funcCodeTypeId.value)); // 代码类型
        pobjFunction4GeneCodeEN.SetSqlDsTypeId(Is0EqEmpty(sqlDsTypeId.value)); // 数据源
        pobjFunction4GeneCodeEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjFunction4GeneCodeEN.SetPrjId(PrjId_Session.value); // 工程Id
        pobjFunction4GeneCodeEN.SetReturnTypeId(Is0EqEmpty(returnTypeId.value)); // 返回类型
        pobjFunction4GeneCodeEN.SetFuncTypeId(Is0EqEmpty(funcTypeId.value)); // 函数类型
        pobjFunction4GeneCodeEN.SetFuncCode(funcCode.value); // 函数代码
        pobjFunction4GeneCodeEN.SetUserId(UserId_Local.value); // 用户Id
        pobjFunction4GeneCodeEN.SetCodeText(codeText.value); // 代码文本
        pobjFunction4GeneCodeEN.SetMemo(memo.value); // 说明
        pobjFunction4GeneCodeEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjFunction4GeneCodeEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjFunction4GeneCodeEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFunction4GeneCodeEN">表实体类对象</param>
       **/
      async function ShowDataFromFunction4GeneCodeObj(
        pobjFunction4GeneCodeEN: clsFunction4GeneCodeEN,
      ) {
        funcId4GC.value = pobjFunction4GeneCodeEN.funcId4GC; // 函数ID
        isTemplate.value = pobjFunction4GeneCodeEN.isTemplate; // 是否模板
        funcName.value = pobjFunction4GeneCodeEN.funcName; // 函数名
        funcId4Code.value = IsNullOrEmptyEq0(pobjFunction4GeneCodeEN.funcId4Code); // 函数Id4Code
        featureId.value = IsNullOrEmptyEq0(pobjFunction4GeneCodeEN.featureId); // 功能Id
        progLangTypeId.value = IsNullOrEmptyEq0(pobjFunction4GeneCodeEN.progLangTypeId); // 语言
        funcCodeTypeId.value = IsNullOrEmptyEq0(pobjFunction4GeneCodeEN.funcCodeTypeId); // 代码类型
        sqlDsTypeId.value = IsNullOrEmptyEq0(pobjFunction4GeneCodeEN.sqlDsTypeId); // 数据源
        orderNum.value = pobjFunction4GeneCodeEN.orderNum; // 序号
        returnTypeId.value = IsNullOrEmptyEq0(pobjFunction4GeneCodeEN.returnTypeId); // 返回类型
        funcTypeId.value = IsNullOrEmptyEq0(pobjFunction4GeneCodeEN.funcTypeId); // 函数类型
        funcCode.value = pobjFunction4GeneCodeEN.funcCode; // 函数代码
        codeText.value = pobjFunction4GeneCodeEN.codeText; // 代码文本
        memo.value = pobjFunction4GeneCodeEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        funcId4GC.value = '';
        isTemplate.value = false;
        funcName.value = '';
        funcId4Code.value = '0';
        featureId.value = '0';
        progLangTypeId.value = '0';
        funcCodeTypeId.value = '0';
        sqlDsTypeId.value = '0';
        orderNum.value = 0;
        returnTypeId.value = '0';
        funcTypeId.value = '0';
        funcCode.value = '';
        codeText.value = '';
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
              if (['02', '03', '06'].indexOf(clsFunction4GeneCodeEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (Function4GeneCode_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsFunction4GeneCodeEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (Function4GeneCode_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsFunction4GeneCodeEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In Function4GeneCode_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (Function4GeneCode_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsFunction4GeneCodeEN._CurrTabName,
                    keyId.value,
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
      const strTitle = ref('函数4GeneCode编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<Function4GeneCode_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: Function4GeneCode_EditEx) => {
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
        GetEditDataFunction4GeneCodeObj,
        ShowDataFromFunction4GeneCodeObj,
        Clear,
        btnSubmit_Click,
        funcId4GC,
        isTemplate,
        funcName,
        funcId4Code,
        featureId,
        progLangTypeId,
        funcCodeTypeId,
        sqlDsTypeId,
        orderNum,
        prjId,
        returnTypeId,
        funcTypeId,
        funcCode,
        userId,
        codeText,
        memo,
        updDate,
        updUser,
        arrFunction4Code,
        arrPrjFeature,
        arrProgLangType,
        arrCodeType,
        arrSQLDSType,
        arrDataTypeAbbr,
        arrFunctionType,
        arrUsers,
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
      btnFunction4GeneCode_Edit_Click(strCommandName: string, strKeyId: string) {
        Function4GeneCode_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
