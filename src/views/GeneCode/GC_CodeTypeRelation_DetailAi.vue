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
                id="spnParentCodeTypeId_d"
                name="spnParentCodeTypeId_d"
                CssClass="col-form-label text-right"
                >父代码类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblParentCodeTypeId_d"
                name="lblParentCodeTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ parentCodeTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnParentCodeTypeName_d"
                name="spnParentCodeTypeName_d"
                CssClass="col-form-label text-right"
                >父代码类型名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblParentCodeTypeName_d"
                name="lblParentCodeTypeName_d"
                class="text-primary"
                >{{ parentCodeTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnChildCodeTypeId_d"
                name="spnChildCodeTypeId_d"
                CssClass="col-form-label text-right"
                >子代码类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblChildCodeTypeId_d"
                name="lblChildCodeTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ childCodeTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnChildCodeTypeName_d"
                name="spnChildCodeTypeName_d"
                CssClass="col-form-label text-right"
                >子代码类型名</span
              >
            </td>
            <td class="text-left">
              <label id="lblChildCodeTypeName_d" name="lblChildCodeTypeName_d" class="text-primary"
                >{{ childCodeTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCtRelationTypeId_d"
                name="spnCtRelationTypeId_d"
                CssClass="col-form-label text-right"
                >关系类型Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCtRelationTypeId_d"
                name="lblCtRelationTypeId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ ctRelationTypeId }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnRelationTypeName_d"
                name="spnRelationTypeName_d"
                CssClass="col-form-label text-right"
                >关系类型名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRelationTypeName_d"
                name="lblRelationTypeName_d"
                class="text-primary"
                style="width: 100px"
                >{{ relationTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnArrowType_d" name="spnArrowType_d" CssClass="col-form-label text-right"
                >箭头类型</span
              >
            </td>
            <td class="text-left">
              <label id="lblArrowType_d" name="lblArrowType_d" class="text-primary"
                >{{ arrowType }}
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
            <td class="text-left" ColSpan="3">
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
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelGC_CodeTypeRelation" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { clsGC_CodeTypeRelationENEx } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationENEx';
  export default defineComponent({
    name: 'GCCodeTypeRelationDetailAi',

    components: {
      // 组件注册
    },

    setup() {
      const strTitle = ref('GC_代码类型关系详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const parentCodeTypeId = ref('');
      const parentCodeTypeName = ref('');
      const childCodeTypeId = ref('');
      const childCodeTypeName = ref('');
      const ctRelationTypeId = ref('');
      const relationTypeName = ref('');
      const arrowType = ref('');
      const description = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_DetailAi4Html:Gen_Detail_setup_ShowDataFromObj)
       * @param pobjGC_CodeTypeRelationEN">表实体类对象</param>
       **/
      async function ShowDataFromGC_CodeTypeRelationObj(
        pobjGC_CodeTypeRelationENEx: clsGC_CodeTypeRelationENEx,
      ) {
        parentCodeTypeId.value = pobjGC_CodeTypeRelationENEx.parentCodeTypeId; // 父代码类型Id
        parentCodeTypeName.value = pobjGC_CodeTypeRelationENEx.parentCodeTypeName; // 父代码类型名
        childCodeTypeId.value = pobjGC_CodeTypeRelationENEx.childCodeTypeId; // 子代码类型Id
        childCodeTypeName.value = pobjGC_CodeTypeRelationENEx.childCodeTypeName; // 子代码类型名
        ctRelationTypeId.value = pobjGC_CodeTypeRelationENEx.ctRelationTypeId; // 关系类型Id
        relationTypeName.value = pobjGC_CodeTypeRelationENEx.relationTypeName; // 关系类型名
        arrowType.value = pobjGC_CodeTypeRelationENEx.arrowType; // 箭头类型
        description.value = pobjGC_CodeTypeRelationENEx.description; // 描述
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
        ShowDataFromGC_CodeTypeRelationObj,
        parentCodeTypeId,
        parentCodeTypeName,
        childCodeTypeId,
        childCodeTypeName,
        ctRelationTypeId,
        relationTypeName,
        arrowType,
        description,
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
