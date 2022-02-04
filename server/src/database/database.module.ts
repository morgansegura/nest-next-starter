import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseLogger from './databaseLogger';
import { getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        url: configService.get('MONGO_URI'),
        logger: new DatabaseLogger(),
        dbName: configService.get('MONGO_DATABASE'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
        synchronize: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
