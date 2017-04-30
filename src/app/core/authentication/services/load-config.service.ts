import { Injectable } from '@angular/core';


@Injectable()
export class LoadConfigService {
 // load hard coded data to mimic an api call which will load this for you
  constructor(public Config = new UserConfiguration('test', 'tester', 1, 2)) { }
}

