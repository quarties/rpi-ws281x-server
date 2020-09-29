import commandLineArgs from 'command-line-args';
import { readFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { validateArgs } from './validateArgs';

/**
 * @returns {{env: string, config: object.<string, *>}} Object containing command line args
 */
export const getOptions = () => {
    const optionDefinitions = [
        {
            name: 'config',
            alias: 'c',
            type: String,
            defaultValue: 'config.json',
        },
        { name: 'env', alias: 'e', type: String, defaultValue: 'production' },
    ];

    const { config: configFile, env } = commandLineArgs(optionDefinitions, {
        partial: true,
        camelCase: true,
    });

    const configJSON = readFileSync(
        resolvePath(process.cwd(), configFile)
    ).toString('utf8');

    validateArgs(configJSON, env);

    return {
        config: JSON.parse(configJSON),
        env,
    };
};
