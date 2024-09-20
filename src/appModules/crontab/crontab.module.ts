import { Module } from '@nestjs/common';
// import { AgendaModule } from 'nestjs-agenda';
import { CrontabService } from './crontab.service';

@Module({
  imports: [
    // AgendaModule.register({ db: { address: 'mongodb://127.0.0.1/agenda' } }),
    // AgendaModule.register({
    //   db: {
    //     address: 'mongodb://localhost:27017/agenda',
    //   },
    //   defaultJobOptions: {
    //     // 设置默认的作业选项
    //   },
    // }),
  ],
  providers: [CrontabService],
})
export class CrontabModule {}
