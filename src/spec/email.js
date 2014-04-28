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
  "sadasdsa@asdkaKsd sdfsdf df",
  "plainaddress",
  "#@%^%#$@#$@#.com",
  "@domain.com",
  "Joe Smith <email@domain.com>",
  "email.domain.com",
  "email@domain@domain.com",
  ".email@domain.com",
  "email.@domain.com",
  "email..email@domain.com",
  "あいうえお@domain.com",
  "email@domain.com (Joe Smith)",
  "email@domain",
  "email@-domain.com",
  "email@domain.web",
  "email@111.222.333.44444",
  "email@domain..com"
];


for (var i = 0; i < shouldBeTrue.length; i++) {
  tape("The Email " + shouldBeTrue[i] + " should be false", function(t) {
    t.plan(1);
    var valid = iza.email(shouldBeTrue[i]);
    t.equal(valid, true);
  });
}

for (var i = 0; i < shouldBeFalse.length; i++) {
  tape("The Email " + shouldBeFalse[i] + " should be false", function(t) {
    t.plan(1);
    var valid = iza.email(shouldBeFalse[i]);
    t.equal(valid, false);
  });
}
