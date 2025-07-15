import $ from 'jquery';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsUserPrjGrantEN } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantEN';
import { clsUserPrjGrantENEx } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantENEx';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import {
  UserPrjGrant_GetObjBymIdAsync,
  UserPrjGrant_GetObjLstByPagerAsync,
  UserPrjGrant_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/AuthorityManage/clsUserPrjGrantWApi';
import { Users_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import {
  UserPrjGrantEx_CopyToEx,
  UserPrjGrantEx_FuncMapByFldName,
  UserPrjGrantEx_GetUserLoginInfoAsync,
} from '@/ts/L3ForWApiEx/AuthorityManage/clsUserPrjGrantExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLst, BindTab, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsOperateList } from '@/ts/PubFun/clsOperateList';
import { clsPager } from '@/ts/PubFun/clsPager';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ClearSelectValueByIdInDivObj, GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

declare const strUrl_Session_SetString: string;
declare const strUrl_Session_GetString: string;

/* SelectProject 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class SelectProject implements clsOperateList {
  public static divEdit: HTMLDivElement;
  public static ShowLst: (arrObjLst: Array<clsUserPrjGrantENEx>) => Promise<void>;
  //专门用于数据列表的界面变量，用于分页功能等
  //public currPageIndex = 0;
  public static divQuery: HTMLDivElement;
  public static divDataList: HTMLDivElement;

  public divName4List = 'divList'; //列表区的层Id
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsInitShow = false; //记录是否导入分页区的变量
  public bolIsTableSm = true; //是否窄行的小表，即表中加样式： table-sm
  //public mstrListDiv: string = "divDataLst";//列表区数据列表层id
  public objPager: clsPager;
  public static mstrListDiv = 'divDataLst';
  public mstrSortvUserPrjGrantBy = `${clsUserPrjGrantEN.con_LastVisitedDate} Desc`;
  //public static objPager: clsPager = new clsPager();
  public pageSize = 20;
  public recCount = 0;
  constructor() {
    this.objPager = new clsPager(this);
  }
  /* 根据条件获取相应的记录对象的列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vUserPrjGrant() {
    const strListDiv = SelectProject.divDataList;
    const strWhereCond = this.CombinevUserPrjGrantCondition();

    const strCurrPageIndex = this.objPager.currPageIndex; //当前页
    let intCurrPageIndex = Number(strCurrPageIndex);
    let arrvUserPrjGrantObjLst: Array<clsUserPrjGrantENEx> = [];
    try {
      this.recCount = await UserPrjGrant_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0！', strWhereCond);
        const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById('divDataLst');
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = `在绑定GvCache过程中，根据条件:[${strWhereCond}]获取的对象列表数为0！`;
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
      if (intCurrPageIndex == 0) {
        if (intPageCount > 1) intCurrPageIndex = 1;
        else intCurrPageIndex = 1;
        this.objPager.currPageIndex = intCurrPageIndex;
      } else if (intCurrPageIndex > intPageCount) {
        intCurrPageIndex = intPageCount;
        this.objPager.currPageIndex = intCurrPageIndex;
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.mstrSortvUserPrjGrantBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      // const objvUserPrjGrant = new clsUserPrjGrantEN();
      //const ss = objvUserPrjGrant.GetFldValue(clsUserPrjGrantEN.con_DepartmentId);
      //console.log(ss);
      const arrvUserPrjGrantObjLst0 = await UserPrjGrant_GetObjLstByPagerAsync(objPagerPara);
      arrvUserPrjGrantObjLst = arrvUserPrjGrantObjLst0.map(UserPrjGrantEx_CopyToEx);

      const obj1 = await UserPrjGrant_GetObjBymIdAsync(arrvUserPrjGrantObjLst[0].mId);
      console.error(obj1);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据条件获取相应的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
    if (arrvUserPrjGrantObjLst.length == 0) {
      const strMsg = `根据条件获取的对象列表数为空！`;
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_vUserPrjGrant(strListDiv, arrvUserPrjGrantObjLst);
      console.log('完成BindGv_vUserPrjGrant!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vUserPrjGrant对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrUserPrjGrantObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_vUserPrjGrant(
    divContainer: HTMLDivElement,
    arrUserPrjGrantExObjLst: Array<clsUserPrjGrantENEx>,
  ) {
    const strThisFuncName = this.BindTab_vUserPrjGrant.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: 'userId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '用户ID',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'userName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '用户名',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },

      {
        fldName: 'prjId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '工程ID',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'prjName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '工程名称',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'roleId',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '角色ID',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'roleName',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '角色名称',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'visitedNum',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '访问数',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'lastVisitedDate',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '最后访问时间',
        text: '',
        sortBy: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },

      {
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '选择',
        text: '选择',
        tdClass: 'text-left',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info';
          btn1.setAttribute('onclick', `btnSelectRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrUserPrjGrantExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(divDataLst, arrUserPrjGrantExObjLst, arrDataColumn, 'mId', this);
    await SelectProject.ShowLst(arrUserPrjGrantExObjLst);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public async ExtendFldFuncMap(
    arrUserPrjGrantExObjLst: Array<clsUserPrjGrantENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const strThisFuncName = this.ExtendFldFuncMap.name;
    const arrFldName = clsUserPrjGrantEN.AttributeName;
    const arrExcludeFldName = ['is_Nullable_SQL', 'precision_Sql', 'length_Sql', 'typeName_Sql'];
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      if (arrExcludeFldName.indexOf(objDataColumn.fldName) > -1) continue;

      for (const objInFor of arrUserPrjGrantExObjLst) {
        try {
          await UserPrjGrantEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
        } catch (e) {
          const strMsg = Format(
            '扩展字段值映射出错。字段名:[{0}],{1}.(in {2}.{3})',
            objDataColumn.fldName,
            e,
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
      }
    }
  }

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   */
  public async btnQuery_Click(strListDiv: string) {
    console.log(strListDiv);
    const strWhereCond = this.CombinevUserPrjGrantCondition();
    try {
      await UserPrjGrant_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
        this.recCount = jsonData;
      });
      const objPagerPara: stuPagerPara = {
        pageIndex: 1,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.mstrSortvUserPrjGrantBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      const arrvUserPrjGrantObjLst0 = await UserPrjGrant_GetObjLstByPagerAsync(objPagerPara);
      const arrvUserPrjGrantObjLst = arrvUserPrjGrantObjLst0.map(UserPrjGrantEx_CopyToEx);

      this.BindTab_vUserPrjGrant(SelectProject.divDataList, arrvUserPrjGrantObjLst);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据条件获取相应的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 
    在数据表里选择记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   */
  public static async btnSelectRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert('请选择需要删除的记录！');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      this.SelectRecord(lngKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `选择记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {
    ClearSelectValueByIdInDivObj(SelectProject.divEdit, 'ddlUserId');

    ClearSelectValueByIdInDivObj(SelectProject.divEdit, 'ddlPrjId');
    $('#txtRoleId').val('');
    $('#txtVisitedNum').val(0);
    $('#txtLastVisitedDate').val('');

    ClearSelectValueByIdInDivObj(SelectProject.divEdit, 'ddlOptId');
    $('#txtOptDate').val('');
    $('#txtMemo').val('');
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public CombinevUserPrjGrantCondition(): string {
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      // let strUserId_Hid = GetInputValue('hidUserId');
      // if (strUserId_Hid == undefined || IsNullOrEmpty(strUserId_Hid) == true) {
      const strUserId_Hid = clsPubLocalStorage.userId;
      // }
      if (strUserId_Hid != '' && strUserId_Hid != '0') {
        strWhereCond += ` And ${clsUserPrjGrantEN.con_UserId} = '${strUserId_Hid}'`;
      }
    } catch (objException: any) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineUserPrjGrantCondition)时出错!请联系管理员!${objException.message}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[Users]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的DataTable</returns>
  public static BindDdl_UserId(ddlUserId: string, strWhereCond = '1 =1') {
    //const strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlUserId);
    if (objDdl == null) {
      const strMsg = `下拉框:${ddlUserId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    return new Promise((resolve, reject) => {
      console.log(reject);
      try {
        Users_GetObjLstAsync(strWhereCond).then((jsonData) => {
          const arrUsersObjLst: Array<clsUsersEN> = <Array<clsUsersEN>>jsonData;
          BindDdl_ObjLst(
            ddlUserId,
            arrUsersObjLst,
            clsUsersEN.con_UserId,
            clsUsersEN.con_UserName,
            '用于用户管理',
          );
          console.log('完成BindDdl_UserId!');
          resolve(jsonData);
        });
      } catch (e: any) {
        const strMsg = `根据条件获取相应的记录对象的列表不成功,${e}.`;
        alert(strMsg);
      }
    });
  }

  /*
    演示Session 操作
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Demo_Session)
    */
  public static async Demo_Session() {
    try {
      //设置Session
      const strUserId = 'TestUserId';
      await this.SetSessionAsync('userId', strUserId);
      //获取Session
      const strUserId_Value1 = await this.GetSessionAsync('userId');
      console.log(`strUserId_Value1:${strUserId_Value1}`);
      //获取Session方法2:直接读取页面中的hidUserId
      const strUserId_Value2 = $('#hidUserId').val();
      console.log(`strUserId_Value2:${strUserId_Value2}`);
    } catch (e: any) {
      const strMsg = `演示Session不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
    获取Session 关键字的值
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetSessionAsync)
    <param name = "Key">关键字</param>
     <return>值</return>
    */
  public static GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl_Session_GetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
        },
        success(data: any) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(strKey + strValue);
          resolve(data);
        },
        error: (e: any) => {
          // const strErrMsg = e.responseText;
          reject(e);
        },
      });
    });
  }

  /* 函数功能:在数据 列表中跳转到某一页
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
     <param name = "intPageIndex">页序号</param>
   */
  public async IndexPage(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.objPager.currPageIndex = intPageIndex;
    this.BindGv_vUserPrjGrant();
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      //1、为下拉框设置数据源,绑定列表数据

      this.mstrSortvUserPrjGrantBy = `${clsUserPrjGrantEN.con_LastVisitedDate} Desc`;
      const strWhereCond = this.CombinevUserPrjGrantCondition();
      await UserPrjGrant_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
        this.recCount = jsonData;
      });

      //2、显示无条件的表内容在GridView中
      await this.BindGv_vUserPrjGrant();
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据条件获取相应的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 
    根据关键字选择相应的记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
     <param name = "sender">参数列表</param>
   */
  public static async SelectRecord(lngmId: number) {
    // console.log('strUrl_Session_SetString:', strUrl_Session_SetString);
    try {
      const objUserLoginInfo = await UserPrjGrantEx_GetUserLoginInfoAsync(lngmId);
      if (objUserLoginInfo != null) {
        //const objUserLoginInfo: stuUserLoginInfo = <stuUserLoginInfo>jsonData;
        console.log(objUserLoginInfo);
        clsPrivateSessionStorage.currSelPrjId = objUserLoginInfo.currSelPrjId;
        clsPrivateSessionStorage.currSelPrjName = objUserLoginInfo.currSelPrjName;

        clsPrivateSessionStorage.currPrjDataBaseId = objUserLoginInfo.currPrjDataBaseId;
        clsPrivateSessionStorage.prjDataBaseName = objUserLoginInfo.prjDataBaseName;
        clsPubSessionStorage.currDataBaseTypeId = objUserLoginInfo.currDataBaseTypeId;

        clsPubLocalStorage.roleId = objUserLoginInfo.roleId;
        clsPubLocalStorage.roleName = objUserLoginInfo.roleName;

        clsPubLocalStorage.userId = objUserLoginInfo.userId;
        clsPubLocalStorage.userName = objUserLoginInfo.userName;
        // const strJson = JSON.stringify(objUserLoginInfo);
        // this.SetSessionAsync('objUserLoginInfo', strJson);
        console.log('完成用户权限、当前数据库、当前子工程的设置!');
        // Redirect('/FrameAdmin/MainIndex1');
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
    <param name = "Key">关键字</param>
    <param name = "Value">值</param>
    */
  public static SetSessionAsync(Key: string, Value: string): Promise<void> {
    console.log('strUrl_Session_SetString:', strUrl_Session_SetString);
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data: any) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(strKey + strValue);
        },
      });
    });
  }
  /* 显示{0}对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
     <param name = "divContainer">显示容器</param>
     <param name = "objUserPrjGrant">需要显示的对象</param>
   */
  public static ShowUserPrjGrantObj(
    divContainer: HTMLDivElement,
    objUserPrjGrant: clsUserPrjGrantEN,
  ) {
    const sstrKeys = GetObjKeys(objUserPrjGrant);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objUserPrjGrant.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 函数功能:从界面列表中根据某一个字段排序
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
     <param name = "strSortByFld">排序的字段</param>
   */
  public async SortBy(strSortByFld: string) {
    if (this.mstrSortvUserPrjGrantBy.indexOf(strSortByFld) >= 0) {
      if (this.mstrSortvUserPrjGrantBy.indexOf('Asc') >= 0) {
        this.mstrSortvUserPrjGrantBy = `${strSortByFld} Desc`;
      } else {
        this.mstrSortvUserPrjGrantBy = `${strSortByFld} Asc`;
      }
    } else {
      this.mstrSortvUserPrjGrantBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vUserPrjGrant();
  }
  /*
   * 获取当前页序号(Used In BindGvCache)
   */
  public get CurrPageIndex(): number {
    const strValue = this.objPager.currPageIndex;
    return strValue;
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    this.objPager.currPageIndex = value;
  }

  /** 函数功能:在数据列表中跳转到前一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
   **/
  public async PrevPage() {
    // const strThisFuncName = this.PrevPage.name;
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) - 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 函数功能:在数据列表中跳转到下一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
   **/
  public async NextPage() {
    // const strThisFuncName = this.NextPage.name;
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) + 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }
  /** 函数功能:获取当前页序号
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetCurrPageIndex)
   **/
  public GetCurrPageIndex(strDivName4Pager: string): number {
    console.log(strDivName4Pager);
    const intCurrPageIndex = this.objPager.currPageIndex;
    if (intCurrPageIndex == 0) {
      return 1;
    }
    if (intCurrPageIndex < 1) return 1;
    return intCurrPageIndex;
  }

  /** 函数功能:设置当前页序号
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
   * @param value:页序号
   * @param strDivName4Pager:当前分页所在的层(div)
   **/
  public SetCurrPageIndex(value: number, strDivName4Pager: string) {
    console.log(strDivName4Pager);
    this.objPager.currPageIndex = value;
  }

  /** 函数功能:预留函数，在某一个层(div)里绑定数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
   **/
  public async BindInDiv(divName4Bind: HTMLDivElement) {
    console.log(divName4Bind);
  }
  /** 函数功能:清空列表的记录，并显示相关信息
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowEmptyRecNumInfo)
   *@param strListDiv
   * @param strInfo
   **/
  public ShowEmptyRecNumInfoByDiv(divContainer: HTMLDivElement, strInfo: string) {
    if (divContainer == null) {
      alert(`用于显示列表的层不存在！`);
      return;
    }
    divContainer.innerHTML = '';
    const objSpan_Info: HTMLSpanElement = document.createElement('span');
    objSpan_Info.setAttribute('class', 'text-warning font-weight-bold mt-2');
    objSpan_Info.innerHTML = strInfo;
    divContainer.appendChild(objSpan_Info);
  }
  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public SortColumn(sortColumnKey: string, sortDirection: string): void {
    console.log(sortColumnKey, sortDirection);
  }
}
