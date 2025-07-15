<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trCmPrjId">
          <td class="text-right">
            <label
              id="lblCmPrjId"
              name="lblCmPrjId"
              class="col-form-label text-right"
              style="width: 90px"
              >CM工程Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCmPrjId"
              name="txtCmPrjId"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
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
              name="txtCmPrjName"
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
              name="ddlApplicationTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
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
              name="ddlFunctionTemplateId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
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

        <tr id="trIsFstLcase">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsFstLcase"
                name="chkIsFstLcase"
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
              name="txtProjectFileName"
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
              name="ddlUseStateId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trIsRefresh4RelaView">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsRefresh4RelaView"
                name="chkIsRefresh4RelaView"
                type="checkbox"
                Text="是否刷新相关视图"
              /><label for="chkIsRefresh4RelaView">是否刷新相关视图</label></span
            >
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >说明
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
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
  import { Format } from '@/ts/PubFun/clsString';

  import CMProject_EditEx from '@/views/CodeMan/CMProject_EditEx';
  import { clsVueCtrlDesignSysEN } from '@/ts/L0Entity/SysPara/clsVueCtrlDesignSysEN';
  import { VueCtrlDesignSys_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsVueCtrlDesignSysWApi';
  export default defineComponent({
    name: 'CMProjectEdit',
    components: {
      // 组件注册
    },
    setup() {
      const vueDesignSysId = ref('0');
      const arrVueCtrlDesignSys = ref<clsVueCtrlDesignSysEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrVueCtrlDesignSys() {
        const arrObjLstSel = await VueCtrlDesignSys_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrVueCtrlDesignSys.value.length = 0;
        const obj0 = new clsVueCtrlDesignSysEN();
        obj0.vueDesignSysId = '0';
        obj0.vueDesignSysName = '请选择vue控件设计体系...';
        arrVueCtrlDesignSys.value.push(obj0);
        arrObjLstSel.forEach((x) => arrVueCtrlDesignSys.value.push(x));
        vueDesignSysId.value = '0';
      }
      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        // await getArrApplicationType(); //编辑区域

        await getArrVueCtrlDesignSys(); //编辑区域

        // await getArrFunctionTemplate(); //编辑区域

        // await getArrUseState(); //编辑区域
      }
      const strTitle = ref('CM项目编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelCMProject':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitCMProject':
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
          case 'btnCancelCMProject':
            return strCancelButtonText.value;
          case 'btnSubmitCMProject':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(async () => {
            console.log('对话框已经显示!');
            await BindDdl4EditRegionInDiv();
          }, 1000);
        });
      };

      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        vueDesignSysId,
        arrVueCtrlDesignSys,
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
        //CMProject_EditEx.btnClick(strCommandName, strKeyId);
      },

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
<style scoped></style>
