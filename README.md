# js-float-calculation
[![Build Status](https://travis-ci.org/bannerchi/js-float-math.svg?branch=master)](https://travis-ci.org/bannerchi/js-float-math)
[![npm](https://img.shields.io/npm/dm/localeval.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/js-float-calculation)

Js precision floating point calculation

# Useage

## 1. install <br>
`npm i js-float-calculation -S`
## 2. 
```
var jspfpc = require("js-float-calculation");
 
var f1 = 1.01;
var f2 = 2.02;

var f3 = f1.add(f2),
    f4 = f2.sub(f1),
    f5 = f1.mul(f2),
    f6 = f2.div(f1);

console.log("f3="+f3);
console.log("f4="+f4);
console.log("f5="+f5);
console.log("f6="+f6);
 
//"f3=3.03"
//"f4=1.01"
//"f5=2.0402"
//"f6=2"
 
 
 
```
