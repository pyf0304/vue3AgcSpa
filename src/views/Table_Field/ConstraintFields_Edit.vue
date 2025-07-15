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
          <tr id="trPrjConstraintId">
            <td class="text-right">
              <label
                id="lblPrjConstraintId"
                name="lblPrjConstraintId"
                class="col-form-label text-right"
                style="width: 90px"
                >约束表Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlPrjConstraintId"
                v-model="prjConstraintId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrPrjConstraint"
                  :key="index"
                  :value="item.prjConstraintId"
                >
                  {{ item.constraintName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFldId">
            <td class="text-right">
              <label
                id="lblFldId"
                name="lblFldId"
                class="col-form-label text-right"
                style="width: 90px"
                >字段Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFldId"
                v-model="fldId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trMaxValue">
            <td class="text-right">
              <label
                id="lblMaxValue"
                name="lblMaxValue"
                class="col-form-label text-right"
                style="width: 90px"
                >最大值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMaxValue"
                v-model="maxValue"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trMinValue">
            <td class="text-right">
              <label
                id="lblMinValue"
                name="lblMinValue"
                class="col-form-label text-right"
                style="width: 90px"
                >最小值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMinValue"
                v-model="minValue"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trSortTypeId">
            <td class="text-right">
              <label
                id="lblSortTypeId"
                name="lblSortTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >排序类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSortTypeId"
                v-model="sortTypeId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrSortType" :key="index" :value="item.sortTypeId">
                  {{ item.sortTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trInUse">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 400px">
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
      <a-button id="btnCancelConstraintFields" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitConstraintFields"
        type="primary"
        @click="btnConstraintFields_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import ConstraintFields_EditEx from '@/views/Table_Field/ConstraintFields_EditEx';
  import { clsConstraintFieldsEN } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsEN';
  import { clsPrjConstraintEN } from '@/ts/L0Entity/Table_Field/clsPrjConstraintEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsSortTypeEN } from '@/ts/L0Entity/Table_Field/clsSortTypeEN';
  import { PrjConstraint_GetArrPrjConstraint } from '@/ts/L3ForWApi/Table_Field/clsPrjConstraintWApi';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { SortType_GetArrSortType } from '@/ts/L3ForWApi/Table_Field/clsSortTypeWApi';
  import {
    refDivEdit,
    PrjId_Session,
    TabId_Static,
  } from '@/views/Table_Field/ConstraintFieldsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format } from '@/ts/PubFun/clsString';
  import { ConstraintFields_Edit } from '@/viewsBase/Table_Field/ConstraintFields_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'ConstraintFieldsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const prjConstraintId = ref('');
      const tabId = ref('');
      const fldId = ref('');
      const maxValue = ref('');
      const minValue = ref('');
      const sortTypeId = ref('');
      const inUse = ref(true);
      const orderNum = ref(0);
      const prjId = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrPrjConstraint = ref<clsPrjConstraintEN[] | null>([]);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrSortType = ref<clsSortTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        if (strTabId_Static == '') {
          const strMsg = Format('ConstraintFieldsEdit.TabId_Static.value为空,请检查！');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        arrPrjConstraint.value = await PrjConstraint_GetArrPrjConstraint(); //编辑区域
        prjConstraintId.value = '0';

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        fldId.value = '0';

        arrSortType.value = await SortType_GetArrSortType(); //编辑区域
        sortTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjConstraintFieldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataConstraintFieldsObj() {
        const pobjConstraintFieldsEN = new clsConstraintFieldsEN();
        pobjConstraintFieldsEN.SetPrjConstraintId(prjConstraintId.value); // 约束表Id
        pobjConstraintFieldsEN.SetTabId(TabId_Static.value); // 表ID
        pobjConstraintFieldsEN.SetFldId(fldId.value); // 字段Id
        pobjConstraintFieldsEN.SetMaxValue(maxValue.value); // 最大值
        pobjConstraintFieldsEN.SetMinValue(minValue.value); // 最小值
        pobjConstraintFieldsEN.SetSortTypeId(sortTypeId.value); // 排序类型Id
        pobjConstraintFieldsEN.SetInUse(inUse.value); // 是否在用
        pobjConstraintFieldsEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjConstraintFieldsEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjConstraintFieldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjConstraintFieldsEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjConstraintFieldsEN.SetMemo(memo.value); // 说明
        return pobjConstraintFieldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjConstraintFieldsEN">表实体类对象</param>
       **/
      async function ShowDataFromConstraintFieldsObj(
        pobjConstraintFieldsEN: clsConstraintFieldsEN,
      ) {
        prjConstraintId.value = pobjConstraintFieldsEN.prjConstraintId; // 约束表Id
        fldId.value = pobjConstraintFieldsEN.fldId; // 字段Id
        maxValue.value = pobjConstraintFieldsEN.maxValue; // 最大值
        minValue.value = pobjConstraintFieldsEN.minValue; // 最小值
        sortTypeId.value = pobjConstraintFieldsEN.sortTypeId; // 排序类型Id
        inUse.value = pobjConstraintFieldsEN.inUse; // 是否在用
        orderNum.value = pobjConstraintFieldsEN.orderNum; // 序号
        memo.value = pobjConstraintFieldsEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        prjConstraintId.value = '0';
        fldId.value = '0';
        maxValue.value = '';
        minValue.value = '';
        sortTypeId.value = '0';
        inUse.value = false;
        orderNum.value = 0;
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
              if (['02', '03', '06'].indexOf(clsConstraintFieldsEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsConstraintFieldsEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (ConstraintFields_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsConstraintFieldsEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In ConstraintFields_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (ConstraintFields_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsConstraintFieldsEN._CurrTabName,
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
      const strTitle = ref('约束字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<ConstraintFields_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: ConstraintFields_EditEx) => {
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
        GetEditDataConstraintFieldsObj,
        ShowDataFromConstraintFieldsObj,
        Clear,
        btnSubmit_Click,
        prjConstraintId,
        tabId,
        fldId,
        maxValue,
        minValue,
        sortTypeId,
        inUse,
        orderNum,
        prjId,
        updDate,
        updUser,
        memo,
        arrPrjConstraint,
        arrvFieldTab_Sim,
        arrSortType,
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
      btnConstraintFields_Edit_Click(strCommandName: string, strKeyId: string) {
        ConstraintFields_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
