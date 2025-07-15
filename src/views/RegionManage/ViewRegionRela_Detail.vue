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
              <span id="spnRegionId_d" name="spnRegionId_d" CssClass="col-form-label text-right"
                >区域Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRegionId_d"
                name="lblRegionId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ regionId }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnViewId_d" name="spnViewId_d" CssClass="col-form-label text-right"
                >界面Id</span
              >
            </td>
            <td class="text-left">
              <label id="lblViewId_d" name="lblViewId_d" class="text-primary" style="width: 150px">
                {{ viewId }}
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
            <td class="text-right">
              <span id="spnIsDisp_d" name="spnIsDisp_d" CssClass="col-form-label text-right"
                >是否显示</span
              >
            </td>
            <td class="text-left">
              <label id="lblIsDisp_d" name="lblIsDisp_d" class="text-primary" style="width: 150px">
                {{ isDisp }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnPrjId_d" name="spnPrjId_d" CssClass="col-form-label text-right"
                >工程ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblPrjId_d" name="lblPrjId_d" class="text-primary" style="width: 150px">
                {{ prjId }}
              </label>
            </td>
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
              <span
                id="spnRegionTypeOrderNum_d"
                name="spnRegionTypeOrderNum_d"
                CssClass="col-form-label text-right"
                >区域类型序号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRegionTypeOrderNum_d"
                name="lblRegionTypeOrderNum_d"
                class="text-primary"
                >{{ regionTypeOrderNum }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnRegionName_d" name="spnRegionName_d" CssClass="col-form-label text-right"
                >区域名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblRegionName_d" name="lblRegionName_d" class="text-primary"
                >{{ regionName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnRegionTypeSimName_d"
                name="spnRegionTypeSimName_d"
                CssClass="col-form-label text-right"
                >区域类型简名</span
              >
            </td>
            <td class="text-left">
              <label id="lblRegionTypeSimName_d" name="lblRegionTypeSimName_d" class="text-primary"
                >{{ regionTypeSimName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnContainerTypeName_d"
                name="spnContainerTypeName_d"
                CssClass="col-form-label text-right"
                >容器类型名</span
              >
            </td>
            <td class="text-left">
              <label id="lblContainerTypeName_d" name="lblContainerTypeName_d" class="text-primary"
                >{{ containerTypeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFileName_d" name="spnFileName_d" CssClass="col-form-label text-right"
                >文件名</span
              >
            </td>
            <td class="text-left">
              <label id="lblFileName_d" name="lblFileName_d" class="text-primary"
                >{{ fileName }}
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnPageDispModeName_d"
                name="spnPageDispModeName_d"
                CssClass="col-form-label text-right"
                >页面显示模式名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblPageDispModeName_d" name="lblPageDispModeName_d" class="text-primary"
                >{{ pageDispModeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnClsName_d" name="spnClsName_d" CssClass="col-form-label text-right"
                >类名</span
              >
            </td>
            <td class="text-left">
              <label id="lblClsName_d" name="lblClsName_d" class="text-primary" style="width: 100px"
                >{{ clsName }}
              </label>
            </td>
            <td class="text-right">
              <span id="spnFldNum_d" name="spnFldNum_d" CssClass="col-form-label text-right"
                >字段数</span
              >
            </td>
            <td class="text-left">
              <label id="lblFldNum_d" name="lblFldNum_d" class="text-primary">{{ fldNum }} </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelViewRegionRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import ViewRegionRela_DetailEx from '@/views/RegionManage/ViewRegionRela_DetailEx';
  import { clsViewRegionRelaENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaENEx';
  export default defineComponent({
    name: 'ViewRegionRelaDetail',
    components: {
      // 组件注册
    },
    setup() {
      const regionId = ref('');
      const viewId = ref('');
      const inUse = ref('0');
      const isDisp = ref('0');
      const prjId = ref('');
      const memo = ref('');
      const regionTypeOrderNum = ref(0);
      const regionName = ref('');
      const regionTypeSimName = ref('');
      const containerTypeName = ref('');
      const fileName = ref('');
      const pageDispModeName = ref('');
      const clsName = ref('');
      const fldNum = ref(0);

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewRegionRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromViewRegionRelaObj(pobjViewRegionRelaENEx: clsViewRegionRelaENEx) {
        regionId.value = pobjViewRegionRelaENEx.regionId; // 区域Id
        viewId.value = pobjViewRegionRelaENEx.viewId; // 界面Id
        inUse.value =
          pobjViewRegionRelaENEx.inUse !== null ? pobjViewRegionRelaENEx.inUse.toString() : ''; // 是否在用
        isDisp.value =
          pobjViewRegionRelaENEx.isDisp !== null ? pobjViewRegionRelaENEx.isDisp.toString() : ''; // 是否显示
        prjId.value = pobjViewRegionRelaENEx.prjId; // 工程ID
        memo.value = pobjViewRegionRelaENEx.memo; // 说明
        regionTypeOrderNum.value = pobjViewRegionRelaENEx.regionTypeOrderNum; // 区域类型序号
        regionName.value = pobjViewRegionRelaENEx.regionName; // 区域名称
        regionTypeSimName.value = pobjViewRegionRelaENEx.regionTypeSimName; // 区域类型简名
        containerTypeName.value = pobjViewRegionRelaENEx.containerTypeName; // 容器类型名
        fileName.value = pobjViewRegionRelaENEx.fileName; // 文件名
        pageDispModeName.value = pobjViewRegionRelaENEx.pageDispModeName; // 页面显示模式名称
        clsName.value = pobjViewRegionRelaENEx.clsName; // 类名
        fldNum.value = pobjViewRegionRelaENEx.fldNum; // 字段数
      }
      const strTitle = ref('界面区域关系详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewRegionRela':
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
          case 'btnCancelViewRegionRela':
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
        ShowDataFromViewRegionRelaObj,
        regionId,
        viewId,
        inUse,
        isDisp,
        prjId,
        memo,
        regionTypeOrderNum,
        regionName,
        regionTypeSimName,
        containerTypeName,
        fileName,
        pageDispModeName,
        clsName,
        fldNum,
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
      btnViewRegionRela_Detail_Click(strCommandName: string, strKeyId: string) {
        ViewRegionRela_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
