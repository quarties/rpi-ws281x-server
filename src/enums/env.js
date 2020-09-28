export const ENV_ENUM = {
    DEV: 'development',
    PROD: 'production',
    /**
     * @returns {string[]} Returns all environments.
     */
    getAll: () => [ENV_ENUM.DEV, ENV_ENUM.PROD],
    /**
     * @param {string} env Environment to validate
     * @returns {boolean} Validation result.
     */
    isValid: env => ENV_ENUM.getAll().includes(env),
};
