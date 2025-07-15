/**
 * 类名:QryRegionFldsCRUDEx(界面:QryRegionFldsCRUD,00050244)
 * 表名:QryRegionFlds(00050115)
 * 版本:2024.09.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/15 06:00:08
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { QryRegionFldsCRUD } from '@/viewsBase/RegionManage/QryRegionFldsCRUD';
import {
  viewVarSet,
  divVarSet,
  refQryRegionFlds_Edit,
} from '@/views/RegionManage/QryRegionFldsVueShare';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import QryRegionFlds_EditEx from '@/views/RegionManage/QryRegionFlds_EditEx';
/** QryRegionFldsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class QryRegionFldsCRUDEx extends QryRegionFldsCRUD implements IShowList {
  //public static mstrSortQryRegionFldsBy = "mId";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QryRegionFldsCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QryRegionFldsCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_QryRegionFlds]!${strType}${strPara}`);
    //this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QryRegionFlds':
        this.BindGv_QryRegionFlds4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: QryRegionFldsCRUDEx;
    let objPageEdit;
    if (QryRegionFldsCRUD.objPageCRUD == null) {
      QryRegionFldsCRUD.objPageCRUD = new QryRegionFldsCRUDEx();
      objPage = <QryRegionFldsCRUDEx>QryRegionFldsCRUDEx.objPageCRUD;
    } else {
      objPage = <QryRegionFldsCRUDEx>QryRegionFldsCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetInUse': //自定义功能:使用
        break;

      case 'SetColSpan': //自定义功能:设置跨列数
        break;
      case 'SetWidth': //自定义功能:设置宽
        break;
      case 'CopyFldFromRelaTab': //自定义功能:复制表字段
        objPage.CopyFldFromRelaTab();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new QryRegionFlds_EditEx('QryRegionFlds_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refQryRegionFlds_Edit.value.btnQryRegionFlds_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QryRegionFlds_EditEx('QryRegionFlds_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refQryRegionFlds_Edit.value.btnQryRegionFlds_Edit_Click(strCommandName, strKeyId);
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置顶的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要移底的[${objPage.thisTabName}]记录!`);
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要上移的[${objPage.thisTabName}]记录!`);
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要下移的[${objPage.thisTabName}]记录!`);
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(QryRegionFldsCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /**
   * 自定义功能:复制表字段
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass11_0:<Gen_Vue_TS_btn_Click>b__4)
   **/
  public CopyFldFromRelaTab() {
    //自定义功能;
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    viewVarSet.sortQryRegionFldsBy = Format('{0} {1}', sortColumnKey, sortDirection);
    await this.BindGv_QryRegionFlds4Func(this.thisDivList);
  }
}
