### 获取数组的第一个元素
```javascript
var first = require('get-array-first');
first(['a', 'b', 'c', 'd']); // 'a'
first(['a', 'b', 'c', 'd'], 1); // 'a'
first(['a', 'b', 'c', 'd'], 2); // ['a', 'b']
```