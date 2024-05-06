import { Knex } from 'knex';

export const up = function (knex: Knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS users (
      "user_id" BIGINT GENERATED ALWAYS AS IDENTITY,
      "username" VARCHAR UNIQUE NOT NULL,
      "password" VARCHAR NOT NULL
    );
  `);
};

export const down = function (knex: Knex) {
  return knex.raw(`
    DROP TABLE IF EXISTS users;
  `);
};
