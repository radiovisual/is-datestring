'use strict';

var assert = require('assert');
var isdate = require('./');

describe("is-datestring", function(){

    it('should return false on non-strings', function(done){

        assert( !isdate({}) );
        done();

    });

    it('should return true on valid datestrings', function(done){

        assert( isdate("Sunday, 10, 1970 06:00 PM") );
        assert( isdate("Monday, 1, 2000 06:01 AM") );
        assert( isdate("Tuesday, 1, 1999 10:02 AM") );
        assert( isdate("Wednesday, 1, 2015 11:00 AM") );
        assert( isdate("Thursday, 1, 2015 12:00 AM") );
        assert( isdate("Friday, 1, 2015 02:00 PM") );
        assert( isdate("Saturday, 23, 2015 06:00 AM") );
        assert( isdate("Wed Sep 09 2015 23:11:46 GMT+0100 (WEST)") );
        assert( isdate("1/1/2015") );
        done();

    });

    it('should return false on non datestrings', function(done){

        assert( !isdate("Friday") );
        assert( !isdate("foo") );
        assert( !isdate("100") );
        done();

    });


});
