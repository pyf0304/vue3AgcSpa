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
          <tr id="trFuncName4Code">
            <td class="text-right">
              <label
                id="lblFuncName4Code"
                name="lblFuncName4Code"
                class="col-form-label text-right"
                style="width: 90px"
                >函数名4Code
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFuncName4Code"
                v-model="funcName4Code"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trFuncCHName4Code">
            <td class="text-right">
              <label
                id="lblFuncCHName4Code"
                name="lblFuncCHName4Code"
                class="col-form-label text-right"
                style="width: 90px"
                >函数中文名4Code
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFuncCHName4Code"
                v-model="funcCHName4Code"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trApplicationTypeId">
            <td class="text-right">
              <label
                id="lblApplicationTypeId"
                name="lblApplicationTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >应用
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlApplicationTypeId"
                v-model.number="applicationTypeId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrApplicationType"
                  :key="index"
                  :value="item.applicationTypeId"
                >
                  {{ item.applicationTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trReturnTypeId">
            <td class="text-right">
              <label
                id="lblReturnTypeId"
                name="lblReturnTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >返回类型ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlReturnTypeId"
                v-model="returnTypeId"
                class="form-control form-control-sm"
                style="width: 400px"
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
          </tr>
          <tr id="trFuncTypeId">
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
                style="width: 400px"
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
          <tr id="trTabName">
            <td class="text-right">
              <label
                id="lblTabName"
                name="lblTabName"
                class="col-form-label text-right"
                style="width: 90px"
                >表名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTabName"
                v-model="tabName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trClsName">
            <td class="text-right">
              <label
                id="lblClsName"
                name="lblClsName"
                class="col-form-label text-right"
                style="width: 90px"
                >类名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtClsName"
                v-model="clsName"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
          </tr>
          <tr id="trOrderNum">
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
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFunction4Code" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFunction4Code"
        type="primary"
        @click="btnFunction4Code_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import Function4Code_EditEx from '@/views/PrjFunction/Function4Code_EditEx';
  import { clsFunction4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeEN';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
  import { ApplicationType_GetArrApplicationTypeByIsVisible } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
  import { DataTypeAbbr_GetArrDataTypeAbbr } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  import { FunctionType_GetArrFunctionType } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTypeWApi';
  import { refDivEdit } from '@/views/PrjFunction/Function4CodeVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { Function4Code_Edit } from '@/viewsBase/PrjFunction/Function4Code_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'Function4CodeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const funcId4Code = ref('');
      const funcName4Code = ref('');
      const funcCHName4Code = ref('');
      const applicationTypeId = ref(0);
      const returnTypeId = ref('');
      const funcTypeId = ref('');
      const tabName = ref('');
      const clsName = ref('');
      const orderNum = ref(0);
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrApplicationType = ref<clsApplicationTypeEN[] | null>([]);
      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[] | null>([]);
      const arrFunctionType = ref<clsFunctionTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrApplicationType.value = await ApplicationType_GetArrApplicationTypeByIsVisible(); //编辑区域
        applicationTypeId.value = 0;

        arrDataTypeAbbr.value = await DataTypeAbbr_GetArrDataTypeAbbr(); //编辑区域
        returnTypeId.value = '0';

        arrFunctionType.value = await FunctionType_GetArrFunctionType(); //编辑区域
        funcTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjFunction4CodeEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFunction4CodeObj() {
        const pobjFunction4CodeEN = new clsFunction4CodeEN();
        pobjFunction4CodeEN.SetFuncId4Code(funcId4Code.value); // 函数Id4Code
        pobjFunction4CodeEN.SetFuncName4Code(funcName4Code.value); // 函数名4Code
        pobjFunction4CodeEN.SetFuncCHName4Code(funcCHName4Code.value); // 函数中文名4Code
        pobjFunction4CodeEN.SetApplicationTypeId(applicationTypeId.value); // 应用
        pobjFunction4CodeEN.SetReturnTypeId(returnTypeId.value); // 返回类型ID
        pobjFunction4CodeEN.SetFuncTypeId(funcTypeId.value); // 函数类型
        pobjFunction4CodeEN.SetTabName(tabName.value); // 表名
        pobjFunction4CodeEN.SetClsName(clsName.value); // 类名
        pobjFunction4CodeEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjFunction4CodeEN.SetMemo(memo.value); // 说明
        pobjFunction4CodeEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjFunction4CodeEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjFunction4CodeEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFunction4CodeEN">表实体类对象</param>
       **/
      async function ShowDataFromFunction4CodeObj(pobjFunction4CodeEN: clsFunction4CodeEN) {
        funcId4Code.value = pobjFunction4CodeEN.funcId4Code; // 函数Id4Code
        funcName4Code.value = pobjFunction4CodeEN.funcName4Code; // 函数名4Code
        funcCHName4Code.value = pobjFunction4CodeEN.funcCHName4Code; // 函数中文名4Code
        applicationTypeId.value = pobjFunction4CodeEN.applicationTypeId; // 应用
        returnTypeId.value = pobjFunction4CodeEN.returnTypeId; // 返回类型ID
        funcTypeId.value = pobjFunction4CodeEN.funcTypeId; // 函数类型
        tabName.value = pobjFunction4CodeEN.tabName; // 表名
        clsName.value = pobjFunction4CodeEN.clsName; // 类名
        orderNum.value = pobjFunction4CodeEN.orderNum; // 序号
        memo.value = pobjFunction4CodeEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        funcId4Code.value = '';
        funcName4Code.value = '';
        funcCHName4Code.value = '';
        applicationTypeId.value = 0;
        returnTypeId.value = '0';
        funcTypeId.value = '0';
        tabName.value = '';
        clsName.value = '';
        orderNum.value = 0;
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
              if (['02', '03', '06'].indexOf(clsFunction4CodeEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (Function4Code_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsFunction4CodeEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (Function4Code_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsFunction4CodeEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In Function4Code_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (Function4Code_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsFunction4CodeEN._CurrTabName, keyId.value);
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
      const strTitle = ref('函数4Code编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<Function4Code_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: Function4Code_EditEx) => {
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
        GetEditDataFunction4CodeObj,
        ShowDataFromFunction4CodeObj,
        Clear,
        btnSubmit_Click,
        funcId4Code,
        funcName4Code,
        funcCHName4Code,
        applicationTypeId,
        returnTypeId,
        funcTypeId,
        tabName,
        clsName,
        orderNum,
        memo,
        updDate,
        updUser,
        arrApplicationType,
        arrDataTypeAbbr,
        arrFunctionType,
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
      btnFunction4Code_Edit_Click(strCommandName: string, strKeyId: string) {
        Function4Code_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
