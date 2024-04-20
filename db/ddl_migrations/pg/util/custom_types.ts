import { customType } from 'drizzle-orm/pg-core';

export const myePrimaryKey = customType<{
  data: number;
  notNull: true;
  default: true;
}>({
  dataType() {
    return 'bigint GENERATED ALWAYS AS IDENTITY';
  },
});
