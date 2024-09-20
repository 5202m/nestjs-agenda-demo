import { Injectable } from '@nestjs/common';
import { Agenda } from 'agenda';

@Injectable()
export class CrontabService {
  protected readonly agenda = new Agenda({
    db: {
      address: 'mongodb://127.0.0.1/agenda',
    },
  });

  constructor() {
    this.agenda.on('ready', () => {
      console.log('Agenda is ready to start');
      this.start();
    });
  }

  start() {
    this.agenda.start();
  }

  stop() {
    this.agenda.stop();
  }

  /**
   * 执行定时任务
   * @param name
   * @param options
   * @param handler
   */
  defineJob(name: string, job: any) {
    console.log('执行任务', job);
    this.agenda.define(name, (job) => {
      console.log('执行定时任务', job.attrs.data);
    });
  }

  /**
   * 定义定时任务
   * @param name
   * @param when
   * @param data
   */
  scheduleJob(name: string, when: string, data: any) {
    console.log('定义任务', name, when, data);
    this.agenda.schedule(when, name, data);
  }

  scheduleEmail(to: string, subject: string, text: string) {
    this.agenda.now('sendEmail', { to, subject, text });
  }
}
