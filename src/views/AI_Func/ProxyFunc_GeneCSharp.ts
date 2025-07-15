export class ProxyClass_GeneCSharpBak {
  static getFunction(funcName: string, option?: any) {
    console.log(option);
    switch (funcName) {
      //case "ASPWebUserControl_func":
      //    return ASPWebUserControl_func;
      default:
        console.warn(`未找到 funcName：${funcName} 对应实现`);
        throw `未找到 funcName：${funcName} 对应实现`;
    }
  }
}
