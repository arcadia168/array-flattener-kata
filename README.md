For this code exercise I went with a simple recursive solution to drill down into each array element, compiling a master array of the individual elements, aiming for elegant code which is readable and functional and ready to ship as it has tests and was written in a TDD manner (as I try to do for all of my tests).

The tests give you examples of how you would run this tool/code for it's desired effect.

E.g.

``` javascript
const ArrayFlattenerTool = require('./array-flattener.js');
const flatArray = ArrayFlattenerTool([1, [1, [2, [3, 4]]], 5]);

console.log(`My new fancy flat array is: ${flatArray});

return flatArray;
```
