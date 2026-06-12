import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  CombinePrjFileTypeConditionObj4ExportExcel,
  CombinePrjFileTypeConditionObj,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refPrjFileType_List,
} from '@/views/ResourceMan/PrjFileTypeVueShare';
import {
  PrjFileType_GetRecCountByCondCache,
  PrjFileType_GetSubObjLstCache,
  PrjFileType_ReFreshCache,
  PrjFileType_GetObjExLstByPagerCache,
  PrjFileType_AddNewRecordAsync,
  PrjFileType_GetMaxStrIdAsync,
  PrjFileType_GetObjLstByPrjFileTypeIdLstAsync,
  PrjFileType_DelKeysAsync,
} from '@/ts/L3ForWApi/ResourceMan/clsPrjFileTypeWApi';

import { GetCheckedKeyIdsInDivObj, GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';
import { clsPrjFileTypeENEx } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeENEx';
import { clsPrjFileTypeEN } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';
import { BindTab, confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsOperateList, GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { AIOperateListBase } from '@/viewsBase/common/AIOperateListBase';
import {
  getExportColumnSpecsAi,
  getListColumnsAi,
} from '@/viewsBase/ResourceMan/PrjFileTypeCRUDAiColumns';

/**
 * Ai版基类：
 * 在Ai3基础上增加命令schema驱动，不改变原有基类行为。
 */
export abstract class PrjFileTypeCRUDAi extends AIOperateListBase implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public recCount = 0;

  constructor() {
    super(divVarSet.refDivLayout, divVarSet.refDivList);
  }

  public get thisTabName(): string {
    return clsPrjFileTypeEN._CurrTabName;
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
      if (viewVarSet.sortPrjFileTypeBy == '') {
        viewVarSet.sortPrjFileTypeBy = `${clsPrjFileTypeEN.con_PrjFileTypeId} Asc`;
      }

      await this.BindGv_PrjFileTypeCache(divVarSet.refDivList);
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
      await this.BindGv_PrjFileTypeCache(divVarSet.refDivList);
    });
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
          await this.BindGv_PrjFileTypeCache(divVarSet.refDivList);
        },
      });
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${this.btnDelRecord_Click.name}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async DelMultiRecord(arrPrjFileTypeId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await PrjFileType_DelKeysAsync(arrPrjFileTypeId);
      if (returnInt > 0) {
        PrjFileType_ReFreshCache();

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

  /** 按当前查询条件导出原始列表数据。 */
  public async ExportExcel_PrjFileTypeCache(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_PrjFileTypeCache.name;
    if (viewVarSet.sortPrjFileTypeBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortPrjFileTypeBy)为空,请检查!(In BindGv_PrjFileTypeCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const objPrjFileTypeCond = await CombinePrjFileTypeConditionObj4ExportExcel();
    let arrPrjFileTypeObjLst: Array<clsPrjFileTypeEN> = [];
    try {
      this.recCount = await PrjFileType_GetRecCountByCondCache(objPrjFileTypeCond);
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objPrjFileTypeCond.whereCond,
        );
        console.error(strMsg);
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }
      arrPrjFileTypeObjLst = await PrjFileType_GetSubObjLstCache(objPrjFileTypeCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    if (arrPrjFileTypeObjLst.length == 0) {
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    try {
      const arrDataColumn = this.getListColumnsAi();
      arrPrjFileTypeObjLst = arrPrjFileTypeObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrPrjFileTypeObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /** 按导出列规格整理导出结果。 */
  public async ExportExcel_PrjFileTypeCacheAi(): Promise<ExportExcelData> {
    const raw = await this.ExportExcel_PrjFileTypeCache();
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
    await this.ExportExcel_PrjFileTypeCache();
  }

  /**
   * 复制记录按钮点击事件处理
   *
   * 流程：
   * 1. 验证是否选中了要复制的记录
   * 2. 执行复制操作
   * 3. 操作完成后刷新数据列表
   *
   * 使用场景：用户选择记录后，点击"复制"按钮
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   */
  public async btnCopyRecord_Click() {
    const strThisFuncName = this.btnCopyRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要克隆的${this.thisTabName}记录!`);
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_PrjFileTypeCache(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 复制记录的具体实现
   * @param arrPrjFileTypeId 要复制的记录主键列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   */
  public async CopyRecord(arrPrjFileTypeId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrPrjFileTypeObjLst = await PrjFileType_GetObjLstByPrjFileTypeIdLstAsync(
        arrPrjFileTypeId,
      );
      let intCount = 0;
      for (const objInFor of arrPrjFileTypeObjLst) {
        const strMaxStrId = await PrjFileType_GetMaxStrIdAsync();
        objInFor.prjFileTypeId = strMaxStrId; // 复制记录时，主键需要重新生成
        objInFor.prjFileTypeName = `${objInFor.prjFileTypeName}_复制`; // 这里简单地在名称后面加上"_复制"，实际情况可以根据需要调整

        const returnBool = await PrjFileType_AddNewRecordAsync(objInFor);
        if (returnBool == true) {
          PrjFileType_ReFreshCache();
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      alert(strMsg);
    }
  }

  /** 把实体列表组装成导出文件数据。 */
  public CombineData(
    arrPrjFileTypeObjLst: Array<clsPrjFileTypeEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const arrData = this.BuildExportRowsByColumns(arrPrjFileTypeObjLst, arrDataColumn, (obj, fld) =>
      obj.GetFldValue(fld),
    );
    const strFileName = Format('工程文件类型({0})导出.xlsx', clsPrjFileTypeEN._CurrTabName);
    const strSheetName = '工程文件类型列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 绑定表格内容并同步分页器。 */
  public async BindTab_PrjFileType(
    divContainer: HTMLDivElement,
    arrPrjFileTypeExObjLst: Array<clsPrjFileTypeENEx>,
  ) {
    const strThisFuncName = this.BindTab_PrjFileType.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }

    const arrDataColumn: Array<clsDataColumn> = this.getListColumnsAi();

    if (refPrjFileType_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrPrjFileTypeExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_PrjFileType函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrPrjFileTypeExObjLst,
        arrDataColumn,
        clsPrjFileTypeEN.con_PrjFileTypeId,
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

  public async BindGv_PrjFileTypeCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_PrjFileTypeCache.name;

    if (viewVarSet.sortPrjFileTypeBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortPrjFileTypeBy)为空,请检查!(In BindGv_PrjFileTypeCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objPrjFileTypeCond = await CombinePrjFileTypeConditionObj();
    const strWhereCond = JSON.stringify(objPrjFileTypeCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);
    let arrPrjFileTypeExObjLst: Array<clsPrjFileTypeENEx> = [];

    try {
      this.recCount = await PrjFileType_GetRecCountByCondCache(objPrjFileTypeCond);
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objPrjFileTypeCond.whereCond,
        );
        console.error(strMsg);
        alert(strMsg);
        BindTabByList(arrPrjFileTypeExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      const currentCtor = this.constructor as typeof PrjFileTypeCRUDAi;
      if (currentCtor.sortFunStatic != undefined) {
        strSortFun = currentCtor.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objPrjFileTypeCond,
        orderBy: viewVarSet.sortPrjFileTypeBy,
        sortFun: strSortFun,
      };

      arrPrjFileTypeExObjLst = await PrjFileType_GetObjExLstByPagerCache(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (arrPrjFileTypeExObjLst.length == 0) {
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }

    try {
      await this.BindTab_PrjFileType(divList, arrPrjFileTypeExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 导出时使用的默认排序规则。
   * ⚠️ 这是一个示例方法，使用从导出区域字段中选择的前 2 个字段。
   * ⚠️ 请根据实际业务需求修改排序逻辑和字段选择。
   *
   * 当前示例使用的字段：
   * - memo (string)
   * - updDate (string)
   *
   * 表中可用的所有字段：
   * - memo (string)
   * - updDate (string)
   *
   * 作者: AutoGCLib
   * 日期: 2026-06-13
   */
  public SortFunExportExcel(a: clsPrjFileTypeEN, b: clsPrjFileTypeEN): number {
    // 第一级排序：updDate
    if (a.updDate == b.updDate) {
      if (a.updDate == null) return -1;
      if (b.updDate == null) return 1;
      return a.updDate.localeCompare(b.updDate);
    } else {
      if (b.memo == null) return -1;
      if (a.memo == null) return 1;
      return a.memo.localeCompare(b.memo);
    }
  }

  /** 列表排序入口。 */
  public async SortBy(objAnchorElement: any) {
    await this.SortByTemplate({
      objAnchorElement,
      currAscOrDesc: viewVarSet.ascOrDesc4SortFun,
      currSortBy: viewVarSet.sortPrjFileTypeBy,
      onEntitySort: async (sortColumnKey: string, sortDirection: string) => {
        if (Object.prototype.hasOwnProperty.call(clsPrjFileTypeENEx, sortColumnKey) == false) {
          return false;
        }
        this.SortColumn(sortColumnKey, sortDirection);
        return true;
      },
      onApplySortState: (sortBy, ascOrDesc4SortFun, sortFun) => {
        viewVarSet.sortPrjFileTypeBy = sortBy;
        viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
        const currentCtor = this.constructor as typeof PrjFileTypeCRUDAi;
        currentCtor.sortFunStatic = sortFun;
      },
      onRefresh: async () => {
        await this.BindGv_PrjFileTypeCache(this.listPara.listDiv);
      },
    });
  }

  /** 跳转到指定页。 */
  public async IndexPage(intPageIndex: number) {
    await this.IndexPageTemplate(intPageIndex, async () => {
      await this.BindGv_PrjFileTypeCache(this.listPara.listDiv);
    });
  }

  /** 加载下一页。 */
  public async NextPage() {
    await this.NextPageTemplate(async () => {
      await this.BindGv_PrjFileTypeCache(this.listPara.listDiv);
    });
  }

  /** 加载上一页。 */
  public async PrevPage() {
    await this.PrevPageTemplate(async () => {
      await this.BindGv_PrjFileTypeCache(this.listPara.listDiv);
    });
  }

  /** 预留的容器绑定扩展点。 */
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }
}
