<template>
  <!-- 编辑层 -->
  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <div style="width: 100%" class="row">
        <div class="col-2 text-right">
          <label
            id="lblPageDispModeId"
            name="lblPageDispModeId"
            class="col-form-label text-right"
            style="width: 90px"
            >显示模式
          </label>
        </div>
        <div class="col-4">
          <select
            id="ddlPageDispModeId"
            v-model="pageDispModeId"
            class="form-control form-control-sm"
            style="width: 200px"
          >
            <option
              v-for="(item, index) in arrPageDispMode"
              :key="index"
              :value="item.pageDispModeId"
            >
              {{ item.pageDispModeName }}
            </option></select
          >
        </div>
        <div class="col-2 text-right">
          <label
            id="lblClassName"
            name="lblClassName"
            class="col-form-label text-right"
            style="width: 90px"
            >类名
          </label>
        </div>
        <div class="col-4">
          <input
            id="txtClsName"
            v-model="clsName"
            class="form-control form-control-sm"
            style="width: 200px"
          />
        </div>
        <div class="col-2 text-right">
          <label id="lblWidth" name="lblWidth" class="col-form-label text-right" style="width: 90px"
            >宽
          </label>
        </div>
        <div class="col-4">
          <input
            id="txtWidth"
            v-model.number="width"
            class="form-control form-control-sm"
            style="width: 200px"
          />
        </div>
        <div class="col-2 text-right">
          <label
            id="lblColNum"
            name="lblColNum"
            class="col-form-label text-right"
            style="width: 90px"
            >列数
          </label>
        </div>
        <div class="col-4">
          <input
            id="txtColNum"
            v-model.number="colNum"
            class="form-control form-control-sm"
            style="width: 200px"
          />
        </div>
        <div class="col-2 text-right">
          <label
            id="lblInOutTypeId"
            name="lblInOutTypeId"
            class="col-form-label text-right"
            style="width: 90px"
            >INOUT类型
          </label>
        </div>
        <div class="col-4">
          <select
            id="ddlInOutTypeId"
            v-model="inOutTypeId"
            class="form-control form-control-sm"
            style="width: 200px"
          >
            <option v-for="(item, index) in arrInOutType" :key="index" :value="item.inOutTypeId">
              {{ item.inOutTypeName }}
            </option></select
          >
        </div>
        <div class="col-2 text-right">
          <label id="lblTabId" name="lblTabId" class="col-form-label text-right" style="width: 90px"
            >表
          </label>
        </div>
        <div class="col-4">
          <select
            id="ddlTabId"
            v-model="tabId"
            class="form-control form-control-sm"
            style="width: 200px"
          >
            <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
              {{ item.tabName }}
            </option></select
          >
        </div>
        <div class="col-2 text-right">
          <label
            id="lblApplicationTypeId"
            name="lblApplicationTypeId"
            class="col-form-label text-right"
            style="width: 90px"
            >应用类型
          </label>
        </div>
        <div class="col-4">
          <select
            id="ddlApplicationTypeId"
            name="ddlApplicationTypeId"
            class="form-control form-control-sm"
            style="width: 200px"
          ></select>
        </div>
        <div class="col-2 text-right">
          <label
            id="lblKeyId4Test"
            name="lblKeyId4Test"
            class="col-form-label text-right"
            style="width: 90px"
            >测试关键字Id
          </label>
        </div>
        <div class="col-4">
          <input
            id="txtKeyId4Test"
            v-model="keyId4Test"
            class="form-control form-control-sm"
            style="width: 200px"
          />
        </div>
        <div class="col-2 text-right">
          <label
            id="lblContainerTypeId"
            name="lblContainerTypeId"
            class="col-form-label text-right"
            style="width: 90px"
            >容器类型
          </label>
        </div>
        <div class="col-4">
          <select
            id="ddlContainerTypeId"
            v-model="containerTypeId"
            class="form-control form-control-sm"
            style="width: 200px"
          >
            <option
              v-for="(item, index) in arrGCContainerType"
              :key="index"
              :value="item.containerTypeId"
            >
              {{ item.containerTypeName }}
            </option></select
          >
        </div>
        <div class="col-2 text-right">
          <label
            id="lblFileName"
            name="lblFileName"
            class="col-form-label text-right"
            style="width: 90px"
            >文件名
          </label>
        </div>
        <div class="col-4">
          <input
            id="txtFileName"
            v-model="fileName"
            class="form-control form-control-sm"
            style="width: 150px"
          />
        </div>
        <div class="col-2 text-right">
          <label
            id="lblErrMsg"
            name="lblErrMsg"
            class="col-form-label text-right"
            style="width: 90px"
            >错误信息
          </label>
        </div>
        <div class="col-4">
          <input
            id="txtErrMsg"
            v-model="errMsg"
            class="form-control form-control-sm"
            style="width: 150px"
          />
        </div>
      </div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelViewRegion" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitViewRegion"
        type="primary"
        @click="btnViewRegion_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, Is0EqEmpty, IsNullOrEmpty, IsNullOrEmptyEq0 } from '@/ts/PubFun/clsString';
  import { ViewRegion_Edit_Sim } from '@/viewsBase/RegionManage/ViewRegion_Edit_Sim';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import ViewRegion_Edit_SimEx from '@/views/RegionManage/ViewRegion_Edit_SimEx';
  import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
  import { clsPageDispModeEN } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
  import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsGCContainerTypeEN } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
  import { PageDispMode_GetArrPageDispMode } from '@/ts/L3ForWApi/PrjMenu/clsPageDispModeWApi';
  import { InOutType_GetArrInOutType } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { GCContainerType_GetArrGCContainerType } from '@/ts/L3ForWApi/GeneCode/clsGCContainerTypeWApi';
  import {
    refDivEdit,
    PrjId_Session,
    CmPrjId_Local,
  } from '@/views/RegionManage/ViewRegion_UVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  export default defineComponent({
    name: 'ViewRegionEditSim',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const pageDispModeId = ref('');
      const clsName = ref('');
      const width = ref(0);
      const colNum = ref(0);
      const inOutTypeId = ref('');
      const tabId = ref('');
      const keyId4Test = ref('');
      const containerTypeId = ref('');
      const updUser = ref('');
      const updDate = ref('');
      const fileName = ref('');
      const errMsg = ref('');
      const prjId = ref('');

      const arrPageDispMode = ref<clsPageDispModeEN[] | null>([]);
      const arrInOutType = ref<clsInOutTypeEN[] | null>([]);
      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrGCContainerType = ref<clsGCContainerTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        if (PrjId_Session.value == null || PrjId_Session.value == '') {
          PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId; //从Session中获取
        }
        let strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        if (strCmPrjId == null || strCmPrjId == '') {
          strCmPrjId = clsPrivateSessionStorage.cmPrjId; //从Session中获取
        }
        arrPageDispMode.value = await PageDispMode_GetArrPageDispMode(); //编辑区域
        pageDispModeId.value = '0';

        arrInOutType.value = await InOutType_GetArrInOutType(); //编辑区域
        inOutTypeId.value = '0';

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        tabId.value = '0';

        arrGCContainerType.value = await GCContainerType_GetArrGCContainerType(); //编辑区域
        containerTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjViewRegionEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataViewRegionObj() {
        const pobjViewRegionEN = new clsViewRegionEN();
        pobjViewRegionEN.SetPageDispModeId(Is0EqEmpty(pageDispModeId.value)); // 显示模式
        pobjViewRegionEN.SetClsName(clsName.value); // 类名
        pobjViewRegionEN.SetWidth(Number(width.value)); // 宽
        pobjViewRegionEN.SetColNum(Number(colNum.value)); // 列数
        pobjViewRegionEN.SetInOutTypeId(Is0EqEmpty(inOutTypeId.value)); // INOUT类型
        pobjViewRegionEN.SetTabId(Is0EqEmpty(tabId.value)); // 表
        pobjViewRegionEN.SetKeyId4Test(keyId4Test.value); // 测试关键字Id
        pobjViewRegionEN.SetContainerTypeId(Is0EqEmpty(containerTypeId.value)); // 容器类型
        pobjViewRegionEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjViewRegionEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjViewRegionEN.SetFileName(fileName.value); // 文件名
        pobjViewRegionEN.SetErrMsg(errMsg.value); // 错误信息
        pobjViewRegionEN.SetPrjId(PrjId_Session.value); // 工程ID
        return pobjViewRegionEN;

        // pobjViewRegionEN.SetApplicationTypeId(this.applicationTypeId); // 应用类型
        //pobjViewRegionEN.SetErrMsg(this.errMsg);// 错误信息
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewRegionEN">表实体类对象</param>
       **/
      async function ShowDataFromViewRegionObj(pobjViewRegionEN: clsViewRegionEN) {
        pageDispModeId.value = IsNullOrEmptyEq0(pobjViewRegionEN.pageDispModeId); // 显示模式
        clsName.value = pobjViewRegionEN.clsName; // 类名
        width.value = pobjViewRegionEN.width; // 宽
        colNum.value = pobjViewRegionEN.colNum; // 列数
        inOutTypeId.value = IsNullOrEmptyEq0(pobjViewRegionEN.inOutTypeId); // INOUT类型
        tabId.value = IsNullOrEmptyEq0(pobjViewRegionEN.tabId); // 表
        keyId4Test.value = pobjViewRegionEN.keyId4Test; // 测试关键字Id
        containerTypeId.value = IsNullOrEmptyEq0(pobjViewRegionEN.containerTypeId); // 容器类型
        fileName.value = pobjViewRegionEN.fileName; // 文件名
        // errMsg.value = pobjViewRegionEN.errMsg; // 错误信息
        // this.applicationTypeId = pobjViewRegionEN.applicationTypeId; // 应用类型
      }
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        pageDispModeId.value = '0';
        clsName.value = '';
        width.value = 0;
        colNum.value = 0;
        inOutTypeId.value = '0';
        tabId.value = '0';
        keyId4Test.value = '';
        containerTypeId.value = '0';
        fileName.value = '';
        errMsg.value = '';
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
              if (['02', '03', '06'].indexOf(clsViewRegionEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (ViewRegion_Edit_Sim.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsViewRegionEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (ViewRegion_Edit_Sim.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsViewRegionEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In ViewRegion_Edit_Sim.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (ViewRegion_Edit_Sim.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsViewRegionEN._CurrTabName,
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
      const strTitle = ref('界面区域编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<ViewRegion_Edit_SimEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: ViewRegion_Edit_SimEx) => {
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
          case 'btnCancelViewRegion':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitViewRegion':
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
          case 'btnCancelViewRegion':
            return strCancelButtonText.value;
          case 'btnSubmitViewRegion':
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
        GetEditDataViewRegionObj,
        ShowDataFromViewRegionObj,
        Clear,
        btnSubmit_Click,
        pageDispModeId,
        clsName,
        width,
        colNum,
        inOutTypeId,
        tabId,
        keyId4Test,
        containerTypeId,
        updUser,
        updDate,
        fileName,
        errMsg,
        prjId,
        arrPageDispMode,
        arrInOutType,
        arrvPrjTab_Sim,
        arrGCContainerType,

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
        //ViewRegion_Edit_SimEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnViewRegion_Edit_Click(strCommandName: string, strKeyId: string) {
        ViewRegion_Edit_SimEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
