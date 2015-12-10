var regex = {
  email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
  creditCards: {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    Mastercard: /^5[1-5][0-9]{14}$/,
    Amex: /^3[47][0-9]{13}$/,
    'Carte Blanche': /^389[0-9]{11}$/,
    'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    Discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
    'Visa Master': /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/,
    'Insta Payment': /^63[7-9][0-9]{13}$/,
    Laser: /^(6304|6706|6709|6771)[0-9]{12,15}$/,
    Maestro: /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/,
    Solo: /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/,
    Switch: /^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/,
    'Union Pay': /^(62[0-9]{14,17})$/,
    KoreanLocal: /^9[0-9]{15}$/,
    BCGlobal: /^(6541|6556)[0-9]{12}$/
  }
};

module.exports = {
  email: function(strToTest) {
    if (typeof strToTest !== 'string') { return false; }
    return regex.email.test(strToTest);
  },
  creditCard: function(strToTest, cardType) {
    if (cardType) {
      if (!regex.creditCards[cardType]) {
        return new Error('Invalid card type');
      }

      return regex.creditCards[cardType].test(strToTest);
    }
    return Object.keys(regex.email).reduce(function(isValid, cardType) {
      return isValid || regex.creditCards[cardType].test(strToTest);
    }, false);
  }
};
