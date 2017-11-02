### filter-obj

#### usage

```javascript
    const filterObj = require('filter-obj');
    const obj = {
        foo: true,
        bar: false
    };
    const newObject = filterObj(obj, filterObj(obj, (key, value) => value === true));
    // {foo: true}
    const newObject2 = filterObj(obj, ['obj']);
    // {bar: false}
```