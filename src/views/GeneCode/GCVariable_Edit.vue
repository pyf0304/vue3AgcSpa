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
        <tr id="trVarName">
          <td class="text-right">
            <label
              id="lblVarName"
              name="lblVarName"
              class="col-form-label text-right"
              style="width: 90px"
              >变量名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVarName"
              v-model="varName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trVarExpression">
          <td class="text-right">
            <label
              id="lblVarExpression"
              name="lblVarExpression"
              class="col-form-label text-right"
              style="width: 90px"
              >变量表达式
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVarExpression"
              v-model="varExpression"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trFldId">
          <td class="text-right">
            <label
              id="lblFldId"
              name="lblFldId"
              class="col-form-label text-right"
              style="width: 90px"
              >字段
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFldId"
              v-model="fldId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrFieldTab" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trFilePath">
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
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trInitValue">
          <td class="text-right">
            <label
              id="lblInitValue"
              name="lblInitValue"
              class="col-form-label text-right"
              style="width: 90px"
              >初始值
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtInitValue"
              v-model="initValue"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trVarTypeId">
          <td class="text-right">
            <label
              id="lblVarTypeId"
              name="lblVarTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >变量类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlVarTypeId"
              v-model="varTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
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
        </tr>
        <tr id="trDataTypeId">
          <td class="text-right">
            <label
              id="lblDataTypeId"
              name="lblDataTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >数据类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDataTypeId"
              v-model="dataTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
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
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trClsName">
          <td class="text-right">
            <label
              id="lblClsName"
              name="lblClsName"
              class="col-form-label text-right"
              style="width: 90px"
              >类名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtClsName"
              v-model="clsName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelGCVariable" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitGCVariable"
        type="primary"
        @click="btnGCVariable_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import GCVariable_EditEx from '@/views/GeneCode/GCVariable_EditEx';
  import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';

  import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
  import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
  import { vFieldTab_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
  import { vFieldTab_SimEx_SortFunByKey } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';

  import { GCVariableType_GetObjLstCache } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
  import { DataTypeAbbr_GetObjLstCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
  import { refDivEdit, PrjId_Session } from '@/views/GeneCode/GCVariableVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'GCVariableEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const varId = ref('');
      const varName = ref('');
      const varExpression = ref('');
      const fldId = ref('0');
      const filePath = ref('');
      const initValue = ref('');
      const varTypeId = ref('0');
      const dataTypeId = ref('0');
      const memo = ref('');
      const clsName = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrFieldTab = ref<clsvFieldTab_SimEN[]>([]);
      const arrGCVariableType = ref<clsGCVariableTypeEN[]>([]);
      const arrDataTypeAbbr = ref<clsDataTypeAbbrEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
   * @param strPrjId:
  */
      async function getArrFieldTab(strPrjId: string) {
        const strCondition = `prjId = '${strPrjId}'`;
        let arrObjLstSel = await vFieldTab_Sim_GetObjLstAsync(strCondition);
        if (arrObjLstSel == null) return;
        arrObjLstSel = arrObjLstSel.sort(vFieldTab_SimEx_SortFunByKey('fldName', 'Asc'));
        arrFieldTab.value.length = 0;
        const obj0 = new clsvFieldTab_SimEN();
        obj0.fldId = '0';
        obj0.fldName = '请选择工程字段...';
        arrFieldTab.value.push(obj0);
        arrObjLstSel.forEach((x) => arrFieldTab.value.push(x));
        fldId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrGCVariableType() {
        const arrObjLstSel = await GCVariableType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrGCVariableType.value.length = 0;
        const obj0 = new clsGCVariableTypeEN();
        obj0.varTypeId = '0';
        obj0.varTypeName = '请选择gC变量类型...';
        arrGCVariableType.value.push(obj0);
        arrObjLstSel.forEach((x) => arrGCVariableType.value.push(x));
        varTypeId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrDataTypeAbbr() {
        const arrObjLstSel = await DataTypeAbbr_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrDataTypeAbbr.value.length = 0;
        const obj0 = new clsDataTypeAbbrEN();
        obj0.dataTypeId = '0';
        obj0.dataTypeName = '请选择数据类型...';
        arrDataTypeAbbr.value.push(obj0);
        arrObjLstSel.forEach((x) => arrDataTypeAbbr.value.push(x));
        dataTypeId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        await getArrFieldTab(strPrjId); //编辑区域

        await getArrGCVariableType(); //编辑区域

        await getArrDataTypeAbbr(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjGCVariableEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataGCVariableObj() {
        const pobjGCVariableEN = new clsGCVariableEN();
        pobjGCVariableEN.SetVarId(varId.value); // 变量Id
        pobjGCVariableEN.SetVarName(varName.value); // 变量名
        pobjGCVariableEN.SetVarExpression(varExpression.value); // 变量表达式

        pobjGCVariableEN.SetFilePath(filePath.value); // 文件路径
        pobjGCVariableEN.SetInitValue(initValue.value); // 初始值
        pobjGCVariableEN.SetVarTypeId(varTypeId.value); // 变量类型
        pobjGCVariableEN.SetDataTypeId(dataTypeId.value); // 数据类型
        pobjGCVariableEN.SetMemo(memo.value); // 说明
        pobjGCVariableEN.SetClsName(clsName.value); // 类名
        pobjGCVariableEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjGCVariableEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjGCVariableEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjGCVariableEN">表实体类对象</param>
       **/
      async function ShowDataFromGCVariableObj(pobjGCVariableEN: clsGCVariableEN) {
        varId.value = pobjGCVariableEN.varId; // 变量Id
        varName.value = pobjGCVariableEN.varName; // 变量名
        varExpression.value = pobjGCVariableEN.varExpression; // 变量表达式
        // fldId.value = pobjGCVariableEN.fld.fldId; // 字段Id
        filePath.value = pobjGCVariableEN.filePath; // 文件路径
        initValue.value = pobjGCVariableEN.initValue; // 初始值
        varTypeId.value = pobjGCVariableEN.varTypeId; // 变量类型
        dataTypeId.value = pobjGCVariableEN.dataTypeId; // 数据类型
        memo.value = pobjGCVariableEN.memo; // 说明
        clsName.value = pobjGCVariableEN.clsName; // 类名
      }
      const strTitle = ref('GC变量编辑');
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
        GetEditDataGCVariableObj,
        ShowDataFromGCVariableObj,
        varId,
        varName,
        varExpression,
        fldId,
        filePath,
        initValue,
        varTypeId,
        dataTypeId,
        memo,
        clsName,
        updDate,
        updUser,
        arrFieldTab,
        arrGCVariableType,
        arrDataTypeAbbr,
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
      btnGCVariable_Edit_Click(strCommandName: string, strKeyId: string) {
        GCVariable_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
