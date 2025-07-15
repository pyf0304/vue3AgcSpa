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
        <tbody>
          <tr>
            <td class="text-right">
              <label
                id="lblFunctionTemplateId_q"
                name="lblFunctionTemplateId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数模板
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFunctionTemplateId_q"
                v-model="functionTemplateId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrFunctionTemplate"
                  :key="index"
                  :value="item.functionTemplateId"
                >
                  {{ item.functionTemplateName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblRegionTypeId_q"
                name="lblRegionTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >区域类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlRegionTypeId_q"
                v-model="regionTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrRegionType"
                  :key="index"
                  :value="item.regionTypeId"
                >
                  {{ item.regionTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblCodeTypeId_q"
                name="lblCodeTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >代码类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCodeTypeId_q"
                v-model="codeTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
                @change="ddlCodeTypeId_SelectedIndexChanged"
              >
                <option
                  v-for="(item, index) in arrvCodeType_Sim"
                  :key="index"
                  :value="item.codeTypeId"
                >
                  {{ item.codeTypeName }}
                </option>
              </select>
            </td>
            <td class="text-right">
              <label
                id="lblFuncId4GC_q"
                name="lblFuncId4GC_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncId4GC_q"
                v-model="funcId4GC_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrFunction4GeneCode"
                  :key="index"
                  :value="item.funcId4GC"
                >
                  {{ item.funcName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblIsGeneCode_q"
                name="lblIsGeneCode_q"
                class="col-form-label text-right"
                style="width: 90px"
                >是否生成代码
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIsGeneCode_q"
                v-model="isGeneCode_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
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
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblFunctionTemplateRelaList"
            name="lblFunctionTemplateRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >函数与模板关系列表
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
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlFunctionTemplateId_SetFldValue"
              v-model="functionTemplateId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option
                v-for="(item, index) in arrFunctionTemplate"
                :key="index"
                :value="item.functionTemplateId"
              >
                {{ item.functionTemplateName }}
              </option></select
            >
            <button
              id="btnSetFunctionTemplateId"
              name="btnSetFunctionTemplateId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetFunctionTemplateId_Click"
              >设置函数模板Id</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <FunctionTemplateRela_ListCom
        ref="refFunctionTemplateRela_List"
        :items="dataListFunctionTemplateRela"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </FunctionTemplateRela_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFunctionTemplateRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FunctionTemplateRela_EditCom ref="refFunctionTemplateRela_Edit"></FunctionTemplateRela_EditCom>
    <!--详细信息层-->
    <FunctionTemplateRela_DetailCom
      ref="refFunctionTemplateRela_Detail"
    ></FunctionTemplateRela_DetailCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import router from '@/router';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import {
    GetCheckedKeyIdsInDivObj,
    GetSelectValueInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFunctionTemplateRela_Edit,
    refFunctionTemplateRela_Detail,
    refFunctionTemplateRela_List,
    showErrorMessage,
    dataListFunctionTemplateRela,
    emptyRecNumInfo,
    dataColumn,
    ProgLangTypeId_Static,
    CodeTypeId_Static,
    FunctionTemplateId_Static,
    functionTemplateId_q,
    regionTypeId_q,
    codeTypeId_q,
    funcId4GC_q,
    isGeneCode_q,
    functionTemplateId_f,
  } from '@/views/PrjFunction/FunctionTemplateRelaVueShare';
  import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';
  import FunctionTemplateRela_EditEx from '@/views/PrjFunction/FunctionTemplateRela_EditEx';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { confirmDel, BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import FunctionTemplateRelaCRUDEx from '@/views/PrjFunction/FunctionTemplateRelaCRUDEx';
  import FunctionTemplateRela_EditCom from '@/views/PrjFunction/FunctionTemplateRela_Edit.vue';
  import FunctionTemplateRela_DetailCom from '@/views/PrjFunction/FunctionTemplateRela_Detail.vue';
  import FunctionTemplateRela_ListCom from '@/views/PrjFunction/FunctionTemplateRela_List.vue';
  import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
  import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';

  import { FunctionTemplate_GetArrFunctionTemplate } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
  import { RegionType_GetArrRegionType } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
  import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import { Function4GeneCode_GetArrFunction4GeneCodeByFuncCodeTypeId } from '@/ts/L3ForWApi/PrjFunction/clsFunction4GeneCodeWApi';
  import { Function4GeneCodeEx_BindDdl_FuncId4GCByCodeTypeIdInDivCache } from '@/ts/L3ForWApiEx/PrjFunction/clsFunction4GeneCodeExWApi';
  export default defineComponent({
    name: 'FunctionTemplateRelaCRUD',
    components: {
      // 组件注册
      FunctionTemplateRela_EditCom,
      FunctionTemplateRela_DetailCom,
      FunctionTemplateRela_ListCom,
    },

    setup() {
      ProgLangTypeId_Static.value = '';
      CodeTypeId_Static.value = '';
      FunctionTemplateId_Static.value = '';
      const objPage = ref<FunctionTemplateRelaCRUDEx>();
      const objPage_Edit = ref<FunctionTemplateRela_EditEx>();
      // const objPage_Detail = ref<FunctionTemplateRela_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'FunctionTemplateRelaCRUD';

      const arrFunctionTemplate = ref<clsFunctionTemplateEN[] | null>([]);
      const arrRegionType = ref<clsRegionTypeEN[] | null>([]);
      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);
      const arrFunction4GeneCode = ref<clsFunction4GeneCodeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_FunctionTemplateRela4Func(refDivList.value);
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
        objPage_Edit.value = new FunctionTemplateRela_EditEx(
          'FunctionTemplateRela_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_FunctionTemplateRela(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsFunctionTemplateRelaEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new FunctionTemplateRela_EditEx(
          'FunctionTemplateRela_EditEx',
          objPage.value,
        );
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
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_FunctionTemplateRela(
            opType.value,
          );
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

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsFunctionTemplateRelaEN._CurrTabName;
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
          await objPage.value.BindGv_FunctionTemplateRela4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      const exportToExcel = (
        arrData: Array<Record<string, any>>,
        strSheetName: string,
        strFileName: string,
      ) => {
        try {
          // Convert object list to worksheet
          const worksheet = XLSX.utils.json_to_sheet(arrData);
          // Create a new workbook and append the worksheet
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, strSheetName);
          // Export the workbook to an Excel file
          XLSX.writeFile(workbook, strFileName);
          alert('导出成功！');
        } catch (error) {
          console.error('导出失败:', error);
          alert('导出失败，请检查控制台日志！');
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
        const objExportExcelData: ExportExcelData =
          await objPage.value.ExportExcel_FunctionTemplateRela();
        if (objExportExcelData.sheetName == '') {
          alert('获取导出数据出错,请检查!');
          return;
        }
        exportToExcel(
          objExportExcelData.arrObjLst,
          objExportExcelData.sheetName,
          objExportExcelData.fileName,
        );
      };

      /** 设置字段值-FunctionTemplateId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetFunctionTemplateId_Click = async () => {
        const strThisFuncName = btnSetFunctionTemplateId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置函数模板Id的${thisTabName}记录!`);
            return '';
          }
          const strFunctionTemplateId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlFunctionTemplateId_SetFldValue',
          );
          if (strFunctionTemplateId == '') {
            const strMsg = '请输入函数模板Id(FunctionTemplateId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strFunctionTemplateId=' + strFunctionTemplateId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetFunctionTemplateId(arrKeyIds, strFunctionTemplateId);
          await objPage.value.BindGv_FunctionTemplateRela4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strProgLangTypeId_Static = ProgLangTypeId_Static.value; //静态变量;//静态变量
        const strCodeTypeId_Static = CodeTypeId_Static.value; //静态变量;//静态变量

        arrFunctionTemplate.value = await FunctionTemplate_GetArrFunctionTemplate(); //查询区域
        functionTemplateId_q.value = '0';

        arrRegionType.value = await RegionType_GetArrRegionType(); //查询区域
        regionTypeId_q.value = '0';

        arrvCodeType_Sim.value = await vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(
          strProgLangTypeId_Static,
        ); //查询区域
        codeTypeId_q.value = '0';

        arrFunction4GeneCode.value =
          await Function4GeneCode_GetArrFunction4GeneCodeByFuncCodeTypeId(strCodeTypeId_Static); //查询区域
        funcId4GC_q.value = '0';

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlIsGeneCode_q');
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrFunctionTemplate.value = await FunctionTemplate_GetArrFunctionTemplate(); //功能区域
        functionTemplateId_f.value = '0';
      }

      const strTitle = ref('函数与模板关系维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        FunctionTemplateRelaCRUDEx.vuebtn_Click = btn_Click;
        FunctionTemplateRelaCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new FunctionTemplateRelaCRUDEx();
        await objPage.value.PageLoadCache();
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
        FunctionTemplateRelaCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListFunctionTemplateRela,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refFunctionTemplateRela_Edit,
        refFunctionTemplateRela_Detail,
        refFunctionTemplateRela_List,
        functionTemplateId_q,
        regionTypeId_q,
        codeTypeId_q,
        funcId4GC_q,
        isGeneCode_q,
        functionTemplateId_f,
        arrFunctionTemplate,
        arrRegionType,
        arrvCodeType_Sim,
        arrFunction4GeneCode,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSetFunctionTemplateId_Click,
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
        router.push({ name: 'editFunctionTemplateRela', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new FunctionTemplateRelaCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },
      /* 函数功能:系统生成的Change事件函数
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
*/
      async ddlCodeTypeId_SelectedIndexChanged() {
        // console.log(ddlCodeTypeId);
        this.ddlCodeTypeId_SelectedIndexChanged.name;
        if (IsNullOrEmpty(this.codeTypeId_q) == true) return;
        await this.SetDdl_FuncId4GCInDiv(this.codeTypeId_q); //查询区域

        //alert('请在扩展层:FunctionTemplateRela_Edit_2Ex中重写该函数！');
      },
      /**
       * 设置绑定下拉框，针对字段:[funcId4GC]
       * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
       **/

      async SetDdl_FuncId4GCInDiv(codeTypeId: string) {
        await Function4GeneCodeEx_BindDdl_FuncId4GCByCodeTypeIdInDivCache(
          divVarSet.refDivQuery,
          'ddlFuncId4GC_q',
          codeTypeId,
        ); //
      },
      // 方法定义
    },
  });
</script>
<style scoped></style>
