<template>
  <!-- 编辑层 -->
  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <div class="row">
        <div class="col-7">
          <table
            id="tabEdit"
            style="width: 450px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr id="trConstraintName">
              <td class="text-right">
                <label id="lblConstraintName" class="col-form-label text-right" style="width: 90px"
                  >约束表名称
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtConstraintName"
                  v-model="constraintName"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
            <tr v-show="isHasTabId" id="trTabId">
              <td class="text-right">
                <label id="lblTabId" class="col-form-label text-right" style="width: 90px"
                  >表ID
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlTabId"
                  ref="ddlTabId"
                  v-model="tabId"
                  class="form-control form-control-sm"
                  style="width: 300px"
                  @change="ddlTabId_SelectedIndexChanged"
                ></select>
              </td>
            </tr>
            <tr id="trConstraintTypeId">
              <td class="text-right">
                <label
                  id="lblConstraintTypeId"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >约束类型
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlConstraintTypeId"
                  v-model="constraintTypeId"
                  class="form-control form-control-sm"
                  style="width: 300px"
                >
                  <option
                    v-for="(item, index) in arrConstraintType"
                    :key="index"
                    :value="item.constraintTypeId"
                  >
                    {{ item.constraintTypeName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trConstraintDescription">
              <td class="text-right">
                <label
                  id="lblConstraintDescription"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >约束说明
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtConstraintDescription"
                  v-model="constraintDescription"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
            <tr id="trCreateUserId">
              <td class="text-right">
                <label id="lblCreateUserId" class="col-form-label text-right" style="width: 90px"
                  >建立用户Id
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtCreateUserId"
                  v-model="createUserId"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
            <tr id="trInUse">
              <td class="text-right">
                <label id="lblInUse" class="col-form-label text-right" style="width: 90px"
                  >是否在用
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlInUse"
                  v-model="inUse"
                  class="form-control form-control-sm"
                  style="width: 300px"
                >
                  <option value="0">选择是/否</option>
                  <option value="true">是</option>
                  <option value="false">否</option></select
                >
              </td>
            </tr>
            <tr id="trMemo">
              <td class="text-right">
                <label id="lblMemo" class="col-form-label text-right" style="width: 90px"
                  >说明
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtMemo"
                  v-model="memo"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="col-5">
          <FieldObjSelector
            ref="refFieldObjSelector"
            :available-fields="fields"
            :init-selected-fields="initSelectedFields"
        /></div>
      </div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelPrjConstraint" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitPrjConstraint"
        type="primary"
        @click="btnPrjConstraint_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, watch } from 'vue';

  import PrjConstraint_EditEx from '@/views/Table_Field/PrjConstraint_EditEx';
  import FieldObjSelector from '@/ts/components/FieldObjSelector.vue';
  import { myMessage } from '@/utils/myMessage';

  import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
  import { CboObject_SortByText, clsCboObject } from '@/ts/PubFun/clsCboObject';
  import { useConstraintFieldsStore } from '@/store/modules/constraintFields';

  import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';

  import { clsPrjConstraintEN } from '@/ts/L0Entity/Table_Field/clsPrjConstraintEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsConstraintTypeEN } from '@/ts/L0Entity/Table_Field/clsConstraintTypeEN';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { ConstraintType_GetArrConstraintType } from '@/ts/L3ForWApi/Table_Field/clsConstraintTypeWApi';
  import {
    refDivEdit,
    PrjId_Session,
    CmPrjId_Local,
    TabId_Static,
  } from '@/views/Table_Field/PrjConstraintVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { PrjConstraint_Edit } from '@/viewsBase/Table_Field/PrjConstraint_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'PrjConstraintEdit',
    components: {
      // 组件注册
      FieldObjSelector,
    },

    setup() {
      const userStore = useUserStore();
      const prjConstraintId = ref('');
      const constraintName = ref('');
      const prjId = ref('');
      const tabId = ref('');
      const constraintTypeId = ref('');
      const constraintDescription = ref('');
      const createUserId = ref('');
      const inUse = ref('0');
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrConstraintType = ref<clsConstraintTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        tabId.value = '0';

        arrConstraintType.value = await ConstraintType_GetArrConstraintType(); //编辑区域
        constraintTypeId.value = '0';

        inUse.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjPrjConstraintEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataPrjConstraintObj() {
        const pobjPrjConstraintEN = new clsPrjConstraintEN();
        pobjPrjConstraintEN.SetPrjConstraintId(prjConstraintId.value); // 约束表Id
        pobjPrjConstraintEN.SetConstraintName(constraintName.value); // 约束表名称
        pobjPrjConstraintEN.SetPrjId(PrjId_Session.value); // 工程ID

        // if (tabId.value != '') {
        pobjPrjConstraintEN.SetTabId(TabId_Static.value); // 表ID
        // } else {
        //   pobjPrjConstraintEN.SetTabId(tabId.value); // 表ID
        // }
        pobjPrjConstraintEN.SetConstraintTypeId(constraintTypeId.value); // 约束类型
        pobjPrjConstraintEN.SetConstraintDescription(constraintDescription.value); // 约束说明
        pobjPrjConstraintEN.SetCreateUserId(createUserId.value); // 建立用户Id
        pobjPrjConstraintEN.SetInUse(inUse.value == 'true' ? true : false); // 是否在用
        pobjPrjConstraintEN.SetMemo(memo.value); // 说明
        pobjPrjConstraintEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjPrjConstraintEN.SetUpdUser(userStore.getUserId); // 修改者

        return pobjPrjConstraintEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjPrjConstraintEN">表实体类对象</param>
       **/
      async function ShowDataFromPrjConstraintObj(pobjPrjConstraintEN: clsPrjConstraintEN) {
        prjConstraintId.value = pobjPrjConstraintEN.prjConstraintId; // 约束表Id
        constraintName.value = pobjPrjConstraintEN.constraintName; // 约束表名称
        tabId.value = pobjPrjConstraintEN.tabId; // 表ID
        constraintTypeId.value = pobjPrjConstraintEN.constraintTypeId; // 约束类型
        constraintDescription.value = pobjPrjConstraintEN.constraintDescription; // 约束说明
        createUserId.value = pobjPrjConstraintEN.createUserId; // 建立用户Id
        inUse.value = pobjPrjConstraintEN.inUse.toString(); // 是否在用
        memo.value = pobjPrjConstraintEN.memo; // 说明
      }
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        prjConstraintId.value = '';
        constraintName.value = '';
        tabId.value = '0';
        constraintTypeId.value = '0';
        constraintDescription.value = '';
        createUserId.value = '';
        inUse.value = '0';
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
              if (['02', '03', '06'].indexOf(clsPrjConstraintEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (PrjConstraint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsPrjConstraintEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (PrjConstraint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsPrjConstraintEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In PrjConstraint_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (PrjConstraint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsPrjConstraintEN._CurrTabName, keyId.value);
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
      const strTitle = ref('约束编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<PrjConstraint_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: PrjConstraint_EditEx) => {
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

      const constraintFieldsStore = useConstraintFieldsStore();
      const prjTabFldStore = usePrjTabFldStore();
      const isHasTabId = ref(false);
      // const isShowFieldObjSelector = ref(false);

      const refFieldObjSelector = ref();

      const ddlTabId = ref();
      // const strTitle = ref('约束编辑');
      const fields = ref([
        { value: '1', text: 'Field 1' },
        { value: '2', text: 'Field 2' },
        { value: '3', text: 'Field 3' },
        { value: '4', text: 'Field 4' },
      ]);
      const initSelectedFields = ref([
        { value: '1', text: 'Field 1' },
        { value: '3', text: 'Field 3' },
      ]);

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPrjConstraint':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitPrjConstraint':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPrjConstraint':
            return strCancelButtonText.value;
          case 'btnSubmitPrjConstraint':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      onMounted(() => {
        PrjConstraint_EditEx.getSelectedFldObjLst = getSelectedFldObjLst;
      });
      watch(
        () => tabId.value,
        (newTabId, oldTabId) => {
          console.log('tabId.value changed in BarChartV3:', newTabId, oldTabId);
          ddlTabId_SelectedIndexChanged();
        },
      );

      // 方法定义
      async function ddlTabId_SelectedIndexChanged() {
        // if (isShowFieldObjSelector.value == true) {
        //   isShowFieldObjSelector.value = false;
        //   return;
        // }
        const strTabId = tabId.value;

        if (IsNullOrEmpty(strTabId) == true || strTabId == '0') {
          myMessage.warning(`请选择一个有效表！`);
          // ddlTabId.value.focus();
          return;
        }
        const arrFieldTab = new Array<clsCboObject>();
        const arrFldId = await prjTabFldStore.getFldIdLstByTabId_NoEx(strTabId);
        for (const strFldId of arrFldId) {
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            strFldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (strFldName == '') continue;
          const objCboObject = new clsCboObject(strFldId, strFldName);
          arrFieldTab.push(objCboObject);
        }
        fields.value = arrFieldTab.sort(CboObject_SortByText);
        //            SetDdl_id_Major();
      }
      async function ShowFieldObjSelector(strTabId: string, strPrjConstraintId: string) {
        // isShowFieldObjSelector.value = true;

        // const strTabId = GetSelectValueInDivObj(refDivEdit.value, 'ddlTabId');
        if (IsNullOrEmpty(strTabId) == true || strTabId == '0') {
          myMessage.warning(`请选择一个有效表！`);
          // ddlTabId.value.focus();
          return;
        }
        let arrFieldTab = new Array<clsCboObject>();
        const arrFldId = await prjTabFldStore.getFldIdLstByTabId_NoEx(strTabId);
        for (const strFldId of arrFldId) {
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            strFldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (strFldName == '') continue;
          const objCboObject = new clsCboObject(strFldId, strFldName);
          arrFieldTab.push(objCboObject);
        }
        arrFieldTab = arrFieldTab.sort(CboObject_SortByText);
        const arrSelectedFldId = await constraintFieldsStore.getFldIdLstByPrjConstraintId(
          strPrjConstraintId,
        );
        let arrSelectFieldTab = new Array<clsCboObject>();

        for (const strFldId of arrSelectedFldId) {
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(
            strFldId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          if (strFldName == '') continue;
          const objCboObject = new clsCboObject(strFldId, strFldName);
          arrSelectFieldTab.push(objCboObject);
        }
        arrSelectFieldTab = arrSelectFieldTab.sort(CboObject_SortByText);
        fields.value = arrFieldTab;
        initSelectedFields.value = arrSelectFieldTab;
        // console.log('tabId.value:', tabId.value);
        tabId.value = strTabId;
        refFieldObjSelector.value.setSelectedFldId(arrFieldTab[0].value);
        refFieldObjSelector.value.setSelectedFldObjLst(arrSelectFieldTab);

        //            SetDdl_id_Major();
      }

      function getSelectedFldObjLst(): clsCboObject[] {
        const arrSelectedFld = refFieldObjSelector.value.getSelectedFldObjLst();
        console.log('arrSelectedFld:', arrSelectedFld);
        return arrSelectedFld;
      }
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
        GetEditDataPrjConstraintObj,
        ShowDataFromPrjConstraintObj,
        Clear,
        btnSubmit_Click,
        prjConstraintId,
        constraintName,
        prjId,
        tabId,
        constraintTypeId,
        constraintDescription,
        createUserId,
        inUse,
        memo,
        updDate,
        updUser,
        arrvPrjTab_Sim,
        arrConstraintType,

        SetButtonText,
        GetButtonText,
        fields,
        initSelectedFields,

        ddlTabId,
        ddlTabId_SelectedIndexChanged,
        refFieldObjSelector,
        getSelectedFldObjLst,

        ShowFieldObjSelector,
        isHasTabId,
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
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //PrjConstraint_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPrjConstraint_Edit_Click(strCommandName: string, strKeyId: string) {
        PrjConstraint_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
