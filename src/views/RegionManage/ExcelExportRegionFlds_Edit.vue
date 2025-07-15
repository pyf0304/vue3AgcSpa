<template>
  <!-- 编辑层 -->
  <div>
    <template v-if="isDialog">
      <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
        <!-- 编辑层 -->
        <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
          <table
            id="tabEdit"
            style="width: 600px"
            class="table table-bordered table-hover table td table-sm"
          >
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
                  style="width: 250px"
                  @change="ddlFldId_SelectedIndexChanged($event)"
                >
                  <option
                    v-for="(item, index) in arrvFieldTab_Sim"
                    :key="index"
                    :value="item.fldId"
                  >
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
                  <option
                    v-for="(item, index) in arrvFieldTab_Sim_OutFldId"
                    :key="index"
                    :value="item.fldId"
                  >
                    {{ item.fldName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trColCaption">
              <td class="text-right">
                <label
                  id="lblColCaption"
                  name="lblColCaption"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >列标题
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtColCaption"
                  v-model="colCaption"
                  class="form-control form-control-sm"
                  style="width: 250px"
                />
              </td>
            </tr>
            <tr id="trSeqNum">
              <td class="text-right">
                <label
                  id="lblSeqNum"
                  name="lblSeqNum"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >字段序号
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtSeqNum"
                  v-model.number="seqNum"
                  class="form-control form-control-sm"
                  style="width: 250px"
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
                  style="width: 250px"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="modal-footer">
          <button
            id="btnCancelDGRegionFlds"
            type="button"
            class="btn btn-default"
            data-dismiss="modal"
            >{{ strCancelButtonText }}</button
          >
          <button
            id="btnSubmitDGRegionFlds"
            type="button"
            class="btn btn-primary"
            @click="btnExcelExportRegionFlds_Edit_Click('Submit', '')"
            >{{ strSubmitButtonText }}</button
          >
        </div>
      </a-modal>
    </template>
    <template v-else>
      <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
        <table
          id="tabEdit"
          style="width: 333px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr id="trOK">
            <td colspan="4" class="text-right">
              <button
                id="btnSubmitExcelExportRegionFlds"
                type="button"
                class="btn btn-primary"
                @click="btnExcelExportRegionFlds_Edit_Click('Submit', '')"
                >{{ strSubmitButtonText }}</button
              >
              <button
                id="btnCancelExcelExportRegionFlds"
                type="button"
                class="btn btn-primary disable"
                style="visibility: hidden"
                @click="btnExcelExportRegionFlds_Edit_Click('Cancel', '')"
                >取消</button
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
              >
                字段
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFldId"
                v-model="fldId"
                class="form-control form-control-sm"
                style="width: 230px"
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
                class="col-form-label-sm text-right"
                style="width: 85px"
              >
                Out字段
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlOutFldId"
                v-model="outFldId"
                class="form-control form-control-sm"
                style="width: 230px"
                @change="ddlOutFldId_SelectedIndexChanged($event)"
              >
                <option v-for="(item, index) in arrvFieldTab_Sim" :key="index" :value="item.fldId">
                  {{ item.fldName }}
                </option></select
              >
            </td>
          </tr>

          <tr id="trDataPropertyName">
            <td class="text-right">
              <label
                id="lblDataPropertyName"
                name="lblDataPropertyName"
                class="col-form-label-sm text-right"
                style="width: 85px"
              >
                数据属性名
              </label>
            </td>
            <td class="text-left">
              <span id="lblDataPropertyName_e" class="col-form-label-sm text-right"> </span>
            </td>
          </tr>
          <tr id="trDnPathId">
            <td id="tdDnPathId" colspan="2" class="text-left"> </td>
          </tr>

          <tr id="trColCaption">
            <td class="text-right">
              <label
                id="lblColCaption"
                name="lblColCaption"
                class="col-form-label text-right"
                style="width: 90px"
              >
                列标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtColCaption"
                v-model="colCaption"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>
          <tr id="trSeqNum">
            <td class="text-right">
              <label
                id="lblSeqNum"
                name="lblSeqNum"
                class="col-form-label text-right"
                style="width: 90px"
              >
                字段序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSeqNum"
                v-model.number="seqNum"
                class="form-control form-control-sm"
                style="width: 230px"
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
              >
                说明
              </label>
            </td>
            <td class="text-left" colSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>
        </table>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { Format, Is0EqEmpty, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import {
    refDivEdit,
    RegionId_Static,
    TabId_Static,
  } from '@/views/RegionManage/ExcelExportRegionFldsVueShare';

  import ExcelExportRegionFlds_EditEx from '@/views/RegionManage/ExcelExportRegionFlds_EditEx';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { useUserStore } from '@/store/modulesShare/user';
  import {
    vFieldTab_SimEx_GetArrvFieldTab_Sim4ExtendByTabIdCache,
    vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache,
  } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { clsExcelExportRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsEN';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { ExcelExportRegionFlds_Edit } from '@/viewsBase/RegionManage/ExcelExportRegionFlds_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import {
    DnPathEx_CreateGraph4DnPathCache,
    DnPathEx_ShowDnPath,
  } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
  import { PubFun4Web_ShowOutFldName } from '@/ts/FunClass/clsPubFun4Web';
  import { vDataNode_SimEx_ClearDnPath } from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
  import {
    PrjTabFldEx_CopyToEx,
    PrjTabFldEx_FuncMapByFldName,
    PrjTabFldEx_GetObjByFldIdCache,
  } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
  import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
  import { ExcelExportRegionFldsEx_GetRecCountByCondInUseCache } from '@/ts/L3ForWApiEx/RegionManage/clsExcelExportRegionFldsExWApi';
  import { DnPath_GetObjByDnPathIdAsync } from '@/ts/L3ForWApi/AIModule/clsDnPathWApi';
  import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
  import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
  import { getTdObjByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
  export default defineComponent({
    name: 'ExcelExportRegionFldsEdit',
    components: {
      // 组件注册
    },
    props: {
      isDialog: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const userStore = useUserStore();
      const fldId = ref('');
      const outFldId = ref('');
      const colCaption = ref('');
      const seqNum = ref(0);
      const memo = ref('');
      const regionId = ref('');
      const inUse = ref('0');
      const updDate = ref('');
      const updUser = ref('');
      const dnPathId = ref('');
      const isUseFun = ref('false');

      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrvFieldTab_Sim_OutFldId = ref<clsvFieldTab_SimEN[] | null>([]);
      onMounted(async () => {
        // await BindDdl4EditRegionInDiv();
      });
      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        // await this.SetDdl_FldIdInDivEx(strTabId, strPrjId); //编辑区域
        if (strTabId_Static == '') {
          const strMsg = Format('ExcelExportRegionFldsEdit.TabId_Static.value为空,请检查！');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        arrvFieldTab_Sim.value = await vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache(
          strTabId_Static,
        ); //编辑区域
        fldId.value = '0';
        // await this.SetDdl_OutFldIdInDivEx(strTabId);
        arrvFieldTab_Sim_OutFldId.value =
          await vFieldTab_SimEx_GetArrvFieldTab_Sim4ExtendByTabIdCache(strTabId_Static); //编辑区域

        outFldId.value = '0';
        // public async B1indDdl4EditRegionInDiv() {
        // 在此处放置用户代码以初始化页面
        const strCmPrjId = clsPrivateSessionStorage.cmPrjId; //定义条件字段
        if (strCmPrjId == '9991') {
          const strMsg = Format(
            "ExcelExportRegionFlds_Edit.PrjIdCache='9991'，还没有被赋正确的值,请检查!",
          );
          throw strMsg;
        }

        const objCMProjects = await CMProject_GetObjByCmPrjIdCache(
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objCMProjects == null) {
          const strMsg = Format(
            '在CM项目Id:[{0}]中，没有相应CM项目，请检查！',
            clsPrivateSessionStorage.cmPrjId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        ExcelExportRegionFlds_EditEx.objCMProjects = objCMProjects;
      }
      /// <summary>
      /// 设置绑定下拉框，针对字段:[fldId]
      /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
      /// </summary>
      // async function SetDdl_FldIdInDivEx(strTabId: string, strPrjId: string) {
      //   //定义条件字段
      //   //const strPrjId = "";//定义条件字段
      //   await vFieldTab_SimEx_BindDdl_FldIdInDivExCache(
      //     divVarSet.refDivEdit,
      //     'ddlFldId',
      //     strTabId,
      //     strPrjId,
      //   ); //编辑区域
      // }
      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjExcelExportRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataExcelExportRegionFldsObj() {
        const pobjExcelExportRegionFldsEN = new clsExcelExportRegionFldsEN();
        pobjExcelExportRegionFldsEN.SetFldId(Is0EqEmpty(fldId.value)); // 字段
        pobjExcelExportRegionFldsEN.SetOutFldId(outFldId.value); // OutFldId
        pobjExcelExportRegionFldsEN.SetColCaption(colCaption.value); // 列标题
        pobjExcelExportRegionFldsEN.SetSeqNum(Number(seqNum.value)); // 字段序号
        pobjExcelExportRegionFldsEN.SetMemo(memo.value); // 说明
        pobjExcelExportRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjExcelExportRegionFldsEN.SetInUse(true); // 是否在用
        pobjExcelExportRegionFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjExcelExportRegionFldsEN.SetUpdUser(userStore.getUserId); // 修改者

        pobjExcelExportRegionFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
        return pobjExcelExportRegionFldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjExcelExportRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromExcelExportRegionFldsObj(
        pobjExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
      ) {
        fldId.value = pobjExcelExportRegionFldsEN.fldId; // 字段
        outFldId.value = pobjExcelExportRegionFldsEN.outFldId; // OutFldId
        colCaption.value = pobjExcelExportRegionFldsEN.colCaption; // 列标题
        seqNum.value = pobjExcelExportRegionFldsEN.seqNum; // 字段序号
        memo.value = pobjExcelExportRegionFldsEN.memo; // 说明

        // const strThisFuncName = this.GetDataFromExcelExportRegionFldsClass.name;
        fldId.value = pobjExcelExportRegionFldsEN.fldId; // 字段
        outFldId.value = pobjExcelExportRegionFldsEN.outFldId; // 表字段
        await PubFun4Web_ShowOutFldName(
          refDivEdit.value,
          'lblDataPropertyName_e',
          fldId.value,
          outFldId.value,
        );
        try {
          /*this.outDataNodeId = pobjExcelExportRegionFldsEN.outDataNodeId;// 数据结点*/
          if (IsNullOrEmpty(outFldId.value) == false) {
            //this.dnPathId = pobjExcelExportRegionFldsEN.dnPathId;
            await DnPathEx_ShowDnPath(
              refDivEdit.value,
              'tdDnPathId',
              TabId_Static.value,
              fldId.value,
              outFldId.value,
              clsPrivateSessionStorage.cmPrjId,
            );
          } else {
            vDataNode_SimEx_ClearDnPath(refDivEdit.value, 'tdDnPathId');
          }
        } catch (e) {}

        //this.dataPropertyName = pobjExcelExportRegionFldsEN.dataPropertyName;// 数据属性名
        colCaption.value = pobjExcelExportRegionFldsEN.colCaption; // 列标题
        seqNum.value = pobjExcelExportRegionFldsEN.seqNum; // 字段序号
        memo.value = pobjExcelExportRegionFldsEN.memo; // 说明
        //this.regionId = pobjExcelExportRegionFldsEN.regionId;// 区域Id
        // this.prjId = pobjExcelExportRegionFldsEN.prjId;// 工程ID
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        fldId.value = '0';
        outFldId.value = '0';
        colCaption.value = '';
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
              if (['02', '03', '06'].indexOf(clsExcelExportRegionFldsEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsExcelExportRegionFldsEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (
                    ExcelExportRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01
                  ) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsExcelExportRegionFldsEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In ExcelExportRegionFlds_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (ExcelExportRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsExcelExportRegionFldsEN._CurrTabName,
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

      const keyId = ref('');
      const objPage_Edit = ref<ExcelExportRegionFlds_EditEx>();

      const strTitle = ref('Excel导出区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelExcelExportRegionFlds':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitExcelExportRegionFlds':
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
          case 'btnCancelExcelExportRegionFlds':
            return strCancelButtonText.value;
          case 'btnSubmitExcelExportRegionFlds':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
          BindDdl4EditRegionInDiv();
        });
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
        GetEditDataExcelExportRegionFldsObj,
        ShowDataFromExcelExportRegionFldsObj,
        Clear,
        btnSubmit_Click,
        fldId,
        outFldId,
        colCaption,
        seqNum,
        memo,
        regionId,
        inUse,
        updDate,
        updUser,
        arrvFieldTab_Sim,
        arrvFieldTab_Sim_OutFldId,
        BindDdl4EditRegionInDiv,
        SetButtonText,
        GetButtonText,
        dnPathId,
        isUseFun,
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
        //ExcelExportRegionFlds_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnExcelExportRegionFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        ExcelExportRegionFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
      (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
    */
      async ddlFldId_SelectedIndexChanged(e: Event) {
        console.log('ddlFldId_SelectedIndexChanged', e);
        const vDataNode_SimStore = usevDataNode_SimStore();
        //alert('请在扩展层:EditRegionFlds_EditEx中重写该函数！');
        const strFldId = this.fldId;
        const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(TabId_Static.value, strFldId);
        if (objPrjTabFld.isForExtendClass == true) {
          const objPrjTabFldEx = PrjTabFldEx_CopyToEx(objPrjTabFld);
          PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_FldName, objPrjTabFldEx);
          PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_Caption, objPrjTabFldEx);

          if (IsNullOrEmpty(objPrjTabFld.dnPathId) == true) return;
          const objDnPath = await DnPath_GetObjByDnPathIdAsync(objPrjTabFldEx.dnPathId);
          if (objDnPath == null) return;
          this.dnPathId = objDnPath.dnPathId;
          const objDataNode_In = await vDataNode_SimStore.getObj(objDnPath.inDataNodeId);
          if (objDataNode_In == null) return;
          this.fldId = objDataNode_In.fldId;
          this.outFldId = strFldId;

          //this.outDataNodeId = objDnPath.outDataNodeId;
          //this.dataPropertyName = objPrjTabFldEx.fldName;
          this.colCaption = objPrjTabFldEx.caption;
          //this.ctlTypeId = enumCtlType.Label_10;
          //this.width = 100;
          //this.colSpan = 1;
          const intRecNum_InUSe = await ExcelExportRegionFldsEx_GetRecCountByCondInUseCache(
            RegionId_Static.value,
          );
          this.seqNum = intRecNum_InUSe + 1;
          await this.ShowDnPath4Exist(
            'tdDnPathId',
            objPrjTabFldEx.dnPathId,
            clsPrivateSessionStorage.cmPrjId,
          );
        }
        await PubFun4Web_ShowOutFldName(
          this.refDivEdit,
          'lblDataPropertyName_e',
          this.fldId,
          this.outFldId,
        );
      },
      /* 函数功能:系统生成的Change事件函数
      (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
    */
      async ddlOutFldId_SelectedIndexChanged(e: Event) {
        console.log('ddlOutFldId_SelectedIndexChanged', e);
        //alert('请在扩展层:DataNode_EditEx中重写该函数！');
        if (IsNullOrEmpty(clsPrivateSessionStorage.cmPrjId) == true) return;
        const strOutFldId = this.outFldId;
        if (IsNullOrEmpty(strOutFldId) == true) return;

        try {
          const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(
            TabId_Static.value,
            strOutFldId,
          );
          if (objPrjTabFld != null) {
            this.fldId = objPrjTabFld.inFldId;
          }
          await PubFun4Web_ShowOutFldName(
            this.refDivEdit,
            'lblDataPropertyName_e',
            this.fldId,
            this.outFldId,
          );
        } catch (e: any) {
          console.log(e);
        }
        const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
          strOutFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objFieldTab == null) {
          const strMsg = Format(
            '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
            clsPrivateSessionStorage.currSelPrjName,
            strOutFldId,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        //if (string.IsNullOrEmpty( txtDataPropertyName.text) == true)
        //{
        //this.dataPropertyName = objFieldTab.fldName;
        this.colCaption = objFieldTab.caption;
        if (this.seqNum == 0) this.seqNum = 1;
        this.isUseFun = 'true';
        const dnPathId = await DnPathEx_ShowDnPath(
          this.refDivEdit,
          'tdDnPathId',
          TabId_Static.value,
          this.fldId,
          this.outFldId,
          clsPrivateSessionStorage.cmPrjId,
        );

        this.dnPathId = dnPathId;
      },
      async ShowDnPath4Exist(
        strTdId: string,
        strDnPathId: string,
        strCmPrjId: string,
      ): Promise<string> {
        console.log(strCmPrjId);
        const objDnPath = await DnPath_GetObjByDnPathIdAsync(strDnPathId);
        if (objDnPath == null) return '';
        const divDnPath = await DnPathEx_CreateGraph4DnPathCache(objDnPath.dnPathId);
        const objTd = getTdObjByIdInDivObj(this.refDivEdit, strTdId);
        objTd.innerHTML = '';
        objTd.appendChild(divDnPath);
        return objDnPath.dnPathId;
      },
    },
  });
</script>
<style scoped></style>
