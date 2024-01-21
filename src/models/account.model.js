/**
 * @module accountModel
 */

const mongoose = require('mongoose');

/**
 * Creating a schema for the account collection.
 * @constructor accountSchema
 */
const accountSchema = mongoose.Schema({
    accountName: {
        type: String,
        required: [true, 'Account name is required'],
        unique: [true, 'account name exists']
    },
	accountId: {
        type: String,
        required: [true, 'Account ID is required']
    },
    // emailid or DL
    emailId: {
        type: String  
    },
    createdAt: {
		type: Date
	},
    users: {
        type: Number,
        // required: [true, 'Number of users is required']
    },
    status: {
        type: String,
        enum: ['active', 'inActive', 'archived'],
        default: 'active'
    },
    noOfUsers: {
        type: String,
    }
});

const Account = mongoose.model('account', accountSchema);
module.exports = Account;
