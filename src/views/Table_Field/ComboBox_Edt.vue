<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditDialog_ComboBox" ref="refDivEdit" class="tab_layout">
      <div class="row">
        <div class="col-5">
          <table
            id="tabEdit"
            style="width: 483px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr id="trDsDataValueFieldId">
              <td class="text-right">
                <label
                  id="lblDsDataValueFieldId"
                  class="col-form-label-sm text-right"
                  style="width: 70px"
                >
                  值字段
                </label>
              </td>
              <td class="text-left" colSpan="3">
                <select
                  id="ddlDsDataValueFieldId"
                  v-model="dsDataValueFieldId"
                  class="form-control form-control-sm"
                  style="width: 230px"
                  @change="DataValueFieldId_SelectedIndexChanged()"
                >
                  <option
                    v-for="(item, index) in arrvFieldTab_SimWithEx"
                    :key="index"
                    :value="item.fldId"
                  >
                    {{ item.fldName }}
                  </option>
                </select>
              </td>
            </tr>
            <tr id="trDsDataTextFieldId">
              <td class="text-right">
                <label
                  id="lblDsDataTextFieldId"
                  class="col-form-label-sm text-right"
                  style="width: 70px"
                >
                  文本字段
                </label>
              </td>
              <td class="text-left" colSpan="3">
                <select
                  id="ddlDsDataTextFieldId"
                  v-model="dsDataTextFieldId"
                  class="form-control form-control-sm"
                  style="width: 230px"
                  ><option
                    v-for="(item, index) in arrvFieldTab_SimWithEx"
                    :key="index"
                    :value="item.fldId"
                  >
                    {{ item.fldName }}
                  </option></select
                >
              </td>
            </tr>

            <tr id="trDsCondFieldId1">
              <td class="text-right">
                <label
                  id="lblDsCondFieldId1"
                  class="col-form-label-sm text-right"
                  style="width: 80px"
                >
                  条件字段1
                </label>
              </td>
              <td class="text-left" colSpan="2">
                <select
                  id="ddlFldIdCond1"
                  v-model="fldIdCond1"
                  class="form-control form-control-sm"
                  style="width: 170px"
                  @change="ddlFldIdCond1_SelectedIndexChanged()"
                  ><option
                    v-for="(item, index) in arrvFieldTab_Sim1"
                    :key="index"
                    :value="item.fldId"
                  >
                    {{ item.fldName }}
                  </option>
                </select>
              </td>
              <td>
                <span class="form-control form-control-sm" style="width: 70px">
                  <input
                    id="chkIsCurrTab1"
                    ref="refChkIsCurrTab1"
                    v-model="isCurrTab1"
                    type="checkbox"
                    Text="当前表"
                    @change="chkIsCurrTab_CheckChanged(refChkIsCurrTab1)"
                  /><label for="chkIsCurrTab1">当前表</label>
                </span>
              </td>
            </tr>
            <tr id="trDsCondFieldId2">
              <td class="text-right">
                <label
                  id="lblDsCondFieldId2"
                  class="col-form-label-sm text-right"
                  style="width: 80px"
                >
                  条件字段2
                </label>
              </td>
              <td class="text-left" colSpan="2">
                <select
                  id="ddlFldIdCond2"
                  v-model="fldIdCond2"
                  class="form-control form-control-sm"
                  style="width: 170px"
                  ><option
                    v-for="(item, index) in arrvFieldTab_Sim2"
                    :key="index"
                    :value="item.fldId"
                  >
                    {{ item.fldName }}
                  </option></select
                >
              </td>
              <td>
                <span class="form-control form-control-sm" style="width: 70px">
                  <input
                    id="chkIsCurrTab2"
                    ref="refChkIsCurrTab2"
                    v-model="isCurrTab2"
                    type="checkbox"
                    Text="当前表"
                    @change="chkIsCurrTab_CheckChanged(refChkIsCurrTab2)"
                  /><label for="chkIsCurrTab2">当前表</label>
                </span>
              </td>
            </tr>

            <tr id="trDsSortFieldId">
              <td class="text-right">
                <label
                  id="lblDsSortFieldId"
                  class="col-form-label-sm text-right"
                  style="width: 70px"
                >
                  排序字段
                </label>
              </td>
              <td class="text-left" colSpan="3">
                <select
                  id="ddlDsSortFieldId"
                  v-model="dsSortFieldId"
                  class="form-control form-control-sm"
                  style="width: 230px"
                  ><option
                    v-for="(item, index) in arrvFieldTab_Sim_Sort"
                    :key="index"
                    :value="item.fldId"
                  >
                    {{ item.fldName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trDsCondStr">
              <td class="text-right">
                <label id="lblDsCondStr" class="col-form-label-sm text-right" style="width: 70px">
                  条件串
                </label>
              </td>
              <td class="text-left" colSpan="3">
                <input
                  id="txtDsCondStr"
                  v-model="dsCondStr"
                  class="form-control form-control-sm"
                  style="width: 230px"
                />
              </td>
            </tr>
            <tr id="trDsSqlStr">
              <td class="text-right">
                <label id="lblDsSqlStr" class="col-form-label-sm text-right" style="width: 70px">
                  SQL串
                </label>
              </td>
              <td class="text-left" colSpan="3">
                <input
                  id="txtDsSqlStr"
                  v-model="dsSqlStr"
                  class="form-control form-control-sm"
                  style="width: 230px"
                />
              </td>
            </tr>
            <tr id="trItemsString">
              <td class="text-right">
                <label id="lblItemsString" class="col-form-label-sm text-right" style="width: 70px">
                  列表项串
                </label>
              </td>
              <td class="text-left" colSpan="3">
                <input
                  id="txtItemsString"
                  v-model="itemsString"
                  class="form-control form-control-sm"
                  style="width: 230px"
                />
              </td>
            </tr>
            <tr id="trItemsString2">
              <td class="text-left" colspan="4">
                <span class="form-control form-control-sm" style="width: 300px">
                  <input id="chkInUse" v-model="inUse" type="checkbox" Text="是否在用" /><label
                    for="chkInUse"
                    >是否在用</label
                  ></span
                >
              </td>
            </tr>
            <tr id="trOrderNum">
              <td class="text-right">
                <label id="lblOrderNum" class="col-form-label text-right" style="width: 90px">
                  序号
                </label>
              </td>
              <td class="text-left" colspan="3">
                <input
                  id="txtOrderNum"
                  v-model.number="orderNum"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
            <tr id="trMemo">
              <td class="text-right">
                <label id="lblMemo" class="col-form-label text-right" style="width: 90px">
                  说明
                </label>
              </td>
              <td class="text-left" colspan="3">
                <input
                  id="txtMemo"
                  v-model="memo"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="col-7">
          <table
            id="tabEdit"
            style="width: 450px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr id="trTabFeatureName">
              <td class="text-right">
                <label id="lblTabFeatureName" class="col-form-label text-right" style="width: 90px">
                  表功能名
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtTabFeatureName"
                  v-model="tabFeatureName"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
            <tr id="trFeatureId">
              <td class="text-right">
                <label id="lblFeatureId" class="col-form-label text-right" style="width: 90px">
                  功能类别
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlFeatureId"
                  v-model="featureId"
                  class="form-control form-control-sm"
                  style="width: 300px"
                >
                  <option
                    v-for="(item, index) in arrPrjFeature"
                    :key="index"
                    :value="item.featureId"
                  >
                    {{ item.featureName }}
                  </option></select
                >
              </td>
            </tr>

            <tr id="trIsExtendedClass">
              <td class="text-left">
                <span class="form-control form-control-sm" style="width: 150px">
                  <input
                    id="chkIsExtendedClass"
                    v-model="isExtendedClass"
                    type="checkbox"
                    Text="是否在扩展类"
                    @change="chkIsExtendedClass_CheckChanged()"
                  /><label for="chkIsExtendedClass">是否在扩展类</label></span
                >
              </td>
              <td>
                <span class="form-control form-control-sm" style="width: 150px">
                  <input
                    id="chkIsNeedGC"
                    v-model="isNeedGC"
                    type="checkbox"
                    Text="是否需要生成代码"
                  /><label for="chkIsNeedGC">是否需要生成代码</label></span
                >
              </td>
            </tr>
            <tr>
              <td class="text-right">
                <label
                  id="lblGetDdlDataFuncNameCs"
                  class="col-form-label text-right"
                  style="width: 130px"
                >
                  GetDdlData函数名
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtGetDdlDataFuncNameJs"
                  v-model="getDdlDataFuncNameJs"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
            <tr id="trIsForCSharp">
              <td class="text-left" colSpan="2">
                <span class="form-control form-control-sm" style="width: 150px">
                  <input
                    id="chkIsForCSharp"
                    v-model="isForCSharp"
                    type="checkbox"
                    Text="是否ForCSharp"
                    @change="chkIsForCSharp_CheckChanged()"
                  /><label for="chkIsForCSharp">是否ForCSharp</label></span
                >
              </td>
            </tr>
            <tr v-show="isShowFuncNameCs" id="trFuncNameCs">
              <td class="text-right">
                <label id="lblFuncNameCs" class="col-form-label text-right" style="width: 90px">
                  Cs函数名
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtFuncNameCs"
                  v-model="funcNameCs"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
            <tr id="trIsForTypeScript">
              <td class="text-left" colSpan="2">
                <span class="form-control form-control-sm" style="width: 170px">
                  <input
                    id="chkIsForTypeScript"
                    v-model="isForTypeScript"
                    type="checkbox"
                    Text="是否可针对TypeScript"
                    @change="chkIsForTypeScript_CheckChanged()"
                  /><label for="chkIsForTypeScript">是否可针对TypeScript</label></span
                >
              </td>
            </tr>
            <tr v-show="isShowFuncNameJs" id="trFuncNameJs">
              <td class="text-right">
                <label id="lblFuncNameJs" class="col-form-label text-right" style="width: 90px">
                  Js函数名
                </label>
                <br />
                <button
                  id="btnApplyDefaFuncNameJs"
                  class="btn btn-outline-info btn-sm"
                  @click="btnApplyDefaFuncNameJs_OnClick()"
                >
                  设置默认函数名</button
                >
              </td>
              <td class="text-left">
                <input
                  id="txtFuncNameJs"
                  v-model="funcNameJs"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
                <br />
                <label id="lblDefaFuncNameJs" class="col-form-label-sm text-info text-left">
                  {{ defaFuncNameJs }}
                </label>
              </td>
            </tr>
            <tr v-show="isShowIsForDiv" id="trIsForDiv">
              <td class="text-left" colSpan="2">
                <span class="form-control form-control-sm" style="width: 150px">
                  <input
                    id="chkIsForDiv"
                    v-model="isForDiv"
                    type="checkbox"
                    Text="是否针对Div内控件"
                    @change="chkIsForDiv_CheckChanged()"
                  /><label for="chkIsForDiv">是否针对Div内控件</label></span
                >
              </td>
            </tr>
            <tr id="trToolTipText">
              <td class="text-right">
                <label id="lblToolTipText" class="col-form-label text-right" style="width: 90px">
                  提示文本
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtToolTipText"
                  v-model="toolTipText"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
            <tr id="trTabFeatureId">
              <td class="text-right">
                <label id="lblTabFeatureId" class="col-form-label text-right" style="width: 90px">
                  表功能Id
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtTabFeatureId"
                  v-model="tabFeatureId"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>

    <template #footer>
      <a-button id="btnCancelComboBox" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitComboBox"
        type="primary"
        @click="btnComboBox_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
      <!-- <button
              id="btnCancelComboBox"
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              >关闭</button
            >
            <button
              id="btnSubmitComboBox"
              type="button"
              class="btn btn-primary"
              @click="btnComboBox_Edit_Click('Submit', '')"
              >添加</button
            > -->
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { DsTabId_Static } from './ComboBoxVueShare';
  import { ComboBox_EdtEx } from '@/views/Table_Field/ComboBox_EdtEx';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import TabFeature_EditEx from '@/views/Table_Field/TabFeature_EditEx';
  import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
  import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
  import { PrjFeature_GetArrPrjFeatureByFeatureTypeId } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
  import {
    FeatureTypeId_Static,
    PrjId_Session,
    refDivEdit,
    TabId_Static,
  } from '@/views/Table_Field/TabFeatureVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { TabFeature_Edit } from '@/viewsBase/Table_Field/TabFeature_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    vFieldTab_SimEx_GetArrvFieldTab_SimByPrjIdCache,
    vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache,
    vFieldTab_SimEx_GetArrvFieldTab_SimWithExByTabIdCache,
  } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { vPrjTab_Sim_GetObjByTabIdCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { enumCacheMode } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
  import { PrjTab_GetObjByTabIdAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';

  export default defineComponent({
    name: 'TabFeatureEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const tabFeatureId = ref('');
      const tabFeatureName = ref('');
      const featureId = ref('');
      const funcNameCs = ref('');
      const funcNameJs = ref('');
      const orderNum = ref(0);
      // const prjId = ref('');
      // const tabId = ref('');
      const isExtendedClass = ref(true);
      const isForCSharp = ref(true);
      const isForTypeScript = ref(true);
      const isForDiv = ref(true);
      const isNeedGC = ref(true);
      const inUse = ref(true);
      const isShowFuncNameCs = ref(true); //是否显示Cs函数名
      const isShowFuncNameJs = ref(true); //是否显示Js函数名
      const isShowIsForDiv = ref(true); //是否显示针对Div内控件
      const memo = ref('');
      const getDdlDataFuncNameJs = ref('');
      const isCurrTab1 = ref(false);
      const isCurrTab2 = ref(false);
      const fldIdCond1 = ref('0');
      const fldIdCond2 = ref('0');
      const dsSortFieldId = ref('0');
      const dsCondStr = ref('');
      const dsSqlStr = ref('');
      const itemsString = ref('');
      const dsDataValueFieldId = ref('0');
      const dsDataTextFieldId = ref('0');
      const defaFuncNameJs = ref(''); //默认函数名
      const refChkIsCurrTab1 = ref<HTMLInputElement | null>(null);
      const refChkIsCurrTab2 = ref<HTMLInputElement | null>(null);
      // const updUser = ref('');
      // const updDate = ref('');
      const arrvFieldTab_Sim1 = ref<clsvFieldTab_SimEN[] | null>([]); //编辑区域
      const arrvFieldTab_Sim2 = ref<clsvFieldTab_SimEN[] | null>([]); //编辑区域
      const arrvFieldTab_Sim_Sort = ref<clsvFieldTab_SimEN[] | null>([]); //编辑区域
      const arrvFieldTab_SimWithEx = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrPrjFeature = ref<clsPrjFeatureEN[] | null>([]);

      // onMounted(async () => {
      //   await BindDdl4EditRegionInDiv();
      // });
      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strFeatureTypeId_Static = FeatureTypeId_Static.value; //静态变量;//静态变量
        arrvFieldTab_SimWithEx.value = await vFieldTab_SimEx_GetArrvFieldTab_SimWithExByTabIdCache(
          DsTabId_Static.value,
        ); //编辑区域
        arrvFieldTab_Sim_Sort.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          DsTabId_Static.value,
        ); //编辑区域

        arrvFieldTab_Sim1.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          DsTabId_Static.value,
        ); //编辑区域
        // await this.SetDdl_FldIdCond1InDiv(strDsTabId);

        arrvFieldTab_Sim2.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          DsTabId_Static.value,
        ); //编辑区域

        arrPrjFeature.value = await PrjFeature_GetArrPrjFeatureByFeatureTypeId(
          strFeatureTypeId_Static,
        ); //编辑区域
        featureId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjTabFeatureEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataTabFeatureObj() {
        // const userStore = useUserStore();
        const pobjTabFeatureEN = new clsTabFeatureEN();
        pobjTabFeatureEN.SetTabFeatureId(tabFeatureId.value); // 表功能Id
        // pobjTabFeatureEN.SetTabFeatureId(this.tabFeatureId); // 表功能Id
        pobjTabFeatureEN.SetTabFeatureName(tabFeatureName.value); // 表功能名
        // pobjTabFeatureEN.SetTabFeatureName(this.tabFeatureName); // 表功能名
        pobjTabFeatureEN.SetFeatureId(featureId.value); // 功能
        // pobjTabFeatureEN.SetFeatureId(this.featureId); // 功能
        pobjTabFeatureEN.SetFuncNameCs(funcNameCs.value); // Cs函数名
        //  pobjTabFeatureEN.SetFuncNameCs(this.funcNameCs); // Cs函数名
        pobjTabFeatureEN.SetFuncNameJs(funcNameJs.value); // Js函数名
        // pobjTabFeatureEN.SetFuncNameJs(this.funcNameJs); // Js函数名
        pobjTabFeatureEN.SetOrderNum(Number(orderNum.value)); // 序号
        //  pobjTabFeatureEN.SetOrderNum(this.orderNum); // 序号
        pobjTabFeatureEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjTabFeatureEN.SetTabId(TabId_Static.value); // 表ID
        //      pobjTabFeatureEN.SetPrjId(PrjId_Session.value); // 工程ID
        // pobjTabFeatureEN.SetTabId(TabId_Static.value); // 表ID
        pobjTabFeatureEN.SetIsExtendedClass(isExtendedClass.value); // 是否在扩展类
        // pobjTabFeatureEN.SetIsExtendedClass(this.isExtendedClass); // 是否在扩展类
        pobjTabFeatureEN.SetIsForCSharp(isForCSharp.value); // 是否ForCSharp
        //  pobjTabFeatureEN.SetIsForCSharp(this.isForCSharp); // 是否ForCSharp
        pobjTabFeatureEN.SetIsForTypeScript(isForTypeScript.value); // 是否可针对TypeScript
        // pobjTabFeatureEN.SetIsForTypeScript(this.isForTypeScript); // 是否可针对TypeScript
        pobjTabFeatureEN.SetIsForDiv(isForDiv.value); // 是否针对Div内控件
        // pobjTabFeatureEN.SetIsForDiv(this.isForDiv); // 是否针对Div内控件
        pobjTabFeatureEN.SetIsNeedGC(isNeedGC.value); // 是否需要生成代码
        //  pobjTabFeatureEN.SetIsNeedGC(this.isNeedGC); // 是否需要生成代码
        pobjTabFeatureEN.SetInUse(inUse.value); // 是否在用
        // pobjTabFeatureEN.SetInUse(this.inUse); // 是否在用
        pobjTabFeatureEN.SetMemo(memo.value); // 说明
        // pobjTabFeatureEN.SetMemo(this.memo); // 说明
        pobjTabFeatureEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjTabFeatureEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期

        // pobjTabFeatureEN.SetUpdUser(userStore.getUserId); // 修改者
        // pobjTabFeatureEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjTabFeatureEN.SetToolTipText(toolTipText.value); // 是否在扩展类

        pobjTabFeatureEN.SetGetDdlDataFuncName4Ex(getDdlDataFuncNameJs.value); // 是否在扩展类

        // pobjTabFeatureEN.SetGetDdlDataFuncName4Ex(this.getDdlDataFuncNameJs1); // 是否在扩展类

        return pobjTabFeatureEN;
      }
      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjTabFeatureEN">表实体类对象</param>
       **/
      async function ShowDataFromTabFeatureObj(pobjTabFeatureEN: clsTabFeatureEN) {
        tabFeatureId.value = pobjTabFeatureEN.tabFeatureId; // 表功能Id
        tabFeatureName.value = pobjTabFeatureEN.tabFeatureName; // 表功能名
        featureId.value = pobjTabFeatureEN.featureId; // 功能
        funcNameCs.value = pobjTabFeatureEN.funcNameCs; // Cs函数名
        funcNameJs.value = pobjTabFeatureEN.funcNameJs; // Js函数名
        orderNum.value = pobjTabFeatureEN.orderNum; // 序号
        isExtendedClass.value = pobjTabFeatureEN.isExtendedClass; // 是否在扩展类
        isForCSharp.value = pobjTabFeatureEN.isForCSharp; // 是否ForCSharp
        isForTypeScript.value = pobjTabFeatureEN.isForTypeScript; // 是否可针对TypeScript
        isForDiv.value = pobjTabFeatureEN.isForDiv; // 是否针对Div内控件
        isNeedGC.value = pobjTabFeatureEN.isNeedGC; // 是否需要生成代码
        inUse.value = pobjTabFeatureEN.inUse; // 是否在用
        memo.value = pobjTabFeatureEN.memo; // 说明
        getDdlDataFuncNameJs.value = pobjTabFeatureEN.getDdlDataFuncName4Ex; // 是否在扩展类
        toolTipText.value = pobjTabFeatureEN.toolTipText; // 是否在扩展类
        if (IsNullOrEmpty(toolTipText.value) == true) {
          const objPrjTab = await PrjTab_GetObjByTabIdAsync(TabId_Static.value);
          if (objPrjTab != null) toolTipText.value = `选${objPrjTab.tabCnName}`;
        }
      }
      //  public async GetDataFromTabFeatureClass(pobjTabFeatureEN: clsTabFeatureEN) {
      //     this.tabFeatureId = pobjTabFeatureEN.tabFeatureId; // 表功能Id
      //     this.tabFeatureName = pobjTabFeatureEN.tabFeatureName; // 表功能名
      //     this.featureId = pobjTabFeatureEN.featureId; // 功能
      //     this.funcNameCs = pobjTabFeatureEN.funcNameCs; // Cs函数名
      //     this.funcNameJs = pobjTabFeatureEN.funcNameJs; // Js函数名
      //     this.orderNum = pobjTabFeatureEN.orderNum; // 序号
      //     this.isExtendedClass = pobjTabFeatureEN.isExtendedClass; // 是否在扩展类
      //     this.getDdlDataFuncNameJs1 = pobjTabFeatureEN.getDdlDataFuncName4Ex; // 是否在扩展类
      //     refComboBox_Edt.value.toolTipText = pobjTabFeatureEN.toolTipText; // 是否在扩展类
      //     this.isForCSharp = pobjTabFeatureEN.isForCSharp; // 是否ForCSharp
      //     this.isForTypeScript = pobjTabFeatureEN.isForTypeScript; // 是否可针对TypeScript
      //     this.isForDiv = pobjTabFeatureEN.isForDiv; // 是否针对Div内控件
      //     this.isNeedGC = pobjTabFeatureEN.isNeedGC; // 是否需要生成代码
      //     this.inUse = pobjTabFeatureEN.inUse; // 是否在用
      //     this.memo = pobjTabFeatureEN.memo; // 说明
      //   }
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        fldIdCond1.value = '0';
        fldIdCond2.value = '0';
        tabFeatureId.value = '';
        tabFeatureName.value = '';
        featureId.value = '0';
        funcNameCs.value = '';
        funcNameJs.value = '';
        orderNum.value = 0;
        isExtendedClass.value = false;
        isForCSharp.value = false;
        isForTypeScript.value = false;
        isForDiv.value = false;
        isNeedGC.value = false;
        inUse.value = false;
        memo.value = '';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_btnSubmit_Click)
       **/
      const btnSubmit_Click = async () => {
        const strThisFuncName = btnSubmit_Click.name;
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let returnBool = false;
          let returnKeyId = '';
          let strInfo = '';
          let strMsg = '';
          switch (strCommandText) {
            case '添加':
              strSubmitButtonText.value = '确认添加';
              strCancelButtonText.value = '取消添加';
              await objPage_Edit.value.AddNewRecord();
              break;
            case '确认添加':
              //这是一个单表的插入的代码,由于逻辑层太简单,
              //就把逻辑层合并到控制层,
              if (['02', '03', '06'].indexOf(clsTabFeatureEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsTabFeatureEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsTabFeatureEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In TabFeature_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (TabFeature_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsTabFeatureEN._CurrTabName,
                    keyId.value,
                  );
              }
              break;
            default:
              strMsg = Format(
                'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
                strCommandText,
              );
              console.error(strMsg);
              alert(strMsg);
              break;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };
      const strTitle = ref('表功能编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<TabFeature_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('1200px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: TabFeature_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        // await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      const toolTipText = ref('');

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelComboBox':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitComboBox':
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
          case 'btnCancelComboBox':
            return strCancelButtonText.value;
          case 'btnSubmitComboBox':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      return {
        // refDivEdit,
        // strTitle,
        // dialogVisible,
        // dialogWidth,
        // showDialog,
        // handleSave,
        // hideDialog,
        // strSubmitButtonText,
        // strCancelButtonText,
        // GetEditDataTabFeatureObj,
        // ShowDataFromTabFeatureObj,
        // Clear,
        // btnSubmit_Click,
        tabFeatureId,
        tabFeatureName,
        featureId,
        funcNameCs,
        funcNameJs,
        orderNum,
        // prjId,
        // tabId,
        isExtendedClass,
        isForCSharp,
        isForTypeScript,
        isForDiv,
        isNeedGC,
        inUse,
        memo,
        fldIdCond1,
        fldIdCond2,
        dsSortFieldId,
        dsCondStr,
        dsSqlStr,
        itemsString,
        dsDataValueFieldId,
        // updUser,
        // updDate,
        arrPrjFeature,
        isCurrTab1,
        isCurrTab2,
        refChkIsCurrTab1,
        refChkIsCurrTab2,
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
        refDivEdit,
        toolTipText,

        Clear,
        BindDdl4EditRegionInDiv,
        GetEditDataTabFeatureObj,
        ShowDataFromTabFeatureObj,
        btnSubmit_Click,

        getDdlDataFuncNameJs,
        arrvFieldTab_Sim1,
        arrvFieldTab_Sim2,
        arrvFieldTab_Sim_Sort,
        arrvFieldTab_SimWithEx,
        dsDataTextFieldId,
        defaFuncNameJs,
        isShowFuncNameCs,
        isShowFuncNameJs,
        isShowIsForDiv,
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
        //TabFeature_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnComboBox_Edit_Click(strCommandName: string, strKeyId: string) {
        ComboBox_EdtEx.btnEdit_Click(strCommandName, strKeyId);
      },
      async chkIsCurrTab_CheckChanged(chkIsCurrTab: HTMLInputElement | null) {
        //const thisCtrl = event;
        //const ddlVarTypeId: HTMLSelectElement = <HTMLSelectElement>thisCtrl?.srcElement;
        if (chkIsCurrTab == null) {
          console.error('chkIsCurrTab_CheckChanged--chkIsCurrTab is null!');
          return;
        }
        const elemName = chkIsCurrTab.id;
        console.error(chkIsCurrTab);
        console.error(elemName);

        console.log('chkIsCurrTab_SelectedIndexChanged--this.chkIsCurrTab:', chkIsCurrTab.checked);
        const strPrjId = clsPrivateSessionStorage.currSelPrjId;
        if (chkIsCurrTab.checked == true) {
          const strDsTabId = ComboBox_EdtEx.strTabId4ComboBox;

          switch (elemName) {
            case 'chkIsCurrTab1':
              this.arrvFieldTab_Sim1 = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
                strDsTabId,
              ); //编辑区域
              // await this.SetDdl_FldIdCond1InDiv(strDsTabId);
              break;
            case 'chkIsCurrTab2':
              this.arrvFieldTab_Sim2 = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
                strDsTabId,
              ); //编辑区域
              // await this.SetDdl_FldIdCond2InDiv(strDsTabId);
              break;
          }
        } else {
          // const strTabId = '';
          switch (elemName) {
            case 'chkIsCurrTab1':
              this.arrvFieldTab_Sim1 = await vFieldTab_SimEx_GetArrvFieldTab_SimByPrjIdCache(
                strPrjId,
              ); //编辑区域
              // await vFieldTab_SimEx_BindDdl_FldIdInDivCache(
              //     ComboBox_EdtEx.d1ivEditComboBox,
              //     'ddlFldIdCond1',
              //     strPrjId,
              //   );
              break;
            case 'chkIsCurrTab2':
              this.arrvFieldTab_Sim2 = await vFieldTab_SimEx_GetArrvFieldTab_SimByPrjIdCache(
                strPrjId,
              ); //编辑区域
              // await vFieldTab_SimEx_BindDdl_FldIdInDivCache(
              //   ComboBox_EdtEx.d1ivEditComboBox,
              //   'ddlFldIdCond2',
              //   strPrjId,
              // );
              break;
          }
        }
      },
      // async SetDdl_FldIdCond1InDiv(strTabId: string) {
      //   await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      //     ComboBox_EdtEx.d1ivEditComboBox,
      //     'ddlFldIdCond1',
      //     strTabId,
      //   ); //编辑区域
      // },

      // async SetDdl_FldIdCond2InDiv(strTabId: string) {
      //   //clsDropDownList.BindDdl_DS_DataPrjTabFld(ddlFldIdCond, strTabId);

      async chkIsExtendedClass_CheckChanged() {
        // const strPrjId = clsPrivateSessionStorage.currSelPrjId;
        if (this.isExtendedClass == true) {
          this.isNeedGC = false;
        } else {
          this.isNeedGC = true;
        }
      },

      async chkIsForCSharp_CheckChanged() {
        if (this.isForCSharp == true) {
          this.isShowFuncNameCs = true;
        } else {
          this.isShowFuncNameCs = false;
        }
      },
      async chkIsForTypeScript_CheckChanged() {
        if (this.isForTypeScript == true) {
          this.isShowFuncNameJs = true;
          this.isShowIsForDiv = true;

          this.GetFuncNameJs();
        } else {
          this.isShowFuncNameJs = false;
          this.isShowIsForDiv = false;
        }
      },
      async GetFuncNameJs() {
        let strFuncName = '';
        const strDsDataValueFieldId = this.dsDataValueFieldId;
        if (IsNullOrEmpty(strDsDataValueFieldId) == true) return;
        const objvFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
          strDsDataValueFieldId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objvFieldTab == null) return;
        const strFldName = objvFieldTab.fldName;

        let strInDiv = '';
        if (this.isForDiv == true) strInDiv = 'InDiv';

        let strByCondition = '';
        const strFldIdCond1 = this.fldIdCond1;
        if (IsNullOrEmpty(strFldIdCond1) == false && strFldIdCond1 != '0') {
          const objvFieldTab_Cond1 = await vFieldTab_Sim_GetObjByFldIdCache(
            strFldIdCond1,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (objvFieldTab_Cond1 != null) {
            const strFldNameCond1 = objvFieldTab_Cond1.fldName;
            strByCondition = Format('By{0}', strFldNameCond1);
          }
        } else {
          strByCondition = '';
        }
        strFuncName = Format('BindDdl_{0}{1}{2}', strFldName, strByCondition, strInDiv);
        this.defaFuncNameJs = strFuncName;
        return strFuncName;
      },

      async GetDdlDataFuncNameJs() {
        let strGetDdlDataFuncNameJs = '';

        const strTabId = TabId_Static.value;
        const objPrjTab = await vPrjTab_Sim_GetObjByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objPrjTab == null) return;
        let strByCondition = '';
        const strFldIdCond1 = this.fldIdCond1;
        if (IsNullOrEmpty(strFldIdCond1) == false && strFldIdCond1 != '0') {
          const objvFieldTab_Cond1 = await vFieldTab_Sim_GetObjByFldIdCache(
            strFldIdCond1,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (objvFieldTab_Cond1 != null) {
            const strFldNameCond1 = objvFieldTab_Cond1.fldName;
            strByCondition = Format('By{0}', strFldNameCond1);
          }
        } else {
          strByCondition = '';
        }
        let IsCache = ''; //是否缓存
        switch (objPrjTab.cacheModeId) {
          case enumCacheMode.WebServerCache_01: //不缓存
            break;
          case enumCacheMode.ClientCache_02: //缓存
            IsCache = 'Cache';
            break;
          case enumCacheMode.localStorage_03: //缓存到Session
            IsCache = 'Cache';
            break;
          case enumCacheMode.sessionStorage_04: //缓存到LocalStorage
            IsCache = 'Cache';
            break;
          default:
            IsCache = '';
        }
        strGetDdlDataFuncNameJs = `GetArr${objPrjTab.tabName}${strByCondition}${IsCache}`;
        if (IsNullOrEmpty(this.getDdlDataFuncNameJs) == true)
          this.getDdlDataFuncNameJs = strGetDdlDataFuncNameJs;
        return strGetDdlDataFuncNameJs;
      },

      async chkIsForDiv_CheckChanged() {
        //const thisCtrl = event;
        this.GetFuncNameJs();
      },

      async getTabFeatureName() {
        const strDsDataValueFieldId = this.dsDataValueFieldId;
        if (IsNullOrEmpty(strDsDataValueFieldId) == true) return;
        const objvFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
          strDsDataValueFieldId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objvFieldTab == null) return;
        const strFldName = objvFieldTab.fldName;
        let strByCondition = '';
        const strFldIdCond1 = this.fldIdCond1;
        if (IsNullOrEmpty(strFldIdCond1) == false && strFldIdCond1 != '0') {
          const objvFieldTab_Cond1 = await vFieldTab_Sim_GetObjByFldIdCache(
            strFldIdCond1,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (objvFieldTab_Cond1 != null) {
            const strFldNameCond1 = objvFieldTab_Cond1.fldName;
            strByCondition = Format('By{0}', strFldNameCond1);
          }
        } else {
          strByCondition = '';
        }
        this.tabFeatureName = `绑定-${strFldName}${strByCondition}`;
      },
      async DataValueFieldId_SelectedIndexChanged() {
        await this.getTabFeatureName();
      },
      async ddlFldIdCond1_SelectedIndexChanged() {
        await this.GetFuncNameJs();
        await this.getTabFeatureName();
        await this.GetDdlDataFuncNameJs();
      },
      async btnApplyDefaFuncNameJs_OnClick() {
        this.funcNameJs = this.defaFuncNameJs;
      },
    },
  });
</script>
<style scoped></style>
