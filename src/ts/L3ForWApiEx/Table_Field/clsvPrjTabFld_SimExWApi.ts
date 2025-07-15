import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';
import { clsvPrjTabFld_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTabFld_SimEN';
import { clsvPrjTabFld_SimENEx } from '@/ts/L0Entity/Table_Field/clsvPrjTabFld_SimENEx';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { vFieldTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
export const vPrjTabFld_SimEx_Controller = 'vPrjTabFld_SimExApi';
export const vPrjTabFld_SimEx_ConstructorName = 'vPrjTabFld_SimEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvPrjTabFld_SimENS:源对象
 * @returns 目标对象=>clsvPrjTabFld_SimEN:objvPrjTabFld_SimENT
 */
export function vPrjTabFld_SimEx_CopyToEx(
  objvPrjTabFld_SimENS: clsvPrjTabFld_SimEN,
): clsvPrjTabFld_SimENEx {
  const objvPrjTabFld_SimENT = new clsvPrjTabFld_SimENEx();
  try {
    ObjectAssign(objvPrjTabFld_SimENT, objvPrjTabFld_SimENS);
    return objvPrjTabFld_SimENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objvPrjTabFld_SimENT;
  }
}

export function vPrjTabFld_SimEx_SortFunBySequenceNumber(
  a: clsvPrjTabFld_SimEN,
  b: clsvPrjTabFld_SimEN,
): number {
  return a.sequenceNumber - b.sequenceNumber;
}
/// <summary>
/// 把一个扩展类的部分属性进行函数转换
/// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
/// </summary>
/// <param name = "objvPrjTabFld_SimS">源对象</param>
export async function FuncMap(objvPrjTabFld_Sim: clsvPrjTabFld_SimENEx) {
  try {
    {
      const FieldTab_FldId = objvPrjTabFld_Sim.fldId;
      const FieldTab_FldName = await vFieldTab_SimEx_func(
        clsFieldTabEN.con_FldId,
        clsFieldTabEN.con_FldName,
        FieldTab_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objvPrjTabFld_Sim.fldName = FieldTab_FldName;
    }
    //{
    //    const FieldType_FieldTypeId = objvPrjTabFld_Sim.fieldTypeId;
    //    const FieldType_FieldTypeName = await FieldType_func(clsFieldTypeEN.con_FieldTypeId, clsFieldTypeEN.con_FieldTypeName, FieldType_FieldTypeId);
    //    objvPrjTabFld_Sim.fieldTypeName = FieldType_FieldTypeName;
    //};
    //{
    //    const objvPrjTabFld_Sim_PrimaryTypeId = objvPrjTabFld_Sim.primaryTypeId;
    //    const PrimaryType_PrimaryTypeName = await PrimaryType_func(clsPrimaryTypeEN.con_PrimaryTypeId, clsPrimaryTypeEN.con_PrimaryTypeName, objvPrjTabFld_Sim_PrimaryTypeId);
    //    objvPrjTabFld_Sim.PrimaryTypeName = PrimaryType_PrimaryTypeName;
    //};
    //{
    //    const FieldTab_FldId = objvPrjTabFld_Sim.fldId;
    //    const FieldTab_Caption = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_Caption, FieldTab_FldId, clsPrivateSessionStorage.cmPrjId);
    //    objvPrjTabFld_Sim.caption = FieldTab_Caption;
    //};
    //{
    //    const FieldTab_FldId = objvPrjTabFld_Sim.fldId;
    //    const FieldTab_DataTypeId = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_DataTypeId, FieldTab_FldId, clsPrivateSessionStorage.cmPrjId);
    //    const DataTypeAbbr_DataTypeId = FieldTab_DataTypeId;
    //    const DataTypeAbbr_DataTypeName = await DataTypeAbbr_func(clsDataTypeAbbrEN.con_DataTypeId, clsDataTypeAbbrEN.con_DataTypeName, DataTypeAbbr_DataTypeId);
    //    objvPrjTabFld_Sim.dataTypeName = DataTypeAbbr_DataTypeName;
    //};
    //{
    //    const FieldTab_FldId = objvPrjTabFld_Sim.fldId;
    //    const FieldTab_FldLength = await vFieldTab_SimEx_func(clsFieldTabEN.con_FldId, clsFieldTabEN.con_FldLength, FieldTab_FldId, clsPrivateSessionStorage.cmPrjId);
    //    objvPrjTabFld_Sim.fldLength = FieldTab_FldLength;
    //};
  } catch (e: any) {
    const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据FldId和FldTypeId获取相关的对象列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strFldId: 字段Id
 * @param strFldTypeId: 字段类型Id
 * @returns 获取的相应对象列表
 */
export async function vPrjTabFld_SimEx_getObjLstByFldIdAndFldType(
  strFldId: string,
  strFldTypeId: string,
): Promise<Array<clsvPrjTabFld_SimEN>> {
  const strThisFuncName = vPrjTabFld_SimEx_getObjLstByFldIdAndFldType.name;
  const strAction = 'getObjLstByFldIdAndFldType';
  const strUrl = GetWebApiUrl(vPrjTabFld_SimEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldId,
      strFldTypeId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      //console.log(returnObjLst);
      return returnObjLst;
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
        vPrjTabFld_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vPrjTabFld_SimEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
