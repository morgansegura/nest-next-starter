import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'aws-sdk';
import rawBodyMiddleware from './utils/rawBody.middleware';
import CustomLogger from './logger/customLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(CustomLogger));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.use(cookieParser());

  const configService = app.get(ConfigService);
  config.update({
    accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
    region: configService.get('AWS_REGION'),
  });

  app.enableCors({
    origin: configService.get('FRONTEND_URL'),
    credentials: true,
  });

  app.use(rawBodyMiddleware());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest Next Starter')
    .setDescription('The Nest Next API swagger implementation')
    .setVersion('1.0')
    .addTag('Controllers')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
