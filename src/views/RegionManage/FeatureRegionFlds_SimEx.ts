import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { FeatureRegionFlds_Sim } from '@/viewsBase/RegionManage/FeatureRegionFlds_Sim';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refFeatureRegionFlds_Detail,
  refFeatureRegionFlds_Edit,
  viewVarSet,
} from '@/views/RegionManage/FeatureRegionFldsVueShare';
import { Format } from '@/ts/PubFun/clsString';
import FeatureRegionFlds_Edit_SetValueEx from '@/views/RegionManage/FeatureRegionFlds_Edit_SetValueEx';

/** FeatureRegionFlds_SimEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class FeatureRegionFlds_SimEx extends FeatureRegionFlds_Sim implements IShowList {
  public applicationTypeId = 0;
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvFeatureRegionFldsBy=  "viewFeatureId";
  /*
   * 每页记录数，在扩展类可以修改
   */
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
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vFeatureRegionFlds]！');
    //this.BindGv_vFeatureRegionFlds();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vFeatureRegionFlds':
        this.BindGv_FeatureRegionFldsCache(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
 */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: FeatureRegionFlds_SimEx;
    if (FeatureRegionFlds_Sim.objPageCRUD == null) {
      FeatureRegionFlds_Sim.objPageCRUD = new FeatureRegionFlds_SimEx();
      objPage = <FeatureRegionFlds_SimEx>FeatureRegionFlds_Sim.objPageCRUD;
    } else {
      objPage = <FeatureRegionFlds_SimEx>FeatureRegionFlds_Sim.objPageCRUD;
    }
    const objPageEdit = new FeatureRegionFlds_Edit_SetValueEx(
      'FeatureRegionFlds_Edit_SetValueEx',
      objPage,
    );

    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetInUse': //自定义功能:启用
        break;
      case 'SetNotInUse': //自定义功能:不用
        break;
      case 'SetGroupName': //自定义功能:设置组名
        break;
      case 'SetTabFeatureId': //自定义功能:设置表功能Id
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refFeatureRegionFlds_Edit.value.btnFeatureRegionFlds_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refFeatureRegionFlds_Edit.value.btnFeatureRegionFlds_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refFeatureRegionFlds_Detail.value.btnFeatureRegionFlds_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refFeatureRegionFlds_Edit.value.btnFeatureRegionFlds_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        objPage.btnReOrder_Click();
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'FeatureRegionFlds_SimEx.btn_Click');

        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      default:
        viewVarSet.sortFeatureRegionFldsBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_FeatureRegionFldsCache(this.listPara.listDiv);
  }
}
