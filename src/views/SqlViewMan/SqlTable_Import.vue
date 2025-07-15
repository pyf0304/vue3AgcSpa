<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!-- 标题层  -->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5"> Sql数据表导入 </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!-- 查询层 -->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <!-- <td class="text-right">
            <label
              id="lblSqlTableId_q"
              name="lblSqlTableId_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              Sql视图Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSqlTableId_q"
              name="txtSqlTableId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td> -->
          <td class="text-right">
            <label
              id="lblTableName_q"
              name="lblTableName_q"
              class="col-form-label text-right"
              style="width: 60px"
            >
              表名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTableName_q"
              name="txtTableName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblxtype_q"
              name="lblxtype_q"
              class="col-form-label text-right"
              style="width: 90px"
            >
              Sql表类型
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtxtype_q"
              name="txtxtype_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>

          <td class="text-right">
            <span title="刷新从数据库来的数据表" style="display: inline-block; width: 150px">
              <input id="chkRefreshSqlTable_q" type="checkbox" name="chkRefreshSqlTable_q" />
              <label for="chkRefreshSqlTable_q">刷新Sql数据表</label>
            </span>
          </td>
          <td class="nav-item ml-3">
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="nav-item ml-3">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
            >
          </td>
        </tr>
      </table>
    </div>
    <!--  功能区  -->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblSqlTableList"
            name="lblSqlTableList"
            class="col-form-label text-info"
            style="width: 250px"
          >
            Sql表列表
          </label>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnImportSelectedTables"
            name="btnImportSelectedTables"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('ImportSelectedTables', '')"
            >导入所选Sql表</button
          >
        </li>
      </ul>
    </div>
    <!-- 列表层 -->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List" style="width: 800px"> </div>
      <div id="divPager" class="pager"> </div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import SqlTableCRUDEx from '@/views/SqlViewMan/SqlTableCRUDEx';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/views/SqlViewMan/SqlTableVueShare';
  export default defineComponent({
    name: 'SqlTableCRUD',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('Sql表维护');
      //   const Ref = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new SqlTableCRUDEx();
        objPage.PageLoadCache();
        //this.myonload();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          default:
            break;
        }
        SqlTableCRUDEx.btn_Click(strCommandName, strKeyId);
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
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      //this.myonload();
    },
  });
</script>
<style scoped></style>
<!-- 
<script>

     /**
      按钮单击,用于调用Js函数中btn_Click
     (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
     **/
    function btn_Click(strCommandName, strKeyId) {
       require(["../js/SqlViewMan/SqlTableCRUDEx.js"], function(sqltable) {
    sqltable.SqlTableCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
    });
    }

     /**
      页面导入-在导入页面后运行的函数
     (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
     **/
    window.onload = function() {
       require(["../js/SqlViewMan/SqlTableCRUDEx.js"], function(sqltable) {
  
    });
    }
</script>
<script>
    // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
    function sheet2blob(sheet, sheetName)
    {
    sheetName = sheetName || 'sheet1';
    const workbook = {
    SheetNames: [sheetName],
    Sheets: {}
    }
    workbook.Sheets[sheetName] = sheet;
    // 生成excel的配置项
    const wopts = {
    bookType: 'xlsx', // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: 'binary'
    }
    const wbout = XLSX.write(workbook, wopts);
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
    // 字符串转ArrayBuffer
    function s2ab(s)
    {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
    }
    return blob;
    }
  
    function openDownloadDialog(url, saveName)
    {
    if (typeof url == 'object' && url instanceof Blob) {
    url = URL.createObjectURL(url); // 创建blob地址
    }
    const aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    const event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
    }
    //所有用户自定义的JS函数建议都放在这里
    function exportSpecialExcel_pyf(arrData, strFileName)
    {
    const sheet = XLSX.utils.aoa_to_sheet(arrData);
        openDownloadDialog(sheet2blob(sheet), strFileName);
    }
</script> -->
