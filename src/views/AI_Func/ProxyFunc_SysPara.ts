import { AppPageType_func } from '@/ts/L3ForWApi/SysPara/clsAppPageTypeWApi';
import { ButtonStyle_func } from '@/ts/L3ForWApi/SysPara/clsButtonStyleWApi';
import { CharEncoding_func } from '@/ts/L3ForWApi/SysPara/clsCharEncodingWApi';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { InOutType_func } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { UseState_func } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';

export class ProxyClass_SysPara {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    console.log(option);
    switch (funcName) {
      case 'DataTypeAbbr_func':
        return DataTypeAbbr_func;
      case 'ButtonStyle_func':
        return ButtonStyle_func;
      case 'InOutType_func':
        return InOutType_func;
      case 'UseState_func':
        return UseState_func;
      case 'CharEncoding_func':
        return CharEncoding_func;
      case 'ProgLangType_func':
        return ProgLangType_func;
      case 'AppPageType_func':
        return AppPageType_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
