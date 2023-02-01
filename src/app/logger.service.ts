import { Injectable } from '@angular/core';
import {ILogger} from "./logger";

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILogger {
  prefix = 'root'

  log(message: string) {
    console.log(`${this.prefix}: ${message}`)
  }
}
