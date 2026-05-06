import * as XLSX from 'xlsx';

export interface LoginData {
  email: string;
  password: string;
  expectedResult: string;
}

export function readExcel(filePath: string, sheetName: string): LoginData[] {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    throw new Error(`Sheet "${sheetName}" not found`);
  }

  const data: LoginData[] = XLSX.utils.sheet_to_json(sheet);
  return data;
}