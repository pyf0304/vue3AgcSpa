//import { AClass } from './AClass';
//import { BClass } from './BClass';
//import { CClass } from './CClass';
//import { ClassStorage } from './ClassStorage';

import { GCVariable_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { ViewRegionRelaEx_func4Lst } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';

export class ProxyClass_switch {
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

  static getFunction(funcName: string, option?: any) {
    //一个简单的异常判断，如果存储类中不存在此类 则抛出异常提醒
    console.log(option);
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

  //static checkValidClass(className: string) {
  //    //一个简单的异常判断，如果存储类中不存在此类 则抛出异常提醒
  //    if (ClassStorage[className] === undefined || ClassStorage[className] === null) {
  //        return null;
  //    }
  //    //从存放对象上找出对应class 创建即可
  //    return className
  //}
}

export function Add1(a: number, b: number) {
  const c = a + b;
  return c;
}
export function Minus1(a: number, b: number) {
  const c = a - b;
  return c;
}
