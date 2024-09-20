import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { CrontabService } from './appModules/crontab/crontab.service';

@Injectable()
export class AppService {
  constructor(private readonly crontabService: CrontabService) {
    this.crontabService.defineJob('test.job', this.testJob.bind(this));
  }
  async getHello(): Promise<string> {
    this.crontabService.scheduleJob(
      'test.job',
      moment().add(1, 'minutes').toISOString(),
      'hello agenda',
    );
    // await this.crontabService.defineJob('test.job', this);
    return 'Hello World!';
  }

  async testJob(job: any, done: any) {
    console.log(job);
    done();
  }
}
