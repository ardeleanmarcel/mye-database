# mye-database

## TODO

## Local Environment

- Create `.env` file based on `.env.example`
- Start the DB using `docker compose up`
- Set the user's schema search by running `ALTER ROLE <user> SET search_path TO <schema name>`

## Convetions

- Table names should have plural names i.e. "users", NOT "user"!

## Adding environments

- When a new env is made, if using Postgres, the schema must be manually created.

## Creating Migrations

- Use command `npm run make:migration -- <your_snake_case_name>`

## Running Migrations
