import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { TabFeature_Edit } from '@/viewsBase/Table_Field/TabFeature_Edit';
import { divVarSet, refSetFieldValue_Edt } from '@/views/Table_Field/TabFeatureEditVueShare';

import { TabFeatureFldsEx_GetObjLstByTabFeatureId } from '@/ts/L3ForWApiEx/Table_Field/clsTabFeatureFldsExWApi';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';

export class SetFieldValue_EdtEx extends TabFeature_Edit {
  public static strTabId4SetFieldValue = '';
  public static PrjIdCache = '9991';
  public static TabFeatureIdCache = '';
  public keyId_TabFeatureId = '';

  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage: SetFieldValue_EdtEx = <SetFieldValue_EdtEx>(
      TabFeature_Edit.GetPageEditObj('SetFieldValue_EdtEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    console.log(`btnEdit_Click: strCommandName=${strCommandName}, strKeyId=${strKeyId}`);
    switch (strCommandName) {
      case 'Submit':
        objPage.btnSubmit_Click();
        break;
      default:
        break;
    }
  }

  public async btnUpdateRecord_Click(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId) == true) {
      alert('请选择需要修改的记录！');
      return;
    }
    await refSetFieldValue_Edt.value.showDialog();
    // set dialog ref so binding helpers can find inputs
    divVarSet.refDivEdit = refSetFieldValue_Edt.value.$refs.refDivEdit;
    if (refSetFieldValue_Edt.value.BindDdl4EditRegionInDiv) {
      try {
        await refSetFieldValue_Edt.value.BindDdl4EditRegionInDiv();
      } catch (e) {
        console.warn('BindDdl4EditRegionInDiv failed:', e);
      }
    }
    SetFieldValue_EdtEx.TabFeatureIdCache = strKeyId.toString();
    if (this.bolIsLoadEditRegion == false) {
      this.opType = 'Update';
      this.btnSubmitTabFeature = '确认修改';
      this.bolIsLoadEditRegion = true;
      await this.UpdateRecordV2(strKeyId.toString());
    } else {
      this.btnSubmitTabFeature = '确认修改';
      await this.UpdateRecordV2(strKeyId.toString());
    }
  }

  public async UpdateRecordV2(strTabFeatureId: string): Promise<boolean> {
    try {
      const arrTabFeatureFlds = await TabFeatureFldsEx_GetObjLstByTabFeatureId(strTabFeatureId);
      for (const objTabFeatureFldsEN of arrTabFeatureFlds) {
        if (objTabFeatureFldsEN.fldId == '') continue;
        switch (objTabFeatureFldsEN.fieldTypeId) {
          case enumFieldType.KeyField_02:
            // ignore
            break;
          default:
            break;
        }
      }
      return true;
    } catch (e: any) {
      const strMsg = `UpdateRecordV2失败,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  public async btnSubmit_Click() {
    alert('SetFieldValue submit (not implemented)');
  }
}
