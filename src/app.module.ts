import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from '@core/app-config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from '@core/filters/http.exception.filter';
import { TimeExecutionInterceptor } from '@core/interceptors/time-execution.interceptor';
import { TimeoutInterceptor } from '@core/interceptors/timeout.interceptor';
import { LoggerModule } from '@core/logger/logger.module';

@Module({
	imports: [
		LoggerModule,
		AppConfigModule,
	],
	controllers: [AppController],
	providers: [
		AppService,
		{ provide: APP_FILTER, useClass: HttpExceptionFilter },
		{ provide: APP_INTERCEPTOR, useClass: TimeExecutionInterceptor },
		{ provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
	],
})
export class AppModule {}
