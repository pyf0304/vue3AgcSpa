<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 500px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trTabFeatureId">
          <td class="text-right">
            <label
              id="lblTabFeatureId"
              name="lblTabFeatureId"
              class="col-form-label text-right"
              style="width: 90px"
              >表功能Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTabFeatureId"
              name="txtTabFeatureId"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
        <tr id="trTabFeatureName">
          <td class="text-right">
            <label
              id="lblTabFeatureName"
              name="lblTabFeatureName"
              class="col-form-label text-right"
              style="width: 90px"
              >表功能名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTabFeatureName"
              v-model="tabFeatureName"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
        <tr id="trFeatureId">
          <td class="text-right">
            <label
              id="lblFeatureId"
              name="lblFeatureId"
              class="col-form-label text-right"
              style="width: 90px"
              >功能
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFeatureId"
              v-model="featureId"
              class="form-control form-control-sm"
              style="width: 300px"
            >
              <option v-for="(item, index) in arrPrjFeature" :key="index" :value="item.featureId">
                {{ item.featureName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trFuncNameCs">
          <td class="text-right">
            <label
              id="lblFuncNameCs"
              name="lblFuncNameCs"
              class="col-form-label text-right"
              style="width: 90px"
              >Cs函数名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncNameCs"
              v-model="funcNameCs"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
        <tr id="trFuncNameJs">
          <td class="text-right">
            <label
              id="lblFuncNameJs"
              name="lblFuncNameJs"
              class="col-form-label text-right"
              style="width: 90px"
              >Js函数名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFuncNameJs"
              v-model="funcNameJs"
              class="form-control form-control-sm"
              style="width: 300px"
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
              style="width: 300px"
            />
          </td>
        </tr>
        <tr id="trIsExtendedClass">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsExtendedClass"
                v-model="isExtendedClass"
                type="checkbox"
                Text="是否在扩展类"
              /><label for="chkIsExtendedClass">是否在扩展类</label></span
            >
          </td>
        </tr>
        <tr id="trIsForCSharp">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsForCSharp"
                v-model="isForCSharp"
                type="checkbox"
                Text="是否ForCSharp"
              /><label for="chkIsForCSharp">是否ForCSharp</label></span
            >
          </td>
        </tr>
        <tr id="trIsForTypeScript">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsForTypeScript"
                v-model="isForTypeScript"
                type="checkbox"
                Text="是否可针对TypeScript"
              /><label for="chkIsForTypeScript">是否可针对TypeScript</label></span
            >
          </td>
        </tr>
        <tr id="trIsForDiv">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsForDiv"
                v-model="isForDiv"
                type="checkbox"
                Text="是否针对Div内控件"
              /><label for="chkIsForDiv">是否针对Div内控件</label></span
            >
          </td>
        </tr>
        <tr id="trIsNeedGC">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsNeedGC"
                v-model="isNeedGC"
                type="checkbox"
                Text="是否需要生成代码"
              /><label for="chkIsNeedGC">是否需要生成代码</label></span
            >
          </td>
        </tr>
        <tr id="trInUse">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 300px">
              <input id="chkInUse" v-model="inUse" type="checkbox" Text="是否在用" /><label
                for="chkInUse"
                >是否在用</label
              ></span
            >
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >说明1
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              v-model="memo"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelTabFeature" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitTabFeature"
        type="primary"
        @click="btnTabFeature_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';

  import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
  import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
  import { PrjFeature_GetArrPrjFeatureByFeatureTypeId } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
  import {
    FeatureTypeId_Static,
    PrjId_Session,
    refDivEdit,
    TabId_Static,
  } from '@/views/Table_Field/TabFeatureVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { TabFeature_Edit } from '@/viewsBase/Table_Field/TabFeature_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  import TabFeature_EditEx from '@/views/Table_Field/TabFeature_EditEx';
  export default defineComponent({
    name: 'TabFeatureEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const tabFeatureId = ref('');
      const tabFeatureName = ref('');
      const featureId = ref('');
      const funcNameCs = ref('');
      const funcNameJs = ref('');
      const orderNum = ref(0);
      const prjId = ref('');
      const tabId = ref('');
      const isExtendedClass = ref(true);
      const isForCSharp = ref(true);
      const isForTypeScript = ref(true);
      const isForDiv = ref(true);
      const isNeedGC = ref(true);
      const inUse = ref(true);
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrPrjFeature = ref<clsPrjFeatureEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strFeatureTypeId_Static = FeatureTypeId_Static.value; //静态变量;//静态变量

        arrPrjFeature.value = await PrjFeature_GetArrPrjFeatureByFeatureTypeId(
          strFeatureTypeId_Static,
        ); //编辑区域
        featureId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjTabFeatureEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataTabFeatureObj() {
        const pobjTabFeatureEN = new clsTabFeatureEN();
        pobjTabFeatureEN.SetTabFeatureId(tabFeatureId.value); // 表功能Id
        pobjTabFeatureEN.SetTabFeatureName(tabFeatureName.value); // 表功能名
        pobjTabFeatureEN.SetFeatureId(featureId.value); // 功能
        pobjTabFeatureEN.SetFuncNameCs(funcNameCs.value); // Cs函数名
        pobjTabFeatureEN.SetFuncNameJs(funcNameJs.value); // Js函数名
        pobjTabFeatureEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjTabFeatureEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjTabFeatureEN.SetTabId(TabId_Static.value); // 表ID
        pobjTabFeatureEN.SetIsExtendedClass(isExtendedClass.value); // 是否在扩展类
        pobjTabFeatureEN.SetIsForCSharp(isForCSharp.value); // 是否ForCSharp
        pobjTabFeatureEN.SetIsForTypeScript(isForTypeScript.value); // 是否可针对TypeScript
        pobjTabFeatureEN.SetIsForDiv(isForDiv.value); // 是否针对Div内控件
        pobjTabFeatureEN.SetIsNeedGC(isNeedGC.value); // 是否需要生成代码
        pobjTabFeatureEN.SetInUse(inUse.value); // 是否在用
        pobjTabFeatureEN.SetMemo(memo.value); // 说明
        pobjTabFeatureEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjTabFeatureEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjTabFeatureEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjTabFeatureEN">表实体类对象</param>
       **/
      async function ShowDataFromTabFeatureObj(pobjTabFeatureEN: clsTabFeatureEN) {
        tabFeatureId.value = pobjTabFeatureEN.tabFeatureId; // 表功能Id
        tabFeatureName.value = pobjTabFeatureEN.tabFeatureName; // 表功能名
        featureId.value = pobjTabFeatureEN.featureId; // 功能
        funcNameCs.value = pobjTabFeatureEN.funcNameCs; // Cs函数名
        funcNameJs.value = pobjTabFeatureEN.funcNameJs; // Js函数名
        orderNum.value = pobjTabFeatureEN.orderNum; // 序号
        isExtendedClass.value = pobjTabFeatureEN.isExtendedClass; // 是否在扩展类
        isForCSharp.value = pobjTabFeatureEN.isForCSharp; // 是否ForCSharp
        isForTypeScript.value = pobjTabFeatureEN.isForTypeScript; // 是否可针对TypeScript
        isForDiv.value = pobjTabFeatureEN.isForDiv; // 是否针对Div内控件
        isNeedGC.value = pobjTabFeatureEN.isNeedGC; // 是否需要生成代码
        inUse.value = pobjTabFeatureEN.inUse; // 是否在用
        memo.value = pobjTabFeatureEN.memo; // 说明

        // this.prjId = pobjTabFeatureEN.prjId;// 工程ID
        //this.tabId = pobjTabFeatureEN.tabId;// 表ID
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        tabFeatureId.value = '';
        tabFeatureName.value = '';
        featureId.value = '0';
        funcNameCs.value = '';
        funcNameJs.value = '';
        orderNum.value = 0;
        isExtendedClass.value = false;
        isForCSharp.value = false;
        isForTypeScript.value = false;
        isForDiv.value = false;
        isNeedGC.value = false;
        inUse.value = false;
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
              if (['02', '03', '06'].indexOf(clsTabFeatureEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsTabFeatureEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsTabFeatureEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In TabFeature_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsTabFeatureEN._CurrTabName,
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
      const strTitle = ref('表功能编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<TabFeature_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: TabFeature_EditEx) => {
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
          case 'btnCancelTabFeature':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitTabFeature':
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
          case 'btnCancelTabFeature':
            return strCancelButtonText.value;
          case 'btnSubmitTabFeature':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
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
        GetEditDataTabFeatureObj,
        ShowDataFromTabFeatureObj,
        Clear,
        btnSubmit_Click,
        tabFeatureId,
        tabFeatureName,
        featureId,
        funcNameCs,
        funcNameJs,
        orderNum,
        prjId,
        tabId,
        isExtendedClass,
        isForCSharp,
        isForTypeScript,
        isForDiv,
        isNeedGC,
        inUse,
        memo,
        updUser,
        updDate,
        arrPrjFeature,

        SetButtonText,
        GetButtonText,
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
        //TabFeature_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnTabFeature_Edit_Click(strCommandName: string, strKeyId: string) {
        TabFeature_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
