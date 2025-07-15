import { reactive, ref } from 'vue';

const ascOrDesc4SortFun = ref('Asc');
const sortPrjConstraintBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortPrjConstraintBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

export const codeTypeId = ref('');

const refDivLayout = ref();

const divVarSet = reactive({
  refDivLayout,
});
export { divVarSet, refDivLayout };

//查询区变量定义

export const constraintTypeId_q = ref('');
export const inUse_q = ref(true);
const qryVarSet = reactive({
  constraintTypeId_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };
