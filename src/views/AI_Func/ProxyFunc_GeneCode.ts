import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { CodeFunction_func } from '@/ts/L3ForWApi/GeneCode/clsCodeFunctionWApi';
import { CodeLocation_func } from '@/ts/L3ForWApi/GeneCode/clsCodeLocationWApi';
import { CodePara_func } from '@/ts/L3ForWApi/GeneCode/clsCodeParaWApi';
import { CodeSegment_func } from '@/ts/L3ForWApi/GeneCode/clsCodeSegmentWApi';

import { DictType4GC_func } from '@/ts/L3ForWApi/GeneCode/clsDictType4GCWApi';
import { GCContainerType_func } from '@/ts/L3ForWApi/GeneCode/clsGCContainerTypeWApi';
import { GCKeyIdGetMode_func } from '@/ts/L3ForWApi/GeneCode/clsGCKeyIdGetModeWApi';
import { GCPath_func } from '@/ts/L3ForWApi/GeneCode/clsGCPathWApi';
import { GCVariableType_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import { GCVariable_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { ReferFiles_func } from '@/ts/L3ForWApi/GeneCode/clsReferFilesWApi';
import { ReferFileType_func } from '@/ts/L3ForWApi/GeneCode/clsReferFileTypeWApi';
import { SelfDefDataType_func } from '@/ts/L3ForWApi/GeneCode/clsSelfDefDataTypeWApi';
import { ValueGivingMode_func } from '@/ts/L3ForWApi/GeneCode/clsValueGivingModeWApi';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { ViewDesign_func } from '@/ts/L3ForWApi/GeneCode/clsViewDesignWApi';
import { WebSrvClass_func } from '@/ts/L3ForWApi/GeneCode/clsWebSrvClassWApi';
import { WebSrvFunctions_func } from '@/ts/L3ForWApi/GeneCode/clsWebSrvFunctionsWApi';

export class ProxyClass_GeneCode {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'ApplicationType_func':
        return ApplicationType_func;
      case 'vCodeType_Sim_func':
        return vCodeType_Sim_func;
      case 'WebSrvFunctions_func':
        return WebSrvFunctions_func;
      case 'WebSrvClass_func':
        return WebSrvClass_func;
      case 'SelfDefDataType_func':
        return SelfDefDataType_func;
      case 'DictType4GC_func':
        return DictType4GC_func;
      case 'ViewDesign_func':
        return ViewDesign_func;
      case 'CodeSegment_func':
        return CodeSegment_func;
      case 'CodePara_func':
        return CodePara_func;
      case 'CodeLocation_func':
        return CodeLocation_func;
      case 'CodeFunction_func':
        return CodeFunction_func;
      case 'ReferFiles_func':
        return ReferFiles_func;
      case 'ValueGivingMode_func':
        return ValueGivingMode_func;
      case 'ReferFileType_func':
        return ReferFileType_func;
      case 'GCVariable_func':
        return GCVariable_func;
      case 'GCVariableType_func':
        return GCVariableType_func;
      case 'GCKeyIdGetMode_func':
        return GCKeyIdGetMode_func;
      case 'GCContainerType_func':
        return GCContainerType_func;
      case 'GCPath_func':
        return GCPath_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
