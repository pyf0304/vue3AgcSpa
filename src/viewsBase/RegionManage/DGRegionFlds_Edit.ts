/**
 * 类名:DGRegionFlds_Edit(界面:DGRegionFldsCRUD,00050249)
 * 表名:DGRegionFlds(00050113)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/08 11:50:51
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
import {
  DGRegionFlds_CheckPropertyNew,
  DGRegionFlds_AddNewRecordAsync,
  DGRegionFlds_ReFreshCache,
  DGRegionFlds_GetUniCondStr,
  DGRegionFlds_IsExistRecordAsync,
  DGRegionFlds_GetUniCondStr4Update,
  DGRegionFlds_AddNewRecordWithReturnKeyAsync,
  DGRegionFlds_IsExistAsync,
  DGRegionFlds_GetObjBymIdAsync,
  DGRegionFlds_CheckProperty4Update,
  DGRegionFlds_UpdateRecordAsync,
  DGRegionFlds_EditRecordExAsync,
} from '@/ts/L3ForWApi/RegionManage/clsDGRegionFldsWApi';
import {
  RegionId_Static,
  DGRegionFlds_DeleteKeyIdCache,
  divVarSet,
  refDGRegionFlds_Edit,
} from '@/views/RegionManage/DGRegionFldsVueShare';
import { clsDGRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsEN';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** DGRegionFlds_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class DGRegionFlds_Edit {
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = 0;
  public isShowMsg = true; //编辑记录时是否显示提示信息
  public tag = ''; //编辑对象的标志，用于存放或者标志一些信息
  public static strPageDispModeId = '02'; //Right(右边)
  public static objPageEdit: DGRegionFlds_Edit;
  public static objPageEdit2: DGRegionFlds_Edit;
  public static objPageEdit3: DGRegionFlds_Edit;
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
    if (DGRegionFlds_Edit.SetPageEdit(this, 1) == true) return;
    if (DGRegionFlds_Edit.SetPageEdit(this, 2) == true) return;
    if (DGRegionFlds_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (DGRegionFlds_Edit.objPageEdit == null) {
          DGRegionFlds_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = DGRegionFlds_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            DGRegionFlds_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (DGRegionFlds_Edit.objPageEdit2 == null) {
          DGRegionFlds_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = DGRegionFlds_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            DGRegionFlds_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (DGRegionFlds_Edit.objPageEdit3 == null) {
          DGRegionFlds_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = DGRegionFlds_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            DGRegionFlds_Edit.objPageEdit3 = objDataLst;
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
    if (DGRegionFlds_Edit.objPageEdit != null) {
      const strClassNameOld = DGRegionFlds_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return DGRegionFlds_Edit.objPageEdit;
    }
    if (DGRegionFlds_Edit.objPageEdit2 != null) {
      const strClassNameOld = DGRegionFlds_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return DGRegionFlds_Edit.objPageEdit2;
    }
    if (DGRegionFlds_Edit.objPageEdit3 != null) {
      const strClassNameOld = DGRegionFlds_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return DGRegionFlds_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_DGRegionFlds() {
    if (DGRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refDGRegionFlds_Edit.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_DGRegionFlds(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_DGRegionFlds.name;
    if (DGRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refDGRegionFlds_Edit.value == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refDGRegionFlds_Edit.value.showDialog(this);
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitDGRegionFlds = '确认添加';
      this.btnCancelDGRegionFlds = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitDGRegionFlds = '确认修改';
      this.btnCancelDGRegionFlds = '取消修改';
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
      const bolIsSuccess = await this.ShowDialog_DGRegionFlds(this.opType);
      if (bolIsSuccess == false) return;
      if (['02', '03', '06'].indexOf(clsDGRegionFldsEN.PrimaryTypeId) > -1) {
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
  public async btnUpdateRecordInTab_Click(lngmId: number) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (lngmId == 0) {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_DGRegionFlds(this.opType);
      if (bolIsSuccess == false) return;
      const lngKeyId = lngmId;
      this.UpdateRecord(lngKeyId);
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
  public async btnUpdateRecord_Click(lngmId: number) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (lngmId == 0) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_DGRegionFlds(this.opType);
      if (bolIsSuccess == false) return;
      this.bolIsLoadEditRegion = true; //
      const lngKeyId = lngmId;
      const update = await this.UpdateRecord(lngKeyId);
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
    const strCommandText: string = this.btnSubmitDGRegionFlds;
    try {
      let returnBool = false;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitDGRegionFlds = '确认添加';
          this.btnCancelDGRegionFlds = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (['02', '03', '06'].indexOf(clsDGRegionFldsEN.PrimaryTypeId) > -1) {
            const returnKeyId = await this.AddNewRecordWithReturnKeySave();
            if (returnKeyId != 0) {
              refDGRegionFlds_Edit.value.hideDialog();
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsDGRegionFldsEN._CurrTabName, '');
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (DGRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refDGRegionFlds_Edit.value.hideDialog();
              }
              if (this.iShowList != null)
                this.iShowList.BindGvCache(clsDGRegionFldsEN._CurrTabName, this.keyId.toString());
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In DGRegionFlds_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (DGRegionFlds_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refDGRegionFlds_Edit.value.hideDialog();
            }
            if (this.iShowList != null)
              this.iShowList.BindGvCache(clsDGRegionFldsEN._CurrTabName, this.keyId.toString());
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
    refDGRegionFlds_Edit.value.Clear();
    //wucDGRegionFldsB1.mId = DGRegionFldsGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    refDGRegionFlds_Edit.value.Clear();

    //this.mId = await DGRegionFlds_GetMaxStrIdAsync();
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    let objDGRegionFldsEN;
    try {
      objDGRegionFldsEN = await refDGRegionFlds_Edit.value.GetEditDataDGRegionFldsObj();
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
      DGRegionFlds_CheckPropertyNew(objDGRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objDGRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await DGRegionFlds_AddNewRecordAsync(objDGRegionFldsEN);
      if (returnBool == true) {
        DGRegionFlds_ReFreshCache(RegionId_Static.value);
        const strInfo = `添加[DG区域字段(DGRegionFlds)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[DG区域字段(DGRegionFlds)]记录不成功!`;
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
  public async CheckUniCond4Add(objDGRegionFldsEN: clsDGRegionFldsEN): Promise<boolean> {
    const strUniquenessCondition = DGRegionFlds_GetUniCondStr(objDGRegionFldsEN);
    const bolIsExistCondition = await DGRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objDGRegionFldsEN: clsDGRegionFldsEN): Promise<boolean> {
    const strUniquenessCondition = DGRegionFlds_GetUniCondStr4Update(objDGRegionFldsEN);
    const bolIsExistCondition = await DGRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
    let objDGRegionFldsEN;
    try {
      objDGRegionFldsEN = await refDGRegionFlds_Edit.value.GetEditDataDGRegionFldsObj();
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
      DGRegionFlds_CheckPropertyNew(objDGRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objDGRegionFldsEN);
      if (bolIsExistCond == false) {
        return 0;
      }
      const responseKeyId = await DGRegionFlds_AddNewRecordWithReturnKeyAsync(objDGRegionFldsEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        objDGRegionFldsEN.mId = Number(returnKeyId);
        DGRegionFlds_ReFreshCache(RegionId_Static.value);
        const strInfo = `添加[DG区域字段(DGRegionFlds)]记录成功!`;
        //显示信息框
        if (this.isShowMsg == true) alert(strInfo);
      } else {
        const strInfo = `添加[DG区域字段(DGRegionFlds)]记录不成功!`;
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
      throw strMsg;
    }
    return 0; //一定要有一个返回值,否则会出错!
  }

  /** 函数功能:把以该关键字的记录内容显示在界面上,
   * 在这里是把值传到表控件中
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_ShowData)
   * @param lngmId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(lngmId: number) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objDGRegionFldsEN = new clsDGRegionFldsEN();
    try {
      const returnBool = await DGRegionFlds_IsExistAsync(lngmId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', lngmId);
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
      const objDGRegionFldsENConst = await DGRegionFlds_GetObjBymIdAsync(lngmId);
      if (objDGRegionFldsENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objDGRegionFldsEN = objDGRegionFldsENConst;
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
    refDGRegionFlds_Edit.value.ShowDataFromDGRegionFldsObj(objDGRegionFldsEN);
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngmId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = lngmId;
    try {
      const objDGRegionFldsEN = await DGRegionFlds_GetObjBymIdAsync(lngmId);
      if (objDGRegionFldsEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refDGRegionFlds_Edit.value.ShowDataFromDGRegionFldsObj(objDGRegionFldsEN);
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
    const objDGRegionFldsEN = await refDGRegionFlds_Edit.value.GetEditDataDGRegionFldsObj();
    objDGRegionFldsEN.SetmId(Number(this.keyId));
    objDGRegionFldsEN.sfUpdFldSetStr = objDGRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objDGRegionFldsEN.mId == 0 || objDGRegionFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      DGRegionFlds_CheckProperty4Update(objDGRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objDGRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await DGRegionFlds_UpdateRecordAsync(objDGRegionFldsEN);
      if (returnBool == true) {
        DGRegionFlds_ReFreshCache(RegionId_Static.value);
        DGRegionFlds_DeleteKeyIdCache(RegionId_Static.value, this.keyId);
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
    const objDGRegionFldsEN = await refDGRegionFlds_Edit.value.GetEditDataDGRegionFldsObj();
    objDGRegionFldsEN.SetmId(Number(this.keyId));
    objDGRegionFldsEN.sfUpdFldSetStr = objDGRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objDGRegionFldsEN.mId == 0 || objDGRegionFldsEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      DGRegionFlds_CheckProperty4Update(objDGRegionFldsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objDGRegionFldsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await DGRegionFlds_EditRecordExAsync(objDGRegionFldsEN);
      if (returnBool == true) {
        DGRegionFlds_ReFreshCache(RegionId_Static.value);
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
  public set btnCancelDGRegionFlds(value: string) {
    refDGRegionFlds_Edit.value.strCancelButtonText = value;
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitDGRegionFlds(): string {
    const strValue = refDGRegionFlds_Edit.value.strSubmitButtonText;
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitDGRegionFlds(value: string) {
    refDGRegionFlds_Edit.value.strSubmitButtonText = value;
  }
}
