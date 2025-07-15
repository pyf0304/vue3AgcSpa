/*import $ from "jquery";*/
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

// declare let source1: Dictionary;
/** PrjTabFldCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class BootAutoCompleteEx {
  public static jsonObj_Static: any;
  public TabId = '';
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: BootAutoCompleteEx = new BootAutoCompleteEx();
    const strMsg = '';
    switch (strCommandName) {
      case 'setAutoComplete': //查询记录
        objPage.btnSetAutoComplete_Click();
        break;

      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'BootAutoCompleteEx.btn_Click');
        alert(strMsg);
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  public static GetFieldTab() {
    const json_coordinate: { [key: string]: any } = {};
    json_coordinate['ABC1'] = '001';
    json_coordinate['ABC2'] = '002';
    json_coordinate['AB2C3'] = '003';
    json_coordinate['ABC4'] = '004';
    json_coordinate['AB1C5'] = '005';
    const aa = 'ABC6';
    json_coordinate[aa] = '006';

    return json_coordinate;
  }

  public static GetFieldTab2() {
    const jsonObj3 = BootAutoCompleteEx.jsonObj_Static;
    //console.log("1jsonObj3 in js", jsonObj3);

    return jsonObj3;
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnSetAutoComplete_Click() {
    // const strThisFuncName = 'btnSetAutoComplete_Click';

    // const src = {
    //   'Bootstrap 4 Autocomplete example': 1,
    //   'Best example in the world': 2,
    //   'Bootstrap 4 Autocomplete is very nice': 3,
    //   'It contains neatly arranged example items': 4,
    //   'With many autocomplete values': 5,
    //   'And it uses default Bootstrap 4 components': 6,
    //   'You can use this example to test': 7,
    // };
    // function onSelectItem(item: any, element: any) {
    //   $('#output').html(
    //     `Element <b>${$(element).attr('id')}</b> was selected<br/>` +
    //       `<b>Value:</b> ${item.value} - <b>Label:</b> ${item.label}`,
    //   );
    // }
    const strKey = 'jsonObj';
    const jsonObjStr = sessionStorage.getItem(strKey) as string;
    const jsonObj2 = JSON.parse(jsonObjStr);
    BootAutoCompleteEx.jsonObj_Static = jsonObj2;
    console.log('  BootAutoCompleteEx.jsonObj_Static in js', BootAutoCompleteEx.jsonObj_Static);

    //$('#myAutocomplete').autocomplete({
    //    source: jsonObj2,
    //    onSelectItem: onSelectItem,
    //    highlightClass: 'text-danger'
    //});
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // const strTabId = clsPubVar4Web.GetTabId(this.GetTabId);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public get qsTabId() {
    const strName = 'tabId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }
}
