/**
 * 类名:QxUserIdentity_Edit(界面:QxUserIdentityCRUD,00140039)
 * 表名:QxUserIdentity(00140042)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/31 09:36:29
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS,0257)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  QxUserIdentity_CheckPropertyNew,
  QxUserIdentity_IsExistAsync,
  QxUserIdentity_AddNewRecordAsync,
  QxUserIdentity_ReFreshCache,
  QxUserIdentity_AddNewRecordWithMaxIdAsync,
  QxUserIdentity_GetObjByIdentityIdAsync,
  QxUserIdentity_CheckProperty4Update,
  QxUserIdentity_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUserIdentityWApi';
import { clsQxUserIdentityEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserIdentityEN';
import {
  QxUserIdentity_DeleteKeyIdCache,
  divVarSet,
  refQxUserIdentity_Edit,
} from '@/viewsShare/UserManage_GP/QxUserIdentityVueShare';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** QxUserIdentity_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class QxUserIdentity_Edit {
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
  public static objPageEdit: QxUserIdentity_Edit;
  public static objPageEdit2: QxUserIdentity_Edit;
  public static objPageEdit3: QxUserIdentity_Edit;
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
    if (QxUserIdentity_Edit.SetPageEdit(this, 1) == true) return;
    if (QxUserIdentity_Edit.SetPageEdit(this, 2) == true) return;
    if (QxUserIdentity_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (QxUserIdentity_Edit.objPageEdit == null) {
          QxUserIdentity_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxUserIdentity_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            QxUserIdentity_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (QxUserIdentity_Edit.objPageEdit2 == null) {
          QxUserIdentity_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxUserIdentity_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            QxUserIdentity_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (QxUserIdentity_Edit.objPageEdit3 == null) {
          QxUserIdentity_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxUserIdentity_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            QxUserIdentity_Edit.objPageEdit3 = objDataLst;
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
    if (QxUserIdentity_Edit.objPageEdit != null) {
      const strClassNameOld = QxUserIdentity_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return QxUserIdentity_Edit.objPageEdit;
    }
    if (QxUserIdentity_Edit.objPageEdit2 != null) {
      const strClassNameOld = QxUserIdentity_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return QxUserIdentity_Edit.objPageEdit2;
    }
    if (QxUserIdentity_Edit.objPageEdit3 != null) {
      const strClassNameOld = QxUserIdentity_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return QxUserIdentity_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_QxUserIdentity() {
    if (QxUserIdentity_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refQxUserIdentity_Edit.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_QxUserIdentity(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxUserIdentity.name;
    if (QxUserIdentity_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refQxUserIdentity_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refQxUserIdentity_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitQxUserIdentity = '确认添加';
      this.btnCancelQxUserIdentity = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitQxUserIdentity = '确认修改';
      this.btnCancelQxUserIdentity = '取消修改';
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
      const bolIsSuccess = await this.ShowDialog_QxUserIdentity(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsQxUserIdentityEN.PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(strIdentityId: string) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (IsNullOrEmpty(strIdentityId) == true) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_QxUserIdentity(this.opType);
      if (bolIsSuccess == false) return;
      this.UpdateRecord(strIdentityId);
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
  public async btnUpdateRecord_Click(strIdentityId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strIdentityId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_QxUserIdentity(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true; //
      const update = await this.UpdateRecord(strIdentityId);
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
    const strCommandText: string = this.btnSubmitQxUserIdentity;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitQxUserIdentity = '确认添加';
          this.btnCancelQxUserIdentity = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (['02', '03', '06'].indexOf(clsQxUserIdentityEN.PrimaryTypeId) > -1) {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (QxUserIdentity_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_QxUserIdentity();
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsQxUserIdentityEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (QxUserIdentity_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refQxUserIdentity_Edit.value.hideDialog();
              }
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsQxUserIdentityEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In QxUserIdentity_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (QxUserIdentity_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refQxUserIdentity_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsQxUserIdentityEN._CurrTabName, this.keyId);
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
    $('#txtIdentityId').attr('ReadOnly', bolReadonly.toString());
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    refQxUserIdentity_Edit.value.Clear();
    //wucQxUserIdentityB1.identityId = QxUserIdentityGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    refQxUserIdentity_Edit.value.Clear();

    //this.identityId = await QxUserIdentity_GetMaxStrIdAsync();
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objQxUserIdentityEN;
    try {
      objQxUserIdentityEN = await refQxUserIdentity_Edit.value.GetEditDataQxUserIdentityObj();
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
      QxUserIdentity_CheckPropertyNew(objQxUserIdentityEN);
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
      const bolIsExist = await QxUserIdentity_IsExistAsync(objQxUserIdentityEN.identityId);
      if (bolIsExist == true) {
        const strMsg = Format('添加记录时,关键字：{0}已经存在!', objQxUserIdentityEN.identityId);
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值,否则会出错!
      }
      returnBool = await QxUserIdentity_AddNewRecordAsync(objQxUserIdentityEN);
      if (returnBool == true) {
        QxUserIdentity_ReFreshCache();
        const strInfo = `添加[用户权限身份(QxUserIdentity)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[用户权限身份(QxUserIdentity)]记录不成功!`;
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
    let objQxUserIdentityEN;
    try {
      objQxUserIdentityEN = await refQxUserIdentity_Edit.value.GetEditDataQxUserIdentityObj();
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
      QxUserIdentity_CheckPropertyNew(objQxUserIdentityEN);
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
      const responseKeyId = await QxUserIdentity_AddNewRecordWithMaxIdAsync(objQxUserIdentityEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        QxUserIdentity_ReFreshCache();
        const strInfo = `添加[用户权限身份(QxUserIdentity)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[用户权限身份(QxUserIdentity)]记录不成功!`;
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
   * @param strIdentityId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strIdentityId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objQxUserIdentityEN = new clsQxUserIdentityEN();
    try {
      const returnBool = await QxUserIdentity_IsExistAsync(strIdentityId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strIdentityId);
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
      const objQxUserIdentityENConst = await QxUserIdentity_GetObjByIdentityIdAsync(strIdentityId);
      if (objQxUserIdentityENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objQxUserIdentityEN = objQxUserIdentityENConst;
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
    refQxUserIdentity_Edit.value.ShowDataFromQxUserIdentityObj(objQxUserIdentityEN);
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strIdentityId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strIdentityId;
    try {
      const objQxUserIdentityEN = await QxUserIdentity_GetObjByIdentityIdAsync(strIdentityId);
      if (objQxUserIdentityEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refQxUserIdentity_Edit.value.ShowDataFromQxUserIdentityObj(objQxUserIdentityEN);
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
    const objQxUserIdentityEN = await refQxUserIdentity_Edit.value.GetEditDataQxUserIdentityObj();
    objQxUserIdentityEN.SetIdentityId(this.keyId);
    objQxUserIdentityEN.sfUpdFldSetStr = objQxUserIdentityEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objQxUserIdentityEN.identityId == '' || objQxUserIdentityEN.identityId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      QxUserIdentity_CheckProperty4Update(objQxUserIdentityEN);
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
      const returnBool = await QxUserIdentity_UpdateRecordAsync(objQxUserIdentityEN);
      if (returnBool == true) {
        QxUserIdentity_ReFreshCache();
        QxUserIdentity_DeleteKeyIdCache(this.keyId);
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
  public set btnCancelQxUserIdentity(value: string) {
    refQxUserIdentity_Edit.value.strCancelButtonText = value;
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitQxUserIdentity(): string {
    const strValue = refQxUserIdentity_Edit.value.strSubmitButtonText;
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitQxUserIdentity(value: string) {
    refQxUserIdentity_Edit.value.strSubmitButtonText = value;
  }
}
