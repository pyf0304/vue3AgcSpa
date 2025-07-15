import { ErrorLevel_func } from '@/ts/L3ForWApi/LogManage/clsErrorLevelWApi';
import { TabCheckErrorType_func } from '@/ts/L3ForWApi/LogManage/clsTabCheckErrorTypeWApi';

export class ProxyClass_LogManage {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'ErrorLevel_func':
        return ErrorLevel_func;
      case 'TabCheckErrorType_func':
        return TabCheckErrorType_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
