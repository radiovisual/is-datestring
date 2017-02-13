# is-datestring

> Check if a string is a datetime string

[![Build Status](https://travis-ci.org/radiovisual/is-datestring.svg)](https://travis-ci.org/radiovisual/is-datestring)

:boom: **Be aware of some [quirks](https://github.com/radiovisual/is-datestring/issues).
Use at your own risk**. Pull requests welcome if you would like to
help close [issues](https://github.com/radiovisual/is-datestring/issues) on this module.


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

## Known Issues

- **Allows Strange Values:** This module uses JavaScript `Date()` constructor to
help determine if a string is a valid datestring. Because of this, the module is
suceptible to certain JavaScript quirks, and sometimes it lets some unassuming dateString values
pass as valid datestrings. See [Issue #2](https://github.com/radiovisual/is-datestring/issues/2)
for more information.

## License

MIT @ [Michael Wuergler](http://www.numetriclabs.com)
