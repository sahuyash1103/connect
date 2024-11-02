import winston from 'winston';
import winstonDailyRotateFile from 'winston-daily-rotate-file';
import morgan from 'morgan';
import { LOG_LEVEL } from './env.config';

// Define custom log levels and colors
const customLevels = {
  levels: {
    secret: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    success: 0,
  },
  colors: {
    secret: 'magenta',
    debug: 'blue',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    success: 'cyan',
  },
};

// Add colors to winston for the custom levels
winston.addColors(customLevels.colors);

type LogLevel = keyof typeof customLevels.levels;

// Extend the Winston Logger to include custom log levels in TypeScript
interface CustomLogger extends winston.Logger {
  secret: winston.LeveledLogMethod;
  debug: winston.LeveledLogMethod;
  info: winston.LeveledLogMethod;
  warn: winston.LeveledLogMethod;
  error: winston.LeveledLogMethod;
  success: winston.LeveledLogMethod;
  config: (level: LogLevel) => void; // Add config method to change log level
}

// Create the logger with custom levels
const baseLogger = winston.createLogger({
  levels: customLevels.levels,
  level: LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level}] ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          new winstonDailyRotateFile({
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            level: 'warn', // Log only warnings and errors to file
          }),
          new winstonDailyRotateFile({
            filename: 'logs/success-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '10m',
            maxFiles: '14d',
            level: 'success', // Log only success messages to a separate file
          }),
        ]
      : []),
  ],
});

// Extend the logger with a config method
const logger = baseLogger as CustomLogger;
logger.config = (level: LogLevel) => {
  // Change the logger's level
  logger.level = level;

  // Log a message at the new level
  logger[level](`Log level changed to: ${level}`);
};

// HTTP request logging with Morgan using the Winston logger
const httpLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message: string) => logger.info(message.trim()),
    },
    skip: (req, res) => process.env.NODE_ENV === 'test', // Skip in test environment
  }
);

export { logger, httpLogger };
