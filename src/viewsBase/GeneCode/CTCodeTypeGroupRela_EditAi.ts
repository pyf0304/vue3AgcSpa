/**
 * 类名:CTCodeTypeGroupRela_EditAi(界面:CTCodeTypeGroupRelaCRUD,00050350)
 * 表名:CTCodeTypeGroupRela
 * 版本:2026.06.06
 * 生成者:
 * 模块中文名:GeneCode
 * 编程语言:TypeScript
 **/
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import {
  CTCodeTypeGroupRela_AddNewRecordAsync,
  CTCodeTypeGroupRela_CheckPropertyNew,
  CTCodeTypeGroupRela_IsExistAsync,
  CTCodeTypeGroupRela_GetObjByKeyAsync,
  CTCodeTypeGroupRela_CheckProperty4Update,
  CTCodeTypeGroupRela_UpdateRecordAsync,
  CTCodeTypeGroupRela_EditRecordExAsync,
} from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupRelaWApi';

import {
  clsCTCodeTypeGroupRelaEN,
  CTCodeTypeGroupRelaKey,
} from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';
import {
  divVarSet,
  refCTCodeTypeGroupRela_Edit,
} from '@/views/GeneCode/CTCodeTypeGroupRelaVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

/** CTCodeTypeGroupRela_EditAi 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:GeneCode)
 **/
export abstract class CTCodeTypeGroupRela_EditAi {
  protected _className = 'Unknown';

  get className(): string {
    return this._className;
  }

  public static times4TestShowDialog = 0;
  public opType = '';
  // 🔥 多关键字段：包含所有关键字段
  public keyId = {
    ctGroupId: '',
    codeTypeId: '',
  };
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
  public HideDialog_CTCodeTypeGroupRela() {
    if (CTCodeTypeGroupRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refCTCodeTypeGroupRela_Edit.value.hideDialog();
    }
  }

  /** 显示对话框 */
  public async ShowDialog_CTCodeTypeGroupRela(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_CTCodeTypeGroupRela.name;
    if (CTCodeTypeGroupRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refCTCodeTypeGroupRela_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refCTCodeTypeGroupRela_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitCTCodeTypeGroupRela = '确认添加';
      this.btnCancelCTCodeTypeGroupRela = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitCTCodeTypeGroupRela = '确认修改';
      this.btnCancelCTCodeTypeGroupRela = '取消修改';
    }
    return true;
  }

  /** 添加新记录 */
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_CTCodeTypeGroupRela(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsCTCodeTypeGroupRelaEN._PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(key: CTCodeTypeGroupRelaKey) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (IsNullOrEmpty(key.codeTypeId) == true) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_CTCodeTypeGroupRela(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true;
      const update = await this.UpdateRecord(key);
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

  /** 修改记录 */
  public async btnUpdateRecord_Click(key: CTCodeTypeGroupRelaKey) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(key.codeTypeId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_CTCodeTypeGroupRela(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true;
      const update = await this.UpdateRecord(key);
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
    const strCommandText: string = this.btnSubmitCTCodeTypeGroupRela;
    try {
      let returnBool = false;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitCTCodeTypeGroupRela = '确认添加';
          this.btnCancelCTCodeTypeGroupRela = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          // 🔥 多关键字段：没有返回值概念，直接保存
          returnBool = await this.AddNewRecordSave();
          if (returnBool == true) {
            if (CTCodeTypeGroupRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refCTCodeTypeGroupRela_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              // 🔥 多关键字段：使用第一个关键字段的值
              this.iShowList.BindGvCache(
                clsCTCodeTypeGroupRelaEN._CurrTabName,
                this.keyId.ctGroupId,
              );
          }
          break;
        case '确认修改':
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In CTCodeTypeGroupRela_EditAi.btnSubmit_Click)';
          alert(strInfo);
          if (returnBool == true) {
            if (CTCodeTypeGroupRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refCTCodeTypeGroupRela_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              // 🔥 多关键字段：使用第一个关键字段的值
              this.iShowList.BindGvCache(
                clsCTCodeTypeGroupRelaEN._CurrTabName,
                this.keyId.ctGroupId,
              );
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
    const txtCodeTypeId = document.getElementById('txtCodeTypeId') as HTMLInputElement | null;
    if (txtCodeTypeId != null) {
      txtCodeTypeId.readOnly = bolReadonly;
    }
  }

  /** 为插入记录做准备工作 */
  public async AddNewRecord() {
    refCTCodeTypeGroupRela_Edit.value.Clear();
  }

  /** 为插入记录做准备工作（使用最大值ID） */
  public async AddNewRecordWithMaxId() {
    refCTCodeTypeGroupRela_Edit.value.Clear();
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objCTCodeTypeGroupRelaEN;
    try {
      objCTCodeTypeGroupRelaEN =
        await refCTCodeTypeGroupRela_Edit.value.GetEditDataCTCodeTypeGroupRelaObj();
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
      CTCodeTypeGroupRela_CheckPropertyNew(objCTCodeTypeGroupRelaEN);
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
      let returnBool = false;
      // 其他类型：先检查关键字是否存在
      returnBool = await CTCodeTypeGroupRela_AddNewRecordAsync(objCTCodeTypeGroupRelaEN);
      if (returnBool == true) {
        // CTCodeTypeGroupRela_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新

        const strInfo = `添加[CTCodeTypeGroupRela(CTCodeTypeGroupRela)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[CTCodeTypeGroupRela(CTCodeTypeGroupRela)]记录不成功!`;
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

  /** 显示指定记录的数据 */
  public async ShowData(key: CTCodeTypeGroupRelaKey) {
    const strThisFuncName = this.ShowData.name;
    let objCTCodeTypeGroupRelaEN = new clsCTCodeTypeGroupRelaEN();
    try {
      const returnBool = await CTCodeTypeGroupRela_IsExistAsync(key);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', key.codeTypeId);
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
      const objCTCodeTypeGroupRelaENConst = await CTCodeTypeGroupRela_GetObjByKeyAsync(key);
      if (objCTCodeTypeGroupRelaENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objCTCodeTypeGroupRelaEN = objCTCodeTypeGroupRelaENConst;
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
    refCTCodeTypeGroupRela_Edit.value.ShowDataFromCTCodeTypeGroupRelaObj(objCTCodeTypeGroupRelaEN);
  }

  /** 修改记录（显示数据） */
  public async UpdateRecord(key: CTCodeTypeGroupRelaKey): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = key;
    try {
      const objCTCodeTypeGroupRelaEN = await CTCodeTypeGroupRela_GetObjByKeyAsync(key);
      if (objCTCodeTypeGroupRelaEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refCTCodeTypeGroupRela_Edit.value.ShowDataFromCTCodeTypeGroupRelaObj(
        objCTCodeTypeGroupRelaEN,
      );
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
    const objCTCodeTypeGroupRelaEN =
      await refCTCodeTypeGroupRela_Edit.value.GetEditDataCTCodeTypeGroupRelaObj();
    // 🔥 多关键字段：循环设置每个关键字段
    objCTCodeTypeGroupRelaEN.SetCtGroupId(this.keyId.ctGroupId);
    objCTCodeTypeGroupRelaEN.SetCodeTypeId(this.keyId.codeTypeId);
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr = objCTCodeTypeGroupRelaEN.updFldString;
    if (
      objCTCodeTypeGroupRelaEN.codeTypeId == '' ||
      objCTCodeTypeGroupRelaEN.codeTypeId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      CTCodeTypeGroupRela_CheckProperty4Update(objCTCodeTypeGroupRelaEN);
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
      const returnBool = await CTCodeTypeGroupRela_UpdateRecordAsync(objCTCodeTypeGroupRelaEN);
      if (returnBool == true) {
        // CTCodeTypeGroupRela_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
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
    const objCTCodeTypeGroupRelaEN =
      await refCTCodeTypeGroupRela_Edit.value.GetEditDataCTCodeTypeGroupRelaObj();

    // 🔥 多关键字段：循环设置每个关键字段
    objCTCodeTypeGroupRelaEN.SetCtGroupId(this.keyId.ctGroupId);
    objCTCodeTypeGroupRelaEN.SetCodeTypeId(this.keyId.codeTypeId);
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr = objCTCodeTypeGroupRelaEN.updFldString;
    if (
      objCTCodeTypeGroupRelaEN.codeTypeId == '' ||
      objCTCodeTypeGroupRelaEN.codeTypeId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      CTCodeTypeGroupRela_CheckProperty4Update(objCTCodeTypeGroupRelaEN);
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
      const returnBool = await CTCodeTypeGroupRela_EditRecordExAsync(objCTCodeTypeGroupRelaEN);
      if (returnBool == true) {
        // CTCodeTypeGroupRela_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
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
  public set btnCancelCTCodeTypeGroupRela(value: string) {
    refCTCodeTypeGroupRela_Edit.value.strCancelButtonText = value;
  }

  /** 获取提交按钮标题 */
  public get btnSubmitCTCodeTypeGroupRela(): string {
    const strValue = refCTCodeTypeGroupRela_Edit.value.strSubmitButtonText;
    return strValue;
  }

  /** 设置提交按钮标题 */
  public set btnSubmitCTCodeTypeGroupRela(value: string) {
    refCTCodeTypeGroupRela_Edit.value.strSubmitButtonText = value;
  }
}
