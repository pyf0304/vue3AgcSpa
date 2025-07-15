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
            <label
              id="lblVarId_q"
              name="lblVarId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              变量Id
            </label>
          </td>
          <td>
            <input
              id="txtVarId_q"
              v-model="varId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td>
            <label
              id="lblVarName_q"
              name="lblVarName_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              变量名
            </label>
          </td>
          <td>
            <input
              id="txtVarName_q"
              v-model="varName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td>
            <label
              id="lblVarTypeId_q"
              name="lblVarTypeId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              变量类型
            </label>
          </td>
          <td>
            <select
              id="ddlVarTypeId_q"
              v-model="varTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option
                v-for="(item, index) in arrGCVariableType"
                :key="index"
                :value="item.varTypeId"
              >
                {{ item.varTypeName }}
              </option></select
            >
          </td>

          <td>
            <button
              id="btnQuery"
              type="submit"
              name="btnQuery"
              class="btn btn-outline-warning text-nowrap"
              @click="btnQuery_Click"
              >查询</button
            >
          </td>
          <td>
            <button
              id="btnExportExcel"
              type="submit"
              name="btnExportExcel"
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
            id="lblGCVariableList"
            name="lblGCVariableList"
            class="col-form-label-sm text-info"
            style="width: 250px"
          >
            GC变量列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddNewRecordWithMaxId"
            name="btnAddNewRecordWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnCreate_Click"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCopyRecord"
            name="btnCopyRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClone_Click"
            >复制记录</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnUpdate_Click"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnSetVarIdForCurrPrjId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnSetVarIdForCurrPrjId"
            >把变量设置为当前项目</button
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnSetFldIdForVarId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnSetFldIdForVarId"
            >为变量设置字段</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortGCVariableBy" type="hidden" />
    </div>
    <!--编辑层-->
    <GCVariable_EditCom ref="refGCVariable_Edit"></GCVariable_EditCom>
    <!--详细信息层-->
    <GCVariable_DetailCom ref="refGCVariable_Detail"></GCVariable_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  // import { useRoute, useRouter } from 'vue-router';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import GCVariableCRUDEx from '@/views/GeneCode/GCVariableCRUDEx';
  import GCVariable_EditCom from '@/views/GeneCode/GCVariable_Edit.vue';
  import GCVariable_DetailCom from '@/views/GeneCode/GCVariable_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    PrjId_Session,
    refGCVariable_Edit,
    refGCVariable_Detail,
    refGCVariable_List,
    varId_q,
    varName_q,
    varTypeId_q,
  } from '@/views/GeneCode/GCVariableVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import {
    GCVariablePrjIdRela_AddNewObjSave,
    GCVariablePrjIdRela_ReFreshCache,
  } from '@/ts/L3ForWApi/GeneCode/clsGCVariablePrjIdRelaWApi';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { clsGCVariablePrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaEN';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import {
    GCVariablePrjIdRelaEx_UpdFldIdByPrjId,
    GCVariablePrjIdRelaEx_UpdFldIdByVarId,
  } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariablePrjIdRelaExWApi';
  import GCVariable_EditEx from '@/views/GeneCode/GCVariable_EditEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { GCVariableType_GetArrGCVariableType } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
  import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
  export default defineComponent({
    name: 'GCVariableCRUD',
    components: {
      // 组件注册
      GCVariable_EditCom,
      GCVariable_DetailCom,
    },
    setup() {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      const objPage = ref<GCVariableCRUDEx>();
      const objPage_Edit = ref<GCVariable_EditEx>();
      // const objPage_Detail = ref<GCVariable_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'GCVariableCRUD';

      const arrGCVariableType = ref<clsGCVariableTypeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_GCVariable4Func(refDivList.value);
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
        objPage_Edit.value = new GCVariable_EditEx('GCVariable_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GCVariable(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsGCVariableEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new GCVariable_EditEx('GCVariable_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strVarId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strVarId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_GCVariable(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strVarId);
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
        return clsGCVariableEN._CurrTabName;
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
          await objPage.value.BindGv_GCVariable4Func(divVarSet.refDivList);
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
        await objPage.value.ExportExcel_GCVariable4Func();
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
          await objPage.value.BindGv_GCVariable4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `复制记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 自定义功能函数
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_SelfDefine_Click)
       **/
      const btnSetFldIdForCurrPrjId_Click = async () => {
        const strThisFuncName = btnSetFldIdForCurrPrjId_Click.name;
        const strMsg = `函数:[btnSetFldIdForCurrPrjId_Click]还末定义.(in ${thisConstructorName}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrGCVariableType.value = await GCVariableType_GetArrGCVariableType(); //查询区域
        varTypeId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('GC变量维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        GCVariableCRUDEx.vuebtn_Click = btn_Click;
        GCVariableCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new GCVariableCRUDEx();
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
        GCVariableCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      const userStore = useUserStore();

      // const refDivDataLst = ref();
      onMounted(() => {
        objPage.value = new GCVariableCRUDEx();

        objPage.value.PageLoadCache();
        //this.myonload();
      });

      async function btnSetVarIdForCurrPrjId() {
        const strThisFuncName = btnSetVarIdForCurrPrjId.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置的${thisTabName}变量!`);
            return '';
          }
          let intRecNum = 0;
          for (const strKeyId of arrKeyIds) {
            const objGCVariablePrjIdRela = new clsGCVariablePrjIdRelaEN();
            objGCVariablePrjIdRela.prjId = PrjId_Session.value;
            objGCVariablePrjIdRela.varId = strKeyId;
            objGCVariablePrjIdRela.fldId = '';
            objGCVariablePrjIdRela.updDate = clsDateTime.getTodayDateTimeStr(0);
            objGCVariablePrjIdRela.updUser = userStore.getUserId;
            try {
              await GCVariablePrjIdRela_AddNewObjSave(objGCVariablePrjIdRela);
            } catch (e) {
              console.error(e);
              console.error('e类型:', typeof e);
              if (typeof e == 'string' && e.indexOf('已经存在') == -1) {
                continue;
              }
            }

            await GCVariablePrjIdRelaEx_UpdFldIdByVarId(
              PrjId_Session.value,
              strKeyId,
              userStore.getUserId,
            );

            intRecNum++;
          }
          const strMsg = `共把${intRecNum}个变量设置为本项目`;
          alert(strMsg);
          GCVariablePrjIdRela_ReFreshCache(PrjId_Session.value);
          await objPage.value.BindGv_GCVariable4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = Format(
            '设置变量为本工程不成功. {0}.(in {1}.{2})',
            e,
            thisConstructorName,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      }

      async function btnSetFldIdForVarId() {
        const strThisFuncName = btnSetFldIdForVarId.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const intRecNum = await GCVariablePrjIdRelaEx_UpdFldIdByPrjId(
            PrjId_Session.value,
            userStore.getUserId,
          );

          const strMsg = `共为${intRecNum}个变量设置了字段Id`;
          alert(strMsg);
          GCVariablePrjIdRela_ReFreshCache(PrjId_Session.value);
          await objPage.value.BindGv_GCVariable4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = Format(
            '为变量设置字段Id不成功. {0}.(in {1}.{2})',
            e,
            thisConstructorName,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      }

      return {
        strTitle,
        btn_Click,

        ...divVarSet,

        btnSetFldIdForVarId,
        btnSetVarIdForCurrPrjId,
        btnUpdate_Click,
        btnCreate_Click,
        btnClone_Click,
        btnQuery_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refGCVariable_Edit,
        refGCVariable_Detail,
        refGCVariable_List,
        varId_q,
        varName_q,
        varTypeId_q,
        arrGCVariableType,

        btnDelete_Click,
        btnExportExcel_Click,

        btnSetFldIdForCurrPrjId_Click,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
