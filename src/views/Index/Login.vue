<template>
  <div id="divName4Login" class="login" style="width: 450px">
    <!-- <h3>自动生成代码2016版</h3> -->
    <div class="form">
      <label>用户名:</label>
      <input id="txtUserId" type="text" class="text-Info" value="" />
    </div>
    <div class="form">
      <label>密码</label>
      <input id="txtPassword" type="password" class="text-Info" value="" />
    </div>
    <div class="loginform1">
      <input type="button" class="btn btn-outline-info" value="登录" @click="btnLogin_Click()" />
    </div>
    <div class="btnMore">
      <a href="./Webform/UserManage/wfmRegister.aspx">注册</a>
      <a href="./Webform/DownLoad/wfmDownLoadClsFile.aspx?ParentPage=HomePage">文件下载</a>
      <a href="./Webform/News/NewTest.aspx" class="text-nowrap">公告知识查看</a>
      <a href="Test/TestBrowserInfo.aspx" class="text-nowarp" style="width: 100px">浏览器类型</a>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import DetailRegionFldsCRUDEx from '@/views/RegionManage/DetailRegionFldsCRUDEx';

  // import DetailRegionFlds_EditCom from '@/views/RegionManage/DetailRegionFlds_Edit.vue';
  // import DetailRegionFlds_DetailCom from '@/views/RegionManage/DetailRegionFlds_Detail.vue';
  import { Login } from '@/views/Index/Login';

  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/Index/LoginVueShare';
  export default defineComponent({
    name: 'DetailRegionFldsCRUD',
    components: {
      // 组件注册
      // DetailRegionFlds_EditCom,
      // DetailRegionFlds_DetailCom,
    },
    setup() {
      const strTitle = ref('详细区域字段维护');

      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new DetailRegionFldsCRUDEx();
        objPage.PageLoadCache();
        //this.myonload();
      });
      function btnLogin_Click() {
        Login.btnLogin_Click();
      }
      return {
        strTitle,
        btnLogin_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
      };
    },
    watch: {
      // 数据监听
    },
  });
</script>
<script type="text/javascript">
  //Js函数，用于界面的CRUD, 后备之用,可能后面派作用
  /// <summary>
  /// 存在关键字记录?
  /// </summary>
  function btnLogin_Click() {
    require(['../js/Index/Login.js'], function (login) {
      login.Login.btnLogin_Click();
    });
  }

  function SetSession(Key, Value) {
    $.ajax({
      url: '/Session/SetString',
      cache: false,
      async: false,
      type: 'get',
      dataType: 'json',
      data: {
        Key: Key,
        Value: Value,
      },
      success: function (data) {
        var strKey = data.key;
        var strValue = data.value;

        $('#myKey').html(strKey);
        $('#myValue').html(strValue);
        console.log(strKey + strValue);
      },
    });
  }
</script>

<style scoped></style>
