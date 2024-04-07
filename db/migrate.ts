import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
// import { migrate } from "drizzle-orm/mysql2/migrator";
// import { db, client } from "./client/db_client";
// // This will run migrations on the database, skipping the ones already applied
// await client.connect();

import pg from "pg";

// await migrate(db, { migrationsFolder: "./db/ddl_migrations" });
// // Don't forget to close the connection, otherwise the script will hang
// await connection.end();

// ----------------------

const pool = new pg.Pool({
  connectionString: process.env.DB_URL,
});

const db = drizzle(pool);

async function main() {
  await migrate(db, { migrationsFolder: "./db/ddl_migrations/pg" });
}

main();
