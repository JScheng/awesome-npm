### map转数组
#### 使用方式
```javascript
  const mapArray = require('map-array');
  const obj = {
    giorgio: 'Bianchi',
    gino: 'Rossi'
  };
  console.log(mapArray(obj, (key, value) => key + ' ' + value));
```