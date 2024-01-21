/**
 * @module error
 */

const httpStatus = require('http-status');
const config = require('../config/config');
// const logger = console; // require('../config/logger');
const ApiError = require('../utils/ApiError');

/**
 * If the error is not an instance of ApiError, then create a new ApiError instance and pass it to the
 * next function
 * @param err - The error object that was thrown.
 * @param req - The request object.
 * @param res - The response object
 * @param next - The next middleware function in the stack.
 */
const errorConverter = (err, req, res, next) => {
	let error = err;
	if (!(error instanceof ApiError)) {
		const statusCode =
      error.statusCode ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
		const message = error.message || httpStatus[statusCode];
		error = new ApiError(statusCode, message, false, err.stack);
	}
	next(error);
};

/**
 * It takes an error object, sets the status code and message, and sends the response
 * @param err - The error object that was thrown.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is the next middleware function in the stack.
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
	let { statusCode, message } = err;
	if (config.env === 'prod' && !err.isOperational) {
		statusCode = httpStatus.INTERNAL_SERVER_ERROR;
		message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
	}

	res.locals.errorMessage = err.message;

	const response = {
		code: statusCode,
		message,
		...(config.env === 'dev' && { stack: err.stack }),
	};

	if (config.env === 'dev') {
		// logger.error(err);
	}

	res.status(statusCode).send(response);
};

module.exports = {
	errorConverter,
	errorHandler,
};
