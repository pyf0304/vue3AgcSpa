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
          <tr id="trPrjFileTypeName">
            <td class="text-right">
              <label
                id="lblPrjFileTypeName"
                name="lblPrjFileTypeName"
                class="col-form-label text-right"
                style="width: 90px"
                >工程文件类型名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPrjFileTypeName"
                v-model="prjFileTypeName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trPrjFileTypeENName">
            <td class="text-right">
              <label
                id="lblPrjFileTypeENName"
                name="lblPrjFileTypeENName"
                class="col-form-label text-right"
                style="width: 90px"
                >工程文件类型英文名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPrjFileTypeENName"
                v-model="prjFileTypeENName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trInUse">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkInUse" v-model="inUse" type="checkbox" Text="是否在用" /><label
                  for="chkInUse"
                  >是否在用</label
                ></span
              >
            </td>
          </tr>
          <tr id="trOrderNum">
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
          </tr>
          <tr id="trMemo">
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
      <a-button id="btnCancelPrjFileType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitPrjFileType"
        type="primary"
        @click="btnPrjFileType_Edit_Click('Submit', null)"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import PrjFileType_EditAiEx from '@/views/ResourceMan/PrjFileType_EditAiEx';
  import { clsPrjFileTypeEN, PrjFileTypeKey } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';
  import { refDivEdit } from '@/views/ResourceMan/PrjFileTypeVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { PrjFileType_EditAi } from '@/viewsBase/ResourceMan/PrjFileType_EditAi';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'PrjFileTypeEditAi',

    components: {
      // 组件注册
    },

    setup() {
      const userStore = useUserStore();
      const strTitle = ref('工程文件类型编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<PrjFileType_EditAiEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const prjFileTypeId = ref('');
      const prjFileTypeName = ref('');
      const prjFileTypeENName = ref('');
      const inUse = ref(true);
      const orderNum = ref(0);
      const updDate = ref('');
      const updUserId = ref('');
      const memo = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjPrjFileTypeEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataPrjFileTypeObj() {
        const pobjPrjFileTypeEN = new clsPrjFileTypeEN();
        pobjPrjFileTypeEN.SetPrjFileTypeId(prjFileTypeId.value); // 项目文件类型Id
        pobjPrjFileTypeEN.SetPrjFileTypeName(prjFileTypeName.value); // 工程文件类型名
        pobjPrjFileTypeEN.SetPrjFileTypeENName(prjFileTypeENName.value); // 工程文件类型英文名
        pobjPrjFileTypeEN.SetInUse(inUse.value); // 是否在用
        pobjPrjFileTypeEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjPrjFileTypeEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjPrjFileTypeEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        pobjPrjFileTypeEN.SetMemo(memo.value); // 说明
        return pobjPrjFileTypeEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjPrjFileTypeEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjFileTypeObj(pobjPrjFileTypeEN: clsPrjFileTypeEN) {
        prjFileTypeId.value = pobjPrjFileTypeEN.prjFileTypeId; // 项目文件类型Id
        prjFileTypeName.value = pobjPrjFileTypeEN.prjFileTypeName; // 工程文件类型名
        prjFileTypeENName.value = pobjPrjFileTypeEN.prjFileTypeENName; // 工程文件类型英文名
        inUse.value = pobjPrjFileTypeEN.inUse; // 是否在用
        orderNum.value = pobjPrjFileTypeEN.orderNum; // 序号
        memo.value = pobjPrjFileTypeEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        prjFileTypeId.value = '';
        prjFileTypeName.value = '';
        prjFileTypeENName.value = '';
        inUse.value = false;
        orderNum.value = 0;
        memo.value = '';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_btnSubmit_Click)
       **/
      const btnSubmit_Click = async () => {
        const strThisFuncName = btnSubmit_Click.name;
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!(in btnSubmit_Click)');
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
              if (['02', '03', '06'].indexOf(clsPrjFileTypeEN._PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (PrjFileType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsPrjFileTypeEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (PrjFileType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsPrjFileTypeEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In PrjFileType_EditAi.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (PrjFileType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsPrjFileTypeEN._CurrTabName,
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
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: PrjFileType_EditAiEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };

      /**
       * 处理保存逻辑
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_HandleSave)
       **/
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };

      /**
       * 隐藏对话框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_HideDialog)
       **/
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      return {
        refDivEdit,
        objPage_Edit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataPrjFileTypeObj,
        ShowDataFromPrjFileTypeObj,
        Clear,
        btnSubmit_Click,
        prjFileTypeId,
        prjFileTypeName,
        prjFileTypeENName,
        inUse,
        orderNum,
        updDate,
        updUserId,
        memo,
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
       *(AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Methods_btnEdit_Click)
       **/
      btnPrjFileType_Edit_Click(strCommandName: string, key: PrjFileTypeKey | null) {
        const objPageEdit = this.objPage_Edit as PrjFileType_EditAiEx | undefined;
        if (objPageEdit == null) {
          const strMsg = '编辑页面初始化不成功,请联系管理员!(in btnPrjFileType_Edit_Click)';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (key == null || IsNullOrEmpty(key.prjFileTypeId) == true) {
          objPageEdit.btnEdit_Click(strCommandName, null);
        } else {
          objPageEdit.btnEdit_Click(strCommandName, key);
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
