export class ArgsError extends Error {
    /**
     * @param {string} argName Argument's name.
     * @param {*} received Received argument's value.
     * @param {string|string[]} expected Expected argument's value.
     */
    constructor(argName, received, expected) {
        super(`Received invalid value for '${argName}' argument

Received: ${received}
Expected: ${expected instanceof Array ? expected.join('|') : expected}`);
    }
}
