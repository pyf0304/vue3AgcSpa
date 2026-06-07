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
          <tr id="trParentCodeTypeId">
            <td class="text-right">
              <label
                id="lblParentCodeTypeId"
                name="lblParentCodeTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >父代码类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlParentCodeTypeId"
                v-model="parentCodeTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrvCodeType_Sim"
                  :key="index"
                  :value="item.codeTypeId"
                >
                  {{ item.codeTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trChildCodeTypeId">
            <td class="text-right">
              <label
                id="lblChildCodeTypeId"
                name="lblChildCodeTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >子代码类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlChildCodeTypeId"
                v-model="childCodeTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrvCodeType_Sim"
                  :key="index"
                  :value="item.codeTypeId"
                >
                  {{ item.codeTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trCtRelationTypeId">
            <td class="text-right">
              <label
                id="lblCtRelationTypeId"
                name="lblCtRelationTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >关系类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCtRelationTypeId"
                v-model="ctRelationTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrCTRelationType"
                  :key="index"
                  :value="item.ctRelationTypeId"
                >
                  {{ item.relationTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trDescription">
            <td class="text-right">
              <label
                id="lblDescription"
                name="lblDescription"
                class="col-form-label text-right"
                style="width: 90px"
                >描述
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDescription"
                v-model="description"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelGC_CodeTypeRelation" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitGC_CodeTypeRelation"
        type="primary"
        @click="btnGC_CodeTypeRelation_Edit_Click('Submit', null)"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import GC_CodeTypeRelation_EditAiEx from '@/views/GeneCode/GC_CodeTypeRelation_EditAiEx';
  import {
    clsGC_CodeTypeRelationEN,
    GC_CodeTypeRelationKey,
  } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { clsCTRelationTypeEN } from '@/ts/L0Entity/GeneCode/clsCTRelationTypeEN';
  import { vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import { CTRelationType_GetArrCTRelationType } from '@/ts/L3ForWApi/GeneCode/clsCTRelationTypeWApi';
  import { refDivEdit, ProgLangTypeId_Static } from '@/views/GeneCode/GC_CodeTypeRelationVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { GC_CodeTypeRelation_EditAi } from '@/viewsBase/GeneCode/GC_CodeTypeRelation_EditAi';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'GCCodeTypeRelationEditAi',

    components: {
      // 组件注册
    },

    setup() {
      const userStore = useUserStore();
      const strTitle = ref('GC_代码类型关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<GC_CodeTypeRelation_EditAiEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const parentCodeTypeId = ref('');
      const childCodeTypeId = ref('');
      const ctRelationTypeId = ref('');
      const description = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrvCodeType_Sim = ref<clsvCodeType_SimEN[] | null>([]);
      const arrCTRelationType = ref<clsCTRelationTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strProgLangTypeId_Static = ProgLangTypeId_Static.value; //静态变量;//静态变量

        arrvCodeType_Sim.value = await vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(
          strProgLangTypeId_Static,
        ); //编辑区域
        parentCodeTypeId.value = '0';

        childCodeTypeId.value = '0';

        arrCTRelationType.value = await CTRelationType_GetArrCTRelationType(); //编辑区域
        ctRelationTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjGC_CodeTypeRelationEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataGC_CodeTypeRelationObj() {
        const pobjGC_CodeTypeRelationEN = new clsGC_CodeTypeRelationEN();
        pobjGC_CodeTypeRelationEN.SetParentCodeTypeId(Is0EqEmpty(parentCodeTypeId.value)); // 父代码类型
        pobjGC_CodeTypeRelationEN.SetChildCodeTypeId(Is0EqEmpty(childCodeTypeId.value)); // 子代码类型
        pobjGC_CodeTypeRelationEN.SetCtRelationTypeId(Is0EqEmpty(ctRelationTypeId.value)); // 关系类型
        pobjGC_CodeTypeRelationEN.SetDescription(description.value); // 描述
        pobjGC_CodeTypeRelationEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjGC_CodeTypeRelationEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjGC_CodeTypeRelationEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjGC_CodeTypeRelationEN">表实体类对象</param>
       **/
      async function ShowDataFromGC_CodeTypeRelationObj(
        pobjGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
      ) {
        parentCodeTypeId.value = IsNullOrEmptyEq0(pobjGC_CodeTypeRelationEN.parentCodeTypeId); // 父代码类型
        childCodeTypeId.value = IsNullOrEmptyEq0(pobjGC_CodeTypeRelationEN.childCodeTypeId); // 子代码类型
        ctRelationTypeId.value = IsNullOrEmptyEq0(pobjGC_CodeTypeRelationEN.ctRelationTypeId); // 关系类型
        description.value = pobjGC_CodeTypeRelationEN.description; // 描述
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        parentCodeTypeId.value = '0';
        childCodeTypeId.value = '0';
        ctRelationTypeId.value = '0';
        description.value = '';
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
              if (['02', '03', '06'].indexOf(clsGC_CodeTypeRelationEN._PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsGC_CodeTypeRelationEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (
                    GC_CodeTypeRelation_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01
                  ) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsGC_CodeTypeRelationEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In GC_CodeTypeRelation_EditAi.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (GC_CodeTypeRelation_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsGC_CodeTypeRelationEN._CurrTabName,
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

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: GC_CodeTypeRelation_EditAiEx) => {
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
        GetEditDataGC_CodeTypeRelationObj,
        ShowDataFromGC_CodeTypeRelationObj,
        Clear,
        btnSubmit_Click,
        parentCodeTypeId,
        childCodeTypeId,
        ctRelationTypeId,
        description,
        updDate,
        updUser,
        arrvCodeType_Sim,
        arrCTRelationType,
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
      btnGC_CodeTypeRelation_Edit_Click(
        strCommandName: string,
        key: GC_CodeTypeRelationKey | null,
      ) {
        const objPageEdit = this.objPage_Edit as GC_CodeTypeRelation_EditAiEx | undefined;
        if (objPageEdit == null) {
          const strMsg = '编辑页面初始化不成功,请联系管理员!(in btnGC_CodeTypeRelation_Edit_Click)';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (key == null || key.relationId == 0) {
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
