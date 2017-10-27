### to-dot-case

#### useage

```javascript
    var toDotCase = require('to-dot-case');
    toDotCase('camelCase')   // "camel.case"
    toDotCase('space case')  // "snake.case"
    toDotCase('slug-case')   // "slug.case"
    toDotCase('weird[case')  // "weird.case"
```