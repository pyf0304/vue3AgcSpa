<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
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
              name="ddlCtlTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trFldDispUnitStyleId">
          <td class="text-right">
            <label
              id="lblFldDispUnitStyleId"
              name="lblFldDispUnitStyleId"
              class="col-form-label text-right"
              style="width: 90px"
              >字段显示单元样式Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldDispUnitStyleId"
              name="txtFldDispUnitStyleId"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trFldDispUnitStyleName">
          <td class="text-right">
            <label
              id="lblFldDispUnitStyleName"
              name="lblFldDispUnitStyleName"
              class="col-form-label text-right"
              style="width: 90px"
              >字段显示单元样式名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldDispUnitStyleName"
              name="txtFldDispUnitStyleName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trFldDispUnitStyleDesc">
          <td class="text-right">
            <label
              id="lblFldDispUnitStyleDesc"
              name="lblFldDispUnitStyleDesc"
              class="col-form-label text-right"
              style="width: 90px"
              >样式描述
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldDispUnitStyleDesc"
              name="txtFldDispUnitStyleDesc"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trStyleIdTitle">
          <td class="text-right">
            <label
              id="lblStyleIdTitle"
              name="lblStyleIdTitle"
              class="col-form-label text-right"
              style="width: 90px"
              >标题样式Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlStyleIdTitle"
              name="ddlStyleIdTitle"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trStyleIdContent">
          <td class="text-right">
            <label
              id="lblStyleIdContent"
              name="lblStyleIdContent"
              class="col-form-label text-right"
              style="width: 90px"
              >内容样式Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlStyleIdContent"
              name="ddlStyleIdContent"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trFldDispUnitStyleContent">
          <td class="text-right">
            <label
              id="lblFldDispUnitStyleContent"
              name="lblFldDispUnitStyleContent"
              class="col-form-label text-right"
              style="width: 90px"
              >样式内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldDispUnitStyleContent"
              name="txtFldDispUnitStyleContent"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trFldDispUnitFormat">
          <td class="text-right">
            <label
              id="lblFldDispUnitFormat"
              name="lblFldDispUnitFormat"
              class="col-form-label text-right"
              style="width: 90px"
              >字段显示单元格式
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFldDispUnitFormat"
              name="txtFldDispUnitFormat"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >说明
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <a-button id="btnCancelcss_FldDispUnitStyle" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitcss_FldDispUnitStyle"
        type="primary"
        @click="btncss_FldDispUnitStyle_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import css_FldDispUnitStyle_EditEx from '@/views/CssManage/css_FldDispUnitStyle_EditEx';
  import { clscss_FldDispUnitStyleEN } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleEN';
  import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';
  import { CtlType_GetArrCtlTypeByIsVisible } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { css_Style_GetArrcss_StyleByCtlTypeId } from '@/ts/L3ForWApi/CssManage/clscss_StyleWApi';
  import { CtlTypeId_Static, refDivEdit } from '@/views/CssManage/css_FldDispUnitStyleVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, Is0EqEmpty, IsNullOrEmpty, IsNullOrEmptyEq0 } from '@/ts/PubFun/clsString';
  import { css_FldDispUnitStyle_Edit } from '@/viewsBase/CssManage/css_FldDispUnitStyle_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'CssFldDispUnitStyleEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const ctlTypeId = ref('');
      const fldDispUnitStyleId = ref('');
      const fldDispUnitStyleName = ref('');
      const fldDispUnitStyleDesc = ref('');
      const styleIdTitle = ref('');
      const styleIdContent = ref('');
      const fldDispUnitStyleContent = ref('');
      const fldDispUnitFormat = ref('');
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);
      const arrcss_Style = ref<clscss_StyleEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const bolIsVisible_Giving = false; //给定值
        const strCtlTypeId_Static = CtlTypeId_Static.value; //静态变量;//静态变量

        arrCtlType.value = await CtlType_GetArrCtlTypeByIsVisible(bolIsVisible_Giving); //编辑区域
        ctlTypeId.value = '0';

        arrcss_Style.value = await css_Style_GetArrcss_StyleByCtlTypeId(strCtlTypeId_Static); //编辑区域
        styleIdTitle.value = '0';

        styleIdContent.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcss_FldDispUnitStyleEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacss_FldDispUnitStyleObj() {
        const pobjcss_FldDispUnitStyleEN = new clscss_FldDispUnitStyleEN();
        pobjcss_FldDispUnitStyleEN.SetCtlTypeId(Is0EqEmpty(ctlTypeId.value)); // 控件类型
        pobjcss_FldDispUnitStyleEN.SetFldDispUnitStyleId(fldDispUnitStyleId.value); // 字段显示单元样式Id
        pobjcss_FldDispUnitStyleEN.SetFldDispUnitStyleName(fldDispUnitStyleName.value); // 字段显示单元样式名称
        pobjcss_FldDispUnitStyleEN.SetFldDispUnitStyleDesc(fldDispUnitStyleDesc.value); // 样式描述
        pobjcss_FldDispUnitStyleEN.SetStyleIdTitle(Is0EqEmpty(styleIdTitle.value)); // 标题样式Id
        pobjcss_FldDispUnitStyleEN.SetStyleIdContent(Is0EqEmpty(styleIdContent.value)); // 内容样式Id
        pobjcss_FldDispUnitStyleEN.SetFldDispUnitStyleContent(fldDispUnitStyleContent.value); // 样式内容
        pobjcss_FldDispUnitStyleEN.SetFldDispUnitFormat(fldDispUnitFormat.value); // 字段显示单元格式
        pobjcss_FldDispUnitStyleEN.SetMemo(memo.value); // 说明
        pobjcss_FldDispUnitStyleEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcss_FldDispUnitStyleEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjcss_FldDispUnitStyleEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcss_FldDispUnitStyleEN">表实体类对象</param>
       **/
      async function ShowDataFromcss_FldDispUnitStyleObj(
        pobjcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
      ) {
        ctlTypeId.value = IsNullOrEmptyEq0(pobjcss_FldDispUnitStyleEN.ctlTypeId); // 控件类型

        if (IsNullOrEmpty(ctlTypeId.value) == false) {
          // await this.SetDdl_StyleIdTitleInDiv(ctlTypeId.value); //编辑区域
          // await this.SetDdl_StyleIdContentInDiv(ctlTypeId.value); //编辑区域
          styleIdTitle.value = IsNullOrEmptyEq0(pobjcss_FldDispUnitStyleEN.styleIdTitle); // 标题样式Id
          styleIdContent.value = IsNullOrEmptyEq0(pobjcss_FldDispUnitStyleEN.styleIdContent); // 内容样式Id
        } else {
          styleIdTitle.value = '0';
          styleIdContent.value = '0';
        }

        fldDispUnitStyleId.value = pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId; // 字段显示单元样式Id
        fldDispUnitStyleName.value = pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName; // 字段显示单元样式名称
        fldDispUnitStyleDesc.value = pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc; // 样式描述
        fldDispUnitStyleContent.value = pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent; // 样式内容
        fldDispUnitFormat.value = pobjcss_FldDispUnitStyleEN.fldDispUnitFormat; // 字段显示单元格式
        memo.value = pobjcss_FldDispUnitStyleEN.memo; // 说明

        // const strThisFuncName = this.GetDataFromcss_FldDispUnitStyleClass.name;
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        ctlTypeId.value = '0';
        fldDispUnitStyleId.value = '';
        fldDispUnitStyleName.value = '';
        fldDispUnitStyleDesc.value = '';
        styleIdTitle.value = '0';
        styleIdContent.value = '0';
        fldDispUnitStyleContent.value = '';
        fldDispUnitFormat.value = '';
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
              if (['02', '03', '06'].indexOf(clscss_FldDispUnitStyleEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (css_FldDispUnitStyle_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscss_FldDispUnitStyleEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (css_FldDispUnitStyle_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscss_FldDispUnitStyleEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In css_FldDispUnitStyle_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (css_FldDispUnitStyle_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clscss_FldDispUnitStyleEN._CurrTabName,
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
      const strTitle = ref('字段显示单元样式编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<css_FldDispUnitStyle_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: css_FldDispUnitStyle_EditEx) => {
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
          case 'btnCancelcss_FldDispUnitStyle':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitcss_FldDispUnitStyle':
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
          case 'btnCancelcss_FldDispUnitStyle':
            return strCancelButtonText.value;
          case 'btnSubmitcss_FldDispUnitStyle':
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
        GetEditDatacss_FldDispUnitStyleObj,
        ShowDataFromcss_FldDispUnitStyleObj,
        Clear,
        btnSubmit_Click,
        ctlTypeId,
        fldDispUnitStyleId,
        fldDispUnitStyleName,
        fldDispUnitStyleDesc,
        styleIdTitle,
        styleIdContent,
        fldDispUnitStyleContent,
        fldDispUnitFormat,
        memo,
        updDate,
        updUser,
        arrCtlType,
        arrcss_Style,

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
        //css_FldDispUnitStyle_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btncss_FldDispUnitStyle_Edit_Click(strCommandName: string, strKeyId: string) {
        css_FldDispUnitStyle_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
