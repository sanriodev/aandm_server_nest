import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/app-config.module';
import { MongoDatabaseProviderModule } from './provider/mongo/mongo-provider.module';
import { TaskModule } from './modules/tasklist/task.module';
import { NoteModule } from './modules/note/note.module';

@Module({
  imports: [
    AppConfigModule,
    MongoDatabaseProviderModule,
    TaskModule,
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
