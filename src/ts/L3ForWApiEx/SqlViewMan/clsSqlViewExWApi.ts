/**
 * Sql视图(SqlView)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年01月12日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
// import $ from 'jquery';
import { clsSqlViewEN } from '@/ts/L0Entity/SqlViewMan/clsSqlViewEN';
import { clsSqlViewENEx } from '@/ts/L0Entity/SqlViewMan/clsSqlViewENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { SqlView_GetObjLstCache } from '@/ts/L3ForWApi/SqlViewMan/clsSqlViewWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';

export const sqlViewEx_Controller = 'SqlViewExApi';
export const sqlViewEx_ConstructorName = 'sqlViewEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objSqlViewENS:源对象
 * @returns 目标对象=>clsSqlViewEN:objSqlViewENT
 **/
export function SqlViewEx_CopyToEx(objSqlViewENS: clsSqlViewEN): clsSqlViewENEx {
  const strThisFuncName = SqlViewEx_CopyToEx.name;
  const objSqlViewENT = new clsSqlViewENEx();
  try {
    ObjectAssign(objSqlViewENT, objSqlViewENS);
    return objSqlViewENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      sqlViewEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objSqlViewENT;
  }
}

/**
 * 从Sql服务器中导入Sql视图
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strSqlViewId: Sql视图Id
 * @param strPrjId: 工程Id
 * @param strUserId: 用户Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @param bolIsTry: 是否尝试
 * @returns 获取的相应对象列表
 */
export async function SqlViewEx_CreateView4Sql(
  strSqlViewId: string,
  strPrjId: string,
  strUserId: string,
  strPrjDataBaseId: string,
  bolIsTry: boolean,
): Promise<boolean> {
  const strThisFuncName = SqlViewEx_CreateView4Sql.name;
  const strAction = 'CreateView4Sql';
  const strUrl = GetWebApiUrl(sqlViewEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strSqlViewId', strSqlViewId);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strUserId', strUserId);
  // mapParam.add('strPrjDataBaseId', strPrjDataBaseId);
  // mapParam.add('bolIsTry', bolIsTry);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSqlViewId,
      strPrjId,
      strUserId,
      strPrjDataBaseId,
      bolIsTry,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据相关表Id获取Sql视图对象, 从缓存中获取.
 * @param strRelaTabId:相关表Id
 * @param strPrjId:工程Id
 * @returns 对象
 */
export async function SqlViewEx_GetObjByRelaTabIdCache(
  strRelaTabId: string,
  strPrjId: string,
): Promise<clsSqlViewEN | null> {
  const strThisFuncName = 'GetObjBySqlViewIdCache';
  if (IsNullOrEmpty(strRelaTabId) == true) {
    const strMsg = Format(
      '关键字不能为空！从本地缓存中获取对象出错. (in {0}.{1})',
      sqlViewEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSqlViewObjLstCache: Array<clsSqlViewEN> = await SqlView_GetObjLstCache(strPrjId);
  try {
    const arrSqlView_Sel: Array<clsSqlViewEN> = arrSqlViewObjLstCache.filter(
      (x) => x.relaTabId == strRelaTabId,
    );
    let objSqlView: clsSqlViewEN;
    if (arrSqlView_Sel.length > 0) {
      objSqlView = arrSqlView_Sel[0];
      return objSqlView;
    } else {
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据相关表Id:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRelaTabId,
      sqlViewEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return null;
}

/**
 * 根据相关表Id获取Sql视图Id, 从缓存中获取.
 * @param strSqlViewId:相关表Id
 * @returns 对象
 */
export async function SqlViewEx_GetSqlViewIdByTabIdCache(
  strRelaTabId: string,
  strPrjId: string,
): Promise<string> {
  const strThisFuncName = 'GetSqlViewIdByTabIdCache';
  if (IsNullOrEmpty(strRelaTabId) == true) {
    const strMsg = Format(
      '关键字不能为空！从本地缓存中获取对象出错. (in {0}.{1})',
      sqlViewEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSqlViewObjLstCache: Array<clsSqlViewEN> = await SqlView_GetObjLstCache(strPrjId);
  try {
    const arrSqlView_Sel: Array<clsSqlViewEN> = arrSqlViewObjLstCache.filter(
      (x) => x.relaTabId == strRelaTabId,
    );
    let objSqlView: clsSqlViewEN;
    if (arrSqlView_Sel.length > 0) {
      objSqlView = arrSqlView_Sel[0];
      return objSqlView.sqlViewId;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据相关表Id:[{1}]获取关键字Id(sqlViewId)不成功!(in {2}.{3})',
      e,
      strRelaTabId,
      sqlViewEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 根据关键字获取相关表Id（relaTabId）, 从缓存的对象列表中获取.
 * @param strPrjId:工程Id
 * @param strSqlViewId:相关表Id
 * @returns relaTabId 相关表Id
 */
export async function SqlViewEx_GetRelaTabIdBySqlViewIdCache(
  strPrjId: string,
  strSqlViewId: string,
): Promise<string> {
  const strThisFuncName = 'GetRelaTabIdBySqlViewIdCache';
  if (IsNullOrEmpty(strSqlViewId) == true) {
    const strMsg = Format(
      '关键字不能为空！从本地缓存中获取对象出错. (in {0}.{1})',
      sqlViewEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSqlViewObjLstCache: Array<clsSqlViewEN> = await SqlView_GetObjLstCache(strPrjId);
  try {
    const arrSqlView_Sel: Array<clsSqlViewEN> = arrSqlViewObjLstCache.filter(
      (x) => x.sqlViewId == strSqlViewId,
    );
    let objSqlView: clsSqlViewEN;
    if (arrSqlView_Sel.length > 0) {
      objSqlView = arrSqlView_Sel[0];
      return objSqlView.relaTabId;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相关表Id不成功!(in {2}.{3})',
      e,
      strSqlViewId,
      sqlViewEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 导入Sql视图,从本系统(代码生成系统)中。
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @param strSqlViewName: Sql视图名
 * @param strUserId: 用户Id
 * @returns 获取的相应对象列表
 */
export async function SqlViewEx_ImportSqlViewBySqlViewName(
  strPrjId: string,
  strSqlViewName: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = SqlViewEx_ImportSqlViewBySqlViewName.name;
  const strAction = 'ImportSqlViewBySqlViewName';
  const strUrl = GetWebApiUrl(sqlViewEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strSqlViewName', strSqlViewName);
  // mapParam.add('strUserId', strUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strSqlViewName,
      strUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 从Sql服务器中导入Sql视图
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @param strSqlViewId: Sql视图Id
 * @param strUserId: 用户Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @returns 获取的相应对象列表
 */
export async function SqlViewEx_ImportSqlViewFromSqlServer(
  strPrjId: string,
  strSqlViewId: string,
  strUserId: string,
  strPrjDataBaseId: string,
): Promise<boolean> {
  const strThisFuncName = SqlViewEx_ImportSqlViewFromSqlServer.name;
  const strAction = 'ImportSqlViewFromSqlServer';
  const strUrl = GetWebApiUrl(sqlViewEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strSqlViewId', strSqlViewId);
  // mapParam.add('strUserId', strUserId);
  // mapParam.add('strPrjDataBaseId', strPrjDataBaseId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strSqlViewId,
      strUserId,
      strPrjDataBaseId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 字段分析,即可视图文本中,分析可相关字段,以及相关表等
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strSqlViewId: Sql视图Id
 * @param strPrjId: 工程Id
 * @param strUserId: 用户Id
 * @returns 获取的相应对象列表
 */
export async function SqlViewEx_FieldAnalysis(
  strSqlViewId: string,
  strPrjId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = SqlViewEx_FieldAnalysis.name;
  const strAction = 'FieldAnalysis';
  const strUrl = GetWebApiUrl(sqlViewEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strSqlViewId', strSqlViewId);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strUserId', strUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSqlViewId,
      strPrjId,
      strUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 生成Sql视图,即根据相关字段,以及相关表等,生成Sql视图文本
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strSqlViewId: Sql视图Id
 * @param strPrjId: 工程Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @param strUserId: 用户Id
 * @returns 获取的相应对象列表
 */
export async function SqlViewEx_GeneSqlView(
  strSqlViewId: string,
  strPrjId: string,
  strPrjDataBaseId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = SqlViewEx_GeneSqlView.name;
  const strAction = 'GeneSqlView';
  const strUrl = GetWebApiUrl(sqlViewEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strSqlViewId', strSqlViewId);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strPrjDataBaseId', strPrjDataBaseId);
  // mapParam.add('strUserId', strUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSqlViewId,
      strPrjId,
      strPrjDataBaseId,
      strUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlViewEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
