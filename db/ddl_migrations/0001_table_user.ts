import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id"),
  username: text("username"),
  email: text("email"),
  password: text("password"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
