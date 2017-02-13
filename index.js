'use strict';

module.exports = function (input) {
    if (typeof input !== 'string') {
        return false;
    }

    var date = new Date(input);
    var validDate;

    // JavaScript Quirk: if the returned Date string
    // has two strings in it, then you likely gave the
    // Date constructor a strange value like new Date('foo 100')
    // which will result in a weird date output (notice the two spaces):
    // Fri Jan 01  100 00:00:00 GMT+0000 (WET)
    var hasTwoSpaces = date.toString().search('  ') > -1;

    try {
      validDate = !isNaN(date.getTime());
    } catch (err) {
      validDate = false;
    }

    return date.toString() !== "Invalid Date" && !hasTwoSpaces && validDate;
};
