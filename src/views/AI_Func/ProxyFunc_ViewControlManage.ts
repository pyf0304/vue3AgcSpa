import { GenCtlStyle_func } from '@/ts/L3ForWApi/ViewControlManage/clsGenCtlStyleWApi';

export class ProxyClass_ViewControlManage {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'GenCtlStyle_func':
        return GenCtlStyle_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
