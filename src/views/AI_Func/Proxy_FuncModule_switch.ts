//import { AClass } from './AClass';
//import { BClass } from './BClass';
//import { CClass } from './CClass';
//import { ClassStorage } from './ClassStorage';

import { ProxyClass_AIModule } from './ProxyFunc_AIModule';
import { ProxyClass_AuthorityManage } from './ProxyFunc_AuthorityManage';
import { ProxyClass_SqlViewMan } from './ProxyFunc_CodeMan';
import { ProxyClass_GeneCode } from './ProxyFunc_GeneCode';
//import { ProxyClass_GeneCSharp } from './ProxyFunc_GeneCSharp';
import { ProxyClass_LogManage } from './ProxyFunc_LogManage';
import { ProxyClass_PrjFunction } from './ProxyFunc_PrjFunction';
import { ProxyClass_PrjInterface } from './ProxyFunc_PrjInterface';
import { ProxyClass_PrjManage } from './ProxyFunc_PrjManage';
import { ProxyClass_PrjMenu } from './ProxyFunc_PrjMenu';
import { ProxyClass_RegionManage } from './ProxyFunc_RegionManage';
import { ProxyClass_CodeMan } from './ProxyFunc_SqlViewMan';
import { ProxyClass_SysPara } from './ProxyFunc_SysPara';
import { ProxyClass_SystemSet } from './ProxyFunc_SystemSet';
import { ProxyClass_Table_Field } from './ProxyFunc_Table_Field';
import { ProxyClass_UserManage } from './ProxyFunc_UserManage';
import { ProxyClass_ViewControlManage } from './ProxyFunc_ViewControlManage';

import { GCVariable_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { ViewRegionRelaEx_func4Lst } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';

export class Proxy_FuncModule_switch {
  /**
   * 代理构建方法
   * @param className 动态类名称
   * @param option 动态类创建参数
   */
  static getClass(className: string, option?: any) {
    //一个简单的异常判断，如果存储类中不存在此类 则抛出异常提醒
    console.log(option);
    switch (className) {
      //case AClass.className:
      //    return new AClass();
      //case BClass.className:
      //    return new BClass();
      //case CClass.className:
      //    return new CClass();
      default:
        console.warn(`未找到 className：${className} 对应实现`);
        throw `未找到 className：${className} 对应实现`;
    }
    //从存放对象上找出对应class 创建即可
    //return new (ClassStorage[className])(option)
  }

  static getFunctionBak(funcName: string, option?: any) {
    console.log(option);
    //一个简单的异常判断，如果存储类中不存在此类 则抛出异常提醒

    switch (funcName) {
      case 'ViewRegionRelaEx_func4Lst':
        return ViewRegionRelaEx_func4Lst;
      // case 'DataNode_func':
      //   return DataNode_func;
      case 'GCVariable_func':
        return GCVariable_func;

      //case "Add1":
      //    return Add1;
      //case "Minus1":
      //    return Minus1;
      default:
        console.warn(`未找到 funcName：${funcName} 对应实现`);
        throw `未找到 funcName：${funcName} 对应实现`;
    }
    //从存放对象上找出对应class 创建即可
    //return new (ClassStorage[className])(option)
  }
  static getProxyClass1(funcModuleName: string, option?: any) {
    //一个简单的异常判断，如果存储类中不存在此类 则抛出异常提醒
    console.log(option);
    switch (funcModuleName) {
      case 'Proxy_Table_Field':
        return ViewRegionRelaEx_func4Lst;
      // case 'DataNode_func':
      //   return DataNode_func;
      case 'GCVariable_func':
        return GCVariable_func;

      //case "Add1":
      //    return Add1;
      //case "Minus1":
      //    return Minus1;
      default:
        console.warn(`未找到 funcModuleName：${funcModuleName} 对应实现`);
        throw `未找到 funcModuleName：${funcModuleName} 对应实现`;
    }
    //从存放对象上找出对应class 创建即可
    //return new (ClassStorage[className])(option)
  }

  //static checkValidClass(className: string) {
  //    一个简单的异常判断，如果存储类中不存在此类 则抛出异常提醒
  //    if (ClassStorage[className] === undefined || ClassStorage[className] === null) {
  //        return null;
  //    }
  //    从存放对象上找出对应class 创建即可
  //    return className
  //}

  static getProxyClass_0005(funcModuleName: string, option?: any) {
    console.log(option);
    switch (funcModuleName) {
      case 'Proxy_Table_Field':
        return ProxyClass_Table_Field;
      case 'Proxy_PrjInterface':
        return ProxyClass_PrjInterface;
      case 'Proxy_PrjMenu':
        return ProxyClass_PrjMenu;
      //case "Proxy_GeneCSharp":
      //    return ProxyClass_GeneCSharp;
      case 'Proxy_PrjFunction':
        return ProxyClass_PrjFunction;
      case 'Proxy_SystemSet':
        return ProxyClass_SystemSet;
      case 'Proxy_PrjManage':
        return ProxyClass_PrjManage;
      case 'Proxy_SysPara':
        return ProxyClass_SysPara;
      case 'Proxy_LogManage':
        return ProxyClass_LogManage;
      case 'Proxy_GeneCode':
        return ProxyClass_GeneCode;
      case 'Proxy_UserManage':
        return ProxyClass_UserManage;
      case 'Proxy_RegionManage':
        return ProxyClass_RegionManage;
      case 'Proxy_ViewControlManage':
        return ProxyClass_ViewControlManage;
      case 'Proxy_AuthorityManage':
        return ProxyClass_AuthorityManage;
      case 'Proxy_CodeMan':
        return ProxyClass_CodeMan;
      case 'Proxy_SqlViewMan':
        return ProxyClass_SqlViewMan;
      case 'Proxy_AIModule':
        return ProxyClass_AIModule;
      default:
        console.warn(`未找到 funcModuleName：${funcModuleName}                          对应实现`);
        throw `未找到 funcModuleName：${funcModuleName}                对应实现`;
    }
  }
}
