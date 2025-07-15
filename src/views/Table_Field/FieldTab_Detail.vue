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
              <label
                id="lblFldName_d"
                name="lblFldName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnFldCnName_d" name="spnFldCnName_d" CssClass="col-form-label text-right"
                >字段中文详名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldCnName_d"
                name="lblFldCnName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldCnName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnCaption_d" name="spnCaption_d" CssClass="col-form-label text-right"
                >标题</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCaption_d"
                name="lblCaption_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ caption }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnFieldTypeId_d"
                name="spnFieldTypeId_d"
                CssClass="col-form-label text-right"
                >字段类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFieldTypeId_d"
                name="lblFieldTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fieldTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnDataTypeId_d" name="spnDataTypeId_d" CssClass="col-form-label text-right"
                >数据类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDataTypeId_d"
                name="lblDataTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dataTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnFldLength_d" name="spnFldLength_d" CssClass="col-form-label text-right"
                >字段长度</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldLength_d"
                name="lblFldLength_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldLength }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFldPrecision_d"
                name="spnFldPrecision_d"
                CssClass="col-form-label text-right"
                >精确度</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldPrecision_d"
                name="lblFldPrecision_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldPrecision }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnFldInfo_d" name="spnFldInfo_d" CssClass="col-form-label text-right"
                >字段信息</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldInfo_d"
                name="lblFldInfo_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldInfo }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsNull_d" name="spnIsNull_d" CssClass="col-form-label text-right"
                >是否可空</span
              >
            </td>
            <td class="text-left">
              <label id="lblIsNull_d" name="lblIsNull_d" class="text-primary" style="width: 150px">
                {{ isNull }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIsPrimaryKey_d"
                name="spnIsPrimaryKey_d"
                CssClass="col-form-label text-right"
                >是否主键</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsPrimaryKey_d"
                name="lblIsPrimaryKey_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isPrimaryKey }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsIdentity_d" name="spnIsIdentity_d" CssClass="col-form-label text-right"
                >是否Identity</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsIdentity_d"
                name="lblIsIdentity_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isIdentity }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnIsChecked_d" name="spnIsChecked_d" CssClass="col-form-label text-right"
                >是否核实</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsChecked_d"
                name="lblIsChecked_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isChecked }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsArchive_d" name="spnIsArchive_d" CssClass="col-form-label text-right"
                >是否存档</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsArchive_d"
                name="lblIsArchive_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isArchive }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnIsOnlyOne_d" name="spnIsOnlyOne_d" CssClass="col-form-label text-right"
                >是否唯一</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsOnlyOne_d"
                name="lblIsOnlyOne_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isOnlyOne }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMaxValue_d" name="spnMaxValue_d" CssClass="col-form-label text-right"
                >最大值</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMaxValue_d"
                name="lblMaxValue_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ maxValue }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnMinValue_d" name="spnMinValue_d" CssClass="col-form-label text-right"
                >最小值</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMinValue_d"
                name="lblMinValue_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ minValue }}
              </label>
            </td>
          </tr>
          <tr>
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
            <td class="text-right">
              <span id="spnFldStateId_d" name="spnFldStateId_d" CssClass="col-form-label text-right"
                >字段状态Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFldStateId_d"
                name="lblFldStateId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fldStateId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnHomologousFldId_d"
                name="spnHomologousFldId_d"
                CssClass="col-form-label text-right"
                >同源字段Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblHomologousFldId_d"
                name="lblHomologousFldId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ homologousFldId }}
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
              <span id="spnUpdUser_d" name="spnUpdUser_d" CssClass="col-form-label text-right"
                >修改者</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUpdUser_d"
                name="lblUpdUser_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ updUser }}
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
                id="spnFieldTypeName_d"
                name="spnFieldTypeName_d"
                CssClass="col-form-label text-right"
                >字段类型名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFieldTypeName_d"
                name="lblFieldTypeName_d"
                class="text-primary"
                style="width: 100px"
                >{{ fieldTypeName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIsNeedTransCode_d"
                name="spnIsNeedTransCode_d"
                CssClass="col-form-label text-right"
                >是否需要转换代码</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsNeedTransCode_d"
                name="lblIsNeedTransCode_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isNeedTransCode }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFieldTab" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import FieldTab_DetailEx from '@/views/Table_Field/FieldTab_DetailEx';
  import { clsFieldTabENEx } from '@/ts/L0Entity/Table_Field/clsFieldTabENEx';
  export default defineComponent({
    name: 'FieldTabDetail',
    components: {
      // 组件注册
    },
    setup() {
      const fldName = ref('');
      const fldCnName = ref('');
      const caption = ref('');
      const fieldTypeId = ref('');
      const dataTypeId = ref('');
      const fldLength = ref(0);
      const fldPrecision = ref(0);
      const fldInfo = ref('');
      const isNull = ref('0');
      const isPrimaryKey = ref('0');
      const isIdentity = ref('0');
      const isChecked = ref('0');
      const isArchive = ref('0');
      const isOnlyOne = ref('0');
      const maxValue = ref('');
      const minValue = ref('');
      const defaultValue = ref('');
      const fldStateId = ref('');
      const homologousFldId = ref('');
      const prjId = ref('');
      const updUser = ref('');
      const memo = ref('');
      const fieldTypeName = ref('');
      const isNeedTransCode = ref('0');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFieldTabEN">表实体类对象</param>
       **/
      async function ShowDataFromFieldTabObj(pobjFieldTabENEx: clsFieldTabENEx) {
        fldName.value = pobjFieldTabENEx.fldName; // 字段名
        fldCnName.value = pobjFieldTabENEx.fldCnName; // 字段中文详名
        caption.value = pobjFieldTabENEx.caption; // 标题
        fieldTypeId.value = pobjFieldTabENEx.fieldTypeId; // 字段类型Id
        dataTypeId.value = pobjFieldTabENEx.dataTypeId; // 数据类型Id
        fldLength.value = pobjFieldTabENEx.fldLength; // 字段长度
        fldPrecision.value = pobjFieldTabENEx.fldPrecision; // 精确度
        fldInfo.value = pobjFieldTabENEx.fldInfo; // 字段信息
        isNull.value = pobjFieldTabENEx.isNull !== null ? pobjFieldTabENEx.isNull.toString() : ''; // 是否可空
        isPrimaryKey.value =
          pobjFieldTabENEx.isPrimaryKey !== null ? pobjFieldTabENEx.isPrimaryKey.toString() : ''; // 是否主键
        isIdentity.value =
          pobjFieldTabENEx.isIdentity !== null ? pobjFieldTabENEx.isIdentity.toString() : ''; // 是否Identity
        isChecked.value =
          pobjFieldTabENEx.isChecked !== null ? pobjFieldTabENEx.isChecked.toString() : ''; // 是否核实
        isArchive.value =
          pobjFieldTabENEx.isArchive !== null ? pobjFieldTabENEx.isArchive.toString() : ''; // 是否存档
        isOnlyOne.value =
          pobjFieldTabENEx.isOnlyOne !== null ? pobjFieldTabENEx.isOnlyOne.toString() : ''; // 是否唯一
        maxValue.value = pobjFieldTabENEx.maxValue; // 最大值
        minValue.value = pobjFieldTabENEx.minValue; // 最小值
        defaultValue.value = pobjFieldTabENEx.defaultValue; // 缺省值
        fldStateId.value = pobjFieldTabENEx.fldStateId; // 字段状态Id
        homologousFldId.value = pobjFieldTabENEx.homologousFldId; // 同源字段Id
        prjId.value = pobjFieldTabENEx.prjId; // 工程ID
        updUser.value = pobjFieldTabENEx.updUser; // 修改者
        memo.value = pobjFieldTabENEx.memo; // 说明
        fieldTypeName.value = pobjFieldTabENEx.fieldTypeName; // 字段类型名
        isNeedTransCode.value =
          pobjFieldTabENEx.isNeedTransCode !== null
            ? pobjFieldTabENEx.isNeedTransCode.toString()
            : ''; // 是否需要转换代码
      }
      const strTitle = ref('工程字段详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelFieldTab':
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
          case 'btnCancelFieldTab':
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
        ShowDataFromFieldTabObj,
        fldName,
        fldCnName,
        caption,
        fieldTypeId,
        dataTypeId,
        fldLength,
        fldPrecision,
        fldInfo,
        isNull,
        isPrimaryKey,
        isIdentity,
        isChecked,
        isArchive,
        isOnlyOne,
        maxValue,
        minValue,
        defaultValue,
        fldStateId,
        homologousFldId,
        prjId,
        updUser,
        memo,
        fieldTypeName,
        isNeedTransCode,
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
      btnFieldTab_Detail_Click(strCommandName: string, strKeyId: string) {
        FieldTab_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
