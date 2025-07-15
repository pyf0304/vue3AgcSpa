/**
 * 类名:DnFunction_Detail(界面:DnFunctionCRUD,00050281)
 * 表名:DnFunction(00050552)
 * 版本:2025.05.19.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/19 11:40:53
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:AI模块(AIModule)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS,0260)
 * 编程语言:TypeScript
 **/
import { DnFunction_GetObjByDnFunctionIdAsync } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { DnFunctionEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/AIModule/clsDnFunctionExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';
import { divVarSet, refDnFunction_Detail } from '@/views/AIModule/DnFunctionVueShare';
import { clsDnFunctionENEx } from '@/ts/L0Entity/AIModule/clsDnFunctionENEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* DnFunction_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class DnFunction_Detail {
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
  public HideDialog_DnFunction() {
    if (DnFunction_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refDnFunction_Detail.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_DnFunction(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_DnFunction.name;
    if (DnFunction_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refDnFunction_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refDnFunction_Detail.value.showDialog();
    }
    divVarSet.refDivDetail = refDnFunction_Detail.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (DnFunction_Detail.times4TestShowDialog < 2) {
        DnFunction_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_DnFunction(strOp);
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
      DnFunction_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelDnFunction = '关闭';
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
    const bolIsSuccess = await this.ShowDialog_DnFunction('Detail');
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
  public async DetailRecord4Func(strDnFunctionId: string) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelDnFunction = '关闭';
    try {
      const objDnFunctionEN = await DnFunction_GetObjByDnFunctionIdAsync(strDnFunctionId);
      const objDnFunctionENEx = new clsDnFunctionENEx();
      ObjectAssign(objDnFunctionENEx, objDnFunctionEN);
      await DnFunctionEx_FuncMapByFldName(
        clsDnFunctionENEx.con_AssociationMappingName,
        objDnFunctionENEx,
      );
      if (refDnFunction_Detail.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefDnFunction_Detail imported from: @/views/AIModule/DnFunctionVueShare',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await refDnFunction_Detail.value.ShowDataFromDnFunctionObj(objDnFunctionENEx);
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
    const bolIsSuccess = await this.ShowDialog_DnFunction('Detail');
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
  /// <param name = "objDnFunctionENS">源对象</param>
  /// <returns>目标对象=>clsDnFunctionEN:objDnFunctionENT</returns>
  public CopyToEx(objDnFunctionENS: clsDnFunctionEN): clsDnFunctionENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objDnFunctionENT = new clsDnFunctionENEx();
    try {
      ObjectAssign(objDnFunctionENT, objDnFunctionENS);
      return objDnFunctionENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objDnFunctionENT;
    }
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelDnFunction(value: string) {
    refDnFunction_Detail.value.strCancelButtonText = value;
  }
}
