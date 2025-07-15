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
          <tr id="trPrjName">
            <td class="text-right">
              <label
                id="lblPrjName"
                name="lblPrjName"
                class="col-form-label text-right"
                style="width: 90px"
                >工程名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPrjName"
                v-model="prjName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trPrjDomain">
            <td class="text-right">
              <label
                id="lblPrjDomain"
                name="lblPrjDomain"
                class="col-form-label text-right"
                style="width: 90px"
                >域/包名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPrjDomain"
                v-model="prjDomain"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trGetWebApiFunc">
            <td class="text-right">
              <label
                id="lblGetWebApiFunc"
                name="lblGetWebApiFunc"
                class="col-form-label text-right"
                style="width: 90px"
                >获取WebApiUrl函数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtGetWebApiFunc"
                v-model="getWebApiFunc"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trTableSpace">
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
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trIsRelaDataBase">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 400px">
                <input
                  id="chkIsRelaDataBase"
                  v-model="isRelaDataBase"
                  type="checkbox"
                  Text="是否关联数据库"
                /><label for="chkIsRelaDataBase">是否关联数据库</label></span
              >
            </td>
          </tr>
          <tr id="trUseStateId">
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
                style="width: 400px"
              >
                <option v-for="(item, index) in arrUseState" :key="index" :value="item.useStateId">
                  {{ item.useStateName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trJavaPackageName">
            <td class="text-right">
              <label
                id="lblJavaPackageName"
                name="lblJavaPackageName"
                class="col-form-label text-right"
                style="width: 90px"
                >Java包名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtJavaPackageName"
                v-model="javaPackageName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trIsSupportMvc">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 400px">
                <input
                  id="chkIsSupportMvc"
                  v-model="isSupportMvc"
                  type="checkbox"
                  Text="是否支持Mvc"
                /><label for="chkIsSupportMvc">是否支持Mvc</label></span
              >
            </td>
          </tr>
          <tr id="trIsoPrjName">
            <td class="text-right">
              <label
                id="lblIsoPrjName"
                name="lblIsoPrjName"
                class="col-form-label text-right"
                style="width: 90px"
                >ISO工程名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIsoPrjName"
                v-model="isoPrjName"
                class="form-control form-control-sm"
                style="width: 400px"
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
                style="width: 400px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelProjects" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitProjects"
        type="primary"
        @click="btnProjects_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import Projects_EditEx from '@/views/PrjManage/Projects_EditEx';
  import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
  import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
  import { UseState_GetArrUseState } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
  import { refDivEdit } from '@/views/PrjManage/ProjectsVueShare';
  // import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { Projects_Edit } from '@/viewsBase/PrjManage/Projects_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'ProjectsEdit',
    components: {
      // 组件注册
    },
    setup() {
      // const userStore = useUserStore();
      const prjId = ref('');
      const prjName = ref('');
      const prjDomain = ref('');
      const getWebApiFunc = ref('');
      const tableSpace = ref('');
      const isRelaDataBase = ref(true);
      const useStateId = ref('');
      const javaPackageName = ref('');
      const isSupportMvc = ref(true);
      const isoPrjName = ref('');
      const memo = ref('');
      const updDate = ref('');

      const arrUseState = ref<clsUseStateEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrUseState.value = await UseState_GetArrUseState(); //编辑区域
        useStateId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjProjectsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataProjectsObj() {
        const pobjProjectsEN = new clsProjectsEN();
        pobjProjectsEN.SetPrjId(prjId.value); // 工程ID
        pobjProjectsEN.SetPrjName(prjName.value); // 工程名称
        pobjProjectsEN.SetPrjDomain(prjDomain.value); // 域/包名
        pobjProjectsEN.SetGetWebApiFunc(getWebApiFunc.value); // 获取WebApiUrl函数
        pobjProjectsEN.SetTableSpace(tableSpace.value); // 表空间
        pobjProjectsEN.SetIsRelaDataBase(isRelaDataBase.value); // 是否关联数据库
        pobjProjectsEN.SetUseStateId(Is0EqEmpty(useStateId.value)); // 使用状态Id
        pobjProjectsEN.SetJavaPackageName(javaPackageName.value); // Java包名
        pobjProjectsEN.SetIsSupportMvc(isSupportMvc.value); // 是否支持Mvc
        pobjProjectsEN.SetIsoPrjName(isoPrjName.value); // ISO工程名
        pobjProjectsEN.SetMemo(memo.value); // 说明
        pobjProjectsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjProjectsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjProjectsEN">表实体类对象</param>
       **/
      async function ShowDataFromProjectsObj(pobjProjectsEN: clsProjectsEN) {
        prjId.value = pobjProjectsEN.prjId; // 工程ID
        prjName.value = pobjProjectsEN.prjName; // 工程名称
        prjDomain.value = pobjProjectsEN.prjDomain; // 域/包名
        getWebApiFunc.value = pobjProjectsEN.getWebApiFunc; // 获取WebApiUrl函数
        tableSpace.value = pobjProjectsEN.tableSpace; // 表空间
        isRelaDataBase.value = pobjProjectsEN.isRelaDataBase; // 是否关联数据库
        useStateId.value = IsNullOrEmptyEq0(pobjProjectsEN.useStateId); // 使用状态Id
        javaPackageName.value = pobjProjectsEN.javaPackageName; // Java包名
        isSupportMvc.value = pobjProjectsEN.isSupportMvc; // 是否支持Mvc
        isoPrjName.value = pobjProjectsEN.isoPrjName; // ISO工程名
        memo.value = pobjProjectsEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        prjId.value = '';
        prjName.value = '';
        prjDomain.value = '';
        getWebApiFunc.value = '';
        tableSpace.value = '';
        isRelaDataBase.value = false;
        useStateId.value = '0';
        javaPackageName.value = '';
        isSupportMvc.value = false;
        isoPrjName.value = '';
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
              if (['02', '03', '06'].indexOf(clsProjectsEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (Projects_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsProjectsEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (Projects_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsProjectsEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In Projects_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (Projects_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(clsProjectsEN._CurrTabName, keyId.value);
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
      const strTitle = ref('工程编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<Projects_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: Projects_EditEx) => {
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
        GetEditDataProjectsObj,
        ShowDataFromProjectsObj,
        Clear,
        btnSubmit_Click,
        prjId,
        prjName,
        prjDomain,
        getWebApiFunc,
        tableSpace,
        isRelaDataBase,
        useStateId,
        javaPackageName,
        isSupportMvc,
        isoPrjName,
        memo,
        updDate,
        arrUseState,
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
      btnProjects_Edit_Click(strCommandName: string, strKeyId: string) {
        Projects_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
