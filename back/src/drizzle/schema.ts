import { text, pgTable } from 'drizzle-orm/pg-core';

export const sensors = pgTable('sensors', {
  serial: text('serial').unique().primaryKey(),
  status: text('stauts'),
  result_test: text('result_test'),
  firmware_version: text('firmware_version'),
});
