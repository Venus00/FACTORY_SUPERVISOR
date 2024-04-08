import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeviceService } from './device.service';
import { apiClient } from 'src/features/api';

interface CreateDeviceDto {
  serial: string;
}
@Controller('device')
export class DeviceController {
  constructor(private devicesService: DeviceService) {}

  @Get()
  async all() {
    try {
      const result = await apiClient.get('/device');
      console.log(result.data.results);

      return result.data.results;
    } catch (error) {
      console.log(error);
    }
  }
  @Post()
  async createDevice(@Body() data: CreateDeviceDto) {
    console.log(data.serial);
    await this.devicesService.createDevice(data.serial);
  }
}
