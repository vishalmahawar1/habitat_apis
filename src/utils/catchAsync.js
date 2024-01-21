/**
 * @module catchAsync
 */

/**
 * It takes a function as an argument, and returns a new function that will catch any errors that the
 * original function throws, and pass them to the next middleware
 * @param fn - The function that we want to catch errors for.
 */
const catchAsync = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = catchAsync;
