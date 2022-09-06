import { ENVIRONMENT_TYPES } from './config.constant';
import { devConfig, globalConfig, productionConfig } from './index';

let envConfig;

switch (process.env.NODE_ENV) {
    case ENVIRONMENT_TYPES.PRODUCTION:
        envConfig = productionConfig;
        process.env.RUN_ENV = ENVIRONMENT_TYPES.PRODUCTION;
        break;
    default: {
        envConfig = devConfig;
        process.env.RUN_ENV = ENVIRONMENT_TYPES.DEVELOPMENT_LOCAL;
    }
}

const finalConfig = { ...globalConfig, ...envConfig };
export default () => finalConfig;
