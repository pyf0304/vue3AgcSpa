/**
 * 类名:clswf_StepPointRelaEN
 * 表名:wf_StepPointRela(00050486)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/29 17:25:03
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工作流管理(WorkFlow)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 工作流与结点关系(wf_StepPointRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clswf_StepPointRelaEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'wf_StepPointRela'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'WorkFlowStepPointRelaId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 11;
  public static AttributeName = [
    'workFlowStepPointRelaId',
    'workFlowId',
    'pointId',
    'pointTypeId',
    'levelNo',
    'inDegree',
    'outDegree',
    'orderNum',
    'updDate',
    'updUser',
    'memo',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mlngWorkFlowStepPointRelaId = 0; //工作流与结点关系Id
  private mstrWorkFlowId = ''; //工作流Id
  private mstrPointId = ''; //结点Id
  private mstrPointTypeId = ''; //工作流结点类型Id
  private mintLevelNo = 0; //层序号
  private mintInDegree = 0; //入度
  private mintOutDegree = 0; //出度
  private mintOrderNum = 0; //序号
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 工作流与结点关系Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWorkFlowStepPointRelaId(value: number) {
    if (value != undefined) {
      this.workFlowStepPointRelaId = value;
      this.hmProperty['workFlowStepPointRelaId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工作流Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWorkFlowId(value: string) {
    if (value != undefined) {
      this.workFlowId = value;
      this.hmProperty['workFlowId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 结点Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPointId(value: string) {
    if (value != undefined) {
      this.pointId = value;
      this.hmProperty['pointId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工作流结点类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPointTypeId(value: string) {
    if (value != undefined) {
      this.pointTypeId = value;
      this.hmProperty['pointTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 层序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLevelNo(value: number) {
    if (value != undefined) {
      this.levelNo = value;
      this.hmProperty['levelNo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 入度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInDegree(value: number) {
    if (value != undefined) {
      this.inDegree = value;
      this.hmProperty['inDegree'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 出度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOutDegree(value: number) {
    if (value != undefined) {
      this.outDegree = value;
      this.hmProperty['outDegree'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clswf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
        return this.workFlowStepPointRelaId;
      case clswf_StepPointRelaEN.con_WorkFlowId:
        return this.workFlowId;
      case clswf_StepPointRelaEN.con_PointId:
        return this.pointId;
      case clswf_StepPointRelaEN.con_PointTypeId:
        return this.pointTypeId;
      case clswf_StepPointRelaEN.con_LevelNo:
        return this.levelNo;
      case clswf_StepPointRelaEN.con_InDegree:
        return this.inDegree;
      case clswf_StepPointRelaEN.con_OutDegree:
        return this.outDegree;
      case clswf_StepPointRelaEN.con_OrderNum:
        return this.orderNum;
      case clswf_StepPointRelaEN.con_UpdDate:
        return this.updDate;
      case clswf_StepPointRelaEN.con_UpdUser:
        return this.updUser;
      case clswf_StepPointRelaEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[wf_StepPointRela]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clswf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
        this.workFlowStepPointRelaId = Number(strValue);
        this.hmProperty['workFlowStepPointRelaId'] = true;
        break;
      case clswf_StepPointRelaEN.con_WorkFlowId:
        this.workFlowId = strValue;
        this.hmProperty['workFlowId'] = true;
        break;
      case clswf_StepPointRelaEN.con_PointId:
        this.pointId = strValue;
        this.hmProperty['pointId'] = true;
        break;
      case clswf_StepPointRelaEN.con_PointTypeId:
        this.pointTypeId = strValue;
        this.hmProperty['pointTypeId'] = true;
        break;
      case clswf_StepPointRelaEN.con_LevelNo:
        this.levelNo = Number(strValue);
        this.hmProperty['levelNo'] = true;
        break;
      case clswf_StepPointRelaEN.con_InDegree:
        this.inDegree = Number(strValue);
        this.hmProperty['inDegree'] = true;
        break;
      case clswf_StepPointRelaEN.con_OutDegree:
        this.outDegree = Number(strValue);
        this.hmProperty['outDegree'] = true;
        break;
      case clswf_StepPointRelaEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clswf_StepPointRelaEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clswf_StepPointRelaEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clswf_StepPointRelaEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[wf_StepPointRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public workFlowStepPointRelaId = 0; //工作流与结点关系Id
  public workFlowId = ''; //工作流Id
  public pointId = ''; //结点Id
  public pointTypeId = ''; //工作流结点类型Id
  public levelNo = 0; //层序号
  public inDegree = 0; //入度
  public outDegree = 0; //出度
  public orderNum = 0; //序号
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"WorkFlowStepPointRelaId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WorkFlowStepPointRelaId(): string {
    return 'workFlowStepPointRelaId';
  } //工作流与结点关系Id

  /**
   * 常量:"WorkFlowId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WorkFlowId(): string {
    return 'workFlowId';
  } //工作流Id

  /**
   * 常量:"PointId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PointId(): string {
    return 'pointId';
  } //结点Id

  /**
   * 常量:"PointTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PointTypeId(): string {
    return 'pointTypeId';
  } //工作流结点类型Id

  /**
   * 常量:"LevelNo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LevelNo(): string {
    return 'levelNo';
  } //层序号

  /**
   * 常量:"InDegree"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InDegree(): string {
    return 'inDegree';
  } //入度

  /**
   * 常量:"OutDegree"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OutDegree(): string {
    return 'outDegree';
  } //出度

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
}
