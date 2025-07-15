<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 650px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trMainTabId">
          <td class="text-right">
            <label id="lblMainTabId" class="col-form-label text-right" style="width: 90px">
              主表
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
        </tr>
        <tr id="trFileName">
          <td class="text-right">
            <label id="lblViewName" class="col-form-label text-right" style="width: 90px">
              界面名称
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
          <td class="text-right">
            <label id="lblFileName" class="col-form-label text-right" style="width: 90px">
              文件名
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
        </tr>
        <tr id="trFilePath">
          <td class="text-right">
            <label id="lblViewCnName" class="col-form-label text-right" style="width: 90px">
              中文名
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
          <td class="text-right">
            <label id="lblFilePath" class="col-form-label text-right" style="width: 90px">
              文件路径
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
        </tr>
        <tr id="trInRelaTabId">
          <td class="text-right">
            <label id="lblInSqlDsTypeId" class="col-form-label text-right" style="width: 90px">
              输入数据源
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInSqlDsTypeId"
              v-model="inSqlDsTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
              @change="ddlInSqlDsTypeId_SelectedIndexChanged()"
            >
              <option v-for="(item, index) in arrSQLDSType" :key="index" :value="item.sqlDsTypeId">
                {{ item.sqlDsTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label id="lblInRelaTabId" class="col-form-label text-right" style="width: 90px">
              输入表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInRelaTabId"
              v-model="inRelaTabId"
              class="form-control form-control-sm"
              style="width: 200px"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim_In" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trOutRelaTabId">
          <td class="text-right">
            <label id="lblOutSqlDsTypeId" class="col-form-label text-right" style="width: 90px">
              输出数据源
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutSqlDsTypeId"
              v-model="outSqlDsTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
              @change="ddlOutSqlDsTypeId_SelectedIndexChanged()"
            >
              <option v-for="(item, index) in arrSQLDSType" :key="index" :value="item.sqlDsTypeId">
                {{ item.sqlDsTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label id="lblOutRelaTabId" class="col-form-label text-right" style="width: 90px">
              输出表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutRelaTabId"
              v-model="outRelaTabId"
              class="form-control form-control-sm"
              style="width: 200px"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim_Out" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trIsNeedSetExportFld">
          <td class="text-left" colSpan="2">
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
            <label id="lblKeyId4Test" class="col-form-label text-right" style="width: 100px">
              测试关键字Id
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
            <label id="lblViewMasterId" class="col-form-label text-right" style="width: 90px">
              界面母版
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
            <label id="lblFuncModuleAgcId" class="col-form-label text-right" style="width: 90px">
              功能模块
            </label>
          </td>
          <td class="text-left" colSpan="1">
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
          <td colspan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsShare" v-model="isShare" type="checkbox" Text="是否共享" /><label
                for="chkIsShare"
                >是否共享</label
              ></span
            >
          </td>
        </tr>
        <tr id="trViewFunction">
          <td class="text-right">
            <label id="lblViewFunction" class="col-form-label text-right" style="width: 90px">
              界面功能
            </label>
          </td>
          <td class="text-left" colSpan="3">
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
            <label id="lblViewDetail" class="col-form-label text-right" style="width: 90px">
              界面说明
            </label>
          </td>
          <td class="text-left" colSpan="3">
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
            <label id="lblMemo" class="col-form-label text-right" style="width: 90px"> 说明 </label>
          </td>
          <td class="text-left" colSpan="3">
            <input
              id="txtMemo"
              v-model="memo"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trViewId">
          <td class="text-right">
            <label id="lblViewId" class="col-form-label text-right" style="width: 90px">
              界面Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtViewId"
              v-model="viewId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
      </table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
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
  import { clsSQLDSTypeEN, enumSQLDSType } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
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

  import {
    vPrjTab_SimEx_GetArrvPrjTab_SimBySqlDsTypeIdCache,
    vPrjTab_SimEx_GetRelaViewTabIdByTabName,
  } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { enumApplicationType } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { enumViewTypeCodeTab } from '@/ts/L0Entity/PrjInterface/clsViewTypeCodeTabEN';
  import { PrjTab_GetObjByTabIdAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
  import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';

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
      const arrvPrjTab_Sim_In = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrvPrjTab_Sim_Out = ref<clsvPrjTab_SimEN[] | null>([]);
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
        //  await this.SetDdl_MainTabIdInDiv(); //编辑区域
        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        mainTabId.value = '0';

        arrSQLDSType.value = await SQLDSType_GetArrSQLDSType(); //编辑区域
        inSqlDsTypeId.value = '0';

        // inRelaTabId.value = '0';

        outSqlDsTypeId.value = '0';

        // outRelaTabId.value = '0';

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

        // pobjViewInfoEN.SetApplicationTypeId(ViewInfo_EditEx.applicationTypeIdCache); // 应用类型
        pobjViewInfoEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        // pobjViewInfoEN.SetUpdUserId(clsPubLocalStorage.userId); // 修改用户Id
        // pobjViewInfoEN.SetUserId(UserId_Local.value); // 用户Id
        pobjViewInfoEN.defaMenuName = pobjViewInfoEN.viewCnName;

        if (IsNullOrEmpty(pobjViewInfoEN.userId) == true) {
          pobjViewInfoEN.userId = clsPubLocalStorage.userId; // 修改用户Id
        }
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
        // const ddlInSqlDsTypeId = <HTMLSelectElement>document.getElementById('ddlInSqlDsTypeId'); //:
        await ddlInSqlDsTypeId_SelectedIndexChanged();

        inRelaTabId.value = pobjViewInfoEN.inRelaTabId; // 输入表
        outSqlDsTypeId.value = pobjViewInfoEN.outSqlDsTypeId; // 输出数据源
        // const ddlOutSqlDsTypeId = <HTMLSelectElement>document.getElementById('ddlOutSqlDsTypeId'); //:

        await ddlOutSqlDsTypeId_SelectedIndexChanged();

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

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewInfo':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitViewInfo':
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
          case 'btnCancelViewInfo':
            return strCancelButtonText.value;
          case 'btnSubmitViewInfo':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      /* 函数功能:系统生成的Change事件函数
      (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
    */
      async function ddlInSqlDsTypeId_SelectedIndexChanged() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const strInSqlDsTypeId = inSqlDsTypeId.value;
        if (IsNullOrEmpty(strInSqlDsTypeId) == true) return;
        // await this.SetDdl_InRelaTabIdInDivEx(clsPrivateSessionStorage.cmPrjId, strInSqlDsTypeId);
        arrvPrjTab_Sim_In.value = await vPrjTab_SimEx_GetArrvPrjTab_SimBySqlDsTypeIdCache(
          strInSqlDsTypeId,
          strCmPrjId,
        ); //编辑区域

        inRelaTabId.value = '0';
      }
      /* 函数功能:系统生成的Change事件函数
      (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
    */
      async function ddlOutSqlDsTypeId_SelectedIndexChanged() {
        // console.log(e);

        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const strOutSqlDsTypeId = outSqlDsTypeId.value;
        if (IsNullOrEmpty(strOutSqlDsTypeId) == true) return;
        // await this.SetDdl_OutRelaTabIdInDivEx(clsPrivateSessionStorage.cmPrjId, strOutSqlDsTypeId);
        arrvPrjTab_Sim_Out.value = await vPrjTab_SimEx_GetArrvPrjTab_SimBySqlDsTypeIdCache(
          strOutSqlDsTypeId,
          strCmPrjId,
        ); //编辑区域
        outRelaTabId.value = '0';
      }
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
        arrvPrjTab_Sim_In,
        arrvPrjTab_Sim_Out,
        arrSQLDSType,
        arrViewMaster,
        arrFuncModule_Agc,

        SetButtonText,
        GetButtonText,
        ddlInSqlDsTypeId_SelectedIndexChanged,
        ddlOutSqlDsTypeId_SelectedIndexChanged,
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
        //ViewInfo_EditEx.btnClick(strCommandName, strKeyId);
      },

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

        const strMainTabId = this.mainTabId;
        if (IsNullOrEmpty(strMainTabId) == true) return;

        this.SetDefaValueByTabIdAndViewTypeCode();

        return true;
      },

      async SetDefaValueByTabIdAndViewTypeCode() {
        const strMainTabId = this.mainTabId;
        if (IsNullOrEmpty(strMainTabId) == true) return;

        const objPrjTabEN = await PrjTab_GetObjByTabIdAsync(strMainTabId);
        if (objPrjTabEN == null) {
          const strMsg = Format(
            '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
            clsPrivateSessionStorage.currSelPrjName,
            strMainTabId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        const intApplicationTypeId = ApplicationTypeId_Static.value; // 静态变量;//Session存储、local存储
        //alert('请在扩展层:ViewInfo_EditEx中重写该函数！');
        let strMsg = '';
        let objApplicationType;
        switch (intApplicationTypeId) {
          case 0:
            break;
          case enumApplicationType.AspMvcApp_13: // "0001":	//单表插入
            this.viewName = `wfm${objPrjTabEN.tabName}B_QUDI`;
            this.viewCnName = `${objPrjTabEN.tabCnName}-维护`;
            this.fileName = `${this.viewName}.aspx`;
            this.filePath = 'Webform/';
            break;
          case enumApplicationType.WinApp_1: // "0019":	//单表的查询删除,调用修改、添加
            this.viewName = `frm${objPrjTabEN.tabName}_QU_LV`;
            this.viewCnName = `${objPrjTabEN.tabCnName}-维护`;
            this.fileName = `${this.viewName}.cs`;
            break;
          // case enumViewTypeCodeTab.Table_QD_InvokeUI_GridView_20: // "0020":	//单表的查询删除,调用修改、添加
          //   this.viewName = `frm${objPrjTabEN.tabName}_QU_DGV`;
          //   this.viewCnName = `${objPrjTabEN.tabName}-维护`;
          //   this.fileName = `${this.viewName}.cs`;
          //   break;
          case enumApplicationType.AndroidApp_5:
            this.viewName = `ac${objPrjTabEN.tabName}_QUDI`;
            this.viewCnName = `${objPrjTabEN.tabCnName}_QUDI`;
            this.fileName = `${this.viewName}.XML`;
            break;
          case enumApplicationType.AspMvcApp_TS_16:
            this.viewName = Format('{0}CRUD', objPrjTabEN.tabName);
            this.viewCnName = Format('{0}CRUD', objPrjTabEN.tabCnName);
            this.fileName = `${this.viewName}.XML`;
            break;
          case enumApplicationType.IOSApp_6:
            this.viewName = Format('ac{0}CRUD', objPrjTabEN.tabName);
            this.viewCnName = Format('{0}CRUD', objPrjTabEN.tabCnName);
            this.fileName = `${this.viewName}.XML`;
            break;
          case enumApplicationType.SpaAppInCore_TS_18:
          case enumViewTypeCodeTab.Table_CRUD4Spa_UT_30:
            this.viewName = Format('{0}CRUD', objPrjTabEN.tabName);
            this.viewCnName = Format('{0}CRUD', objPrjTabEN.tabCnName);
            this.fileName = `${this.viewName}.cshtml`;
            this.filePath = 'Pages/';
            break;
          case enumApplicationType.WebApi_19:
            this.viewName = Format('{0}CRUD', objPrjTabEN.tabName);
            this.viewCnName = Format('{0}CRUD', objPrjTabEN.tabCnName);
            this.fileName = `${this.viewName}.vue`;
            this.filePath = 'views/';
            break;

          default:
            objApplicationType = await ApplicationType_GetObjByApplicationTypeIdCache(
              intApplicationTypeId,
            );

            if (objApplicationType == null) {
              const strMsg = Format(
                'ApplicationTypeId:[{0}]，没有相应的应用类型，请检查！',
                intApplicationTypeId,
              );
              console.error(strMsg);
              alert(strMsg);
              return;
            }

            strMsg = Format(
              '应用类型：[{0}({1})]在函数中没有被处理，请联系管理员！',
              objApplicationType.applicationTypeSimName,
              intApplicationTypeId,
            );
            console.error(strMsg);
            throw strMsg;
        }

        this.viewCnName = `${objPrjTabEN.tabCnName}维护`;
        this.funcModuleAgcId = objPrjTabEN.funcModuleAgcId;
        //txtDefaMenuName.text = txtViewCnName.text;
        this.viewFunction = this.viewCnName;
        //设置模块名
        //funcModuleAgcId = objPrjTabEN.funcModuleAgcId;
        //设置：输入数据源类型 、输入数据源表
        this.inSqlDsTypeId = enumSQLDSType.SqlTab_01;
        this.inRelaTabId = objPrjTabEN.tabId;
        const strRelaViewTabId = await vPrjTab_SimEx_GetRelaViewTabIdByTabName(
          clsPrivateSessionStorage.currSelPrjId,
          objPrjTabEN.tabName,
        );
        if (IsNullOrEmpty(strRelaViewTabId) == true) {
          this.outSqlDsTypeId = enumSQLDSType.SqlTab_01;
          this.outRelaTabId = objPrjTabEN.tabId;
        } else {
          this.outSqlDsTypeId = enumSQLDSType.SqlView_02;
          this.outRelaTabId = strRelaViewTabId;
        }
        await this.ddlInSqlDsTypeId_SelectedIndexChanged(); // 绑定输入表
        await this.ddlOutSqlDsTypeId_SelectedIndexChanged(); // 绑定输出表
        this.inRelaTabId = this.mainTabId;
        this.outRelaTabId = this.mainTabId;
        //if (clsPubconst.objCurrSelProject.applicationTypeId != 3) {
        //    string strViewGroupId = clsViewGroupBLEx.GetFirstViewGroupId(clsPubconst.CurrSelPrjId);
        //    ViewGroupId = strViewGroupId;
        //}
        ////applicationTypeId = clsPubconst.objCurrSelProject.applicationTypeId;
        //viewTypeCode = (int)enumViewTypeCodeTab.Table_QUDI_4;// "0004";
      },
    },
  });
</script>
<style scoped></style>
