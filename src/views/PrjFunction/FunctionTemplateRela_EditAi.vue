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
          <tr id="trProgLangTypeId">
            <td class="text-right">
              <label
                id="lblProgLangTypeId"
                name="lblProgLangTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >语言类型
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
                  {{ item.progLangTypeSimName || item.progLangTypeName }}
                </option></select
              >
            </td>
            <td class="text-left" ColSpan="2"></td>
          </tr>
          <tr id="trCodeTypeId">
            <td class="text-right">
              <label
                id="lblFunctionTemplateId"
                name="lblFunctionTemplateId"
                class="col-form-label text-right"
                style="width: 90px"
                >函数模板Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFunctionTemplateId"
                v-model="functionTemplateId"
                class="form-control form-control-sm"
                style="width: 150px"
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
            <td class="text-right">
              <label
                id="lblCodeTypeId"
                name="lblCodeTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >代码类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCodeTypeId"
                v-model="codeTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrCodeType" :key="index" :value="item.codeTypeId">
                  {{ item.codeTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFuncCodeTypeId">
            <td class="text-right">
              <label
                id="lblRegionTypeId"
                name="lblRegionTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >区域类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlRegionTypeId"
                v-model="regionTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrRegionType"
                  :key="index"
                  :value="item.regionTypeId"
                >
                  {{ item.regionTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblFuncCodeTypeId"
                name="lblFuncCodeTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >函数代码类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncCodeTypeId"
                v-model="funcCodeTypeId"
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
          <tr id="trIsGeneCode">
            <td class="text-right">
              <label
                id="lblFuncId4GC"
                name="lblFuncId4GC"
                class="col-form-label text-right"
                style="width: 90px"
                >函数ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncId4GC"
                v-model="funcId4GC"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrFunction4GeneCode"
                  :key="index"
                  :value="item.funcId4GC"
                >
                  {{ item.funcName }}
                </option></select
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsGeneCode"
                  v-model="isGeneCode"
                  type="checkbox"
                  Text="是否生成代码"
                /><label for="chkIsGeneCode">是否生成代码</label></span
              >
            </td>
          </tr>
          <tr id="trMemo">
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
      <a-button id="btnCancelFunctionTemplateRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFunctionTemplateRela"
        type="primary"
        @click="btnFunctionTemplateRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import FunctionTemplateRela_EditAiEx from '@/views/PrjFunction/FunctionTemplateRela_EditAiEx';
  import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';
  import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
  import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
  import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { FunctionTemplate_GetArrFunctionTemplate } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
  import { CodeType_GetArrCodeTypeByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsCodeTypeWApi';
  import { RegionType_GetArrRegionType } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
  import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import { Function4GeneCode_GetArrFunction4GeneCodeByFuncCodeTypeId } from '@/ts/L3ForWApi/PrjFunction/clsFunction4GeneCodeWApi';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import {
    CodeTypeId_Static,
    ProgLangTypeId_Static,
    refDivEdit,
  } from '@/views/PrjFunction/FunctionTemplateRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { FunctionTemplateRela_EditAi } from '@/viewsBase/PrjFunction/FunctionTemplateRela_EditAi';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'FunctionTemplateRelaEditAi',

    components: {
      // 组件注册
    },

    setup() {
      const userStore = useUserStore();
      const strTitle = ref('函数与模板关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<FunctionTemplateRela_EditAiEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const functionTemplateId = ref('');
      const progLangTypeId = ref('');
      const codeTypeId = ref('');
      const regionTypeId = ref('');
      const funcCodeTypeId = ref('');
      const funcId4GC = ref('');
      const isGeneCode = ref(true);
      const orderNum = ref(0);
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrFunctionTemplate = ref<clsFunctionTemplateEN[] | null>([]);
      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);
      const arrCodeType = ref<clsCodeTypeEN[] | null>([]);
      const arrRegionType = ref<clsRegionTypeEN[] | null>([]);
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);
      const arrFunction4GeneCode = ref<clsFunction4GeneCodeEN[] | null>([]);

      async function syncFunctionByFuncCodeTypeId(strFuncCodeTypeId: string) {
        if (strFuncCodeTypeId == null || strFuncCodeTypeId === '' || strFuncCodeTypeId === '0') {
          arrFunction4GeneCode.value = [];
          funcId4GC.value = '0';
          return;
        }
        arrFunction4GeneCode.value =
          await Function4GeneCode_GetArrFunction4GeneCodeByFuncCodeTypeId(strFuncCodeTypeId);
        if (!arrFunction4GeneCode.value || arrFunction4GeneCode.value.length === 0) {
          funcId4GC.value = '0';
          return;
        }
        const hasCurrent = arrFunction4GeneCode.value.some((x) => x.funcId4GC === funcId4GC.value);
        if (!hasCurrent) {
          funcId4GC.value = arrFunction4GeneCode.value[0].funcId4GC;
        }
      }

      async function syncCodeTypesByProgLangType(
        strProgLangTypeId: string,
        preserveCurrentSelection = false,
      ) {
        ProgLangTypeId_Static.value = strProgLangTypeId;

        arrCodeType.value = await CodeType_GetArrCodeTypeByProgLangTypeId(strProgLangTypeId);
        if (!arrCodeType.value || arrCodeType.value.length === 0) {
          codeTypeId.value = '0';
        } else if (preserveCurrentSelection === false) {
          codeTypeId.value = arrCodeType.value[0].codeTypeId;
        } else if (!arrCodeType.value.some((x) => x.codeTypeId === codeTypeId.value)) {
          codeTypeId.value = arrCodeType.value[0].codeTypeId;
        }
        CodeTypeId_Static.value = codeTypeId.value;

        arrvCodeType_Sim.value = await vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(
          strProgLangTypeId,
        );
        if (!arrvCodeType_Sim.value || arrvCodeType_Sim.value.length === 0) {
          funcCodeTypeId.value = '0';
          await syncFunctionByFuncCodeTypeId('0');
          return;
        }
        if (preserveCurrentSelection === false) {
          funcCodeTypeId.value = arrvCodeType_Sim.value[0].codeTypeId;
        } else if (!arrvCodeType_Sim.value.some((x) => x.codeTypeId === funcCodeTypeId.value)) {
          funcCodeTypeId.value = arrvCodeType_Sim.value[0].codeTypeId;
        }
        await syncFunctionByFuncCodeTypeId(funcCodeTypeId.value);
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strProgLangTypeId_Static = ProgLangTypeId_Static.value; //静态变量;//静态变量

        arrFunctionTemplate.value = await FunctionTemplate_GetArrFunctionTemplate(); //编辑区域
        functionTemplateId.value = '0';

        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //编辑区域
        progLangTypeId.value = strProgLangTypeId_Static || '0';
        if (
          progLangTypeId.value === '0' &&
          arrProgLangType.value &&
          arrProgLangType.value.length > 0
        ) {
          progLangTypeId.value = arrProgLangType.value[0].progLangTypeId;
        }

        arrRegionType.value = await RegionType_GetArrRegionType(); //编辑区域
        regionTypeId.value = '0';

        codeTypeId.value = CodeTypeId_Static.value || '0';
        funcCodeTypeId.value = '0';
        funcId4GC.value = '0';
        await syncCodeTypesByProgLangType(progLangTypeId.value, true);
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjFunctionTemplateRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFunctionTemplateRelaObj() {
        const pobjFunctionTemplateRelaEN = new clsFunctionTemplateRelaEN();
        pobjFunctionTemplateRelaEN.SetFunctionTemplateId(Is0EqEmpty(functionTemplateId.value)); // 函数模板Id
        pobjFunctionTemplateRelaEN.SetCodeTypeId(Is0EqEmpty(codeTypeId.value)); // 代码类型Id
        pobjFunctionTemplateRelaEN.SetRegionTypeId(Is0EqEmpty(regionTypeId.value)); // 区域类型Id
        pobjFunctionTemplateRelaEN.SetFuncCodeTypeId(Is0EqEmpty(funcCodeTypeId.value)); // 函数代码类型Id
        pobjFunctionTemplateRelaEN.SetFuncId4GC(Is0EqEmpty(funcId4GC.value)); // 函数ID
        pobjFunctionTemplateRelaEN.SetIsGeneCode(isGeneCode.value); // 是否生成代码
        pobjFunctionTemplateRelaEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjFunctionTemplateRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjFunctionTemplateRelaEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjFunctionTemplateRelaEN.SetMemo(memo.value); // 说明
        return pobjFunctionTemplateRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjFunctionTemplateRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromFunctionTemplateRelaObj(
        pobjFunctionTemplateRelaEN: clsFunctionTemplateRelaEN,
      ) {
        functionTemplateId.value = IsNullOrEmptyEq0(pobjFunctionTemplateRelaEN.functionTemplateId); // 函数模板Id
        codeTypeId.value = IsNullOrEmptyEq0(pobjFunctionTemplateRelaEN.codeTypeId); // 代码类型Id
        regionTypeId.value = IsNullOrEmptyEq0(pobjFunctionTemplateRelaEN.regionTypeId); // 区域类型Id
        funcCodeTypeId.value = IsNullOrEmptyEq0(pobjFunctionTemplateRelaEN.funcCodeTypeId); // 函数代码类型Id
        funcId4GC.value = IsNullOrEmptyEq0(pobjFunctionTemplateRelaEN.funcId4GC); // 函数ID
        isGeneCode.value = pobjFunctionTemplateRelaEN.isGeneCode; // 是否生成代码
        orderNum.value = pobjFunctionTemplateRelaEN.orderNum; // 序号
        memo.value = pobjFunctionTemplateRelaEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        functionTemplateId.value = '0';
        progLangTypeId.value = '0';
        codeTypeId.value = '0';
        regionTypeId.value = '0';
        funcCodeTypeId.value = '0';
        funcId4GC.value = '0';
        isGeneCode.value = false;
        orderNum.value = 0;
        memo.value = '';
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
              if (['02', '03', '06'].indexOf(clsFunctionTemplateRelaEN._PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFunctionTemplateRelaEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (
                    FunctionTemplateRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01
                  ) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsFunctionTemplateRelaEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In FunctionTemplateRela_EditAi.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (FunctionTemplateRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsFunctionTemplateRelaEN._CurrTabName,
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

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: FunctionTemplateRela_EditAiEx) => {
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

      watch(
        progLangTypeId,
        (newVal, oldVal) => {
          if (newVal === oldVal) return;
          syncCodeTypesByProgLangType(newVal, false).catch((error) => console.error(error));
        },
        { flush: 'post' },
      );

      watch(
        funcCodeTypeId,
        (newVal, oldVal) => {
          if (newVal === oldVal) return;
          syncFunctionByFuncCodeTypeId(newVal).catch((error) => console.error(error));
        },
        { flush: 'post' },
      );

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
        GetEditDataFunctionTemplateRelaObj,
        ShowDataFromFunctionTemplateRelaObj,
        Clear,
        btnSubmit_Click,
        functionTemplateId,
        progLangTypeId,
        codeTypeId,
        regionTypeId,
        funcCodeTypeId,
        funcId4GC,
        isGeneCode,
        orderNum,
        updDate,
        updUser,
        memo,
        arrFunctionTemplate,
        arrProgLangType,
        arrCodeType,
        arrRegionType,
        arrvCodeType_Sim,
        arrFunction4GeneCode,
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
      btnFunctionTemplateRela_Edit_Click(strCommandName: string, strKeyId: string) {
        const objPageEdit = this.objPage_Edit as FunctionTemplateRela_EditAiEx | undefined;
        if (objPageEdit == null) {
          const strMsg =
            '编辑页面初始化不成功,请联系管理员!(in btnFunctionTemplateRela_Edit_Click)';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (IsNullOrEmpty(strKeyId) == false) {
          objPageEdit.btnEdit_Click(strCommandName, { mId: Number(strKeyId) });
        } else {
          objPageEdit.btnEdit_Click(strCommandName, { mId: 0 });
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
