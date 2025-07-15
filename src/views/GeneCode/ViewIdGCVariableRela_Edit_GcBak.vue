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
          <tr id="trVarId">
            <td class="text-right">
              <label
                id="lblVarId"
                name="lblVarId"
                class="col-form-label text-right"
                style="width: 90px"
                >变量
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlVarId"
                v-model="varId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                  {{ item.varName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trRetrievalMethodId">
            <td class="text-right">
              <label
                id="lblRetrievalMethodId"
                name="lblRetrievalMethodId"
                class="col-form-label text-right"
                style="width: 90px"
                >获取方式
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlRetrievalMethodId"
                v-model="retrievalMethodId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrRetrievalMethod"
                  :key="index"
                  :value="item.retrievalMethodId"
                >
                  {{ item.retrievalMethodName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsUseInRegion">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsUseInRegion"
                  v-model="isUseInRegion"
                  type="checkbox"
                  Text="是否在区域中使用"
                /><label for="chkIsUseInRegion">是否在区域中使用</label></span
              >
            </td>
          </tr>
          <tr id="trRegionTypeNames">
            <td class="text-right">
              <label
                id="lblRegionTypeNames"
                name="lblRegionTypeNames"
                class="col-form-label text-right"
                style="width: 90px"
                >区域类型名s
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRegionTypeNames"
                v-model="regionTypeNames"
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
                style="width: 400px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelViewIdGCVariableRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewIdGCVariableRela"
        type="primary"
        @click="btnViewIdGCVariableRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import ViewIdGCVariableRela_EditEx from '@/views/GeneCode/ViewIdGCVariableRela_EditEx';
  import { clsViewIdGCVariableRelaEN } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { clsRetrievalMethodEN } from '@/ts/L0Entity/SysPara/clsRetrievalMethodEN';
  import { GCVariable_GetArrGCVariable } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
  import { RetrievalMethod_GetArrRetrievalMethod } from '@/ts/L3ForWApi/SysPara/clsRetrievalMethodWApi';
  import {
    PrjId_Session,
    refDivEdit,
    ViewId_Main_Session,
  } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { ViewIdGCVariableRela_Edit } from '@/viewsBase/GeneCode/ViewIdGCVariableRela_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'ViewIdGCVariableRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const varId = ref('');
      const viewId = ref('');
      const retrievalMethodId = ref('');
      const isUseInRegion = ref(true);
      const regionTypeNames = ref('');
      const prjId = ref('');
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);
      const arrRetrievalMethod = ref<clsRetrievalMethodEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrGCVariable.value = await GCVariable_GetArrGCVariable(); //编辑区域
        varId.value = '0';

        arrRetrievalMethod.value = await RetrievalMethod_GetArrRetrievalMethod(); //编辑区域
        retrievalMethodId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjViewIdGCVariableRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataViewIdGCVariableRelaObj() {
        const pobjViewIdGCVariableRelaEN = new clsViewIdGCVariableRelaEN();
        pobjViewIdGCVariableRelaEN.SetVarId(Is0EqEmpty(varId.value)); // 变量
        pobjViewIdGCVariableRelaEN.SetViewId(ViewId_Main_Session.value); // 界面Id
        pobjViewIdGCVariableRelaEN.SetRetrievalMethodId(Is0EqEmpty(retrievalMethodId.value)); // 获取方式
        pobjViewIdGCVariableRelaEN.SetIsUseInRegion(isUseInRegion.value); // 是否在区域中使用
        pobjViewIdGCVariableRelaEN.SetRegionTypeNames(regionTypeNames.value); // 区域类型名s
        pobjViewIdGCVariableRelaEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjViewIdGCVariableRelaEN.SetMemo(memo.value); // 说明
        pobjViewIdGCVariableRelaEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjViewIdGCVariableRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjViewIdGCVariableRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewIdGCVariableRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromViewIdGCVariableRelaObj(
        pobjViewIdGCVariableRelaEN: clsViewIdGCVariableRelaEN,
      ) {
        varId.value = IsNullOrEmptyEq0(pobjViewIdGCVariableRelaEN.varId); // 变量
        retrievalMethodId.value = IsNullOrEmptyEq0(pobjViewIdGCVariableRelaEN.retrievalMethodId); // 获取方式
        isUseInRegion.value = pobjViewIdGCVariableRelaEN.isUseInRegion; // 是否在区域中使用
        regionTypeNames.value = pobjViewIdGCVariableRelaEN.regionTypeNames; // 区域类型名s
        memo.value = pobjViewIdGCVariableRelaEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        varId.value = '0';
        retrievalMethodId.value = '0';
        isUseInRegion.value = false;
        regionTypeNames.value = '';
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
              returnBool = await objPage_Edit.value.AddNewRecordSave();
              if (returnBool == true) {
                if (ViewIdGCVariableRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsViewIdGCVariableRelaEN._CurrTabName,
                    keyId.value,
                  );
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In ViewIdGCVariableRela_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (ViewIdGCVariableRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsViewIdGCVariableRelaEN._CurrTabName,
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
      const strTitle = ref('界面变量关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<ViewIdGCVariableRela_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: ViewIdGCVariableRela_EditEx) => {
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
        GetEditDataViewIdGCVariableRelaObj,
        ShowDataFromViewIdGCVariableRelaObj,
        Clear,
        btnSubmit_Click,
        varId,
        viewId,
        retrievalMethodId,
        isUseInRegion,
        regionTypeNames,
        prjId,
        memo,
        updUser,
        updDate,
        arrGCVariable,
        arrRetrievalMethod,
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
      btnViewIdGCVariableRela_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewIdGCVariableRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
