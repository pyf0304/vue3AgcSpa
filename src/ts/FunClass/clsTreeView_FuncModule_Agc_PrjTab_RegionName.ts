import $ from 'jquery';

import { clsPrivateSessionStorage } from '../PubConfig/clsPrivateSessionStorage';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { enumTabState } from '@/ts/L0Entity/Table_Field/clsTabStateEN';
import { enumUseState } from '@/ts/L0Entity/SysPara/clsUseStateEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { FuncModule_Agc_GetObjLstCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { ViewRegion_GetObjLstAsync } from '@/ts/L3ForWApi/RegionManage/clsViewRegionWApi';

import { vPrjTab_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsViewRegionCmPrjIdRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionCmPrjIdRelaEN';

export class clsTreeView_FuncModule_Agc_PrjTabRegionName {
  public static divEdit: HTMLDivElement;
  public static prjId: string;
  public static cmPrjId: string;
  public static applicationTypeId: number;
  public static regionTypeId: string;

  public static async BindTr(SetOnClick: (li1: HTMLLIElement, strKeyId: string) => void) {
    const strPrjId = clsTreeView_FuncModule_Agc_PrjTabRegionName.prjId;
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    // const intApplicationTypeId = clsTreeView_FuncModule_Agc_PrjTabRegionName.applicationTypeId;
    const strRegionTypeId = clsTreeView_FuncModule_Agc_PrjTabRegionName.regionTypeId;

    let arrFuncModule_AgcObjLst: Array<clsFuncModule_AgcEN> = [];
    let arrPrjTabObjLst: Array<clsvPrjTab_SimEN> = [];
    let arrViewRegion_Sel: Array<clsViewRegionEN> = [];

    arrFuncModule_AgcObjLst = await FuncModule_Agc_GetObjLstCache(strPrjId);
    arrFuncModule_AgcObjLst = arrFuncModule_AgcObjLst
      .filter((x) => x.useStateId == enumUseState.InUse_0001)
      .sort((x, y) => x.orderNum - y.orderNum);
    arrPrjTabObjLst = await vPrjTab_Sim_GetObjLstCache(clsPrivateSessionStorage.cmPrjId);
    arrPrjTabObjLst = arrPrjTabObjLst.filter((x) => x.tabStateId == enumTabState.Normal_01);

    const strWhere = `${clsViewRegionEN.con_RegionId} in (select ${clsViewRegionEN.con_RegionId} from ${clsViewRegionCmPrjIdRelaEN._CurrTabName} where ${clsViewRegionCmPrjIdRelaEN.con_CmPrjId}) = '${strCmPrjId}'`;
    let arrViewRegion = await ViewRegion_GetObjLstAsync(strWhere);

    arrViewRegion = arrViewRegion.sort((x, y) => x.regionName.localeCompare(y.regionName));
    if (IsNullOrEmpty(strRegionTypeId) == false) {
      arrViewRegion = arrViewRegion
        .filter((x) => x.regionTypeId == strRegionTypeId)
        .sort((x, y) => x.regionName.localeCompare(y.regionName));
    }
    console.log('arrViewRegion:', arrViewRegion.length);
    const divUl: HTMLDivElement = <HTMLDivElement>document.getElementById('divUl');
    const ulTreeBind: HTMLUListElement = document.createElement('ul');
    ulTreeBind.id = 'TreeBind';
    ulTreeBind.className = 'st_tree';

    if (arrFuncModule_AgcObjLst.length == 0) return;
    //console.log(arrFuncModule_AgcObjLst);

    for (let i = 0; i < arrFuncModule_AgcObjLst.length; i++) {
      const objFuncModule_Agc = arrFuncModule_AgcObjLst[i];
      //strhtml += '<li class="li">';
      //strhtml += '<a href="#" id="' + arrFuncModule_AgcObjLst[i].funcModuleAgcId + '" class="main" title="' + arrFuncModule_AgcObjLst[i].funcModuleNameSim + '" onclick=main_Click("' + arrFuncModule_AgcObjLst[i].funcModuleAgcId + '")>' + arrFuncModule_AgcObjLst[i].funcModuleNameSim + '</a>';

      const liLevel1: HTMLLIElement = document.createElement('li');
      liLevel1.className = 'li';
      liLevel1.id = Format('liL1_{0}', objFuncModule_Agc.funcModuleAgcId);
      liLevel1.setAttribute('state', 'open');
      const aLevel1: HTMLAnchorElement = document.createElement('a');
      aLevel1.href = 'javascript:void(0)';
      aLevel1.id = Format('{0}', objFuncModule_Agc.funcModuleAgcId);
      aLevel1.className = 'main';
      aLevel1.title = objFuncModule_Agc.funcModuleName;
      aLevel1.setAttribute(
        'onclick',
        Format("main_Click('{0}')", objFuncModule_Agc.funcModuleAgcId),
      );

      aLevel1.innerText = objFuncModule_Agc.funcModuleName;
      liLevel1.appendChild(aLevel1);

      //strhtml += '<ul class="submenu" id="ul' + arrFuncModule_AgcObjLst[i].funcModuleAgcId + '">';
      const ulLevel1: HTMLUListElement = document.createElement('ul');
      ulLevel1.className = 'submenu';
      ulLevel1.id = Format('ul{0}', arrFuncModule_AgcObjLst[i].funcModuleAgcId);

      const arrPrjTabObjLst_Sel = arrPrjTabObjLst.filter(
        (x) => x.funcModuleAgcId == objFuncModule_Agc.funcModuleAgcId,
      );
      const arrTabId = arrPrjTabObjLst_Sel.map((x) => x.tabId);
      arrViewRegion_Sel = arrViewRegion.filter((x) => arrTabId.indexOf(x.tabId) > -1);
      if (arrViewRegion_Sel.length == 0) continue;
      //console.log(arrViewRegion_Sel);
      //循环数据
      for (let j = 0; j < arrViewRegion_Sel.length; j++) {
        const objViewRegion: clsViewRegionEN = arrViewRegion_Sel[j];
        const strRegionId = objViewRegion.regionId;
        let strRegionName = objViewRegion.regionName;
        if (strRegionName.length > 20) {
          strRegionName = `${strRegionName.substr(0, 25)}...`;
        }

        //strhtml += '<li id="' + strRegionId + '" onclick=btnSelectPaper("' + strRegionId + ')>';
        const liLevel2: HTMLLIElement = document.createElement('li');
        liLevel2.id = strRegionId;
        SetOnClick(liLevel2, strRegionId);
        //liLevel2.setAttribute("onclick", Format("btnSelectPaper('{0}')", strRegionId ));
        //默认存放第一条数据显示；
        //判断存放的id控件是否为空；
        const aLevel2: HTMLAnchorElement = document.createElement('a');
        aLevel2.href = 'javascript:void(0)';
        aLevel2.title = objViewRegion.regionName;
        aLevel2.innerText = objViewRegion.regionName;
        //aLevel2.style.cssFloat = "left";
        if ($('#hidRegionId').val() == '') {
          //存放Id

          SetInputValueInDivObj(
            clsTreeView_FuncModule_Agc_PrjTabRegionName.divEdit,
            'hidRegionId',
            strRegionId,
          );

          //                        strhtml += '<a style="float:left;" href="#" title="' + objViewRegion.regionName + '" class="selected">' + strRegionName + '</a>';
          aLevel2.className = 'selected';
        }

        //else {
        //    strhtml += '<a style="float:left;" href="#" title="' + objViewRegion.regionName + '">' + strRegionName + '</a>';
        //}
        liLevel2.appendChild(aLevel2);
        ulLevel1.appendChild(liLevel2);

        //strhtml += '</li>';
      }
      liLevel1.appendChild(ulLevel1);
      ulTreeBind.appendChild(liLevel1);
      //strhtml += '</ul>';
      //strhtml += '</li>';
    }

    divUl.innerHTML = '';
    divUl.appendChild(ulTreeBind);
  }
}
