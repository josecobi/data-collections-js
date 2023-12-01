console.log("\n>>>>>>>>>>>>>>>>>>>>Part 2: Refactoring Old Code<<<<<<<<<<<<<<<<<<<<<<<<<<<");

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";



let rows = [];
let row = [];
let cell = [];

for (let k of csvString) {
    if (k === '\n') {
        row.push(cell.join(''));
        rows.push(row);
        row = [];
        cell = [];
    } else if (k === ',') {
        row.push(cell.join(''));
        cell = [];
    } else {
        cell.push(k);
    }
}


row.push(cell.join(''));
rows.push(row);

console.log(rows);

//Part 3: Transforming Data
const object = {};
for(let i = 0; i < rows[0].length; i++){
    
    object[rows[0][i].toLowerCase()] =  '';
}
console.log(object);
