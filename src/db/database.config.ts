import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Category } from './entities/category.entity';
import { Channel } from './entities/channel.entity';
import { Logs } from './entities/logs.entity';

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
  entities: [Users, Category, Channel, Logs],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false // For production is required to add the certificate
  }
};

export default databaseConfig;
