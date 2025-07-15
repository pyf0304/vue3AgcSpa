/**
 * 类名:css_Style_Detail(界面:css_StyleCRUD,00050330)
 * 表名:css_Style(00050468)
 * 版本:2025.05.19.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/19 11:40:32
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:样式表管理(CssManage)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { css_Style_GetObjByStyleIdAsync } from '@/ts/L3ForWApi/CssManage/clscss_StyleWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { css_StyleEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/CssManage/clscss_StyleExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';
import { divVarSet, refcss_Style_Detail } from '@/views/CssManage/css_StyleVueShare';
import { clscss_StyleENEx } from '@/ts/L0Entity/CssManage/clscss_StyleENEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* css_Style_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class css_Style_Detail {
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
  public HideDialog_css_Style() {
    if (css_Style_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refcss_Style_Detail.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_css_Style(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_css_Style.name;
    if (css_Style_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refcss_Style_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refcss_Style_Detail.value.showDialog();
    }
    divVarSet.refDivDetail = refcss_Style_Detail.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (css_Style_Detail.times4TestShowDialog < 2) {
        css_Style_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_css_Style(strOp);
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
      css_Style_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelcss_Style = '关闭';
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
    const bolIsSuccess = await this.ShowDialog_css_Style('Detail');
    if (bolIsSuccess == false) return;
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
  public async DetailRecord4Func(strStyleId: string) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelcss_Style = '关闭';
    try {
      const objcss_StyleEN = await css_Style_GetObjByStyleIdAsync(strStyleId);
      const objcss_StyleENEx = new clscss_StyleENEx();
      ObjectAssign(objcss_StyleENEx, objcss_StyleEN);
      await css_StyleEx_FuncMapByFldName(clscss_StyleENEx.con_CtlTypeName, objcss_StyleENEx);
      if (refcss_Style_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefcss_Style_Detail imported from: @/views/CssManage/css_StyleVueShare',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await refcss_Style_Detail.value.ShowDataFromcss_StyleObj(objcss_StyleENEx);
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
    const bolIsSuccess = await this.ShowDialog_css_Style('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
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
  /// <param name = "objcss_StyleENS">源对象</param>
  /// <returns>目标对象=>clscss_StyleEN:objcss_StyleENT</returns>
  public CopyToEx(objcss_StyleENS: clscss_StyleEN): clscss_StyleENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objcss_StyleENT = new clscss_StyleENEx();
    try {
      ObjectAssign(objcss_StyleENT, objcss_StyleENS);
      return objcss_StyleENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objcss_StyleENT;
    }
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelcss_Style(value: string) {
    refcss_Style_Detail.value.strCancelButtonText = value;
  }
}
