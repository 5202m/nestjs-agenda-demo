import { Injectable, OnModuleInit } from '@nestjs/common';
import * as moment from 'moment';
import { CrontabService } from './appModules/crontab/crontab.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly crontabService: CrontabService) {}

  onModuleInit() {
    this.crontabService.defineJob('test.job', this.testJob.bind(this));
  }

  async getHello(): Promise<string> {
    this.crontabService.scheduleJob(
      'test.job',
      moment().add(1, 'minutes').toISOString(),
      'hello agenda',
    );
    // await this.crontabService.defineJob('test.job', this);
    return 'Hello World! test';
  }

  async testJob(job: any, done: any) {
    console.log(job);
    done();
  }
}
