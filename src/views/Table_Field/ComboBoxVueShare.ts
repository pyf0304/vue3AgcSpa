import { reactive, ref } from 'vue';

const ascOrDesc4SortFun = ref('Asc');
const sortTabFeatureBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortTabFeatureBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const DsTabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refTabFeature_Edit = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refTabFeature_Edit,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refTabFeature_Edit,
};

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };
