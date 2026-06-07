/**
 * 类名:CTCodeTypeGroup_DetailAi(界面:CTCodeTypeGroupCRUD,00050349)
 * 表名:CTCodeTypeGroup(00050648)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 12:00:46
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue_详细信息Ai_TS(Vue_ViewScript_DetailAi_TS,0276)
 * 编程语言:TypeScript
 **/
import {
  CTCodeTypeGroupKey,
  clsCTCodeTypeGroupEN,
} from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
import { CTCodeTypeGroup_GetObjByKeyAsync } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { CTCodeTypeGroupEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/GeneCode/clsCTCodeTypeGroupExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { divVarSet, refCTCodeTypeGroup_DetailAi } from '@/views/GeneCode/CTCodeTypeGroupVueShare';
import { clsCTCodeTypeGroupENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupENEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* CTCodeTypeGroup_DetailAi 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:GeneCode)
*/
export abstract class CTCodeTypeGroup_DetailAi {
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
   * (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_CTCodeTypeGroup() {
    if (CTCodeTypeGroup_DetailAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refCTCodeTypeGroup_DetailAi.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_CTCodeTypeGroup(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_CTCodeTypeGroup.name;
    if (CTCodeTypeGroup_DetailAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refCTCodeTypeGroup_DetailAi.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refCTCodeTypeGroup_DetailAi.value.showDialog();
    }
    divVarSet.refDivDetail = refCTCodeTypeGroup_DetailAi.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (CTCodeTypeGroup_DetailAi.times4TestShowDialog < 2) {
        CTCodeTypeGroup_DetailAi.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_CTCodeTypeGroup(strOp);
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
      CTCodeTypeGroup_DetailAi.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelCTCodeTypeGroup = '关闭';
    }
    return true;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(key: CTCodeTypeGroupKey) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_CTCodeTypeGroup('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (IsNullOrEmpty(key.ctGroupId) == true) {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      this.DetailRecord4Func(key);
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
  (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_Ts_DetailRecord4Func)
  <param name = "sender">参数列表</param>
*/
  public async DetailRecord4Func(key: CTCodeTypeGroupKey) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelCTCodeTypeGroup = '关闭';
    try {
      const objCTCodeTypeGroupEN = await CTCodeTypeGroup_GetObjByKeyAsync(key);
      const objCTCodeTypeGroupENEx = new clsCTCodeTypeGroupENEx();
      ObjectAssign(objCTCodeTypeGroupENEx, objCTCodeTypeGroupEN);
      await CTCodeTypeGroupEx_FuncMapByFldName(
        clsCTCodeTypeGroupENEx.con_ApplicationTypeName,
        objCTCodeTypeGroupENEx,
      );
      if (refCTCodeTypeGroup_DetailAi.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefCTCodeTypeGroup_DetailAi imported from: @/views/GeneCode/CTCodeTypeGroupVueShare',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await refCTCodeTypeGroup_DetailAi.value.ShowDataFromCTCodeTypeGroupObj(
        objCTCodeTypeGroupENEx,
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
 (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
  public async btnDetailRecord_Click(key: CTCodeTypeGroupKey) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_CTCodeTypeGroup('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(key.ctGroupId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    this.DetailRecord4Func(key);
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objCTCodeTypeGroupENS">源对象</param>
  /// <returns>目标对象=>clsCTCodeTypeGroupEN:objCTCodeTypeGroupENT</returns>
  public CopyToEx(objCTCodeTypeGroupENS: clsCTCodeTypeGroupEN): clsCTCodeTypeGroupENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objCTCodeTypeGroupENT = new clsCTCodeTypeGroupENEx();
    try {
      ObjectAssign(objCTCodeTypeGroupENT, objCTCodeTypeGroupENS);
      return objCTCodeTypeGroupENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0030)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objCTCodeTypeGroupENT;
    }
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelCTCodeTypeGroup(value: string) {
    refCTCodeTypeGroup_DetailAi.value.strCancelButtonText = value;
  }
}
