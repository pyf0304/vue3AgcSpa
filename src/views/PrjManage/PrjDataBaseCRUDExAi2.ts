import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  divVarSet,
  refPrjDataBase_Detail,
  refPrjDataBase_Edit,
  viewVarSet,
} from '@/views/PrjManage/PrjDataBaseVueShare';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import PrjDataBase_EditEx from '@/views/PrjManage/PrjDataBase_EditEx';
import { PrjDataBaseCRUDAi2 } from '@/viewsBase/PrjManage/PrjDataBaseCRUDAi2';

export default class PrjDataBaseCRUDExAi2 extends PrjDataBaseCRUDAi2 implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public static GetPropValue: (strPropName: string) => string;

  public get pageSize(): number {
    return this._pageSize ?? 10;
  }

  public BindGv(strType: string, strPara: string) {
    this.BindGvCache(strType, strPara);
  }

  public BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'PrjDataBase':
        this.BindGv_PrjDataBase4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  public async onQuery() {
    await this.btnQuery_Click();
  }

  public async onCreate(strCommandName: string, strKeyId: string) {
    const objPageEdit = new PrjDataBase_EditEx('PrjDataBase_EditEx', this);
    console.log(objPageEdit);
    refPrjDataBase_Edit.value.btnPrjDataBase_Edit_Click(strCommandName, strKeyId);
  }

  public async onDetail(strCommandName: string, strKeyId: string) {
    refPrjDataBase_Detail.value.btnPrjDataBase_Detail_Click(strCommandName, strKeyId);
  }

  public async onUpdate(strCommandName: string, strKeyId: string) {
    const objPageEdit = new PrjDataBase_EditEx('PrjDataBase_EditEx', this);
    console.log(objPageEdit);

    const currentKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    if (currentKeyId == null || currentKeyId === '' || currentKeyId === 'undefined') {
      const strMsg = `在修改记录时，获取记录关键字为:${currentKeyId},不成功!`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    refPrjDataBase_Edit.value.btnPrjDataBase_Edit_Click(strCommandName, currentKeyId || strKeyId);
  }

  public async onDelete() {
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length === 0) {
      alert(`请选择需要删除的[${this.thisTabName}]记录!`);
      return;
    }
    await this.btnDelRecord_Click();
  }

  public async onExportAi2() {
    return await this.ExportExcel_PrjDataBaseCacheAi2();
  }

  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage = new PrjDataBaseCRUDExAi2();
    let strMsg = '';

    switch (strCommandName) {
      case 'SetUseStateId':
        break;
      case 'Query':
        await objPage.onQuery();
        break;
      case 'AddNewRecordWithMaxId':
      case 'CreateWithMaxId':
      case 'AddNewRecord':
      case 'Create':
        await objPage.onCreate(strCommandName, strKeyId);
        break;
      case 'Detail':
        await objPage.onDetail(strCommandName, strKeyId);
        break;
      case 'UpdateRecord':
      case 'Update':
        await objPage.onUpdate(strCommandName, strKeyId);
        break;
      case 'ExportExcel':
        await objPage.onExportAi2();
        break;
      case 'DelRecord':
      case 'Delete':
        await objPage.onDelete();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(PrjDataBaseCRUDExAi2.btn_Click)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'dataBaseTypeName|Ex':
        viewVarSet.sortPrjDataBaseBy = `dataBaseTypeName ${sortDirection}|(DataBaseType)PrjDataBase.DataBaseTypeId = DataBaseType.DataBaseTypeId|`;
        break;
      case 'useStateName|Ex':
        viewVarSet.sortPrjDataBaseBy = `useStateName ${sortDirection}|(UseState)PrjDataBase.UseStateId = UseState.UseStateId|`;
        break;
      default:
        viewVarSet.sortPrjDataBaseBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_PrjDataBase4Func(this.listPara.listDiv);
  }
}
