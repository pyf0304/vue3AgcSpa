using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
// Add necessary using directives for your project namespaces here

namespace YourNamespace.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TabFeatureExApiController : ControllerBase
    {
        /// <summary>
        /// 添加“调整记录次序”表功能（后端实现调用）
        /// — 调用方法示例: GET /api/TabFeatureExApi/AddAdjustOrderNum?strTabId=value&strFeatureId=value&strPrjId=value&strOpUserId=value
        /// </summary>
        /// <param name="strTabId">表Id</param>
        /// <param name="strFeatureId">功能Id（通常为 enumPrjFeature.Tab_AdjustOrderNum_0167）</param>
        /// <param name="strPrjId">工程Id</param>
        /// <param name="strOpUserId">操作用户Id</param>
        [HttpGet("AddAdjustOrderNum")]
        public ActionResult AddAdjustOrderNum(string strTabId, string strFeatureId, string strPrjId, string strOpUserId)
        {
            string strFunctionName = "AddAdjustOrderNum"; // replace with your stacktrace util if available
            Dictionary<string, string> dictParam = new Dictionary<string, string>
            {
                { "strTabId", strTabId },
                { "strFeatureId", strFeatureId },
                { "strPrjId", strPrjId },
                { "strOpUserId", strOpUserId }
            };
            // TODO: replace logging with your project's logging util
            Console.WriteLine($"{strFunctionName} called: {string.Join(", ", dictParam)}");

            try
            {
                // TODO: call your business logic here. Example:
                // var varResult = clsTabFeatureFldsBLEx.AddAdjustOrderNum(strTabId, strFeatureId, strPrjId, strOpUserId);
                bool varResult = false;

                // If you have the BL class available, uncomment and use it:
                // varResult = clsTabFeatureFldsBLEx.AddAdjustOrderNum(strTabId, strFeatureId, strPrjId, strOpUserId);

                // 刷新相关缓存，保持一致性
                // clsTabFeatureBL.ReFreshCache(strPrjId);
                // clsTabFeatureFldsBL.ReFreshCache(strPrjId);

                return Ok(new { errorId = 0, errorMsg = "", returnBool = varResult });
            }
            catch (Exception objException)
            {
                string strMsg = string.Format("{0}.(from {1})", objException.Message, strFunctionName);
                return Ok(new { errorId = 1, errorMsg = strMsg });
            }
        }
    }
}
