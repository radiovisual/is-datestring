# is-datestring

> Check if a string is a datetime string

[![Build Status](https://travis-ci.org/radiovisual/is-datestring.svg)](https://travis-ci.org/radiovisual/is-datestring)

## Install

```
$ npm install --save is-datestring
```

## Usage

```js
var isDateString = require('is-datestring');

isDateString('Wednesday March 25 2015');
// => true

isDateString('Wed Sep 09 2015 23:11:46 GMT+0100 (WEST)');
// => true

isDateString('2016-12-30T08:00:00.000Z');
// => true

isDateString('1/1/2015');
// => true

isDateString('Regular String');
// => false

isDateString({});
// => false
```

## Supported Formats

Currently, this module considers the following formats to be **datestrings**:

- `100`
- `2015-03-25`
- `2015-03-25`
- `1/1/2015`
- `Mar 25 2015`
- `25 Mar 2015`
- `Wednesday March 25 2015`
- `Wed Sep 09 2015 23:11:46 GMT+0100 (WEST)`
- `2016-12-30T08:00:00.000Z`

Other formats are likely to be supported, but this module only tests for the
formats listed above. **Pull requests are welcome** if you would like to add test
coverage for additional formats.

## Known Limitations

This module currently attempts to parse the supplied Datetime string into a
JavaScript date object in order to determine if the string is a valid date. This
works for most use cases, but it also means that this module is limited by
some of JavaScript's quirks. For example, the following string will be considered
a valid date:

```js
const string = 'Foo 100';
const isDateString(string);
//=> true
```

The reason for this, is because JavaScript will parse `"Foo 100"` as `new Date('100')`
which thinks you are trying to initialize a Date starting at 100 milliseconds after the
runtime's epoch value.

**Pull requests are welcome** if you would like to help fix these issues.

## License

MIT @ [Michael Wuergler](http://www.numetriclabs.com)
