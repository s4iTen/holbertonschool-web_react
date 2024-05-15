import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)\n// Insert row ${JSON.stringify(row)}`);

const updatedRow: RowElement = { ...row, age: 23 };
console.log(`\nconst updatedRow: RowElement = ${JSON.stringify(updatedRow)};`);
console.log(`CRUD.updateRow(${newRowID}, updatedRow);\n// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

CRUD.deleteRow(newRowID);
console.log(`\nCRUD.deleteRow(${newRowID});\n// Delete row id ${newRowID}`);