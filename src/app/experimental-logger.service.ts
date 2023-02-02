import { Injectable } from '@angular/core';
import {ILogger} from "./logger";

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements ILogger {
  prefix = 'root';
  constructor() { }
  log(message: string) {
    // console.log(`${this.prefix} (experimental): ${message}` )
  }
}
