# is-datestring
> Check if a string is a datetime string

## Install
```sh
$ npm install --save is-datestring
```

## Usage
```js
var isDateString = require('is-datestring');

isDateString('Friday, 1, 2015 06:00 AM');
// => true

isDateString('Wed Sep 09 2015 23:11:46 GMT+0100 (WEST)');
// => true

isDateString('1/1/2015');
// => true

isDateString('regularString');
// => false

isDateString({});
// => false

```

## Supported Formats

Currently, this module considers the following formats to be **datestrings**:

- `Friday, 1, 2015 06:00 AM`
- `1/1/2015`
- `Wed Sep 09 2015 23:11:46 GMT+0100 (WEST)`

More formats coming soon. If you would like to see a supported format, please open an issue, or send a pull request. 

## License

MIT @ [Michael Wuergler](http://www.numetriclabs.com)