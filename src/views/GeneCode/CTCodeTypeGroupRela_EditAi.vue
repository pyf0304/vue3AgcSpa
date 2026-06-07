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
          <tr id="trCtGroupId">
            <td class="text-right">
              <label
                id="lblCtGroupId"
                name="lblCtGroupId"
                class="col-form-label text-right"
                style="width: 90px"
                >Ct组
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCtGroupId"
                v-model="ctGroupId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrCTCodeTypeGroup"
                  :key="index"
                  :value="item.ctGroupId"
                >
                  {{ item.groupName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trCodeTypeId">
            <td class="text-right">
              <label
                id="lblCodeTypeId"
                name="lblCodeTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >代码类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCodeTypeId"
                v-model="codeTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrvCodeType_Sim"
                  :key="index"
                  :value="item.codeTypeId"
                >
                  {{ item.codeTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsMainGroup">
            <td class="text-right">
              <label
                id="lblIsMainGroup"
                name="lblIsMainGroup"
                class="col-form-label text-right"
                style="width: 90px"
                >IsMainGroup
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIsMainGroup"
                v-model="isMainGroup"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
              >
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
                style="width: 150px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelCTCodeTypeGroupRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitCTCodeTypeGroupRela"
        type="primary"
        @click="btnCTCodeTypeGroupRela_Edit_Click('Submit', null)"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import CTCodeTypeGroupRela_EditAiEx from '@/views/GeneCode/CTCodeTypeGroupRela_EditAiEx';
  import {
    clsCTCodeTypeGroupRelaEN,
    CTCodeTypeGroupRelaKey,
  } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';
  import { clsCTCodeTypeGroupEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { CTCodeTypeGroup_GetArrCTCodeTypeGroupByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupWApi';
  import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import {
    ApplicationTypeId_Static,
    ProgLangTypeId_Static,
    refDivEdit,
  } from '@/views/GeneCode/CTCodeTypeGroupRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmptyEq0, Is0EqEmpty, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { CTCodeTypeGroupRela_EditAi } from '@/viewsBase/GeneCode/CTCodeTypeGroupRela_EditAi';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'CTCodeTypeGroupRelaEditAi',

    components: {
      // 组件注册
    },

    setup() {
      const userStore = useUserStore();
      const strTitle = ref('CTCodeTypeGroupRela编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<CTCodeTypeGroupRela_EditAiEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const ctGroupId = ref('');
      const codeTypeId = ref('');
      const isMainGroup = ref('0');
      const orderNum = ref(0);
      const updDate = ref('');
      const updUser = ref('');

      const arrCTCodeTypeGroup = ref<clsCTCodeTypeGroupEN[] | null>([]);
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const intApplicationTypeId_Static = ApplicationTypeId_Static.value; //静态变量;//静态变量
        const strProgLangTypeId_Static = ProgLangTypeId_Static.value; //静态变量;//静态变量

        arrCTCodeTypeGroup.value =
          await CTCodeTypeGroup_GetArrCTCodeTypeGroupByApplicationTypeIdCache(
            intApplicationTypeId_Static,
          ); //编辑区域
        ctGroupId.value = '0';

        arrvCodeType_Sim.value = await vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(
          strProgLangTypeId_Static,
        ); //编辑区域
        codeTypeId.value = '0';

        isMainGroup.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjCTCodeTypeGroupRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataCTCodeTypeGroupRelaObj() {
        const pobjCTCodeTypeGroupRelaEN = new clsCTCodeTypeGroupRelaEN();
        pobjCTCodeTypeGroupRelaEN.SetCtGroupId(Is0EqEmpty(ctGroupId.value)); // Ct组
        pobjCTCodeTypeGroupRelaEN.SetCodeTypeId(Is0EqEmpty(codeTypeId.value)); // 代码类型
        pobjCTCodeTypeGroupRelaEN.SetIsMainGroup(isMainGroup.value == 'true' ? true : false); // IsMainGroup
        pobjCTCodeTypeGroupRelaEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjCTCodeTypeGroupRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjCTCodeTypeGroupRelaEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjCTCodeTypeGroupRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjCTCodeTypeGroupRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromCTCodeTypeGroupRelaObj(
        pobjCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
      ) {
        ctGroupId.value = IsNullOrEmptyEq0(pobjCTCodeTypeGroupRelaEN.ctGroupId); // Ct组
        codeTypeId.value = IsNullOrEmptyEq0(pobjCTCodeTypeGroupRelaEN.codeTypeId); // 代码类型
        isMainGroup.value = pobjCTCodeTypeGroupRelaEN.isMainGroup.toString(); // IsMainGroup
        orderNum.value = pobjCTCodeTypeGroupRelaEN.orderNum; // 序号
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        ctGroupId.value = '0';
        codeTypeId.value = '0';
        isMainGroup.value = '0';
        orderNum.value = 0;
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_btnSubmit_Click)
       **/
      const btnSubmit_Click = async () => {
        const strThisFuncName = btnSubmit_Click.name;
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!(in btnSubmit_Click)');
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
                if (CTCodeTypeGroupRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsCTCodeTypeGroupRelaEN._CurrTabName,
                    keyId.value,
                  );
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In CTCodeTypeGroupRela_EditAi.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (CTCodeTypeGroupRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsCTCodeTypeGroupRelaEN._CurrTabName,
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
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: CTCodeTypeGroupRela_EditAiEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };

      /**
       * 处理保存逻辑
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_HandleSave)
       **/
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };

      /**
       * 隐藏对话框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_HideDialog)
       **/
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      return {
        refDivEdit,
        objPage_Edit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataCTCodeTypeGroupRelaObj,
        ShowDataFromCTCodeTypeGroupRelaObj,
        Clear,
        btnSubmit_Click,
        ctGroupId,
        codeTypeId,
        isMainGroup,
        orderNum,
        updDate,
        updUser,
        arrCTCodeTypeGroup,
        arrvCodeType_Sim,
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
       *(AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Methods_btnEdit_Click)
       **/
      btnCTCodeTypeGroupRela_Edit_Click(
        strCommandName: string,
        key: CTCodeTypeGroupRelaKey | null,
      ) {
        const objPageEdit = this.objPage_Edit as CTCodeTypeGroupRela_EditAiEx | undefined;
        if (objPageEdit == null) {
          const strMsg = '编辑页面初始化不成功,请联系管理员!(in btnCTCodeTypeGroupRela_Edit_Click)';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (
          key == null ||
          IsNullOrEmpty(key.ctGroupId) == true ||
          IsNullOrEmpty(key.codeTypeId) == true
        ) {
          objPageEdit.btnEdit_Click(strCommandName, null);
        } else {
          objPageEdit.btnEdit_Click(strCommandName, key);
        }
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
