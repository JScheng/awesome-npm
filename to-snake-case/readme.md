### to-snake-case

#### usage

```javascript

var toSnakeCase = require('to-snake-case')

toSnakeCase('camelCase')   // "camel_case"
toSnakeCase('space case')  // "snake_case"
toSnakeCase('dot.case')    // "dot_case"
toSnakeCase('weird[case')  // "weird_case"

```