import { ArgsError } from './ArgsError';
import { ENV_ENUM } from '../enums';

export class InvalidEnvArgError extends ArgsError {
    /**
     * @param {string} env Invalid envirnoment
     */
    constructor(env) {
        super('env', env, ENV_ENUM.getAll());
    }
}
