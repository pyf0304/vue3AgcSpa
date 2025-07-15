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
              <span id="spnFldName_d" name="spnFldName_d" CssClass="col-form-label text-right"
                >字段名</span
              >
            </td>
            <td class="text-left">
              <label id="lblFldName_d" name="lblFldName_d" class="text-primary" style="width: 150px"
                >{{ fldName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnRegionId_d" name="spnRegionId_d" CssClass="col-form-label text-right"
                >表名</span
              >
            </td>
            <td class="text-left">
              <label id="lblRegionId_d" name="lblRegionId_d" class="text-primary">
                {{ regionId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnLabelCaption_d"
                name="spnLabelCaption_d"
                CssClass="col-form-label text-right"
                >标签标题</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblLabelCaption_d"
                name="lblLabelCaption_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ labelCaption }}
              </label>
            </td>
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
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnCtlCnName_d" name="spnCtlCnName_d" CssClass="col-form-label text-right"
                >控件类型中文名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCtlCnName_d"
                name="lblCtlCnName_d"
                class="text-primary"
                style="width: 150px"
                >{{ ctlCnName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnCtlTypeAbbr_d"
                name="spnCtlTypeAbbr_d"
                CssClass="col-form-label text-right"
                >控件类型缩写</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCtlTypeAbbr_d"
                name="lblCtlTypeAbbr_d"
                class="text-primary"
                style="width: 150px"
                >{{ ctlTypeAbbr }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnColSpan_d" name="spnColSpan_d" CssClass="col-form-label text-right"
                >跨列数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblColSpan_d"
                name="lblColSpan_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ colSpan }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnColIndex_d" name="spnColIndex_d" CssClass="col-form-label text-right"
                >列序号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblColIndex_d"
                name="lblColIndex_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ colIndex }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnWidth_d" name="spnWidth_d" CssClass="col-form-label text-right">宽</span>
            </td>
            <td class="text-left">
              <label id="lblWidth_d" name="lblWidth_d" class="text-primary" style="width: 150px">
                {{ width }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnIsMultiRow_d" name="spnIsMultiRow_d" CssClass="col-form-label text-right"
                >是否多行</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsMultiRow_d"
                name="lblIsMultiRow_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isMultiRow }}
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
          <tr>
            <td class="text-right">
              <span id="spnVarId_d" name="spnVarId_d" CssClass="col-form-label text-right"
                >变量Id</span
              >
            </td>
            <td class="text-left">
              <label id="lblVarId_d" name="lblVarId_d" class="text-primary" style="width: 150px">
                {{ varId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnTabName_d" name="spnTabName_d" CssClass="col-form-label text-right"
                >表名</span
              >
            </td>
            <td class="text-left">
              <label id="lblTabName_d" name="lblTabName_d" class="text-primary" style="width: 100px"
                >{{ tabName }}
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
      <a-button id="btnCancelDetailRegionFlds" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import DetailRegionFlds_DetailEx from '@/views/RegionManage/DetailRegionFlds_DetailEx';
  import { clsDetailRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsENEx';
  export default defineComponent({
    name: 'DetailRegionFldsDetail',
    components: {
      // 组件注册
    },
    setup() {
      const fldName = ref('');
      const regionId = ref('');
      const labelCaption = ref('');
      const ctlTypeName = ref('');
      const ctlCnName = ref('');
      const ctlTypeAbbr = ref('');
      const colSpan = ref(0);
      const colIndex = ref(0);
      const width = ref(0);
      const isMultiRow = ref('0');
      const seqNum = ref(0);
      const inUse = ref('0');
      const varId = ref('');
      const tabName = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDetailRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromDetailRegionFldsObj(
        pobjDetailRegionFldsENEx: clsDetailRegionFldsENEx,
      ) {
        fldName.value = pobjDetailRegionFldsENEx.fldName; // 字段名
        regionId.value = pobjDetailRegionFldsENEx.regionId; // 表名
        labelCaption.value = pobjDetailRegionFldsENEx.labelCaption; // 标签标题
        ctlTypeName.value = pobjDetailRegionFldsENEx.ctlTypeName; // 控件类型
        ctlCnName.value = pobjDetailRegionFldsENEx.ctlCnName; // 控件类型中文名
        ctlTypeAbbr.value = pobjDetailRegionFldsENEx.ctlTypeAbbr; // 控件类型缩写
        colSpan.value = pobjDetailRegionFldsENEx.colSpan; // 跨列数
        colIndex.value = pobjDetailRegionFldsENEx.colIndex; // 列序号
        width.value = pobjDetailRegionFldsENEx.width; // 宽
        isMultiRow.value =
          pobjDetailRegionFldsENEx.isMultiRow !== null
            ? pobjDetailRegionFldsENEx.isMultiRow.toString()
            : ''; // 是否多行
        seqNum.value = pobjDetailRegionFldsENEx.seqNum; // 字段序号
        inUse.value =
          pobjDetailRegionFldsENEx.inUse !== null ? pobjDetailRegionFldsENEx.inUse.toString() : ''; // 是否在用
        varId.value = pobjDetailRegionFldsENEx.varId; // 变量Id
        tabName.value = pobjDetailRegionFldsENEx.tabName; // 表名
        memo.value = pobjDetailRegionFldsENEx.memo; // 说明
      }
      const strTitle = ref('详细区域字段详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelDetailRegionFlds':
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
          case 'btnCancelDetailRegionFlds':
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
        ShowDataFromDetailRegionFldsObj,
        fldName,
        regionId,
        labelCaption,
        ctlTypeName,
        ctlCnName,
        ctlTypeAbbr,
        colSpan,
        colIndex,
        width,
        isMultiRow,
        seqNum,
        inUse,
        varId,
        tabName,
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
      btnDetailRegionFlds_Detail_Click(strCommandName: string, strKeyId: string) {
        DetailRegionFlds_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
