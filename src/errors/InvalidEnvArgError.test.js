import { InvalidEnvArgError } from './InvalidEnvArgError';
import { ArgsError } from './ArgsError';
import { ENV_ENUM } from '../enums';

describe('errors > InvalidEnvArgError', () => {
    it('should call', () => {
        expect(new InvalidEnvArgError('staging')).toExtend(
            ArgsError,
            'env',
            'staging',
            ENV_ENUM.getAll()
        );
    });
});
