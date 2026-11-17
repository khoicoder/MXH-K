import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class StructuredLoggerService implements LoggerService {
  private context?: string;

  constructor(context?: string) {
    this.context = context;
  }

  setContext(context: string) {
    this.context = context;
  }

  private formatMessage(level: string, message: any, context?: string, trace?: string) {
    const entry = {
      timestamp: new Date().toISOString(),
      level,
      context: context || this.context || 'Application',
      message: typeof message === 'object' ? JSON.stringify(message) : message,
      trace,
    };
    return JSON.stringify(entry);
  }

  log(message: any, context?: string) {
    console.log(this.formatMessage('INFO', message, context));
  }

  error(message: any, trace?: string, context?: string) {
    console.error(this.formatMessage('ERROR', message, context, trace));
  }

  warn(message: any, context?: string) {
    console.warn(this.formatMessage('WARN', message, context));
  }

  debug(message: any, context?: string) {
    console.debug(this.formatMessage('DEBUG', message, context));
  }

  verbose(message: any, context?: string) {
    console.log(this.formatMessage('VERBOSE', message, context));
  }
}
