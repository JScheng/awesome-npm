### rtrim

#### useage

```javascript

var rtrim = require( 'rtrim' );


/* Strip whitespace from the end of a string */
rtrim( '    Hello    ' ) + ' World' // →    Hello World

/* Strip multiple special chars from the end of a string */
rtrim( '... Hello World ...', ' .' ); // →... Hello World

/* Strip multiple chars from the end of a string */
rtrim( 'Hello World', 'Hdle' ); // →Hello Wor

/* Strip trailing slash from the end of a string */
rtrim( 'https://goo.gl/', '/' ); // →https://goo.gl

```