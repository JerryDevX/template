import 'dotenv/config';
import Fastify, { FastifyInstance } from 'fastify';
const app: FastifyInstance = Fastify({
    logger: false
})
import Logger from './utils';

const log = new Logger("Server");


app.register(import('@fastify/cors'), {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
})


// app.register(import('./router/api.router'), {prefix: 'api/v1'});

app.listen({ port: 3001, host: '0.0.0.0' }, async (err, address) => {
    if (err) {
        log.error(err.message);
        process.exit(1);
    }
    log.success(`Server listening on ${address}`);
    
})