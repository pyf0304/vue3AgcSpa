
 /**
 * 类名:PrjFileType_DetailAi(界面:PrjFileTypeCRUD,00050352)
 * 表名:PrjFileType(00050649)
 * 版本:2026.05.30(服务器:WIN-SRV103-116)
 * 日期:2026/06/13 06:18:40
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:资源管理(ResourceMan)
 * 框架-层名:Vue_详细信息Ai_TS(Vue_ViewScript_DetailAi_TS,0276)
 * 编程语言:TypeScript
 **/
import { PrjFileType_GetObjByKeyAsync } from "@/ts/L3ForWApi/ResourceMan/clsPrjFileTypeWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { divVarSet,refPrjFileType_DetailAi } from "@/views/ResourceMan/PrjFileTypeVueShare";
import { PrjFileTypeKey } from "@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /* PrjFileType_DetailAi 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:GeneCode)
*/
export abstract class  PrjFileType_DetailAi 
{
public static times4TestShowDialog = 0;
public opType = "";
public keyId = "";
public static strPageDispModeId = "01";//PopupBox(弹出框)
private iShowList: IShowList;
public mstrListDiv = "divDataLst";
public bolIsLoadDetailRegion = false;  //记录是否导入编辑区的变量
public divName4Detail = "divDetail";  //编辑区的Id
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivDetail(): HTMLDivElement {
return divVarSet.refDivDetail;
}
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivLayout(): HTMLDivElement {
return divVarSet.refDivDetail;
}
constructor(objShowList: IShowList) {
this.iShowList = objShowList;
}


 /**
 * 隐藏对话框
 * (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_TS_HideDialog)
 **/
public HideDialog_PrjFileType() {
if (PrjFileType_DetailAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refPrjFileType_DetailAi.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_PrjFileType(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_PrjFileType.name;
if (PrjFileType_DetailAi.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refPrjFileType_DetailAi.value == null)
{
const strMsg = Format(
'当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return false;
}
await refPrjFileType_DetailAi.value.showDialog();
}
divVarSet.refDivDetail = refPrjFileType_DetailAi.value.$refs.refDivDetail;
if (divVarSet.refDivDetail == null)
{
if (PrjFileType_DetailAi.times4TestShowDialog < 2)
{
PrjFileType_DetailAi.times4TestShowDialog++;
setTimeout(() => {
this.ShowDialog_PrjFileType(strOp);
}, 100);
}
else
{
const strMsg = Format("当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
return false;
} else {
PrjFileType_DetailAi.times4TestShowDialog = 0;
}
       if (strOp === "Detail" ) {
this.btnCancelPrjFileType = "关闭";
        }
return true;
}

 /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
public async btnDetailRecordInTab_Click(key: PrjFileTypeKey) {
const strThisFuncName = this.btnDetailRecordInTab_Click.name;
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_PrjFileType('Detail');
if (bolIsSuccess == false) return;
try
{
 if (IsNullOrEmpty(key.prjFileTypeId) == true)
{
alert("请选择需要详细信息的记录!");
return "";
}
this.DetailRecord(key);
}
catch(e)
{
const strMsg = Format("详细信息记录不成功. {0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /* 
 根据关键字详细信息记录
  (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_Ts_DetailRecord)
  <param name = "sender">参数列表</param>
*/
public async DetailRecord(key: PrjFileTypeKey):Promise<boolean> 
{
const strThisFuncName = this.DetailRecord.name;
this.btnCancelPrjFileType = "关闭";
try
{
const objPrjFileTypeEN = await PrjFileType_GetObjByKeyAsync(key);
       if (objPrjFileTypeEN == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return false;
        }
if (refPrjFileType_DetailAi.value == null)
{
const strMsg = Format('当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefPrjFileType_DetailAi imported from: @/views/ResourceMan/PrjFileTypeVueShare',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return false;
}
await refPrjFileType_DetailAi.value.ShowDataFromPrjFileTypeObj(objPrjFileTypeEN);
console.log("完成DetailRecord!");
}
catch(e)
{
const strMsg = Format("显示详细信息不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
            return false;
}
            return true;
}

 /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
public async btnDetailRecord_Click(key: PrjFileTypeKey) {
this.opType = "Detail";
const bolIsSuccess = await this.ShowDialog_PrjFileType('Detail');
if (bolIsSuccess == false) return;
if (IsNullOrEmpty(key.prjFileTypeId) == true)
{
const strMsg = "需要显示详细信息记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
}
 // 为编辑区绑定下拉框
//const conBindDdl = await this.BindDdl4DetailRegion();
this.bolIsLoadDetailRegion = true;  //
this.DetailRecord(key);
}
 /**
 * 设置取消按钮的标题(Used In DetailRecord())
 **/
public  set btnCancelPrjFileType(value: string) {
refPrjFileType_DetailAi.value.strCancelButtonText = value;
}
}