/**
 * 类名:ViewRegionRela_Detail(界面:ViewRegionRelaCRUD,00050322)
 * 表名:ViewRegionRela(00050573)
 * 版本:2025.05.19.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/19 11:40:27
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { ViewRegionRela_GetObjBymIdAsync } from '@/ts/L3ForWApi/RegionManage/clsViewRegionRelaWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { ViewRegionRelaEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { divVarSet, refViewRegionRela_Detail } from '@/views/RegionManage/ViewRegionRelaVueShare';
import { clsViewRegionRelaENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaENEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* ViewRegionRela_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class ViewRegionRela_Detail {
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
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
  public HideDialog_ViewRegionRela() {
    if (ViewRegionRela_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refViewRegionRela_Detail.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_ViewRegionRela(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_ViewRegionRela.name;
    if (ViewRegionRela_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refViewRegionRela_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refViewRegionRela_Detail.value.showDialog();
    }
    divVarSet.refDivDetail = refViewRegionRela_Detail.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (ViewRegionRela_Detail.times4TestShowDialog < 2) {
        ViewRegionRela_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_ViewRegionRela(strOp);
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
      ViewRegionRela_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelViewRegionRela = '关闭';
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
    const bolIsSuccess = await this.ShowDialog_ViewRegionRela('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      this.DetailRecord4Func(lngKeyId);
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
  public async DetailRecord4Func(lngmId: number) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelViewRegionRela = '关闭';
    try {
      const objViewRegionRelaEN = await ViewRegionRela_GetObjBymIdAsync(lngmId);
      const objViewRegionRelaENEx = new clsViewRegionRelaENEx();
      ObjectAssign(objViewRegionRelaENEx, objViewRegionRelaEN);
      await ViewRegionRelaEx_FuncMapByFldName(
        clsViewRegionRelaENEx.con_RegionTypeOrderNum,
        objViewRegionRelaENEx,
      );
      await ViewRegionRelaEx_FuncMapByFldName(
        clsViewRegionRelaENEx.con_RegionName,
        objViewRegionRelaENEx,
      );
      await ViewRegionRelaEx_FuncMapByFldName(
        clsViewRegionRelaENEx.con_RegionTypeSimName,
        objViewRegionRelaENEx,
      );
      await ViewRegionRelaEx_FuncMapByFldName(
        clsViewRegionRelaENEx.con_ContainerTypeName,
        objViewRegionRelaENEx,
      );
      await ViewRegionRelaEx_FuncMapByFldName(
        clsViewRegionRelaENEx.con_FileName,
        objViewRegionRelaENEx,
      );
      await ViewRegionRelaEx_FuncMapByFldName(
        clsViewRegionRelaENEx.con_PageDispModeName,
        objViewRegionRelaENEx,
      );
      await ViewRegionRelaEx_FuncMapByFldName(
        clsViewRegionRelaENEx.con_ClsName,
        objViewRegionRelaENEx,
      );
      await ViewRegionRelaEx_FuncMapByFldName(
        clsViewRegionRelaENEx.con_FldNum,
        objViewRegionRelaENEx,
      );
      if (refViewRegionRela_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefViewRegionRela_Detail imported from: @/views/RegionManage/ViewRegionRelaVueShare',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await refViewRegionRela_Detail.value.ShowDataFromViewRegionRelaObj(objViewRegionRelaENEx);
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
  public async btnDetailRecord_Click(strKeyId: string) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_ViewRegionRela('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    const lngKeyId = Number(strKeyId);
    this.DetailRecord4Func(lngKeyId);
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objViewRegionRelaENS">源对象</param>
  /// <returns>目标对象=>clsViewRegionRelaEN:objViewRegionRelaENT</returns>
  public CopyToEx(objViewRegionRelaENS: clsViewRegionRelaEN): clsViewRegionRelaENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objViewRegionRelaENT = new clsViewRegionRelaENEx();
    try {
      ObjectAssign(objViewRegionRelaENT, objViewRegionRelaENS);
      return objViewRegionRelaENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objViewRegionRelaENT;
    }
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelViewRegionRela(value: string) {
    refViewRegionRela_Detail.value.strCancelButtonText = value;
  }
}
