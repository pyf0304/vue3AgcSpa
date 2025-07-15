import { CMClass_func } from '@/ts/L3ForWApi/CodeMan/clsCMClassWApi';
import { CMFeatureType_func } from '@/ts/L3ForWApi/CodeMan/clsCMFeatureTypeWApi';
import { CMFeature_func } from '@/ts/L3ForWApi/CodeMan/clsCMFeatureWApi';
import { CMFunction_func } from '@/ts/L3ForWApi/CodeMan/clsCMFunctionWApi';
import { CMProject_func } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { CMRequirementType_func } from '@/ts/L3ForWApi/CodeMan/clsCMRequirementTypeWApi';

export class ProxyClass_CodeMan {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'CMRequirementType_func':
        return CMRequirementType_func;
      case 'CMClass_func':
        return CMClass_func;
      case 'CMFunction_func':
        return CMFunction_func;
      case 'CMProject_func':
        return CMProject_func;
      case 'CMFeature_func':
        return CMFeature_func;
      case 'CMFeatureType_func':
        return CMFeatureType_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
