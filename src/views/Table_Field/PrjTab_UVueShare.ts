/**
 * 类名:PrjTab_UVueShare(界面:PrjTab_U,00050303)
 * 表名:PrjTab(00050009)
 * 版本:2025.05.03.1(服务器:PYF-AI)
 * 日期:2025/05/06 16:16:42
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';

import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refPrjTab_Detail = ref();
const refPrjTab_Edit2 = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjTab_Detail,
  refPrjTab_Edit2,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjTab_Detail,
  refPrjTab_Edit2,
};

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

export function PrjTab_DeleteKeyIdCache(strTabId: string): void {
  if (IsNullOrEmpty(strTabId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strTabId}`;
    delete Cache[cacheKey];
    return;
  }
}
