import isEqual from 'lodash.isequal';

export const toExtend = (actual, extended, ...args) => {
    const pass = isEqual(actual, new extended(...args));
    return {
        message: () =>
            `Expected class instance ${pass ? 'not ' : ''}to extend ${
                extended.name
            } with following values: ${args.join(', ')}`,
        pass,
    };
};
