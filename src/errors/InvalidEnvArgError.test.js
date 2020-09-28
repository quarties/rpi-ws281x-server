import { InvalidEnvArgError } from './InvalidEnvArgError';
import { ArgsError } from './ArgsError';
import { ENV } from '../enums/env';

describe('errors > InvalidEnvArgError', () => {
    it('should call', () => {
        expect(new InvalidEnvArgError('staging')).toExtend(
            ArgsError,
            'env',
            'staging',
            ENV.getAll()
        );
    });
});
