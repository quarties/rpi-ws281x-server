import { InvalidConfigArgError } from './InvalidConfigArgError';
import { ArgsError } from './ArgsError';

describe('errors > InvalidConfigArgError', () => {
    it('should call', () => {
        expect(new InvalidConfigArgError('{}')).toExtend(
            ArgsError,
            'config',
            '{}',
            'a valid JSON'
        );
    });
});
