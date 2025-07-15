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
                id="spnViewImplName_d"
                name="spnViewImplName_d"
                CssClass="col-form-label text-right"
                >界面实现</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblViewImplName_d"
                name="lblViewImplName_d"
                class="text-primary"
                style="width: 150px"
                >{{ viewImplName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnValueGivingModeName_d"
                name="spnValueGivingModeName_d"
                CssClass="col-form-label text-right"
                >给值方式</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblValueGivingModeName_d"
                name="lblValueGivingModeName_d"
                class="text-primary"
                style="width: 150px"
                >{{ valueGivingModeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCtlTypeName_d"
                name="spnCtlTypeName_d"
                CssClass="col-form-label text-right"
                >控件类型</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCtlTypeName_d"
                name="lblCtlTypeName_d"
                class="text-primary"
                style="width: 150px"
                >{{ ctlTypeName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnTabFeatureName_d"
                name="spnTabFeatureName_d"
                CssClass="col-form-label text-right"
                >表功能</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTabFeatureName_d"
                name="lblTabFeatureName_d"
                class="text-primary"
                style="width: 150px"
                >{{ tabFeatureName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnReleTabId_d" name="spnReleTabId_d" CssClass="col-form-label text-right"
                >表名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblReleTabId_d"
                name="lblReleTabId_d"
                class="text-primary"
                style="width: 100px"
              >
                {{ releTabId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFeatureName_d"
                name="spnFeatureName_d"
                CssClass="col-form-label text-right"
                >功能</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFeatureName_d"
                name="lblFeatureName_d"
                class="text-primary"
                style="width: 150px"
                >{{ featureName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnViewFeatureId_d"
                name="spnViewFeatureId_d"
                CssClass="col-form-label text-right"
                >界面功能Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblViewFeatureId_d"
                name="lblViewFeatureId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ viewFeatureId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnCheckTabFeature_d"
                name="spnCheckTabFeature_d"
                CssClass="col-form-label text-right"
                >检查表功能</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCheckTabFeature_d"
                name="lblCheckTabFeature_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ checkTabFeature }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFeatureDescription_d"
                name="spnFeatureDescription_d"
                CssClass="col-form-label text-right"
                >功能说明</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFeatureDescription_d"
                name="lblFeatureDescription_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ featureDescription }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnButtonName_d" name="spnButtonName_d" CssClass="col-form-label text-right"
                >按钮名称</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblButtonName_d"
                name="lblButtonName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ buttonName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnButtonName4Mvc_d"
                name="spnButtonName4Mvc_d"
                CssClass="col-form-label text-right"
                >按钮名称4Mvc</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblButtonName4Mvc_d"
                name="lblButtonName4Mvc_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ buttonName4Mvc }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnEventFuncName_d"
                name="spnEventFuncName_d"
                CssClass="col-form-label text-right"
                >事件函数名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblEventFuncName_d"
                name="lblEventFuncName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ eventFuncName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFuncName_d" name="spnFuncName_d" CssClass="col-form-label text-right"
                >函数名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncName_d"
                name="lblFuncName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnDefaultValue_d"
                name="spnDefaultValue_d"
                CssClass="col-form-label text-right"
                >缺省值</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDefaultValue_d"
                name="lblDefaultValue_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ defaultValue }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnKeyIdGetModeId_d"
                name="spnKeyIdGetModeId_d"
                CssClass="col-form-label text-right"
                >GC关键字获取方式Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblKeyIdGetModeId_d"
                name="lblKeyIdGetModeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ keyIdGetModeId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnText_d" name="spnText_d" CssClass="col-form-label text-right">文本</span>
            </td>
            <td class="text-left">
              <label id="lblText_d" name="lblText_d" class="text-primary" style="width: 150px">
                {{ text }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnGroupName_d" name="spnGroupName_d" CssClass="col-form-label text-right"
                >组名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblGroupName_d"
                name="lblGroupName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ groupName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnReleTabId_d" name="spnReleTabId_d" CssClass="col-form-label text-right"
                >相关表Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblReleTabId_d"
                name="lblReleTabId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ releTabId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnReleFldId_d" name="spnReleFldId_d" CssClass="col-form-label text-right"
                >相关字段Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblReleFldId_d"
                name="lblReleFldId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ releFldId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnWidth_d" name="spnWidth_d" CssClass="col-form-label text-right">宽</span>
            </td>
            <td class="text-left">
              <label id="lblWidth_d" name="lblWidth_d" class="text-primary" style="width: 150px">
                {{ width }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnSeqNum_d" name="spnSeqNum_d" CssClass="col-form-label text-right"
                >字段序号</span
              >
            </td>
            <td class="text-left">
              <label id="lblSeqNum_d" name="lblSeqNum_d" class="text-primary" style="width: 150px">
                {{ seqNum }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnCssClass_d" name="spnCssClass_d" CssClass="col-form-label text-right"
                >样式表</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCssClass_d"
                name="lblCssClass_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ cssClass }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnInUse_d" name="spnInUse_d" CssClass="col-form-label text-right"
                >是否在用</span
              >
            </td>
            <td class="text-left">
              <label id="lblInUse_d" name="lblInUse_d" class="text-primary" style="width: 150px">
                {{ inUse }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFeatureRegionFlds" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import FeatureRegionFlds_DetailEx from '@/views/RegionManage/FeatureRegionFlds_DetailEx';
  import { clsFeatureRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx';
  export default defineComponent({
    name: 'FeatureRegionFldsDetail',
    components: {
      // 组件注册
    },
    setup() {
      const viewImplName = ref('');
      const valueGivingModeName = ref('');
      const ctlTypeName = ref('');
      const tabFeatureName = ref('');
      const releTabId = ref('');
      const featureName = ref('');
      const viewFeatureId = ref('');
      const checkTabFeature = ref('');
      const featureDescription = ref('');
      const buttonName = ref('');
      const buttonName4Mvc = ref('');
      const eventFuncName = ref('');
      const funcName = ref('');
      const defaultValue = ref('');
      const keyIdGetModeId = ref('');
      const text = ref('');
      const groupName = ref('');

      const releFldId = ref('');
      const width = ref(0);
      const seqNum = ref(0);
      const cssClass = ref('');
      const inUse = ref('0');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFeatureRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromFeatureRegionFldsObj(
        pobjFeatureRegionFldsENEx: clsFeatureRegionFldsENEx,
      ) {
        viewImplName.value = pobjFeatureRegionFldsENEx.viewImplName; // 界面实现
        valueGivingModeName.value = pobjFeatureRegionFldsENEx.valueGivingModeName; // 给值方式
        ctlTypeName.value = pobjFeatureRegionFldsENEx.ctlTypeName; // 控件类型
        tabFeatureName.value = pobjFeatureRegionFldsENEx.tabFeatureName; // 表功能
        releTabId.value = pobjFeatureRegionFldsENEx.releTabId; // 表名
        featureName.value = pobjFeatureRegionFldsENEx.featureName; // 功能
        viewFeatureId.value = pobjFeatureRegionFldsENEx.viewFeatureId; // 界面功能Id
        checkTabFeature.value = pobjFeatureRegionFldsENEx.checkTabFeature; // 检查表功能
        featureDescription.value = pobjFeatureRegionFldsENEx.featureDescription; // 功能说明
        buttonName.value = pobjFeatureRegionFldsENEx.buttonName; // 按钮名称
        buttonName4Mvc.value = pobjFeatureRegionFldsENEx.buttonName4Mvc; // 按钮名称4Mvc
        eventFuncName.value = pobjFeatureRegionFldsENEx.eventFuncName; // 事件函数名
        funcName.value = pobjFeatureRegionFldsENEx.funcName; // 函数名
        defaultValue.value = pobjFeatureRegionFldsENEx.defaultValue; // 缺省值
        keyIdGetModeId.value = pobjFeatureRegionFldsENEx.keyIdGetModeId; // GC关键字获取方式Id
        text.value = pobjFeatureRegionFldsENEx.text; // 文本
        groupName.value = pobjFeatureRegionFldsENEx.groupName; // 组名
        releTabId.value = pobjFeatureRegionFldsENEx.releTabId; // 相关表Id
        releFldId.value = pobjFeatureRegionFldsENEx.releFldId; // 相关字段Id
        width.value = pobjFeatureRegionFldsENEx.width; // 宽
        seqNum.value = pobjFeatureRegionFldsENEx.seqNum; // 字段序号
        cssClass.value = pobjFeatureRegionFldsENEx.cssClass; // 样式表
        inUse.value =
          pobjFeatureRegionFldsENEx.inUse !== null
            ? pobjFeatureRegionFldsENEx.inUse.toString()
            : ''; // 是否在用
      }
      const strTitle = ref('功能区域字段详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFeatureRegionFlds':
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
          case 'btnCancelFeatureRegionFlds':
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
        ShowDataFromFeatureRegionFldsObj,
        viewImplName,
        valueGivingModeName,
        ctlTypeName,
        tabFeatureName,
        releTabId,
        featureName,
        viewFeatureId,
        checkTabFeature,
        featureDescription,
        buttonName,
        buttonName4Mvc,
        eventFuncName,
        funcName,
        defaultValue,
        keyIdGetModeId,
        text,
        groupName,

        releFldId,
        width,
        seqNum,
        cssClass,
        inUse,
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
      btnFeatureRegionFlds_Detail_Click(strCommandName: string, strKeyId: string) {
        FeatureRegionFlds_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
