const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { accountService } = require('../services');


// const createNewAccount = catchAsync(async (req, res) => {
// 	const account = await accountService.createNewAccount(req);
// 	res.status(account.code).send(account);
// });

// const getAccounts = catchAsync (async(req, res) => {
// 	const account = await accountService.queryAccount(req.body);
// 	res.status(account.code).send(account);
// });

// const getAccountsByAccountId = catchAsync (async(req, res) => {
// 	const account = await accountService.getAccountsByAccountId(req.body.accountId);
// 	res.status(account.code).send(account);
// });

// const updateAccount = catchAsync(async (req, res) => {
// 	const account = await accountService.updateAccountById(req.body.accountId, req.body.accountInfo);
// 	res.status(account.code).send(account);
// });

// const deleteAccount = catchAsync(async (req, res) => {
// 	const account = await accountService.deleteAccountById(req);
// 	res.status(account.code).send(account);
// });

// const copyAccount = catchAsync(async (req, res) => {
// 	const account = await accountService.copyAccountById(req);
// 	res.status(account.code).send(account);
// });
module.exports = {
// 	createNewAccount,
// 	getAccounts,
//     getAccountsByAccountId,
// 	updateAccount,
// 	deleteAccount,
// 	copyAccount
// 
};