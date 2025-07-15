/*-- -- -- -- -- -- -- -- -- -- --
类名:DataNode_EditEx
表名:DataNode(00050547)
生成代码版本:2020.07.18.1
生成日期:2020/07/19 01:12:47
生成者:
工程名称:AGC
工程ID:0005
相关数据库:tzar.tpddns.cn,19433AGC_CS12
prjDataBaseId:0213
模块中文名:AI模块
模块英文名:AIModule
框架-层名:WA_界面编辑区后台Ex_TS(WA_ViewScript_EditCSEx_TS)
编程语言:TypeScript
== == == == == == == == == == == == 
*/

//import * as $ from "jquery";

import { Format } from '@/ts/PubFun/clsString';
import { vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { DataNode_Edit } from '@/viewsBase/AIModule/DataNode_Edit';

import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCacheB } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';

import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { refDataNode_Edit, divVarSet } from '@/views/AIModule/DataNodeVueShare';

/** DataNode_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class DataNode_EditEx extends DataNode_Edit {
  public tabId_Static = '';
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: number) {
    console.log(strKeyId);
    const objPage: DataNode_EditEx = <DataNode_EditEx>(
      DataNode_Edit.GetPageEditObj('DataNode_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //
        objPage.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //
        objPage.btnAddNewRecord_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        if (strKeyId == 0) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnUpdateRecord_Click(strKeyId);

        break;

      default:
        AccessBtnClickDefault(strCommandName, 'DataNode_EditEx.btn_Click');

        break;
    }
  }

  /** 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlTabId_SelectedIndexChanged() {
    //alert('请在扩展层:DataNode_EditEx中重写该函数！');
    const strTabId = refDataNode_Edit.value.tabId;

    await this.SetDdl_FldId(strTabId);
  }

  public async SetDdl_FldId(strTabId: string) {
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlFldId',
      strTabId,
    ); //编辑区域
  }

  public async SetDdl_TabIdInDivEx(strPrjId: string, strCmPrjId: string) {
    //定义条件字段
    //const strPrjId = "";//定义条件字段
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCacheB(
      divVarSet.refDivEdit,
      'ddlTabId',
      strPrjId,
      strCmPrjId,
    ); //编辑区域
  }
  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click(strKeyId: number) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    const vDataNode_SimStore = usevDataNode_SimStore();
    if (strKeyId == 0) {
      const strMsg = '修改记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objvDataNode_Sim = await vDataNode_SimStore.getObj(strKeyId);

    if (objvDataNode_Sim == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.tabId_Static = objvDataNode_Sim.tabId;
    try {
      if (DataNode_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refDataNode_Edit.value.showDialog();
      }
      divVarSet.refDivEdit = refDataNode_Edit.value.$refs.refDivEdit;
      if (this.bolIsLoadEditRegion == false) {
        this.opType = 'Update';

        this.bolIsLoadEditRegion = true; //
        this.btnSubmitDataNode = '确认修改';
        this.btnCancelDataNode = '取消修改';
        const update = await this.UpdateRecord(strKeyId);
        if (update == false) {
          const strMsg = Format('在修改记录时,显示记录数据不成功!');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
      } else {
        this.opType = 'Update';
        this.btnSubmitDataNode = '确认修改';
        this.btnCancelDataNode = '取消修改';
        const update = await this.UpdateRecord(strKeyId);
        if (update == false) {
          const strMsg = Format('在修改记录时,显示记录数据不成功!');
          console.error(strMsg);
          alert(strMsg);
          return;
        }
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
