import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  CombineFileResourceCondition,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refFileResource_List,
} from '@/views/ResourceMan/FileResourceVueShare';
import {
  FileResource_GetRecCountByCondAsync,
  FileResource_GetObjLstAsync,
  FileResource_GetObjLstByFileResourceIdLstAsync,
  FileResource_UpdateRecordAsync,
  FileResource_DelKeysAsync,
} from '@/ts/L3ForWApi/ResourceMan/clsFileResourceWApi';
import {
  FileResourceEx_FuncMapByFldName,
  FileResourceEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/ResourceMan/clsFileResourceExWApi';

import {
  GetCheckedKeyIdsInDivObj,
  GetSelectValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFileResourceENEx } from '@/ts/L0Entity/ResourceMan/clsFileResourceENEx';
import { clsFileResourceEN } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
import { ObjectAssign, BindTab, confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsOperateList, GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { AIOperateListBase } from '@/viewsBase/common/AIOperateListBase';
import {
  getExportColumnSpecsAi,
  getListColumnsAi,
} from '@/viewsBase/ResourceMan/FileResourceCRUDAiColumns';

/**
 * Ai版基类：
 * 在Ai3基础上增加命令schema驱动，不改变原有基类行为。
 */
export abstract class FileResourceCRUDAi extends AIOperateListBase implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public recCount = 0;

  constructor() {
    super(divVarSet.refDivLayout, divVarSet.refDivList);
  }

  public get thisTabName(): string {
    return clsFileResourceEN._CurrTabName;
  }

  public get dispAllErrMsg_q(): boolean {
    return true;
  }

  public async InitVarSet(): Promise<void> {
    // no-op
  }

  public async InitCtlVar(): Promise<void> {
    // no-op
  }

  protected getListColumnsAi(): Array<clsDataColumn> {
    return getListColumnsAi();
  }

  protected getExportColumnSpecsAi(): Array<{ colHeader: string }> {
    return getExportColumnSpecsAi();
  }

  public abstract SortColumn(sortColumnKey: string, sortDirection: string): void;

  /** 页面初始化 */
  public async PageLoadCache() {
    try {
      await this.InitVarSet();
      await this.InitCtlVar();
      if (viewVarSet.sortFileResourceBy == '') {
        viewVarSet.sortFileResourceBy = `${clsFileResourceEN.con_FileResourceId} Asc`;
      }

      await this.BindGv_FileResource4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${this.PageLoadCache.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 查询按钮点击事件处理：调用基类QueryClickTemplate执行查询
   *
   * 职责：
   * 1. 重置页码到第1页
   * 2. 根据查询条件刷新数据
   *
   * 使用场景：用户点击查询按钮时触发
   */
  public async btnQuery_Click() {
    await this.QueryClickTemplate(async () => {
      await this.BindGv_FileResource4Func(divVarSet.refDivList);
    });
  }

  /**
   * 设置项目文件类型Id按钮点击事件处理
   *
   * 流程：
   * 1. 验证是否选中了记录
   * 2.验证是否选择了有效的项目文件类型Id   * 3. 执行批量设置操作
   * 4. 操作完成后刷新数据列表
   *
   * 使用场景：用户选择多条记录后，点击"设置项目文件类型Id"按钮
   */
  public async btnSetPrjFileTypeId_Click() {
    try {
      const strPrjFileTypeId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlPrjFileTypeId_SetFldValue',
      );
      await this.ExecuteSelectionActionTemplate({
        selectedKeys: GetCheckedKeyIdsInDivObj(divVarSet.refDivList),
        emptySelectionMessage: `请选择需要设置项目文件类型Id的${this.thisTabName}记录!`,
        beforeExecute: () => {
          if (strPrjFileTypeId == '') {
            const strMsg = '请输入项目文件类型Id(PrjFileTypeId)!';
            console.error(strMsg);
            alert(strMsg);
            return false;
          }
          return true;
        },
        execute: async (arrKeyIds) => {
          await this.SetPrjFileTypeId(arrKeyIds, strPrjFileTypeId);
        },
        onAfterExecute: async () => {
          await this.BindGv_FileResource4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${this.btnSetPrjFileTypeId_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 删除记录按钮点击事件处理
   *
   * 流程：
   * 1. 验证是否选中了要删除的记录
   * 2. 弹出确认对话框，要求用户确认删除
   * 3. 执行批量删除操作
   * 4. 操作完成后刷新数据列表
   *
   * 使用场景：用户选择多条记录后，点击"删除"按钮
   */
  public async btnDelRecord_Click() {
    try {
      await this.ExecuteSelectionActionTemplate({
        selectedKeys: GetCheckedKeyIdsInDivObj(divVarSet.refDivList),
        emptySelectionMessage: `请选择需要删除的${this.thisTabName}记录!`,
        beforeExecute: (arrKeyIds) => confirmDel(arrKeyIds.length),
        execute: async (arrKeyIds) => {
          await this.DelMultiRecord(arrKeyIds);
        },
        onAfterExecute: async () => {
          await this.BindGv_FileResource4Func(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${this.btnDelRecord_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async DelMultiRecord(arrFileResourceId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await FileResource_DelKeysAsync(arrFileResourceId);
      if (returnInt > 0) {
        alert(`删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`);
      } else {
        alert(`删除${this.thisTabName}记录不成功!`);
      }
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 批量设置项目文件类型Id。 */
  public async SetPrjFileTypeId(arrFileResourceId: Array<string>, strPrjFileTypeId: string) {
    const strThisFuncName = this.SetPrjFileTypeId.name;
    if (strPrjFileTypeId == null || strPrjFileTypeId == '') {
      alert('请输入项目文件类型Id(PrjFileTypeId)!');
      return '';
    }
    if (arrFileResourceId.length == 0) {
      alert('没有选择记录,不能设置字段值!');
      return '';
    }

    try {
      const arrFileResourceObjLst = await FileResource_GetObjLstByFileResourceIdLstAsync(
        arrFileResourceId,
      );
      let intCount = 0;
      for (const objInFor of arrFileResourceObjLst) {
        const objFileResourceEN = new clsFileResourceEN();
        ObjectAssign(objFileResourceEN, objInFor);
        objFileResourceEN.SetFileResourceId(objInFor.fileResourceId);
        objFileResourceEN.SetPrjFileTypeId(strPrjFileTypeId);

        let returnBool = false;
        try {
          objFileResourceEN.sfUpdFldSetStr = objFileResourceEN.updFldString;
          returnBool = await FileResource_UpdateRecordAsync(objFileResourceEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }

        if (returnBool == true) {
          intCount++;
        } else {
          alert('设置记录不成功!');
        }
      }

      alert(`共设置了${intCount}条记录!`);
      if (intCount > 0) {
        //FileResource_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 按当前查询条件导出原始列表数据。 */
  public async ExportExcel_FileResource(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_FileResource.name;
    if (viewVarSet.sortFileResourceBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortFileResourceBy)为空,请检查!(In BindGv_FileResourceCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const strWhereCond = await CombineFileResourceCondition();
    let arrFileResourceObjLst: Array<clsFileResourceEN> = [];
    try {
      this.recCount = await FileResource_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      arrFileResourceObjLst = await FileResource_GetObjLstAsync(strWhereCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    if (arrFileResourceObjLst.length == 0) {
      const strMsg = `在ExportExcel过程中,根据条件获取的${this.thisTabName}记录数为0!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    try {
      const arrDataColumn = this.getListColumnsAi();
      arrFileResourceObjLst = arrFileResourceObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrFileResourceObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /** 按导出列规格整理导出结果。 */
  public async ExportExcel_FileResourceAi(): Promise<ExportExcelData> {
    const raw = await this.ExportExcel_FileResource();
    if (raw.arrObjLst.length === 0) return raw;
    const normalizedRows = this.NormalizeExportRowsBySpecs(
      raw.arrObjLst as Array<Record<string, any>>,
      this.getExportColumnSpecsAi(),
    );

    return {
      arrObjLst: normalizedRows,
      sheetName: raw.sheetName,
      fileName: raw.fileName,
    };
  }

  /** 导出按钮入口。 */
  public async btnExportExcel_Click() {
    await this.ExportExcel_FileResource();
  }

  /** 把实体列表组装成导出文件数据。 */
  public CombineData(
    arrFileResourceObjLst: Array<clsFileResourceEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const arrData = this.BuildExportRowsByColumns(
      arrFileResourceObjLst,
      arrDataColumn,
      (obj, fld) => obj.GetFldValue(fld),
    );
    const strFileName = Format('文件资源({0})导出.xlsx', clsFileResourceEN._CurrTabName);
    const strSheetName = '文件资源列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 绑定表格内容并同步分页器。 */
  public async BindTab_FileResource4Func(
    divContainer: HTMLDivElement,
    arrFileResourceExObjLst: Array<clsFileResourceENEx>,
  ) {
    const strThisFuncName = this.BindTab_FileResource4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }

    const arrDataColumn: Array<clsDataColumn> = this.getListColumnsAi();

    if (refFileResource_List.value != null) {
      dataColumn.value = arrDataColumn;
      try {
        await this.ExtendTdFldFuncMap(arrFileResourceExObjLst);
      } catch (e) {
        const strMsg = `扩展Td字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await BindTabByList(arrFileResourceExObjLst, this.dispAllErrMsg_q);
    } else {
      try {
        await this.ExtendFldFuncMap(arrFileResourceExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        // Vue list component mode: no legacy divDataLst container is required.
        dataColumn.value = arrDataColumn;
        await BindTabByList(arrFileResourceExObjLst, this.dispAllErrMsg_q);
        return;
      }
      await BindTab(
        divDataLst,
        arrFileResourceExObjLst,
        arrDataColumn,
        clsFileResourceEN.con_FileResourceId,
        this,
      );
    }

    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 按当前条件获取并绑定分页列表。 */

  public async BindGv_FileResource4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_FileResource4Func.name;

    if (divList == null) {
      const strMsg = Format(
        '用于显示列表的div为空,请检查!(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.listPara.listDiv = divList;
    if (viewVarSet.sortFileResourceBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortFileResourceBy)为空,请检查!(In BindGv_FileResourceCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await CombineFileResourceCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);
    let arrFileResourceExObjLst: Array<clsFileResourceENEx> = [];

    try {
      this.recCount = await FileResource_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        alert(strMsg);
        BindTabByList(arrFileResourceExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortFileResourceBy,
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };

      arrFileResourceExObjLst = await FileResourceEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (arrFileResourceExObjLst.length == 0) {
      const strKey = Format('{0}', clsFileResourceEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }

    try {
      await this.BindTab_FileResource4Func(divList, arrFileResourceExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 为非实体原生字段补充显示映射。 */
  public async ExtendFldFuncMap(
    arrFileResourceExObjLst: Array<clsFileResourceENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsFileResourceEN._AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrFileResourceExObjLst) {
        await FileResourceEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 为表格Td字段补充显示映射。 */
  public async ExtendTdFldFuncMap(arrFileResourceExObjLst: Array<clsFileResourceENEx>) {
    const arrFldName = clsFileResourceEN._AttributeName;
    const tdFieldNames = this.ResolveTdFieldNames(
      refFileResource_List.value?.tdFieldNames,
      dataColumn.value,
      IsNullOrEmpty,
    );

    if (tdFieldNames.length === 0) return;

    for (const normalizedFldName of tdFieldNames) {
      if (arrFldName.indexOf(normalizedFldName) > -1) continue;
      for (const objInFor of arrFileResourceExObjLst) {
        await FileResourceEx_FuncMapByFldName(normalizedFldName, objInFor);
      }
    }
  }

  /**
   * 导出时使用的默认排序规则。
   * ⚠️ 这是一个示例方法，使用从导出区域字段中选择的前 2 个字段。
   * ⚠️ 请根据实际业务需求修改排序逻辑和字段选择。
   *
   * 当前示例使用的字段：
   * - prjId (string)
   * - memo (string)
   *
   * 表中可用的所有字段：
   * - prjId (string)
   * - memo (string)
   *
   * 作者: AutoGCLib
   * 日期: 2026-06-13
   */
  public SortFunExportExcel(a: clsFileResourceEN, b: clsFileResourceEN): number {
    // 第一级排序：memo
    if (a.memo == b.memo) {
      if (a.memo == null) return -1;
      if (b.memo == null) return 1;
      return a.memo.localeCompare(b.memo);
    } else {
      if (b.prjId == null) return -1;
      if (a.prjId == null) return 1;
      return a.prjId.localeCompare(b.prjId);
    }
  }

  /** 列表排序入口。 */
  public async SortBy(objAnchorElement: any) {
    await this.SortByTemplate({
      objAnchorElement,
      currAscOrDesc: viewVarSet.ascOrDesc4SortFun,
      currSortBy: viewVarSet.sortFileResourceBy,
      onEntitySort: async (sortColumnKey: string, sortDirection: string) => {
        if (Object.prototype.hasOwnProperty.call(clsFileResourceENEx, sortColumnKey) == false) {
          return false;
        }
        this.SortColumn(sortColumnKey, sortDirection);
        return true;
      },
      onApplySortState: (sortBy, ascOrDesc4SortFun, sortFun) => {
        viewVarSet.sortFileResourceBy = sortBy;
        viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
        const currentCtor = this.constructor as typeof FileResourceCRUDAi;
        currentCtor.sortFunStatic = sortFun;
      },
      onRefresh: async () => {
        await this.BindGv_FileResource4Func(this.listPara.listDiv);
      },
    });
  }

  /** 跳转到指定页。 */
  public async IndexPage(intPageIndex: number) {
    await this.IndexPageTemplate(intPageIndex, async () => {
      await this.BindGv_FileResource4Func(this.listPara.listDiv);
    });
  }

  /** 加载下一页。 */
  public async NextPage() {
    await this.NextPageTemplate(async () => {
      await this.BindGv_FileResource4Func(this.listPara.listDiv);
    });
  }

  /** 加载上一页。 */
  public async PrevPage() {
    await this.PrevPageTemplate(async () => {
      await this.BindGv_FileResource4Func(this.listPara.listDiv);
    });
  }

  /** 预留的容器绑定扩展点。 */
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }
}
