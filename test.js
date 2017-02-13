'use strict';
var isdate = require('./');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('Milliseconds', function (t) {
  t.plan(1);
  t.equal( isdate("100"), true);
});

test('ISO Date 2015-03-25', function (t) {
  t.plan(1);
  t.equal( isdate("2015-03-25"), true);
});

test('Short Date', function (t) {
  t.plan(2);
  t.equal( isdate("2015-03-25"), true);
  t.equal( isdate("1/1/2015"), true);
});

test('Long Date', function (t) {
  t.plan(2);
  t.equal( isdate("Mar 25 2015"), true);
  t.equal( isdate("25 Mar 2015"), true);
});

test('Full Date', function (t) {
  t.plan(1);
  t.equal( isdate("Wednesday March 25 2015"), true);
});

test('Long Date Time', function (t) {
  t.plan(1);
  t.equal( isdate("Wed Sep 09 2015 23:11:46 GMT+0100 (WEST)"), true);
});

test('TMZ Datetime', function (t) {
  t.plan(1);
  t.equal( isdate("2016-12-30T08:00:00.000Z"), true);
});

test('should return false on non datestrings', function (t) {
  t.plan(4);
  t.equal(isdate({}), false);
  t.equal( isdate(""), false);
  t.equal( isdate("Friday"), false);
  t.equal( isdate("foo"), false);
});
