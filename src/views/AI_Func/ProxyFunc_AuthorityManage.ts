import { UserRoles_func } from '@/ts/L3ForWApi/AuthorityManage/clsUserRolesWApi';

export class ProxyClass_AuthorityManage {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'UserRoles_func':
        return UserRoles_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
