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
                style="width: 200px"
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
                style="width: 200px"
              >
                <option v-for="(item, index) in arrCodeType" :key="index" :value="item.codeTypeId">
                  {{ item.codeTypeName }}
                </option></select
              >
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
                style="width: 200px"
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
            <td class="text-right">
              <label
                id="lblMethodModifierId_q"
                name="lblMethodModifierId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >函数修饰语
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMethodModifierId_q"
                v-model="methodModifierId_q"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option
                  v-for="(item, index) in arrMethodModifier"
                  :key="index"
                  :value="item.methodModifierId"
                >
                  {{ item.methodModifierName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblProgLangTypeId_q"
                name="lblProgLangTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >编程语言
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlProgLangTypeId_q"
                v-model="progLangTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
                @change="ddlProgLangTypeId_q_SelectedIndexChanged($event)"
              >
                <option
                  v-for="(item, index) in arrProgLangType"
                  :key="index"
                  :value="item.progLangTypeId"
                >
                  {{ item.progLangTypeName }}
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
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblTabFunctionPropList"
            name="lblTabFunctionPropList"
            class="col-form-label text-info"
            style="width: 250px"
            >表函数属性列表
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
              id="ddlMethodModifierId_SetFldValue"
              v-model="methodModifierId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option
                v-for="(item, index) in arrMethodModifier"
                :key="index"
                :value="item.methodModifierId"
              >
                {{ item.methodModifierName }}
              </option></select
            >
            <button
              id="btnSetMethodModifierId"
              name="btnSetMethodModifierId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetMethodModifierId_Click"
              >设置函数修饰语</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <TabFunctionProp_ListCom
        ref="refTabFunctionProp_List"
        :items="dataListTabFunctionProp"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </TabFunctionProp_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortTabFunctionPropBy" type="hidden" />
    </div>
    <!--编辑层-->
    <TabFunctionProp_EditCom ref="refTabFunctionProp_Edit"></TabFunctionProp_EditCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import * as XLSX from 'xlsx';
  import router from '@/router';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
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
    refTabFunctionProp_Edit,
    refTabFunctionProp_List,
    showErrorMessage,
    dataListTabFunctionProp,
    emptyRecNumInfo,
    dataColumn,
    PrjId_Session,
    TabId_Static,
    ProgLangTypeId_Static,
    CodeTypeId_Static,
    functionTemplateId_q,
    codeTypeId_q,
    tabId_q,
    funcId4GC_q,
    methodModifierId_q,
    prjId_q,
    progLangTypeId_q,
    methodModifierId_f,
  } from '@/views/PrjFunction/TabFunctionPropVueShare';
  import { clsTabFunctionPropEN } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropEN';
  import TabFunctionProp_EditEx from '@/views/PrjFunction/TabFunctionProp_EditEx';
  import { Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import TabFunctionPropCRUDEx from '@/views/PrjFunction/TabFunctionPropCRUDEx';
  import TabFunctionProp_EditCom from '@/views/PrjFunction/TabFunctionProp_Edit.vue';
  import TabFunctionProp_ListCom from '@/views/PrjFunction/TabFunctionProp_List.vue';
  import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
  import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
  import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
  import { clsMethodModifierEN } from '@/ts/L0Entity/PrjFunction/clsMethodModifierEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { FunctionTemplate_GetArrFunctionTemplate } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
  import { CodeType_GetArrCodeTypeByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsCodeTypeWApi';
  import { Function4GeneCode_GetArrFunction4GeneCodeByFuncCodeTypeId } from '@/ts/L3ForWApi/PrjFunction/clsFunction4GeneCodeWApi';
  import { MethodModifier_GetArrMethodModifier } from '@/ts/L3ForWApi/PrjFunction/clsMethodModifierWApi';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  export default defineComponent({
    name: 'TabFunctionPropCRUD',
    components: {
      // 组件注册
      TabFunctionProp_EditCom,
      TabFunctionProp_ListCom,
    },

    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      const route = useRoute(); // 获取当前路由信息
      if (typeof route.params.TabId === 'string') {
        TabId_Static.value = route.params.TabId;
      }
      ProgLangTypeId_Static.value = '';
      CodeTypeId_Static.value = '';
      const objPage = ref<TabFunctionPropCRUDEx>();
      const objPage_Edit = ref<TabFunctionProp_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'TabFunctionPropCRUD';

      const arrFunctionTemplate = ref<clsFunctionTemplateEN[] | null>([]);
      const arrCodeType = ref<clsCodeTypeEN[] | null>([]);
      const arrFunction4GeneCode = ref<clsFunction4GeneCodeEN[] | null>([]);
      const arrMethodModifier = ref<clsMethodModifierEN[] | null>([]);
      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_TabFunctionProp4Func(refDivList.value);
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
        objPage_Edit.value = new TabFunctionProp_EditEx('TabFunctionProp_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_TabFunctionProp(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsTabFunctionPropEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new TabFunctionProp_EditEx('TabFunctionProp_EditEx', objPage.value);
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
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_TabFunctionProp(opType.value);
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
        return clsTabFunctionPropEN._CurrTabName;
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
          await objPage.value.BindGv_TabFunctionProp4Func(divVarSet.refDivList);
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
          await objPage.value.ExportExcel_TabFunctionProp4Func();
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

      /** 设置字段值-MethodModifierId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetMethodModifierId_Click = async () => {
        const strThisFuncName = btnSetMethodModifierId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置函数修饰语Id的${thisTabName}记录!`);
            return '';
          }
          const strMethodModifierId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlMethodModifierId_SetFldValue',
          );
          if (strMethodModifierId == '') {
            const strMsg = '请输入函数修饰语Id(MethodModifierId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strMethodModifierId=' + strMethodModifierId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetMethodModifierId(arrKeyIds, strMethodModifierId);
          await objPage.value.BindGv_TabFunctionProp4Func(divVarSet.refDivList);
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

        arrCodeType.value = await CodeType_GetArrCodeTypeByProgLangTypeId(strProgLangTypeId_Static); //查询区域
        codeTypeId_q.value = '0';

        arrFunction4GeneCode.value =
          await Function4GeneCode_GetArrFunction4GeneCodeByFuncCodeTypeId(strCodeTypeId_Static); //查询区域
        funcId4GC_q.value = '0';

        arrMethodModifier.value = await MethodModifier_GetArrMethodModifier(); //查询区域
        methodModifierId_q.value = '0';

        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //查询区域
        progLangTypeId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrMethodModifier.value = await MethodModifier_GetArrMethodModifier(); //功能区域
        methodModifierId_f.value = '0';
      }

      const strTitle = ref('表函数属性维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        TabFunctionPropCRUDEx.vuebtn_Click = btn_Click;
        TabFunctionPropCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new TabFunctionPropCRUDEx();
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
        TabFunctionPropCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListTabFunctionProp,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refTabFunctionProp_Edit,
        refTabFunctionProp_List,
        functionTemplateId_q,
        codeTypeId_q,
        tabId_q,
        funcId4GC_q,
        methodModifierId_q,
        prjId_q,
        progLangTypeId_q,
        methodModifierId_f,
        arrFunctionTemplate,
        arrCodeType,
        arrFunction4GeneCode,
        arrMethodModifier,
        arrProgLangType,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSetMethodModifierId_Click,
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
        router.push({ name: 'editTabFunctionProp', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new TabFunctionPropCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      /** 函数功能:系统生成的Change事件函数
       * (AutoGCLib.Vue_ViewScript_TS4Html+<>c__DisplayClass76_0:<Gen_Vue_method_ts_GeneEventFuncEx>b__1)
       **/
      async ddlProgLangTypeId_q_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在当前函数中重写该函数!');
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
