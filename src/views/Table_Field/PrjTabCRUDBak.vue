<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 1000px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblTabName_q"
              name="lblTabName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTabName_q"
              v-model="tabName_q"
              class="form-control form-control-sm"
              style="width: 80px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFuncModuleAgcId_q"
              name="lblFuncModuleAgcId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >模块
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncModuleAgcId_q"
              v-model="funcModuleAgcId_q"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option
                v-for="(item, index) in arrFuncModule_Agc"
                :key="index"
                :value="item.funcModuleAgcId"
              >
                {{ item.funcModuleName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblTabStateId_q"
              name="lblTabStateId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表状态
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabStateId_q"
              v-model="tabStateId_q"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option v-for="(item, index) in arrTabState" :key="index" :value="item.tabStateId">
                {{ item.tabStateName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblTabMainTypeId_q"
              name="lblTabMainTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表主类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabMainTypeId_q"
              v-model="tabMainTypeId_q"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option
                v-for="(item, index) in arrTabMainType"
                :key="index"
                :value="item.tabMainTypeId"
              >
                {{ item.tabMainTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblTabTypeId_q"
              name="lblTabTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabTypeId_q"
              v-model="tabTypeId_q"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option v-for="(item, index) in arrTabType" :key="index" :value="item.tabTypeId">
                {{ item.tabTypeName }}
              </option></select
            >
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblTabCnName_q"
              name="lblTabCnName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表中文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTabCnName_q"
              v-model="tabCnName_q"
              class="form-control form-control-sm"
              style="width: 80px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblSqlDsTypeId_q"
              name="lblSqlDsTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >数据源
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSqlDsTypeId_q"
              v-model="sqlDsTypeId_q"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option v-for="(item, index) in arrSQLDSType" :key="index" :value="item.sqlDsTypeId">
                {{ item.sqlDsTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblIsUseCache_q"
              name="lblIsUseCache_q"
              class="col-form-label text-right"
              style="width: 90px"
              >使用Cache?
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIsUseCache_q"
              v-model="isUseCache_q"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option value="0">选择是/否</option>
              <option value="true">是</option>
              <option value="false">否</option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblCacheModeId_q"
              name="lblCacheModeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >缓存方式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCacheModeId_q"
              v-model="cacheModeId_q"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option v-for="(item, index) in arrCacheMode" :key="index" :value="item.cacheModeId">
                {{ item.cacheModeName }}
              </option></select
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 80px">
              <input
                id="chkIsReleToSqlTab_q"
                v-model="isReleToSqlTab_q"
                type="checkbox"
                Text="是否与SQL表相关"
              /><label for="chkIsReleToSqlTab_q">是否与SQL表相关</label></span
            >
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblFeatureId_q"
              name="lblFeatureId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >功能
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFeatureId_q"
              v-model="featureId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrvPrjFeatureSim"
                :key="index"
                :value="item.featureId"
              >
                {{ item.featureName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblPrimaryTypeId_q"
              name="lblPrimaryTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >主键类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrimaryTypeId_q"
              v-model="primaryTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrPrimaryType"
                :key="index"
                :value="item.primaryTypeId"
              >
                {{ item.primaryTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblIncludeFldId_q"
              name="lblIncludeFldId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >包含字段
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIncludeFldId_q"
              v-model="includeFldId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btnQuery_Click"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btnExportExcel_Click"
              >导出Excel</button
            >
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblPrjTabList"
            name="lblPrjTabList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程表列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnCreate_Click"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnUpdate_Click"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDelete_Click"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClone_Click"
            >复制</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              id="btnSetDefaCmPrjId"
              name="btnSetDefaCmPrjId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetDefaCmPrjId_Click"
              >设置默认Cm项目</button
            >
            <button
              id="btnRemoveDefaCmPrjId"
              name="btnRemoveDefaCmPrjId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnRemoveDefaCmPrjId_Click"
              >从默认项目移除</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlCacheModeId_SetFldValue"
              v-model="cacheModeId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrCacheMode" :key="index" :value="item.cacheModeId">
                {{ item.cacheModeName }}
              </option></select
            >
            <button
              id="btnSetCacheModeId"
              name="btnSetCacheModeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetCacheModeId_Click"
              >设置缓存方式</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlFuncModuleAgcId_SetFldValue"
              v-model="funcModuleAgcId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option
                v-for="(item, index) in arrFuncModule_Agc"
                :key="index"
                :value="item.funcModuleAgcId"
              >
                {{ item.funcModuleName }}
              </option></select
            >
            <button
              id="btnSetFuncModuleAgcId"
              name="btnSetFuncModuleAgcId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetFuncModuleAgcId_Click"
              >设置功能模块Id</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlTabStateId_SetFldValue"
              v-model="tabStateId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrTabState" :key="index" :value="item.tabStateId">
                {{ item.tabStateName }}
              </option></select
            >
            <button
              id="btnSetTabStateId"
              name="btnSetTabStateId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetTabStateId_Click"
              >设置表状态</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <vPrjTab_ListCom
        ref="refvPrjTab_List"
        :items="dataListPrjTab"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </vPrjTab_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortPrjTabBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PrjTab_EditCom ref="refPrjTab_Edit"></PrjTab_EditCom>
    <!--详细信息层-->
    <PrjTab_DetailCom ref="refPrjTab_Detail"></PrjTab_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    GetCheckedKeyIdsInDivObj,
    GetSelectValueInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refPrjTab_Edit,
    refPrjTab_Detail,
    refvPrjTab_List,
    showErrorMessage,
    dataListPrjTab,
    emptyRecNumInfo,
    PrjId_Session,
    TabId_Static,
    FeatureTypeId_Static,
    Bool_True_Default,
    tabName_q,
    funcModuleAgcId_q,
    tabStateId_q,
    tabMainTypeId_q,
    tabTypeId_q,
    tabCnName_q,
    sqlDsTypeId_q,
    isUseCache_q,
    cacheModeId_q,
    prjId_q,
    isReleToSqlTab_q,
    featureId_q,
    primaryTypeId_q,
    includeFldId_q,
    tabStateId_f,
    cacheModeId_f,
    funcModuleAgcId_f,
  } from '@/views/Table_Field/PrjTabVueShare';
  import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
  import PrjTab_EditEx from '@/views/Table_Field/PrjTab_EditEx';
  import { confirmDel, BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import PrjTabCRUDEx from '@/views/Table_Field/PrjTabCRUDEx';
  import PrjTab_EditCom from '@/views/Table_Field/PrjTab_Edit.vue';
  import PrjTab_DetailCom from '@/views/Table_Field/PrjTab_Detail.vue';
  import vPrjTab_ListCom from '@/views/Table_Field/vPrjTab_List.vue';
  import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
  import { clsTabStateEN } from '@/ts/L0Entity/Table_Field/clsTabStateEN';
  import { clsTabMainTypeEN } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
  import { clsTabTypeEN } from '@/ts/L0Entity/Table_Field/clsTabTypeEN';
  import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
  import { clsCacheModeEN } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
  import { clsvPrjFeatureSimEN } from '@/ts/L0Entity/PrjFunction/clsvPrjFeatureSimEN';
  import { clsPrimaryTypeEN } from '@/ts/L0Entity/Table_Field/clsPrimaryTypeEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';

  import { FuncModule_Agc_GetArrFuncModule_AgcByPrjId } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
  import { TabState_GetArrTabState } from '@/ts/L3ForWApi/Table_Field/clsTabStateWApi';
  import { TabMainType_GetArrTabMainType } from '@/ts/L3ForWApi/Table_Field/clsTabMainTypeWApi';
  import { TabType_GetArrTabType } from '@/ts/L3ForWApi/Table_Field/clsTabTypeWApi';
  import { SQLDSType_GetArrSQLDSType } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
  import { CacheMode_GetArrCacheModeByInUse } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
  import { vPrjFeatureSim_GetArrvPrjFeatureSimByFeatureTypeId } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
  import { PrimaryType_GetArrPrimaryType } from '@/ts/L3ForWApi/Table_Field/clsPrimaryTypeWApi';
  import { vFieldTab_SimEx_GetDdlDataByPrjIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  export default defineComponent({
    name: 'PrjTabCRUD',
    components: {
      // 组件注册
      PrjTab_EditCom,
      PrjTab_DetailCom,
      vPrjTab_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      TabId_Static.value = '';
      FeatureTypeId_Static.value = '';
      Bool_True_Default.value = true;
      const objPage = ref<PrjTabCRUDEx>();
      const objPage_Edit = ref<PrjTab_EditEx>();
      // const objPage_Detail = ref<PrjTab_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'PrjTabCRUD';

      const arrFuncModule_Agc = ref<clsFuncModule_AgcEN[] | null>([]);
      const arrTabState = ref<clsTabStateEN[] | null>([]);
      const arrTabMainType = ref<clsTabMainTypeEN[] | null>([]);
      const arrTabType = ref<clsTabTypeEN[] | null>([]);
      const arrSQLDSType = ref<clsSQLDSTypeEN[] | null>([]);
      const arrCacheMode = ref<clsCacheModeEN[] | null>([]);
      const arrvPrjFeatureSim = ref<clsvPrjFeatureSimEN[] | null>([]);
      const arrPrimaryType = ref<clsPrimaryTypeEN[] | null>([]);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);

      /**
       * 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCopyRecord_Click)
       **/
      const btnClone_Click = async () => {
        const strThisFuncName = btnClone_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要克隆的${thisTabName}记录!`);
            return '';
          }
          await objPage.value.CopyRecord(arrKeyIds);
          await objPage.value.BindGv_PrjTab4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `复制记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 设置字段值-FuncModuleAgcId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetFuncModuleAgcId_Click = async () => {
        const strThisFuncName = btnSetFuncModuleAgcId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置功能模块Id的${thisTabName}记录!`);
            return '';
          }
          const strFuncModuleAgcId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlFuncModuleAgcId_SetFldValue',
          );
          if (strFuncModuleAgcId == '') {
            const strMsg = '请输入功能模块Id(FuncModuleAgcId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strFuncModuleAgcId=' + strFuncModuleAgcId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetFuncModuleAgcId(arrKeyIds, strFuncModuleAgcId);
          await objPage.value.BindGv_PrjTab4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 设置字段值-TabStateId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetTabStateId_Click = async () => {
        const strThisFuncName = btnSetTabStateId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置表状态ID的${thisTabName}记录!`);
            return '';
          }
          const strTabStateId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlTabStateId_SetFldValue',
          );
          if (strTabStateId == '') {
            const strMsg = '请输入表状态ID(TabStateId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strTabStateId=' + strTabStateId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetTabStateId(arrKeyIds, strTabStateId);
          await objPage.value.BindGv_PrjTab4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 设置字段值-CacheModeId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetCacheModeId_Click = async () => {
        const strThisFuncName = btnSetCacheModeId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置缓存方式Id的${thisTabName}记录!`);
            return '';
          }
          const strCacheModeId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlCacheModeId_SetFldValue',
          );
          if (strCacheModeId == '') {
            const strMsg = '请输入缓存方式Id(CacheModeId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strCacheModeId=' + strCacheModeId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetCacheModeId(arrKeyIds, strCacheModeId);
          await objPage.value.BindGv_PrjTab4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new PrjTab_EditEx('PrjTab_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_PrjTab(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsPrjTabEN.PrimaryTypeId) > -1) {
            await objPage_Edit.value.AddNewRecordWithMaxId();
          } else {
            await objPage_Edit.value.AddNewRecord();
          }
        } catch (e) {
          const strMsg = Format(
            '添加新记录初始化不成功,{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_PrjTab4Func(refDivList.value);
      };

      /** 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new PrjTab_EditEx('PrjTab_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strTabId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strTabId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_PrjTab(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strTabId);
          if (update == false) {
            const strMsg = Format('在修改记录时,显示记录数据不成功!');
            console.error(strMsg);
            alert(strMsg);
            return;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        await objPage.value.ExportExcel_PrjTab4Func();
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsPrjTabEN._CurrTabName;
      };

      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDelete_Click)
       **/
      const btnDelete_Click = async () => {
        const strThisFuncName = btnDelete_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyIds.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord(arrKeyIds);
          await objPage.value.BindGv_PrjTab4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 自定义功能函数
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_SelfDefine_Click)
       **/
      const btnSetDefaCmPrjId_Click = async () => {
        const strThisFuncName = btnSetDefaCmPrjId_Click.name;
        const strMsg = `函数:[btnSetDefaCmPrjId_Click]还末定义.(in ${thisConstructorName}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
      };

      /**
       * 自定义功能函数
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_SelfDefine_Click)
       **/
      const btnRemoveDefaCmPrjId_Click = async () => {
        const strThisFuncName = btnRemoveDefaCmPrjId_Click.name;
        const strMsg = `函数:[btnRemoveDefaCmPrjId_Click]还末定义.(in ${thisConstructorName}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        const bolBool_True_Default = false; //在switch中未找到相关类型: tsDefaultValue(in AGC.BusinessLogicEx.FuncParaType:GetTsTypeStr)
        const strFeatureTypeId_Static = FeatureTypeId_Static.value; //静态变量;//静态变量

        arrFuncModule_Agc.value = await FuncModule_Agc_GetArrFuncModule_AgcByPrjId(strPrjId); //查询区域
        funcModuleAgcId_q.value = '0';

        arrTabState.value = await TabState_GetArrTabState(); //查询区域
        tabStateId_q.value = '0';

        arrTabMainType.value = await TabMainType_GetArrTabMainType(); //查询区域
        tabMainTypeId_q.value = '0';

        arrTabType.value = await TabType_GetArrTabType(); //查询区域
        tabTypeId_q.value = '0';

        arrSQLDSType.value = await SQLDSType_GetArrSQLDSType(); //查询区域
        sqlDsTypeId_q.value = '0';

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsUseCache_q');

        arrCacheMode.value = await CacheMode_GetArrCacheModeByInUse(bolBool_True_Default); //查询区域
        cacheModeId_q.value = '0';

        arrvPrjFeatureSim.value = await vPrjFeatureSim_GetArrvPrjFeatureSimByFeatureTypeId(
          strFeatureTypeId_Static,
        ); //查询区域
        featureId_q.value = '0';

        arrPrimaryType.value = await PrimaryType_GetArrPrimaryType(); //查询区域
        primaryTypeId_q.value = '0';

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetDdlDataByPrjIdCache(strPrjId); //查询区域
        includeFldId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const bolBool_True_Default = false; //在switch中未找到相关类型: tsDefaultValue(in AGC.BusinessLogicEx.FuncParaType:GetTsTypeStr)
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        arrTabState.value = await TabState_GetArrTabState(); //功能区域
        tabStateId_f.value = '0';

        arrCacheMode.value = await CacheMode_GetArrCacheModeByInUse(bolBool_True_Default); //功能区域
        cacheModeId_f.value = '0';

        arrFuncModule_Agc.value = await FuncModule_Agc_GetArrFuncModule_AgcByPrjId(strPrjId); //功能区域
        funcModuleAgcId_f.value = '0';
      }

      const strTitle = ref('工程表维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        PrjTabCRUDEx.vuebtn_Click = btn_Click;
        PrjTabCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new PrjTabCRUDEx();
        objPage.value.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
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
        PrjTabCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListPrjTab,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refPrjTab_Edit,
        refPrjTab_Detail,
        refvPrjTab_List,
        tabName_q,
        funcModuleAgcId_q,
        tabStateId_q,
        tabMainTypeId_q,
        tabTypeId_q,
        tabCnName_q,
        sqlDsTypeId_q,
        isUseCache_q,
        cacheModeId_q,
        prjId_q,
        isReleToSqlTab_q,
        featureId_q,
        primaryTypeId_q,
        includeFldId_q,
        tabStateId_f,
        cacheModeId_f,
        funcModuleAgcId_f,
        arrFuncModule_Agc,
        arrTabState,
        arrTabMainType,
        arrTabType,
        arrSQLDSType,
        arrCacheMode,
        arrvPrjFeatureSim,
        arrPrimaryType,
        arrvFieldTab_Sim,
        btnClone_Click,
        btnSetFuncModuleAgcId_Click,
        btnSetTabStateId_Click,
        btnSetCacheModeId_Click,
        btnCreate_Click,
        btnQuery_Click,
        btnUpdate_Click,
        btnExportExcel_Click,
        btnDelete_Click,
        btnSetDefaCmPrjId_Click,
        btnRemoveDefaCmPrjId_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editPrjTab', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new PrjTabCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
