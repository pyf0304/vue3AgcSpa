
/*-- -- -- -- -- -- -- -- -- -- --
类名:WApiUserPrjGrant_QUDI_TS
界面名:spaUserPrjGrantCRUD(00050241)
生成代码版本:2019.07.25.1
生成日期:2019/07/25 16:27:49
生成者:
工程名称:AGC
工程ID:0005
相关数据库:101.251.68.133,9433AGC_CS12
PrjDataBaseId:0005
模块中文名:权限管理
模块英文名:AuthorityManage
框架-层名:WApi界面脚本后台模型_TS(WA_ViewScriptCSModel_TS)
编程语言:CSharp
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
     2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using AGC.FunClass;
namespace AGC.Pages
{
    /// <summary>
    /// WApiUserPrjGrant_QUDI_TS 的摘要说明。其中Q代表查询,U代表修改
    /// (AutoGCLib.WA_ViewScriptCSModel_TS4CSharp:GeneCode)
    /// </summary>
    public class SelectProjectModel : PageModel
    {

        public string Message { get; set; }
        public void OnGet()
        {
            Message = "spaUserPrjGrantCRUD(UserPrjGrantCRUD)(00050241)页面.";
        }

        public string Url_Session_SetString
        {
            get
            {
                //获取公共变量:WebRoot
                return clsPubVar.Url_Session_SetString;
            }
        }
        public string Url_Session_GetString
        {
            get
            {
                //获取公共变量:WebRoot
                return clsPubVar.Url_Session_GetString;
            }
        }
        /// <summary>
        /// Session属性-用户Id
        /// (AutoGCLib.WA_ViewScriptCSModel_TS4CSharp:Gen_WApi_Model_SeUserId)
        /// </summary>
        public string seUserId
        {
            get
            {
                var strValue = HttpContext.Session.GetString("UserId");
                return strValue;
            }
            set
            {
                HttpContext.Session.SetString("UserId", value);
            }
        }

        /// <summary>
        /// 设置Session属性
        /// (AutoGCLib.WA_ViewScriptCSModel_TS4CSharp:Gen_WApi_Model_SetSession)
        /// </summary>
        /// <param name="strKey"></param>
        /// <param name="strValue"></param>
        public void SetSession( string strKey, string strValue)
        {
            HttpContext.Session.SetString(strKey, strValue);
        }

        /// <summary>
        /// 获取Session属性
        /// (AutoGCLib.WA_ViewScriptCSModel_TS4CSharp:Gen_WApi_Model_GetSession)
        /// </summary>
        /// <param name="strKey">关键字-Session属性名</param>
        /// <returns>返回当前关键字的值</returns>
        public string GetSession( string strKey)
        {
            var strValue = HttpContext.Session.GetString(strKey);
            return strValue;
        }

        /// <summary>
        /// 当前的虚拟根目录，在appsettings.json设置:environmentVariables:ASPNETCORE_PATHBASE
        /// (AutoGCLib.WA_ViewScriptCSModel_TS4CSharp:Gen_WApi_Model_WebRoot)
        /// </summary>
        public string WebRoot
        {
            get
            {
                //物理路径
                string strPhysicalRoot = AppContext.BaseDirectory;
                //获取设置:虚拟根目录
                var pathBase = Environment.GetEnvironmentVariable("ASPNETCORE_PATHBASE");
                //获取公共变量:WebRoot
                return clsPubVar.WebRoot;
            }
        }

    }
}