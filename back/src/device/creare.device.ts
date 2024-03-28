export const CREATE_DEVICE = {
  credential: {
    username: 'device_oussama_farhat',
    password: 'device_oussama_farhat',
    type: 'USERPASSWORD',
  },
  protocolCredential: {
    protocolId: 1,
    attributes: {
      pub_topic: [
        {
          pattern: 'nxt/factory/devices/+/+',
        },
      ],
      sub_topic: [
        {
          pattern: 'nxt/factory/devices/+/+',
        },
      ],
      client_id: 'client_1',
    },
  },
  groupId: 7,
  deviceProfileId: 4,
  serial: 'device_oussama_farhat',
  name: 'device_oussama_farhat',
};
