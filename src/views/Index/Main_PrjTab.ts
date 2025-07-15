import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { SetSpanHtmlByIdInDiv } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

declare let strUrl_Session_SetString: string;

/// <summary>
/// WApiCollege_UT_TS 的摘要说明。其中Q代表查询,U代表修改
/// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:GeneCode)
/// </summary>
export class Main_PrjTab {
  public static divName4LayoutHead = 'divName4LayoutHead';
  /*
   按钮单击,用于调用Js函数中btn_Click
  (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
  */
  public static ShowCurrItemBak(strCommandName: string) {
    const liPrjTabFldCRUD: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liPrjTabFldCRUD')
    );
    const liPrjConstraintCRUDV1: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liPrjConstraintCRUDV1')
    );
    const liPrjConstraintCRUDV2: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liPrjConstraintCRUDV2')
    );
    const liTabFeatureCRUD: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liTabFeatureCRUD')
    );
    //var l0iTestGeneCode: HTMLLIElement = <HTMLLIElement>document.getElementById("l0iTestGeneCode");
    const liTabFunctionPropCRUD: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liTabFunctionPropCRUD')
    );
    const liCheckConsistency: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liCheckConsistency')
    );
    const liPrjTabU: HTMLLIElement = <HTMLLIElement>document.getElementById('liPrjTabU');
    const liGeneTabCode: HTMLLIElement = <HTMLLIElement>document.getElementById('liGeneTabCode');

    liPrjTabFldCRUD.className = 'nav-item ml-2';
    if (liPrjConstraintCRUDV1 != null) {
      liPrjConstraintCRUDV1.className = 'nav-item ml-2';
    }
    liPrjConstraintCRUDV2.className = 'nav-item ml-2';
    liTabFeatureCRUD.className = 'nav-item ml-2';
    //l0iTestGeneCode.className = "nav-item ml-2";
    liTabFunctionPropCRUD.className = 'nav-item ml-2';
    liCheckConsistency.className = 'nav-item ml-2';
    liGeneTabCode.className = 'nav-item ml-2';
    if (liPrjTabU != null) {
      liPrjTabU.className = 'nav-item ml-2';
    }
    switch (strCommandName) {
      case 'PrjTabFldCRUD':
        liPrjTabFldCRUD.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      //case "TestGeneCode":
      //    l0iTestGeneCode.className = "nav-item ml-2 font-weight-bold text-g active";
      //    break;
      case 'TabFeatureCRUD':
        liTabFeatureCRUD.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'PrjConstraintCRUDV1':
        if (liPrjConstraintCRUDV1 != null) {
          liPrjConstraintCRUDV1.className = 'nav-item ml-2 font-weight-bold text-g active';
        }
        break;
      case 'PrjConstraintCRUDV2':
        liPrjConstraintCRUDV2.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'CheckConsistency':
        liCheckConsistency.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'TabFunctionPropCRUD':
        liTabFunctionPropCRUD.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'PrjTabU':
        if (liPrjTabU != null) {
          liPrjTabU.className = 'nav-item ml-2 font-weight-bold text-g active';
        }
        break;
      case 'GeneTabCode':
        liGeneTabCode.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
    }
  }

  public static DispUserInfo(strDivName: string) {
    //var objUserLoginInfo = clsPubSessionStorage.UserLoginInfo;

    SetSpanHtmlByIdInDiv(strDivName, 'spnUserId', clsPubLocalStorage.userId);
    SetSpanHtmlByIdInDiv(strDivName, 'spnRoleName', clsPubLocalStorage.roleName);
    SetSpanHtmlByIdInDiv(strDivName, 'spnCurrSelPrjId', clsPrivateSessionStorage.currSelPrjId);
    SetSpanHtmlByIdInDiv(strDivName, 'spnCurrSelPrjName', clsPrivateSessionStorage.currSelPrjName);
    SetSpanHtmlByIdInDiv(
      strDivName,
      'spnPrjDataBaseName',
      clsPrivateSessionStorage.prjDataBaseName,
    );
  }
  public static remove(arrLi: Array<HTMLLIElement>, itmDel: HTMLLIElement) {
    const index = arrLi.indexOf(itmDel);
    if (index > -1) {
      arrLi.splice(index, 1);
    }
  }

  public static async DispTabInfo(strDivName: string) {
    //let objPrjTab4Session = clsPubSessionStorage.PrjTab4Session;

    SetSpanHtmlByIdInDiv(strDivName, 'spnTabId', clsPrivateSessionStorage.tabId_Main);
    SetSpanHtmlByIdInDiv(strDivName, 'spnTabName', clsPrivateSessionStorage.tabName);
  }

  /*
     演示Session 操作
    */
  public static async Demo_Session() {
    try {
      //设置Session
      const strUserId = 'TestUserId';
      await this.SetSessionAsync('userId', strUserId);
      //获取Session
      const strUserId_Value1 = await this.GetSessionAsync('userId');
      console.log(`strUserId_Value1:${strUserId_Value1}`);
      //获取Session方法2:直接读取页面中的hidUserId
      const strUserId_Value2 = $('#hidUserId').val();
      console.log(`strUserId_Value2:${strUserId_Value2}`);
    } catch (e: any) {
      const strMsg = `演示Session不成功,${e}.`;
      alert(strMsg);
    }
  }
  /*
     设置Session    
     <param name = "Key">关键字</param>
     <param name = "Value">值</param>
    */
  public static SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function () {
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data: any) {
          //$('#myValue').val(text);
          const strKey = data.key;
          const strValue = data.value;

          //$('#myKey').html(strKey);
          //$('#myValue').html(strValue);
          console.log(strKey + strValue);
        },
      });
    });
  }

  /*
 获取Session 关键字的值
 <param name = "Key">关键字</param>
 <return>值</return>
*/
  public static GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: '/Session/GetString',
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
        },
        success(data: any) {
          const strValue = data.value;

          console.log(Key + strValue);
          resolve(data);
        },
        error: (e: any) => {
          reject(e);
        },
      });
    });
  }
}
