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
              <label id="lblGroupName_d" name="lblGroupName_d" class="text-primary"
                >{{ groupName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnCodeTypeId_d" name="spnCodeTypeId_d" CssClass="col-form-label text-right"
                >代码类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCodeTypeId_d"
                name="lblCodeTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ codeTypeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCodeTypeName_d"
                name="spnCodeTypeName_d"
                CssClass="col-form-label text-right"
                >代码类型名</span
              >
            </td>
            <td class="text-left">
              <label id="lblCodeTypeName_d" name="lblCodeTypeName_d" class="text-primary"
                >{{ codeTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIsMainGroup_d"
                name="spnIsMainGroup_d"
                CssClass="col-form-label text-right"
                >IsMainGroup</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsMainGroup_d"
                name="lblIsMainGroup_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isMainGroup }}
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
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelCTCodeTypeGroupRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { clsCTCodeTypeGroupRelaENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaENEx';
  export default defineComponent({
    name: 'CTCodeTypeGroupRelaDetailAi',

    components: {
      // 组件注册
    },

    setup() {
      const strTitle = ref('CTCodeTypeGroupRela详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const ctGroupId = ref('');
      const groupName = ref('');
      const codeTypeId = ref('');
      const codeTypeName = ref('');
      const isMainGroup = ref('0');
      const orderNum = ref(0);

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_DetailAi4Html:Gen_Detail_setup_ShowDataFromObj)
       * @param pobjCTCodeTypeGroupRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromCTCodeTypeGroupRelaObj(
        pobjCTCodeTypeGroupRelaENEx: clsCTCodeTypeGroupRelaENEx,
      ) {
        ctGroupId.value = pobjCTCodeTypeGroupRelaENEx.ctGroupId; // Ct组Id
        groupName.value = pobjCTCodeTypeGroupRelaENEx.groupName; // 组名
        codeTypeId.value = pobjCTCodeTypeGroupRelaENEx.codeTypeId; // 代码类型Id
        codeTypeName.value = pobjCTCodeTypeGroupRelaENEx.codeTypeName; // 代码类型名
        isMainGroup.value =
          pobjCTCodeTypeGroupRelaENEx.isMainGroup !== null
            ? pobjCTCodeTypeGroupRelaENEx.isMainGroup.toString()
            : ''; // IsMainGroup
        orderNum.value = pobjCTCodeTypeGroupRelaENEx.orderNum; // 序号
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
        ShowDataFromCTCodeTypeGroupRelaObj,
        ctGroupId,
        groupName,
        codeTypeId,
        codeTypeName,
        isMainGroup,
        orderNum,
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
