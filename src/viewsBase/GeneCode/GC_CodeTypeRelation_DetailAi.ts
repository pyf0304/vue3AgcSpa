/**
 * 类名:GC_CodeTypeRelation_DetailAi(界面:GC_CodeTypeRelationCRUD,00050348)
 * 表名:GC_CodeTypeRelation(00050646)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/05 05:30:36
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
  GC_CodeTypeRelationKey,
  clsGC_CodeTypeRelationEN,
} from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';
import { GC_CodeTypeRelation_GetObjByKeyAsync } from '@/ts/L3ForWApi/GeneCode/clsGC_CodeTypeRelationWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { GC_CodeTypeRelationEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/GeneCode/clsGC_CodeTypeRelationExWApi';
import { Format } from '@/ts/PubFun/clsString';
import {
  divVarSet,
  refGC_CodeTypeRelation_DetailAi,
} from '@/views/GeneCode/GC_CodeTypeRelationVueShare';
import { clsGC_CodeTypeRelationENEx } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationENEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* GC_CodeTypeRelation_DetailAi 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:GeneCode)
*/
export abstract class GC_CodeTypeRelation_DetailAi {
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
  public HideDialog_GC_CodeTypeRelation() {
    if (GC_CodeTypeRelation_DetailAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refGC_CodeTypeRelation_DetailAi.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_GC_CodeTypeRelation(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_GC_CodeTypeRelation.name;
    if (GC_CodeTypeRelation_DetailAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refGC_CodeTypeRelation_DetailAi.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refGC_CodeTypeRelation_DetailAi.value.showDialog();
    }
    divVarSet.refDivDetail = refGC_CodeTypeRelation_DetailAi.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (GC_CodeTypeRelation_DetailAi.times4TestShowDialog < 2) {
        GC_CodeTypeRelation_DetailAi.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_GC_CodeTypeRelation(strOp);
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
      GC_CodeTypeRelation_DetailAi.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelGC_CodeTypeRelation = '关闭';
    }
    return true;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(key: GC_CodeTypeRelationKey) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_GC_CodeTypeRelation('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (key.relationId == 0) {
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
  public async DetailRecord4Func(key: GC_CodeTypeRelationKey) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelGC_CodeTypeRelation = '关闭';
    try {
      const objGC_CodeTypeRelationEN = await GC_CodeTypeRelation_GetObjByKeyAsync(key);
      const objGC_CodeTypeRelationENEx = new clsGC_CodeTypeRelationENEx();
      ObjectAssign(objGC_CodeTypeRelationENEx, objGC_CodeTypeRelationEN);
      await GC_CodeTypeRelationEx_FuncMapByFldName(
        clsGC_CodeTypeRelationENEx.con_ParentCodeTypeName,
        objGC_CodeTypeRelationENEx,
      );
      await GC_CodeTypeRelationEx_FuncMapByFldName(
        clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName,
        objGC_CodeTypeRelationENEx,
      );
      await GC_CodeTypeRelationEx_FuncMapByFldName(
        clsGC_CodeTypeRelationENEx.con_RelationTypeName,
        objGC_CodeTypeRelationENEx,
      );
      await GC_CodeTypeRelationEx_FuncMapByFldName(
        clsGC_CodeTypeRelationENEx.con_ArrowType,
        objGC_CodeTypeRelationENEx,
      );
      if (refGC_CodeTypeRelation_DetailAi.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefGC_CodeTypeRelation_DetailAi imported from: @/views/GeneCode/GC_CodeTypeRelationVueShare',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await refGC_CodeTypeRelation_DetailAi.value.ShowDataFromGC_CodeTypeRelationObj(
        objGC_CodeTypeRelationENEx,
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
  public async btnDetailRecord_Click(key: GC_CodeTypeRelationKey) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_GC_CodeTypeRelation('Detail');
    if (bolIsSuccess == false) return;
    if (key.relationId == 0) {
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
  /// <param name = "objGC_CodeTypeRelationENS">源对象</param>
  /// <returns>目标对象=>clsGC_CodeTypeRelationEN:objGC_CodeTypeRelationENT</returns>
  public CopyToEx(objGC_CodeTypeRelationENS: clsGC_CodeTypeRelationEN): clsGC_CodeTypeRelationENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objGC_CodeTypeRelationENT = new clsGC_CodeTypeRelationENEx();
    try {
      ObjectAssign(objGC_CodeTypeRelationENT, objGC_CodeTypeRelationENS);
      return objGC_CodeTypeRelationENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0030)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objGC_CodeTypeRelationENT;
    }
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelGC_CodeTypeRelation(value: string) {
    refGC_CodeTypeRelation_DetailAi.value.strCancelButtonText = value;
  }
}
