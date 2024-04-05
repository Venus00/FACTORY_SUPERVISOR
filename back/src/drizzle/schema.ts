import { text, pgTable, serial } from 'drizzle-orm/pg-core';

export const sensors = pgTable('sensors', {
  id: serial('id'),
  serial: text('serial').unique(),
  status: text('stauts'),
  result_test: text('result_test'),
  firmware_version: text('firmware_version'),
});
