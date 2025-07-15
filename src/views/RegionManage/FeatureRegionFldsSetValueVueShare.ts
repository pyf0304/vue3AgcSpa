/**
 * 类名:FeatureRegionFldsVueShare(界面:FeatureRegionFldsCRUD,00050127)
 * 表名:FeatureRegionFlds(00050452)
 * 版本:2024.09.16.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/16 09:53:02
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { clsFeatureRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx';

const ascOrDesc4SortFun = ref('Asc');
const sortFeatureRegionFldsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFeatureRegionFldsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const RegionId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refDivFeatureButtonLst = ref();
const refFeatureRegionFlds_Edit_SetValue = ref();
const refDivLeftMenu = ref();
const refDivVisualEffects = ref();
const refDivLayoutTop = ref();

const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,

  refFeatureRegionFlds_Edit_SetValue,
  refDivFeatureButtonLst,
  refDivLeftMenu,
  refDivVisualEffects,
  refDivLayoutTop,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFeatureRegionFlds_Edit_SetValue,
  refDivFeatureButtonLst,
  refDivLeftMenu,
  refDivVisualEffects,
  refDivLayoutTop,
};

export const showErrorMessage = ref(false);
export const dataListFeatureRegionFlds = ref<Array<clsFeatureRegionFldsENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const ctlTypeId_q = ref('');
export const viewImplId_q = ref('');
export const inUse_q = ref(true);
const qryVarSet = reactive({
  ctlTypeId_q,
  viewImplId_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
export const groupName_f = ref('');
export const inUse_f = ref(true);
export const tabFeatureId_f = ref('');
export const regionId_f = ref('');
const featureVarSet = reactive({
  groupName_f,
  inUse_f,
  tabFeatureId_f,
  regionId_f,
});
export { featureVarSet };
