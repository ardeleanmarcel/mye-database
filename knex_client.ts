import knex from 'knex';
import { postgresConfig } from './knexfile.ts';

// TODO (Valle) -> use assertion to ensure NODE_ENV is configured correctly
const knexConfig = postgresConfig[process.env.NODE_ENV || 'development'];

export const knexClient = knex(knexConfig);
