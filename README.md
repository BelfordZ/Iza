[![Build Status](https://travis-ci.org/BelfordZ/Iza.svg?branch=master)](https://travis-ci.org/BelfordZ/Iza)
[![npm](https://img.shields.io/npm/dt/express.svg)](https://www.npmjs.com/package/iza)
[![npm](https://img.shields.io/npm/dw/localeval.svg)](https://www.npmjs.com/package/iza)


# Iza useful? yarp!
Iza is a string validation utility. Nothing but the most accurate and best validations make it into this repo.

## Email
```
iza.email('leroy+jenkins@super.crazy') // returns true

```

## Credit Card
### Supported card types
 - visa
 - mastercard
 - American Express
 - Carte Blanche
 - Diners Club
 - Discover
 - Jcb
 - Visa Master
 - Insta Payment
 - Laser
 - Maestro
 - Solo
 - Switch
 - Union Pay
 - KoreanLocal
 - BCGlobal


### Specific card type
```
iza.creditCard('Visa', 4111111111111111) // returns true
```

### Of any type
```
iza.creditCard('leroy+jenkins@super.crazy') // returns true
```


## Dont know what it is? Ask iza!
```
iza.youTellMe('foo@bar.baz') // returns ['email']
```
Feel free to make a PR to merge to develop if you would like to contribute.
