import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';

export interface BindData {
  ctlTypeLst: clsCtlTypeEN[]; // Change `any[]` to the actual type of ctlTypeLst
  vPrjTab_SimLst: clsvPrjTab_SimEN[];
  vFieldTab_SimLst: clsvFieldTab_SimEN[];
  // Add other properties if needed
}
