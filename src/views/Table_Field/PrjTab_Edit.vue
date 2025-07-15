<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 720px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trTabName">
          <td class="text-right">
            <label id="lblTabName" class="col-form-label text-right" style="width: 90px">
              表名
            </label>
          </td>
          <td class="text-left" colSpan="3">
            <input
              id="txtTabName"
              v-model="tabName"
              class="form-control form-control-sm"
              style="width: 500px"
            />
          </td>
        </tr>
        <tr id="trTabCnName">
          <td class="text-right">
            <label id="lblTabCnName" class="col-form-label text-right" style="width: 90px">
              表中文名
            </label>
          </td>
          <td class="text-left" colSpan="3">
            <input
              id="txtTabCnName"
              v-model="tabCnName"
              class="form-control form-control-sm"
              style="width: 500px"
            />
          </td>
        </tr>
        <tr id="trRelaTabId4View">
          <td class="text-right">
            <label id="lblRelaTabId4View" class="col-form-label text-right" style="width: 90px">
              视图相关表
            </label>
          </td>
          <td class="text-left" colSpan="3">
            <select
              id="ddlRelaTabId4View"
              v-model="relaTabId4View"
              class="form-control form-control-sm"
              style="width: 500px"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trFuncModuleAgcId">
          <td class="text-right">
            <label id="lblSqlDsTypeId" class="col-form-label text-right" style="width: 90px">
              数据源类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSqlDsTypeId"
              v-model="sqlDsTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            >
              <option v-for="(item, index) in arrSQLDSType" :key="index" :value="item.sqlDsTypeId">
                {{ item.sqlDsTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label id="lblFuncModuleAgcId" class="col-form-label text-right" style="width: 90px">
              模块
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncModuleAgcId"
              v-model="funcModuleAgcId"
              class="form-control form-control-sm"
              style="width: 200px"
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
        </tr>
        <tr id="trTabTypeId">
          <td class="text-right">
            <label id="lblTabMainTypeId" class="col-form-label text-right" style="width: 90px">
              表主类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabMainTypeId"
              v-model="tabMainTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
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
            <label id="lblTabTypeId" class="col-form-label text-right" style="width: 90px">
              表类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabTypeId"
              v-model="tabTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            >
              <option v-for="(item, index) in arrTabType" :key="index" :value="item.tabTypeId">
                {{ item.tabTypeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trCacheModeId">
          <td class="text-left" colSpan="4">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsUseCache"
                v-model="isUseCache"
                type="checkbox"
                Text="后台是否使用Cache"
              /><label for="chkIsUseCache">是否使用Cache</label></span
            >
          </td>
        </tr>
        <tr id="trCacheClassifyField2">
          <td class="text-right">
            <label
              id="lblCacheClassifyField"
              class="col-form-label text-right"
              style="width: 100px"
            >
              缓存分类1-后台
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCacheClassifyField"
              v-model="cacheClassifyField"
              class="form-control form-control-sm"
              style="width: 200px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblCacheClassifyField2"
              class="col-form-label text-right"
              style="width: 100px"
            >
              缓存分类2-后台
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCacheClassifyField2"
              v-model="cacheClassifyField2"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>

        <tr id="trCacheModeId">
          <td class="text-right">
            <label id="lblCacheModeId" class="col-form-label text-right" style="width: 100px">
              前台缓存方式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCacheModeId"
              v-model="cacheModeId"
              class="form-control form-control-sm"
              style="width: 200px"
            >
              <option v-for="(item, index) in arrCacheMode" :key="index" :value="item.cacheModeId">
                {{ item.cacheModeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trCacheClassifyFieldTS">
          <td class="text-right">
            <label
              id="lblCacheClassifyField"
              class="col-form-label text-right"
              style="width: 100px"
            >
              缓存分类1-TS
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCacheClassifyFieldTS"
              v-model="cacheClassifyFieldTS"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label id="lblParaVar1TS" class="col-form-label text-right" style="width: 90px">
              参数变量_TS
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlParaVar1TS"
              v-model="paraVar1TS"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                {{ item.varName }}
              </option></select
            >
          </td>
        </tr>

        <tr id="trCacheClassifyField2TS">
          <td class="text-right">
            <label
              id="lblCacheClassifyField2"
              class="col-form-label text-right"
              style="width: 100px"
            >
              缓存分类2-TS
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCacheClassifyField2TS"
              v-model="cacheClassifyField2TS"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label id="lblParaVar2TS" class="col-form-label text-right" style="width: 90px">
              参数变量2_TS
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlParaVar2TS"
              v-model="paraVar2TS"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                {{ item.varName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trWhereFormat">
          <td class="text-right" ColSpan="1">
            <label id="lblWhereFormat" class="col-form-label text-right" style="width: 90px">
              缓存条件格式
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtWhereFormat"
              v-model="whereFormat"
              class="form-control form-control-sm"
              style="width: 500px"
            />
          </td>
        </tr>
        <tr id="trWhereFormatBack">
          <td class="text-right" ColSpan="1">
            <label id="lblWhereFormatBack" class="col-form-label text-right" style="width: 90px">
              后台缓存条件格式
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtWhereFormatBack"
              v-model="whereFormatBack"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIsMultiKeyClassify">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsMultiKeyClassify"
                v-model="isMultiKeyClassify"
                type="checkbox"
                Text="是否可以多个关键字分类共存"
              /><label for="chkIsMultiKeyClassify">是否可以多个关键字分类共存</label></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsUseDelSign"
                v-model="isUseDelSign"
                type="checkbox"
                Text="是否使用删除标记"
              /><label for="chkIsUseDelSign">是否使用删除标记</label></span
            >
          </td>
        </tr>

        <tr id="trTabStateId">
          <td class="text-left" colSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsRefresh4RelaView"
                v-model="isRefresh4RelaView"
                type="checkbox"
                Text="是否刷新相关视图"
              /><label for="chkIsRefresh4RelaView">是否刷新相关视图</label></span
            >
          </td>
          <td class="text-right">
            <label id="lblTabStateId" class="col-form-label text-right" style="width: 90px">
              表状态
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabStateId"
              v-model="tabStateId"
              class="form-control form-control-sm"
              style="width: 200px"
            >
              <option v-for="(item, index) in arrTabState" :key="index" :value="item.tabStateId">
                {{ item.tabStateName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trIsReleToSqlTab">
          <td class="text-right">
            <label id="lblParentClass" class="col-form-label text-right" style="width: 90px">
              父类
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtParentClass"
              v-model="parentClass"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-left" colSpan="1">
            <span
              class="form-control form-control-sm"
              style="width: 200px"
              title="是否为共享表，共享表可以在多个工程中共享"
            >
              <input
                id="chkIsReleToSqlTab"
                v-model="isReleToSqlTab"
                type="checkbox"
                Text="是否与SQL表相关"
              /><label for="chkIsReleToSqlTab">是否与SQL表相关</label>
            </span>
          </td>
          <td class="text-left" ColSpan="1">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsShare" v-model="isShare" type="checkbox" Text="是否共享表" /><label
                for="chkIsShare"
                >是否共享表</label
              ></span
            >
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" class="col-form-label text-right" style="width: 90px"> 说明 </label>
          </td>
          <td class="text-left" colSpan="3">
            <input
              id="txtMemo"
              v-model="memo"
              class="form-control form-control-sm"
              style="width: 500px"
            />
          </td>
        </tr>
        <tr id="trTabId">
          <td class="text-right">
            <label id="lblTabId" class="col-form-label text-right" style="width: 90px">
              表ID
            </label>
          </td>
          <td class="text-left" colSpan="3">
            <input id="txtTabId" class="form-control form-control-sm" style="width: 500px" />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelPrjTab" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button id="btnSubmitPrjTab" type="primary" @click="btnPrjTab_Edit_Click('Submit', '')">{{
        strSubmitButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import PrjTab_EditEx from '@/views/Table_Field/PrjTab_EditEx';
  import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
  import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
  import { clsTabMainTypeEN } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
  import { clsTabTypeEN } from '@/ts/L0Entity/Table_Field/clsTabTypeEN';
  import { clsCacheModeEN } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsTabStateEN } from '@/ts/L0Entity/Table_Field/clsTabStateEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { SQLDSType_GetArrSQLDSType } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
  import { FuncModule_Agc_GetArrFuncModule_AgcByPrjId } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
  import { TabMainType_GetArrTabMainType } from '@/ts/L3ForWApi/Table_Field/clsTabMainTypeWApi';
  import { TabType_GetArrTabType } from '@/ts/L3ForWApi/Table_Field/clsTabTypeWApi';
  import { CacheMode_GetArrCacheModeByInUse } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { TabState_GetArrTabState } from '@/ts/L3ForWApi/Table_Field/clsTabStateWApi';

  import { refDivEdit, PrjId_Session, CmPrjId_Local } from '@/views/Table_Field/PrjTabVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, Is0EqEmpty, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { PrjTab_Edit } from '@/viewsBase/Table_Field/PrjTab_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  import { GCVariableEx_GetArrGCVariableByPrjIdCache } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
  export default defineComponent({
    name: 'PrjTabEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const tabName = ref('');
      const tabCnName = ref('');
      const relaTabId4View = ref('');
      const sqlDsTypeId = ref('');
      const funcModuleAgcId = ref('');
      const tabMainTypeId = ref('');
      const tabTypeId = ref('');
      const isUseCache = ref(true);
      const cacheModeId = ref('');
      const cacheClassifyField = ref('');
      const cacheClassifyField2 = ref('');
      const isRefresh4RelaView = ref(true);
      const tabStateId = ref('');
      const parentClass = ref('');
      const isReleToSqlTab = ref(true);
      const memo = ref('');
      const tabId = ref('');
      const prjId = ref('');
      const cacheClassifyFieldTS = ref('');
      const paraVar1TS = ref('');
      const cacheClassifyField2TS = ref('');
      const paraVar2TS = ref('');
      const isMultiKeyClassify = ref(true);
      const whereFormat = ref('');
      const isShare = ref(true);
      const isUseDelSign = ref(true);
      const whereFormatBack = ref('');
      const updUserId = ref('');
      const updDate = ref('');

      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrSQLDSType = ref<clsSQLDSTypeEN[] | null>([]);
      const arrFuncModule_Agc = ref<clsFuncModule_AgcEN[] | null>([]);
      const arrTabMainType = ref<clsTabMainTypeEN[] | null>([]);
      const arrTabType = ref<clsTabTypeEN[] | null>([]);
      const arrCacheMode = ref<clsCacheModeEN[] | null>([]);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrTabState = ref<clsTabStateEN[] | null>([]);
      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        const bolBool_True_Default = true; //在switch中未找到相关类型: tsDefaultValue(in AGC.BusinessLogicEx.FuncParaType:GetTsTypeStr)
        // const strTabId_Static = TabId_Static.value; //静态变量;//静态变量

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        relaTabId4View.value = '0';

        arrSQLDSType.value = await SQLDSType_GetArrSQLDSType(); //编辑区域
        sqlDsTypeId.value = '0';

        arrFuncModule_Agc.value = await FuncModule_Agc_GetArrFuncModule_AgcByPrjId(strPrjId); //编辑区域
        funcModuleAgcId.value = '0';

        arrTabMainType.value = await TabMainType_GetArrTabMainType(); //编辑区域
        tabMainTypeId.value = '0';

        arrTabType.value = await TabType_GetArrTabType(); //编辑区域
        tabTypeId.value = '0';

        arrCacheMode.value = await CacheMode_GetArrCacheModeByInUse(bolBool_True_Default); //编辑区域
        cacheModeId.value = '0';

        // arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
        //   strTabId_Static,
        // ); //编辑区域
        cacheClassifyField.value = '0';

        cacheClassifyField2.value = '0';

        arrTabState.value = await TabState_GetArrTabState(); //编辑区域
        tabStateId.value = '0';

        arrGCVariable.value = await GCVariableEx_GetArrGCVariableByPrjIdCache(strPrjId); //编辑区域
        paraVar1TS.value = '0';

        paraVar2TS.value = '0';
      }
      async function BindDdl4EditRegionInDivStep2() {
        const strTabId_Static = tabId.value; //静态变量;//静态变量
        if (strTabId_Static == '') {
          const strMsg = Format('PrjTabEdit.TabId_Static.value为空,请检查！');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        cacheClassifyField.value = '0';
        cacheClassifyField2.value = '0';
        cacheClassifyFieldTS.value = '0';
        cacheClassifyField2TS.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjPrjTabEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataPrjTabObj() {
        const pobjPrjTabEN = new clsPrjTabEN();
        pobjPrjTabEN.SetTabName(tabName.value); // 表名
        pobjPrjTabEN.SetTabCnName(tabCnName.value); // 表中文名
        pobjPrjTabEN.SetRelaTabId4View(Is0EqEmpty(relaTabId4View.value)); // 视图相关表
        pobjPrjTabEN.SetSqlDsTypeId(sqlDsTypeId.value); // 数据源类型
        pobjPrjTabEN.SetFuncModuleAgcId(funcModuleAgcId.value); // 模块
        pobjPrjTabEN.SetTabMainTypeId(tabMainTypeId.value); // 表主类型
        pobjPrjTabEN.SetTabTypeId(tabTypeId.value); // 表类型
        pobjPrjTabEN.SetIsUseCache(isUseCache.value); // 是否使用Cache
        pobjPrjTabEN.SetCacheModeId(Is0EqEmpty(cacheModeId.value)); // 缓存方式
        pobjPrjTabEN.SetCacheClassifyField(Is0EqEmpty(cacheClassifyField.value)); // 缓存分类字段
        pobjPrjTabEN.SetCacheClassifyField2(Is0EqEmpty(cacheClassifyField2.value)); // 缓存分类字段2
        pobjPrjTabEN.SetCacheClassifyFieldTS(Is0EqEmpty(cacheClassifyFieldTS.value)); // 缓存分类字段_TS
        pobjPrjTabEN.SetParaVar1TS(Is0EqEmpty(paraVar1TS.value)); // 参数变量_TS
        pobjPrjTabEN.SetCacheClassifyField2TS(Is0EqEmpty(cacheClassifyField2TS.value)); // 缓存分类字段2_TS
        pobjPrjTabEN.SetParaVar2TS(Is0EqEmpty(paraVar2TS.value)); // 参数变量2_TS

        pobjPrjTabEN.SetIsRefresh4RelaView(isRefresh4RelaView.value); // 是否刷新相关视图
        pobjPrjTabEN.SetTabStateId(tabStateId.value); // 表状态
        pobjPrjTabEN.SetParentClass(parentClass.value); // 父类
        pobjPrjTabEN.SetIsReleToSqlTab(isReleToSqlTab.value); // 是否与SQL表相关
        pobjPrjTabEN.SetMemo(memo.value); // 说明
        pobjPrjTabEN.SetTabId(tabId.value); // 表ID
        pobjPrjTabEN.SetPrjId(PrjId_Session.value); // 工程ID

        pobjPrjTabEN.SetIsMultiKeyClassify(isMultiKeyClassify.value); // 是否可以多个关键字分类共存
        pobjPrjTabEN.SetWhereFormat(whereFormat.value); // 缓存条件格式
        pobjPrjTabEN.SetIsShare(isShare.value); // 是否共享表
        pobjPrjTabEN.SetIsUseDelSign(isUseDelSign.value); // 是否使用删除标记
        pobjPrjTabEN.SetWhereFormatBack(whereFormatBack.value); // 后台缓存条件格式
        pobjPrjTabEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        pobjPrjTabEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjPrjTabEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjPrjTabEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjTabObj(pobjPrjTabEN: clsPrjTabEN) {
        // const strThisFuncName = this.GetDataFromPrjTabClass.name;
        tabName.value = pobjPrjTabEN.tabName; // 表名
        tabCnName.value = pobjPrjTabEN.tabCnName; // 表中文名
        relaTabId4View.value = pobjPrjTabEN.relaTabId4View; // 视图相关表
        sqlDsTypeId.value = pobjPrjTabEN.sqlDsTypeId; // 数据源类型
        funcModuleAgcId.value = pobjPrjTabEN.funcModuleAgcId; // 模块
        tabMainTypeId.value = pobjPrjTabEN.tabMainTypeId; // 表主类型
        tabTypeId.value = pobjPrjTabEN.tabTypeId; // 表类型
        isUseCache.value = pobjPrjTabEN.isUseCache; // 是否使用Cache
        try {
          cacheModeId.value = pobjPrjTabEN.cacheModeId; // 缓存方式
          cacheClassifyField.value = pobjPrjTabEN.cacheClassifyField; // 缓存分类字段
          cacheClassifyField2.value = pobjPrjTabEN.cacheClassifyField2; // 缓存分类字段2
          cacheClassifyFieldTS.value = pobjPrjTabEN.cacheClassifyFieldTS; // 缓存分类字段
          cacheClassifyField2TS.value = pobjPrjTabEN.cacheClassifyField2TS; // 缓存分类字段2
        } catch (e) {}

        isMultiKeyClassify.value = pobjPrjTabEN.isMultiKeyClassify; // 是否可以多个关键字分类共存2
        isUseDelSign.value = pobjPrjTabEN.isUseDelSign; // 是否可以多个关键字分类共存
        whereFormat.value = pobjPrjTabEN.whereFormat; // 缓存条件格式
        whereFormatBack.value = pobjPrjTabEN.whereFormatBack; // 缓存条件格式
        paraVar1TS.value = pobjPrjTabEN.paraVar1TS; // 参数变量_TS
        paraVar2TS.value = pobjPrjTabEN.paraVar2TS; // 参数变量2_TS
        isRefresh4RelaView.value = pobjPrjTabEN.isRefresh4RelaView; // 是否刷新相关视图
        tabStateId.value = pobjPrjTabEN.tabStateId; // 表状态
        parentClass.value = pobjPrjTabEN.parentClass; // 父类
        isReleToSqlTab.value = pobjPrjTabEN.isReleToSqlTab; // 是否与SQL表相关
        isShare.value = pobjPrjTabEN.isShare; // 是否为共享表
        memo.value = pobjPrjTabEN.memo; // 说明
        tabId.value = pobjPrjTabEN.tabId; // 表ID
        //this.prjId = pobjPrjTabEN.prjId;// 工程ID
      }
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        tabName.value = '';
        tabCnName.value = '';
        relaTabId4View.value = '0';
        sqlDsTypeId.value = '0';
        funcModuleAgcId.value = '0';
        tabMainTypeId.value = '0';
        tabTypeId.value = '0';
        isUseCache.value = false;
        cacheModeId.value = '0';
        cacheClassifyField.value = '0';
        cacheClassifyField2.value = '0';
        isRefresh4RelaView.value = false;
        tabStateId.value = '0';
        parentClass.value = '';
        isReleToSqlTab.value = false;
        memo.value = '';
        tabId.value = '';
        cacheClassifyFieldTS.value = '0';
        paraVar1TS.value = '0';
        cacheClassifyField2TS.value = '0';
        paraVar2TS.value = '0';
        isMultiKeyClassify.value = false;
        whereFormat.value = '';
        isShare.value = false;
        isUseDelSign.value = false;
        whereFormatBack.value = '';
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
              if (['02', '03', '06'].indexOf(clsPrjTabEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (PrjTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsPrjTabEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (PrjTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsPrjTabEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In PrjTab_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (PrjTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsPrjTabEN._CurrTabName, keyId.value);
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
      const strTitle = ref('工程表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<PrjTab_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: PrjTab_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPrjTab':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitPrjTab':
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
          case 'btnCancelPrjTab':
            return strCancelButtonText.value;
          case 'btnSubmitPrjTab':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataPrjTabObj,
        ShowDataFromPrjTabObj,
        Clear,
        btnSubmit_Click,
        tabName,
        tabCnName,
        relaTabId4View,
        sqlDsTypeId,
        funcModuleAgcId,
        tabMainTypeId,
        tabTypeId,
        isUseCache,
        cacheModeId,
        cacheClassifyField,
        cacheClassifyField2,
        isRefresh4RelaView,
        tabStateId,
        parentClass,
        isReleToSqlTab,
        memo,
        tabId,
        prjId,
        cacheClassifyFieldTS,
        paraVar1TS,
        cacheClassifyField2TS,
        paraVar2TS,
        isMultiKeyClassify,
        whereFormat,
        isShare,
        isUseDelSign,
        whereFormatBack,
        updUserId,
        updDate,
        arrvPrjTab_Sim,
        arrSQLDSType,
        arrFuncModule_Agc,
        arrTabMainType,
        arrTabType,
        arrCacheMode,
        arrvFieldTab_Sim,
        arrTabState,
        arrGCVariable,

        SetButtonText,
        GetButtonText,
        BindDdl4EditRegionInDivStep2,
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
        //PrjTab_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPrjTab_Edit_Click(strCommandName: string, strKeyId: string) {
        PrjTab_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
