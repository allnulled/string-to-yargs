module.exports = function(text) {
	const parseString = require("string-argv").parseArgsStringToArgv;
	const parseArray = require("yargs-parser");
	const argv = parseString(text);
	const argvData = parseArray(argv);
	return argvData;
}