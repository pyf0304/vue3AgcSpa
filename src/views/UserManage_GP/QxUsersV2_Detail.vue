<template>
  <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
    <!-- 详细信息层 -->

    <div
      id="divDetailDialog_QxUsersV2"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="lblDialogTitle_QxUsersV2"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="width: 635px">
          <div class="modal-header">
            <h4 id="lblDialogTitle_QxUsersV2" class="modal-title">模态框（Modal）标题</h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
              >&times;</button
            >
          </div>
          <div class="modal-body">
            <table
              id="tabEdit"
              style="width: 600px"
              class="table table-bordered table-hover table td table-sm"
            >
              <tr>
                <td class="text-right">
                  <span
                    id="spnCreateTime_d"
                    name="spnCreateTime_d"
                    CssClass="col-form-label text-right"
                    >建立时间</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblCreateTime_d"
                    name="lblCreateTime_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
                <td class="text-right">
                  <span
                    id="spnDepartmentIdInt_d"
                    name="spnDepartmentIdInt_d"
                    CssClass="col-form-label text-right"
                    >部门Id</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblDepartmentIdInt_d"
                    name="lblDepartmentIdInt_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnname_d" name="spnname_d" CssClass="col-form-label text-right"
                    >姓名</span
                  >
                </td>
                <td class="text-left">
                  <label id="lblname_d" name="lblname_d" class="text-primary" style="width: 150px">
                  </label>
                </td>
                <td class="text-right">
                  <span id="spnUserName_d" name="spnUserName_d" CssClass="col-form-label text-right"
                    >用户名</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblUserName_d"
                    name="lblUserName_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnPassword_d" name="spnPassword_d" CssClass="col-form-label text-right"
                    >口令</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblPassword_d"
                    name="lblPassword_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
                <td class="text-right">
                  <span id="spnpsalt_d" name="spnpsalt_d" CssClass="col-form-label text-right"
                    >密码盐值</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblpsalt_d"
                    name="lblpsalt_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnnickName_d" name="spnnickName_d" CssClass="col-form-label text-right"
                    >邮箱</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblnickName_d"
                    name="lblnickName_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
                <td class="text-right">
                  <span id="spnheadImg_d" name="spnheadImg_d" CssClass="col-form-label text-right"
                    >邮箱</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblheadImg_d"
                    name="lblheadImg_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnEmail_d" name="spnEmail_d" CssClass="col-form-label text-right"
                    >邮箱</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblEmail_d"
                    name="lblEmail_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
                <td class="text-right">
                  <span id="spnphone_d" name="spnphone_d" CssClass="col-form-label text-right"
                    >电话号码</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblphone_d"
                    name="lblphone_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
              </tr>
              <tr>
                <td class="text-right">
                  <span id="spnremark_d" name="spnremark_d" CssClass="col-form-label text-right"
                    >备注</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblremark_d"
                    name="lblremark_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
                <td class="text-right">
                  <span id="spnstatus_d" name="spnstatus_d" CssClass="col-form-label text-right"
                    >用户状态Id</span
                  >
                </td>
                <td class="text-left">
                  <label
                    id="lblstatus_d"
                    name="lblstatus_d"
                    class="text-primary"
                    style="width: 150px"
                  >
                  </label>
                </td>
              </tr>
            </table>
          </div>
          <div class="modal-footer">
            <button
              id="btnCanceld_QxUsersV2"
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              >关闭</button
            >
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal -->
    </div>
  </div>
</template>
