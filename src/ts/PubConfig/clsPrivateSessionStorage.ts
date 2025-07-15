export class clsPrivateSessionStorage {
  public static get viewId_Main(): string {
    const strKey = 'viewId_Main';
    let strViewId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strViewId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.viewId为空！');
    }
    return strViewId;
  }

  //设置教学班Id
  public static set viewId_Main(strViewId: string) {
    try {
      //清空本类缓存
      const strKey = 'viewId_Main';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strViewId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  public static get tabId_Main(): string {
    const strKey = 'tabId_Main';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.tabId_Main为空！');
    }
    return strTabId;
  }

  //设置教学班Id
  public static set tabId_Main(strTabId: string) {
    try {
      //清空本类缓存
      const strKey = 'tabId_Main';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strTabId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get tabName(): string {
    const strKey = 'tabName';
    let strTabName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabName = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.tabId为空！');
    }
    return strTabName;
  }

  //设置教学班Id
  public static set tabName(strTabName: string) {
    try {
      //清空本类缓存
      const strKey = 'tabName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strTabName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get viewName(): string {
    const strKey = 'viewName';
    let strViewName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strViewName = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.viewName为空！');
    }
    return strViewName;
  }

  //设置教学班Id
  public static set viewName(strViewName: string) {
    try {
      //清空本类缓存
      const strKey = 'viewName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strViewName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 当前运行的CM工程Id
   */
  public static get cmPrjId(): string {
    const strKey = 'cmPrjId';
    let strCmPrjId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCmPrjId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存cmPrjId为空！');
    }
    return strCmPrjId;
  }

  /**
   * 当前运行的CM工程Id
   */
  public static set cmPrjId(strCmPrjId: string) {
    try {
      //清空本类缓存
      const strKey = 'cmPrjId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCmPrjId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 当前运行的CM工程Id
   */
  public static get cmPrjName(): string {
    const strKey = 'cmPrjName';
    let strCmPrjId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCmPrjId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存cmPrjName为空！');
    }
    return strCmPrjId;
  }

  /**
   * 当前运行的CM工程Id
   */
  public static set cmPrjName(strCmPrjName: string) {
    try {
      //清空本类缓存
      const strKey = 'cmPrjName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCmPrjName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  /**
   * 当前运行的工程Id
   */
  public static get currPrjId(): string {
    const strKey = 'currPrjId';
    let strCurrPrjId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCurrPrjId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存CurrPrjId为空！');
    }
    return strCurrPrjId;
  }

  /**
   * 当前运行的工程Id
   */
  public static set currPrjId(strCurrPrjId: string) {
    try {
      //清空本类缓存
      const strKey = 'currPrjId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCurrPrjId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get currSelPrjId(): string {
    const strKey = 'currSelPrjId';
    let strCurrSelPrjId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCurrSelPrjId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存currSelPrjId为空！');
    }
    return strCurrSelPrjId;
  }

  //设置教学班Id
  public static set currSelPrjId(strCurrSelPrjId: string) {
    try {
      //清空本类缓存
      const strKey = 'currSelPrjId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCurrSelPrjId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get currPrjDataBaseId(): string {
    const strKey = 'currPrjDataBaseId';
    let strCurrPrjDataBaseId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCurrPrjDataBaseId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存currPrjDataBaseId为空！');
    }
    return strCurrPrjDataBaseId;
  }

  //设置教学班Id
  public static set currPrjDataBaseId(strCurrPrjDataBaseId: string) {
    try {
      //清空本类缓存
      const strKey = 'currPrjDataBaseId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCurrPrjDataBaseId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get prjDataBaseName(): string {
    const strKey = 'prjDataBaseName';
    let strPrjDataBaseName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strPrjDataBaseName = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存prjDataBaseName为空！');
    }
    return strPrjDataBaseName;
  }

  //设置教学班Id
  public static set prjDataBaseName(strPrjDataBaseName: string) {
    try {
      //清空本类缓存
      const strKey = 'prjDataBaseName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strPrjDataBaseName);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get currSelPrjName(): string {
    const strKey = 'currSelPrjName';
    let strCurrSelPrjName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCurrSelPrjName = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存currSelPrjName为空！');
    }
    return strCurrSelPrjName;
  }

  //设置教学班Id
  public static set currSelPrjName(strCurrSelPrjName: string) {
    try {
      //清空本类缓存
      const strKey = 'currSelPrjName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCurrSelPrjName);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }
  //获取教学班Id

  public static get id_CurrEduClass(): string {
    const strKey = 'id_CurrEduClass';
    let strIdCurrEduClass = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strIdCurrEduClass = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存id_CurrEduClass为空！');
    }
    return strIdCurrEduClass;
  }

  //设置教学班Id
  public static set id_CurrEduClass(strIdCurrEduClass: string) {
    try {
      //清空本类缓存
      const strKey = 'id_CurrEduClass';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strIdCurrEduClass);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////用户Id/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get userId(): string {
    const strKey = 'userId';
    let strUserId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strUserId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存userId为空！');
    }
    return strUserId;
  }
  //设置用户Id
  public static set userId(strUserId: string) {
    try {
      //清空本类缓存
      const strKey = 'userId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strUserId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  //////////////////////////////////////////////////////////用户名称/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get userName(): string {
    const strKey = 'userName';
    let strUserName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strUserName = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存UserName为空！');
    }
    return strUserName;
  }

  //设置用户Id
  public static set userName(strUserName: string) {
    try {
      //清空本类缓存
      const strKey = 'userName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strUserName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  //////////////////////////////////////////////////////////角色Id/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get roleId(): string {
    const strKey = 'roleId';
    let strRoleId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strRoleId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存roleId为空！');
    }
    return strRoleId;
  }

  //设置用户Id
  public static set roleId(strRoleId: string) {
    try {
      //清空本类缓存
      const strKey = 'roleId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strRoleId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  //////////////////////////////////////////////////////////角色名称/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get roleName(): string {
    const strKey = 'roleName';
    let strRoleName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strRoleName = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存roleName为空！');
    }
    return strRoleName;
  }

  //设置用户Id
  public static set roleName(strRoleName: string) {
    try {
      //清空本类缓存
      const strKey = 'roleName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strRoleName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //专业ID
  public static get id_XzMajor(): string {
    const strKey = 'id_XzMajor';
    let strIdXzMajor = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strIdXzMajor = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存id_XzMajor为空！');
    }
    return strIdXzMajor;
  }

  //设置用户Id
  public static set id_XzMajor(strIdXzMajor: string) {
    try {
      //清空本类缓存
      const strKey = 'id_XzMajor';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strIdXzMajor);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //获取用户ID
  public static get MajorName(): string {
    const strKey = 'MajorName';
    let strMajorName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strMajorName = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存MajorName为空！');
    }
    return strMajorName;
  }

  //设置用户Id
  public static set MajorName(strMajorName: string) {
    try {
      //清空本类缓存
      const strKey = 'MajorName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strMajorName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  /**
   * 界面中的主表Id
   *
   * */
  public static get viewInfo_MainTabId(): string {
    const strKey = 'viewInfo_MainTabId';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = sessionStorage.getItem(strKey) as string;
    } else {
      // console.error('缓存clsPrivateSessionStorage.tabId为空！');
    }
    return strTabId;
  }

  //界面中的主表Id
  public static set viewInfo_MainTabId(strViewInfoMainTabId: string) {
    try {
      //清空本类缓存
      const strKey = 'viewInfo_MainTabId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strViewInfoMainTabId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 界面中的主表Id
   *
   * */
  public static get prjTab_TabName(): string {
    const strKey = 'prjTab_TabName';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.prjTab_TabName为空！');
    }
    return strTabId;
  }

  //界面中的主表Id
  public static set prjTab_TabName(strPrjTabTabName: string) {
    try {
      //清空本类缓存
      const strKey = 'prjTab_TabName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strPrjTabTabName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  /**
   * 界面中的主表Id
   *
   * */
  public static get prjTab_FuncModuleAgcId(): string {
    const strKey = 'prjTab_FuncModuleAgcId';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.prjTab_FuncModuleAgcId为空！');
    }
    return strTabId;
  }

  //界面中的主表Id
  public static set prjTab_FuncModuleAgcId(strPrjTabFuncModuleAgcId: string) {
    try {
      //清空本类缓存
      const strKey = 'prjTab_FuncModuleAgcId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strPrjTabFuncModuleAgcId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 界面中的主表Id
   *
   * */
  public static get css_FldDispUnitStyle_CtlTypeId(): string {
    const strKey = 'css_FldDispUnitStyle_CtlTypeId';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.prjTab_TabName为空！');
    }
    return strTabId;
  }

  //界面中的主表Id
  public static set css_FldDispUnitStyle_CtlTypeId(strCssFldDispUnitStyleCtlTypeId: string) {
    try {
      //清空本类缓存
      const strKey = 'css_FldDispUnitStyle_CtlTypeId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strCssFldDispUnitStyleCtlTypeId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 界面中的主表Id
   *
   * */
  public static get prjTab_IsShare(): boolean {
    const strKey = 'prjTab_IsShare';
    let bolIsShare = false;
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      const strValue = localStorage.getItem(strKey);
      bolIsShare = strValue == '0' ? false : true;
    } else {
      console.error('缓存clsPrivateSessionStorage.prjTab_IsShare为空！');
    }
    return bolIsShare;
  }

  //界面中的主表Id
  public static set prjTab_IsShare(bolIsShare: boolean) {
    try {
      //清空本类缓存
      const strKey = 'prjTab_IsShare';
      localStorage.removeItem(strKey);
      //把值存入session

      localStorage.setItem(strKey, bolIsShare ? '1' : '0');
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get applicationTypeId(): string {
    const strKey = 'applicationTypeId';
    let strApplicationTypeId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strApplicationTypeId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存applicationTypeId为空！');
    }
    return strApplicationTypeId;
  }

  //设置教学班Id
  public static set applicationTypeId(strApplicationTypeId: string) {
    try {
      //清空本类缓存
      const strKey = 'applicationTypeId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strApplicationTypeId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get applicationTypeName(): string {
    const strKey = 'applicationTypeName';
    let strApplicationTypeName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strApplicationTypeName = sessionStorage.getItem(strKey) as string;
    } else {
      console.log('缓存applicationTypeName为空！');
    }
    return strApplicationTypeName;
  }

  //设置教学班Id
  public static set applicationTypeName(strApplicationTypeName: string) {
    try {
      //清空本类缓存
      const strKey = 'applicationTypeName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strApplicationTypeName);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get funcModuleNameSim(): string {
    const strKey = 'funcModuleNameSim';
    let strFuncModuleNameSim = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strFuncModuleNameSim = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.funcModuleNameSim为空！');
    }
    return strFuncModuleNameSim;
  }

  //设置教学班Id
  public static set funcModuleNameSim(strFuncModuleNameSim: string) {
    try {
      //清空本类缓存
      const strKey = 'funcModuleNameSim';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strFuncModuleNameSim);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get funcModuleEnName(): string {
    const strKey = 'funcModuleEnName';
    let strFuncModuleENName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strFuncModuleENName = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.funcModuleENName为空！');
    }
    return strFuncModuleENName;
  }

  //设置教学班Id
  public static set funcModuleEnName(strFuncModuleENName: string) {
    try {
      //清空本类缓存
      const strKey = 'funcModuleEnName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strFuncModuleENName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get currDataBaseTypeId(): string {
    const strKey = 'currDataBaseTypeId';
    let strCurrDataBaseTypeId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strCurrDataBaseTypeId = sessionStorage.getItem(strKey) as string;
    } else {
      console.log('缓存currDataBaseTypeId为空！');
    }
    return strCurrDataBaseTypeId;
  }

  //设置教学班Id
  public static set currDataBaseTypeId(strCurrDataBaseTypeId: string) {
    try {
      //清空本类缓存
      const strKey = 'currDataBaseTypeId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strCurrDataBaseTypeId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get regionTypeIdLst(): Array<string> {
    const strKey = 'regionTypeIdLst';
    let arrRegionTypeIdLst = new Array<string>();
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      const strArr = sessionStorage.getItem(strKey);
      if (strArr == null) return arrRegionTypeIdLst;
      if (strArr.length == 0) return arrRegionTypeIdLst;
      arrRegionTypeIdLst = strArr.split('|') as Array<string>;
      return arrRegionTypeIdLst;
    } else {
      return arrRegionTypeIdLst;
      //      console.error('缓存clsPrivateSessionStorage.regionTypeIdLst为空！');
    }
  }

  //设置教学班Id
  public static set regionTypeIdLst(arrRegionTypeIdLst: Array<string>) {
    try {
      //清空本类缓存
      const strKey = 'regionTypeIdLst';
      sessionStorage.removeItem(strKey);
      //把值存入session
      const strArr = arrRegionTypeIdLst.join('|');
      sessionStorage.setItem(strKey, strArr);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //获取用户ID
  public static get activeTabIndex(): number {
    const strKey = 'activeTabIndex';
    let intActiveTab = 0;
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      intActiveTab = Number(sessionStorage.getItem(strKey));
    } else {
      console.error('缓存activeTabIndex为空！');
    }
    return intActiveTab;
  }
  //设置用户Id
  public static set activeTabIndex(intActiveTab: number) {
    try {
      //清空本类缓存
      const strKey = 'activeTabIndex';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, intActiveTab.toString());
    } catch (e: any) {
      const strMsg = `存入缓存:activeTabIndex出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  public static get activeViewIndex(): number {
    const strKey = 'activeViewIndex';
    let intActiveTab = 0;
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      intActiveTab = Number(sessionStorage.getItem(strKey));
    } else {
      console.error('缓存activeViewIndex为空！');
    }
    return intActiveTab;
  }
  //设置用户Id
  public static set activeViewIndex(intActiveTab: number) {
    try {
      //清空本类缓存
      const strKey = 'activeViewIndex';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, intActiveTab.toString());
    } catch (e: any) {
      const strMsg = `存入缓存:activeViewIndex出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
}
