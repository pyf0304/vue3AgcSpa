import { UserCodePrjMainPath_func } from '@/ts/L3ForWApi/SystemSet/clsUserCodePrjMainPathWApi';

export class ProxyClass_SystemSet {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'UserCodePrjMainPath_func':
        return UserCodePrjMainPath_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
