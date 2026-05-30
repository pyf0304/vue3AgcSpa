/**
 * 类名:GCConstantPrjIdRela_EditAi(界面:GCConstantPrjIdRelaCRUD,00050344)
 * 表名:GCConstantPrjIdRela
 * 版本:2026.05.29
 * 生成者:
 * 模块中文名:GeneCode
 * 编程语言:TypeScript
 **/
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

import {
  GCConstantPrjIdRela_AddNewRecordAsync,
  GCConstantPrjIdRela_CheckPropertyNew,
  GCConstantPrjIdRela_IsExistAsync,
  GCConstantPrjIdRela_GetObjByKeyAsync,
  GCConstantPrjIdRela_CheckProperty4Update,
  GCConstantPrjIdRela_UpdateRecordAsync,
  GCConstantPrjIdRela_EditRecordExAsync,
} from '@/ts/L3ForWApi/GeneCode/clsGCConstantPrjIdRelaWApi';

import {
  clsGCConstantPrjIdRelaEN,
  GCConstantPrjIdRelaKey,
} from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';
import {
  divVarSet,
  refGCConstantPrjIdRela_Edit,
} from '@/views/GeneCode/GCConstantPrjIdRelaVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

/** GCConstantPrjIdRela_EditAi 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:GeneCode)
 **/
export abstract class GCConstantPrjIdRela_EditAi {
  protected _className = 'Unknown';

  get className(): string {
    return this._className;
  }

  public static times4TestShowDialog = 0;
  public opType = '';
  // 🔥 多关键字段：包含所有关键字段
  public keyId = {
    constId: '',
    prjId: '',
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
  public HideDialog_GCConstantPrjIdRela() {
    if (GCConstantPrjIdRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refGCConstantPrjIdRela_Edit.value.hideDialog();
    }
  }

  /** 显示对话框 */
  public async ShowDialog_GCConstantPrjIdRela(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_GCConstantPrjIdRela.name;
    if (GCConstantPrjIdRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refGCConstantPrjIdRela_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refGCConstantPrjIdRela_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitGCConstantPrjIdRela = '确认添加';
      this.btnCancelGCConstantPrjIdRela = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitGCConstantPrjIdRela = '确认修改';
      this.btnCancelGCConstantPrjIdRela = '取消修改';
    }
    return true;
  }

  /** 添加新记录 */
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_GCConstantPrjIdRela(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsGCConstantPrjIdRelaEN._PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(key: GCConstantPrjIdRelaKey) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (IsNullOrEmpty(key.constId) == true) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_GCConstantPrjIdRela(this.opType);
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
  public async btnUpdateRecord_Click(key: GCConstantPrjIdRelaKey) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(key.constId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_GCConstantPrjIdRela(this.opType);
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
    const strCommandText: string = this.btnSubmitGCConstantPrjIdRela;
    try {
      let returnBool = false;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitGCConstantPrjIdRela = '确认添加';
          this.btnCancelGCConstantPrjIdRela = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          // 🔥 多关键字段：没有返回值概念，直接保存
          returnBool = await this.AddNewRecordSave();
          if (returnBool == true) {
            if (GCConstantPrjIdRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refGCConstantPrjIdRela_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              // 🔥 多关键字段：使用第一个关键字段的值
              this.iShowList.BindGvCache(clsGCConstantPrjIdRelaEN._CurrTabName, this.keyId.constId);
          }
          break;
        case '确认修改':
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In GCConstantPrjIdRela_EditAi.btnSubmit_Click)';
          alert(strInfo);
          if (returnBool == true) {
            if (GCConstantPrjIdRela_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refGCConstantPrjIdRela_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              // 🔥 多关键字段：使用第一个关键字段的值
              this.iShowList.BindGvCache(clsGCConstantPrjIdRelaEN._CurrTabName, this.keyId.constId);
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
    const txtConstId = document.getElementById('txtConstId') as HTMLInputElement | null;
    if (txtConstId != null) {
      txtConstId.readOnly = bolReadonly;
    }
  }

  /** 为插入记录做准备工作 */
  public async AddNewRecord() {
    refGCConstantPrjIdRela_Edit.value.Clear();
  }

  /** 为插入记录做准备工作（使用最大值ID） */
  public async AddNewRecordWithMaxId() {
    refGCConstantPrjIdRela_Edit.value.Clear();
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditAi_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objGCConstantPrjIdRelaEN;
    try {
      objGCConstantPrjIdRelaEN =
        await refGCConstantPrjIdRela_Edit.value.GetEditDataGCConstantPrjIdRelaObj();
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
      GCConstantPrjIdRela_CheckPropertyNew(objGCConstantPrjIdRelaEN);
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
      returnBool = await GCConstantPrjIdRela_AddNewRecordAsync(objGCConstantPrjIdRelaEN);
      if (returnBool == true) {
        // GCConstantPrjIdRela_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
        const strInfo = `添加[GC常量工程关系(GCConstantPrjIdRela)]记录成功!`;
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[GC常量工程关系(GCConstantPrjIdRela)]记录不成功!`;
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
  public async ShowData(key: GCConstantPrjIdRelaKey) {
    const strThisFuncName = this.ShowData.name;
    let objGCConstantPrjIdRelaEN = new clsGCConstantPrjIdRelaEN();
    try {
      const returnBool = await GCConstantPrjIdRela_IsExistAsync(key);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', key.constId);
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
      const objGCConstantPrjIdRelaENConst = await GCConstantPrjIdRela_GetObjByKeyAsync(key);
      if (objGCConstantPrjIdRelaENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objGCConstantPrjIdRelaEN = objGCConstantPrjIdRelaENConst;
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
    refGCConstantPrjIdRela_Edit.value.ShowDataFromGCConstantPrjIdRelaObj(objGCConstantPrjIdRelaEN);
  }

  /** 修改记录（显示数据） */
  public async UpdateRecord(key: GCConstantPrjIdRelaKey): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = key;
    try {
      const objGCConstantPrjIdRelaEN = await GCConstantPrjIdRela_GetObjByKeyAsync(key);
      if (objGCConstantPrjIdRelaEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refGCConstantPrjIdRela_Edit.value.ShowDataFromGCConstantPrjIdRelaObj(
        objGCConstantPrjIdRelaEN,
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
    const objGCConstantPrjIdRelaEN =
      await refGCConstantPrjIdRela_Edit.value.GetEditDataGCConstantPrjIdRelaObj();
    // 🔥 多关键字段：循环设置每个关键字段
    objGCConstantPrjIdRelaEN.SetConstId(this.keyId.constId);
    objGCConstantPrjIdRelaEN.SetPrjId(this.keyId.prjId);
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr = objGCConstantPrjIdRelaEN.updFldString;
    if (objGCConstantPrjIdRelaEN.constId == '' || objGCConstantPrjIdRelaEN.constId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      GCConstantPrjIdRela_CheckProperty4Update(objGCConstantPrjIdRelaEN);
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
      const returnBool = await GCConstantPrjIdRela_UpdateRecordAsync(objGCConstantPrjIdRelaEN);
      if (returnBool == true) {
        // GCConstantPrjIdRela_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
        //GCConstantPrjIdRela_DeleteKeyIdCache(this.keyId);
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
    const objGCConstantPrjIdRelaEN =
      await refGCConstantPrjIdRela_Edit.value.GetEditDataGCConstantPrjIdRelaObj();

    // 🔥 多关键字段：循环设置每个关键字段
    objGCConstantPrjIdRelaEN.SetConstId(this.keyId.constId);
    objGCConstantPrjIdRelaEN.SetPrjId(this.keyId.prjId);
    objGCConstantPrjIdRelaEN.sfUpdFldSetStr = objGCConstantPrjIdRelaEN.updFldString;
    if (objGCConstantPrjIdRelaEN.constId == '' || objGCConstantPrjIdRelaEN.constId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      GCConstantPrjIdRela_CheckProperty4Update(objGCConstantPrjIdRelaEN);
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
      const returnBool = await GCConstantPrjIdRela_EditRecordExAsync(objGCConstantPrjIdRelaEN);
      if (returnBool == true) {
        // GCConstantPrjIdRela_ReFreshCache(); // 🔥 当前表未使用 localStorage/sessionStorage 缓存，无需刷新
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
  public set btnCancelGCConstantPrjIdRela(value: string) {
    refGCConstantPrjIdRela_Edit.value.strCancelButtonText = value;
  }

  /** 获取提交按钮标题 */
  public get btnSubmitGCConstantPrjIdRela(): string {
    const strValue = refGCConstantPrjIdRela_Edit.value.strSubmitButtonText;
    return strValue;
  }

  /** 设置提交按钮标题 */
  public set btnSubmitGCConstantPrjIdRela(value: string) {
    refGCConstantPrjIdRela_Edit.value.strSubmitButtonText = value;
  }
}
