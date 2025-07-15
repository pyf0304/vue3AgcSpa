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
              <span id="spnDnPathName_d" name="spnDnPathName_d" CssClass="col-form-label text-right"
                >DN路径名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDnPathName_d"
                name="lblDnPathName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dnPathName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnInDataNodeName_d"
                name="spnInDataNodeName_d"
                CssClass="col-form-label text-right"
                >In数据结点名</span
              >
            </td>
            <td class="text-left">
              <label id="lblInDataNodeName_d" name="lblInDataNodeName_d" class="text-primary"
                >{{ inDataNodeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnInFldName_d" name="spnInFldName_d" CssClass="col-form-label text-right"
                >In字段名</span
              >
            </td>
            <td class="text-left">
              <label id="lblInFldName_d" name="lblInFldName_d" class="text-primary"
                >{{ inFldName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnOutDataNodeName_d"
                name="spnOutDataNodeName_d"
                CssClass="col-form-label text-right"
                >Out数据结点名</span
              >
            </td>
            <td class="text-left">
              <label id="lblOutDataNodeName_d" name="lblOutDataNodeName_d" class="text-primary"
                >{{ outDataNodeName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnOutFldName_d" name="spnOutFldName_d" CssClass="col-form-label text-right"
                >Out字段名</span
              >
            </td>
            <td class="text-left">
              <label id="lblOutFldName_d" name="lblOutFldName_d" class="text-primary"
                >{{ outFldName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDnPathNodeLst_d"
                name="spnDnPathNodeLst_d"
                CssClass="col-form-label text-right"
                >路径结点列表</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDnPathNodeLst_d"
                name="lblDnPathNodeLst_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dnPathNodeLst }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnDnPathNodeLstV2_d"
                name="spnDnPathNodeLstV2_d"
                CssClass="col-form-label text-right"
                >路径结点列表V2</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblDnPathNodeLstV2_d"
                name="lblDnPathNodeLstV2_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ dnPathNodeLstV2 }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnEdgeNum_d" name="spnEdgeNum_d" CssClass="col-form-label text-right"
                >边数</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblEdgeNum_d"
                name="lblEdgeNum_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ edgeNum }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnAssociationMappingName_d"
                name="spnAssociationMappingName_d"
                CssClass="col-form-label text-right"
                >关联关系映射名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblAssociationMappingName_d"
                name="lblAssociationMappingName_d"
                class="text-primary"
                style="width: 100px"
                >{{ associationMappingName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsHasErr_d" name="spnIsHasErr_d" CssClass="col-form-label text-right"
                >是否有错</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsHasErr_d"
                name="lblIsHasErr_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isHasErr }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnErrMsg_d" name="spnErrMsg_d" CssClass="col-form-label text-right"
                >错误信息</span
              >
            </td>
            <td class="text-left">
              <label id="lblErrMsg_d" name="lblErrMsg_d" class="text-primary" style="width: 150px">
                {{ errMsg }}
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
          <tr>
            <td class="text-right">
              <span
                id="spnIsExistPath_d"
                name="spnIsExistPath_d"
                CssClass="col-form-label text-right"
                >是否存在路径</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsExistPath_d"
                name="lblIsExistPath_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isExistPath }}
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
      <div id="divDetailDialog_DnPath" class="divDnPath"></div>
      <!-- 显示路径图形的层 -->
    </div>
    <template #footer>
      <a-button id="btnCancelDnPath" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import DnPath_DetailEx from '@/views/AIModule/DnPath_DetailEx';
  import { clsDnPathENEx } from '@/ts/L0Entity/AIModule/clsDnPathENEx';
  import { DnPathEx_CreateGraph4DnPath_IncludeErr } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
  import { getDivObjByIdInDiv } from '@/ts/PubFun/clsCommFunc4Ctrl';
  export default defineComponent({
    name: 'DnPathDetail',
    components: {
      // 组件注册
    },
    setup() {
      const dnPathName = ref('');
      const inDataNodeName = ref('');
      const inFldName = ref('');
      const outDataNodeName = ref('');
      const outFldName = ref('');
      const dnPathNodeLst = ref('');
      const dnPathNodeLstV2 = ref('');
      const edgeNum = ref(0);
      const associationMappingName = ref('');
      const isHasErr = ref('0');
      const errMsg = ref('');
      const inUse = ref('0');
      const isExistPath = ref('0');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDnPathEN">表实体类对象</param>
       **/
      async function ShowDataFromDnPathObj(pobjDnPathENEx: clsDnPathENEx) {
        dnPathName.value = pobjDnPathENEx.dnPathName; // DN路径名
        inDataNodeName.value = pobjDnPathENEx.inDataNodeName; // In数据结点名
        inFldName.value = pobjDnPathENEx.inFldName; // In字段名
        outDataNodeName.value = pobjDnPathENEx.outDataNodeName; // Out数据结点名
        outFldName.value = pobjDnPathENEx.outFldName; // Out字段名
        dnPathNodeLst.value = pobjDnPathENEx.dnPathNodeLst; // 路径结点列表
        dnPathNodeLstV2.value = pobjDnPathENEx.dnPathNodeLstV2; // 路径结点列表V2
        edgeNum.value = pobjDnPathENEx.edgeNum; // 边数
        associationMappingName.value = pobjDnPathENEx.associationMappingName; // 关联关系映射名
        isHasErr.value = pobjDnPathENEx.isHasErr !== null ? pobjDnPathENEx.isHasErr.toString() : ''; // 是否有错
        errMsg.value = pobjDnPathENEx.errMsg; // 错误信息
        inUse.value = pobjDnPathENEx.inUse !== null ? pobjDnPathENEx.inUse.toString() : ''; // 是否在用
        isExistPath.value =
          pobjDnPathENEx.isExistPath !== null ? pobjDnPathENEx.isExistPath.toString() : ''; // 是否存在路径
        memo.value = pobjDnPathENEx.memo; // 说明

        // const strThisFuncName = this.ShowDetailDataFromDnPathClass4Func.name;
        const divPath = await DnPathEx_CreateGraph4DnPath_IncludeErr(pobjDnPathENEx.dnPathId);
        const divDnPath = getDivObjByIdInDiv('divDetailDialog_DnPath', 'divDnPath');
        divDnPath.appendChild(divPath);
      }

      const strTitle = ref('数据结点路径详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelDnPath':
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
          case 'btnCancelDnPath':
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
        ShowDataFromDnPathObj,
        dnPathName,
        inDataNodeName,
        inFldName,
        outDataNodeName,
        outFldName,
        dnPathNodeLst,
        dnPathNodeLstV2,
        edgeNum,
        associationMappingName,
        isHasErr,
        errMsg,
        inUse,
        isExistPath,
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
      btnDnPath_Detail_Click(strCommandName: string, strKeyId: string) {
        DnPath_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
