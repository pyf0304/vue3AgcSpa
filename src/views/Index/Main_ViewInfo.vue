<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <h1>TestSession1</h1>

    <div> aaa </div>

    <script type="text/javascript">
      var strUrl_Session_SetString = '@Model.Url_Session_SetString';
      var strUrl_Session_GetString = '@Model.Url_Session_GetString';
      var strWebRoot = '@Model.WebRoot';
      //Js函数，用于界面的CRUD, 后备之用,可能后面派作用
      /// <summary>
      /// 存在关键字记录?
      /// </summary>
      function btnLogin_Click() {
        require(['../js/UserManage/Login.js'], function (login) {
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
            //$('#myValue').val(text);
            var strKey = data.key;
            var strValue = data.value;

            $('#myKey').html(strKey);
            $('#myValue').html(strValue);
            console.log(strKey + strValue);
          },
        });
      }
    </script>
  </div></template
>
