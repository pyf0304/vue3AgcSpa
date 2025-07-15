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
              id="lblVarId_q"
              name="lblVarId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >变量Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlVarId_q"
              v-model="varId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                {{ item.varName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblPrjId_q"
              name="lblPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >工程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrjId_q"
              v-model="prjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrProjects" :key="index" :value="item.prjId">
                {{ item.prjName }}
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
            id="lblGCVariablePrjIdRelaList"
            name="lblGCVariablePrjIdRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >GCVariablePrjIdRela列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <GCVariablePrjIdRela_ListCom
        ref="refGCVariablePrjIdRela_List"
        :items="dataListGCVariablePrjIdRela"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </GCVariablePrjIdRela_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortGCVariablePrjIdRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <GCVariablePrjIdRela_EditCom ref="refGCVariablePrjIdRela_Edit"></GCVariablePrjIdRela_EditCom>
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
    GetCheckedKeyLstsInDivObj,
    GetFirstCheckedKeyLstInDiv,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refGCVariablePrjIdRela_Edit,
    refGCVariablePrjIdRela_List,
    showErrorMessage,
    dataListGCVariablePrjIdRela,
    emptyRecNumInfo,
    PrjId_Session,
    varId_q,
    prjId_q,
  } from '@/views/GeneCode/GCVariablePrjIdRelaVueShare';
  import { clsGCVariablePrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaEN';
  import GCVariablePrjIdRela_EditEx from '@/views/GeneCode/GCVariablePrjIdRela_EditEx';
  import { Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import GCVariablePrjIdRelaCRUDEx from '@/views/GeneCode/GCVariablePrjIdRelaCRUDEx';
  import GCVariablePrjIdRela_EditCom from '@/views/GeneCode/GCVariablePrjIdRela_Edit.vue';
  import GCVariablePrjIdRela_ListCom from '@/views/GeneCode/GCVariablePrjIdRela_List.vue';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
  import { GCVariable_GetArrGCVariable } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
  import { Projects_GetArrProjects } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
  import { GCVariablePrjIdRela_SplitKeyLst } from '@/ts/L3ForWApi/GeneCode/clsGCVariablePrjIdRelaWApi';
  export default defineComponent({
    name: 'GCVariablePrjIdRelaCRUD',
    components: {
      // 组件注册
      GCVariablePrjIdRela_EditCom,
      GCVariablePrjIdRela_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      const objPage = ref<GCVariablePrjIdRelaCRUDEx>();
      const objPage_Edit = ref<GCVariablePrjIdRela_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'GCVariablePrjIdRelaCRUD';

      const arrGCVariable = ref<clsGCVariableEN[] | null>([]);
      const arrProjects = ref<clsProjectsEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_GCVariablePrjIdRela4Func(refDivList.value);
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
        objPage_Edit.value = new GCVariablePrjIdRela_EditEx(
          'GCVariablePrjIdRela_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GCVariablePrjIdRela(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsGCVariablePrjIdRelaEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new GCVariablePrjIdRela_EditEx(
          'GCVariablePrjIdRela_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strKeyLst = GetFirstCheckedKeyLstInDiv(divVarSet.refDivList);
        const objKeyLst = GCVariablePrjIdRela_SplitKeyLst(strKeyLst);
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GCVariablePrjIdRela(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(objKeyLst.varId, objKeyLst.prjId);
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

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsGCVariablePrjIdRelaEN._CurrTabName;
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
          const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
          if (arrKeyLsts.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyLsts.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord_KeyLst(arrKeyLsts);
          await objPage.value.BindGv_GCVariablePrjIdRela4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
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
        await objPage.value.ExportExcel_GCVariablePrjIdRela4Func();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrGCVariable.value = await GCVariable_GetArrGCVariable(); //查询区域
        varId_q.value = '0';

        arrProjects.value = await Projects_GetArrProjects(); //查询区域
        prjId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('GCVariablePrjIdRela维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        GCVariablePrjIdRelaCRUDEx.vuebtn_Click = btn_Click;
        GCVariablePrjIdRelaCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new GCVariablePrjIdRelaCRUDEx();
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
        GCVariablePrjIdRelaCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListGCVariablePrjIdRela,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refGCVariablePrjIdRela_Edit,
        refGCVariablePrjIdRela_List,
        varId_q,
        prjId_q,
        arrGCVariable,
        arrProjects,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
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
        router.push({ name: 'editGCVariablePrjIdRela', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new GCVariablePrjIdRelaCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
