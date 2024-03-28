import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { PG_CONNECTION } from '../constant';
import * as schema from './schema';
import { ConfigService } from '@nestjs/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { DrizzleService } from './drizzle.service';

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const connectionString = configService.get<string>('DATABASE_URL');
        const pool = new Pool({
          connectionString,
        });
        const db = drizzle(pool, { schema });
        await migrate(db, { migrationsFolder: 'drizzle' });
        return db;
      },
    },
    DrizzleService,
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
