var regex = {
  email: new RegExp("^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")
};

module.exports = {
  email: function(strToTest) {
    if (typeof strToTest !== 'string') { return false; }
    return regex.email.test(strToTest);
  }
};
