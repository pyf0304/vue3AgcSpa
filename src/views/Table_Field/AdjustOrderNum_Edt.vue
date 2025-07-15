<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditDialog_AdjustOrderNum" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 333px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trClassificationFieldId">
          <td class="text-right">
            <label
              id="lblClassificationFieldId"
              class="col-form-label-sm text-right"
              style="width: 70px"
            >
              分类字段
            </label>
          </td>
          <td class="text-left" colSpan="3">
            <select
              id="ddlClassificationFieldId"
              v-model="classificationFieldId"
              class="form-control-sm"
              style="width: 230px"
              ><option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trOrderNumFieldId">
          <td class="text-right">
            <label id="lblOrderNumFieldId" class="col-form-label-sm text-right" style="width: 70px">
              序号字段
            </label>
          </td>
          <td class="text-left" colSpan="3">
            <select
              id="ddlOrderNumFieldId"
              v-model="orderNumFieldId"
              class="form-control-sm"
              style="width: 230px"
              ><option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>
      </table>
    </div>

    <template #footer>
      <a-button id="btnCancel_AdjustOrderNum" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmit_AdjustOrderNum"
        type="primary"
        @click="btnAdjustOrderNum_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

  import { AdjustOrderNum_EdtEx } from '@/views/Table_Field/AdjustOrderNum_EdtEx';
  import { refDivEdit } from '@/views/Table_Field/TabFeatureEditVueShare';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  export default defineComponent({
    name: 'AdjustOrderNumEdt',
    components: {
      // 组件注册
    },
    setup() {
      const orderNumFieldId = ref('');
      const classificationFieldId = ref(''); // 分类字段ID

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);

      onMounted(async () => {
        // await BindDdl4EditRegionInDiv();
        //this.myonload();
      });
      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strTabId = AdjustOrderNum_EdtEx.strTabId4AdjustOrderNum;
        if (IsNullOrEmpty(strTabId) == true) {
          const strMsg = Format(
            'AdjustOrderNum_EdtEx.strTabId4AdjustOrderNum为空，还没有被赋正确的值,请检查!',
          );
          throw strMsg;
        }

        // await this.SetDdl_OrderNumFieldIdInDiv(strTabId); //编辑区域
        //  await this.SetDdl_ClassificationFieldIdInDiv(strTabId); //编辑区域
        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(strTabId); //编辑区域
        orderNumFieldId.value = '0';
        classificationFieldId.value = '0';
        // public async B1indDdl4EditRegionInDiv() {
        // 在此处放置用户代码以初始化页面

        //await this.SetDdl_FldIdInDivEx(strTabId, strPrjId);//编辑区域
      }
      // async function SetDdl_ClassificationFieldIdInDiv(strTabId: string) {
      //   await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      //     divVarSet.refDivEdit,
      //     'ddlClassificationFieldId',
      //     strTabId,
      //   ); //编辑区域
      // }
      // async function SetDdl_OrderNumFieldIdInDiv(strTabId: string) {
      //   await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      //     divVarSet.refDivEdit,
      //     'ddlOrderNumFieldId',
      //     strTabId,
      //   ); //编辑区域
      // }
      const strTitle = ref('表功能编辑-排序功能');

      const strSubmitButtonText = ref('添加');
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
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      /**
       * 按钮单击,用于调用Js函数中btnEdit_Click
       */
      function btnAdjustOrderNum_Edit_Click(strCommandName, strKeyId) {
        AdjustOrderNum_EdtEx.btnEdit_Click(strCommandName, strKeyId);
      }

      /**
     * 提交编辑

     */
      function Submit_AdjustOrderNum(pstrOp: string) {
        alert(`提交${pstrOp}`);

        // const  objPage = new AdjustOrderNum_EdtEx('','');
        // objPage.btnSubmit_Click();
      }

      return {
        BindDdl4EditRegionInDiv,
        arrvFieldTab_Sim,
        orderNumFieldId,
        classificationFieldId,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,

        btnAdjustOrderNum_Edit_Click,
        Submit_AdjustOrderNum,
        refDivEdit,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
      //this.myonload();
    },
    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //TabFeature_EditEx.btnClick(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
