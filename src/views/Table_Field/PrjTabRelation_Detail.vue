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
                id="spnRelationName_d"
                name="spnRelationName_d"
                CssClass="col-form-label text-right"
                >关系名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRelationName_d"
                name="lblRelationName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ relationName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnTabName_d" name="spnTabName_d" CssClass="col-form-label text-right"
                >表</span
              >
            </td>
            <td class="text-left">
              <label id="lblTabName_d" name="lblTabName_d" class="text-primary" style="width: 150px"
                >{{ tabName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnPrjTabRelaTypeId_d"
                name="spnPrjTabRelaTypeId_d"
                CssClass="col-form-label text-right"
                >表关系类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrjTabRelaTypeId_d"
                name="lblPrjTabRelaTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ prjTabRelaTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFldId4TabId_d"
                name="spnFldId4TabId_d"
                CssClass="col-form-label text-right"
                >当前表的关系字段Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldId4TabId_d"
                name="lblFldId4TabId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldId4TabId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFldId4RelaTabId_d"
                name="spnFldId4RelaTabId_d"
                CssClass="col-form-label text-right"
                >关系表的关系字段Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldId4RelaTabId_d"
                name="lblFldId4RelaTabId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldId4RelaTabId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnForeignKeyTabId_d"
                name="spnForeignKeyTabId_d"
                CssClass="col-form-label text-right"
                >外键表ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblForeignKeyTabId_d"
                name="lblForeignKeyTabId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ foreignKeyTabId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnForeignKeyFldId_d"
                name="spnForeignKeyFldId_d"
                CssClass="col-form-label text-right"
                >外键字段Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblForeignKeyFldId_d"
                name="lblForeignKeyFldId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ foreignKeyFldId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIsCheckCurrData_d"
                name="spnIsCheckCurrData_d"
                CssClass="col-form-label text-right"
                >是否检查当前数据</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsCheckCurrData_d"
                name="lblIsCheckCurrData_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isCheckCurrData }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIsCopyForceRela_d"
                name="spnIsCopyForceRela_d"
                CssClass="col-form-label text-right"
                >IsCopyForceRela</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsCopyForceRela_d"
                name="lblIsCopyForceRela_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isCopyForceRela }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIsUpdRelateFld_d"
                name="spnIsUpdRelateFld_d"
                CssClass="col-form-label text-right"
                >是否修改关系字段</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsUpdRelateFld_d"
                name="lblIsUpdRelateFld_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isUpdRelateFld }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIsDelRelateRec_d"
                name="spnIsDelRelateRec_d"
                CssClass="col-form-label text-right"
                >是否删除相关记录</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsDelRelateRec_d"
                name="lblIsDelRelateRec_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isDelRelateRec }}
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
          <tr>
            <td class="text-right">
              <span
                id="spnPrimaryKeyTabId_d"
                name="spnPrimaryKeyTabId_d"
                CssClass="col-form-label text-right"
                >PrimaryKeyTabId</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrimaryKeyTabId_d"
                name="lblPrimaryKeyTabId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ primaryKeyTabId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnPrimaryKeyFldId_d"
                name="spnPrimaryKeyFldId_d"
                CssClass="col-form-label text-right"
                >PrimaryKeyFldId</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrimaryKeyFldId_d"
                name="lblPrimaryKeyFldId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ primaryKeyFldId }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelPrjTabRelation" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import PrjTabRelation_DetailEx from '@/views/Table_Field/PrjTabRelation_DetailEx';
  import { clsPrjTabRelationENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationENEx';
  export default defineComponent({
    name: 'PrjTabRelationDetail',
    components: {
      // 组件注册
    },
    setup() {
      const relationName = ref('');
      const tabName = ref('');
      const prjTabRelaTypeId = ref('');
      const fldId4TabId = ref('');
      const fldId4RelaTabId = ref('');
      const foreignKeyTabId = ref('');
      const foreignKeyFldId = ref('');
      const isCheckCurrData = ref('0');
      const isCopyForceRela = ref('0');
      const isUpdRelateFld = ref('0');
      const isDelRelateRec = ref('0');
      const memo = ref('');
      const primaryKeyTabId = ref('');
      const primaryKeyFldId = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjPrjTabRelationEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjTabRelationObj(pobjPrjTabRelationENEx: clsPrjTabRelationENEx) {
        relationName.value = pobjPrjTabRelationENEx.relationName; // 关系名
        tabName.value = pobjPrjTabRelationENEx.tabName; // 表
        prjTabRelaTypeId.value = pobjPrjTabRelationENEx.prjTabRelaTypeId; // 表关系类型Id
        fldId4TabId.value = pobjPrjTabRelationENEx.fldId4TabId; // 当前表的关系字段Id
        fldId4RelaTabId.value = pobjPrjTabRelationENEx.fldId4RelaTabId; // 关系表的关系字段Id
        foreignKeyTabId.value = pobjPrjTabRelationENEx.foreignKeyTabId; // 外键表ID
        foreignKeyFldId.value = pobjPrjTabRelationENEx.foreignKeyFldId; // 外键字段Id
        isCheckCurrData.value =
          pobjPrjTabRelationENEx.isCheckCurrData !== null
            ? pobjPrjTabRelationENEx.isCheckCurrData.toString()
            : ''; // 是否检查当前数据
        isCopyForceRela.value =
          pobjPrjTabRelationENEx.isCopyForceRela !== null
            ? pobjPrjTabRelationENEx.isCopyForceRela.toString()
            : ''; // IsCopyForceRela
        isUpdRelateFld.value =
          pobjPrjTabRelationENEx.isUpdRelateFld !== null
            ? pobjPrjTabRelationENEx.isUpdRelateFld.toString()
            : ''; // 是否修改关系字段
        isDelRelateRec.value =
          pobjPrjTabRelationENEx.isDelRelateRec !== null
            ? pobjPrjTabRelationENEx.isDelRelateRec.toString()
            : ''; // 是否删除相关记录
        memo.value = pobjPrjTabRelationENEx.memo; // 说明
        primaryKeyTabId.value = pobjPrjTabRelationENEx.primaryKeyTabId; // PrimaryKeyTabId
        primaryKeyFldId.value = pobjPrjTabRelationENEx.primaryKeyFldId; // PrimaryKeyFldId
      }
      const strTitle = ref('工程表关系详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPrjTabRelation':
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
          case 'btnCancelPrjTabRelation':
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
        ShowDataFromPrjTabRelationObj,
        relationName,
        tabName,
        prjTabRelaTypeId,
        fldId4TabId,
        fldId4RelaTabId,
        foreignKeyTabId,
        foreignKeyFldId,
        isCheckCurrData,
        isCopyForceRela,
        isUpdRelateFld,
        isDelRelateRec,
        memo,
        primaryKeyTabId,
        primaryKeyFldId,
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
      btnPrjTabRelation_Detail_Click(strCommandName: string, strKeyId: string) {
        PrjTabRelation_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
