import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { LoggerService } from '@core/logger/logger.service';

@Injectable()
export class TimeExecutionInterceptor implements NestInterceptor {
	private readonly moduleName: string;

	constructor(private readonly logger: LoggerService) {
		this.moduleName = TimeExecutionInterceptor.name;
	}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const controller = context.getHandler()?.name;
		const start = Date.now();
		return next.handle().pipe(
			tap(() => {
				const end = Date.now();
				const message = `[controller]: ${controller} - [time execution]: ${end - start}ms`;
				return this.logger.log(this.moduleName, 'intercept', `${message}`);
			}),
		);
	}
}
