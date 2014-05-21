Use this module to unflatten flattened objects.

Spec: unflatten(flat, opts)
opts.seperator  defaults to '.'
opts.objectMode defaults to false, meaning create arrays if indice found.

Below is the test case, its pretty obvious

```javascript

var test = require('tape');
var unflatten = require('unflatten');
test('Given a flattened key:value structure we should be able to create a full multidimensional javascript object', function (t) {
    t.plan(1);

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

});
```

OUTPUT:

```javascript
TAP version 13
# Given a flattened key:value structure we should be able to create a full multidimensional javascript object
{ a: { b: { c: '1' } },
  z: { f: { cx: [Object] } },
  p: { m: { n: [Object] } },
  e: { g: '4' },
  x: '5',
  xm: [ 'hello', 'world' ],
  cm: { a: 'hello1', b: 'hello2' } }

1..0
# tests 0
# pass  0

# ok


```