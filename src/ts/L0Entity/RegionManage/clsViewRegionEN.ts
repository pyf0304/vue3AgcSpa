/**
 * 类名:clsViewRegionEN
 * 表名:ViewRegion(00050099)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 00:41:26
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 界面区域(ViewRegion)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewRegionEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ViewRegion'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'RegionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 18;
  public static AttributeName = [
    'regionId',
    'regionName',
    'regionTypeId',
    'fileName',
    'height',
    'width',
    'colNum',
    'containerTypeId',
    'pageDispModeId',
    'inOutTypeId',
    'tabId',
    'keyId4Test',
    'errMsg',
    'prjId',
    'updUser',
    'updDate',
    'memo',
    'clsName',
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
  private mstrRegionId = ''; //区域Id
  private mstrRegionName = ''; //区域名称
  private mstrRegionTypeId = ''; //区域类型Id
  private mstrFileName = ''; //文件名
  private mintHeight = 0; //高度
  private mintWidth = 0; //宽
  private mintColNum = 0; //列数
  private mstrContainerTypeId = ''; //容器类型Id
  private mstrPageDispModeId = ''; //页面显示模式Id
  private mstrInOutTypeId = ''; //INOUT类型ID
  private mstrTabId = ''; //表ID
  private mstrKeyId4Test = ''; //测试关键字Id
  private mstrErrMsg = ''; //错误信息
  private mstrPrjId = ''; //工程Id
  private mstrUpdUser = ''; //修改者
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明
  private mstrClsName = ''; //类名

  /**
   * 区域Id(说明:;字段类型:char;字段长度:10;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionId(value: string) {
    if (value != undefined) {
      this.regionId = value;
      this.hmProperty['regionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionName(value: string) {
    if (value != undefined) {
      this.regionName = value;
      this.hmProperty['regionName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionTypeId(value: string) {
    if (value != undefined) {
      this.regionTypeId = value;
      this.hmProperty['regionTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件名(说明:;字段类型:varchar;字段长度:150;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFileName(value: string) {
    if (value != undefined) {
      this.fileName = value;
      this.hmProperty['fileName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 高度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetHeight(value: number) {
    if (value != undefined) {
      this.height = value;
      this.hmProperty['height'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 宽(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWidth(value: number) {
    if (value != undefined) {
      this.width = value;
      this.hmProperty['width'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 列数(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetColNum(value: number) {
    if (value != undefined) {
      this.colNum = value;
      this.hmProperty['colNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 容器类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetContainerTypeId(value: string) {
    if (value != undefined) {
      this.containerTypeId = value;
      this.hmProperty['containerTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 页面显示模式Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPageDispModeId(value: string) {
    if (value != undefined) {
      this.pageDispModeId = value;
      this.hmProperty['pageDispModeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * INOUT类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInOutTypeId(value: string) {
    if (value != undefined) {
      this.inOutTypeId = value;
      this.hmProperty['inOutTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabId(value: string) {
    if (value != undefined) {
      this.tabId = value;
      this.hmProperty['tabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 测试关键字Id(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyId4Test(value: string) {
    if (value != undefined) {
      this.keyId4Test = value;
      this.hmProperty['keyId4Test'] = true;
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
   * 类名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClsName(value: string) {
    if (value != undefined) {
      this.clsName = value;
      this.hmProperty['clsName'] = true;
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
      case clsViewRegionEN.con_RegionId:
        return this.regionId;
      case clsViewRegionEN.con_RegionName:
        return this.regionName;
      case clsViewRegionEN.con_RegionTypeId:
        return this.regionTypeId;
      case clsViewRegionEN.con_FileName:
        return this.fileName;
      case clsViewRegionEN.con_Height:
        return this.height;
      case clsViewRegionEN.con_Width:
        return this.width;
      case clsViewRegionEN.con_ColNum:
        return this.colNum;
      case clsViewRegionEN.con_ContainerTypeId:
        return this.containerTypeId;
      case clsViewRegionEN.con_PageDispModeId:
        return this.pageDispModeId;
      case clsViewRegionEN.con_InOutTypeId:
        return this.inOutTypeId;
      case clsViewRegionEN.con_TabId:
        return this.tabId;
      case clsViewRegionEN.con_KeyId4Test:
        return this.keyId4Test;
      case clsViewRegionEN.con_ErrMsg:
        return this.errMsg;
      case clsViewRegionEN.con_PrjId:
        return this.prjId;
      case clsViewRegionEN.con_UpdUser:
        return this.updUser;
      case clsViewRegionEN.con_UpdDate:
        return this.updDate;
      case clsViewRegionEN.con_Memo:
        return this.memo;
      case clsViewRegionEN.con_ClsName:
        return this.clsName;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewRegion]中不存在!`;
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
      case clsViewRegionEN.con_RegionId:
        this.regionId = strValue;
        this.hmProperty['regionId'] = true;
        break;
      case clsViewRegionEN.con_RegionName:
        this.regionName = strValue;
        this.hmProperty['regionName'] = true;
        break;
      case clsViewRegionEN.con_RegionTypeId:
        this.regionTypeId = strValue;
        this.hmProperty['regionTypeId'] = true;
        break;
      case clsViewRegionEN.con_FileName:
        this.fileName = strValue;
        this.hmProperty['fileName'] = true;
        break;
      case clsViewRegionEN.con_Height:
        this.height = Number(strValue);
        this.hmProperty['height'] = true;
        break;
      case clsViewRegionEN.con_Width:
        this.width = Number(strValue);
        this.hmProperty['width'] = true;
        break;
      case clsViewRegionEN.con_ColNum:
        this.colNum = Number(strValue);
        this.hmProperty['colNum'] = true;
        break;
      case clsViewRegionEN.con_ContainerTypeId:
        this.containerTypeId = strValue;
        this.hmProperty['containerTypeId'] = true;
        break;
      case clsViewRegionEN.con_PageDispModeId:
        this.pageDispModeId = strValue;
        this.hmProperty['pageDispModeId'] = true;
        break;
      case clsViewRegionEN.con_InOutTypeId:
        this.inOutTypeId = strValue;
        this.hmProperty['inOutTypeId'] = true;
        break;
      case clsViewRegionEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsViewRegionEN.con_KeyId4Test:
        this.keyId4Test = strValue;
        this.hmProperty['keyId4Test'] = true;
        break;
      case clsViewRegionEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsViewRegionEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsViewRegionEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsViewRegionEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsViewRegionEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsViewRegionEN.con_ClsName:
        this.clsName = strValue;
        this.hmProperty['clsName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewRegion]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public regionId = ''; //区域Id
  public regionName = ''; //区域名称
  public regionTypeId = ''; //区域类型Id
  public fileName = ''; //文件名
  public height = 0; //高度
  public width = 0; //宽
  public colNum = 0; //列数
  public containerTypeId = ''; //容器类型Id
  public pageDispModeId = ''; //页面显示模式Id
  public inOutTypeId = ''; //INOUT类型ID
  public tabId = ''; //表ID
  public keyId4Test = ''; //测试关键字Id
  public errMsg = ''; //错误信息
  public prjId = ''; //工程Id
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明
  public clsName = ''; //类名

  /**
   * 常量:"RegionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionId(): string {
    return 'regionId';
  } //区域Id

  /**
   * 常量:"RegionName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionName(): string {
    return 'regionName';
  } //区域名称

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"FileName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FileName(): string {
    return 'fileName';
  } //文件名

  /**
   * 常量:"Height"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Height(): string {
    return 'height';
  } //高度

  /**
   * 常量:"Width"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Width(): string {
    return 'width';
  } //宽

  /**
   * 常量:"ColNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ColNum(): string {
    return 'colNum';
  } //列数

  /**
   * 常量:"ContainerTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ContainerTypeId(): string {
    return 'containerTypeId';
  } //容器类型Id

  /**
   * 常量:"PageDispModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PageDispModeId(): string {
    return 'pageDispModeId';
  } //页面显示模式Id

  /**
   * 常量:"InOutTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InOutTypeId(): string {
    return 'inOutTypeId';
  } //INOUT类型ID

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"KeyId4Test"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyId4Test(): string {
    return 'keyId4Test';
  } //测试关键字Id

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"ClsName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClsName(): string {
    return 'clsName';
  } //类名

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
    //return propName in new clsViewRegionEN();
    const instance = new clsViewRegionEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
