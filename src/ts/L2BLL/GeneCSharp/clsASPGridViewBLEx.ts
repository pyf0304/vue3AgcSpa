import { ASPGridViewEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPGridViewENEx';
import { ASPHeaderTemplateEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHeaderTemplateENEx';
import { ASPTemplateFieldEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPTemplateFieldENEx';
import { ASPHeaderStyleEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPHeaderStyleENEx';
import { ASPLinkButtonEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLinkButtonENEx';
import { ASPItemTemplateEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPItemTemplateENEx';
import { ASPCheckBoxEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPCheckBoxENEx';
import { ASPPagerTemplateEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPPagerTemplateENEx';
import { ASPBoundFieldEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPBoundFieldENEx';
import { clsViewInfoENEx4GC } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx4GC';

/// <summary>
/// ASPNET表格视图(ASPNETGridView)
/// 数据源类型:SQL表
/// (AutoGCLib.AutoGC6CsBusiness:AGenBusinessLogicExCode)
/// </summary>
export class clsASPGridViewBLEx {
  static GeneHtmlControl(objASPGridViewENEx: ASPGridViewEx, objContainer: HTMLElement) {
    console.error(objASPGridViewENEx, objContainer);
    throw new Error('Method not implemented.');
  }

  public static CreateGridView(objViewInfoENEx: clsViewInfoENEx4GC): ASPGridViewEx {
    const objASPGridViewENExDG: ASPGridViewEx = new ASPGridViewEx();
    objASPGridViewENExDG.aspControlId = `gv${objViewInfoENEx.objMainPrjTab.tabName}`;
    objASPGridViewENExDG.aspControlName = `gv${objViewInfoENEx.objMainPrjTab.tabName}`;
    const objASPTemplateFieldENEx: ASPTemplateFieldEx = new ASPTemplateFieldEx();
    objASPTemplateFieldENEx.aspControlId = `tfSelAll`;
    objASPTemplateFieldENEx.aspControlName = `tfSelAll`;
    objASPGridViewENExDG.arrSubAspControlLst2.push(objASPTemplateFieldENEx);

    const objASPHeaderStyleENEx: ASPHeaderStyleEx = new ASPHeaderStyleEx();
    objASPHeaderStyleENEx.aspControlId = `hsSelAll`;
    objASPHeaderStyleENEx.aspControlName = `hsSelAll`;
    objASPHeaderStyleENEx.width = 30;
    objASPTemplateFieldENEx.arrSubAspControlLst2.push(objASPHeaderStyleENEx);

    const objASPHeaderTemplateENEx: ASPHeaderTemplateEx = new ASPHeaderTemplateEx();
    objASPHeaderTemplateENEx.aspControlId = `htSelAll`;
    objASPHeaderTemplateENEx.aspControlName = `htSelAll`;
    objASPHeaderTemplateENEx.width = 30;
    objASPTemplateFieldENEx.arrSubAspControlLst2.push(objASPHeaderTemplateENEx);

    const objASPLinkButtonENEx: ASPLinkButtonEx = new ASPLinkButtonEx();
    objASPLinkButtonENEx.aspControlId = `lbSelAll`;
    objASPLinkButtonENEx.aspControlName = `lbSelAll`;
    objASPLinkButtonENEx.commandName = 'lbSelAll';
    objASPLinkButtonENEx.cssClass = 'DgSelAll';
    objASPLinkButtonENEx.text = '全选';
    //<asp:Button ID = "lbSelAll" commandName = "lbSelAll" runat = "server" cssClass = "DgSelAll">全选</asp:Button>

    objASPLinkButtonENEx.width = 30;
    objASPHeaderTemplateENEx.arrSubAspControlLst2.push(objASPLinkButtonENEx);
    const objASPItemTemplateENEx: ASPItemTemplateEx = new ASPItemTemplateEx();
    objASPItemTemplateENEx.aspControlId = `itSelAll`;
    objASPItemTemplateENEx.aspControlName = `itSelAll`;
    objASPItemTemplateENEx.width = 30;
    objASPTemplateFieldENEx.arrSubAspControlLst2.push(objASPItemTemplateENEx);
    const objASPCheckBoxENEx: ASPCheckBoxEx = new ASPCheckBoxEx();
    objASPCheckBoxENEx.aspControlId = `chkCheckRec`;
    objASPCheckBoxENEx.aspControlName = `chkCheckRec`;
    //<asp:CheckBox ID = "chkCheckRec" runat = "server"></asp:CheckBox>

    objASPItemTemplateENEx.arrSubAspControlLst2.push(objASPCheckBoxENEx);
    // const objASPBoundFieldENEx = new ASPBoundFieldEx();
    for (const objQryRegionFldsEx of objViewInfoENEx.arrQryRegionFldSet) {
      const objASPBoundFieldENEx: ASPBoundFieldEx = new ASPBoundFieldEx();
      objASPBoundFieldENEx.aspControlId = `bf${objQryRegionFldsEx.objFieldTabENEx.fldName}`;
      objASPBoundFieldENEx.aspControlName = `bf${objQryRegionFldsEx.objFieldTabENEx.fldName}`;
      objASPBoundFieldENEx.DataField = objQryRegionFldsEx.objFieldTabENEx.fldName;
      objASPBoundFieldENEx.sortExpression = objQryRegionFldsEx.objFieldTabENEx.fldName;
      objASPBoundFieldENEx.headerText = objQryRegionFldsEx.objFieldTabENEx.caption;

      objASPGridViewENExDG.arrSubAspControlLst2.push(objASPBoundFieldENEx);
    }

    //修改按钮－－－－－－－－－－－－－－－－
    //<asp:Button ID = "lbUpdate" runat = "Server" commandName = "Update" Text = "修改"></asp:Button>

    const objASPTemplateFieldENExUpdate: ASPTemplateFieldEx = new ASPTemplateFieldEx();
    objASPTemplateFieldENExUpdate.aspControlId = `tfUpdate`;
    objASPTemplateFieldENExUpdate.aspControlName = `tfUpdate`;
    objASPGridViewENExDG.arrSubAspControlLst2.push(objASPTemplateFieldENExUpdate);

    const objASPItemTemplateENExUpdate: ASPItemTemplateEx = new ASPItemTemplateEx();
    objASPItemTemplateENExUpdate.aspControlId = `itUpdate`;
    objASPItemTemplateENExUpdate.aspControlName = `itUpdate`;
    objASPItemTemplateENExUpdate.width = 30;
    objASPTemplateFieldENExUpdate.arrSubAspControlLst2.push(objASPItemTemplateENExUpdate);

    const objASPLinkButtonENExUpdate: ASPLinkButtonEx = new ASPLinkButtonEx();
    objASPLinkButtonENExUpdate.aspControlId = `lbUpdate`;
    objASPLinkButtonENExUpdate.aspControlName = `lbUpdate`;
    objASPLinkButtonENExUpdate.commandName = 'Update';
    //objASPLinkButtonENExUpdate.cssClass = "DgSelAll";
    objASPLinkButtonENExUpdate.text = '修改';

    objASPItemTemplateENExUpdate.arrSubAspControlLst2.push(objASPLinkButtonENExUpdate);

    //修改按钮＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    //删除按钮－－－－－－－－－－－－－－－－
    //<asp:Button ID = "lbDelete" runat = "Server" commandName = "Delete" Text = "删除"></asp:Button>

    const objASPTemplateFieldENExDelete: ASPTemplateFieldEx = new ASPTemplateFieldEx();
    objASPTemplateFieldENExDelete.aspControlId = `tfDelete`;
    objASPTemplateFieldENExDelete.aspControlName = `tfDelete`;
    objASPGridViewENExDG.arrSubAspControlLst2.push(objASPTemplateFieldENExDelete);

    const objASPItemTemplateENExDelete: ASPItemTemplateEx = new ASPItemTemplateEx();
    objASPItemTemplateENExDelete.aspControlId = `itDelete`;
    objASPItemTemplateENExDelete.aspControlName = `itDelete`;
    objASPItemTemplateENExDelete.width = 30;
    objASPTemplateFieldENExDelete.arrSubAspControlLst2.push(objASPItemTemplateENExDelete);

    const objASPLinkButtonENExDelete: ASPLinkButtonEx = new ASPLinkButtonEx();
    objASPLinkButtonENExDelete.aspControlId = `lbDelete`;
    objASPLinkButtonENExDelete.aspControlName = `lbDelete`;
    objASPLinkButtonENExDelete.commandName = 'Delete';
    //objASPLinkButtonENExDelete.cssClass = "DgSelAll";
    objASPLinkButtonENExDelete.text = '删除';

    objASPItemTemplateENExDelete.arrSubAspControlLst2.push(objASPLinkButtonENExDelete);

    //删除按钮＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    const objASPPagerTemplateENEx: ASPPagerTemplateEx = new ASPPagerTemplateEx();
    objASPPagerTemplateENEx.aspControlId = 'PagerTemplate';
    objASPPagerTemplateENEx.aspControlName = 'PagerTemplate';

    objASPGridViewENExDG.objASPPagerTemplateENEx = objASPPagerTemplateENEx;

    return objASPGridViewENExDG;
  }
}
