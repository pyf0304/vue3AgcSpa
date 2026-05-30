/*
 * 功能:用于 WebApi 的系统参数定义与地址拼接
 * 版本:2026-05-30-01
 * 作者:潘以锋
 * 整理:GitHub Copilot
 *
 * 三种访问场景(核心开关: bolIsLocalHost / bolIsLocalHost_GP / bolIsRemoteTest):
 * 1) 访问发布的远程服务器(生产/正式环境)
 *    - bolIsLocalHost = false
 *    - bolIsLocalHost_GP = false
 *    - bolIsRemoteTest = false
 *
 * 2) 访问本地 WebApi(本机或局域网开发机)
 *    - bolIsLocalHost = true
 *    - bolIsLocalHost_GP = true
 *    - bolIsRemoteTest 可忽略
 *
 * 3) 访问非本地的远程测试 WebApi(联调/调试环境)
 *    - bolIsLocalHost = false
 *    - bolIsLocalHost_GP = false
 *    - bolIsRemoteTest = true
 *
 * 备注:
 * - CurrPrx / CurrPrx_GP 为空字符串时，URL 不包含虚拟目录。
 * - GetWebApiUrl 用于普通接口；LoginGetWebApiUrl 用于登录/GP 接口。
 */

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

type TWebApiScene = 'local' | 'test' | 'prod';

function NormalizeWebApiScene(scene?: string): TWebApiScene {
  switch ((scene || '').trim().toLowerCase()) {
    case 'local':
      return 'local';
    case 'test':
      return 'test';
    case 'prod':
    case 'production':
    default:
      return 'prod';
  }
}

export class clsSysPara4WebApi {
  // 场景统一从 .env* 读取，避免 .env 与代码中各自维护一套地址。
  private static readonly WebApiScene = NormalizeWebApiScene(import.meta.env.VITE_WEBAPI_SCENE);
  private static readonly WebApiScene_GP = NormalizeWebApiScene(
    import.meta.env.VITE_WEBAPI_GP_SCENE || import.meta.env.VITE_WEBAPI_SCENE,
  );

  // true: 普通接口走本地地址; false: 普通接口走远程地址
  public static get bolIsLocalHost(): boolean {
    return clsSysPara4WebApi.WebApiScene === 'local';
  }

  // true: 登录/GP 接口走本地地址; false: 登录/GP 接口走远程地址
  public static get bolIsLocalHost_GP(): boolean {
    return clsSysPara4WebApi.WebApiScene_GP === 'local';
  }

  // 是否访问远程测试环境。只要普通接口或 GP 接口有一方处于 test，即视为测试环境。
  public static get bolIsRemoteTest(): boolean {
    return clsSysPara4WebApi.WebApiScene === 'test' || clsSysPara4WebApi.WebApiScene_GP === 'test';
  }

  // 远程正式环境地址
  private static readonly RemoteIPAddressAndPort_Prod = 'https://www.sh-tz.com';
  private static readonly RemoteIPAddressAndPort_GP_Prod = 'https://www.sh-tz.com';

  // 远程测试环境地址
  private static readonly RemoteIPAddressAndPort_Test = 'http://tzar.ddns.net:27109';
  private static readonly RemoteIPAddressAndPort_GP_Test = 'http://tzar.ddns.net:27109';

  // 本地环境地址
  private static readonly LocalIPAddressAndPort = 'http://192.168.1.20:7109';
  private static readonly LocalIPAddressAndPort_GP = 'http://192.168.1.20:7111';

  // 普通接口虚拟目录(Prx)
  // 远程正式发布常见值: AgcWAVue / AgcWA / AgcWAV3
  private static readonly Prx_Prod = 'AgcWAV3';
  private static readonly Prx_Test = '';
  private static readonly Prx_Local = '';

  // 登录/GP 接口虚拟目录(Prx_GP)
  private static readonly Prx_GP_Prod = 'GpWATz';
  private static readonly Prx_GP_Test = '';
  private static readonly Prx_GP_Local = '';

  //const CurrIPAddressAndPort = "http://Localhost:2408";
  //    public static CurrIPAddressAndPort:string = getHostAddressweb();// "http://Localhost:2408";
  // 当前普通接口虚拟目录: 根据场景自动切换
  public static get CurrPrx(): string {
    switch (clsSysPara4WebApi.WebApiScene) {
      case 'local':
        return clsSysPara4WebApi.Prx_Local;
      case 'test':
        return clsSysPara4WebApi.Prx_Test;
      default:
        return clsSysPara4WebApi.Prx_Prod;
    }
  }

  // 当前登录/GP 接口虚拟目录: 根据场景自动切换
  public static get CurrPrx_GP(): string {
    switch (clsSysPara4WebApi.WebApiScene_GP) {
      case 'local':
        return clsSysPara4WebApi.Prx_GP_Local;
      case 'test':
        return clsSysPara4WebApi.Prx_GP_Test;
      default:
        return clsSysPara4WebApi.Prx_GP_Prod;
    }
  }

  //192.168.1.15
  //public static CurrIPAddressAndPort = "http://192.168.1.15";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_GP = "http://192.168.1.15";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_Local_GP = "http://192.168.1.15";// getHostAddressweb();// "http://Localhost:2408";

  //192.168.1.20
  // public static CurrIPAddressAndPort = 'http://192.168.1.20'; // getHostAddressweb();// "http://Localhost:2408";
  // public static CurrIPAddressAndPort_GP = "http://192.168.1.20";// getHostAddressweb();// "http://Localhost:2408";
  // public static CurrIPAddressAndPort_Local_GP = "http://192.168.1.20:7109";// getHostAddressweb();// "http://Localhost:2408";

  //tzar.tpddns.net:5080
  //public static CurrIPAddressAndPort = "http://tzar.tpddns.cn:5080";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_GP: string = "http://tzar.tpddns.cn:5080";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_Local_GP = "http://tzar.tpddns.cn:5080";// getHostAddressweb();// "http://Localhost:2408";

  // 远程普通接口地址: 根据 bolIsRemoteTest 自动在生产/测试之间切换
  public static get CurrIPAddressAndPort(): string {
    switch (clsSysPara4WebApi.WebApiScene) {
      case 'local':
        return clsSysPara4WebApi.LocalIPAddressAndPort;
      case 'test':
        return clsSysPara4WebApi.RemoteIPAddressAndPort_Test;
      default:
        return clsSysPara4WebApi.RemoteIPAddressAndPort_Prod;
    }
  }

  // 远程 GP 接口地址: 根据 bolIsRemoteTest 自动在生产/测试之间切换
  public static get CurrIPAddressAndPort_GP(): string {
    switch (clsSysPara4WebApi.WebApiScene_GP) {
      case 'local':
        return clsSysPara4WebApi.LocalIPAddressAndPort_GP;
      case 'test':
        return clsSysPara4WebApi.RemoteIPAddressAndPort_GP_Test;
      default:
        return clsSysPara4WebApi.RemoteIPAddressAndPort_GP_Prod;
    }
  }

  public static CurrIPAddressAndPort_GPBak = 'http://103.116.76.183:8080'; // getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_Local_GP = "http://103.116.76.183:8080";// getHostAddressweb();// "http://Localhost:2408";
  // public static CurrIPAddressAndPort_Local_GP = 'https://www.sh-tz.com'; // getHostAddressweb();// "http://Localhost:2408";
  // public static CurrIPAddressAndPort_Local_GP = 'http://tzar.ddns.net:27111'; // getHostAddressweb();// "http://Localhost:2408";
  public static get CurrIPAddressAndPort_Local_GP(): string {
    return clsSysPara4WebApi.LocalIPAddressAndPort_GP;
  }

  // 本地地址(当 bolIsLocalHost=true 时生效)
  // localhost
  // public static CurrIPAddressAndPort_Local = 'http://localhost:28523'; // getHostAddressweb();// "http://Localhost:2408";
  public static get CurrIPAddressAndPort_Local(): string {
    return clsSysPara4WebApi.LocalIPAddressAndPort;
  }

  // public static CurrIPAddressAndPort_Local = 'http://tzar.ddns.net:27109'; // getHostAddressweb();// "http://Localhost:2408";

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

function BuildWebApiBaseUrl(strCurrIPAddressAndPort: string, strCurrPrx: string): string {
  if (IsNullOrEmpty(strCurrPrx) == true) {
    return Format('{0}/api/', strCurrIPAddressAndPort);
  }
  return Format('{0}/{1}/api/', strCurrIPAddressAndPort, strCurrPrx);
}

export function GetBaseApiUrl(): string {
  return BuildWebApiBaseUrl(clsSysPara4WebApi.CurrIPAddressAndPort, clsSysPara4WebApi.CurrPrx);
}

export function LoginGetBaseApiUrl(): string {
  return BuildWebApiBaseUrl(
    clsSysPara4WebApi.CurrIPAddressAndPort_GP,
    clsSysPara4WebApi.CurrPrx_GP,
  );
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
  if (clsSysPara4WebApi.bolIsLocalHost_GP == false) {
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
