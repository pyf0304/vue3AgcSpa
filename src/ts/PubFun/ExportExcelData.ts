export interface ExportExcelData {
  arrObjLst: Array<Record<string, any>>; // The array of data to be exported
  sheetName: string; // The name of the Excel sheet
  fileName: string; // The name of the Excel file
}
