'use strict';

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

// Complete the staircase function below.
function staircase(n) {
    //we use a loop to track our number of rows
  for ( let i = 1; i <=n ; i++){
      // print out a " " n-i times and append a # i times
      console.log(" ".repeat(n-i) + "#".repeat(i))
  }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
