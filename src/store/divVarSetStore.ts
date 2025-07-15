// store/divVarSet.ts
import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useDivVarSetStore = defineStore('divVarSet', () => {
  const refDivLayout = ref();
  const refDivQuery = ref();
  const refDivFunction = ref();
  const refDivList = ref();

  const divVarSet = reactive({
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  });

  return {
    divVarSet,
  };
});
