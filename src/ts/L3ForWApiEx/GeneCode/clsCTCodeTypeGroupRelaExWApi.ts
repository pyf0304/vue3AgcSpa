
 /**
 * 类名:clsCTCodeTypeGroupRelaExWApi
 * 表名:CTCodeTypeGroupRela(00050647)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 13:31:18
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * CTCodeTypeGroupRela(CTCodeTypeGroupRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2026年06月06日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsCTCodeTypeGroupRelaENEx } from "@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaENEx";
import { CTCodeTypeGroupRela_GetObjLstByPagerAsync,CTCodeTypeGroupRela_SortFunByKey } from "@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupRelaWApi";
import { vCodeType_Sim_func,vCodeType_Sim_funcKey } from "@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi";
import { clsvCodeType_SimEN } from "@/ts/L0Entity/GeneCode/clsvCodeType_SimEN";
import { CTCodeTypeGroup_func,CTCodeTypeGroup_funcKey } from "@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupWApi";
import { clsCTCodeTypeGroupEN } from "@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN";
import { clsCTCodeTypeGroupRelaEN } from "@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN";
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

export const cTCodeTypeGroupRelaEx_Controller = "CTCodeTypeGroupRelaExApi";
export const cTCodeTypeGroupRelaEx_ConstructorName = "cTCodeTypeGroupRelaEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function CTCodeTypeGroupRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
let strServiceUrl:string;
let strCurrIPAddressAndPort = "";
if (clsSysPara4WebApi.bolIsLocalHost == false)
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
}
else
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
}
if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true)
{
strServiceUrl = Format("{0}/{1}/{2}", strCurrIPAddressAndPort, strController, strAction);
}
else
{
strServiceUrl = Format("{0}/{1}/{2}/{3}", strCurrIPAddressAndPort, clsSysPara4WebApi.CurrPrx, strController, strAction);
}
return strServiceUrl;
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objCTCodeTypeGroupRelaENS:源对象
 * @returns 目标对象=>clsCTCodeTypeGroupRelaEN:objCTCodeTypeGroupRelaENT
 **/
export  function CTCodeTypeGroupRelaEx_CopyToEx(objCTCodeTypeGroupRelaENS:clsCTCodeTypeGroupRelaEN ): clsCTCodeTypeGroupRelaENEx
{
const strThisFuncName  = CTCodeTypeGroupRelaEx_CopyToEx.name;
 const objCTCodeTypeGroupRelaENT = new clsCTCodeTypeGroupRelaENEx();
try
{
ObjectAssign(objCTCodeTypeGroupRelaENT, objCTCodeTypeGroupRelaENS);
 return objCTCodeTypeGroupRelaENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, cTCodeTypeGroupRelaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objCTCodeTypeGroupRelaENT;
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function CTCodeTypeGroupRelaEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsCTCodeTypeGroupRelaENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrCTCodeTypeGroupRelaObjLst = await CTCodeTypeGroupRela_GetObjLstByPagerAsync(objPagerPara);
const arrCTCodeTypeGroupRelaExObjLst = arrCTCodeTypeGroupRelaObjLst.map(CTCodeTypeGroupRelaEx_CopyToEx);
if (arrCTCodeTypeGroupRelaExObjLst.length == 0) return arrCTCodeTypeGroupRelaExObjLst;
let arrCTCodeTypeGroupRelaSel: Array < clsCTCodeTypeGroupRelaENEx > = arrCTCodeTypeGroupRelaExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrCTCodeTypeGroupRelaSel = arrCTCodeTypeGroupRelaSel.sort(CTCodeTypeGroupRelaEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrCTCodeTypeGroupRelaSel = arrCTCodeTypeGroupRelaSel.sort(objPagerPara.sortFun);
}
const intPageSize =objPagerPara.pageSize > 0 ? objPagerPara.pageSize : arrCTCodeTypeGroupRelaSel.length;
const intPageIndex = objPagerPara.pageIndex > 0 ? objPagerPara.pageIndex : 1;
const intStartIndex = (intPageIndex - 1) * intPageSize;
const intEndIndex = intStartIndex + intPageSize;
return arrCTCodeTypeGroupRelaSel.slice(intStartIndex, intEndIndex);
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cTCodeTypeGroupRelaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCTCodeTypeGroupRelaENEx>();
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCTCodeTypeGroupRelaS:源对象
 **/
export  async function CTCodeTypeGroupRelaEx_FuncMapCodeTypeName(objCTCodeTypeGroupRela:clsCTCodeTypeGroupRelaENEx )
{
const strThisFuncName = CTCodeTypeGroupRelaEx_FuncMapCodeTypeName.name;
try
{
if (IsNullOrEmpty(objCTCodeTypeGroupRela.codeTypeName) == true){
 const vCodeTypeSimCodeTypeId = objCTCodeTypeGroupRela.codeTypeId;
 const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(clsvCodeType_SimEN.con_CodeTypeId, clsvCodeType_SimEN.con_CodeTypeName, vCodeTypeSimCodeTypeId );
 objCTCodeTypeGroupRela.codeTypeName = vCodeTypeSimCodeTypeName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001228)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cTCodeTypeGroupRelaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCTCodeTypeGroupRelaS:源对象
 **/
export  async function CTCodeTypeGroupRelaEx_FuncMapGroupName(objCTCodeTypeGroupRela:clsCTCodeTypeGroupRelaENEx )
{
const strThisFuncName = CTCodeTypeGroupRelaEx_FuncMapGroupName.name;
try
{
if (IsNullOrEmpty(objCTCodeTypeGroupRela.groupName) == true){
 const CTCodeTypeGroupCtGroupId = objCTCodeTypeGroupRela.ctGroupId;
 const CTCodeTypeGroupGroupName = await CTCodeTypeGroup_func(clsCTCodeTypeGroupEN.con_CtGroupId, clsCTCodeTypeGroupEN.con_GroupName, CTCodeTypeGroupCtGroupId );
 objCTCodeTypeGroupRela.groupName = CTCodeTypeGroupGroupName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001229)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cTCodeTypeGroupRelaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function CTCodeTypeGroupRelaEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsCTCodeTypeGroupRelaENEx.con_CodeTypeName:
return (a: clsCTCodeTypeGroupRelaENEx, b: clsCTCodeTypeGroupRelaENEx) => {
return a.codeTypeName.localeCompare(b.codeTypeName);
}
case clsCTCodeTypeGroupRelaENEx.con_GroupName:
return (a: clsCTCodeTypeGroupRelaENEx, b: clsCTCodeTypeGroupRelaENEx) => {
return a.groupName.localeCompare(b.groupName);
}
        default:
return CTCodeTypeGroupRela_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsCTCodeTypeGroupRelaENEx.con_CodeTypeName:
return (a: clsCTCodeTypeGroupRelaENEx, b: clsCTCodeTypeGroupRelaENEx) => {
return b.codeTypeName.localeCompare(a.codeTypeName);
}
case clsCTCodeTypeGroupRelaENEx.con_GroupName:
return (a: clsCTCodeTypeGroupRelaENEx, b: clsCTCodeTypeGroupRelaENEx) => {
return b.groupName.localeCompare(a.groupName);
}
        default:
return CTCodeTypeGroupRela_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function CTCodeTypeGroupRelaEx_FuncMapByFldName(strFldName: string, objCTCodeTypeGroupRelaEx: clsCTCodeTypeGroupRelaENEx)
{
const strThisFuncName = CTCodeTypeGroupRelaEx_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsCTCodeTypeGroupRelaEN._AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clsCTCodeTypeGroupRelaENEx.con_CodeTypeName:
return CTCodeTypeGroupRelaEx_FuncMapCodeTypeName(objCTCodeTypeGroupRelaEx);
case clsCTCodeTypeGroupRelaENEx.con_GroupName:
return CTCodeTypeGroupRelaEx_FuncMapGroupName(objCTCodeTypeGroupRelaEx);
        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCTCodeTypeGroupRelaS:源对象
 **/
export  async function CTCodeTypeGroupRelaEx_FuncMapKeyCodeTypeName(objCTCodeTypeGroupRela:clsCTCodeTypeGroupRelaENEx ): Promise<Array<string>>
{
const strThisFuncName = CTCodeTypeGroupRelaEx_FuncMapKeyCodeTypeName.name;
try
{
if (IsNullOrEmpty(objCTCodeTypeGroupRela.codeTypeName) == true) return [];
 const vCodeTypeSimCodeTypeName = objCTCodeTypeGroupRela.codeTypeName;
 const arrCodeTypeId = await vCodeType_Sim_funcKey(clsvCodeType_SimEN.con_CodeTypeName, vCodeTypeSimCodeTypeName , enumComparisonOp.Like_03);
 return arrCodeTypeId;
}
catch (e)
{
const strMsg = Format("(errid:Watl001233)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cTCodeTypeGroupRelaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCTCodeTypeGroupRelaS:源对象
 **/
export  async function CTCodeTypeGroupRelaEx_FuncMapKeyGroupName(objCTCodeTypeGroupRela:clsCTCodeTypeGroupRelaENEx ): Promise<Array<string>>
{
const strThisFuncName = CTCodeTypeGroupRelaEx_FuncMapKeyGroupName.name;
try
{
if (IsNullOrEmpty(objCTCodeTypeGroupRela.groupName) == true) return [];
 const CTCodeTypeGroupGroupName = objCTCodeTypeGroupRela.groupName;
 const arrCtGroupId = await CTCodeTypeGroup_funcKey(clsCTCodeTypeGroupEN.con_GroupName, CTCodeTypeGroupGroupName , enumComparisonOp.Like_03);
 return arrCtGroupId;
}
catch (e)
{
const strMsg = Format("(errid:Watl001234)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cTCodeTypeGroupRelaEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
