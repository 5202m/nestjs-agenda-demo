import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CrontabModule } from './appModules/crontab/crontab.module';
import { CrontabService } from './appModules/crontab/crontab.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CrontabService],
})
export class AppModule {}
