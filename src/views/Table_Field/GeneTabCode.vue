<template>
  <div id="divLayout" ref="refDivLayout" class="tab_layout">
    <!--  标题层 -->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblTabTitle" name="lblTabTitle" class="h5"> 生成表代码 </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>

    <div class="row ml-1" style="height: 750px">
      <div
        id="divTree"
        ref="refDivTree"
        class="tree well col-4"
        style="height: 749px; overflow: scroll"
      >
        <tree
          ref="treeRef"
          :tree-data="treeData"
          :selected-node="selectedNode"
          @on-node-click="NodeClick"
        />
      </div>
      <div id="divCode" ref="refDivCode" class="col-8">
        <div>
          <table style="width: 100%">
            <tr>
              <td colspan="3"><span id="spnResult" class="text-warning">spnResult</span></td>
            </tr>
            <tr>
              <td>
                <span id="spnClassName" class="text-primary">类名</span>
              </td>
              <td>
                <input
                  id="txtClsName"
                  type="text"
                  class="Content"
                  style="width: 100%; height: 24px"
                  Text="结果"
                />
              </td>
              <td><span id="spnResult2" class="text-warning">Bak</span></td>
            </tr>
            <tr>
              <td> <span id="spnFileName" class="text-primary">文件名</span></td>
              <td>
                <input
                  id="txtFileName"
                  type="text"
                  class="text-info"
                  style="width: 100%"
                  value="结果"
                />
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>生成的代码</td>
              <td>
                <textarea id="txtCodeText" style="width: 100%; height: 720px"></textarea>
              </td>
              <td>&nbsp;</td>
            </tr>

            <tr>
              <td>工程名</td>
              <td>
                <span id="spnPrjName" class="text-warning"></span>
              </td>
              <td>&nbsp;</td>
            </tr>

            <tr>
              <td>数据源类型</td>
              <td>
                <span id="spnSQLDSTypeName" class="text-warning"></span>
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>代码类型</td>
              <td>
                <span id="spnCodeTypeName" class="text-warning"></span>
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>语言</td>
              <td>
                <span id="spnLangType" class="text-warning"></span>
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>生成用户</td>
              <td>
                <span id="spnGCUserId" class="text-warning"></span>
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>表名</td>
              <td>
                <span id="spnTabName" class="text-warning"></span>
              </td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { GeneTabCodeEx } from '@/views/Table_Field/GeneTabCodeEx';
  import { TreeNode } from '@/ts/components/TreeNode';
  import { enumTabMainType } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { vPrjTab_Sim_GetObjByTabIdCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import tree from '@/ts/components/myTree.vue';
  import { divVarSet, refDivLayout } from '@/views/Table_Field/GeneTabCodeVueShare';
  import {
    refViewMaster_Detail,
    refViewMaster_Edit,
  } from '@/views/PrjInterface/ViewMasterVueShare';
  export default defineComponent({
    name: 'GeneViewCode',
    components: {
      // 组件注册
      tree,
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
      const strTitle = ref('界面母版维护');

      const refDivTree = ref();
      const refDivCode = ref();
      const refDivDataLst = ref();

      const refDivExcelExport = ref();

      onMounted(async () => {
        GeneTabCodeEx.divTree = refDivTree.value;
        GeneTabCodeEx.divCode = refDivCode.value;
        GeneTabCodeEx.treeRef = treeRef;
        GeneTabCodeEx.bindTreeData = bindTreeData;
        GeneTabCodeEx.selectNodeById = selectNodeSim;
        const strTabMainTypeId = enumTabMainType.DataTab_0001;
        // const strFunctionTemplateId = '0001';
        const strTabId = clsPrivateSessionStorage.tabId_Main;
        const strPrjId = clsPrivateSessionStorage.currSelPrjId;
        const objPrjTab = await vPrjTab_Sim_GetObjByTabIdCache(strTabId, strPrjId);
        if (objPrjTab == null) return;
        treeData.value = await GeneTabCodeEx.BindTr_TabGeneCode(
          strTabMainTypeId,
          strTabId,
          objPrjTab.sqlDsTypeId,
        );

        const objPage = new GeneTabCodeEx();
        objPage.PageLoadCache();
      });
      const bindTreeData = async () => {
        const strTabMainTypeId = enumTabMainType.DataTab_0001;
        // const strFunctionTemplateId = '0001';
        const strTabId = clsPrivateSessionStorage.tabId_Main;
        const strPrjId = clsPrivateSessionStorage.currSelPrjId;
        const objPrjTab = await vPrjTab_Sim_GetObjByTabIdCache(strTabId, strPrjId);
        if (objPrjTab == null) return;
        treeData.value = await GeneTabCodeEx.BindTr_TabGeneCode(
          strTabMainTypeId,
          strTabId,
          objPrjTab.sqlDsTypeId,
        );
      };
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Detail':
            // GeneViewCode.DetailObj = ViewMaster_DetailObj;
            // refViewMaster_Detail.value = ViewMaster_DetailObj;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        // GeneViewCodeEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,

        refDivTree,
        refDivCode,

        refDivDataLst,

        refDivExcelExport,
        treeData,
        selectNodeById,
        selectedNode,
        treeRef,
        refViewMaster_Edit,
        refViewMaster_Detail,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
      setEvent4Tree() {
        const treeElements = document.querySelectorAll('.tree li:has(ul)');

        treeElements.forEach((element) => {
          element.classList.add('parent_li');
          const spanElement = element.querySelector(' > span');
          if (spanElement) {
            spanElement.setAttribute('title', 'Collapse this branch');
            spanElement.addEventListener('click', function (e) {
              const ulElement = spanElement.nextElementSibling as HTMLElement;
              if (ulElement.style.display === 'none') {
                ulElement.style.display = 'block';
                spanElement.classList.remove('icon-plus-sign');
                spanElement.classList.add('icon-minus-sign');
              } else {
                ulElement.style.display = 'none';
                spanElement.classList.remove('icon-minus-sign');
                spanElement.classList.add('icon-plus-sign');
              }
              e.stopPropagation();
            });
          }
        });
      },
      async NodeClick(data: any) {
        // if (data.type != 'FunctionName') return;
        if (data.type === 'CodeType') {
          // alert(`CodeType:${data.id}`);
          const strTabId = clsPrivateSessionStorage.tabId_Main;
          const strParentIdLst = data.parentId;
          const arrParentId = strParentIdLst.split('|');
          const strCodeTypeId = data.id;
          const intApplicationTypeId = arrParentId[0];
          GeneTabCodeEx.CodeType_Click(strTabId, strCodeTypeId, intApplicationTypeId);
        } else if (data.type === 'Function4GeneCode') {
          // alert(`Function4GeneCode:${data.id}`);
          const strTabId = clsPrivateSessionStorage.tabId_Main;
          const strParentIdLst = data.parentId;
          const arrParentId = strParentIdLst.split('|');
          const strCodeTypeId = arrParentId[0];
          const intApplicationTypeId = arrParentId[1];
          const strFuncId4GC = data.id;

          GeneTabCodeEx.Function4GeneCode_Click(
            strTabId,
            strFuncId4GC,
            strCodeTypeId,
            intApplicationTypeId,
          );
        } else if (data.type === 'ApplicationType') {
          // alert(`ApplicationType:${data.id}`);
        }

        console.log('data:', data);
      },
    },
  });
</script>

<style>
  .tree {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #fbfbfb;
    border: 1px solid #999;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  }

  .tree li {
    list-style-type: none;
    margin: 0;
    padding: 10px 5px 0 5px;
    position: relative;
  }

  .tree li::before,
  .tree li::after {
    content: '';
    left: -20px;
    position: absolute;
    right: auto;
  }

  .tree li::before {
    border-left: 1px solid #999;
    bottom: 50px;
    height: 100%;
    top: 0;
    width: 1px;
  }

  .tree li::after {
    border-top: 1px solid #999;
    height: 20px;
    top: 25px;
    width: 25px;
  }

  .tree li span {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border: 1px solid #999;
    border-radius: 5px;
    display: inline-block;
    padding: 3px 8px;
    text-decoration: none;
  }

  .tree li.parent_li > span {
    cursor: pointer;
  }

  .tree > ul > li::before,
  .tree > ul > li::after {
    border: 0;
  }

  .tree li:last-child::before {
    height: 30px;
  }

  .tree li.parent_li > span:hover,
  .tree li.parent_li > span:hover + ul li span {
    background: #eee;
    border: 1px solid #94a0b4;
    color: #000;
  }

  .a_subselected {
    color: #ffffff;
    background-color: cornflowerblue;
    font-size: 15px;
    font-weight: 200;
    text-align: left;
  }

  .a_subnoselected {
    color: dodgerblue;
    background-color: white;
    font-size: 15px;
    text-align: left;
  }

  .a_parentselected {
    color: dodgerblue;
    background-color: white;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }

  .span_subselected {
    color: #ffffff;
    background-color: cornflowerblue;
    font-size: 15px;
    font-weight: 200;
    text-align: left;
  }

  .span_parentselected {
    color: darkcyan;
    background-color: white;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }

  .span_subnoselected {
    color: darkcyan;
    background-color: white;
    font-size: 15px;
    text-align: left;
  }
  /*.li_parentselected {
    color: #FFFFFF;
    background-color: cornflowerblue;*/ /*: #0066FF;*/
  /*font-size: 15px;
    text-align: left;
}*/
  /* .li_subselected {
    color: white;
    background-color: cornflowerblue;
    font-size: 15px;
    text-align: left;
  } */

  /* .li_subnoselected {
    color: blue;
    background-color: white;
    font-size: 15px;
    text-align: left;
  } */

  .icon-plus-sign {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('/src/assets/images/ToDown.png') left 0px no-repeat;
  }

  .icon-minus-sign {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('/src/assets/images/ToRight1.png') left 0px no-repeat;
  }

  /* 完全可以自己建一个Css文件，将他们考入，引用。 */
  /* .tree li::before,
  .tree li::after {
  }

  .tree li::before {
  }

  .tree li::after {
  } */

  .TNStyle1 {
    color: red;
    font-size: 15px;
  }

  .TNStyle1 table {
    color: #ffffff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
  }

  .TNStyle1 table td {
    margin: 1px;
    padding: 2px;
    color: #ffffff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
  }

  .TNStyle1 table td a {
    color: #3366cc;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
  }

  .TNStyle1 div table {
    color: #3366ff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
  }

  .TNStyle1 div table td {
    margin: 1px;
    color: #3366ff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    text-align: left;
  }

  .TNStyle1 div table td a {
    margin: 1px;
    color: #0099cc;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    text-align: left;
  }

  .TNStyle1 div div table {
    color: #ffffff;
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
  }

  .TNStyle1 div div table td {
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
  }

  .TNStyle1 div div table td a {
    margin: 1px;
    color: #00ccff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    text-align: left;
  }

  .TNStyle1 div div table td a:visited,
  a:active {
    color: #005eac;
  }

  .TNStyle1 div div table td a:hover {
    color: #ff5500;
  }

  .TNStyle1 div div div table {
    color: #ffffff;
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
  }

  .TNStyle1 div div div table td {
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
  }

  .TNStyle1 div div div table td a {
    margin: 1px;
    color: #006666;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    text-align: left;
  }

  .TNStyle1 div div div table td a:visited,
  a:active {
    color: #005eac;
  }

  .TNStyle1 div div div table td a:hover {
    color: #ff5500;
  }

  .selectedNode {
    color: #ffffff;
    background-color: #0066ff;
    font-size: 15px;
    text-align: left;
  }

  .rootNode {
    color: #003366;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }
</style>

<!-- <script>


    /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_TabScript_TS4Html:Gen_WApi_JS_btn_Click)
    */
    function btn_Click(strCommandName, strKeyId) {
        require(["../js/Table_Field/GeneTabCodeEx.js"], function (viewinfo) {
            viewinfo.GeneTabCodeEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        });
    }

    /*
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_TabScript_TS4Html:Gen_WApi_JS_Page_Load)
    */
    window.onload = function () {
        require(["../js/Table_Field/GeneTabCodeEx.js"], function (viewinfo) {
            var objPage = new viewinfo.GeneTabCodeEx();
            objPage.Page_LoadCache();
        });
    }


</script> -->

<!-- <script src="../lib/jquery/dist/jquery.js"></script>
<script type="text/javascript">

    var d = true; -->
<!-- //     function SetEvent4Tree()
//     {
//         $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
//         $('.tree li.parent_li > span').on('click', function (e) {
//             var d = $(this).siblings('ul').is(":visible");
//             $(this).siblings('ul').slideToggle('fast');//.siblings('dt').css('background-position','right -40px');
//             if (d) {
//                 console.log($(this).find(">i"));
//                 $(this).find(">i").addClass('icon-minus-sign').removeClass('icon-plus-sign');

//             } else {
//                 //  $(this).find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
//                 $(this).find(">i").addClass('icon-plus-sign').removeClass('icon-minus-sign');
//             }
//             e.stopPropagation();
//         });
//     }
//  -->
