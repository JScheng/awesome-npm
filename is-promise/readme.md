### is-promise

#### usage
```javascript
var isPromise = require('is-promise');

isPromise({then: function(){...}}) // true
isPromise(null);// false
isPromise({});// false
isPromise({then: true});// false
```