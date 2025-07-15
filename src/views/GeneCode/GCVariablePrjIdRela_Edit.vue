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
        <tr id="trMemo">
          <td class="text-right">
            <label
              id="lblVarId"
              name="lblVarId"
              class="col-form-label text-right"
              style="width: 90px"
              >变量
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlVarId"
              v-model="varId"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option v-for="(item, index) in arrGCVariable" :key="index" :value="item.varId">
                {{ item.varName }}
              </option></select
            >
          </td>
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
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelGCVariablePrjIdRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitGCVariablePrjIdRela"
        type="primary"
        @click="btnGCVariablePrjIdRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import GCVariablePrjIdRela_EditEx from '@/views/GeneCode/GCVariablePrjIdRela_EditEx';
  import { clsGCVariablePrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaEN';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { GCVariable_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
  import {
    GCVariableEx_CopyToEx,
    GCVariableEx_FuncMap_VarNameEx,
    GCVariable_SortFun_ByVarName,
  } from '@/ts/L3ForWApiEx/GeneCode/clsGCVariableExWApi';
  import { refDivEdit, PrjId_Session } from '@/views/GeneCode/GCVariablePrjIdRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'GCVariablePrjIdRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const varId = ref('');
      const prjId = ref('');
      const updUser = ref('');
      const updDate = ref('');
      const memo = ref('');

      const arrGCVariable = ref<clsGCVariableEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strPrjId:
  */
      // async function getArrGCVariableBak(strPrjId: string) {
      //   const arrObjLstSel = await GCVariable_GetObjLstCache();
      //   if (arrObjLstSel == null) return;
      //   arrGCVariable.value.length = 0;
      //   const obj0 = new clsGCVariableEN();
      //   obj0.varId = '0';
      //   obj0.varName = '请选择gC变量...';
      //   arrGCVariable.value.push(obj0);
      //   arrObjLstSel.forEach((x) => arrGCVariable.value.push(x));
      //   varId.value = '0';
      // }
      async function getArrGCVariable(strPrjId: string) {
        //为数据源于表的下拉框设置内容
        //console.log("开始：BindDdl_VarIdInDivCache");
        const strCondition = ` VarId not in (Select VarId From 	GCVariablePrjIdRela where PrjId='${strPrjId}')`;
        const arrObjLst_Sel0 = await GCVariable_GetObjLstAsync(strCondition);
        if (arrObjLst_Sel0 == null) return;
        let arrObjExLst_Sel = arrObjLst_Sel0.map(GCVariableEx_CopyToEx);
        for (const objInFor of arrObjExLst_Sel) {
          await GCVariableEx_FuncMap_VarNameEx(objInFor);
        }
        arrObjExLst_Sel = arrObjExLst_Sel.sort(GCVariable_SortFun_ByVarName);

        // const arrObjLstSel = await GCVariable_GetObjLstCache();
        // if (arrObjLstSel == null) return;
        arrGCVariable.value.length = 0;
        const obj0 = new clsGCVariableEN();
        obj0.varId = '0';
        obj0.varName = '请选择gC变量...';
        arrGCVariable.value.push(obj0);
        arrObjExLst_Sel.forEach((x) => arrGCVariable.value.push(x));
        varId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        await getArrGCVariable(strPrjId); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjGCVariablePrjIdRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataGCVariablePrjIdRelaObj() {
        const pobjGCVariablePrjIdRelaEN = new clsGCVariablePrjIdRelaEN();
        pobjGCVariablePrjIdRelaEN.SetVarId(varId.value); // 变量
        pobjGCVariablePrjIdRelaEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjGCVariablePrjIdRelaEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjGCVariablePrjIdRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjGCVariablePrjIdRelaEN.SetMemo(memo.value); // 说明
        return pobjGCVariablePrjIdRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjGCVariablePrjIdRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromGCVariablePrjIdRelaObj(
        pobjGCVariablePrjIdRelaEN: clsGCVariablePrjIdRelaEN,
      ) {
        varId.value = pobjGCVariablePrjIdRelaEN.varId; // 变量
        memo.value = pobjGCVariablePrjIdRelaEN.memo; // 说明
      }
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        varId.value = '0';
        memo.value = '';
      }
      const strTitle = ref('GCVariablePrjIdRela编辑');
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
        GetEditDataGCVariablePrjIdRelaObj,
        ShowDataFromGCVariablePrjIdRelaObj,
        varId,
        prjId,
        updUser,
        updDate,
        memo,
        arrGCVariable,
        Clear,
        BindDdl4EditRegionInDiv,
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
      btnGCVariablePrjIdRela_Edit_Click(strCommandName: string, strKeyId: string) {
        GCVariablePrjIdRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
