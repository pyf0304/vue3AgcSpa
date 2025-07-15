<template>
  <div>
    <template v-if="isDialog">
      <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
        <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
          <!-- 详细信息层 -->

          <table
            id="tabEdit"
            style="width: 600px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr>
              <td class="text-right">
                <span
                  id="spnTabMainTypeName_d"
                  name="spnTabMainTypeName_d"
                  CssClass="col-form-label text-right"
                  >表主类型</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblTabMainTypeName_d"
                  name="lblTabMainTypeName_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnFuncModuleName_d"
                  name="spnFuncModuleName_d"
                  CssClass="col-form-label text-right"
                  >功能模块</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblFuncModuleName_d"
                  name="lblFuncModuleName_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnSqlDsTypeName_d"
                  name="spnSqlDsTypeName_d"
                  CssClass="col-form-label text-right"
                  >数据源类型</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblSqlDsTypeName_d"
                  name="lblSqlDsTypeName_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnTabStateName_d"
                  name="spnTabStateName_d"
                  CssClass="col-form-label text-right"
                  >表状态</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblTabStateName_d"
                  name="lblTabStateName_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnTabName_d" name="spnTabName_d" CssClass="col-form-label text-right"
                  >表名</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblTabName_d"
                  name="lblTabName_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnPrjName_d" name="spnPrjName_d" CssClass="col-form-label text-right"
                  >工程</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblPrjName_d"
                  name="lblPrjName_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnTabCnName_d" name="spnTabCnName_d" CssClass="col-form-label text-right"
                  >表中文名</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblTabCnName_d"
                  name="lblTabCnName_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnIsReleToSqlTab_d"
                  name="spnIsReleToSqlTab_d"
                  CssClass="col-form-label text-right"
                  >是否与SQL表相关</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblIsReleToSqlTab_d"
                  name="lblIsReleToSqlTab_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnRelaTabId4View_d"
                  name="spnRelaTabId4View_d"
                  CssClass="col-form-label text-right"
                  >视图的相关表ID</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblRelaTabId4View_d"
                  name="lblRelaTabId4View_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnParentClass_d"
                  name="spnParentClass_d"
                  CssClass="col-form-label text-right"
                  >父类</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblParentClass_d"
                  name="lblParentClass_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnIsUseCache_d"
                  name="spnIsUseCache_d"
                  CssClass="col-form-label text-right"
                  >是否使用Cache</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblIsUseCache_d"
                  name="lblIsUseCache_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnCacheClassifyField_d"
                  name="spnCacheClassifyField_d"
                  CssClass="col-form-label text-right"
                  >缓存分类字段</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblCacheClassifyField_d"
                  name="lblCacheClassifyField_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnCacheModeId_d"
                  name="spnCacheModeId_d"
                  CssClass="col-form-label text-right"
                  >缓存方式Id</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblCacheModeId_d"
                  name="lblCacheModeId_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right"
                  >说明</span
                >
              </td>
              <td class="text-left">
                <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnCacheClassifyField2_d"
                  name="spnCacheClassifyField2_d"
                  CssClass="col-form-label text-right"
                  >缓存分类字段2</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblCacheClassifyField2_d"
                  name="lblCacheClassifyField2_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnIsRefresh4RelaView_d"
                  name="spnIsRefresh4RelaView_d"
                  CssClass="col-form-label text-right"
                  >是否刷新相关视图</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblIsRefresh4RelaView_d"
                  name="lblIsRefresh4RelaView_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span
                  id="spnTabTypeName_d"
                  name="spnTabTypeName_d"
                  CssClass="col-form-label text-right"
                  >表类型</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblTabTypeName_d"
                  name="lblTabTypeName_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnKeyword_d" name="spnKeyword_d" CssClass="col-form-label text-right"
                  >关键字</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblKeyword_d"
                  name="lblKeyword_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnFldNum_d" name="spnFldNum_d" CssClass="col-form-label text-right"
                  >字段数</span
                >
              </td>
              <td class="text-left">
                <label
                  id="lblFldNum_d"
                  name="lblFldNum_d"
                  class="text-primary"
                  style="width: 150px"
                >
                </label>
              </td>
            </tr>
          </table>
        </div>
        <template #footer>
          <a-button id="btnCancelPrjTab" @click="dialogVisible = false">{{
            strCancelButtonText
          }}</a-button>
        </template>
      </a-modal>
    </template>
    <template v-else>
      <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
        <table
          id="tabEdit"
          style="width: 600px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td class="text-right">
              <span
                id="spnTabMainTypeName_d"
                name="spnTabMainTypeName_d"
                CssClass="col-form-label text-right"
                >表主类型</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTabMainTypeName_d"
                name="lblTabMainTypeName_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnFuncModuleName_d"
                name="spnFuncModuleName_d"
                CssClass="col-form-label text-right"
                >功能模块</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFuncModuleName_d"
                name="lblFuncModuleName_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnSqlDsTypeName_d"
                name="spnSqlDsTypeName_d"
                CssClass="col-form-label text-right"
                >数据源类型</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblSqlDsTypeName_d"
                name="lblSqlDsTypeName_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnTabStateName_d"
                name="spnTabStateName_d"
                CssClass="col-form-label text-right"
                >表状态</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTabStateName_d"
                name="lblTabStateName_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnTabName_d" name="spnTabName_d" CssClass="col-form-label text-right"
                >表名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTabName_d"
                name="lblTabName_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnPrjName_d" name="spnPrjName_d" CssClass="col-form-label text-right"
                >工程</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPrjName_d"
                name="lblPrjName_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnTabCnName_d" name="spnTabCnName_d" CssClass="col-form-label text-right"
                >表中文名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTabCnName_d"
                name="lblTabCnName_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIsReleToSqlTab_d"
                name="spnIsReleToSqlTab_d"
                CssClass="col-form-label text-right"
                >是否与SQL表相关</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsReleToSqlTab_d"
                name="lblIsReleToSqlTab_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnRelaTabId4View_d"
                name="spnRelaTabId4View_d"
                CssClass="col-form-label text-right"
                >视图相关表</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRelaTabName4View_d"
                name="lblRelaTabName4View_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnParentClass_d"
                name="spnParentClass_d"
                CssClass="col-form-label text-right"
                >父类</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblParentClass_d"
                name="lblParentClass_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsUseCache_d" name="spnIsUseCache_d" CssClass="col-form-label text-right"
                >是否使用Cache</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsUseCache_d"
                name="lblIsUseCache_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCacheClassifyField_d"
                name="spnCacheClassifyField_d"
                CssClass="col-form-label text-right"
                >缓存分类字段</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCacheClassifyField_d"
                name="lblCacheClassifyField_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCacheModeId_d"
                name="spnCacheModeId_d"
                CssClass="col-form-label text-right"
                >缓存方式Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCacheModeId_d"
                name="lblCacheModeId_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">说明</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCacheClassifyField2_d"
                name="spnCacheClassifyField2_d"
                CssClass="col-form-label text-right"
                >缓存分类字段2</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCacheClassifyField2_d"
                name="lblCacheClassifyField2_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIsRefresh4RelaView_d"
                name="spnIsRefresh4RelaView_d"
                CssClass="col-form-label text-right"
                >是否刷新相关视图</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsRefresh4RelaView_d"
                name="lblIsRefresh4RelaView_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnTabTypeName_d"
                name="spnTabTypeName_d"
                CssClass="col-form-label text-right"
                >表类型</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblTabTypeName_d"
                name="lblTabTypeName_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnKeyword_d" name="spnKeyword_d" CssClass="col-form-label text-right"
                >关键字</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblKeyword_d"
                name="lblKeyword_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFldNum_d" name="spnFldNum_d" CssClass="col-form-label text-right"
                >字段数</span
              >
            </td>
            <td class="text-left">
              <label id="lblFldNum_d" name="lblFldNum_d" class="text-primary" style="width: 150px">
              </label>
            </td>
          </tr>
        </table>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import PrjTab_DetailEx from '@/views/Table_Field/PrjTab_DetailEx';
  export default defineComponent({
    name: 'PrjTabDetail',
    components: {
      // 组件注册
    },
    props: {
      isDialog: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const strTitle = ref('工程表详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPrjTab':
            strCancelButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPrjTab':
            return strCancelButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
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
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
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
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnPrjTab_Detail_Click(strCommandName: string, strKeyId: string) {
        PrjTab_DetailEx.btnDetail_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
