const parse = require(__dirname + "/index.js");
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