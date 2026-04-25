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
                id="spnPrjDataBaseId_d"
                name="spnPrjDataBaseId_d"
                CssClass="col-form-label text-right"
                >项目数据库Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrjDataBaseId_d"
                name="lblPrjDataBaseId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ prjDataBaseId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnPrjDataBaseName_d"
                name="spnPrjDataBaseName_d"
                CssClass="col-form-label text-right"
                >项目数据库名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrjDataBaseName_d"
                name="lblPrjDataBaseName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ prjDataBaseName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDataBaseName_d"
                name="spnDataBaseName_d"
                CssClass="col-form-label text-right"
                >数据库名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDataBaseName_d"
                name="lblDataBaseName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dataBaseName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnDatabaseOwner_d"
                name="spnDatabaseOwner_d"
                CssClass="col-form-label text-right"
                >数据库拥有者</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDatabaseOwner_d"
                name="lblDatabaseOwner_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ databaseOwner }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDataBasePwd_d"
                name="spnDataBasePwd_d"
                CssClass="col-form-label text-right"
                >数据库的用户口令</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDataBasePwd_d"
                name="lblDataBasePwd_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dataBasePwd }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnDataBaseUserId_d"
                name="spnDataBaseUserId_d"
                CssClass="col-form-label text-right"
                >数据库的用户ID</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDataBaseUserId_d"
                name="lblDataBaseUserId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dataBaseUserId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDataBaseTypeName_d"
                name="spnDataBaseTypeName_d"
                CssClass="col-form-label text-right"
                >数据库类型名</span
              >
            </td>
            <td class="text-left">
              <label id="lblDataBaseTypeName_d" name="lblDataBaseTypeName_d" class="text-primary"
                >{{ dataBaseTypeName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnUseStateName_d"
                name="spnUseStateName_d"
                CssClass="col-form-label text-right"
                >使用状态名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblUseStateName_d" name="lblUseStateName_d" class="text-primary"
                >{{ useStateName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIpAddress_d" name="spnIpAddress_d" CssClass="col-form-label text-right"
                >服务器</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIpAddress_d"
                name="lblIpAddress_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ ipAddress }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnSid_d" name="spnSid_d" CssClass="col-form-label text-right">SID</span>
            </td>
            <td class="text-left">
              <label id="lblSid_d" name="lblSid_d" class="text-primary" style="width: 150px">
                {{ sid }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnTableSpace_d" name="spnTableSpace_d" CssClass="col-form-label text-right"
                >表空间</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTableSpace_d"
                name="lblTableSpace_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ tableSpace }}
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
      <a-button id="btnCancelPrjDataBase" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import PrjDataBase_DetailEx from '@/views/PrjManage/PrjDataBase_DetailEx';
  import { clsPrjDataBaseENEx } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseENEx';
  export default defineComponent({
    name: 'PrjDataBaseDetail',

    components: {
      // 组件注册
    },

    setup() {
      const strTitle = ref('数据库对象详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const prjDataBaseId = ref('');
      const prjDataBaseName = ref('');
      const dataBaseName = ref('');
      const databaseOwner = ref('');
      const dataBasePwd = ref('');
      const dataBaseUserId = ref('');
      const dataBaseTypeName = ref('');
      const useStateName = ref('');
      const ipAddress = ref('');
      const sid = ref('');
      const tableSpace = ref('');
      const userId = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Detail_setup_ShowDataFromObj)
       * @param pobjPrjDataBaseEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjDataBaseObj(pobjPrjDataBaseENEx: clsPrjDataBaseENEx) {
        prjDataBaseId.value = pobjPrjDataBaseENEx.prjDataBaseId; // 项目数据库Id
        prjDataBaseName.value = pobjPrjDataBaseENEx.prjDataBaseName; // 项目数据库名
        dataBaseName.value = pobjPrjDataBaseENEx.dataBaseName; // 数据库名
        databaseOwner.value = pobjPrjDataBaseENEx.databaseOwner; // 数据库拥有者
        dataBasePwd.value = pobjPrjDataBaseENEx.dataBasePwd; // 数据库的用户口令
        dataBaseUserId.value = pobjPrjDataBaseENEx.dataBaseUserId; // 数据库的用户ID
        dataBaseTypeName.value = pobjPrjDataBaseENEx.dataBaseTypeName; // 数据库类型名
        useStateName.value = pobjPrjDataBaseENEx.useStateName; // 使用状态名称
        ipAddress.value = pobjPrjDataBaseENEx.ipAddress; // 服务器
        sid.value = pobjPrjDataBaseENEx.sid; // SID
        tableSpace.value = pobjPrjDataBaseENEx.tableSpace; // 表空间
        userId.value = pobjPrjDataBaseENEx.userId; // 用户Id
        memo.value = pobjPrjDataBaseENEx.memo; // 说明
      }

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Detail_Setup_ShowDialog)
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
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Detail_Setup_HideDialog)
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
        ShowDataFromPrjDataBaseObj,
        prjDataBaseId,
        prjDataBaseName,
        dataBaseName,
        databaseOwner,
        dataBasePwd,
        dataBaseUserId,
        dataBaseTypeName,
        useStateName,
        ipAddress,
        sid,
        tableSpace,
        userId,
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
      btnPrjDataBase_Detail_Click(strCommandName: string, strKeyId: string) {
        PrjDataBase_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
