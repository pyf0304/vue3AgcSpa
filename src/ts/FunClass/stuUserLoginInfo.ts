import { Dictionary } from '@/ts/PubFun/tzDictionary';

export class stuUserLoginInfo {
  /// <summary>
  /// 角色Id
  /// </summary>
  public currSelPrjId = '';
  /// <summary>
  /// 角色
  /// </summary>
  public currSelPrjName = '';

  /// <summary>
  /// 角色Id
  /// </summary>
  public roleId = '';
  /// <summary>
  /// 角色
  /// </summary>
  public roleName = '';
  /// <summary>
  /// 用户Id
  /// </summary>
  public userId = '';
  /// <summary>
  /// 用户名
  /// </summary>
  public userName = '';

  /// <summary>
  /// 数据库Id
  /// </summary>
  public currPrjDataBaseId = '';

  /// <summary>
  /// 数据库名
  /// </summary>
  public prjDataBaseName = '';

  /// <summary>
  /// 当前数据库类型Id
  /// </summary>
  public currDataBaseTypeId = '';
  /// <summary>
  /// 应用类型Id
  /// </summary>
  public applicationTypeId = 0;

  ///// <summary>
  ///// 排除的检查字符串列表
  ///// </summary>
  //public currSelPrjId: Array<string> = new Array<string>();

  ///// <summary>
  ///// 是否检查SQL攻击
  ///// </summary>
  //public IsCheckSQLAttack: boolean = false;

  public static GetMapParam(objUserLoginInfo: stuUserLoginInfo): Dictionary {
    //Array < string > arrLst = new Array<string>(objUserLoginInfo.currSelPrjId);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('userId', objUserLoginInfo.userId);
    mapParam.add('userName', objUserLoginInfo.userName);
    mapParam.add('roleId', objUserLoginInfo.roleId);
    mapParam.add('roleName', objUserLoginInfo.roleName);
    mapParam.add('currSelPrjId', objUserLoginInfo.currSelPrjId);
    mapParam.add('currSelPrjName', objUserLoginInfo.currSelPrjName);
    //mapParam.add("cmPrjId", objUserLoginInfo.cmPrjId);

    mapParam.add('currPrjDataBaseId', objUserLoginInfo.currPrjDataBaseId);
    mapParam.add('prjDataBaseName', objUserLoginInfo.prjDataBaseName);
    mapParam.add('currDataBaseTypeId', objUserLoginInfo.currDataBaseTypeId);
    mapParam.add('applicationTypeId', objUserLoginInfo.applicationTypeId);

    return mapParam;
  }
  /**
   *把Html string 转换成对象。先转换成JSON string , 然后再转换成对象
   */
  //public static GetObjByHtmlStringBak(strUserLoginInfo: string): stuUserLoginInfo {
  //    const strUserLoginInfo2 = $.parseHTML(strUserLoginInfo);
  //    const objUserLoginInfo: stuUserLoginInfo = JSON.parse(strUserLoginInfo2[0].wholeText);
  //    return objUserLoginInfo;
  //}
}
