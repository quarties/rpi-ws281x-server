import { ENV } from './env';

describe('enums > env', () => {
    it('getAll | should return all envs', () => {
        expect(ENV.getAll()).toEqual([ENV.DEV, ENV.PROD]);
    });

    it('isValid | shoudl return tru for valid env', () => {
        expect(ENV.isValid('development')).toBeTruthy();
        expect(ENV.isValid('invalid')).toBeFalsy();
    });
});
