var tape = require('tape');
var iza = require('../lib/iza.js');


tape("email", function(t) {

  var shouldBeTrue = [
    "belfordz66@gmail.com",
    "jaime+testaccount@battlefy.com"
  ];

  t.plan(shouldBeTrue.length);

  for (var i = 0; i < shouldBeTrue.length; i++) {
    var valid = iza.email(shouldBeTrue[i]);
    t.equal(valid, true);
  }
  
  
});
