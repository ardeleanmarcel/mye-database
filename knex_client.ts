import knex from 'knex';
import { postgresConfig } from './knexfile.ts';
import { getCurrEnvName } from './constants.ts';

const envName = getCurrEnvName();
const knexConfig = postgresConfig[envName];

export const knexClient = knex(knexConfig);
