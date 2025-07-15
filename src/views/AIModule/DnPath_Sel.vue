<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divLayout_Sel" ref="refDivLayout" class="tab_layout">
      <!-- 标题层 -->

      <div class="">
        <!-- 查询层 -->
        <div id="divQuery" ref="refDivQuery" class="div_query">
          <table
            id="tabEdit"
            style="width: 1400px"
            class="table table-bordered table-hover td table-sm"
          >
            <tr>
              <td class="text-right">
                <label
                  id="lblDnPathId_q"
                  name="lblDnPathId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  Dn路径Id
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtDnPathId_q"
                  name="txtDnPathId_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                />
              </td>
              <td class="text-right">
                <label
                  id="lblDnPathName_q"
                  name="lblDnPathName_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  Dn路径名
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtDnPathName_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                />
              </td>
              <td class="text-right">
                <label id="lblInDataNodeId_q" class="col-form-label text-right" style="width: 90px">
                  In数据结点
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlInDataNodeId_q"
                  class="form-control form-control-sm"
                  style="width: 150px"
                ></select>
              </td>
              <td class="text-right">
                <label
                  id="lblOutDataNodeId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  Out数据结点
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlOutDataNodeId_q"
                  class="form-control form-control-sm"
                  style="width: 150px"
                ></select>
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <label
                  id="lblAssociationMappingId_q"
                  class="col-form-label text-right"
                  style="width: 90px"
                >
                  关联映射
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlAssociationMappingId_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                ></select>
              </td>

              <td class="text-right">
                <label id="lblInUse_q" class="col-form-label text-right" style="width: 90px">
                  是否在用
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlInUse_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label id="lblIsHasErr_q" class="col-form-label text-right" style="width: 90px">
                  是否有错
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlIsHasErr_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="nav-item ml-3">
                <button
                  id="btnQuery"
                  name="btnQuery"
                  class="btn btn-outline-info btn-sm text-nowrap"
                  @click="btn_Click('Query', '')"
                  >查询</button
                >
              </td>
            </tr>
          </table>
        </div>
        <!-- 功能区 -->

        <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
          <ul class="nav">
            <li class="nav-item">
              <label
                id="lblDnPathList"
                name="lblDnPathList"
                class="col-form-label text-info"
                style="width: 250px"
              >
                结点路径列表
              </label>
            </li>

            <li class="nav-item ml-3">
              <button
                id="btnSelectRec"
                name="btnSelectRec"
                class="btn btn-outline-warning btn-sm text-nowrap"
                @click="btnSel_Click('SelectRec', '')"
                >选择</button
              >
            </li>
            <li class="nav-item ml-3">
              <button
                id="btnClearPath"
                name="btnClearPath"
                class="btn btn-outline-warning btn-sm text-nowrap"
                @click="btnSel_Click('ClearPath', '')"
                >取消路径</button
              >
            </li>
          </ul>
        </div>
        <!-- 列表层 -->
        <div id="divList" ref="refDivList" class="div_List">
          <div id="divDataLst" class="div_List"> </div>
          <div id="divPager" class="pager"> </div>
          <input id="hidSortDnPathBy" type="hidden" />
        </div>
      </div>
      <div style="position: relative; width: 948px; height: 37px; left: 0px; top: 0px">
        <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
        </label>
      </div>
    </div>
  </a-modal>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';

  import { DnPath_SelEx } from '@/views/AIModule/DnPath_SelEx';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/AIModule/DnPathVueShare';
  export default defineComponent({
    name: 'DnPathEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('选择记录');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelDnPath':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitDnPath':
            strSubmitButtonText.value = strNewValue;
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
          case 'btnCancelDnPath':
            return strCancelButtonText.value;
          case 'btnSubmitDnPath':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const dialogVisible = ref(false);
      const dialogWidth = ref('1200px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');

          setTimeout(() => {
            console.log('对话框已经显示!');
            // DnPath_SelEx.divLayout = refDivLayout.value;
            // DnPath_SelEx.divQuery = refDivQuery.value;
            // DnPath_SelEx.divFunction = refDivFunction.value;
            // DnPath_SelEx.divList = refDivList.value;
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
      /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
    **/
      function btnSel_Click(strCommandName, strKeyId) {
        DnPath_SelEx.btnSel_Click(strCommandName, strKeyId);
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        DnPath_SelEx.btn_Click(strCommandName, strKeyId);
      }
      /**
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
    **/
      //   function window_onload() {
      //     var objPage = new DnPath_SelEx();
      //     objPage.PageLoadCache();
      //   }

      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        btnSel_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        btn_Click,
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
        //DnPath_SelEx.btnClick(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
