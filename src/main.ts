import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const appCors = {
  origin: (
    requestOrigin: string,
    callback: (err: Error | null, origin?: any) => void,
  ) => {
    callback(null, requestOrigin);
  },
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: appCors,
  });
  await app.listen(3000);
}
bootstrap();
