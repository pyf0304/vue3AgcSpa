import { clsASPControlBLEx } from './clsASPControlBLEx';
import { clsASPControlGroupBLEx } from './clsASPControlGroupBLEx';
import { ASPUlEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPUlENEx';
import { ASPControlGroupEx } from '@/ts/L0Entity/GeneCSharpEx/clsASPControlGroupENEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

/// <summary>
/// ASPNET无序列表(ASPNETUl)
/// 数据源类型:SQL表
/// (AutoGCLib.BusinessLogicEx4CSharp:GeneCode)
/// </summary>
export class clsASPUlBLEx {
  /// <summary>
  /// 生成该对象相关的代码
  /// </summary>
  /// <param name="objASPUlENEx">编辑文本框对象</param>
  public static GeneHtmlControl(objASPUlENEx: ASPUlEx, objContainer: HTMLElement) {
    // const strActionId = AgcPubFungetASPNETID();

    const objUl: HTMLUListElement = document.createElement('ul');

    if (IsNullOrEmpty(objASPUlENEx.class) == false) {
      objUl.className = objASPUlENEx.class;
    } else {
      objUl.className = objASPUlENEx.cssClass;
    }

    objUl.id = objASPUlENEx.ctrlId;
    objContainer.appendChild(objUl);
    for (const objSubASPControlENEx of objASPUlENEx.arrSubAspControlLst2) {
      clsASPControlBLEx.GeneHtmlControl(objSubASPControlENEx, objUl);
    }
    //return objUl;
  }

  /// <summary>
  /// 建立[空Ul]
  /// </summary>
  /// <returns></returns>
  public static GetEmptyUl(): ASPUlEx {
    const objASPUlENEx: ASPUlEx = new ASPUlEx();

    return objASPUlENEx;
  }

  public static GetObj4DetailRegion(): ASPUlEx {
    const objASPUlENEx: ASPUlEx = new ASPUlEx();
    objASPUlENEx.ctrlId = 'ulDetail';
    objASPUlENEx.class = 'nav';
    return objASPUlENEx;
  }
  public static GetObj4DetailRegionV(): ASPUlEx {
    const objASPUlENEx: ASPUlEx = new ASPUlEx();
    objASPUlENEx.ctrlId = 'ulDetail';
    objASPUlENEx.class = ''; //"nav";
    return objASPUlENEx;
  }

  public static PackageByUl4DetailRegionH(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPUlEx {
    console.error(intColNum);
    const objUl: ASPUlEx = clsASPUlBLEx.GetObj4DetailRegion();
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageLi,
    );
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objInFor2.class += ' nav-item ml-1';
        } else {
          objInFor2.class += ' nav-item ml-2';
        }
        objUl.arrSubAspControlLst2.push(objInFor2);
      }
    }

    return objUl;
  }

  public static PackageByUl4EditRegionH(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPUlEx {
    console.error(intColNum);
    const objUl: ASPUlEx = clsASPUlBLEx.GetObj4DetailRegion();
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageLi,
    );

    // const intCount = 0;
    //const objLi: ASPLiEx =new ASPLiEx();
    // const dicDetailRegionFldColIndex: DictionaryN<number> = new DictionaryN<number>();
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objInFor2.class += ' nav-item ml-1';
        } else {
          objInFor2.class += ' nav-item ml-2';
        }
        objUl.arrSubAspControlLst2.push(objInFor2);
      }
    }

    return objUl;
  }

  public static PackageByUl4QueryRegionH(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPUlEx {
    console.error(intColNum);
    const objUl: ASPUlEx = clsASPUlBLEx.GetObj4DetailRegion();
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageLi,
    );

    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor2.isCaption == true) {
          objInFor2.class += ' nav-item ml-1';
        } else {
          objInFor2.class += ' nav-item ml-2';
        }
        objUl.arrSubAspControlLst2.push(objInFor2);
      }
    }

    return objUl;
  }

  public static PackageByUl4DetailRegionV(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPUlEx {
    console.error(intColNum);
    const objUl: ASPUlEx = clsASPUlBLEx.GetObj4DetailRegionV();
    objUl.class = 'list-unstyled';
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageLi,
    );

    // const dicDetailRegionFldColIndex: DictionaryN<number> = new DictionaryN<number>();
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        objUl.arrSubAspControlLst2.push(objInFor2);
        if (objInFor2.isCaption == true) {
          objInFor2.class += ' mt-2';
        } else {
          objInFor2.class += ' mt-0';
        }
      }
    }

    return objUl;
  }
  public static PackageByUl4EditRegionV(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPUlEx {
    console.error(intColNum);
    const objUl: ASPUlEx = clsASPUlBLEx.GetObj4DetailRegionV();
    objUl.class = 'list-unstyled';
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageLi,
    );

    // const dicDetailRegionFldColIndex: DictionaryN<number> = new DictionaryN<number>();
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor.arrSubAspControlLst2.length == 1) {
          objUl.arrSubAspControlLst2.push(objInFor2);
          objInFor2.class += ' mt-2';
          continue;
        }
        objUl.arrSubAspControlLst2.push(objInFor2);
        if (objInFor2.isCaption == true) {
          objInFor2.class += ' mt-2';
        } else {
          objInFor2.class += ' mt-0';
        }
      }
    }

    return objUl;
  }
  public static PackageByUl4QueryRegionV(
    arrControlGroups: Array<ASPControlGroupEx>,
    intColNum: number,
  ): ASPUlEx {
    console.error(intColNum);
    const objUl: ASPUlEx = clsASPUlBLEx.GetObj4DetailRegionV();
    objUl.class = 'list-unstyled';
    //封装Td
    const arrASPControlGroupObjLst: Array<ASPControlGroupEx> = arrControlGroups.map(
      clsASPControlGroupBLEx.PackageLi,
    );

    // const dicDetailRegionFldColIndex: DictionaryN<number> = new DictionaryN<number>();
    for (const objInFor of arrASPControlGroupObjLst) {
      if (objInFor.arrSubAspControlLst2.length == 0) continue;
      for (const objInFor2 of objInFor.arrSubAspControlLst2) {
        if (objInFor.arrSubAspControlLst2.length == 1) {
          objUl.arrSubAspControlLst2.push(objInFor2);
          objInFor2.class += ' mt-2';
          continue;
        }
        objUl.arrSubAspControlLst2.push(objInFor2);
        if (objInFor2.isCaption == true) {
          objInFor2.class += ' mt-2';
        } else {
          objInFor2.class += ' mt-0';
        }
      }
    }

    return objUl;
  }
}
