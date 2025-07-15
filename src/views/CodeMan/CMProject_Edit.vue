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
          <tr id="trCmPrjName">
            <td class="text-right">
              <label
                id="lblCmPrjName"
                name="lblCmPrjName"
                class="col-form-label text-right"
                style="width: 90px"
                >CM工程名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCmPrjName"
                v-model="cmPrjName"
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
                >应用类型
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
          <tr id="trVueDesignSysId">
            <td class="text-right">
              <label
                id="lblVueDesignSysId"
                name="lblVueDesignSysId"
                class="col-form-label text-right"
                style="width: 90px"
                >Vue控件设计体系
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlVueDesignSysId"
                v-model="vueDesignSysId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrVueCtrlDesignSys"
                  :key="index"
                  :value="item.vueDesignSysId"
                >
                  {{ item.vueDesignSysName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFunctionTemplateId">
            <td class="text-right">
              <label
                id="lblFunctionTemplateId"
                name="lblFunctionTemplateId"
                class="col-form-label text-right"
                style="width: 90px"
                >函数模板
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFunctionTemplateId"
                v-model="functionTemplateId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrFunctionTemplate"
                  :key="index"
                  :value="item.functionTemplateId"
                >
                  {{ item.functionTemplateName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsFstLcase">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 400px">
                <input
                  id="chkIsFstLcase"
                  v-model="isFstLcase"
                  type="checkbox"
                  Text="是否首字母小写"
                /><label for="chkIsFstLcase">是否首字母小写</label></span
              >
            </td>
          </tr>
          <tr id="trProjectFileName">
            <td class="text-right">
              <label
                id="lblProjectFileName"
                name="lblProjectFileName"
                class="col-form-label text-right"
                style="width: 90px"
                >工程文件名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtProjectFileName"
                v-model="projectFileName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trUseStateId">
            <td class="text-right">
              <label
                id="lblUseStateId"
                name="lblUseStateId"
                class="col-form-label text-right"
                style="width: 90px"
                >使用状态
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUseStateId"
                v-model="useStateId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrUseState" :key="index" :value="item.useStateId">
                  {{ item.useStateName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsRefresh4RelaView">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 400px">
                <input
                  id="chkIsRefresh4RelaView"
                  v-model="isRefresh4RelaView"
                  type="checkbox"
                  Text="是否刷新相关视图"
                /><label for="chkIsRefresh4RelaView">是否刷新相关视图</label></span
              >
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
      <a-button id="btnCancelCMProject" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitCMProject"
        type="primary"
        @click="btnCMProject_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import CMProject_EditEx from '@/views/CodeMan/CMProject_EditEx';
  import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { clsVueCtrlDesignSysEN } from '@/ts/L0Entity/SysPara/clsVueCtrlDesignSysEN';
  import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { ApplicationType_GetArrApplicationTypeByIsVisible } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
  import { VueCtrlDesignSys_GetArrVueCtrlDesignSys } from '@/ts/L3ForWApi/SysPara/clsVueCtrlDesignSysWApi';
  import { FunctionTemplate_GetArrFunctionTemplate } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
  import { UseState_GetArrUseState } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
  import { refDivEdit, PrjId_Session } from '@/views/CodeMan/CMProjectVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { CMProject_Edit } from '@/viewsBase/CodeMan/CMProject_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'CMProjectEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const cmPrjId = ref('');
      const cmPrjName = ref('');
      const prjId = ref('');
      const applicationTypeId = ref(0);
      const vueDesignSysId = ref('');
      const functionTemplateId = ref('');
      const isFstLcase = ref(true);
      const projectFileName = ref('');
      const useStateId = ref('');
      const isRefresh4RelaView = ref(true);
      const memo = ref('');
      const updDate = ref('');
      const updUserId = ref('');

      const arrApplicationType = ref<clsApplicationTypeEN[] | null>([]);
      const arrVueCtrlDesignSys = ref<clsVueCtrlDesignSysEN[] | null>([]);
      const arrFunctionTemplate = ref<clsFunctionTemplateEN[] | null>([]);
      const arrUseState = ref<clsUseStateEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrApplicationType.value = await ApplicationType_GetArrApplicationTypeByIsVisible(); //编辑区域
        applicationTypeId.value = 0;

        arrVueCtrlDesignSys.value = await VueCtrlDesignSys_GetArrVueCtrlDesignSys(); //编辑区域
        vueDesignSysId.value = '0';

        arrFunctionTemplate.value = await FunctionTemplate_GetArrFunctionTemplate(); //编辑区域
        functionTemplateId.value = '0';

        arrUseState.value = await UseState_GetArrUseState(); //编辑区域
        useStateId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjCMProjectEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataCMProjectObj() {
        const pobjCMProjectEN = new clsCMProjectEN();
        pobjCMProjectEN.SetCmPrjId(cmPrjId.value); // CM工程Id
        pobjCMProjectEN.SetCmPrjName(cmPrjName.value); // CM工程名
        pobjCMProjectEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjCMProjectEN.SetApplicationTypeId(applicationTypeId.value); // 应用类型
        pobjCMProjectEN.SetVueDesignSysId(Is0EqEmpty(vueDesignSysId.value)); // Vue控件设计体系
        pobjCMProjectEN.SetFunctionTemplateId(Is0EqEmpty(functionTemplateId.value)); // 函数模板
        pobjCMProjectEN.SetIsFstLcase(isFstLcase.value); // 是否首字母小写
        pobjCMProjectEN.SetProjectFileName(projectFileName.value); // 工程文件名
        pobjCMProjectEN.SetUseStateId(Is0EqEmpty(useStateId.value)); // 使用状态
        pobjCMProjectEN.SetIsRefresh4RelaView(isRefresh4RelaView.value); // 是否刷新相关视图
        pobjCMProjectEN.SetMemo(memo.value); // 说明
        pobjCMProjectEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjCMProjectEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjCMProjectEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjCMProjectEN">表实体类对象</param>
       **/
      async function ShowDataFromCMProjectObj(pobjCMProjectEN: clsCMProjectEN) {
        cmPrjId.value = pobjCMProjectEN.cmPrjId; // CM工程Id
        cmPrjName.value = pobjCMProjectEN.cmPrjName; // CM工程名
        applicationTypeId.value = pobjCMProjectEN.applicationTypeId; // 应用类型
        vueDesignSysId.value = IsNullOrEmptyEq0(pobjCMProjectEN.vueDesignSysId); // Vue控件设计体系
        functionTemplateId.value = IsNullOrEmptyEq0(pobjCMProjectEN.functionTemplateId); // 函数模板
        isFstLcase.value = pobjCMProjectEN.isFstLcase; // 是否首字母小写
        projectFileName.value = pobjCMProjectEN.projectFileName; // 工程文件名
        useStateId.value = IsNullOrEmptyEq0(pobjCMProjectEN.useStateId); // 使用状态
        isRefresh4RelaView.value = pobjCMProjectEN.isRefresh4RelaView; // 是否刷新相关视图
        memo.value = pobjCMProjectEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        cmPrjId.value = '';
        cmPrjName.value = '';
        applicationTypeId.value = 0;
        vueDesignSysId.value = '0';
        functionTemplateId.value = '0';
        isFstLcase.value = false;
        projectFileName.value = '';
        useStateId.value = '0';
        isRefresh4RelaView.value = false;
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
              if (['02', '03', '06'].indexOf(clsCMProjectEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (CMProject_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsCMProjectEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (CMProject_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsCMProjectEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In CMProject_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (CMProject_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsCMProjectEN._CurrTabName,
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
      const strTitle = ref('CM项目编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<CMProject_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: CMProject_EditEx) => {
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
        GetEditDataCMProjectObj,
        ShowDataFromCMProjectObj,
        Clear,
        btnSubmit_Click,
        cmPrjId,
        cmPrjName,
        prjId,
        applicationTypeId,
        vueDesignSysId,
        functionTemplateId,
        isFstLcase,
        projectFileName,
        useStateId,
        isRefresh4RelaView,
        memo,
        updDate,
        updUserId,
        arrApplicationType,
        arrVueCtrlDesignSys,
        arrFunctionTemplate,
        arrUseState,
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
      btnCMProject_Edit_Click(strCommandName: string, strKeyId: string) {
        CMProject_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
