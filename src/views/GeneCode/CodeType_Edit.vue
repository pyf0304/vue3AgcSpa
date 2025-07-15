<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFrontOrBack">
          <td class="text-right">
            <label
              id="lblCodeTypeId"
              name="lblCodeTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >代码类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCodeTypeId"
              v-model="codeTypeId"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFrontOrBack"
              name="lblFrontOrBack"
              class="col-form-label text-right"
              style="width: 90px"
              >前台Or后台
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFrontOrBack"
              v-model="frontOrBack"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
        </tr>
        <tr id="trCodeTypeName">
          <td class="text-right">
            <label
              id="lblCodeTypeName"
              name="lblCodeTypeName"
              class="col-form-label text-right"
              style="width: 90px"
              >代码类型名
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtCodeTypeName"
              v-model="codeTypeName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trCodeTypeENName">
          <td class="text-right">
            <label
              id="lblCodeTypeENName"
              name="lblCodeTypeENName"
              class="col-form-label text-right"
              style="width: 90px"
              >代码类型英文名
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtCodeTypeENName"
              v-model="codeTypeENName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trCodeTypeSimName">
          <td class="text-right">
            <label
              id="lblCodeTypeSimName"
              name="lblCodeTypeSimName"
              class="col-form-label text-right"
              style="width: 90px"
              >简称
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtCodeTypeSimName"
              v-model="codeTypeSimName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trRegionTypeId">
          <td class="text-right">
            <label
              id="lblProgLangTypeId"
              name="lblProgLangTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >编程语言类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlProgLangTypeId"
              v-model="progLangTypeId"
              class="form-control form-control-sm"
              style="width: 100px"
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
              id="lblRegionTypeId"
              name="lblRegionTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >区域类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRegionTypeId"
              v-model="regionTypeId"
              class="form-control form-control-sm"
              style="width: 100px"
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
        </tr>
        <tr id="trIsDefaultOverride">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 100px">
              <input id="chkIsWin" v-model="isWin" type="checkbox" Text="是否Win应用" /><label
                for="chkIsWin"
                >是否Win应用</label
              ></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 100px">
              <input
                id="chkIsDefaultOverride"
                v-model="isDefaultOverride"
                type="checkbox"
                Text="是否默认覆盖"
              /><label for="chkIsDefaultOverride">是否默认覆盖</label></span
            >
          </td>
        </tr>
        <tr id="trIsMobileApp">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsTableFldConst"
                v-model="isTableFldConst"
                type="checkbox"
                Text="IsTableFldConst"
              /><label for="chkIsTableFldConst">IsTableFldConst</label></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 100px">
              <input
                id="chkIsMobileApp"
                v-model="isMobileApp"
                type="checkbox"
                Text="是否移动终端应用"
              /><label for="chkIsMobileApp">是否移动终端应用</label></span
            >
          </td>
        </tr>
        <tr id="trIsAspMvc">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsPubApp4WinWeb"
                v-model="isPubApp4WinWeb"
                type="checkbox"
                Text="IsPubApp4WinWeb"
              /><label for="chkIsPubApp4WinWeb">IsPubApp4WinWeb</label></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input id="chkIsAspMvc" v-model="isAspMvc" type="checkbox" Text="是否AspMvc" /><label
                for="chkIsAspMvc"
                >是否AspMvc</label
              ></span
            >
          </td>
        </tr>
        <tr id="trIsDirByTabName">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsWebSrvAccess"
                v-model="isWebSrvAccess"
                type="checkbox"
                Text="IsWebSrvAccess"
              /><label for="chkIsWebSrvAccess">IsWebSrvAccess</label></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsDirByTabName"
                v-model="isDirByTabName"
                type="checkbox"
                Text="是否用表名作为路径"
              /><label for="chkIsDirByTabName">是否用表名作为路径</label></span
            >
          </td>
        </tr>
        <tr id="trWinOrWeb">
          <td class="text-right">
            <label
              id="lblOrderNum"
              name="lblOrderNum"
              class="col-form-label text-right"
              style="width: 90px"
              >序号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOrderNum"
              v-model.number="orderNum"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblWinOrWeb"
              name="lblWinOrWeb"
              class="col-form-label text-right"
              style="width: 90px"
              >WinOrWeb
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtWinOrWeb"
              v-model="winOrWeb"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
        </tr>
        <tr id="trGroupName">
          <td class="text-right">
            <label
              id="lblClassNameFormat"
              name="lblClassNameFormat"
              class="col-form-label text-right"
              style="width: 90px"
              >类名格式
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtClassNameFormat"
              v-model="classNameFormat"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblGroupName"
              name="lblGroupName"
              class="col-form-label text-right"
              style="width: 90px"
              >组名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtGroupName"
              v-model="groupName"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
        </tr>
        <tr id="trDependsOn">
          <td class="text-right">
            <label
              id="lblPrefix"
              name="lblPrefix"
              class="col-form-label text-right"
              style="width: 90px"
              >前缀
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPrefix"
              v-model="prefix"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDependsOn"
              name="lblDependsOn"
              class="col-form-label text-right"
              style="width: 90px"
              >依赖于
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDependsOn"
              v-model="dependsOn"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trFileNameFormat">
          <td class="text-right">
            <label
              id="lblSqlDsTypeId"
              name="lblSqlDsTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >数据源类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSqlDsTypeId"
              v-model="sqlDsTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrSQLDSType" :key="index" :value="item.sqlDsTypeId">
                {{ item.sqlDsTypeName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label
              id="lblFileNameFormat"
              name="lblFileNameFormat"
              class="col-form-label text-right"
              style="width: 90px"
              >文件名格式
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFileNameFormat"
              v-model="fileNameFormat"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trIsCSharp">
          <td class="text-right">
            <label
              id="lblClassNamePattern"
              name="lblClassNamePattern"
              class="col-form-label text-right"
              style="width: 90px"
              >类名模式
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtClassNamePattern"
              v-model="classNamePattern"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsCSharp"
                v-model="isCSharp"
                type="checkbox"
                Text="是否CSharp语言"
              /><label for="chkIsCSharp">是否CSharp语言</label></span
            >
          </td>
        </tr>
        <tr id="trIsTypeScript">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsJavaScript"
                v-model="isJavaScript"
                type="checkbox"
                Text="是否JavaScript语言"
              /><label for="chkIsJavaScript">是否JavaScript语言</label></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsTypeScript"
                v-model="isTypeScript"
                type="checkbox"
                Text="是否TypeScript语言"
              /><label for="chkIsTypeScript">是否TypeScript语言</label></span
            >
          </td>
        </tr>
        <tr id="trIsExtend">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsWeb" v-model="isWeb" type="checkbox" Text="是否Web应用" /><label
                for="chkIsWeb"
                >是否Web应用</label
              ></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsExtend" v-model="isExtend" type="checkbox" Text="是否扩展类" /><label
                for="chkIsExtend"
                >是否扩展类</label
              ></span
            >
          </td>
        </tr>
        <tr id="trIsAutoParseFile">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkInUse" v-model="inUse" type="checkbox" Text="是否在用" /><label
                for="chkInUse"
                >是否在用</label
              ></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsAutoParseFile"
                v-model="isAutoParseFile"
                type="checkbox"
                Text="是否自动分析文件"
              /><label for="chkIsAutoParseFile">是否自动分析文件</label></span
            >
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
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
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelCodeType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitCodeType"
        type="primary"
        @click="btnCodeType_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import CodeType_EditEx from '@/views/GeneCode/CodeType_EditEx';
  import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { RegionType_GetArrRegionType } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
  import { SQLDSType_GetArrSQLDSType } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
  import { refDivEdit } from '@/views/GeneCode/CodeTypeVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, Is0EqEmpty, IsNullOrEmpty, IsNullOrEmptyEq0 } from '@/ts/PubFun/clsString';
  import { CodeType_Edit } from '@/viewsBase/GeneCode/CodeType_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

  export default defineComponent({
    name: 'CodeTypeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const codeTypeId = ref('');
      const frontOrBack = ref('');
      const codeTypeName = ref('');
      const codeTypeENName = ref('');
      const codeTypeSimName = ref('');
      const progLangTypeId = ref('');
      const regionTypeId = ref('');
      const isWin = ref(true);
      const isDefaultOverride = ref(true);
      const isTableFldConst = ref(true);
      const isMobileApp = ref(true);
      const isPubApp4WinWeb = ref(true);
      const isAspMvc = ref(true);
      const isWebSrvAccess = ref(true);
      const isDirByTabName = ref(true);
      const orderNum = ref(0);
      const winOrWeb = ref('');
      const classNameFormat = ref('');
      const groupName = ref('');
      const prefix = ref('');
      const dependsOn = ref('');
      const sqlDsTypeId = ref('');
      const fileNameFormat = ref('');
      const classNamePattern = ref('');
      const isCSharp = ref(true);
      const isJavaScript = ref(true);
      const isTypeScript = ref(true);
      const isWeb = ref(true);
      const isExtend = ref(true);
      const inUse = ref(true);
      const isAutoParseFile = ref(true);
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);
      const arrRegionType = ref<clsRegionTypeEN[] | null>([]);
      const arrSQLDSType = ref<clsSQLDSTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //编辑区域
        progLangTypeId.value = '0';

        arrRegionType.value = await RegionType_GetArrRegionType(); //编辑区域
        regionTypeId.value = '0';

        arrSQLDSType.value = await SQLDSType_GetArrSQLDSType(); //编辑区域
        sqlDsTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjCodeTypeEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataCodeTypeObj() {
        const pobjCodeTypeEN = new clsCodeTypeEN();
        pobjCodeTypeEN.SetCodeTypeId(codeTypeId.value); // 代码类型Id
        pobjCodeTypeEN.SetFrontOrBack(frontOrBack.value); // 前台Or后台
        pobjCodeTypeEN.SetCodeTypeName(codeTypeName.value); // 代码类型名
        pobjCodeTypeEN.SetCodeTypeENName(codeTypeENName.value); // 代码类型英文名
        pobjCodeTypeEN.SetCodeTypeSimName(codeTypeSimName.value); // 简称
        pobjCodeTypeEN.SetProgLangTypeId(Is0EqEmpty(progLangTypeId.value)); // 编程语言类型Id
        pobjCodeTypeEN.SetRegionTypeId(Is0EqEmpty(regionTypeId.value)); // 区域类型Id
        pobjCodeTypeEN.SetIsWin(isWin.value); // 是否Win应用
        pobjCodeTypeEN.SetIsDefaultOverride(isDefaultOverride.value); // 是否默认覆盖
        pobjCodeTypeEN.SetIsTableFldConst(isTableFldConst.value); // IsTableFldConst
        pobjCodeTypeEN.SetIsMobileApp(isMobileApp.value); // 是否移动终端应用
        pobjCodeTypeEN.SetIsPubApp4WinWeb(isPubApp4WinWeb.value); // IsPubApp4WinWeb
        pobjCodeTypeEN.SetIsAspMvc(isAspMvc.value); // 是否AspMvc
        pobjCodeTypeEN.SetIsWebSrvAccess(isWebSrvAccess.value); // IsWebSrvAccess
        pobjCodeTypeEN.SetIsDirByTabName(isDirByTabName.value); // 是否用表名作为路径
        pobjCodeTypeEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjCodeTypeEN.SetWinOrWeb(winOrWeb.value); // WinOrWeb
        pobjCodeTypeEN.SetClassNameFormat(classNameFormat.value); // 类名格式
        pobjCodeTypeEN.SetGroupName(groupName.value); // 组名
        pobjCodeTypeEN.SetPrefix(prefix.value); // 前缀
        pobjCodeTypeEN.SetDependsOn(dependsOn.value); // 依赖于
        pobjCodeTypeEN.SetSqlDsTypeId(Is0EqEmpty(sqlDsTypeId.value)); // 数据源类型Id
        pobjCodeTypeEN.SetFileNameFormat(fileNameFormat.value); // 文件名格式
        pobjCodeTypeEN.SetClassNamePattern(classNamePattern.value); // 类名模式
        pobjCodeTypeEN.SetIsCSharp(isCSharp.value); // 是否CSharp语言
        pobjCodeTypeEN.SetIsJavaScript(isJavaScript.value); // 是否JavaScript语言
        pobjCodeTypeEN.SetIsTypeScript(isTypeScript.value); // 是否TypeScript语言
        pobjCodeTypeEN.SetIsWeb(isWeb.value); // 是否Web应用
        pobjCodeTypeEN.SetIsExtend(isExtend.value); // 是否扩展类
        pobjCodeTypeEN.SetInUse(inUse.value); // 是否在用
        pobjCodeTypeEN.SetIsAutoParseFile(isAutoParseFile.value); // 是否自动分析文件
        pobjCodeTypeEN.SetMemo(memo.value); // 说明
        pobjCodeTypeEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjCodeTypeEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjCodeTypeEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjCodeTypeEN">表实体类对象</param>
       **/
      async function ShowDataFromCodeTypeObj(pobjCodeTypeEN: clsCodeTypeEN) {
        codeTypeId.value = pobjCodeTypeEN.codeTypeId; // 代码类型Id
        frontOrBack.value = pobjCodeTypeEN.frontOrBack; // 前台Or后台
        codeTypeName.value = pobjCodeTypeEN.codeTypeName; // 代码类型名
        codeTypeENName.value = pobjCodeTypeEN.codeTypeENName; // 代码类型英文名
        codeTypeSimName.value = pobjCodeTypeEN.codeTypeSimName; // 简称
        progLangTypeId.value = IsNullOrEmptyEq0(pobjCodeTypeEN.progLangTypeId); // 编程语言类型Id
        regionTypeId.value = IsNullOrEmptyEq0(pobjCodeTypeEN.regionTypeId); // 区域类型Id
        isWin.value = pobjCodeTypeEN.isWin; // 是否Win应用
        isDefaultOverride.value = pobjCodeTypeEN.isDefaultOverride; // 是否默认覆盖
        isTableFldConst.value = pobjCodeTypeEN.isTableFldConst; // IsTableFldConst
        isMobileApp.value = pobjCodeTypeEN.isMobileApp; // 是否移动终端应用
        isPubApp4WinWeb.value = pobjCodeTypeEN.isPubApp4WinWeb; // IsPubApp4WinWeb
        isAspMvc.value = pobjCodeTypeEN.isAspMvc; // 是否AspMvc
        isWebSrvAccess.value = pobjCodeTypeEN.isWebSrvAccess; // IsWebSrvAccess
        isDirByTabName.value = pobjCodeTypeEN.isDirByTabName; // 是否用表名作为路径
        orderNum.value = pobjCodeTypeEN.orderNum; // 序号
        winOrWeb.value = pobjCodeTypeEN.winOrWeb; // WinOrWeb
        classNameFormat.value = pobjCodeTypeEN.classNameFormat; // 类名格式
        groupName.value = pobjCodeTypeEN.groupName; // 组名
        prefix.value = pobjCodeTypeEN.prefix; // 前缀
        dependsOn.value = pobjCodeTypeEN.dependsOn; // 依赖于
        sqlDsTypeId.value = IsNullOrEmptyEq0(pobjCodeTypeEN.sqlDsTypeId); // 数据源类型Id
        fileNameFormat.value = pobjCodeTypeEN.fileNameFormat; // 文件名格式
        classNamePattern.value = pobjCodeTypeEN.classNamePattern; // 类名模式
        isCSharp.value = pobjCodeTypeEN.isCSharp; // 是否CSharp语言
        isJavaScript.value = pobjCodeTypeEN.isJavaScript; // 是否JavaScript语言
        isTypeScript.value = pobjCodeTypeEN.isTypeScript; // 是否TypeScript语言
        isWeb.value = pobjCodeTypeEN.isWeb; // 是否Web应用
        isExtend.value = pobjCodeTypeEN.isExtend; // 是否扩展类
        inUse.value = pobjCodeTypeEN.inUse; // 是否在用
        isAutoParseFile.value = pobjCodeTypeEN.isAutoParseFile; // 是否自动分析文件
        memo.value = pobjCodeTypeEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        codeTypeId.value = '';
        frontOrBack.value = '';
        codeTypeName.value = '';
        codeTypeENName.value = '';
        codeTypeSimName.value = '';
        progLangTypeId.value = '0';
        regionTypeId.value = '0';
        isWin.value = false;
        isDefaultOverride.value = false;
        isTableFldConst.value = false;
        isMobileApp.value = false;
        isPubApp4WinWeb.value = false;
        isAspMvc.value = false;
        isWebSrvAccess.value = false;
        isDirByTabName.value = false;
        orderNum.value = 0;
        winOrWeb.value = '';
        classNameFormat.value = '';
        groupName.value = '';
        prefix.value = '';
        dependsOn.value = '';
        sqlDsTypeId.value = '0';
        fileNameFormat.value = '';
        classNamePattern.value = '';
        isCSharp.value = false;
        isJavaScript.value = false;
        isTypeScript.value = false;
        isWeb.value = false;
        isExtend.value = false;
        inUse.value = false;
        isAutoParseFile.value = false;
        memo.value = '';
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
              if (['02', '03', '06'].indexOf(clsCodeTypeEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (CodeType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsCodeTypeEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (CodeType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsCodeTypeEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In CodeType_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (CodeType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsCodeTypeEN._CurrTabName, keyId.value);
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
      const strTitle = ref('代码类型编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<CodeType_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: CodeType_EditEx) => {
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
          case 'btnCancelCodeType':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitCodeType':
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
          case 'btnCancelCodeType':
            return strCancelButtonText.value;
          case 'btnSubmitCodeType':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
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
        GetEditDataCodeTypeObj,
        ShowDataFromCodeTypeObj,
        Clear,
        btnSubmit_Click,
        codeTypeId,
        frontOrBack,
        codeTypeName,
        codeTypeENName,
        codeTypeSimName,
        progLangTypeId,
        regionTypeId,
        isWin,
        isDefaultOverride,
        isTableFldConst,
        isMobileApp,
        isPubApp4WinWeb,
        isAspMvc,
        isWebSrvAccess,
        isDirByTabName,
        orderNum,
        winOrWeb,
        classNameFormat,
        groupName,
        prefix,
        dependsOn,
        sqlDsTypeId,
        fileNameFormat,
        classNamePattern,
        isCSharp,
        isJavaScript,
        isTypeScript,
        isWeb,
        isExtend,
        inUse,
        isAutoParseFile,
        memo,
        updDate,
        updUser,
        arrProgLangType,
        arrRegionType,
        arrSQLDSType,

        SetButtonText,
        GetButtonText,
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
        //CodeType_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnCodeType_Edit_Click(strCommandName: string, strKeyId: string) {
        CodeType_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
