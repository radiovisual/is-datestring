'use strict';

module.exports = function(string){

    if (typeof string !== 'string'){
        return false;
    }

    // Match format: 1/1/2015
    var regex1 = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}/;
    if ( regex1.test(string) ){
        return true;
    }

    // Match format: Wed Sep 09 2015 23:11:46 GMT+0100 (WEST)
    var regex2 = /^[MTWFS]{1}(?:on|ue|ed|ur|ri|at|un)\s[JFMASOND](?:an|eb|ar|pr|ay|un|ul|ug|ep|ct|ov|ec)\s[0-9]{2}\s[0-9]{4}\s[0-9]{2}:[0-9]{2}:[0-9]{2}\s[A-Z]{3}\+[0-9]{4}\s\([A-Z]{3,}\)/;
    if ( regex2.test(string) ){
        return true;
    }

    // Match format: Friday, 1, 2015 06:00 AM
    var regex3 = /^(?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day,\s(?:[1-9]{1}|1[0-9]{0,1}|2[0-9]{0,1}|3[01]{1}),\s[0-9]{4}\s[0-9]{2}:[0-9]{2}\s(?:AM|PM)/;
    if ( regex3.test(string) ){
        return true;
    }

    return false;

};
