# mye-database

## TODO

1. Find why the custom type is not generated correctly.
1. Find why generating on top of existing migrations throws strange parsing error.
1. Decide if knex is a better option for running the generated migrations.

## Running Migrations

1. Before: `npm run compile`
1. First: `npm run generate:pg`
1. Then: `npm run migrate`
