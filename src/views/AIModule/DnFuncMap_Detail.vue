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
                id="spnInDataNodeId_d"
                name="spnInDataNodeId_d"
                CssClass="col-form-label text-right"
                >In数据结点Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblInDataNodeId_d"
                name="lblInDataNodeId_d"
                class="text-primary"
                style="width: 400px"
              >
                {{ inDataNodeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnInDataNodeName_d"
                name="spnInDataNodeName_d"
                CssClass="col-form-label text-right"
                >In结点</span
              >
            </td>
            <td class="text-left">
              <label id="lblInDataNodeName_d" name="lblInDataNodeName_d" class="text-primary"
                >{{ inDataNodeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnOutDataNodeId_d"
                name="spnOutDataNodeId_d"
                CssClass="col-form-label text-right"
                >Out数据结点Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblOutDataNodeId_d"
                name="lblOutDataNodeId_d"
                class="text-primary"
                style="width: 400px"
              >
                {{ outDataNodeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnOutDataNodeName_d"
                name="spnOutDataNodeName_d"
                CssClass="col-form-label text-right"
                >Out结点</span
              >
            </td>
            <td class="text-left">
              <label id="lblOutDataNodeName_d" name="lblOutDataNodeName_d" class="text-primary"
                >{{ outDataNodeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnAssociationMappingName_d"
                name="spnAssociationMappingName_d"
                CssClass="col-form-label text-right"
                >关系映射</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblAssociationMappingName_d"
                name="lblAssociationMappingName_d"
                class="text-primary"
                >{{ associationMappingName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFuncMapModeName_d"
                name="spnFuncMapModeName_d"
                CssClass="col-form-label text-right"
                >映射模式</span
              >
            </td>
            <td class="text-left">
              <label id="lblFuncMapModeName_d" name="lblFuncMapModeName_d" class="text-primary"
                >{{ funcMapModeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnTabId_d" name="spnTabId_d" CssClass="col-form-label text-right"
                >表ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblTabId_d" name="lblTabId_d" class="text-primary" style="width: 400px">
                {{ tabId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDnFunctionId_d"
                name="spnDnFunctionId_d"
                CssClass="col-form-label text-right"
                >DN函数Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDnFunctionId_d"
                name="lblDnFunctionId_d"
                class="text-primary"
                style="width: 400px"
              >
                {{ dnFunctionId }}
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
              <label id="lblPrjId_d" name="lblPrjId_d" class="text-primary" style="width: 400px">
                {{ prjId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">说明</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 400px">
                {{ memo }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelDnFuncMap" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import DnFuncMap_DetailEx from '@/views/AIModule/DnFuncMap_DetailEx';
  import { clsDnFuncMapENEx } from '@/ts/L0Entity/AIModule/clsDnFuncMapENEx';
  export default defineComponent({
    name: 'DnFuncMapDetail',
    components: {
      // 组件注册
    },
    setup() {
      const inDataNodeId = ref(0);
      const inDataNodeName = ref('');
      const outDataNodeId = ref(0);
      const outDataNodeName = ref('');
      const associationMappingName = ref('');
      const funcMapModeName = ref('');
      const tabId = ref('');
      const dnFunctionId = ref('');
      const prjId = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDnFuncMapEN">表实体类对象</param>
       **/
      async function ShowDataFromDnFuncMapObj(pobjDnFuncMapENEx: clsDnFuncMapENEx) {
        inDataNodeId.value = pobjDnFuncMapENEx.inDataNodeId; // In数据结点Id
        inDataNodeName.value = pobjDnFuncMapENEx.inDataNodeName; // In结点
        outDataNodeId.value = pobjDnFuncMapENEx.outDataNodeId; // Out数据结点Id
        outDataNodeName.value = pobjDnFuncMapENEx.outDataNodeName; // Out结点
        associationMappingName.value = pobjDnFuncMapENEx.associationMappingName; // 关系映射
        funcMapModeName.value = pobjDnFuncMapENEx.funcMapModeName; // 映射模式
        tabId.value = pobjDnFuncMapENEx.tabId; // 表ID
        dnFunctionId.value = pobjDnFuncMapENEx.dnFunctionId; // DN函数Id
        prjId.value = pobjDnFuncMapENEx.prjId; // 工程ID
        updDate.value = pobjDnFuncMapENEx.updDate; // 修改日期
        updUser.value = pobjDnFuncMapENEx.updUser; // 修改者
        memo.value = pobjDnFuncMapENEx.memo; // 说明
      }
      const strTitle = ref('结点函数映射详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelDnFuncMap':
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
          case 'btnCancelDnFuncMap':
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
        ShowDataFromDnFuncMapObj,
        inDataNodeId,
        inDataNodeName,
        outDataNodeId,
        outDataNodeName,
        associationMappingName,
        funcMapModeName,
        tabId,
        dnFunctionId,
        prjId,
        updDate,
        updUser,
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
      btnDnFuncMap_Detail_Click(strCommandName: string, strKeyId: string) {
        DnFuncMap_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
