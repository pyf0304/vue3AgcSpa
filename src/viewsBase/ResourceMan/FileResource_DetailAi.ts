/**
 * 类名:FileResource_DetailAi(界面:FileResourceCRUD,00050351)
 * 表名:FileResource(00050539)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/13 02:15:11
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:资源管理(ResourceMan)
 * 框架-层名:Vue_详细信息Ai_TS(Vue_ViewScript_DetailAi_TS,0276)
 * 编程语言:TypeScript
 **/
import { FileResourceKey, clsFileResourceEN } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
import { FileResource_GetObjByKeyAsync } from '@/ts/L3ForWApi/ResourceMan/clsFileResourceWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { FileResourceEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/ResourceMan/clsFileResourceExWApi';
import { Format } from '@/ts/PubFun/clsString';
import { divVarSet, refFileResource_DetailAi } from '@/views/ResourceMan/FileResourceVueShare';
import { clsFileResourceENEx } from '@/ts/L0Entity/ResourceMan/clsFileResourceENEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* FileResource_DetailAi 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:GeneCode)
*/
export abstract class FileResource_DetailAi {
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
  public HideDialog_FileResource() {
    if (FileResource_DetailAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refFileResource_DetailAi.value.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailAi_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_FileResource(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_FileResource.name;
    if (FileResource_DetailAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (refFileResource_DetailAi.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await refFileResource_DetailAi.value.showDialog();
    }
    divVarSet.refDivDetail = refFileResource_DetailAi.value.$refs.refDivDetail;
    if (divVarSet.refDivDetail == null) {
      if (FileResource_DetailAi.times4TestShowDialog < 2) {
        FileResource_DetailAi.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_FileResource(strOp);
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
      FileResource_DetailAi.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelFileResource = '关闭';
    }
    return true;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(key: FileResourceKey) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_FileResource('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (key.fileResourceId == 0) {
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
  public async DetailRecord4Func(key: FileResourceKey) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelFileResource = '关闭';
    try {
      const objFileResourceEN = await FileResource_GetObjByKeyAsync(key);
      const objFileResourceENEx = new clsFileResourceENEx();
      ObjectAssign(objFileResourceENEx, objFileResourceEN);
      await FileResourceEx_FuncMapByFldName(
        clsFileResourceENEx.con_CodeTypeSimName,
        objFileResourceENEx,
      );
      await FileResourceEx_FuncMapByFldName(clsFileResourceENEx.con_TabName, objFileResourceENEx);
      await FileResourceEx_FuncMapByFldName(
        clsFileResourceENEx.con_PrjFileTypeName,
        objFileResourceENEx,
      );
      if (refFileResource_DetailAi.value == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1}).\nrefFileResource_DetailAi imported from: @/views/ResourceMan/FileResourceVueShare',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await refFileResource_DetailAi.value.ShowDataFromFileResourceObj(objFileResourceENEx);
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
  public async btnDetailRecord_Click(key: FileResourceKey) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_FileResource('Detail');
    if (bolIsSuccess == false) return;
    if (key.fileResourceId == 0) {
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
  /// <param name = "objFileResourceENS">源对象</param>
  /// <returns>目标对象=>clsFileResourceEN:objFileResourceENT</returns>
  public CopyToEx(objFileResourceENS: clsFileResourceEN): clsFileResourceENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objFileResourceENT = new clsFileResourceENEx();
    try {
      ObjectAssign(objFileResourceENT, objFileResourceENS);
      return objFileResourceENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0030)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objFileResourceENT;
    }
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelFileResource(value: string) {
    refFileResource_DetailAi.value.strCancelButtonText = value;
  }
}
