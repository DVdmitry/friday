import {Directive, Host} from '@angular/core';
import {LoggerService} from "./logger.service";

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {

  constructor(private logger: LoggerService) {
    // this.logger.log('ChildDirective constructor init ')
  }

}
