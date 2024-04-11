import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../db/entities/user.entity'; // Importa la entidad aquí
import { Category } from '../db/entities/category.entity';
import { Channel } from '../db/entities/channel.entity';
import { Logs } from '../db/entities/logs.entity';
import * as fs from 'fs';

console.log("ENV: ", process.env.DB_HOST)
const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: "notifysystem.c5eys8kue0vc.us-east-1.rds.amazonaws.com",
  port: 5432,
  username: "postgres",
  password: "*Notify123",
  database: "notifySystem",
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT),
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
  entities: [User, Category, Channel, Logs], // Añade la entidad aquí
  synchronize: true,
  ssl: {
    rejectUnauthorized: false // For production is required to add the certificate
  }
};

export default databaseConfig;
