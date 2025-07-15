<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 800px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trPrjTabRelaTypeId">
          <td class="text-right">
            <label
              id="lblRelationName"
              name="lblRelationName"
              class="col-form-label text-right"
              style="width: 90px"
              >关系名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRelationName"
              name="txtRelationName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPrjTabRelaTypeId"
              name="lblPrjTabRelaTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >关系类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrjTabRelaTypeId"
              name="ddlPrjTabRelaTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trFldId4TabId">
          <td class="text-right">
            <label
              id="lblTabId"
              name="lblTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >主表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTabId"
              name="ddlTabId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblFldId4TabId"
              name="lblFldId4TabId"
              class="col-form-label text-right"
              style="width: 90px"
              >当前表的关系字段Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFldId4TabId"
              name="ddlFldId4TabId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trFldId4RelaTabId">
          <td class="text-right">
            <label
              id="lblRelationTabId"
              name="lblRelationTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >相关表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRelationTabId"
              name="ddlRelationTabId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblFldId4RelaTabId"
              name="lblFldId4RelaTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >关系表的关系字段Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFldId4RelaTabId"
              name="ddlFldId4RelaTabId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trIsCopyForceRela">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsCheckCurrData"
                name="chkIsCheckCurrData"
                type="checkbox"
                Text="是否检查当前数据"
              /><label for="chkIsCheckCurrData">是否检查当前数据</label></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsCopyForceRela"
                name="chkIsCopyForceRela"
                type="checkbox"
                Text="IsCopyForceRela"
              /><label for="chkIsCopyForceRela">IsCopyForceRela</label></span
            >
          </td>
        </tr>
        <tr id="trIsDelRelateRec">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsUpdRelateFld"
                name="chkIsUpdRelateFld"
                type="checkbox"
                Text="是否修改关系字段"
              /><label for="chkIsUpdRelateFld">是否修改关系字段</label></span
            >
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsDelRelateRec"
                name="chkIsDelRelateRec"
                type="checkbox"
                Text="是否删除相关记录"
              /><label for="chkIsDelRelateRec">是否删除相关记录</label></span
            >
          </td>
        </tr>
        <tr id="trIsUpdMainTabDate">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkIsUpdMainTabDate"
                name="chkIsUpdMainTabDate"
                type="checkbox"
                Text="是否修改主表日期"
              /><label for="chkIsUpdMainTabDate">是否修改主表日期</label></span
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
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trForeignKeyFldId">
          <td class="text-right">
            <label
              id="lblForeignKeyTabId"
              name="lblForeignKeyTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >外键表ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlForeignKeyTabId"
              name="ddlForeignKeyTabId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblForeignKeyFldId"
              name="lblForeignKeyFldId"
              class="col-form-label text-right"
              style="width: 90px"
              >外键字段Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtForeignKeyFldId"
              name="txtForeignKeyFldId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trPrjRelationId">
          <td class="text-right">
            <label
              id="lblPrjRelationId"
              name="lblPrjRelationId"
              class="col-form-label text-right"
              style="width: 90px"
              >关系Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPrjRelationId"
              name="txtPrjRelationId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelPrjTabRelation" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitPrjTabRelation"
        type="primary"
        @click="btnPrjTabRelation_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import PrjTabRelation_EditEx from '@/views/Table_Field/PrjTabRelation_EditEx';
  import { clsPrjTabRelationEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationEN';
  import { clsPrjTabRelationTypeEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { PrjTabRelationType_GetArrPrjTabRelationType } from '@/ts/L3ForWApi/Table_Field/clsPrjTabRelationTypeWApi';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import {
    CmPrjId_Local,
    PrjId_Session,
    refDivEdit,
  } from '@/views/Table_Field/PrjTabRelationVueShare';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { PrjTabRelation_Edit } from '@/viewsBase/Table_Field/PrjTabRelation_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'PrjTabRelationEdit',
    components: {
      // 组件注册
    },
    setup() {
      // const userStore = useUserStore();
      const relationName = ref('');
      const prjTabRelaTypeId = ref('');
      const tabId = ref('');
      const fldId4TabId = ref('');
      const relationTabId = ref('');
      const fldId4RelaTabId = ref('');
      const isCheckCurrData = ref(true);
      const isCopyForceRela = ref(true);
      const isUpdRelateFld = ref(true);
      const isDelRelateRec = ref(true);
      const isUpdMainTabDate = ref(true);
      const memo = ref('');
      const foreignKeyTabId = ref('');
      const foreignKeyFldId = ref('');
      const prjRelationId = ref('');
      const prjId = ref('');

      const arrPrjTabRelationType = ref<clsPrjTabRelationTypeEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        arrPrjTabRelationType.value = await PrjTabRelationType_GetArrPrjTabRelationType(); //编辑区域
        prjTabRelaTypeId.value = '0';

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        tabId.value = '0';

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(strPrjId); //编辑区域
        fldId4TabId.value = '0';

        relationTabId.value = '0';

        fldId4RelaTabId.value = '0';

        foreignKeyTabId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjPrjTabRelationEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataPrjTabRelationObj() {
        const pobjPrjTabRelationEN = new clsPrjTabRelationEN();
        pobjPrjTabRelationEN.SetRelationName(relationName.value); // 关系名
        pobjPrjTabRelationEN.SetPrjTabRelaTypeId(prjTabRelaTypeId.value); // 关系类型
        pobjPrjTabRelationEN.SetTabId(tabId.value); // 主表
        pobjPrjTabRelationEN.SetFldId4TabId(fldId4TabId.value); // 当前表的关系字段Id
        pobjPrjTabRelationEN.SetRelationTabId(relationTabId.value); // 相关表
        pobjPrjTabRelationEN.SetFldId4RelaTabId(fldId4RelaTabId.value); // 关系表的关系字段Id
        pobjPrjTabRelationEN.SetIsCheckCurrData(isCheckCurrData.value); // 是否检查当前数据
        pobjPrjTabRelationEN.SetIsCopyForceRela(isCopyForceRela.value); // IsCopyForceRela
        pobjPrjTabRelationEN.SetIsUpdRelateFld(isUpdRelateFld.value); // 是否修改关系字段
        pobjPrjTabRelationEN.SetIsDelRelateRec(isDelRelateRec.value); // 是否删除相关记录
        pobjPrjTabRelationEN.SetIsUpdMainTabDate(isUpdMainTabDate.value); // 是否修改主表日期
        pobjPrjTabRelationEN.SetMemo(memo.value); // 说明
        pobjPrjTabRelationEN.SetForeignKeyTabId(foreignKeyTabId.value); // 外键表ID
        pobjPrjTabRelationEN.SetForeignKeyFldId(foreignKeyFldId.value); // 外键字段Id
        pobjPrjTabRelationEN.SetPrjRelationId(prjRelationId.value); // 关系Id
        pobjPrjTabRelationEN.SetPrjId(PrjId_Session.value); // 工程ID
        return pobjPrjTabRelationEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjPrjTabRelationEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjTabRelationObj(pobjPrjTabRelationEN: clsPrjTabRelationEN) {
        // const strThisFuncName = this.GetDataFromPrjTabRelationClass.name;
        relationName.value = pobjPrjTabRelationEN.relationName; // 关系名
        prjTabRelaTypeId.value = pobjPrjTabRelationEN.prjTabRelaTypeId; // 关系类型
        tabId.value = pobjPrjTabRelationEN.tabId; // 主表

        if (IsNullOrEmpty(tabId.value) == false) {
          // await this.SetDdl_FldId4TabIdInDiv(
          //   refPrjTabRelation_Edit.value.tabId,
          //   clsPrivateSessionStorage.currSelPrjId,
          // );
        }
        fldId4TabId.value = pobjPrjTabRelationEN.fldId4TabId; // 当前表的关系字段Id
        relationTabId.value = pobjPrjTabRelationEN.relationTabId; // 相关表
        if (IsNullOrEmpty(relationTabId.value) == false) {
          // await this.SetDdl_FldId4RelaTabIdInDiv(relationTabId.value);
        }
        fldId4RelaTabId.value = pobjPrjTabRelationEN.fldId4RelaTabId; // 关系表的关系字段Id
        isCheckCurrData.value = pobjPrjTabRelationEN.isCheckCurrData; // 是否检查当前数据
        isCopyForceRela.value = pobjPrjTabRelationEN.isCopyForceRela; // IsCopyForceRela
        isUpdRelateFld.value = pobjPrjTabRelationEN.isUpdRelateFld; // 是否修改关系字段
        isDelRelateRec.value = pobjPrjTabRelationEN.isDelRelateRec; // 是否删除相关记录
        isUpdMainTabDate.value = pobjPrjTabRelationEN.isUpdMainTabDate; // 是否修改主表日期
        memo.value = pobjPrjTabRelationEN.memo; // 说明
        foreignKeyTabId.value = pobjPrjTabRelationEN.foreignKeyTabId; // 外键表ID
        foreignKeyFldId.value = pobjPrjTabRelationEN.foreignKeyFldId; // 外键字段Id
        prjRelationId.value = pobjPrjTabRelationEN.prjRelationId; // 关系Id
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        relationName.value = '';
        prjTabRelaTypeId.value = '0';
        tabId.value = '0';
        fldId4TabId.value = '0';
        relationTabId.value = '0';
        fldId4RelaTabId.value = '0';
        isCheckCurrData.value = false;
        isCopyForceRela.value = false;
        isUpdRelateFld.value = false;
        isDelRelateRec.value = false;
        isUpdMainTabDate.value = false;
        memo.value = '';
        foreignKeyTabId.value = '0';
        foreignKeyFldId.value = '';
        prjRelationId.value = '';
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
              if (['02', '03', '06'].indexOf(clsPrjTabRelationEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (PrjTabRelation_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsPrjTabRelationEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (PrjTabRelation_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsPrjTabRelationEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In PrjTabRelation_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (PrjTabRelation_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsPrjTabRelationEN._CurrTabName,
                    keyId.value,
                  );
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
      const strTitle = ref('工程表关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<PrjTabRelation_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: PrjTabRelation_EditEx) => {
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
          case 'btnCancelPrjTabRelation':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitPrjTabRelation':
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
          case 'btnCancelPrjTabRelation':
            return strCancelButtonText.value;
          case 'btnSubmitPrjTabRelation':
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
        GetEditDataPrjTabRelationObj,
        ShowDataFromPrjTabRelationObj,
        Clear,
        btnSubmit_Click,
        relationName,
        prjTabRelaTypeId,
        tabId,
        fldId4TabId,
        relationTabId,
        fldId4RelaTabId,
        isCheckCurrData,
        isCopyForceRela,
        isUpdRelateFld,
        isDelRelateRec,
        isUpdMainTabDate,
        memo,
        foreignKeyTabId,
        foreignKeyFldId,
        prjRelationId,
        prjId,
        arrPrjTabRelationType,
        arrvPrjTab_Sim,
        arrvFieldTab_Sim,

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
        //PrjTabRelation_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPrjTabRelation_Edit_Click(strCommandName: string, strKeyId: string) {
        PrjTabRelation_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
