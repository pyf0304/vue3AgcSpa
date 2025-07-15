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
          <tr id="trTabId">
            <td class="text-right">
              <label
                id="lblTabId"
                name="lblTabId"
                class="col-form-label text-right"
                style="width: 90px"
                >表
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlTabId"
                v-model="tabId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                  {{ item.tabName }}
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
                >字段
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFldId"
                v-model="fldId"
                class="form-control form-control-sm"
                style="width: 400px"
                @change="ddlFldId_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trDataNodeName">
            <td class="text-right">
              <label
                id="lblDataNodeName"
                name="lblDataNodeName"
                class="col-form-label text-right"
                style="width: 90px"
                >结点名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDataNodeName"
                v-model="dataNodeName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trDataNodeTypeId">
            <td class="text-right">
              <label
                id="lblDataNodeTypeId"
                name="lblDataNodeTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >结点类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlDataNodeTypeId"
                v-model="dataNodeTypeId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrDataNodeType"
                  :key="index"
                  :value="item.dataNodeTypeId"
                >
                  {{ item.dataNodeTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trVersionNo">
            <td class="text-right">
              <label
                id="lblVersionNo"
                name="lblVersionNo"
                class="col-form-label text-right"
                style="width: 90px"
                >版本号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtVersionNo"
                v-model.number="versionNo"
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
      <a-button id="btnCancelDataNode" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitDataNode"
        type="primary"
        @click="btnDataNode_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import DataNode_EditEx from '@/views/AIModule/DataNode_EditEx';
  import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsDataNodeTypeEN } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import { vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { DataNodeType_GetArrDataNodeType } from '@/ts/L3ForWApi/AIModule/clsDataNodeTypeWApi';
  import {
    refDivEdit,
    PrjId_Session,
    CmPrjId_Local,
    TabId_Static,
  } from '@/views/AIModule/DataNodeVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format } from '@/ts/PubFun/clsString';
  import { DataNode_Edit } from '@/viewsBase/AIModule/DataNode_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'DataNodeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const dataNodeId = ref(0);
      const tabId = ref('');
      const fldId = ref('');
      const dataNodeName = ref('');
      const prjId = ref('');
      const dataNodeTypeId = ref('');
      const versionNo = ref(0);
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrDataNodeType = ref<clsDataNodeTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCmPrjId = CmPrjId_Local.value; //静态变量;//Session存储、local存储
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量

        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(strCmPrjId); //编辑区域
        tabId.value = '0';

        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        fldId.value = '0';

        arrDataNodeType.value = await DataNodeType_GetArrDataNodeType(); //编辑区域
        dataNodeTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjDataNodeEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataDataNodeObj() {
        const pobjDataNodeEN = new clsDataNodeEN();
        pobjDataNodeEN.SetDataNodeId(Number(dataNodeId.value)); // 数据结点Id
        pobjDataNodeEN.SetTabId(tabId.value); // 表
        pobjDataNodeEN.SetFldId(fldId.value); // 字段
        pobjDataNodeEN.SetDataNodeName(dataNodeName.value); // 结点名
        pobjDataNodeEN.SetPrjId(PrjId_Session.value); // 工程ID
        pobjDataNodeEN.SetDataNodeTypeId(dataNodeTypeId.value); // 结点类型
        pobjDataNodeEN.SetVersionNo(Number(versionNo.value)); // 版本号
        pobjDataNodeEN.SetMemo(memo.value); // 说明
        pobjDataNodeEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjDataNodeEN.SetUpdUser(userStore.getUserId); // 修改者
        return pobjDataNodeEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDataNodeEN">表实体类对象</param>
       **/
      async function ShowDataFromDataNodeObj(pobjDataNodeEN: clsDataNodeEN) {
        dataNodeId.value = pobjDataNodeEN.dataNodeId; // 数据结点Id
        tabId.value = pobjDataNodeEN.tabId; // 表
        fldId.value = pobjDataNodeEN.fldId; // 字段
        dataNodeName.value = pobjDataNodeEN.dataNodeName; // 结点名
        dataNodeTypeId.value = pobjDataNodeEN.dataNodeTypeId; // 结点类型
        versionNo.value = pobjDataNodeEN.versionNo; // 版本号
        memo.value = pobjDataNodeEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        dataNodeId.value = 0;
        tabId.value = '0';
        fldId.value = '0';
        dataNodeName.value = '';
        dataNodeTypeId.value = '0';
        versionNo.value = 0;
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
              if (['02', '03', '06'].indexOf(clsDataNodeEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsDataNodeEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (DataNode_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsDataNodeEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In DataNode_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (DataNode_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsDataNodeEN._CurrTabName,
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
      const strTitle = ref('数据结点编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<DataNode_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: DataNode_EditEx) => {
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
        GetEditDataDataNodeObj,
        ShowDataFromDataNodeObj,
        Clear,
        btnSubmit_Click,
        dataNodeId,
        tabId,
        fldId,
        dataNodeName,
        prjId,
        dataNodeTypeId,
        versionNo,
        memo,
        updDate,
        updUser,
        arrvPrjTab_Sim,
        arrvFieldTab_Sim,
        arrDataNodeType,
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
      btnDataNode_Edit_Click(strCommandName: string, strKeyId: string) {
        DataNode_EditEx.btnEdit_Click(strCommandName, Number(strKeyId));
      },

      /* 函数功能:系统生成的Change事件函数
  (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
*/
      async ddlFldId_SelectedIndexChanged(e: Event) {
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
