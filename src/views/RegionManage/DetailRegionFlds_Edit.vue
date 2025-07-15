<template>
  <!-- 编辑层 -->
  <div>
    <template v-if="isDialog">
      <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
        <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
          <table
            id="tabEdit"
            style="width: 400px"
            class="table table-bordered table-hover table td table-sm"
          >
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
                  style="width: 300px"
                  @change="ddlFldId_SelectedIndexChanged()"
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
                  @change="ddlOutFldId_SelectedIndexChanged()"
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
            <tr id="trLabelCaption">
              <td class="text-right">
                <label
                  id="lblLabelCaption"
                  name="lblLabelCaption"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >标签标题
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtLabelCaption"
                  v-model="labelCaption"
                  class="form-control form-control-sm"
                  style="width: 300px"
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
                  style="width: 300px"
                >
                  <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                    {{ item.ctlTypeName }}
                  </option></select
                >
              </td>
            </tr>
            <tr id="trWidth">
              <td class="text-right">
                <label
                  id="lblWidth"
                  name="lblWidth"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >宽
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtWidth"
                  v-model.number="width"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </td>
            </tr>
            <tr id="trColSpan">
              <td class="text-right">
                <label
                  id="lblColSpan"
                  name="lblColSpan"
                  class="col-form-label text-right"
                  style="width: 90px"
                  >跨列数
                </label>
              </td>
              <td class="text-left">
                <input
                  id="txtColSpan"
                  v-model.number="colSpan"
                  class="form-control form-control-sm"
                  style="width: 300px"
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
                  style="width: 300px"
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
                  style="width: 300px"
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
            @click="btnDetailRegionFlds_Edit_Click('Submit', '')"
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
          <tr id="trFldId">
            <td class="text-right" style="padding-right: 50px" colspan="2">
              <button
                id="btnSubmitDetailRegionFlds"
                type="button"
                class="btn btn-primary"
                @click="btnDetailRegionFlds_Edit_Click('Submit', '')"
                >{{ strSubmitButtonText }}</button
              >
              <button
                id="btnCancelDetailRegionFlds"
                type="button"
                class="btn btn-primary disable"
                style="visibility: hidden"
                @click="btnDetailRegionFlds_Edit_Click('Cancel', '')"
                >取消</button
              >
            </td>
          </tr>
          <tr id="trFldId">
            <td class="text-right">
              <label
                id="lblFldId"
                name="lblFldId"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                字段Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFldId"
                v-model="fldId"
                class="form-control form-control-sm"
                style="width: 230px"
                @change="ddlFldId_SelectedIndexChanged()"
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
                @change="ddlOutFldId_SelectedIndexChanged()"
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

          <tr id="trLabelCaption">
            <td class="text-right">
              <label
                id="lblLabelCaption"
                name="lblLabelCaption"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                标签标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLabelCaption"
                v-model="labelCaption"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>
          <tr id="trCtlTypeId">
            <td class="text-right">
              <label
                id="lblCtlTypeId"
                name="lblCtlTypeId"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                控件类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCtlTypeId"
                v-model="ctlTypeId"
                class="form-control form-control-sm"
                style="width: 230px"
              >
                <option v-for="(item, index) in arrCtlType" :key="index" :value="item.ctlTypeId">
                  {{ item.ctlTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trWidth">
            <td class="text-right">
              <label
                id="lblWidth"
                name="lblWidth"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                宽
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtWidth"
                v-model.number="width"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>
          <tr id="trColSpan">
            <td class="text-right">
              <label
                id="lblColSpan"
                name="lblColSpan"
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                跨列数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtColSpan"
                v-model.number="colSpan"
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
                class="col-form-label-sm text-right"
                style="width: 70px"
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
                class="col-form-label-sm text-right"
                style="width: 70px"
              >
                说明
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 230px"
              />
            </td>
          </tr>
        </table>

        <input id="hidDnPathId" type="hidden" />
        <input id="hidOpType" type="hidden" />
        <input id="hidKeyId" type="hidden" />
      </div>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import DetailRegionFlds_EditEx from '@/views/RegionManage/DetailRegionFlds_EditEx';
  import { clsDetailRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsEN';
  import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
  import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
  import {
    vFieldTab_SimEx_GetArrvFieldTab_Sim4ExtendByTabIdCache,
    vFieldTab_SimEx_GetArrvFieldTab_SimByTabIdCache,
  } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
  import { CtlType_GetArrCtlType } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
  import {
    refDivEdit,
    RegionId_Static,
    TabId_Static,
  } from '@/views/RegionManage/DetailRegionFldsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { DetailRegionFlds_Edit } from '@/viewsBase/RegionManage/DetailRegionFlds_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { PubFun4Web_ShowOutFldName } from '@/ts/FunClass/clsPubFun4Web';
  import { vDataNode_SimEx_ClearDnPath } from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
  import {
    DnPathEx_CreateGraph4DnPathCache,
    DnPathEx_ShowDnPath,
  } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';
  import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
  import { PrjTabFld_FuncMapByFldName } from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';
  import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
  import {
    PrjTabFldEx_CopyToEx,
    PrjTabFldEx_GetObjByFldIdCache,
  } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
  import { DnPath_GetObjByDnPathIdAsync } from '@/ts/L3ForWApi/AIModule/clsDnPathWApi';
  import { DetailRegionFldsEx_GetRecCountByCondInUseCache } from '@/ts/L3ForWApiEx/RegionManage/clsDetailRegionFldsExWApi';
  import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
  import { getTdObjByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';

  export default defineComponent({
    name: 'DetailRegionFldsEdit',
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
      const regionId = ref('');
      const labelCaption = ref('');
      const ctlTypeId = ref('');
      const width = ref(0);
      const colSpan = ref(0);
      const seqNum = ref(0);
      const memo = ref('');
      const inUse = ref('0');
      const updUser = ref('');
      const updDate = ref('');
      const dnPathId = ref('');
      const isUseFun = ref(false);
      const arrvFieldTab_Sim = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrvFieldTab_Sim_OutFldId = ref<clsvFieldTab_SimEN[] | null>([]);
      const arrCtlType = ref<clsCtlTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strTabId_Static = TabId_Static.value; //静态变量;//静态变量
        if (strTabId_Static == '') {
          const strMsg = Format('DetailRegionFldsEdit.TabId_Static.value为空,请检查！');
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

        arrCtlType.value = await CtlType_GetArrCtlType(); //编辑区域
        ctlTypeId.value = '0';

        // 在此处放置用户代码以初始化页面
        const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
        if (strPrjId == '9991') {
          const strMsg = Format(
            "DetailRegionFlds_Edit.PrjIdCache='9991'，还没有被赋正确的值,请检查!",
          );
          throw strMsg;
        }
        const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
        const objCMProjects = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);

        if (objCMProjects == null) {
          const strMsg = Format('在CM项目Id:[{0}]中，没有相应CM项目，请检查！', strCmPrjId);
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        DetailRegionFlds_EditEx.objCMProjects = objCMProjects;

        // await this.SetDdl_FldIdInDivEx(strTabId, strPrjId); //编辑区域
      }

      // /// <summary>
      // /// 设置绑定下拉框，针对字段:[fldId]
      // /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TSInDiv)
      // /// </summary>
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
       * @param pobjDetailRegionFldsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataDetailRegionFldsObj() {
        const pobjDetailRegionFldsEN = new clsDetailRegionFldsEN();
        pobjDetailRegionFldsEN.SetFldId(fldId.value); // 字段Id
        pobjDetailRegionFldsEN.SetOutFldId(outFldId.value); // OutFldId
        pobjDetailRegionFldsEN.SetRegionId(RegionId_Static.value); // 区域Id
        pobjDetailRegionFldsEN.SetLabelCaption(labelCaption.value); // 标签标题
        pobjDetailRegionFldsEN.SetCtlTypeId(ctlTypeId.value); // 控件类型
        pobjDetailRegionFldsEN.SetWidth(Number(width.value)); // 宽
        pobjDetailRegionFldsEN.SetColSpan(Number(colSpan.value)); // 跨列数
        pobjDetailRegionFldsEN.SetSeqNum(Number(seqNum.value)); // 字段序号
        pobjDetailRegionFldsEN.SetMemo(memo.value); // 说明
        pobjDetailRegionFldsEN.SetInUse(true); // 是否在用
        pobjDetailRegionFldsEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjDetailRegionFldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期

        pobjDetailRegionFldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID

        return pobjDetailRegionFldsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjDetailRegionFldsEN">表实体类对象</param>
       **/
      async function ShowDataFromDetailRegionFldsObj(
        pobjDetailRegionFldsEN: clsDetailRegionFldsEN,
      ) {
        // const strThisFuncName = this.GetDataFromDetailRegionFldsClass.name;
        fldId.value = pobjDetailRegionFldsEN.fldId; // 字段Id
        outFldId.value = pobjDetailRegionFldsEN.outFldId; // OutFldId
        await PubFun4Web_ShowOutFldName(
          refDivEdit.value,
          'lblDataPropertyName_e',
          fldId.value,
          outFldId.value,
        );
        //this.regionId = pobjDetailRegionFldsEN.regionId;// 区域Id
        try {
          //this.outDataNodeId = pobjDetailRegionFldsEN.outDataNodeId;// Out数据结点
          if (IsNullOrEmpty(outFldId.value) == false) {
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
        //this.dataPropertyName = pobjDetailRegionFldsEN.dataPropertyName;// 数据属性名
        labelCaption.value = pobjDetailRegionFldsEN.labelCaption; // 标签标题
        ctlTypeId.value = pobjDetailRegionFldsEN.ctlTypeId; // 控件类型

        width.value = pobjDetailRegionFldsEN.width; // 宽

        colSpan.value = pobjDetailRegionFldsEN.colSpan; // 跨列数
        seqNum.value = pobjDetailRegionFldsEN.seqNum; // 字段序号
        memo.value = pobjDetailRegionFldsEN.memo; // 说明

        //this.inUse = pobjDetailRegionFldsEN.inUse;// 是否在用
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        fldId.value = '0';
        outFldId.value = '0';
        labelCaption.value = '';
        ctlTypeId.value = '0';
        width.value = 0;
        colSpan.value = 0;
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
              if (['02', '03', '06'].indexOf(clsDetailRegionFldsEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsDetailRegionFldsEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (DetailRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsDetailRegionFldsEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In DetailRegionFlds_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (DetailRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsDetailRegionFldsEN._CurrTabName,
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
      const strTitle = ref('详细区域字段编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<DetailRegionFlds_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: DetailRegionFlds_EditEx) => {
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
          case 'btnCancelDetailRegionFlds':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitDetailRegionFlds':
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
          case 'btnCancelDetailRegionFlds':
            return strCancelButtonText.value;
          case 'btnSubmitDetailRegionFlds':
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
        GetEditDataDetailRegionFldsObj,
        ShowDataFromDetailRegionFldsObj,
        Clear,
        btnSubmit_Click,
        fldId,
        outFldId,
        regionId,
        labelCaption,
        ctlTypeId,
        width,
        colSpan,
        seqNum,
        memo,
        inUse,
        updUser,
        updDate,
        arrvFieldTab_Sim,
        arrvFieldTab_Sim_OutFldId,
        arrCtlType,

        SetButtonText,
        GetButtonText,
        dnPathId,
        isUseFun,
        BindDdl4EditRegionInDiv,
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
        //DetailRegionFlds_EditEx.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnDetailRegionFlds_Edit_Click(strCommandName: string, strKeyId: string) {
        DetailRegionFlds_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
      (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
    */
      async ddlFldId_SelectedIndexChanged() {
        const vDataNode_SimStore = usevDataNode_SimStore();
        //alert('请在扩展层:EditRegionFlds_EditEx中重写该函数！');
        const strFldId = this.fldId;
        const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(TabId_Static.value, strFldId);
        if (objPrjTabFld.isForExtendClass == true) {
          const objPrjTabFldEx = PrjTabFldEx_CopyToEx(objPrjTabFld);
          await PrjTabFld_FuncMapByFldName(clsPrjTabFldENEx.con_FldName, objPrjTabFldEx);
          await PrjTabFld_FuncMapByFldName(clsPrjTabFldENEx.con_Caption, objPrjTabFldEx);

          //PrjTabFldEx_FuncMap1(objPrjTabFldEx);
          if (IsNullOrEmpty(objPrjTabFld.dnPathId) == true) return;
          const objDnPath = await DnPath_GetObjByDnPathIdAsync(objPrjTabFldEx.dnPathId);
          if (objDnPath == null) return;
          this.dnPathId = objDnPath.dnPathId;
          const objDataNode_In = await vDataNode_SimStore.getObj(objDnPath.inDataNodeId);
          if (objDataNode_In == null) return;
          this.fldId = objPrjTabFldEx.inFldId;
          this.outFldId = strFldId;

          //this.outDataNodeId = objDnPath.outDataNodeId;
          //this.dataPropertyName = objPrjTabFldEx.fldName;
          this.labelCaption = objPrjTabFldEx.caption;
          this.ctlTypeId = enumCtlType.Label_10;
          this.width = 100;
          this.colSpan = 1;
          const intRecNum_InUse = await DetailRegionFldsEx_GetRecCountByCondInUseCache(
            RegionId_Static.value,
          );
          this.seqNum = intRecNum_InUse + 1;
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
      async ddlOutFldId_SelectedIndexChanged() {
        //alert('请在扩展层:DataNode_EditEx中重写该函数！');

        //if (IsNullOrEmpty(DetailRegionFlds_EditEx.CmPrjIdCache) == true) return;

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
        this.labelCaption = objFieldTab.caption;
        this.ctlTypeId = enumCtlType.Label_10;
        const intRecNum_InUse = await DetailRegionFldsEx_GetRecCountByCondInUseCache(
          RegionId_Static.value,
        );
        this.seqNum = intRecNum_InUse + 1;
        this.isUseFun = true;
        this.width = 100;
        this.colSpan = 1;
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
