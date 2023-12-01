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
let headers = rows[0];

let newArray = [];

for(let rowInArray = 1; rowInArray < rows.length; rowInArray++){
    let object = {};
    for(let column = 0; column < rows[0].length; column++){
        
        object[headers[column].toLowerCase()] = rows[rowInArray][column];   
    }
    newArray.push(object);
}
console.log(newArray);

//Part 4: Sorting and Manipulating Data

newArray.pop();
console.log(newArray);