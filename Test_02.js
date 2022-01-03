'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'oddNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function oddNumbers(l, r) {
    let start = l;  // Where range is starting
    let end = r;    // Where range is ending
    
    // Array to store odd numbers
    let oddarr = [];
    
    // Iterate through whole range to find out the odd numbers
    for (let i = start; i <= end; i++) {
        if (i%2 != 0) {
            oddarr.push(i);     // If ith number is odd (reminder not equals to zero)
        };
    }
    
    // Return the array
    return oddarr

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const r = parseInt(readLine().trim(), 10);

    const result = oddNumbers(l, r);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
