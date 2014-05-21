var test = require('tape');
var unflatten = require('./index');
test('Given a flattened key:value structure we should be able to create a full multidimensional javascript object', function (t) {

	var flattened = {
		'a.b.c': '1',
		'z.f.cx.s': '2',
		'p.m.n.y': '3',
		'e.g': '4',
		'x': '5',
		'xm.0': 'hello',
		'xm.1': 'world',
		'cm.a': 'hello1',
		'cm.b': 'hello2'
	}

	var unflattened = unflatten(flattened);
	console.log(unflattened)

	t.end();
});