import axios from 'axios';
import { clsGCPathEN } from '../..//L0Entity/GeneCode/clsGCPathEN';
import { clsProjectsEN } from '../..//L0Entity/PrjManage/clsProjectsEN';
import { GCPath_func } from '../..//L3ForWApi/GeneCode/clsGCPathWApi';
import { Projects_func } from '../..//L3ForWApi/PrjManage/clsProjectsWApi';
import { Storage } from '@/utils/Storage';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { clsUserCodePathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePathEN';
import { clsUserCodePathENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePathENEx';
import { clsUserCodePrjMainPathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathEN';
import { clsTabMainTypeEN } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
import { CMProject_func } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { UserCodePath_SortFunByKey } from '@/ts/L3ForWApi/SystemSet/clsUserCodePathWApi';
import { UserCodePrjMainPath_func } from '@/ts/L3ForWApi/SystemSet/clsUserCodePrjMainPathWApi';
import { TabMainType_func } from '@/ts/L3ForWApi/Table_Field/clsTabMainTypeWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { useCMProjectAppRelaStore } from '@/store/modules/CMProjectAppRela';

export const userCodePathEx_Controller = 'UserCodePathExApi';
export const userCodePathEx_ConstructorName = 'userCodePathEx';

/**
 * 设置GC路径
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function UserCodePathEx_SetGCPath(strOpUserId: string): Promise<number> {
  const strThisFuncName = UserCodePathEx_SetGCPath.name;
  const strAction = 'SetGCPath';
  const strUrl = GetWebApiUrl(userCodePathEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        userCodePathEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePathEx_ConstructorName,
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objUserCodePathENS:源对象
 * @returns 目标对象=>clsUserCodePathEN:objUserCodePathENT
 **/
export function UserCodePathEx_CopyToEx(
  objUserCodePathENS: clsUserCodePathEN,
): clsUserCodePathENEx {
  const strThisFuncName = UserCodePathEx_CopyToEx.name;
  const objUserCodePathENT = new clsUserCodePathENEx();
  try {
    ObjectAssign(objUserCodePathENT, objUserCodePathENS);
    return objUserCodePathENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserCodePathENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserCodePathEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserCodePathENEx.con_ProgLangTypeSimName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return a.progLangTypeSimName.localeCompare(b.progLangTypeSimName);
        };
      // case clsUserCodePathENEx.con_ApplicationTypeName:
      //   return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
      //     return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
      //   };
      case clsUserCodePathENEx.con_CmPrjName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsUserCodePathENEx.con_TabMainTypeName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return a.tabMainTypeName.localeCompare(b.tabMainTypeName);
        };
      case clsUserCodePathENEx.con_CodeTypeSimName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return a.codeTypeSimName.localeCompare(b.codeTypeSimName);
        };
      case clsUserCodePathENEx.con_GcPathName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return a.gcPathName.localeCompare(b.gcPathName);
        };
      default:
        return UserCodePath_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsUserCodePathENEx.con_ProgLangTypeSimName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return b.progLangTypeSimName.localeCompare(a.progLangTypeSimName);
        };
      // case clsUserCodePathENEx.con_ApplicationTypeSimName:
      //   return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
      //     return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
      //   };
      case clsUserCodePathENEx.con_CmPrjName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsUserCodePathENEx.con_TabMainTypeName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return b.tabMainTypeName.localeCompare(a.tabMainTypeName);
        };
      case clsUserCodePathENEx.con_CodeTypeSimName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return b.codeTypeSimName.localeCompare(a.codeTypeSimName);
        };
      case clsUserCodePathENEx.con_GcPathName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return b.gcPathName.localeCompare(a.gcPathName);
        };
      default:
        return UserCodePath_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap4Path)
 * @param obj00050204S:源对象
 **/
export async function UserCodePathEx_FuncMap4Path(objDnPathPara: any) {
  const strThisFuncName = UserCodePathEx_FuncMap4Path.name;
  const CMProjectAppRelaStore = useCMProjectAppRelaStore();
  try {
    if (objDnPathPara.inDataNodeName == '' && objDnPathPara.outDataNodeName == '') {
      return '';
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_PrjId' &&
      objDnPathPara.outDataNodeName == 'Projects_PrjName'
    ) {
      //Step.1  UserCodePath_PrjId-->Projects_PrjId(函数(equal))
      const Projects_PrjId = objDnPathPara.inValue; //UserCodePath_PrjId-->Projects_PrjId(函数(equal))
      //Step.2  Projects_PrjId-->Projects_PrjName(表(Projects))
      const Projects_PrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        Projects_PrjId,
      ); //Projects_PrjId-->Projects_PrjName(表(Projects))
      return Projects_PrjName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_ApplicationTypeId' &&
      objDnPathPara.outDataNodeName == 'ApplicationType_ApplicationTypeName'
    ) {
      //Step.1  UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = Number(objDnPathPara.inValue); //UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      //Step.2  ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeName(表(ApplicationType))
      const ApplicationType_ApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeName(表(ApplicationType))
      return ApplicationType_ApplicationTypeName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_ApplicationTypeId' &&
      objDnPathPara.outDataNodeName == 'ApplicationType_ProgLangTypeId'
    ) {
      //Step.1  UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = Number(objDnPathPara.inValue); //UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      //Step.2  ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      const ApplicationType_ProgLangTypeId = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ProgLangTypeId,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      return ApplicationType_ProgLangTypeId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_ApplicationTypeId' &&
      objDnPathPara.outDataNodeName == 'ApplicationType_ApplicationTypeENName'
    ) {
      //Step.1  UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = Number(objDnPathPara.inValue); //UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      //Step.2  ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeENName(表(ApplicationType))
      const ApplicationType_ApplicationTypeENName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeENName,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeENName(表(ApplicationType))
      return ApplicationType_ApplicationTypeENName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_ApplicationTypeId' &&
      objDnPathPara.outDataNodeName == 'ApplicationType_ApplicationTypeSimName'
    ) {
      //Step.1  UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = Number(objDnPathPara.inValue); //UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      //Step.2  ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeSimName(表(ApplicationType))
      const ApplicationType_ApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeSimName(表(ApplicationType))
      return ApplicationType_ApplicationTypeSimName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_ApplicationTypeId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeId'
    ) {
      //Step.1  UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = Number(objDnPathPara.inValue); //UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      //Step.2  ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      const ApplicationType_ProgLangTypeId = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ProgLangTypeId,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      //Step.3  ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = ApplicationType_ProgLangTypeId; //ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      return ProgLangType_ProgLangTypeId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_ApplicationTypeId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeName'
    ) {
      //Step.1  UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = Number(objDnPathPara.inValue); //UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      //Step.2  ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      const ApplicationType_ProgLangTypeId = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ProgLangTypeId,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      //Step.3  ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = ApplicationType_ProgLangTypeId; //ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      //Step.4  ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeName(表(ProgLangType))
      const ProgLangType_ProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangType_ProgLangTypeId,
      ); //ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeName(表(ProgLangType))
      return ProgLangType_ProgLangTypeName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_ApplicationTypeId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeENName'
    ) {
      //Step.1  UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = Number(objDnPathPara.inValue); //UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      //Step.2  ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      const ApplicationType_ProgLangTypeId = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ProgLangTypeId,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      //Step.3  ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = ApplicationType_ProgLangTypeId; //ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      //Step.4  ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeENName(表(ProgLangType))
      const ProgLangType_ProgLangTypeENName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeENName,
        ProgLangType_ProgLangTypeId,
      ); //ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeENName(表(ProgLangType))
      return ProgLangType_ProgLangTypeENName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_ApplicationTypeId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeSimName'
    ) {
      //Step.1  UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = Number(objDnPathPara.inValue); //UserCodePath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      //Step.2  ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      const ApplicationType_ProgLangTypeId = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ProgLangTypeId,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      //Step.3  ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = ApplicationType_ProgLangTypeId; //ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      //Step.4  ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeSimName(表(ProgLangType))
      const ProgLangType_ProgLangTypeSimName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeSimName,
        ProgLangType_ProgLangTypeId,
      ); //ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeSimName(表(ProgLangType))
      return ProgLangType_ProgLangTypeSimName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_CodeTypeId' &&
      objDnPathPara.outDataNodeName == 'CodeType_CodeTypeName'
    ) {
      //Step.1  UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      const CodeType_CodeTypeId = objDnPathPara.inValue; //UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      //Step.2  CodeType_CodeTypeId-->CodeType_CodeTypeName(表(CodeType))
      const CodeType_CodeTypeName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeName,
        CodeType_CodeTypeId,
      ); //CodeType_CodeTypeId-->CodeType_CodeTypeName(表(CodeType))
      return CodeType_CodeTypeName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_CodeTypeId' &&
      objDnPathPara.outDataNodeName == 'CodeType_ProgLangTypeId'
    ) {
      //Step.1  UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      const CodeType_CodeTypeId = objDnPathPara.inValue; //UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      //Step.2  CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      const CodeType_ProgLangTypeId = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_ProgLangTypeId,
        CodeType_CodeTypeId,
      ); //CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      return CodeType_ProgLangTypeId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_CodeTypeId' &&
      objDnPathPara.outDataNodeName == 'CodeType_CodeTypeENName'
    ) {
      //Step.1  UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      const CodeType_CodeTypeId = objDnPathPara.inValue; //UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      //Step.2  CodeType_CodeTypeId-->CodeType_CodeTypeENName(表(CodeType))
      const CodeType_CodeTypeENName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeENName,
        CodeType_CodeTypeId,
      ); //CodeType_CodeTypeId-->CodeType_CodeTypeENName(表(CodeType))
      return CodeType_CodeTypeENName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_CodeTypeId' &&
      objDnPathPara.outDataNodeName == 'CodeType_CodeTypeSimName'
    ) {
      //Step.1  UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      const CodeType_CodeTypeId = objDnPathPara.inValue; //UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      //Step.2  CodeType_CodeTypeId-->CodeType_CodeTypeSimName(表(CodeType))
      const CodeType_CodeTypeSimName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeSimName,
        CodeType_CodeTypeId,
      ); //CodeType_CodeTypeId-->CodeType_CodeTypeSimName(表(CodeType))
      return CodeType_CodeTypeSimName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_CodeTypeId' &&
      objDnPathPara.outDataNodeName == 'CodeType_DependsOn'
    ) {
      //Step.1  UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      const CodeType_CodeTypeId = objDnPathPara.inValue; //UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      //Step.2  CodeType_CodeTypeId-->CodeType_DependsOn(表(CodeType))
      const CodeType_DependsOn = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_DependsOn,
        CodeType_CodeTypeId,
      ); //CodeType_CodeTypeId-->CodeType_DependsOn(表(CodeType))
      return CodeType_DependsOn;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_CodeTypeId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeId'
    ) {
      //Step.1  UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      const CodeType_CodeTypeId = objDnPathPara.inValue; //UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      //Step.2  CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      const CodeType_ProgLangTypeId = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_ProgLangTypeId,
        CodeType_CodeTypeId,
      ); //CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      //Step.3  CodeType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = CodeType_ProgLangTypeId; //CodeType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      return ProgLangType_ProgLangTypeId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_CodeTypeId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeName'
    ) {
      //Step.1  UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      const CodeType_CodeTypeId = objDnPathPara.inValue; //UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      //Step.2  CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      const CodeType_ProgLangTypeId = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_ProgLangTypeId,
        CodeType_CodeTypeId,
      ); //CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      //Step.3  CodeType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = CodeType_ProgLangTypeId; //CodeType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      //Step.4  ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeName(表(ProgLangType))
      const ProgLangType_ProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangType_ProgLangTypeId,
      ); //ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeName(表(ProgLangType))
      return ProgLangType_ProgLangTypeName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_CodeTypeId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeENName'
    ) {
      //Step.1  UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      const CodeType_CodeTypeId = objDnPathPara.inValue; //UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      //Step.2  CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      const CodeType_ProgLangTypeId = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_ProgLangTypeId,
        CodeType_CodeTypeId,
      ); //CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      //Step.3  CodeType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = CodeType_ProgLangTypeId; //CodeType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      //Step.4  ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeENName(表(ProgLangType))
      const ProgLangType_ProgLangTypeENName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeENName,
        ProgLangType_ProgLangTypeId,
      ); //ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeENName(表(ProgLangType))
      return ProgLangType_ProgLangTypeENName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_CodeTypeId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeSimName'
    ) {
      //Step.1  UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      const CodeType_CodeTypeId = objDnPathPara.inValue; //UserCodePath_CodeTypeId-->CodeType_CodeTypeId(函数(equal))
      //Step.2  CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      const CodeType_ProgLangTypeId = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_ProgLangTypeId,
        CodeType_CodeTypeId,
      ); //CodeType_CodeTypeId-->CodeType_ProgLangTypeId(表(CodeType))
      //Step.3  CodeType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = CodeType_ProgLangTypeId; //CodeType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      //Step.4  ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeSimName(表(ProgLangType))
      const ProgLangType_ProgLangTypeSimName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeSimName,
        ProgLangType_ProgLangTypeId,
      ); //ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeSimName(表(ProgLangType))
      return ProgLangType_ProgLangTypeSimName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'UserCodePrjMainPath_ApplicationTypeId'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const ApplicationType_ApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );
      return ApplicationType_ApplicationTypeId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'UserCodePrjMainPath_CMPrjId'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_CMPrjId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_CMPrjId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMPrjId = await CMProjectAppRelaStore.getCmPrjId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );
      return UserCodePrjMainPath_CMPrjId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeSimName'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_ProgLangTypeId(表(UserCodePrjMainPath))
      const UserCodePath_UserCodePrjMainPathId = objDnPathPara.inValue;
      const UserCodePrjMainPath_ProgLangTypeId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_ProgLangTypeId,
        UserCodePath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_ProgLangTypeId(表(UserCodePrjMainPath))
      //Step.2  UserCodePrjMainPath_ProgLangTypeId-->ProgLangType_ProgLangTypeSimName(表(ProgLangType))
      const ProgLangType_ProgLangTypeSimName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeSimName,
        UserCodePrjMainPath_ProgLangTypeId,
      ); //UserCodePrjMainPath_ProgLangTypeId-->ProgLangType_ProgLangTypeSimName(表(ProgLangType))
      return ProgLangType_ProgLangTypeSimName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'ApplicationType_ApplicationTypeId'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );

      return ApplicationType_ApplicationTypeId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'CMProject_CMPrjId'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_CMPrjId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_CMPrjId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_CMPrjId-->CMProject_CMPrjId(函数(equal))
      const UserCodePrjMainPath_CMPrjId = await CMProjectAppRelaStore.getCmPrjId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );
      return UserCodePrjMainPath_CMPrjId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'ApplicationType_ApplicationTypeName'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );

      //Step.4  ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeName(表(ApplicationType))
      const ApplicationType_ApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeName(表(ApplicationType))
      return ApplicationType_ApplicationTypeName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'ApplicationType_ProgLangTypeId'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );

      //Step.4  ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      const ApplicationType_ProgLangTypeId = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ProgLangTypeId,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      return ApplicationType_ProgLangTypeId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'ApplicationType_ApplicationTypeENName'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );
      //Step.4  ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeENName(表(ApplicationType))
      const ApplicationType_ApplicationTypeENName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeENName,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeENName(表(ApplicationType))
      return ApplicationType_ApplicationTypeENName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'ApplicationType_ApplicationTypeSimName'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );
      //Step.4  ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeSimName(表(ApplicationType))
      const ApplicationType_ApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ApplicationTypeSimName(表(ApplicationType))
      return ApplicationType_ApplicationTypeSimName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'CMProject_CMPrjName'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_CMPrjId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_CMPrjId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_CMPrjId-->CMProject_CMPrjId(函数(equal))
      const UserCodePrjMainPath_CMPrjId = await CMProjectAppRelaStore.getCmPrjId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );
      //Step.4  CMProject_CMPrjId-->CMProject_CMPrjName(表(CMProject))
      const CMProject_CMPrjName = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_CmPrjName,
        UserCodePrjMainPath_CMPrjId,
      ); //CMProject_CMPrjId-->CMProject_CMPrjName(表(CMProject))
      return CMProject_CMPrjName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeId'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );
      //Step.4  ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      const ApplicationType_ProgLangTypeId = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ProgLangTypeId,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      //Step.5  ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = ApplicationType_ProgLangTypeId; //ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      return ProgLangType_ProgLangTypeId;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeName'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );
      //Step.4  ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      const ApplicationType_ProgLangTypeId = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ProgLangTypeId,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      //Step.5  ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = ApplicationType_ProgLangTypeId; //ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      //Step.6  ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeName(表(ProgLangType))
      const ProgLangType_ProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangType_ProgLangTypeId,
      ); //ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeName(表(ProgLangType))
      return ProgLangType_ProgLangTypeName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_UserCodePrjMainPathId' &&
      objDnPathPara.outDataNodeName == 'ProgLangType_ProgLangTypeENName'
    ) {
      //Step.1  UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      const UserCodePrjMainPath_UserCodePrjMainPathId = objDnPathPara.inValue; //UserCodePath_UserCodePrjMainPathId-->UserCodePrjMainPath_UserCodePrjMainPathId(函数(equal))
      //Step.2  UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      const UserCodePrjMainPath_CMProjectAppRelaId = await UserCodePrjMainPath_func(
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
        UserCodePrjMainPath_UserCodePrjMainPathId,
        objDnPathPara.prjId,
      ); //UserCodePrjMainPath_UserCodePrjMainPathId-->UserCodePrjMainPath_ApplicationTypeId(表(UserCodePrjMainPath))
      //Step.3  UserCodePrjMainPath_ApplicationTypeId-->ApplicationType_ApplicationTypeId(函数(equal))
      const ApplicationType_ApplicationTypeId = await CMProjectAppRelaStore.getApplicationTypeId(
        UserCodePrjMainPath_CMProjectAppRelaId,
      );
      //Step.4  ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      const ApplicationType_ProgLangTypeId = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ProgLangTypeId,
        ApplicationType_ApplicationTypeId.toString(),
      ); //ApplicationType_ApplicationTypeId-->ApplicationType_ProgLangTypeId(表(ApplicationType))
      //Step.5  ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      const ProgLangType_ProgLangTypeId = ApplicationType_ProgLangTypeId; //ApplicationType_ProgLangTypeId-->ProgLangType_ProgLangTypeId(函数(equal))
      //Step.6  ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeENName(表(ProgLangType))
      const ProgLangType_ProgLangTypeENName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeENName,
        ProgLangType_ProgLangTypeId,
      ); //ProgLangType_ProgLangTypeId-->ProgLangType_ProgLangTypeENName(表(ProgLangType))
      return ProgLangType_ProgLangTypeENName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_TabMainTypeId' &&
      objDnPathPara.outDataNodeName == 'TabMainType_TabMainTypeName'
    ) {
      //Step.1  UserCodePath_TabMainTypeId-->TabMainType_TabMainTypeId(函数(equal))
      const TabMainType_TabMainTypeId = objDnPathPara.inValue; //UserCodePath_TabMainTypeId-->TabMainType_TabMainTypeId(函数(equal))
      //Step.2  TabMainType_TabMainTypeId-->TabMainType_TabMainTypeName(表(TabMainType))
      const TabMainType_TabMainTypeName = await TabMainType_func(
        clsTabMainTypeEN.con_TabMainTypeId,
        clsTabMainTypeEN.con_TabMainTypeName,
        TabMainType_TabMainTypeId,
      ); //TabMainType_TabMainTypeId-->TabMainType_TabMainTypeName(表(TabMainType))
      return TabMainType_TabMainTypeName;
    } else if (
      objDnPathPara.inDataNodeName == 'UserCodePath_GCPathId' &&
      objDnPathPara.outDataNodeName == 'GCPath_GCPathName'
    ) {
      //Step.1  UserCodePath_GCPathId-->GCPath_GCPathId(函数(equal))
      const GCPath_GCPathId = objDnPathPara.inValue; //UserCodePath_GCPathId-->GCPath_GCPathId(函数(equal))
      //Step.2  GCPath_GCPathId-->GCPath_GCPathName(表(GCPath))
      const GCPath_GCPathName = await GCPath_func(
        clsGCPathEN.con_GcPathId,
        clsGCPathEN.con_GcPathName,
        GCPath_GCPathId,
        objDnPathPara.prjId,
        objDnPathPara.userId,
      ); //GCPath_GCPathId-->GCPath_GCPathName(表(GCPath))
      return GCPath_GCPathName;
    } else {
      const strMsg = Format(
        '路径不存在! inDataNodeName:[{0}], outDataNodeName:[{1}].',
        objDnPathPara.inDataNodeName,
        objDnPathPara.outDataNodeName,
      );
      console.error(strMsg);
      throw strMsg;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000073)把一个扩展类的部分属性进行函数转换出错,{0}.(in {1}.{2})',
      e,
      userCodePathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
export function UserCodePathEx_FuncMapByFldName(
  strFldName: string,
  objUserCodePathEx: clsUserCodePathENEx,
) {
  const strThisFuncName = UserCodePathEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsUserCodePathEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsUserCodePathENEx.con_TabMainTypeName:
      return UserCodePathEx_FuncMap_TabMainTypeName(objUserCodePathEx);
    case clsUserCodePathENEx.con_CodeTypeSimName:
      return UserCodePathEx_FuncMap_CodeTypeSimName(objUserCodePathEx);
    case clsUserCodePathENEx.con_GcPathName:
      return UserCodePathEx_FuncMap_GcPathName(objUserCodePathEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserCodePathS:源对象
 **/
export async function UserCodePathEx_FuncMap_TabMainTypeName(objUserCodePath: clsUserCodePathENEx) {
  const strThisFuncName = UserCodePathEx_FuncMap_TabMainTypeName.name;
  try {
    if (IsNullOrEmpty(objUserCodePath.tabMainTypeName) == true) {
      const TabMainType_TabMainTypeId = objUserCodePath.tabMainTypeId;
      const TabMainType_TabMainTypeName = await TabMainType_func(
        clsTabMainTypeEN.con_TabMainTypeId,
        clsTabMainTypeEN.con_TabMainTypeName,
        TabMainType_TabMainTypeId,
      );
      objUserCodePath.tabMainTypeName = TabMainType_TabMainTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000082)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserCodePathS:源对象
 **/
export async function UserCodePathEx_FuncMap_CodeTypeSimName(objUserCodePath: clsUserCodePathENEx) {
  const strThisFuncName = UserCodePathEx_FuncMap_CodeTypeSimName.name;
  try {
    if (IsNullOrEmpty(objUserCodePath.codeTypeSimName) == true) {
      const CodeType_CodeTypeId = objUserCodePath.codeTypeId;
      const CodeType_CodeTypeSimName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeSimName,
        CodeType_CodeTypeId,
      );
      objUserCodePath.codeTypeSimName = CodeType_CodeTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000114)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUserCodePathS:源对象
 **/
export async function UserCodePathEx_FuncMap_GcPathName(objUserCodePath: clsUserCodePathENEx) {
  const strThisFuncName = UserCodePathEx_FuncMap_GcPathName.name;
  try {
    if (IsNullOrEmpty(objUserCodePath.gcPathName) == true) {
      const objDnPathPara = {
        inDataNodeName: 'UserCodePath_GCPathId',
        outDataNodeName: 'GCPath_GCPathName',
        inValue: objUserCodePath.gcPathId,
        prjId: objUserCodePath.prjId,
        userId: clsPubLocalStorage.userId,
      };

      try {
        const GCPath_GCPathName = await UserCodePathEx_FuncMap4Path(objDnPathPara);
        //console.error(vPrjTab_Sim_TabName);
        if (GCPath_GCPathName != undefined) {
          if (IsNullOrEmpty(GCPath_GCPathName.toString()) == false) {
            objUserCodePath.gcPathName = GCPath_GCPathName.toString();
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000115)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePathEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
