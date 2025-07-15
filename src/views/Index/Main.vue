<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <h1>TestSession1</h1>
    <div id="divLayout_Main">
      <a href="/Session/SetString">用户登录</a>
      <span class="text-danger">用户名:</span>
      <input id="txtUserId" type="text" class="text-Info" value="" />

      <span class="text-Info">口令:</span>
      <input id="txtPassword" type="text" class="text-Info" value="" />
      <p>
        <input type="button" class="btn btn-outline-info" value="登录" @click="btnLogin_Click()" />
      </p>
      <p></p>
      <span class="text-danger">通过本页面模型(PageModel)获取Session值:</span>
      <p></p>
      <span class="text-danger">Key:</span> <span id="myKey" class="text-danger">pyf2</span>
      <span class="text-Info">Value:</span>
      <span class="text-info">@Model.GetSession2("pyf2")</span>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  //   import PrjTabRelation_EditCom from '@/views/Table_Field/PrjTabRelation_Edit.vue';
  //   import PrjTabRelation_DetailCom from '@/views/Table_Field/PrjTabRelation_Detail.vue';
  import { Main } from '@/views/Index/Main';
  export default defineComponent({
    name: 'PrjTabRelationCRUD',
    components: {
      // 组件注册
      //   PrjTabRelation_EditCom,
      //   PrjTabRelation_DetailCom,
    },
    setup() {
      const strTitle = ref('工程表关系维护');

      function btnLogin_Click() {
        // const obj = new Main();
        Main.DispUserInfo();
      }
      return {
        strTitle,
        btnLogin_Click,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<style scoped></style>

<!-- 

<script type="text/javascript">
        var strUrl_Session_SetString = "@Model.Url_Session_SetString";
    var strUrl_Session_GetString = "@Model.Url_Session_GetString"; 
    var strWebRoot = "@Model.WebRoot";
    //Js函数，用于界面的CRUD, 后备之用,可能后面派作用
    /// <summary>
    /// 存在关键字记录?
    /// </summary>
    function btnLogin_Click() {
        require(["../js/UserManage/Login.js"], function (login) {
            login.Login.btnLogin_Click();
        });
    }

    function SetSession(Key, Value) {

        $.ajax({
            url: "/Session/SetString",
            cache: false,
            async: false,
            type: 'get',
            dataType: "json",
            data: {
                Key: Key,
                Value: Value
            },
            success: function (data) {
                //$('#myValue').val(text);
                var strKey = data.key;
                var strValue = data.value;

                $('#myKey').html(strKey);
                $('#myValue').html(strValue);
                console.log(strKey + strValue);

            }

        });
    }
</script> -->
