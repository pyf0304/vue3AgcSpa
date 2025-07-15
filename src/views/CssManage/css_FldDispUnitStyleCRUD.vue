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
                id="lblCtlTypeId_q"
                name="lblCtlTypeId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >控件类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCtlTypeId_q"
                v-model="ctlTypeId_q"
                class="form-control form-control-sm"
                style="width: 200px"
                @change="ddlCtlTypeId_q_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                  {{ item.ctlTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblFldDispUnitStyleId_q"
                name="lblFldDispUnitStyleId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >字段显示单元样式Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFldDispUnitStyleId_q"
                v-model="fldDispUnitStyleId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFldDispUnitStyleName_q"
                name="lblFldDispUnitStyleName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >字段显示单元样式名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFldDispUnitStyleName_q"
                v-model="fldDispUnitStyleName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblStyleIdContent_q"
                name="lblStyleIdContent_q"
                class="col-form-label text-right"
                style="width: 90px"
                >内容样式
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlStyleIdContent_q"
                v-model="styleIdContent_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrcss_Style" :key="index" :value="item.styleId">
                  {{ item.styleName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblStyleIdTitle_q"
                name="lblStyleIdTitle_q"
                class="col-form-label text-right"
                style="width: 90px"
                >标题样式
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlStyleIdTitle_q"
                v-model="styleIdTitle_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrcss_Style" :key="index" :value="item.styleId">
                  {{ item.styleName }}
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
            id="lblcss_FldDispUnitStyleList"
            name="lblcss_FldDispUnitStyleList"
            class="col-form-label text-info"
            style="width: 250px"
            >字段显示单元样式列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
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
            <select
              id="ddlCtlTypeId_f"
              v-model="ctlTypeId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                {{ item.ctlTypeName }}
              </option></select
            >
            <button
              id="btnGoTop"
              name="btnGoTop"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnGoTop_Click"
              >移顶</button
            >
            <button
              id="btnUpMove"
              name="btnUpMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnUpMove_Click"
              >上移</button
            >
            <button
              id="btnDownMove"
              name="btnDownMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnDownMove_Click"
              >下移</button
            >
            <button
              id="btnGoBottum"
              name="btnGoBottum"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnGoBottum_Click"
              >移底</button
            >
            <button
              id="btnReOrder"
              name="btnReOrder"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnReOrder_Click"
              >重序</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <!-- <div id="divList" ref="refDivList" class="div_List">
      <css_FldDispUnitStyle_ListCom
        ref="refcss_FldDispUnitStyle_List"
        :items="dataListcss_FldDispUnitStyle"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </css_FldDispUnitStyle_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcss_FldDispUnitStyleBy" type="hidden" />
    </div> -->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcss_FldDispUnitStyleBy" type="hidden" />
    </div>
    <!--编辑层-->
    <css_FldDispUnitStyle_EditCom ref="refcss_FldDispUnitStyle_Edit"></css_FldDispUnitStyle_EditCom>
    <!--详细信息层-->
    <css_FldDispUnitStyle_DetailCom
      ref="refcss_FldDispUnitStyle_Detail"
    ></css_FldDispUnitStyle_DetailCom>
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
    SetCheckedItem4KeyIdInDiv,
    GetDivObjInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    CtlTypeId_Static,
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refcss_FldDispUnitStyle_Edit,
    refcss_FldDispUnitStyle_Detail,
    refcss_FldDispUnitStyle_List,
    showErrorMessage,
    dataListcss_FldDispUnitStyle,
    emptyRecNumInfo,
    dataColumn,
    IsVisible_Giving,
    ctlTypeId_q,
    fldDispUnitStyleId_q,
    fldDispUnitStyleName_q,
    styleIdContent_q,
    styleIdTitle_q,
    ctlTypeId_f,
  } from '@/views/CssManage/css_FldDispUnitStyleVueShare';
  import {
    css_FldDispUnitStyle_UpMoveAsync,
    css_FldDispUnitStyle_ReFreshCache,
    css_FldDispUnitStyle_DownMoveAsync,
    css_FldDispUnitStyle_GoTopAsync,
    css_FldDispUnitStyle_GoBottomAsync,
    css_FldDispUnitStyle_ReOrderAsync,
  } from '@/ts/L3ForWApi/CssManage/clscss_FldDispUnitStyleWApi';
  import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
  import { clscss_FldDispUnitStyleEN } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleEN';
  import css_FldDispUnitStyle_EditEx from '@/views/CssManage/css_FldDispUnitStyle_EditEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import css_FldDispUnitStyleCRUDEx from '@/views/CssManage/css_FldDispUnitStyleCRUDEx';
  import css_FldDispUnitStyle_EditCom from '@/views/CssManage/css_FldDispUnitStyle_Edit.vue';
  import css_FldDispUnitStyle_DetailCom from '@/views/CssManage/css_FldDispUnitStyle_Detail.vue';
  import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';
  import { CtlType_GetArrCtlTypeByIsVisible } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { css_Style_GetArrcss_StyleByCtlTypeId } from '@/ts/L3ForWApi/CssManage/clscss_StyleWApi';
  export default defineComponent({
    name: 'CssFldDispUnitStyleCRUD',
    components: {
      // 组件注册
      css_FldDispUnitStyle_EditCom,
      css_FldDispUnitStyle_DetailCom,
    },

    setup() {
      CtlTypeId_Static.value = '';
      IsVisible_Giving.value = true;
      const objPage = ref<css_FldDispUnitStyleCRUDEx>();
      const objPage_Edit = ref<css_FldDispUnitStyle_EditEx>();
      // const objPage_Detail = ref<css_FldDispUnitStyle_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'Css_FldDispUnitStyleCRUD';

      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);
      const arrcss_Style = ref<clscss_StyleEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_css_FldDispUnitStyle4Func(refDivList.value);
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
        objPage_Edit.value = new css_FldDispUnitStyle_EditEx(
          'css_FldDispUnitStyle_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_css_FldDispUnitStyle(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clscss_FldDispUnitStyleEN.PrimaryTypeId) > -1) {
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
          await objPage.value.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `复制记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
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
        objPage_Edit.value = new css_FldDispUnitStyle_EditEx(
          'css_FldDispUnitStyle_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFldDispUnitStyleId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strFldDispUnitStyleId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_css_FldDispUnitStyle(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strFldDispUnitStyleId);
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
        return clscss_FldDispUnitStyleEN._CurrTabName;
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
          await objPage.value.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
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
          await objPage.value.ExportExcel_css_FldDispUnitStyle4Func();
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

      /**
       * 上移
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpMove_Click)
       **/
      const btnUpMove_Click = async () => {
        const strThisFuncName = btnUpMove_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCtlTypeId = CtlTypeId_Static.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要上移的${thisTabName}记录!`);
          return;
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            ctltypeid: strCtlTypeId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await css_FldDispUnitStyle_UpMoveAsync(objOrderByData);
          css_FldDispUnitStyle_ReFreshCache();
        } catch (e) {
          const strMsg = `上移记录出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 下移
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDownMove_Click)
       **/
      const btnDownMove_Click = async () => {
        const strThisFuncName = btnDownMove_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCtlTypeId = CtlTypeId_Static.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要下移的${thisTabName}记录!`);
          return;
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            ctltypeid: strCtlTypeId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await css_FldDispUnitStyle_DownMoveAsync(objOrderByData);
          css_FldDispUnitStyle_ReFreshCache();
        } catch (e) {
          const strMsg = `下移记录出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /** 置顶
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnGoTop_Click)
       **/
      const btnGoTop_Click = async () => {
        const strThisFuncName = btnGoTop_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCtlTypeId = CtlTypeId_Static.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置顶的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            ctltypeid: strCtlTypeId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await css_FldDispUnitStyle_GoTopAsync(objOrderByData);
          css_FldDispUnitStyle_ReFreshCache();
        } catch (e) {
          const strMsg = `置顶出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 置底
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnGoBottum_Click)
       **/
      const btnGoBottum_Click = async () => {
        const strThisFuncName = btnGoBottum_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCtlTypeId = CtlTypeId_Static.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置底的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            ctltypeid: strCtlTypeId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await css_FldDispUnitStyle_GoBottomAsync(objOrderByData);
          css_FldDispUnitStyle_ReFreshCache();
        } catch (e) {
          const strMsg = `置底出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 重序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnReOrder_Click)
       **/
      const btnReOrder_Click = async () => {
        const strThisFuncName = btnReOrder_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCtlTypeId = CtlTypeId_Static.value;
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          const jsonObject = {
            ctltypeid: strCtlTypeId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await css_FldDispUnitStyle_ReOrderAsync(objOrderByData);
          css_FldDispUnitStyle_ReFreshCache();
        } catch (e) {
          const strMsg = `重序出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const bolIsVisible_Giving = false; //给定值
        // const strCtlTypeId_Static = CtlTypeId_Static.value; //静态变量;//静态变量

        arrCtlType.value = await CtlType_GetArrCtlTypeByIsVisible(bolIsVisible_Giving); //查询区域
        ctlTypeId_q.value = '0';

        // arrcss_Style.value = await css_Style_GetArrcss_StyleByCtlTypeId(strCtlTypeId_Static); //查询区域
        styleIdContent_q.value = '0';

        styleIdTitle_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const bolIsVisible_Giving = false; //给定值

        arrCtlType.value = await CtlType_GetArrCtlTypeByIsVisible(bolIsVisible_Giving); //功能区域
        ctlTypeId_f.value = '0';
      }

      const strTitle = ref('字段显示单元样式维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        css_FldDispUnitStyleCRUDEx.vuebtn_Click = btn_Click;
        css_FldDispUnitStyleCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new css_FldDispUnitStyleCRUDEx();
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
        css_FldDispUnitStyleCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListcss_FldDispUnitStyle,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refcss_FldDispUnitStyle_Edit,
        refcss_FldDispUnitStyle_Detail,
        refcss_FldDispUnitStyle_List,
        ctlTypeId_q,
        fldDispUnitStyleId_q,
        fldDispUnitStyleName_q,
        styleIdContent_q,
        styleIdTitle_q,
        ctlTypeId_f,
        arrCtlType,
        arrcss_Style,
        btnQuery_Click,
        btnCreate_Click,
        btnClone_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnUpMove_Click,
        btnDownMove_Click,
        btnGoTop_Click,
        btnGoBottum_Click,
        btnReOrder_Click,
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
        router.push({ name: 'editcss_FldDispUnitStyle', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new css_FldDispUnitStyleCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      /** 函数功能:系统生成的Change事件函数
       * (AutoGCLib.Vue_ViewScript_TS4Html+<>c__DisplayClass76_0:<Gen_Vue_method_ts_GeneEventFuncEx>b__1)
       **/
      async ddlCtlTypeId_q_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在当前函数中重写该函数!');
        const strCtlTypeId_Static = this.ctlTypeId_q; // CtlTypeId_Static.value; //静态变量;//静态变量
        this.arrcss_Style = await css_Style_GetArrcss_StyleByCtlTypeId(strCtlTypeId_Static); //查询区域
        styleIdContent_q.value = '0';

        styleIdTitle_q.value = '0';
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
