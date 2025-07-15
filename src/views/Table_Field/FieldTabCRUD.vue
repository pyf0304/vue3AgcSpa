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
              id="lblFldId_q"
              name="lblFldId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >字段Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldId_q"
              v-model="fldId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFldName_q"
              name="lblFldName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >字段名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldName_q"
              v-model="fldName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCaption_q"
              name="lblCaption_q"
              class="col-form-label text-right"
              style="width: 90px"
              >标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCaption_q"
              v-model="caption_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFieldTypeId_q"
              name="lblFieldTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >字段类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFieldTypeId_q"
              v-model="fieldTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrFieldType" :key="index" :value="item.fieldTypeId">
                {{ item.fieldTypeName }}
              </option></select
            >
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblDataTypeId_q"
              name="lblDataTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >数据类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDataTypeId_q"
              v-model="dataTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrDataTypeAbbr"
                :key="index"
                :value="item.dataTypeId"
              >
                {{ item.dataTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblFldStateId_q"
              name="lblFldStateId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >字段状态
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFldStateId_q"
              v-model="fldStateId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrFldState" :key="index" :value="item.fldStateId">
                {{ item.fldStateName }}
              </option></select
            >
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
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblFieldTabList"
            name="lblFieldTabList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程字段列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdateTabNumForFldId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnUpdateTabNumForFldId"
            >刷新相关表数</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnRefreshUpdDate4ReleTab"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('RefreshUpdDate4ReleTab', '')"
            >刷新相关表日期</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlHomologousFldId_SetFldValue"
              v-model="homologousFldId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
            <button
              id="btnSetHomologousFldId"
              name="btnSetHomologousFldId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetHomologousFldId', '')"
              >设置同源字段</button
            >
          </div>
        </li>

        <li class="nav-item ml-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlTabId_SetFldValue"
              name="ddlTabId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
            <button
              id="btnCopyToPrjTab"
              name="btnCopyToPrjTab"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('CopyToPrjTab', '')"
              >复制到表</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortFieldTabBy" type="hidden" />
    </div>
    <!--编辑层-->
    <FieldTab_EditCom ref="refFieldTab_Edit"></FieldTab_EditCom>
    <!--详细信息层-->
    <FieldTab_DetailCom ref="refFieldTab_Detail"></FieldTab_DetailCom>
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
  import FieldTabCRUDEx from '@/views/Table_Field/FieldTabCRUDEx';
  import FieldTab_EditCom from '@/views/Table_Field/FieldTab_Edit.vue';
  import FieldTab_DetailCom from '@/views/Table_Field/FieldTab_Detail.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFieldTab_Edit,
    refFieldTab_Detail,
    PrjId_Session,
    // UserId_Static,
    fldId_q,
    fldName_q,
    caption_q,
    fieldTypeId_q,
    dataTypeId_q,
    fldStateId_q,
    prjId_q,
    homologousFldId_f,
    UserId_Local,
  } from '@/views/Table_Field/FieldTabVueShare';
  import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { clsFldStateEN } from '@/ts/L0Entity/Table_Field/clsFldStateEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { FieldType_GetArrFieldType } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
  import { DataTypeAbbr_GetArrDataTypeAbbr } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  import { FldState_GetArrFldState } from '@/ts/L3ForWApi/Table_Field/clsFldStateWApi';

  import { vFieldTab_SimEx_GetArrvFieldTab_SimByPrjId } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { GetCheckedKeyIdsInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { Format } from '@/ts/PubFun/clsString';
  import { FieldTabEx_UpdateTabNumForFldId } from '@/ts/L3ForWApiEx/Table_Field/clsFieldTabExWApi';
  import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';
  export default defineComponent({
    name: 'FieldTabCRUD',
    components: {
      // 组件注册
      FieldTab_EditCom,
      FieldTab_DetailCom,
    },
    setup() {
      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsFieldTabEN._CurrTabName;
      };
      const objPage = ref<FieldTabCRUDEx>();
      const btnUpdateTabNumForFldId = async () => {
        const strThisFuncName = btnUpdateTabNumForFldId.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要设置同源字段Id的${thisTabName}记录!`);
          return '';
        }
        if (arrKeyIds.length == 0) {
          const strMsg = '请选择需要修改表数的${thisTabName}记录!';

          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          let intCount = 0;
          for (let i = 0; i < arrKeyIds.length; i++) {
            const strFldId = arrKeyIds[i];
            const bolIsSuccess = await FieldTabEx_UpdateTabNumForFldId(strFldId);
            if (bolIsSuccess == false) {
              const strMsg = Format('修改表数不成功!');
              console.error(strMsg);
              alert(strMsg);
              return;
            } else {
              intCount++;
            }
          }
          if (intCount > 0) {
            const strMsg = Format('修改表数成功!');
            console.log(strMsg);
            alert(strMsg);
            objPage.value.BindGv_FieldTab4Func(refDivList.value);
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0034)在修改表数时出错!请联系管理员!{0}.(in {1})',
            e,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      UserId_Local.value = '';
      // const thisConstructorName = 'FieldTabCRUD';

      const arrFieldType = ref<clsFieldTypeEN[] | null>([]);
      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[] | null>([]);
      const arrFldState = ref<clsFldStateEN[] | null>([]);

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrFieldType.value = await FieldType_GetArrFieldType(); //查询区域
        fieldTypeId_q.value = '0';

        arrDataTypeAbbr.value = await DataTypeAbbr_GetArrDataTypeAbbr(); //查询区域
        dataTypeId_q.value = '0';

        arrFldState.value = await FldState_GetArrFldState(); //查询区域
        fldStateId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByPrjId(strPrjId); //功能区域
        homologousFldId_f.value = '0';
      }
      const strTitle = ref('工程字段维护');

      const refDivDataLst = ref();
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();

        objPage.value = new FieldTabCRUDEx();
        objPage.value.PageLoadCache();
        //this.myonload();
      });
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
        FieldTabCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refFieldTab_Edit,
        refFieldTab_Detail,
        fldId_q,
        fldName_q,
        caption_q,
        fieldTypeId_q,
        dataTypeId_q,
        fldStateId_q,
        prjId_q,
        homologousFldId_f,
        arrFieldType,
        arrDataTypeAbbr,
        arrFldState,
        arrvFieldTab_Sim,
        btnUpdateTabNumForFldId,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
