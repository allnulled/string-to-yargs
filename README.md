# string-to-yargs

Parse a string to [`yargs`](https://www.npmjs.com/package/yargs-parser) data.

## Installation

`$ npm i -s string-to-yargs`

## Usage

This is the 

```js
const parse = require("string-to-yargs");
const data = parse("node --arrayOne first --arrayOne second --bool --text 'some text'");
const {
	_: [ node ],
	arrayOne: [ first, second ],
	bool,
	text,
} = data;
if(node !== "node") throw new Error(1);
if(first !== "first") throw new Error(2);
if(second !== "second") throw new Error(3);
if(bool !== true) throw new Error(4);
if(text !== "some text") throw new Error(5);
console.log("Test passed!");
```