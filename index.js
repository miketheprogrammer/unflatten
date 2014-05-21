var xtend = require('xtend');
var debug = require('debug')('unflatten - ');
var util  = require('util');

var arrayOrObject = function (key, opts) {
	var ret;
	if (isNaN(Number(key)) || key.indexOf(opts.seperator) !== -1) {
		ret = {}
	} else {
		if (opts.objectMode) {
			ret = {};
		} else {
			ret = [];
		}
	}

	return ret;
}

var unflatten = function unflatten (flat, opts) {
	if (Object.prototype.toString.call(flat) !== '[object Object]') return flat;

	opts = xtend({seperator: '.', objectMode: false}, opts);
	var original = xtend({}, flat);
	var keys = Object.keys(flat);
	var result = {};

	for (var i = 0; i < keys.length; i += 1) {
		var current = result;
		var key = keys[i].split(opts.seperator);
		var target = key.shift();
		while(key[0] !== undefined) {
			if (current[target] === undefined) {
				current[target] = arrayOrObject(key[0], opts);
			}

			current = current[target];
			if (key.length) {
				target = key.shift();
			}

		}
		current[target] = unflatten(flat[keys[i]], opts);
	}
	return result;
}

module.exports = unflatten;