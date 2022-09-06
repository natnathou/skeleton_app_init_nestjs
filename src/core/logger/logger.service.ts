import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable({})
export class LoggerService {
    private readonly logger = new Logger();
    info(moduleName: string, functionName: string, message: string) {
        this.logger.log(`[${moduleName}] | [${functionName}] | ${message}`);
    }

    log(moduleName: string, functionName: string, message: string) {
        this.logger.log(`[${moduleName}] | [${functionName}] | ${message}`);
    }

    error(moduleName: string, functionName: string, message: string) {
        this.logger.error(`[${moduleName}] | [${functionName}] | ${message}`);
    }

    debug(moduleName: string, functionName: string, message: string) {
        this.logger.debug(`[${moduleName}] | [${functionName}] | ${message}`);
    }

    warn(moduleName: string, functionName: string, message: string) {
        this.logger.warn(`[${moduleName}] | [${functionName}] | ${message}`);
    }
}
