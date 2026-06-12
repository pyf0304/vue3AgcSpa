/**
 * 类名:clsFileResourceExWApi
 * 表名:FileResource(00050539)
 * 生成代码版本:2022.04.06.1
 * 生成日期:2022/04/15 04:15:01
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:WA_访问扩展层(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 文件资源(FileResource)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年04月15日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";

import axios from 'axios';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { Storage } from '@/utils/Storage';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';

import { clsFileResourceEN } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsFileResourceENEx } from '@/ts/L0Entity/ResourceMan/clsFileResourceENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  FileResource_GetObjLstByPagerAsync,
  FileResource_SortFunByKey,
} from '@/ts/L3ForWApi/ResourceMan/clsFileResourceWApi';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsPrjFileTypeEN } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';
import { PrjFileType_func } from '@/ts/L3ForWApi/ResourceMan/clsPrjFileTypeWApi';
export const fileResourceEx_Controller = 'FileResourceExApi';
export const fileResourceEx_ConstructorName = 'fileResourceEx';

export interface GetFileTypeInfoRequest {
  fileName: string;
  prjId: string;
}

export interface GetFileTypeInfoBatchRequest {
  fileNames: Array<string>;
  prjId: string;
}

export interface FileTypeInfoResponse {
  errorId: number;
  errorMsg: string;
  codeTypeId: string;
  codeTypeName: string;
  tabId: string;
  tabName: string;
  isMatched: boolean;
}

export interface FileTypeInfoItem {
  fileName: string;
  codeTypeId: string;
  codeTypeName: string;
  tabId: string;
  tabName: string;
  isMatched: boolean;
  errorMessage: string;
}

export interface FileTypeInfoBatchResponse {
  errorId: number;
  errorMsg: string;
  totalCount: number;
  matchedCount: number;
  fileTypeInfoList: Array<FileTypeInfoItem>;
}

export interface GetCodeTypeIdListRequest {
  strPrjId: string;
  strCmPrjId?: string;
}

export interface GetCodeTypeIdListResponse {
  errorId: number;
  errorMsg: string;
  count: number;
  codeTypeIdList: Array<string>;
}

export interface GetCodeTypeStatisticsRequest {
  strPrjId: string;
  strCmPrjId?: string;
  bolIncludeFileNames?: boolean;
}

export interface CodeTypeStatisticsItem {
  codeTypeId: string;
  codeTypeName: string;
  fileCount: number;
  fileNames: Array<string> | null;
}

export interface GetCodeTypeStatisticsResponse {
  errorId: number;
  errorMsg: string;
  totalTypes: number;
  totalFiles: number;
  statistics: Array<CodeTypeStatisticsItem>;
}

export interface GetFilesByCodeTypeIdRequest {
  strPrjId: string;
  strCodeTypeId: string;
  strCmPrjId?: string;
}

export interface FileByCodeTypeItem {
  fileResourceId: number;
  fileName: string;
  fileDirName: string;
  extension: string;
  tabId: string;
  codeTypeId: string;
  fileLength: number;
  creationTime: string;
  lastWriteTime: string;
}

export interface GetFilesByCodeTypeIdResponse {
  errorId: number;
  errorMsg: string;
  count: number;
  files: Array<FileByCodeTypeItem>;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function FileResourceEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objFileResourceENS:源对象
 * @returns 目标对象=>clsFileResourceEN:objFileResourceENT
 **/
export function FileResourceEx_CopyToEx(
  objFileResourceENS: clsFileResourceEN,
): clsFileResourceENEx {
  const strThisFuncName = FileResourceEx_CopyToEx.name;
  const objFileResourceENT = new clsFileResourceENEx();
  try {
    ObjectAssign(objFileResourceENT, objFileResourceENS);
    return objFileResourceENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      fileResourceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFileResourceENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FileResourceEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFileResourceENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFileResourceObjLst = await FileResource_GetObjLstByPagerAsync(objPagerPara);
  const arrFileResourceExObjLst = arrFileResourceObjLst.map(FileResourceEx_CopyToEx);
  if (arrFileResourceExObjLst.length == 0) return arrFileResourceExObjLst;
  let arrFileResourceSel: Array<clsFileResourceENEx> = arrFileResourceExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFileResourceSel = arrFileResourceSel.sort(
        FileResourceEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFileResourceSel = arrFileResourceSel.sort(objPagerPara.sortFun);
    }
    const intPageSize =
      objPagerPara.pageSize > 0 ? objPagerPara.pageSize : arrFileResourceSel.length;
    const intPageIndex = objPagerPara.pageIndex > 0 ? objPagerPara.pageIndex : 1;
    const intStartIndex = (intPageIndex - 1) * intPageSize;
    const intEndIndex = intStartIndex + intPageSize;
    return arrFileResourceSel.slice(intStartIndex, intEndIndex);
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fileResourceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFileResourceENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-04-15
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FileResourceEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return FileResource_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return FileResource_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function FileResourceEx_FuncMapByFldName(
  strFldName: string,
  objFileResourceEx: clsFileResourceENEx,
) {
  const strThisFuncName = FileResourceEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFileResourceEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFileResourceENEx.con_CodeTypeSimName:
      return FileResourceEx_FuncMapCodeTypeSimName(objFileResourceEx);
    case clsFileResourceENEx.con_TabName:
      return FileResourceEx_FuncMapTabName(objFileResourceEx);
    case clsFileResourceENEx.con_PrjFileTypeName:
      return FileResourceEx_FuncMapPrjFileTypeName(objFileResourceEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFileResourceS:源对象
 **/
export async function FileResourceEx_FuncMapCodeTypeSimName(objFileResource: clsFileResourceENEx) {
  const strThisFuncName = FileResourceEx_FuncMapCodeTypeSimName.name;
  try {
    if (IsNullOrEmpty(objFileResource.codeTypeSimName) == true) {
      const vCodeTypeSimCodeTypeId = objFileResource.codeTypeId;
      const vCodeTypeSimCodeTypeSimName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeSimName,
        vCodeTypeSimCodeTypeId,
      );
      objFileResource.codeTypeSimName = vCodeTypeSimCodeTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001227)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fileResourceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFileResourceS:源对象
 **/
export async function FileResourceEx_FuncMapTabName(objFileResource: clsFileResourceENEx) {
  const strThisFuncName = FileResourceEx_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objFileResource.tabName) == true) {
      const vPrjTabSimTabId = objFileResource.tabId;
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objFileResource.prjId,
      );
      objFileResource.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001119)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fileResourceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 批量根据文件名获取 CodeTypeId 和 TabId（POST方式）
 * (AGC.WebApi.FileResourceExApi:GetFileTypeInfoBatch)
 * @param objRequest: 批量请求参数
 * @returns 返回文件类型信息列表
 */
export async function FileResourceEx_GetFileTypeInfoBatch(
  objRequest: GetFileTypeInfoBatchRequest,
): Promise<FileTypeInfoBatchResponse> {
  const strThisFuncName = FileResourceEx_GetFileTypeInfoBatch.name;
  const strAction = 'GetFileTypeInfoBatch';
  const strUrl = FileResourceEx_GetWebApiUrl(fileResourceEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  try {
    const response = await axios.post(strUrl, objRequest, config);
    const data = response.data;
    if (data.errorId == 0 || data.errorId == 1) {
      return {
        errorId: Number(data.errorId ?? 0),
        errorMsg: data.errorMsg ?? '',
        totalCount: Number(data.totalCount ?? 0),
        matchedCount: Number(data.matchedCount ?? 0),
        fileTypeInfoList: Array.isArray(data.fileTypeInfoList)
          ? data.fileTypeInfoList.map((item: any) => ({
              fileName: item.fileName ?? '',
              codeTypeId: item.codeTypeId ?? '',
              codeTypeName: item.codeTypeName ?? '',
              tabId: item.tabId ?? '',
              tabName: item.tabName ?? '',
              isMatched: Boolean(item.isMatched),
              errorMessage: item.errorMessage ?? '',
            }))
          : [],
      };
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
        fileResourceEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        fileResourceEx_ConstructorName,
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
 * 根据文件名获取 CodeTypeId 和 TabId（POST方式）
 * (AGC.WebApi.FileResourceExApi:GetFileTypeInfoByFileName)
 * @param objRequest: 请求参数
 * @returns 返回文件类型信息
 */
export async function FileResourceEx_GetFileTypeInfoByFileNamePost(
  objRequest: GetFileTypeInfoRequest,
): Promise<FileTypeInfoResponse> {
  const strThisFuncName = FileResourceEx_GetFileTypeInfoByFileNamePost.name;
  const strAction = 'GetFileTypeInfoByFileName';
  const strUrl = FileResourceEx_GetWebApiUrl(fileResourceEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  try {
    const response = await axios.post(strUrl, objRequest, config);
    const data = response.data;
    if (data.errorId == 0 || data.errorId == 1) {
      return {
        errorId: Number(data.errorId ?? 0),
        errorMsg: data.errorMsg ?? '',
        codeTypeId: data.codeTypeId ?? '',
        codeTypeName: data.codeTypeName ?? '',
        tabId: data.tabId ?? '',
        tabName: data.tabName ?? '',
        isMatched: Boolean(data.isMatched),
      };
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
        fileResourceEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        fileResourceEx_ConstructorName,
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
 * 获取指定工程的所有CodeTypeId列表（GET方式）
 * (AGC.WebApi.FileResourceExApi:GetCodeTypeIdList)
 * @param objRequest: 请求参数
 * @returns 返回CodeTypeId列表
 */
export async function FileResourceEx_GetCodeTypeIdList(
  objRequest: GetCodeTypeIdListRequest,
): Promise<GetCodeTypeIdListResponse> {
  const strThisFuncName = FileResourceEx_GetCodeTypeIdList.name;
  const strAction = 'GetCodeTypeIdList';
  const strUrl = FileResourceEx_GetWebApiUrl(fileResourceEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    params: {
      strPrjId: objRequest.strPrjId,
      strCmPrjId: objRequest.strCmPrjId ?? '',
    },
    headers: {
      Authorization: `${token}`,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0 || data.errorId == 1) {
      return {
        errorId: Number(data.errorId ?? 0),
        errorMsg: data.errorMsg ?? '',
        count: Number(data.count ?? 0),
        codeTypeIdList: Array.isArray(data.codeTypeIdList)
          ? data.codeTypeIdList.map((item: any) => String(item ?? ''))
          : [],
      };
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
        fileResourceEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        fileResourceEx_ConstructorName,
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
 * 获取指定工程的CodeTypeId统计信息（GET方式）
 * (AGC.WebApi.FileResourceExApi:GetCodeTypeStatistics)
 * @param objRequest: 请求参数
 * @returns 返回CodeTypeId统计信息
 */
export async function FileResourceEx_GetCodeTypeStatistics(
  objRequest: GetCodeTypeStatisticsRequest,
): Promise<GetCodeTypeStatisticsResponse> {
  const strThisFuncName = FileResourceEx_GetCodeTypeStatistics.name;
  const strAction = 'GetCodeTypeStatistics';
  const strUrl = FileResourceEx_GetWebApiUrl(fileResourceEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    params: {
      strPrjId: objRequest.strPrjId,
      strCmPrjId: objRequest.strCmPrjId ?? '',
      bolIncludeFileNames: objRequest.bolIncludeFileNames ?? false,
    },
    headers: {
      Authorization: `${token}`,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0 || data.errorId == 1) {
      return {
        errorId: Number(data.errorId ?? 0),
        errorMsg: data.errorMsg ?? '',
        totalTypes: Number(data.totalTypes ?? 0),
        totalFiles: Number(data.totalFiles ?? 0),
        statistics: Array.isArray(data.statistics)
          ? data.statistics.map((item: any) => ({
              codeTypeId: item.codeTypeId ?? '',
              codeTypeName: item.codeTypeName ?? '',
              fileCount: Number(item.fileCount ?? 0),
              fileNames: Array.isArray(item.fileNames)
                ? item.fileNames.map((x: any) => String(x ?? ''))
                : null,
            }))
          : [],
      };
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
        fileResourceEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        fileResourceEx_ConstructorName,
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
 * 根据CodeTypeId获取文件列表（GET方式）
 * (AGC.WebApi.FileResourceExApi:GetFilesByCodeTypeId)
 * @param objRequest: 请求参数
 * @returns 返回文件列表
 */
export async function FileResourceEx_GetFilesByCodeTypeId(
  objRequest: GetFilesByCodeTypeIdRequest,
): Promise<GetFilesByCodeTypeIdResponse> {
  const strThisFuncName = FileResourceEx_GetFilesByCodeTypeId.name;
  const strAction = 'GetFilesByCodeTypeId';
  const strUrl = FileResourceEx_GetWebApiUrl(fileResourceEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    params: {
      strPrjId: objRequest.strPrjId,
      strCodeTypeId: objRequest.strCodeTypeId,
      strCmPrjId: objRequest.strCmPrjId ?? '',
    },
    headers: {
      Authorization: `${token}`,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0 || data.errorId == 1) {
      return {
        errorId: Number(data.errorId ?? 0),
        errorMsg: data.errorMsg ?? '',
        count: Number(data.count ?? 0),
        files: Array.isArray(data.files)
          ? data.files.map((item: any) => ({
              fileResourceId: Number(item.fileResourceId ?? 0),
              fileName: item.fileName ?? '',
              fileDirName: item.fileDirName ?? '',
              extension: item.extension ?? '',
              tabId: item.tabId ?? '',
              codeTypeId: item.codeTypeId ?? '',
              fileLength: Number(item.fileLength ?? 0),
              creationTime: item.creationTime ?? '',
              lastWriteTime: item.lastWriteTime ?? '',
            }))
          : [],
      };
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
        fileResourceEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        fileResourceEx_ConstructorName,
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFileResourceS:源对象
 **/
export async function FileResourceEx_FuncMapPrjFileTypeName(objFileResource: clsFileResourceENEx) {
  const strThisFuncName = FileResourceEx_FuncMapPrjFileTypeName.name;
  try {
    if (IsNullOrEmpty(objFileResource.prjFileTypeName) == true) {
      const PrjFileTypePrjFileTypeId = objFileResource.prjFileTypeId;
      const PrjFileTypePrjFileTypeName = await PrjFileType_func(
        clsPrjFileTypeEN.con_PrjFileTypeId,
        clsPrjFileTypeEN.con_PrjFileTypeName,
        PrjFileTypePrjFileTypeId,
      );
      objFileResource.prjFileTypeName = PrjFileTypePrjFileTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001542)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fileResourceEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
// 显示列表中有部分记录的CodeTypeId 在查询区的相应下拉 框中没有下拉选项，能否把当前CmprjId 、PrjId的相应记录CodeTypeId 找出来，添加到下拉框的选项中
