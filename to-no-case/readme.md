### to-no-case

#### useage

```javascript
var toNoCase = require('to-no-case')

toNoCase('camelCase')            // "camel case"
toNoCase('snake_case')           // "snake case"
toNoCase('slug-case')            // "slug case"
toNoCase('Title of Case')        // "title of case"
toNoCase('Sentence case.')       // "sentence case."
toNoCase('RAnDom -jUNk$__loL!')  // "random -junk$__lol!"

```