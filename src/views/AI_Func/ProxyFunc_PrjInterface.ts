import { CtlType_func } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { DataGridStyle_func } from '@/ts/L3ForWApi/PrjInterface/clsDataGridStyleWApi';
import { DDLItemsOption_func } from '@/ts/L3ForWApi/PrjInterface/clsDDLItemsOptionWApi';
import { DgFuncType_func } from '@/ts/L3ForWApi/PrjInterface/clsDgFuncTypeWApi';
import { QueryOption_func } from '@/ts/L3ForWApi/PrjInterface/clsQueryOptionWApi';
import { SQLDSType_func } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
import { ViewGroup_func } from '@/ts/L3ForWApi/PrjInterface/clsViewGroupWApi';
import { ViewImplementation_func } from '@/ts/L3ForWApi/PrjInterface/clsViewImplementationWApi';

import { ViewTabType_func } from '@/ts/L3ForWApi/PrjInterface/clsViewTabTypeWApi';
import { ViewTypeCodeTab_func } from '@/ts/L3ForWApi/PrjInterface/clsViewTypeCodeTabWApi';

export class ProxyClass_PrjInterface {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'DataGridStyle_func':
        return DataGridStyle_func;

      case 'SQLDSType_func':
        return SQLDSType_func;
      case 'CtlType_func':
        return CtlType_func;
      case 'DDLItemsOption_func':
        return DDLItemsOption_func;
      case 'QueryOption_func':
        return QueryOption_func;
      case 'ViewTabType_func':
        return ViewTabType_func;
      case 'ViewTypeCodeTab_func':
        return ViewTypeCodeTab_func;
      case 'DgFuncType_func':
        return DgFuncType_func;
      case 'ViewGroup_func':
        return ViewGroup_func;
      case 'ViewImplementation_func':
        return ViewImplementation_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
