### map-obj

#### usage

```javascript

    const mapObj = require('map-obj');
    const newObject = mapObj({foo: 'bar'}, (key, value)=> [value, key]);

    // => {bar: 'foo'}

```