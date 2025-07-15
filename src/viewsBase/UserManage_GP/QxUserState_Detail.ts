/**
 * 类名:QxUserState_Detail(界面:QxUserStateCRUD)
 * 表名:QxUserState(00140016)
 * 版本:2024.04.16.1(服务器:WIN-SRV103-116)
 * 日期:2024/04/19 01:09:07
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { QxUserState_GetObjByUserStateIdAsync } from '@/ts/L3ForWApi/UserManage_GP/clsQxUserStateWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxUserStateEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserStateEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { refQxUserState_Detail, divVarSet } from '@/viewsShare/UserManage_GP/QxUserStateVueShare';
/* QxUserState_Detail 的摘要说明。其中Q代表查询,U代表修改
   (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
 */
export abstract class QxUserState_Detail {
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
  public HideDialog_QxUserState() {
    if (QxUserState_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refQxUserState_Detail.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_QxUserState(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxUserState.name;
    if (QxUserState_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refQxUserState_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refQxUserState_Detail.value.showDialog();
    }
    divVarSet.refDivDetail = refQxUserState_Detail.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (QxUserState_Detail.times4TestShowDialog < 2) {
        QxUserState_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxUserState(strOp);
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
      QxUserState_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelQxUserState = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxUserState_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (divVarSet.refDivDetail != null) return divVarSet.refDivDetail;
    } else {
      if (refQxUserState_Detail.value.dialogVisible == false) {
        const strMsg = Format(
          '当前详细信息区的的对话框还没有打开，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
    }
    divVarSet.refDivDetail = refQxUserState_Detail.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (QxUserState_Detail.times4TestShowDialog < 2) {
        QxUserState_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      QxUserState_Detail.times4TestShowDialog = 0;
    }
    return divVarSet.refDivDetail;
  }

  /* 
  在数据表里详细信息记录
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
 */
  public async btnDetailRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_QxUserState('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      this.DetailRecord(strKeyId);
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
   (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
   <param name = "sender">参数列表</param>
 */
  public async DetailRecord(strUserStateId: string): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelQxUserState = '关闭';
    try {
      const objQxUserStateEN = await QxUserState_GetObjByUserStateIdAsync(strUserStateId);
      if (objQxUserStateEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromQxUserStateClass(objQxUserStateEN);
      console.log('完成DetailRecord!');
    } catch (e) {
      const strMsg = Format(
        '显示详细信息不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }

  /* 修改记录
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
 */
  public async btnDetailRecord_Click(strKeyId: string) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_QxUserState('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    this.DetailRecord(strKeyId);
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
   (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass)
   <param name = "pobjQxUserStateEN">表实体类对象</param>
 */
  public ShowDetailDataFromQxUserStateClass(pobjQxUserStateEN: clsQxUserStateEN) {
    this.userStateName_d = pobjQxUserStateEN.userStateName; // 用户状态名
    this.memo_d = pobjQxUserStateEN.memo; // 备注
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelQxUserState(value: string) {
    refQxUserState_Detail.value.SetButtonText('btnCancelQxUserState', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblMemo_d', value);
  }
  /**
   * 用户状态名 (Used In ShowDetailDataFromClass())
   **/
  public set userStateName_d(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivDetail, 'lblUserStateName_d', value);
  }
}
