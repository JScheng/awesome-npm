### 创建给定范围的数组

```javascript
    var range = require('array-range');
    range(3); // -> [0, 1, 2]
    range(1, 4); // -> [1, 2, 3]
```

#### 在es6中的使用例子：

```javascript
    var range = require('array-range');
    range(5).map( x => x * x);
    // -> [0, 1, 4, 9, 16]
    range(2, 10).filter(x => x % 2 === 0);
    // -> [2, 4, 6, 8]
```

