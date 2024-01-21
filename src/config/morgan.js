const morgan = require('morgan');
const config = require('./config');
// const logger = require('./logger');
const path = require('path');
const logMetaBase = {
	'log.file.path': `${path.relative('./', __filename)}`.split(path.sep).join('/'),
};

morgan.token('message', (req, res) => res.locals.errorMessage || '');

const getIpFormat = () => (config.env === 'production' ? ':remote-addr - ' : '');
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

const logMetaSuccess = { ...logMetaBase, 'log.origin.function': 'successHandler' };
const successHandler = morgan(successResponseFormat, {
	skip: (req, res) => res.statusCode >= 400,
	stream: { write: (message) => console.log(message.trim(),logMetaSuccess) },
});

const logMetaError = { ...logMetaBase, 'log.origin.function': 'errorHandler' };
const errorHandler = morgan(errorResponseFormat, {
	skip: (req, res) => res.statusCode < 400,
	stream: { write: (message) => console.log(message.trim(), logMetaError) },
});

module.exports = {
	successHandler,
	errorHandler,
};
