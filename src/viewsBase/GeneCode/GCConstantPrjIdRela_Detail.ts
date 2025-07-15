/**
 * 类名:GCConstantPrjIdRela_Detail(界面:GCConstantPrjIdRelaCRUD,00050344)
 * 表名:GCConstantPrjIdRela(00050641)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/20 07:06:24
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { GCConstantPrjIdRela_GetObjByKeyLstAsync } from '@/ts/L3ForWApi/GeneCode/clsGCConstantPrjIdRelaWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { GCConstantPrjIdRelaEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/GeneCode/clsGCConstantPrjIdRelaExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsGCConstantPrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';
import {
  divVarSet,
  refGCConstantPrjIdRela_Detail,
} from '@/views/GeneCode/GCConstantPrjIdRelaVueShare';
import { clsGCConstantPrjIdRelaENEx } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaENEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* GCConstantPrjIdRela_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class GCConstantPrjIdRela_Detail {
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
  public HideDialog_GCConstantPrjIdRela() {
    if (GCConstantPrjIdRela_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refGCConstantPrjIdRela_Detail.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_GCConstantPrjIdRela(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_GCConstantPrjIdRela.name;
    if (GCConstantPrjIdRela_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refGCConstantPrjIdRela_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refGCConstantPrjIdRela_Detail.value.showDialog();
    }
    divVarSet.refDivDetail = refGCConstantPrjIdRela_Detail.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (GCConstantPrjIdRela_Detail.times4TestShowDialog < 2) {
        GCConstantPrjIdRela_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_GCConstantPrjIdRela(strOp);
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
      GCConstantPrjIdRela_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelGCConstantPrjIdRela = '关闭';
    }
    return true;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(strConstId: string, strPrjId: string) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_GCConstantPrjIdRela('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (IsNullOrEmpty(strConstId) == true) {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      if (IsNullOrEmpty(strPrjId) == true) {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      this.DetailRecord4Func(strConstId, strPrjId);
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
  public async DetailRecord4Func(strConstId: string, strPrjId: string) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelGCConstantPrjIdRela = '关闭';
    try {
      const objGCConstantPrjIdRelaEN = await GCConstantPrjIdRela_GetObjByKeyLstAsync(
        strConstId,
        strPrjId,
      );
      const objGCConstantPrjIdRelaENEx = new clsGCConstantPrjIdRelaENEx();
      ObjectAssign(objGCConstantPrjIdRelaENEx, objGCConstantPrjIdRelaEN);
      await GCConstantPrjIdRelaEx_FuncMapByFldName(
        clsGCConstantPrjIdRelaENEx.con_PrjName,
        objGCConstantPrjIdRelaENEx,
      );
      await GCConstantPrjIdRelaEx_FuncMapByFldName(
        clsGCConstantPrjIdRelaENEx.con_DataTypeName,
        objGCConstantPrjIdRelaENEx,
      );
      await GCConstantPrjIdRelaEx_FuncMapByFldName(
        clsGCConstantPrjIdRelaENEx.con_CsType,
        objGCConstantPrjIdRelaENEx,
      );
      await GCConstantPrjIdRelaEx_FuncMapByFldName(
        clsGCConstantPrjIdRelaENEx.con_TypeScriptType,
        objGCConstantPrjIdRelaENEx,
      );
      await GCConstantPrjIdRelaEx_FuncMapByFldName(
        clsGCConstantPrjIdRelaENEx.con_DataTypeId,
        objGCConstantPrjIdRelaENEx,
      );
      await GCConstantPrjIdRelaEx_FuncMapByFldName(
        clsGCConstantPrjIdRelaENEx.con_ConstName,
        objGCConstantPrjIdRelaENEx,
      );
      if (refGCConstantPrjIdRela_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefGCConstantPrjIdRela_Detail imported from: @/views/GeneCode/GCConstantPrjIdRelaVueShare',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await refGCConstantPrjIdRela_Detail.value.ShowDataFromGCConstantPrjIdRelaObj(
        objGCConstantPrjIdRelaENEx,
      );
      console.log('完成DetailRecord4Func!');
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
  public async btnDetailRecord_Click(strConstId: string, strPrjId: string) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_GCConstantPrjIdRela('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strConstId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    if (IsNullOrEmpty(strPrjId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    this.DetailRecord4Func(strConstId, strPrjId);
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objGCConstantPrjIdRelaENS">源对象</param>
  /// <returns>目标对象=>clsGCConstantPrjIdRelaEN:objGCConstantPrjIdRelaENT</returns>
  public CopyToEx(objGCConstantPrjIdRelaENS: clsGCConstantPrjIdRelaEN): clsGCConstantPrjIdRelaENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objGCConstantPrjIdRelaENT = new clsGCConstantPrjIdRelaENEx();
    try {
      ObjectAssign(objGCConstantPrjIdRelaENT, objGCConstantPrjIdRelaENS);
      return objGCConstantPrjIdRelaENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objGCConstantPrjIdRelaENT;
    }
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelGCConstantPrjIdRela(value: string) {
    refGCConstantPrjIdRela_Detail.value.strCancelButtonText = value;
  }
}
