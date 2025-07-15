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
          <tr id="trFuncModuleName">
            <td class="text-right">
              <label
                id="lblFuncModuleName"
                name="lblFuncModuleName"
                class="col-form-label text-right"
                style="width: 90px"
                >功能模块名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFuncModuleName"
                v-model="funcModuleName"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trFuncModuleEnName">
            <td class="text-right">
              <label
                id="lblFuncModuleEnName"
                name="lblFuncModuleEnName"
                class="col-form-label text-right"
                style="width: 90px"
                >功能模块英文名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFuncModuleEnName"
                v-model="funcModuleEnName"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trFuncModuleNameSim">
            <td class="text-right">
              <label
                id="lblFuncModuleNameSim"
                name="lblFuncModuleNameSim"
                class="col-form-label text-right"
                style="width: 90px"
                >功能模块简称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFuncModuleNameSim"
                v-model="funcModuleNameSim"
                class="form-control form-control-sm"
                style="width: 350px"
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
                style="width: 350px"
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
                >使用状态Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUseStateId"
                v-model="useStateId"
                class="form-control form-control-sm"
                style="width: 350px"
              >
                <option v-for="(item, index) in arrUseState" :key="index" :value="item.useStateId">
                  {{ item.useStateName }}
                </option></select
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
                style="width: 350px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFuncModule_Agc" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFuncModule_Agc"
        type="primary"
        @click="btnFuncModule_Agc_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import FuncModule_Agc_EditEx from '@/views/PrjManage/FuncModule_Agc_EditEx';
  import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { UseState_GetArrUseState } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
  import { refDivEdit, PrjId_Session } from '@/views/PrjManage/FuncModule_AgcVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { FuncModule_Agc_Edit } from '@/viewsBase/PrjManage/FuncModule_Agc_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'FuncModuleAgcEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const funcModuleAgcId = ref('');
      const funcModuleName = ref('');
      const funcModuleEnName = ref('');
      const funcModuleNameSim = ref('');
      const prjId = ref('');
      const orderNum = ref(0);
      const useStateId = ref('');
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrUseState = ref<clsUseStateEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrUseState.value = await UseState_GetArrUseState(); //编辑区域
        useStateId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjFuncModule_AgcEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFuncModule_AgcObj() {
        const pobjFuncModule_AgcEN = new clsFuncModule_AgcEN();
        pobjFuncModule_AgcEN.SetFuncModuleAgcId(funcModuleAgcId.value); // 功能模块Id
        pobjFuncModule_AgcEN.SetFuncModuleName(funcModuleName.value); // 功能模块名称
        pobjFuncModule_AgcEN.SetFuncModuleEnName(funcModuleEnName.value); // 功能模块英文名称
        pobjFuncModule_AgcEN.SetFuncModuleNameSim(funcModuleNameSim.value); // 功能模块简称
        pobjFuncModule_AgcEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjFuncModule_AgcEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjFuncModule_AgcEN.SetUseStateId(Is0EqEmpty(useStateId.value)); // 使用状态Id
        pobjFuncModule_AgcEN.SetMemo(memo.value); // 说明
        pobjFuncModule_AgcEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjFuncModule_AgcEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjFuncModule_AgcEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFuncModule_AgcEN">表实体类对象</param>
       **/
      async function ShowDataFromFuncModule_AgcObj(pobjFuncModule_AgcEN: clsFuncModule_AgcEN) {
        funcModuleAgcId.value = pobjFuncModule_AgcEN.funcModuleAgcId; // 功能模块Id
        funcModuleName.value = pobjFuncModule_AgcEN.funcModuleName; // 功能模块名称
        funcModuleEnName.value = pobjFuncModule_AgcEN.funcModuleEnName; // 功能模块英文名称
        funcModuleNameSim.value = pobjFuncModule_AgcEN.funcModuleNameSim; // 功能模块简称
        orderNum.value = pobjFuncModule_AgcEN.orderNum; // 序号
        useStateId.value = IsNullOrEmptyEq0(pobjFuncModule_AgcEN.useStateId); // 使用状态Id
        memo.value = pobjFuncModule_AgcEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        funcModuleAgcId.value = '';
        funcModuleName.value = '';
        funcModuleEnName.value = '';
        funcModuleNameSim.value = '';
        orderNum.value = 0;
        useStateId.value = '0';
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
              if (['02', '03', '06'].indexOf(clsFuncModule_AgcEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (FuncModule_Agc_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFuncModule_AgcEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (FuncModule_Agc_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFuncModule_AgcEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In FuncModule_Agc_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (FuncModule_Agc_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsFuncModule_AgcEN._CurrTabName,
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
      const strTitle = ref('模块编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<FuncModule_Agc_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: FuncModule_Agc_EditEx) => {
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
        GetEditDataFuncModule_AgcObj,
        ShowDataFromFuncModule_AgcObj,
        Clear,
        btnSubmit_Click,
        funcModuleAgcId,
        funcModuleName,
        funcModuleEnName,
        funcModuleNameSim,
        prjId,
        orderNum,
        useStateId,
        memo,
        updUser,
        updDate,
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
      btnFuncModule_Agc_Edit_Click(strCommandName: string, strKeyId: string) {
        FuncModule_Agc_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
