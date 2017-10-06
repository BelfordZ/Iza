var tape = require('tape');
var iza = require('../lib/iza.js');

tape("tells you if its an email", function(t) {
  t.plan(1);
  t.equal(iza.youTellMe('zachary.belford@unbounce.com'), 'email');
});
