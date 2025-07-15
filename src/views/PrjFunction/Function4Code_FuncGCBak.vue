<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!-- 标题层 -->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" class="h5">自定义生成函数维护</label>
      <label
        id="lblMsgList"
        class="text-warning"
        style="z-index: 105; left: 54px; position: relative; top: 4px; width: 347px"
      ></label>
    </div>
    <!-- 查询层 -->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table class="msgtable" style="width: 80%">
        <tr>
          <td class="float-right">
            <label id="lblFuncId4Codeq" class="text-secondary">函数Id</label>
          </td>
          <td>
            <input id="txtFuncId4Code_q" type="text" class="text-secondary" />
          </td>

          <td class="float-right">
            <label id="lblFuncName4Codeq" class="text-secondary">函数名</label>
          </td>
          <td>
            <input id="txtFuncName4Code_q" style="width: 250px" class="text-secondary" />
          </td> </tr
      ></table>
    </div>
    <div id="divFunction" ref="refDivFunction" style="width: 100%; height: 32px" class="msgtable">
      <ul class="nav">
        <li class="nav-item">
          <label id="lblFunction4CodeList" class="h6" style="width: 150px">函数列表</label>
        </li>
        <li class="nav-item ml-2">
          <button
            id="btnAddNewRec4Gv"
            class="btn btn-outline-info btn-sm"
            @click="btn_Click('AddNewRecord', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-2">
          <button
            id="btnCloneNewRec4Gv"
            class="btn btn-outline-info btn-sm"
            @click="btn_Click('Clone', '')"
            >克隆</button
          >
        </li>

        <li class="nav-item ml-2">
          <button
            id="btnDelete4Gv"
            class="btn btn-outline-info btn-sm"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-2">
          <button
            id="btnUpdate4Gv"
            class="btn btn-outline-info btn-sm"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>

        <li class="nav-item ml-2">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlFuncAccessModeId_SetFldValue"
              class="form-control form-control-sm"
            ></select>

            <button
              id="btnFuncAccessModeId"
              class="btn btn-outline-info btn-sm"
              @click="btn_Click('FuncAccessMode', '')"
              >设置函数访问方式</button
            >
          </div>
        </li>

        <li class="nav-item ml-2">
          <!-- <button
            id="btnEditPara"
            class="btn btn-outline-info btn-sm"
            @click="btn_Click('EditPara', '')"
            >编辑参数0</button
          > -->
          <router-link
            v-if="selectedNodeId"
            :to="{
              name: '/GeneCode/PrjFunction/FuncParaRelaCRUD',
              query: { funcId4Code: selectedNodeId },
            }"
          >
            编辑参数
          </router-link>
        </li>

        <li class="nav-item ml-2">
          <button
            id="btnGC_Function4Code"
            class="btn btn-outline-info btn-sm"
            @click="btnGC_Function4Code_Click"
            >生成函数代码</button
          >
        </li>
        <li class="nav-item ml-2">
          <button
            id="btnCalcFuncSignature"
            class="btn btn-outline-info btn-sm"
            Visible="False"
            @click="btnCalcFuncSignature_Click"
            >计算函数签名</button
          >
        </li>
      </ul>
    </div>
    <!-- 列表层 -->

    <div id="divList" ref="refDivList" class="div_List">
      <div class="row" style="width: 100%">
        <div id="divLeft" class="col-4">
          <!-- <uc1:wuctreeview
            id="wucTreeView4PrjTab"
            onafterselect_tz="wucTreeView4PrjTab_afterSelect_Tz"
          /> -->
          <tree
            ref="treeRef"
            :tree-data="treeData"
            :selected-node="selectedNode"
            @on-node-click="NodeClick"
          />
        </div>
        <div id="divRight" class="col-8" visible="false">
          <div class="modal-content" style="width: 100%">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">生成函数代码</h4>

              <button
                id="btnClose"
                data-dismiss="modal"
                aria-hidden="true"
                class="close btn btn-outline-info btn-sm"
                @click="btnClose_Click"
                >关闭</button
              >
            </div>
            <div class="modal-body">
              <div id="divGC_Function4Code" class="tab_Edit" visible="false">
                <!-- <uc3:wucgc_function4codev2 id="wucGC_Function4CodeB1" /> -->
                <GC_Function4CodeV2Com ref="GC_Function4CodeV2Ref"></GC_Function4CodeV2Com>
              </div>
              <div id="divGF_Function4Code" class="tab_Edit" visible="false">
                <!-- <uc1:wucgf_function4code
                  id="wucGF_Function4Code1"
                  onongffinished="wucGF_Function4Code1_onGFFinished"
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 编辑层 -->
    <div id="tabEditFunction4CodeRegion" class="tab_Edit">
      <div>
        <ul class="nav">
          <li class="nav-item">
            <label id="lblEditFunction4Code" style="width: 250px" class="h6"
              >函数名4Code编辑区域</label
            >
          </li>

          <li class="nav-item ml-2">
            <button id="btnOKUpd" class="btn btn-outline-info btn-sm" @click="btnOKUpd_Click"
              >添加</button
            >
          </li>

          <li class="nav-item ml-2">
            <button
              id="btnCancelFunction4CodeEdit"
              style="width: 100px"
              class="btn btn-outline-info btn-sm"
              @click="btnCancelFunction4CodeEdit_Click"
              >取消编辑</button
            >
          </li>
          <li class="nav-item ml-2">
            <label id="lblMsgEdit" style="width: 208px" class="text-warning"></label>
          </li>
        </ul>
      </div>
      <div>
        <Function4Code_EditCom ref="refFunction4Code_Edit"></Function4Code_EditCom>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { computed, defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import Function4Code_FuncGCEx from '@/views/PrjFunction/Function4Code_FuncGCEx';

  import Function4Code_EditCom from '@/views/PrjFunction/Function4Code_FuncGC_Edit.vue';
  import GC_Function4CodeV2Com from '@/views/PrjFunction/GC_Function4CodeV2.vue';

  import tree from '@/ts/components/myTree.vue';
  import { TreeNode } from '@/ts/components/TreeNode';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { wf_StepPointRelaEx_GetObjLstByWorkFlowIdCache } from '@/ts/L3ForWApiEx/WorkFlow/clswf_StepPointRelaExWApi';
  import { Dictionary } from '@/ts/PubFun/tzDictionary';
  import {
    ProgLangType_GetNameByProgLangTypeIdCache,
    ProgLangType_GetObjByProgLangTypeIdCache,
  } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
  import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import { wf_Point_GetObjByPointIdCache } from '@/ts/L3ForWApi/WorkFlow/clswf_PointWApi';
  import {
    getTableObjByIdInDivObj,
    SetTextAreaValueByIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { Function4CodeEx_GeneCodeV2 } from '@/ts/L3ForWApiEx/PrjFunction/clsFunction4CodeExWApi';
  import { Function4Code_GetObjByFuncId4CodeAsync } from '@/ts/L3ForWApi/PrjFunction/clsFunction4CodeWApi';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refFunction4Code_Edit,
  } from '@/views/PrjFunction/Function4CodeVueShare';
  export default defineComponent({
    name: 'Function4CodeCRUD',
    components: {
      // 组件注册
      Function4Code_EditCom,
      tree,
      GC_Function4CodeV2Com,
    },
    setup() {
      const treeRef = ref();
      const selectedNode = ref(null);
      const treeData = ref<TreeNode[]>([
        // Your data initialization here
        {
          id: '1',
          label: '学院A',
          type: '',
          expanded: true,
          parentNode: null,
          children: [],
        },
      ]);
      // Method to select a node in the Tree component
      const selectNodeById = (type: string, nodeId: string) => {
        if (treeRef.value) {
          // Call the selectNode method in the Tree component
          treeRef.value.selectNode(type, nodeId);
        }
      };

      const selectNodeSim = (type: string, nodeId: string) => {
        if (treeRef.value) {
          // Call the selectNode method in the Tree component
          console.error('selectNodeSim:', type, nodeId);
          treeRef.value.selectNodeSim(type, nodeId);
        }
      };

      const strTitle = ref('功能按钮关系维护');

      const GC_Function4CodeV2Ref = ref();

      const refDivDataLst = ref();
      onMounted(async () => {
        Function4Code_FuncGCEx.treeRef = treeRef;
        Function4Code_FuncGCEx.bindTreeData = bindTreeData;
        Function4Code_FuncGCEx.selectNodeById = selectNodeSim;
        console.log('Function4Code_FuncGCEx.treeRef', Function4Code_FuncGCEx.treeRef);
        treeData.value =
          await Function4Code_FuncGCEx.Bindtv_FuncModule_Agc_PrjTab_ClassName_FuncName(
            clsPrivateSessionStorage.cmPrjId,
          );
        const objPage = new Function4Code_FuncGCEx();

        objPage.PageLoadCache();
        //this.myonload();
      });

      const bindTreeData = async () => {
        treeData.value =
          await Function4Code_FuncGCEx.Bindtv_FuncModule_Agc_PrjTab_ClassName_FuncName(
            clsPrivateSessionStorage.cmPrjId,
          );
      };

      const btnCloneNewRec4Gv_Click = () => {
        return true;
      };
      const btnCopyTemplateFunction_Click = () => {
        return true;
      };

      const btnApplicationTypeId_Click = () => {
        return true;
      };
      const btnFuncAccessModeId_Click = () => {
        return true;
      };
      const btnSynchToFunction4GC_Click = () => {
        return true;
      };
      const btnEditPara_Click = () => {
        return true;
      };
      const btnGeneFunction_Click = () => {
        return true;
      };
      const btnGC_Function4Code_Click = () => {
        if (treeRef.value == null) return;

        const childProperty = treeRef.value.selectedNode0;
        if (childProperty == null || childProperty.type != 'FunctionName') {
          alert('请在左边树中选择一个需要生成的函数名！');
          console.error('请在左边树中选择一个需要生成的函数名！');
          return;
        }
        console.log('selectedNode0:', childProperty.label);
        const strFuncId4Code = childProperty.id;
        if (IsNullOrEmpty(strFuncId4Code) == true) {
          alert('请在左边树中选择一个需要生成的函数名！');
          console.error('请在左边树中选择一个需要生成的函数名！');
          return;
        }
        ShowFunctionWorkFlow(strFuncId4Code);
        return true;
      };

      const ShowFunctionWorkFlow = async (strFuncId4Code: string) => {
        const divEdit = GC_Function4CodeV2Ref.value.$refs.refDivEdit;
        console.log('divEdit', divEdit);
        const tabContainer = getTableObjByIdInDivObj(divEdit, 'tabContainer');
        const numRows = tabContainer.rows.length;

        // Loop through rows in reverse order and remove each row
        for (let i = numRows - 1; i >= 0; i--) {
          tabContainer.deleteRow(i);
        }

        const strCurrWorkFlowId = '0002';
        const objFunction4Code = await Function4Code_GetObjByFuncId4CodeAsync(strFuncId4Code);
        if (objFunction4Code == null) return;
        if (IsNullOrEmpty(objFunction4Code.codeTypeId) == true) return;
        if (IsNullOrEmpty(strCurrWorkFlowId) == true) {
          alert('当前没有设置默认的工作流Id,请去相关界面设置！');
          return;
        }
        if (IsNullOrEmpty(objFunction4Code.funcAccessModeId) == true) {
          alert('当前函数的访问方式为空，不能生成代码！');
          return;
        }
        // const strCondition = Format(
        //   "{0}='{1}'",
        //   clsFunction4CodeEN.con_RootFuncId,
        //   objFunction4Code.rootFuncId,
        // );
        //List<clsFunction4CodeEN> arrFunction4Code = clsFunction4CodeBL.GetObjLst(strCondition);
        // const objvwf_StepPointRelaEN = await vwf_StepPointRelaEx_GetObjByWorkFlowIdAndTabKeyIdCache(
        //   strCurrWorkFlowId,
        //   objFunction4Code.codeTypeId,
        // );
        const arrwf_StepPointRela = await wf_StepPointRelaEx_GetObjLstByWorkFlowIdCache(
          strCurrWorkFlowId,
        );
        // .sort((x) => x.levelNo);
        // const intMaxlevelNum = arrwf_StepPointRela.Max((x) => x.levelNo ?? 0);
        const intMaxlevelNum = arrwf_StepPointRela.reduce((max, obj) => {
          return obj.levelNo > max ? obj.levelNo : max;
        }, arrwf_StepPointRela[0].levelNo);

        let intI = 0;
        const dicColNum = new Dictionary();
        //             const mapParam: Dictionary = new Dictionary();
        // mapParam.add('objString', objPagerPara.objString);
        for (intI = 0; intI <= intMaxlevelNum; intI++) {
          const arrwf_StepPointRela_Level_i = arrwf_StepPointRela.filter((x) => x.levelNo == intI);
          const intColNum = arrwf_StepPointRela_Level_i.length;
          if (intColNum > 0) {
            dicColNum.add(intI, intColNum);
          }
        }
        const intMaxColNum = dicColNum.maxValue();

        for (intI = 0; intI <= intMaxlevelNum; intI++) {
          const arrwf_StepPointRela_Level_i = arrwf_StepPointRela.filter((x) => x.levelNo == intI);
          const intColNum = arrwf_StepPointRela_Level_i.length;
          if (intColNum == 0) continue;
          const objRow = document.createElement('tr'); //new  TableRow();

          for (const objInFor of arrwf_StepPointRela_Level_i) {
            const objwf_Point = await wf_Point_GetObjByPointIdCache(objInFor.pointId);
            if (objwf_Point == null) continue;
            const objCell = document.createElement('td'); //new TableCell();
            if (dicColNum[intI] == 1) {
              objCell.colSpan = intMaxColNum;
              objCell.className = 'text-center';
            }
            const objButton = document.createElement('button'); // new Button();
            const objLabel = document.createElement('label'); //new Label();

            if (objwf_Point.tabName == 'NoTab') {
              // objButton.style.visibility = true;
              objButton.innerText = Format('{0}', objwf_Point.pointName);
              objButton.title = Format('{0}', objwf_Point.pointName);
              objButton.className = 'text-warning';
              objButton.title = Format('不需要生成代码', objwf_Point.pointName);
            } else {
              const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(objwf_Point.tabKeyId);
              if (objCodeType == null) return;
              const objProgLangType = await ProgLangType_GetObjByProgLangTypeIdCache(
                objCodeType.progLangTypeId,
              );
              if (objProgLangType == null) return;
              // objButton.Visible = true;
              objButton.innerText = Format(
                '{0}({1})',
                objCodeType.codeTypeName,
                objProgLangType.progLangTypeSimName,
              );
              objButton.title = Format(
                '{0}-{1}',
                objCodeType.codeTypeId,
                objFunction4Code.funcId4Code,
              );
              objButton.className = 'btn btn-outline-info btn-sm';

              (function (strCurrWorkFlowId, strFuncId4Code, strCodeTypeId) {
                objButton.onclick = function () {
                  btnGeneCode_Click(strCurrWorkFlowId, strFuncId4Code, strCodeTypeId);
                };
              })(strCurrWorkFlowId, strFuncId4Code, objCodeType.codeTypeId);

              objLabel.innerText = Format(
                '{0}',
                objFunction4Code.functionSignatureSim,
                objFunction4Code.funcCHName4Code,
                objCodeType.codeTypeName,
                ProgLangType_GetNameByProgLangTypeIdCache(objCodeType.progLangTypeId),
              );
              // objLabel.Visible = true;
              objLabel.className = 'text-muted  font-weight-bold';
            }
            objCell.appendChild(objButton);
            objCell.appendChild(objLabel);
            objCell.classList.add('text-center');
            objRow.appendChild(objCell);
          }
          const intColNum2 = objRow.cells.length;
          if (intColNum2 == 1) objRow.cells[0].colSpan = 3;
          tabContainer.appendChild(objRow);
        }

        // btnGeneCode0.Visible = false;
        // lblGC0.Visible = false;
      };
      const btnGeneCode_Click = async (
        strCurrWorkFlowId: string,
        strFuncId4Code: string,
        strCodeTypeId: string,
      ) => {
        const divEdit = GC_Function4CodeV2Ref.value.$refs.refDivEdit;

        const strCode = await Function4CodeEx_GeneCodeV2(
          strCurrWorkFlowId,
          strFuncId4Code,
          strCodeTypeId,
        );
        SetTextAreaValueByIdInDivObj(divEdit, 'txtCode', strCode);
      };
      const btnCalcFuncSignature_Click = () => {
        return true;
      };
      const btnClose_Click = () => {
        return true;
      };
      const btnOKUpd_Click = () => {
        return true;
      };
      const btnCancelFunction4CodeEdit_Click = () => {
        return true;
      };

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
          case 'AddNewRecord':
            break;
          default:
            break;
        }
        Function4Code_FuncGCEx.btn_Click(strCommandName, strKeyId);
      }
      const selectedNodeId = computed(() => {
        if (treeRef.value == null) return '';

        const childProperty = treeRef.value.selectedNode0;
        if (childProperty == null || childProperty.type != 'FunctionName') {
          // alert('请在左边树中选择一个需要生成的函数名！');
          // console.error('请在左边树中选择一个需要生成的函数名！');
          return '';
        }
        console.log('selectedNode0:', childProperty.label);
        const strFuncId4Code = childProperty.id;
        if (IsNullOrEmpty(strFuncId4Code) == true) {
          alert('请在左边树中选择一个需要生成的函数名！');
          console.error('请在左边树中选择一个需要生成的函数名！');
          return;
        }
        return strFuncId4Code;
      });
      return {
        strTitle,
        selectedNodeId,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        btnCloneNewRec4Gv_Click,
        btnCopyTemplateFunction_Click,

        btnApplicationTypeId_Click,
        btnFuncAccessModeId_Click,
        btnSynchToFunction4GC_Click,
        btnEditPara_Click,
        btnGeneFunction_Click,
        btnGC_Function4Code_Click,
        btnCalcFuncSignature_Click,
        btnClose_Click,
        btnOKUpd_Click,
        btnCancelFunction4CodeEdit_Click,
        treeData,
        selectNodeById,
        selectedNode,
        treeRef,
        GC_Function4CodeV2Ref,
        ShowFunctionWorkFlow,
        btnGeneCode_Click,
        bindTreeData,
        refFunction4Code_Edit,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // const objPage = new Function4Code_FuncGCEx();
      // objPage.PageLoadCache();
      //this.myonload();
    },
    methods: {
      async NodeClick(data: any) {
        if (data.type != 'FunctionName') return;
        console.log('data:', data);
      },
    },
  });
</script>
<style scoped>
  tr {
    text-align: center;
  }

  td {
    text-align: center;
  }

  .centered-td {
    text-align: center;
  }
</style>
