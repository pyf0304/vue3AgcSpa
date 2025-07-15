import { ViewInfo_Detail } from '@/viewsBase/PrjInterface/ViewInfo_Detail';
import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';
import { ViewInfoEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import { Format } from '@/ts/PubFun/clsString';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { refViewInfo_Detail } from '@/views/PrjInterface/ViewInfo_UVueShare';

/* vViewInfo_DetailEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewInfo_DetailEx extends ViewInfo_Detail {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
    */
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const objViewInfo_U: ViewInfo_UEx = new ViewInfo_UEx();
    // const objPage: ViewInfo_DetailEx = new ViewInfo_DetailEx(objViewInfo_U);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'vViewInfo_DetailEx.btn_Click');

        break;
    }
  }
  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecord_Click)
   */
  public async btnDetailRecord_Click() {
    this.opType = 'Detail';
    const strKeyId = clsPrivateSessionStorage.viewId_Main;
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    if (this.bolIsLoadDetailRegion == false) {
      //
      //   await this.AddDPV_Detail(this.divName4Detail);
      // 为编辑区绑定下拉框
      //await this.BindDdl4DetailRegion();
      this.bolIsLoadDetailRegion = true; //
      this.DetailRecord4Func(strKeyId);
    } else {
      this.DetailRecord4Func(strKeyId);
    }
  }
  /* 
根据关键字详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord4Func)
 <param name = "sender">参数列表</param>
*/
  public async DetailRecord4Func(strViewId: string) {
    const strThisFuncName = this.DetailRecord4Func.name;
    const viewInfoStore = useviewInfoStore();
    //this.btnCancel_d_ViewInfo = "关闭";
    try {
      const objViewInfoEN = await viewInfoStore.getObj(strViewId);
      const objViewInfoENEx = new clsViewInfoENEx();
      ObjectAssign(objViewInfoENEx, objViewInfoEN);
      await ViewInfoEx_FuncMapByFldName(clsViewInfoENEx.con_DetailTabNameEx, objViewInfoENEx);
      await ViewInfoEx_FuncMapByFldName(clsViewInfoENEx.con_MainTabNameEx, objViewInfoENEx);
      await ViewInfoEx_FuncMapByFldName(
        clsViewInfoENEx.con_ApplicationTypeSimName,
        objViewInfoENEx,
      );
      await ViewInfoEx_FuncMapByFldName(clsViewInfoENEx.con_ViewNameEx, objViewInfoENEx);
      await ViewInfoEx_FuncMapByFldName(clsViewInfoENEx.con_InRelaTabName, objViewInfoENEx);
      await ViewInfoEx_FuncMapByFldName(clsViewInfoENEx.con_OutRelaTabName, objViewInfoENEx);
      refViewInfo_Detail.value.ShowDataFromViewInfoObj(objViewInfoENEx);
    } catch (e) {
      const strMsg = Format(
        '显示详细信息4Func不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
 <param name = "pobjViewInfoEN">表实体类对象</param>
*/
  // public ShowDetailDataFromViewInfoClass4Func(pobjViewInfoENEx: clsViewInfoENEx) {
  //   // const strThisFuncName = this.ShowDetailDataFromViewInfoClass4Func.name;
  //   this.viewNameEx_d = pobjViewInfoENEx.viewNameEx; // 界面名称
  //   this.mainTabNameEx_d = pobjViewInfoENEx.mainTabNameEx; // 主表表名
  //   this.inRelaTabName_d = pobjViewInfoENEx.inRelaTabName; // In表名
  //   this.outRelaTabName_d = pobjViewInfoENEx.outRelaTabName; // Out表名
  //   this.viewFunction_d = pobjViewInfoENEx.viewFunction; // 界面功能
  //   this.applicationTypeSimName_d = pobjViewInfoENEx.applicationTypeSimName; // 应用类型
  //   this.fileName_d = pobjViewInfoENEx.fileName; // 文件名
  //   this.filePath_d = pobjViewInfoENEx.filePath; // 文件路径
  //   this.defaMenuName_d = pobjViewInfoENEx.defaMenuName; // 缺省菜单名
  //   this.dataBaseName_d = pobjViewInfoENEx.dataBaseName; // 数据库名
  //   this.isNeedSetExportFld_d = pobjViewInfoENEx.isNeedSetExportFld; // 设置导出字段
  //   this.userId_d = pobjViewInfoENEx.userId; // 用户Id
  //   this.viewDetail_d = pobjViewInfoENEx.viewDetail; // 界面说明
  // }
}
