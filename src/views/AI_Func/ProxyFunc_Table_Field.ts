//import { AClass } from './AClass';
//import { BClass } from './BClass';
//import { CClass } from './CClass';
//import { ClassStorage } from './ClassStorage';

import { CacheMode_func } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
import { ConstraintType_func } from '@/ts/L3ForWApi/Table_Field/clsConstraintTypeWApi';
import { FieldType_func } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import { FldOperationType_func } from '@/ts/L3ForWApi/Table_Field/clsFldOperationTypeWApi';
import { FldState_func } from '@/ts/L3ForWApi/Table_Field/clsFldStateWApi';
import { PrimaryType_func } from '@/ts/L3ForWApi/Table_Field/clsPrimaryTypeWApi';

import { PrjTabRelationType_func } from '@/ts/L3ForWApi/Table_Field/clsPrjTabRelationTypeWApi';
import { SortType_func } from '@/ts/L3ForWApi/Table_Field/clsSortTypeWApi';
import { TabMainType_func } from '@/ts/L3ForWApi/Table_Field/clsTabMainTypeWApi';
import { TabState_func } from '@/ts/L3ForWApi/Table_Field/clsTabStateWApi';
import { TabType_func } from '@/ts/L3ForWApi/Table_Field/clsTabTypeWApi';
import { vPrjConstraint_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjConstraint_SimWApi';

import { vTabFeature_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvTabFeature_SimWApi';
import { vFieldTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { vPrjTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';

export class ProxyClass_Table_Field {
  /**
   * 代理构建方法
   * @param className 动态类名称
   * @param option 动态类创建参数
   */
  static getClass(className: string, option?: any) {
    console.log(option);
    //一个简单的异常判断，如果存储类中不存在此类 则抛出异常提醒

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
    console.log(option);
    switch (funcName) {
      case 'PrimaryType_func':
        return PrimaryType_func;
      case 'FldState_func':
        return FldState_func;
      case 'TabState_func':
        return TabState_func;
      case 'FieldType_func':
        return FieldType_func;
      case 'TabType_func':
        return TabType_func;
      case 'FldOperationType_func':
        return FldOperationType_func;
      case 'PrjConstraint_func':
        return vPrjConstraint_Sim_func;
      case 'ConstraintType_func':
        return ConstraintType_func;
      case 'SortType_func':
        return SortType_func;
      case 'vTabFeature_Sim_func':
        return vTabFeature_Sim_func;
      case 'TabMainType_func':
        return TabMainType_func;
      case 'CacheMode_func':
        return CacheMode_func;
      case 'vFieldTab_SimEx_func':
        return vFieldTab_SimEx_func;
      case 'vPrjTab_SimEx_func':
        return vPrjTab_SimEx_func;
      case 'PrjTabRelationType_func':
        return PrjTabRelationType_func;
      // case 'vFieldTab_Sim2_func':
      //   return vFieldTab_Sim2_func;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
export function Add1(a: number, b: number) {
  const c = a + b;
  return c;
}
export function Minus1(a: number, b: number) {
  const c = a - b;
  return c;
}
