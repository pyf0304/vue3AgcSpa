import { FuncModule_Agc_func } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { PrjDataBase_func } from '@/ts/L3ForWApi/PrjManage/clsPrjDataBaseWApi';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { SoftStructure_func } from '@/ts/L3ForWApi/PrjManage/clsSoftStructureWApi';
import { vFuncModuleTabNum_func } from '@/ts/L3ForWApi/PrjManage/clsvFuncModuleTabNumWApi';
import { vFuncModuleViewNum_func } from '@/ts/L3ForWApi/PrjManage/clsvFuncModuleViewNumWApi';

export class ProxyClass_PrjManage {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'Projects_func':
        return Projects_func;
      case 'FuncModule_Agc_func':
        return FuncModule_Agc_func;
      case 'PrjDataBase_func':
        return PrjDataBase_func;
      case 'SoftStructure_func':
        return SoftStructure_func;
      case 'vFuncModuleTabNum_func':
        return vFuncModuleTabNum_func;
      case 'vFuncModuleViewNum_func':
        return vFuncModuleViewNum_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
