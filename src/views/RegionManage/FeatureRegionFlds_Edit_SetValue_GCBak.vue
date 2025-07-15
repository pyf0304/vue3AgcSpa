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
          <tr id="trReleFldId">
            <td class="text-right">
              <label
                id="lblReleFldId"
                name="lblReleFldId"
                class="col-form-label text-right"
                style="width: 90px"
                >相关字段
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <select
                id="ddlReleFldId"
                v-model="releFldId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trValueGivingModeId">
            <td class="text-right">
              <label
                id="lblValueGivingModeId"
                name="lblValueGivingModeId"
                class="col-form-label text-right"
                style="width: 90px"
                >给值方式
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlValueGivingModeId"
                v-model="valueGivingModeId"
                class="form-control form-control-sm"
                style="width: 400px"
                @change="ddlValueGivingModeId_SelectedIndexChanged($event)"
              >
                <option
                  v-for="(item, index) in arrValueGivingMode"
                  :key="index"
                  :value="item.valueGivingModeId"
                >
                  {{ item.valueGivingModeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trDefaultValue">
            <td class="text-right">
              <label
                id="lblDefaultValue"
                name="lblDefaultValue"
                class="col-form-label text-right"
                style="width: 90px"
                >缺省值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDefaultValue"
                v-model="defaultValue"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFeatureRegionFlds" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFeatureRegionFlds"
        type="primary"
        @click="btnFeatureRegionFlds_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import FeatureRegionFlds_Edit_SetValueEx from '@/views/RegionManage/FeatureRegionFlds_Edit_SetValueEx';
  import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsValueGivingModeEN } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { ValueGivingMode_GetArrValueGivingMode } from '@/ts/L3ForWApi/GeneCode/clsValueGivingModeWApi';
  import {
    refDivEdit,
    RegionId_Static,
    PrjId_Session,
  } from '@/views/RegionManage/FeatureRegionFlds_SimVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { FeatureRegionFlds_Edit_SetValue } from '@/viewsBase/RegionManage/FeatureRegionFlds_Edit_SetValue';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'FeatureRegionFldsEditSetValue',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const regionId = ref('');
      const releFldId = ref('');
      const valueGivingModeId = ref('');
      const defaultValue = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrValueGivingMode = ref<clsValueGivingModeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(strPrjId); //编辑区域
        releFldId.value = '0';

        arrValueGivingMode.value = await ValueGivingMode_GetArrValueGivingMode(); //编辑区域
        valueGivingModeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjFeatureRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFeatureRegionFldsObj() {
        const pobjFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
        pobjFeatureRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjFeatureRegionFldsEN.SetReleFldId(releFldId.value); // 相关字段
        pobjFeatureRegionFldsEN.SetValueGivingModeId(valueGivingModeId.value); // 给值方式
        pobjFeatureRegionFldsEN.SetDefaultValue(defaultValue.value); // 缺省值
        pobjFeatureRegionFldsEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjFeatureRegionFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjFeatureRegionFldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjFeatureRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromFeatureRegionFldsObj(
        pobjFeatureRegionFldsEN: clsFeatureRegionFldsEN,
      ) {
        releFldId.value = pobjFeatureRegionFldsEN.releFldId; // 相关字段
        valueGivingModeId.value = pobjFeatureRegionFldsEN.valueGivingModeId; // 给值方式
        defaultValue.value = pobjFeatureRegionFldsEN.defaultValue; // 缺省值
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        releFldId.value = '0';
        valueGivingModeId.value = '0';
        defaultValue.value = '';
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
              if (['02', '03', '06'].indexOf(clsFeatureRegionFldsEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (
                    FeatureRegionFlds_Edit_SetValue.strPageDispModeId ==
                    enumPageDispMode.PopupBox_01
                  )
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFeatureRegionFldsEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (
                    FeatureRegionFlds_Edit_SetValue.strPageDispModeId ==
                    enumPageDispMode.PopupBox_01
                  ) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsFeatureRegionFldsEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In FeatureRegionFlds_Edit_SetValue.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (
                  FeatureRegionFlds_Edit_SetValue.strPageDispModeId == enumPageDispMode.PopupBox_01
                ) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsFeatureRegionFldsEN._CurrTabName,
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
      const strTitle = ref('功能区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<FeatureRegionFlds_Edit_SetValueEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: FeatureRegionFlds_Edit_SetValueEx) => {
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
        GetEditDataFeatureRegionFldsObj,
        ShowDataFromFeatureRegionFldsObj,
        Clear,
        btnSubmit_Click,
        regionId,
        releFldId,
        valueGivingModeId,
        defaultValue,
        updUser,
        updDate,
        arrvFieldTab_Sim,
        arrValueGivingMode,
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
      btnFeatureRegionFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        FeatureRegionFlds_Edit_SetValueEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlValueGivingModeId_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在事件函数中重写该函数!');
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
