/**
 * 类名:pubComboEN
 * 表名:QryRegionFlds(00050115)
 * 版本:2024.09.16.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/26 01:51:39
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 查询区域字段(QryRegionFlds)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/

export class pubComboEN {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QryRegionFlds'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 29;
  public static AttributeName = [
    'mId',
    'regionId',
    'fldId',
    'outFldId',
    'labelCaption',
    'ctlTypeId',
    'varId',
    'dsTabId',
    'tabFeatureId4Ddl',
    'fldIdCond1',
    'varIdCond1',
    'fldIdCond2',
    'varIdCond2',
    'queryOptionId',
    'ddlItemsOptionId',
    'dsSqlStr',
    'itemsString',
    'dsCondStr',
    'colSpan',
    'width',
    'seqNum',
    'changeEvent',
    'clickEvent',
    'inUse',
    'errMsg',
    'prjId',
    'updUser',
    'updDate',
    'memo',
  ];
  //以下是属性变量

  private mstrCtlTypeId = ''; //控件类型号
  private mstrVarId = ''; //变量Id
  private mstrDsTabId = ''; //数据源表ID
  private mstrTabFeatureId4Ddl = ''; //下拉框表功能Id
  private mstrFldIdCond1 = ''; //字段Id_条件1
  private mstrVarIdCond1 = ''; //变量Id_条件1
  private mstrFldIdCond2 = ''; //字段Id_条件2
  private mstrVarIdCond2 = ''; //数据源字段_条件1
  private mstrQueryOptionId = ''; //查询方式Id
  private mstrDdlItemsOptionId = ''; //下拉框列表选项ID
  private mstrDsSqlStr = ''; //数据源SQL串
  private mstrItemsString = ''; //列表项串
  private mstrDsCondStr = ''; //数据源条件串

  /**
   * 控件类型号(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtlTypeId(value: string) {
    if (value != undefined) {
      this.ctlTypeId = value;
    }
  }

  /**
   * 数据源表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDsTabId(value: string) {
    if (value != undefined) {
      this.dsTabId = value;
    }
  }

  /**
   * 下拉框表功能Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabFeatureId4Ddl(value: string) {
    if (value != undefined) {
      this.tabFeatureId4Ddl = value;
    }
  }

  /**
   * 字段Id_条件1(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldIdCond1(value: string) {
    if (value != undefined) {
      this.fldIdCond1 = value;
    }
  }

  /**
   * 变量Id_条件1(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarIdCond1(value: string) {
    if (value != undefined) {
      this.varIdCond1 = value;
    }
  }

  /**
   * 字段Id_条件2(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldIdCond2(value: string) {
    if (value != undefined) {
      this.fldIdCond2 = value;
    }
  }

  /**
   * 数据源字段_条件1(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarIdCond2(value: string) {
    if (value != undefined) {
      this.varIdCond2 = value;
    }
  }

  /**
   * 查询方式Id(说明:;字段类型:varchar;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQueryOptionId(value: string) {
    if (value != undefined) {
      this.queryOptionId = value;
    }
  }

  /**
   * 下拉框列表选项ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDdlItemsOptionId(value: string) {
    if (value != undefined) {
      this.ddlItemsOptionId = value;
    }
  }

  /**
   * 数据源SQL串(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDsSqlStr(value: string) {
    if (value != undefined) {
      this.dsSqlStr = value;
    }
  }

  /**
   * 列表项串(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetItemsString(value: string) {
    if (value != undefined) {
      this.itemsString = value;
    }
  }

  /**
   * 数据源条件串(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDsCondStr(value: string) {
    if (value != undefined) {
      this.dsCondStr = value;
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
      case pubComboEN.con_CtlTypeId:
        return this.ctlTypeId;

      case pubComboEN.con_DsTabId:
        return this.dsTabId;
      case pubComboEN.con_TabFeatureId4Ddl:
        return this.tabFeatureId4Ddl;
      case pubComboEN.con_FldIdCond1:
        return this.fldIdCond1;
      case pubComboEN.con_VarIdCond1:
        return this.varIdCond1;
      case pubComboEN.con_FldIdCond2:
        return this.fldIdCond2;
      case pubComboEN.con_VarIdCond2:
        return this.varIdCond2;
      case pubComboEN.con_QueryOptionId:
        return this.queryOptionId;
      case pubComboEN.con_DdlItemsOptionId:
        return this.ddlItemsOptionId;
      case pubComboEN.con_DsSqlStr:
        return this.dsSqlStr;
      case pubComboEN.con_ItemsString:
        return this.itemsString;
      case pubComboEN.con_DsCondStr:
        return this.dsCondStr;

      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QryRegionFlds]中不存在!`;
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
      case pubComboEN.con_CtlTypeId:
        this.ctlTypeId = strValue;

        break;

      case pubComboEN.con_DsTabId:
        this.dsTabId = strValue;

        break;
      case pubComboEN.con_TabFeatureId4Ddl:
        this.tabFeatureId4Ddl = strValue;

        break;
      case pubComboEN.con_FldIdCond1:
        this.fldIdCond1 = strValue;

        break;
      case pubComboEN.con_VarIdCond1:
        this.varIdCond1 = strValue;

        break;
      case pubComboEN.con_FldIdCond2:
        this.fldIdCond2 = strValue;

        break;
      case pubComboEN.con_VarIdCond2:
        this.varIdCond2 = strValue;

        break;
      case pubComboEN.con_QueryOptionId:
        this.queryOptionId = strValue;

        break;
      case pubComboEN.con_DdlItemsOptionId:
        this.ddlItemsOptionId = strValue;

        break;
      case pubComboEN.con_DsSqlStr:
        this.dsSqlStr = strValue;

        break;
      case pubComboEN.con_ItemsString:
        this.itemsString = strValue;

        break;
      case pubComboEN.con_DsCondStr:
        this.dsCondStr = strValue;

        break;

      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QryRegionFlds]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public ctlTypeId = ''; //控件类型号
  // public varId = ''; //变量Id
  public dsTabId = ''; //数据源表ID
  public tabFeatureId4Ddl = ''; //下拉框表功能Id
  public fldIdCond1 = ''; //字段Id_条件1
  public varIdCond1 = ''; //变量Id_条件1
  public fldIdCond2 = ''; //字段Id_条件2
  public varIdCond2 = ''; //数据源字段_条件1
  public queryOptionId = ''; //查询方式Id
  public ddlItemsOptionId = ''; //下拉框列表选项ID
  public dsSqlStr = ''; //数据源SQL串
  public itemsString = ''; //列表项串
  public dsCondStr = ''; //数据源条件串

  /**
   * 常量:"CtlTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

  /**
   * 常量:"VarId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarId(): string {
    return 'varId';
  } //变量Id

  /**
   * 常量:"DsTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DsTabId(): string {
    return 'dsTabId';
  } //数据源表ID

  /**
   * 常量:"TabFeatureId4Ddl"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabFeatureId4Ddl(): string {
    return 'tabFeatureId4Ddl';
  } //下拉框表功能Id

  /**
   * 常量:"FldIdCond1"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldIdCond1(): string {
    return 'fldIdCond1';
  } //字段Id_条件1

  /**
   * 常量:"VarIdCond1"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarIdCond1(): string {
    return 'varIdCond1';
  } //变量Id_条件1

  /**
   * 常量:"FldIdCond2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldIdCond2(): string {
    return 'fldIdCond2';
  } //字段Id_条件2

  /**
   * 常量:"VarIdCond2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarIdCond2(): string {
    return 'varIdCond2';
  } //数据源字段_条件1

  /**
   * 常量:"QueryOptionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QueryOptionId(): string {
    return 'queryOptionId';
  } //查询方式Id

  /**
   * 常量:"DdlItemsOptionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DdlItemsOptionId(): string {
    return 'ddlItemsOptionId';
  } //下拉框列表选项ID

  /**
   * 常量:"DsSqlStr"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DsSqlStr(): string {
    return 'dsSqlStr';
  } //数据源SQL串

  /**
   * 常量:"ItemsString"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ItemsString(): string {
    return 'itemsString';
  } //列表项串

  /**
   * 常量:"DsCondStr"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DsCondStr(): string {
    return 'dsCondStr';
  } //数据源条件串
}
