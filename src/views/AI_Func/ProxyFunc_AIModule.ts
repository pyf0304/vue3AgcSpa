import { AssociationMapping_func } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
import { DataNodeType_func } from '@/ts/L3ForWApi/AIModule/clsDataNodeTypeWApi';

import { DnFunction_func } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
import { FuncMapMode_func } from '@/ts/L3ForWApi/AIModule/clsFuncMapModeWApi';

export class ProxyClass_AIModule {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      // case 'DataNodefunc':
      //   return DataNode_func;
      case 'DataNodeType_func':
        return DataNodeType_func;
      case 'AssociationMapping_func':
        return AssociationMapping_func;
      case 'FuncMapMode_func':
        return FuncMapMode_func;
      case 'DnFunction_func':
        return DnFunction_func;

      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
