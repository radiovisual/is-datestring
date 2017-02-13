'use strict';

module.exports = function (input) {
    if (typeof input !== 'string') {
        return false;
    }

    var date = new Date(input);
    var validDate;

    try {
      validDate = !isNaN(date.getTime());
    } catch (err) {
      validDate = false;
    }

    return date.toString() !== "Invalid Date" && validDate;
};
