import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import applicationConfig from './app.config';

const ENV_USERS_FILE_PATH = 'apps/publications/.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      // TODO: Передать список конфигураций для загрузки
      load: [applicationConfig],
      envFilePath: ENV_USERS_FILE_PATH
    }),
  ]
})
export class PostConfigModule {}
