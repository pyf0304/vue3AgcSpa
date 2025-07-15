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
                id="spnFuncId4Code_d"
                name="spnFuncId4Code_d"
                CssClass="col-form-label text-right"
                >函数Id4Code</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncId4Code_d"
                name="lblFuncId4Code_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcId4Code }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFuncName4GC_d"
                name="spnFuncName4GC_d"
                CssClass="col-form-label text-right"
                >函数名4生成代码</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncName4GC_d"
                name="lblFuncName4GC_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcName4GC }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFuncCHName4GC_d"
                name="spnFuncCHName4GC_d"
                CssClass="col-form-label text-right"
                >函数中文名4生成代码</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncCHName4GC_d"
                name="lblFuncCHName4GC_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcCHName4GC }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFeatureId_d" name="spnFeatureId_d" CssClass="col-form-label text-right"
                >功能Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFeatureId_d"
                name="lblFeatureId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ featureId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnProgLangTypeId_d"
                name="spnProgLangTypeId_d"
                CssClass="col-form-label text-right"
                >编程语言类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblProgLangTypeId_d"
                name="lblProgLangTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ progLangTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFuncCodeTypeId_d"
                name="spnFuncCodeTypeId_d"
                CssClass="col-form-label text-right"
                >函数代码类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncCodeTypeId_d"
                name="lblFuncCodeTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcCodeTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnSqlDsTypeId_d"
                name="spnSqlDsTypeId_d"
                CssClass="col-form-label text-right"
                >数据源类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSqlDsTypeId_d"
                name="lblSqlDsTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ sqlDsTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFuncGCTypeId_d"
                name="spnFuncGCTypeId_d"
                CssClass="col-form-label text-right"
                >函数生成代码类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncGCTypeId_d"
                name="lblFuncGCTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcGCTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnPrjId_d" name="spnPrjId_d" CssClass="col-form-label text-right"
                >工程Id</span
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
              <span
                id="spnReturnTypeId_d"
                name="spnReturnTypeId_d"
                CssClass="col-form-label text-right"
                >返回类型ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblReturnTypeId_d"
                name="lblReturnTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ returnTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnFuncTypeId_d" name="spnFuncTypeId_d" CssClass="col-form-label text-right"
                >函数类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncTypeId_d"
                name="lblFuncTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsTemplate_d" name="spnIsTemplate_d" CssClass="col-form-label text-right"
                >是否模板</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsTemplate_d"
                name="lblIsTemplate_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isTemplate }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFunctionSignature_d"
                name="spnFunctionSignature_d"
                CssClass="col-form-label text-right"
                >函数签名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFunctionSignature_d"
                name="lblFunctionSignature_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ functionSignature }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFuncCode_d" name="spnFuncCode_d" CssClass="col-form-label text-right"
                >函数代码</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncCode_d"
                name="lblFuncCode_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ funcCode }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnUserId_d" name="spnUserId_d" CssClass="col-form-label text-right"
                >用户Id</span
              >
            </td>
            <td class="text-left">
              <label id="lblUserId_d" name="lblUserId_d" class="text-primary" style="width: 150px">
                {{ userId }}
              </label>
            </td>
          </tr>
          <tr>
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
              <span
                id="spnPrimaryTypeIds_d"
                name="spnPrimaryTypeIds_d"
                CssClass="col-form-label text-right"
                >主键类型s</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrimaryTypeIds_d"
                name="lblPrimaryTypeIds_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ primaryTypeIds }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnCodeText_d" name="spnCodeText_d" CssClass="col-form-label text-right"
                >代码文本</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCodeText_d"
                name="lblCodeText_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ codeText }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnUsedTimes_d" name="spnUsedTimes_d" CssClass="col-form-label text-right"
                >使用次数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUsedTimes_d"
                name="lblUsedTimes_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ usedTimes }}
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
                id="spnParsedWords_d"
                name="spnParsedWords_d"
                CssClass="col-form-label text-right"
                >分析的词</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblParsedWords_d"
                name="lblParsedWords_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ parsedWords }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnParsedWordsExcluded_d"
                name="spnParsedWordsExcluded_d"
                CssClass="col-form-label text-right"
                >剔除后的词组</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblParsedWordsExcluded_d"
                name="lblParsedWordsExcluded_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ parsedWordsExcluded }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnWordVector_d" name="spnWordVector_d" CssClass="col-form-label text-right"
                >词向量</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblWordVector_d"
                name="lblWordVector_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ wordVector }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIsFuncTemplate_d"
                name="spnIsFuncTemplate_d"
                CssClass="col-form-label text-right"
                >是否函数模板</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsFuncTemplate_d"
                name="lblIsFuncTemplate_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isFuncTemplate }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFunction4GeneCode" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import Function4GeneCode_DetailEx from '@/views/PrjFunction/Function4GeneCode_DetailEx';
  import { clsFunction4GeneCodeENEx } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeENEx';
  export default defineComponent({
    name: 'Function4GeneCodeDetail',
    components: {
      // 组件注册
    },
    setup() {
      const funcName = ref('');
      const funcId4Code = ref('');
      const funcName4GC = ref('');
      const funcCHName4GC = ref('');
      const featureId = ref('');
      const progLangTypeId = ref('');
      const funcCodeTypeId = ref('');
      const sqlDsTypeId = ref('');
      const funcGCTypeId = ref('');
      const prjId = ref('');
      const returnTypeId = ref('');
      const funcTypeId = ref('');
      const isTemplate = ref('0');
      const functionSignature = ref('');
      const funcCode = ref('');
      const userId = ref('');
      const orderNum = ref(0);
      const inUse = ref('0');
      const primaryTypeIds = ref('');
      const codeText = ref('');
      const usedTimes = ref(0);
      const memo = ref('');
      const parsedWords = ref('');
      const parsedWordsExcluded = ref('');
      const wordVector = ref('');
      const isFuncTemplate = ref('0');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFunction4GeneCodeEN">表实体类对象</param>
       **/
      async function ShowDataFromFunction4GeneCodeObj(
        pobjFunction4GeneCodeENEx: clsFunction4GeneCodeENEx,
      ) {
        funcName.value = pobjFunction4GeneCodeENEx.funcName; // 函数名
        funcId4Code.value = pobjFunction4GeneCodeENEx.funcId4Code; // 函数Id4Code
        funcName4GC.value = pobjFunction4GeneCodeENEx.funcName4GC; // 函数名4生成代码
        funcCHName4GC.value = pobjFunction4GeneCodeENEx.funcCHName4GC; // 函数中文名4生成代码
        featureId.value = pobjFunction4GeneCodeENEx.featureId; // 功能Id
        progLangTypeId.value = pobjFunction4GeneCodeENEx.progLangTypeId; // 编程语言类型Id
        funcCodeTypeId.value = pobjFunction4GeneCodeENEx.funcCodeTypeId; // 函数代码类型Id
        sqlDsTypeId.value = pobjFunction4GeneCodeENEx.sqlDsTypeId; // 数据源类型Id
        funcGCTypeId.value = pobjFunction4GeneCodeENEx.funcGCTypeId; // 函数生成代码类型Id
        prjId.value = pobjFunction4GeneCodeENEx.prjId; // 工程Id
        returnTypeId.value = pobjFunction4GeneCodeENEx.returnTypeId; // 返回类型ID
        funcTypeId.value = pobjFunction4GeneCodeENEx.funcTypeId; // 函数类型Id
        isTemplate.value =
          pobjFunction4GeneCodeENEx.isTemplate !== null
            ? pobjFunction4GeneCodeENEx.isTemplate.toString()
            : ''; // 是否模板
        functionSignature.value = pobjFunction4GeneCodeENEx.functionSignature; // 函数签名
        funcCode.value = pobjFunction4GeneCodeENEx.funcCode; // 函数代码
        userId.value = pobjFunction4GeneCodeENEx.userId; // 用户Id
        orderNum.value = pobjFunction4GeneCodeENEx.orderNum; // 序号
        inUse.value =
          pobjFunction4GeneCodeENEx.inUse !== null
            ? pobjFunction4GeneCodeENEx.inUse.toString()
            : ''; // 是否在用
        primaryTypeIds.value = pobjFunction4GeneCodeENEx.primaryTypeIds; // 主键类型s
        codeText.value = pobjFunction4GeneCodeENEx.codeText; // 代码文本
        usedTimes.value = pobjFunction4GeneCodeENEx.usedTimes; // 使用次数
        memo.value = pobjFunction4GeneCodeENEx.memo; // 说明
        parsedWords.value = pobjFunction4GeneCodeENEx.parsedWords; // 分析的词
        parsedWordsExcluded.value = pobjFunction4GeneCodeENEx.parsedWordsExcluded; // 剔除后的词组
        wordVector.value = pobjFunction4GeneCodeENEx.wordVector; // 词向量
        isFuncTemplate.value =
          pobjFunction4GeneCodeENEx.isFuncTemplate !== null
            ? pobjFunction4GeneCodeENEx.isFuncTemplate.toString()
            : ''; // 是否函数模板
      }
      const strTitle = ref('函数4GeneCode详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFunction4GeneCode':
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
          case 'btnCancelFunction4GeneCode':
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
        ShowDataFromFunction4GeneCodeObj,
        funcName,
        funcId4Code,
        funcName4GC,
        funcCHName4GC,
        featureId,
        progLangTypeId,
        funcCodeTypeId,
        sqlDsTypeId,
        funcGCTypeId,
        prjId,
        returnTypeId,
        funcTypeId,
        isTemplate,
        functionSignature,
        funcCode,
        userId,
        orderNum,
        inUse,
        primaryTypeIds,
        codeText,
        usedTimes,
        memo,
        parsedWords,
        parsedWordsExcluded,
        wordVector,
        isFuncTemplate,
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
      btnFunction4GeneCode_Detail_Click(strCommandName: string, strKeyId: string) {
        Function4GeneCode_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
