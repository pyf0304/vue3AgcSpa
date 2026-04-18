<%@ Page Language="c#" CodeBehind="wfmPrjTab_Copy.aspx.cs" AutoEventWireup="True" Inherits="AGC.Webform.wfmPrjTab_Copy" %>

<%@ Register TagPrefix="uc1" TagName="wucPrjTab" Src="wucPrjTab.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>表PrjTab的查询、修改、删除、添加记录</title>
    
    <script type="text/javascript" src="../../Scripts/jquery-3.6.0.min.js"></script>
    <link href="../../Content/bootstrap.min.css" rel="stylesheet" />
    <script type="text/javascript" src="../../Scripts/bootstrap.min.js"></script>
    <style type="text/css">
        body {
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <form id="Form1" runat="server">

        <div id="tabTitle" style="z-index: 101; width: 100%; top: 8px">
            <asp:Label ID="lblViewTile" runat="server" CssClass="h5">工程表的复制</asp:Label>
        </div>
        <div style="width: 100%;" class="mt-2">
            <div class="row">
                <div class="btn-group col-2" role="group" aria-label="Basic example">
                    <asp:Label ID="lblTabIdq" runat="server" Width="50px" CssClass="text-secondary">表ID</asp:Label>

                    <asp:TextBox ID="txtTabIdq" runat="server" Width="120px"></asp:TextBox>
                </div>
                <div class="btn-group col-2" role="group" aria-label="Basic example">
                    <asp:Label ID="lblTabNameq" runat="server" Width="32px" CssClass="text-secondary">  表名</asp:Label>

                    <asp:TextBox ID="txtTabNameq"
                        runat="server" Width="200px"></asp:TextBox>
                </div>
                <div class="btn-group col-2" role="group" aria-label="Basic example">
                    <asp:Label ID="lblTabCnNameq" runat="server" Width="70px" CssClass="text-secondary">表中文名</asp:Label>
                    <asp:TextBox ID="txtTabCnNameq" runat="server" Width="150px"></asp:TextBox>
                </div>

            </div>
            <div class="row">

                <div class="btn-group col-2" role="group" aria-label="Basic example">

                    <asp:Label ID="lblPrjIdq" runat="server" Width="50px" CssClass="text-secondary">源工程</asp:Label>

                    <asp:DropDownList ID="ddlPrjIdq"
                        runat="server" Width="128px" OnSelectedIndexChanged="ddlPrjId_q_SelectedIndexChanged" AutoPostBack="True">
                    </asp:DropDownList>
                </div>
                <div class="btn-group col-2" role="group" aria-label="Basic example">
                    <asp:Label ID="Label5" runat="server" Width="56px" CssClass="text-secondary">模块</asp:Label>
                    <asp:DropDownList ID="ddlFuncModuleId" runat="server" Width="387px">
                    </asp:DropDownList>
                </div>
                <div class="btn-group col-2" role="group" aria-label="Basic example">

                    <asp:Label ID="lblDataBaseNameq"
                        runat="server" Width="70px" CssClass="text-secondary">数据库名</asp:Label>

                    <asp:TextBox ID="txtDataBaseNameq" runat="server" Width="150px"></asp:TextBox>
                </div>
                <div class="btn-group col-1" role="group" aria-label="Basic example">
                    <asp:Button ID="btnQuery"
                        runat="server" Text="查询" OnClick="btnQuery_Click" CssClass="btn btn-outline-warning btn-sm"></asp:Button>

                </div>

            </div>

        </div>
        <div id="divGvPrjTab" class="mt-2" style="width: 100%;" runat="server">

            <div style="width: 785px; position: relative; height: 40px; left: 0px; top: 0px;">
                <ul class="nav">
                    <li class="nav-item">
                        <asp:Label ID="lblPrjTabList" runat="server" CssClass="h6" Width="106px">工程表列表</asp:Label>
                    </li>
                    <li class="nav-item ml-2">
                        <asp:Button ID="btnCopyPrjTab"
                            runat="server" Text="复制工程表" CssClass="btn btn-outline-info btn-sm" OnClick="btnCopyPrjTab_Click"></asp:Button>
                    </li>
                    <li class="nav-item ml-2">
                        <asp:Button ID="btnExportExcel4Dg"
                            runat="server" Text="导出Excel" CssClass="btn btn-outline-info btn-sm" OnClick="btnExportExcel4Dg_Click"></asp:Button>
                    </li>
                    <li class="nav-item ml-2">
                        <asp:Label ID="lblMsg"
                            runat="server" Width="292px" CssClass="text-warning"></asp:Label>
                    </li>

                </ul>
            </div>
            <div class="mt-2">
                <asp:GridView ID="gvPrjTab" runat="server" AllowPaging="True" AllowSorting="True"
                    AutoGenerateColumns="False" BackColor="White" BorderColor="#E7E7FF" BorderStyle="None"
                    BorderWidth="1px" CellPadding="3" CssClass="table table-striped table-bordered table-condensed" DataKeyNames="TabId" GridLines="Horizontal" OnPageIndexChanging="gvPrjTab_PageIndexChanging" OnRowCommand="gvPrjTab_RowCommand"
                    OnRowCreated="gvPrjTab_RowCreated" OnSorting="gvPrjTab_Sorting" Width="100%">
                    <FooterStyle BackColor="#B5C7DE" ForeColor="#4A3C8C" />
                    <Columns>
                        <asp:TemplateField HeaderText="全选">
                            <HeaderTemplate>
                                <asp:LinkButton ID="lbSelAll" runat="server" CommandName="lbSelAll" CssClass="btn btn-link btn-sm text-nowrap">全选</asp:LinkButton>
                            </HeaderTemplate>
                            <HeaderStyle Width="35px" />
                            <ItemTemplate>
                                <asp:CheckBox ID="chkCheckRec" runat="server" />
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:BoundField DataField="TabId" HeaderText="表ID" SortExpression="TabId" />
                        <asp:BoundField DataField="TabName" HeaderText="表名" SortExpression="TabName" />
                        <asp:BoundField DataField="TabCnName" HeaderText="表中文名" SortExpression="TabCnName" />
                        <asp:BoundField DataField="PrjName" HeaderText="工程名称" SortExpression="PrjName" />
                        <asp:BoundField DataField="FuncModuleName" HeaderText="模块名称" SortExpression="FuncModuleName" />
                        <asp:BoundField DataField="DataBaseName" HeaderText="数据库名" SortExpression="DataBaseName"
                            Visible="False" />
                        <asp:BoundField DataField="TabStateName" HeaderText="表状态名称" SortExpression="TabStateName"
                            Visible="False" />
                        <asp:BoundField DataField="UpdDate" SortExpression="UpdDate" HeaderText="修改日期"></asp:BoundField>
                        <asp:BoundField DataField="Memo" HeaderText="说明" SortExpression="Memo" Visible="False" />
                    </Columns>
                    <PagerTemplate>
                        <font style="background-color: #c0c0c0">共有记录:</font>
                        <asp:Label ID="lblRecCount" runat="server" CssClass="Label_DefaInPager" ForeColor="#000066"
                            Width="46px">0</asp:Label>
                        <span style="background-color: #c0c0c0">
                            <div style="display: inline; width: 16px;">
                            </div>
                        </span><font style="background-color: #c0c0c0">总页数:</font>
                        <asp:Label ID="lblAllPages" runat="server" CssClass="Label_DefaInPager" ForeColor="#000066">0</asp:Label>
                        <div style="display: inline; width: 26px;">
                        </div>
                        <span style="background-color: #c0c0c0">当前页:
                                        <asp:Label ID="lblCurrentPage" runat="server" CssClass="Label_DefaInPager" ForeColor="#000066">0</asp:Label>
                            <div style="display: inline; width: 16px;">
                            </div>
                            <asp:Button ID="btnPrevPage" runat="server" CommandArgument="Prev" CommandName="Page"
                                CssClass="btn btn-outline-warning btn-sm small" Text="上一页" Width="50px" />

                            <span style="font-family: Verdana"></span>
                            <asp:Button ID="btnNextPage" runat="server" CommandArgument="Next" CommandName="Page"
                                CssClass="btn btn-outline-warning btn-sm small" Text="下一页" Width="50px" />
                            到第                                       
                            <asp:TextBox ID="txtJump2Page" runat="server" CssClass="TextBox_DefaInPager" Width="35px"></asp:TextBox>页
                                        <asp:Button ID="btnJumpPage" runat="server" CommandName="Page" CssClass="btn btn-outline-warning btn-sm small"
                                            OnClick="btnJumpPage_Click" Text="确定" Width="35px" />
                            <asp:CompareValidator ID="CompareValidator" runat="server" ControlToValidate="txtJump2Page"
                                ErrorMessage="错误！" ForeColor="DarkOrange" Operator="DataTypeCheck" Type="Integer"></asp:CompareValidator></span>
                    </PagerTemplate>
                    <RowStyle BackColor="#E7E7FF" ForeColor="#4A3C8C" />
                    <EmptyDataTemplate>
                        <center> 无记录！</center>
                    </EmptyDataTemplate>
                    <SelectedRowStyle BackColor="#738A9C" Font-Bold="True" ForeColor="#F7F7F7" />
                    <PagerStyle BackColor="#E7E7FF" ForeColor="#4A3C8C" HorizontalAlign="Right" />
                    <HeaderStyle BackColor="#4A3C8C" Font-Bold="True" ForeColor="#F7F7F7" />
                    <AlternatingRowStyle BackColor="#F7F7F7" />
                </asp:GridView>
            </div>
        </div>
    </form>
</body>
</html>
