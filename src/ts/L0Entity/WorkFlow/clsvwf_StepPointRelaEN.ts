/**
 * 类名:clsvwf_StepPointRelaEN
 * 表名:vwf_StepPointRela(00050487)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/29 17:34:50
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
 * v工作流与结点关系(vwf_StepPointRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvwf_StepPointRelaEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vwf_StepPointRela'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'WorkFlowStepPointRelaId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 18;
  public static AttributeName = [
    'workFlowStepPointRelaId',
    'workFlowId',
    'workFlowName',
    'workFlowNameSim',
    'prjId',
    'prjName',
    'pointId',
    'pointName',
    'tabKeyId',
    'pointTypeId',
    'pointTypeName',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvwf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
        return this.workFlowStepPointRelaId;
      case clsvwf_StepPointRelaEN.con_WorkFlowId:
        return this.workFlowId;
      case clsvwf_StepPointRelaEN.con_WorkFlowName:
        return this.workFlowName;
      case clsvwf_StepPointRelaEN.con_WorkFlowNameSim:
        return this.workFlowNameSim;
      case clsvwf_StepPointRelaEN.con_PrjId:
        return this.prjId;
      case clsvwf_StepPointRelaEN.con_PrjName:
        return this.prjName;
      case clsvwf_StepPointRelaEN.con_PointId:
        return this.pointId;
      case clsvwf_StepPointRelaEN.con_PointName:
        return this.pointName;
      case clsvwf_StepPointRelaEN.con_TabKeyId:
        return this.tabKeyId;
      case clsvwf_StepPointRelaEN.con_PointTypeId:
        return this.pointTypeId;
      case clsvwf_StepPointRelaEN.con_PointTypeName:
        return this.pointTypeName;
      case clsvwf_StepPointRelaEN.con_LevelNo:
        return this.levelNo;
      case clsvwf_StepPointRelaEN.con_InDegree:
        return this.inDegree;
      case clsvwf_StepPointRelaEN.con_OutDegree:
        return this.outDegree;
      case clsvwf_StepPointRelaEN.con_OrderNum:
        return this.orderNum;
      case clsvwf_StepPointRelaEN.con_UpdDate:
        return this.updDate;
      case clsvwf_StepPointRelaEN.con_UpdUser:
        return this.updUser;
      case clsvwf_StepPointRelaEN.con_Memo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vwf_StepPointRela]中不存在!`;
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
      case clsvwf_StepPointRelaEN.con_WorkFlowStepPointRelaId:
        this.workFlowStepPointRelaId = Number(strValue);
        break;
      case clsvwf_StepPointRelaEN.con_WorkFlowId:
        this.workFlowId = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_WorkFlowName:
        this.workFlowName = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_WorkFlowNameSim:
        this.workFlowNameSim = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_PrjName:
        this.prjName = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_PointId:
        this.pointId = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_PointName:
        this.pointName = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_TabKeyId:
        this.tabKeyId = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_PointTypeId:
        this.pointTypeId = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_PointTypeName:
        this.pointTypeName = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_LevelNo:
        this.levelNo = Number(strValue);
        break;
      case clsvwf_StepPointRelaEN.con_InDegree:
        this.inDegree = Number(strValue);
        break;
      case clsvwf_StepPointRelaEN.con_OutDegree:
        this.outDegree = Number(strValue);
        break;
      case clsvwf_StepPointRelaEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvwf_StepPointRelaEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvwf_StepPointRelaEN.con_Memo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vwf_StepPointRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public workFlowName = ''; //工作流名称
  public workFlowNameSim = ''; //工作流简称
  public prjId = ''; //工程ID
  public prjName = ''; //工程名称
  public pointId = ''; //结点Id
  public pointName = ''; //结点名称
  public tabKeyId = ''; //表关键字Id
  public pointTypeId = ''; //工作流结点类型Id
  public pointTypeName = ''; //工作流结点类型名称
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
   * 常量:"WorkFlowName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WorkFlowName(): string {
    return 'workFlowName';
  } //工作流名称

  /**
   * 常量:"WorkFlowNameSim"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WorkFlowNameSim(): string {
    return 'workFlowNameSim';
  } //工作流简称

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"PrjName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"PointId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PointId(): string {
    return 'pointId';
  } //结点Id

  /**
   * 常量:"PointName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PointName(): string {
    return 'pointName';
  } //结点名称

  /**
   * 常量:"TabKeyId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabKeyId(): string {
    return 'tabKeyId';
  } //表关键字Id

  /**
   * 常量:"PointTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PointTypeId(): string {
    return 'pointTypeId';
  } //工作流结点类型Id

  /**
   * 常量:"PointTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PointTypeName(): string {
    return 'pointTypeName';
  } //工作流结点类型名称

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
