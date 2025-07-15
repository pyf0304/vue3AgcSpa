<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <div id="divLayout" class="tab_layout">
      <div class="container1" style="width: 100%">
        <ul class="nav nav-tabs" role="navigation">
          <li d="liViewInfo_U" class="nav-item">
            <a
              class="nav-link active"
              href="#Main_tab1"
              aria-controls="Main_tab1"
              data-toggle="tab"
              role="tab"
              @click="btn_EditTabClick('ViewInfo_U', '0173')"
              >界面属性</a
            >
          </li>

          <li id="liViewRegionInTab" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab2"
              aria-controls="Main_tab2"
              data-toggle="tab"
              role="tab"
              title="维护表的字段信息"
              @click="btn_EditTabClick('ViewRegionInTab', '0173')"
              >界面区域</a
            >
          </li>
          <li id="liViewRelaTabCRUD" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab3"
              aria-controls="Main_tab3"
              data-toggle="tab"
              role="tab"
              title="维护表的相关约束"
              @click="btn_EditTabClick('ViewRelaTabCRUD', '0173')"
              >相关表</a
            >
          </li>
          <li id="liQueryRegion" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab4"
              aria-controls="Main_tab4"
              data-toggle="tab"
              role="tab"
              title="编辑查询区"
              @click="btn_EditTabClick('QryRegionFldsCRUD', '0173')"
              >查询区</a
            >
          </li>
          <li id="liFeatureRegion" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab5"
              aria-controls="Main_tab5"
              data-toggle="tab"
              role="tab"
              title="编辑功能区"
              @click="btn_EditTabClick('FeatureRegionFldsCRUD', '0173')"
              >功能区</a
            >
          </li>
          <li id="liListRegion" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab6"
              aria-controls="Main_tab6"
              data-toggle="tab"
              role="tab"
              title="编辑列表区"
              @click="btn_EditTabClick('DGRegionFldsCRUD', '0173')"
              >列表区</a
            >
          </li>
          <li id="liEditRegion" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab7"
              aria-controls="Main_tab7"
              data-toggle="tab"
              role="tab"
              title="维护编辑区"
              @click="btn_EditTabClick('EditRegionFldsCRUD', '0173')"
              >编辑区</a
            >
          </li>
          <li id="liDetailRegion" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab8"
              aria-controls="Main_tab8"
              data-toggle="tab"
              role="tab"
              title="编辑详细区"
              @click="btn_EditTabClick('DetailRegionFldsCRUD', '0173')"
              >详细区</a
            >
          </li>
          <li id="liExcelExportRegion" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab9"
              aria-controls="Main_tab9"
              data-toggle="tab"
              role="tab"
              title="编辑导出区"
              @click="btn_EditTabClick('ExcelExportRegionFldsCRUD', '0173')"
              >导出区</a
            >
          </li>
          <li id="liGeneViewCode" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab10"
              aria-controls="Main_tab10"
              data-toggle="tab"
              role="tab"
              title="生成代码"
              @click="btn_EditTabClick('GeneViewCode', '0173')"
              >生成代码</a
            >
          </li>
          <li id="liViewInfoCRUD" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab11"
              aria-controls="Main_tab11"
              data-toggle="tab"
              role="tab"
              title="返回界面的维护列表"
              @click="btn_EditTabClick('ViewInfoCRUD', '0173')"
              >界面列表</a
            >
          </li>
          <li id="liRefreshViewInfo" class="nav-item">
            <a
              class="nav-link"
              href="#Main_tab12"
              aria-controls="Main_tab12"
              data-toggle="tab"
              role="tab"
              title="刷新界面信息"
              @click="btn_EditTabClick('RefreshViewInfo', '0173')"
              >刷新</a
            >
          </li>

          <li class="nav-item ml-2"
            ><span class="text-nowrap font-weight-bold text-g" style="width: 80px">界面:</span></li
          >
          <li class="nav-item"><span id="spnViewName"></span></li>
          <li class="nav-item">(<span id="spnViewId"></span>)</li>
          <li class="nav-item ml-2" style="width: 50px"
            ><span class="text-nowrap font-weight-bold text-g" style="width: 180px">模块:</span></li
          >
          <li class="nav-item"><span id="spnFuncModuleName_Sim" class="text-nowrap"></span></li>
          <li class="nav-item">(<span id="spnFuncModuleENName"></span>)</li>
          <li class="nav-item ml-2" style="width: 50px"
            ><span class="text-nowrap font-weight-bold text-g" style="width: 180px">应用:</span></li
          >
          <li class="nav-item"><span id="spnApplicationTypeName" class="text-nowrap"></span></li>
          <li class="nav-item">(<span id="spnApplicationTypeId"></span>)</li>
        </ul>
        <div class="tab-content">
          <div id="Main_tab1" class="tab-pane active">
            <iframe id="iframe_ViewInfo_U" class="myIframe" src="./ViewInfo_U"></iframe>
          </div>
          <div id="Main_tab2" class="tab-pane">
            <iframe id="iframe_ViewRegionInTab" class="myIframe"></iframe>
          </div>
          <div id="Main_tab3" class="tab-pane">
            <iframe id="iframe_ViewRelaTabCRUD" class="myIframe"></iframe>
          </div>
          <div id="Main_tab4" class="tab-pane">
            <iframe id="iframe_QryRegionFldsCRUD" class="myIframe"></iframe>
          </div>
          <div id="Main_tab5" class="tab-pane">
            <iframe id="iframe_FeatureRegionFldsCRUD" class="myIframe"></iframe>
          </div>

          <div id="Main_tab6" class="tab-pane">
            <iframe id="iframe_DGRegionFldsCRUD" class="myIframe"></iframe>
          </div>
          <div id="Main_tab7" class="tab-pane">
            <iframe id="iframe_EditRegionFldsCRUD" class="myIframe"></iframe>
          </div>
          <div id="Main_tab8" class="tab-pane">
            <iframe id="iframe_DetailRegionFldsCRUD" class="myIframe"></iframe>
          </div>
          <div id="Main_tab9" class="tab-pane">
            <iframe id="iframe_ExcelExportRegionFldsCRUD" class="myIframe"></iframe>
          </div>
          <div id="Main_tab10" class="tab-pane">
            <iframe id="iframe_GeneViewCode" class="myIframe"></iframe>
          </div>
          <div id="Main_tab11" class="tab-pane">
            <iframe id="iframe_ViewInfoCRUD" class="myIframe"></iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- 编辑层 -->
    <div id="divEdit" value="1"></div>
    <!-- 选择区 -->
    <div id="divSelect" value="1"></div>

    <!-- 详细信息层 --*@ -->
    <div id="divDetail" value="1"></div>
    <!-- 编辑层 -->
    <div id="divEdit_TabFeature" value="1"></div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import ViewInfoCRUDEx from '@/views/PrjInterface/ViewInfoCRUDEx';
  //   import ViewInfo_EditCom from '@/views/PrjInterface/ViewInfo_Edit.vue';
  //   import ViewInfo_LstCom from '@/views/PrjInterface/ViewInfo_List.vue';

  //   import ViewInfo_DetailCom from '@/views/PrjInterface/ViewInfo_Detail.vue';
  import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/PrjInterface/ViewInfo_AllPropVueShare';
  import { refViewInfo_Detail, refViewInfo_Edit } from '@/views/PrjInterface/ViewInfoVueShare';
  export default defineComponent({
    name: 'ViewInfoCRUD',
    components: {
      // 组件注册
      //   ViewInfo_EditCom,
      //   ViewInfo_DetailCom,
      //   ViewInfo_LstCom,
    },
    setup() {
      const dataList = ref<Array<clsViewInfoENEx>>([]);

      const strTitle = ref('界面维护1');

      const refDivDataLst = ref();

      onMounted(() => {
        ViewInfoCRUDEx.ShowLst = ShowLst;
        const objPage = new ViewInfoCRUDEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      const ShowLst = async (arrObjLst: Array<clsViewInfoENEx>): Promise<void> => {
        console.log(arrObjLst);
        alert('ShowLst in ViewInfoCRUD');
        dataList.value = arrObjLst;
      };
      function btn_EditTabClick(aa: string, bb: string) {
        console.log(aa, bb);
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strCommandName, strKeyId);
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            refViewInfo_Edit.value.showDialog();

            break;
          default:
            break;
        }
        ViewInfoCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        dataList,
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        btn_EditTabClick,
        refViewInfo_Edit,
        refViewInfo_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>

<!-- 

<script>
    //所有用户自定义的JS函数建议都放在这里

            /*
                按钮单击,用于调用Js函数中btn_Click
               (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
               */
               function btn_EditTabClick(strCommandName, strKeyId) {
                   require(["../js/PrjInterface/ViewInfo_AllPropEx.js"], function (main) {
                       main.ViewInfo_AllPropEx.btn_EditTabClick(strCommandName, strKeyId);
                   });
               }

</script>
<script>

    ///*
    // 按钮单击,用于调用Js函数中btn_Click
    //(AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
    //*/
    //function btn_Click(strCommandName, strKeyId) {
    //    require(["../js/Table_Field/PrjTabFldCRUDEx.js"], function (prjtabfld) {
    //        prjtabfld.PrjTabFldCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
    //    });
    //}



    /*
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
    */
    window.onload = function () {

        require(["../js/PrjInterface/ViewInfo_AllPropEx.js"], function (prjtab) {
            var objPage = new prjtab.ViewInfo_AllPropEx();
            objPage.Page_LoadCache();
        });
        //console.error('window.onload = function ()');
        //   require(["../js/Index/Main_ViewInfo_Tabs.js"], function (main) {
        //                main.Main_ViewInfo_Tabs.DispPrjTabFld('navbarSupportedContent2');
        //   });
    }
    function EditTabFld() {
        alert("EditTabFld");
    }
    function CheckConsistency() {
        alert("CheckConsistency");
    }
    function btnCheckSqlView_Click() {
        alert("btnCheckSqlView_Click");
    }
</script>
<style>
    .myIframe {
        width: 100%;
        height: 780px;
        border: none;
    }

     .nav-tabs{
            background: #FFFFFF;
            border-bottom: 3px #3498db solid;
        }

        .nav-tabs li a{
            /*line-height:2;*/
            border:1px #ddd solid;
            margin-right: -1px;
            color: #999;
            border-radius: 0;
            /*width: 90px;*/
        }
        .nav-tabs li a .glyphicon-remove-sign:hover{
            color:red;
            cursor: pointer;
        }
        .nav-tabs li a i:first-child{
            margin-right: 3px;
        }
        .nav-tabs .active a{
            border-top: solid 2px #3498db !important;
            background: #3498db !important;
            color:#fff !important;
        }
        .nav-tabs .active{
            border-top: solid 2px #3498db !important;
            background: #3498db !important;
            color:#fff !important;
        }
        .nav>li>a {  
            position: relative;
            display: block;
             padding: 5px 10px;
        }
</style> -->
