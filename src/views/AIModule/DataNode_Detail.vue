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
              <span id="spnDataNodeId_d" name="spnDataNodeId_d" CssClass="col-form-label text-right"
                >数据结点Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDataNodeId_d"
                name="lblDataNodeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dataNodeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnDataNodeName_d"
                name="spnDataNodeName_d"
                CssClass="col-form-label text-right"
                >数据结点名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDataNodeName_d"
                name="lblDataNodeName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dataNodeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDataNodeTypeId_d"
                name="spnDataNodeTypeId_d"
                CssClass="col-form-label text-right"
                >数据结点类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDataNodeTypeId_d"
                name="lblDataNodeTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dataNodeTypeId }}
              </label>
            </td>
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
            <td class="text-right">
              <span id="spnCmPrjName_d" name="spnCmPrjName_d" CssClass="col-form-label text-right"
                >CM工程名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCmPrjName_d"
                name="lblCmPrjName_d"
                class="text-primary"
                style="width: 100px"
                >{{ cmPrjName }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelDataNode" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import DataNode_DetailEx from '@/views/AIModule/DataNode_DetailEx';
  import { clsDataNodeENEx } from '@/ts/L0Entity/AIModule/clsDataNodeENEx';
  export default defineComponent({
    name: 'DataNodeDetail',
    components: {
      // 组件注册
    },
    setup() {
      const dataNodeId = ref(0);
      const dataNodeName = ref('');
      const dataNodeTypeId = ref('');
      const prjId = ref('');
      const memo = ref('');
      const cmPrjName = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDataNodeEN">表实体类对象</param>
       **/
      async function ShowDataFromDataNodeObj(pobjDataNodeENEx: clsDataNodeENEx) {
        dataNodeId.value = pobjDataNodeENEx.dataNodeId; // 数据结点Id
        dataNodeName.value = pobjDataNodeENEx.dataNodeName; // 数据结点名
        dataNodeTypeId.value = pobjDataNodeENEx.dataNodeTypeId; // 数据结点类型Id
        prjId.value = pobjDataNodeENEx.prjId; // 工程ID
        memo.value = pobjDataNodeENEx.memo; // 说明
        cmPrjName.value = pobjDataNodeENEx.cmPrjName; // CM工程名
      }
      const strTitle = ref('数据结点详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelDataNode':
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
          case 'btnCancelDataNode':
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
        ShowDataFromDataNodeObj,
        dataNodeId,
        dataNodeName,
        dataNodeTypeId,
        prjId,
        memo,
        cmPrjName,
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
      btnDataNode_Detail_Click(strCommandName: string, strKeyId: string) {
        DataNode_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
