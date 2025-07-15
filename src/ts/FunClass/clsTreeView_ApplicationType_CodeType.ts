import $ from 'jquery';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsAppCodeTypeRelaEN } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaEN';

import { ApplicationType_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { AppCodeTypeRela_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsAppCodeTypeRelaWApi';
import { Format } from '@/ts/PubFun/clsString';
import { vCodeType_Sim_GetObjByCodeTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

export class clsTreeView_ApplicationType_CodeType {
  public static divEdit: HTMLDivElement;
  public static async BindTr_CodeType2(SetOnClick: (li1: HTMLLIElement, strKeyId: string) => {}) {
    const strWhereCond1 = ' 1=1 ';
    const strWhereCond2 = ' 1=1 ';
    let arrApplicationTypeObjLst: Array<clsApplicationTypeEN> = [];
    let arrAppCodeTypeRelaObjLst0: Array<clsAppCodeTypeRelaEN> = [];
    let arrAppCodeTypeRelaObjLst: Array<clsAppCodeTypeRelaEN> = [];

    await ApplicationType_GetObjLstAsync(strWhereCond1).then((jsonData) => {
      arrApplicationTypeObjLst = <Array<clsApplicationTypeEN>>jsonData;
    });

    await AppCodeTypeRela_GetObjLstAsync(strWhereCond2).then((jsonData) => {
      arrAppCodeTypeRelaObjLst0 = <Array<clsAppCodeTypeRelaEN>>jsonData;
    });

    const divUl: HTMLDivElement = <HTMLDivElement>document.getElementById('divUl');
    const ulTreeBind: HTMLUListElement = document.createElement('ul');
    ulTreeBind.id = 'TreeBind';
    ulTreeBind.className = 'st_tree';
    // const strhtml = '';
    if (arrApplicationTypeObjLst.length > 0) {
      for (let i = 0; i < arrApplicationTypeObjLst.length; i++) {
        const objApplicationType = arrApplicationTypeObjLst[i];
        //strhtml += '<li class="li">';
        //strhtml += '<a href="#" id="' + arrApplicationTypeObjLst[i].applicationTypeId + '" class="main" title="' + arrApplicationTypeObjLst[i].applicationTypeName + '" onclick=main_Click("' + arrApplicationTypeObjLst[i].applicationTypeId + '")>' + arrApplicationTypeObjLst[i].applicationTypeName + '</a>';

        const liLevel1: HTMLLIElement = document.createElement('li');
        liLevel1.className = 'li';
        liLevel1.id = Format('liL1_{0}', objApplicationType.applicationTypeId);
        liLevel1.setAttribute('state', 'open');
        const aLevel1: HTMLAnchorElement = document.createElement('a');
        aLevel1.href = 'javascript:void(0)';
        aLevel1.id = Format('{0}', objApplicationType.applicationTypeId);
        aLevel1.className = 'main';
        aLevel1.title = objApplicationType.applicationTypeName;
        aLevel1.setAttribute(
          'onclick',
          Format("main_Click('{0}')", objApplicationType.applicationTypeId),
        );

        aLevel1.innerText = objApplicationType.applicationTypeName;
        liLevel1.appendChild(aLevel1);

        //strhtml += '<ul class="submenu" id="ul' + arrApplicationTypeObjLst[i].applicationTypeId + '">';
        const ulLevel1: HTMLUListElement = document.createElement('ul');
        ulLevel1.className = 'submenu';
        ulLevel1.id = Format('ul{0}', arrApplicationTypeObjLst[i].applicationTypeId);
        arrAppCodeTypeRelaObjLst = arrAppCodeTypeRelaObjLst0.filter(
          (x) => x.applicationTypeId == objApplicationType.applicationTypeId,
        );
        //循环数据
        for (let j = 0; j < arrAppCodeTypeRelaObjLst.length; j++) {
          const strCodeTypeId = arrAppCodeTypeRelaObjLst[j].codeTypeId;
          const objCodeType = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
          if (objCodeType == null) {
            const strMsg = Format('代码类型Id:[{0}]，没有相应的类型，请检查！', strCodeTypeId);
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          let strCodeTypeName = objCodeType.codeTypeName;
          if (strCodeTypeName.length > 20) {
            strCodeTypeName = `${strCodeTypeName.substr(0, 25)}..`;
          }

          //strhtml += '<li id="' + strCodeTypeId + '" onclick=btnSelectPaper("' + strCodeTypeId + ')>';
          const liLevel2: HTMLLIElement = document.createElement('li');
          liLevel2.id = strCodeTypeId;
          SetOnClick(liLevel2, strCodeTypeId);
          //liLevel2.setAttribute("onclick", Format("btnSelectPaper('{0}')", strCodeTypeId ));
          //默认存放第一条数据显示；
          //判断存放的id控件是否为空；
          const aLevel2: HTMLAnchorElement = document.createElement('a');
          aLevel2.href = 'javascript:void(0)';
          aLevel2.title = objCodeType.codeTypeName;
          aLevel2.innerText = objCodeType.codeTypeName;
          //aLevel2.style.cssFloat = "left";
          if ($('#hidCodeTypeId').val() == '') {
            //存放Id

            SetInputValueInDivObj(
              clsTreeView_ApplicationType_CodeType.divEdit,
              'hidCodeTypeId',
              strCodeTypeId,
            );
            //                        strhtml += '<a style="float:left;" href="#" title="' + objCodeType.codeTypeName + '" class="selected">' + strCodeTypeName + '</a>';
            aLevel2.className = 'selected';
          }

          //else {
          //    strhtml += '<a style="float:left;" href="#" title="' + objCodeType.codeTypeName + '">' + strCodeTypeName + '</a>';
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

      divUl.appendChild(ulTreeBind);
    }
  }
}
