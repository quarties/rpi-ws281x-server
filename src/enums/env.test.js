import { ENV_ENUM } from './env';

describe('enums > env', () => {
    it('getAll | should return all envs', () => {
        expect(ENV_ENUM.getAll()).toEqual([ENV_ENUM.DEV, ENV_ENUM.PROD]);
    });

    it('isValid | shoudl return tru for valid env', () => {
        expect(ENV_ENUM.isValid('development')).toBeTruthy();
        expect(ENV_ENUM.isValid('invalid')).toBeFalsy();
    });
});
