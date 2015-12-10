var tape = require('tape');
var iza = require('../lib/iza.js');
var _ = require('underscore');

var shouldBeTrue = {
  'American Express': [ '378282246310005', '371449635398431' ],
  'Diners Club': [ '30569309025904', '38520000023237' ],
  Discover: [ '6011111111111117', '6011000990139424' ],
  JCB: [ '3530111333300000', '3566002020360505' ],
  MasterCard: [ '5555555555554444', '5105105105105100' ],
  Visa: [ '4111111111111111', '4012888888881881', '4222222222222' ],
  Switch: [ '6331101999990016' ]
};

tape("valid credit cards with no type", function(t) {
  t.plan(_.reduce(_.keys(shouldBeTrue), function(c, k) {
    return shouldBeTrue[k].length + c;
  }, 0));

  _.each(shouldBeTrue, function(cardNums, cardType) {
    _.each(cardNums, function(num) {
      console.log(num, iza.creditCard(num));
      t.equal(iza.creditCard(num), true);
    });
  });
});


tape("valid credit cards, including type", function(t) {
  t.plan(_.reduce(_.keys(shouldBeTrue), function(c, k) {
    return shouldBeTrue[k].length + c;
  }, 0));

  _.each(shouldBeTrue, function(cardNums, cardType) {
    _.each(cardNums, function(num) {
      t.equal(iza.creditCard(num, cardType), true);
    });
  });
});
