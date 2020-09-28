import 'make-promises-safe';
import commandLineArgs from 'command-line-args';
import { ENV } from './enums/env';

const optionDefinitions = [
    {
        name: 'config',
        alias: 'c',
        type: ENV.isValid,
        defaultValue: 'config.json',
    },
    { name: 'env', alias: 'e', type: String, defaultValue: 'production' },
];

const options = commandLineArgs(optionDefinitions, {
    partial: true,
    camelCase: true,
});

console.log(options);
