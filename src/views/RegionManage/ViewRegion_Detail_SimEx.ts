import { Format } from '@/ts/PubFun/clsString';
import { ViewRegion_Detail_Sim } from '@/viewsBase/RegionManage/ViewRegion_Detail_Sim';
import { clsViewRegionENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { ViewRegionEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { refViewRegion_Detail_Sim } from '@/views/RegionManage/ViewRegion_UVueShare';

/* ViewRegion_Detail_SimEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewRegion_Detail_SimEx extends ViewRegion_Detail_Sim {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
    */
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const objViewRegion_U: ViewRegion_UEx = new ViewRegion_UEx();
    // const objPage: ViewRegion_Detail_SimEx = new ViewRegion_Detail_SimEx(objViewRegion_U);

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ViewRegion_Detail_SimEx.btn_Click');

        break;
    }
  }
  /* 
根据关键字详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord4Func)
 <param name = "sender">参数列表</param>
*/
  public async DetailRecord4Func(strRegionId: string) {
    const strThisFuncName = this.DetailRecord4Func.name;
    const viewRegionStore = useviewRegionStore();
    //this.btnCancel_d_ViewRegion = "关闭";
    try {
      const objViewRegionEN = await viewRegionStore.getObj(strRegionId);

      const objViewRegionENEx = new clsViewRegionENEx();
      ObjectAssign(objViewRegionENEx, objViewRegionEN);
      objViewRegionENEx.prjId = clsPrivateSessionStorage.currSelPrjId;

      await ViewRegionEx_FuncMapByFldName(
        clsViewRegionENEx.con_RegionTypeSimName,
        objViewRegionENEx,
      );
      await ViewRegionEx_FuncMapByFldName(
        clsViewRegionENEx.con_ContainerTypeName,
        objViewRegionENEx,
      );
      //await ViewRegionEx_FuncMapByFldName(clsViewRegionENEx.con_CmPrjName, objViewRegionENEx);
      await ViewRegionEx_FuncMapByFldName(clsViewRegionENEx.con_TabName, objViewRegionENEx);
      await ViewRegionEx_FuncMapByFldName(clsViewRegionENEx.con_InOutTypeName, objViewRegionENEx);
      await ViewRegionEx_FuncMapByFldName(
        clsViewRegionENEx.con_PageDispModeName,
        objViewRegionENEx,
      );
      await ViewRegionEx_FuncMapByFldName(clsViewRegionENEx.con_FldCountInUse, objViewRegionENEx);

      refViewRegion_Detail_Sim.value.ShowDataFromViewRegionObj(objViewRegionENEx);
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
}
