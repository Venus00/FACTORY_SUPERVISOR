import { Injectable } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { DeviceService } from 'src/device/device.service';

@Injectable()
export class MqttService {
  private client: mqtt.MqttClient;

  constructor(private deviceService: DeviceService) {
    this.client = mqtt.connect(`mqtt://${process.env.MQTT_SERVER}`, {
      username: process.env.MQTT_USERNAME,
      password: process.env.MQTT_PASSWORD,
      clientId: process.env.MQTT_CLIENTID,
    });
    this.client.on('connect', this.onConnect.bind(this));
    this.client.on('message', this.onMessage.bind(this));
  }

  onConnect() {
    console.log('connected');
    this.client.subscribe(process.env.MQTT_TOPIC);
  }

  async onMessage(topic: string, message: string) {
    console.log('message arrived');
    console.log(topic, message);
    const payload = JSON.parse(message.toString());
    const serial = payload.serial;
    const result = await this.deviceService.find(serial);
    if (!result) {
      console.log('inserting row');
      await this.deviceService.create({
        status: 'connected',
        serial,
        firmware_version: '--',
      });
    } else {
      console.log('already exist');
    }
  }
}
