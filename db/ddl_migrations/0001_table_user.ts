import { bigint, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { myePrimaryKey } from './pg/util/custom_types.js';

export const user = pgTable('user', {
  // id: serial("id"),
  id: myePrimaryKey('id'),
  username: text('username'),
  email: text('email'),
  password: text('password'),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});
