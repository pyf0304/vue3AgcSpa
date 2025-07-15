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
          <tr id="trConstId">
            <td class="text-right">
              <label
                id="lblConstId"
                name="lblConstId"
                class="col-form-label text-right"
                style="width: 90px"
                >常量Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtConstId"
                v-model="constId"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trConstName">
            <td class="text-right">
              <label
                id="lblConstName"
                name="lblConstName"
                class="col-form-label text-right"
                style="width: 90px"
                >常量名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtConstName"
                v-model="constName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trConstExpression">
            <td class="text-right">
              <label
                id="lblConstExpression"
                name="lblConstExpression"
                class="col-form-label text-right"
                style="width: 90px"
                >常量表达式
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtConstExpression"
                v-model="constExpression"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trDataTypeId">
            <td class="text-right">
              <label
                id="lblDataTypeId"
                name="lblDataTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >数据类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDataTypeId"
                v-model="dataTypeId"
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
          <tr id="trFilePath">
            <td class="text-right">
              <label
                id="lblFilePath"
                name="lblFilePath"
                class="col-form-label text-right"
                style="width: 90px"
                >文件路径
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFilePath"
                v-model="filePath"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trInitValue">
            <td class="text-right">
              <label
                id="lblInitValue"
                name="lblInitValue"
                class="col-form-label text-right"
                style="width: 90px"
                >初始值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtInitValue"
                v-model="initValue"
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
            <td class="text-left"> </td>
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
      <a-button id="btnCancelGCDefaConstants" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitGCDefaConstants"
        type="primary"
        @click="btnGCDefaConstants_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import GCDefaConstants_EditEx from '@/views/GeneCode/GCDefaConstants_EditEx';
  import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { DataTypeAbbr_GetArrDataTypeAbbr } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  import { refDivEdit } from '@/views/GeneCode/GCDefaConstantsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { GCDefaConstants_Edit } from '@/viewsBase/GeneCode/GCDefaConstants_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'GCDefaConstantsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const constId = ref('');
      const constName = ref('');
      const constExpression = ref('');
      const dataTypeId = ref('');
      const filePath = ref('');
      const initValue = ref('');
      const clsName = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrDataTypeAbbr.value = await DataTypeAbbr_GetArrDataTypeAbbr(); //编辑区域
        dataTypeId.value = '0';

        clsName.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjGCDefaConstantsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataGCDefaConstantsObj() {
        const pobjGCDefaConstantsEN = new clsGCDefaConstantsEN();
        pobjGCDefaConstantsEN.SetConstId(constId.value); // 常量Id
        pobjGCDefaConstantsEN.SetConstName(constName.value); // 常量名
        pobjGCDefaConstantsEN.SetConstExpression(constExpression.value); // 常量表达式
        pobjGCDefaConstantsEN.SetDataTypeId(Is0EqEmpty(dataTypeId.value)); // 数据类型Id
        pobjGCDefaConstantsEN.SetFilePath(filePath.value); // 文件路径
        pobjGCDefaConstantsEN.SetInitValue(initValue.value); // 初始值
        pobjGCDefaConstantsEN.SetClsName(Is0EqEmpty(clsName.value)); // 类名
        pobjGCDefaConstantsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjGCDefaConstantsEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjGCDefaConstantsEN.SetMemo(memo.value); // 说明
        return pobjGCDefaConstantsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjGCDefaConstantsEN">表实体类对象</param>
       **/
      async function ShowDataFromGCDefaConstantsObj(pobjGCDefaConstantsEN: clsGCDefaConstantsEN) {
        constId.value = pobjGCDefaConstantsEN.constId; // 常量Id
        constName.value = pobjGCDefaConstantsEN.constName; // 常量名
        constExpression.value = pobjGCDefaConstantsEN.constExpression; // 常量表达式
        dataTypeId.value = IsNullOrEmptyEq0(pobjGCDefaConstantsEN.dataTypeId); // 数据类型Id
        filePath.value = pobjGCDefaConstantsEN.filePath; // 文件路径
        initValue.value = pobjGCDefaConstantsEN.initValue; // 初始值
        clsName.value = IsNullOrEmptyEq0(pobjGCDefaConstantsEN.clsName); // 类名
        memo.value = pobjGCDefaConstantsEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        constId.value = '';
        constName.value = '';
        constExpression.value = '';
        dataTypeId.value = '0';
        filePath.value = '';
        initValue.value = '';
        clsName.value = '0';
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
              if (['02', '03', '06'].indexOf(clsGCDefaConstantsEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (GCDefaConstants_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsGCDefaConstantsEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (GCDefaConstants_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsGCDefaConstantsEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In GCDefaConstants_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (GCDefaConstants_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsGCDefaConstantsEN._CurrTabName,
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
      const strTitle = ref('GC常量编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<GCDefaConstants_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: GCDefaConstants_EditEx) => {
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
        GetEditDataGCDefaConstantsObj,
        ShowDataFromGCDefaConstantsObj,
        Clear,
        btnSubmit_Click,
        constId,
        constName,
        constExpression,
        dataTypeId,
        filePath,
        initValue,
        clsName,
        updDate,
        updUser,
        memo,
        arrDataTypeAbbr,
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
      btnGCDefaConstants_Edit_Click(strCommandName: string, strKeyId: string) {
        GCDefaConstants_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
