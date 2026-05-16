/**
 * 类名:FunctionTemplate_EditAi(界面:FunctionTemplateCRUD,00050347)
 * 表名:FunctionTemplate
 * 版本:2026.04.30
 * 生成者:
 * 模块中文名:PrjFunction
 * 编程语言:TypeScript
 **/
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  FunctionTemplate_GetMaxStrIdAsync,
  FunctionTemplate_CheckPropertyNew,
  FunctionTemplate_AddNewRecordWithMaxIdAsync,
  FunctionTemplate_ReFreshCache,
  FunctionTemplate_GetUniCondStr,
  FunctionTemplate_IsExistRecordAsync,
  FunctionTemplate_GetUniCondStr4Update,
  FunctionTemplate_IsExistAsync,
  FunctionTemplate_GetObjByFunctionTemplateIdAsync,
  FunctionTemplate_CheckProperty4Update,
  FunctionTemplate_UpdateRecordAsync,
  FunctionTemplate_EditRecordExAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import {
  FunctionTemplate_DeleteKeyIdCache,
  divVarSet,
  refFunctionTemplate_Edit,
} from '@/views/PrjFunction/FunctionTemplateVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

/** FunctionTemplate_EditAi 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class FunctionTemplate_EditAi {
  protected _className = 'Unknown';

  get className(): string {
    return this._className;
  }

  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public isShowMsg = true;
  public tag = '';
  public static strPageDispModeId = '01';
  public iShowList: IShowList | null;
  public bolIsLoadEditRegion = false;
  public divName4Edit = 'divEditLayout';

  public get thisDivEdit(): HTMLDivElement {
    return divVarSet.refDivEdit;
  }

  public get thisDivLayout(): HTMLDivElement {
    return divVarSet.refDivLayout;
  }

  constructor(strClassName: string, objShowList: IShowList | null) {
    this._className = strClassName;
    this.iShowList = objShowList;
  }

  /** 隐藏对话框 */
  public HideDialog_FunctionTemplate() {
    if (FunctionTemplate_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refFunctionTemplate_Edit.value.hideDialog();
    }
  }

  /** 显示对话框 */
  public async ShowDialog_FunctionTemplate(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_FunctionTemplate.name;
    if (FunctionTemplate_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refFunctionTemplate_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refFunctionTemplate_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitFunctionTemplate = '确认添加';
      this.btnCancelFunctionTemplate = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitFunctionTemplate = '确认修改';
      this.btnCancelFunctionTemplate = '取消修改';
    }
    return true;
  }

  /** 添加新记录 */
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_FunctionTemplate(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsFunctionTemplateEN._PrimaryTypeId) > -1) {
        await this.AddNewRecordWithMaxId();
      } else {
        await this.AddNewRecord();
      }
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 在数据表里修改记录 */
  public async btnUpdateRecordInTab_Click(strFunctionTemplateId: string) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (IsNullOrEmpty(strFunctionTemplateId) == true) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_FunctionTemplate(this.opType);
      if (bolIsSuccess == false) return;
      await this.UpdateRecord(strFunctionTemplateId);
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 修改记录 */
  public async btnUpdateRecord_Click(strFunctionTemplateId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strFunctionTemplateId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_FunctionTemplate(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true;
      const update = await this.UpdateRecord(strFunctionTemplateId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 确认提交按钮点击事件 */
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const strCommandText: string = this.btnSubmitFunctionTemplate;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitFunctionTemplate = '确认添加';
          this.btnCancelFunctionTemplate = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          if (['02', '03', '06'].indexOf(clsFunctionTemplateEN._PrimaryTypeId) > -1) {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (FunctionTemplate_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_FunctionTemplate();
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsFunctionTemplateEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (FunctionTemplate_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refFunctionTemplate_Edit.value.hideDialog();
              }
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsFunctionTemplateEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In FunctionTemplate_EditAi.btnSubmit_Click)';
          alert(strInfo);
          if (returnBool == true) {
            if (FunctionTemplate_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refFunctionTemplate_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsFunctionTemplateEN._CurrTabName, this.keyId);
          }
          break;
        default:
          strMsg = Format(
            'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
        strCommandText,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置关键字只读 */
  public SetKeyReadOnly(bolReadonly: boolean) {
    const txtFunctionTemplateId = document.getElementById(
      'txtFunctionTemplateId',
    ) as HTMLInputElement | null;
    if (txtFunctionTemplateId != null) {
      txtFunctionTemplateId.readOnly = bolReadonly;
    }
  }

  /** 为插入记录做准备工作 */
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    refFunctionTemplate_Edit.value.Clear();
    try {
      const returnString = await FunctionTemplate_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表FunctionTemplate的最大关键字为空,不成功,请检查!');
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 为插入记录做准备工作（使用最大值ID） */
  public async AddNewRecordWithMaxId() {
    const strThisFuncName = this.AddNewRecordWithMaxId.name;
    refFunctionTemplate_Edit.value.Clear();
    try {
      const returnString = await FunctionTemplate_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表FunctionTemplate的最大关键字为空,不成功,请检查!');
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 添加新记录,保存函数 */
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objFunctionTemplateEN;
    try {
      objFunctionTemplateEN = await refFunctionTemplate_Edit.value.GetEditDataFunctionTemplateObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    try {
      FunctionTemplate_CheckPropertyNew(objFunctionTemplateEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    try {
      const bolIsExistCond = await this.CheckUniCond4Add(objFunctionTemplateEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await FunctionTemplate_AddNewRecordWithMaxIdAsync(objFunctionTemplateEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId = returnKeyId;
        returnBool = true;
      }
      if (returnBool == true) {
        FunctionTemplate_ReFreshCache();
        const strInfo = `添加[函数模板(FunctionTemplate)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[函数模板(FunctionTemplate)]记录不成功!`;
        alert(strInfo);
      }
      return returnBool;
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 为添加记录检查唯一性条件 */
  public async CheckUniCond4Add(objFunctionTemplateEN: clsFunctionTemplateEN): Promise<boolean> {
    const strUniquenessCondition = FunctionTemplate_GetUniCondStr(objFunctionTemplateEN);
    const bolIsExistCondition = await FunctionTemplate_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
        strUniquenessCondition,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }

  /** 为修改记录检查唯一性条件 */
  public async CheckUniCond4Update(objFunctionTemplateEN: clsFunctionTemplateEN): Promise<boolean> {
    const strUniquenessCondition = FunctionTemplate_GetUniCondStr4Update(objFunctionTemplateEN);
    const bolIsExistCondition = await FunctionTemplate_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
        strUniquenessCondition,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }

  /** 添加新记录,由后台自动获取最大值的关键字。保存函数 */
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    let objFunctionTemplateEN;
    try {
      objFunctionTemplateEN = await refFunctionTemplate_Edit.value.GetEditDataFunctionTemplateObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    try {
      FunctionTemplate_CheckPropertyNew(objFunctionTemplateEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    try {
      const bolIsExistCond = await this.CheckUniCond4Add(objFunctionTemplateEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await FunctionTemplate_AddNewRecordWithMaxIdAsync(
        objFunctionTemplateEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        FunctionTemplate_ReFreshCache();
        const strInfo = `添加[函数模板(FunctionTemplate)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[函数模板(FunctionTemplate)]记录不成功!`;
        alert(strInfo);
      }
      return responseKeyId;
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
  }

  /** 显示指定记录的数据 */
  public async ShowData(strFunctionTemplateId: string) {
    const strThisFuncName = this.ShowData.name;
    let objFunctionTemplateEN = new clsFunctionTemplateEN();
    try {
      const returnBool = await FunctionTemplate_IsExistAsync(strFunctionTemplateId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strFunctionTemplateId);
        alert(strInfo);
        return;
      }
    } catch (e) {
      const strMsg = Format(
        '检查相应关键字的记录存在不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      const objFunctionTemplateENConst = await FunctionTemplate_GetObjByFunctionTemplateIdAsync(
        strFunctionTemplateId,
      );
      if (objFunctionTemplateENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objFunctionTemplateEN = objFunctionTemplateENConst;
    } catch (e) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
    refFunctionTemplate_Edit.value.ShowDataFromFunctionTemplateObj(objFunctionTemplateEN);
  }

  /** 修改记录（显示数据） */
  public async UpdateRecord(strFunctionTemplateId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strFunctionTemplateId;
    try {
      const objFunctionTemplateEN = await FunctionTemplate_GetObjByFunctionTemplateIdAsync(
        strFunctionTemplateId,
      );
      if (objFunctionTemplateEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refFunctionTemplate_Edit.value.ShowDataFromFunctionTemplateObj(objFunctionTemplateEN);
      return true;
    } catch (e) {
      const strMsg = Format(
        '修改记录时，显示信息出错,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 修改记录保存 */
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const objFunctionTemplateEN =
      await refFunctionTemplate_Edit.value.GetEditDataFunctionTemplateObj();
    objFunctionTemplateEN.SetFunctionTemplateId(this.keyId);
    objFunctionTemplateEN.sfUpdFldSetStr = objFunctionTemplateEN.updFldString;
    if (
      objFunctionTemplateEN.functionTemplateId == '' ||
      objFunctionTemplateEN.functionTemplateId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      FunctionTemplate_CheckProperty4Update(objFunctionTemplateEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    try {
      const bolIsExistCond = await this.CheckUniCond4Update(objFunctionTemplateEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await FunctionTemplate_UpdateRecordAsync(objFunctionTemplateEN);
      if (returnBool == true) {
        FunctionTemplate_ReFreshCache();
        FunctionTemplate_DeleteKeyIdCache(this.keyId);
      }
      return returnBool;
    } catch (e) {
      const strMsg = Format(
        '修改记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 编辑记录，存在就修改，不存在就添加 */
  public async EditRecordExSave(): Promise<boolean> {
    const strThisFuncName = this.EditRecordExSave.name;
    const objFunctionTemplateEN =
      await refFunctionTemplate_Edit.value.GetEditDataFunctionTemplateObj();
    objFunctionTemplateEN.SetFunctionTemplateId(this.keyId);
    objFunctionTemplateEN.sfUpdFldSetStr = objFunctionTemplateEN.updFldString;
    if (
      objFunctionTemplateEN.functionTemplateId == '' ||
      objFunctionTemplateEN.functionTemplateId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      FunctionTemplate_CheckProperty4Update(objFunctionTemplateEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    try {
      const bolIsExistCond = await this.CheckUniCond4Update(objFunctionTemplateEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await FunctionTemplate_EditRecordExAsync(objFunctionTemplateEN);
      if (returnBool == true) {
        FunctionTemplate_ReFreshCache();
      }
      return returnBool;
    } catch (e) {
      const strMsg = Format(
        '修改记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 设置取消按钮标题 */
  public set btnCancelFunctionTemplate(value: string) {
    refFunctionTemplate_Edit.value.strCancelButtonText = value;
  }

  /** 获取提交按钮标题 */
  public get btnSubmitFunctionTemplate(): string {
    const strValue = refFunctionTemplate_Edit.value.strSubmitButtonText;
    return strValue;
  }

  /** 设置提交按钮标题 */
  public set btnSubmitFunctionTemplate(value: string) {
    refFunctionTemplate_Edit.value.strSubmitButtonText = value;
  }
}
