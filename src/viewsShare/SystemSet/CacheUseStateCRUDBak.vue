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
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblCacheModeId_q"
              name="lblCacheModeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >缓存方式Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCacheModeId_q"
              v-model="cacheModeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrCacheMode" :key="index" :value="item.cacheModeId">
                {{ item.cacheModeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblCacheKey_q"
              name="lblCacheKey_q"
              class="col-form-label text-right"
              style="width: 90px"
              >缓存关键字
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCacheKey_q"
              v-model="cacheKey_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
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
            id="lblCacheUseStateList"
            name="lblCacheUseStateList"
            class="col-form-label text-info"
            style="width: 250px"
            >缓存使用状态列表
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
            id="btnDetail"
            name="btnDetail"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDetail_Click"
            >详细</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <CacheUseState_ListCom
        ref="refCacheUseState_List"
        :items="dataListCacheUseState"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </CacheUseState_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortCacheUseStateBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CacheUseState_EditCom ref="refCacheUseState_Edit"></CacheUseState_EditCom>
    <!--详细信息层-->
    <CacheUseState_DetailCom ref="refCacheUseState_Detail"></CacheUseState_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refCacheUseState_Edit,
    refCacheUseState_Detail,
    refCacheUseState_List,
    showErrorMessage,
    dataListCacheUseState,
    emptyRecNumInfo,
    UserId_Local,
    IsVisible_Giving,
    cacheModeId_q,
    cacheKey_q,
    userId_q,
  } from '@/viewsShare/SystemSet/CacheUseStateVueShare';
  import { clsCacheUseStateEN } from '@/ts/L0Entity/SystemSet/clsCacheUseStateEN';
  import CacheUseState_EditEx from '@/viewsShare/SystemSet/CacheUseState_EditEx';
  import CacheUseState_DetailEx from '@/viewsShare/SystemSet/CacheUseState_DetailEx';
  import { Format } from '@/ts/PubFun/clsString';
  import CacheUseStateCRUDEx from '@/viewsShare/SystemSet/CacheUseStateCRUDEx';
  import CacheUseState_EditCom from '@/viewsShare/SystemSet/CacheUseState_Edit.vue';
  import CacheUseState_DetailCom from '@/viewsShare/SystemSet/CacheUseState_Detail.vue';
  import CacheUseState_ListCom from '@/viewsShare/SystemSet/CacheUseState_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { clsCacheModeEN } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
  import { CacheMode_GetArrCacheModeByInUse } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  export default defineComponent({
    name: 'CacheUseStateCRUD',
    components: {
      // 组件注册
      CacheUseState_EditCom,
      CacheUseState_DetailCom,
      CacheUseState_ListCom,
    },

    setup() {
      UserId_Local.value = clsPrivateSessionStorage.userId;
      IsVisible_Giving.value = true;
      const objPage = ref<CacheUseStateCRUDEx>();
      const objPage_Edit = ref<CacheUseState_EditEx>();
      const objPage_Detail = ref<CacheUseState_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'CacheUseStateCRUD';

      const arrCacheMode = ref<clsCacheModeEN[] | null>([]);

      /* 修改记录
   (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDetail_Click)
  */
      const btnDetail_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Detail.value = new CacheUseState_DetailEx(objPage.value);
        if (objPage_Detail.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFstKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        const lngmId = Number(strFstKeyId);
        opType.value = 'Detail';
        const bolIsSuccess = await objPage_Detail.value.ShowDialog_CacheUseState('Detail');
        if (bolIsSuccess == false) return;
        // 为编辑区绑定下拉框
        //const conBindDdl = await this.BindDdl4DetailRegion();
        objPage_Detail.value.DetailRecord4Func(lngmId);
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
        await objPage.value.BindGv_CacheUseState4Func(refDivList.value);
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
        objPage_Edit.value = new CacheUseState_EditEx('CacheUseState_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_CacheUseState(opType.value);
          if (bolIsSuccess == false) return;

          if (['02', '03', '06'].indexOf(clsCacheUseStateEN.PrimaryTypeId) > -1) {
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

      /** 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new CacheUseState_EditEx('CacheUseState_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFstKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        const lngmId = Number(strFstKeyId);
        if (lngmId == 0) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_CacheUseState(opType.value);
          if (bolIsSuccess == false) return;

          const lngKeyId = lngmId;
          const update = await objPage_Edit.value.UpdateRecord(lngKeyId);
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
        await objPage.value.ExportExcel_CacheUseState4Func();
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsCacheUseStateEN._CurrTabName;
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
          await objPage.value.BindGv_CacheUseState4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const bolIsVisible_Giving = false; //给定值

        arrCacheMode.value = await CacheMode_GetArrCacheModeByInUse(bolIsVisible_Giving); //查询区域
        cacheModeId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('缓存使用状态维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        CacheUseStateCRUDEx.vuebtn_Click = btn_Click;
        CacheUseStateCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new CacheUseStateCRUDEx();
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
        CacheUseStateCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListCacheUseState,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refCacheUseState_Edit,
        refCacheUseState_Detail,
        refCacheUseState_List,
        cacheModeId_q,
        cacheKey_q,
        userId_q,
        arrCacheMode,
        btnDetail_Click,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnExportExcel_Click,
        btnDelete_Click,
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
        router.push({ name: 'editCacheUseState', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new CacheUseStateCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
