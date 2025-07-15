<template>
  <!-- 编辑层 -->

  <div class="modal-content" style="width: 415px">
    <div class="modal-header">
      <h4 id="lblDialogTitle_DGRegionFlds" class="modal-title">模态框（Modal）标题</h4>
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    </div>
    <div class="modal-body">
      <table
        id="tabEdit"
        style="width: 380px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trFldId">
            <td class="text-right">
              <label
                id="lblFldId"
                name="lblFldId"
                class="col-form-label text-right"
                style="width: 90px"
                >表字段
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <select
                id="ddlFldId"
                v-model="fldId"
                class="form-control form-control-sm"
                style="width: 280px"
                @change="ddlFldId_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trOutFldId">
            <td class="text-right">
              <label
                id="lblOutFldId"
                name="lblOutFldId"
                class="col-form-label text-right"
                style="width: 90px"
                >OutFldId
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlOutFldId"
                v-model="outFldId"
                class="form-control form-control-sm"
                style="width: 150px"
                @change="ddlOutFldId_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trSortExpression">
            <td class="text-right">
              <label
                id="lblSortExpression"
                name="lblSortExpression"
                class="col-form-label text-right"
                style="width: 90px"
                >排序表达式
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSortExpression"
                v-model="sortExpression"
                class="form-control form-control-sm"
                style="width: 280px"
              />
            </td>
          </tr>
          <tr id="trHeaderText">
            <td class="text-right">
              <label
                id="lblHeaderText"
                name="lblHeaderText"
                class="col-form-label text-right"
                style="width: 90px"
                >列头
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtHeaderText"
                v-model="headerText"
                class="form-control form-control-sm"
                style="width: 280px"
              />
            </td>
          </tr>
          <tr id="trCtlTypeId">
            <td class="text-right">
              <label
                id="lblCtlTypeId"
                name="lblCtlTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >控件类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCtlTypeId"
                v-model="ctlTypeId"
                class="form-control form-control-sm"
                style="width: 280px"
              >
                <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                  {{ item.ctlTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trDgFuncTypeId">
            <td class="text-right">
              <label
                id="lblDgFuncTypeId"
                name="lblDgFuncTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >Dg功能类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDgFuncTypeId"
                v-model="dgFuncTypeId"
                class="form-control form-control-sm"
                style="width: 280px"
              >
                <option
                  v-for="(item, index) in arrDgFuncType"
                  :key="index"
                  :value="item.dgFuncTypeId"
                >
                  {{ item.dgFuncTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsVisible">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 280px">
                <input
                  id="chkIsVisible"
                  v-model="isVisible"
                  type="checkbox"
                  Text="是否显示"
                /><label for="chkIsVisible">是否显示</label></span
              >
            </td>
          </tr>
          <tr id="trIsNeedSort">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 280px">
                <input
                  id="chkIsNeedSort"
                  v-model="isNeedSort"
                  type="checkbox"
                  Text="是否需要排序"
                /><label for="chkIsNeedSort">是否需要排序</label></span
              >
            </td>
          </tr>
          <tr id="trIsTransToChkBox">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 280px">
                <input
                  id="chkIsTransToChkBox"
                  v-model="isTransToChkBox"
                  type="checkbox"
                  Text="是否转换成CheckBox"
                /><label for="chkIsTransToChkBox">是否转换成CheckBox</label></span
              >
            </td>
          </tr>
          <tr id="trToolTipText">
            <td class="text-right">
              <label
                id="lblToolTipText"
                name="lblToolTipText"
                class="col-form-label text-right"
                style="width: 90px"
                >提示文字
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtToolTipText"
                v-model="toolTipText"
                class="form-control form-control-sm"
                style="width: 280px"
              />
            </td>
          </tr>
          <tr id="trIsFuncFld">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 280px">
                <input
                  id="chkIsFuncFld"
                  v-model="isFuncFld"
                  type="checkbox"
                  Text="是否功能字段"
                /><label for="chkIsFuncFld">是否功能字段</label></span
              >
            </td>
          </tr>
          <tr id="trIsDefaultSort">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 280px">
                <input
                  id="chkIsDefaultSort"
                  v-model="isDefaultSort"
                  type="checkbox"
                  Text="是否默认排序"
                /><label for="chkIsDefaultSort">是否默认排序</label></span
              >
            </td>
          </tr>
          <tr id="trSeqNum">
            <td class="text-right">
              <label
                id="lblSeqNum"
                name="lblSeqNum"
                class="col-form-label text-right"
                style="width: 90px"
                >序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSeqNum"
                v-model.number="seqNum"
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
            <td class="text-left" ColSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 280px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-footer">
      <button id="btnCancelDGRegionFlds" type="button" class="btn btn-default" data-dismiss="modal"
        >关闭</button
      >
      <button
        id="btnSubmitDGRegionFlds"
        type="button"
        class="btn btn-primary"
        onclick="btnDGRegionFlds_Edit_Click('Submit')"
        >添加</button
      >
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import DGRegionFlds_EditEx from '@/views/RegionManage/DGRegionFlds_EditEx';
  import { clsDGRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { clsDgFuncTypeEN } from '@/ts/L0Entity/PrjInterface/clsDgFuncTypeEN';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { CtlType_GetArrCtlType } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { DgFuncType_GetArrDgFuncType } from '@/ts/L3ForWApi/PrjInterface/clsDgFuncTypeWApi';
  import {
    PrjId_Session,
    refDivEdit,
    RegionId_Static,
  } from '@/views/RegionManage/DGRegionFldsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format } from '@/ts/PubFun/clsString';
  import { DGRegionFlds_Edit } from '@/viewsBase/RegionManage/DGRegionFlds_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'DGRegionFldsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const fldId = ref('');
      const outFldId = ref('');
      const sortExpression = ref('');
      const headerText = ref('');
      const ctlTypeId = ref('');
      const dgFuncTypeId = ref('');
      const isVisible = ref(true);
      const isNeedSort = ref(true);
      const isTransToChkBox = ref(true);
      const toolTipText = ref('');
      const isFuncFld = ref(true);
      const inUse = ref('0');
      const regionId = ref('');
      const isDefaultSort = ref(true);
      const seqNum = ref(0);
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);
      const arrDgFuncType = ref<clsDgFuncTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        // const strTabId_Static = TabId_Static.value; //静态变量;//静态变量

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(strPrjId); //编辑区域
        fldId.value = '0';

        outFldId.value = '0';

        arrCtlType.value = await CtlType_GetArrCtlType(); //编辑区域
        ctlTypeId.value = '0';

        arrDgFuncType.value = await DgFuncType_GetArrDgFuncType(); //编辑区域
        dgFuncTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjDGRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataDGRegionFldsObj() {
        const pobjDGRegionFldsEN = new clsDGRegionFldsEN();
        pobjDGRegionFldsEN.SetFldId(fldId.value); // 表字段
        pobjDGRegionFldsEN.SetOutFldId(outFldId.value); // OutFldId
        pobjDGRegionFldsEN.SetSortExpression(sortExpression.value); // 排序表达式
        pobjDGRegionFldsEN.SetHeaderText(headerText.value); // 列头
        pobjDGRegionFldsEN.SetCtlTypeId(ctlTypeId.value); // 控件类型
        pobjDGRegionFldsEN.SetDgFuncTypeId(dgFuncTypeId.value); // Dg功能类型
        pobjDGRegionFldsEN.SetIsVisible(isVisible.value); // 是否显示
        pobjDGRegionFldsEN.SetIsNeedSort(isNeedSort.value); // 是否需要排序
        pobjDGRegionFldsEN.SetIsTransToChkBox(isTransToChkBox.value); // 是否转换成CheckBox
        pobjDGRegionFldsEN.SetToolTipText(toolTipText.value); // 提示文字
        pobjDGRegionFldsEN.SetIsFuncFld(isFuncFld.value); // 是否功能字段
        pobjDGRegionFldsEN.SetInUse(true); // 是否在用
        pobjDGRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjDGRegionFldsEN.SetIsDefaultSort(isDefaultSort.value); // 是否默认排序
        pobjDGRegionFldsEN.SetSeqNum(Number(seqNum.value)); // 序号
        pobjDGRegionFldsEN.SetMemo(memo.value); // 说明
        pobjDGRegionFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjDGRegionFldsEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjDGRegionFldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDGRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromDGRegionFldsObj(pobjDGRegionFldsEN: clsDGRegionFldsEN) {
        fldId.value = pobjDGRegionFldsEN.fldId; // 表字段
        outFldId.value = pobjDGRegionFldsEN.outFldId; // OutFldId
        sortExpression.value = pobjDGRegionFldsEN.sortExpression; // 排序表达式
        headerText.value = pobjDGRegionFldsEN.headerText; // 列头
        ctlTypeId.value = pobjDGRegionFldsEN.ctlTypeId; // 控件类型
        dgFuncTypeId.value = pobjDGRegionFldsEN.dgFuncTypeId; // Dg功能类型
        isVisible.value = pobjDGRegionFldsEN.isVisible; // 是否显示
        isNeedSort.value = pobjDGRegionFldsEN.isNeedSort; // 是否需要排序
        isTransToChkBox.value = pobjDGRegionFldsEN.isTransToChkBox; // 是否转换成CheckBox
        toolTipText.value = pobjDGRegionFldsEN.toolTipText; // 提示文字
        isFuncFld.value = pobjDGRegionFldsEN.isFuncFld; // 是否功能字段
        isDefaultSort.value = pobjDGRegionFldsEN.isDefaultSort; // 是否默认排序
        seqNum.value = pobjDGRegionFldsEN.seqNum; // 序号
        memo.value = pobjDGRegionFldsEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        fldId.value = '0';
        outFldId.value = '0';
        sortExpression.value = '';
        headerText.value = '';
        ctlTypeId.value = '0';
        dgFuncTypeId.value = '0';
        isVisible.value = false;
        isNeedSort.value = false;
        isTransToChkBox.value = false;
        toolTipText.value = '';
        isFuncFld.value = false;
        isDefaultSort.value = false;
        seqNum.value = 0;
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
              if (['02', '03', '06'].indexOf(clsDGRegionFldsEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsDGRegionFldsEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (DGRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsDGRegionFldsEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In DGRegionFlds_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (DGRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsDGRegionFldsEN._CurrTabName,
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
      const strTitle = ref('DG区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<DGRegionFlds_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: DGRegionFlds_EditEx) => {
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
        GetEditDataDGRegionFldsObj,
        ShowDataFromDGRegionFldsObj,
        Clear,
        btnSubmit_Click,
        fldId,
        outFldId,
        sortExpression,
        headerText,
        ctlTypeId,
        dgFuncTypeId,
        isVisible,
        isNeedSort,
        isTransToChkBox,
        toolTipText,
        isFuncFld,
        inUse,
        regionId,
        isDefaultSort,
        seqNum,
        memo,
        updDate,
        updUser,
        arrvFieldTab_Sim,
        arrCtlType,
        arrDgFuncType,
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
      btnDGRegionFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        DGRegionFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlFldId_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在事件函数中重写该函数!');
      },
      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlOutFldId_SelectedIndexChanged(e: Event) {
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
