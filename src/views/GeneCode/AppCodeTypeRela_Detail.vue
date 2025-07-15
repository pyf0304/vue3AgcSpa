<template>
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
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <span id="spnCodeTypeId_d" name="spnCodeTypeId_d" CssClass="col-form-label text-right"
                >代码类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCodeTypeId_d"
                name="lblCodeTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ codeTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnApplicationTypeName_d"
                name="spnApplicationTypeName_d"
                CssClass="col-form-label text-right"
                >应用程序类型名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblApplicationTypeName_d"
                name="lblApplicationTypeName_d"
                class="text-primary"
                style="width: 1px"
                >{{ applicationTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnTabMainTypeId_d"
                name="spnTabMainTypeId_d"
                CssClass="col-form-label text-right"
                >表主类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTabMainTypeId_d"
                name="lblTabMainTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ tabMainTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnIsVisible_d" name="spnIsVisible_d" CssClass="col-form-label text-right"
                >是否显示</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsVisible_d"
                name="lblIsVisible_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isVisible }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIsInGroupGeneCode_d"
                name="spnIsInGroupGeneCode_d"
                CssClass="col-form-label text-right"
                >是否参与组生成代码</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsInGroupGeneCode_d"
                name="lblIsInGroupGeneCode_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isInGroupGeneCode }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnOrderNum_d" name="spnOrderNum_d" CssClass="col-form-label text-right"
                >序号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblOrderNum_d"
                name="lblOrderNum_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ orderNum }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">说明</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
                {{ memo }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelAppCodeTypeRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import AppCodeTypeRela_DetailEx from '@/views/GeneCode/AppCodeTypeRela_DetailEx';
  import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';
  export default defineComponent({
    name: 'AppCodeTypeRelaDetail',
    components: {
      // 组件注册
    },
    setup() {
      const codeTypeId = ref('');
      const applicationTypeName = ref('');
      const tabMainTypeId = ref('');
      const isVisible = ref('0');
      const isInGroupGeneCode = ref('0');
      const orderNum = ref(0);
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjAppCodeTypeRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromAppCodeTypeRelaObj(
        pobjAppCodeTypeRelaENEx: clsAppCodeTypeRelaENEx,
      ) {
        codeTypeId.value = pobjAppCodeTypeRelaENEx.codeTypeId; // 代码类型Id
        applicationTypeName.value = pobjAppCodeTypeRelaENEx.applicationTypeName; // 应用程序类型名称
        tabMainTypeId.value = pobjAppCodeTypeRelaENEx.tabMainTypeId; // 表主类型Id
        isVisible.value =
          pobjAppCodeTypeRelaENEx.isVisible !== null
            ? pobjAppCodeTypeRelaENEx.isVisible.toString()
            : ''; // 是否显示
        isInGroupGeneCode.value =
          pobjAppCodeTypeRelaENEx.isInGroupGeneCode !== null
            ? pobjAppCodeTypeRelaENEx.isInGroupGeneCode.toString()
            : ''; // 是否参与组生成代码
        orderNum.value = pobjAppCodeTypeRelaENEx.orderNum; // 序号
        memo.value = pobjAppCodeTypeRelaENEx.memo; // 说明
      }
      const strTitle = ref('应用程序代码类型关系详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelAppCodeTypeRela':
            strCancelButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelAppCodeTypeRela':
            return strCancelButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
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
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        refDivDetail,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        ShowDataFromAppCodeTypeRelaObj,
        codeTypeId,
        applicationTypeName,
        tabMainTypeId,
        isVisible,
        isInGroupGeneCode,
        orderNum,
        memo,
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
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnAppCodeTypeRela_Detail_Click(strCommandName: string, strKeyId: string) {
        AppCodeTypeRela_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
