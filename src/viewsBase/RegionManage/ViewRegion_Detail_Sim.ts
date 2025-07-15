/**
 * 类名:ViewRegion_Detail_Sim(界面:ViewRegion_U,00050290)
 * 表名:ViewRegion(00050099)
 * 版本:2025.05.19.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/19 11:40:57
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { ViewRegion_GetObjByRegionIdAsync } from '@/ts/L3ForWApi/RegionManage/clsViewRegionWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { ViewRegionEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import {
  RegionId_Static,
  divVarSet,
  refViewRegion_Detail_Sim,
} from '@/views/RegionManage/ViewRegion_UVueShare';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { clsViewRegionENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionENEx';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* ViewRegion_Detail_Sim 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class ViewRegion_Detail_Sim {
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '02'; //Right(右边)
  private iShowList: IShowList;
  public mstrListDiv = 'divDataLst';
  public bolIsLoadDetailRegion = false; //记录是否导入编辑区的变量
  public divName4Detail = 'divDetail'; //编辑区的Id
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
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_ViewRegion() {
    if (ViewRegion_Detail_Sim.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refViewRegion_Detail_Sim.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_ViewRegion(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_ViewRegion.name;
    if (ViewRegion_Detail_Sim.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refViewRegion_Detail_Sim.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refViewRegion_Detail_Sim.value.showDialog();
    }
    divVarSet.refDivDetail = refViewRegion_Detail_Sim.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (ViewRegion_Detail_Sim.times4TestShowDialog < 2) {
        ViewRegion_Detail_Sim.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_ViewRegion(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      ViewRegion_Detail_Sim.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelViewRegion = '关闭';
    }
    return true;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      this.DetailRecord4Func(strKeyId);
    } catch (e) {
      const strMsg = Format(
        '详细信息记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 
 根据关键字详细信息记录
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord4Func)
  <param name = "sender">参数列表</param>
*/
  public async DetailRecord4Func(strRegionId: string) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelViewRegion = '关闭';
    try {
      const objViewRegionEN = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
      const objViewRegionENEx = new clsViewRegionENEx();
      ObjectAssign(objViewRegionENEx, objViewRegionEN);
      await ViewRegionEx_FuncMapByFldName(
        clsViewRegionENEx.con_PageDispModeName,
        objViewRegionENEx,
      );
      await ViewRegionEx_FuncMapByFldName(
        clsViewRegionENEx.con_ContainerTypeName,
        objViewRegionENEx,
      );
      await ViewRegionEx_FuncMapByFldName(clsViewRegionENEx.con_InOutTypeName, objViewRegionENEx);
      await ViewRegionEx_FuncMapByFldName(clsViewRegionENEx.con_TabName, objViewRegionENEx);
      if (refViewRegion_Detail_Sim.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefViewRegion_Detail_Sim imported from: @/views/RegionManage/ViewRegion_UVueShare',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await refViewRegion_Detail_Sim.value.ShowDataFromViewRegionObj(objViewRegionENEx);
    } catch (e) {
      const strMsg = Format(
        '显示详细信息4Func不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
  public async btnDetailRecord_Click() {
    this.opType = 'Detail';
    const strKeyId = RegionId_Static.value;
    if (strKeyId == '') {
      alert('在显示详细信息时,界面静态关键字为空!(In btnDetailRecord_Click)');
      return;
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    this.DetailRecord4Func(strKeyId);
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objViewRegionENS">源对象</param>
  /// <returns>目标对象=>clsViewRegionEN:objViewRegionENT</returns>
  public CopyToEx(objViewRegionENS: clsViewRegionEN): clsViewRegionENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objViewRegionENT = new clsViewRegionENEx();
    try {
      ObjectAssign(objViewRegionENT, objViewRegionENS);
      return objViewRegionENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objViewRegionENT;
    }
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelViewRegion(value: string) {
    refViewRegion_Detail_Sim.value.strCancelButtonText = value;
  }
}
