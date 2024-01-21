const winston = require('winston');
const config = require('./config');
const ip = require("ip");
const ipAddr = ip.address();

// const customFormat = winston.format.printf((data) => {
// 	const { level, message, timestamp } = data;
// 	const args = data[Symbol.for('splat')];
  
// 	let strArgs = '';
// 	if (args) {
// 	    strArgs = args.slice(2).map((argument) => JSON.stringify(argument)).join(' | ');
// 	    return `Timestamp : ${timestamp} | SourceIP : ${ipAddr} | Username : ${args[0]} | SessionId : ${args[1]} |  ${level} |  ${strArgs} | ${message}`;
// 	}
  
// 	return `Timestamp : ${timestamp} | SourceIP : ${ipAddr} | Username : NA | SessionId : NA |  ${level} | ${message}`;
// });

// logger = winston.createLogger({
//     level: 'debug',
//     format: winston.format.combine(
//         winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // can also alias
//     ),
//     transports: [new winston.transports.Console(), new winston.transports.File({
// 		            level: config.log_level_file,
// 		            filename: config.log_file,
// 		            format: winston.format.combine(winston.format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" })),
// 		            transports: [new winston.transports.Console()]
// 				})]
// });

// logger.getLevelMapper = (module, logLevel) => {
//     switch (module) {
//         case 'kafkajs':
//             return level => {
//                 switch (level) {
//                     case logLevel.ERROR:
//                     case logLevel.NOTHING:
//                         return 'error';
//                     case logLevel.WARN:
//                         return 'warn';
//                     case logLevel.INFO:
//                         return 'info';
//                     case logLevel.DEBUG:
//                         return 'debug';
//                 }
//             };
//     }
// };


// module.exports = logger;
