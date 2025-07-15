<template>
  <!-- 编辑层 -->

  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trDnPathId">
          <td class="text-right">
            <label
              id="lblDnPathId"
              name="lblDnPathId"
              class="col-form-label text-right"
              style="width: 90px"
              >DN路径Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDnPathId"
              v-model="dnPathId"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trDnPathName">
          <td class="text-right">
            <label
              id="lblDnPathName"
              name="lblDnPathName"
              class="col-form-label text-right"
              style="width: 90px"
              >DN路径名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDnPathName"
              v-model="dnPathName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trInDataNodeId">
          <td class="text-right">
            <label
              id="lblInDataNodeId"
              name="lblInDataNodeId"
              class="col-form-label text-right"
              style="width: 90px"
              >In数据结点Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlInDataNodeId"
              v-model.number="inDataNodeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrvDataNode_Sim"
                :key="index"
                :value="item.dataNodeId"
              >
                {{ item.dataNodeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trOutDataNodeId">
          <td class="text-right">
            <label
              id="lblOutDataNodeId"
              name="lblOutDataNodeId"
              class="col-form-label text-right"
              style="width: 90px"
              >Out数据结点Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOutDataNodeId"
              v-model.number="outDataNodeId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrvDataNode_Sim"
                :key="index"
                :value="item.dataNodeId"
              >
                {{ item.dataNodeName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trDnPathNodeLst">
          <td class="text-right">
            <label
              id="lblDnPathNodeLst"
              name="lblDnPathNodeLst"
              class="col-form-label text-right"
              style="width: 90px"
              >DN路径Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDnPathNodeLst"
              v-model="dnPathNodeLst"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trAssociationMappingId">
          <td class="text-right">
            <label
              id="lblAssociationMappingId"
              name="lblAssociationMappingId"
              class="col-form-label text-right"
              style="width: 90px"
              >关联关系映射Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlAssociationMappingId"
              v-model="associationMappingId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option
                v-for="(item, index) in arrAssociationMapping"
                :key="index"
                :value="item.associationMappingId"
              >
                {{ item.associationMappingName }}
              </option></select
            >
          </td>
        </tr>
        <tr id="trPrjId">
          <td class="text-right">
            <label
              id="lblPrjId"
              name="lblPrjId"
              class="col-form-label text-right"
              style="width: 90px"
              >工程ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPrjId"
              v-model="prjId"
              class="form-control form-control-sm"
              style="width: 400px"
            >
              <option v-for="(item, index) in arrProjects" :key="index" :value="item.prjId">
                {{ item.prjName }}
              </option></select
            >
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
              v-model="memo"
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
      <a-button id="btnCancelDnPath" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button id="btnSubmitDnPath" type="primary" @click="btnDnPath_Edit_Click('Submit', '')">{{
        strSubmitButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import DnPath_EditEx from '@/views/AIModule/DnPath_EditEx';
  import { clsDnPathEN } from '@/ts/L0Entity/AIModule/clsDnPathEN';
  import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
  import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
  import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
  import { vDataNode_Sim_GetArrvDataNode_SimByCmPrjId } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
  import { AssociationMapping_GetArrAssociationMapping } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
  import { Projects_GetArrProjects } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
  import { CmPrjId_Local, PrjId_Session, refDivEdit } from '@/views/AIModule/DnPathVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, Is0EqEmpty, IsNullOrEmpty, IsNullOrEmptyEq0 } from '@/ts/PubFun/clsString';
  import { DnPath_Edit } from '@/viewsBase/AIModule/DnPath_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'DnPathEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const dnPathId = ref('');
      const dnPathName = ref('');
      const inDataNodeId = ref(0);
      const outDataNodeId = ref(0);
      const dnPathNodeLst = ref('');
      const associationMappingId = ref('');
      const prjId = ref('');
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrvDataNode_Sim = ref<clsvDataNode_SimEN[] | null>([]);
      const arrAssociationMapping = ref<clsAssociationMappingEN[] | null>([]);
      const arrProjects = ref<clsProjectsEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const strPrjId = PrjId_Session.value; //静态变量;//Session存储、local存储
        arrvDataNode_Sim.value = await vDataNode_Sim_GetArrvDataNode_SimByCmPrjId(
          strCmPrjId,
          strPrjId,
        ); //编辑区域
        inDataNodeId.value = 0;

        outDataNodeId.value = 0;

        arrAssociationMapping.value = await AssociationMapping_GetArrAssociationMapping(); //编辑区域
        associationMappingId.value = '0';

        arrProjects.value = await Projects_GetArrProjects(); //编辑区域
        prjId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjDnPathEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataDnPathObj() {
        const pobjDnPathEN = new clsDnPathEN();
        pobjDnPathEN.SetDnPathId(dnPathId.value); // DN路径Id
        pobjDnPathEN.SetDnPathName(dnPathName.value); // DN路径名
        pobjDnPathEN.SetInDataNodeId(inDataNodeId.value); // In数据结点Id
        pobjDnPathEN.SetOutDataNodeId(outDataNodeId.value); // Out数据结点Id
        pobjDnPathEN.SetDnPathNodeLst(dnPathNodeLst.value); // DN路径Id
        pobjDnPathEN.SetAssociationMappingId(Is0EqEmpty(associationMappingId.value)); // 关联关系映射Id
        pobjDnPathEN.SetPrjId(Is0EqEmpty(prjId.value)); // 工程ID
        pobjDnPathEN.SetMemo(memo.value); // 说明
        pobjDnPathEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjDnPathEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjDnPathEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDnPathEN">表实体类对象</param>
       **/
      async function ShowDataFromDnPathObj(pobjDnPathEN: clsDnPathEN) {
        dnPathId.value = pobjDnPathEN.dnPathId; // DN路径Id
        dnPathName.value = pobjDnPathEN.dnPathName; // DN路径名
        inDataNodeId.value = pobjDnPathEN.inDataNodeId; // In数据结点Id
        outDataNodeId.value = pobjDnPathEN.outDataNodeId; // Out数据结点Id
        dnPathNodeLst.value = pobjDnPathEN.dnPathNodeLst; // DN路径Id
        associationMappingId.value = IsNullOrEmptyEq0(pobjDnPathEN.associationMappingId); // 关联关系映射Id
        prjId.value = IsNullOrEmptyEq0(pobjDnPathEN.prjId); // 工程ID
        memo.value = pobjDnPathEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        dnPathId.value = '';
        dnPathName.value = '';
        inDataNodeId.value = 0;
        outDataNodeId.value = 0;
        dnPathNodeLst.value = '';
        associationMappingId.value = '0';
        prjId.value = '0';
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
              if (['02', '03', '06'].indexOf(clsDnPathEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (DnPath_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsDnPathEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (DnPath_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsDnPathEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In DnPath_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (DnPath_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsDnPathEN._CurrTabName, keyId.value);
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
      const strTitle = ref('数据结点路径编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<DnPath_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: DnPath_EditEx) => {
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
          case 'btnCancelDnPath':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitDnPath':
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
          case 'btnCancelDnPath':
            return strCancelButtonText.value;
          case 'btnSubmitDnPath':
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
        GetEditDataDnPathObj,
        ShowDataFromDnPathObj,
        Clear,
        btnSubmit_Click,
        dnPathId,
        dnPathName,
        inDataNodeId,
        outDataNodeId,
        dnPathNodeLst,
        associationMappingId,
        prjId,
        memo,
        updDate,
        updUser,
        arrvDataNode_Sim,
        arrAssociationMapping,
        arrProjects,

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
        //DnPath_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnDnPath_Edit_Click(strCommandName: string, strKeyId: string) {
        DnPath_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped></style>
