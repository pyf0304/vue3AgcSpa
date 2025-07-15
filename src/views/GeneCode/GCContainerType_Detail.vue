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
                id="spnContainerTypeName_d"
                name="spnContainerTypeName_d"
                CssClass="col-form-label text-right"
                >容器类型名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblContainerTypeName_d"
                name="lblContainerTypeName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ containerTypeName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnContainerTypeENName_d"
                name="spnContainerTypeENName_d"
                CssClass="col-form-label text-right"
                >容器类型英文名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblContainerTypeENName_d"
                name="lblContainerTypeENName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ containerTypeENName }}
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
      <a-button id="btnCancelGCContainerType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import GCContainerType_DetailEx from '@/views/GeneCode/GCContainerType_DetailEx';
  import { clsGCContainerTypeENEx } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeENEx';
  export default defineComponent({
    name: 'GCContainerTypeDetail',
    components: {
      // 组件注册
    },
    setup() {
      const containerTypeName = ref('');
      const containerTypeENName = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjGCContainerTypeEN">表实体类对象</param>
       **/
      async function ShowDataFromGCContainerTypeObj(
        pobjGCContainerTypeENEx: clsGCContainerTypeENEx,
      ) {
        containerTypeName.value = pobjGCContainerTypeENEx.containerTypeName; // 容器类型名
        containerTypeENName.value = pobjGCContainerTypeENEx.containerTypeENName; // 容器类型英文名
        memo.value = pobjGCContainerTypeENEx.memo; // 说明
      }
      const strTitle = ref('GC容器类型详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelGCContainerType':
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
          case 'btnCancelGCContainerType':
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
        ShowDataFromGCContainerTypeObj,
        containerTypeName,
        containerTypeENName,
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
      btnGCContainerType_Detail_Click(strCommandName: string, strKeyId: string) {
        GCContainerType_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
