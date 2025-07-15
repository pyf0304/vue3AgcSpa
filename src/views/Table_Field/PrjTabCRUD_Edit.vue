<template>
  <div id="divLayout_Main" ref="refDivLayout" class="layout-admin">
    <header class="layout-header">
      <span class="header-logo">代码生成-项目表设计</span>
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
        <!--  列表层  -->
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
              id="lblTabName_q"
              name="lblTabName_q"
              class="col-form-label text-right"
              style="width: 58px"
            >
              界面名称
            </label>

            <input
              id="txtTabName_q"
              name="txtTabName_q"
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
            <a href="javascript:;" class="content-tab active" data-id="./PrjTabCRUD">首页</a>
          </div>
        </nav>
        <button class="tab-btn btn-right"><i class="icon-font">&#xe60f;</i></button>
      </div>
      <div class="layout-main-body">
        <iframe
          class="body-iframe"
          name="iframe0"
          style="width: 100%; height: 89%; border: none"
          src="./PrjTabCRUD"
          data-id="./PrjTabCRUD"
          seamless
        ></iframe>
      </div>
    </section>
    <div class="layout-footer">Copyright Right © 2021-2027 设计制作:上海泰泽信息技术有限公司 </div>

    <!--  编辑层  -->
    <div id="divEdit_Region" value="1"></div>
    <!-- <script src="~/lib/jquery/dist/jquery.js"></script>
    <script src="~/common/js/sccl.js"></script>
    <script src="~/common/js/sccl-util.js"></script> -->
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortPrjTabBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, ref } from 'vue';

  import { useRoute, useRouter } from 'vue-router';
  import PrjTabCRUDEx from '@/views/Table_Field/PrjTabCRUDEx';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refPrjTab_Edit,
    refPrjTab_Detail,
  } from '@/views/Table_Field/PrjTabVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  export default defineComponent({
    name: 'PrjTabCRUD',
    components: {
      // 组件注册
      // PrjTab_EditCom,
      // PrjTab_DetailCom,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const strTitle = ref('工程表维护');
      function EditPrjTab(strTabId: string) {
        // hideDialog();

        clsPrivateSessionStorage.tabId_Main = strTabId;
        if (route == null) {
          router.push({ name: 'account-editTabRelaInfo' });

          return;
        }
        console.log('route:', route);
        const params = route.params.tabId ? { tabId: route.params.tabId } : { tabId: strTabId };
        router.push({ name: 'account-editTabRelaInfo', params });

        // alert(strTabId);
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'EditPrjTab':
            EditPrjTab(strKeyId);
            break;
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
        PrjTabCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refPrjTab_Edit,
        refPrjTab_Detail,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>
