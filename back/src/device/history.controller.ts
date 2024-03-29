import { Controller, Get, Query } from '@nestjs/common';
import { apiClient } from 'src/features/api';
import { DeviceService } from './device.service';

@Controller('history')
export class HistoryController {
  constructor(private devicesService: DeviceService) {}
  @Get('')
  async checkHistory(@Query('serial') serial: string) {
    console.log('check history now', serial);
    try {
      const result = await apiClient.get('/dpc-history/api/events', {
        params: {
          take: 1000,
          where: JSON.stringify({
            type: 'CONNEXION',
            serial,
          }),
          skip: 0,
        },
      });
      console.log(result.data);
      return result.data.results;
    } catch (error) {
      //console.log(error.response);
    }
  }
}
