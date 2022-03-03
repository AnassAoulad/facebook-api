import 'dotenv/config';
import { launch } from './server';

const {
  PROTOCOL = 'http',
  HOST = 'localhost',
  PORT = 3000,
} = process.env;

launch({
  protocol: PROTOCOL,
  host: HOST,
  port: PORT,
});
