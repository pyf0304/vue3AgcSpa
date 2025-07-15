/*
 * 功能:为Web提供下拉框对象类
 * 版本:2019-08-03-01
 * 作者:潘以锋
 * */

/// <summary>
/// 下拉框对象类
/// </summary>
export class clsCboObject {
  /*[Index: string]: string;*/
  /*
    /// <param name="strValue"></param>
    /// <param name="strText"></param>
    */
  constructor(strValue: string, strText: string) {
    this.value = strValue;
    this.text = strText;
  }
  /// <summary>
  /// 值
  /// </summary>
  public value = '';
  /// <summary>
  /// 文本
  /// </summary>
  public text = '';
  /// <summary>
  /// 常量:"Text":文本
  /// </summary>
  public static get con_Text(): string {
    return 'text';
  }
  /// <summary>
  /// 常量:"Value":值
  /// </summary>
  public static get con_Value(): string {
    return 'value';
  }

  public static GetFldValue(objCbo: clsCboObject, strFldName: string) {
    // const strThisFuncName = 'GetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsCboObject.con_Text:
        return objCbo.text;
      case clsCboObject.con_Value:
        return objCbo.value;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[clsCboObject]中不存在！`;
        console.error(strMsg);
        return '';
    }
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CboObject_SortByText(a: clsCboObject, b: clsCboObject): number {
  return a.text.localeCompare(b.text);
}

export function CboObject_SortByValue(a: clsCboObject, b: clsCboObject): number {
  return a.value.localeCompare(b.value);
}
