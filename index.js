const arrayFlattenerTool = require('./src/array-flattener-tool.js');

// Test for development purposes.
const arrayToFlatten = process.argv[1];
console.log(`PARAMETER IS: ${arrayToFlatten}`);
console.log(`TESTING WITH: ${arrayToFlatten.toString()}`);
arrayFlattenerTool(testArray);
