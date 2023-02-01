import {Directive, Optional, Self} from '@angular/core';
import {LoggerService} from "./logger.service";

@Directive({
  selector: '[appParent]',
  // providers: [LoggerService]
})
export class ParentDirective {

  constructor(private logger: LoggerService) {
    // this.logger.log('directive constructor')
  }

}
