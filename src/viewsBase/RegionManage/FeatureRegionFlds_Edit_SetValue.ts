/**
 * 类名:FeatureRegionFlds_Edit_SetValue(界面:FeatureRegionFlds_Sim,00050294)
 * 表名:FeatureRegionFlds(00050452)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/08 11:50:57
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS,0257)
 * 编程语言:TypeScript
 **/
// import $ from 'jquery';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  FeatureRegionFlds_GetMaxStrIdAsync,
  FeatureRegionFlds_CheckPropertyNew,
  FeatureRegionFlds_AddNewRecordWithMaxIdAsync,
  FeatureRegionFlds_ReFreshCache,
  FeatureRegionFlds_GetUniCondStr,
  FeatureRegionFlds_IsExistRecordAsync,
  FeatureRegionFlds_GetUniCondStr4Update,
  FeatureRegionFlds_IsExistAsync,
  FeatureRegionFlds_GetObjByViewFeatureIdAsync,
  FeatureRegionFlds_CheckProperty4Update,
  FeatureRegionFlds_UpdateRecordAsync,
  FeatureRegionFlds_EditRecordExAsync,
} from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import {
  RegionId_Static,
  FeatureRegionFlds_DeleteKeyIdCache,
  divVarSet,
  refFeatureRegionFlds_Edit_SetValue,
} from '@/views/RegionManage/FeatureRegionFlds_SimVueShare';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** FeatureRegionFlds_Edit_SetValue 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class FeatureRegionFlds_Edit_SetValue {
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
  public static objPageEdit: FeatureRegionFlds_Edit_SetValue;
  public static objPageEdit2: FeatureRegionFlds_Edit_SetValue;
  public static objPageEdit3: FeatureRegionFlds_Edit_SetValue;
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
    if (FeatureRegionFlds_Edit_SetValue.SetPageEdit(this, 1) == true) return;
    if (FeatureRegionFlds_Edit_SetValue.SetPageEdit(this, 2) == true) return;
    if (FeatureRegionFlds_Edit_SetValue.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (FeatureRegionFlds_Edit_SetValue.objPageEdit == null) {
          FeatureRegionFlds_Edit_SetValue.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = FeatureRegionFlds_Edit_SetValue.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            FeatureRegionFlds_Edit_SetValue.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (FeatureRegionFlds_Edit_SetValue.objPageEdit2 == null) {
          FeatureRegionFlds_Edit_SetValue.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = FeatureRegionFlds_Edit_SetValue.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            FeatureRegionFlds_Edit_SetValue.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (FeatureRegionFlds_Edit_SetValue.objPageEdit3 == null) {
          FeatureRegionFlds_Edit_SetValue.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = FeatureRegionFlds_Edit_SetValue.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            FeatureRegionFlds_Edit_SetValue.objPageEdit3 = objDataLst;
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
    if (FeatureRegionFlds_Edit_SetValue.objPageEdit != null) {
      const strClassNameOld = FeatureRegionFlds_Edit_SetValue.objPageEdit.className;
      if (strClassNameOld == strClassName) return FeatureRegionFlds_Edit_SetValue.objPageEdit;
    }
    if (FeatureRegionFlds_Edit_SetValue.objPageEdit2 != null) {
      const strClassNameOld = FeatureRegionFlds_Edit_SetValue.objPageEdit2.className;
      if (strClassNameOld == strClassName) return FeatureRegionFlds_Edit_SetValue.objPageEdit2;
    }
    if (FeatureRegionFlds_Edit_SetValue.objPageEdit3 != null) {
      const strClassNameOld = FeatureRegionFlds_Edit_SetValue.objPageEdit3.className;
      if (strClassNameOld == strClassName) return FeatureRegionFlds_Edit_SetValue.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_FeatureRegionFlds() {
    if (FeatureRegionFlds_Edit_SetValue.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refFeatureRegionFlds_Edit_SetValue.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_FeatureRegionFlds(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_FeatureRegionFlds.name;
    if (FeatureRegionFlds_Edit_SetValue.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refFeatureRegionFlds_Edit_SetValue.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refFeatureRegionFlds_Edit_SetValue.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitFeatureRegionFlds = '确认添加';
      this.btnCancelFeatureRegionFlds = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitFeatureRegionFlds = '确认修改';
      this.btnCancelFeatureRegionFlds = '取消修改';
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
      const bolIsSuccess = await this.ShowDialog_FeatureRegionFlds(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsFeatureRegionFldsEN.PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(strViewFeatureId: string) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (IsNullOrEmpty(strViewFeatureId) == true) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_FeatureRegionFlds(this.opType);
      if (bolIsSuccess == false) return;
      this.UpdateRecord(strViewFeatureId);
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
  public async btnUpdateRecord_Click(strViewFeatureId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strViewFeatureId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_FeatureRegionFlds(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true; //
      const update = await this.UpdateRecord(strViewFeatureId);
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
    const strCommandText: string = this.btnSubmitFeatureRegionFlds;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitFeatureRegionFlds = '确认添加';
          this.btnCancelFeatureRegionFlds = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (['02', '03', '06'].indexOf(clsFeatureRegionFldsEN.PrimaryTypeId) > -1) {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (FeatureRegionFlds_Edit_SetValue.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_FeatureRegionFlds();
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsFeatureRegionFldsEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (
                FeatureRegionFlds_Edit_SetValue.strPageDispModeId == enumPageDispMode.PopupBox_01
              ) {
                refFeatureRegionFlds_Edit_SetValue.value.hideDialog();
              }
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsFeatureRegionFldsEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In FeatureRegionFlds_Edit_SetValue.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (FeatureRegionFlds_Edit_SetValue.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refFeatureRegionFlds_Edit_SetValue.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsFeatureRegionFldsEN._CurrTabName, this.keyId);
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

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    refFeatureRegionFlds_Edit_SetValue.value.Clear();
    //wucFeatureRegionFldsB1.viewFeatureId = FeatureRegionFldsGetMaxStrId_S();
    try {
      const returnString = await FeatureRegionFlds_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表FeatureRegionFlds的最大关键字为空,不成功,请检查!');
        //显示信息框
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

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    const strThisFuncName = this.AddNewRecordWithMaxId.name;
    refFeatureRegionFlds_Edit_SetValue.value.Clear();

    //this.viewFeatureId = await FeatureRegionFlds_GetMaxStrIdAsync();
    try {
      const returnString = await FeatureRegionFlds_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表FeatureRegionFlds的最大关键字为空,不成功,请检查!');
        //显示信息框
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

  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objFeatureRegionFldsEN;
    try {
      objFeatureRegionFldsEN =
        await refFeatureRegionFlds_Edit_SetValue.value.GetEditDataFeatureRegionFldsObj();
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
      FeatureRegionFlds_CheckPropertyNew(objFeatureRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objFeatureRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await FeatureRegionFlds_AddNewRecordWithMaxIdAsync(
        objFeatureRegionFldsEN,
      );
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId = returnKeyId;
        returnBool = true;
      }
      if (returnBool == true) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
        const strInfo = `添加[功能区域字段(FeatureRegionFlds)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[功能区域字段(FeatureRegionFlds)]记录不成功!`;
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

  /** 为添加记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
   **/
  public async CheckUniCond4Add(objFeatureRegionFldsEN: clsFeatureRegionFldsEN): Promise<boolean> {
    const strUniquenessCondition = FeatureRegionFlds_GetUniCondStr(objFeatureRegionFldsEN);
    const bolIsExistCondition = await FeatureRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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

  /** 为修改记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Update)
   **/
  public async CheckUniCond4Update(
    objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
  ): Promise<boolean> {
    const strUniquenessCondition = FeatureRegionFlds_GetUniCondStr4Update(objFeatureRegionFldsEN);
    const bolIsExistCondition = await FeatureRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    let objFeatureRegionFldsEN;
    try {
      objFeatureRegionFldsEN =
        await refFeatureRegionFlds_Edit_SetValue.value.GetEditDataFeatureRegionFldsObj();
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
      FeatureRegionFlds_CheckPropertyNew(objFeatureRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objFeatureRegionFldsEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await FeatureRegionFlds_AddNewRecordWithMaxIdAsync(
        objFeatureRegionFldsEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
        const strInfo = `添加[功能区域字段(FeatureRegionFlds)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[功能区域字段(FeatureRegionFlds)]记录不成功!`;
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
   * @param strViewFeatureId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strViewFeatureId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
    try {
      const returnBool = await FeatureRegionFlds_IsExistAsync(strViewFeatureId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strViewFeatureId);
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
      const objFeatureRegionFldsENConst = await FeatureRegionFlds_GetObjByViewFeatureIdAsync(
        strViewFeatureId,
      );
      if (objFeatureRegionFldsENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objFeatureRegionFldsEN = objFeatureRegionFldsENConst;
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
    refFeatureRegionFlds_Edit_SetValue.value.ShowDataFromFeatureRegionFldsObj(
      objFeatureRegionFldsEN,
    );
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strViewFeatureId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strViewFeatureId;
    try {
      const objFeatureRegionFldsEN = await FeatureRegionFlds_GetObjByViewFeatureIdAsync(
        strViewFeatureId,
      );
      if (objFeatureRegionFldsEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refFeatureRegionFlds_Edit_SetValue.value.ShowDataFromFeatureRegionFldsObj(
        objFeatureRegionFldsEN,
      );
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
    const objFeatureRegionFldsEN =
      await refFeatureRegionFlds_Edit_SetValue.value.GetEditDataFeatureRegionFldsObj();
    objFeatureRegionFldsEN.SetViewFeatureId(this.keyId);
    objFeatureRegionFldsEN.sfUpdFldSetStr = objFeatureRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objFeatureRegionFldsEN.viewFeatureId == '' ||
      objFeatureRegionFldsEN.viewFeatureId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      FeatureRegionFlds_CheckProperty4Update(objFeatureRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objFeatureRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await FeatureRegionFlds_UpdateRecordAsync(objFeatureRegionFldsEN);
      if (returnBool == true) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
        FeatureRegionFlds_DeleteKeyIdCache(RegionId_Static.value, this.keyId);
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

  /** 编辑记录，存在就修改，不存在就添加
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_EditRecordExSave)
   **/
  public async EditRecordExSave(): Promise<boolean> {
    const strThisFuncName = this.EditRecordExSave.name;
    const objFeatureRegionFldsEN =
      await refFeatureRegionFlds_Edit_SetValue.value.GetEditDataFeatureRegionFldsObj();
    objFeatureRegionFldsEN.SetViewFeatureId(this.keyId);
    objFeatureRegionFldsEN.sfUpdFldSetStr = objFeatureRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objFeatureRegionFldsEN.viewFeatureId == '' ||
      objFeatureRegionFldsEN.viewFeatureId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      FeatureRegionFlds_CheckProperty4Update(objFeatureRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objFeatureRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await FeatureRegionFlds_EditRecordExAsync(objFeatureRegionFldsEN);
      if (returnBool == true) {
        FeatureRegionFlds_ReFreshCache(RegionId_Static.value);
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
  public set btnCancelFeatureRegionFlds(value: string) {
    refFeatureRegionFlds_Edit_SetValue.value.strCancelButtonText = value;
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitFeatureRegionFlds(): string {
    const strValue = refFeatureRegionFlds_Edit_SetValue.value.strSubmitButtonText;
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitFeatureRegionFlds(value: string) {
    refFeatureRegionFlds_Edit_SetValue.value.strSubmitButtonText = value;
  }
}
