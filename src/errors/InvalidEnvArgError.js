import { ArgsError } from './ArgsError';
import { ENV } from '../enums/env';

export class InvalidEnvArgError extends ArgsError {
    /**
     * @param {string} env Invalid envirnoment.
     */
    constructor(env) {
        super('env', env, ENV.getAll());
    }
}
