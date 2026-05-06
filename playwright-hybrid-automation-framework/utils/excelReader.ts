import ExcelJS from 'exceljs';
import path from 'path';

export class ExcelReader {
    /**
     * Reads test data from an Excel file and returns an array of objects.
     * @param filePath Path to the .xlsx file relative to the project root.
     * @param sheetName The name of the tab in Excel (e.g., 'Sheet1').
     */
    static async getTestData(filePath: string, sheetName: string) {
        const workbook = new ExcelJS.Workbook();
        const absolutePath = path.resolve(process.cwd(), filePath);
        
        await workbook.xlsx.readFile(absolutePath);

        const worksheet = workbook.getWorksheet(sheetName);

        // Validation to prevent "Cannot read properties of undefined (reading 'getRow')"
        if (!worksheet) {
            const availableSheets = workbook.worksheets.map(s => s.name).join(', ');
            throw new Error(
                `Worksheet "${sheetName}" not found in ${filePath}. \n` +
                `Available sheets in this file are: [${availableSheets}]. \n` +
                `Please ensure the tab name matches exactly.`
            );
        }

        const data: any[] = [];
        const headerRow = worksheet.getRow(1);

        worksheet.eachRow((row, rowNumber) => {
            // Skip the header row
            if (rowNumber > 1) {
                const rowData: any = {};
                row.eachCell((cell, colNumber) => {
                    const header = headerRow.getCell(colNumber).value?.toString();
                    if (header) {
                        // Handle potential formula or object values from Excel
                        const cellValue = cell.value && typeof cell.value === 'object' && 'result' in cell.value 
                            ? cell.value.result 
                            : cell.value;
                        rowData[header] = cellValue;
                    }
                });
                data.push(rowData);
            }
        });

        return data;
    }
}