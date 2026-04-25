<template>
  <div id="divLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblApplicationTypeName_q"
              name="lblApplicationTypeName_q"
              class="col-form-label text-right"
              style="width: 80px"
              >应用类型
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtApplicationTypeName_q"
              v-model="applicationTypeName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblApplicationTypeSimName_q"
              name="lblApplicationTypeSimName_q"
              class="col-form-label text-right"
              style="width: 80px"
              >应用简称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtApplicationTypeSimName_q"
              v-model="applicationTypeSimName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblApplicationTypeENName_q"
              name="lblApplicationTypeENName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >应用英文
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtApplicationTypeENName_q"
              v-model="applicationTypeENName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblProgLangTypeId_q"
              name="lblProgLangTypeId_q"
              class="col-form-label text-right"
              style="width: 40px"
              >语言
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlProgLangTypeId_q"
              v-model="progLangTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
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

          <td class="text-right">
            <label
              id="lblIsVisible_q"
              name="lblIsVisible_q"
              class="col-form-label text-right"
              style="width: 50px"
              >显示?
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlbIsVisible_q"
              v-model="isVisible_q"
              class="form-control form-control-sm"
              style="width: 100px"
            >
              <option value="0">选择是/否</option>
              <option value="true">是</option>
              <option value="false">否</option></select
            >
          </td>
          <td>
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnClick('Query', '')"
              >查询</button
            ></td
          >
          <td>
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
              @click="btnClick('ExportExcel', '')"
              >导出Excel</button
            ></td
          >
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblApplicationTypeList"
            name="lblApplicationTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >应用程序类型列表
          </label>
        </li>
        <li class="nav-item ml-3"> </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClick('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlbIsVisible_SetFldValue"
              v-model="isVisible_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option value="0">选择是/否</option>
              <option value="true">是</option>
              <option value="false">否</option></select
            >
            <button
              id="btnSetIsVisible"
              name="btnSetIsVisible"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetIsVisible_Click"
              >设置是否显示</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortApplicationTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <ApplicationType_EditCom ref="refApplicationType_Edit"></ApplicationType_EditCom>
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
  import ApplicationTypeCRUDEx from '@/views/GeneCode/ApplicationTypeCRUDEx';
  import ApplicationType_EditCom from '@/views/GeneCode/ApplicationType_Edit.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refApplicationType_Edit,
    isVisible_q,
    applicationTypeENName_q,
    applicationTypeSimName_q,
    applicationTypeName_q,
    progLangTypeId_q,
    isVisible_f,
  } from '@/views/GeneCode/ApplicationTypeVueShare';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import ApplicationType_EditEx from '@/views/GeneCode/ApplicationType_EditEx';
  import { Format } from '@/ts/PubFun/clsString';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { GetCheckedKeyIdsInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  export default defineComponent({
    name: 'ApplicationTypeCRUD',
    components: {
      // 组件注册
      ApplicationType_EditCom,
    },
    setup() {
      const strTitle = ref('应用程序类型维护');
      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);
      const objPage = ref<ApplicationTypeCRUDEx>();
      const objPage_Edit = ref<ApplicationType_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'ApplicationTypeCRUD';

      const refDivDataLst = ref();

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        isVisible_f.value = '0';
      }

      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();

        objPage.value = new ApplicationTypeCRUDEx();
        await objPage.value.PageLoadCache();
        //this.myonload();
      });
      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new ApplicationType_EditEx('ApplicationType_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_ApplicationType(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsApplicationTypeEN._PrimaryTypeId) > -1) {
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
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsApplicationTypeEN._CurrTabName;
      };
      /** 设置字段值-IsVisible
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_btnSetFldValue_Click)
       **/

      const btnSetIsVisible_Click = async () => {
        const strThisFuncName = btnSetIsVisible_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置是否显示的${thisTabName}记录!`);
            return '';
          }
          const bolIsVisible = isVisible_f.value == 'true' ? true : false;
          //console.log('bolIsVisible=' + bolIsVisible);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetIsVisible(arrKeyIds, bolIsVisible);
          await objPage.value.BindGv_ApplicationType4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName})`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_CRUD_setup_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //查询区域
        progLangTypeId_q.value = '0';
        isVisible_q.value = 'true';
      }
      function btnClick(strCommandName: string, strKeyId: string) {
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
        ApplicationTypeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btnClick,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refApplicationType_Edit,
        isVisible_q,
        applicationTypeENName_q,
        applicationTypeSimName_q,
        applicationTypeName_q,
        progLangTypeId_q,
        arrProgLangType,
        BindDdl4QryRegion,
        isVisible_f,
        btnSetIsVisible_Click,
        btnCreate_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
    methods: {},
  });
</script>
<style scoped></style>
