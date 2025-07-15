<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout4Conv" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 450px"
        class="table table-bordered table-hover table td table-sm"
      >
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
              style="width: 350px"
            >
              <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trCodeTabId">
          <td class="text-right">
            <label
              id="lblCodeTabId"
              name="lblCodeTabId"
              class="col-form-label text-right"
              style="width: 90px"
              >代码表
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCodeTabId"
              v-model="codeTabId"
              class="form-control form-control-sm"
              style="width: 350px"
              @change="ddlCodeTabId_SelectedIndexChanged($event)"
            >
              <option v-for="(item, index) in arrPrjTab" :key="index" :value="item.tabId">
                {{ item.tabName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trCodeTabCodeId">
          <td class="text-right">
            <label id="lblCodeTabCodeId" class="col-form-label text-right" style="width: 90px"
              >代码字段
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCodeTabCodeId"
              v-model="codeTabCodeId"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option
                v-for="(item, index) in arrvFieldTab_Sim_Sub"
                :key="index"
                :value="item.fldId"
              >
                {{ item.fldName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trCodeTabNameId">
          <td class="text-right">
            <label id="lblCodeTabNameId" class="col-form-label text-right" style="width: 90px"
              >名称字段
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCodeTabNameId"
              v-model="codeTabNameId"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option
                v-for="(item, index) in arrvFieldTab_Sim_Sub"
                :key="index"
                :value="item.fldId"
              >
                {{ item.fldName }}
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
              style="width: 350px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelFieldTab4CodeConv" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFieldTab4CodeConv"
        type="primary"
        @click="btnFieldTab4CodeConv_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import FieldTab4CodeConvCRUDEx from '@/views/Table_Field/FieldTab4CodeConvCRUDEx';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import FieldTab4CodeConv_EditEx from '@/views/Table_Field/FieldTab4CodeConv_EditEx';
  import { clsFieldTab4CodeConvEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
  import {
    vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache,
    vFieldTab_SimEx_GetArrvFieldTab_SimByPrjId,
    vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache,
  } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { PrjTab_GetArrPrjTabByPrjId } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
  import {
    PrjId_Session,
    refDivEdit,
    TabId_Static,
  } from '@/views/Table_Field/FieldTab4CodeConvVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { FieldTab4CodeConv_Edit } from '@/viewsBase/Table_Field/FieldTab4CodeConv_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'FieldTab4CodeConvEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const fldId = ref('');
      const prjId = ref('');
      const memo = ref('');
      const codeTabId = ref('');
      const codeTabCodeId = ref('');
      const codeTabNameId = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrvFieldTab_Sim_Sub = ref<clsvFieldTab_SimEN[] | null>([]);

      const arrPrjTab = ref<clsPrjTabEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByPrjId(strPrjId); //编辑区域
        fldId.value = '0';

        arrPrjTab.value = await PrjTab_GetArrPrjTabByPrjId(strPrjId); //编辑区域
        codeTabId.value = '0';

        arrvFieldTab_Sim_Sub.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        fldId.value = '0';
        codeTabCodeId.value = '0';

        codeTabNameId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjFieldTab4CodeConvEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFieldTab4CodeConvObj() {
        const pobjFieldTab4CodeConvEN = new clsFieldTab4CodeConvEN();
        pobjFieldTab4CodeConvEN.SetFldId(fldId.value); // 字段
        pobjFieldTab4CodeConvEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjFieldTab4CodeConvEN.SetMemo(memo.value); // 说明
        pobjFieldTab4CodeConvEN.SetCodeTabId(codeTabId.value); // 代码表Id
        pobjFieldTab4CodeConvEN.SetCodeTabCodeId(codeTabCodeId.value); // 代码Id
        pobjFieldTab4CodeConvEN.SetCodeTabNameId(codeTabNameId.value); // 代码_名Id
        pobjFieldTab4CodeConvEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjFieldTab4CodeConvEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjFieldTab4CodeConvEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFieldTab4CodeConvEN">表实体类对象</param>
       **/
      async function ShowDataFromFieldTab4CodeConvObj(
        pobjFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
      ) {
        // const strThisFuncName = this.GetDataFromFieldTab4CodeConvClass.name;

        fldId.value = pobjFieldTab4CodeConvEN.fldId; // 字段
        codeTabId.value = pobjFieldTab4CodeConvEN.codeTabId; // 代码表
        if (IsNullOrEmpty(codeTabId.value) == false) {
          await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
            refDivEdit.value,
            'ddlCodeTabCodeId',
            codeTabId.value,
          );
          await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
            refDivEdit.value,
            'ddlCodeTabNameId',
            codeTabId.value,
          );
          try {
            codeTabCodeId.value = pobjFieldTab4CodeConvEN.codeTabCodeId; // 代码字段
            codeTabNameId.value = pobjFieldTab4CodeConvEN.codeTabNameId; // 名称字段
          } catch (e) {}
        }
        memo.value = pobjFieldTab4CodeConvEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        fldId.value = '0';
        memo.value = '';
        codeTabId.value = '0';
        codeTabCodeId.value = '0';
        codeTabNameId.value = '0';
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
              if (['02', '03', '06'].indexOf(clsFieldTab4CodeConvEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (FieldTab4CodeConv_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFieldTab4CodeConvEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (FieldTab4CodeConv_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFieldTab4CodeConvEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In FieldTab4CodeConv_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (FieldTab4CodeConv_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsFieldTab4CodeConvEN._CurrTabName,
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
      const strTitle = ref('字段4代码转换编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<FieldTab4CodeConv_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: FieldTab4CodeConv_EditEx) => {
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
          case 'btnCancelFieldTab4CodeConv':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitFieldTab4CodeConv':
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
          case 'btnCancelFieldTab4CodeConv':
            return strCancelButtonText.value;
          case 'btnSubmitFieldTab4CodeConv':
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
        GetEditDataFieldTab4CodeConvObj,
        ShowDataFromFieldTab4CodeConvObj,
        Clear,
        btnSubmit_Click,
        fldId,
        prjId,
        memo,
        codeTabId,
        codeTabCodeId,
        codeTabNameId,
        updDate,
        updUser,
        arrvFieldTab_Sim,
        arrvFieldTab_Sim_Sub,
        arrPrjTab,

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
        //FieldTab4CodeConv_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnFieldTab4CodeConv_Edit_Click(strCommandName: string, strKeyId: string) {
        FieldTab4CodeConv_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_FieldTab4CodeConv(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new FieldTab4CodeConv_EditEx('', new FieldTab4CodeConvCRUDEx());
        objPage.btnSubmit_Click();
      },

      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlCodeTabId_SelectedIndexChanged(e: Event) {
        console.log(e);

        const strCodeTabId = this.codeTabId;
        this.arrvFieldTab_Sim_Sub = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strCodeTabId,
        ); //编辑区域

        this.codeTabCodeId = '0';

        this.codeTabNameId = '0';

        // await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
        //   refDivEdit.value,
        //   'ddlCodeTabCodeId',
        //   strCodeTabId,
        // );
        // await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
        //   refDivEdit.value,
        //   'ddlCodeTabNameId',
        //   strCodeTabId,
        // );
      },
    },
  });
</script>
<style scoped></style>
