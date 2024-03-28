import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PG_CONNECTION } from '../constant';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';
import { apiClient } from 'src/features/api';
import { CREATE_DEVICE } from './creare.device';
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
      console.log(serial);
      CREATE_DEVICE.name = serial;
      CREATE_DEVICE.serial = serial;
      CREATE_DEVICE.credential.username = serial;
      CREATE_DEVICE.credential.password = serial;
      CREATE_DEVICE.protocolCredential.attributes.client_id = serial;
      const result = await apiClient.post('/device', CREATE_DEVICE);
      console.log(result.data);
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
