/**
 * 类名:PrjFileType_EditAi(界面:PrjFileTypeCRUD,00050352)
 * 表名:PrjFileType
 * 版本:2026.06.13
 * 生成者:
 * 模块中文名:ResourceMan
 * 编程语言:TypeScript
 **/
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import {
  PrjFileType_GetMaxStrIdAsync,
  PrjFileType_AddNewRecordWithMaxIdAsync,
  PrjFileType_CheckPropertyNew,
  PrjFileType_ReFreshCache,
  PrjFileType_IsExistAsync,
  PrjFileType_GetObjByKeyAsync,
  PrjFileType_CheckProperty4Update,
  PrjFileType_UpdateRecordAsync,
  PrjFileType_EditRecordExAsync,
} from '@/ts/L3ForWApi/ResourceMan/clsPrjFileTypeWApi';

import { clsPrjFileTypeEN,  PrjFileTypeKey, } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';
import {  
  PrjFileType_DeleteKeyIdCache,
  divVarSet,
  refPrjFileType_Edit,
} from '@/views/ResourceMan/PrjFileTypeVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

/** PrjFileType_EditAi 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:GeneCode)
 **/
export abstract class PrjFileType_EditAi {
  protected _className = 'Unknown';

  get className(): string {
    return this._className;
  }

  public static times4TestShowDialog = 0;
  public opType = '';
  // 🔥 单关键字段
  public keyId = { prjFileTypeId: '' };  // 🔥 字符串型关键字
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
  public HideDialog_PrjFileType() {
    if (PrjFileType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refPrjFileType_Edit.value.hideDialog();
    }
  }

  /** 显示对话框 */
  public async ShowDialog_PrjFileType(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_PrjFileType.name;
    if (PrjFileType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refPrjFileType_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refPrjFileType_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitPrjFileType = '确认添加';
      this.btnCancelPrjFileType = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitPrjFileType = '确认修改';
      this.btnCancelPrjFileType = '取消修改';
    }
    return true;
  }

  /** 添加新记录 */
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_PrjFileType(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsPrjFileTypeEN._PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(key: PrjFileTypeKey) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (IsNullOrEmpty(key.prjFileTypeId) == true) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_PrjFileType(this.opType);
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
  public async btnUpdateRecord_Click(key: PrjFileTypeKey) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(key.prjFileTypeId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_PrjFileType(this.opType);
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
    const strCommandText: string = this.btnSubmitPrjFileType;
    try {
      let returnBool = false;
      let returnKeyId: string = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitPrjFileType = '确认添加';
          this.btnCancelPrjFileType = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          // 🔥 单关键字段 + 需要返回值（Identity 或自增类型）
          returnKeyId = await this.AddNewRecordWithReturnKeySave();
          if (IsNullOrEmpty(returnKeyId) == false) {
            if (PrjFileType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
              refPrjFileType_Edit.value.hideDialog();
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsPrjFileTypeEN._CurrTabName, returnKeyId);
          }
          break;
        case '确认修改':
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In PrjFileType_EditAi.btnSubmit_Click)';
          alert(strInfo);
          if (returnBool == true) {
            if (PrjFileType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refPrjFileType_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsPrjFileTypeEN._CurrTabName, this.keyId.prjFileTypeId);
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
    const txtPrjFileTypeId = document.getElementById('txtPrjFileTypeId') as HTMLInputElement | null;
    if (txtPrjFileTypeId != null) {
      txtPrjFileTypeId.readOnly = bolReadonly;
    }
  }

  /** 为插入记录做准备工作 */
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    refPrjFileType_Edit.value.Clear();
    try {
      const returnString = await PrjFileType_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表PrjFileType的最大关键字为空,不成功,请检查!');
        alert(strInfo);
      } else {
        // 🔥 单关键字段：构造对象
        this.keyId = { prjFileTypeId: returnString };
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
    refPrjFileType_Edit.value.Clear();
    try {
      const returnString = await PrjFileType_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表PrjFileType的最大关键字为空,不成功,请检查!');
        alert(strInfo);
      } else {
        // 🔥 单关键字段：构造对象
        this.keyId = { prjFileTypeId: returnString };
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
    let objPrjFileTypeEN;
    try {
      objPrjFileTypeEN = await refPrjFileType_Edit.value.GetEditDataPrjFileTypeObj();
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
      PrjFileType_CheckPropertyNew(objPrjFileTypeEN);
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
      // StringAutoAddPrimaryKey_03: 字符串自增，需要获取返回的 KeyId
      const returnKeyId = await PrjFileType_AddNewRecordWithMaxIdAsync(objPrjFileTypeEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        // 🔥 赋值为对象格式
        this.keyId = { prjFileTypeId: returnKeyId };
        returnBool = true;
      }
      if (returnBool == true) {
        PrjFileType_ReFreshCache();
           PrjFileType_DeleteKeyIdCache(this.keyId);
     

        const strInfo = `添加[工程文件类型(PrjFileType)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[工程文件类型(PrjFileType)]记录不成功!`;
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
    



  /** 添加新记录,由后台自动获取最大值的关键字。保存函数 
   * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithReturnKeySave)
   **/
  public async AddNewRecordWithReturnKeySave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithReturnKeySave.name;
    let objPrjFileTypeEN;
    try {
      objPrjFileTypeEN = await refPrjFileType_Edit.value.GetEditDataPrjFileTypeObj();
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
      PrjFileType_CheckPropertyNew(objPrjFileTypeEN);
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
      const responseKeyId = await PrjFileType_AddNewRecordWithMaxIdAsync(objPrjFileTypeEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        PrjFileType_ReFreshCache();
           PrjFileType_DeleteKeyIdCache(this.keyId);
     
        const strInfo = `添加[工程文件类型(PrjFileType)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[工程文件类型(PrjFileType)]记录不成功!`;
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
    let objPrjFileTypeEN;
    try {
      objPrjFileTypeEN = await refPrjFileType_Edit.value.GetEditDataPrjFileTypeObj();
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
      PrjFileType_CheckPropertyNew(objPrjFileTypeEN);
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
      const responseKeyId = await PrjFileType_AddNewRecordWithMaxIdAsync(objPrjFileTypeEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        PrjFileType_ReFreshCache();
           PrjFileType_DeleteKeyIdCache(this.keyId);
     

        const strInfo = `添加[工程文件类型(PrjFileType)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[工程文件类型(PrjFileType)]记录不成功!`;
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
  public async ShowData(key: PrjFileTypeKey) {
    const strThisFuncName = this.ShowData.name;
    let objPrjFileTypeEN = new clsPrjFileTypeEN();
    try {
      const returnBool = await PrjFileType_IsExistAsync(key);
       if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', key.prjFileTypeId);
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
      const objPrjFileTypeENConst = await PrjFileType_GetObjByKeyAsync(key);
      if (objPrjFileTypeENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objPrjFileTypeEN = objPrjFileTypeENConst;
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
    refPrjFileType_Edit.value.ShowDataFromPrjFileTypeObj(objPrjFileTypeEN);
  }

  /** 修改记录（显示数据） */
  public async UpdateRecord(key: PrjFileTypeKey): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = key;
    try {
      const objPrjFileTypeEN = await PrjFileType_GetObjByKeyAsync(key);
      if (objPrjFileTypeEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refPrjFileType_Edit.value.ShowDataFromPrjFileTypeObj(objPrjFileTypeEN);
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
    const objPrjFileTypeEN = await refPrjFileType_Edit.value.GetEditDataPrjFileTypeObj();
    // 🔥 单关键字段：直接使用
    objPrjFileTypeEN.SetPrjFileTypeId(this.keyId.prjFileTypeId);
    objPrjFileTypeEN.sfUpdFldSetStr = objPrjFileTypeEN.updFldString;
    if (objPrjFileTypeEN.prjFileTypeId == '' || objPrjFileTypeEN.prjFileTypeId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PrjFileType_CheckProperty4Update(objPrjFileTypeEN);
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
      const returnBool = await PrjFileType_UpdateRecordAsync(objPrjFileTypeEN);
      if (returnBool == true) {
        PrjFileType_ReFreshCache();
           PrjFileType_DeleteKeyIdCache(this.keyId);
     


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
    const objPrjFileTypeEN = await refPrjFileType_Edit.value.GetEditDataPrjFileTypeObj();

    // 🔥 单关键字段：直接使用
    objPrjFileTypeEN.SetPrjFileTypeId(this.keyId.prjFileTypeId);
    objPrjFileTypeEN.sfUpdFldSetStr = objPrjFileTypeEN.updFldString;
    if (objPrjFileTypeEN.prjFileTypeId == '' || objPrjFileTypeEN.prjFileTypeId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PrjFileType_CheckProperty4Update(objPrjFileTypeEN);
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
      const returnBool = await PrjFileType_EditRecordExAsync(objPrjFileTypeEN);
      if (returnBool == true) {
        PrjFileType_ReFreshCache();
           PrjFileType_DeleteKeyIdCache(this.keyId);
     
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
  public set btnCancelPrjFileType(value: string) {
    refPrjFileType_Edit.value.strCancelButtonText = value;
  }

  /** 获取提交按钮标题 */
  public get btnSubmitPrjFileType(): string {
    const strValue = refPrjFileType_Edit.value.strSubmitButtonText;
    return strValue;
  }

  /** 设置提交按钮标题 */
  public set btnSubmitPrjFileType(value: string) {
    refPrjFileType_Edit.value.strSubmitButtonText = value;
  }

 
}