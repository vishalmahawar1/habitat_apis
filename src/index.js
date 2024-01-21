/* The above code is a Node.js script that starts a server. The server is started by calling the
listen() method on the Express app. The listen() method takes a port and a host as parameters. The
port is the port on which the server will listen for requests. The host is the host on which the
server will listen for requests. The listen() method returns a server object. The server object is
stored in the server variable. The server object has a close() method that can be used to close the
server. */
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
// const logger = require('./config/logger');

let server;
/* Connecting to the MongoDB database. */
console.log(1);
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
	server = app.listen(config.port, config.host, () => {
		console.log('debug',`Listening to port ${config.port} on host ${config.host}`);
	});
});

/**
 * If the server is running, close it and then exit the process. If the server isn't running, just exit
 * the process.
 */
const exitHandler = () => {
	if (server) {
		server.close(() => {
			console.log('debug','Server closed');
			process.exit(1);
		});
	} else {
		process.exit(1);
	}
};

const unexpectedErrorHandler = (error) => {
	console.log('error',error);
	exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

/* This is a signal handler. It is listening for the SIGTERM signal, which is sent by the operating
system when the process is being terminated. When the signal is received, the server is closed. */
process.on('SIGTERM', () => {
	console.log('debug','SIGTERM received');
	if (server) {
		server.close();
	}
});
