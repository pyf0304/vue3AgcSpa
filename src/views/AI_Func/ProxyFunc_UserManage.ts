import { Users_func } from '@/ts/L3ForWApi/UserManage/clsUsersWApi';

export class ProxyClass_UserManage {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'Users_func':
        return Users_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
