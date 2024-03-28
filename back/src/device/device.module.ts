import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { DeviceController } from './device.controller';
import { HistoryController } from './history.controller';

@Module({
  imports: [DrizzleModule],
  providers: [DeviceService],
  controllers: [DeviceController, HistoryController],
  exports: [DeviceService],
})
export class DeviceModule {}
