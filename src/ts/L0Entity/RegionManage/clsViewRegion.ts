/**
 * 类名:clsViewRegion
 * 表名:ViewRegion(00050099)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/03 16:44:31
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:区域管理(RegionManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 界面区域(ViewRegion)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsViewRegion {
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
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
  public prjId = ''; //工程ID
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明
  public clsName = ''; //类名

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsViewRegion.con_RegionId:
        return this.regionId;
      case clsViewRegion.con_RegionName:
        return this.regionName;
      case clsViewRegion.con_RegionTypeId:
        return this.regionTypeId;
      case clsViewRegion.con_FileName:
        return this.fileName;
      case clsViewRegion.con_Height:
        return this.height;
      case clsViewRegion.con_Width:
        return this.width;
      case clsViewRegion.con_ColNum:
        return this.colNum;
      case clsViewRegion.con_ContainerTypeId:
        return this.containerTypeId;
      case clsViewRegion.con_PageDispModeId:
        return this.pageDispModeId;
      case clsViewRegion.con_InOutTypeId:
        return this.inOutTypeId;
      case clsViewRegion.con_TabId:
        return this.tabId;
      case clsViewRegion.con_KeyId4Test:
        return this.keyId4Test;
      case clsViewRegion.con_ErrMsg:
        return this.errMsg;
      case clsViewRegion.con_PrjId:
        return this.prjId;
      case clsViewRegion.con_UpdUser:
        return this.updUser;
      case clsViewRegion.con_UpdDate:
        return this.updDate;
      case clsViewRegion.con_Memo:
        return this.memo;
      case clsViewRegion.con_ClsName:
        return this.clsName;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewRegion]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"RegionId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_RegionId(): string {
    return 'regionId';
  } //区域Id

  /**
   * 常量:"RegionName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_RegionName(): string {
    return 'regionName';
  } //区域名称

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"FileName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FileName(): string {
    return 'fileName';
  } //文件名

  /**
   * 常量:"Height"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Height(): string {
    return 'height';
  } //高度

  /**
   * 常量:"Width"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Width(): string {
    return 'width';
  } //宽

  /**
   * 常量:"ColNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ColNum(): string {
    return 'colNum';
  } //列数

  /**
   * 常量:"ContainerTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ContainerTypeId(): string {
    return 'containerTypeId';
  } //容器类型Id

  /**
   * 常量:"PageDispModeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PageDispModeId(): string {
    return 'pageDispModeId';
  } //页面显示模式Id

  /**
   * 常量:"InOutTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_InOutTypeId(): string {
    return 'inOutTypeId';
  } //INOUT类型ID

  /**
   * 常量:"TabId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"KeyId4Test"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_KeyId4Test(): string {
    return 'keyId4Test';
  } //测试关键字Id

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"PrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"ClsName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ClsName(): string {
    return 'clsName';
  } //类名
}
