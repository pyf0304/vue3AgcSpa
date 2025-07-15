<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <a-button type="primary" @click="dialogVisible = false"
          ><font-awesome-icon icon="times"
        /></a-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 650px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trViewName">
            <td class="text-right">
              <label
                id="lblMainTabId"
                name="lblMainTabId"
                class="col-form-label text-right"
                style="width: 90px"
                >主表
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlMainTabId"
                v-model="mainTabId"
                class="form-control form-control-sm"
                style="width: 200px"
                @change="ddlMainTabId_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                  {{ item.tabName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblViewName"
                name="lblViewName"
                class="col-form-label text-right"
                style="width: 90px"
                >界面名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtViewName"
                v-model="viewName"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
          </tr>
          <tr id="trViewCnName">
            <td class="text-right">
              <label
                id="lblFileName"
                name="lblFileName"
                class="col-form-label text-right"
                style="width: 90px"
                >文件名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFileName"
                v-model="fileName"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblViewCnName"
                name="lblViewCnName"
                class="col-form-label text-right"
                style="width: 90px"
                >中文名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtViewCnName"
                v-model="viewCnName"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
          </tr>
          <tr id="trInSqlDsTypeId">
            <td class="text-right">
              <label
                id="lblFilePath"
                name="lblFilePath"
                class="col-form-label text-right"
                style="width: 90px"
                >文件路径
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFilePath"
                v-model="filePath"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblInSqlDsTypeId"
                name="lblInSqlDsTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >输入数据源
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlInSqlDsTypeId"
                v-model="inSqlDsTypeId"
                class="form-control form-control-sm"
                style="width: 200px"
                @change="ddlInSqlDsTypeId_SelectedIndexChanged($event)"
              >
                <option
                  v-for="(item, index) in arrSQLDSType"
                  :key="index"
                  :value="item.sqlDsTypeId"
                >
                  {{ item.sqlDsTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trOutSqlDsTypeId">
            <td class="text-right">
              <label
                id="lblInRelaTabId"
                name="lblInRelaTabId"
                class="col-form-label text-right"
                style="width: 90px"
                >输入表
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlInRelaTabId"
                v-model="inRelaTabId"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                  {{ item.tabName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblOutSqlDsTypeId"
                name="lblOutSqlDsTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >输出数据源
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlOutSqlDsTypeId"
                v-model="outSqlDsTypeId"
                class="form-control form-control-sm"
                style="width: 200px"
                @change="ddlOutSqlDsTypeId_SelectedIndexChanged($event)"
              >
                <option
                  v-for="(item, index) in arrSQLDSType"
                  :key="index"
                  :value="item.sqlDsTypeId"
                >
                  {{ item.sqlDsTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsNeedSetExportFld">
            <td class="text-right">
              <label
                id="lblOutRelaTabId"
                name="lblOutRelaTabId"
                class="col-form-label text-right"
                style="width: 90px"
                >输出表
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlOutRelaTabId"
                v-model="outRelaTabId"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                  {{ item.tabName }}
                </option></select
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 200px">
                <input
                  id="chkIsNeedSetExportFld"
                  v-model="isNeedSetExportFld"
                  type="checkbox"
                  Text="是否需要设置导出字段"
                /><label for="chkIsNeedSetExportFld">是否需要设置导出字段</label></span
              >
            </td>
          </tr>
          <tr id="trViewMasterId">
            <td class="text-right">
              <label
                id="lblKeyId4Test"
                name="lblKeyId4Test"
                class="col-form-label text-right"
                style="width: 90px"
                >测试关键字Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtKeyId4Test"
                v-model="keyId4Test"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblViewMasterId"
                name="lblViewMasterId"
                class="col-form-label text-right"
                style="width: 90px"
                >界面母版
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlViewMasterId"
                v-model="viewMasterId"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option
                  v-for="(item, index) in arrViewMaster"
                  :key="index"
                  :value="item.viewMasterId"
                >
                  {{ item.viewMasterName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFuncModuleAgcId">
            <td class="text-right">
              <label
                id="lblFuncModuleAgcId"
                name="lblFuncModuleAgcId"
                class="col-form-label text-right"
                style="width: 90px"
                >功能模块
              </label>
            </td>
            <td class="text-left" ColSpan="3">
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
          <tr id="trViewFunction">
            <td class="text-right">
              <label
                id="lblViewFunction"
                name="lblViewFunction"
                class="col-form-label text-right"
                style="width: 90px"
                >界面功能
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtViewFunction"
                v-model="viewFunction"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trViewDetail">
            <td class="text-right">
              <label
                id="lblViewDetail"
                name="lblViewDetail"
                class="col-form-label text-right"
                style="width: 90px"
                >界面说明
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtViewDetail"
                v-model="viewDetail"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >说明
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trIsShare">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsShare" v-model="isShare" type="checkbox" Text="是否共享" /><label
                  for="chkIsShare"
                  >是否共享</label
                ></span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelViewInfo" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewInfo"
        type="primary"
        @click="btnViewInfo_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import ViewInfo_EditEx from '@/views/PrjInterface/ViewInfo_EditEx';
  import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
  import { clsViewMasterEN } from '@/ts/L0Entity/PrjInterface/clsViewMasterEN';
  import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { SQLDSType_GetArrSQLDSType } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
  import { ViewMaster_GetArrViewMasterByApplicationTypeId } from '@/ts/L3ForWApi/PrjInterface/clsViewMasterWApi';
  import { FuncModule_Agc_GetArrFuncModule_AgcByPrjId } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
  import {
    refDivEdit,
    PrjId_Session,
    UserId_Local,
    ApplicationTypeId_Static,
    CmPrjId_Local,
  } from '@/views/PrjInterface/ViewInfoVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { ViewInfo_Edit } from '@/viewsBase/PrjInterface/ViewInfo_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'ViewInfoEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const mainTabId = ref('');
      const viewName = ref('');
      const fileName = ref('');
      const viewCnName = ref('');
      const filePath = ref('');
      const inSqlDsTypeId = ref('');
      const inRelaTabId = ref('');
      const outSqlDsTypeId = ref('');
      const outRelaTabId = ref('');
      const isNeedSetExportFld = ref(true);
      const keyId4Test = ref('');
      const viewMasterId = ref('');
      const funcModuleAgcId = ref('');
      const viewFunction = ref('');
      const viewDetail = ref('');
      const memo = ref('');
      const viewId = ref('');
      const prjId = ref('');
      const applicationTypeId = ref(0);
      const userId = ref('');
      const isShare = ref(true);
      const updDate = ref('');
      const updUserId = ref('');

      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrSQLDSType = ref<clsSQLDSTypeEN[] | null>([]);
      const arrViewMaster = ref<clsViewMasterEN[] | null>([]);
      const arrFuncModule_Agc = ref<clsFuncModule_AgcEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const intApplicationTypeId_Static = ApplicationTypeId_Static.value; //静态变量;//静态变量
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        mainTabId.value = '0';

        arrSQLDSType.value = await SQLDSType_GetArrSQLDSType(); //编辑区域
        inSqlDsTypeId.value = '0';

        inRelaTabId.value = '0';

        outSqlDsTypeId.value = '0';

        outRelaTabId.value = '0';

        arrViewMaster.value = await ViewMaster_GetArrViewMasterByApplicationTypeId(
          intApplicationTypeId_Static,
          strPrjId,
        ); //编辑区域
        viewMasterId.value = '0';

        arrFuncModule_Agc.value = await FuncModule_Agc_GetArrFuncModule_AgcByPrjId(strPrjId); //编辑区域
        funcModuleAgcId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjViewInfoEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataViewInfoObj() {
        const pobjViewInfoEN = new clsViewInfoEN();
        pobjViewInfoEN.SetMainTabId(mainTabId.value); // 主表
        pobjViewInfoEN.SetViewName(viewName.value); // 界面名称
        pobjViewInfoEN.SetFileName(fileName.value); // 文件名
        pobjViewInfoEN.SetViewCnName(viewCnName.value); // 中文名
        pobjViewInfoEN.SetFilePath(filePath.value); // 文件路径
        pobjViewInfoEN.SetInSqlDsTypeId(inSqlDsTypeId.value); // 输入数据源
        pobjViewInfoEN.SetInRelaTabId(inRelaTabId.value); // 输入表
        pobjViewInfoEN.SetOutSqlDsTypeId(outSqlDsTypeId.value); // 输出数据源
        pobjViewInfoEN.SetOutRelaTabId(outRelaTabId.value); // 输出表
        pobjViewInfoEN.SetIsNeedSetExportFld(isNeedSetExportFld.value); // 是否需要设置导出字段
        pobjViewInfoEN.SetKeyId4Test(keyId4Test.value); // 测试关键字Id
        pobjViewInfoEN.SetViewMasterId(viewMasterId.value); // 界面母版
        pobjViewInfoEN.SetFuncModuleAgcId(funcModuleAgcId.value); // 功能模块
        pobjViewInfoEN.SetViewFunction(viewFunction.value); // 界面功能
        pobjViewInfoEN.SetViewDetail(viewDetail.value); // 界面说明
        pobjViewInfoEN.SetMemo(memo.value); // 说明
        pobjViewInfoEN.SetViewId(viewId.value); // 界面ID
        pobjViewInfoEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjViewInfoEN.SetApplicationTypeId(ApplicationTypeId_Static.value); // 应用类型
        pobjViewInfoEN.SetUserId(UserId_Local.value); // 用户Id
        pobjViewInfoEN.SetIsShare(isShare.value); // 是否共享
        pobjViewInfoEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjViewInfoEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjViewInfoEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewInfoEN">表实体类对象</param>
       **/
      async function ShowDataFromViewInfoObj(pobjViewInfoEN: clsViewInfoEN) {
        mainTabId.value = pobjViewInfoEN.mainTabId; // 主表
        viewName.value = pobjViewInfoEN.viewName; // 界面名称
        fileName.value = pobjViewInfoEN.fileName; // 文件名
        viewCnName.value = pobjViewInfoEN.viewCnName; // 中文名
        filePath.value = pobjViewInfoEN.filePath; // 文件路径
        inSqlDsTypeId.value = pobjViewInfoEN.inSqlDsTypeId; // 输入数据源
        inRelaTabId.value = pobjViewInfoEN.inRelaTabId; // 输入表
        outSqlDsTypeId.value = pobjViewInfoEN.outSqlDsTypeId; // 输出数据源
        outRelaTabId.value = pobjViewInfoEN.outRelaTabId; // 输出表
        isNeedSetExportFld.value = pobjViewInfoEN.isNeedSetExportFld; // 是否需要设置导出字段
        keyId4Test.value = pobjViewInfoEN.keyId4Test; // 测试关键字Id
        viewMasterId.value = pobjViewInfoEN.viewMasterId; // 界面母版
        funcModuleAgcId.value = pobjViewInfoEN.funcModuleAgcId; // 功能模块
        viewFunction.value = pobjViewInfoEN.viewFunction; // 界面功能
        viewDetail.value = pobjViewInfoEN.viewDetail; // 界面说明
        memo.value = pobjViewInfoEN.memo; // 说明
        viewId.value = pobjViewInfoEN.viewId; // 界面ID
        isShare.value = pobjViewInfoEN.isShare; // 是否共享
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        mainTabId.value = '0';
        viewName.value = '';
        fileName.value = '';
        viewCnName.value = '';
        filePath.value = '';
        inSqlDsTypeId.value = '0';
        inRelaTabId.value = '0';
        outSqlDsTypeId.value = '0';
        outRelaTabId.value = '0';
        isNeedSetExportFld.value = false;
        keyId4Test.value = '';
        viewMasterId.value = '0';
        funcModuleAgcId.value = '0';
        viewFunction.value = '';
        viewDetail.value = '';
        memo.value = '';
        viewId.value = '';
        isShare.value = false;
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
              if (['02', '03', '06'].indexOf(clsViewInfoEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (ViewInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsViewInfoEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (ViewInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsViewInfoEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In ViewInfo_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (ViewInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(clsViewInfoEN._CurrTabName, keyId.value);
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
      const strTitle = ref('界面编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<ViewInfo_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: ViewInfo_EditEx) => {
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
        GetEditDataViewInfoObj,
        ShowDataFromViewInfoObj,
        Clear,
        btnSubmit_Click,
        mainTabId,
        viewName,
        fileName,
        viewCnName,
        filePath,
        inSqlDsTypeId,
        inRelaTabId,
        outSqlDsTypeId,
        outRelaTabId,
        isNeedSetExportFld,
        keyId4Test,
        viewMasterId,
        funcModuleAgcId,
        viewFunction,
        viewDetail,
        memo,
        viewId,
        prjId,
        applicationTypeId,
        userId,
        isShare,
        updDate,
        updUserId,
        arrvPrjTab_Sim,
        arrSQLDSType,
        arrViewMaster,
        arrFuncModule_Agc,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnViewInfo_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewInfo_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlMainTabId_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在事件函数中重写该函数!');
      },
      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlInSqlDsTypeId_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在事件函数中重写该函数!');
      },
      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlOutSqlDsTypeId_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在事件函数中重写该函数!');
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
