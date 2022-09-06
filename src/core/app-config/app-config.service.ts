import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '@core/logger/logger.service';

@Injectable()
export class AppConfigService {
	private readonly moduleName: string;

	constructor(private config: ConfigService, private readonly logger: LoggerService) {
		this.moduleName = AppConfigService.name;
	}

	get(key: string) {
		return this.config.get(key);
	}

	setConfig(key: string, value: any) {
		this.logger.log(this.moduleName, 'setConfig', `setting:${key}`);
		process.env[key] = value;
	}
}
