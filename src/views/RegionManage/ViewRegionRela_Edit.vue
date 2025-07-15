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
            <select
              id="ddlRegionId"
              v-model="regionId"
              class="form-control form-control-sm"
              style="width: 300px"
            >
              <option v-for="(item, index) in arrViewRegion" :key="index" :value="item.regionId">
                {{ item.regionName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trInUse">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 300px">
              <input id="chkInUse" v-model="inUse" type="checkbox" Text="是否在用" /><label
                for="chkInUse"
                >是否在用</label
              ></span
            >
          </td>
        </tr>
        <tr id="trIsDisp">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 300px">
              <input id="chkIsDisp" v-model="isDisp" type="checkbox" Text="是否显示" /><label
                for="chkIsDisp"
                >是否显示</label
              ></span
            >
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >说明
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              v-model="memo"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelViewRegionRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewRegionRela"
        type="primary"
        @click="btnViewRegionRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import ViewRegionRela_EditEx from '@/views/RegionManage/ViewRegionRela_EditEx';
  import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
  import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
  import { ViewRegion_GetObjLstCache } from '@/ts/L3ForWApi/RegionManage/clsViewRegionWApi';
  import {
    refDivEdit,
    ViewId_Main_Session,
    CmPrjId_Local,
  } from '@/views/RegionManage/ViewRegionRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  export default defineComponent({
    name: 'ViewRegionRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const regionId = ref('');
      const viewId = ref('');
      const inUse = ref(true);
      const isDisp = ref(true);
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrViewRegion = ref<clsViewRegionEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strPrjId:
  */
      async function getArrViewRegion(strPrjId: string) {
        let arrObjLstSel = await ViewRegion_GetObjLstCache(clsPrivateSessionStorage.currSelPrjId);
        if (arrObjLstSel == null) return;
        arrViewRegion.value.length = 0;
        const obj0 = new clsViewRegionEN();
        obj0.regionId = '0';
        obj0.regionName = '请选择界面区域...';
        arrViewRegion.value.push(obj0);
        arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
        arrObjLstSel.forEach((x) => arrViewRegion.value.push(x));
        regionId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        await getArrViewRegion(strCmPrjId); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjViewRegionRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataViewRegionRelaObj() {
        const pobjViewRegionRelaEN = new clsViewRegionRelaEN();
        pobjViewRegionRelaEN.SetRegionId(regionId.value); // 区域Id
        pobjViewRegionRelaEN.SetViewId(ViewId_Main_Session.value); // 界面Id
        pobjViewRegionRelaEN.SetInUse(inUse.value); // 是否在用
        pobjViewRegionRelaEN.SetIsDisp(isDisp.value); // 是否显示
        pobjViewRegionRelaEN.SetMemo(memo.value); // 说明
        pobjViewRegionRelaEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjViewRegionRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjViewRegionRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewRegionRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromViewRegionRelaObj(pobjViewRegionRelaEN: clsViewRegionRelaEN) {
        regionId.value = pobjViewRegionRelaEN.regionId; // 区域Id
        inUse.value = pobjViewRegionRelaEN.inUse; // 是否在用
        isDisp.value = pobjViewRegionRelaEN.isDisp; // 是否显示
        memo.value = pobjViewRegionRelaEN.memo; // 说明
      }
      const strTitle = ref('界面区域关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
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
        GetEditDataViewRegionRelaObj,
        ShowDataFromViewRegionRelaObj,
        regionId,
        viewId,
        inUse,
        isDisp,
        memo,
        updUser,
        updDate,
        arrViewRegion,
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
      btnViewRegionRela_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewRegionRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
