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
              <span
                id="spnDnFunctionName_d"
                name="spnDnFunctionName_d"
                CssClass="col-form-label text-right"
                >DN函数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDnFunctionName_d"
                name="lblDnFunctionName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dnFunctionName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnAssociationMappingName_d"
                name="spnAssociationMappingName_d"
                CssClass="col-form-label text-right"
                >关联关系映射名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblAssociationMappingName_d"
                name="lblAssociationMappingName_d"
                class="text-primary"
                style="width: 100px"
                >{{ associationMappingName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnPrjId_d" name="spnPrjId_d" CssClass="col-form-label text-right"
                >工程ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblPrjId_d" name="lblPrjId_d" class="text-primary" style="width: 150px">
                {{ prjId }}
              </label>
            </td>
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
      <a-button id="btnCancelDnFunction" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import DnFunction_DetailEx from '@/views/AIModule/DnFunction_DetailEx';
  import { clsDnFunctionENEx } from '@/ts/L0Entity/AIModule/clsDnFunctionENEx';
  export default defineComponent({
    name: 'DnFunctionDetail',
    components: {
      // 组件注册
    },
    setup() {
      const dnFunctionName = ref('');
      const associationMappingName = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const prjId = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDnFunctionEN">表实体类对象</param>
       **/
      async function ShowDataFromDnFunctionObj(pobjDnFunctionENEx: clsDnFunctionENEx) {
        dnFunctionName.value = pobjDnFunctionENEx.dnFunctionName; // DN函数
        associationMappingName.value = pobjDnFunctionENEx.associationMappingName; // 关联关系映射名
        updDate.value = pobjDnFunctionENEx.updDate; // 修改日期
        updUser.value = pobjDnFunctionENEx.updUser; // 修改者
        prjId.value = pobjDnFunctionENEx.prjId; // 工程ID
        memo.value = pobjDnFunctionENEx.memo; // 说明
      }
      const strTitle = ref('数据结点函数详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelDnFunction':
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
          case 'btnCancelDnFunction':
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
        ShowDataFromDnFunctionObj,
        dnFunctionName,
        associationMappingName,
        updDate,
        updUser,
        prjId,
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
      btnDnFunction_Detail_Click(strCommandName: string, strKeyId: string) {
        DnFunction_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
