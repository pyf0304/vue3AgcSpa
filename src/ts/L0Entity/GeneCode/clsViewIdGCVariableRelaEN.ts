/**
 * 类名:clsViewIdGCVariableRelaEN
 * 表名:ViewIdGCVariableRela(00050631)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/05/16 20:41:54
 * 生成者:pyf2
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 界面变量关系(ViewIdGCVariableRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewIdGCVariableRelaEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static _CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static readonly _CacheModeId: string = ''; //
  public static readonly _PrimaryTypeId: string = '07'; //复合主键
  public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static readonly _WhereFormat = ''; //条件格式串
  public static readonly _CurrTabName: string = 'ViewIdGCVariableRela'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName: string = 'VarId,ViewId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 12;
  public static readonly _AttributeName = [
    'varId',
    'viewId',
    'retrievalMethodId',
    'regionTypeNames',
    'initValue',
    'dsTabId',
    'errMsg',
    'isUseInRegion',
    'prjId',
    'updUser',
    'updDate',
    'memo',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrVarId = ''; //变量Id
  private mstrViewId = ''; //界面Id
  private mstrRetrievalMethodId = ''; //获取方式Id
  private mstrRegionTypeNames = ''; //区域类型名s
  private mstrInitValue = ''; //初始值
  private mstrDsTabId = ''; //数据源表ID
  private mstrErrMsg = ''; //错误信息
  private mbolIsUseInRegion = false; //是否在区域中使用
  private mstrPrjId = ''; //工程Id
  private mstrUpdUser = ''; //修改者
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明

  /**
   * 变量Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarId(value: string) {
    if (value != undefined) {
      this.varId = value;
      this.hmProperty['varId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewId(value: string) {
    if (value != undefined) {
      this.viewId = value;
      this.hmProperty['viewId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 获取方式Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRetrievalMethodId(value: string) {
    if (value != undefined) {
      this.retrievalMethodId = value;
      this.hmProperty['retrievalMethodId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域类型名s(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionTypeNames(value: string) {
    if (value != undefined) {
      this.regionTypeNames = value;
      this.hmProperty['regionTypeNames'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 初始值(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInitValue(value: string) {
    if (value != undefined) {
      this.initValue = value;
      this.hmProperty['initValue'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据源表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDsTabId(value: string) {
    if (value != undefined) {
      this.dsTabId = value;
      this.hmProperty['dsTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 错误信息(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrMsg(value: string) {
    if (value != undefined) {
      this.errMsg = value;
      this.hmProperty['errMsg'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否在区域中使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUseInRegion(value: boolean) {
    if (value != undefined) {
      this.isUseInRegion = value;
      this.hmProperty['isUseInRegion'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjId(value: string) {
    if (value != undefined) {
      this.prjId = value;
      this.hmProperty['prjId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsViewIdGCVariableRelaEN.con_VarId:
        return this.varId;
      case clsViewIdGCVariableRelaEN.con_ViewId:
        return this.viewId;
      case clsViewIdGCVariableRelaEN.con_RetrievalMethodId:
        return this.retrievalMethodId;
      case clsViewIdGCVariableRelaEN.con_RegionTypeNames:
        return this.regionTypeNames;
      case clsViewIdGCVariableRelaEN.con_InitValue:
        return this.initValue;
      case clsViewIdGCVariableRelaEN.con_DsTabId:
        return this.dsTabId;
      case clsViewIdGCVariableRelaEN.con_ErrMsg:
        return this.errMsg;
      case clsViewIdGCVariableRelaEN.con_IsUseInRegion:
        return this.isUseInRegion;
      case clsViewIdGCVariableRelaEN.con_PrjId:
        return this.prjId;
      case clsViewIdGCVariableRelaEN.con_UpdUser:
        return this.updUser;
      case clsViewIdGCVariableRelaEN.con_UpdDate:
        return this.updDate;
      case clsViewIdGCVariableRelaEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewIdGCVariableRela]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsViewIdGCVariableRelaEN.con_VarId:
        this.varId = strValue;
        this.hmProperty['varId'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_ViewId:
        this.viewId = strValue;
        this.hmProperty['viewId'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_RetrievalMethodId:
        this.retrievalMethodId = strValue;
        this.hmProperty['retrievalMethodId'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_RegionTypeNames:
        this.regionTypeNames = strValue;
        this.hmProperty['regionTypeNames'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_InitValue:
        this.initValue = strValue;
        this.hmProperty['initValue'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_DsTabId:
        this.dsTabId = strValue;
        this.hmProperty['dsTabId'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_IsUseInRegion:
        this.isUseInRegion = Boolean(strValue);
        this.hmProperty['isUseInRegion'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsViewIdGCVariableRelaEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewIdGCVariableRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public varId = ''; //变量Id
  public viewId = ''; //界面Id
  public retrievalMethodId = ''; //获取方式Id
  public regionTypeNames = ''; //区域类型名s
  public initValue = ''; //初始值
  public dsTabId = ''; //数据源表ID
  public errMsg = ''; //错误信息
  public isUseInRegion = false; //是否在区域中使用
  public prjId = ''; //工程Id
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明

  /**
   * 常量:"VarId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_VarId = 'varId'; //变量Id

  /**
   * 常量:"ViewId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ViewId = 'viewId'; //界面Id

  /**
   * 常量:"RetrievalMethodId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_RetrievalMethodId = 'retrievalMethodId'; //获取方式Id

  /**
   * 常量:"RegionTypeNames"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_RegionTypeNames = 'regionTypeNames'; //区域类型名s

  /**
   * 常量:"InitValue"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_InitValue = 'initValue'; //初始值

  /**
   * 常量:"DsTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_DsTabId = 'dsTabId'; //数据源表ID

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ErrMsg = 'errMsg'; //错误信息

  /**
   * 常量:"IsUseInRegion"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_IsUseInRegion = 'isUseInRegion'; //是否在区域中使用

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_PrjId = 'prjId'; //工程Id

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_UpdUser = 'updUser'; //修改者

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_UpdDate = 'updDate'; //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_Memo = 'memo'; //说明

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsViewIdGCVariableRelaEN();
    const instance = new clsViewIdGCVariableRelaEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
