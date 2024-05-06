import { Knex } from 'knex';

// example of async password retrieval
// const getPassword = async () => {
//   return 'my_pass';
// };

const migrations: Knex.MigratorConfig = {
  stub: 'migration.stub',
  schemaName: '',
  name: '',
};

// TODO (Valle) -> string key should be a valid env name
export const postgresConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.LOCAL_DB_HOST,
      port: parseInt(process.env.LOCAL_DB_PORT || '3000'),
      database: process.env.LOCAL_DB_NAME,
      user: process.env.LOCAL_DB_USER,
      password: process.env.LOCAL_DB_PASS,
    },
    migrations,
  },

  //   production: {
  //     client: 'pg',
  //     connection: async () => {
  //       const password = await getPassword();
  //       return { user: 'me', password };
  //     },
  //   },
};
