/**
 * @module accountService
 */

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { v4: uuidv4 } = require('uuid');
const { Account } = require('../models');
// const processFilterOptions = require('../utils/filter');
// const { accountValidation } = require('../validations');

// /**
//  * This function returns a account object from the database, if it exists, otherwise it throws an error.
//  * @param accountId - The account ID of the account you want to get.
//  * @returns The account object.
//  */
// const getAccountsByAccountId = async (accountId) => {
//     var accounts = await Account.find({ accountId }, { _id: 0, __v: 0 });
//     if (accounts.length < 1) {
//         return {
//             'status': false,
//             'code': '404',
//             'message': 'ERROR: Account listing failed',
//             'data': {
//                 'error': 'Account doesnot exist'
//             }
//         }
//     }
//     return {
//         'status': true,
//         'code': '200',
//         'message': 'OK',
//         'data': {
//             'account': accounts
//         }
//     }
// };


module.exports = {

    // getAccountsByAccountId,
   
};