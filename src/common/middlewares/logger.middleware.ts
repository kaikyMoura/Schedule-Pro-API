import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  /**
   * Middleware to log request and response details.
   * Logs the HTTP method, URL, status code, content length, user agent, and response time.
   * @param req - The incoming request object.
   * @param res - The outgoing response object.
   * @param next - The next middleware function in the stack.
   */
  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req;

    // Use req.get to safely access headers
    // This avoids issues with headers that may not be present
    const userAgent = req.get('User-Agent') || '';

    const startTime = Date.now();

    // Log the incoming request details
    res.on('finish', () => {
      const { statusCode } = res;

      const contentLength = res.get('Content-Length');

      const responseTime = Date.now() - startTime;
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} -
${userAgent} - ${responseTime}ms`,
      );
    });
    next();
  }
}
