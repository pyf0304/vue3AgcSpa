/*
 * 功能:用于WebApi的参数定义
 * 版本:2019-07-24-01
 * 作者:潘以锋
 * */

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export class clsSysPara4WebApi {
  public static bolIsLocalHost = false; //true,,,false

  //const CurrIPAddressAndPort = "http://Localhost:2408";
  //    public static CurrIPAddressAndPort:string = getHostAddressweb();// "http://Localhost:2408";
  // public static CurrPrx = 'AgcWAVue';
  //  public static CurrPrx = 'AgcWA';
  public static CurrPrx = 'AgcWAV3';
  // public static CurrPrx = '';

  public static CurrPrx_GP = 'GpWATz';
  //public static CurrPrx: string = VirtualRootPath + "/WebApi";
  // public static CurrPrx_GP = '';

  //192.168.1.15
  //public static CurrIPAddressAndPort = "http://192.168.1.15";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_GP = "http://192.168.1.15";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_Local_GP = "http://192.168.1.15";// getHostAddressweb();// "http://Localhost:2408";

  //tzar.tpddns.net:5080
  //public static CurrIPAddressAndPort = "http://tzar.tpddns.cn:5080";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_GP: string = "http://tzar.tpddns.cn:5080";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_Local_GP = "http://tzar.tpddns.cn:5080";// getHostAddressweb();// "http://Localhost:2408";

  //www.sh-tz.com
  public static CurrIPAddressAndPort = 'https://www.sh-tz.com'; // getHostAddressweb();// "http://Localhost:2408";
  public static CurrIPAddressAndPort_GP = 'https://www.sh-tz.com'; // getHostAddressweb();// "http://Localhost:2408";
  public static CurrIPAddressAndPort_GPBak = 'http://103.116.76.183:8080'; // getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_Local_GP = "http://103.116.76.183:8080";// getHostAddressweb();// "http://Localhost:2408";
  // public static CurrIPAddressAndPort_Local_GP = 'https://www.sh1-tz.com'; // getHostAddressweb();// "http://Localhost:2408";
  // public static CurrIPAddressAndPort_Local_GP = 'http://tzar.ddns.net:57109'; // getHostAddressweb();// "http://Localhost:2408";
  public static CurrIPAddressAndPort_Local_GP = 'http://192.168.1.20:7109'; // getHostAddressweb();// "http://Localhost:2408";

  //localhost
  // public static CurrIPAddressAndPort_Local = 'http://localhost:28523'; // getHostAddressweb();// "http://Localhost:2408";
  public static CurrIPAddressAndPort_Local = 'http://192.168.1.20:7109'; // getHostAddressweb();// "http://Localhost:2408";

  // public static CurrIPAddressAndPort_Local = 'http://tzar.ddns.net:57109'; // getHostAddressweb();// "http://Localhost:2408";

  //public static CurrIPAddressAndPort_Local_GP: string = "http://localhost:49540";// getHostAddressweb();// "http://Localhost:2408";

  //public static CurrPrx: string = VirtualRootPath + "/WebApi";
  public static Url_Session_SetString = '';

  public static spSetRefreshCacheOn = true;
  //"http://localhost:2408/ExamLib/WebService/MyTest1Service.asmx";

  /**
   * 获取WebApi的地址
   * (AutoGCLib.WAAccess4TypeScript:Gen4WATsGetWebApiUrl)
   * @returns 返回当前文件中Web服务的地址
   */
}

export function GetWebApiUrl(strController: string, strAction: string): string {
  //   const strThisFuncName = 'GetWebApiUrl';

  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}
/// <summary>
/// 获取WebApi的地址
/// (AutoGCLib.WAAccess4TypeScript:Gen4WATsGetWebApiUrl)
/// </summary>
/// <returns>返回当前文件中Web服务的地址</returns>
export function LoginGetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort_GP}/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  } else {
    strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort_Local_GP}/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  }
  return strServiceUrl;
}
export function LoginGetWebApiUrlVue(strController: string, strAction: string): string {
  let strServiceUrl: string;
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strServiceUrl = `/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  } else {
    strServiceUrl = `/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  }
  return strServiceUrl;
}
