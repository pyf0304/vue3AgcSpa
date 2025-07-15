import { clsvDataNode_Sim } from '@/ts/L0Entity/AIModule/clsvDataNode_Sim';
import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

export function vDataNode_SimEx_CopyTo(objvDataNode_SimENS: clsvDataNode_SimEN): clsvDataNode_Sim {
  const objvDataNode_SimENT = new clsvDataNode_Sim();
  try {
    ObjectAssign(objvDataNode_SimENT, objvDataNode_SimENS);
    return objvDataNode_SimENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objvDataNode_SimENT;
  }
}
