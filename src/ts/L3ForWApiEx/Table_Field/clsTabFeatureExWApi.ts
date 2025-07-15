import axios from 'axios';
import {
  TabFeatureFldsEx_CopyNodeToNewVersion,
  TabFeatureFldsEx_GetObjLstByTabFeatureId,
} from './clsTabFeatureFldsExWApi';

import { vPrjTab_SimEx_func, vPrjTab_SimEx_GetObjByTabIdCache } from './clsvPrjTab_SimExWApi';
import { vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache } from './clsvTabFeatureFlds_SimExWApi';
import {
  vTabFeature_SimEx_GetObjByTabFeatureIdCache,
  vTabFeature_SimEx_GetObjLstCache,
} from './clsvTabFeature_SimExWApi';
import { Storage } from '@/utils/Storage';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { clsPrjFeatureEN, enumPrjFeature } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { clsTabFeatureENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureENEx';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';

import { FuncModule_Agc_func } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import {
  Projects_func,
  Projects_GetObjByPrjIdCache,
} from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { PrjTab_UpdateRecordAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import {
  TabFeature_AddNewRecordAsync,
  TabFeature_CheckPropertyNew,
  TabFeature_GetMaxStrIdByPrefixAsync,
  TabFeature_GetObjByTabFeatureIdAsync,
  TabFeature_GetObjLstByPagerAsync,
  TabFeature_IsExistAsync,
  TabFeature_SortFunByKey,
  TabFeature_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import { vPrjTab_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { vTabFeature_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { CMProjectEx_GetPrjIdByCmPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import { GetBr_Empty, GetDiv_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useTabFeatureFldsStore } from '@/store/modules/tabFeatureFlds';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import {
  vPrjFeatureSim_func,
  vPrjFeatureSim_GetObjByFeatureIdCache,
} from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import { clsvPrjFeatureSimEN } from '@/ts/L0Entity/PrjFunction/clsvPrjFeatureSimEN';

// import { Dictionary } from '@/ts/PubFun/tzDictionary';

export const tabFeatureEx_Controller = 'TabFeatureExApi';
export const tabFeatureEx_ConstructorName = 'tabFeatureEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objTabFeatureENS">源对象</param>
/// <param name = "objTabFeatureENT">目标对象</param>
export function TabFeatureEx_CopyToEx(objTabFeatureENS: clsTabFeatureEN): clsTabFeatureENEx {
  const objTabFeatureENT = new clsTabFeatureENEx();
  try {
    ObjectAssign(objTabFeatureENT, objTabFeatureENS);
    return objTabFeatureENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objTabFeatureENT;
  }
}

/// <summary>
/// 排序函数。根据关键字字段的值进行比较
/// 作者:pyf
/// 日期:20210322172512
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
/// </summary>
/// <param name = "a">比较的第1个对象</param>
/// <param name = "b">比较的第1个对象</param>
/// <returns>返回两个对象比较的结果</returns>
export function TabFeatureEx_SortFunByTabFeatureName(
  a: clsTabFeatureEN,
  b: clsTabFeatureEN,
): number {
  return a.tabFeatureName.localeCompare(b.tabFeatureName);
}
export function TabFeatureEx_SortFunByOrderNum(a: clsTabFeatureEN, b: clsTabFeatureEN): number {
  return a.orderNum - b.orderNum;
}
/// <summary>
/// 扩展删除表功能
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strTabFeatureId">表功能Id</param>
/// <param name = "strPrjId">工程Id</param>
/// <returns>获取的相应对象列表</returns>
export async function TabFeatureEx_DelRecordEx(
  strTabFeatureId: string,
  strPrjId: string,
): Promise<boolean> {
  const strThisFuncName = TabFeatureEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = GetWebApiUrl(tabFeatureEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabFeatureId', strTabFeatureId);
  // mapParam.add('strPrjId', strPrjId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabFeatureId,
      strPrjId,
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
        tabFeatureEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tabFeatureEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function TabFeatureEx_GetTabIdByTabFeatureIdCache(
  strTabFeatureId: string,
  strCmPrjId: string,
) {
  try {
    const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
      strTabFeatureId,
      strCmPrjId,
    );
    if (objTabFeature == null) return '';
    return objTabFeature.tabId;
  } catch (e: any) {
    console.error(e);
    const strMsg = Format('在获取keyId:[{0}]的表功能对象时出错:{1}.', strTabFeatureId, e);
    //alert(strMsg);
    throw strMsg;
  }
}

export async function TabFeatureEx_GetObjLstByTabIdCache(strCmPrjId: string, strTabId: string) {
  const strThisFuncName = 'GetObjLstByTabIdCache';
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '关键字(strTabId)不能为空！从本地缓存中获取对象列表出错. (in {0}.{1})',
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
  try {
    let arrTabFeature = await vTabFeature_SimEx_GetObjLstCache(strCmPrjId);
    arrTabFeature = arrTabFeature.filter((x) => x.tabId == strTabId);
    return arrTabFeature;
  } catch (e: any) {
    console.error(e);
    const strMsg = Format('在获取表:[{0}]的表功能对象时出错:{1}.', strTabId, e);
    //alert(strMsg);
    throw strMsg;
  }
}

export async function TabFeatureEx_GetObjLstByPrjIdCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstByPrjIdCache';
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '关键字(strPrjId)不能为空！从本地缓存中获取对象列表出错. (in {0}.{1})',
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
  try {
    const arrTabFeature = await vTabFeature_SimEx_GetObjLstCache(strPrjId);
    return arrTabFeature;
  } catch (e: any) {
    console.error(e);
    const strMsg = Format('在获取工程:[{0}]的表功能对象时出错:{1}.', strPrjId, e);
    //alert(strMsg);
    throw strMsg;
  }
}
export async function TabFeatureEx_GetSpan4TabFeature(
  objTabFeature: clsvTabFeature_SimEN,
  arrButtonLst: Array<HTMLButtonElement>,
): Promise<HTMLSpanElement> {
  const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    objTabFeature.tabId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objPrjTab == null || IsNullOrEmpty(objPrjTab.tabName) == true) {
    throw '表名不能为空！(in .TabFeatureEx_GetSpan4TabFeature())';
  }

  if (objTabFeature == null || IsNullOrEmpty(objTabFeature.tabFeatureName) == true) {
    throw '字段名不能为空！(in .TabFeatureEx_GetSpan4TabFeature())';
  }
  const objFuncName = await TabFeatureEx_GetFuncName(objTabFeature);
  let strFuncNameCs = objTabFeature.funcNameCs;
  let strFuncNameJs = objTabFeature.funcNameJs;
  if (IsNullOrEmpty(strFuncNameCs)) {
    strFuncNameCs = objFuncName.funcNameCs;
  }
  if (IsNullOrEmpty(strFuncNameJs)) {
    strFuncNameJs = objFuncName.funcNameJs;
  }

  const objSpan: HTMLSpanElement = document.createElement('span');
  objSpan.setAttribute('class', 'text-primary');
  let strEx = '';
  let strExStr = '';
  let strIsGC = '';
  const objSpan_Ex: HTMLSpanElement = document.createElement('span');
  if (objTabFeature.isExtendedClass == true) {
    strEx = 'Ex';
    strExStr = '扩展类实现 ';

    objSpan_Ex.setAttribute('class', 'text-muted small ml-1');
    objSpan_Ex.innerHTML = Format('{0}', strExStr);
  }
  const objSpan_IsGC: HTMLSpanElement = document.createElement('span');
  if (objTabFeature.isNeedGC == true) {
    strIsGC = '可生成代码 ';

    objSpan_IsGC.setAttribute('class', 'text-muted small ml-1');
    objSpan_IsGC.innerHTML = Format('{0}', strIsGC);
  }

  const objSpan_TabFeature: HTMLSpanElement = document.createElement('span');
  objSpan_TabFeature.setAttribute('class', 'text-primary');
  objSpan_TabFeature.innerHTML = Format('{0}', objTabFeature.tabFeatureName, strExStr, strIsGC);
  objSpan_TabFeature.appendChild(objSpan_Ex);
  objSpan_TabFeature.appendChild(objSpan_IsGC);
  for (const objButton of arrButtonLst) {
    objSpan_TabFeature.appendChild(objButton);
  }
  const objBr: HTMLBRElement = document.createElement('br');
  // const objBr1: HTMLBRElement = document.createElement('br');
  const objBr2: HTMLBRElement = document.createElement('br');
  const objBr3: HTMLBRElement = document.createElement('br');
  const objSpan_AspNet_Title: HTMLSpanElement = document.createElement('span');
  const objSpan_AspNet: HTMLSpanElement = document.createElement('span');
  if (objTabFeature.isForCSharp == true) {
    objSpan_AspNet_Title.setAttribute('class', 'text-info');
    objSpan_AspNet_Title.innerHTML = Format('Cs绑定函数:');
    objSpan_AspNet.setAttribute('class', 'text-secondary font-weight-bold');
    objSpan_AspNet.innerHTML = Format('cls{0}BL{2}.{1}', objPrjTab.tabName, strFuncNameCs, strEx);
  } else {
    objSpan_AspNet_Title.innerHTML = Format('无Cs绑定函数:');
  }
  const objSpan_Js_Title: HTMLSpanElement = document.createElement('span');
  const objSpan_Js: HTMLSpanElement = document.createElement('span');
  if (objTabFeature.isForTypeScript == true) {
    objSpan_Js_Title.setAttribute('class', 'text-info');
    objSpan_Js_Title.innerHTML = Format('Js绑定函数:');

    objSpan_Js.setAttribute('class', 'text-secondary font-weight-bold');
    objSpan_Js.innerHTML = Format('{0}{2}_{1}', objPrjTab.tabName, strFuncNameJs, strEx);
  } else {
    objSpan_Js_Title.innerHTML = Format('无Js绑定函数:');
  }

  const objSpan_toolTipText_Title: HTMLSpanElement = document.createElement('span');
  const objSpan_toolTipText: HTMLSpanElement = document.createElement('span');
  if (IsNullOrEmpty(objTabFeature.toolTipText) == false) {
    objSpan_toolTipText_Title.setAttribute('class', 'text-info');
    objSpan_toolTipText_Title.innerHTML = Format('提示文本:');

    objSpan_toolTipText.setAttribute('class', 'text-secondary font-weight-bold');
    objSpan_toolTipText.innerHTML = objTabFeature.toolTipText;
  } else {
    objSpan_toolTipText_Title.innerHTML = Format('无提示文本:');
  }

  objSpan.appendChild(objSpan_TabFeature);
  objSpan.appendChild(objBr);
  objSpan.appendChild(objSpan_AspNet_Title);
  //objSpan.appendChild(objBr1);
  objSpan.appendChild(objSpan_AspNet);
  objSpan.appendChild(objBr2);
  objSpan.appendChild(objSpan_Js_Title);
  //objSpan.appendChild(objBr3);
  objSpan.appendChild(objSpan_Js);

  objSpan.appendChild(objBr3);
  objSpan.appendChild(objSpan_toolTipText_Title);
  //objSpan.appendChild(objBr3);
  objSpan.appendChild(objSpan_toolTipText);

  if (objTabFeature.isExtendedClass == true) {
    const objSpan_GetDdlDataFuncName_Title: HTMLSpanElement = document.createElement('span');
    const objSpan_GetDdlDataFuncName: HTMLSpanElement = document.createElement('span');
    if (objTabFeature.isForTypeScript == true) {
      objSpan_GetDdlDataFuncName_Title.setAttribute('class', 'text-info');
      objSpan_GetDdlDataFuncName_Title.innerHTML = Format('DdlData获取函数:');

      objSpan_GetDdlDataFuncName.setAttribute('class', 'text-secondary font-weight-bold');
      objSpan_GetDdlDataFuncName.innerHTML = Format(
        '{0}{2}_{1}',
        objPrjTab.tabName,
        objTabFeature.getDdlDataFuncName4Ex,
        strEx,
      );
    } else {
      objSpan_GetDdlDataFuncName_Title.innerHTML = Format('无DdlData获取函数:');
    }
    const objBr3: HTMLBRElement = document.createElement('br');
    objSpan.appendChild(objBr3);
    objSpan.appendChild(objSpan_GetDdlDataFuncName_Title);
    objSpan.appendChild(objSpan_GetDdlDataFuncName);
  }
  return objSpan;
}

export async function TabFeatureEx_GetLi_TabName4TabFeature(
  objTabFeature: clsvTabFeature_SimEN,
): Promise<HTMLLIElement> {
  const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
    objTabFeature.tabId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objPrjTab == null || IsNullOrEmpty(objPrjTab.tabName) == true) {
    throw '表名不能为空！(in .TabFeatureEx_GetLi_TabName4TabFeature())';
  }

  if (objTabFeature == null || IsNullOrEmpty(objTabFeature.tabFeatureName) == true) {
    throw '字段名不能为空！(in .TabFeatureEx_GetLi_TabName4TabFeature())';
  }

  const objLi: HTMLLIElement = document.createElement('li');
  objLi.setAttribute('class', 'text-primary');
  //objSpan.style.display = "inline-block";
  //objSpan.style.width = Format("150px");

  const objSpan_Title: HTMLSpanElement = document.createElement('span');

  objSpan_Title.setAttribute('class', 'text-primary');
  objSpan_Title.innerHTML = '表名:';

  const objSpan_TabName: HTMLSpanElement = document.createElement('span');

  objSpan_TabName.setAttribute('class', 'text-info font-weight-bold');
  objSpan_TabName.innerHTML = Format('{0}', objPrjTab.tabName);

  objLi.appendChild(objSpan_Title);

  objLi.appendChild(objSpan_TabName);
  return objLi;
}
export async function TabFeatureEx_GetSpan4FieldBak(
  objTabFeature: clsTabFeatureEN,
): Promise<HTMLSpanElement> {
  //const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(strTabFeatureId, strPrjId);
  if (objTabFeature == null || IsNullOrEmpty(objTabFeature.tabFeatureName) == true) {
    throw '字段名不能为空！';
  }
  const objSpan: HTMLSpanElement = document.createElement('span');
  objSpan.setAttribute('class', 'text-danger');
  objSpan.style.display = 'inline-block';
  //objSpan.style.width = Format("150px");

  objSpan.innerText = Format('{0}', objTabFeature.tabFeatureName);
  return objSpan;
  //objContainer.appendChild(objSpan);
}

export async function TabFeatureEx_GetFuncName(objTabFeature: clsvTabFeature_SimEN): Promise<any> {
  const strThisFuncName = 'GetFuncName';
  //const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(strTabFeatureId, strPrjId);
  if (objTabFeature == null || IsNullOrEmpty(objTabFeature.tabFeatureName) == true) {
    throw '字段名不能为空！';
  }
  const arrTabFeatureFlds = await vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
    objTabFeature.tabFeatureId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  const objTabFeatureFlds_Value = arrTabFeatureFlds.find(
    (x) => x.fieldTypeId == enumFieldType.KeyField_02,
  );
  let strFldId;
  let objvFieldTab_Sim;
  let objProject;
  let objFuncName;
  let objPrjFeature;
  let objvFieldTab_Sim2;
  let objProject2;
  let strMsg;
  switch (objTabFeature.featureId) {
    case enumPrjFeature.BindDdl_0152:
    case enumPrjFeature.Tab_BindDdl_0173:
      strFldId = '';
      if (objTabFeatureFlds_Value != null) {
        strFldId = objTabFeatureFlds_Value.fldId;
      }
      objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objProject = await Projects_GetObjByPrjIdCache(clsPrivateSessionStorage.currSelPrjId);
      if (objProject == null) {
        const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', objTabFeature.cmPrjId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      if (objvFieldTab_Sim == null) {
        const strMsg = Format(
          '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
          objProject.prjName,
          strFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objFuncName = {
        funcNameCs: Format('BindDdl_{0}', objvFieldTab_Sim.fldName),
        funcNameJs: Format('BindDdl_{0}Cache', objvFieldTab_Sim.fldName),
      };
      return objFuncName;
    case enumPrjFeature.Tab_AdjustOrderNum_0167:
      objFuncName = {
        funcNameCs: Format('AdjustOrderNum'),
        funcNameJs: Format('AdjustOrderNum'),
      };
      return objFuncName;
    case enumPrjFeature.Tab_SetFieldValue_0170:
      strFldId = '';
      if (objTabFeatureFlds_Value != null) {
        strFldId = objTabFeatureFlds_Value.fldId;
      }
      objvFieldTab_Sim2 = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objProject2 = await Projects_GetObjByPrjIdCache(clsPrivateSessionStorage.currSelPrjId);
      if (objProject2 == null) {
        const strMsg = Format('项目Id:[{0}]，没有相应的项目，请检查！', objTabFeature.cmPrjId);
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      if (objvFieldTab_Sim2 == null) {
        strMsg = Format(
          '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
          objProject2.prjName,
          strFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      objFuncName = {
        funcNameCs: Format('Set{0}', objvFieldTab_Sim2.fldName),
        funcNameJs: Format('Set{0}', objvFieldTab_Sim2.fldName),
      };
      return objFuncName;
    case enumPrjFeature.Tab_TransEvent_0172:
      objFuncName = {
        funcNameCs: Format('TransEvent'),
        funcNameJs: Format('TransEvent'),
      };
      return objFuncName;

    //break;
    default:
      objPrjFeature = await vPrjFeatureSim_GetObjByFeatureIdCache(objTabFeature.featureId);
      if (objPrjFeature == null) {
        const strMsg = Format(
          '功能:[{0}({1})], 功能名不存在，在switch中没有处理！(In {2}.{3})',
          '',
          objTabFeature.featureId,
          tabFeatureEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
      } else {
        const strMsg = Format(
          '功能:[{0}({1})]strCommandText:{0}在switch中没有处理！(In btnSubmit_Click())',
          objPrjFeature.featureName,
          objTabFeature.featureId,
          tabFeatureEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
      }
      break;
  }
}
export async function TabFeatureEx_CopyNodeToNewVersion(
  strTabFeatureId: string,
  strPrjId: string,
): Promise<boolean> {
  const objTabFeature = await TabFeature_GetObjByTabFeatureIdAsync(strTabFeatureId);
  if (objTabFeature == null) {
    const strMsg = Format('关键字:[{0}]的表功能不存在！', strTabFeatureId);
    throw new Error(strMsg);
  }
  objTabFeature.tabFeatureId = await TabFeature_GetMaxStrIdByPrefixAsync(strPrjId);
  objTabFeature.tabFeatureName = Format('C_{0}', objTabFeature.tabFeatureName);
  if (IsNullOrEmpty(objTabFeature.funcNameCs) == false)
    objTabFeature.funcNameCs = `C_${objTabFeature.funcNameCs}`;
  if (IsNullOrEmpty(objTabFeature.funcNameJs) == false)
    objTabFeature.funcNameJs = `C_${objTabFeature.funcNameJs}`;

  objTabFeature.tabFeatureName = Format('C_{0}', objTabFeature.tabFeatureName);

  objTabFeature.updDate = clsDateTime.getTodayDateTimeStr(1); // 修改日期
  objTabFeature.updUser = clsPubLocalStorage.userId; // 修改者
  const bolIsExist = await TabFeature_IsExistAsync(objTabFeature.tabFeatureId);
  if (bolIsExist == true) {
    const strMsg = Format('关键字:[{0}]的新表功能已经存在！', objTabFeature.tabFeatureId);
    throw new Error(strMsg);
  }
  try {
    TabFeature_CheckPropertyNew(objTabFeature);
  } catch (e: any) {
    const strMsg = `检查数据不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值，否则会出错！
  }
  try {
    const bolIsExist = await TabFeature_IsExistAsync(objTabFeature.tabFeatureId);

    if (bolIsExist == true) {
      const strMsg = `复制记录时，关键字：${objTabFeature.tabFeatureId}已经存在！`;
      console.error(strMsg);
      alert(strMsg);
      return bolIsExist; //一定要有一个返回值，否则会出错！
    }
    const returnBool = await TabFeature_AddNewRecordAsync(objTabFeature);

    if (returnBool == true) {
      vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
      const arrTabFeatureFlds = await TabFeatureFldsEx_GetObjLstByTabFeatureId(strTabFeatureId);
      for (const objTabFeatureFlds of arrTabFeatureFlds) {
        await TabFeatureFldsEx_CopyNodeToNewVersion(
          objTabFeatureFlds.mId,
          objTabFeature.tabFeatureId,
        );
      }
      const strInfo = `复制记录成功!`;
      //显示信息框
      alert(strInfo);
    } else {
      const strInfo = `复制记录不成功!`;
      //显示信息框
      alert(strInfo);
    }
    return returnBool; //一定要有一个返回值，否则会出错！
  } catch (e: any) {
    const strMsg = `复制记录不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值，否则会出错！
  }
}
/**
 * 生成绑定函数4CSharp
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabFeatureId: 表功能Id
 * @returns 获取的相应对象列表
 */
export async function TabFeatureEx_GC_DdlBindFunction4CSharp(
  strTabFeatureId: string,
): Promise<string> {
  const strThisFuncName = TabFeatureEx_GC_DdlBindFunction4CSharp.name;
  const strAction = 'GC_DdlBindFunction4CSharp';
  const strUrl = GetWebApiUrl(tabFeatureEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabFeatureId', strTabFeatureId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabFeatureId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        tabFeatureEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tabFeatureEx_ConstructorName,
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
 * 生成绑定函数4TypeScript
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabFeatureId: 表功能Id
 * @returns 获取的相应对象列表
 */
export async function TabFeatureEx_GC_DdlBindFunctionInDiv4TypeScript(
  strTabFeatureId: string,
): Promise<string> {
  const strThisFuncName = TabFeatureEx_GC_DdlBindFunctionInDiv4TypeScript.name;
  const strAction = 'GC_DdlBindFunctionInDiv4TypeScript';
  const strUrl = GetWebApiUrl(tabFeatureEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabFeatureId', strTabFeatureId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabFeatureId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        tabFeatureEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tabFeatureEx_ConstructorName,
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
 * 添加表功能
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strFeatureId: 功能Id
 * @param strPrjId: 工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function TabFeatureEx_AddTabFeature(
  strTabId: string,
  strFeatureId: string,
  strPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = TabFeatureEx_AddTabFeature.name;
  const strAction = 'AddTabFeature';
  const strUrl = GetWebApiUrl(tabFeatureEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strFeatureId', strFeatureId);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strFeatureId,
      strPrjId,
      strOpUserId,
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
        tabFeatureEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tabFeatureEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function TabFeatureEx_GetFuncNameJs(
  strTabFeatureId: string,
  strCmPrjId: string,
): Promise<string> {
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
    strTabFeatureId,
    strCmPrjId,
  );
  if (objTabFeature == null) return '';
  const arrTabFeatureFlds = await vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
    strTabFeatureId,
    strPrjId,
  );
  let intIndex = 1;
  // let bolIsCurrTab1 = false;
  // let bolIsCurrTab2 = false;
  let strFldIdCond1 = '';
  // let strFldIdCond2 = '';
  // let strDsSortFieldId = '';
  // let strDsDataTextFieldId = '';
  let strDsDataValueFieldId = '';
  for (const objTabFeatureFldsEN of arrTabFeatureFlds) {
    switch (objTabFeatureFldsEN.fieldTypeId) {
      case enumFieldType.ConditionField_16:
        if (intIndex == 1) {
          // bolIsCurrTab1 = objTabFeatureFldsEN.isCurrTab;
          strFldIdCond1 = objTabFeatureFldsEN.fldId;
          intIndex++;
        } else if (intIndex == 2) {
          // bolIsCurrTab2 = objTabFeatureFldsEN.isCurrTab;
          // strFldIdCond2 = objTabFeatureFldsEN.fldId;
          intIndex++;
        }
        break;
      case enumFieldType.SortField_06:
        // strDsSortFieldId = objTabFeatureFldsEN.fldId;
        break;
      case enumFieldType.NameField_03:
        // strDsDataTextFieldId = objTabFeatureFldsEN.fldId;
        break;
      case enumFieldType.KeyField_02:
        strDsDataValueFieldId = objTabFeatureFldsEN.fldId;
        break;
    }
  }

  let strFuncName = '';

  if (IsNullOrEmpty(strDsDataValueFieldId) == true) return '';
  const objvFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    strDsDataValueFieldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvFieldTab == null) return '';
  const strFldName = objvFieldTab.fldName;

  let strInDiv = '';
  if (objTabFeature.isForDiv == true) strInDiv = 'InDiv';
  let strByCondition = '';
  if (IsNullOrEmpty(strFldIdCond1) == false) {
    const objvFieldTab_Cond1 = await vFieldTab_Sim_GetObjByFldIdCache(
      strFldIdCond1,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvFieldTab_Cond1 != null) {
      const strFldNameCond1 = objvFieldTab_Cond1.fldName;
      strByCondition = Format('By{0}', strFldNameCond1);
    }
  }
  strFuncName = Format('BindDdl_{0}{1}{2}', strFldName, strByCondition, strInDiv);
  return strFuncName;
}

export async function TabFeatureEx_GetFuncNameCs(
  strTabFeatureId: string,
  strCmPrjId: string,
): Promise<string> {
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
    strTabFeatureId,
    strCmPrjId,
  );
  if (objTabFeature == null) return '';
  const arrTabFeatureFlds = await vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
    strTabFeatureId,
    strPrjId,
  );
  let intIndex = 1;
  // const bolIsCurrTab1 = false;
  // let bolIsCurrTab2 = false;
  let strFldIdCond1 = '';
  // let strFldIdCond2 = '';
  // let strDsSortFieldId = '';
  // let strDsDataTextFieldId = '';
  let strDsDataValueFieldId = '';
  for (const objTabFeatureFldsEN of arrTabFeatureFlds) {
    switch (objTabFeatureFldsEN.fieldTypeId) {
      case enumFieldType.ConditionField_16:
        if (intIndex == 1) {
          // bolIsCurrTab1 = objTabFeatureFldsEN.isCurrTab;
          //if (bolIsCurrTab1 == false) {
          //    const strTabId = "";
          //    await vFieldTab_SimEx_BindDdl_FldIdInDivCache(divEdit, "ddlFldIdCond1", strPrjId);
          //}
          strFldIdCond1 = objTabFeatureFldsEN.fldId;
          //ComboBox_EdtEx.fldIdCond1Bak = objTabFeatureFldsEN.fldId;
          intIndex++;
        } else if (intIndex == 2) {
          // bolIsCurrTab2 = objTabFeatureFldsEN.isCurrTab;
          //if (bolIsCurrTab2 == false) {
          //    const strTabId = "";
          //    await vFieldTab_SimEx_BindDdl_FldIdInDivCache(divEdit, "ddlFldIdCond2", strPrjId);
          //}
          // strFldIdCond2 = objTabFeatureFldsEN.fldId;
          //ComboBox_EdtEx.fldIdCond2Bak = objTabFeatureFldsEN.fldId;
          intIndex++;
        }
        break;
      case enumFieldType.SortField_06:
        // strDsSortFieldId = objTabFeatureFldsEN.fldId;
        //ComboBox_EdtEx.fldId_SortBak = objTabFeatureFldsEN.fldId;
        break;
      case enumFieldType.NameField_03:
        // strDsDataTextFieldId = objTabFeatureFldsEN.fldId;
        break;
      case enumFieldType.KeyField_02:
        strDsDataValueFieldId = objTabFeatureFldsEN.fldId;
        break;
    }
  }

  let strFuncName = '';

  if (IsNullOrEmpty(strDsDataValueFieldId) == true) return '';
  const objvFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    strDsDataValueFieldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvFieldTab == null) return '';
  const strFldName = objvFieldTab.fldName;

  let strByCondition = '';
  if (IsNullOrEmpty(strFldIdCond1) == false) {
    const objvFieldTab_Cond1 = await vFieldTab_Sim_GetObjByFldIdCache(
      strFldIdCond1,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvFieldTab_Cond1 != null) {
      const strFldNameCond1 = objvFieldTab_Cond1.fldName;
      strByCondition = Format('By{0}', strFldNameCond1);
    }
  }
  strFuncName = Format('BindDdl_{0}{1}', strFldName, strByCondition);
  //SetLabelHtmlByIdInDivObj(divEdit, "lblDefaFuncNameJs", strFuncName);
  return strFuncName;
}

export async function TabFeatureEx_GetTabFeatureName(
  strTabFeatureId: string,
  strCmPrjId: string,
): Promise<string> {
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const objTabFeature = await vTabFeature_SimEx_GetObjByTabFeatureIdCache(
    strTabFeatureId,
    strCmPrjId,
  );
  if (objTabFeature == null) return '';
  const arrTabFeatureFlds = await vTabFeatureFlds_SimEx_GetObjLstByTabFeatureIdCache(
    strTabFeatureId,
    strPrjId,
  );
  let intIndex = 1;
  // const bolIsCurrTab1 = false;
  // const bolIsCurrTab2 = false;
  let strFldIdCond1 = '';
  // const strFldIdCond2 = '';
  // const strDsSortFieldId = '';
  // const strDsDataTextFieldId = '';
  let strDsDataValueFieldId = '';
  for (const objTabFeatureFldsEN of arrTabFeatureFlds) {
    switch (objTabFeatureFldsEN.fieldTypeId) {
      case enumFieldType.ConditionField_16:
        if (intIndex == 1) {
          // bolIsCurrTab1 = objTabFeatureFldsEN.isCurrTab;
          strFldIdCond1 = objTabFeatureFldsEN.fldId;
          intIndex++;
        } else if (intIndex == 2) {
          // bolIsCurrTab2 = objTabFeatureFldsEN.isCurrTab;
          // strFldIdCond2 = objTabFeatureFldsEN.fldId;
          intIndex++;
        }
        break;
      case enumFieldType.SortField_06:
        // strDsSortFieldId = objTabFeatureFldsEN.fldId;
        break;
      case enumFieldType.NameField_03:
        // strDsDataTextFieldId = objTabFeatureFldsEN.fldId;
        break;
      case enumFieldType.KeyField_02:
        strDsDataValueFieldId = objTabFeatureFldsEN.fldId;
        break;
    }
  }

  // const strFuncName = '';

  if (IsNullOrEmpty(strDsDataValueFieldId) == true) return '';
  const objvFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    strDsDataValueFieldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvFieldTab == null) return '';
  const strFldName = objvFieldTab.fldName;

  let strByCondition = '';
  if (IsNullOrEmpty(strFldIdCond1) == false) {
    const objvFieldTab_Cond1 = await vFieldTab_Sim_GetObjByFldIdCache(
      strFldIdCond1,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvFieldTab_Cond1 != null) {
      const strFldNameCond1 = objvFieldTab_Cond1.fldName;
      strByCondition = Format('By{0}', strFldNameCond1);
    }
  }

  const strTabFeatureName = Format('绑定下拉框-{0}{1}', strFldName, strByCondition);
  return strTabFeatureName;
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
export function TabFeatureEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFeatureENEx.con_TabName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsTabFeatureENEx.con_FeatureName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsTabFeatureENEx.con_ParentFeatureName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.parentFeatureName.localeCompare(b.parentFeatureName);
        };
      case clsTabFeatureENEx.con_FuncModuleNameSim:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
        };
      case clsTabFeatureENEx.con_PrjName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsTabFeatureENEx.con_FuncNameJsEx:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.funcNameJsEx.localeCompare(b.funcNameJsEx);
        };
      case clsTabFeatureENEx.con_FuncNameCsEx:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.funcNameCsEx.localeCompare(b.funcNameCsEx);
        };
      default:
        return TabFeature_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsTabFeatureENEx.con_TabName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsTabFeatureENEx.con_FeatureName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsTabFeatureENEx.con_ParentFeatureName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.parentFeatureName.localeCompare(a.parentFeatureName);
        };
      case clsTabFeatureENEx.con_FuncModuleNameSim:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.funcModuleNameSim.localeCompare(a.funcModuleNameSim);
        };
      case clsTabFeatureENEx.con_PrjName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsTabFeatureENEx.con_FuncNameJsEx:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.funcNameJsEx.localeCompare(a.funcNameJsEx);
        };
      case clsTabFeatureENEx.con_FuncNameCsEx:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.funcNameCsEx.localeCompare(a.funcNameCsEx);
        };
      default:
        return TabFeature_SortFunByKey(strKey, AscOrDesc);
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
export function TabFeatureEx_FuncMapByFldName(
  strFldName: string,
  objTabFeatureEx: clsTabFeatureENEx,
) {
  const strThisFuncName = TabFeatureEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsTabFeatureEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsTabFeatureENEx.con_FuncNameCsEx:
      return TabFeatureEx_FuncMap_FuncNameCsEx(objTabFeatureEx);
    case clsTabFeatureENEx.con_FuncNameJsEx:
      return TabFeatureEx_FuncMap_FuncNameJsEx(objTabFeatureEx);
    case clsTabFeatureENEx.con_TabName:
      return TabFeatureEx_FuncMap_TabName(objTabFeatureEx);
    case clsTabFeatureENEx.con_FeatureName:
      return TabFeatureEx_FuncMap_FeatureName(objTabFeatureEx);
    case clsTabFeatureENEx.con_ParentFeatureName:
      return TabFeatureEx_FuncMap_ParentFeatureName(objTabFeatureEx);
    case clsTabFeatureENEx.con_FuncModuleNameSim:
      return TabFeatureEx_FuncMap_FuncModuleNameSim(objTabFeatureEx);
    case clsTabFeatureENEx.con_PrjName:
      return TabFeatureEx_FuncMap_PrjName(objTabFeatureEx);
    case clsTabFeatureENEx.con_ParentFeatureId:
      return TabFeatureEx_FuncMap_ParentFeatureId(objTabFeatureEx);
    case clsTabFeatureENEx.con_FldNames:
      return TabFeatureEx_FuncMapFldNames(objTabFeatureEx);
    case clsTabFeatureENEx.con_FuncNames:
      return TabFeatureEx_FuncMapFunctionNames(objTabFeatureEx);

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
 * @param objTabFeatureS:源对象
 **/
export async function TabFeatureEx_FuncMap_TabName(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objTabFeature.tabName) == true) {
      const vPrjTab_Sim_TabId = objTabFeature.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objTabFeature.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeatureEx_FuncMap_FeatureName(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMap_FeatureName.name;
  try {
    if (IsNullOrEmpty(objTabFeature.featureName) == true) {
      const PrjFeature_FeatureId = objTabFeature.featureId;
      const PrjFeature_FeatureName = await vPrjFeatureSim_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureName,
        PrjFeature_FeatureId,
      );
      objTabFeature.featureName = PrjFeature_FeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000096)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeatureEx_FuncMap_ParentFeatureName(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMap_ParentFeatureName.name;
  try {
    if (IsNullOrEmpty(objTabFeature.parentFeatureName) == true) {
      const PrjFeature_FeatureId = objTabFeature.featureId;
      const PrjFeature_ParentFeatureName = await vPrjFeatureSim_func(
        clsPrjFeatureEN.con_FeatureId,
        clsvPrjFeatureSimEN.con_ParentFeatureName,
        PrjFeature_FeatureId,
      );
      objTabFeature.parentFeatureName = PrjFeature_ParentFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000097)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeatureEx_FuncMap_FuncModuleNameSim(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMap_FuncModuleNameSim.name;
  try {
    if (IsNullOrEmpty(objTabFeature.funcModuleNameSim) == true) {
      const vPrjTab_Sim_TabId = objTabFeature.tabId;
      const vPrjTab_Sim_FuncModuleAgcId = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_FuncModuleAgcId,
        vPrjTab_Sim_TabId,
      );
      const FuncModule_Agc_FuncModuleAgcId = vPrjTab_Sim_FuncModuleAgcId;
      const FuncModule_Agc_FuncModuleNameSim = await FuncModule_Agc_func(
        clsFuncModule_AgcEN.con_FuncModuleAgcId,
        clsFuncModule_AgcEN.con_FuncModuleNameSim,
        FuncModule_Agc_FuncModuleAgcId,
        objTabFeature.prjId,
      );
      objTabFeature.funcModuleNameSim = FuncModule_Agc_FuncModuleNameSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000098)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeatureEx_FuncMap_PrjName(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMap_PrjName.name;
  try {
    if (IsNullOrEmpty(objTabFeature.prjName) == true) {
      const Projects_PrjId = objTabFeature.prjId;
      const Projects_PrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        Projects_PrjId,
      );
      objTabFeature.prjName = Projects_PrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeatureEx_FuncMap_FuncNameCsEx(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMap_FuncNameCsEx.name;
  try {
    if (IsNullOrEmpty(objTabFeature.funcNameCsEx) == true) {
      if (objTabFeature.isForCSharp == false) {
        objTabFeature.funcNameCsEx = Format(
          "<span class='text-warning' title='不需要Csharp的绑定函数'>不需要</span>",
        );
        //                    objPrjTab.primaryTypeNameEx = Format("<span class='text-primary' title='主键类型'>{0}</span><br/><span class='text-info' title='主键字段名'>{1}</span>", objPrjTab.primaryTypeName, objPrjTab.keyFldName);
      } else {
        if (IsNullOrEmpty(objTabFeature.funcNameCs) == true) {
          objTabFeature.funcNameCsEx = Format(
            "<span class='text-danger' title='需要Csharp的绑定函数'>需要,但没有设置！</span>",
          );
        } else {
          objTabFeature.funcNameCsEx = objTabFeature.funcNameCs;
        }
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function TabFeatureEx_FuncMap_FuncNameJsEx(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMap_PrjName.name;
  try {
    if (IsNullOrEmpty(objTabFeature.funcNameJsEx) == true) {
      if (objTabFeature.isForTypeScript == false) {
        objTabFeature.funcNameJsEx = Format(
          "<span class='text-warning' title='不需要TypeScript的绑定函数'>不需要</span>",
        );
        //                    objPrjTab.primaryTypeNameEx = Format("<span class='text-primary' title='主键类型'>{0}</span><br/><span class='text-info' title='主键字段名'>{1}</span>", objPrjTab.primaryTypeName, objPrjTab.keyFldName);
      } else {
        if (IsNullOrEmpty(objTabFeature.funcNameJs) == true) {
          objTabFeature.funcNameJsEx = Format(
            "<span class='text-danger' title='需要TypeScript的绑定函数'>需要,但没有设置！</span>",
          );
        } else {
          objTabFeature.funcNameJsEx = objTabFeature.funcNameJs;
        }
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function TabFeatureEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTabFeatureENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrTabFeatureObjLst = await TabFeature_GetObjLstByPagerAsync(objPagerPara);
  const arrTabFeatureExObjLst = arrTabFeatureObjLst.map(TabFeatureEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsTabFeatureEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrTabFeatureExObjLst) {
      await TabFeatureEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrTabFeatureExObjLst.length == 0) return arrTabFeatureExObjLst;
  let arrTabFeatureSel: Array<clsTabFeatureENEx> = arrTabFeatureExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTabFeatureSel = arrTabFeatureSel.sort(TabFeatureEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTabFeatureSel = arrTabFeatureSel.sort(objPagerPara.sortFun);
    }

    return arrTabFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabFeatureENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeatureEx_FuncMap_ParentFeatureId(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMap_ParentFeatureId.name;
  try {
    if (IsNullOrEmpty(objTabFeature.parentFeatureId) == true) {
      const PrjFeature_FeatureId = objTabFeature.featureId;
      const PrjFeature_ParentFeatureId = await vPrjFeatureSim_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_ParentFeatureId,
        PrjFeature_FeatureId,
      );
      objTabFeature.parentFeatureId = PrjFeature_ParentFeatureId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000167)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function TabFeatureEx_LogErrMsg(
  strTabFeatureId: string,
  strPrjId: string,
  strErrMsg: string,
): Promise<boolean> {
  const objTabFeature = await TabFeature_GetObjByTabFeatureIdAsync(strTabFeatureId);
  if (objTabFeature == null) {
    const strMsg = Format('关键字:[{0}]的表功能不存在！', strTabFeatureId);
    throw new Error(strMsg);
  }
  objTabFeature.SetErrMsg(strErrMsg);
  objTabFeature.SetPrjId(strPrjId);
  objTabFeature.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  objTabFeature.SetUpdUser(clsPubLocalStorage.userId); // 修改者

  try {
    let returnBool = await TabFeature_UpdateRecordAsync(objTabFeature);
    if (returnBool == false) {
      const strInfo = `记录表功能错误不成功!`;
      //显示信息框
      alert(strInfo);
      return false;
    }
    const objPrjTab = new clsPrjTabEN();
    objPrjTab.SetTabId(objTabFeature.tabId);
    objPrjTab.SetPrjId(objTabFeature.prjId);

    objPrjTab.SetErrMsg(strErrMsg);
    objPrjTab.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    objPrjTab.SetUpdUserId(clsPubLocalStorage.userId); // 修改者

    returnBool = await PrjTab_UpdateRecordAsync(objPrjTab);
    if (returnBool == false) {
      const strInfo = `记录表功能错误不成功!`;
      //显示信息框
      alert(strInfo);
      return false;
    }
    if (returnBool == true) {
      vTabFeature_Sim_ReFreshThisCache(clsPrivateSessionStorage.cmPrjId);
      vPrjTab_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);

      const strInfo = `记录表功能错误成功!`;
      //显示信息框
      alert(strInfo);
    }
    return returnBool; //一定要有一个返回值，否则会出错！
  } catch (e: any) {
    const strMsg = `记录表功能错误不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值，否则会出错！
  }
}
export async function TabFeatureEx_FuncMapFldNames(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMapFldNames.name;
  const tabFeatureFldsStore = useTabFeatureFldsStore();
  try {
    if (IsNullOrEmpty(objTabFeature.fldNames) == true) {
      const TabFeatureMenuId = objTabFeature.tabFeatureId;
      const arrFldNames = await tabFeatureFldsStore.getFldNameLstByTabFeatureIdWithType(
        TabFeatureMenuId,
      );
      const divFldNames = GetDiv_Empty('');
      for (const strFldName of arrFldNames) {
        if (strFldName == '') continue;
        const spnFld = GetSpan_Empty('text-secondary');
        spnFld.innerHTML = strFldName;
        const brEmpty = GetBr_Empty();
        divFldNames.appendChild(spnFld);
        divFldNames.appendChild(brEmpty);
      }
      objTabFeature.fldNames = divFldNames.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000486)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function TabFeatureEx_FuncMapFunctionNames(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeatureEx_FuncMapFunctionNames.name;
  try {
    if (IsNullOrEmpty(objTabFeature.funcNames) == true) {
      const divFldNames = GetDiv_Empty('');
      const brEmpty = GetBr_Empty();
      if (objTabFeature.funcNameCs != null && objTabFeature.funcNameCs.length > 0) {
        const spnFuncCs = GetSpan_Empty('text-secondary');
        const spnCsType = GetSpan_Empty('text-primary');
        spnCsType.innerHTML = 'Cs:';
        spnFuncCs.innerHTML = objTabFeature.funcNameCs;
        divFldNames.appendChild(spnCsType);
        divFldNames.appendChild(spnFuncCs);
        divFldNames.appendChild(brEmpty);
      }
      if (objTabFeature.funcNameJs != null && objTabFeature.funcNameJs.length > 0) {
        const spnFuncJs = GetSpan_Empty('text-secondary');
        const spnCsType = GetSpan_Empty('text-primary');
        spnCsType.innerHTML = 'Js:';
        spnFuncJs.innerHTML = objTabFeature.funcNameJs;
        divFldNames.appendChild(spnCsType);
        divFldNames.appendChild(spnFuncJs);
      }
      objTabFeature.funcNames = divFldNames.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000486)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeatureEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 检查表功能字段
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabFeatureId: 表功能Id
 * @param strPrjId: 工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function TabFeatureEx_CheckTabFeatureFld(
  strTabFeatureId: string,
  strPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = TabFeatureEx_CheckTabFeatureFld.name;
  const strAction = 'CheckTabFeatureFld';
  const strUrl = GetWebApiUrl(tabFeatureEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabFeatureId,
      strPrjId,
      strOpUserId,
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
        tabFeatureEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tabFeatureEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
