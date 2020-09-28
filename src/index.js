import 'make-promises-safe';
import commandLineArgs from 'command-line-args';

const optionDefinitions = [
    {
        name: 'config',
        alias: 'c',
        type: String,
        defaultValue: 'config.json',
    },
    { name: 'env', alias: 'e', type: String, defaultValue: 'production' },
];

const options = commandLineArgs(optionDefinitions, {
    partial: true,
    camelCase: true,
});

console.log(options);
