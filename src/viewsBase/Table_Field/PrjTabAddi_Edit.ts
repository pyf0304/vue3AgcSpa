﻿/**
 * 类名:PrjTabAddi_Edit(界面:PrjTabAddiCRUD,00050341)
 * 表名:PrjTabAddi(00050635)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/08 11:51:13
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS,0257)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  PrjTabAddi_CheckPropertyNew,
  PrjTabAddi_IsExistAsync,
  PrjTabAddi_AddNewRecordAsync,
  PrjTabAddi_AddNewRecordWithMaxIdAsync,
  PrjTabAddi_GetObjByTabIdAsync,
  PrjTabAddi_CheckProperty4Update,
  PrjTabAddi_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabAddiWApi';
import { clsPrjTabAddiEN } from '@/ts/L0Entity/Table_Field/clsPrjTabAddiEN';
import { divVarSet, refPrjTabAddi_Edit } from '@/views/Table_Field/PrjTabAddiVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** PrjTabAddi_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class PrjTabAddi_Edit {
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public isShowMsg = true; //编辑记录时是否显示提示信息
  public tag = ''; //编辑对象的标志，用于存放或者标志一些信息
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  public static objPageEdit: PrjTabAddi_Edit;
  public static objPageEdit2: PrjTabAddi_Edit;
  public static objPageEdit3: PrjTabAddi_Edit;
  public iShowList: IShowList | null;
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public divName4Edit = 'divEditLayout'; //编辑区的Id
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivEdit(): HTMLDivElement {
    return divVarSet.refDivEdit;
  }
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return divVarSet.refDivEdit;
  }
  constructor(strClassName: string, objShowList: IShowList | null) {
    this._className = strClassName;
    this.iShowList = objShowList;
    if (PrjTabAddi_Edit.SetPageEdit(this, 1) == true) return;
    if (PrjTabAddi_Edit.SetPageEdit(this, 2) == true) return;
    if (PrjTabAddi_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (PrjTabAddi_Edit.objPageEdit == null) {
          PrjTabAddi_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = PrjTabAddi_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            PrjTabAddi_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (PrjTabAddi_Edit.objPageEdit2 == null) {
          PrjTabAddi_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = PrjTabAddi_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            PrjTabAddi_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (PrjTabAddi_Edit.objPageEdit3 == null) {
          PrjTabAddi_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = PrjTabAddi_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            PrjTabAddi_Edit.objPageEdit3 = objDataLst;
            return true;
          } else return false;
        }
        break;
      default:
        return false;
      // break;
    }
  }
  public static GetPageEditObj(strClassName: string): any {
    if (PrjTabAddi_Edit.objPageEdit != null) {
      const strClassNameOld = PrjTabAddi_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return PrjTabAddi_Edit.objPageEdit;
    }
    if (PrjTabAddi_Edit.objPageEdit2 != null) {
      const strClassNameOld = PrjTabAddi_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return PrjTabAddi_Edit.objPageEdit2;
    }
    if (PrjTabAddi_Edit.objPageEdit3 != null) {
      const strClassNameOld = PrjTabAddi_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return PrjTabAddi_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_PrjTabAddi() {
    if (PrjTabAddi_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refPrjTabAddi_Edit.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_PrjTabAddi(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_PrjTabAddi.name;
    if (PrjTabAddi_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refPrjTabAddi_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refPrjTabAddi_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitPrjTabAddi = '确认添加';
      this.btnCancelPrjTabAddi = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitPrjTabAddi = '确认修改';
      this.btnCancelPrjTabAddi = '取消修改';
    }
    return true;
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_PrjTabAddi(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsPrjTabAddiEN.PrimaryTypeId) > -1) {
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

  /** 在数据表里修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecordInTab_Click)
   **/
  public async btnUpdateRecordInTab_Click(strTabId: string) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (IsNullOrEmpty(strTabId) == true) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_PrjTabAddi(this.opType);
      if (bolIsSuccess == false) return;
      this.UpdateRecord(strTabId);
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

  /** 修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click(strTabId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strTabId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_PrjTabAddi(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true; //
      const update = await this.UpdateRecord(strTabId);
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

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnOKUpd_Click)
   **/
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const strCommandText: string = this.btnSubmitPrjTabAddi;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitPrjTabAddi = '确认添加';
          this.btnCancelPrjTabAddi = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (['02', '03', '06'].indexOf(clsPrjTabAddiEN.PrimaryTypeId) > -1) {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (PrjTabAddi_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_PrjTabAddi();
              if (this.iShowList != null)
                this.iShowList.BindGv(clsPrjTabAddiEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (PrjTabAddi_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refPrjTabAddi_Edit.value.hideDialog();
              }
              if (this.iShowList != null)
                this.iShowList.BindGv(clsPrjTabAddiEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In PrjTabAddi_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (PrjTabAddi_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refPrjTabAddi_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGv(clsPrjTabAddiEN._CurrTabName, this.keyId);
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

  /**
   *  在用户自定义控件中,设置关键字的值,是否只读
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
   * @param bolReadonly:是否只读
   **/
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtTabId').attr('ReadOnly', bolReadonly.toString());
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    refPrjTabAddi_Edit.value.Clear();
    //wucPrjTabAddiB1.tabId = PrjTabAddiGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    refPrjTabAddi_Edit.value.Clear();

    //this.tabId = await PrjTabAddi_GetMaxStrIdAsync();
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objPrjTabAddiEN;
    try {
      objPrjTabAddiEN = await refPrjTabAddi_Edit.value.GetEditDataPrjTabAddiObj();
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
      PrjTabAddi_CheckPropertyNew(objPrjTabAddiEN);
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
      let returnBool = false;
      const bolIsExist = await PrjTabAddi_IsExistAsync(objPrjTabAddiEN.tabId);
      if (bolIsExist == true) {
        const strMsg = Format('添加记录时,关键字：{0}已经存在!', objPrjTabAddiEN.tabId);
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值,否则会出错!
      }
      returnBool = await PrjTabAddi_AddNewRecordAsync(objPrjTabAddiEN);
      if (returnBool == true) {
        //PrjTabAddi_ReFreshCache();
        const strInfo = `添加[工程表附加信息(PrjTabAddi)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[工程表附加信息(PrjTabAddi)]记录不成功!`;
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
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    let objPrjTabAddiEN;
    try {
      objPrjTabAddiEN = await refPrjTabAddi_Edit.value.GetEditDataPrjTabAddiObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值,否则会出错!
    }
    try {
      PrjTabAddi_CheckPropertyNew(objPrjTabAddiEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const responseKeyId = await PrjTabAddi_AddNewRecordWithMaxIdAsync(objPrjTabAddiEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //PrjTabAddi_ReFreshCache();
        const strInfo = `添加[工程表附加信息(PrjTabAddi)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[工程表附加信息(PrjTabAddi)]记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值,否则会出错!
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
    return ''; //一定要有一个返回值,否则会出错!
  }

  /** 函数功能:把以该关键字的记录内容显示在界面上,
   * 在这里是把值传到表控件中
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_ShowData)
   * @param strTabId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strTabId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objPrjTabAddiEN = new clsPrjTabAddiEN();
    try {
      const returnBool = await PrjTabAddi_IsExistAsync(strTabId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strTabId);
        //显示信息框
        alert(strInfo);
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
      const objPrjTabAddiENConst = await PrjTabAddi_GetObjByTabIdAsync(strTabId);
      if (objPrjTabAddiENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objPrjTabAddiEN = objPrjTabAddiENConst;
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
    //3、用提供的关键字初始化一个类对象；
    refPrjTabAddi_Edit.value.ShowDataFromPrjTabAddiObj(objPrjTabAddiEN);
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strTabId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strTabId;
    try {
      const objPrjTabAddiEN = await PrjTabAddi_GetObjByTabIdAsync(strTabId);
      if (objPrjTabAddiEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refPrjTabAddi_Edit.value.ShowDataFromPrjTabAddiObj(objPrjTabAddiEN);
      console.log('完成UpdateRecord!');
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

  /** 修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const objPrjTabAddiEN = await refPrjTabAddi_Edit.value.GetEditDataPrjTabAddiObj();
    objPrjTabAddiEN.SetTabId(this.keyId);
    objPrjTabAddiEN.sfUpdFldSetStr = objPrjTabAddiEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPrjTabAddiEN.tabId == '' || objPrjTabAddiEN.tabId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PrjTabAddi_CheckProperty4Update(objPrjTabAddiEN);
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
      const returnBool = await PrjTabAddi_UpdateRecordAsync(objPrjTabAddiEN);
      if (returnBool == true) {
        //PrjTabAddi_ReFreshCache();
        //PrjTabAddi_DeleteKeyIdCache(this.keyId);
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

  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelPrjTabAddi(value: string) {
    refPrjTabAddi_Edit.value.strCancelButtonText = value;
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitPrjTabAddi(): string {
    const strValue = refPrjTabAddi_Edit.value.strSubmitButtonText;
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitPrjTabAddi(value: string) {
    refPrjTabAddi_Edit.value.strSubmitButtonText = value;
  }
}
