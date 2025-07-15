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
        <tr id="trInDataNodeId">
          <td class="text-right">
            <label id="lblInDataNodeId" class="col-form-label text-right" style="width: 90px"
              >In数据结点
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInDataNodeId"
              v-model.number="inDataNodeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrvDataNode_Sim"
                :key="index"
                :value="item.dataNodeId"
              >
                {{ item.dataNodeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trOutDataNodeId">
          <td class="text-right">
            <label id="lblOutDataNodeId" class="col-form-label text-right" style="width: 90px"
              >Out数据结点
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutDataNodeId"
              v-model.number="outDataNodeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrvDataNode_Sim"
                :key="index"
                :value="item.dataNodeId"
              >
                {{ item.dataNodeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trAssociationMappingId">
          <td class="text-right">
            <label
              id="lblAssociationMappingId"
              class="col-form-label text-right"
              style="width: 90px"
              >关系映射
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlAssociationMappingId"
              v-model="associationMappingId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrAssociationMapping"
                :key="index"
                :value="item.associationMappingId"
              >
                {{ item.associationMappingName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trFuncMapModeId">
          <td class="text-right">
            <label id="lblFuncMapModeId" class="col-form-label text-right" style="width: 90px"
              >映射模式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncMapModeId"
              v-model="funcMapModeId"
              class="form-control form-control-sm"
              style="width: 400px"
              @change="ddlFuncMapModeId_SelectedIndexChanged($event)"
            >
              <option
                v-for="(item, index) in arrFuncMapMode"
                :key="index"
                :value="item.funcMapModeId"
              >
                {{ item.funcMapModeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trTabId">
          <td class="text-right">
            <label id="lblTabId" class="col-form-label text-right" style="width: 90px">表 </label>
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
        <tr id="trDnFunctionId">
          <td class="text-right">
            <label id="lblDnFunctionId" class="col-form-label text-right" style="width: 90px"
              >DN函数
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDnFunctionId"
              v-model="dnFunctionId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrDnFunction"
                :key="index"
                :value="item.dnFunctionId"
              >
                {{ item.dnFunctionName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" class="col-form-label text-right" style="width: 90px">说明 </label>
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
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelDnFuncMap" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitDnFuncMap"
        type="primary"
        @click="btnDnFuncMap_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import DnFuncMap_EditEx from '@/views/AIModule/DnFuncMap_EditEx';
  import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';
  import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
  import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
  import { clsFuncMapModeEN, enumFuncMapMode } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';
  import { vDataNode_Sim_GetArrvDataNode_SimByCmPrjId } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
  import { AssociationMapping_GetArrAssociationMapping } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
  import { FuncMapMode_GetArrFuncMapMode } from '@/ts/L3ForWApi/AIModule/clsFuncMapModeWApi';
  import { DnFunction_GetArrDnFunctionByPrjId } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
  import { refDivEdit, PrjId_Session, CmPrjId_Local } from '@/views/AIModule/DnFuncMapVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, Is0EqEmpty, IsNullOrEmpty, IsNullOrEmptyEq0 } from '@/ts/PubFun/clsString';
  import { DnFuncMap_Edit } from '@/viewsBase/AIModule/DnFuncMap_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  import { HideTrInDivObj, ShowTrInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache4DN } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  export default defineComponent({
    name: 'DnFuncMapEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const inDataNodeId = ref(0);
      const outDataNodeId = ref(0);
      const associationMappingId = ref('');
      const funcMapModeId = ref('');
      const tabId = ref('');
      const dnFunctionId = ref('');
      const memo = ref('');
      const prjId = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrvDataNode_Sim = ref<clsvDataNode_SimEN[] | null>([]);
      const arrAssociationMapping = ref<clsAssociationMappingEN[] | null>([]);
      const arrFuncMapMode = ref<clsFuncMapModeEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrDnFunction = ref<clsDnFunctionEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        arrvDataNode_Sim.value = await vDataNode_Sim_GetArrvDataNode_SimByCmPrjId(
          strCmPrjId,
          strPrjId,
        ); //编辑区域
        inDataNodeId.value = 0;

        outDataNodeId.value = 0;

        arrAssociationMapping.value = await AssociationMapping_GetArrAssociationMapping(); //编辑区域
        associationMappingId.value = '0';

        arrFuncMapMode.value = await FuncMapMode_GetArrFuncMapMode(); //编辑区域
        funcMapModeId.value = '0';

        arrvPrjTab_Sim.value = await vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache4DN(strCmPrjId); //编辑区域
        tabId.value = '0';

        arrDnFunction.value = await DnFunction_GetArrDnFunctionByPrjId(strPrjId); //编辑区域
        dnFunctionId.value = '0';

        // await this.SetDdl_InDataNodeIdInDiv(); //编辑区域
        // await this.SetDdl_OutDataNodeIdInDiv(); //编辑区域
        // await this.SetDdl_AssociationMappingIdInDiv(); //编辑区域
        // await this.SetDdl_FuncMapModeIdInDiv(); //编辑区域
        // const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段

        // await this.SetDdl_DnFunctionIdInDiv(strPrjId); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjDnFuncMapEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataDnFuncMapObj() {
        const pobjDnFuncMapEN = new clsDnFuncMapEN();
        pobjDnFuncMapEN.SetInDataNodeId(inDataNodeId.value); // In数据结点
        pobjDnFuncMapEN.SetOutDataNodeId(outDataNodeId.value); // Out数据结点
        pobjDnFuncMapEN.SetAssociationMappingId(Is0EqEmpty(associationMappingId.value)); // 关系映射
        pobjDnFuncMapEN.SetFuncMapModeId(Is0EqEmpty(funcMapModeId.value)); // 映射模式
        pobjDnFuncMapEN.SetTabId(Is0EqEmpty(tabId.value)); // 表
        pobjDnFuncMapEN.SetDnFunctionId(Is0EqEmpty(dnFunctionId.value)); // DN函数
        pobjDnFuncMapEN.SetMemo(memo.value); // 说明
        pobjDnFuncMapEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjDnFuncMapEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjDnFuncMapEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDnFuncMapEN">表实体类对象</param>
       **/
      async function ShowDataFromDnFuncMapObj(pobjDnFuncMapEN: clsDnFuncMapEN) {
        inDataNodeId.value = pobjDnFuncMapEN.inDataNodeId; // In数据结点
        outDataNodeId.value = pobjDnFuncMapEN.outDataNodeId; // Out数据结点
        associationMappingId.value = IsNullOrEmptyEq0(pobjDnFuncMapEN.associationMappingId); // 关系映射
        funcMapModeId.value = IsNullOrEmptyEq0(pobjDnFuncMapEN.funcMapModeId); // 映射模式
        tabId.value = IsNullOrEmptyEq0(pobjDnFuncMapEN.tabId); // 表
        dnFunctionId.value = IsNullOrEmptyEq0(pobjDnFuncMapEN.dnFunctionId); // DN函数
        memo.value = pobjDnFuncMapEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        inDataNodeId.value = 0;
        outDataNodeId.value = 0;
        associationMappingId.value = '0';
        funcMapModeId.value = '0';
        tabId.value = '0';
        dnFunctionId.value = '0';
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
              if (['02', '03', '06'].indexOf(clsDnFuncMapEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsDnFuncMapEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsDnFuncMapEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In DnFuncMap_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsDnFuncMapEN._CurrTabName, keyId.value);
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
      const strTitle = ref('结点函数映射编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<DnFuncMap_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: DnFuncMap_EditEx) => {
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
        GetEditDataDnFuncMapObj,
        ShowDataFromDnFuncMapObj,
        Clear,
        btnSubmit_Click,
        inDataNodeId,
        outDataNodeId,
        associationMappingId,
        funcMapModeId,
        tabId,
        dnFunctionId,
        memo,
        prjId,
        updDate,
        updUser,
        arrvDataNode_Sim,
        arrAssociationMapping,
        arrFuncMapMode,
        arrvPrjTab_Sim,
        arrDnFunction,
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
      btnDnFuncMap_Edit_Click(strCommandName: string, strKeyId: string) {
        DnFuncMap_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlFuncMapModeId_SelectedIndexChanged(e: Event) {
        console.log(e);

        if (this.funcMapModeId == '' || this.funcMapModeId == '0') return;
        const strFuncMapModeId = this.funcMapModeId;
        HideTrInDivObj(this.refDivEdit, 'trTabId');
        HideTrInDivObj(this.refDivEdit, 'trDnFunctionId');

        switch (strFuncMapModeId) {
          case enumFuncMapMode.Table_01:
            ShowTrInDivObj(this.refDivEdit, 'trTabId');
            break;
          case enumFuncMapMode.Function_02:
            ShowTrInDivObj(this.refDivEdit, 'trDnFunctionId');
            break;
        }
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
