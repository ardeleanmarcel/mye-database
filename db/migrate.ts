import pg from "pg";
import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new pg.Pool({
  connectionString: process.env.DB_URL,
});

const db = drizzle(pool);

async function main() {
  await migrate(db, { migrationsFolder: "./db/ddl_migrations/pg" });
}

main();
