import { CMProject_GetNameByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import {
  UserPrjGrantEx_GetFirstObjByUserId,
  UserPrjGrantEx_GetUserLoginInfoByUserId,
} from '@/ts/L3ForWApiEx/AuthorityManage/clsUserPrjGrantExWApi';
import { CMProjectEx_AddDefaCmProject } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import {
  UserDefaValue_LocalEx_getUserDefaValue,
  UserDefaValue_LocalEx_setUserDefaValue,
} from '@/ts/L3ForWApiEx/UserManage/clsUserDefaValue_LocalExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubVar } from '@/ts/PubConfig/clsPubVar';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const usersEx_Controller = 'UsersExApi';
export const usersEx_ConstructorName = 'usersEx';
export async function UserEx_GetUserDefaValue(): Promise<boolean> {
  const strCurrPrjId = clsPubVar.currPrjId;
  //获取当前选择工程
  let strCurrSelPrjId = await UserDefaValue_LocalEx_getUserDefaValue(
    strCurrPrjId,
    'null',
    clsPubLocalStorage.userId,
    '默认选择工程',
  );
  if (IsNullOrEmpty(strCurrSelPrjId) || strCurrSelPrjId == '0') {
    const objUserPrjGrantEN = await UserPrjGrantEx_GetFirstObjByUserId(clsPubLocalStorage.userId);

    if (objUserPrjGrantEN != null) {
      strCurrSelPrjId = objUserPrjGrantEN.prjId;
      await UserDefaValue_LocalEx_setUserDefaValue(
        strCurrPrjId,
        'null',
        clsPubLocalStorage.userId,
        '默认选择工程',
        strCurrSelPrjId,
      );
    } else {
      const strMsg = Format(
        '在工程:[{0}({1})]获取默认选择工程不成功，请检查!',
        clsPrivateSessionStorage.currSelPrjName,
        clsPrivateSessionStorage.currSelPrjId,
      );
      console.error(strMsg);
      alert(strMsg);
      return true;
    }
  }

  clsPrivateSessionStorage.currPrjId = strCurrPrjId;
  clsPrivateSessionStorage.currSelPrjId = strCurrSelPrjId;

  let strCmPrjId = await UserDefaValue_LocalEx_getUserDefaValue(
    strCurrPrjId,
    clsPrivateSessionStorage.currSelPrjId,
    clsPubLocalStorage.userId,
    '默认CM工程',
  );
  if (IsNullOrEmpty(strCmPrjId) || strCmPrjId == '0') {
    strCmPrjId = await CMProjectEx_AddDefaCmProject(
      clsPrivateSessionStorage.currSelPrjId,
      clsPrivateSessionStorage.currSelPrjName,
      clsPubLocalStorage.userId,
    );
    if (IsNullOrEmpty(strCmPrjId) == false) {
      await UserDefaValue_LocalEx_setUserDefaValue(
        strCurrPrjId,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
        '默认CM工程',
        strCmPrjId,
      );
    } else {
      const strMsg = Format(
        '在工程:[{0}({1})]新建Cm默认工程不成功，请检查!',
        clsPrivateSessionStorage.currSelPrjName,
        clsPrivateSessionStorage.currSelPrjId,
      );
      console.error(strMsg);
      alert(strMsg);
      return true;
    }
  }
  clsPrivateSessionStorage.cmPrjId = strCmPrjId;

  const strCmPrjName = await CMProject_GetNameByCmPrjIdCache(strCmPrjId);
  clsPrivateSessionStorage.cmPrjName = strCmPrjName;
  console.log('cmPrjId:', strCmPrjId);

  const strUserId = clsPubLocalStorage.userId;
  console.log(strUserId);

  // const strCondition_PrjId = `prjId='${clsPrivateSessionStorage.currSelPrjId}'`;
  await UserEx_SelectRecordByUserId(strUserId, strCurrSelPrjId);
  // strCurrUserRoleId = clsPubLocalStorage.roleId; // clsPubconst. "00000001";

  return true;
}

/* 
    根据关键字选择相应的记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
     <param name = "sender">参数列表</param>
   */
export async function UserEx_SelectRecordByUserId(strUserId: string, strPrjId: string) {
  // console.log('strUrl_Session_SetString:', strUrl_Session_SetString);
  try {
    const objUserLoginInfo = await UserPrjGrantEx_GetUserLoginInfoByUserId(strUserId, strPrjId);
    if (objUserLoginInfo != null) {
      //const objUserLoginInfo: stuUserLoginInfo = <stuUserLoginInfo>jsonData;
      console.log(objUserLoginInfo);
      clsPrivateSessionStorage.currSelPrjId = objUserLoginInfo.currSelPrjId;
      clsPrivateSessionStorage.currSelPrjName = objUserLoginInfo.currSelPrjName;

      clsPrivateSessionStorage.currPrjDataBaseId = objUserLoginInfo.currPrjDataBaseId;
      clsPrivateSessionStorage.prjDataBaseName = objUserLoginInfo.prjDataBaseName;
      clsPubSessionStorage.currDataBaseTypeId = objUserLoginInfo.currDataBaseTypeId;

      clsPubLocalStorage.roleId = objUserLoginInfo.roleId;
      clsPubLocalStorage.roleName = objUserLoginInfo.roleName;

      clsPubLocalStorage.userId = objUserLoginInfo.userId;
      clsPubLocalStorage.userName = objUserLoginInfo.userName;
      // const strJson = JSON.stringify(objUserLoginInfo);
      // this.SetSessionAsync('objUserLoginInfo', strJson);
      console.log('完成用户权限、当前数据库、当前子工程的设置!');
      // Redirect('/FrameAdmin/MainIndex1');
    }
  } catch (e: any) {
    console.error(e);
    const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
    alert(strMsg);
  }
}
