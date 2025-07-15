import { SqlViewRelaTab_func } from '@/ts/L3ForWApi/SqlViewMan/clsSqlViewRelaTabWApi';

export class ProxyClass_SqlViewMan {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'SqlViewRelaTab_func':
        return SqlViewRelaTab_func;
      default:
        console.warn(`未找到 funcName：${funcName} 对应实现`);
        throw `未找到 funcName：${funcName} 对应实现`;
    }
  }
}
