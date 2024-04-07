import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

console.log("process.env.DB_NAME", process.env.DB_NAME);

export const client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? "5432"),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

await client.connect();

export const db = drizzle(client);
