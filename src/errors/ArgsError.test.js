import { ArgsError } from './ArgsError';

describe('errors > ArgsError', () => {
    it('should throw an error for expected string', () => {
        const errorMock = new ArgsError(
            'positiveNumber',
            -5,
            'positiveNumber > 0'
        );
        expect(errorMock.message)
            .toBe(`Received invalid value for 'positiveNumber' argument

Received: -5
Expected: positiveNumber > 0`);
    });

    it('should throw an error for expected string from array', () => {
        const errorMock = new ArgsError('env', 'staging', ['dev', 'prod']);
        expect(errorMock.message)
            .toBe(`Received invalid value for 'env' argument

Received: staging
Expected: dev|prod`);
    });
});
