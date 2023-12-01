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
console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Part 3: Transforming Data<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`)

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
console.log(`\n>>>>>>>>>>>>>>>>>>>>>>>>Part 4: Sorting and Manipulating Data<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
newArray.pop();


newArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });


newArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("The new Array is: ", newArray);

let sumOfAge = 0;
for(let k of newArray){
    sumOfAge += parseInt(k.age);
}

let averageAge = sumOfAge / newArray.length;
console.log(`\nThe average age is: 
${averageAge}`);

//Part 5: Full Circle
console.log(`\n>>>>>>>>>>>>>>>>>>>>>>>Part 5: Full Circle<<<<<<<<<<<<<<<<<`);
let finalArray = [];
let keysArray = Object.keys(newArray[0]);

finalArray.push(keysArray);


for(let i = 0; i < newArray.length; i++){
    finalArray.push(Object.values(newArray[i]));
    } 

let NewCsvString = '';

for (let row of finalArray) {
    NewCsvString += row.join(',') + '\n';
}

console.log(`\nThe new csv string is:
${NewCsvString}`);