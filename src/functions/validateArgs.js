import { InvalidConfigArgError, InvalidEnvArgError } from '../errors';
import { ENV_ENUM } from '../enums';

/**
 * @param {string} configJSON JSON from config file
 * @param {string} env Environment
 */
export const validateArgs = (configJSON, env) => {
    try {
        JSON.parse(configJSON);
    } catch (e) {
        throw new InvalidConfigArgError(configJSON);
    }

    if (!ENV_ENUM.isValid(env)) {
        throw new InvalidEnvArgError(env);
    }
};
