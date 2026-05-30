/**
 * 类名:ApplicationType_EditAi(界面:ApplicationTypeCRUD,00050315)
 * 表名:ApplicationType
 * 版本:2026.05.06
 * 生成者:
 * 模块中文名:GeneCode
 * 编程语言:TypeScript
 **/
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  ApplicationType_AddNewRecordWithReturnKeyAsync,
  ApplicationType_AddNewRecordAsync,
  ApplicationType_CheckPropertyNew,
  ApplicationType_ReFreshCache,
  ApplicationType_GetUniCondStr,
  ApplicationType_IsExistRecordAsync,
  ApplicationType_GetUniCondStr4Update,
  ApplicationType_IsExistAsync,
  ApplicationType_CheckProperty4Update,
  ApplicationType_UpdateRecordAsync,
  ApplicationType_EditRecordExAsync,
  ApplicationType_GetObjByKeyAsync,
} from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import {
  ApplicationType_DeleteKeyIdCache,
  divVarSet,
  refApplicationType_Edit,
} from '@/views/GeneCode/ApplicationTypeVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

/** ApplicationType_EditAi 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class ApplicationType_EditAi {
  protected _className = 'Unknown';

  get className(): string {
    return this._className;
  }

  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = 0; // 🔥 数字型关键字
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
  public HideDialog_ApplicationType() {
    if (ApplicationType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refApplicationType_Edit.value.hideDialog();
    }
  }

  /** 显示对话框 */
  public async ShowDialog_ApplicationType(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_ApplicationType.name;
    if (ApplicationType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refApplicationType_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refApplicationType_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitApplicationType = '确认添加';
      this.btnCancelApplicationType = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitApplicationType = '确认修改';
      this.btnCancelApplicationType = '取消修改';
    }
    return true;
  }

  /** 添加新记录 */
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_ApplicationType(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsApplicationTypeEN._PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(intApplicationTypeId: number) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (intApplicationTypeId == 0 || intApplicationTypeId == undefined) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_ApplicationType(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true;
      const update = await this.UpdateRecord(intApplicationTypeId);
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
  public async btnUpdateRecord_Click(intApplicationTypeId: number) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (intApplicationTypeId == 0 || intApplicationTypeId == undefined) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_ApplicationType(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true;
      const update = await this.UpdateRecord(intApplicationTypeId);
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
    const strCommandText: string = this.btnSubmitApplicationType;
    try {
      let returnBool = false;
      let returnKeyId = 0;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitApplicationType = '确认添加';
          this.btnCancelApplicationType = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (['02', '03', '06'].indexOf(clsApplicationTypeEN._PrimaryTypeId) > -1) {
            returnKeyId = await this.AddNewRecordWithReturnKeySave();
            if (returnKeyId != 0) {
              if (ApplicationType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
                refApplicationType_Edit.value.hideDialog();
              if (this.iShowList != null)
                this.iShowList.BindGvCache(
                  clsApplicationTypeEN._CurrTabName,
                  returnKeyId.toString(),
                );
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (ApplicationType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refApplicationType_Edit.value.hideDialog();
              }
              if (this.iShowList != null)
                this.iShowList.BindGvCache(
                  clsApplicationTypeEN._CurrTabName,
                  this.keyId.toString(),
                );
            }
          }
          break;
        case '确认修改':
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In ApplicationType_EditAi.btnSubmit_Click)';
          alert(strInfo);
          if (returnBool == true) {
            if (ApplicationType_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refApplicationType_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsApplicationTypeEN._CurrTabName, this.keyId.toString());
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
    const txtApplicationTypeId = document.getElementById(
      'txtApplicationTypeId',
    ) as HTMLInputElement | null;
    if (txtApplicationTypeId != null) {
      txtApplicationTypeId.readOnly = bolReadonly;
    }
  }
  /** 为插入记录做准备工作 */
  public async AddNewRecord() {
    refApplicationType_Edit.value.Clear();
  }

  /** 为插入记录做准备工作（使用最大值ID） */
  public async AddNewRecordWithMaxId() {
    refApplicationType_Edit.value.Clear();
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objApplicationTypeEN;
    try {
      objApplicationTypeEN = await refApplicationType_Edit.value.GetEditDataApplicationTypeObj();
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
      ApplicationType_CheckPropertyNew(objApplicationTypeEN);
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
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add(objApplicationTypeEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      // Identity_02: 整数自增，直接调用 AddNewRecordAsync
      returnBool = await ApplicationType_AddNewRecordAsync(objApplicationTypeEN);
      if (returnBool == true) {
        ApplicationType_ReFreshCache();
        const strInfo = `添加[应用程序类型(ApplicationType)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[应用程序类型(ApplicationType)]记录不成功!`;
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

  /** 为添加记录检查唯一性条件 */
  public async CheckUniCond4Add(objApplicationTypeEN: clsApplicationTypeEN): Promise<boolean> {
    const strUniquenessCondition = ApplicationType_GetUniCondStr(objApplicationTypeEN);
    const bolIsExistCondition = await ApplicationType_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objApplicationTypeEN: clsApplicationTypeEN): Promise<boolean> {
    const strUniquenessCondition = ApplicationType_GetUniCondStr4Update(objApplicationTypeEN);
    const bolIsExistCondition = await ApplicationType_IsExistRecordAsync(strUniquenessCondition);
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

  /** 添加新记录,由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithReturnKeySave)
   **/
  public async AddNewRecordWithReturnKeySave(): Promise<number> {
    const strThisFuncName = this.AddNewRecordWithReturnKeySave.name;
    let objApplicationTypeEN;
    try {
      objApplicationTypeEN = await refApplicationType_Edit.value.GetEditDataApplicationTypeObj();
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
      ApplicationType_CheckPropertyNew(objApplicationTypeEN);
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
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add(objApplicationTypeEN);
      if (bolIsExistCond == false) {
        return 0;
      }
      const responseKeyId = await ApplicationType_AddNewRecordWithReturnKeyAsync(
        objApplicationTypeEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        objApplicationTypeEN.applicationTypeId = Number(returnKeyId);
        ApplicationType_ReFreshCache();
        const strInfo = `添加[应用程序类型(ApplicationType)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[应用程序类型(ApplicationType)]记录不成功!`;
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
  public async ShowData(intApplicationTypeId: number) {
    const strThisFuncName = this.ShowData.name;
    let objApplicationTypeEN = new clsApplicationTypeEN();
    try {
      const returnBool = await ApplicationType_IsExistAsync({
        applicationTypeId: intApplicationTypeId,
      });
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', intApplicationTypeId);
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
      const objApplicationTypeENConst = await ApplicationType_GetObjByKeyAsync({
        applicationTypeId: intApplicationTypeId,
      });
      if (objApplicationTypeENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objApplicationTypeEN = objApplicationTypeENConst;
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
    refApplicationType_Edit.value.ShowDataFromApplicationTypeObj(objApplicationTypeEN);
  }

  /** 修改记录（显示数据） */
  public async UpdateRecord(intApplicationTypeId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = intApplicationTypeId;
    try {
      const objApplicationTypeEN = await ApplicationType_GetObjByKeyAsync({
        applicationTypeId: intApplicationTypeId,
      });
      if (objApplicationTypeEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refApplicationType_Edit.value.ShowDataFromApplicationTypeObj(objApplicationTypeEN);
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
    const objApplicationTypeEN =
      await refApplicationType_Edit.value.GetEditDataApplicationTypeObj();
    objApplicationTypeEN.SetApplicationTypeId(this.keyId);
    objApplicationTypeEN.sfUpdFldSetStr = objApplicationTypeEN.updFldString;
    if (
      objApplicationTypeEN.applicationTypeId == 0 ||
      objApplicationTypeEN.applicationTypeId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      ApplicationType_CheckProperty4Update(objApplicationTypeEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objApplicationTypeEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await ApplicationType_UpdateRecordAsync(objApplicationTypeEN);
      if (returnBool == true) {
        ApplicationType_ReFreshCache();
        ApplicationType_DeleteKeyIdCache(this.keyId);
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
    const objApplicationTypeEN =
      await refApplicationType_Edit.value.GetEditDataApplicationTypeObj();
    objApplicationTypeEN.SetApplicationTypeId(this.keyId);
    objApplicationTypeEN.sfUpdFldSetStr = objApplicationTypeEN.updFldString;
    if (
      objApplicationTypeEN.applicationTypeId == 0 ||
      objApplicationTypeEN.applicationTypeId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      ApplicationType_CheckProperty4Update(objApplicationTypeEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objApplicationTypeEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await ApplicationType_EditRecordExAsync(objApplicationTypeEN);
      if (returnBool == true) {
        ApplicationType_ReFreshCache();
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
  public set btnCancelApplicationType(value: string) {
    refApplicationType_Edit.value.strCancelButtonText = value;
  }

  /** 获取提交按钮标题 */
  public get btnSubmitApplicationType(): string {
    const strValue = refApplicationType_Edit.value.strSubmitButtonText;
    return strValue;
  }

  /** 设置提交按钮标题 */
  public set btnSubmitApplicationType(value: string) {
    refApplicationType_Edit.value.strSubmitButtonText = value;
  }
}
