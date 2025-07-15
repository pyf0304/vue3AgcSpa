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
              <span id="spnmId_d" name="spnmId_d" CssClass="col-form-label text-right">mId</span>
            </td>
            <td class="text-left">
              <label id="lblmId_d" name="lblmId_d" class="text-primary" style="width: 300px">
                {{ mId }}
              </label>
            </td>
          </tr>
          <tr>
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
              <span id="spnCacheKey_d" name="spnCacheKey_d" CssClass="col-form-label text-right"
                >缓存关键字</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCacheKey_d"
                name="lblCacheKey_d"
                class="text-primary"
                style="width: 300px"
              >
                {{ cacheKey }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnCacheSize_d" name="spnCacheSize_d" CssClass="col-form-label text-right"
                >缓存大小</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCacheSize_d"
                name="lblCacheSize_d"
                class="text-primary"
                style="width: 300px"
              >
                {{ cacheSize }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">说明</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 300px">
                {{ memo }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCacheModeId_d"
                name="spnCacheModeId_d"
                CssClass="col-form-label text-right"
                >缓存方式</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCacheModeId_d"
                name="lblCacheModeId_d"
                class="text-primary"
                style="width: 100px"
              >
                {{ cacheModeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCacheModeId_d"
                name="spnCacheModeId_d"
                CssClass="col-form-label text-right"
                >缓存方式英文名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCacheModeId_d"
                name="lblCacheModeId_d"
                class="text-primary"
                style="width: 100px"
              >
                {{ cacheModeId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCacheModeName_d"
                name="spnCacheModeName_d"
                CssClass="col-form-label text-right"
                >缓存方式名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCacheModeName_d"
                name="lblCacheModeName_d"
                class="text-primary"
                style="width: 100px"
                >{{ cacheModeName }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelCacheUseState" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import CacheUseState_DetailEx from '@/viewsShare/SystemSet/CacheUseState_DetailEx';
  import { clsCacheUseStateENEx } from '@/ts/L0Entity/SystemSet/clsCacheUseStateENEx';
  export default defineComponent({
    name: 'CacheUseStateDetail',
    components: {
      // 组件注册
    },
    setup() {
      const mId = ref(0);
      const userId = ref('');
      const cacheKey = ref('');
      const cacheSize = ref(0);
      const memo = ref('');
      const cacheModeId = ref('');

      const cacheModeName = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjCacheUseStateEN">表实体类对象</param>
       **/
      async function ShowDataFromCacheUseStateObj(pobjCacheUseStateENEx: clsCacheUseStateENEx) {
        userId.value = pobjCacheUseStateENEx.userId; // 用户Id
        cacheKey.value = pobjCacheUseStateENEx.cacheKey; // 缓存关键字
        cacheSize.value = pobjCacheUseStateENEx.cacheSize; // 缓存大小
        memo.value = pobjCacheUseStateENEx.memo; // 说明
        cacheModeId.value = pobjCacheUseStateENEx.cacheModeId; // 缓存方式
        cacheModeId.value = pobjCacheUseStateENEx.cacheModeId; // 缓存方式英文名
        cacheModeName.value = pobjCacheUseStateENEx.cacheModeName; // 缓存方式名
      }
      const strTitle = ref('缓存使用状态详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelCacheUseState':
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
          case 'btnCancelCacheUseState':
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
        ShowDataFromCacheUseStateObj,
        mId,
        userId,
        cacheKey,
        cacheSize,
        memo,
        cacheModeId,

        cacheModeName,
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
      btnCacheUseState_Detail_Click(strCommandName: string, strKeyId: string) {
        CacheUseState_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
