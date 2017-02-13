'use strict';

module.exports = function (input) {
    if (typeof input !== 'string') {
        return false;
    }

    var date = new Date(input);
    var dateString = date.toString();
    var validDate;

    // Return false on Number values
    if (isNaN(input) === false) {
      return false;
    };

    if (dateString === "Invalid Date") {
      return false;
    }

    // JavaScript Quirk: if the returned Date string
    // has two strings in it, then you likely gave the
    // Date constructor a strange value like new Date('foo 100')
    // which will result in a weird date output (notice the two spaces):
    // Fri Jan 01  100 00:00:00 GMT+0000 (WET)
    var hasTwoSpaces = dateString.search('  ') > -1;

    if (hasTwoSpaces) {
      return false;
    }

    try {
      validDate = !isNaN(date.getTime()) && typeof date.getTime() === 'number';
    } catch (err) {
      validDate = false;
    }

    return validDate;
};
