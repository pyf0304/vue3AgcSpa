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
          <tr id="trDataBaseName">
            <td class="text-right">
              <label
                id="lblPrjDataBaseName"
                name="lblPrjDataBaseName"
                class="col-form-label text-right"
                style="width: 90px"
                >项目数据库名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPrjDataBaseName"
                v-model="prjDataBaseName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDataBaseName"
                name="lblDataBaseName"
                class="col-form-label text-right"
                style="width: 90px"
                >数据库名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDataBaseName"
                v-model="dataBaseName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trDataBasePwd">
            <td class="text-right">
              <label
                id="lblDatabaseOwner"
                name="lblDatabaseOwner"
                class="col-form-label text-right"
                style="width: 90px"
                >数据库拥有者
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDatabaseOwner"
                v-model="databaseOwner"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblDataBasePwd"
                name="lblDataBasePwd"
                class="col-form-label text-right"
                style="width: 90px"
                >数据库的用户口令
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDataBasePwd"
                v-model="dataBasePwd"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trDataBaseUserId">
            <td class="text-right">
              <label
                id="lblDataBaseTypeId"
                name="lblDataBaseTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >数据库类型ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDataBaseTypeId"
                v-model="dataBaseTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrDataBaseType"
                  :key="index"
                  :value="item.dataBaseTypeId"
                >
                  {{ item.dataBaseTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblDataBaseUserId"
                name="lblDataBaseUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >数据库的用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDataBaseUserId"
                v-model="dataBaseUserId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trSid">
            <td class="text-right">
              <label
                id="lblIpAddress"
                name="lblIpAddress"
                class="col-form-label text-right"
                style="width: 90px"
                >服务器
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIpAddress"
                v-model="ipAddress"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label id="lblSid" name="lblSid" class="col-form-label text-right" style="width: 90px"
                >SID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSid"
                v-model="sid"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trUseStateId">
            <td class="text-right">
              <label
                id="lblTableSpace"
                name="lblTableSpace"
                class="col-form-label text-right"
                style="width: 90px"
                >表空间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTableSpace"
                v-model="tableSpace"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblUseStateId"
                name="lblUseStateId"
                class="col-form-label text-right"
                style="width: 90px"
                >使用状态Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUseStateId"
                v-model="useStateId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrUseState" :key="index" :value="item.useStateId">
                  {{ item.useStateName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblUserId"
                name="lblUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUserId"
                v-model="userId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrUsers" :key="index" :value="item.userId">
                  {{ item.userName }}
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
      <a-button id="btnCancelPrjDataBase" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitPrjDataBase"
        type="primary"
        @click="btnPrjDataBase_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import PrjDataBase_EditEx from '@/views/PrjManage/PrjDataBase_EditEx';
  import { clsPrjDataBaseEN } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';
  import { clsDataBaseTypeEN } from '@/ts/L0Entity/SysPara/clsDataBaseTypeEN';
  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
  import { DataBaseType_GetArrDataBaseType } from '@/ts/L3ForWApi/SysPara/clsDataBaseTypeWApi';
  import { UseState_GetArrUseState } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
  import { Users_GetArrUsers } from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
  import { refDivEdit } from '@/views/PrjManage/PrjDataBaseVueShare';
  //   import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { PrjDataBase_EditAi } from '@/viewsBase/PrjManage/PrjDataBase_EditAi';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'PrjDataBaseEdit',

    components: {
      // 组件注册
    },

    setup() {
      //   const userStore = useUserStore();
      const strTitle = ref('数据库对象编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<PrjDataBase_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const prjDataBaseId = ref('');
      const prjDataBaseName = ref('');
      const dataBaseName = ref('');
      const databaseOwner = ref('');
      const dataBasePwd = ref('');
      const dataBaseTypeId = ref('');
      const dataBaseUserId = ref('');
      const ipAddress = ref('');
      const sid = ref('');
      const tableSpace = ref('');
      const useStateId = ref('');
      const userId = ref('');
      const updDate = ref('');
      const memo = ref('');

      const arrDataBaseType = ref<clsDataBaseTypeEN[] | null>([]);
      const arrUseState = ref<clsUseStateEN[] | null>([]);
      const arrUsers = ref<clsUsersEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrDataBaseType.value = await DataBaseType_GetArrDataBaseType(); //编辑区域
        dataBaseTypeId.value = '0';

        arrUseState.value = await UseState_GetArrUseState(); //编辑区域
        useStateId.value = '0';

        arrUsers.value = await Users_GetArrUsers(); //编辑区域
        userId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjPrjDataBaseEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataPrjDataBaseObj() {
        const pobjPrjDataBaseEN = new clsPrjDataBaseEN();
        pobjPrjDataBaseEN.SetPrjDataBaseId(prjDataBaseId.value); // 项目数据库Id
        pobjPrjDataBaseEN.SetPrjDataBaseName(prjDataBaseName.value); // 项目数据库名
        pobjPrjDataBaseEN.SetDataBaseName(dataBaseName.value); // 数据库名
        pobjPrjDataBaseEN.SetDatabaseOwner(databaseOwner.value); // 数据库拥有者
        pobjPrjDataBaseEN.SetDataBasePwd(dataBasePwd.value); // 数据库的用户口令
        pobjPrjDataBaseEN.SetDataBaseTypeId(Is0EqEmpty(dataBaseTypeId.value)); // 数据库类型ID
        pobjPrjDataBaseEN.SetDataBaseUserId(dataBaseUserId.value); // 数据库的用户ID
        pobjPrjDataBaseEN.SetIpAddress(ipAddress.value); // 服务器
        pobjPrjDataBaseEN.SetSid(sid.value); // SID
        pobjPrjDataBaseEN.SetTableSpace(tableSpace.value); // 表空间
        pobjPrjDataBaseEN.SetUseStateId(Is0EqEmpty(useStateId.value)); // 使用状态Id
        pobjPrjDataBaseEN.SetUserId(Is0EqEmpty(userId.value)); // 用户Id
        pobjPrjDataBaseEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjPrjDataBaseEN.SetMemo(memo.value); // 说明
        return pobjPrjDataBaseEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjPrjDataBaseEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjDataBaseObj(pobjPrjDataBaseEN: clsPrjDataBaseEN) {
        prjDataBaseId.value = pobjPrjDataBaseEN.prjDataBaseId; // 项目数据库Id
        prjDataBaseName.value = pobjPrjDataBaseEN.prjDataBaseName; // 项目数据库名
        dataBaseName.value = pobjPrjDataBaseEN.dataBaseName; // 数据库名
        databaseOwner.value = pobjPrjDataBaseEN.databaseOwner; // 数据库拥有者
        dataBasePwd.value = pobjPrjDataBaseEN.dataBasePwd; // 数据库的用户口令
        dataBaseTypeId.value = IsNullOrEmptyEq0(pobjPrjDataBaseEN.dataBaseTypeId); // 数据库类型ID
        dataBaseUserId.value = pobjPrjDataBaseEN.dataBaseUserId; // 数据库的用户ID
        ipAddress.value = pobjPrjDataBaseEN.ipAddress; // 服务器
        sid.value = pobjPrjDataBaseEN.sid; // SID
        tableSpace.value = pobjPrjDataBaseEN.tableSpace; // 表空间
        useStateId.value = IsNullOrEmptyEq0(pobjPrjDataBaseEN.useStateId); // 使用状态Id
        userId.value = IsNullOrEmptyEq0(pobjPrjDataBaseEN.userId); // 用户Id
        memo.value = pobjPrjDataBaseEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        prjDataBaseId.value = '';
        prjDataBaseName.value = '';
        dataBaseName.value = '';
        databaseOwner.value = '';
        dataBasePwd.value = '';
        dataBaseTypeId.value = '0';
        dataBaseUserId.value = '';
        ipAddress.value = '';
        sid.value = '';
        tableSpace.value = '';
        useStateId.value = '0';
        userId.value = '0';
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
              if (['02', '03', '06'].indexOf(clsPrjDataBaseEN._PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (PrjDataBase_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsPrjDataBaseEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (PrjDataBase_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsPrjDataBaseEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In PrjDataBase_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (PrjDataBase_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsPrjDataBaseEN._CurrTabName,
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

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: PrjDataBase_EditEx) => {
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
        objPage_Edit,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataPrjDataBaseObj,
        ShowDataFromPrjDataBaseObj,
        Clear,
        btnSubmit_Click,
        prjDataBaseId,
        prjDataBaseName,
        dataBaseName,
        databaseOwner,
        dataBasePwd,
        dataBaseTypeId,
        dataBaseUserId,
        ipAddress,
        sid,
        tableSpace,
        useStateId,
        userId,
        updDate,
        memo,
        arrDataBaseType,
        arrUseState,
        arrUsers,
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
      btnPrjDataBase_Edit_Click(strCommandName: string, strKeyId: string) {
        const objPageEdit = this.objPage_Edit as PrjDataBase_EditEx | undefined;
        if (objPageEdit == null) {
          const strMsg = '编辑页面初始化不成功,请联系管理员!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnEdit_Click(strCommandName, strKeyId);
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
