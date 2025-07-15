import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';

export interface IGetTabFieldObj {
  GetObjByTabId(strTabId: string, strPrjId: string): clsPrjTabEN;
  GetObjByFldId(strFldId: string, strPrjId: string): clsFieldTabEN;
}
