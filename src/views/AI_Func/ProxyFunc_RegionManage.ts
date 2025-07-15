import { FeatureRegionFlds_func } from '@/ts/L3ForWApi/RegionManage/clsFeatureRegionFldsWApi';
import { RegionType_func } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
import { ViewRegion_func } from '@/ts/L3ForWApi/RegionManage/clsViewRegionWApi';
import { ViewRegionRelaEx_func4Lst } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';

export class ProxyClass_RegionManage {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      case 'RegionType_func':
        return RegionType_func;
      case 'ViewRegion_func':
        return ViewRegion_func;
      case 'FeatureRegionFlds_func':
        return FeatureRegionFlds_func;
      case 'ViewRegionRela_func4Lst':
      case 'ViewRegionRelaEx_func4Lst':
        return ViewRegionRelaEx_func4Lst;
      default:
        console.warn(`未找到 funcName：${funcName}                          对应实现`);
        throw `未找到 funcName：${funcName}                对应实现`;
    }
  }
}
