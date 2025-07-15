<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--  标题层  -->

    <div
      id="divTitle"
      style="position: relative; width: 1448px; height: 120px; left: 0px; top: 0px; overflow: auto"
    >
      <ul class="nav">
        <li class="nav-item">
          <label id="lblViewTitle" name="lblViewTitle" class="h5"> 表数据结点函数映射 </label>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnRefresh"
            type="submit"
            name="btnRefresh"
            class="btn btn-outline-warning"
            @click="btn_Click('Refresh', '')"
            >刷新</button
          >
        </li>

        <li class="nav-item ml-3">
          <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
          </label>
        </li>
      </ul>

      <div id="divPathOutFldName"> </div>
    </div>

    <!--  功能区  -->

    <div id="divDataNode" style="height: 700px; overflow: auto">
      <div id="divFieldLst" ref="refDivFieldLst" class="div_List"> </div>
      <div id="divNodeGraph" ref="refDivNodeGraph" class="div_List"> </div>
      <div id="divFldGraph" ref="refDivFldGraph" class="div_List"> </div>
    </div>

    <!--  编辑层  -->
    <div id="divEdit" value="1"></div>
    <!--编辑层-->
    <DnFuncMap_EditV2Com ref="refDnFuncMap_Edit"></DnFuncMap_EditV2Com>
    <!--  详细信息层  -->
    <div id="divDetail" value="1"></div>
    <input id="hidOpType" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { useRoute, useRouter } from 'vue-router';
  import DnFuncMapCRUD_EditEx from '@/views/AIModule/DnFuncMapCRUD_EditEx';
  import DnFuncMap_EditV2Com from '@/views/AIModule/DnFuncMap_EditV2.vue';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refDnFuncMap_Edit,
    CmPrjId_Local,
    PrjId_Session,
  } from '@/views/AIModule/DnFuncMapVueShare';

  import { refDataNode_Detail, refDataNode_Edit } from '@/views/AIModule/DataNodeVueShare';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  export default defineComponent({
    name: 'DataNodeCRUD',
    components: {
      // 组件注册
      // DataNode_EditCom,
      // vDataNode_DetailCom,
      DnFuncMap_EditV2Com,
    },
    props: {
      tabId: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      CmPrjId_Local.value = clsPrivateSessionStorage.cmPrjId;
      const route = useRoute();
      const router = useRouter();
      const strTitle = ref('数据结点维护');

      const refDivDataLst = ref();
      const refDivFieldLst = ref();
      const refDivNodeGraph = ref();
      const refDivFldGraph = ref();

      onMounted(() => {
        DnFuncMapCRUD_EditEx.divFieldLst = refDivFieldLst.value;
        DnFuncMapCRUD_EditEx.divNodeGraph = refDivNodeGraph.value;
        DnFuncMapCRUD_EditEx.divFldGraph = refDivFldGraph.value;

        DnFuncMapCRUD_EditEx.GetPropValue = GetPropValue;
        DnFuncMapCRUD_EditEx.vuebtn_Click = btn_Click;

        const objPage = new DnFuncMapCRUD_EditEx();

        objPage.PageLoadCache();
        //this.myonload();
      });
      function GetPropValue(strPropName: string): any {
        switch (strPropName) {
          case 'tabId':
            return props.tabId;
          case 'divLayout':
            return refDivLayout.value;
          default:
            return '';
        }
        // return '';
      }
      function EditPrjTab(strTabId: string) {
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
            return;
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
        DnFuncMapCRUD_EditEx.btn_Click(strCommandName, strKeyId);
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
        refDivFieldLst,
        refDivNodeGraph,
        refDivFldGraph,
        refDnFuncMap_Edit,
        refDataNode_Edit,
        refDataNode_Detail,
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
<style scoped>
  .myDropdown-menu {
    position: relative;
  }

  .myDropdown-menu ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
  }

  .myDropdown-menu li {
    list-style: none;
    margin-bottom: 5px;
  }

  .myDropdown-menu li:hover {
    background-color: #f2f2f2;
  }

  .myDropdown-menu.show ul {
    display: block;
  }
</style>

<!-- <script>

    /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
    */
    function btn_Click(strCommandName, strKeyId) {
        require(["../js/AIModule/DnFuncMapCRUD_EditEx.js"], function (datanodefuncmap) {
            datanodefuncmap.DnFuncMapCRUD_EditEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        });
    }



    /*
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
    */
    window.onload = function () {
        require(["../js/AIModule/DnFuncMapCRUD_EditEx.js"], function (datanodefuncmap) {
            var objPage = new datanodefuncmap.DnFuncMapCRUD_EditEx();
            objPage.Page_LoadCache();
        });
    }



</script> -->
