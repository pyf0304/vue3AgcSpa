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
        <tbody>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblConstId"
                name="lblConstId"
                class="col-form-label text-right"
                style="width: 90px"
                >常量Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlConstId"
                v-model="constId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrGCDefaConstants"
                  :key="index"
                  :value="item.constId"
                >
                  {{ item.constName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
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
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelGCConstantPrjIdRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitGCConstantPrjIdRela"
        type="primary"
        @click="btnGCConstantPrjIdRela_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import GCConstantPrjIdRela_EditEx from '@/views/GeneCode/GCConstantPrjIdRela_EditEx';
  import { clsGCConstantPrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';
  import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';
  import { GCDefaConstants_GetArrGCDefaConstantsCache } from '@/ts/L3ForWApi/GeneCode/clsGCDefaConstantsWApi';
  import { refDivEdit, PrjId_Session } from '@/views/GeneCode/GCConstantPrjIdRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { GCConstantPrjIdRela_Edit } from '@/viewsBase/GeneCode/GCConstantPrjIdRela_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'GCConstantPrjIdRelaEdit',

    components: {
      // 组件注册
    },

    setup() {
      const userStore = useUserStore();
      const constId = ref('');
      const prjId = ref('');
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrGCDefaConstants = ref<clsGCDefaConstantsEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrGCDefaConstants.value = await GCDefaConstants_GetArrGCDefaConstantsCache(); //编辑区域
        constId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjGCConstantPrjIdRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataGCConstantPrjIdRelaObj() {
        const pobjGCConstantPrjIdRelaEN = new clsGCConstantPrjIdRelaEN();
        pobjGCConstantPrjIdRelaEN.SetConstId(Is0EqEmpty(constId.value)); // 常量Id
        pobjGCConstantPrjIdRelaEN.SetPrjId(PrjId_Session.value); // 工程Id
        pobjGCConstantPrjIdRelaEN.SetMemo(memo.value); // 说明
        pobjGCConstantPrjIdRelaEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjGCConstantPrjIdRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjGCConstantPrjIdRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjGCConstantPrjIdRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromGCConstantPrjIdRelaObj(
        pobjGCConstantPrjIdRelaEN: clsGCConstantPrjIdRelaEN,
      ) {
        constId.value = IsNullOrEmptyEq0(pobjGCConstantPrjIdRelaEN.constId); // 常量Id
        memo.value = pobjGCConstantPrjIdRelaEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        constId.value = '0';
        memo.value = '';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_btnSubmit_Click)
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
              returnBool = await objPage_Edit.value.AddNewRecordSave();
              if (returnBool == true) {
                if (GCConstantPrjIdRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsGCConstantPrjIdRelaEN._CurrTabName,
                    keyId.value,
                  );
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In GCConstantPrjIdRela_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (GCConstantPrjIdRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsGCConstantPrjIdRelaEN._CurrTabName,
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
      const strTitle = ref('GC常量工程关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<GCConstantPrjIdRela_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: GCConstantPrjIdRela_EditEx) => {
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
        GetEditDataGCConstantPrjIdRelaObj,
        ShowDataFromGCConstantPrjIdRelaObj,
        Clear,
        btnSubmit_Click,
        constId,
        prjId,
        memo,
        updUser,
        updDate,
        arrGCDefaConstants,
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
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Methods_btnEdit_Click)
       **/
      btnGCConstantPrjIdRela_Edit_Click(strCommandName: string, strKeyId: string) {
        GCConstantPrjIdRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
