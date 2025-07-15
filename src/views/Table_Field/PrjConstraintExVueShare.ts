/**
 * 类名:PrjConstraintVueShare(界面:PrjConstraintCRUD,00050172)
 * 表名:PrjConstraint(00050331)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/06 10:39:28
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { Format } from '@/ts/PubFun/clsString';
import { clsPrjConstraintEN } from '@/ts/L0Entity/Table_Field/clsPrjConstraintEN';

import {
  constraintName_q,
  constraintTypeId_q,
  inUse_q,
} from '@/views/Table_Field/PrjConstraintVueShare';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjConstraintConditionEx = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const tabId = clsPrivateSessionStorage.tabId_Main;
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  strWhereCond += ` and ${clsPrjConstraintEN.con_TabId} = ${tabId}`;

  try {
    if (constraintName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjConstraintEN.con_ConstraintName,
        constraintName_q.value,
      );
    }
    if (constraintTypeId_q.value != '' && constraintTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjConstraintEN.con_ConstraintTypeId,
        constraintTypeId_q.value,
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsPrjConstraintEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsPrjConstraintEN.con_InUse);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombinePrjConstraintCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};
