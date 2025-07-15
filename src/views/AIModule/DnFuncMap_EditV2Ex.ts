// import $ from 'jquery';
import { enumAssociationMapping } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';
import { enumFuncMapMode } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import {
  vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate,
  vDataNode_SimEx_GetObjByTabIdAndFldIdByCreateWithDataType,
  vDataNode_SimEx_GetObjByTabIdAndKeyIdLstByCreate,
} from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
import {
  CheckControlExistInDivObj,
  GetCheckBoxValueInDivObj,
  GetLabelValueInDivObj,
  GetSelectValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
  SetLabelHtmlByIdInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { DnFuncMap_Edit } from '@/viewsBase/AIModule/DnFuncMap_Edit';

import { vPrjTab_SimEx_GetObjByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  DnFuncMap_AddNewRecordWithMaxIdAsync,
  DnFuncMap_CheckPropertyNew,
} from '@/ts/L3ForWApi/AIModule/clsDnFuncMapWApi';
import { DnFunctionEx_GetObjByFunctionNameCache } from '@/ts/L3ForWApiEx/AIModule/clsDnFunctionExWApi';
import { GetKeyLstByKeyFldStr } from '@/ts/PubFun/clsArray';
import { enumDataNodeType } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usevDnFuncMap_SimStore } from '@/store/modules/vDnFuncMap_Sim';
import { refDnFuncMap_Edit, divVarSet } from '@/views/AIModule/DnFuncMapVueShare';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { vDataNode_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDataNode_SimWApi';
import { vDnFuncMap_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';

/* DnFuncMap_EditV2Ex 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class DnFuncMap_EditV2Ex extends DnFuncMap_Edit {
  public static TabIdCache = '';
  public static FldIdCache = '';
  public static KeyIdLstCache = '';

  public static OutTabIdCache = '';
  public static OutFldIdCache = '';
  public static VersionNoCache = 1;

  public TabId = '';
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);

    const objPage: DnFuncMap_EditV2Ex = <DnFuncMap_EditV2Ex>(
      DnFuncMap_Edit.GetPageEditObj('DnFuncMap_EditV2Ex')
    );
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'DnFuncMap_EditV2Ex.btn_Click');

        break;
    }
  }

  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecordV2_Click(strFldId: string, strTabId: string, intVersionNo: number) {
    //alert(strTabId + ":" + strFldId);

    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('参数：[strTabId]为空，不正确！');
        return;
      }
      if (IsNullOrEmpty(strFldId) == true) {
        alert('参数：[strFldId]为空，不正确！');
        return;
      }
      DnFuncMap_EditV2Ex.TabIdCache = strTabId;
      DnFuncMap_EditV2Ex.FldIdCache = strFldId;
      DnFuncMap_EditV2Ex.VersionNoCache = intVersionNo;
      if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refDnFuncMap_Edit.value.showDialog();
      }

      this.opType = 'AddWithMaxId';

      this.bolIsLoadEditRegion = true; //
      this.AddNewRecordWithMaxId();
      const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objPrjTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strTabId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objFieldTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      this.InDataNodeDesc = Format('{0}-{1}', objPrjTab.tabName, objFieldTab.fldName);
      this.btnSubmitDnFuncMap = '确认添加';
      this.btnCancelDnFuncMap = '取消添加';
      // if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      //   this.ShowDialog_DnFuncMap('Add');
      // }
    } catch (e: any) {
      const strMsg = `添加新记录初始化不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnAddNewRecordFromKey_Click(
    strKeyIdLst: string,
    strFldId: string,
    strTabId: string,
    intVersionNo: number,
  ) {
    //alert(strTabId + ":" + strFldId);

    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('参数：[strTabId]为空，不正确！');
        return;
      }
      if (IsNullOrEmpty(strFldId) == true) {
        alert('参数：[strFldId]为空，不正确！');
        return;
      }

      if (IsNullOrEmpty(strKeyIdLst) == true) {
        alert('参数：[strKeyIdLst]为空，不正确！');
        return;
      }

      DnFuncMap_EditV2Ex.TabIdCache = strTabId;
      DnFuncMap_EditV2Ex.KeyIdLstCache = strKeyIdLst;
      DnFuncMap_EditV2Ex.OutTabIdCache = strTabId;
      DnFuncMap_EditV2Ex.OutFldIdCache = strFldId;
      DnFuncMap_EditV2Ex.VersionNoCache = intVersionNo;
      const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objPrjTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strTabId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objFieldTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      const returnKeyId = await this.AddNewRecordWithMaxIdSave_FromKey();
      if (IsNullOrEmpty(returnKeyId) == false) {
        if (this.iShowList)
          this.iShowList.BindGvCache(
            `${clsDnFuncMapEN._CurrTabName}_AddNewRecordFromKey`,
            returnKeyId,
          );
      }
    } catch (e: any) {
      const strMsg = `添加新记录初始化不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnAddNewRecord_SamNameKey_Click(
    strFldId: string,
    strTabId: string,
    strOutFldId: string,
    strOutTabId: string,
    intVersionNo: number,
  ) {
    //alert(strTabId + ":" + strFldId);

    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('参数：[strTabId]为空，不正确！');
        return;
      }
      if (IsNullOrEmpty(strFldId) == true) {
        alert('参数：[strFldId]为空，不正确！');
        return;
      }

      if (IsNullOrEmpty(strOutTabId) == true) {
        alert('参数：[strOutTabId]为空，不正确！');
        return;
      }
      if (IsNullOrEmpty(strOutFldId) == true) {
        alert('参数：[strOutFldId]为空，不正确！');
        return;
      }
      DnFuncMap_EditV2Ex.TabIdCache = strTabId;
      DnFuncMap_EditV2Ex.FldIdCache = strFldId;
      DnFuncMap_EditV2Ex.OutTabIdCache = strOutTabId;
      DnFuncMap_EditV2Ex.OutFldIdCache = strOutFldId;

      DnFuncMap_EditV2Ex.VersionNoCache = intVersionNo;

      const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objPrjTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strTabId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objFieldTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      const returnKeyId = await this.AddNewRecordWithMaxIdSave_SameNameKey();
      if (IsNullOrEmpty(returnKeyId) == false) {
        if (this.iShowList)
          this.iShowList.BindGvCache(
            `${clsDnFuncMapEN._CurrTabName}_AddNewRecord_SameNameKey`,
            returnKeyId,
          );
      }
    } catch (e: any) {
      const strMsg = `添加新记录初始化不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnAddNewRecord_SamNameKey_DN_Click(
    strFldId: string,
    strTabId: string,
    strOutFldId: string,
    strOutTabId: string,
    intVersionNo: number,
  ) {
    //alert(strTabId + ":" + strFldId);

    try {
      if (IsNullOrEmpty(strTabId) == true) {
        alert('参数：[strTabId]为空，不正确！');
        return;
      }
      if (IsNullOrEmpty(strFldId) == true) {
        alert('参数：[strFldId]为空，不正确！');
        return;
      }

      if (IsNullOrEmpty(strOutTabId) == true) {
        alert('参数：[strOutTabId]为空，不正确！');
        return;
      }
      if (IsNullOrEmpty(strOutFldId) == true) {
        alert('参数：[strOutFldId]为空，不正确！');
        return;
      }
      DnFuncMap_EditV2Ex.TabIdCache = strTabId;
      DnFuncMap_EditV2Ex.FldIdCache = strFldId;
      DnFuncMap_EditV2Ex.OutTabIdCache = strOutTabId;
      DnFuncMap_EditV2Ex.OutFldIdCache = strOutFldId;

      DnFuncMap_EditV2Ex.VersionNoCache = intVersionNo;

      const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objPrjTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，表Id:[{1}]没有相应表，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strTabId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
        strFldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objFieldTab == null) {
        const strMsg = Format(
          '在项目:[{0}]中，字段Id:[{1}]没有相应字段，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          strFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      //this.InDataNodeDesc = Format("{0}-{1}", objPrjTab.tabName, objFieldTab.fldName);
      //if (DnFuncMap_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      //    this.ShowDialog_DnFuncMap('Add');
      //}
      const returnKeyId = await this.AddNewRecordWithMaxIdSave_SameNameKey();
      if (IsNullOrEmpty(returnKeyId) == false) {
        if (this.iShowList) this.iShowList.BindGvCache(clsDnFuncMapEN._CurrTabName, returnKeyId);
      }
    } catch (e: any) {
      const strMsg = `添加新记录初始化不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 添加新记录，由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave_SameNameKey(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave_SameNameKey.name;
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    const objDnFuncMapEN = new clsDnFuncMapEN();
    try {
      await this.PutDataToDnFuncMapClass_SameNameKey(objDnFuncMapEN);
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      DnFuncMap_CheckPropertyNew(objDnFuncMapEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      //检查唯一性条件
      const bolIsExistCond_InDataNodeId_OutDataNodeId = await this.CheckUniCond4Add(objDnFuncMapEN);
      if (bolIsExistCond_InDataNodeId_OutDataNodeId == false) {
        return '';
      }
      const responseKeyId = await DnFuncMap_AddNewRecordWithMaxIdAsync(objDnFuncMapEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        vDnFuncMap_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);
        vDataNode_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        vDnFuncMap_Sim_ReFreshThisCache(clsPrivateSessionStorage.currSelPrjId);
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值，否则会出错！
  }
  public async AddNewRecordWithMaxIdSave_FromKey(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave_FromKey.name;
    const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
    const objDnFuncMapEN = new clsDnFuncMapEN();
    try {
      await this.PutDataToDnFuncMapClass_FromKey(objDnFuncMapEN);
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      DnFuncMap_CheckPropertyNew(objDnFuncMapEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      //检查唯一性条件
      const bolIsExistCond_InDataNodeId_OutDataNodeId = await this.CheckUniCond4Add(objDnFuncMapEN);
      if (bolIsExistCond_InDataNodeId_OutDataNodeId == false) {
        return '';
      }
      const responseKeyId = await DnFuncMap_AddNewRecordWithMaxIdAsync(objDnFuncMapEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        vDnFuncMap_SimStore.ReFreshByPrjId(clsPrivateSessionStorage.currSelPrjId);

        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值，否则会出错！
  }

  /**
   * 在当前界面中，导入编辑区域
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
   * @returns
   */
  public async AddDPV_Edit(divName4Edit: HTMLDivElement) {
    // CheckDivExistInDIv(divName4Edit);
    const strUrl = './DnFuncMap_EditV2';
    console.log(`divName4Edit:(In AddDPV_Edit)${divName4Edit}`);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data: any) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Edit}`).html(data);
          resolve(true);
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }
  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjDnFuncMapEN.js">数据传输的目的类对象</param>
   */
  public async PutDataToDnFuncMapClass(pobjDnFuncMapEN: clsDnFuncMapEN) {
    const objInDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate(
      DnFuncMap_EditV2Ex.TabIdCache,
      DnFuncMap_EditV2Ex.FldIdCache,
      DnFuncMap_EditV2Ex.VersionNoCache,
      clsPrivateSessionStorage.cmPrjId,
    );
    if (objInDataNode == null) {
      const strMsg = Format(
        '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
        clsPrivateSessionStorage.cmPrjName,
        DnFuncMap_EditV2Ex.TabIdCache,
        DnFuncMap_EditV2Ex.FldIdCache,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (this.isCreateMapInTab == true) {
      //if (IsNullOrEmpty(this.OutTabId) == true) {
      //    console.error("请选择输出表！");
      //    throw ("请选择输出表！");
      //}
      if (IsNullOrEmpty(this.OutFldId) == true) {
        console.error('请选择输出结点字段！');
        throw '请选择输出结点字段！';
      }
      let intVersionNo = 1;
      let strOutFldId = this.OutFldId;
      if (this.OutFldId.indexOf('V') > -1) {
        const strVersionNo = this.OutFldId.substr(9, 1);
        intVersionNo = Number(strVersionNo);
        strOutFldId = this.OutFldId.substr(0, 8);
      }

      const objOutDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate(
        DnFuncMap_EditV2Ex.TabIdCache,
        strOutFldId,
        intVersionNo,
        clsPrivateSessionStorage.cmPrjId,
      );
      if (objOutDataNode == null) {
        const strMsg = Format(
          '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
          clsPrivateSessionStorage.cmPrjName,
          this.OutTabId,
          strOutFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      pobjDnFuncMapEN.SetInDataNodeId(objInDataNode.dataNodeId); // In数据结点
      pobjDnFuncMapEN.SetOutDataNodeId(objOutDataNode.dataNodeId); // Out数据结点
      pobjDnFuncMapEN.SetAssociationMappingId(refDnFuncMap_Edit.value.associationMappingId); // 关系映射
      pobjDnFuncMapEN.SetFuncMapModeId(enumFuncMapMode.Table_01); // this.funcMapModeId;// 映射模式
      pobjDnFuncMapEN.SetTabId(DnFuncMap_EditV2Ex.TabIdCache); // this.tabId;// 表
      pobjDnFuncMapEN.SetDnFunctionId(''); // this.dnFunctionId;// DN函数
      pobjDnFuncMapEN.SetMemo(refDnFuncMap_Edit.value.memo); // 说明
      pobjDnFuncMapEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
      pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
      pobjDnFuncMapEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
    } else {
      if (IsNullOrEmpty(this.OutTabId) == true) {
        console.error('请选择输出表！');
        throw '请选择输出表！';
      }
      if (IsNullOrEmpty(this.OutFldId) == true) {
        console.error('请选择输出结点字段！');
        throw '请选择输出结点字段！';
      }
      let intVersionNo = 1;
      let strOutFldId = this.OutFldId;
      if (this.OutFldId.indexOf('V') > -1) {
        const strVersionNo = this.OutFldId.substr(9, 1);
        intVersionNo = Number(strVersionNo);
        strOutFldId = this.OutFldId.substr(0, 8);
      }

      const objOutDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate(
        this.OutTabId,
        strOutFldId,
        intVersionNo,
        clsPrivateSessionStorage.cmPrjId,
      );
      if (objOutDataNode == null) {
        const strMsg = Format(
          '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
          clsPrivateSessionStorage.cmPrjName,
          this.OutTabId,
          strOutFldId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      pobjDnFuncMapEN.SetInDataNodeId(objInDataNode.dataNodeId); // In数据结点
      pobjDnFuncMapEN.SetOutDataNodeId(objOutDataNode.dataNodeId); // Out数据结点
      pobjDnFuncMapEN.SetAssociationMappingId(refDnFuncMap_Edit.value.associationMappingId); // 关系映射
      pobjDnFuncMapEN.SetFuncMapModeId(refDnFuncMap_Edit.value.funcMapModeId); // 映射模式
      pobjDnFuncMapEN.SetTabId(refDnFuncMap_Edit.value.tabId); // 表
      pobjDnFuncMapEN.SetDnFunctionId(refDnFuncMap_Edit.value.dnFunctionId); // DN函数
      pobjDnFuncMapEN.SetMemo(refDnFuncMap_Edit.value.memo); // 说明
      pobjDnFuncMapEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID

      pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
      pobjDnFuncMapEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
    }
  }

  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjDnFuncMapEN.js">数据传输的目的类对象</param>
   */
  public async PutDataToDnFuncMapClass_SameNameKey(pobjDnFuncMapEN: clsDnFuncMapEN) {
    const strThisFuncName = this.PutDataToDnFuncMapClass_SameNameKey.name;
    const objInDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreateWithDataType(
      DnFuncMap_EditV2Ex.TabIdCache,
      DnFuncMap_EditV2Ex.FldIdCache,
      enumDataNodeType.ForeignKeyNode_04,
      DnFuncMap_EditV2Ex.VersionNoCache,
      clsPrivateSessionStorage.cmPrjId,
    );
    if (objInDataNode == null) {
      const strMsg = Format(
        '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
        clsPrivateSessionStorage.cmPrjName,
        DnFuncMap_EditV2Ex.TabIdCache,
        DnFuncMap_EditV2Ex.FldIdCache,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    //const strCondition = Format("{0}='{1}' and {2}='{3}' and {4} in (Select {4} from {5} Where {6}='{7}')",
    //    clsPrjTabFldEN.con_FldId, DnFuncMap_EditV2Ex.FldIdCache,
    //    clsPrjTabFldEN.con_FieldTypeId, enumFieldType.KeyField_02,
    //    clsPrjTabFldEN.con_TabId, clsCmProjectPrjTabEN._CurrTabName, clsCmProjectPrjTabEN.con_CmPrjId, clsPrivateSessionStorage.cmPrjId);
    //const arrPrjTabFld = await PrjTabFld_GetObjLstAsync(strCondition);
    //let objPrjTabFld_Out = null;
    //if (arrPrjTabFld.length == 0) {
    //    const strMsg = Format("该字段没有同名主键！ (in {0}.{1})", this.constructor.name, strThisFuncName);

    //    console.error(strMsg);
    //    throw (strMsg);
    //}
    //else if (arrPrjTabFld.length > 1) {
    //    for (var objInFor of arrPrjTabFld) {
    //        const strCondition_TabId = Format("{0}='{1}' and {2}='{3}'",
    //            clsPrjTabFldEN.con_TabId, objInFor.tabId,
    //            clsPrjTabFldEN.con_FieldTypeId, enumFieldType.KeyField_02);
    //        const arrPrjTabFld_TabId = await PrjTabFld_GetObjLstAsync(strCondition_TabId);
    //        if (arrPrjTabFld_TabId.length == 1) {
    //            objPrjTabFld_Out = objInFor;
    //            break;
    //        }
    //    }
    //    if (objPrjTabFld_Out == null) {
    //        const strMsg = Format("该字段有同名主键,但没有该单段的单名主键！ (in {0}.{1})", this.constructor.name, strThisFuncName);

    //        console.error(strMsg);
    //        throw (strMsg);
    //    }
    //}
    //else {
    //    objPrjTabFld_Out = arrPrjTabFld[0];
    //}
    //if (IsNullOrEmpty(objPrjTabFld_Out.tabId) == true) {
    //        console.error("请选择输出表！");
    //        throw ("请选择输出表！");
    //    }
    //if (IsNullOrEmpty(objPrjTabFld_Out.fldId) == true) {
    //        console.error("请选择输出结点字段！");
    //        throw ("请选择输出结点字段！");
    //    }
    let intVersionNo = 1;
    let strOutFldId = DnFuncMap_EditV2Ex.OutFldIdCache;
    const strOutTabId = DnFuncMap_EditV2Ex.OutTabIdCache;

    if (strOutFldId.indexOf('V') > -1) {
      const strVersionNo = strOutFldId.substr(9, 1);
      intVersionNo = Number(strVersionNo);
      strOutFldId = DnFuncMap_EditV2Ex.OutFldIdCache.substr(0, 8);
    }
    const objOutDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreateWithDataType(
      strOutTabId,
      strOutFldId,
      enumDataNodeType.Keyword_01,
      intVersionNo,
      clsPrivateSessionStorage.cmPrjId,
    );
    if (objOutDataNode == null) {
      const strMsg = Format(
        '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
        clsPrivateSessionStorage.cmPrjName,
        strOutTabId,
        strOutFldId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objDnFunction_Equal = await DnFunctionEx_GetObjByFunctionNameCache(
      'equal',
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDnFunction_Equal == null) {
      const strMsg = Format(
        '在项目:[{0}]中，没有映射函数:[equal]，请检查！(in {1}.{2}) ',
        clsPrivateSessionStorage.currSelPrjName,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    pobjDnFuncMapEN.SetInDataNodeId(objInDataNode.dataNodeId); // In数据结点
    pobjDnFuncMapEN.SetOutDataNodeId(objOutDataNode.dataNodeId); // Out数据结点
    pobjDnFuncMapEN.SetAssociationMappingId(enumAssociationMapping.OneToOne_01); // 关系映射
    pobjDnFuncMapEN.SetFuncMapModeId(enumFuncMapMode.Function_02); // 映射模式
    //pobjDnFuncMapEN.SetTabId(this.tabId);// 表
    pobjDnFuncMapEN.SetDnFunctionId(objDnFunction_Equal.dnFunctionId); // DN函数
    pobjDnFuncMapEN.SetMemo('通过同名主键建立'); // 说明
    pobjDnFuncMapEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID

    pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjDnFuncMapEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
  }
  public async PutDataToDnFuncMapClass_FromKey(pobjDnFuncMapEN: clsDnFuncMapEN) {
    const strThisFuncName = this.PutDataToDnFuncMapClass_FromKey.name;
    const arrKeyIdLst = GetKeyLstByKeyFldStr(DnFuncMap_EditV2Ex.KeyIdLstCache);

    let objInDataNode;
    if (arrKeyIdLst.length > 1) {
      objInDataNode = await vDataNode_SimEx_GetObjByTabIdAndKeyIdLstByCreate(
        DnFuncMap_EditV2Ex.TabIdCache,
        DnFuncMap_EditV2Ex.KeyIdLstCache,
        DnFuncMap_EditV2Ex.VersionNoCache,
        clsPrivateSessionStorage.cmPrjId,
      );
    } else {
      objInDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreateWithDataType(
        DnFuncMap_EditV2Ex.TabIdCache,
        DnFuncMap_EditV2Ex.KeyIdLstCache,
        enumDataNodeType.Keyword_01,
        DnFuncMap_EditV2Ex.VersionNoCache,
        clsPrivateSessionStorage.cmPrjId,
      );
    }
    if (objInDataNode == null) {
      const strMsg = Format(
        '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
        clsPrivateSessionStorage.cmPrjName,
        DnFuncMap_EditV2Ex.TabIdCache,
        DnFuncMap_EditV2Ex.KeyIdLstCache,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    let intVersionNo = 1;
    let strOutFldId = DnFuncMap_EditV2Ex.OutFldIdCache;
    const strOutTabId = DnFuncMap_EditV2Ex.OutTabIdCache;

    if (strOutFldId.indexOf('V') > -1) {
      const strVersionNo = strOutFldId.substr(9, 1);
      intVersionNo = Number(strVersionNo);
      strOutFldId = DnFuncMap_EditV2Ex.OutFldIdCache.substr(0, 8);
    }

    const objOutDataNode = await vDataNode_SimEx_GetObjByTabIdAndFldIdByCreate(
      strOutTabId,
      strOutFldId,
      intVersionNo,
      clsPrivateSessionStorage.cmPrjId,
    );
    if (objOutDataNode == null) {
      const strMsg = Format(
        '在CM项目:[{0}]中，表Id:[{1}], 字段Id:[{2}]没有相应数据结点，请检查！',
        clsPrivateSessionStorage.cmPrjName,
        strOutTabId,
        strOutFldId,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objDnFunction_Equal = await DnFunctionEx_GetObjByFunctionNameCache(
      'equal',
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objDnFunction_Equal == null) {
      const strMsg = Format(
        '在项目:[{0}]中，没有映射函数:[equal]，请检查！(in {1}.{2}) ',
        clsPrivateSessionStorage.currSelPrjName,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    pobjDnFuncMapEN.SetInDataNodeId(objInDataNode.dataNodeId); // In数据结点
    pobjDnFuncMapEN.SetOutDataNodeId(objOutDataNode.dataNodeId); // Out数据结点
    pobjDnFuncMapEN.SetAssociationMappingId(enumAssociationMapping.OneToOne_01); // 关系映射
    pobjDnFuncMapEN.SetFuncMapModeId(enumFuncMapMode.Table_01); // 映射模式
    pobjDnFuncMapEN.SetTabId(DnFuncMap_EditV2Ex.OutTabIdCache); // 表
    pobjDnFuncMapEN.SetDnFunctionId(''); // DN函数
    pobjDnFuncMapEN.SetMemo('通过Key->映射建立'); // 说明
    pobjDnFuncMapEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID

    pobjDnFuncMapEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjDnFuncMapEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
  }

  /**
   * 数据结点名 (Used In CombineCondition())
   */
  public get InDataNodeDesc(): string {
    const strValue = GetLabelValueInDivObj(divVarSet.refDivEdit, 'lblInDataNodeDesc');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 数据结点名 (Used In CombineCondition())
   */
  public set InDataNodeDesc(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'label', 'lblInDataNodeDesc');
    const strId = 'lblInDataNodeDesc';
    SetLabelHtmlByIdInDivObj(objDiv, strId, value);
  }

  /**
   * 表ID (Used In Clear())
   */
  public set OutTabId(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'select', 'ddlOutTabId');
    const strId = 'ddlOutTabId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 表ID (Used In PutDataToClass())
   */
  public get OutTabId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlOutTabId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /**
   * 字段Id (Used In Clear())
   */
  public set OutFldId(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'select', 'ddlOutFldId');
    const strId = 'ddlOutFldId';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /**
   * 字段Id (Used In PutDataToClass())
   */
  public get OutFldId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'ddlOutFldId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  public get qsTabId() {
    const strName = 'tabId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  public get qsFldId() {
    const strName = 'fldId';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  /**
   * 是否使用Cache (Used In Clear())
   **/
  public set isCreateMapInTab(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivEdit, 'chkIsCreateMapInTab', value);
  }
  /**
   * 是否使用Cache (Used In PutDataToClass())
   **/
  public get isCreateMapInTab(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(divVarSet.refDivEdit, 'chkIsCreateMapInTab');
    return bolValue;
  }

  public get GetTabId(): string {
    if (IsNullOrEmpty(this.TabId) == false) return this.TabId;
    return this.qsTabId;
  }
  // /**
  //  * 清除用户自定义控件中，所有控件的值
  //  * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  //  **/
  // public Clear() {
  //   // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlInDataNodeId');
  //   // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlOutDataNodeId');
  //   ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlAssociationMappingId');
  //   ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFuncMapModeId');
  //   ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlTabId');
  //   ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlDnFunctionId');
  //   // memo = '';
  // }
}
