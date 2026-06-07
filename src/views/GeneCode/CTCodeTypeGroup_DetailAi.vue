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
                id="spnApplicationTypeName_d"
                name="spnApplicationTypeName_d"
                CssClass="col-form-label text-right"
                >应用类型</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblApplicationTypeName_d"
                name="lblApplicationTypeName_d"
                class="text-primary"
                style="width: 100px"
                >{{ applicationTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnCtGroupId_d" name="spnCtGroupId_d" CssClass="col-form-label text-right"
                >Ct组Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCtGroupId_d"
                name="lblCtGroupId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ ctGroupId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnGroupName_d" name="spnGroupName_d" CssClass="col-form-label text-right"
                >组名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblGroupName_d"
                name="lblGroupName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ groupName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnGroupENName_d"
                name="spnGroupENName_d"
                CssClass="col-form-label text-right"
                >组英文名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblGroupENName_d"
                name="lblGroupENName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ groupENName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDescription_d"
                name="spnDescription_d"
                CssClass="col-form-label text-right"
                >描述</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDescription_d"
                name="lblDescription_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ description }}
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
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelCTCodeTypeGroup" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { clsCTCodeTypeGroupENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupENEx';
  export default defineComponent({
    name: 'CTCodeTypeGroupDetailAi',

    components: {
      // 组件注册
    },

    setup() {
      const strTitle = ref('CTCodeTypeGroup详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const applicationTypeName = ref('');
      const ctGroupId = ref('');
      const groupName = ref('');
      const groupENName = ref('');
      const description = ref('');
      const orderNum = ref(0);
      const inUse = ref('0');
      const updDate = ref('');
      const updUser = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_DetailAi4Html:Gen_Detail_setup_ShowDataFromObj)
       * @param pobjCTCodeTypeGroupEN">表实体类对象</param>
       **/
      async function ShowDataFromCTCodeTypeGroupObj(
        pobjCTCodeTypeGroupENEx: clsCTCodeTypeGroupENEx,
      ) {
        applicationTypeName.value = pobjCTCodeTypeGroupENEx.applicationTypeName; // 应用类型
        ctGroupId.value = pobjCTCodeTypeGroupENEx.ctGroupId; // Ct组Id
        groupName.value = pobjCTCodeTypeGroupENEx.groupName; // 组名
        groupENName.value = pobjCTCodeTypeGroupENEx.groupENName; // 组英文名
        description.value = pobjCTCodeTypeGroupENEx.description; // 描述
        orderNum.value = pobjCTCodeTypeGroupENEx.orderNum; // 序号
        inUse.value =
          pobjCTCodeTypeGroupENEx.inUse !== null ? pobjCTCodeTypeGroupENEx.inUse.toString() : ''; // 是否在用
        updDate.value = pobjCTCodeTypeGroupENEx.updDate; // 修改日期
        updUser.value = pobjCTCodeTypeGroupENEx.updUser; // 修改者
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
        ShowDataFromCTCodeTypeGroupObj,
        applicationTypeName,
        ctGroupId,
        groupName,
        groupENName,
        description,
        orderNum,
        inUse,
        updDate,
        updUser,
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
