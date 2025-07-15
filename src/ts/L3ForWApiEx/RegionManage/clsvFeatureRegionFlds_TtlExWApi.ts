import { clsvFeatureRegionFlds_TtlEN } from '@/ts/L0Entity/RegionManage/clsvFeatureRegionFlds_TtlEN';
import { clsvFeatureRegionFlds_TtlENEx } from '@/ts/L0Entity/RegionManage/clsvFeatureRegionFlds_TtlENEx';
export const vFeatureRegionFlds_TtlEx_Controller = 'vFeatureRegionFlds_TtlExApi';
export const vFeatureRegionFlds_TtlEx_ConstructorName = 'vFeatureRegionFlds_TtlEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objvFeatureRegionFlds_TtlENS">源对象</param>
/// <param name = "objvFeatureRegionFlds_TtlENT">目标对象</param>
export function vFeatureRegionFlds_TtlEx_CopyToEx(
  objvFeatureRegionFlds_TtlENS: clsvFeatureRegionFlds_TtlEN,
): clsvFeatureRegionFlds_TtlENEx {
  const objvFeatureRegionFlds_TtlENT: clsvFeatureRegionFlds_TtlENEx =
    new clsvFeatureRegionFlds_TtlENEx();
  objvFeatureRegionFlds_TtlENT.viewFeatureId = objvFeatureRegionFlds_TtlENS.viewFeatureId; //界面功能Id
  objvFeatureRegionFlds_TtlENT.regionId = objvFeatureRegionFlds_TtlENS.regionId; //区域Id
  objvFeatureRegionFlds_TtlENT.regionName = objvFeatureRegionFlds_TtlENS.regionName; //区域名称
  objvFeatureRegionFlds_TtlENT.regionTypeId = objvFeatureRegionFlds_TtlENS.regionTypeId; //区域类型Id
  objvFeatureRegionFlds_TtlENT.regionTypeName = objvFeatureRegionFlds_TtlENS.regionTypeName; //区域类型名称
  objvFeatureRegionFlds_TtlENT.featureId = objvFeatureRegionFlds_TtlENS.featureId; //功能Id
  objvFeatureRegionFlds_TtlENT.featureName = objvFeatureRegionFlds_TtlENS.featureName; //功能名称
  objvFeatureRegionFlds_TtlENT.keyWords = objvFeatureRegionFlds_TtlENS.keyWords; //关键字
  objvFeatureRegionFlds_TtlENT.tabFeatureId = objvFeatureRegionFlds_TtlENS.tabFeatureId; //表功能Id
  objvFeatureRegionFlds_TtlENT.tabFeatureName = objvFeatureRegionFlds_TtlENS.tabFeatureName; //表功能名
  objvFeatureRegionFlds_TtlENT.checkTabFeature = objvFeatureRegionFlds_TtlENS.checkTabFeature; //检查表功能
  objvFeatureRegionFlds_TtlENT.featureDescription = objvFeatureRegionFlds_TtlENS.featureDescription; //功能说明
  objvFeatureRegionFlds_TtlENT.buttonName = objvFeatureRegionFlds_TtlENS.buttonName; //按钮名称
  //objvFeatureRegionFlds_TtlENT.buttonName4Mvc = objvFeatureRegionFlds_TtlENS.ButtonName4Mvc; //按钮名称4Mvc
  objvFeatureRegionFlds_TtlENT.eventFuncName = objvFeatureRegionFlds_TtlENS.eventFuncName; //事件函数名
  objvFeatureRegionFlds_TtlENT.valueGivingModeId = objvFeatureRegionFlds_TtlENS.valueGivingModeId; //给值方式Id
  objvFeatureRegionFlds_TtlENT.valueGivingModeName =
    objvFeatureRegionFlds_TtlENS.valueGivingModeName; //给值方式名
  objvFeatureRegionFlds_TtlENT.funcName = objvFeatureRegionFlds_TtlENS.funcName; //函数名
  objvFeatureRegionFlds_TtlENT.defaultValue = objvFeatureRegionFlds_TtlENS.defaultValue; //缺省值
  objvFeatureRegionFlds_TtlENT.text = objvFeatureRegionFlds_TtlENS.text; //文本
  objvFeatureRegionFlds_TtlENT.groupName = objvFeatureRegionFlds_TtlENS.groupName; //组名
  objvFeatureRegionFlds_TtlENT.releTabId = objvFeatureRegionFlds_TtlENS.releTabId; //相关表Id
  objvFeatureRegionFlds_TtlENT.releFldId = objvFeatureRegionFlds_TtlENS.releFldId; //相关字段Id
  objvFeatureRegionFlds_TtlENT.fieldTypeId = objvFeatureRegionFlds_TtlENS.fieldTypeId; //字段类型Id
  objvFeatureRegionFlds_TtlENT.fieldTypeName = objvFeatureRegionFlds_TtlENS.fieldTypeName; //字段类型名
  objvFeatureRegionFlds_TtlENT.viewImplId = objvFeatureRegionFlds_TtlENS.viewImplId; //界面实现Id
  objvFeatureRegionFlds_TtlENT.viewImplName = objvFeatureRegionFlds_TtlENS.viewImplName; //界面实现名
  objvFeatureRegionFlds_TtlENT.ctlTypeId = objvFeatureRegionFlds_TtlENS.ctlTypeId; //控件类型号
  objvFeatureRegionFlds_TtlENT.ctlTypeName = objvFeatureRegionFlds_TtlENS.ctlTypeName; //控件类型名
  objvFeatureRegionFlds_TtlENT.ctlCnName = objvFeatureRegionFlds_TtlENS.ctlCnName; //控件类型中文名
  objvFeatureRegionFlds_TtlENT.ctlTypeAbbr = objvFeatureRegionFlds_TtlENS.ctlTypeAbbr; //控件类型缩写
  objvFeatureRegionFlds_TtlENT.height = objvFeatureRegionFlds_TtlENS.height; //高度
  objvFeatureRegionFlds_TtlENT.width = objvFeatureRegionFlds_TtlENS.width; //宽
  objvFeatureRegionFlds_TtlENT.seqNum = objvFeatureRegionFlds_TtlENS.seqNum; //字段序号
  objvFeatureRegionFlds_TtlENT.cssClass = objvFeatureRegionFlds_TtlENS.cssClass; //样式表
  objvFeatureRegionFlds_TtlENT.imageUrl = objvFeatureRegionFlds_TtlENS.imageUrl; //图片资源
  objvFeatureRegionFlds_TtlENT.inUse = objvFeatureRegionFlds_TtlENS.inUse; //是否在用
  objvFeatureRegionFlds_TtlENT.prjId = objvFeatureRegionFlds_TtlENS.prjId; //工程ID
  objvFeatureRegionFlds_TtlENT.updUser = objvFeatureRegionFlds_TtlENS.updUser; //修改者
  objvFeatureRegionFlds_TtlENT.updDate = objvFeatureRegionFlds_TtlENS.updDate; //修改日期
  objvFeatureRegionFlds_TtlENT.memo = objvFeatureRegionFlds_TtlENS.memo; //说明
  objvFeatureRegionFlds_TtlENT.fldNum = objvFeatureRegionFlds_TtlENS.fldNum; //字段数
  objvFeatureRegionFlds_TtlENT.relaFldName = objvFeatureRegionFlds_TtlENS.relaFldName; //关系字段名
  objvFeatureRegionFlds_TtlENT.relaTabName = objvFeatureRegionFlds_TtlENS.relaTabName; //relaTabName
  //objvFeatureRegionFlds_TtlENT.sfUpdFldSetStr = objvFeatureRegionFlds_TtlENS.updFldString; //专门用于记录某字段属性是否修改
  objvFeatureRegionFlds_TtlENT.sfFldComparisonOp = objvFeatureRegionFlds_TtlENS.sfFldComparisonOp; //专门用于记录条件对象某字段的比较运算符
  return objvFeatureRegionFlds_TtlENT;
}
