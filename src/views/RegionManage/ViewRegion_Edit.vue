<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trRegionId">
          <td class="text-right">
            <label
              id="lblRegionId"
              name="lblRegionId"
              class="col-form-label text-right"
              style="width: 90px"
              >区域Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionId"
              v-model="regionId"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trRegionName">
          <td class="text-right">
            <label
              id="lblRegionName"
              name="lblRegionName"
              class="col-form-label text-right"
              style="width: 90px"
              >区域名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRegionName"
              v-model="regionName"
              name="txtRegionName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trRegionTypeId">
          <td class="text-right">
            <label
              id="lblRegionTypeId"
              name="lblRegionTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >区域类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRegionTypeId"
              v-model="regionTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
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
        <tr id="trWidth">
          <td class="text-right">
            <label
              id="lblWidth"
              name="lblWidth"
              class="col-form-label text-right"
              style="width: 90px"
              >宽
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtWidth"
              v-model.number="width"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trClassName">
          <td class="text-right">
            <label
              id="lblClassName"
              name="lblClassName"
              class="col-form-label text-right"
              style="width: 90px"
              >类名
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtClsName"
              v-model="clsName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trContainerTypeId">
          <td class="text-right">
            <label
              id="lblContainerTypeId"
              name="lblContainerTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >容器类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlContainerTypeId"
              v-model="containerTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrGCContainerType"
                :key="index"
                :value="item.containerTypeId"
              >
                {{ item.containerTypeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trPageDispModeId">
          <td class="text-right">
            <label
              id="lblPageDispModeId"
              name="lblPageDispModeId"
              class="col-form-label text-right"
              style="width: 90px"
              >显示模式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPageDispModeId"
              v-model="pageDispModeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrPageDispMode"
                :key="index"
                :value="item.pageDispModeId"
              >
                {{ item.pageDispModeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trInOutTypeId">
          <td class="text-right">
            <label
              id="lblInOutTypeId"
              name="lblInOutTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >INOUT类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInOutTypeId"
              v-model="inOutTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrInOutType" :key="index" :value="item.inOutTypeId">
                {{ item.inOutTypeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trTabId">
          <td class="text-right">
            <label
              id="lblTabId"
              name="lblTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabId"
              v-model="tabId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
        </tr>

        <tr id="trKeyId4Test">
          <td class="text-right">
            <label
              id="lblKeyId4Test"
              name="lblKeyId4Test"
              class="col-form-label text-right"
              style="width: 100px"
              >测试关键字值
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeyId4Test"
              v-model="keyId4Test"
              class="form-control form-control-sm"
              style="width: 400px"
            />
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
      <a-button id="btnCancelViewRegion" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewRegion"
        type="primary"
        @click="btnViewRegion_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { CmPrjId_Local, PrjId_Session } from './ViewRegionVueShare';
  import { Format } from '@/ts/PubFun/clsString';

  import ViewRegion_EditEx from '@/views/RegionManage/ViewRegion_EditEx';
  import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
  import { clsGCContainerTypeEN } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
  import { clsPageDispModeEN } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
  import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { RegionType_GetObjLstCache } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
  import { GCContainerType_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsGCContainerTypeWApi';
  import { PageDispMode_GetObjLstCache } from '@/ts/L3ForWApi/PrjMenu/clsPageDispModeWApi';
  import { InOutType_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';

  export default defineComponent({
    name: 'ViewRegionEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      const regionId = ref('');
      const regionName = ref('');
      const regionTypeId = ref('');
      const width = ref(0);
      const clsName = ref('');
      const containerTypeId = ref('');
      const pageDispModeId = ref('');
      const inOutTypeId = ref('');
      const tabId = ref('');
      const keyId4Test = ref('');
      const memo = ref('');
      const prjId = ref('');
      const updUser = ref('');
      const updDate = ref('');
      const arrRegionType = ref<clsRegionTypeEN[]>([]);
      const arrGCContainerType = ref<clsGCContainerTypeEN[]>([]);
      const arrPageDispMode = ref<clsPageDispModeEN[]>([]);
      const arrInOutType = ref<clsInOutTypeEN[]>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrRegionType() {
        let arrObjLstSel = await RegionType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrRegionType.value.length = 0;
        const obj0 = new clsRegionTypeEN();
        obj0.regionTypeId = '0';
        obj0.regionTypeName = '请选择区域类型...';
        arrRegionType.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) => x.regionTypeOrderNum - y.regionTypeOrderNum);
        arrObjLstSel.forEach((x) => arrRegionType.value.push(x));
        regionTypeId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrGCContainerType() {
        let arrObjLstSel = await GCContainerType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrGCContainerType.value.length = 0;
        const obj0 = new clsGCContainerTypeEN();
        obj0.containerTypeId = '0';
        obj0.containerTypeName = '请选择gC容器类型...';
        arrGCContainerType.value.push(obj0);
        arrObjLstSel = arrObjLstSel.sort((x, y) =>
          x.containerTypeName.localeCompare(y.containerTypeName),
        );
        arrObjLstSel.forEach((x) => arrGCContainerType.value.push(x));
        containerTypeId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrPageDispMode() {
        const arrObjLstSel = await PageDispMode_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrPageDispMode.value.length = 0;
        const obj0 = new clsPageDispModeEN();
        obj0.pageDispModeId = '0';
        obj0.pageDispModeName = '请选择页面显示模式...';
        arrPageDispMode.value.push(obj0);
        arrObjLstSel.forEach((x) => arrPageDispMode.value.push(x));
        pageDispModeId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrInOutType() {
        const arrObjLstSel = await InOutType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrInOutType.value.length = 0;
        const obj0 = new clsInOutTypeEN();
        obj0.inOutTypeId = '0';
        obj0.inOutTypeName = '请选择inOut类型...';
        arrInOutType.value.push(obj0);
        arrObjLstSel.forEach((x) => arrInOutType.value.push(x));
        inOutTypeId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        await getArrRegionType(); //编辑区域

        await getArrGCContainerType(); //编辑区域

        await getArrPageDispMode(); //编辑区域

        await getArrInOutType(); //编辑区域

        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache(strCmPrjId);
      }

      const strTitle = ref('界面区域编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewRegion':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitViewRegion':
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
          case 'btnCancelViewRegion':
            return strCancelButtonText.value;
          case 'btnSubmitViewRegion':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewRegionEN">表实体类对象</param>
       **/
      async function ShowDataFromViewRegionObj(pobjViewRegionEN: clsViewRegionEN) {
        regionId.value = pobjViewRegionEN.regionId; // 区域Id
        regionName.value = pobjViewRegionEN.regionName; // 区域名称
        regionTypeId.value = pobjViewRegionEN.regionTypeId; // 区域类型
        width.value = pobjViewRegionEN.width; // 宽
        clsName.value = pobjViewRegionEN.clsName; // 类名
        containerTypeId.value = pobjViewRegionEN.containerTypeId; // 容器类型
        pageDispModeId.value = pobjViewRegionEN.pageDispModeId; // 显示模式
        inOutTypeId.value = pobjViewRegionEN.inOutTypeId; // INOUT类型
        tabId.value = pobjViewRegionEN.tabId; // 表
        keyId4Test.value = pobjViewRegionEN.keyId4Test; // 测试关键字值
        memo.value = pobjViewRegionEN.memo; // 说明
      }
      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjViewRegionEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataViewRegionObj() {
        const pobjViewRegionEN = new clsViewRegionEN();
        pobjViewRegionEN.SetRegionId(regionId.value); // 区域Id
        pobjViewRegionEN.SetRegionName(regionName.value); // 区域名称
        pobjViewRegionEN.SetRegionTypeId(regionTypeId.value); // 区域类型
        pobjViewRegionEN.SetWidth(Number(width.value)); // 宽
        pobjViewRegionEN.SetClsName(clsName.value); // 类名
        pobjViewRegionEN.SetContainerTypeId(containerTypeId.value); // 容器类型
        pobjViewRegionEN.SetPageDispModeId(pageDispModeId.value); // 显示模式
        pobjViewRegionEN.SetInOutTypeId(inOutTypeId.value); // INOUT类型
        pobjViewRegionEN.SetTabId(tabId.value); // 表
        pobjViewRegionEN.SetKeyId4Test(keyId4Test.value); // 测试关键字值
        pobjViewRegionEN.SetMemo(memo.value); // 说明
        pobjViewRegionEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjViewRegionEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjViewRegionEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjViewRegionEN;
      }
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();

        setTimeout(() => {
          console.log('对话框已经显示!');
        }, 1000);
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        regionId,
        regionName,
        regionTypeId,
        width,
        clsName,
        containerTypeId,
        pageDispModeId,
        inOutTypeId,
        tabId,
        keyId4Test,
        memo,
        prjId,
        updUser,
        updDate,

        arrRegionType,
        arrGCContainerType,
        arrPageDispMode,
        arrInOutType,
        arrvPrjTab_Sim,
        BindDdl4EditRegionInDiv,
        ShowDataFromViewRegionObj,
        GetEditDataViewRegionObj,
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
        //ViewRegion_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnViewRegion_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewRegion_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
