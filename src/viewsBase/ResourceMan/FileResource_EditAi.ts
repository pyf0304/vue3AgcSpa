/**
 * 类名:FileResource_EditAi(界面:FileResourceCRUD,00050351)
 * 表名:FileResource
 * 版本:2026.06.13
 * 生成者:
 * 模块中文名:ResourceMan
 * 编程语言:TypeScript
 **/
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import {
  FileResource_AddNewRecordWithReturnKeyAsync,
  FileResource_AddNewRecordAsync,
  FileResource_CheckPropertyNew,
  FileResource_IsExistAsync,
  FileResource_GetObjByKeyAsync,
  FileResource_CheckProperty4Update,
  FileResource_UpdateRecordAsync,
  FileResource_EditRecordExAsync,
} from '@/ts/L3ForWApi/ResourceMan/clsFileResourceWApi';

import { clsFileResourceEN,  FileResourceKey, } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
import {  
  divVarSet,
  refFileResource_Edit,
} from '@/views/ResourceMan/FileResourceVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

/** FileResource_EditAi 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:GeneCode)
 **/
export abstract class FileResource_EditAi {
  protected _className = 'Unknown';

  get className(): string {
    return this._className;
  }

  public static times4TestShowDialog = 0;
  public opType = '';
  // 🔥 单关键字段
  public keyId = { fileResourceId: 0 };  // 🔥 数字型关键字
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
  public HideDialog_FileResource() {
    if (FileResource_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refFileResource_Edit.value.hideDialog();
    }
  }

  /** 显示对话框 */
  public async ShowDialog_FileResource(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_FileResource.name;
    if (FileResource_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refFileResource_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refFileResource_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitFileResource = '确认添加';
      this.btnCancelFileResource = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitFileResource = '确认修改';
      this.btnCancelFileResource = '取消修改';
    }
    return true;
  }

  /** 添加新记录 */
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_FileResource(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsFileResourceEN._PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(key: FileResourceKey) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (key.fileResourceId == 0 || key.fileResourceId == undefined) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_FileResource(this.opType);
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
  public async btnUpdateRecord_Click(key: FileResourceKey) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
   if (key.fileResourceId == 0 || key.fileResourceId == undefined) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_FileResource(this.opType);
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
    const strCommandText: string = this.btnSubmitFileResource;
    try {
      let returnBool = false;
      let returnKeyId: number = 0;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitFileResource = '确认添加';
          this.btnCancelFileResource = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          // 🔥 单关键字段 + 需要返回值（Identity 或自增类型）
          returnKeyId = await this.AddNewRecordWithReturnKeySave();
          if (returnKeyId != 0) {
            if (FileResource_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
              refFileResource_Edit.value.hideDialog();
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsFileResourceEN._CurrTabName, returnKeyId.toString());
          }
          break;
        case '确认修改':
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In FileResource_EditAi.btnSubmit_Click)';
          alert(strInfo);
          if (returnBool == true) {
            if (FileResource_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refFileResource_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsFileResourceEN._CurrTabName, this.keyId.fileResourceId.toString());
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
    const txtFileResourceId = document.getElementById('txtFileResourceId') as HTMLInputElement | null;
    if (txtFileResourceId != null) {
      txtFileResourceId.readOnly = bolReadonly;
    }
  }

  /** 为插入记录做准备工作 */
  public async AddNewRecord() {
    refFileResource_Edit.value.Clear();
  }

  /** 为插入记录做准备工作（使用最大值ID） */
  public async AddNewRecordWithMaxId() {
    refFileResource_Edit.value.Clear();
  }



  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objFileResourceEN;
    try {
      objFileResourceEN = await refFileResource_Edit.value.GetEditDataFileResourceObj();
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
      FileResource_CheckPropertyNew(objFileResourceEN);
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
      // Identity_02: 整数自增，直接调用 AddNewRecordAsync
      returnBool = await FileResource_AddNewRecordAsync(objFileResourceEN);
      if (returnBool == true) {
        // FileResource_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新

        const strInfo = `添加[文件资源(FileResource)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[文件资源(FileResource)]记录不成功!`;
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
  public async AddNewRecordWithReturnKeySave(): Promise<number> {
    const strThisFuncName = this.AddNewRecordWithReturnKeySave.name;
    let objFileResourceEN;
    try {
      objFileResourceEN = await refFileResource_Edit.value.GetEditDataFileResourceObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return 0;
    }
    try {
      FileResource_CheckPropertyNew(objFileResourceEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return 0;
    }
    try {
      const responseKeyId = await FileResource_AddNewRecordWithReturnKeyAsync(objFileResourceEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        objFileResourceEN.fileResourceId = Number(returnKeyId);
        // FileResource_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
        const strInfo = `添加[文件资源(FileResource)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[文件资源(FileResource)]记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      return Number(responseKeyId); //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return 0;
    }
  }




  /** 显示指定记录的数据 */
  public async ShowData(key: FileResourceKey) {
    const strThisFuncName = this.ShowData.name;
    let objFileResourceEN = new clsFileResourceEN();
    try {
      const returnBool = await FileResource_IsExistAsync(key);
       if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', key.fileResourceId);
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
      const objFileResourceENConst = await FileResource_GetObjByKeyAsync(key);
      if (objFileResourceENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objFileResourceEN = objFileResourceENConst;
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
    refFileResource_Edit.value.ShowDataFromFileResourceObj(objFileResourceEN);
  }

  /** 修改记录（显示数据） */
  public async UpdateRecord(key: FileResourceKey): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = key;
    try {
      const objFileResourceEN = await FileResource_GetObjByKeyAsync(key);
      if (objFileResourceEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refFileResource_Edit.value.ShowDataFromFileResourceObj(objFileResourceEN);
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
    const objFileResourceEN = await refFileResource_Edit.value.GetEditDataFileResourceObj();
    // 🔥 单关键字段：直接使用
    objFileResourceEN.SetFileResourceId(this.keyId.fileResourceId);
    objFileResourceEN.sfUpdFldSetStr = objFileResourceEN.updFldString;
    if (objFileResourceEN.fileResourceId == 0 || objFileResourceEN.fileResourceId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      FileResource_CheckProperty4Update(objFileResourceEN);
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
      const returnBool = await FileResource_UpdateRecordAsync(objFileResourceEN);
      if (returnBool == true) {
        // FileResource_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新


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
    const objFileResourceEN = await refFileResource_Edit.value.GetEditDataFileResourceObj();

    // 🔥 单关键字段：直接使用
    objFileResourceEN.SetFileResourceId(this.keyId.fileResourceId);
    objFileResourceEN.sfUpdFldSetStr = objFileResourceEN.updFldString;
    if (objFileResourceEN.fileResourceId == 0 || objFileResourceEN.fileResourceId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      FileResource_CheckProperty4Update(objFileResourceEN);
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
      const returnBool = await FileResource_EditRecordExAsync(objFileResourceEN);
      if (returnBool == true) {
        // FileResource_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
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
  public set btnCancelFileResource(value: string) {
    refFileResource_Edit.value.strCancelButtonText = value;
  }

  /** 获取提交按钮标题 */
  public get btnSubmitFileResource(): string {
    const strValue = refFileResource_Edit.value.strSubmitButtonText;
    return strValue;
  }

  /** 设置提交按钮标题 */
  public set btnSubmitFileResource(value: string) {
    refFileResource_Edit.value.strSubmitButtonText = value;
  }

 
}