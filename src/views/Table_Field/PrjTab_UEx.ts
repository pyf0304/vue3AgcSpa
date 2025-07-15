/**
 * 类名:PrjTab_UEx(界面:PrjTab_U)
 * 表名:PrjTab(00050009)
 * 版本:2023.07.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/12 23:18:56
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { PrjTab_U } from '@/viewsBase/Table_Field/PrjTab_U';

import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format } from '@/ts/PubFun/clsString';
import PrjTab_DetailEx from '@/views/Table_Field/PrjTab_DetailEx';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubFun } from '@/ts/PubConfig/clsPubFun';
import { PrjTab_Detail } from '@/viewsBase/Table_Field/PrjTab_Detail';
import { refPrjTab_Edit } from '@/views/Table_Field/PrjTabVueShare';
import PrjTab_EditEx from '@/views/Table_Field/PrjTab_EditEx';
/** PrjTab_UEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class PrjTab_UEx extends PrjTab_U implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortPrjTabBy = "TabId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  async BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    // this.BindGv_();
    const strTabId = clsPrivateSessionStorage.tabId_Main;
    await this.ShowDetailRecord(strTabId);
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    const strTabId = clsPrivateSessionStorage.tabId_Main;
    switch (strType) {
      case 'PrjTab':
        // alert('该类没有绑定该函数：[this.BindGv_]！');
        //this.BindGv_();

        await this.ShowDetailRecord(strTabId);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: PrjTab_UEx;
    if (PrjTab_U.objPageCRUD == null) {
      PrjTab_U.objPageCRUD = new PrjTab_UEx();
      objPage = <PrjTab_UEx>PrjTab_U.objPageCRUD;
    } else {
      objPage = <PrjTab_UEx>PrjTab_U.objPageCRUD;
    }
    const objPageEdit = new PrjTab_EditEx('PrjTab_EditEx', objPage);
    console.log(objPageEdit);
    const strMsg = '';
    // const arrKeyIds = GetCheckedKeyIdsInDivObj(PrjTab_U.divDataList);
    // strKeyId = GetFirstCheckedKeyIdInDivObj(PrjTab_U.divDataList);
    strKeyId = clsPrivateSessionStorage.tabId_Main;
    switch (strCommandName) {
      case 'Query': //查询记录
        // objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refPrjTab_Edit.value.btnPrjTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refPrjTab_Edit.value.btnPrjTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refPrjTab_Edit.value.btnPrjTab_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refPrjTab_Edit.value.btnPrjTab_Edit_Click(strCommandName, strKeyId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTab_UEx.btnClick');
        alert(strMsg);
        break;
    }
  }

  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // PrjTab_Edit.UserIdStatic = clsPubLocalStorage.userId;

      clsPubFun.SetCommFun4BL();
      // 为查询区绑定下拉框
      //await this.BindDdl4QueryRegion();

      //this.hidSortPrjTabBy = "viewId Asc";
      ////2、显示无条件的表内容在GridView中
      //await this.BindGv_vPrjTabCache();
      const strTabId = clsPrivateSessionStorage.tabId_Main;
      await this.ShowDetailRecord(strTabId);
      //2、显示无条件的表内容在GridView中
      // await this.();
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async ShowDetailRecord(strTabId: string) {
    const objPrjTab_UEx = new PrjTab_UEx();
    const objPrjTab_Detail = new PrjTab_DetailEx(objPrjTab_UEx);
    PrjTab_Detail.strPageDispModeId = '00'; //非弹出框
    await objPrjTab_Detail.btnDetailRecord_Click(strTabId);
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
