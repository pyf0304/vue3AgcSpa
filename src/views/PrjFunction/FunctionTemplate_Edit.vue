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
          <tr id="trFunctionTemplateENName">
            <td class="text-right">
              <label
                id="lblFunctionTemplateName"
                name="lblFunctionTemplateName"
                class="col-form-label text-right"
                style="width: 90px"
                >函数模板名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFunctionTemplateName"
                v-model="functionTemplateName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFunctionTemplateENName"
                name="lblFunctionTemplateENName"
                class="col-form-label text-right"
                style="width: 90px"
                >函数模板英文名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFunctionTemplateENName"
                v-model="functionTemplateENName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trCreateUserId">
            <td class="text-right">
              <label
                id="lblProgLangTypeId"
                name="lblProgLangTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >编程语言类型Id
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
                id="lblCreateUserId"
                name="lblCreateUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >建立用户Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCreateUserId"
                v-model="createUserId"
                class="form-control form-control-sm"
                style="width: 150px"
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
                style="width: 150px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFunctionTemplate" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFunctionTemplate"
        type="primary"
        @click="btnFunctionTemplate_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import FunctionTemplate_EditEx from '@/views/PrjFunction/FunctionTemplate_EditEx';
  import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { refDivEdit } from '@/views/PrjFunction/FunctionTemplateVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { FunctionTemplate_Edit } from '@/viewsBase/PrjFunction/FunctionTemplate_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'FunctionTemplateEdit',

    components: {
      // 组件注册
    },

    setup() {
      const userStore = useUserStore();
      const strTitle = ref('函数模板编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<FunctionTemplate_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const functionTemplateId = ref('');
      const functionTemplateName = ref('');
      const functionTemplateENName = ref('');
      const progLangTypeId = ref('');
      const createUserId = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //编辑区域
        progLangTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjFunctionTemplateEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFunctionTemplateObj() {
        const pobjFunctionTemplateEN = new clsFunctionTemplateEN();
        pobjFunctionTemplateEN.SetFunctionTemplateId(functionTemplateId.value); // 函数模板Id
        pobjFunctionTemplateEN.SetFunctionTemplateName(functionTemplateName.value); // 函数模板名
        pobjFunctionTemplateEN.SetFunctionTemplateENName(functionTemplateENName.value); // 函数模板英文名
        pobjFunctionTemplateEN.SetProgLangTypeId(Is0EqEmpty(progLangTypeId.value)); // 编程语言类型Id
        pobjFunctionTemplateEN.SetCreateUserId(createUserId.value); // 建立用户Id
        pobjFunctionTemplateEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjFunctionTemplateEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjFunctionTemplateEN.SetMemo(memo.value); // 说明
        return pobjFunctionTemplateEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjFunctionTemplateEN">表实体类对象</param>
       **/
      async function ShowDataFromFunctionTemplateObj(
        pobjFunctionTemplateEN: clsFunctionTemplateEN,
      ) {
        functionTemplateId.value = pobjFunctionTemplateEN.functionTemplateId; // 函数模板Id
        functionTemplateName.value = pobjFunctionTemplateEN.functionTemplateName; // 函数模板名
        functionTemplateENName.value = pobjFunctionTemplateEN.functionTemplateENName; // 函数模板英文名
        progLangTypeId.value = IsNullOrEmptyEq0(pobjFunctionTemplateEN.progLangTypeId); // 编程语言类型Id
        createUserId.value = pobjFunctionTemplateEN.createUserId; // 建立用户Id
        memo.value = pobjFunctionTemplateEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        functionTemplateId.value = '';
        functionTemplateName.value = '';
        functionTemplateENName.value = '';
        progLangTypeId.value = '0';
        createUserId.value = '';
        memo.value = '';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_btnSubmit_Click)
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
              if (['02', '03', '06'].indexOf(clsFunctionTemplateEN._PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (FunctionTemplate_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFunctionTemplateEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (FunctionTemplate_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFunctionTemplateEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In FunctionTemplate_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (FunctionTemplate_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsFunctionTemplateEN._CurrTabName,
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

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: FunctionTemplate_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };

      /**
       * 处理保存逻辑
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_HandleSave)
       **/
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };

      /**
       * 隐藏对话框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_HideDialog)
       **/
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
        GetEditDataFunctionTemplateObj,
        ShowDataFromFunctionTemplateObj,
        Clear,
        btnSubmit_Click,
        functionTemplateId,
        functionTemplateName,
        functionTemplateENName,
        progLangTypeId,
        createUserId,
        updDate,
        updUser,
        memo,
        arrProgLangType,
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
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Methods_btnEdit_Click)
       **/
      btnFunctionTemplate_Edit_Click(strCommandName: string, strKeyId: string) {
        FunctionTemplate_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
