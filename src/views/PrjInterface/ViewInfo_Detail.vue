<template>
  <div>
    <template v-if="isDialog">
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
            style="width: 550px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tbody>
              <tr> </tr>
              <tr>
                <td class="text-right">
                  <span id="spnViewNameEx_d" CssClass="col-form-label text-right">界面名称</span>
                </td>
                <td class="text-left" ColSpan="3">
                  <label id="lblViewNameEx_d" class="text-primary" style="width: 350px">
                    {{ viewNameEx }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnViewFunction_d" CssClass="col-form-label text-right">界面功能</span>
                </td>
                <td class="text-left" ColSpan="3">
                  <label id="lblViewFunction_d" class="text-primary" style="width: 350px">
                    {{ viewFunction }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnApplicationTypeSimName_d" CssClass="col-form-label text-right"
                    >应用类型</span
                  >
                </td>
                <td class="text-left">
                  <label id="lblApplicationTypeSimName_d" class="text-primary" style="width: 350px"
                    >{{ applicationTypeSimName }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnFileName_d" CssClass="col-form-label text-right">文件名</span>
                </td>
                <td class="text-left" ColSpan="3">
                  <label id="lblFileName_d" class="text-primary" style="width: 350px">
                    {{ fileName }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnFilePath_d" CssClass="col-form-label text-right">文件路径</span>
                </td>
                <td class="text-left">
                  <label id="lblFilePath_d" class="text-primary" style="width: 350px">
                    {{ filePath }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnDefaMenuName_d" CssClass="col-form-label text-right"
                    >缺省菜单名</span
                  >
                </td>
                <td class="text-left" ColSpan="3">
                  <label id="lblDefaMenuName_d" class="text-primary" style="width: 350px">
                    {{ defaMenuName }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnDataBaseName_d" CssClass="col-form-label text-right">数据库名</span>
                </td>
                <td class="text-left">
                  <label id="lblDataBaseName_d" class="text-primary" style="width: 350px">
                    {{ dataBaseName }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnIsNeedSetExportFld_d" CssClass="col-form-label text-right"
                    >设置导出字段</span
                  >
                </td>
                <td class="text-left">
                  <label id="lblIsNeedSetExportFld_d" class="text-primary" style="width: 350px">
                    {{ isNeedSetExportFld }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnUserId_d" CssClass="col-form-label text-right">用户Id</span>
                </td>
                <td class="text-left">
                  <label id="lblUserId_d" class="text-primary" style="width: 350px">
                    {{ userId }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnViewDetail_d" CssClass="col-form-label text-right">界面说明</span>
                </td>
                <td class="text-left" ColSpan="3">
                  <label id="lblViewDetail_d" class="text-primary" style="width: 350px">
                    {{ viewDetail }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnMainTabNameEx_d" CssClass="col-form-label text-right"
                    >主表表名Ex</span
                  >
                </td>
                <td class="text-left">
                  <label id="lblMainTabNameEx_d" class="text-primary" style="width: 100px"
                    >{{ mainTabNameEx }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnInRelaTabName_d" CssClass="col-form-label text-right">In表名</span>
                </td>
                <td class="text-left">
                  <label id="lblInRelaTabName_d" class="text-primary" style="width: 100px"
                    >{{ inRelaTabName }}
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnOutRelaTabName_d" CssClass="col-form-label text-right">Out表名</span>
                </td>
                <td class="text-left">
                  <label id="lblOutRelaTabName_d" class="text-primary" style="width: 100px"
                    >{{ outRelaTabName }}
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <template #footer>
          <a-button id="btnCancelViewInfo" @click="dialogVisible = false">{{
            strCancelButtonText
          }}</a-button>
        </template>
      </a-modal>
    </template>
    <template v-else>
      <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
        <!-- 详细信息层 -->

        <table
          id="tabEdit"
          style="width: 550px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tbody>
            <tr> </tr>
            <tr>
              <td class="text-right">
                <span id="spnViewNameEx_d" CssClass="col-form-label text-right">界面名称</span>
              </td>
              <td class="text-left" ColSpan="3">
                <label id="lblViewNameEx_d" class="text-primary" style="width: 350px">
                  {{ viewNameEx }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnViewFunction_d" CssClass="col-form-label text-right">界面功能</span>
              </td>
              <td class="text-left" ColSpan="3">
                <label id="lblViewFunction_d" class="text-primary" style="width: 350px">
                  {{ viewFunction }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnApplicationTypeSimName_d" CssClass="col-form-label text-right"
                  >应用类型</span
                >
              </td>
              <td class="text-left">
                <label id="lblApplicationTypeSimName_d" class="text-primary" style="width: 350px"
                  >{{ applicationTypeSimName }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnFileName_d" CssClass="col-form-label text-right">文件名</span>
              </td>
              <td class="text-left" ColSpan="3">
                <label id="lblFileName_d" class="text-primary" style="width: 350px">
                  {{ fileName }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnFilePath_d" CssClass="col-form-label text-right">文件路径</span>
              </td>
              <td class="text-left">
                <label id="lblFilePath_d" class="text-primary" style="width: 350px">
                  {{ filePath }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnDefaMenuName_d" CssClass="col-form-label text-right">缺省菜单名</span>
              </td>
              <td class="text-left" ColSpan="3">
                <label id="lblDefaMenuName_d" class="text-primary" style="width: 350px">
                  {{ defaMenuName }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnDataBaseName_d" CssClass="col-form-label text-right">数据库名</span>
              </td>
              <td class="text-left">
                <label id="lblDataBaseName_d" class="text-primary" style="width: 350px">
                  {{ dataBaseName }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnIsNeedSetExportFld_d" CssClass="col-form-label text-right"
                  >设置导出字段</span
                >
              </td>
              <td class="text-left">
                <label id="lblIsNeedSetExportFld_d" class="text-primary" style="width: 350px">
                  {{ isNeedSetExportFld }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnUserId_d" CssClass="col-form-label text-right">用户Id</span>
              </td>
              <td class="text-left">
                <label id="lblUserId_d" class="text-primary" style="width: 350px">
                  {{ userId }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnViewDetail_d" CssClass="col-form-label text-right">界面说明</span>
              </td>
              <td class="text-left" ColSpan="3">
                <label id="lblViewDetail_d" class="text-primary" style="width: 350px">
                  {{ viewDetail }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnMainTabNameEx_d" CssClass="col-form-label text-right">主表表名Ex</span>
              </td>
              <td class="text-left">
                <label id="lblMainTabNameEx_d" class="text-primary" style="width: 100px"
                  >{{ mainTabNameEx }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnInRelaTabName_d" CssClass="col-form-label text-right">In表名</span>
              </td>
              <td class="text-left">
                <label id="lblInRelaTabName_d" class="text-primary" style="width: 100px"
                  >{{ inRelaTabName }}
                </label>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <span id="spnOutRelaTabName_d" CssClass="col-form-label text-right">Out表名</span>
              </td>
              <td class="text-left">
                <label id="lblOutRelaTabName_d" class="text-primary" style="width: 100px"
                  >{{ outRelaTabName }}
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import ViewInfo_DetailEx from '@/views/PrjInterface/ViewInfo_DetailEx';
  import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';
  export default defineComponent({
    name: 'ViewInfoDetail',
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
      const viewNameEx = ref('');
      const viewFunction = ref('');
      const applicationTypeSimName = ref('');
      const fileName = ref('');
      const filePath = ref('');
      const defaMenuName = ref('');
      const dataBaseName = ref('');
      const isNeedSetExportFld = ref('0');
      const userId = ref('');
      const viewDetail = ref('');
      const mainTabNameEx = ref('');
      const inRelaTabName = ref('');
      const outRelaTabName = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewInfoEN">表实体类对象</param>
       **/
      async function ShowDataFromViewInfoObj(pobjViewInfoENEx: clsViewInfoENEx) {
        viewNameEx.value = pobjViewInfoENEx.viewNameEx; // 界面名称
        viewFunction.value = pobjViewInfoENEx.viewFunction; // 界面功能
        applicationTypeSimName.value = pobjViewInfoENEx.applicationTypeSimName; // 应用类型
        fileName.value = pobjViewInfoENEx.fileName; // 文件名
        filePath.value = pobjViewInfoENEx.filePath; // 文件路径
        defaMenuName.value = pobjViewInfoENEx.defaMenuName; // 缺省菜单名
        dataBaseName.value = pobjViewInfoENEx.dataBaseName; // 数据库名
        isNeedSetExportFld.value =
          pobjViewInfoENEx.isNeedSetExportFld !== null
            ? pobjViewInfoENEx.isNeedSetExportFld.toString()
            : ''; // 设置导出字段
        userId.value = pobjViewInfoENEx.userId; // 用户Id
        viewDetail.value = pobjViewInfoENEx.viewDetail; // 界面说明
        mainTabNameEx.value = pobjViewInfoENEx.mainTabNameEx; // 主表表名Ex
        inRelaTabName.value = pobjViewInfoENEx.inRelaTabName; // In表名
        outRelaTabName.value = pobjViewInfoENEx.outRelaTabName; // Out表名
      }
      const strTitle = ref('界面详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewInfo':
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
          case 'btnCancelViewInfo':
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
        ShowDataFromViewInfoObj,
        viewNameEx,
        viewFunction,
        applicationTypeSimName,
        fileName,
        filePath,
        defaMenuName,
        dataBaseName,
        isNeedSetExportFld,
        userId,
        viewDetail,
        mainTabNameEx,
        inRelaTabName,
        outRelaTabName,
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
      btnViewInfo_Detail_Click(strCommandName: string, strKeyId: string) {
        ViewInfo_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
