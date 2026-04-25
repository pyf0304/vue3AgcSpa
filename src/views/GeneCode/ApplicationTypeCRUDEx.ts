/**
* 类名:ApplicationTypeCRUDEx(界面:ApplicationTypeCRUD)
* 表名:ApplicationType(00050127)
* 生成代码版本:2022.03.16.1
* 生成日期:2022/03/17 00:46:26
* 生成者:
工程名称:AGC(0005)
CM工程:AgcSpa前端(变量首字母小写)
* 相关数据库:103.116.76.183,9433AGC_CS12
* PrjDataBaseId:0005
* 模块中文名:生成代码(GeneCode)
* 框架-层名:WA_界面后台Ex_TS(WA_ViewScriptCSEx_TS)
* 编程语言:TypeScript
**/
import { h } from 'vue';
import { Modal } from 'ant-design-vue';
import { ApplicationTypeCRUD } from '@/viewsBase/GeneCode/ApplicationTypeCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsApplicationTypeENEx } from '@/ts/L0Entity/GeneCode/clsApplicationTypeENEx';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import {
  AppCodeTypeRela_GetObjLstCache,
  AppCodeTypeRela_AddNewRecordAsync,
  AppCodeTypeRela_ReFreshCache,
  AppCodeTypeRela_DelRecordAsync,
} from '@/ts/L3ForWApi/GeneCode/clsAppCodeTypeRelaWApi';
import {
  vCodeType_Sim_func,
  vCodeType_Sim_GetObjLstCache,
  vCodeType_Sim_ReFreshThisCache,
} from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { clsAppCodeTypeRelaEN } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaEN';

import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refApplicationType_Edit,
  viewVarSet,
} from '@/views/GeneCode/ApplicationTypeVueShare';
import ApplicationType_EditEx from '@/views/GeneCode/ApplicationType_EditEx';
import { Format } from '@/ts/PubFun/clsString';

//import $ from "jquery";
/** ApplicationTypeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class ApplicationTypeCRUDEx extends ApplicationTypeCRUD implements IShowList {
  private progLangTypeNameCache: { [key: string]: string } = {};
  private codeTypeNameCache: { [key: string]: string } = {};

  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return this._pageSize ?? 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in ApplicationTypeCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ApplicationTypeCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_ApplicationType]!${strType}${strPara}`);
    //this.BindGv_ApplicationType4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ApplicationType':
        this.BindGv_ApplicationType4Func(divVarSet.refDivList);
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
    let objPage: ApplicationTypeCRUDEx;
    let objPageEdit;
    if (ApplicationTypeCRUD.objPageCRUD == null) {
      ApplicationTypeCRUD.objPageCRUD = new ApplicationTypeCRUDEx();
      objPage = <ApplicationTypeCRUDEx>ApplicationTypeCRUDEx.objPageCRUD;
    } else {
      objPage = <ApplicationTypeCRUDEx>ApplicationTypeCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetIsVisible': //自定义功能:设置是否显示
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new ApplicationType_EditEx('ApplicationType_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refApplicationType_Edit.value.btnApplicationType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new ApplicationType_EditEx('ApplicationType_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);

        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        // const intApplicationTypeId = strKeyId;
        refApplicationType_Edit.value.btnApplicationType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(ApplicationTypeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'progLangTypeName|Ex':
        viewVarSet.sortApplicationTypeBy = `progLangTypeName ${sortDirection}|(ProgLangType)ApplicationType.ProgLangTypeId = ProgLangType.ProgLangTypeId|`;
        break;
      default:
        viewVarSet.sortApplicationTypeBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ApplicationType4Func(this.listPara.listDiv);
  }

  public async BindTab_ApplicationType4Func(
    divContainer: HTMLDivElement,
    arrApplicationTypeExObjLst: Array<clsApplicationTypeENEx>,
  ) {
    await super.BindTab_ApplicationType4Func(divContainer, arrApplicationTypeExObjLst);
    await this.MergeProgLangTypeColumns(divContainer, arrApplicationTypeExObjLst);
  }

  private async MergeProgLangTypeColumns(
    divContainer: HTMLDivElement,
    arrApplicationTypeExObjLst: Array<clsApplicationTypeENEx>,
  ) {
    const tabBind = divContainer.querySelector('#tab4Bind') as HTMLTableElement | null;
    if (tabBind == null) return;

    const headTdMain = tabBind.querySelector('#tdprogLangTypeName') as HTMLTableCellElement | null;
    if (headTdMain != null) {
      headTdMain.textContent = '编程语言类型(1-5)';
    }
    const headTdCodeType = tabBind.querySelector(
      '#tdprogLangTypeId2',
    ) as HTMLTableCellElement | null;
    if (headTdCodeType != null) {
      headTdCodeType.textContent = '代码类型(纵向)';
    }

    this.HideColumnCells(tabBind, 'progLangTypeId3');
    this.HideColumnCells(tabBind, 'progLangTypeId4');
    this.HideColumnCells(tabBind, 'progLangTypeId5');

    const appCodeTypeMap = await this.BuildAppCodeTypeMap(
      arrApplicationTypeExObjLst.map((x) => x.applicationTypeId),
    );

    for (const item of arrApplicationTypeExObjLst) {
      const key = item.applicationTypeId;
      const tdMain = tabBind.querySelector(
        `#td${key}_progLangTypeName`,
      ) as HTMLTableCellElement | null;
      if (tdMain != null) {
        tdMain.innerHTML = await this.BuildProgLangTypeCellHtml(item);
      }
      const tdCodeType = tabBind.querySelector(
        `#td${key}_progLangTypeId2`,
      ) as HTMLTableCellElement | null;
      if (tdCodeType != null) {
        const arrCodeTypeNames = appCodeTypeMap[key] ?? [];
        tdCodeType.innerHTML = this.BuildCodeTypeCellHtml(key, arrCodeTypeNames);
      }

      this.HideColumnCells(tabBind, `${key}_progLangTypeId3`);
      this.HideColumnCells(tabBind, `${key}_progLangTypeId4`);
      this.HideColumnCells(tabBind, `${key}_progLangTypeId5`);
    }

    this.BindCodeTypeEditEvents(tabBind);
  }

  private HideColumnCells(tabBind: HTMLTableElement, suffix: string) {
    const td = tabBind.querySelector(`#td${suffix}`) as HTMLTableCellElement | null;
    if (td != null) {
      td.style.display = 'none';
    }
  }

  private async BuildProgLangTypeCellHtml(item: clsApplicationTypeENEx): Promise<string> {
    const lines: Array<string> = [];
    if (item.progLangTypeName && item.progLangTypeId) {
      lines.push(`1. ${item.progLangTypeName} (${item.progLangTypeId})`);
    } else if (item.progLangTypeName) {
      lines.push(`1. ${item.progLangTypeName}`);
    } else if (item.progLangTypeId) {
      const progLangTypeName = await this.GetProgLangTypeName(item.progLangTypeId);
      lines.push(
        progLangTypeName
          ? `1. ${progLangTypeName} (${item.progLangTypeId})`
          : `1. ${item.progLangTypeId}`,
      );
    }

    if (item.progLangTypeId2) {
      const progLangTypeName2 = await this.GetProgLangTypeName(item.progLangTypeId2);
      lines.push(
        progLangTypeName2
          ? `2. ${progLangTypeName2} (${item.progLangTypeId2})`
          : `2. ${item.progLangTypeId2}`,
      );
    }
    if (item.progLangTypeId3) {
      const progLangTypeName3 = await this.GetProgLangTypeName(item.progLangTypeId3);
      lines.push(
        progLangTypeName3
          ? `3. ${progLangTypeName3} (${item.progLangTypeId3})`
          : `3. ${item.progLangTypeId3}`,
      );
    }
    if (item.progLangTypeId4) {
      const progLangTypeName4 = await this.GetProgLangTypeName(item.progLangTypeId4);
      lines.push(
        progLangTypeName4
          ? `4. ${progLangTypeName4} (${item.progLangTypeId4})`
          : `4. ${item.progLangTypeId4}`,
      );
    }
    if (item.progLangTypeId5) {
      const progLangTypeName5 = await this.GetProgLangTypeName(item.progLangTypeId5);
      lines.push(
        progLangTypeName5
          ? `5. ${progLangTypeName5} (${item.progLangTypeId5})`
          : `5. ${item.progLangTypeId5}`,
      );
    }

    return lines.length > 0 ? lines.join('<br/>') : '-';
  }

  private async GetProgLangTypeName(progLangTypeId: string): Promise<string> {
    if (!progLangTypeId) return '';
    if (this.progLangTypeNameCache[progLangTypeId] !== undefined) {
      return this.progLangTypeNameCache[progLangTypeId];
    }
    try {
      const progLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        progLangTypeId,
      );
      this.progLangTypeNameCache[progLangTypeId] = progLangTypeName || '';
      return this.progLangTypeNameCache[progLangTypeId];
    } catch {
      this.progLangTypeNameCache[progLangTypeId] = '';
      return '';
    }
  }

  private async BuildAppCodeTypeMap(
    arrApplicationTypeId: Array<number>,
  ): Promise<{ [key: number]: Array<string> }> {
    const map: { [key: number]: Array<string> } = {};
    arrApplicationTypeId.forEach((id) => {
      map[id] = [];
    });
    if (arrApplicationTypeId.length == 0) return map;

    const appTypeSet = new Set<number>(arrApplicationTypeId);
    const arrRela = await AppCodeTypeRela_GetObjLstCache();
    const arrHit = arrRela.filter((x) => appTypeSet.has(x.applicationTypeId));

    for (const objRela of arrHit) {
      const codeTypeName = await this.GetCodeTypeName(objRela.codeTypeId);
      const lineText = codeTypeName
        ? `${this.EscapeHtml(codeTypeName)} (${this.EscapeHtml(objRela.codeTypeId)})`
        : this.EscapeHtml(objRela.codeTypeId);
      if (map[objRela.applicationTypeId].indexOf(lineText) < 0) {
        map[objRela.applicationTypeId].push(lineText);
      }
    }
    return map;
  }

  private async GetCodeTypeName(codeTypeId: string): Promise<string> {
    if (!codeTypeId) return '';
    if (this.codeTypeNameCache[codeTypeId] !== undefined) {
      return this.codeTypeNameCache[codeTypeId];
    }
    try {
      const codeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        codeTypeId,
      );
      this.codeTypeNameCache[codeTypeId] = codeTypeName || '';
      return this.codeTypeNameCache[codeTypeId];
    } catch {
      this.codeTypeNameCache[codeTypeId] = '';
      return '';
    }
  }

  private BuildCodeTypeCellHtml(
    applicationTypeId: number,
    arrCodeTypeLines: Array<string>,
  ): string {
    const strLinesHtml =
      arrCodeTypeLines.length > 0
        ? arrCodeTypeLines.map((x, i) => `${i + 1}. ${x}`).join('<br/>')
        : '-';
    return `${strLinesHtml}<br/><a href="javascript:;" class="lnk-edit-code-type" data-application-type-id="${applicationTypeId}">编辑代码类型</a>`;
  }

  private BindCodeTypeEditEvents(tabBind: HTMLTableElement): void {
    const arrLinks = tabBind.querySelectorAll('.lnk-edit-code-type');
    arrLinks.forEach((objLink) => {
      objLink.addEventListener('click', async (event) => {
        const target = event.currentTarget as HTMLElement;
        const strApplicationTypeId = target.getAttribute('data-application-type-id') ?? '';
        const intApplicationTypeId = Number(strApplicationTypeId);
        if (intApplicationTypeId > 0) {
          await this.ShowCodeTypeEditModal(intApplicationTypeId);
        }
      });
    });
  }

  private async ShowCodeTypeEditModal(applicationTypeId: number): Promise<void> {
    // 获取该 applicationTypeId 对应的所有代码类型关系
    const appCodeTypeRela = await AppCodeTypeRela_GetObjLstCache();
    const arrRela = appCodeTypeRela.filter((x) => x.applicationTypeId === applicationTypeId);

    // 构建表格 HTML
    let htmlContent = `
      <div style="max-height: 400px; overflow-y: auto;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #fafafa;">
              <th style="border: 1px solid #d9d9d9; padding: 8px; text-align: left;">代码类型</th>
              <th style="border: 1px solid #d9d9d9; padding: 8px; text-align: left;">操作</th>
            </tr>
          </thead>
          <tbody>
    `;

    for (let i = 0; i < arrRela.length; i++) {
      const rela = arrRela[i];
      const codeTypeName = await this.GetCodeTypeName(rela.codeTypeId);
      const displayName = codeTypeName ? `${codeTypeName} (${rela.codeTypeId})` : rela.codeTypeId;
      htmlContent += `
        <tr data-rela-id="${rela.mId || i}">
          <td style="border: 1px solid #d9d9d9; padding: 8px;">${this.EscapeHtml(displayName)}</td>
          <td style="border: 1px solid #d9d9d9; padding: 8px;">
            <a href="javascript:;" class="lnk-delete-rela" data-rela-id="${
              rela.mId || i
            }" data-code-type-id="${this.EscapeHtml(
        rela.codeTypeId,
      )}" style="color: #ff4d4f;">删除</a>
          </td>
        </tr>
      `;
    }

    htmlContent += `
          </tbody>
        </table>
      </div>
    `;

    const contentVNode = h('div', {
      innerHTML: htmlContent,
    });

    Modal.confirm({
      title: `编辑代码类型 (ApplicationTypeId: ${applicationTypeId})`,
      content: contentVNode,
      okText: '新增',
      cancelText: '关闭',
      width: 600,
      onOk: async () => {
        await this.ShowSelectCodeTypeModal(applicationTypeId);
      },
      onCancel: () => {
        console.log('关闭对话框');
      },
    });

    // 延迟绑定事件，确保 DOM 已渲染
    setTimeout(() => {
      const deleteLinks = document.querySelectorAll('.lnk-delete-rela');
      deleteLinks.forEach((link) => {
        link.addEventListener('click', async (event) => {
          event.preventDefault();
          const target = event.currentTarget as HTMLElement;
          const codeTypeId = target.getAttribute('data-code-type-id') ?? '';
          if (!codeTypeId) return;

          const relationsToDelete = arrRela.filter((x) => x.codeTypeId === codeTypeId);
          if (relationsToDelete.length === 0) return;

          const confirmed = confirm(`确认删除代码类型"${codeTypeId}"吗?`);
          if (!confirmed) return;

          try {
            for (const rela of relationsToDelete) {
              await AppCodeTypeRela_DelRecordAsync(rela.mId);
            }
            await AppCodeTypeRela_ReFreshCache();
            alert('删除成功');
            await this.ShowCodeTypeEditModal(applicationTypeId);
          } catch (error) {
            alert(`删除失败: ${error}`);
          }
        });
      });
    }, 100);
  }

  private async ShowSelectCodeTypeModal(applicationTypeId: number): Promise<void> {
    vCodeType_Sim_ReFreshThisCache();
    const allCodeTypes = await vCodeType_Sim_GetObjLstCache();
    const existingRela = await AppCodeTypeRela_GetObjLstCache();
    const existingIds = new Set(
      existingRela
        .filter((x) => x.applicationTypeId === applicationTypeId)
        .map((x) => x.codeTypeId),
    );

    let optionsHtml = '<select id="codeTypeSelect" style="width:100%;padding:8px;font-size:14px">';
    optionsHtml += '<option value="">--请选择代码类型--</option>';
    const sortedCodeTypes = allCodeTypes
      .filter((x) => !existingIds.has(x.codeTypeId) && x.inUse === true)
      .sort((a, b) => (a.codeTypeName || '').localeCompare(b.codeTypeName || ''));
    for (const codeType of sortedCodeTypes) {
      optionsHtml += `<option value="${codeType.codeTypeId}">${codeType.codeTypeName} (${codeType.codeTypeId})</option>`;
    }
    optionsHtml += '</select>';

    const selectVNode = h('div', {
      innerHTML: optionsHtml,
    });

    Modal.confirm({
      title: '选择要添加的代码类型',
      content: selectVNode,
      okText: '确定',
      cancelText: '取消',
      width: 500,
      onOk: async () => {
        const selectElement = document.getElementById('codeTypeSelect') as HTMLSelectElement;
        const selectedCodeTypeId = selectElement?.value;
        if (!selectedCodeTypeId) {
          alert('请选择一个代码类型');
          return false;
        }
        const newRela = new clsAppCodeTypeRelaEN();
        newRela.applicationTypeId = applicationTypeId;
        newRela.codeTypeId = selectedCodeTypeId;
        newRela.SetApplicationTypeId(applicationTypeId);
        newRela.SetCodeTypeId(selectedCodeTypeId);
        try {
          const success = await AppCodeTypeRela_AddNewRecordAsync(newRela);
          if (success) {
            await AppCodeTypeRela_ReFreshCache();
            alert('添加成功');
            await this.ShowCodeTypeEditModal(applicationTypeId);
          } else {
            alert('添加失败');
            return false;
          }
        } catch (error) {
          alert(`添加失败: ${error}`);
          return false;
        }
      },
      onCancel: () => {
        console.log('取消添加');
      },
    });
  }

  private EscapeHtml(strValue: string): string {
    return strValue
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
}
