import 'make-promises-safe';
import fastifyFactory from 'fastify';
import { getOptions } from './functions';

const options = getOptions();

const main = async () => {
    let fastify = {
        log: {
            error: console.error,
        },
    };
    try {
        fastify = fastifyFactory({ logger: true });
        await fastify.listen(options.config.PORT, options.config.HOST);
    } catch (err) {
        fastify.log.error(err);
        throw err;
    }
};

main();
