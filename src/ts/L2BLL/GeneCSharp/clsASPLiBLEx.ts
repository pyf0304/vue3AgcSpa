/// <summary>
/// ASPNET列表项目(ASPNETLi)
/// 数据源类型:SQL表
/// (AutoGCLib.BusinessLogicEx4CSharp:GeneCode)

import { clsASPControlBLEx } from './clsASPControlBLEx';
import { ASPLiEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPLiENEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNET列表项目(ASPNETLi)
/// 数据源类型:SQL表
/// (AutoGCLib.BusinessLogicEx4CSharp:GeneCode)
/// </summary>
export class clsASPLiBLEx {
  /// <summary>
  /// 生成该对象相关的代码
  /// </summary>
  /// <param name="objASPLiENEx">编辑文本框对象</param>
  public static GeneHtmlControl(objASPLiENEx: ASPLiEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFungetASPNETID();

    const objLi: HTMLLIElement = document.createElement('li');

    if (IsNullOrEmpty(objASPLiENEx.class) == false) {
      objLi.className = objASPLiENEx.class;
    } else {
      objLi.className = objASPLiENEx.cssClass;
    }

    objLi.id = objASPLiENEx.ctrlId;
    objContainer.appendChild(objLi);
    for (const objSubASPControlENEx of objASPLiENEx.arrSubAspControlLst2) {
      clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objLi);
    }
    //return objLi;
  }

  /// <summary>
  /// 建立[空行td]
  /// </summary>
  /// <returns></returns>
  public static GetEmptyLi(): ASPLiEx {
    const objASPLiENEx: ASPLiEx = new ASPLiEx();
    return objASPLiENEx;
  }
}
