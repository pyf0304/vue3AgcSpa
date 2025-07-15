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
              <span id="spnConstId_d" name="spnConstId_d" CssClass="col-form-label text-right"
                >常量Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblConstId_d"
                name="lblConstId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ constId }}
              </label>
            </td>
          </tr>
          <tr>
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
              <span id="spnPrjName_d" name="spnPrjName_d" CssClass="col-form-label text-right"
                >工程名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblPrjName_d" name="lblPrjName_d" class="text-primary"
                >{{ prjName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDataTypeName_d"
                name="spnDataTypeName_d"
                CssClass="col-form-label text-right"
                >数据类型名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblDataTypeName_d" name="lblDataTypeName_d" class="text-primary"
                >{{ dataTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnCsType_d" name="spnCsType_d" CssClass="col-form-label text-right"
                >CS类型</span
              >
            </td>
            <td class="text-left">
              <label id="lblCsType_d" name="lblCsType_d" class="text-primary">{{ csType }} </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnTypeScriptType_d"
                name="spnTypeScriptType_d"
                CssClass="col-form-label text-right"
                >TypeScript类型</span
              >
            </td>
            <td class="text-left">
              <label id="lblTypeScriptType_d" name="lblTypeScriptType_d" class="text-primary"
                >{{ typeScriptType }}
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
              <label id="lblDataTypeId_d" name="lblDataTypeId_d" class="text-primary"
                >{{ dataTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnConstName_d" name="spnConstName_d" CssClass="col-form-label text-right"
                >常量名</span
              >
            </td>
            <td class="text-left">
              <label id="lblConstName_d" name="lblConstName_d" class="text-primary"
                >{{ constName }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelGCConstantPrjIdRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import GCConstantPrjIdRela_DetailEx from '@/views/GeneCode/GCConstantPrjIdRela_DetailEx';
  import { clsGCConstantPrjIdRelaENEx } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaENEx';
  export default defineComponent({
    name: 'GCConstantPrjIdRelaDetail',
    components: {
      // 组件注册
    },
    setup() {
      const constId = ref('');
      const prjId = ref('');
      const memo = ref('');
      const prjName = ref('');
      const dataTypeName = ref('');
      const csType = ref('');
      const typeScriptType = ref('');
      const dataTypeId = ref('');
      const constName = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjGCConstantPrjIdRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromGCConstantPrjIdRelaObj(
        pobjGCConstantPrjIdRelaENEx: clsGCConstantPrjIdRelaENEx,
      ) {
        constId.value = pobjGCConstantPrjIdRelaENEx.constId; // 常量Id
        prjId.value = pobjGCConstantPrjIdRelaENEx.prjId; // 工程Id
        memo.value = pobjGCConstantPrjIdRelaENEx.memo; // 说明
        prjName.value = pobjGCConstantPrjIdRelaENEx.prjName; // 工程名称
        dataTypeName.value = pobjGCConstantPrjIdRelaENEx.dataTypeName; // 数据类型名称
        csType.value = pobjGCConstantPrjIdRelaENEx.csType; // CS类型
        typeScriptType.value = pobjGCConstantPrjIdRelaENEx.typeScriptType; // TypeScript类型
        dataTypeId.value = pobjGCConstantPrjIdRelaENEx.dataTypeId; // 数据类型Id
        constName.value = pobjGCConstantPrjIdRelaENEx.constName; // 常量名
      }
      const strTitle = ref('GC常量工程关系详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');

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

        ShowDataFromGCConstantPrjIdRelaObj,
        constId,
        prjId,
        memo,
        prjName,
        dataTypeName,
        csType,
        typeScriptType,
        dataTypeId,
        constName,
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
      btnGCConstantPrjIdRela_Detail_Click(strCommandName: string, strKeyId: string) {
        GCConstantPrjIdRela_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
