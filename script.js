#!/usr/bin/env node
console.log("hello World");

// consuming the command line arguments
// argv -> is an array
// first element is the using  what process you are executing the file
// second element -> is the path
console.log(process.argv);

console.log(process.argv[2].split("=")[1]);