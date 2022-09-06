import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from '@core/app-config';
import { LoggerService } from '@core/logger/logger.service';
import { getTimeNow } from './shared/utils';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import hpp from 'hpp';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix('api');

	app.use(bodyParser.json({ limit: '5mb' }));
	app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
	app.use(helmet.noSniff());
	app.use(helmet.frameguard());
	app.use(helmet.hidePoweredBy());
	app.use(hpp());

	app.enableCors({
		origin: '*',
		credentials: true,
		preflightContinue: true,
		methods: 'POST,GET,OPTIONS,PATCH,DELETE',
		optionsSuccessStatus: 200,
		allowedHeaders: 'Access-Control-Allow-Origin,Access-Control-Allow-Headers,Authorization',
	});

	const configService = app.get<AppConfigService>(AppConfigService);
	const PORT = configService.get('PORT');
	const ENV = configService.get('NODE_ENV');
	const APP_NAME = configService.get('APP_NAME');

	const logger = app.get(LoggerService);
	logger.info(module.filename, 'bootstrap', `Starting ${APP_NAME} - ENV: ${ENV} - ${getTimeNow()}`);

	await app.listen(PORT);
	logger.info(module.filename, 'bootstrap', `listening to ${PORT}`);

}

bootstrap().catch((error) => console.log(`bootstrap error: ${error}`));
