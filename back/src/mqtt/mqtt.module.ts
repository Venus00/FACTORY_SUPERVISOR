import { Module } from '@nestjs/common';
import { MqttService } from './mqtt.service';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { DeviceModule } from 'src/device/device.module';

@Module({
  imports: [DrizzleModule, DeviceModule],
  providers: [MqttService],
})
export class MqttModule {}
