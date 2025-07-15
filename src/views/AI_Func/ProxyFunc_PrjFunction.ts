import { ButtonTab_func } from '@/ts/L3ForWApi/PrjFunction/clsButtonTabWApi';

import { FunctionTemplate_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
import { FunctionType_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTypeWApi';
import { MethodModifier_func } from '@/ts/L3ForWApi/PrjFunction/clsMethodModifierWApi';
import { PrjFeatureType_func } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureTypeWApi';

import { vFunctionTemplateRela_Sim_func } from '@/ts/L3ForWApi/PrjFunction/clsvFunctionTemplateRela_SimWApi';
import { vPrjFeatureSim_func } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import { vFunction4GeneCode_SimEx_func } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4GeneCode_SimExWApi';

export class ProxyClass_PrjFunction {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'FunctionType_func':
        return FunctionType_func;
      case 'Function4GeneCode_func':
        return vFunction4GeneCode_SimEx_func;

      case 'FunctionTemplate_func':
        return FunctionTemplate_func;
      case 'vPrjFeatureSim_func':
        return vPrjFeatureSim_func;
      case 'PrjFeatureType_func':
        return PrjFeatureType_func;
      case 'ButtonTab_func':
        return ButtonTab_func;
      case 'MethodModifier_func':
        return MethodModifier_func;

      case 'vFunctionTemplateRela_Sim_func':
        return vFunctionTemplateRela_Sim_func;
      case 'vFunction4GeneCode_SimEx_func':
        return vFunction4GeneCode_SimEx_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
