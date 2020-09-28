export const ENV = {
    DEV: 'development',
    PROD: 'production',
    /**
     * @returns {string[]} Returns all environments.
     */
    getAll: () => [ENV.DEV, ENV.PROD],
    /**
     * @param {string} env Environment to validate.
     * @returns {boolean} Validation result.
     */
    isValid: env => ENV.getAll().includes(env),
};
