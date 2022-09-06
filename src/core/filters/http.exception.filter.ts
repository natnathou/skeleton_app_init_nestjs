import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import moment from 'moment';
import { LoggerService } from '@core/logger/logger.service';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	private readonly moduleName: string;

	constructor(private readonly logger: LoggerService) {
		this.moduleName = HttpExceptionFilter.name;
	}

	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();
		const status = exception.getStatus();
		const message = exception.getResponse() as any;

		this.logger.error(
			this.moduleName,
			'catch',
			`[statusCode]: ${status} - [path]: ${request.url} - [message]: ${message.message} - [error]: ${message?.error}`,
		);
		response.status(status).json({
			statusCode: status,
			timestamp: moment().format('MMMM Do YYYY, h:mm:ss:ms a'),
			path: request.url,
			message: message?.message,
			error: message?.error,
		});
	}
}
