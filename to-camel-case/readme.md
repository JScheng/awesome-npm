### 驼峰命名to-camel-case

#### useage

```javascript
    var toCamelCase = require('to-camel-case');
    toCamelCase('space case'); // -> "spaceCase"
    toCamelCase('snake_case'); // -> "snakeCase"
    toCamelCase('dot.case'); // -> "dotCase"
    toCamelCase('weird[case'); // -> "weirdCase"
```