<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trRoleENName">
          <td class="text-right">
            <label
              id="lblRoleName"
              name="lblRoleName"
              class="col-form-label text-right"
              style="width: 90px"
              >角色名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRoleName"
              name="txtRoleName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblRoleENName"
              name="lblRoleENName"
              class="col-form-label text-right"
              style="width: 90px"
              >角色英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRoleENName"
              name="txtRoleENName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trQxPrjId">
          <td class="text-right">
            <label
              id="lblRoleIndex"
              name="lblRoleIndex"
              class="col-form-label text-right"
              style="width: 90px"
              >角色序号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRoleIndex"
              name="txtRoleIndex"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblQxPrjId"
              name="lblQxPrjId"
              class="col-form-label text-right"
              style="width: 90px"
              >项目Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlQxPrjId"
              name="ddlQxPrjId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsInUse" name="chkIsInUse" type="checkbox" Text="是否在使用" /><label
                for="chkIsInUse"
                >是否在使用</label
              ></span
            >
          </td>
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelQxRolesV2" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitQxRolesV2"
        type="primary"
        @click="btnQxRolesV2_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import QxRolesV2_EditEx from '@/views/UserManage_GP/QxRolesV2_EditEx';
  export default defineComponent({
    name: 'QxRolesV2Edit',
    components: {
      // 组件注册
    },
    setup() {
      const strCancelButtonText = ref('');
      const strSubmitButtonText = ref('');
      const strTitle = ref('角色V2编辑');
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
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strCancelButtonText,
        strSubmitButtonText,
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
        //QxRolesV2_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQxRolesV2_Edit_Click(strCommandName: string, strKeyId: string) {
        QxRolesV2_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
