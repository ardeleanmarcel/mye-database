import { Knex } from 'knex';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS users (
      user_id BIGINT GENERATED ALWAYS AS IDENTITY
      username VARCHAR,
      password VARCHAR
    );
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: Knex) {
  return knex.raw(`
    DROP TABLE users;
  `);
};
