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
                style="width: 350px"
                @change="ddlCtlTypeId_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                  {{ item.ctlTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trStyleName">
            <td class="text-right">
              <label
                id="lblStyleName"
                name="lblStyleName"
                class="col-form-label text-right"
                style="width: 90px"
                >样式名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStyleName"
                v-model="styleName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trStyleDesc">
            <td class="text-right">
              <label
                id="lblStyleDesc"
                name="lblStyleDesc"
                class="col-form-label text-right"
                style="width: 90px"
                >样式描述
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStyleDesc"
                v-model="styleDesc"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trStyleContent">
            <td class="text-right">
              <label
                id="lblStyleContent"
                name="lblStyleContent"
                class="col-form-label text-right"
                style="width: 90px"
                >样式内容
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStyleContent"
                v-model="styleContent"
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
      <a-button id="btnCancelcss_Style" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitcss_Style"
        type="primary"
        @click="btncss_Style_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import css_Style_EditEx from '@/views/CssManage/css_Style_EditEx';
  import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';
  import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import { CtlType_GetArrCtlTypeByIsVisible } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import { refDivEdit } from '@/views/CssManage/css_StyleVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, Is0EqEmpty, IsNullOrEmpty, IsNullOrEmptyEq0 } from '@/ts/PubFun/clsString';
  import { css_Style_Edit } from '@/viewsBase/CssManage/css_Style_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'CssStyleEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const styleId = ref('');
      const ctlTypeId = ref('');
      const styleName = ref('');
      const styleDesc = ref('');
      const styleContent = ref('');
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const bolIsVisible_Giving = false; //给定值

        arrCtlType.value = await CtlType_GetArrCtlTypeByIsVisible(bolIsVisible_Giving); //编辑区域
        ctlTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcss_StyleEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacss_StyleObj() {
        const pobjcss_StyleEN = new clscss_StyleEN();
        pobjcss_StyleEN.SetStyleId(styleId.value); // 样式ID
        pobjcss_StyleEN.SetCtlTypeId(Is0EqEmpty(ctlTypeId.value)); // 控件类型
        pobjcss_StyleEN.SetStyleName(styleName.value); // 样式名称
        pobjcss_StyleEN.SetStyleDesc(styleDesc.value); // 样式描述
        pobjcss_StyleEN.SetStyleContent(styleContent.value); // 样式内容
        pobjcss_StyleEN.SetMemo(memo.value); // 说明
        pobjcss_StyleEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcss_StyleEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjcss_StyleEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcss_StyleEN">表实体类对象</param>
       **/
      async function ShowDataFromcss_StyleObj(pobjcss_StyleEN: clscss_StyleEN) {
        styleId.value = pobjcss_StyleEN.styleId; // 样式ID

        try {
          ctlTypeId.value = IsNullOrEmptyEq0(pobjcss_StyleEN.ctlTypeId); // 控件类型
        } catch (e) {}

        styleName.value = pobjcss_StyleEN.styleName; // 样式名称
        styleDesc.value = pobjcss_StyleEN.styleDesc; // 样式描述
        styleContent.value = pobjcss_StyleEN.styleContent; // 样式内容
        memo.value = pobjcss_StyleEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        styleId.value = '';
        ctlTypeId.value = '0';
        styleName.value = '';
        styleDesc.value = '';
        styleContent.value = '';
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
              if (['02', '03', '06'].indexOf(clscss_StyleEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (css_Style_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscss_StyleEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (css_Style_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscss_StyleEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In css_Style_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (css_Style_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clscss_StyleEN._CurrTabName,
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
      const strTitle = ref('css_Style编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<css_Style_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: css_Style_EditEx) => {
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
        GetEditDatacss_StyleObj,
        ShowDataFromcss_StyleObj,
        Clear,
        btnSubmit_Click,
        styleId,
        ctlTypeId,
        styleName,
        styleDesc,
        styleContent,
        memo,
        updDate,
        updUser,
        arrCtlType,
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
      btncss_Style_Edit_Click(strCommandName: string, strKeyId: string) {
        css_Style_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlCtlTypeId_SelectedIndexChanged(e: Event) {
        console.log(e);
        // const strThisFuncName = this.ddlCtlTypeId_SelectedIndexChanged.name;
        //alert('请在扩展层:css_Style_EditExEx中重写该函数！');
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
