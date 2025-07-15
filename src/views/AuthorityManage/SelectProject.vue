<template>
  <div id="divLayout" ref="refDivLayout" class="tab_layout">
    <div style="width: 100%; text-align: center">
      <div style="width: 60%; text-align: center">
        <!--  标题层  -->

        <div name="" style="width: 648px; height: 37px; text-align: center">
          <label id="lblViewTitle" name="lblViewTitle" class="h4">请选择一个工程使用系统</label>
          <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
          </label>
        </div>

        <!--  列表层  -->
        <div id="divList" ref="refDivList" class="div_List">
          <!-- <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div> -->
          <UserPrjGrant_ListCom
            ref="UserPrjGrant_ListEventRef"
            :items="dataList"
            @on-select-prjid="SelectProject"
          ></UserPrjGrant_ListCom>
          <div id="divPager" class="pager" value="1"> </div>
        </div>
      </div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidUserId" type="hidden" value="@Model.seUserId" />
    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { SelectProject } from '@/views/AuthorityManage/SelectProject';
  import UserPrjGrant_ListCom from '@/views/AuthorityManage/UserPrjGrant_List.vue';
  import { clsUserPrjGrantENEx } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantENEx';

  export default defineComponent({
    name: 'PrjTabRelationCRUD',
    components: {
      // 组件注册
      //   PrjTabRelation_EditCom,
      UserPrjGrant_ListCom,
    },
    setup() {
      const UserPrjGrant_ListEventRef = ref();
      const dataList = ref<Array<clsUserPrjGrantENEx>>([]);

      const strTitle = ref('工程表关系维护');
      const ShowLst = async (arrObjLst: Array<clsUserPrjGrantENEx>): Promise<void> => {
        // console.log(arrObjLst);
        // alert('ShowLst in ViewInfoCRUD');
        dataList.value = arrObjLst;
      };
      onMounted(() => {
        SelectProject.ShowLst = ShowLst;
        const objPage = new SelectProject();
        objPage.PageLoad();
        //this.myonload();
      });
      function btnClick(strCommandName: string, strKeyId: string) {
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
        // PrjTabRelationCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btnClick,
        UserPrjGrant_ListEventRef,
        dataList,
        ShowLst,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
    methods: {
      // 方法定义
      async SelectProject(data: any) {
        console.log('data:', data);
        // clsPrivateSessionStorage.viviewId_MainewId = data.viewId;
        const result = await SelectProject.SelectRecord(data.mId);
        console.log(result);
        // router.push({ name: 'account-editViewRegion' });
      },
    },
  });
</script>
<style scoped></style>
<!-- 




/*
在数据表里选择记录信息的事件函数
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnSelectRecordInTab_Click)
*/
function btnSelectRecordInTab_Click(strKeyId) {
   console.log("strUrl_Session_SetString:", strUrl_Session_SetString);
   require(["../js/AuthorityManage/SelectProject.js"], function (userprjgrant) {
       if (strKeyId == "") {
           alert("请选择需要详细信息的记录！");
           return;
       }
       userprjgrant.SelectProject.btnSelectRecordInTab_Click(strKeyId);
   });
}



/*
获取数据列表中的所选记录
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_GetAllCkechedKeys)
*/
function GetAllCkechedKeys(tabName) {
   var arrKeys = tabName.getElementsByTagName('chkInTab');
   alert(arrKeys.length.toString());
}

/*
修改记录
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_IndexPage)
*/
function IndexPage(intPageIndex) {
   console.log("跳转到" + intPageIndex + "页");
   require(["../js/AuthorityManage/SelectProject.js"], function (userprjgrant) {
       userprjgrant.SelectProject.IndexPage(intPageIndex);
   });
}

/*
修改记录
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_JumpToPage)
*/
function JumpToPage() {
   var intCurrPageIndex = $('#input_number').val();
   var intPageIndex = Number(intCurrPageIndex);
   console.log("跳转到" + intPageIndex + "页");
   require(["../js/AuthorityManage/SelectProject.js"], function (userprjgrant) {
       userprjgrant.SelectProject.IndexPage(intPageIndex);
   });
}



/*
修改记录
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_NextPage)
*/
function NextPage() {
   var intCurrPageIndex = $('#hidCurrPageIndex').val();
   var intPageIndex = Number(intCurrPageIndex) + 1;
   console.log("跳转到" + intPageIndex + "页");
   require(["../js/AuthorityManage/SelectProject.js"], function (userprjgrant) {
       userprjgrant.SelectProject.IndexPage(intPageIndex);
   });
}

/*
页面导入-在导入页面后运行的函数
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_Page_Load)
*/
window.onload = function () {
   require(["../js/AuthorityManage/SelectProject.js"], function (userprjgrant) {
       var objPage = new userprjgrant.SelectProject();
       objPage.Page_Load();
   });
}

/*
修改记录
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_PageNum)
*/
function PageNum(intPageIndex) {
   console.log("跳转到" + intPageIndex + "页");
   require(["../js/AuthorityManage/SelectProject.js"], function (userprjgrant) {
       userprjgrant.SelectProject.IndexPage(intPageIndex);
   });
}

/*
修改记录
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_PrevPage)
*/
function PrevPage() {
   var intCurrPageIndex = $('#hidCurrPageIndex').val();
   var intPageIndex = Number(intCurrPageIndex) - 1;
   console.log("跳转到" + intPageIndex + "页");
   require(["../js/AuthorityManage/SelectProject.js"], function (userprjgrant) {
       userprjgrant.SelectProject.IndexPage(intPageIndex);
   });
}

/*
全选数据列表中的所有记录
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_SetAllCkechedKeys)
*/
function SetAllCkechedKeys(tabName) {
   var thisChk = event.target;
   require(["../js/TS/PubFun/clsCommFunc4Web.js"], function (commonfunc) {
       console.log(tabName);
       console.log(thisChk);
       commonfunc.clsCommFunc4Web.SetAllCkechedKeys(tabName, thisChk);
   });
}

/*
修改记录
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_SortBy)
*/
function SortBy(strFldName) {
   console.log("按:" + strFldName + "排序");
   require(["../js/AuthorityManage/SelectProject.js"], function (userprjgrant) {
       userprjgrant.SelectProject.SortBy(strFldName);
   });
}


</script> -->
