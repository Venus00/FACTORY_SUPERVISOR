/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
export const apiClient = axios.create({
  baseURL: process.env.DIGIEYE_API,
  headers: {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${process.env.token}`,
  },
});
