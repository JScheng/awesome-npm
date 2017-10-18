### 检测元素是否存在数组中

#### 使用方式

```javascript
    var inArray = require('in-array');
    inArray(['a', 'b', 'c', 'd'], 'a'); // -> true
    inArray(['a', 'b', 'c', 'd'], 'e'); // -> false
    inArray(null, 'e'); // -> false
```