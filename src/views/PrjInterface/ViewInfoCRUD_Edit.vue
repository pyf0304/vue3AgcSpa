<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <div class="layout-admin">
      <header class="layout-header">
        <span class="header-logo">代码生成-界面设计</span>

        <a class="header-menu-btn" href="javascript:;"><i class="icon-font">&#xe600;</i></a>
        <ul class="header-bar">
          <li class="header-bar-nav">
            <a href="javascript:;" title="CM工程名">
              <label ID="lblCurrCmPrjName">CM工程名</label>
              <i class="icon-font" style="margin-left: 5px">&#xe60c;</i>
            </a>
            <ul id="ulCmPrjId" class="header-dropdown-menu"> </ul>
          </li>
          <li class="header-bar-role">
            <a href="javascript:;">
              <label ID="lblRoleName">超级管理员</label>
            </a>
          </li>
          <li class="header-bar-nav">
            <a href="javascript:;">
              <label ID="lblViewName">超级管理员</label
              ><i class="icon-font" style="margin-left: 5px">&#xe60c;</i>
            </a>
            <ul class="header-dropdown-menu">
              <li><a href="javascript:ChangePassword();">修改口令</a></li>
              <li><a href="javascript:;">切换账户</a></li>
              <li>
                <a href="javascript:lbLogout_Click();">退出</a>
              </li>
            </ul>
          </li>

          <li class="header-bar-nav">
            <a href="javascript:;" title="功能">
              <label ID="label1">功能</label>
              <i class="icon-font">&#xe60c;</i>
            </a>
            <ul class="header-dropdown-menu right dropdown-skin">
              <li
                ><a href="../../Webform/DownLoad/wfmDownLoadClsFile.aspx?ParentPage=FrameSet"
                  >下载文档</a
                ></li
              >
            </ul>
          </li>
          <li class="header-bar-nav">
            <a href="javascript:;" title="换肤"><i class="icon-font">&#xe608;</i></a>
            <ul class="header-dropdown-menu right dropdown-skin">
              <li><a href="javascript:;" data-val="qingxin" title="清新">清新</a></li>
              <li><a href="javascript:;" data-val="blue" title="蓝色">蓝色</a></li>
              <li><a href="javascript:;" data-val="molv" title="墨绿">墨绿</a></li>
            </ul>
          </li>
        </ul>
      </header>
      <aside class="layout-side">
        <div class="float-left" style="width: 220px; min-height: 600px; overflow: auto">
          <!-- 列表层  -->
          <div id="divQuery0" class="mt-0 bg-light" style="width: 100%">
            <div class="btn-group" role="group" aria-label="Basic example">
              <label
                ID="lblCondition"
                name="lblCondition"
                class="col-form-label-sm bg-transparent"
                style="width: 180px"
                >条件:</label
              >

              <button
                id="btnShowQuery"
                class="tab-btn1 btn-sm text-right bg-light"
                style="width: 20px"
                @click="btn_Click('ShowQuery', '')"
              >
                <i id="iBtn" class="ico_down"></i>
              </button>
            </div>
          </div>
          <div
            id="divQuery_Main"
            class="div_List border-info ml-1 mr-1"
            style="width: 195px; display: none; border: 1px solid"
          >
            <div class="btn-group mt-1" role="group" aria-label="Basic example">
              <label
                id="lblViewName_q"
                name="lblViewName_q"
                class="col-form-label text-right"
                style="width: 58px"
              >
                界面名称
              </label>

              <input
                id="txtViewName_q"
                name="txtViewName_q"
                class="form-control form-control-sm"
                style="width: 135px"
              />
            </div>

            <div class="btn-group mt-1" role="group" aria-label="Basic example">
              <label
                id="lblFuncModuleAgcId_q"
                name="lblFuncModuleAgcId_q"
                class="col-form-label text-right"
                style="width: 58px"
              >
                模块
              </label>
              <select
                id="ddlFuncModuleAgcId_q"
                name="ddlFuncModuleAgcId_q"
                class="form-control form-control-sm"
                style="width: 115px"
              ></select>
              <img
                ID="btnQuery"
                src="/src/assets/images/001_37.png"
                class="mt-1 ml-0"
                style="width: 20px; height: 20px"
                @click="btn_Click('Query', '')"
              />
            </div>
          </div>
          <ul id="ulPARENT" class="side-menu"> </ul>
        </div>
      </aside>
      <div class="layout-side-arrow">
        <div class="layout-side-arrow-icon"><i class="icon-font"></i></div>
      </div>

      <section class="layout-main">
        <div class="layout-main-tab">
          <button class="tab-btn btn-left"><i class="icon-font">&#xe60e;</i></button>
          <nav class="tab-nav">
            <div class="tab-nav-content">
              <a href="javascript:;" class="content-tab active" data-id="./home">首页</a>
            </div>
          </nav>
          <button class="tab-btn btn-right"><i class="icon-font">&#xe60f;</i></button>
        </div>
        <div class="layout-main-body">
          <iframe
            class="body-iframe"
            name="iframe0"
            style="width: 100%; height: 89%; border: none"
            src="~/FrameAdmin/home"
            data-id="./home"
            seamless
          ></iframe>
        </div>
      </section>

      <div class="layout-footer"
        >Copyright Right © 2021-2027 设计制作:上海泰泽信息技术有限公司
      </div>
    </div>

    <!-- 编辑层 -->
    <div id="divEdit_Region" value="1"></div>
    <!-- <script src="~/lib/jquery/dist/jquery.js"></script>
    <script src="~/common/js/sccl.js"></script>
    <script src="~/common/js/sccl-util.js"></script> -->

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

  import ViewInfoCRUDEx0 from '@/views/PrjInterface/ViewInfoCRUDEx0';
  //   import ViewInfo_EditCom from '@/views/PrjInterface/ViewInfo_Edit.vue';
  //   import ViewInfo_DetailCom from '@/views/PrjInterface/ViewInfo_Detail.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refViewInfo_Edit,
    refViewInfo_Detail,
  } from '@/views/PrjInterface/ViewInfoVueShare';
  export default defineComponent({
    name: 'ViewInfoCRUD',
    components: {
      // 组件注册
      //   ViewInfo_EditCom,
      //   ViewInfo_DetailCom,
    },
    setup() {
      const strTitle = ref('界面维护4');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new ViewInfoCRUDEx0();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
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
        ViewInfoCRUDEx0.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        refViewInfo_Edit,
        refViewInfo_Detail,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // const objPage = new ViewInfoCRUDEx0();
      // objPage.PageLoadCache();
      //this.myonload();
    },
    methods: {},
  });
</script>
<style scoped></style>
<!-- 
<style>
    .ico_up {
        top: 45%;
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-bottom-color: #B0B0B0;
        vertical-align: central;
    }

    .ico_down {
        /*float: top;*/
        top: 45%;
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-top-color: #B0B0B0;
        vertical-align: central;
    }
    /*position: absolute;*/
    /*height: 39px;*/

    .tab-btn1 {
        width: 20px;
        text-align: center;
        vertical-align: central;
        color: #999;
        z-index: 2;
        background: #f2f2f2;
        border: 0;
        outline: 0;
        cursor: pointer;
    }
</style>
<script>



    /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
    */
    function btn_Click(strCommandName, strKeyId) {
        require(["../js/PrjInterface/ViewInfoCRUD_EditEx.js"], function (viewinfo) {
            viewinfo.ViewInfoCRUD_EditEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        });
    }

    /*
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
    */
    window.onload = function () {
        require(["../js/PrjInterface/ViewInfoCRUD_EditEx.js"], function (viewinfo) {
            var objPage = new viewinfo.ViewInfoCRUD_EditEx();
            objPage.Page_LoadCache();
        });
    }


    /*
     修改记录
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_SortBy)
    */
    function SortBy(strFldName) {
        console.log("按:" + strFldName + "排序");
        require(["../js/PrjInterface/ViewInfoCRUD_EditEx.js"], function (viewinfo) {
            var objPage = new viewinfo.ViewInfoCRUD_EditEx();
            objPage.SortBy(strFldName);
        });
    }
    var flag = false;
    function main_Click(strKey) {
        var liLevel1 = document.getElementById("liL1_" + strKey);
        if (liLevel1 == null) return;
        var strState = liLevel1.getAttribute("state");
        var parUL = liLevel1.parentElement;
        var arrAllLi = parUL.children;
        if (strState == "close") {
            $('#' + strKey).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
            $('#ul' + strKey).show();
            liLevel1.setAttribute("state", "open");
            //flag = false;
        } else {
            $('#' + strKey).css('background', 'url(../images/st_folder.gif) no-repeat left');
            $('#ul' + strKey).hide();
            liLevel1.setAttribute("state", "close");
            //for (var i = 0; i < arrAllLi.length; i++) {
            //    var objLi = arrAllLi[i];
            //    var objLi_a = objLi.firstChild;
            //    var strOtherKey = objLi_a.id;
            //    $('#' + strOtherKey).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
            //    $('#ul' + strOtherKey).show();
            //}
            //flag = true;
        }
        for (var i = 0; i < arrAllLi.length; i++) {
            var objLi = arrAllLi[i];
            var objLi_a = objLi.firstChild;
            var strOtherKey = objLi_a.id;
            if (strOtherKey != strKey) {
                $('#' + strOtherKey).css('background', 'url(../images/st_folder.gif) no-repeat left');
                $('#ul' + strOtherKey).hide();
                var liLevel1 = document.getElementById("liL1_" + strOtherKey);
                if (liLevel1 == null) return;
                liLevel1.setAttribute("state", "close");
            }
        }

    }

    function ShowKey(strKeyId) {
        alert(strKeyId);
    }
    function LoadTreeShow(strKey) {

        $('#' + strKey).css('background', 'url(../images/st_folder_open.gif) no-repeat left');

        //    var num = $('.main').index(this);
        //$('.main').eq(num).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
        //    $('.submenu').eq(num).show(100);
        //    flag = false;
    }
   
    function HideLi_1(strAnchor) {
        var thisLi = $(strAnchor).parent();
        console.log(thisLi);
        thisLi.hide();
        //thisLi.css("visibility", "hidden");
        //thisLi.css("display", "none");

    }
    function HideLi_2(strAnchor) {
        var thisLi = $(strAnchor).parent();
        console.log(thisLi);
        //thisLi.hide();
        thisLi.css("visibility", "hidden");
        //thisLi.css("display", "none");

    }
    function CreateUlLi() {
        //    alert("提交" + strOp);
        require(["../js/TestSession/TestSession1.js"], function (TestSession1) {
            TestSession1.TestSession1.CreateUlLi();
        });
    }
    function HideLi_3(strAnchor) {
        var thisLi = $(strAnchor).parent();
        console.log(thisLi);
        //thisLi.hide();
        //thisLi.css("visibility", "hidden");
        thisLi.css("display", "none");

    }
</script>
 -->
<!-- @/views/PrjInterface/ViewInfoCRUDExBak -->
