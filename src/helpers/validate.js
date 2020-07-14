const Validator = require('validatorjs');
const Movie = require('../movie/model/movieModel');


Validator.registerAsync('nameAvaliable', (name, attribute, req, passes) => {
    if (!attribute) throw new Error('Specify requirements: i.e fieldName: exist:table,column');

    let attrArray = attribute.split(',')

    if (attrArray.length !== 2) throw new Error(`Invalid format for validation rule on ${attribute}`);

    // assign array index 0 and 1 to table and column
    const { 0: table, 1: column } = attrArray

    // custom error messge
    let errorMessage = (column == 'name') ? `Movie ${column} has already been taken` : `${column} already in use`

    // check if exists
    Movie.valueExists({ [column]: name })
        .then((dbResult) => {
            if (dbResult) {
                passes(false, errorMessage)
                return;
            }
            passes();
        })
})


const validator = (body, rules, customMessages, callback) => {
    const validaton = new Validator(body, rules, customMessages);

    validaton.passes(() => callback(null, true));
    validaton.fails(() => callback(validaton.errors, false))
}

module.exports = validator