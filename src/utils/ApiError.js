/**
 * @module ApiError
 */

class ApiError extends Error {
	/**
	 * The constructor function is a special function that is called when a new object is created
	 * @constructs
	 * @param statusCode - The HTTP status code that will be returned to the client.
	 * @param message - The error message.
	 * @param [isOperational=true] - This is a boolean that indicates whether the error is operational or
	 * not.
	 * @param [stack] - The stack trace of the error.
	 */
	constructor(statusCode, message, isOperational = true, stack = '') {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = isOperational;
		if (stack) {
			this.stack = stack;
		} else {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

module.exports = ApiError;
