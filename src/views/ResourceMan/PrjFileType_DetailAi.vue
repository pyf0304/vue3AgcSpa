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
                id="spnPrjFileTypeName_d"
                name="spnPrjFileTypeName_d"
                CssClass="col-form-label text-right"
                >工程文件类型名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrjFileTypeName_d"
                name="lblPrjFileTypeName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ prjFileTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnPrjFileTypeENName_d"
                name="spnPrjFileTypeENName_d"
                CssClass="col-form-label text-right"
                >工程文件类型英文名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrjFileTypeENName_d"
                name="lblPrjFileTypeENName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ prjFileTypeENName }}
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
      <a-button id="btnCancelPrjFileType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { clsPrjFileTypeENEx } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeENEx';
  export default defineComponent({
    name: 'PrjFileTypeDetailAi',

    components: {
      // 组件注册
    },

    setup() {
      const strTitle = ref('工程文件类型详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const prjFileTypeName = ref('');
      const prjFileTypeENName = ref('');
      const inUse = ref('0');
      const orderNum = ref(0);
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_DetailAi4Html:Gen_Detail_setup_ShowDataFromObj)
       * @param pobjPrjFileTypeEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjFileTypeObj(pobjPrjFileTypeENEx: clsPrjFileTypeENEx) {
        prjFileTypeName.value = pobjPrjFileTypeENEx.prjFileTypeName; // 工程文件类型名
        prjFileTypeENName.value = pobjPrjFileTypeENEx.prjFileTypeENName; // 工程文件类型英文名
        inUse.value =
          pobjPrjFileTypeENEx.inUse !== null ? pobjPrjFileTypeENEx.inUse.toString() : ''; // 是否在用
        orderNum.value = pobjPrjFileTypeENEx.orderNum; // 序号
        memo.value = pobjPrjFileTypeENEx.memo; // 说明
      }

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_DetailAi4Html:Gen_Detail_Setup_ShowDialog)
       **/
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

      /**
       * 隐藏对话框
       * (AutoGCLib.Vue_ViewScript_DetailAi4Html:Gen_Detail_Setup_HideDialog)
       **/
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
        ShowDataFromPrjFileTypeObj,
        prjFileTypeName,
        prjFileTypeENName,
        inUse,
        orderNum,
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
