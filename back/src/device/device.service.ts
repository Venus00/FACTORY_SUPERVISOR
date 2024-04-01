import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PG_CONNECTION } from '../constant';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';
import { apiClient } from 'src/features/api';
import { CREATE_DEVICE } from './creare.device';
import { Cron, CronExpression } from '@nestjs/schedule';
interface CreateDeviceDto {
  serial: string;
  firmware_version: string;
  status: string;
}

@Injectable()
export class DeviceService implements OnModuleInit {
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  async handleStatusDeviceJOb() {
    //get devices
    const devices: any[] = await this.findAll();
    //console.log(devices);
    for (let i = 0; i < devices.length; i++) {
      try {
        const result = await apiClient.get('/dpc-history/api/events', {
          params: {
            take: 1,
            where: JSON.stringify({
              type: 'CONNEXION',
              serial: devices[i].serial,
            }),
            skip: 0,
          },
        });
        await this.updateStatus(
          devices[i].serial,
          result.data.results[0].message,
        );
      } catch (error) {
        console.log(error.response);
      }
    }
  }
  async onModuleInit() {
    const result = await this.findAll();
    console.log(result);
  }

  async findAll() {
    return await this.conn.query.sensors.findMany();
  }

  async create(data: CreateDeviceDto) {
    return await this.conn.insert(schema.sensors).values({
      ...data,
    });
  }

  async find(serial: string) {
    return await this.conn.query.sensors.findFirst({
      where: eq(schema.sensors.serial, serial),
    });
  }

  async updateStatus(serial: string, status: string) {
    return await this.conn
      .update(schema.sensors)
      .set({ status })
      .where(eq(schema.sensors.serial, serial));
  }

  async createDevice(serial: string) {
    try {
      CREATE_DEVICE.name = serial;
      CREATE_DEVICE.serial = serial;
      CREATE_DEVICE.credential.username = serial;
      CREATE_DEVICE.credential.password = serial;
      CREATE_DEVICE.protocolCredential.attributes.client_id = serial;
      const result = await apiClient.post('/device', CREATE_DEVICE);
      console.log(result.data);
      console.log('insert device now');
      await this.create({
        status: 'Disconnected',
        serial,
        firmware_version: '--',
      });
    } catch (error) {
      console.log(error.response);
    }
  }
  async update(serial: string, firmware_version: string) {
    return await this.conn
      .update(schema.sensors)
      .set({ firmware_version })
      .where(eq(schema.sensors.serial, serial));
  }
}
