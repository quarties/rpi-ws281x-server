export const ENV = {
    DEV: 'development',
    PROD: 'production',
    getAll: () => [ENV.DEV, ENV.PROD],
    isValid: env => ENV.getAll().includes(env),
};
