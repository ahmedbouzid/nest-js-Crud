import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Todos } from './todos/todos.module';
import { Todo } from './todos/todo.entity';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [path.join(process.cwd(),'dist/**/*.entity.js')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    Todos,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
