const Validator = require('../Helpers/validate')
const CENSORSHIP = require('../Helpers/enum');

const rules = (req, res, next) => {
    const validationRules = {
        "name": "required|string|between:1,50|nameAvaliable:Movie,name",
        "release_date": "required|date",
        "censorship_level": `required|in:${CENSORSHIP.CENSORED},${CENSORSHIP.UNCENSORED}`,
        "director": "required|string|between:1,50",
        "cast": "required|array|between:1,10"
        
    }

    Validator(req.body, validationRules, {}, (err, status) => {
        if (!status) {
            res.status(500)
                .send({
                    success: false,
                    message: 'Sorry, the movie creation failed. 🙁',
                    data: err
                })
        }
        else {
            next();
        }
    })
}

module.exports = { rules }