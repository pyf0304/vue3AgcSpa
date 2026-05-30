/**
 * 类名:Function4GeneCode_EditAi(界面:Function4GeneCodeCRUD,00050342)
 * 表名:Function4GeneCode
 * 版本:2026.05.27
 * 生成者:
 * 模块中文名:PrjFunction
 * 编程语言:TypeScript
 **/
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import {
  Function4GeneCode_GetMaxStrIdAsync,
  Function4GeneCode_AddNewRecordWithMaxIdAsync,
  Function4GeneCode_CheckPropertyNew,
  Function4GeneCode_IsExistAsync,
  Function4GeneCode_GetObjByKeyAsync,
  Function4GeneCode_CheckProperty4Update,
  Function4GeneCode_UpdateRecordAsync,
  Function4GeneCode_EditRecordExAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsFunction4GeneCodeWApi';

import {
  clsFunction4GeneCodeEN,
  Function4GeneCodeKey,
} from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
import {
  divVarSet,
  refFunction4GeneCode_Edit,
} from '@/views/PrjFunction/Function4GeneCodeVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

/** Function4GeneCode_EditAi 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:GeneCode)
 **/
export abstract class Function4GeneCode_EditAi {
  protected _className = 'Unknown';

  get className(): string {
    return this._className;
  }

  public static times4TestShowDialog = 0;
  public opType = '';
  // 🔥 单关键字段
  public keyId = { funcId4GC: '' }; // 🔥 字符串型关键字
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
  public HideDialog_Function4GeneCode() {
    if (Function4GeneCode_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refFunction4GeneCode_Edit.value.hideDialog();
    }
  }

  /** 显示对话框 */
  public async ShowDialog_Function4GeneCode(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_Function4GeneCode.name;
    if (Function4GeneCode_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refFunction4GeneCode_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refFunction4GeneCode_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitFunction4GeneCode = '确认添加';
      this.btnCancelFunction4GeneCode = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitFunction4GeneCode = '确认修改';
      this.btnCancelFunction4GeneCode = '取消修改';
    }
    return true;
  }

  /** 添加新记录 */
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_Function4GeneCode(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsFunction4GeneCodeEN._PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(key: Function4GeneCodeKey) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (IsNullOrEmpty(key.funcId4GC) == true) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_Function4GeneCode(this.opType);
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
  public async btnUpdateRecord_Click(key: Function4GeneCodeKey) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(key.funcId4GC) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_Function4GeneCode(this.opType);
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
    const strCommandText: string = this.btnSubmitFunction4GeneCode;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitFunction4GeneCode = '确认添加';
          this.btnCancelFunction4GeneCode = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          // 🔥 单关键字段 + 需要返回值（Identity 或自增类型）
          returnKeyId = await this.AddNewRecordWithReturnKeySave();
          if (IsNullOrEmpty(returnKeyId) == false) {
            if (Function4GeneCode_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
              refFunction4GeneCode_Edit.value.hideDialog();
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsFunction4GeneCodeEN._CurrTabName, returnKeyId);
          }
          break;
        case '确认修改':
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In Function4GeneCode_EditAi.btnSubmit_Click)';
          alert(strInfo);
          if (returnBool == true) {
            if (Function4GeneCode_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refFunction4GeneCode_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsFunction4GeneCodeEN._CurrTabName, this.keyId.funcId4GC);
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
    const txtFuncId4GC = document.getElementById('txtFuncId4GC') as HTMLInputElement | null;
    if (txtFuncId4GC != null) {
      txtFuncId4GC.readOnly = bolReadonly;
    }
  }
  /** 为插入记录做准备工作 */
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    refFunction4GeneCode_Edit.value.Clear();
    try {
      const returnString = await Function4GeneCode_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表Function4GeneCode的最大关键字为空,不成功,请检查!');
        alert(strInfo);
      } else {
        this.keyId.funcId4GC = returnString;
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
    refFunction4GeneCode_Edit.value.Clear();
    try {
      const returnString = await Function4GeneCode_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表Function4GeneCode的最大关键字为空,不成功,请检查!');
        alert(strInfo);
      } else {
        this.keyId.funcId4GC = returnString;
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

  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objFunction4GeneCodeEN;
    try {
      objFunction4GeneCodeEN =
        await refFunction4GeneCode_Edit.value.GetEditDataFunction4GeneCodeObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      Function4GeneCode_CheckPropertyNew(objFunction4GeneCodeEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      let returnBool = false;
      // StringAutoAddPrimaryKey_03: 字符串自增，需要获取返回的 KeyId
      const returnKeyId = await Function4GeneCode_AddNewRecordWithMaxIdAsync(
        objFunction4GeneCodeEN,
      );
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId.funcId4GC = returnKeyId;
        returnBool = true;
      }
      if (returnBool == true) {
        // Function4GeneCode_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
        const strInfo = `添加[函数4GeneCode(Function4GeneCode)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[函数4GeneCode(Function4GeneCode)]记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
  }

  /** 添加新记录,由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithReturnKeySave)
   **/
  public async AddNewRecordWithReturnKeySave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithReturnKeySave.name;
    let objFunction4GeneCodeEN;
    try {
      objFunction4GeneCodeEN =
        await refFunction4GeneCode_Edit.value.GetEditDataFunction4GeneCodeObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return '';
    }
    try {
      Function4GeneCode_CheckPropertyNew(objFunction4GeneCodeEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return '';
    }
    try {
      const responseKeyId = await Function4GeneCode_AddNewRecordWithMaxIdAsync(
        objFunction4GeneCodeEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        // Function4GeneCode_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
        const strInfo = `添加[函数4GeneCode(Function4GeneCode)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[函数4GeneCode(Function4GeneCode)]记录不成功!`;
        //显示信息框
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
      return '';
    }
  }

  /** 添加新记录,由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    let objFunction4GeneCodeEN;
    try {
      objFunction4GeneCodeEN =
        await refFunction4GeneCode_Edit.value.GetEditDataFunction4GeneCodeObj();
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
      Function4GeneCode_CheckPropertyNew(objFunction4GeneCodeEN);
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
      const responseKeyId = await Function4GeneCode_AddNewRecordWithMaxIdAsync(
        objFunction4GeneCodeEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        // Function4GeneCode_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
        const strInfo = `添加[函数4GeneCode(Function4GeneCode)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[函数4GeneCode(Function4GeneCode)]记录不成功!`;
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
  public async ShowData(key: Function4GeneCodeKey) {
    const strThisFuncName = this.ShowData.name;
    let objFunction4GeneCodeEN = new clsFunction4GeneCodeEN();
    try {
      const returnBool = await Function4GeneCode_IsExistAsync(key);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', key.funcId4GC);
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
      const objFunction4GeneCodeENConst = await Function4GeneCode_GetObjByKeyAsync(key);
      if (objFunction4GeneCodeENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objFunction4GeneCodeEN = objFunction4GeneCodeENConst;
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
    refFunction4GeneCode_Edit.value.ShowDataFromFunction4GeneCodeObj(objFunction4GeneCodeEN);
  }

  /** 修改记录（显示数据） */
  public async UpdateRecord(key: Function4GeneCodeKey): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = key;
    try {
      const objFunction4GeneCodeEN = await Function4GeneCode_GetObjByKeyAsync(key);
      if (objFunction4GeneCodeEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refFunction4GeneCode_Edit.value.ShowDataFromFunction4GeneCodeObj(
        objFunction4GeneCodeEN,
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
    const objFunction4GeneCodeEN =
      await refFunction4GeneCode_Edit.value.GetEditDataFunction4GeneCodeObj();
    // 🔥 单关键字段：直接使用
    objFunction4GeneCodeEN.SetFuncId4GC(this.keyId.funcId4GC);
    objFunction4GeneCodeEN.sfUpdFldSetStr = objFunction4GeneCodeEN.updFldString;
    if (objFunction4GeneCodeEN.funcId4GC == '' || objFunction4GeneCodeEN.funcId4GC == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      Function4GeneCode_CheckProperty4Update(objFunction4GeneCodeEN);
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
      const returnBool = await Function4GeneCode_UpdateRecordAsync(objFunction4GeneCodeEN);
      if (returnBool == true) {
        // Function4GeneCode_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
        //Function4GeneCode_DeleteKeyIdCache(this.keyId);
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
    const objFunction4GeneCodeEN =
      await refFunction4GeneCode_Edit.value.GetEditDataFunction4GeneCodeObj();

    // 🔥 单关键字段：直接使用
    objFunction4GeneCodeEN.SetFuncId4GC(this.keyId.funcId4GC);
    objFunction4GeneCodeEN.sfUpdFldSetStr = objFunction4GeneCodeEN.updFldString;
    if (objFunction4GeneCodeEN.funcId4GC == '' || objFunction4GeneCodeEN.funcId4GC == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      Function4GeneCode_CheckProperty4Update(objFunction4GeneCodeEN);
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
      const returnBool = await Function4GeneCode_EditRecordExAsync(objFunction4GeneCodeEN);
      if (returnBool == true) {
        // Function4GeneCode_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
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
  public set btnCancelFunction4GeneCode(value: string) {
    refFunction4GeneCode_Edit.value.strCancelButtonText = value;
  }

  /** 获取提交按钮标题 */
  public get btnSubmitFunction4GeneCode(): string {
    const strValue = refFunction4GeneCode_Edit.value.strSubmitButtonText;
    return strValue;
  }

  /** 设置提交按钮标题 */
  public set btnSubmitFunction4GeneCode(value: string) {
    refFunction4GeneCode_Edit.value.strSubmitButtonText = value;
  }
}
