let { readFileSync } = require("fs"), { EOL } = require("os"), lines = readFileSync("../input.txt", "utf-8").split(/\r?\n/), segements = [2,3,4,7], uniqueValues = 0;
for(let i = 0; i < lines.length; i++){
    lines[i] =  lines[i].split(" | ")[1].split(" ")
    for(let j = 0; j < lines[i].length;  j++){
        if(segements.includes(lines[i][j].length)){
            uniqueValues++
        }
    }
}
console.log(uniqueValues)
