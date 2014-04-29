var regex = {
  email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
};

module.exports = {
  email: function(strToTest) {
    if (typeof strToTest !== 'string') { return false; }
    return regex.email.test(strToTest);
  }
};
