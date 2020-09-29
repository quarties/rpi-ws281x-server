import { getOptions } from './getOptions';

const mockCommandLineArgs = jest.fn(() => ({
    config: 'config.json',
    env: 'production',
}));
jest.mock('command-line-args', () => ({
    __esModule: true,
    default: jest.fn((...args) => mockCommandLineArgs(...args)),
}));

const mockReadFileSync = jest.fn(() =>
    Buffer.from(
        JSON.stringify({
            APP_NAME: 'rpi-ws281x-server',
        })
    )
);
jest.mock('fs', () => ({
    __esModule: true,
    readFileSync: jest.fn((...args) => mockReadFileSync(...args)),
}));

const mockResolvePath = jest.fn(() => './config.json');
jest.mock('path', () => ({
    __esModule: true,
    resolve: jest.fn((...args) => mockResolvePath(...args)),
}));

const mockValidateArgs = jest.fn();
jest.mock('./validateArgs', () => ({
    __esModule: true,
    validateArgs: jest.fn((...args) => mockValidateArgs(...args)),
}));

describe('functions > getOptions', () => {
    it('should return options from args', () => {
        expect(getOptions()).toEqual({
            config: {
                APP_NAME: 'rpi-ws281x-server',
            },
            env: 'production',
        });
        expect(mockCommandLineArgs).toHaveBeenCalledWith(
            [
                {
                    name: 'config',
                    alias: 'c',
                    type: String,
                    defaultValue: 'config.json',
                },
                {
                    name: 'env',
                    alias: 'e',
                    type: String,
                    defaultValue: 'production',
                },
            ],
            {
                partial: true,
                camelCase: true,
            }
        );
        expect(mockResolvePath).toHaveBeenCalledWith(
            process.cwd(),
            'config.json'
        );
        expect(mockReadFileSync).toHaveBeenCalledWith('./config.json');
        expect(mockValidateArgs).toHaveBeenCalledWith(
            JSON.stringify({
                APP_NAME: 'rpi-ws281x-server',
            }),
            'production'
        );
    });
});
