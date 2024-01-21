
/**
 * @module homeService
 */

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { v4: uuidv4 } = require('uuid');
// const { Account } = require('../models');
// const processFilterOptions = require('../utils/filter');
// const { accountValidation } = require('../validations');

/**
 * This function returns a account object from the database, if it exists, otherwise it throws an error.
 * @returns The account object.
 */
const getHomeInfo = async () => {
    var const_string = "hello word"
    if (const_string) {
        return {
            'status': false,
            'code': '500',
            'message': 'internal server error',
            'data': {
                'error': 'string is none'
            }
        }
    }
    return {
        'status': true,
        'code': '200',
        'message': 'OK',
        'data': {
            'account': const_string
        }
    }
};


module.exports = {

    getHomeInfo,
   
};