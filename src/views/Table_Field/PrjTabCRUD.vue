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
        id="tabQuery"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td>
            <input
              id="txtTabName_q"
              v-model="tabName_q"
              placeholder="表名"
              class="form-control form-control-sm"
              style="width: 180px"
            />
          </td>
          <td>
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

          <td>
            <select
              id="ddlTabStateId_q"
              v-model="tabStateId_q"
              title="表状态"
              placeholder="表状态"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option v-for="(item, index) in arrTabState" :key="index" :value="item.tabStateId">
                {{ item.tabStateName }}
              </option></select
            >
          </td>

          <td class="text-left">
            <select
              id="ddlIsUseCache_q"
              v-model="isUseCache_q"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option value="0">选使用缓存?</option>
              <option value="true">是-使用缓存</option>
              <option value="false">否-不使用缓存</option></select
            >
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

          <td>
            <select
              id="ddlIncludeFldId_q"
              v-model="includeFldId_q"
              title="包含字段"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
          <td>
            <span title="显示与数据库不相关的纯粹类" style="display: inline-block; width: 110px">
              <input id="chkShowPureClass_q" type="checkbox" name="chkShowPureClass_q" />
              <label for="chkShowPureClass_q">显示纯粹类</label>
            </span>
          </td>

          <td>
            <span title="仅仅显示与当前子工程相关的表" style="display: inline-block; width: 160px">
              <input
                id="chkShowCurrCmPrjId_q"
                type="checkbox"
                checked="true"
                name="chkShowCurrCmPrjId_q"
              />
              <label for="chkShowCurrCmPrjId_q">显示子工程相关表</label>
            </span>
          </td>

          <td>
            <span
              class="form-control form-control-sm"
              title="仅仅显示与Sql表相关的表"
              style="width: 130px"
            >
              <input
                id="chkIsReleToSqlTab_q"
                type="checkbox"
                name="chkIsReleToSqlTab_q"
                checked="true"
                Text="与SQL表相关?"
              />
              <label for="chkIsReleToSqlTab_q">与SQL表相关?</label>
            </span>
          </td>

          <td>
            <span style="display: inline-block; width: 120px"
              ><input id="chkDispAllErrMsg_q" type="checkbox" name="chkDispAllErrMsg_q" /><label
                for="chkDispAllErrMsg_q"
                >显示所有错误</label
              ></span
            >
          </td>
          <td>
            <span style="display: inline-block; width: 133px"
              ><input
                id="chkDispProbableErrTab_q"
                type="checkbox"
                name="chkDispProbableErrTab_q"
              /><label for="chkDispProbableErrTab_q">显示逻辑错误表</label></span
            >
          </td>
        </tr>
        <tr>
          <td class="text-left">
            <input
              id="txtTabCnName_q"
              v-model="tabCnName_q"
              placeholder="中文名"
              title="中文名"
              class="form-control form-control-sm"
              style="width: 180px"
            />
          </td>

          <td>
            <select
              id="ddlFuncModuleAgcId_q"
              v-model="funcModuleAgcId_q"
              title="模块"
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
          <td class="text-left">
            <select
              id="ddlFeatureId_q"
              v-model="featureId_q"
              title="功能"
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
          <!-- <td>
            <label
              id="lblOwner_q"
              name="lblOwner_q"
              class="col-form-label-sm text-right"
              style="width: 51px"
            >
              拥有者
            </label>
          </td>
          <td>
            <input
              id="txtOwner_q"
              name="txtOwner_q"
              class="form-control form-control-sm"
              style="width: 90px"
            />
          </td> -->

          <td class="text-left">
            <select
              id="ddlTabMainTypeId_q"
              v-model="tabMainTypeId_q"
              title="表主类型"
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

          <td>
            <select
              id="ddlTabTypeId_q"
              v-model="tabTypeId_q"
              title="表类型"
              class="form-control form-control-sm"
              style="width: 80px"
            >
              <option v-for="(item, index) in arrTabType" :key="index" :value="item.tabTypeId">
                {{ item.tabTypeName }}
              </option></select
            >
          </td>

          <td>
            <select
              id="ddlPrimaryTypeId_q"
              v-model="primaryTypeId_q"
              title="主键类型"
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

          <td>
            <select id="ddlIsShare_q" class="form-control form-control-sm" style="width: 90px">
              <option value="0">选择(共享表?))</option>
              <option value="true">是-共享</option>
              <option value="false">否-不共享</option></select
            >
          </td>
          <td>
            <button
              id="btnQuery"
              type="submit"
              name="btnQuery"
              class="btn btn-outline-warning btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>

          <td>
            <button
              id="btnExportExcel"
              type="submit"
              name="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
              @click="btn_Click('ExportExcel', '')"
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
            class="col-form-label-sm text-info"
            style="width: 250px"
          >
            工程表列表
          </label>
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnAddNewRecord"
            name="btnAddNewRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制</button
          >
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              id="btnSetDefaCmPrjId"
              name="btnSetDefaCmPrjId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetDefaCmPrjId', '')"
              >设置默认Cm项目</button
            >
            <button
              id="btnRemoveDefaCmPrjId"
              name="btnRemoveDefaCmPrjId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('RemoveDefaCmPrjId', '')"
              >从默认项目移除</button
            >
          </div>
        </li>
        <li class="nav-item ml-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlCacheModeId_SetFldValue"
              name="ddlCacheModeId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 90px"
            ></select>
            <button
              id="btnSetCacheModeId"
              name="btnSetCacheModeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetCacheModeId', '')"
              >设置缓存方式</button
            >
          </div>
        </li>
        <li class="nav-item ml-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlIsShare_SetFldValue"
              class="form-control form-control-sm"
              style="width: 50px"
            ></select>
            <button
              id="btnSetIsShare"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetIsShare', '')"
              >设置共享</button
            >
          </div>
        </li>
        <li class="nav-item ml-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlFuncModuleAgcId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 90px"
            ></select>
            <button
              id="btnSetFuncModuleAgcId"
              name="btnSetFuncModuleAgcId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetFuncModuleAgcId', '')"
              >设置模块</button
            >
          </div>
        </li>
        <li class="nav-item ml-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlSetTabStateId_SetFldValue"
              name="ddlSetTabStateId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 90px"
            ></select>
            <button
              id="btnSetTabStateId"
              name="btnSetTabStateId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetTabStateId', '')"
              >设置表状态</button
            >
          </div>
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnCheckTabFlds"
            name="btnCheckTabFlds"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CheckTabFlds', '')"
            >检查表字段</button
          >
        </li>
        <li class="nav-item ml-1">
          <button
            id="btnCheckTabFlds"
            name="btnCheckTabFlds"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('GetTabRecNum', '')"
            >获取记录数</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List">
        <PrjTab_LstCom
          :items="dataList"
          :show-error-message="showErrorMessage"
          :empty-rec-num-info="emptyRecNumInfo"
          @on-edit-tab-relainfo="EditTabRelaInfo"
          @on-sort-column="SortColumn"
        ></PrjTab_LstCom
      ></div>

      <div id="divPager" class="pager"> </div>
      <input id="hidSortPrjTabBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PrjTab_EditCom ref="refPrjTab_Edit"></PrjTab_EditCom>
    <!--详细信息层-->
    <!-- <PrjTab_DetailCom ref="refPrjTab_Detail" :is-dialog="true"></PrjTab_DetailCom> -->
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { useRoute, useRouter } from 'vue-router';
  import PrjTabCRUDEx from '@/views/Table_Field/PrjTabCRUDEx';

  import PrjTab_EditCom from '@/views/Table_Field/PrjTab_Edit.vue';
  import PrjTab_LstCom from '@/views/Table_Field/PrjTab_List.vue';

  import { clsPrjTabENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  // import router from '@/router';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refPrjTab_Edit,
    refPrjTab_Detail,
    FeatureTypeId_Static,
    featureId_q,
    PrjId_Session,
    funcModuleAgcId_q,
    tabStateId_q,
    tabMainTypeId_q,
    tabTypeId_q,
    cacheModeId_q,
    sqlDsTypeId_q,
    tabName_q,
    tabCnName_q,
    isUseCache_q,
    prjId_q,
    isReleToSqlTab_q,
    tabStateId_f,
    includeFldId_q,
    cacheModeId_f,
    funcModuleAgcId_f,
    primaryTypeId_q,
    TabId_Static,
    Bool_True_Default,
    CmPrjId_Local,
  } from '@/views/Table_Field/PrjTabVueShare';
  import { clsvPrjFeatureSimEN } from '@/ts/L0Entity/PrjFunction/clsvPrjFeatureSimEN';
  import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
  import { clsTabStateEN, enumTabState } from '@/ts/L0Entity/Table_Field/clsTabStateEN';
  import { clsTabTypeEN } from '@/ts/L0Entity/Table_Field/clsTabTypeEN';
  import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
  import { clsCacheModeEN } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
  import { clsTabMainTypeEN } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
  import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import { FuncModule_Agc_GetArrFuncModule_AgcByPrjId } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
  import { TabState_GetArrTabState } from '@/ts/L3ForWApi/Table_Field/clsTabStateWApi';
  import { TabMainType_GetArrTabMainType } from '@/ts/L3ForWApi/Table_Field/clsTabMainTypeWApi';
  import { TabType_GetArrTabType } from '@/ts/L3ForWApi/Table_Field/clsTabTypeWApi';
  import { SQLDSType_GetArrSQLDSType } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
  import { CacheMode_GetArrCacheModeByInUse } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
  import { vPrjFeatureSim_GetArrvPrjFeatureSimByFeatureTypeId } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
  import { clsPrimaryTypeEN } from '@/ts/L0Entity/Table_Field/clsPrimaryTypeEN';
  import { PrimaryType_GetArrPrimaryType } from '@/ts/L3ForWApi/Table_Field/clsPrimaryTypeWApi';

  import { enumPrjFeatureType } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { vFieldTab_SimEx_GetDdlDataByPrjIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  export default defineComponent({
    name: 'PrjTabCRUD',
    components: {
      // 组件注册
      PrjTab_EditCom,

      PrjTab_LstCom,
    },
    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      TabId_Static.value = '';
      FeatureTypeId_Static.value = enumPrjFeatureType.TabFeature_03;
      Bool_True_Default.value = true;
      const route = useRoute();
      const router = useRouter();

      const arrFuncModule_Agc = ref<clsFuncModule_AgcEN[] | null>([]);
      const arrTabState = ref<clsTabStateEN[] | null>([]);
      const arrTabMainType = ref<clsTabMainTypeEN[] | null>([]);
      const arrTabType = ref<clsTabTypeEN[] | null>([]);
      const arrSQLDSType = ref<clsSQLDSTypeEN[] | null>([]);
      const arrCacheMode = ref<clsCacheModeEN[] | null>([]);
      const arrvPrjFeatureSim = ref<clsvPrjFeatureSimEN[] | null>([]);
      const arrPrimaryType = ref<clsPrimaryTypeEN[] | null>([]);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);

      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
      });
      async function BindDdl4QryRegion() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        const bolBool_True_Default = true; //在switch中未找到相关类型: tsDefaultValue(in AGC.BusinessLogicEx.FuncParaType:GetTsTypeStr)

        arrFuncModule_Agc.value = await FuncModule_Agc_GetArrFuncModule_AgcByPrjId(strPrjId); //查询区域
        funcModuleAgcId_q.value = '0';

        arrTabState.value = await TabState_GetArrTabState(); //查询区域
        tabStateId_q.value = enumTabState.Normal_01;

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
          FeatureTypeId_Static.value,
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
      const showErrorMessage = ref(false);
      // const PrjTab_LstRef = ref();
      // const dataList = ref<Array<clsPrjTabENEx>>([]);
      // const dataList: Array<clsPrjTabENEx> = ref([]);
      const dataList = ref<Array<clsPrjTabENEx>>([]);
      const emptyRecNumInfo = ref('');
      const strTitle = ref('工程表维护');

      const refDivDataLst = ref();
      onMounted(() => {
        PrjTabCRUDEx.ShowLst = ShowLst;
        PrjTabCRUDEx.ShowEmptyRecNumInfo = ShowEmptyRecNumInfo;

        const objPage = new PrjTabCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });

      const ShowLst = async (
        arrObjLst: Array<clsPrjTabENEx>,
        bolIsShowErrMsg: boolean,
      ): Promise<void> => {
        // console.log(arrObjLst);
        // alert('ShowLst in ViewInfoCRUD');
        dataList.value = arrObjLst;
        showErrorMessage.value = bolIsShowErrMsg;
      };
      const ShowEmptyRecNumInfo = (strEmptyRecNumInfo: string): void => {
        dataList.value = new Array<clsPrjTabENEx>();
        emptyRecNumInfo.value = strEmptyRecNumInfo;
      };
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
          case 'GetTabRecNum':
            break;
          default:
            break;
        }
        PrjTabCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      const EditTabRelaInfo = async (data: any) => {
        console.log('data:', data);
        clsPrivateSessionStorage.tabId_Main = data.tabId;
        // const strViewId = clsPrivateSessionStorage.viewId_Main;
        // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
        // const arrRegionTypeId = await ViewInfoEx_GetRegionTypeIdLst(strViewId, strCmPrjId);
        // clsPrivateSessionStorage.regionTypeIdLst = arrRegionTypeId;

        // router.push({ name: 'account-editTabRelaInfo' });

        console.log('route:', route);
        const params = route.params.tabId ? { tabId: route.params.tabId } : { tabId: data.tabId };
        router.push({ name: 'account-editTabRelaInfo', params });
      };
      return {
        showErrorMessage,
        // PrjTab_LstRef,
        dataList,
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        emptyRecNumInfo,
        refPrjTab_Edit,
        refPrjTab_Detail,

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
        primaryTypeId_q,
        EditTabRelaInfo,
        arrvFieldTab_Sim,
        includeFldId_q,
      };
    },
    watch: {
      // 数据监听
    },

    methods: {
      // 方法定义

      async SortColumn(data: any) {
        console.log('data:', data);

        const objPage = new PrjTabCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },
    },
  });
</script>
<style scoped>
  .list-item {
    margin-bottom: 10px; /* Adjust the value to control the spacing */
  }
</style>
