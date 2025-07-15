<template>
  <div id="divLayout" ref="refDivLayout" class="tab_layout">
    <!-- 标题层 -->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5"> 表功能CRUD </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!-- 查询层  -->

    <div
      id="divQuery1"
      ref="refDivQuery"
      class="div_query"
      style="display: none; visibility: hidden"
    >
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblTabId_q"
              name="lblTabId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabId_q"
              name="ddlTabId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblKeyFldId_q"
              name="lblKeyFldId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              关键字段
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlKeyFldId_q"
              v-model="keyFldId"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left" colspan="2">
            <input
              id="txtFuncNameCs_q"
              name="txtFuncNameCs_q"
              title="查询Cs函数名"
              placeholder="Cs函数名"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>

          <td class="text-left" colspan="2">
            <input
              id="txtFuncNameJs_q"
              name="txtFuncNameJs_q"
              title="查询Js函数名"
              placeholder="Js函数名"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-left" colspan="2">
            <span class="form-control form-control-sm" style="width: 120px">
              <input id="chkIsExtendedClass_q" type="checkbox" Text="是否在扩展类" /><label
                for="chkIsExtendedClass_q"
                >是否在扩展类</label
              >
            </span>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblIsForCSharp_q"
              name="lblIsForCSharp_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              针对Cs?
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIsForCSharp_q"
              name="ddlIsForCSharp_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIsForTypeScript_q"
              name="lblIsForTypeScript_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              针对Js?
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIsForTypeScript_q"
              name="ddlIsForTypeScript_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIsForDiv_q"
              name="lblIsForDiv_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              Div内控件?
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIsForDiv_q"
              name="ddlIsForDiv_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIsNeedGC_q"
              name="lblIsNeedGC_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              生成代码?
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIsNeedGC_q"
              name="ddlIsNeedGC_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>

          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
            >
          </td>
        </tr>
      </table>
    </div>

    <div class="container1">
      <div class="tab-header">
        <div
          v-for="tab in tabFeaturetabs"
          :key="tab.id"
          :class="{ active: tab.id === activeTabFeatureId }"
          @click="changeTabFeature(tab.id)"
        >
          {{ tab.label }}
        </div>
      </div>

      <div class="tab-content">
        <div v-if="activeTabFeatureId === 'tab1'" id="tab1">
          <div
            id="divQueryContent"
            ref="refDivQueryContent"
            class="panel panel-default"
            style="float: right; margin-right: 0px"
          >
            <ul class="nav">
              <li class="nav-item">
                <label id="lblTabFeatureLst0173" class="col-form-label text-info"> </label>
              </li>

              <li class="nav-item ml-3">
                <button class="layui-btn" @click="btn_Click('AddNewRecordWithMaxId', '')"
                  >添加新绑定函数</button
                >
              </li>
            </ul>
          </div>

          <div id="divFeatureLst" class="div_List">
            <div id="divTabFeatureLst0173" class="div_List0173" style="float: left; width: 50%">
            </div>
            <div style="float: right; width: 50%">
              <div class="tab-header">
                <div
                  v-for="tab in codetabs"
                  :key="tab.id"
                  :class="{ active: tab.id === activeTabId }"
                  @click="changeTab(tab.id)"
                >
                  {{ tab.label }}
                </div>
              </div>

              <div class="tab-content">
                <div v-if="activeTabId === 'aspweb'">
                  <textarea v-model="tab1Data.codeText" rows="20" cols="80"></textarea>
                </div>
                <div v-if="activeTabId === 'typescript'">
                  <textarea v-model="tab2Data.codeText" rows="20" cols="80"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTabFeatureId === 'tab2'" id="tab2">
          <div id="divFeatureLst" class="div_List">
            <div id="divTabFeatureLst0167" class="div_List"> </div>
          </div>
          <div
            id="divQueryTab2"
            ref="refDivQueryTab2"
            class="panel panel-default"
            style="float: right; margin-right: 0px"
          >
            <ul class="nav">
              <li class="nav-item">
                <label
                  id="lblTabFeatureLst0167"
                  name="lblTabFeatureLst0167"
                  class="col-form-label text-info"
                >
                </label>
              </li>

              <li class="nav-item ml-3">
                <button class="layui-btn" @click="btn_Click('AddSortFunc', '')"
                  ><i class="layui-icon"></i>添加新排序功能</button
                >
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeTabFeatureId === 'tab3'" id="tab3">
          <div
            id="divQueryTab3"
            ref="refDivQueryTab3"
            class="panel panel-default"
            style="float: right; margin-right: 0px"
          >
            <ul class="nav">
              <li class="nav-item">
                <label
                  id="lblTabFeatureLst0170"
                  name="lblTabFeatureLst0170"
                  class="col-form-label text-info"
                >
                </label>
              </li>

              <li class="nav-item ml-3">
                <button class="layui-btn" @click="btn_Click('AddNewRecordWithMaxId', '')"
                  ><i class="layui-icon"></i>选择用户</button
                >
              </li>
            </ul>
          </div>

          <div id="divFeatureLst" class="div_List">
            <div id="divTabFeatureLst0170" class="div_List"> </div>
          </div>
        </div>
        <div v-if="activeTabFeatureId === 'tab4'" id="tab4">
          <div
            id="divQueryTab4"
            ref="refDivQueryTab4"
            class="panel panel-default"
            style="float: right; margin-right: 0px"
          >
            <ul class="nav">
              <li class="nav-item">
                <label
                  id="lblTabFeatureLst0172"
                  name="lblTabFeatureLst0172"
                  class="col-form-label text-info"
                >
                </label>
              </li>

              <li class="nav-item ml-3">
                <button class="layui-btn" @click="btn_Click('AddNewRecordWithMaxId', '')"
                  ><i class="layui-icon"></i>选择用户</button
                >
              </li>
            </ul>
          </div>

          <div id="divFeatureLst" class="div_List">
            <div id="divTabFeatureLst0172" class="div_List11" style="float: left"> </div>
            <div style="float: right"></div>
          </div>
        </div>
      </div>
    </div>

    <!--  功能区  -->

    <div id="divFunctionEdit" ref="refDivFunctionEdit" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblTabFeatureList"
            name="lblTabFeatureList"
            class="col-form-label text-info"
            style="width: 250px"
          >
            表功能列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddTabFeature"
            name="btnAddTabFeature"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddTabFeature', '')"
            >添加表功能</button
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnAddNewRecordWithMaxId"
            name="btnAddNewRecordWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddNewRecordWithMaxId', '')"
            >{{ strSubmitButtonText }}</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnGetDefaNameProp"
            name="btnGetDefaNameProp"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('GetDefaNameProp', '')"
            >获取默认命名属性</button
          >
        </li>
      </ul>
    </div>
    <!--  列表层  -->
    <div id="divList" ref="refDivList" class="div_List">
      <div
        id="divDataLst"
        ref="refDivDataLst"
        class="div_List"
        style="height: 600px; overflow: auto"
      >
      </div>
      <div id="divPager" class="pager"> </div>
    </div>
    <!--  编辑层  -->
    <div id="divEdit" value="1"></div>
    <ComboBox_EdtCom ref="refComboBox_Edt"></ComboBox_EdtCom>
    <AdjustOrderNum_EdtCom ref="refAdjustOrderNum_Edt"></AdjustOrderNum_EdtCom>

    <div id="divEdit_TabFeature" value="1"></div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortTabFeatureBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import TabFeatureCRUD_EditEx from '@/views/Table_Field/TabFeatureCRUD_EditEx';

  import ComboBox_EdtCom from '@/views/Table_Field/ComboBox_Edt.vue';
  import AdjustOrderNum_EdtCom from '@/views/Table_Field/AdjustOrderNum_Edt.vue';

  import { ComboBox_EdtEx } from '@/views/Table_Field/ComboBox_EdtEx';
  import { TabFeatureCRUD_EditEx_Combo } from '@/views/Table_Field/TabFeatureCRUD_EditEx_Combo';
  import { TabFeatureCRUD_EditEx_AdjustOrderNum } from '@/views/Table_Field/TabFeatureCRUD_EditEx_AdjustOrderNum';
  import { TabFeatureCRUD_EditEx_TransEvent } from '@/views/Table_Field/TabFeatureCRUD_EditEx_TransEvent';
  import { TabFeatureCRUD_EditEx_SetFieldValue } from '@/views/Table_Field/TabFeatureCRUD_EditEx_SetFieldValue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    FeatureTypeId_Static,
  } from '@/views/Table_Field/TabFeatureVueShare';
  import {
    refPrjTabRelation_Detail,
    refPrjTabRelation_Edit,
  } from '@/views/Table_Field/PrjTabRelationVueShare';
  import {
    refAdjustOrderNum_Edt,
    refComboBox_Edt,
  } from '@/views/Table_Field/TabFeatureEditVueShare';
  // interface CodeTextSetter {
  //   SetCodeText: (strCodeText_Web: string, strCodeText_Ts: string) => void;
  // }
  export default defineComponent({
    name: 'PrjTabRelationCRUD',
    components: {
      // 组件注册
      ComboBox_EdtCom,
      AdjustOrderNum_EdtCom,
      //   PrjTabRelation_DetailCom,
    },
    setup() {
      FeatureTypeId_Static.value = '03';
      const activeTabId = ref('aspweb');
      const codetabs = reactive([
        { id: 'aspweb', label: 'Asp Web 代码' },
        { id: 'typescript', label: 'TypeScript 代码' },
      ]);
      const activeTabFeatureId = ref('tab1');
      const tabFeaturetabs = reactive([
        { id: 'tab1', label: '绑定下拉框' },
        { id: 'tab2', label: '调整记录次序' },
        { id: 'tab3', label: '设置字段值' },
        { id: 'tab4', label: '表相关事务操作' },
      ]);
      const tab1Data = ref({
        // Data for Tab1
        codeText: '',
      });

      const tab2Data = ref({
        // Data for Tab2
        codeText: '',
      });

      const strTitle = ref('工程表关系维护');
      const featureId = ref('0173');
      const keyFldId = ref('');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelTabFeature':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitTabFeature':
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
          case 'btnCancelTabFeature':
            return strCancelButtonText.value;
          case 'btnSubmitTabFeature':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const refDivFunctionEdit = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        TabFeatureCRUD_EditEx.divFunctionEdit = refDivFunctionEdit.value;

        // TabFeatureCRUD_EditEx.EditObj = refComboBox_Edt.value;
        // refTabFeatureFlds_Edit.value = refComboBox_Edt.value;
        ComboBox_EdtEx.EditComboBoxRef = refComboBox_Edt;

        TabFeatureCRUD_EditEx_Combo.SetCodeText = SetCodeText;
        TabFeatureCRUD_EditEx_Combo.vuebtn_Click = btn_Click;
        TabFeatureCRUD_EditEx_Combo.GetPropValue = GetPropValue;
        TabFeatureCRUD_EditEx_AdjustOrderNum.GetPropValue = GetPropValue;
        TabFeatureCRUD_EditEx_TransEvent.GetPropValue = GetPropValue;
        TabFeatureCRUD_EditEx_SetFieldValue.GetPropValue = GetPropValue;
        TabFeatureCRUD_EditEx.GetPropValue = GetPropValue;

        const objPage = new TabFeatureCRUD_EditEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function GetPropValue(strPropName: string): any {
        switch (strPropName) {
          case 'title':
            return strTitle.value;
          case 'featureId':
            return featureId.value;
          case 'keyFldId':
            return keyFldId.value;
          case 'ComboBox_EdtDiv':
            return refComboBox_Edt.value.refDivEdit;
          default:
            return '';
        }
      }
      // const setCodeText: CodeTextSetter = {
      const SetCodeText = (strCodeText_Web: string, strCodeText_Ts: string) => {
        tab1Data.value.codeText = strCodeText_Web;
        tab2Data.value.codeText = strCodeText_Ts;
      };
      // };
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            // PrjTabRelationCRUD.DetailObj = PrjTabRelation_DetailObj;
            // refPrjTabRelation_Detail.value = PrjTabRelation_DetailObj;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            // TabFeatureCRUD_EditEx.EditObj = refComboBox_Edt.value;
            // refTabFeatureFlds_Edit.value = refComboBox_Edt.value;
            ComboBox_EdtEx.EditComboBoxRef = refComboBox_Edt;
            break;
          default:
            break;
        }
        TabFeatureCRUD_EditEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivFunctionEdit,

        refDivDataLst,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        refComboBox_Edt,
        refAdjustOrderNum_Edt,
        activeTabId,
        activeTabFeatureId,
        codetabs,
        tabFeaturetabs,
        tab1Data,
        tab2Data,
        SetCodeText,
        featureId,
        keyFldId,
        refPrjTabRelation_Edit,
        refPrjTabRelation_Detail,
      };
    },
    watch: {
      // 数据监听
    },

    methods: {
      // 方法定义
      changeTab(tabId: string) {
        this.activeTabId = tabId;
      },
      changeTabFeature(tabId: string) {
        this.activeTabFeatureId = tabId;
        switch (tabId) {
          case 'tab1':
            this.featureId = '0173';
            TabFeatureCRUD_EditEx.btn_Click('Tab', '0173');
            break;
          case 'tab2':
            this.featureId = '0167';
            TabFeatureCRUD_EditEx.btn_Click('Tab', '0167');
            break;
          case 'tab3':
            this.featureId = '0170';
            TabFeatureCRUD_EditEx.btn_Click('Tab', '0170');
            break;
          case 'tab4':
            this.featureId = '0172';
            TabFeatureCRUD_EditEx.btn_Click('Tab', '0172');
            break;
        }
        // TabFeatureCRUD_EditEx.btn_Click('Tab', tabId);
      },
    },
  });
</script>
<style scoped></style>
