import { validateArgs } from './validateArgs';
import { ENV_ENUM } from '../enums';
import { InvalidConfigArgError, InvalidEnvArgError } from '../errors';

describe('functions > validateArgs', () => {
    it('should not throw for valid args', () => {
        expect(() => validateArgs('{}', ENV_ENUM.DEV)).not.toThrow();
    });

    it('should throw for invalid config JSON', () => {
        expect(() => validateArgs('not a json', ENV_ENUM.DEV)).toThrow(
            new InvalidConfigArgError('not a json')
        );
    });

    it('should throw for invalid env', () => {
        expect(() => validateArgs('{}', 'staging')).toThrow(
            new InvalidEnvArgError('staging')
        );
    });
});
