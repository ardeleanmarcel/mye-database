import { knexClient } from './knex_client.ts';

knexClient.migrate.latest();
