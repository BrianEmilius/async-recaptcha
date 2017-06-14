# async-recaptcha

Handles Google reCaptcha verification asynchronously.

### Installation
`npm i -S async-recaptcha`

### Usage
```js
const asyncRecaptcha = require("async-recaptcha"),
      secret         = "your google reCaptcha secret key";

// this example uses express/body-parser to get the g-captcha-response string
asyncRecaptcha(req.body['g-recaptcha-response'], secret)
    .then(function() {
        // success
    })
    .catch(function(error) {
        // fail
        console.log(error);
    });
```

### Documentation
**asyncRecaptcha(captchaResponse, secret)**

Validate Google reCaptcha

#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| captchaResponse | string | 'g-captcha-response' |
| secret | string | your Google reCaptcha secret string |

#### Returns
Promise