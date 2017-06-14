const request = require('request');

/**
 * Validate Google reCaptcha
 * @param {string} captchaResponse - 'g-recaptcha-response'
 * @param {string} secret - your Google reCaptcha secret string
 * @returns {Promise}
 */
async function asyncRecaptcha(captchaResponse, secret) {
	let options = {
		url: 'https://www.google.com/recaptcha/api/siteverify',
		method: 'POST',
		headers: {
			'User-Agent': 'Super Agent/0.0.1',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		form: {
			'secret': secret,
			'response': captchaResponse
		}
	};
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                if (JSON.parse(body).success)
                    resolve(JSON.parse(body).success);
                else
                    reject(new Error('The reCaptcha response is invalid.'));
            }
            else
                reject(error);
        });
    });
};

module.exports = asyncRecaptcha;