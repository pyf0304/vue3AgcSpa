import { PageDispMode_func } from '@/ts/L3ForWApi/PrjMenu/clsPageDispModeWApi';

export class ProxyClass_PrjMenu {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'PageDispMode_func':
        return PageDispMode_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
