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
              <span
                id="spnDataPropertyName_d"
                name="spnDataPropertyName_d"
                CssClass="col-form-label text-right"
                >数据属性名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDataPropertyName_d"
                name="lblDataPropertyName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dataPropertyName }}
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
              <span id="spnColCaption_d" name="spnColCaption_d" CssClass="col-form-label text-right"
                >列标题</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblColCaption_d"
                name="lblColCaption_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ colCaption }}
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
              <span
                id="spnIsDefaultSort_d"
                name="spnIsDefaultSort_d"
                CssClass="col-form-label text-right"
                >是否默认排序</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsDefaultSort_d"
                name="lblIsDefaultSort_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isDefaultSort }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsNeedSort_d" name="spnIsNeedSort_d" CssClass="col-form-label text-right"
                >是否需要排序</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsNeedSort_d"
                name="lblIsNeedSort_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isNeedSort }}
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
              <span id="spnFldId_d" name="spnFldId_d" CssClass="col-form-label text-right"
                >字段名</span
              >
            </td>
            <td class="text-left">
              <label id="lblFldId_d" name="lblFldId_d" class="text-primary"> {{ fldId }} </label>
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
              <span id="spnOutFldId_d" name="spnOutFldId_d" CssClass="col-form-label text-right"
                >Out字段名</span
              >
            </td>
            <td class="text-left">
              <label id="lblOutFldId_d" name="lblOutFldId_d" class="text-primary">
                {{ outFldId }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelExcelExportRegionFlds" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import ExcelExportRegionFlds_DetailEx from '@/views/RegionManage/ExcelExportRegionFlds_DetailEx';
  import { clsExcelExportRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsENEx';
  export default defineComponent({
    name: 'ExcelExportRegionFldsDetail',
    components: {
      // 组件注册
    },
    setup() {
      const fldName = ref('');
      const dataPropertyName = ref('');
      const seqNum = ref(0);
      const colCaption = ref('');
      const inUse = ref('0');
      const prjId = ref('');
      const memo = ref('');
      const isDefaultSort = ref('0');
      const isNeedSort = ref('0');
      const tabName = ref('');
      const fldId = ref('');
      const regionId = ref('');
      const outFldId = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjExcelExportRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromExcelExportRegionFldsObj(
        pobjExcelExportRegionFldsENEx: clsExcelExportRegionFldsENEx,
      ) {
        fldName.value = pobjExcelExportRegionFldsENEx.fldName; // 字段名
        dataPropertyName.value = pobjExcelExportRegionFldsENEx.dataPropertyName; // 数据属性名
        seqNum.value = pobjExcelExportRegionFldsENEx.seqNum; // 字段序号
        colCaption.value = pobjExcelExportRegionFldsENEx.colCaption; // 列标题
        inUse.value =
          pobjExcelExportRegionFldsENEx.inUse !== null
            ? pobjExcelExportRegionFldsENEx.inUse.toString()
            : ''; // 是否在用
        prjId.value = pobjExcelExportRegionFldsENEx.prjId; // 工程ID
        memo.value = pobjExcelExportRegionFldsENEx.memo; // 说明
        isDefaultSort.value =
          pobjExcelExportRegionFldsENEx.isDefaultSort !== null
            ? pobjExcelExportRegionFldsENEx.isDefaultSort.toString()
            : ''; // 是否默认排序
        isNeedSort.value =
          pobjExcelExportRegionFldsENEx.isNeedSort !== null
            ? pobjExcelExportRegionFldsENEx.isNeedSort.toString()
            : ''; // 是否需要排序
        tabName.value = pobjExcelExportRegionFldsENEx.tabName; // 表名
        fldId.value = pobjExcelExportRegionFldsENEx.fldId; // 字段名
        regionId.value = pobjExcelExportRegionFldsENEx.regionId; // 表名
        outFldId.value = pobjExcelExportRegionFldsENEx.outFldId; // Out字段名
      }
      const strTitle = ref('Excel导出区域字段详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelExcelExportRegionFlds':
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
          case 'btnCancelExcelExportRegionFlds':
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
        ShowDataFromExcelExportRegionFldsObj,
        fldName,
        dataPropertyName,
        seqNum,
        colCaption,
        inUse,
        prjId,
        memo,
        isDefaultSort,
        isNeedSort,
        tabName,
        fldId,
        regionId,
        outFldId,
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
      btnExcelExportRegionFlds_Detail_Click(strCommandName: string, strKeyId: string) {
        ExcelExportRegionFlds_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
