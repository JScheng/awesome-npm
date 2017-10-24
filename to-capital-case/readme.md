### to-capital-case

#### 使用方式

```javascript
var toCapitalCase = require('to-capital-case')

toCapitalCase('camelCase')        // "Camel Case"
toCapitalCase('space case')       // "Space Case"
toCapitalCase('snake_case')       // "Snake Case"
toCapitalCase('dot.case')         // "Dot Case"
toCapitalCase('some*weird[case')  // "Some Weird Case"

```