<template>
  <div id="divLayout" ref="refDivLayout" class="tab_layout">
    <!--  标题层  -->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5"> 界面CRUD </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <div class="row">
      <div class="col-7" style="height: 900px; overflow: auto">
        <!-- 查询层 -->
        <span id="spaTitle4Query" class="h5 text-success"></span>
        <div id="divQuery" ref="refDivQuery_Show" class="div_query"> </div>
        <span id="spaTitle4Feature" class="h5 text-success"></span>

        <!-- 功能区 -->
        <div>
          <ul class="nav ml-3">
            <li class="nav-item ml-3">
              <input
                id="cblRegionTypeLst_0"
                type="checkbox"
                value="0001"
                @click="btn_Click('chkRegionType', '')"
              /><label for="cblRegionTypeLst_0">查询区</label>
            </li>
            <li class="nav-item ml-3">
              <input
                id="cblRegionTypeLst_1"
                type="checkbox"
                checked="true"
                value="0008"
                @click="btn_Click('chkRegionType', '')"
              /><label for="cblRegionTypeLst_0">功能区</label>
            </li>
            <li class="nav-item ml-3">
              <input
                id="cblRegionTypeLst_2"
                type="checkbox"
                value="0002"
                @click="btn_Click('chkRegionType', '')"
              /><label for="cblRegionTypeLst_0">列表区</label>
            </li>
          </ul>
        </div>
        <div id="divFeature" ref="refDivFunction_Show" class="table table-bordered table-hover">
        </div>
        <!-- 列表层 -->
        <span id="spaTitle4List" class="h5 text-success"></span>
        <div id="divList" ref="refDivList_Show" class="div_List">
          <div
            id="divDataLst"
            ref="refDivDataLst"
            class="div_List"
            style="height: 600px; overflow: auto"
          >
          </div>
          <div id="divPager" class="pager" value="1"> </div>
        </div>
        <!-- 编辑层 -->
        <span id="spaTitle4Edit" class="h5 text-success"></span>

        <div id="divEdit" ref="refDivEdit_Show" value="1"></div>
        <!-- 详细信息层 -->
        <span id="spaTitle4Detail" class="h5 text-success"></span>
        <div id="divDetail" ref="refDivDetail_Show" value="1"></div>
        <!-- Excel导出信息层 -->
        <span id="spaTitle4ExcelExport" class="h5 text-success"></span>
        <div id="divExcelExport" ref="refDivExcelExport_Show" value="1"></div>
      </div>
      <div class="col-5">
        <div>
          <span>{{ viewInfo4GC }}</span>
        </div>
        <div id="divCodeTypeLst" ref="refDivCodeTypeLst"></div>
        <div>
          <table style="width: 100%">
            <tr>
              <td colspan="3"><span id="lblResult" class="text-warning"></span></td>
            </tr>
            <tr>
              <td>类名</td>
              <td>
                <input
                  id="lblClassName"
                  v-model="className"
                  type="text"
                  class="Content"
                  style="width: 600px; height: 24px"
                />
              </td>
              <td><span id="lblResult" class="text-warning"></span></td>
            </tr>
            <tr>
              <td>文件名</td>
              <td>
                <input
                  id="lblFileName"
                  v-model="fileName"
                  type="text"
                  class="text-info"
                  style="width: 600px"
                />
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>生成的代码</td>
              <td>
                <textarea
                  id="txtCodeText"
                  v-model="codeText"
                  style="width: 100%; height: 720px"
                ></textarea>
              </td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortViewInfoBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { GeneViewCodeEx } from '@/views/PrjInterface/GeneViewCodeEx';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    viewInfo4GC,
  } from '@/views/PrjInterface/GeneViewCodeVueShare';
  import {
    refViewMaster_Detail,
    refViewMaster_Edit,
  } from '@/views/PrjInterface/ViewMasterVueShare';
  export default defineComponent({
    name: 'GeneViewCode',
    components: {
      // 组件注册
    },
    setup() {
      const codeText = ref('');
      const fileName = ref('结果');
      const className = ref('结果');
      const strTitle = ref('界面母版维护');

      const refDivList_Show = ref();
      const refDivFunction_Show = ref();
      const refDivQuery_Show = ref();

      const refDivEdit_Show = ref();
      const refDivDetail_Show = ref();
      const refDivExcelExport_Show = ref();
      const refDivCodeTypeLst = ref();
      refDivCodeTypeLst;
      onMounted(() => {
        GeneViewCodeEx.divFeature = refDivFunction_Show.value;
        GeneViewCodeEx.divQuery = refDivQuery_Show.value;
        GeneViewCodeEx.divList = refDivList_Show.value;

        GeneViewCodeEx.divEdit = refDivEdit_Show.value;
        GeneViewCodeEx.divDetail = refDivDetail_Show.value;
        GeneViewCodeEx.divExcelExport = refDivExcelExport_Show.value;
        GeneViewCodeEx.divCodeTypeLst = refDivCodeTypeLst.value;

        const objPage = new GeneViewCodeEx();
        objPage.PageLoadCache();
      });
      function testTabRef() {
        alert('testTabRef');
        //        return GeneViewCodeEx.viewInfo4GC;
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Detail':
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
        refDivQuery,
        refDivFunction,
        refDivList,

        refDivQuery_Show,
        refDivFunction_Show,
        refDivList_Show,
        refDivEdit_Show,
        refDivDetail_Show,
        refDivExcelExport_Show,
        refDivCodeTypeLst,
        refViewMaster_Edit,
        refViewMaster_Detail,
        viewInfo4GC,
        codeText,
        fileName,
        className,
        testTabRef,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>

<style>
  .tabs-container {
    display: flex;
    flex-direction: row;
  }

  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tabs li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #eee;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #ccc;
  }

  .tab-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }
</style>

<!-- 
<script>


    /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
    */
    function btn_Click(strCommandName, strKeyId) {
        require(["../js/PrjInterface/GeneViewCodeEx.js"], function (viewinfo) {
            viewinfo.GeneViewCodeEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        });
    }

    /*
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
    */
    window.onload = function () {
        require(["../js/PrjInterface/GeneViewCodeEx.js"], function (viewinfo) {
            var objPage = new viewinfo.GeneViewCodeEx();
            objPage.Page_LoadCache();
        });
    }


</script> -->
