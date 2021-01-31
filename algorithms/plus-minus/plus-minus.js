process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    const {positive, negative, zero} = 
        arr.reduce((acc, val) => {
            if (val > 0) {
                acc.positive += 1;
            }
            if (val === 0) {
                acc.zero += 1;
            }
            if (val < 0) {
                acc.negative += 1;
            }
            return acc;
        }, { 
            positive: 0, 
            negative: 0, 
            zero: 0 
        });
        
    console.log(positive / arr.length);
    console.log(negative / arr.length);
    console.log(zero / arr.length);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}