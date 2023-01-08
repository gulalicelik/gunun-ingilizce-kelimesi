const winston = require('winston');

const logger = winston.createLogger({
    level     : 'info',
    format    : winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : " "))
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: './logs/error/error.log', level: 'error'}),
        new winston.transports.File({filename: './logs/combined.log'}),
    ],
});

module.exports = logger;