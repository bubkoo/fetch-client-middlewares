!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["fetch-client-useragent"]=t():e["fetch-client-useragent"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=function(e){if(e){var t=function(t){return t.headers.set("User-Agent",o(e)),t};return{request:t}}return null};var o=function(e){return"object"!==("undefined"==typeof e?"undefined":n(e))?e:Object.keys(e).map(function(t){return[t,e[t]].join("/").replace(/[\t\r\n\s]+/g,"-")}).join(" ")}}])});
//# sourceMappingURL=index.js.map