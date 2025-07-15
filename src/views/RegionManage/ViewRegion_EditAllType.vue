<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <div id="divLayout" ref="refDivLayout" class="tab_layout">
      <!-- 标题层 -->

      <div style="position: relative; width: 100%; height: 37px; left: 0px; top: 0px">
        <label id="lblViewTitle" name="lblViewTitle" class="h5"> 界面区域设计 </label>
        <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
        </label>
      </div>

      <div>
        <div class="float-left" style="width: 330px">
          <!--  列表层  -->
          <div id="divQuery" ref="refDivQuery" class="div_List mt-2" runat="server">
            <div class="btn-group" role="group" aria-label="Basic example">
              <label
                ID="Label1"
                name="lblRegionTypeId_q"
                cssClass="col-form-label"
                style="width: 70px"
                >应用类型</label
              >
              <select ID="ddlApplicationTypeId" Class="form-control" style="width: 140px"></select>
            </div>

            <div class="btn-group" role="group" aria-label="Basic example">
              <label
                ID="lblRegionTypeId_q"
                name="lblRegionTypeId_q"
                class="col-form-label"
                style="width: 40px"
                >类型</label
              >
              <select
                ID="ddlRegionTypeId_q"
                name="ddlRegionTypeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
              <button
                id="btnQuery"
                type="submit"
                name="btnQuery"
                class="btn btn-outline-warning text-nowrap"
                @click="btn_Click('Query', '')"
                >查询</button
              >
            </div>

            <div id="divTree" style="margin: 5px; width: 330px">
              <div id="divFunction">
                <div style="float: left"> 区域列表: </div>
                <div style="float: right" class="btn-group btn-group-sm mr-2">
                  <button
                    ID="btnAddNewRecordWithMaxId"
                    class="btn btn-outline-info btn-sm text-nowrap"
                    @click="btn_Click('AddNewRecordWithMaxId', '')"
                    >添加</button
                  >
                  <button
                    ID="btnUpdateRecord"
                    class="btn btn-outline-info btn-sm text-nowrap"
                    @click="btn_Click('Update', '')"
                    >修改</button
                  >
                  <button
                    ID="btnDelRecord"
                    class="btn btn-outline-info btn-sm text-nowrap"
                    @click="btn_Click('Delete', '')"
                    >删除</button
                  >
                </div>
              </div>

              <div id="divUl" style="width: 100%; height: 670px; overflow: auto"></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <iframe
              id="iRegionEdit"
              style="width: 1360px; height: 4000px; overflow-y: hidden"
              scrolling="auto"
              runat="server"
            ></iframe>
          </div>
        </div>
      </div>
      <!--  编辑层  -->
      <div id="divEdit" value="1"></div>
    </div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvViewRegionBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import ViewRegionCRUDEx from '@/views/RegionManage/ViewRegionCRUDEx';
  //   import ViewRegion_EditCom from '@/views/RegionManage/ViewRegion_Edit.vue';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refViewRegion_Edit,
  } from '@/views/RegionManage/ViewRegionVueShare';
  export default defineComponent({
    name: 'ViewRegionCRUD',
    components: {
      // 组件注册
      //   ViewRegion_EditCom,
    },
    setup() {
      const strTitle = ref('界面区域维护');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewRegion':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitViewRegion':
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
          case 'btnCancelViewRegion':
            return strCancelButtonText.value;
          case 'btnSubmitViewRegion':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new ViewRegionCRUDEx();
        objPage.PageLoadCache();
        //this.myonload();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
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
        ViewRegionCRUDEx.btn_Click(strCommandName, strKeyId);
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
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        refViewRegion_Edit,
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
        
        } else {
            $('#' + strKey).css('background', 'url(../images/st_folder.gif) no-repeat left');
            $('#ul' + strKey).hide();
            liLevel1.setAttribute("state", "close");
        
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
    /*
     动态添加编辑区域
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_AddDPV_Edit)
    */
    function AddDPV_Edit(divName4Edit) {
        require(["../js/RegionManage/ViewRegion_EditAllTypeEx.js"], function (viewregion) {
            viewregion.ViewRegion_EditAllTypeEx.AddDPV_Edit(divName4Edit);
        });
    }

    /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
    */
    function btn_Click(strCommandName, strKeyId) {
        require(["../js/RegionManage/ViewRegion_EditAllTypeEx.js"], function (viewregion) {
            viewregion.ViewRegion_EditAllTypeEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        });
    }




    /*
     提交编辑
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_mySubmit)
    */
    function mySubmit(pstrOp) {
        //    alert("提交" + strOp);
        require(["../js/RegionManage/ViewRegion_EditAllTypeEx.js"], function (viewregion) {
            var objPage = new viewregion.ViewRegion_EditAllTypeEx();
            objPage.btnOKUpd_Click();
        });
    }



    /*
     页面导入-在导入页面后运行的函数
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
    */
    window.onload = function () {
        require(["../js/RegionManage/ViewRegion_EditAllTypeEx.js"], function (viewregion) {
            var objPage = new viewregion.ViewRegion_EditAllTypeEx();
            objPage.Page_LoadCache();
        });
    }




</script> -->
