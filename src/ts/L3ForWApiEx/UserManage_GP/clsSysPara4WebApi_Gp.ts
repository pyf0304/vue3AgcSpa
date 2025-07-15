export class clsSysPara4WebApi_GP {
  public static bolIsLocalHost = false;
  //var CurrIPAddressAndPort = "http://Localhost:2408";
  //    public static CurrIPAddressAndPort:string = getHostAddress_web();// "http://Localhost:2408";
  //    public static CurrIPAddressAndPort: string = "101.251.68.133";// getHostAddress_web();// "http://Localhost:2408";
  public static CurrIPAddressAndPort = '101.251.68.133'; // getHostAddress_web();// "http://Localhost:2408";
  public static CurrIPAddressAndPort_Local = 'localhost:49540'; // getHostAddress_web();// "http://Localhost:2408";

  //public static CurrPrx: string = VirtualRootPath + "/WebApi";
  public static CurrPrx = 'GpWATz';

  public static spSetRefreshCacheOn = true;
  //"http://localhost:2408/ExamLib/WebService/MyTest1Service.asmx";

  /// <summary>
  /// 获取WebApi的地址
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
  /// </summary>
  /// <returns>返回当前文件中Web服务的地址</returns>
  public static GetWebApiUrlBak(strController: string, strAction: string): string {
    let strServiceUrl: string;
    if (clsSysPara4WebApi_GP.bolIsLocalHost == false) {
      strServiceUrl = `${clsSysPara4WebApi_GP.CurrIPAddressAndPort}/${clsSysPara4WebApi_GP.CurrPrx}/${strController}/${strAction}`;
    } else {
      strServiceUrl = `${clsSysPara4WebApi_GP.CurrIPAddressAndPort_Local}/${clsSysPara4WebApi_GP.CurrPrx}/${strController}/${strAction}`;
    }
    return strServiceUrl;
  }
}
