import * as matchers from './matchers';

const extensions = Object.keys(matchers).reduce(
    (acc, matcher) => ({
        ...acc,
        [matcher]: matchers[matcher],
    }),
    {}
);

expect.extend(extensions);
