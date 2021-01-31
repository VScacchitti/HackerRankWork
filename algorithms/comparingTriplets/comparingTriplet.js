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

// Complete the compareTriplets function below.
//This function passed all test cases!

function compareTriplets(a, b) {
    let score = [0,0];

    if(a[0]>b[0]){score[0]+=1}
    if(a[1]>b[1]){score[0]+=1}
    if(a[2]>b[2]){score[0]+=1}
    if(a[0]<b[0]){score[1]+=1}
    if(a[1]<b[1]){score[1]+=1}
    if(a[2]<b[2]){score[1]+=1}

    return score;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}