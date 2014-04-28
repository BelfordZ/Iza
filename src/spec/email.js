var tape = require('tape');
var iza = require('../lib/iza.js');

var shouldBeTrue = [
  "belfordz66@gmail.com",
  "jaime+testaccount@battlefy.com",
  "email@domain.com",
  "firstname.lastname@domain.com",
  "email@subdomain.domain.com",
  "firstname+lastname@domain.com",
  "email@123.123.123.123",
  "email@[123.123.123.123]",
  'email"@domain.com',
  "1234567890@domain.com",
  "email@domain-one.com",
  "_______@domain.com",
  "email@domain.name",
  "email@domain.co.jp",
  "firstname-lastname@domain.com",
];

var shouldBeFalse = [
  "sadasdsa@asdkaKsd sdfsdf df"
];


tape("email that should work", function(t) {
  t.plan(shouldBeTrue.length);

  for (var i = 0; i < shouldBeTrue.length; i++) {
    var valid = iza.email(shouldBeTrue[i]);
    t.equal(valid, true);
  }  
});

tape("email that should not work", function(t) {
  t.plan(shouldBeFalse.length);

  for (var i = 0; i < shouldBeFalse.length; i++) {
    var valid = iza.email(shouldBeFalse[i]);
    t.equal(valid, false);
  }
});
