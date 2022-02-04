import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Global, Module } from '@nestjs/common';
import * as Redis from 'ioredis';

export const PUB_SUB = 'PUB_SUB';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PUB_SUB,
      useFactory: (configService: ConfigService) =>
        new RedisPubSub({
          publisher: new Redis({
            host: configService.get('REDIS_HOST'),
            port: configService.get('REDIS_PORT'),
          }),
          subscriber: new Redis({
            host: configService.get('REDIS_HOST'),
            port: configService.get('REDIS_PORT'),
          }),
          connection: {
            host: configService.get('REDIS_HOST'),
            port: configService.get('REDIS_PORT'),
          },
        }),
      inject: [ConfigService],
    },
  ],
  exports: [PUB_SUB],
})
export class PubSubModule {}
