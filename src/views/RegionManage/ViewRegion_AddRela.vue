<template>
  <!-- 编辑层 -->
  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <select id="lstViewRegion" size="4" style="width: 300px; height: 400px">
        <option v-for="(item, index) in arrViewRegion" :key="index" :value="item.regionId">
          {{ item.regionName }}
        </option>
      </select>
    </div>

    <template #footer>
      <a-button id="btnCancelViewRegionRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewRegionRela"
        type="primary"
        tool-tip="生成界面区域，生成后编辑界面属性，同时生成界面代码"
        @click="btnViewRegion_Edit_Click('Submit', '')"
        >确认添加</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';

  import { ViewRegion_AddRelaEx } from '@/views/RegionManage/ViewRegion_AddRelaEx';
  import { ViewRegionInTab } from '@/views/RegionManage/ViewRegionInTab';

  import { PrjId_Session, refDivEdit } from '@/views/RegionManage/ViewRegionRelaVueShare';

  import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
  // import { useUserStore } from '@/store/modulesShare/user';
  import { ViewRegionEx_GetArrViewRegionByViewIdEx } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
  export default defineComponent({
    name: 'ViewRegionEdit',
    components: {
      // 组件注册
    },
    setup() {
      // const userStore = useUserStore();
      const regionId = ref('');
      const viewId = ref('');
      const inUse = ref(true);
      const isDisp = ref(true);
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');
      const arrViewRegion = ref<clsViewRegionEN[] | null>([]);
      onMounted(async () => {
        await BindDdl4EditRegionInDiv();
        //this.myonload();
      });
      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        //  await this.SetLst_RegionIdInDiv(); //编辑区域
        arrViewRegion.value = await ViewRegionEx_GetArrViewRegionByViewIdEx(strPrjId); //编辑区域
        regionId.value = '0';

        //  public async B1indDdl4EditRegionInDiv() {
      }

      /// <summary>
      /// 设置绑定下拉框，针对字段:[tabId]
      /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
      /// </summary>
      // async function SetLst_RegionIdInDiv() {
      //   //定义条件字段
      //   //const strPrjId = "";//定义条件字段
      //   await ViewRegionEx_BindLst_RegionIdByViewIdEx(
      //     divVarSet.refDivEdit,
      //     'lstViewRegion',
      //     ViewId_Main_Session.value,
      //   ); //编辑区域
      // }
      const strTitle = ref('引用界面区域');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        regionId,
        viewId,
        inUse,
        isDisp,
        memo,
        updUser,
        updDate,
        BindDdl4EditRegionInDiv,

        arrViewRegion,
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
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
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnViewRegion_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewRegion_AddRelaEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ViewRegion(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new ViewRegion_AddRelaEx('', new ViewRegionInTab());
        objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped></style>
<!-- 
 
<script>

    /*
 按钮单击,用于调用Js函数中btnEdit_Click
(AutoGCLib.WA_ViewScript_Edit_TS4Html:Gen_WApi_JS_btnEdit_Click)
*/
    function btnViewRegion_Edit_Click(strCommandName, strKeyId) {
        require(["../js/RegionManage/ViewRegion_AddRelaEx.js"], function (viewregion) {
            viewregion.ViewRegion_AddRelaEx.btnEdit_Click(strCommandName, strKeyId);
        });
    }

    /*
显示对话框
(AutoGCLib.WA_ViewScript_Edit_TS4Html:Gen_WApi_JS_ShowDialog)
*/
    function ShowDialog(strDialogName) {
        require(['jquery', 'bootstrap'], function ($) {
            $(strDialogName).modal('show');
        });
    }

    /*
     隐藏对话框
    (AutoGCLib.WA_ViewScript_Edit_TS4Html:Gen_WApi_JS_HideDialog)
    */
    function HideDialog(strDialogName) {
        require(['jquery', 'bootstrap'], function ($) {
            $(strDialogName).modal('hide');
        });
    }

</script> -->
