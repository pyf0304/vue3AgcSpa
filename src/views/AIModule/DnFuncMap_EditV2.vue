<template>
  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 70%"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trInDataNodeId">
          <td class="text-right">
            <label
              id="lblInDataNodeId"
              name="lblInDataNodeId"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              In数据结点
            </label>
          </td>
          <td class="text-left">
            <label
              id="lblInDataNodeDesc"
              name="lblInDataNodeDesc"
              class="col-form-label-sm text-right"
              style="width: 300px"
            >
              In数据结点
            </label>
          </td>
        </tr>
        <tr id="trIsCreateMapInTab">
          <td class="text-left" colSpan="2">
            <span class="form-control form-control-sm" style="width: 220px">
              <input
                id="chkIsCreateMapInTab"
                v-model="isCreateMapInTab"
                type="checkbox"
                Text="是否与表内字段建立映射关系"
                @change="chkIsCreateMapInTab_SelectedIndexChanged($event)"
              /><label for="chkIsCreateMapInTab">是否与表内字段建立映射关系</label>
            </span>
          </td>
        </tr>
        <tr id="trOutTabId">
          <td class="text-right">
            <label
              id="lblTabId"
              name="lblTabId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              Out结点表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutTabId"
              v-model="outTabId"
              class="form-control form-control-sm"
              style="width: 400px"
              @change="ddlOutTabId_SelectedIndexChanged()"
            >
              <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trOutFldId">
          <td class="text-right">
            <label
              id="lblFldId"
              name="lblFldId"
              class="col-form-label text-right"
              style="width: 100px"
            >
              Out结点字段
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutFldId"
              v-model="outFldId"
              class="form-control form-control-sm"
              style="width: 400px"
              @change="ddlOutFldId_SelectedIndexChanged($event)"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>

        <tr id="trAssociationMappingId">
          <td class="text-right">
            <label
              id="lblAssociationMappingId"
              name="lblAssociationMappingId"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              关系映射
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
            <label
              id="lblFuncMapModeId"
              name="lblFuncMapModeId"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              映射模式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncMapModeId"
              v-model="funcMapModeId"
              class="form-control form-control-sm"
              style="width: 400px"
              @change="ddlFuncMapModeId_SelectedIndexChanged()"
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
            <label
              id="lblTabId"
              name="lblTabId"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              表
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
        <tr id="trDnFunctionId">
          <td class="text-right">
            <label
              id="lblDnFunctionId"
              name="lblDnFunctionId"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              Dn函数
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
            <label
              id="lblMemo"
              name="lblMemo"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              说明
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
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
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
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import DnFuncMapCRUDEx from '@/views/AIModule/DnFuncMapCRUDEx';
  import { DnFuncMap_EditV2Ex } from '@/views/AIModule/DnFuncMap_EditV2Ex';
  import { CmPrjId_Local, PrjId_Session, refDivEdit } from '@/views/AIModule/DnFuncMapVueShare';

  import {
    clsAssociationMappingEN,
    enumAssociationMapping,
  } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
  import { clsFuncMapModeEN, enumFuncMapMode } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';

  import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';

  import { useUserStore } from '@/store/modulesShare/user';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';
  import { vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate } from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';

  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';

  import { vDataNode_Sim_GetArrvDataNode_SimByCmPrjId } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
  import { AssociationMapping_GetArrAssociationMapping } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
  import { FuncMapMode_GetArrFuncMapMode } from '@/ts/L3ForWApi/AIModule/clsFuncMapModeWApi';
  import { DnFunction_GetArrDnFunctionByPrjId } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';

  import { vPrjTab_SimEx_GetArrvPrjTab_SimByCmPrjIdCache4DN } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { HideTrInDivObj, ShowTrInDiv, ShowTrInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { vFieldTab_SimEx_BindDdl_FldIdWithNodeByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';

  export default defineComponent({
    name: 'DnFuncMapEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const isCreateMapInTab = ref(false);
      const outTabId = ref('');
      const outFldId = ref('');
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

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrvDataNode_Sim = ref<clsvDataNode_SimEN[] | null>([]);
      const arrDnFunction = ref<clsDnFunctionEN[] | null>([]);

      const arrFuncMapMode = ref<clsFuncMapModeEN[] | null>([]);

      const arrAssociationMapping = ref<clsAssociationMappingEN[] | null>([]);

      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);

      const strTitle = ref('结点函数映射编辑In');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelDnFuncMap':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitDnFuncMap':
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
          case 'btnCancelDnFuncMap':
            return strCancelButtonText.value;
          case 'btnSubmitDnFuncMap':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      // /** 函数功能:把界面上的属性数据传到类对象中
      //  * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
      //  * @param pobjDnFuncMapEN">数据传输的目的类对象</param>
      //  **/
      // async function GetEditDataDnFuncMapObjBak() {
      //   const pobjDnFuncMapEN = new clsDnFuncMapEN();
      //   pobjDnFuncMapEN.SetInDataNodeId(inDataNodeId.value); // In数据结点
      //   pobjDnFuncMapEN.SetOutDataNodeId(outDataNodeId.value); // Out数据结点
      //   pobjDnFuncMapEN.SetAssociationMappingId(associationMappingId.value); // 关系映射
      //   pobjDnFuncMapEN.SetFuncMapModeId(funcMapModeId.value); // 映射模式
      //   pobjDnFuncMapEN.SetTabId(tabId.value); // 表
      //   pobjDnFuncMapEN.SetDnFunctionId(dnFunctionId.value); // DN函数
      //   pobjDnFuncMapEN.SetMemo(memo.value); // 说明
      //   pobjDnFuncMapEN.SetPrjId(PrjId_Session.value); // 工程ID
      //   pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
      //   pobjDnFuncMapEN.SetUpdUser(userStore.getUserId); // 修改者
      //   return pobjDnFuncMapEN;
      // }
      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
       * @param pobjDnFuncMapEN.js">数据传输的目的类对象</param>
       */
      async function GetEditDataDnFuncMapObj(): Promise<clsDnFuncMapEN> {
        const pobjDnFuncMapEN = new clsDnFuncMapEN();
        const objInDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate(
          DnFuncMap_EditV2Ex.TabIdCache,
          DnFuncMap_EditV2Ex.FldIdCache,
          DnFuncMap_EditV2Ex.VersionNoCache,
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objInDataNode == null) {
          const strMsg = Format(
            '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
            clsPrivateSessionStorage.cmPrjName,
            DnFuncMap_EditV2Ex.TabIdCache,
            DnFuncMap_EditV2Ex.FldIdCache,
          );
          console.error(strMsg);
          alert(strMsg);
          return pobjDnFuncMapEN;
        }
        if (isCreateMapInTab.value == true) {
          //if (IsNullOrEmpty(outTabId.value) == true) {
          //    console.error("请选择输出表！");
          //    throw ("请选择输出表！");
          //}
          if (IsNullOrEmpty(outFldId.value) == true) {
            console.error('请选择输出结点字段！');
            throw '请选择输出结点字段！';
          }
          let intVersionNo = 1;
          let strOutFldId = outFldId.value;
          if (outFldId.value.indexOf('V') > -1) {
            const strVersionNo = outFldId.value.substr(9, 1);
            intVersionNo = Number(strVersionNo);
            strOutFldId = outFldId.value.substr(0, 8);
          }

          const objOutDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate(
            DnFuncMap_EditV2Ex.TabIdCache,
            strOutFldId,
            intVersionNo,
            clsPrivateSessionStorage.cmPrjId,
          );
          if (objOutDataNode == null) {
            const strMsg = Format(
              '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
              clsPrivateSessionStorage.cmPrjName,
              outTabId.value,
              strOutFldId,
            );
            console.error(strMsg);
            alert(strMsg);
            return pobjDnFuncMapEN;
          }
          pobjDnFuncMapEN.SetInDataNodeId(objInDataNode.dataNodeId); // In数据结点
          pobjDnFuncMapEN.SetOutDataNodeId(objOutDataNode.dataNodeId); // Out数据结点
          pobjDnFuncMapEN.SetAssociationMappingId(associationMappingId.value); // 关系映射
          pobjDnFuncMapEN.SetFuncMapModeId(enumFuncMapMode.Table_01); // this.funcMapModeId;// 映射模式
          pobjDnFuncMapEN.SetTabId(DnFuncMap_EditV2Ex.TabIdCache); // this.tabId;// 表
          pobjDnFuncMapEN.SetDnFunctionId(''); // this.dnFunctionId;// DN函数
          pobjDnFuncMapEN.SetMemo(memo.value); // 说明
          pobjDnFuncMapEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
          pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
          pobjDnFuncMapEN.SetUpdUser(userStore.getUserId); // 修改者
        } else {
          if (IsNullOrEmpty(outTabId.value) == true) {
            console.error('请选择输出表！');
            throw '请选择输出表！';
          }
          if (IsNullOrEmpty(outFldId.value) == true) {
            console.error('请选择输出结点字段！');
            throw '请选择输出结点字段！';
          }
          let intVersionNo = 1;
          let strOutFldId = outFldId.value;
          if (outFldId.value.indexOf('V') > -1) {
            const strVersionNo = outFldId.value.substr(9, 1);
            intVersionNo = Number(strVersionNo);
            strOutFldId = outFldId.value.substr(0, 8);
          }

          const objOutDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate(
            outTabId.value,
            strOutFldId,
            intVersionNo,
            clsPrivateSessionStorage.cmPrjId,
          );
          if (objOutDataNode == null) {
            const strMsg = Format(
              '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
              clsPrivateSessionStorage.cmPrjName,
              outTabId.value,
              strOutFldId,
            );
            console.error(strMsg);
            alert(strMsg);
            return pobjDnFuncMapEN;
          }
          pobjDnFuncMapEN.SetInDataNodeId(objInDataNode.dataNodeId); // In数据结点
          pobjDnFuncMapEN.SetOutDataNodeId(objOutDataNode.dataNodeId); // Out数据结点
          pobjDnFuncMapEN.SetAssociationMappingId(associationMappingId.value); // 关系映射
          pobjDnFuncMapEN.SetFuncMapModeId(funcMapModeId.value); // 映射模式
          pobjDnFuncMapEN.SetTabId(tabId.value); // 表
          pobjDnFuncMapEN.SetDnFunctionId(dnFunctionId.value); // DN函数
          pobjDnFuncMapEN.SetMemo(memo.value); // 说明
          pobjDnFuncMapEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID

          pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
          pobjDnFuncMapEN.SetUpdUser(userStore.getUserId); // 修改者
        }
        return pobjDnFuncMapEN;
      }
      // onMounted(() => {
      //   BindDdl4EditRegionInDiv();
      // });
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
        outTabId.value = '0';
        arrDnFunction.value = await DnFunction_GetArrDnFunctionByPrjId(strPrjId); //编辑区域
        dnFunctionId.value = '0';

        // await this.SetDdl_DnFunctionIdInDiv(strPrjId); //编辑区域
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
      // public async SetDdl_OutTabIdInDivEx(strCmPrjId: string) {
      //   //定义条件字段
      //   //const strPrjId = "";//定义条件字段
      //   await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4DN(
      //     this.refDivEdit,
      //     'ddlOutTabId',
      //     strCmPrjId,
      //   ); //编辑区域
      // }
      // async function SetDdl_TabIdInDivEx(strPrjId: string) {
      //   //定义条件字段
      //   //const strPrjId = "";//定义条件字段
      //   await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4DN(
      //     this.refDivEdit,
      //     'ddlTabId',
      //     strPrjId,
      //   ); //编辑区域
      // }
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(async () => {
            console.log('对话框已经显示!');
            await BindDdl4EditRegionInDiv();
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
        refDivEdit,
        arrAssociationMapping,

        arrFuncMapMode,

        arrDnFunction,
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

        outTabId,
        outFldId,
        GetEditDataDnFuncMapObj,
        isCreateMapInTab,
        arrvFieldTab_Sim,
        arrvPrjTab_Sim,
        Clear,
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
        //DnFuncMap_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnDnFuncMap_Edit_Click(strCommandName: string, strKeyId: string) {
        DnFuncMap_EditV2Ex.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_DnFuncMap(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new DnFuncMap_EditV2Ex('', new DnFuncMapCRUDEx());
        objPage.btnSubmit_Click();
      },
      /* 函数功能:系统生成的Change事件函数
    (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
  */
      async ddlOutFldId_SelectedIndexChanged(e: Event) {
        console.log(e);
        // alert('请在事件函数中重写该函数!');
      },
      /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
      async ddlFuncMapModeId_SelectedIndexChanged() {
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
      /** 函数功能:系统生成的Change事件函数
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
  */
      async ddlOutTabId_SelectedIndexChanged() {
        //alert('请在扩展层:DataNode_EditEx中重写该函数！');
        const strOutTabId = this.outTabId;
        await this.SetDdl_FldId(clsPrivateSessionStorage.currSelPrjId, strOutTabId);
      },
      async SetDdl_FldId(strPrjId: string, strTabId: string) {
        await vFieldTab_SimEx_BindDdl_FldIdWithNodeByTabIdCache(
          'ddlOutFldId',
          clsPrivateSessionStorage.cmPrjId,
          strPrjId,
          strTabId,
        ); //编辑区域
      },
      async chkIsCreateMapInTab_SelectedIndexChanged(event: Event) {
        const checked = (event.target as HTMLInputElement).checked;
        // const elemName = (event.target as HTMLInputElement).id;
        // console.error(event);
        // console.error(elemName);

        // console.log('chkIsCurrTab_SelectedIndexChanged--this.chkIsCurrTab:', checked);
        const strPrjId = clsPrivateSessionStorage.currSelPrjId;
        if (checked == true) {
          this.SetDdl_FldId(strPrjId, DnFuncMap_EditV2Ex.TabIdCache);
          HideTrInDivObj(this.refDivEdit, 'trOutTabId');
          //HideTrInDivObj(this.refDivEdit, "trAssociationMappingId");
          HideTrInDivObj(this.refDivEdit, 'trFuncMapModeId');
          HideTrInDivObj(this.refDivEdit, 'trDnFunctionId');
          HideTrInDivObj(this.refDivEdit, 'trTabId');
          this.associationMappingId = enumAssociationMapping.OneToOne_01;
        } else {
          ShowTrInDiv(this.refDivEdit, 'trOutTabId');
          //ShowTrInDiv(this.refDivEdit, "trAssociationMappingId");
          ShowTrInDiv(this.refDivEdit, 'trFuncMapModeId');
          ShowTrInDiv(this.refDivEdit, 'trDnFunctionId');
          ShowTrInDiv(this.refDivEdit, 'trTabId');
        }
      },
    },
  });
</script>
<style scoped></style>
