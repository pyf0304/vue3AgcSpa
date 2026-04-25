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
          <tr id="trApplicationTypeSimName">
            <td class="text-right">
              <label
                id="lblApplicationTypeName"
                name="lblApplicationTypeName"
                class="col-form-label text-right"
                style="width: 90px"
                >应用程序类型名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtApplicationTypeName"
                v-model="applicationTypeName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblApplicationTypeSimName"
                name="lblApplicationTypeSimName"
                class="col-form-label text-right"
                style="width: 90px"
                >应用程序类型简称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtApplicationTypeSimName"
                v-model="applicationTypeSimName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trProgLangTypeId">
            <td class="text-right">
              <label
                id="lblApplicationTypeENName"
                name="lblApplicationTypeENName"
                class="col-form-label text-right"
                style="width: 90px"
                >应用类型英文名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtApplicationTypeENName"
                v-model="applicationTypeENName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblProgLangTypeId"
                name="lblProgLangTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >编程语言类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlProgLangTypeId"
                v-model="progLangTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrProgLangType"
                  :key="index"
                  :value="item.progLangTypeId"
                >
                  {{ item.progLangTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trProgLangTypeId3">
            <td class="text-right">
              <label
                id="lblProgLangTypeId2"
                name="lblProgLangTypeId2"
                class="col-form-label text-right"
                style="width: 90px"
                >编程语言类型Id2
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtProgLangTypeId2"
                v-model="progLangTypeId2"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblProgLangTypeId3"
                name="lblProgLangTypeId3"
                class="col-form-label text-right"
                style="width: 90px"
                >编程语言类型Id3
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtProgLangTypeId3"
                v-model="progLangTypeId3"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trProgLangTypeId5">
            <td class="text-right">
              <label
                id="lblProgLangTypeId4"
                name="lblProgLangTypeId4"
                class="col-form-label text-right"
                style="width: 90px"
                >编程语言类型Id4
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtProgLangTypeId4"
                v-model="progLangTypeId4"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblProgLangTypeId5"
                name="lblProgLangTypeId5"
                class="col-form-label text-right"
                style="width: 90px"
                >编程语言类型Id5
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtProgLangTypeId5"
                v-model="progLangTypeId5"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trVisitedNum">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsVisible"
                  v-model="isVisible"
                  type="checkbox"
                  Text="是否显示"
                /><label for="chkIsVisible">是否显示</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblVisitedNum"
                name="lblVisitedNum"
                class="col-form-label text-right"
                style="width: 90px"
                >访问数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtVisitedNum"
                v-model.number="visitedNum"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblOrderNum"
                name="lblOrderNum"
                class="col-form-label text-right"
                style="width: 90px"
                >序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOrderNum"
                v-model.number="orderNum"
                class="form-control form-control-sm"
                style="width: 150px"
              />
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
      <a-button id="btnCancelApplicationType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitApplicationType"
        type="primary"
        @click="btnApplicationType_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ApplicationType_EditEx from '@/views/GeneCode/ApplicationType_EditEx';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
  import { ProgLangType_GetArrProgLangTypeByIsVisible } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { refDivEdit } from '@/views/GeneCode/ApplicationTypeVueShare';
  // import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { ApplicationType_Edit } from '@/viewsBase/GeneCode/ApplicationType_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'ApplicationTypeEdit',

    components: {
      // 组件注册
    },

    setup() {
      // const userStore = useUserStore();
      const strTitle = ref('应用程序类型编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<ApplicationType_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const applicationTypeName = ref('');
      const applicationTypeSimName = ref('');
      const applicationTypeENName = ref('');
      const progLangTypeId = ref('');
      const progLangTypeId2 = ref('');
      const progLangTypeId3 = ref('');
      const progLangTypeId4 = ref('');
      const progLangTypeId5 = ref('');
      const isVisible = ref(true);
      const visitedNum = ref(0);
      const orderNum = ref(0);
      const memo = ref('');

      const arrProgLangType = ref<clsProgLangTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrProgLangType.value = await ProgLangType_GetArrProgLangTypeByIsVisible(); //编辑区域
        progLangTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjApplicationTypeEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataApplicationTypeObj() {
        const pobjApplicationTypeEN = new clsApplicationTypeEN();
        pobjApplicationTypeEN.SetApplicationTypeName(applicationTypeName.value); // 应用程序类型名称
        pobjApplicationTypeEN.SetApplicationTypeSimName(applicationTypeSimName.value); // 应用程序类型简称
        pobjApplicationTypeEN.SetApplicationTypeENName(applicationTypeENName.value); // 应用类型英文名
        pobjApplicationTypeEN.SetProgLangTypeId(Is0EqEmpty(progLangTypeId.value)); // 编程语言类型Id
        pobjApplicationTypeEN.SetProgLangTypeId2(progLangTypeId2.value); // 编程语言类型Id2
        pobjApplicationTypeEN.SetProgLangTypeId3(progLangTypeId3.value); // 编程语言类型Id3
        pobjApplicationTypeEN.SetProgLangTypeId4(progLangTypeId4.value); // 编程语言类型Id4
        pobjApplicationTypeEN.SetProgLangTypeId5(progLangTypeId5.value); // 编程语言类型Id5
        pobjApplicationTypeEN.SetIsVisible(isVisible.value); // 是否显示
        pobjApplicationTypeEN.SetVisitedNum(Number(visitedNum.value)); // 访问数
        pobjApplicationTypeEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjApplicationTypeEN.SetMemo(memo.value); // 说明
        return pobjApplicationTypeEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjApplicationTypeEN">表实体类对象</param>
       **/
      async function ShowDataFromApplicationTypeObj(pobjApplicationTypeEN: clsApplicationTypeEN) {
        applicationTypeName.value = pobjApplicationTypeEN.applicationTypeName; // 应用程序类型名称
        applicationTypeSimName.value = pobjApplicationTypeEN.applicationTypeSimName; // 应用程序类型简称
        applicationTypeENName.value = pobjApplicationTypeEN.applicationTypeENName; // 应用类型英文名
        progLangTypeId.value = IsNullOrEmptyEq0(pobjApplicationTypeEN.progLangTypeId); // 编程语言类型Id
        progLangTypeId2.value = pobjApplicationTypeEN.progLangTypeId2; // 编程语言类型Id2
        progLangTypeId3.value = pobjApplicationTypeEN.progLangTypeId3; // 编程语言类型Id3
        progLangTypeId4.value = pobjApplicationTypeEN.progLangTypeId4; // 编程语言类型Id4
        progLangTypeId5.value = pobjApplicationTypeEN.progLangTypeId5; // 编程语言类型Id5
        isVisible.value = pobjApplicationTypeEN.isVisible; // 是否显示
        visitedNum.value = pobjApplicationTypeEN.visitedNum; // 访问数
        orderNum.value = pobjApplicationTypeEN.orderNum; // 序号
        memo.value = pobjApplicationTypeEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        applicationTypeName.value = '';
        applicationTypeSimName.value = '';
        applicationTypeENName.value = '';
        progLangTypeId.value = '0';
        progLangTypeId2.value = '';
        progLangTypeId3.value = '';
        progLangTypeId4.value = '';
        progLangTypeId5.value = '';
        isVisible.value = false;
        visitedNum.value = 0;
        orderNum.value = 0;
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
              if (['02', '03', '06'].indexOf(clsApplicationTypeEN._PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsApplicationTypeEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (ApplicationType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsApplicationTypeEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In ApplicationType_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (ApplicationType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsApplicationTypeEN._CurrTabName,
                    keyId.value.toString(),
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

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: ApplicationType_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };

      /**
       * 处理保存逻辑
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_HandleSave)
       **/
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };

      /**
       * 隐藏对话框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_HideDialog)
       **/
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
        GetEditDataApplicationTypeObj,
        ShowDataFromApplicationTypeObj,
        Clear,
        btnSubmit_Click,
        applicationTypeName,
        applicationTypeSimName,
        applicationTypeENName,
        progLangTypeId,
        progLangTypeId2,
        progLangTypeId3,
        progLangTypeId4,
        progLangTypeId5,
        isVisible,
        visitedNum,
        orderNum,
        memo,
        arrProgLangType,
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
      btnApplicationType_Edit_Click(strCommandName: string, strKeyId: string) {
        ApplicationType_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
