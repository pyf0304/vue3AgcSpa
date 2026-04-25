/**
 * 类名:PrjDataBase_EditAi(界面:PrjDataBaseCRUD,00050346)
 * 表名:PrjDataBase
 * 版本:2026.04.24
 * 生成者:
 * 模块中文名:PrjManage
 * 编程语言:TypeScript
 **/
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  PrjDataBase_GetMaxStrIdAsync,
  PrjDataBase_CheckPropertyNew,
  PrjDataBase_AddNewRecordWithMaxIdAsync,
  PrjDataBase_ReFreshCache,
  PrjDataBase_GetUniCondStr,
  PrjDataBase_IsExistRecordAsync,
  PrjDataBase_GetUniCondStr4Update,
  PrjDataBase_IsExistAsync,
  PrjDataBase_GetObjByPrjDataBaseIdAsync,
  PrjDataBase_CheckProperty4Update,
  PrjDataBase_UpdateRecordAsync,
  PrjDataBase_EditRecordExAsync,
} from '@/ts/L3ForWApi/PrjManage/clsPrjDataBaseWApi';
import { clsPrjDataBaseEN } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';
import {
  PrjDataBase_DeleteKeyIdCache,
  divVarSet,
  refPrjDataBase_Edit,
} from '@/views/PrjManage/PrjDataBaseVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

/** PrjDataBase_EditAi 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class PrjDataBase_EditAi {
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
  public HideDialog_PrjDataBase() {
    if (PrjDataBase_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refPrjDataBase_Edit.value.hideDialog();
    }
  }

  /** 显示对话框 */
  public async ShowDialog_PrjDataBase(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_PrjDataBase.name;
    if (PrjDataBase_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refPrjDataBase_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refPrjDataBase_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitPrjDataBase = '确认添加';
      this.btnCancelPrjDataBase = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitPrjDataBase = '确认修改';
      this.btnCancelPrjDataBase = '取消修改';
    }
    return true;
  }

  /** 添加新记录 */
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_PrjDataBase(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsPrjDataBaseEN._PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(strPrjDataBaseId: string) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (IsNullOrEmpty(strPrjDataBaseId) == true) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_PrjDataBase(this.opType);
      if (bolIsSuccess == false) return;
      await this.UpdateRecord(strPrjDataBaseId);
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
  public async btnUpdateRecord_Click(strPrjDataBaseId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strPrjDataBaseId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_PrjDataBase(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true;
      const update = await this.UpdateRecord(strPrjDataBaseId);
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
    const strCommandText: string = this.btnSubmitPrjDataBase;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitPrjDataBase = '确认添加';
          this.btnCancelPrjDataBase = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          if (['02', '03', '06'].indexOf(clsPrjDataBaseEN._PrimaryTypeId) > -1) {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (PrjDataBase_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_PrjDataBase();
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsPrjDataBaseEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (PrjDataBase_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refPrjDataBase_Edit.value.hideDialog();
              }
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsPrjDataBaseEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In PrjDataBase_EditAi.btnSubmit_Click)';
          alert(strInfo);
          if (returnBool == true) {
            if (PrjDataBase_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refPrjDataBase_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsPrjDataBaseEN._CurrTabName, this.keyId);
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
    const txtPrjDataBaseId = document.getElementById('txtPrjDataBaseId') as HTMLInputElement | null;
    if (txtPrjDataBaseId != null) {
      txtPrjDataBaseId.readOnly = bolReadonly;
    }
  }

  /** 为插入记录做准备工作 */
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    refPrjDataBase_Edit.value.Clear();
    try {
      const returnString = await PrjDataBase_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表PrjDataBase的最大关键字为空,不成功,请检查!');
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
    refPrjDataBase_Edit.value.Clear();
    try {
      const returnString = await PrjDataBase_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表PrjDataBase的最大关键字为空,不成功,请检查!');
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
    let objPrjDataBaseEN;
    try {
      objPrjDataBaseEN = await refPrjDataBase_Edit.value.GetEditDataPrjDataBaseObj();
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
      PrjDataBase_CheckPropertyNew(objPrjDataBaseEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objPrjDataBaseEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await PrjDataBase_AddNewRecordWithMaxIdAsync(objPrjDataBaseEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId = returnKeyId;
        returnBool = true;
      }
      if (returnBool == true) {
        PrjDataBase_ReFreshCache();
        const strInfo = `添加[数据库对象(PrjDataBase)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[数据库对象(PrjDataBase)]记录不成功!`;
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
  public async CheckUniCond4Add(objPrjDataBaseEN: clsPrjDataBaseEN): Promise<boolean> {
    const strUniquenessCondition = PrjDataBase_GetUniCondStr(objPrjDataBaseEN);
    const bolIsExistCondition = await PrjDataBase_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objPrjDataBaseEN: clsPrjDataBaseEN): Promise<boolean> {
    const strUniquenessCondition = PrjDataBase_GetUniCondStr4Update(objPrjDataBaseEN);
    const bolIsExistCondition = await PrjDataBase_IsExistRecordAsync(strUniquenessCondition);
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
    let objPrjDataBaseEN;
    try {
      objPrjDataBaseEN = await refPrjDataBase_Edit.value.GetEditDataPrjDataBaseObj();
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
      PrjDataBase_CheckPropertyNew(objPrjDataBaseEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objPrjDataBaseEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await PrjDataBase_AddNewRecordWithMaxIdAsync(objPrjDataBaseEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        PrjDataBase_ReFreshCache();
        const strInfo = `添加[数据库对象(PrjDataBase)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[数据库对象(PrjDataBase)]记录不成功!`;
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
  public async ShowData(strPrjDataBaseId: string) {
    const strThisFuncName = this.ShowData.name;
    let objPrjDataBaseEN = new clsPrjDataBaseEN();
    try {
      const returnBool = await PrjDataBase_IsExistAsync(strPrjDataBaseId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strPrjDataBaseId);
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
      const objPrjDataBaseENConst = await PrjDataBase_GetObjByPrjDataBaseIdAsync(strPrjDataBaseId);
      if (objPrjDataBaseENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objPrjDataBaseEN = objPrjDataBaseENConst;
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
    refPrjDataBase_Edit.value.ShowDataFromPrjDataBaseObj(objPrjDataBaseEN);
  }

  /** 修改记录（显示数据） */
  public async UpdateRecord(strPrjDataBaseId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strPrjDataBaseId;
    try {
      const objPrjDataBaseEN = await PrjDataBase_GetObjByPrjDataBaseIdAsync(strPrjDataBaseId);
      if (objPrjDataBaseEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refPrjDataBase_Edit.value.ShowDataFromPrjDataBaseObj(objPrjDataBaseEN);
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
    const objPrjDataBaseEN = await refPrjDataBase_Edit.value.GetEditDataPrjDataBaseObj();
    objPrjDataBaseEN.SetPrjDataBaseId(this.keyId);
    objPrjDataBaseEN.sfUpdFldSetStr = objPrjDataBaseEN.updFldString;
    if (objPrjDataBaseEN.prjDataBaseId == '' || objPrjDataBaseEN.prjDataBaseId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PrjDataBase_CheckProperty4Update(objPrjDataBaseEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objPrjDataBaseEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await PrjDataBase_UpdateRecordAsync(objPrjDataBaseEN);
      if (returnBool == true) {
        PrjDataBase_ReFreshCache();
        PrjDataBase_DeleteKeyIdCache(this.keyId);
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
    const objPrjDataBaseEN = await refPrjDataBase_Edit.value.GetEditDataPrjDataBaseObj();
    objPrjDataBaseEN.SetPrjDataBaseId(this.keyId);
    objPrjDataBaseEN.sfUpdFldSetStr = objPrjDataBaseEN.updFldString;
    if (objPrjDataBaseEN.prjDataBaseId == '' || objPrjDataBaseEN.prjDataBaseId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PrjDataBase_CheckProperty4Update(objPrjDataBaseEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objPrjDataBaseEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await PrjDataBase_EditRecordExAsync(objPrjDataBaseEN);
      if (returnBool == true) {
        PrjDataBase_ReFreshCache();
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
  public set btnCancelPrjDataBase(value: string) {
    refPrjDataBase_Edit.value.strCancelButtonText = value;
  }

  /** 获取提交按钮标题 */
  public get btnSubmitPrjDataBase(): string {
    const strValue = refPrjDataBase_Edit.value.strSubmitButtonText;
    return strValue;
  }

  /** 设置提交按钮标题 */
  public set btnSubmitPrjDataBase(value: string) {
    refPrjDataBase_Edit.value.strSubmitButtonText = value;
  }
}
