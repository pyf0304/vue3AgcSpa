/**
 * 类名:clsDict4GCEN
 * 表名:Dict4GC(00050351)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:41
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 生成代码字典(Dict4GC)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDict4GCEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'Dict4GC'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DictId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'dictId',
    'dictValue',
    'dictTypeId',
    'dictKey1',
    'dictKey2',
    'updDate',
    'updUser',
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
  private mstrDictId = ''; //字典Id
  private mstrDictValue = ''; //字典值
  private mstrDictTypeId = ''; //字典类型Id
  private mstrDictKey1 = ''; //字典关键字1
  private mstrDictKey2 = ''; //字典关键字2
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 字典Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDictId(value: string) {
    if (value != undefined) {
      this.dictId = value;
      this.hmProperty['dictId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字典值(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDictValue(value: string) {
    if (value != undefined) {
      this.dictValue = value;
      this.hmProperty['dictValue'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字典类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDictTypeId(value: string) {
    if (value != undefined) {
      this.dictTypeId = value;
      this.hmProperty['dictTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字典关键字1(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDictKey1(value: string) {
    if (value != undefined) {
      this.dictKey1 = value;
      this.hmProperty['dictKey1'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字典关键字2(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDictKey2(value: string) {
    if (value != undefined) {
      this.dictKey2 = value;
      this.hmProperty['dictKey2'] = true;
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
      case clsDict4GCEN.con_DictId:
        return this.dictId;
      case clsDict4GCEN.con_DictValue:
        return this.dictValue;
      case clsDict4GCEN.con_DictTypeId:
        return this.dictTypeId;
      case clsDict4GCEN.con_DictKey1:
        return this.dictKey1;
      case clsDict4GCEN.con_DictKey2:
        return this.dictKey2;
      case clsDict4GCEN.con_UpdDate:
        return this.updDate;
      case clsDict4GCEN.con_UpdUser:
        return this.updUser;
      case clsDict4GCEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Dict4GC]中不存在!`;
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
      case clsDict4GCEN.con_DictId:
        this.dictId = strValue;
        this.hmProperty['dictId'] = true;
        break;
      case clsDict4GCEN.con_DictValue:
        this.dictValue = strValue;
        this.hmProperty['dictValue'] = true;
        break;
      case clsDict4GCEN.con_DictTypeId:
        this.dictTypeId = strValue;
        this.hmProperty['dictTypeId'] = true;
        break;
      case clsDict4GCEN.con_DictKey1:
        this.dictKey1 = strValue;
        this.hmProperty['dictKey1'] = true;
        break;
      case clsDict4GCEN.con_DictKey2:
        this.dictKey2 = strValue;
        this.hmProperty['dictKey2'] = true;
        break;
      case clsDict4GCEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsDict4GCEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsDict4GCEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[Dict4GC]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dictId = ''; //字典Id
  public dictValue = ''; //字典值
  public dictTypeId = ''; //字典类型Id
  public dictKey1 = ''; //字典关键字1
  public dictKey2 = ''; //字典关键字2
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"DictId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DictId(): string {
    return 'dictId';
  } //字典Id

  /**
   * 常量:"DictValue"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DictValue(): string {
    return 'dictValue';
  } //字典值

  /**
   * 常量:"DictTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DictTypeId(): string {
    return 'dictTypeId';
  } //字典类型Id

  /**
   * 常量:"DictKey1"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DictKey1(): string {
    return 'dictKey1';
  } //字典关键字1

  /**
   * 常量:"DictKey2"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DictKey2(): string {
    return 'dictKey2';
  } //字典关键字2

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

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
}
/**
 * 根据表字段内容设置enum列表-字段名：[DictKey1]
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList4Field)
 **/
export class enumDict4GC_DictKey1 {
  /**
   * GetRecordJSONObjByKey
   **/
  static readonly conGetRecordJSONObjByKey = 'GetRecordJSONObjByKey';
  /**
   * GetRecordJSONObjLst
   **/
  static readonly conGetRecordJSONObjLst = 'GetRecordJSONObjLst';
  /**
   * GetTopRecordJSONObjLst
   **/
  static readonly conGetTopRecordJSONObjLst = 'GetTopRecordJSONObjLst';
  /**
   * AddNewRecordByJSON
   **/
  static readonly conAddNewRecordByJSON = 'AddNewRecordByJSON';
  /**
   * UpdateRecordByJSON
   **/
  static readonly conUpdateRecordByJSON = 'UpdateRecordByJSON';
  /**
   * DelRecord
   **/
  static readonly conDelRecord = 'DelRecord';
  /**
   * GetFirstJSONObj
   **/
  static readonly conGetFirstJSONObj = 'GetFirstJSONObj';
  /**
   * IsExistRecord
   **/
  static readonly conIsExistRecord = 'IsExistRecord';
  /**
   * GetMaxStrId
   **/
  static readonly conGetMaxStrId = 'GetMaxStrId';
  /**
   * GetMaxStrIdByPrefix
   **/
  static readonly conGetMaxStrIdByPrefix = 'GetMaxStrIdByPrefix';
  /**
   * SelfDefFunc
   **/
  static readonly conSelfDefFunc = 'SelfDefFunc';
  /**
   * GetRecordJSONObjLstByPager
   **/
  static readonly conGetRecordJSONObjLstByPager = 'GetRecordJSONObjLstByPager';
  /**
   * GetRecCountByCond
   **/
  static readonly conGetRecCountByCond = 'GetRecCountByCond';
  /**
   * DelRecordsByJSON
   **/
  static readonly conDelRecordsByJSON = 'DelRecordsByJSON';
  /**
   * GetRecordJSONObjLstByRange
   **/
  static readonly conGetRecordJSONObjLstByRange = 'GetRecordJSONObjLstByRange';
  /**
   * GetObjByKey
   **/
  static readonly conGetObjByKey = 'GetObjByKey';
  /**
   * AddNewRecord
   **/
  static readonly conAddNewRecord = 'AddNewRecord';
  /**
   * GetFirstObj
   **/
  static readonly conGetFirstObj = 'GetFirstObj';
  /**
   * GetObjLstByPager
   **/
  static readonly conGetObjLstByPager = 'GetObjLstByPager';
  /**
   * GetObjLstByRange
   **/
  static readonly conGetObjLstByRange = 'GetObjLstByRange';
  /**
   * GetObjLst
   **/
  static readonly conGetObjLst = 'GetObjLst';
  /**
   * GetTopObjLst
   **/
  static readonly conGetTopObjLst = 'GetTopObjLst';
  /**
   * UpdateRecord
   **/
  static readonly conUpdateRecord = 'UpdateRecord';
}
/**
 * 根据表字段内容设置enum列表-字段名：[DictKey2]
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList4Field)
 **/
export class enumDict4GC_DictKey2 {
  /**
   * Finished
   **/
  static readonly conFinished = 'Finished';
  /**
   * CorrectFinished
   **/
  static readonly conCorrectFinished = 'CorrectFinished';
}
