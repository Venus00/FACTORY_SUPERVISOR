import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeviceService } from './device.service';

interface CreateDeviceDto {
  serial: string;
}
@Controller('device')
export class DeviceController {
  constructor(private devicesService: DeviceService) {}

  @Get()
  all() {
    return this.devicesService.findAll();
  }
  @Post()
  async createDevice(@Body() data: CreateDeviceDto) {
    await this.devicesService.createDevice(data.serial);
  }
}
