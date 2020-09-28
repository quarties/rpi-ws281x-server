import { ArgsError } from './ArgsError';

export class InvalidConfigArgError extends ArgsError {
    /**
     * @param {string} configJSON Unparsable config JSON
     */
    constructor(configJSON) {
        super('config', configJSON, 'a valid JSON');
    }
}
