import { Knex } from 'knex';

export const up = function (knex: Knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS user_statuses (
      "user_status_id" SMALLINT PRIMARY KEY,
      "user_status_name" VARCHAR UNIQUE NOT NULL
    );

    INSERT INTO user_statuses
      (user_status_id, user_status_name)
    VALUES
      (10, 'Active'),
      (20, 'Pending Activation');

    ALTER TABLE users
      ADD COLUMN "user_status_id" SMALLINT NOT NULL DEFAULT 20
      CONSTRAINT user_status_id_fk REFERENCES user_statuses (user_status_id)
        ON UPDATE CASCADE;
  `);
};

export const down = function (knex: Knex) {
  return knex.raw(`
    ALTER TABLE users
      DROP COLUMN "user_status_id";
    DROP TABLE IF EXISTS user_statuses;
  `);
};
